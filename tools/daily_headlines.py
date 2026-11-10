#!/usr/bin/env python3
"""Collect top-news headlines through the day; publish each day only after it ends.

Each run reads The Hindu's top-news RSS feed and adds the headline text of
today's and recent stories to a private buffer (kept in the GitHub Actions
cache, never committed). Days that have ended (before today, IST) are moved
from the buffer into daily.js, so the page is always at least one day behind.
Only headline text is kept: no links, summaries, sections, images or article
text. Videos, shorts and digests are skipped.

Run: python3 tools/daily_headlines.py [--buffer PATH] [FILE.rss]
"""
import argparse
import datetime as dt
import email.utils
import json
import pathlib
import re
import urllib.request
import xml.etree.ElementTree as ET

FEED = "https://www.thehindu.com/feeder/default.rss"
IST = dt.timezone(dt.timedelta(hours=5, minutes=30))
ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "daily.js"
SKIP_PATHS = ("/videos/", "/shorts/", "/podcast/", "/photos/")  # used only to filter, never stored
SKIP_TITLES = re.compile(r"^(morning digest|top news of the day|news from the world of)", re.I)
HEADER = ("/* Top-news headlines, published only after each day has ended, by\n"
          " * tools/daily_headlines.py. Headline text only: no links or article text.\n"
          " * Generated file; put your own notes in notes.js. */\n"
          "window.DAILY = ")


def load_daily():
    if not OUT.exists():
        return {}
    m = re.search(r"window\.DAILY\s*=\s*(\[.*\])\s*;?\s*$", OUT.read_text(encoding="utf-8"), re.S)
    return {d["date"]: d["items"] for d in json.loads(m.group(1))} if m else {}


def read_feed(path):
    if path:
        return pathlib.Path(path).read_bytes()
    req = urllib.request.Request(FEED, headers={"User-Agent": "news-paper-reading RSS reader (GitHub Actions)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def parse(xml_bytes):
    for item in ET.fromstring(xml_bytes).iter("item"):
        title = " ".join((item.findtext("title") or "").split())
        link = item.findtext("link") or ""
        try:
            day = email.utils.parsedate_to_datetime(item.findtext("pubDate")).astimezone(IST).date().isoformat()
        except (TypeError, ValueError):
            continue
        if title and not SKIP_TITLES.match(title) and not any(p in link for p in SKIP_PATHS):
            yield day, title


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--buffer", default=str(ROOT / ".headline-buffer.json"))
    ap.add_argument("feed", nargs="?", default="")
    a = ap.parse_args()
    buf_path = pathlib.Path(a.buffer)
    buf = json.loads(buf_path.read_text(encoding="utf-8")) if buf_path.exists() else {}
    daily = load_daily()
    today = dt.datetime.now(IST).date().isoformat()

    for day, title in parse(read_feed(a.feed)):
        if day in daily:  # already published; never reopen a finished day
            continue
        lst = buf.setdefault(day, [])
        if title not in lst:
            lst.append(title)

    published = []
    for day in sorted(d for d in buf if d < today):
        have = set(daily.get(day, []))
        daily[day] = daily.get(day, []) + [t for t in buf.pop(day) if t not in have]
        published.append(f"{day} ({len(daily[day])})")
    buf = {d: v for d, v in buf.items() if d >= today}

    buf_path.parent.mkdir(parents=True, exist_ok=True)
    buf_path.write_text(json.dumps(buf, ensure_ascii=False), encoding="utf-8")
    data = [{"date": k, "items": v} for k, v in sorted(daily.items(), reverse=True) if v]
    OUT.write_text(HEADER + json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print("buffered:", {d: len(v) for d, v in buf.items()}, "| published:", ", ".join(published) or "none")


if __name__ == "__main__":
    main()
