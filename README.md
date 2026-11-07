# Pathram Padikkam (പത്രം പഠിക്കാം): Learn Newspaper English

A personal, non-commercial study page for learning to read English newspaper
headlines, with Malayalam explanations.

Live page: https://amjad-ra.github.io/News-paper-reading/

## Tabs

- **Learn:** the rules of headline English (tense, dropped words, colons, quotes, stacked nouns, idioms, abbreviations), each shown with real headlines.
- **Phrases:** recurring newspaper words that actually appear in the headlines, split by type (headline verbs, linking words, courts, politics, crime, economy, idioms, abbreviations). Tap a type to see only that type; each type is a collapsible section with a short explanation. The word is highlighted in each example headline.
- **Headlines:** list and detailed (accordion) views. Filter by source (with notes / feed). Practice mode hides the Malayalam until you tap it.

## Files

- `notes.js`: headlines by newspaper date, with Malayalam meaning, notes and key words. The Headlines tab shows the key ones by default (those that use a rule or a core word).
- `guide.js`: the headline rules and their examples.
- `core.js`: the core vocabulary shown in the Phrases tab.
- `feed.js`: headlines saved by the workflow below (headline, section, link only).

## Feed workflow (manual)

`.github/workflows/headlines.yml` saves headlines from The Hindu's public RSS
feeds into `feed.js` (headline, section and link only; last 100 days). It runs
only when you press **Actions → "Save daily headlines" → Run workflow**. The
automatic daily schedule is switched off while this repository is public; see
the comment in the workflow file before switching it on.

## Notice

- Personal, non-commercial study project. Not affiliated with, endorsed by or
  connected to The Hindu or THG Publishing.
- Headlines quoted for study are © The Hindu and link to the original stories
  where available. No article text or images are stored here.
- The rules, notes and Malayalam meanings are original study aids.
- The page asks search engines not to index it.
- If you own any content here and want it removed, please open an issue.
