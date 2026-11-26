# Pathram Padikkam (പത്രം പഠിക്കാം): Learn Newspaper English

A personal, non-commercial study page for learning the **skill** of reading
English newspaper headlines, with Malayalam explanations. It is not a news
source: a headline is here because of *how it is written*, not because the
story is recent or important.

Live page: https://amjad-ra.github.io/News-paper-reading/

## Adding a headline

Only the headline is needed. Add one line to `headlines.js`, exactly as printed:

```js
  "SC questions curbs as Delhi AQI nears 400",
```

The page works out the rest by itself: which headline rules it uses (present
tense for the past, "to" for the future, dropped "is/was", a colon or quote,
"as", a comma for "and", abbreviations) and which newspaper words in it to
explain, with their Malayalam meanings.

If you want, add your own Malayalam meaning to check yourself against in
Practice mode:

```js
  ["SC questions curbs as Delhi AQI nears 400", "AQI 400-ലേക്ക് അടുക്കവേ നിയന്ത്രണങ്ങളെ സുപ്രീം കോടതി ചോദ്യം ചെയ്തു"],
```

To see what a headline teaches before adding it, or to add it in one step:

```bash
node tools/check.js "Two held as police bust fake job racket"
```

```bash
node tools/check.js --add "Two held as police bust fake job racket"
```

You can also paste any headline into the box at the top of the Practice tab.

**What makes a good headline:** it shows at least two things to learn (a rule
plus a headline word, say). Skip feature titles like "The scourge of legal
academia" and label-only lines like "Letters to the Editor".

## Tabs

- **Learn:** the rules of headline English, each with real examples, how many of your headlines use it, and a button to practise just that rule.
- **Phrases:** the recurring newspaper words that appear in your headlines, grouped by type, most repeated first.
- **Practice:** read each headline, say it in full in your head, then open it to see what to notice (highlighted in the headline), the newspaper words in it, and your Malayalam meaning if you added one. Filter by rule, shuffle, or hide the Malayalam. The box at the top reads any headline you type.

## Files

- `headlines.js`: the headlines you practise on. The only file you need to edit.
- `guide.js`: the headline rules and their examples.
- `core.js`: the newspaper words explained in Phrases and inside each headline.
- `analyze.js`: finds the rules and words in a headline (used by the page and by `tools/check.js`).

## Notice

- Personal, non-commercial study project. Not affiliated with any newspaper.
- Headlines quoted for study remain © their publishers (mostly The Hindu).
  Only headline text is kept: no article text, links or images.
- The rules, word lists and Malayalam meanings are original study aids.
- The page asks search engines not to index it.
- If you own any content here and want it removed, please open an issue.
