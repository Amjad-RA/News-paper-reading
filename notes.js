/*
 * 100 Days of The Hindu: headline notes data.
 *
 * Add one object per day to NOTES. The page renders whatever is here.
 * Each day:
 *   day      number   1 to 100
 *   date     string   "YYYY-MM-DD" (the paper's date)
 *   items    array    the headlines picked for that day
 *
 * Each item:
 *   title    string   the headline exactly as printed in The Hindu
 *   ml       string   the Malayalam meaning of the headline (short)
 *   section  string   optional, e.g. "Editorial", "National", "International"
 *   note     string   optional short note in English
 *   noteMl   string   optional short note in Malayalam
 *   words    array    optional vocabulary: [{ en: "word", ml: "അർത്ഥം" }]
 *   url      string   optional link to the article
 *
 * Example of the shape (not real data):
 *   {
 *     day: 1,
 *     date: "2026-07-30",
 *     items: [
 *       {
 *         title: "Headline as printed",
 *         ml: "തലക്കെട്ടിന്റെ മലയാളം അർത്ഥം",
 *         section: "Editorial",
 *         note: "One or two lines on what the story is about.",
 *         noteMl: "വാർത്തയുടെ ചുരുക്കം.",
 *         words: [{ en: "word", ml: "വാക്ക്" }],
 *         url: "https://www.thehindu.com/..."
 *       }
 *     ]
 *   }
 */
window.NOTES = [];
