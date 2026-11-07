#!/usr/bin/env python3
"""Save The Hindu's daily headlines (title, section, link only) into feed.js.

Reads the newspaper's public RSS feeds, which are published for feed readers.
Only the headline, its section and the link are kept: no summaries, no
article text. Set KEEP_DAYS (environment variable) to drop headlines older
than that many days; 0 or unset keeps everything.

Run: python3 scripts/fetch_headlines.py   (writes feed.js in the repo root)
"""
import datetime as dt
import email.utils
import json
import os
import pathlib
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

KEEP_DAYS = int(os.environ.get("KEEP_DAYS") or 0)  # 0 = keep everything
IST = dt.timezone(dt.timedelta(hours=5, minutes=30))
BASE = "https://www.thehindu.com"
FEEDS = {
    "Front page": "/feeder/default.rss",
    "National": "/news/national/feeder/default.rss",
    "Kerala": "/news/national/kerala/feeder/default.rss",
    "International": "/news/international/feeder/default.rss",
    "Business": "/business/feeder/default.rss",
    "Sport": "/sport/feeder/default.rss",
    "Editorial": "/opinion/editorial/feeder/default.rss",
    "Opinion": "/opinion/feeder/default.rss",
}
ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "feed.js"
HEADER = (
    "/* Daily headlines saved by scripts/fetch_headlines.py (title, section, link only).\n"
    " * Generated file: edit notes.js for your own notes, not this. */\n"
    "window.FEED = "
)


def load():
    if not OUT.exists():
        return []
    text = OUT.read_text(encoding="utf-8")
    m = re.search(r"window\.FEED\s*=\s*(\[.*\])\s*;?\s*$", text, re.S)
    return json.loads(m.group(1)) if m else []


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "news-paper-reading feed reader (GitHub Actions)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def parse(xml_bytes, section):
    out = []
    for item in ET.fromstring(xml_bytes).iter("item"):
        title = " ".join((item.findtext("title") or "").split())
        link = (item.findtext("link") or "").strip()
        pub = item.findtext("pubDate")
        if not title or not link:
            continue
        try:
            when = email.utils.parsedate_to_datetime(pub).astimezone(IST)
        except (TypeError, ValueError):
            when = dt.datetime.now(IST)
        out.append({"date": when.date().isoformat(), "title": title, "section": section, "url": link})
    return out


def main():
    days = {d["date"]: d for d in load()}
    seen = {it["url"] for d in days.values() for it in d["items"]}
    added, failed = 0, []
    for section, path in FEEDS.items():
        try:
            items = parse(fetch(BASE + path), section)
        except Exception as e:  # one bad feed should not stop the rest
            failed.append(f"{section}: {e}")
            continue
        for it in items:
            if it["url"] in seen:
                continue
            seen.add(it["url"])
            day = days.setdefault(it.pop("date"), {"items": []})
            day["items"].append(it)
            added += 1
    cutoff = (dt.datetime.now(IST).date() - dt.timedelta(days=KEEP_DAYS)).isoformat() if KEEP_DAYS > 0 else ""
    feed = [{"date": k, "items": v["items"]} for k, v in sorted(days.items(), reverse=True) if k >= cutoff]
    OUT.write_text(HEADER + json.dumps(feed, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"added {added} headlines; {sum(len(d['items']) for d in feed)} kept over {len(feed)} days")
    for f in failed:
        print("feed failed:", f, file=sys.stderr)
    if failed and len(failed) == len(FEEDS):
        sys.exit(1)


if __name__ == "__main__":
    main()
