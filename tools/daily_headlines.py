#!/usr/bin/env python3
"""Save yesterday's top-news headlines into daily.js (headline text only).

Runs just after midnight IST, reads The Hindu's top-news RSS feed and keeps
only the headline text of stories published on the previous day (IST). No
links, summaries, sections, images or article text are stored, so the page is
always one day behind and holds nothing but headlines.

Run: python3 tools/daily_headlines.py            (yesterday, IST)
     python3 tools/daily_headlines.py FILE.rss   (parse a saved feed instead)
"""
import datetime as dt
import email.utils
import json
import pathlib
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

FEED = "https://www.thehindu.com/feeder/default.rss"
IST = dt.timezone(dt.timedelta(hours=5, minutes=30))
OUT = pathlib.Path(__file__).resolve().parent.parent / "daily.js"
SKIP_PATHS = ("/videos/", "/shorts/", "/podcast/", "/photos/")  # used only to filter, never stored
SKIP_TITLES = re.compile(r"^(morning digest|top news of the day|news from the world of)", re.I)
HEADER = ("/* Yesterday's top-news headlines, saved after the day ends by\n"
          " * tools/daily_headlines.py. Headline text only: no links or article text.\n"
          " * Generated file; put your own notes in notes.js. */\n"
          "window.DAILY = ")


def load():
    if not OUT.exists():
        return []
    m = re.search(r"window\.DAILY\s*=\s*(\[.*\])\s*;?\s*$", OUT.read_text(encoding="utf-8"), re.S)
    return json.loads(m.group(1)) if m else []


def read_feed(arg):
    if arg:
        return pathlib.Path(arg).read_bytes()
    req = urllib.request.Request(FEED, headers={"User-Agent": "news-paper-reading RSS reader (GitHub Actions)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def main():
    yesterday = (dt.datetime.now(IST).date() - dt.timedelta(days=1)).isoformat()
    titles = []
    for item in ET.fromstring(read_feed(sys.argv[1] if len(sys.argv) > 1 else "")).iter("item"):
        title = " ".join((item.findtext("title") or "").split())
        link = item.findtext("link") or ""
        try:
            day = email.utils.parsedate_to_datetime(item.findtext("pubDate")).astimezone(IST).date().isoformat()
        except (TypeError, ValueError):
            continue
        if day != yesterday or not title or SKIP_TITLES.match(title) or any(p in link for p in SKIP_PATHS):
            continue
        titles.append(title)

    days = {d["date"]: d["items"] for d in load()}
    have = set(days.get(yesterday, []))
    days[yesterday] = days.get(yesterday, []) + [t for t in dict.fromkeys(titles) if t not in have]
    if not days[yesterday]:
        del days[yesterday]
    data = [{"date": k, "items": v} for k, v in sorted(days.items(), reverse=True)]
    OUT.write_text(HEADER + json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"{yesterday}: {len(titles)} headlines in feed; {sum(len(d['items']) for d in data)} saved in total")


if __name__ == "__main__":
    main()
