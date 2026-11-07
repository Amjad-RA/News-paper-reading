/*
 * 100 Days of The Hindu: headline notes data.
 *
 * Add one object per day to NOTES. The page renders whatever is here.
 * Each day:
 *   day      number   1 to 100
 *   date     string   "YYYY-MM-DD" (the paper's date)
 *   edition  string   optional, e.g. "Kozhikode city edition · Front page"
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
window.NOTES = [
  {
    day: 1,
    date: "2026-11-07",
    edition: "Kozhikode city edition · Front page",
    items: [
      {
        title: "How a love story developed into a deep belonging to India",
        ml: "ഒരു പ്രണയകഥ എങ്ങനെ ഇന്ത്യയോടുള്ള ആഴമേറിയ ആത്മബന്ധമായി വളർന്നു",
        section: "Exclusive",
        note: "N. Ram interviews Sonia Gandhi on her new book, Belonging: A Journey of Love, about how she came to feel that India is home.",
        noteMl: "സോണിയ ഗാന്ധിയുടെ പുതിയ പുസ്തകത്തെക്കുറിച്ച് എൻ. റാമുമായുള്ള അഭിമുഖം.",
        words: [
          { en: "exclusive", ml: "ഈ പത്രത്തിൽ മാത്രം വരുന്ന വാർത്ത" },
          { en: "a sense of belonging", ml: "ഇത് എന്റേതാണ് എന്ന തോന്നൽ, ആത്മബന്ധം" }
        ]
      },
      {
        title: "Resubmit enumeration form: ECI to ousted voters",
        ml: "എന്യൂമറേഷൻ ഫോം വീണ്ടും സമർപ്പിക്കുക: പട്ടികയിൽ നിന്ന് പുറത്തായ വോട്ടർമാരോട് തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ",
        section: "National",
        note: "Voters marked Absent, Shifted, Dead or Duplicate (ASDD) in the special intensive revision (SIR) in seven States/UTs can get back on the roll by resubmitting the form. Lists of excluded voters will be shown at polling stations.",
        noteMl: "SIR-ൽ പുറത്തായവർക്ക് ഫോം വീണ്ടും നൽകി വോട്ടർ പട്ടികയിൽ തിരികെ കയറാം.",
        words: [
          { en: "ousted", ml: "പുറത്താക്കപ്പെട്ട" },
          { en: "enumeration", ml: "കണക്കെടുപ്പ്" },
          { en: "electoral roll", ml: "വോട്ടർ പട്ടിക" },
          { en: "X to Y (headline style)", ml: "X, Y-യോട് പറയുന്നു / ആവശ്യപ്പെടുന്നു" }
        ]
      },
      {
        title: "OBC creamy layer ruling will not alter past allocations: SC",
        ml: "OBC ക്രീമി ലെയർ വിധി മുൻപ് നടന്ന നിയമനങ്ങളെ ബാധിക്കില്ല: സുപ്രീം കോടതി",
        section: "National",
        note: "The Supreme Court clarified that its March 11, 2026 judgment on how the OBC creamy layer is worked out does not reopen selections and appointments already made.",
        noteMl: "വിധിക്ക് മുൻകാല പ്രാബല്യമില്ല; ഇതിനകം നടന്ന നിയമനങ്ങൾ മാറില്ല.",
        words: [
          { en: "creamy layer", ml: "സംവരണ വിഭാഗത്തിലെ സാമ്പത്തികമായി മുന്നോക്കമുള്ളവർ" },
          { en: "ruling", ml: "കോടതി വിധി" },
          { en: "retrospective", ml: "മുൻകാല പ്രാബല്യമുള്ള" },
          { en: ": SC (headline style)", ml: "സുപ്രീം കോടതി പറഞ്ഞത്" }
        ]
      },
      {
        title: "Excise Commissioner shifted amid differences with Minister",
        ml: "മന്ത്രിയുമായുള്ള ഭിന്നതയ്ക്കിടെ എക്സൈസ് കമ്മീഷണറെ മാറ്റി",
        section: "Kerala",
        note: "Kerala's Excise Commissioner was moved out a few days after differences with Excise Minister M. Liju came to light.",
        noteMl: "എക്സൈസ് മന്ത്രി എം. ലിജുവുമായുള്ള അഭിപ്രായഭിന്നതയ്ക്ക് പിന്നാലെ സ്ഥലംമാറ്റം.",
        words: [
          { en: "shifted", ml: "സ്ഥലം മാറ്റി" },
          { en: "amid", ml: "...നിടയിൽ" },
          { en: "differences", ml: "അഭിപ്രായ ഭിന്നത" }
        ]
      },
      {
        title: "As high as 31% ethanol found in petrol samples",
        ml: "പെട്രോൾ സാമ്പിളുകളിൽ 31% വരെ എഥനോൾ കണ്ടെത്തി",
        section: "National",
        note: "Tests in Karnataka found up to 31% ethanol in petrol sold by major oil companies, above the prescribed 20% blend.",
        noteMl: "അനുവദനീയമായ 20%-നേക്കാൾ കൂടുതൽ എഥനോൾ.",
        words: [
          { en: "as high as", ml: "...വരെ ഉയർന്ന" },
          { en: "prescribed", ml: "നിശ്ചയിച്ചിട്ടുള്ള" },
          { en: "blend", ml: "മിശ്രിതം" }
        ]
      },
      {
        title: "Pinarayi asks CM to disclose files on power offers",
        ml: "വൈദ്യുതി ഓഫറുകളുടെ ഫയലുകൾ പുറത്തുവിടണമെന്ന് പിണറായി മുഖ്യമന്ത്രിയോട്",
        section: "Kerala",
        note: "Leader of the Opposition Pinarayi Vijayan accused the government of creating an artificial power crisis and asked the Chief Minister to make public the files on power supply offers.",
        noteMl: "കൃത്രിമ വൈദ്യുതി പ്രതിസന്ധി സൃഷ്ടിക്കുന്നുവെന്ന് പ്രതിപക്ഷ നേതാവിന്റെ ആരോപണം.",
        words: [
          { en: "disclose", ml: "വെളിപ്പെടുത്തുക" },
          { en: "artificial crisis", ml: "കൃത്രിമ പ്രതിസന്ധി" },
          { en: "Leader of the Opposition", ml: "പ്രതിപക്ഷ നേതാവ്" }
        ]
      },
      {
        title: "SC contempt notice to KPCC office-bearers",
        ml: "കെപിസിസി ഭാരവാഹികൾക്ക് സുപ്രീം കോടതിയുടെ കോടതിയലക്ഷ്യ നോട്ടീസ്",
        section: "Kerala",
        note: "The Supreme Court sought replies from KPCC office-bearers on a plea to start contempt proceedings over a post against Chief Justice of India Surya Kant.",
        noteMl: "ചീഫ് ജസ്റ്റിസിനെതിരായ പോസ്റ്റിന്റെ പേരിൽ.",
        words: [
          { en: "contempt (of court)", ml: "കോടതിയലക്ഷ്യം" },
          { en: "office-bearers", ml: "ഭാരവാഹികൾ" },
          { en: "plea", ml: "ഹർജി" }
        ]
      },
      {
        title: "Jharkhand HC quashes JSSC-CGL cancellation",
        ml: "JSSC-CGL പരീക്ഷ റദ്ദാക്കിയ നടപടി ജാർഖണ്ഡ് ഹൈക്കോടതി അസാധുവാക്കി",
        section: "National",
        note: "The High Court set aside the cancellation of the Jharkhand Staff Selection Commission's Combined Graduate Level exam.",
        noteMl: "റദ്ദാക്കൽ തന്നെ കോടതി റദ്ദാക്കി.",
        words: [
          { en: "quash", ml: "(കോടതി) റദ്ദാക്കുക, അസാധുവാക്കുക" },
          { en: "recruitment row", ml: "നിയമന വിവാദം" }
        ]
      },
      {
        title: "India-born Nithya Raman elected Los Angeles mayor",
        ml: "ഇന്ത്യയിൽ ജനിച്ച നിത്യ രാമൻ ലോസ് ആഞ്ചലസ് മേയറായി തിരഞ്ഞെടുക്കപ്പെട്ടു",
        section: "World",
        note: "Described as a historic win: an India-born politician becomes mayor of Los Angeles.",
        noteMl: "ചരിത്ര വിജയം.",
        words: [
          { en: "India-born", ml: "ഇന്ത്യയിൽ ജനിച്ച" },
          { en: "elected", ml: "തിരഞ്ഞെടുക്കപ്പെട്ടു (headline-ൽ 'is/was' ഒഴിവാക്കും)" }
        ]
      },
      {
        title: "SC questions curbs as Delhi AQI nears 400",
        ml: "ഡൽഹിയിലെ വായു ഗുണനിലവാര സൂചിക 400-ലേക്ക് അടുക്കവേ നിയന്ത്രണങ്ങളെ ചോദ്യം ചെയ്ത് സുപ്രീം കോടതി",
        section: "National",
        note: "With Delhi's air quality close to 'severe', the Supreme Court asked whether the pollution curbs are working ('failed tools').",
        noteMl: "മലിനീകരണ നിയന്ത്രണ നടപടികൾ ഫലിക്കുന്നില്ലെന്ന വിമർശനം.",
        words: [
          { en: "curbs", ml: "നിയന്ത്രണങ്ങൾ" },
          { en: "AQI (Air Quality Index)", ml: "വായു ഗുണനിലവാര സൂചിക" },
          { en: "nears", ml: "...നോട് അടുക്കുന്നു" }
        ]
      },
      {
        title: "The Siang dam and a threatened homeland",
        ml: "സിയാങ് അണക്കെട്ടും ഭീഷണി നേരിടുന്ന ഒരു ജന്മനാടും",
        section: "Ground Zero",
        note: "A ground report from Arunachal Pradesh: protests grow over land, livelihoods and consent around the proposed Siang dam.",
        noteMl: "ഭൂമി, ഉപജീവനം, സമ്മതം എന്നിവയെച്ചൊല്ലി പ്രതിഷേധം ശക്തമാകുന്നു.",
        words: [
          { en: "threatened", ml: "ഭീഷണി നേരിടുന്ന" },
          { en: "livelihood", ml: "ഉപജീവന മാർഗം" },
          { en: "consent", ml: "സമ്മതം" }
        ]
      },
      {
        title: "Men in Blue look to make it two in a row",
        ml: "തുടർച്ചയായ രണ്ടാം ജയം ലക്ഷ്യമിട്ട് ഇന്ത്യൻ ടീം",
        section: "Sport",
        note: "India's cricket team, playing in Wellington, is aiming for a second straight win.",
        noteMl: "'Men in Blue' = നീല ജേഴ്സിയണിയുന്ന ഇന്ത്യൻ ക്രിക്കറ്റ് ടീം.",
        words: [
          { en: "Men in Blue", ml: "ഇന്ത്യൻ ക്രിക്കറ്റ് ടീം" },
          { en: "look to", ml: "ലക്ഷ്യമിടുന്നു" },
          { en: "two in a row", ml: "തുടർച്ചയായി രണ്ട്" }
        ]
      }
    ]
  }
];
