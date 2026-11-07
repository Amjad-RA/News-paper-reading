# 100 Days of The Hindu

A page for learning to read English newspapers, with Malayalam help. Live at https://amjad-ra.github.io/News-paper-reading/

- **Learn:** the rules of headline English (tense, dropped words, colons, quotes, stacked nouns, idioms, abbreviations), each shown with real headlines from The Hindu.
- **Phrases:** recurring newspaper words that actually appear in your headlines, split by type (headline verbs, linking words, courts, politics, crime, economy, idioms, abbreviations). Tap a type chip to see only that type; each type is a collapsible section with a short explanation. The word is highlighted in each example headline.
- **Headlines:** every headline as a list or as accordions with a short note, key phrases and the rules it uses. **Practice** hides the Malayalam until you tap it.

## Files

- `notes.js`: headlines by newspaper date, with Malayalam meaning, notes and key words. The Headlines tab shows the key ones by default (those that use a rule or a core word).
- `guide.js`: the headline rules and their examples.
- `core.js`: the core vocabulary shown in the Phrases tab.

## Daily headlines (automatic)

`.github/workflows/headlines.yml` runs every morning (06:47 IST) and saves the
day's headlines from The Hindu's public RSS feeds into `feed.js`, keeping the
last 100 days. Only the headline, section and link are saved. These headlines
appear in the Headlines tab and are counted in the Phrases tab. To run it now:
GitHub → Actions → "Save daily headlines" → Run workflow.
