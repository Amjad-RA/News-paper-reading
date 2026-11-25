/*
 * Pathram Padikkam: headline notes data.
 *
 * Add one object per newspaper date to NOTES, in any order. The page shows
 * every headline in one list, newest date first.
 * Each day:
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
    date: "2026-11-05",
    edition: "Kozhikode city edition · Front page",
    items: [
      {
        title: "Democrats seize Congress in major setback to Trump",
        ml: "ട്രംപിന് വൻ തിരിച്ചടി; യുഎസ് കോൺഗ്രസ് ഡെമോക്രാറ്റുകൾ പിടിച്ചെടുത്തു",
        section: "World",
        note: "In the U.S. midterm elections the Democrats won majorities in both the House (at least 228 of 435 seats) and the Senate (54 of 100), flipping long-held Republican seats. Trump struck a conciliatory note, saying the results were 'not a hit on him'.",
        noteMl: "ഇടക്കാല തിരഞ്ഞെടുപ്പിൽ സഭയിലും സെനറ്റിലും ഡെമോക്രാറ്റുകൾക്ക് ഭൂരിപക്ഷം.",
        words: [
          { en: "seize", ml: "പിടിച്ചെടുക്കുക" },
          { en: "setback", ml: "തിരിച്ചടി" },
          { en: "flips seats", ml: "എതിരാളിയുടെ സീറ്റുകൾ സ്വന്തമാക്കുക" },
          { en: "conciliatory", ml: "അനുരഞ്ജനപരമായ" },
          { en: "midterms", ml: "ഇടക്കാല തിരഞ്ഞെടുപ്പ്" }
        ]
      },
      {
        title: "Agniveers get option for service extension",
        ml: "അഗ്നിവീറുകൾക്ക് സേവനകാലം നീട്ടാൻ അവസരം",
        section: "National",
        note: "The Union Cabinet approved an extra two-year engagement for Agniveers: 25% of each batch still become regular soldiers, and the remaining 75% can now choose to serve two more years.",
        noteMl: "അഗ്നിപഥ് പദ്ധതിയിൽ മാറ്റം.",
        words: [
          { en: "option", ml: "തിരഞ്ഞെടുക്കാനുള്ള അവസരം" },
          { en: "extension", ml: "നീട്ടൽ" },
          { en: "engagement period", ml: "സേവന കാലാവധി" }
        ]
      },
      {
        title: "Prithviraj, Kunchacko Boban Forest dept. brand ambassadors",
        ml: "പൃഥ്വിരാജും കുഞ്ചാക്കോ ബോബനും വനംവകുപ്പിന്റെ ബ്രാൻഡ് അംബാസഡർമാർ",
        section: "Kerala",
        note: "The two actors will promote forest conservation, wildlife protection and public participation in environmental work, with a focus on children and young people.",
        noteMl: "വനസംരക്ഷണ ബോധവൽക്കരണം.",
        words: [
          { en: "brand ambassador", ml: "പ്രചാരണ മുഖം" },
          { en: "conservation", ml: "സംരക്ഷണം" }
        ]
      },
      {
        title: "In setback to govt., HC reinstates Milma union dissolved over Sabarimala ghee row",
        ml: "സർക്കാരിന് തിരിച്ചടി; ശബരിമല നെയ്യ് വിവാദത്തിൽ പിരിച്ചുവിട്ട മിൽമ യൂണിയനെ ഹൈക്കോടതി പുനഃസ്ഥാപിച്ചു",
        section: "Kerala",
        note: "A Division Bench quashed the Registrar's order dissolving the managing committee of Milma's Thiruvananthapuram Regional Union over alleged misappropriation in ghee supplied to Sabarimala, saying the action lacked proper material and a show-cause notice.",
        noteMl: "നടപടിക്രമം പാലിച്ചില്ലെന്ന് കോടതി.",
        words: [
          { en: "reinstates", ml: "പുനഃസ്ഥാപിക്കുന്നു" },
          { en: "dissolved", ml: "പിരിച്ചുവിട്ട" },
          { en: "misappropriation", ml: "ദുരുപയോഗം, തിരിമറി" },
          { en: "show-cause notice", ml: "കാരണം കാണിക്കൽ നോട്ടീസ്" }
        ]
      },
      {
        title: "Railway tracks turn fatal as train knocks down tiger on Kollam-Shencottah route",
        ml: "കൊല്ലം-ചെങ്കോട്ട പാതയിൽ ട്രെയിൻ ഇടിച്ച് കടുവ ചത്തു; റെയിൽപ്പാളം മരണക്കെണിയാകുന്നു",
        section: "Kerala",
        note: "The Palaruvi Express hit and killed a male tiger around 2 a.m. near Bhagavathipuram. The line runs through the fragile Western Ghats, where wildlife often crosses the tracks.",
        noteMl: "പശ്ചിമഘട്ടത്തിലൂടെയുള്ള പാതയിൽ വന്യജീവി അപകടങ്ങൾ.",
        words: [
          { en: "turn fatal", ml: "മാരകമാകുന്നു" },
          { en: "knocks down", ml: "ഇടിച്ചുവീഴ്ത്തുന്നു" },
          { en: "carcass", ml: "ജഡം (മൃഗം)" }
        ]
      },
      {
        title: "Draft report on Labour Codes moots higher minimum wages, wider eligibility for bonus",
        ml: "തൊഴിൽ കോഡുകളെക്കുറിച്ചുള്ള കരട് റിപ്പോർട്ട് ഉയർന്ന മിനിമം വേതനവും കൂടുതൽ പേർക്ക് ബോണസും നിർദേശിക്കുന്നു",
        section: "Kerala",
        note: "A draft report handed to the Chief Minister on framing Kerala's rules under the four Labour Codes recommends higher minimum wages, bonus for more workers and free medical check-ups for those in hazardous jobs.",
        noteMl: "തൊഴിലാളികൾക്ക് കൂടുതൽ ആനുകൂല്യങ്ങൾ.",
        words: [
          { en: "moots", ml: "നിർദേശിക്കുന്നു, മുന്നോട്ടുവെക്കുന്നു" },
          { en: "draft", ml: "കരട്" },
          { en: "eligibility", ml: "അർഹത" }
        ]
      },
      {
        title: "Back to work",
        ml: "വീണ്ടും ജോലിയിലേക്ക്",
        section: "Photo",
        note: "Fishermen at Kothapatnam in Andhra Pradesh's Prakasam district get ready to go back to sea after repairing boats damaged during a cyclone.",
        noteMl: "ചുഴലിക്കാറ്റിന് ശേഷം മത്സ്യത്തൊഴിലാളികൾ കടലിലേക്ക്.",
        words: [
          { en: "venture", ml: "സാഹസികമായി ഇറങ്ങുക" }
        ]
      },
      {
        title: "Satheesan defends power purchase choice",
        ml: "വൈദ്യുതി വാങ്ങൽ തീരുമാനത്തെ സതീശൻ ന്യായീകരിക്കുന്നു",
        section: "Kerala",
        note: "Chief Minister V.D. Satheesan said the government chose power from GNA Energy over Himachal Pradesh's offer to avoid an extra liability of ₹2,232 crore.",
        noteMl: "(അടുത്ത ദിവസം ഈ കണക്ക് ചോദ്യം ചെയ്യപ്പെട്ടു.)",
        words: [
          { en: "defends", ml: "ന്യായീകരിക്കുന്നു" },
          { en: "avert", ml: "ഒഴിവാക്കുക" },
          { en: "liability", ml: "ബാധ്യത" }
        ]
      },
      {
        title: "CPI(M), Congress lock horns over liquor licences",
        ml: "മദ്യ ലൈസൻസിനെച്ചൊല്ലി സിപിഐ(എം)-കോൺഗ്രസ് പോര്",
        section: "Kerala",
        note: "The parties are sparring over whether the previous LDF or the current UDF government let excise officials grant bar licences without ministerial sanction.",
        noteMl: "ബാർ ലൈസൻസ് വിവാദം.",
        words: [
          { en: "lock horns", ml: "കൊമ്പുകോർക്കുക, ഏറ്റുമുട്ടുക" },
          { en: "free rein", ml: "തടസ്സമില്ലാത്ത സ്വാതന്ത്ര്യം" }
        ]
      },
      {
        title: "Hockey star's Olympic gold stolen in Bengaluru",
        ml: "ഹോക്കി താരത്തിന്റെ ഒളിമ്പിക് സ്വർണമെഡൽ ബെംഗളൂരുവിൽ മോഷണം പോയി",
        section: "National",
        note: "A hockey player's prized Olympic gold medal was stolen in Bengaluru.",
        noteMl: "വിലപ്പെട്ട സമ്പാദ്യം നഷ്ടമായി.",
        words: [
          { en: "prized possession", ml: "ഏറ്റവും വിലമതിക്കുന്ന സ്വത്ത്" }
        ]
      },
      {
        title: "Falling fertility rate makes 2-child norms outdated: SC",
        ml: "കുറയുന്ന ജനനനിരക്ക് രണ്ട് കുട്ടി നിബന്ധനയെ കാലഹരണപ്പെട്ടതാക്കുന്നു: സുപ്രീം കോടതി",
        section: "National",
        note: "The Supreme Court observed that with fertility falling, rules that penalise people for having more than two children no longer fit India's demographic transition.",
        noteMl: "ജനസംഖ്യാ മാറ്റം.",
        words: [
          { en: "fertility rate", ml: "ജനനനിരക്ക്" },
          { en: "norms", ml: "നിബന്ധനകൾ" },
          { en: "outdated", ml: "കാലഹരണപ്പെട്ട" },
          { en: "demographic transition", ml: "ജനസംഖ്യാ ഘടനയിലെ മാറ്റം" }
        ]
      },
      {
        title: "Do not fear prosecution, SC tells excluded voters",
        ml: "പ്രോസിക്യൂഷനെ ഭയക്കേണ്ട എന്ന് പട്ടികയിൽ നിന്ന് ഒഴിവാക്കപ്പെട്ട വോട്ടർമാരോട് സുപ്രീം കോടതി",
        section: "National",
        note: "On the insistence that excluded voters file Form 6, the Supreme Court reassured them that they need not fear being prosecuted.",
        noteMl: "ഫോം 6 സംബന്ധിച്ച ആശങ്ക.",
        words: [
          { en: "prosecution", ml: "ക്രിമിനൽ നടപടി, വിചാരണ" },
          { en: "excluded", ml: "ഒഴിവാക്കപ്പെട്ട" }
        ]
      },
      {
        title: "Public spaces and democratic citizenship",
        ml: "പൊതുഇടങ്ങളും ജനാധിപത്യ പൗരത്വവും",
        section: "Opinion",
        note: "An opinion piece on protest restrictions: it argues that the historical link between public spaces and democratic citizenship is being undermined.",
        noteMl: "പ്രതിഷേധങ്ങൾക്കുള്ള നിയന്ത്രണങ്ങൾ.",
        words: [
          { en: "undermined", ml: "ദുർബലപ്പെടുത്തപ്പെടുന്നു" },
          { en: "citizenship", ml: "പൗരത്വം" }
        ]
      },
      {
        title: "Pacers and Kohli give Men in Blue the lead",
        ml: "പേസർമാരുടെയും കോലിയുടെയും മികവിൽ ഇന്ത്യക്ക് ലീഡ്",
        section: "Sport",
        note: "A perfect start for India: the fast bowlers and Virat Kohli put the team ahead in the series.",
        noteMl: "പരമ്പരയിൽ ഇന്ത്യ മുന്നിൽ.",
        words: [
          { en: "pacers", ml: "ഫാസ്റ്റ് ബൗളർമാർ" },
          { en: "give the lead", ml: "മുന്നിലെത്തിക്കുക" }
        ]
      }
    ]
  },
  {
    date: "2026-11-06",
    edition: "Kozhikode city edition · Pages 1, 4–7",
    items: [
      {
        title: "Summary revision to begin in 6 States, U.T.s",
        ml: "6 സംസ്ഥാനങ്ങളിലും കേന്ദ്രഭരണ പ്രദേശങ്ങളിലും വോട്ടർ പട്ടികയുടെ സംക്ഷിപ്ത പുതുക്കൽ ആരംഭിക്കുന്നു",
        section: "National",
        note: "The Election Commission announced the annual special summary revision (SSR) of electoral rolls in six States/UTs where the SIR is over, to enrol eligible voters, especially first-timers. Giving Aadhaar details in Forms 6 and 8 stays voluntary.",
        noteMl: "പുതിയ വോട്ടർമാരെ ചേർക്കാനുള്ള വാർഷിക പുതുക്കൽ; ആധാർ നൽകുന്നത് നിർബന്ധമല്ല.",
        words: [
          { en: "summary revision", ml: "സംക്ഷിപ്ത പുതുക്കൽ (വോട്ടർ പട്ടിക)" },
          { en: "enrol", ml: "പേര് ചേർക്കുക" },
          { en: "first-timers", ml: "ആദ്യമായി വോട്ട് ചെയ്യുന്നവർ" },
          { en: "voluntary", ml: "സ്വമേധയാ, നിർബന്ധമില്ലാത്ത" }
        ]
      },
      {
        title: "24-hour rule starts from detention: SC",
        ml: "24 മണിക്കൂർ നിയമം തടഞ്ഞുവെക്കുന്ന നിമിഷം മുതൽ തുടങ്ങും: സുപ്രീം കോടതി",
        section: "National",
        note: "The Supreme Court held that 'arrest' begins the moment an official touches a person to restrain their liberty, so the 24-hour limit to produce them before a magistrate starts from that very second.",
        noteMl: "അറസ്റ്റിലായ ആളെ 24 മണിക്കൂറിനകം മജിസ്ട്രേറ്റിന് മുന്നിൽ ഹാജരാക്കണം; സമയം തുടങ്ങുന്നത് പിടികൂടുന്ന നിമിഷം മുതൽ.",
        words: [
          { en: "detention", ml: "തടഞ്ഞുവെക്കൽ, കസ്റ്റഡി" },
          { en: "restrain", ml: "തടയുക" },
          { en: "liberty", ml: "സ്വാതന്ത്ര്യം" },
          { en: "produce before a magistrate", ml: "മജിസ്ട്രേറ്റിന് മുന്നിൽ ഹാജരാക്കുക" }
        ]
      },
      {
        title: "15th Five Year Plan to be in 'project mode'",
        ml: "15-ാം പഞ്ചവത്സര പദ്ധതി 'പ്രോജക്ട് മോഡിൽ'",
        section: "Kerala",
        note: "Kerala's 15th Plan (2027–2032) will be prepared project by project, aiming to raise the State's GSDP from ₹16 lakh crore to ₹28 lakh crore, about 7% growth a year.",
        noteMl: "സംസ്ഥാന ആഭ്യന്തര ഉത്പാദനം ₹28 ലക്ഷം കോടിയാക്കുക ലക്ഷ്യം.",
        words: [
          { en: "Five Year Plan", ml: "പഞ്ചവത്സര പദ്ധതി" },
          { en: "GSDP", ml: "സംസ്ഥാന ആഭ്യന്തര ഉത്പാദനം" },
          { en: "a departure from", ml: "...ൽ നിന്നുള്ള വ്യതിചലനം, മാറ്റം" }
        ]
      },
      {
        title: "No compromise on safety aspects: AERB chief",
        ml: "സുരക്ഷാ കാര്യങ്ങളിൽ വിട്ടുവീഴ്ചയില്ല: AERB മേധാവി",
        section: "National",
        note: "Atomic Energy Regulatory Board chairperson A.K. Balasubramanian said safety will not be compromised as private players enter India's nuclear energy sector.",
        noteMl: "ആണവോർജ മേഖലയിലേക്ക് സ്വകാര്യ കമ്പനികൾ വരുന്നതിലെ ആശങ്കകൾക്ക് മറുപടി.",
        words: [
          { en: "compromise", ml: "വിട്ടുവീഴ്ച" },
          { en: "allay concerns", ml: "ആശങ്കകൾ ദൂരീകരിക്കുക" },
          { en: "regulatory", ml: "നിയന്ത്രണ" }
        ]
      },
      {
        title: "Nedumbassery crash: car's speed put at 162 kmph",
        ml: "നെടുമ്പാശ്ശേരി അപകടം: കാറിന്റെ വേഗം മണിക്കൂറിൽ 162 കി.മീ. എന്ന് കണക്കാക്കി",
        section: "Kerala",
        note: "A technical report says the luxury car that mowed down three youngsters at Nedumbassery last month was doing 162 kmph five seconds before the crash.",
        noteMl: "മൂന്ന് യുവാക്കളുടെ മരണത്തിനിടയാക്കിയ അപകടം.",
        words: [
          { en: "put at", ml: "...എന്ന് കണക്കാക്കി" },
          { en: "mowed down", ml: "ഇടിച്ചുവീഴ്ത്തി" }
        ]
      },
      {
        title: "No chopper deal was pending when CM took special flight, SPC tells Lok Ayukta",
        ml: "മുഖ്യമന്ത്രി പ്രത്യേക വിമാനയാത്ര നടത്തുമ്പോൾ ഹെലികോപ്റ്റർ കരാർ നിലവിലുണ്ടായിരുന്നില്ലെന്ന് സംസ്ഥാന പോലീസ് മേധാവി ലോകായുക്തയോട്",
        section: "Kerala",
        note: "State Police Chief Ravada Chandrasekhar told the Lok Ayukta that no request to extend the helicopter service was pending when Chief Minister V.D. Satheesan flew to oversee relief in rain-hit Malappuram; the old agreement had ended on September 19, 2026.",
        noteMl: "ഹെലികോപ്റ്റർ യാത്രയെക്കുറിച്ചുള്ള പരാതിയിൽ ലോകായുക്തയ്ക്ക് വിശദീകരണം.",
        words: [
          { en: "chopper", ml: "ഹെലികോപ്റ്റർ (headline ശൈലി)" },
          { en: "pending", ml: "തീർപ്പാകാത്ത" },
          { en: "SPC (State Police Chief)", ml: "സംസ്ഥാന പോലീസ് മേധാവി" },
          { en: "baseless", ml: "അടിസ്ഥാനരഹിതം" }
        ]
      },
      {
        title: "'Zero tolerance against violence on campuses'",
        ml: "'ക്യാമ്പസുകളിലെ അക്രമത്തോട് ഒരു തരത്തിലുള്ള സഹിഷ്ണുതയുമില്ല'",
        section: "Kerala",
        note: "Higher Education Minister Roji M. John said the government will not allow violence on campuses, after SFI activists suspended at Sree Sankaracharya University staged a protest.",
        noteMl: "ഉദ്ധരണി ചിഹ്നം = ഇത് ഒരാൾ പറഞ്ഞ വാക്കുകളാണ്.",
        words: [
          { en: "zero tolerance", ml: "ഒട്ടും അനുവദിക്കില്ല" },
          { en: "'quotes' in a headline", ml: "ആരോ പറഞ്ഞത്, പത്രത്തിന്റെ അഭിപ്രായമല്ല" }
        ]
      },
      {
        title: "Staff union criticises move to 'destroy PSC'",
        ml: "'പിഎസ്‌സിയെ തകർക്കാനുള്ള' നീക്കത്തെ ജീവനക്കാരുടെ സംഘടന വിമർശിക്കുന്നു",
        section: "Kerala",
        note: "The Kerala PSC Employees Union protested at the Secretariat against the inquiry into alleged irregularities in some exams, calling it an attempt to destroy the PSC.",
        noteMl: "പരീക്ഷാ ക്രമക്കേട് അന്വേഷണത്തിനെതിരെ പ്രതിഷേധം.",
        words: [
          { en: "move", ml: "നീക്കം, നടപടി" },
          { en: "discrepancies", ml: "പൊരുത്തക്കേടുകൾ" },
          { en: "slanderous", ml: "അപകീർത്തികരമായ" }
        ]
      },
      {
        title: "Cheranalloor car crash: High Court grants anticipatory bail to judge",
        ml: "ചേരാനല്ലൂർ കാർ അപകടം: ജഡ്ജിക്ക് ഹൈക്കോടതി മുൻകൂർ ജാമ്യം അനുവദിച്ചു",
        section: "Kerala",
        note: "The High Court granted anticipatory bail to a judicial officer whose minor son was allegedly driving in the crash that killed a 55-year-old motorist at Cheranalloor, Kochi, on October 25.",
        noteMl: "പ്രായപൂർത്തിയാകാത്ത മകൻ ഓടിച്ച കാർ ഇടിച്ച് ഒരാൾ മരിച്ച കേസ്.",
        words: [
          { en: "anticipatory bail", ml: "മുൻകൂർ ജാമ്യം" },
          { en: "minor", ml: "പ്രായപൂർത്തിയാകാത്തയാൾ" },
          { en: "allegedly", ml: "ആരോപിക്കപ്പെടുന്നത് പ്രകാരം" }
        ]
      },
      {
        title: "Saudi Arabia warns of danger in oil hub",
        ml: "എണ്ണ കേന്ദ്രത്തിൽ അപകടഭീഷണിയെന്ന് സൗദി അറേബ്യയുടെ മുന്നറിയിപ്പ്",
        section: "World",
        note: "A warning linked to Houthi attacks in the region.",
        noteMl: "ഹൂതി ആക്രമണങ്ങളുമായി ബന്ധപ്പെട്ട്.",
        words: [
          { en: "hub", ml: "പ്രധാന കേന്ദ്രം" },
          { en: "warns of", ml: "...നെക്കുറിച്ച് മുന്നറിയിപ്പ് നൽകുന്നു" }
        ]
      },
      {
        title: "'Zero MDR for all UPI payments not viable'",
        ml: "'എല്ലാ യുപിഐ ഇടപാടുകൾക്കും എംഡിആർ ഒഴിവാക്കുന്നത് പ്രായോഗികമല്ല'",
        section: "Business",
        note: "NPCI told the Supreme Court that keeping the merchant discount rate at zero for every UPI payment is not sustainable.",
        noteMl: "MDR = കച്ചവടക്കാരിൽ നിന്ന് ഈടാക്കുന്ന ഇടപാട് ഫീസ്.",
        words: [
          { en: "MDR (merchant discount rate)", ml: "കച്ചവടക്കാരൻ നൽകേണ്ട ഇടപാട് ഫീസ്" },
          { en: "viable", ml: "പ്രായോഗികം, ലാഭകരമായി നടത്താവുന്ന" }
        ]
      },
      {
        title: "Ronaldo bids adieu to international football",
        ml: "റൊണാൾഡോ അന്താരാഷ്ട്ര ഫുട്ബോളിൽ നിന്ന് വിടവാങ്ങി",
        section: "Sport",
        note: "Cristiano Ronaldo calls it a day with the national team.",
        noteMl: "അന്താരാഷ്ട്ര കരിയറിന് വിരാമം.",
        words: [
          { en: "bid adieu", ml: "വിടപറയുക" },
          { en: "call it a day", ml: "നിർത്തുക, വിരമിക്കുക" }
        ]
      },
      {
        title: "Higher Education dept. seeks explanation from CU over pro-VC's appointment",
        ml: "പ്രോ-വിസി നിയമനത്തിൽ കാലിക്കറ്റ് സർവകലാശാലയോട് ഉന്നത വിദ്യാഭ്യാസ വകുപ്പ് വിശദീകരണം തേടി",
        section: "p.4 Kozhikode",
        note: "The department wants to know how the pro-VC was relieved from his parent institution and allowed to take charge on deputation without the government's prior sanction.",
        noteMl: "സർക്കാരിന്റെ മുൻകൂർ അനുമതിയില്ലാതെ ഡെപ്യൂട്ടേഷനിൽ ചുമതലയേറ്റതാണ് പ്രശ്നം.",
        words: [
          { en: "seeks explanation", ml: "വിശദീകരണം തേടുന്നു" },
          { en: "deputation", ml: "ഡെപ്യൂട്ടേഷൻ, മറ്റൊരു സ്ഥാപനത്തിലേക്ക് താൽക്കാലിക നിയമനം" },
          { en: "prior sanction", ml: "മുൻകൂർ അനുമതി" }
        ]
      },
      {
        title: "Calicut University to overhaul UG, PG curricula with AI, computing knowledge",
        ml: "AI, കമ്പ്യൂട്ടിംഗ് അറിവുകൾ ഉൾപ്പെടുത്തി ബിരുദ, ബിരുദാനന്തര സിലബസ് കാലിക്കറ്റ് സർവകലാശാല സമഗ്രമായി പരിഷ്കരിക്കും",
        section: "p.4 Kozhikode",
        note: "The university plans a complete revision of its undergraduate and postgraduate courses to add artificial intelligence and computing.",
        noteMl: "എല്ലാ കോഴ്സുകളിലും AI പഠനം.",
        words: [
          { en: "overhaul", ml: "അടിമുടി പരിഷ്കരിക്കുക" },
          { en: "curricula", ml: "പാഠ്യപദ്ധതികൾ (curriculum-ന്റെ ബഹുവചനം)" }
        ]
      },
      {
        title: "Communal harmony committees to be formed in grama panchayats",
        ml: "ഗ്രാമപഞ്ചായത്തുകളിൽ സാമുദായിക സൗഹാർദ സമിതികൾ രൂപീകരിക്കും",
        section: "p.4 Kozhikode",
        note: "Kozhikode District Collector directed that committees be set up in every grama panchayat to promote communal harmony.",
        noteMl: "ജില്ലാ കളക്ടറുടെ നിർദേശം.",
        words: [
          { en: "communal harmony", ml: "സാമുദായിക സൗഹാർദം" },
          { en: "to be formed", ml: "രൂപീകരിക്കും (headline-ലെ 'to' = ഭാവി)" }
        ]
      },
      {
        title: "Excursion row: CCTV footage released",
        ml: "വിനോദയാത്ര വിവാദം: സിസിടിവി ദൃശ്യങ്ങൾ പുറത്തുവിട്ടു",
        section: "p.4 Kozhikode",
        note: "In the controversy over a Meenangadi school excursion, CCTV footage linked to the trip was released.",
        noteMl: "വിവാദത്തിൽ പുതിയ തെളിവ്.",
        words: [
          { en: "row", ml: "വിവാദം, തർക്കം" },
          { en: "footage", ml: "ദൃശ്യങ്ങൾ" }
        ]
      },
      {
        title: "Sabarimala gears up for pilgrimage season",
        ml: "തീർത്ഥാടന കാലത്തിനായി ശബരിമല ഒരുങ്ങുന്നു",
        section: "p.4 Kozhikode",
        note: "Preparations are on for the season starting November 16, with road work to be finished by November 12.",
        noteMl: "മണ്ഡലകാലം നവംബർ 16-ന് തുടങ്ങും.",
        words: [
          { en: "gears up", ml: "തയ്യാറെടുക്കുന്നു" },
          { en: "pilgrimage", ml: "തീർത്ഥാടനം" }
        ]
      },
      {
        title: "Injunction on web series based on Koodathayi case challenged in High Court",
        ml: "കൂടത്തായി കേസിനെ ആസ്പദമാക്കിയ വെബ് സീരീസിനുള്ള വിലക്ക് ഹൈക്കോടതിയിൽ ചോദ്യം ചെയ്തു",
        section: "p.4 Kozhikode",
        note: "JioStar moved the Kerala High Court against the order stopping the release of a web series on the Koodathayi serial murder case.",
        noteMl: "റിലീസിനുള്ള വിലക്ക് നീക്കണമെന്ന് ആവശ്യം.",
        words: [
          { en: "injunction", ml: "കോടതി വിലക്ക്, നിരോധന ഉത്തരവ്" },
          { en: "challenged", ml: "ചോദ്യം ചെയ്തു" }
        ]
      },
      {
        title: "CU garden notified as biodiversity heritage site",
        ml: "കാലിക്കറ്റ് സർവകലാശാല ഉദ്യാനം ജൈവവൈവിധ്യ പൈതൃക കേന്ദ്രമായി പ്രഖ്യാപിച്ചു",
        section: "p.4 Kozhikode",
        note: "The State government officially declared the Calicut University botanical garden at Tenhipalam a Biodiversity Heritage Site.",
        noteMl: "ഔദ്യോഗിക വിജ്ഞാപനം ഇറങ്ങി.",
        words: [
          { en: "notified", ml: "ഔദ്യോഗികമായി വിജ്ഞാപനം ചെയ്തു" },
          { en: "heritage", ml: "പൈതൃകം" }
        ]
      },
      {
        title: "Rising tourist footfall exposes safety gaps at eco-tourism spots",
        ml: "വിനോദസഞ്ചാരികളുടെ എണ്ണം കൂടിയതോടെ ഇക്കോ-ടൂറിസം കേന്ദ്രങ്ങളിലെ സുരക്ഷാ വീഴ്ചകൾ പുറത്തായി",
        section: "p.5 Region",
        note: "Remote spots in Kozhikode lack ambulances and trained rescue staff, delaying help for accident victims; around 20 people have drowned at Kariyathumpara in the past decade.",
        noteMl: "ആംബുലൻസും രക്ഷാപ്രവർത്തകരും ഇല്ല.",
        words: [
          { en: "footfall", ml: "സന്ദർശകരുടെ എണ്ണം" },
          { en: "exposes", ml: "തുറന്നുകാട്ടുന്നു" },
          { en: "safety gaps", ml: "സുരക്ഷാ പോരായ്മകൾ" }
        ]
      },
      {
        title: "Kozhikode to host MERGE FUTURE 2027 business and technology summit in January",
        ml: "MERGE FUTURE 2027 ബിസിനസ്-സാങ്കേതിക ഉച്ചകോടിക്ക് ജനുവരിയിൽ കോഴിക്കോട് വേദിയാകും",
        section: "p.5 Region",
        note: "The Calicut Forum for IT (CAFIT) and Government Cyberpark will hold the summit on January 9–10, 2027, at the Calicut Trade Centre.",
        noteMl: "ജനുവരി 9, 10 തീയതികളിൽ.",
        words: [
          { en: "host", ml: "ആതിഥ്യം വഹിക്കുക, വേദിയാകുക" },
          { en: "summit", ml: "ഉച്ചകോടി" }
        ]
      },
      {
        title: "3 held on charge of assault, robbery",
        ml: "ആക്രമണം, കവർച്ച കുറ്റങ്ങൾക്ക് മൂന്നുപേർ അറസ്റ്റിൽ",
        section: "p.5 Region",
        note: "Kasaragod police arrested three people for allegedly assaulting and robbing a young man and woman.",
        noteMl: "കാസർകോട്.",
        words: [
          { en: "held", ml: "അറസ്റ്റ് ചെയ്യപ്പെട്ടു (headline ശൈലി)" },
          { en: "on charge of", ml: "...കുറ്റം ചുമത്തി" }
        ]
      },
      {
        title: "PSC chief, members, under CB scanner",
        ml: "പിഎസ്‌സി ചെയർമാനും അംഗങ്ങളും ക്രൈംബ്രാഞ്ച് അന്വേഷണത്തിൽ",
        section: "p.6 Keralam",
        note: "The Crime Branch registered an FIR against the Kerala PSC Chairperson and members over alleged irregularities in an exam for Fisheries Extension Officer.",
        noteMl: "പരീക്ഷാ ക്രമക്കേട് ആരോപണം.",
        words: [
          { en: "under scanner", ml: "അന്വേഷണ വിധേയം" },
          { en: "CB (Crime Branch)", ml: "ക്രൈംബ്രാഞ്ച്" },
          { en: "irregularities", ml: "ക്രമക്കേടുകൾ" }
        ]
      },
      {
        title: "CM's power purchase stance under a cloud",
        ml: "വൈദ്യുതി വാങ്ങലിലെ മുഖ്യമന്ത്രിയുടെ നിലപാട് സംശയത്തിന്റെ നിഴലിൽ",
        section: "p.6 Keralam",
        note: "Chief Minister V.D. Satheesan said buying power from Himachal Pradesh would have cost an extra ₹2,232 crore; that claim is now being questioned.",
        noteMl: "മുഖ്യമന്ത്രിയുടെ കണക്കുകൾ ചോദ്യം ചെയ്യപ്പെടുന്നു.",
        words: [
          { en: "under a cloud", ml: "സംശയത്തിന്റെ നിഴലിൽ" },
          { en: "stance", ml: "നിലപാട്" }
        ]
      },
      {
        title: "Relay fast by suspended SSUS students continues",
        ml: "സസ്പെൻഡ് ചെയ്യപ്പെട്ട സംസ്കൃത സർവകലാശാല വിദ്യാർത്ഥികളുടെ റിലേ നിരാഹാരം തുടരുന്നു",
        section: "p.6 Keralam",
        note: "SFI students suspended by Sree Sankaracharya University of Sanskrit, Kalady, are continuing their protest fast.",
        noteMl: "സസ്പെൻഷൻ പിൻവലിക്കണമെന്ന് ആവശ്യം.",
        words: [
          { en: "relay fast", ml: "ഊഴമിട്ടുള്ള നിരാഹാര സമരം" },
          { en: "suspended", ml: "സസ്പെൻഡ് ചെയ്യപ്പെട്ട" }
        ]
      },
      {
        title: "From Keralam to LA, a Mayor's saga",
        ml: "കേരളത്തിൽ നിന്ന് ലോസ് ആഞ്ചലസിലേക്ക്: ഒരു മേയറുടെ കഥ",
        section: "p.6 Keralam",
        note: "The story of Nithya Raman, born in Kerala, who has been elected Mayor of Los Angeles.",
        noteMl: "നിത്യ രാമന്റെ ജീവിതയാത്ര.",
        words: [
          { en: "saga", ml: "നീണ്ട കഥ, ഇതിഹാസം" }
        ]
      },
      {
        title: "Jijo Mathew, Kiran Babu to lead KUWJ State committee",
        ml: "കെയുഡബ്ല്യുജെ സംസ്ഥാന സമിതിയെ ജിജോ മാത്യുവും കിരൺ ബാബുവും നയിക്കും",
        section: "p.6 In brief",
        note: "Jijo Mathew (Malayala Manorama) is State president and K. Kiran Babu (News 24) general secretary of the Kerala Union of Working Journalists.",
        noteMl: "പത്രപ്രവർത്തക യൂണിയൻ ഭാരവാഹികൾ.",
        words: [
          { en: "to lead", ml: "നയിക്കും" }
        ]
      },
      {
        title: "New posting for former Kochi City police chief",
        ml: "മുൻ കൊച്ചി സിറ്റി പോലീസ് മേധാവിക്ക് പുതിയ നിയമനം",
        section: "p.6 In brief",
        note: "Kaliraj Mahesh Kumar, removed as Kochi City police chief in October amid criticism of the Cheranalloor crash probe, has been posted as IG, Crimes-II.",
        noteMl: "ചേരാനല്ലൂർ കേസിനെ തുടർന്ന് മാറ്റിയ ഉദ്യോഗസ്ഥൻ.",
        words: [
          { en: "posting", ml: "നിയമനം" }
        ]
      },
      {
        title: "BJP leaders meet President over 'irregularities' in KPSC",
        ml: "കേരള പിഎസ്‌സിയിലെ 'ക്രമക്കേടുകളെ'ക്കുറിച്ച് ബിജെപി നേതാക്കൾ രാഷ്ട്രപതിയെ കണ്ടു",
        section: "p.7 South",
        note: "BJP leaders urged President Droupadi Murmu to act on the former Kerala Governor's recommendation to remove the PSC Chairman.",
        noteMl: "പിഎസ്‌സി ചെയർമാനെ നീക്കണമെന്ന് ആവശ്യം.",
        words: [
          { en: "over", ml: "...നെച്ചൊല്ലി, ...സംബന്ധിച്ച്" },
          { en: "'irregularities' in quotes", ml: "ആരോപണം മാത്രം, തെളിഞ്ഞിട്ടില്ല" }
        ]
      },
      {
        title: "10 missing rescue personnel traced",
        ml: "കാണാതായ 10 രക്ഷാപ്രവർത്തകരെ കണ്ടെത്തി",
        section: "p.7 South",
        note: "Ten rescue workers who went missing in floodwaters in Khammam, Telangana, were found.",
        noteMl: "തെലങ്കാനയിലെ ഖമ്മം.",
        words: [
          { en: "traced", ml: "കണ്ടെത്തി" },
          { en: "personnel", ml: "ഉദ്യോഗസ്ഥർ, ജീവനക്കാർ" }
        ]
      },
      {
        title: "22 stranded in flash floods rescued in A.P.",
        ml: "ആന്ധ്രയിൽ മിന്നൽ പ്രളയത്തിൽ കുടുങ്ങിയ 22 പേരെ രക്ഷപ്പെടുത്തി",
        section: "p.7 South",
        note: "Andhra Pradesh police rescued 22 workers trapped by flash floods.",
        noteMl: "എല്ലാവരും സുരക്ഷിതർ.",
        words: [
          { en: "stranded", ml: "കുടുങ്ങിപ്പോയ" },
          { en: "flash floods", ml: "മിന്നൽ പ്രളയം" }
        ]
      }
    ]
  },
  {
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
  },
  {
    date: "2026-11-09",
    edition: "Online · top news (8–9 Nov)",
    items: [
      {
        "title": "SDPI takes lead in campaign for Tirur district through Malappuram bifurcation",
        "ml": "മലപ്പുറം വിഭജിച്ച് തിരൂർ ജില്ല രൂപീകരിക്കാനുള്ള പ്രചാരണത്തിന് എസ്ഡിപിഐ നേതൃത്വം നൽകുന്നു",
        "section": "Kerala",
        "note": "SDPI is leading a campaign to split Malappuram and form a new Tirur district.",
        "noteMl": "മലപ്പുറം ജില്ല വിഭജിച്ച് തിരൂർ ജില്ല വേണമെന്ന ആവശ്യം.",
        "words": [
          {
            "en": "takes lead",
            "ml": "നേതൃത്വം ഏറ്റെടുക്കുന്നു"
          },
          {
            "en": "bifurcation",
            "ml": "രണ്ടായി വിഭജിക്കൽ"
          }
        ]
      },
      {
        "title": "Anuj lights up Indian chess, becomes the 100th GM",
        "ml": "ഇന്ത്യൻ ചെസിന് തിളക്കമേകി അനൂജ്; രാജ്യത്തെ 100-ാമത്തെ ഗ്രാൻഡ്മാസ്റ്റർ",
        "section": "Sport",
        "note": "Anuj Shrivatri has become India's 100th chess Grandmaster.",
        "noteMl": "ഇന്ത്യയ്ക്ക് 100-ാമത്തെ ചെസ് ഗ്രാൻഡ്മാസ്റ്റർ.",
        "words": [
          {
            "en": "lights up",
            "ml": "തിളക്കമേകുന്നു, ആവേശം നൽകുന്നു"
          },
          {
            "en": "GM (Grandmaster)",
            "ml": "ഗ്രാൻഡ്മാസ്റ്റർ (ചെസ്)"
          }
        ]
      },
      {
        "title": "Special Sub-Inspector of Police beaten to death in Theni",
        "ml": "തേനിയിൽ സ്പെഷ്യൽ സബ് ഇൻസ്പെക്ടറെ അടിച്ചുകൊന്നു",
        "section": "Tamil Nadu",
        "note": "An SSI was killed after he stopped a group filming reels with crackers on the road.",
        "noteMl": "റോഡിൽ പടക്കം പൊട്ടിച്ച് റീൽസ് എടുത്തവരെ ചോദ്യം ചെയ്ത പോലീസുകാരനെ കൊലപ്പെടുത്തി.",
        "words": [
          {
            "en": "beaten to death",
            "ml": "അടിച്ചുകൊന്നു"
          },
          {
            "en": "Sub-Inspector (SI)",
            "ml": "സബ് ഇൻസ്പെക്ടർ"
          }
        ],
        "url": "https://www.thehindu.com/news/cities/Madurai/special-sub-inspector-of-police-beaten-to-death-in-theni/article71681282.ece"
      },
      {
        "title": "Delhi's air quality slips into 'severe' category morning after Deepavali, AQI at 404",
        "ml": "ദീപാവലി പിറ്റേന്ന് ഡൽഹിയിലെ വായു 'അതിഗുരുതര' നിലയിലേക്ക്; AQI 404",
        "section": "Delhi",
        "note": "Firecrackers on Deepavali night pushed Delhi's air into the worst AQI band.",
        "noteMl": "ദീപാവലി പടക്കം കാരണം ഡൽഹിയിലെ വായു ഏറ്റവും മോശം നിലയിൽ.",
        "words": [
          {
            "en": "slips into",
            "ml": "...ലേക്ക് താഴുന്നു"
          },
          {
            "en": "AQI (Air Quality Index)",
            "ml": "വായു ഗുണനിലവാര സൂചിക"
          }
        ],
        "url": "https://www.thehindu.com/news/cities/Delhi/delhis-air-quality-slips-into-severe-category-morning-after-deepavali-aqi-at-404/article71681305.ece"
      },
      {
        "title": "Oil falls as Donald Trump says new Iran attacks ‘unlikely’",
        "ml": "പുതിയ ഇറാൻ ആക്രമണങ്ങൾക്ക് സാധ്യതയില്ലെന്ന് ട്രംപ്; എണ്ണവില ഇടിഞ്ഞു",
        "section": "Business",
        "note": "Crude oil prices dropped because Trump said more strikes on Iran were not likely.",
        "noteMl": "ട്രംപിന്റെ പ്രസ്താവനയെ തുടർന്ന് എണ്ണവില കുറഞ്ഞു.",
        "words": [
          {
            "en": "falls",
            "ml": "(വില) ഇടിയുന്നു"
          },
          {
            "en": "unlikely",
            "ml": "സാധ്യതയില്ലാത്ത"
          }
        ],
        "url": "https://www.thehindu.com/business/Economy/oil-falls-as-donald-trump-says-new-iran-attacks-unlikely/article71681302.ece"
      },
      {
        "title": "Police raid home of ex-President of Paraguay",
        "ml": "പരാഗ്വേ മുൻ പ്രസിഡന്റിന്റെ വീട്ടിൽ പോലീസ് റെയ്ഡ്",
        "section": "World",
        "note": "The former President is accused of moving government deposits to a troubled bank.",
        "noteMl": "സർക്കാർ നിക്ഷേപം ഒരു ബാങ്കിലേക്ക് മാറ്റിയെന്നാണ് ആരോപണം.",
        "words": [
          {
            "en": "raid",
            "ml": "റെയ്ഡ്, മിന്നൽ പരിശോധന"
          },
          {
            "en": "ex-",
            "ml": "മുൻ (ex-President = മുൻ പ്രസിഡന്റ്)"
          }
        ],
        "url": "https://www.thehindu.com/news/international/police-raid-home-of-ex-president-of-paraguay/article71681272.ece"
      },
      {
        "title": "G7 Ministers meet on efforts to end Ukraine conflict, halt new Iran war",
        "ml": "യുക്രെയ്ൻ സംഘർഷം അവസാനിപ്പിക്കാനും ഇറാൻ യുദ്ധം തടയാനും ജി7 മന്ത്രിമാരുടെ യോഗം",
        "section": "World",
        "note": "Foreign Ministers of the seven big industrial nations are meeting on two wars.",
        "noteMl": "ഏഴ് വ്യാവസായിക രാജ്യങ്ങളുടെ മന്ത്രിമാർ രണ്ട് യുദ്ധങ്ങളെക്കുറിച്ച് ചർച്ച ചെയ്യുന്നു.",
        "words": [
          {
            "en": "halt",
            "ml": "നിർത്തുക, തടയുക"
          },
          {
            "en": "efforts to",
            "ml": "...ക്കാനുള്ള ശ്രമങ്ങൾ"
          }
        ],
        "url": "https://www.thehindu.com/news/international/g7-ministers-meeting-in-paris-russia-ukraine-conflict-us-israel-strikes-on-iran/article71681281.ece"
      },
      {
        "title": "19 Indian seafarers stranded in Yemen evacuated, Embassy says",
        "ml": "യെമനിൽ കുടുങ്ങിയ 19 ഇന്ത്യൻ നാവികരെ ഒഴിപ്പിച്ചെന്ന് എംബസി",
        "section": "India",
        "note": "The Indian Embassy says 19 sailors stuck in Yemen have been brought out safely.",
        "noteMl": "യെമനിൽ കുടുങ്ങിയ നാവികർ സുരക്ഷിതർ.",
        "words": [
          {
            "en": "stranded",
            "ml": "കുടുങ്ങിപ്പോയ"
          },
          {
            "en": "evacuated",
            "ml": "ഒഴിപ്പിച്ചു"
          },
          {
            "en": "seafarers",
            "ml": "നാവികർ, കപ്പൽ ജീവനക്കാർ"
          }
        ],
        "url": "https://www.thehindu.com/news/national/indian-seafarers-stranded-in-yemen-evacuated/article71681203.ece"
      },
      {
        "title": "Pope Leo takes Milei to task as he visits divided Argentina",
        "ml": "ഭിന്നിച്ചുനിൽക്കുന്ന അർജന്റീന സന്ദർശിക്കവേ മിലെയെ മാർപാപ്പ വിമർശിച്ചു",
        "section": "World",
        "note": "The Pope spoke up for the poor and disabled, an indirect criticism of the President's spending cuts.",
        "noteMl": "ദരിദ്രർക്കും ഭിന്നശേഷിക്കാർക്കും വേണ്ടി മാർപാപ്പ സംസാരിച്ചു; സർക്കാരിന്റെ വെട്ടിക്കുറവിനെതിരെ പരോക്ഷ വിമർശനം.",
        "words": [
          {
            "en": "take to task",
            "ml": "ശാസിക്കുക, വിമർശിക്കുക"
          },
          {
            "en": "divided",
            "ml": "ഭിന്നിച്ച"
          }
        ],
        "url": "https://www.thehindu.com/news/international/pope-leo-takes-milei-to-task-as-he-visits-divided-argentina/article71681249.ece"
      },
      {
        "title": "Karnataka tests petrol samples at 67 locations over ethanol blending complaints: CM Shivakumar",
        "ml": "എഥനോൾ കലർത്തൽ പരാതിയെ തുടർന്ന് 67 ഇടങ്ങളിൽ പെട്രോൾ സാമ്പിൾ പരിശോധിച്ചു: മുഖ്യമന്ത്രി ശിവകുമാർ",
        "section": "Karnataka",
        "note": "After complaints about ethanol in petrol, the State checked samples at pumps and depots.",
        "noteMl": "പെട്രോളിൽ എഥനോൾ കൂടുതലാണെന്ന പരാതി പരിശോധിക്കുന്നു.",
        "words": [
          {
            "en": "over",
            "ml": "...നെച്ചൊല്ലി, ...സംബന്ധിച്ച്"
          },
          {
            "en": "blending",
            "ml": "കലർത്തൽ"
          }
        ],
        "url": "https://www.thehindu.com/news/national/karnataka/karnataka-tests-petrol-samples-at-67-locations-over-ethanol-blending-complaints-cm-shivakumar/article71681265.ece"
      },
      {
        "title": "Air pollution over 50 times WHO limit in parts of Delhi as people defy ban on firecrackers on Deepavali",
        "ml": "പടക്ക നിരോധനം ലംഘിച്ചതോടെ ഡൽഹിയിൽ വായുമലിനീകരണം ലോകാരോഗ്യ സംഘടനയുടെ പരിധിയുടെ 50 മടങ്ങ്",
        "section": "Delhi",
        "note": "People burst crackers despite the ban, and pollution went far beyond safe limits.",
        "noteMl": "നിരോധനം ലംഘിച്ച് പടക്കം പൊട്ടിച്ചു; മലിനീകരണം അതിരുകടന്നു.",
        "words": [
          {
            "en": "defy",
            "ml": "ലംഘിക്കുക, അനുസരിക്കാതിരിക്കുക"
          },
          {
            "en": "ban",
            "ml": "നിരോധനം"
          }
        ],
        "url": "https://www.thehindu.com/news/cities/Delhi/air-pollution-over-50-times-who-limit-in-parts-of-delhi-as-people-defy-ban-on-firecrackers-on-deepavali/article71681210.ece"
      },
      {
        "title": "Egypt train collision kills 7, injures 125: Health Ministry",
        "ml": "ഈജിപ്തിൽ ട്രെയിനുകൾ കൂട്ടിയിടിച്ച് 7 മരണം, 125 പേർക്ക് പരിക്ക്: ആരോഗ്യ മന്ത്രാലയം",
        "section": "World",
        "note": "One train ran into the back of another near Cairo.",
        "noteMl": "കെയ്റോയ്ക്കടുത്ത് ഒരു ട്രെയിൻ മറ്റൊന്നിന്റെ പിന്നിൽ ഇടിച്ചു.",
        "words": [
          {
            "en": "collision",
            "ml": "കൂട്ടിയിടി"
          }
        ],
        "url": "https://www.thehindu.com/news/international/egypt-train-collision-giza-to-fayoum-crash-updates-november-8-2026/article71681077.ece"
      },
      {
        "title": "Fire engulfs Jammu’s Nehru Market, guts around 12 shops",
        "ml": "ജമ്മുവിലെ നെഹ്റു മാർക്കറ്റിൽ തീപിടിത്തം; 12 കടകൾ കത്തിനശിച്ചു",
        "section": "Jammu and Kashmir",
        "note": "A fire spread through a market in Jammu and destroyed about 12 shops.",
        "noteMl": "മാർക്കറ്റിലെ തീപിടിത്തത്തിൽ കടകൾ നശിച്ചു.",
        "words": [
          {
            "en": "engulfs",
            "ml": "(തീ) വിഴുങ്ങുന്നു, പടർന്നുപിടിക്കുന്നു"
          },
          {
            "en": "guts",
            "ml": "പൂർണമായി കത്തിനശിപ്പിക്കുന്നു"
          }
        ],
        "url": "https://www.thehindu.com/news/national/jammu-and-kashmir/fire-engulfs-jammus-nehru-market-guts-around-12-shops/article71681226.ece"
      },
      {
        "title": "Chennai Open tennis: Singles final postponed due to rain, unhealthy air quality",
        "ml": "ചെന്നൈ ഓപ്പൺ ടെന്നിസ്: മഴയും മോശം വായുവും കാരണം സിംഗിൾസ് ഫൈനൽ മാറ്റിവെച്ചു",
        "section": "Sport",
        "note": "Rain and bad air forced organisers to move the final to the next morning.",
        "noteMl": "ഫൈനൽ അടുത്ത ദിവസം രാവിലേക്ക് മാറ്റി.",
        "words": [
          {
            "en": "postponed",
            "ml": "മാറ്റിവെച്ചു"
          },
          {
            "en": "due to",
            "ml": "...കാരണം"
          }
        ],
        "url": "https://www.thehindu.com/sport/tennis/chennai-open-tennis-singles-final-postponed-due-to-rain-and-air-quality/article71681215.ece"
      },
      {
        "title": "Democrats eye Musk, Miller probes after midterm rout",
        "ml": "ഇടക്കാല തിരഞ്ഞെടുപ്പിലെ വൻ വിജയത്തിന് ശേഷം മസ്കിനെതിരെയും മില്ലറിനെതിരെയും അന്വേഷണത്തിന് ഡെമോക്രാറ്റുകൾ",
        "section": "World",
        "note": "After winning Congress, Democrats plan to investigate Elon Musk and Stephen Miller.",
        "noteMl": "കോൺഗ്രസ് നേടിയ ഡെമോക്രാറ്റുകൾ അന്വേഷണങ്ങൾ ആസൂത്രണം ചെയ്യുന്നു.",
        "words": [
          {
            "en": "eye",
            "ml": "ലക്ഷ്യമിടുന്നു"
          },
          {
            "en": "probes",
            "ml": "അന്വേഷണങ്ങൾ"
          },
          {
            "en": "rout",
            "ml": "വൻ പരാജയം (എതിരാളിയുടെ), തൂത്തുവാരൽ"
          }
        ],
        "url": "https://www.thehindu.com/news/international/democrats-eye-musk-miller-probes-after-midterm-rout/article71681171.ece"
      },
      {
        "title": "Thick smog blankets Delhi on Deepavali night, AQI at 20 stations ‘severe’",
        "ml": "ദീപാവലി രാത്രി ഡൽഹിയെ കനത്ത പുകമഞ്ഞ് മൂടി; 20 സ്റ്റേഷനുകളിൽ AQI 'അതിഗുരുതരം'",
        "section": "Delhi",
        "note": "Smog covered the city; 20 monitoring stations showed the worst air category.",
        "noteMl": "നഗരം പുകമഞ്ഞിൽ മൂടി.",
        "words": [
          {
            "en": "smog",
            "ml": "പുകമഞ്ഞ്"
          },
          {
            "en": "blankets",
            "ml": "(പുതപ്പ് പോലെ) മൂടുന്നു"
          }
        ],
        "url": "https://www.thehindu.com/news/cities/Delhi/delhi-air-quality-deepavali-cracker-ban-ver-poor/article71681158.ece"
      },
      {
        "title": "Habitual offender arrested for murdering 65-year-old woman in Bengaluru",
        "ml": "ബെംഗളൂരുവിൽ 65 വയസ്സുകാരിയെ കൊലപ്പെടുത്തിയ സ്ഥിരം കുറ്റവാളി അറസ്റ്റിൽ",
        "section": "Karnataka",
        "note": "A man with a criminal record was arrested for a woman's murder.",
        "noteMl": "സ്ഥിരം കുറ്റവാളി അറസ്റ്റിൽ.",
        "words": [
          {
            "en": "habitual offender",
            "ml": "സ്ഥിരം കുറ്റവാളി"
          }
        ],
        "url": "https://www.thehindu.com/news/national/karnataka/habitual-offender-arrested-for-murdering-65-year-old-woman-in-bengaluru/article71678977.ece"
      },
      {
        "title": "Eisenkot warns of Israel crisis as he seeks to replace Netanyahu’s government",
        "ml": "നെതന്യാഹു സർക്കാരിനെ മാറ്റാൻ ശ്രമിക്കവേ ഇസ്രായേൽ പ്രതിസന്ധിയെക്കുറിച്ച് ഐസൻകോട്ടിന്റെ മുന്നറിയിപ്പ്",
        "section": "World",
        "note": "Gadi Eisenkot has been asked to try to form a new government in Israel.",
        "noteMl": "പുതിയ സർക്കാർ രൂപീകരിക്കാൻ ഐസൻകോട്ടിന് അവസരം.",
        "words": [
          {
            "en": "warns of",
            "ml": "...നെക്കുറിച്ച് മുന്നറിയിപ്പ് നൽകുന്നു"
          },
          {
            "en": "seeks to",
            "ml": "...ാൻ ശ്രമിക്കുന്നു"
          }
        ],
        "url": "https://www.thehindu.com/news/international/eisenkot-warns-of-israel-crisis-as-he-seeks-to-replace-netanyahus-government/article71681159.ece"
      },
      {
        "title": "Trump vows comeback as bitter showdown with Congress looms",
        "ml": "കോൺഗ്രസുമായി കടുത്ത ഏറ്റുമുട്ടൽ ആസന്നമായിരിക്കെ തിരിച്ചുവരുമെന്ന് ട്രംപിന്റെ പ്രതിജ്ഞ",
        "section": "World",
        "note": "After the midterm defeat, Trump promises to bounce back; a fight with the new Congress is coming.",
        "noteMl": "തോൽവിക്ക് ശേഷം തിരിച്ചുവരുമെന്ന് ട്രംപ്.",
        "words": [
          {
            "en": "vows",
            "ml": "പ്രതിജ്ഞ ചെയ്യുന്നു"
          },
          {
            "en": "showdown",
            "ml": "നേർക്കുനേർ ഏറ്റുമുട്ടൽ"
          },
          {
            "en": "looms",
            "ml": "ആസന്നമാകുന്നു (ഭീഷണിയായി)"
          }
        ],
        "url": "https://www.thehindu.com/news/international/trump-vows-comeback-as-bitter-showdown-with-congress-looms/article71681120.ece"
      },
      {
        "title": "P.T. Usha complains to IOA electoral officer over WhatsApp campaign for SOM polls",
        "ml": "SOM തിരഞ്ഞെടുപ്പിലെ വാട്സ്ആപ്പ് പ്രചാരണത്തെച്ചൊല്ലി പി.ടി. ഉഷ IOA തിരഞ്ഞെടുപ്പ് ഉദ്യോഗസ്ഥന് പരാതി നൽകി",
        "section": "Sport",
        "note": "The IOA president says a WhatsApp vote appeal broke the election code of conduct.",
        "noteMl": "പെരുമാറ്റച്ചട്ട ലംഘനമെന്ന് പരാതി.",
        "words": [
          {
            "en": "polls",
            "ml": "തിരഞ്ഞെടുപ്പ്"
          },
          {
            "en": "IOA",
            "ml": "ഇന്ത്യൻ ഒളിമ്പിക് അസോസിയേഷൻ"
          }
        ],
        "url": "https://www.thehindu.com/sport/pt-usha-complains-to-ioa-electoral-officer-over-whatsapp-campaign-for-som-polls/article71681125.ece"
      },
      {
        "title": "Rajajinagar murders: Two more bodies recovered near Chamundi hills in Mysuru",
        "ml": "രാജാജിനഗർ കൊലപാതകങ്ങൾ: ചാമുണ്ഡി കുന്നിന് സമീപം രണ്ട് മൃതദേഹങ്ങൾ കൂടി കണ്ടെടുത്തു",
        "section": "Bengaluru",
        "note": "Five bodies have now been found in the case; police are searching for two more.",
        "noteMl": "അഞ്ച് മൃതദേഹങ്ങൾ കണ്ടെത്തി; തിരച്ചിൽ തുടരുന്നു.",
        "words": [
          {
            "en": "recovered",
            "ml": "കണ്ടെടുത്തു"
          }
        ],
        "url": "https://www.thehindu.com/news/cities/bangalore/rajajinagar-murders-two-more-bodies-recovered-near-chamundi-hills-in-mysuru/article71680991.ece"
      },
      {
        "title": "Jean Drèze urges T.N. govt. to take strict action amid report of ‘fake book’ at Kalaignar Centenary Library",
        "ml": "കലൈഞ്ജർ ലൈബ്രറിയിലെ 'വ്യാജ പുസ്തകം' റിപ്പോർട്ടിനിടെ കർശന നടപടിക്ക് തമിഴ്നാട് സർക്കാരിനോട് ജീൻ ഡ്രെസ്",
        "section": "Tamil Nadu",
        "note": "The economist asks the State to act on a report of a possibly AI-made fake book in a public library.",
        "noteMl": "AI ഉപയോഗിച്ച് ഉണ്ടാക്കിയതെന്ന് സംശയിക്കുന്ന പുസ്തകത്തിനെതിരെ നടപടി വേണമെന്ന്.",
        "words": [
          {
            "en": "urges",
            "ml": "ആവശ്യപ്പെടുന്നു"
          },
          {
            "en": "amid",
            "ml": "...നിടയിൽ"
          },
          {
            "en": "T.N.",
            "ml": "തമിഴ്നാട്"
          }
        ],
        "url": "https://www.thehindu.com/news/national/tamil-nadu/jean-dreze-fake-book-publisher-tn-madurai-kalaignar-centenary-library/article71681030.ece"
      },
      {
        "title": "Minister Agnimitra Paul says rose water to be used for mist spraying in Kolkata; environmentalist slams move",
        "ml": "കൊൽക്കത്തയിൽ പനിനീർ തളിക്കുമെന്ന് മന്ത്രി; നീക്കത്തെ പരിസ്ഥിതി പ്രവർത്തകൻ വിമർശിച്ചു",
        "section": "Kolkata",
        "note": "A plan to spray rose water against pollution drew criticism.",
        "noteMl": "മലിനീകരണം കുറയ്ക്കാൻ പനിനീർ തളിക്കൽ; വിമർശനം.",
        "words": [
          {
            "en": "slams",
            "ml": "രൂക്ഷമായി വിമർശിക്കുന്നു"
          },
          {
            "en": "move",
            "ml": "നീക്കം, നടപടി"
          },
          {
            "en": "to be used",
            "ml": "ഉപയോഗിക്കും ('to' = ഭാവി)"
          }
        ],
        "url": "https://www.thehindu.com/news/cities/kolkata/minister-agnimitra-paul-says-rose-water-to-be-used-for-mist-spraying-in-kolkata-environmentalist-slams-move/article71681027.ece"
      },
      {
        "title": "Assam OIL facility fire: death toll rises to four as another injured dies; four suspended",
        "ml": "അസം ഓയിൽ ഇന്ത്യ പ്ലാന്റിലെ തീപിടിത്തം: ഒരാൾ കൂടി മരിച്ചു, മരണം നാലായി; നാലുപേർക്ക് സസ്പെൻഷൻ",
        "section": "Assam",
        "note": "One more injured worker died; four employees were suspended and an inquiry ordered.",
        "noteMl": "മരണസംഖ്യ നാലായി; അന്വേഷണം പ്രഖ്യാപിച്ചു.",
        "words": [
          {
            "en": "death toll",
            "ml": "മരണസംഖ്യ"
          },
          {
            "en": "suspended",
            "ml": "സസ്പെൻഡ് ചെയ്യപ്പെട്ടു"
          }
        ],
        "url": "https://www.thehindu.com/news/national/assam/assam-oil-facility-fire-death-toll-rises-to-four-as-another-injured-dies-four-suspended/article71681016.ece"
      },
      {
        "title": "NGT issues notice to Tirunelveli Collector over threats to Tamirabharani fish species",
        "ml": "താമ്രപർണി മത്സ്യ ഇനങ്ങൾക്കുള്ള ഭീഷണി: തിരുനെൽവേലി കളക്ടർക്ക് ഹരിത ട്രൈബ്യൂണൽ നോട്ടീസ്",
        "section": "Tamil Nadu",
        "note": "The green tribunal took up the issue on its own after a newspaper report.",
        "noteMl": "പത്ര റിപ്പോർട്ടിനെ തുടർന്ന് ട്രൈബ്യൂണൽ സ്വമേധയാ കേസെടുത്തു.",
        "words": [
          {
            "en": "NGT (National Green Tribunal)",
            "ml": "ദേശീയ ഹരിത ട്രൈബ്യൂണൽ"
          },
          {
            "en": "issues notice",
            "ml": "നോട്ടീസ് അയയ്ക്കുന്നു"
          },
          {
            "en": "suo motu",
            "ml": "സ്വമേധയാ (കോടതി)"
          }
        ],
        "url": "https://www.thehindu.com/news/national/tamil-nadu/ngt-issues-notice-to-tirunelveli-collector-over-threats-to-tamirabharani-fish-species/article71679299.ece"
      }
    ]
  },
  {
    date: "2026-11-10",
    edition: "Online · top news",
    items: [
      {
        "title": "Onus on Uttar Pradesh to ensure undertrials allowed bail are released, says Supreme Court",
        "ml": "ജാമ്യം ലഭിച്ച വിചാരണത്തടവുകാരെ മോചിപ്പിക്കേണ്ട ഉത്തരവാദിത്തം യുപിക്കെന്ന് സുപ്രീം കോടതി",
        "section": "National",
        "note": "The Supreme Court says it is the State's duty to free undertrials who already have bail.",
        "noteMl": "ജാമ്യം കിട്ടിയവർ ജയിലിൽ തുടരരുത്.",
        "words": [
          {
            "en": "onus",
            "ml": "ഉത്തരവാദിത്തം, ബാധ്യത"
          },
          {
            "en": "undertrials",
            "ml": "വിചാരണത്തടവുകാർ"
          }
        ]
      },
      {
        "title": "Myanmar army seizes key resistance headquarters and 10 bases held by opposition, state media says",
        "ml": "പ്രതിപക്ഷത്തിന്റെ പ്രധാന ആസ്ഥാനവും 10 താവളങ്ങളും മ്യാൻമർ സൈന്യം പിടിച്ചെടുത്തെന്ന് സർക്കാർ മാധ്യമം",
        "section": "World",
        "note": "Myanmar's state media claims the army captured a key rebel headquarters and 10 bases.",
        "noteMl": "വിമതരുടെ താവളങ്ങൾ സൈന്യം പിടിച്ചെന്ന് അവകാശവാദം.",
        "words": [
          {
            "en": "seizes",
            "ml": "പിടിച്ചെടുക്കുന്നു"
          },
          {
            "en": "state media",
            "ml": "സർക്കാർ നിയന്ത്രിത മാധ്യമം"
          }
        ]
      },
      {
        "title": "Congress questions Modi over Delhi air pollution, demands account of measures taken",
        "ml": "ഡൽഹി വായുമലിനീകരണത്തെച്ചൊല്ലി മോദിയെ ചോദ്യം ചെയ്ത് കോൺഗ്രസ്; സ്വീകരിച്ച നടപടികളുടെ കണക്ക് ആവശ്യപ്പെട്ടു",
        "section": "National",
        "note": "Congress asks the PM what has been done about Delhi's polluted air.",
        "noteMl": "മലിനീകരണം തടയാൻ എന്ത് ചെയ്തു എന്ന് കോൺഗ്രസ്.",
        "words": [
          {
            "en": "demands account",
            "ml": "കണക്ക് ആവശ്യപ്പെടുന്നു"
          }
        ]
      },
      {
        "title": "Kerala PSC chairperson M.R. Baiju refuses to appear before Crime Branch again",
        "ml": "ക്രൈംബ്രാഞ്ചിന് മുന്നിൽ വീണ്ടും ഹാജരാകാൻ വിസമ്മതിച്ച് പിഎസ്‌സി ചെയർമാൻ എം.ആർ. ബൈജു",
        "section": "Kerala",
        "note": "The PSC chairman has declined a second round of questioning by the Crime Branch.",
        "noteMl": "വീണ്ടും ചോദ്യം ചെയ്യലിന് ഹാജരാകില്ല.",
        "words": [
          {
            "en": "appear before",
            "ml": "...മുന്നിൽ ഹാജരാകുക"
          }
        ]
      },
      {
        "title": "Israeli forces shoot dead 14-year-old in West Bank: Palestinian officials",
        "ml": "വെസ്റ്റ് ബാങ്കിൽ ഇസ്രായേൽ സേന 14 വയസ്സുകാരനെ വെടിവെച്ചുകൊന്നു: പലസ്തീൻ അധികൃതർ",
        "section": "World",
        "note": "Palestinian officials say Israeli troops killed a teenage boy in the West Bank.",
        "noteMl": "പലസ്തീൻ അധികൃതരുടെ ആരോപണം.",
        "words": [
          {
            "en": "shoot dead",
            "ml": "വെടിവെച്ചുകൊല്ലുക"
          }
        ]
      },
      {
        "title": "Committee to be set up for transparent procurement of library books: Minister Rajmohan",
        "ml": "ലൈബ്രറി പുസ്തകങ്ങൾ സുതാര്യമായി വാങ്ങാൻ സമിതി രൂപീകരിക്കും: മന്ത്രി രാജ്മോഹൻ",
        "section": "Tamil Nadu",
        "note": "A panel will be formed so that books for libraries are bought openly and fairly.",
        "noteMl": "പുസ്തകം വാങ്ങൽ സുതാര്യമാക്കാൻ സമിതി.",
        "words": [
          {
            "en": "to be set up",
            "ml": "രൂപീകരിക്കും"
          },
          {
            "en": "procurement",
            "ml": "സംഭരണം, വാങ്ങൽ"
          }
        ]
      },
      {
        "title": "After Bangladesh rules out passport for Hasina, India says ‘travel document’ needed",
        "ml": "ഹസീനയ്ക്ക് പാസ്പോർട്ട് നൽകില്ലെന്ന് ബംഗ്ലാദേശ്; 'യാത്രാരേഖ' വേണമെന്ന് ഇന്ത്യ",
        "section": "World",
        "note": "Bangladesh will not issue Sheikh Hasina a passport; India says she needs some travel document.",
        "noteMl": "പാസ്പോർട്ട് നിഷേധിച്ചു; യാത്രാരേഖ വേണമെന്ന് ഇന്ത്യ.",
        "words": [
          {
            "en": "rules out",
            "ml": "തള്ളിക്കളയുന്നു, സാധ്യത നിഷേധിക്കുന്നു"
          }
        ]
      },
      {
        "title": "ED attaches assets worth ₹18 crore linked to rice mill loan fraud case",
        "ml": "അരി മിൽ വായ്പാ തട്ടിപ്പ് കേസിൽ ₹18 കോടിയുടെ സ്വത്ത് ഇഡി കണ്ടുകെട്ടി",
        "section": "National",
        "note": "The Enforcement Directorate froze property worth ₹18 crore in a loan fraud case.",
        "noteMl": "വായ്പാ തട്ടിപ്പ് കേസിൽ സ്വത്ത് കണ്ടുകെട്ടി.",
        "words": [
          {
            "en": "ED (Enforcement Directorate)",
            "ml": "എൻഫോഴ്സ്മെന്റ് ഡയറക്ടറേറ്റ്"
          },
          {
            "en": "attaches",
            "ml": "(സ്വത്ത്) കണ്ടുകെട്ടുന്നു"
          }
        ]
      },
      {
        "title": "Government plans curbs on film promotions and commercial events in educational institutions",
        "ml": "വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ സിനിമാ പ്രമോഷനും വാണിജ്യ പരിപാടികൾക്കും നിയന്ത്രണം വരുന്നു",
        "section": "National",
        "note": "The government wants to limit film promotions and business events on campuses.",
        "noteMl": "ക്യാമ്പസുകളിൽ സിനിമാ പ്രചാരണത്തിന് നിയന്ത്രണം.",
        "words": [
          {
            "en": "curbs",
            "ml": "നിയന്ത്രണങ്ങൾ"
          }
        ]
      },
      {
        "title": "Law and order in coma in Tamil Nadu, says Stalin",
        "ml": "തമിഴ്നാട്ടിൽ ക്രമസമാധാനം കോമയിലെന്ന് സ്റ്റാലിൻ",
        "section": "Tamil Nadu",
        "note": "Stalin says law and order in the State has completely broken down.",
        "noteMl": "ക്രമസമാധാനം തകർന്നെന്ന് വിമർശനം.",
        "words": [
          {
            "en": "law and order",
            "ml": "ക്രമസമാധാനം"
          },
          {
            "en": "in coma",
            "ml": "പ്രവർത്തനരഹിതം (ശൈലി)"
          }
        ]
      },
      {
        "title": "Sri Lankan boat drifts into Indian waters due to bad weather, two fishermen detained at Pamban",
        "ml": "മോശം കാലാവസ്ഥയിൽ ശ്രീലങ്കൻ ബോട്ട് ഇന്ത്യൻ കടലിലേക്ക് ഒഴുകിയെത്തി; രണ്ട് മത്സ്യത്തൊഴിലാളികൾ കസ്റ്റഡിയിൽ",
        "section": "Tamil Nadu",
        "note": "Bad weather pushed a Sri Lankan boat into Indian waters; two fishermen were held.",
        "noteMl": "രണ്ടുപേരെ പാമ്പനിൽ തടഞ്ഞുവെച്ചു.",
        "words": [
          {
            "en": "drifts",
            "ml": "ഒഴുകിനീങ്ങുന്നു"
          },
          {
            "en": "detained",
            "ml": "കസ്റ്റഡിയിലെടുത്തു"
          }
        ]
      },
      {
        "title": "NDA wrests Kadapa ZPTCs from YSRCP",
        "ml": "കടപ്പയിലെ ZPTC സീറ്റുകൾ YSRCP-യിൽ നിന്ന് NDA പിടിച്ചെടുത്തു",
        "section": "Andhra Pradesh",
        "note": "The NDA won district council seats in Kadapa that the YSRCP used to hold.",
        "noteMl": "YSRCP കോട്ടയിൽ NDA ജയം.",
        "words": [
          {
            "en": "wrests",
            "ml": "ബലമായി പിടിച്ചെടുക്കുന്നു"
          }
        ]
      },
      {
        "title": "Madras High Court restrains thermal power plant workers from going on strike",
        "ml": "താപവൈദ്യുത നിലയ ജീവനക്കാരുടെ സമരം മദ്രാസ് ഹൈക്കോടതി തടഞ്ഞു",
        "section": "Tamil Nadu",
        "note": "The High Court has stopped power plant workers from striking for now.",
        "noteMl": "സമരത്തിന് കോടതി വിലക്ക്.",
        "words": [
          {
            "en": "restrains",
            "ml": "തടയുന്നു (കോടതി)"
          }
        ]
      },
      {
        "title": "Over 74 lakh voters missing from Tamil Nadu electoral rolls, says citizens’ collective",
        "ml": "തമിഴ്നാട് വോട്ടർ പട്ടികയിൽ നിന്ന് 74 ലക്ഷത്തിലധികം പേർ കാണാനില്ലെന്ന് പൗര കൂട്ടായ്മ",
        "section": "Tamil Nadu",
        "note": "A citizens' group says more than 74 lakh names are missing from the voter list.",
        "noteMl": "വോട്ടർ പട്ടികയിൽ വലിയ കുറവ് എന്ന് ആരോപണം.",
        "words": [
          {
            "en": "electoral rolls",
            "ml": "വോട്ടർ പട്ടിക"
          },
          {
            "en": "collective",
            "ml": "കൂട്ടായ്മ"
          }
        ]
      },
      {
        "title": "Suspension of senior IPS officer extended to March 2027",
        "ml": "മുതിർന്ന ഐപിഎസ് ഉദ്യോഗസ്ഥന്റെ സസ്പെൻഷൻ 2027 മാർച്ച് വരെ നീട്ടി",
        "section": "Andhra Pradesh",
        "note": "A senior police officer's suspension has been lengthened to March 2027.",
        "noteMl": "സസ്പെൻഷൻ നീട്ടി.",
        "words": [
          {
            "en": "IPS (Indian Police Service)",
            "ml": "ഇന്ത്യൻ പോലീസ് സർവീസ്"
          },
          {
            "en": "extended",
            "ml": "നീട്ടി"
          }
        ]
      },
      {
        "title": "Murthy Yadav quits JSP over ticket denial",
        "ml": "സീറ്റ് നിഷേധിച്ചതിനെച്ചൊല്ലി മൂർത്തി യാദവ് ജനസേന പാർട്ടി വിട്ടു",
        "section": "Andhra Pradesh",
        "note": "He left the Jana Sena Party because it did not give him an election ticket.",
        "noteMl": "സീറ്റ് കിട്ടാത്തതിനാൽ പാർട്ടി വിട്ടു.",
        "words": [
          {
            "en": "quits",
            "ml": "രാജിവെക്കുന്നു, വിടുന്നു"
          },
          {
            "en": "ticket denial",
            "ml": "സ്ഥാനാർഥിത്വം നിഷേധിക്കൽ"
          }
        ]
      },
      {
        "title": "Blackstone to buy about 16% stake in India's IIFL Finance for $535 million",
        "ml": "IIFL ഫിനാൻസിന്റെ 16% ഓഹരി 535 ദശലക്ഷം ഡോളറിന് ബ്ലാക്ക്സ്റ്റോൺ വാങ്ങും",
        "section": "Business",
        "note": "US investment firm Blackstone will buy a 16% share of IIFL Finance.",
        "noteMl": "ഓഹരി വാങ്ങൽ പ്രഖ്യാപനം.",
        "words": [
          {
            "en": "stake",
            "ml": "ഓഹരി പങ്കാളിത്തം"
          },
          {
            "en": "to buy",
            "ml": "വാങ്ങും"
          }
        ]
      },
      {
        "title": "Three persons convicted in ₹26.58-lakh commercial tax fraud case in Keralam",
        "ml": "₹26.58 ലക്ഷത്തിന്റെ വാണിജ്യ നികുതി തട്ടിപ്പ് കേസിൽ മൂന്നുപേർ കുറ്റക്കാർ",
        "section": "Kerala",
        "note": "A court found three people guilty in a commercial tax fraud case.",
        "noteMl": "നികുതി തട്ടിപ്പിൽ ശിക്ഷ.",
        "words": [
          {
            "en": "convicted",
            "ml": "കുറ്റക്കാരെന്ന് വിധിച്ചു"
          }
        ]
      },
      {
        "title": "Ladakh announces hill council elections, but fails to assuage protesting civil society groups",
        "ml": "ലഡാക്കിൽ ഹിൽ കൗൺസിൽ തിരഞ്ഞെടുപ്പ് പ്രഖ്യാപിച്ചു; പ്രതിഷേധിക്കുന്ന സംഘടനകളെ തൃപ്തിപ്പെടുത്താനായില്ല",
        "section": "National",
        "note": "Elections were announced, but protest groups are still not satisfied.",
        "noteMl": "പ്രഖ്യാപനത്തിലും പ്രതിഷേധം തീർന്നില്ല.",
        "words": [
          {
            "en": "assuage",
            "ml": "ശമിപ്പിക്കുക, തൃപ്തിപ്പെടുത്തുക"
          },
          {
            "en": "civil society",
            "ml": "പൗരസമൂഹം"
          }
        ]
      },
      {
        "title": "CID unearth webland scam, four arrested",
        "ml": "വെബ്‌ലാൻഡ് തട്ടിപ്പ് സിഐഡി കണ്ടെത്തി; നാലുപേർ അറസ്റ്റിൽ",
        "section": "Andhra Pradesh",
        "note": "Investigators exposed a fraud in online land records and arrested four people.",
        "noteMl": "ഓൺലൈൻ ഭൂരേഖാ തട്ടിപ്പ്.",
        "words": [
          {
            "en": "unearth",
            "ml": "പുറത്തുകൊണ്ടുവരിക, കണ്ടെത്തുക"
          },
          {
            "en": "scam",
            "ml": "തട്ടിപ്പ്, അഴിമതി"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-11",
    edition: "Online · top news",
    items: [
      {
        "title": "Bihar Cabinet hikes 3% DA for employees, pensioners",
        "ml": "ജീവനക്കാർക്കും പെൻഷൻകാർക്കും 3% ഡിഎ വർധിപ്പിച്ച് ബിഹാർ മന്ത്രിസഭ",
        "section": "National",
        "note": "Bihar raised the dearness allowance of its staff and pensioners by 3%.",
        "noteMl": "ക്ഷാമബത്ത 3% കൂട്ടി.",
        "words": [
          {
            "en": "hikes",
            "ml": "വർധിപ്പിക്കുന്നു"
          },
          {
            "en": "DA (dearness allowance)",
            "ml": "ക്ഷാമബത്ത"
          }
        ]
      },
      {
        "title": "Hemant Soren recommends CBI probe into Nisha Bhagat’s death case",
        "ml": "നിഷ ഭഗതിന്റെ മരണക്കേസിൽ സിബിഐ അന്വേഷണത്തിന് ഹേമന്ത് സോറന്റെ ശുപാർശ",
        "section": "National",
        "note": "The Jharkhand CM wants the CBI to investigate a death case.",
        "noteMl": "കേസ് സിബിഐക്ക് വിടാൻ ശുപാർശ.",
        "words": [
          {
            "en": "CBI",
            "ml": "കേന്ദ്ര അന്വേഷണ ഏജൻസി (സിബിഐ)"
          },
          {
            "en": "probe",
            "ml": "അന്വേഷണം"
          }
        ]
      },
      {
        "title": "Bombay High Court declines request for hearing each day in quota petitions for Maratha reservation",
        "ml": "മറാഠാ സംവരണ ഹർജികളിൽ ദിവസേന വാദം കേൾക്കണമെന്ന ആവശ്യം ബോംബെ ഹൈക്കോടതി തള്ളി",
        "section": "National",
        "note": "The court refused to hear the Maratha quota cases every day.",
        "noteMl": "ദിവസേന വാദം കേൾക്കില്ല.",
        "words": [
          {
            "en": "declines",
            "ml": "നിരസിക്കുന്നു"
          },
          {
            "en": "quota",
            "ml": "സംവരണം"
          }
        ]
      },
      {
        "title": "NCP’s Rajesh Patil secures Gokul Dairy chairperson post; setback for Congress",
        "ml": "ഗോകുൽ ഡയറി അധ്യക്ഷസ്ഥാനം എൻസിപിയുടെ രാജേഷ് പാട്ടീലിന്; കോൺഗ്രസിന് തിരിച്ചടി",
        "section": "National",
        "note": "An NCP leader won the dairy co-operative's top post, a loss for Congress.",
        "noteMl": "കോൺഗ്രസിന് തിരിച്ചടി.",
        "words": [
          {
            "en": "secures",
            "ml": "നേടുന്നു"
          },
          {
            "en": "setback",
            "ml": "തിരിച്ചടി"
          }
        ]
      },
      {
        "title": "Register FIR in public library book ‘scam’ case, Madras HC directs DVAC",
        "ml": "ലൈബ്രറി പുസ്തക 'അഴിമതി' കേസിൽ എഫ്ഐആർ രജിസ്റ്റർ ചെയ്യാൻ വിജിലൻസിനോട് മദ്രാസ് ഹൈക്കോടതി",
        "section": "Tamil Nadu",
        "note": "The High Court told the vigilance wing to file a case over library book purchases.",
        "noteMl": "വിജിലൻസ് കേസെടുക്കണം.",
        "words": [
          {
            "en": "directs",
            "ml": "നിർദേശിക്കുന്നു"
          },
          {
            "en": "FIR",
            "ml": "പ്രഥമ വിവര റിപ്പോർട്ട്"
          }
        ]
      },
      {
        "title": "TVK MLA facing allegations of sending obscene messages to Kallakurichi Collector denies charge",
        "ml": "കളക്ടർക്ക് അശ്ലീല സന്ദേശം അയച്ചെന്ന ആരോപണം നിഷേധിച്ച് ടിവികെ എംഎൽഎ",
        "section": "Tamil Nadu",
        "note": "The MLA says the accusation against him is untrue.",
        "noteMl": "ആരോപണം നിഷേധിച്ചു.",
        "words": [
          {
            "en": "denies charge",
            "ml": "ആരോപണം നിഷേധിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Delhi HC disposes of contempt plea against AITA office-bearers",
        "ml": "AITA ഭാരവാഹികൾക്കെതിരായ കോടതിയലക്ഷ്യ ഹർജി ഡൽഹി ഹൈക്കോടതി തീർപ്പാക്കി",
        "section": "Sport",
        "note": "The court closed a contempt petition against tennis association officials.",
        "noteMl": "ഹർജി തീർപ്പാക്കി.",
        "words": [
          {
            "en": "disposes of",
            "ml": "(ഹർജി) തീർപ്പാക്കുന്നു"
          },
          {
            "en": "contempt plea",
            "ml": "കോടതിയലക്ഷ്യ ഹർജി"
          }
        ]
      },
      {
        "title": "Govt. prohibits export of unsorted lithium-ion battery waste, scrap",
        "ml": "തരംതിരിക്കാത്ത ലിഥിയം-അയോൺ ബാറ്ററി മാലിന്യത്തിന്റെ കയറ്റുമതി സർക്കാർ നിരോധിച്ചു",
        "section": "Business",
        "note": "Exporting unsorted lithium battery waste is now banned.",
        "noteMl": "ബാറ്ററി മാലിന്യ കയറ്റുമതിക്ക് വിലക്ക്.",
        "words": [
          {
            "en": "prohibits",
            "ml": "നിരോധിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Mother Dairy raises milk prices by ₹2-4 per litre, effective November 12",
        "ml": "മദർ ഡയറി പാൽവില ലിറ്ററിന് ₹2-4 കൂട്ടി; നവംബർ 12 മുതൽ പ്രാബല്യം",
        "section": "Business",
        "note": "Milk becomes ₹2–4 dearer per litre from 12 November.",
        "noteMl": "പാൽവില കൂടി.",
        "words": [
          {
            "en": "effective",
            "ml": "...മുതൽ പ്രാബല്യത്തിൽ"
          }
        ]
      },
      {
        "title": "What is Megaspeed International, the firm under scanner over Nvidia CEO Jensen Huang affair",
        "ml": "എൻവിഡിയ സിഇഒ വിവാദത്തിൽ അന്വേഷണം നേരിടുന്ന മെഗാസ്പീഡ് ഇന്റർനാഷണൽ എന്താണ്",
        "section": "Business",
        "note": "An explainer on the company being investigated in the Nvidia CEO affair.",
        "noteMl": "വിശദീകരണ ലേഖനം.",
        "words": [
          {
            "en": "under scanner",
            "ml": "അന്വേഷണ വിധേയം"
          }
        ]
      },
      {
        "title": "Former Pakistan PM Imran Khan back in jail after medical treatment, sources say",
        "ml": "ചികിത്സയ്ക്ക് ശേഷം ഇമ്രാൻ ഖാൻ വീണ്ടും ജയിലിലെന്ന് വൃത്തങ്ങൾ",
        "section": "World",
        "note": "Unnamed sources say Imran Khan has been returned to jail after treatment.",
        "noteMl": "ചികിത്സ കഴിഞ്ഞ് ജയിലിൽ.",
        "words": [
          {
            "en": "sources say",
            "ml": "വൃത്തങ്ങൾ പറയുന്നു (പേര് വെളിപ്പെടുത്താത്തവർ)"
          }
        ]
      },
      {
        "title": "Court summons former Keralam DGP R. Sreelekha in Rahul Gandhi defamation case",
        "ml": "രാഹുൽ ഗാന്ധി മാനനഷ്ടക്കേസിൽ മുൻ ഡിജിപി ആർ. ശ്രീലേഖയ്ക്ക് കോടതി സമൻസ്",
        "section": "Kerala",
        "note": "A court has ordered the former police chief to appear in a defamation case.",
        "noteMl": "കോടതിയിൽ ഹാജരാകാൻ സമൻസ്.",
        "words": [
          {
            "en": "summons",
            "ml": "ഹാജരാകാൻ ഉത്തരവിടുന്നു"
          },
          {
            "en": "defamation",
            "ml": "മാനനഷ്ടം"
          }
        ]
      },
      {
        "title": "Amid call for Ladakh protest, CEO prohibits dharnas in Leh, Kargil over upcoming polls",
        "ml": "പ്രതിഷേധ ആഹ്വാനത്തിനിടെ ലേയിലും കാർഗിലിലും ധർണകൾ നിരോധിച്ച് തിരഞ്ഞെടുപ്പ് ഓഫീസർ",
        "section": "National",
        "note": "Because of the coming elections, sit-in protests are banned in Leh and Kargil.",
        "noteMl": "തിരഞ്ഞെടുപ്പ് കാരണം ധർണ നിരോധനം.",
        "words": [
          {
            "en": "amid",
            "ml": "...നിടയിൽ"
          },
          {
            "en": "dharnas",
            "ml": "ധർണകൾ, കുത്തിയിരിപ്പ് സമരം"
          }
        ]
      },
      {
        "title": "Man detained for making hoax bomb threat in Coimbatore",
        "ml": "വ്യാജ ബോംബ് ഭീഷണി മുഴക്കിയയാൾ കോയമ്പത്തൂരിൽ കസ്റ്റഡിയിൽ",
        "section": "Tamil Nadu",
        "note": "Police held a man who made a fake bomb threat.",
        "noteMl": "വ്യാജ ഭീഷണി; ഒരാൾ പിടിയിൽ.",
        "words": [
          {
            "en": "hoax",
            "ml": "വ്യാജം, കബളിപ്പിക്കൽ"
          },
          {
            "en": "detained",
            "ml": "കസ്റ്റഡിയിലെടുത്തു"
          }
        ]
      },
      {
        "title": "Liberia-flagged VLCC hit in Persian Gulf, six Indian seafarers aboard: Sarbananda Sonowal",
        "ml": "ആറ് ഇന്ത്യൻ നാവികരുള്ള ലൈബീരിയൻ കപ്പൽ പേർഷ്യൻ ഗൾഫിൽ ആക്രമിക്കപ്പെട്ടു: സർബാനന്ദ സോനോവാൾ",
        "section": "World",
        "note": "The Shipping Minister says a large oil tanker with six Indians on board was hit.",
        "noteMl": "ഇന്ത്യക്കാരുള്ള ടാങ്കറിന് നേരെ ആക്രമണം.",
        "words": [
          {
            "en": "VLCC",
            "ml": "വളരെ വലിയ എണ്ണക്കപ്പൽ"
          },
          {
            "en": "aboard",
            "ml": "കപ്പലിൽ"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-12",
    edition: "Online · top news",
    items: [
      {
        "title": "UN peacekeepers failed to protect civilians before South Sudan massacre: Amnesty",
        "ml": "ദക്ഷിണ സുഡാൻ കൂട്ടക്കൊലയ്ക്ക് മുമ്പ് സാധാരണക്കാരെ സംരക്ഷിക്കുന്നതിൽ യുഎൻ സമാധാനസേന പരാജയപ്പെട്ടു: ആംനസ്റ്റി",
        "section": "World",
        "note": "Amnesty International blames UN troops for not protecting people.",
        "noteMl": "യുഎൻ സേനയ്ക്കെതിരെ ആംനസ്റ്റി.",
        "words": [
          {
            "en": "peacekeepers",
            "ml": "സമാധാനസേന"
          },
          {
            "en": "massacre",
            "ml": "കൂട്ടക്കൊല"
          }
        ]
      },
      {
        "title": "Trump defends Iran war in Veterans Day address",
        "ml": "വെറ്ററൻസ് ദിന പ്രസംഗത്തിൽ ഇറാൻ യുദ്ധത്തെ ന്യായീകരിച്ച് ട്രംപ്",
        "section": "World",
        "note": "In a speech honouring ex-soldiers, Trump justified the war with Iran.",
        "noteMl": "യുദ്ധത്തെ ന്യായീകരിച്ചു.",
        "words": [
          {
            "en": "defends",
            "ml": "ന്യായീകരിക്കുന്നു"
          },
          {
            "en": "address",
            "ml": "പ്രസംഗം"
          }
        ]
      },
      {
        "title": "AAP meets CAQM, complains about alleged AQI manipulation",
        "ml": "AQI-യിൽ കൃത്രിമം കാണിക്കുന്നുവെന്ന് ആരോപിച്ച് AAP വായു ഗുണനിലവാര കമ്മീഷനെ കണ്ടു",
        "section": "Delhi",
        "note": "AAP says air-quality numbers are being tampered with, and complained to the commission.",
        "noteMl": "AQI കണക്കിൽ കൃത്രിമമെന്ന് ആരോപണം.",
        "words": [
          {
            "en": "alleged",
            "ml": "ആരോപിക്കപ്പെടുന്ന"
          },
          {
            "en": "manipulation",
            "ml": "കൃത്രിമം"
          }
        ]
      },
      {
        "title": "Punjab polls: Congress begins campaign; BJP takes a dig",
        "ml": "പഞ്ചാബ് തിരഞ്ഞെടുപ്പ്: കോൺഗ്രസ് പ്രചാരണം തുടങ്ങി; ബിജെപിയുടെ പരിഹാസം",
        "section": "National",
        "note": "Congress started campaigning in Punjab and the BJP mocked it.",
        "noteMl": "ബിജെപി കളിയാക്കി.",
        "words": [
          {
            "en": "takes a dig",
            "ml": "പരിഹസിക്കുന്നു, കുത്തുവാക്ക് പറയുന്നു"
          },
          {
            "en": "polls",
            "ml": "തിരഞ്ഞെടുപ്പ്"
          }
        ]
      },
      {
        "title": "Keralam government centralising power in Chief Minister’s office: Pinarayi Vijayan",
        "ml": "സർക്കാർ അധികാരം മുഖ്യമന്ത്രിയുടെ ഓഫീസിൽ കേന്ദ്രീകരിക്കുന്നു: പിണറായി വിജയൻ",
        "section": "Kerala",
        "note": "Pinarayi Vijayan accuses the government of putting all power in the CM's office.",
        "noteMl": "അധികാര കേന്ദ്രീകരണമെന്ന് വിമർശനം.",
        "words": [
          {
            "en": "centralising",
            "ml": "കേന്ദ്രീകരിക്കുന്നു"
          }
        ]
      },
      {
        "title": "MP alleges intelligence failure over Nanjangud drug racket",
        "ml": "നഞ്ചൻഗുഡ് ലഹരി റാക്കറ്റിൽ ഇന്റലിജൻസ് വീഴ്ചയെന്ന് എംപി",
        "section": "Karnataka",
        "note": "An MP says intelligence agencies missed a drug ring.",
        "noteMl": "രഹസ്യാന്വേഷണ വീഴ്ചയെന്ന് ആരോപണം.",
        "words": [
          {
            "en": "alleges",
            "ml": "ആരോപിക്കുന്നു"
          },
          {
            "en": "racket",
            "ml": "തട്ടിപ്പ് സംഘം, റാക്കറ്റ്"
          }
        ]
      },
      {
        "title": "Madras High Court sets aside one-month simple imprisonment imposed on IAS officer Anshul Mishra in contempt proceedings",
        "ml": "കോടതിയലക്ഷ്യക്കേസിൽ ഐഎഎസ് ഉദ്യോഗസ്ഥന് വിധിച്ച ഒരു മാസത്തെ തടവ് മദ്രാസ് ഹൈക്കോടതി റദ്ദാക്കി",
        "section": "Tamil Nadu",
        "note": "The High Court cancelled a one-month jail term given to an IAS officer.",
        "noteMl": "തടവുശിക്ഷ റദ്ദാക്കി.",
        "words": [
          {
            "en": "sets aside",
            "ml": "(വിധി) റദ്ദാക്കുന്നു"
          }
        ]
      },
      {
        "title": "Rupee falls 33 paise to close at 94.04 against U.S. dollar",
        "ml": "ഡോളറിനെതിരെ രൂപ 33 പൈസ ഇടിഞ്ഞ് 94.04-ൽ ക്ലോസ് ചെയ്തു",
        "section": "Business",
        "note": "The rupee weakened by 33 paise against the dollar.",
        "noteMl": "രൂപയുടെ മൂല്യം ഇടിഞ്ഞു.",
        "words": [
          {
            "en": "falls",
            "ml": "ഇടിയുന്നു"
          }
        ]
      },
      {
        "title": "Markets extend gains for 3rd day; Sensex ends above 81,900 on FII inflows, lower crude oil",
        "ml": "തുടർച്ചയായ മൂന്നാം ദിവസവും വിപണി നേട്ടത്തിൽ; വിദേശ നിക്ഷേപവും എണ്ണവിലയിടിവും സെൻസെക്സിനെ 81,900-ന് മുകളിലെത്തിച്ചു",
        "section": "Business",
        "note": "Shares rose for a third day, helped by foreign investment and cheaper oil.",
        "noteMl": "ഓഹരി വിപണി മുന്നേറ്റം.",
        "words": [
          {
            "en": "extend gains",
            "ml": "നേട്ടം തുടരുന്നു"
          },
          {
            "en": "on",
            "ml": "...കാരണം (on FII inflows)"
          }
        ]
      },
      {
        "title": "Palaniswami declines to spell out AIADMK stand on possible no-confidence motion against TVK govt.",
        "ml": "ടിവികെ സർക്കാരിനെതിരായ അവിശ്വാസ പ്രമേയത്തിൽ എഐഎഡിഎംകെ നിലപാട് വ്യക്തമാക്കാതെ പളനിസ്വാമി",
        "section": "Tamil Nadu",
        "note": "Palaniswami would not say how his party will vote on a no-confidence motion.",
        "noteMl": "നിലപാട് വെളിപ്പെടുത്തിയില്ല.",
        "words": [
          {
            "en": "spell out",
            "ml": "വ്യക്തമാക്കുക"
          },
          {
            "en": "no-confidence motion",
            "ml": "അവിശ്വാസ പ്രമേയം"
          }
        ]
      },
      {
        "title": "Michael Carrick sacked as Manchester United manager after club’s worst start to a Premier League season",
        "ml": "ക്ലബ്ബിന്റെ ഏറ്റവും മോശം തുടക്കത്തിന് പിന്നാലെ മാഞ്ചസ്റ്റർ യുണൈറ്റഡ് മാനേജർ കാരിക്കിനെ പുറത്താക്കി",
        "section": "Sport",
        "note": "Manchester United fired its manager after a very poor start to the season.",
        "noteMl": "മാനേജറെ പുറത്താക്കി.",
        "words": [
          {
            "en": "sacked",
            "ml": "പിരിച്ചുവിട്ടു, പുറത്താക്കി"
          }
        ]
      },
      {
        "title": "Tamil Nadu Cyber Crime Wing busts illegal SIM box racket in Chennai; two arrested",
        "ml": "ചെന്നൈയിലെ അനധികൃത സിം ബോക്സ് റാക്കറ്റ് സൈബർ ക്രൈം വിഭാഗം തകർത്തു; രണ്ടുപേർ അറസ്റ്റിൽ",
        "section": "Tamil Nadu",
        "note": "Cyber police broke up an illegal call-routing setup and arrested two.",
        "noteMl": "റാക്കറ്റ് പിടികൂടി.",
        "words": [
          {
            "en": "busts",
            "ml": "(സംഘത്തെ) തകർക്കുന്നു, പിടികൂടുന്നു"
          }
        ]
      },
      {
        "title": "Keralam braces for more rains as low-pressure area likely over Bay of Bengal by November 13",
        "ml": "ബംഗാൾ ഉൾക്കടലിൽ ന്യൂനമർദ സാധ്യത; കൂടുതൽ മഴയ്ക്ക് ഒരുങ്ങി കേരളം",
        "section": "Kerala",
        "note": "Kerala expects more rain because a low-pressure area may form.",
        "noteMl": "കൂടുതൽ മഴയ്ക്ക് സാധ്യത.",
        "words": [
          {
            "en": "braces for",
            "ml": "...നെ നേരിടാൻ ഒരുങ്ങുന്നു"
          },
          {
            "en": "low-pressure area",
            "ml": "ന്യൂനമർദം"
          }
        ]
      },
      {
        "title": "Noel Tata retires as Tata Investment chaiperson; Bahram Vakil to succeed him",
        "ml": "ടാറ്റ ഇൻവെസ്റ്റ്മെന്റ് അധ്യക്ഷസ്ഥാനത്ത് നിന്ന് നോയൽ ടാറ്റ വിരമിച്ചു; ബഹ്റാം വക്കീൽ പിൻഗാമി",
        "section": "Business",
        "note": "Noel Tata steps down; Bahram Vakil will take over.",
        "noteMl": "പുതിയ അധ്യക്ഷൻ വരും.",
        "words": [
          {
            "en": "to succeed",
            "ml": "പിൻഗാമിയാകും"
          }
        ]
      },
      {
        "title": "CPI seeks probe into ‘poll discrepancies’",
        "ml": "'തിരഞ്ഞെടുപ്പ് പൊരുത്തക്കേടുകളിൽ' അന്വേഷണം വേണമെന്ന് സിപിഐ",
        "section": "National",
        "note": "CPI wants an inquiry into what it calls irregularities in the polls.",
        "noteMl": "അന്വേഷണം ആവശ്യപ്പെട്ടു.",
        "words": [
          {
            "en": "seeks probe",
            "ml": "അന്വേഷണം ആവശ്യപ്പെടുന്നു"
          },
          {
            "en": "discrepancies",
            "ml": "പൊരുത്തക്കേടുകൾ"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-13",
    edition: "Online · top news",
    items: [
      {
        "title": "Restrictions on me arbitrary, vague: Sonam Wangchuk",
        "ml": "എനിക്കെതിരായ നിയന്ത്രണങ്ങൾ ഏകപക്ഷീയവും അവ്യക്തവും: സോനം വാങ്ചുക്",
        "section": "National",
        "note": "Sonam Wangchuk says the curbs placed on him have no clear basis.",
        "noteMl": "നിയന്ത്രണങ്ങൾ ന്യായമല്ലെന്ന് വാങ്ചുക്.",
        "words": [
          {
            "en": "arbitrary",
            "ml": "ഏകപക്ഷീയം"
          },
          {
            "en": "vague",
            "ml": "അവ്യക്തം"
          }
        ]
      },
      {
        "title": "Palaniswami rejects speculation of Dhinakaran, Sasikala being readmitted into AIADMK",
        "ml": "ദിനകരനെയും ശശികലയെയും എഐഎഡിഎംകെയിൽ തിരിച്ചെടുക്കുമെന്ന അഭ്യൂഹം പളനിസ്വാമി തള്ളി",
        "section": "Tamil Nadu",
        "note": "Palaniswami says the two leaders will not be taken back into the party.",
        "noteMl": "തിരിച്ചെടുക്കില്ല.",
        "words": [
          {
            "en": "speculation",
            "ml": "അഭ്യൂഹം"
          },
          {
            "en": "readmitted",
            "ml": "തിരിച്ചെടുക്കപ്പെട്ട"
          }
        ]
      },
      {
        "title": "Gang held for possession of 500 kg red sanders near Sholinghur in Ranipet",
        "ml": "500 കിലോ രക്തചന്ദനവുമായി സംഘം പിടിയിൽ",
        "section": "Tamil Nadu",
        "note": "Police caught a group carrying 500 kg of red sandalwood.",
        "noteMl": "രക്തചന്ദനം പിടികൂടി.",
        "words": [
          {
            "en": "held",
            "ml": "അറസ്റ്റ് ചെയ്യപ്പെട്ടു"
          },
          {
            "en": "possession",
            "ml": "കൈവശം വെക്കൽ"
          }
        ]
      },
      {
        "title": "TNPDCL seeks nod to procure 3,000 MW",
        "ml": "3,000 മെഗാവാട്ട് വൈദ്യുതി വാങ്ങാൻ അനുമതി തേടി TNPDCL",
        "section": "Tamil Nadu",
        "note": "The power utility wants approval to buy 3,000 MW of electricity.",
        "noteMl": "വൈദ്യുതി വാങ്ങാൻ അനുമതി തേടി.",
        "words": [
          {
            "en": "seeks nod",
            "ml": "അനുമതി തേടുന്നു"
          },
          {
            "en": "procure",
            "ml": "വാങ്ങുക, സംഭരിക്കുക"
          }
        ]
      },
      {
        "title": "CPI(M) leader P. Rajeeve flays police action against protesters in Keralam’s Thiruvananthapuram",
        "ml": "പ്രതിഷേധക്കാർക്കെതിരായ പോലീസ് നടപടിയെ പി. രാജീവ് രൂക്ഷമായി വിമർശിച്ചു",
        "section": "Kerala",
        "note": "P. Rajeeve strongly criticised how police dealt with protesters.",
        "noteMl": "പോലീസ് നടപടിക്കെതിരെ വിമർശനം.",
        "words": [
          {
            "en": "flays",
            "ml": "രൂക്ഷമായി വിമർശിക്കുന്നു"
          }
        ]
      },
      {
        "title": "SFI activists booked for protesting against Minister at Maharaja’s College in Keralam’s Kochi granted anticipatory bail",
        "ml": "മന്ത്രിക്കെതിരെ പ്രതിഷേധിച്ചതിന് കേസെടുത്ത എസ്എഫ്ഐ പ്രവർത്തകർക്ക് മുൻകൂർ ജാമ്യം",
        "section": "Kerala",
        "note": "Students who faced a case for protesting got bail before arrest.",
        "noteMl": "മുൻകൂർ ജാമ്യം ലഭിച്ചു.",
        "words": [
          {
            "en": "booked",
            "ml": "കേസെടുക്കപ്പെട്ട"
          },
          {
            "en": "anticipatory bail",
            "ml": "മുൻകൂർ ജാമ്യം"
          }
        ]
      },
      {
        "title": "A2B sells majority stake to Bodhi Tree in $180-million deal",
        "ml": "180 ദശലക്ഷം ഡോളർ ഇടപാടിൽ A2B ഭൂരിപക്ഷ ഓഹരി ബോധി ട്രീക്ക് വിറ്റു",
        "section": "Business",
        "note": "The restaurant chain sold most of its ownership to an investor.",
        "noteMl": "ഭൂരിപക്ഷ ഓഹരി വിൽപ്പന.",
        "words": [
          {
            "en": "majority stake",
            "ml": "ഭൂരിപക്ഷ ഓഹരി"
          }
        ]
      },
      {
        "title": "Amidst simmering tensions, India-Bangladesh consular dialogue postponed",
        "ml": "സംഘർഷം പുകയുന്നതിനിടെ ഇന്ത്യ-ബംഗ്ലാദേശ് കോൺസുലാർ ചർച്ച മാറ്റിവെച്ചു",
        "section": "World",
        "note": "With tension slowly rising, talks between the two countries were put off.",
        "noteMl": "ചർച്ച മാറ്റിവെച്ചു.",
        "words": [
          {
            "en": "simmering",
            "ml": "പുകഞ്ഞുകൊണ്ടിരിക്കുന്ന"
          },
          {
            "en": "postponed",
            "ml": "മാറ്റിവെച്ചു"
          }
        ]
      },
      {
        "title": "Mahadev betting app kingpin sent to judicial custody till November 19",
        "ml": "മഹാദേവ് ബെറ്റിങ് ആപ്പ് മുഖ്യസൂത്രധാരൻ നവംബർ 19 വരെ ജുഡീഷ്യൽ കസ്റ്റഡിയിൽ",
        "section": "National",
        "note": "The main man behind the betting app was sent to jail custody by the court.",
        "noteMl": "കോടതി കസ്റ്റഡിയിലേക്ക്.",
        "words": [
          {
            "en": "kingpin",
            "ml": "മുഖ്യസൂത്രധാരൻ, തലവൻ"
          },
          {
            "en": "judicial custody",
            "ml": "ജുഡീഷ്യൽ കസ്റ്റഡി"
          }
        ]
      },
      {
        "title": "Crime Branch arrests Kerala Pravasi Association chief for alleged extortion attempt",
        "ml": "പണം തട്ടാൻ ശ്രമിച്ചെന്ന ആരോപണത്തിൽ പ്രവാസി അസോസിയേഷൻ മേധാവിയെ ക്രൈംബ്രാഞ്ച് അറസ്റ്റ് ചെയ്തു",
        "section": "Kerala",
        "note": "He is accused of trying to get money through threats.",
        "noteMl": "ഭീഷണിപ്പെടുത്തി പണം തട്ടൽ ശ്രമം.",
        "words": [
          {
            "en": "extortion",
            "ml": "ഭീഷണിപ്പെടുത്തി പണം തട്ടൽ"
          },
          {
            "en": "alleged",
            "ml": "ആരോപിക്കപ്പെടുന്ന"
          }
        ]
      },
      {
        "title": "AAP-BJP spar over dead fish in Yamuna ahead of Chhath Puja",
        "ml": "ഛഠ് പൂജയ്ക്ക് മുന്നോടിയായി യമുനയിലെ ചത്ത മീനുകളെച്ചൊല്ലി AAP-BJP വാക്പോര്",
        "section": "Delhi",
        "note": "The two parties argued over dead fish found in the river.",
        "noteMl": "യമുനയിലെ മീനുകൾ: വാക്പോര്.",
        "words": [
          {
            "en": "spar",
            "ml": "വാക്പോര് നടത്തുക"
          },
          {
            "en": "ahead of",
            "ml": "...നു മുന്നോടിയായി"
          }
        ]
      },
      {
        "title": "India's Paytm gets preliminary RBI nod for wallet licence; shares hit record high",
        "ml": "വാലറ്റ് ലൈസൻസിന് പേടിഎമ്മിന് ആർബിഐയുടെ പ്രാഥമിക അനുമതി; ഓഹരി റെക്കോർഡ് ഉയരത്തിൽ",
        "section": "Business",
        "note": "Paytm got early approval from the RBI and its share price jumped.",
        "noteMl": "ആർബിഐ അനുമതി, ഓഹരി കുതിപ്പ്.",
        "words": [
          {
            "en": "nod",
            "ml": "അനുമതി"
          },
          {
            "en": "preliminary",
            "ml": "പ്രാഥമിക"
          }
        ]
      },
      {
        "title": "India's exports up 29.9% in October; trade deficit narrows to $20.09 billion",
        "ml": "ഒക്ടോബറിൽ കയറ്റുമതി 29.9% ഉയർന്നു; വ്യാപാരക്കമ്മി 20.09 ബില്യൺ ഡോളറായി കുറഞ്ഞു",
        "section": "Business",
        "note": "Exports grew sharply and the gap between imports and exports got smaller.",
        "noteMl": "കയറ്റുമതി കൂടി, കമ്മി കുറഞ്ഞു.",
        "words": [
          {
            "en": "trade deficit",
            "ml": "വ്യാപാരക്കമ്മി"
          },
          {
            "en": "narrows",
            "ml": "കുറയുന്നു"
          }
        ]
      },
      {
        "title": "Man held for planting hoax ‘hijack’ threat in Kolkata-Mumbai Air India flight",
        "ml": "എയർ ഇന്ത്യ വിമാനത്തിൽ വ്യാജ 'റാഞ്ചൽ' ഭീഷണി; ഒരാൾ പിടിയിൽ",
        "section": "National",
        "note": "A man was arrested for a fake hijack threat on a flight.",
        "noteMl": "വ്യാജ ഭീഷണി.",
        "words": [
          {
            "en": "hoax",
            "ml": "വ്യാജം"
          },
          {
            "en": "hijack",
            "ml": "(വിമാനം) റാഞ്ചൽ"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-14",
    edition: "Online · top news",
    items: [
      {
        "title": "Manipur probe panel gets sixth extension; no sign of report yet",
        "ml": "മണിപ്പൂർ അന്വേഷണ സമിതിക്ക് ആറാം തവണയും കാലാവധി നീട്ടി; റിപ്പോർട്ട് ഇനിയും ഇല്ല",
        "section": "National",
        "note": "The inquiry panel got more time again but has still not reported.",
        "noteMl": "ആറാം തവണ നീട്ടി.",
        "words": [
          {
            "en": "probe panel",
            "ml": "അന്വേഷണ സമിതി"
          },
          {
            "en": "extension",
            "ml": "കാലാവധി നീട്ടൽ"
          }
        ]
      },
      {
        "title": "Palaniswami continues tirade against TVK regime on investment, law and order, crime",
        "ml": "നിക്ഷേപം, ക്രമസമാധാനം, കുറ്റകൃത്യം എന്നിവയിൽ ടിവികെ ഭരണത്തിനെതിരെ പളനിസ്വാമിയുടെ ആക്രമണം തുടരുന്നു",
        "section": "Tamil Nadu",
        "note": "Palaniswami keeps up his sharp attacks on the State government.",
        "noteMl": "വിമർശനം തുടരുന്നു.",
        "words": [
          {
            "en": "tirade",
            "ml": "രൂക്ഷമായ വാക്കാക്രമണം"
          },
          {
            "en": "regime",
            "ml": "ഭരണകൂടം"
          }
        ]
      },
      {
        "title": "Madras High Court refuses to reject election plea against Udhayanidhi’s win from Chepauk-Thiruvallikeni",
        "ml": "ഉദയനിധിയുടെ ജയത്തിനെതിരായ തിരഞ്ഞെടുപ്പ് ഹർജി തള്ളാൻ മദ്രാസ് ഹൈക്കോടതി വിസമ്മതിച്ചു",
        "section": "Tamil Nadu",
        "note": "The case challenging Udhayanidhi's election will go on.",
        "noteMl": "ഹർജി നിലനിൽക്കും.",
        "words": [
          {
            "en": "election plea",
            "ml": "തിരഞ്ഞെടുപ്പ് ഹർജി"
          }
        ]
      },
      {
        "title": "Take steps to control inflation, Anbumani Ramadoss tells State govt.",
        "ml": "വിലക്കയറ്റം നിയന്ത്രിക്കാൻ നടപടി വേണമെന്ന് സംസ്ഥാന സർക്കാരിനോട് അൻബുമണി",
        "section": "Tamil Nadu",
        "note": "Anbumani asks the State to act against rising prices.",
        "noteMl": "വിലക്കയറ്റം തടയണം.",
        "words": [
          {
            "en": "inflation",
            "ml": "വിലക്കയറ്റം"
          }
        ]
      },
      {
        "title": "Students among 24 dead in bus-truck collision in Assam’s Kaziranga",
        "ml": "അസമിലെ കാസിരംഗയിൽ ബസ്-ട്രക്ക് കൂട്ടിയിടിയിൽ മരിച്ച 24 പേരിൽ വിദ്യാർഥികളും",
        "section": "National",
        "note": "Some of the 24 killed in a road crash were students.",
        "noteMl": "വാഹനാപകടത്തിൽ 24 മരണം.",
        "words": [
          {
            "en": "among",
            "ml": "...ഇടയിൽ, ...ഉൾപ്പെടെ"
          },
          {
            "en": "collision",
            "ml": "കൂട്ടിയിടി"
          }
        ]
      },
      {
        "title": "After CBI, ED arrests Mahadev betting app scam accused",
        "ml": "സിബിഐക്ക് പിന്നാലെ മഹാദേവ് ആപ്പ് തട്ടിപ്പ് പ്രതിയെ ഇഡിയും അറസ്റ്റ് ചെയ്തു",
        "section": "National",
        "note": "A second agency has now arrested the betting app fraud accused.",
        "noteMl": "ഇഡിയും അറസ്റ്റ് ചെയ്തു.",
        "words": [
          {
            "en": "accused",
            "ml": "പ്രതി"
          }
        ]
      },
      {
        "title": "Delhi HC takes suo motu cognisance of illegal construction on Sriniwaspuri drain",
        "ml": "ഓടയ്ക്ക് മുകളിലെ അനധികൃത നിർമാണത്തിൽ ഡൽഹി ഹൈക്കോടതി സ്വമേധയാ കേസെടുത്തു",
        "section": "Delhi",
        "note": "The court took up the issue on its own, without a petition.",
        "noteMl": "സ്വമേധയാ കേസ്.",
        "words": [
          {
            "en": "suo motu",
            "ml": "സ്വമേധയാ"
          },
          {
            "en": "cognisance",
            "ml": "(കോടതി) പരിഗണനയ്ക്കെടുക്കൽ"
          }
        ]
      },
      {
        "title": "Avian influenza confirmed in Tamil Nadu’s Cuddalore; over 1,500 chickens culled",
        "ml": "കടലൂരിൽ പക്ഷിപ്പനി സ്ഥിരീകരിച്ചു; 1,500-ലധികം കോഴികളെ കൊന്നൊടുക്കി",
        "section": "Tamil Nadu",
        "note": "Bird flu was confirmed and many chickens were killed to stop it spreading.",
        "noteMl": "പക്ഷിപ്പനി; കോഴികളെ കൊന്നു.",
        "words": [
          {
            "en": "avian influenza",
            "ml": "പക്ഷിപ്പനി"
          },
          {
            "en": "culled",
            "ml": "(രോഗം തടയാൻ) കൊന്നൊടുക്കി"
          }
        ]
      },
      {
        "title": "South Sudan postpones first national elections until February",
        "ml": "ദക്ഷിണ സുഡാൻ ആദ്യ ദേശീയ തിരഞ്ഞെടുപ്പ് ഫെബ്രുവരിയിലേക്ക് മാറ്റി",
        "section": "World",
        "note": "The country's first national vote has been delayed to February.",
        "noteMl": "തിരഞ്ഞെടുപ്പ് മാറ്റിവെച്ചു.",
        "words": [
          {
            "en": "postpones",
            "ml": "മാറ്റിവെക്കുന്നു"
          }
        ]
      },
      {
        "title": "TRAI crackdown on spam: Over 1.24 lakh mobile connections barred or disconnected in July-September",
        "ml": "സ്പാമിനെതിരെ ട്രായ് നടപടി: 1.24 ലക്ഷത്തിലധികം മൊബൈൽ കണക്ഷനുകൾ വിലക്കി",
        "section": "Business",
        "note": "The telecom regulator cut off over 1.24 lakh numbers used for spam.",
        "noteMl": "സ്പാം നമ്പറുകൾ റദ്ദാക്കി.",
        "words": [
          {
            "en": "crackdown",
            "ml": "കർശന നടപടി"
          },
          {
            "en": "barred",
            "ml": "വിലക്കി"
          }
        ]
      },
      {
        "title": "Row erupts at SRFTI over denial of entry to filmmaker Ronny Sen",
        "ml": "സംവിധായകൻ റോണി സെന്നിന് പ്രവേശനം നിഷേധിച്ചതിനെച്ചൊല്ലി SRFTI-ൽ വിവാദം",
        "section": "National",
        "note": "A dispute broke out after a filmmaker was not allowed in.",
        "noteMl": "പ്രവേശന നിഷേധം: വിവാദം.",
        "words": [
          {
            "en": "row erupts",
            "ml": "വിവാദം പൊട്ടിപ്പുറപ്പെടുന്നു"
          },
          {
            "en": "denial",
            "ml": "നിഷേധം"
          }
        ]
      },
      {
        "title": "Trump tells advisers he may hold off on Iran attacks barring new provocations, sources say",
        "ml": "പുതിയ പ്രകോപനമില്ലെങ്കിൽ ഇറാൻ ആക്രമണം നീട്ടിവെച്ചേക്കുമെന്ന് ട്രംപ് ഉപദേശകരോട്; വൃത്തങ്ങൾ",
        "section": "World",
        "note": "Unnamed sources say Trump may pause attacks on Iran unless provoked.",
        "noteMl": "ആക്രമണം തൽക്കാലം നിർത്തിയേക്കും.",
        "words": [
          {
            "en": "hold off",
            "ml": "നീട്ടിവെക്കുക"
          },
          {
            "en": "barring",
            "ml": "...ഇല്ലെങ്കിൽ, ഒഴികെ"
          }
        ]
      },
      {
        "title": "Media access order puts MG University on collision course with Minister",
        "ml": "മാധ്യമ പ്രവേശന ഉത്തരവ്: എംജി സർവകലാശാലയും മന്ത്രിയും നേർക്കുനേർ",
        "section": "Kerala",
        "note": "A university order on media access has set it against the Minister.",
        "noteMl": "സർവകലാശാല-മന്ത്രി ഏറ്റുമുട്ടൽ.",
        "words": [
          {
            "en": "collision course",
            "ml": "ഏറ്റുമുട്ടലിന്റെ വഴി (ശൈലി)"
          }
        ]
      },
      {
        "title": "‘Alive’ to voters’ need to find their names on the electoral roll, ECI assures Supreme Court",
        "ml": "വോട്ടർ പട്ടികയിൽ പേര് കണ്ടെത്താനുള്ള ആവശ്യത്തെക്കുറിച്ച് 'ബോധവാന്മാർ' എന്ന് ECI സുപ്രീം കോടതിക്ക് ഉറപ്പ്",
        "section": "National",
        "note": "The Election Commission told the court it is aware of voters' concerns.",
        "noteMl": "കമ്മീഷന്റെ ഉറപ്പ്.",
        "words": [
          {
            "en": "alive to",
            "ml": "...നെക്കുറിച്ച് ബോധവാന്മാർ"
          },
          {
            "en": "assures",
            "ml": "ഉറപ്പ് നൽകുന്നു"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-15",
    edition: "Online · top news",
    items: [
      {
        "title": "In Jharkhand, even jails are not safe: Babulal Marandi",
        "ml": "ജാർഖണ്ഡിൽ ജയിലുകൾ പോലും സുരക്ഷിതമല്ല: ബാബുലാൽ മറാണ്ടി",
        "section": "National",
        "note": "The BJP leader says law and order is so bad that even jails are unsafe.",
        "noteMl": "ക്രമസമാധാനത്തിനെതിരെ വിമർശനം.",
        "words": [
          {
            "en": "even",
            "ml": "പോലും"
          }
        ]
      },
      {
        "title": "Man held for conducting ‘reconnaissance’ of sensitive locations in Mumbai",
        "ml": "മുംബൈയിലെ സുപ്രധാന ഇടങ്ങൾ 'നിരീക്ഷിച്ച' ആൾ പിടിയിൽ",
        "section": "National",
        "note": "Police arrested a man they say was scouting key places.",
        "noteMl": "ഒരാൾ പിടിയിൽ.",
        "words": [
          {
            "en": "reconnaissance",
            "ml": "രഹസ്യ നിരീക്ഷണം"
          },
          {
            "en": "sensitive",
            "ml": "സുരക്ഷാപ്രാധാന്യമുള്ള"
          }
        ]
      },
      {
        "title": "25 kg of chloral hydrate seized, five arrested in adulterated toddy raids",
        "ml": "മായം ചേർത്ത കള്ള് റെയ്ഡിൽ 25 കിലോ ക്ലോറൽ ഹൈഡ്രേറ്റ് പിടിച്ചു; അഞ്ചുപേർ അറസ്റ്റിൽ",
        "section": "Telangana",
        "note": "Raids on fake toddy found a banned chemical and led to five arrests.",
        "noteMl": "റെയ്ഡിൽ അറസ്റ്റ്.",
        "words": [
          {
            "en": "adulterated",
            "ml": "മായം ചേർത്ത"
          },
          {
            "en": "seized",
            "ml": "പിടിച്ചെടുത്തു"
          }
        ]
      },
      {
        "title": "2 persons held in Tanishq gold heist in Madurai; main accused still at large, say police",
        "ml": "മധുര സ്വർണക്കവർച്ച: രണ്ടുപേർ പിടിയിൽ; മുഖ്യപ്രതി ഒളിവിലെന്ന് പോലീസ്",
        "section": "Tamil Nadu",
        "note": "Two were caught for the jewellery robbery; the main suspect is still free.",
        "noteMl": "മുഖ്യപ്രതി ഒളിവിൽ.",
        "words": [
          {
            "en": "heist",
            "ml": "വൻ കവർച്ച"
          },
          {
            "en": "at large",
            "ml": "ഒളിവിൽ, പിടികിട്ടാതെ"
          }
        ]
      },
      {
        "title": "Massive fire at Gurugram woollens market guts around 25 shops; no injuries",
        "ml": "ഗുരുഗ്രാം കമ്പിളി മാർക്കറ്റിൽ വൻ തീപിടിത്തം; 25 കടകൾ കത്തിനശിച്ചു, ആർക്കും പരിക്കില്ല",
        "section": "National",
        "note": "A big fire destroyed about 25 shops; nobody was hurt.",
        "noteMl": "കടകൾ കത്തിനശിച്ചു.",
        "words": [
          {
            "en": "guts",
            "ml": "പൂർണമായി കത്തിനശിപ്പിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Mahanagar Gas hikes CNG prices in Mumbai by ₹1.5/kg, sixth hike since May",
        "ml": "മുംബൈയിൽ സിഎൻജി വില കിലോയ്ക്ക് ₹1.5 കൂട്ടി; മേയ്ക്ക് ശേഷം ആറാം വർധന",
        "section": "Business",
        "note": "CNG is dearer again in Mumbai, the sixth rise since May.",
        "noteMl": "സിഎൻജി വില കൂടി.",
        "words": [
          {
            "en": "hikes",
            "ml": "വർധിപ്പിക്കുന്നു"
          }
        ]
      },
      {
        "title": "U.S. suggested Kyiv cede land to Russia in exchange for joining NATO, says Zelenskyy",
        "ml": "നാറ്റോ അംഗത്വത്തിന് പകരം റഷ്യയ്ക്ക് ഭൂമി വിട്ടുകൊടുക്കാൻ യുഎസ് നിർദേശിച്ചെന്ന് സെലൻസ്കി",
        "section": "World",
        "note": "Zelenskyy says the U.S. proposed giving up land in return for NATO entry.",
        "noteMl": "ഭൂമി വിട്ടുകൊടുക്കാൻ നിർദേശം.",
        "words": [
          {
            "en": "cede",
            "ml": "വിട്ടുകൊടുക്കുക"
          },
          {
            "en": "in exchange for",
            "ml": "...ന് പകരമായി"
          }
        ]
      },
      {
        "title": "India votes against UNGA resolution calling for global moratorium on death penalty",
        "ml": "വധശിക്ഷ ആഗോളതലത്തിൽ നിർത്തിവെക്കണമെന്ന യുഎൻ പ്രമേയത്തിനെതിരെ ഇന്ത്യ വോട്ട് ചെയ്തു",
        "section": "World",
        "note": "India opposed a UN call to pause the death penalty worldwide.",
        "noteMl": "പ്രമേയത്തെ എതിർത്തു.",
        "words": [
          {
            "en": "moratorium",
            "ml": "താൽക്കാലിക നിർത്തിവെക്കൽ"
          },
          {
            "en": "UNGA",
            "ml": "യുഎൻ പൊതുസഭ"
          }
        ]
      },
      {
        "title": "PNB eyes ₹200 crore quarterly profit each from credit card, cash management verticals",
        "ml": "ക്രെഡിറ്റ് കാർഡ്, ക്യാഷ് മാനേജ്മെന്റ് വിഭാഗങ്ങളിൽ നിന്ന് പാദത്തിൽ ₹200 കോടി ലാഭം ലക്ഷ്യമിട്ട് PNB",
        "section": "Business",
        "note": "The bank aims to earn ₹200 crore a quarter from each of two units.",
        "noteMl": "ലാഭ ലക്ഷ്യം.",
        "words": [
          {
            "en": "eyes",
            "ml": "ലക്ഷ്യമിടുന്നു"
          },
          {
            "en": "verticals",
            "ml": "ബിസിനസ് വിഭാഗങ്ങൾ"
          }
        ]
      },
      {
        "title": "Benjamin Netanyahu calls for Israeli unity government, Eisenkot dismisses ‘tricks’",
        "ml": "ഐക്യ സർക്കാർ വേണമെന്ന് നെതന്യാഹു; 'തന്ത്രങ്ങൾ' എന്ന് തള്ളി ഐസൻകോട്ട്",
        "section": "World",
        "note": "Netanyahu wants a unity government; his rival calls it a trick.",
        "noteMl": "ഐക്യ സർക്കാർ ആവശ്യം തള്ളി.",
        "words": [
          {
            "en": "dismisses",
            "ml": "തള്ളിക്കളയുന്നു"
          }
        ]
      },
      {
        "title": "Murder of BJP worker by own party members sparks speculation of intra-party feud in West Bengal",
        "ml": "സ്വന്തം പാർട്ടിക്കാർ ബിജെപി പ്രവർത്തകനെ കൊന്നത് പാർട്ടിക്കുള്ളിലെ കലഹത്തെക്കുറിച്ച് അഭ്യൂഹമുയർത്തി",
        "section": "West Bengal",
        "note": "The killing has led to talk of infighting within the party.",
        "noteMl": "പാർട്ടിക്കുള്ളിൽ ഭിന്നതയെന്ന് സംശയം.",
        "words": [
          {
            "en": "sparks",
            "ml": "...ക്ക് തിരികൊളുത്തുന്നു, ഉണ്ടാക്കുന്നു"
          },
          {
            "en": "feud",
            "ml": "പക, കലഹം"
          }
        ]
      },
      {
        "title": "Power outage during Minister’s meeting: TNEB JE placed under suspension in Virudhunagar",
        "ml": "മന്ത്രിയുടെ യോഗത്തിനിടെ വൈദ്യുതി മുടക്കം: ജൂനിയർ എഞ്ചിനീയർക്ക് സസ്പെൻഷൻ",
        "section": "Tamil Nadu",
        "note": "An engineer was suspended after power failed during a ministerial meeting.",
        "noteMl": "എഞ്ചിനീയർക്ക് സസ്പെൻഷൻ.",
        "words": [
          {
            "en": "placed under suspension",
            "ml": "സസ്പെൻഡ് ചെയ്തു"
          }
        ]
      },
      {
        "title": "P. Viswanathan and Selvaperunthagai spar over comments on T.N.’s law and order situation",
        "ml": "തമിഴ്നാട്ടിലെ ക്രമസമാധാനത്തെച്ചൊല്ലി വിശ്വനാഥനും സെൽവപെരുന്തഗൈയും തമ്മിൽ വാക്പോര്",
        "section": "Tamil Nadu",
        "note": "Two leaders traded words over law and order remarks.",
        "noteMl": "വാക്പോര്.",
        "words": [
          {
            "en": "spar",
            "ml": "വാക്പോര് നടത്തുക"
          }
        ]
      },
      {
        "title": "Southeast Asian leaders denounce violence in Myanmar, extend ban on its leader",
        "ml": "മ്യാൻമറിലെ അക്രമത്തെ അപലപിച്ച് ആസിയാൻ നേതാക്കൾ; നേതാവിനുള്ള വിലക്ക് നീട്ടി",
        "section": "World",
        "note": "ASEAN leaders condemned the violence and kept Myanmar's ruler barred.",
        "noteMl": "അക്രമത്തെ അപലപിച്ചു.",
        "words": [
          {
            "en": "denounce",
            "ml": "അപലപിക്കുക"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-16",
    edition: "Online · top news",
    items: [
      {
        "title": "Violent protests erupt in Hasina’s hometown as tensions rise over her proposed return to Bangladesh",
        "ml": "ഹസീനയുടെ തിരിച്ചുവരവിനെച്ചൊല്ലി സംഘർഷം; ജന്മനാട്ടിൽ അക്രമാസക്ത പ്രതിഷേധം",
        "section": "World",
        "note": "Plans for Sheikh Hasina to return have led to violent protests in her home town.",
        "noteMl": "തിരിച്ചുവരവ് പദ്ധതിക്കെതിരെ പ്രതിഷേധം.",
        "words": [
          {
            "en": "erupt",
            "ml": "പൊട്ടിപ്പുറപ്പെടുന്നു"
          },
          {
            "en": "as",
            "ml": "...മ്പോൾ"
          }
        ]
      },
      {
        "title": "Eight injured as building collapses during hotel construction in Delhi’s Paharganj",
        "ml": "ഡൽഹിയിൽ നിർമാണത്തിലിരുന്ന ഹോട്ടൽ കെട്ടിടം തകർന്ന് എട്ടുപേർക്ക് പരിക്ക്",
        "section": "Delhi",
        "note": "A building under construction fell, hurting eight people.",
        "noteMl": "കെട്ടിടം തകർന്നു.",
        "words": [
          {
            "en": "collapses",
            "ml": "തകർന്നുവീഴുന്നു"
          }
        ]
      },
      {
        "title": "West Bengal BJP president alleges conversions at missionary schools; draws flak",
        "ml": "മിഷനറി സ്കൂളുകളിൽ മതപരിവർത്തനമെന്ന് ബംഗാൾ ബിജെപി അധ്യക്ഷൻ; വിമർശനം",
        "section": "West Bengal",
        "note": "His claim about religious conversions in schools was widely criticised.",
        "noteMl": "ആരോപണത്തിന് വിമർശനം.",
        "words": [
          {
            "en": "draws flak",
            "ml": "വിമർശനം നേരിടുന്നു"
          },
          {
            "en": "alleges",
            "ml": "ആരോപിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Tamil Nadu government withdraws 600 cases against farmers and teachers",
        "ml": "കർഷകർക്കും അധ്യാപകർക്കുമെതിരായ 600 കേസുകൾ തമിഴ്നാട് സർക്കാർ പിൻവലിച്ചു",
        "section": "Tamil Nadu",
        "note": "The State dropped 600 cases filed against farmers and teachers.",
        "noteMl": "കേസുകൾ പിൻവലിച്ചു.",
        "words": [
          {
            "en": "withdraws",
            "ml": "പിൻവലിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Delhi Paharganj building collapse: FIR filed against property owner, contractor",
        "ml": "പഹാഡ്ഗഞ്ച് കെട്ടിടം തകർച്ച: ഉടമയ്ക്കും കരാറുകാരനുമെതിരെ എഫ്ഐആർ",
        "section": "Delhi",
        "note": "Police registered a case against the owner and the builder.",
        "noteMl": "കേസ് രജിസ്റ്റർ ചെയ്തു.",
        "words": [
          {
            "en": "FIR filed",
            "ml": "എഫ്ഐആർ രജിസ്റ്റർ ചെയ്തു"
          }
        ]
      },
      {
        "title": "Ram temple donation theft: Congress seeks new SIT reporting exclusively to Supreme Court",
        "ml": "രാമക്ഷേത്ര സംഭാവന മോഷണം: സുപ്രീം കോടതിക്ക് മാത്രം റിപ്പോർട്ട് ചെയ്യുന്ന പുതിയ SIT വേണമെന്ന് കോൺഗ്രസ്",
        "section": "National",
        "note": "Congress wants a special team that answers only to the Supreme Court.",
        "noteMl": "പുതിയ അന്വേഷണ സംഘം വേണം.",
        "words": [
          {
            "en": "SIT",
            "ml": "പ്രത്യേക അന്വേഷണ സംഘം"
          }
        ]
      },
      {
        "title": "SIO activists detained in pre-dawn swoop before Israel-T-Hub event in Hyderabad",
        "ml": "പുലർച്ചെ നടത്തിയ മിന്നൽ നടപടിയിൽ എസ്ഐഒ പ്രവർത്തകർ കസ്റ്റഡിയിൽ",
        "section": "Telangana",
        "note": "Police held student activists early in the morning before an event.",
        "noteMl": "മുൻകരുതൽ കസ്റ്റഡി.",
        "words": [
          {
            "en": "swoop",
            "ml": "മിന്നൽ നടപടി, റെയ്ഡ്"
          },
          {
            "en": "detained",
            "ml": "കസ്റ്റഡിയിലെടുത്തു"
          }
        ]
      },
      {
        "title": "Police bust examination cheating racket in Jammu; 14 arrested",
        "ml": "ജമ്മുവിൽ പരീക്ഷാ കോപ്പിയടി റാക്കറ്റ് പോലീസ് തകർത്തു; 14 അറസ്റ്റ്",
        "section": "National",
        "note": "Police broke up an exam cheating gang and arrested 14.",
        "noteMl": "കോപ്പിയടി സംഘം പിടിയിൽ.",
        "words": [
          {
            "en": "bust",
            "ml": "പിടികൂടുക"
          },
          {
            "en": "racket",
            "ml": "തട്ടിപ്പ് സംഘം"
          }
        ]
      },
      {
        "title": "U.S. govt seeks 24-year prison term for Nikhil Gupta in Pannun murder-for-hire plot",
        "ml": "പന്നൂൻ വധഗൂഢാലോചനക്കേസിൽ നിഖിൽ ഗുപ്തയ്ക്ക് 24 വർഷം തടവ് ആവശ്യപ്പെട്ട് യുഎസ്",
        "section": "World",
        "note": "U.S. prosecutors want 24 years in jail for Nikhil Gupta.",
        "noteMl": "24 വർഷം തടവ് ആവശ്യം.",
        "words": [
          {
            "en": "plot",
            "ml": "ഗൂഢാലോചന"
          },
          {
            "en": "murder-for-hire",
            "ml": "കൂലിക്കൊല"
          }
        ]
      },
      {
        "title": "Release White Paper on books procured for libraries in the last 20 years, High Court tells T.N. government",
        "ml": "20 വർഷത്തെ ലൈബ്രറി പുസ്തക സംഭരണത്തെക്കുറിച്ച് ധവളപത്രം ഇറക്കണമെന്ന് ഹൈക്കോടതി",
        "section": "Tamil Nadu",
        "note": "The court wants the State to publish a full report on library book purchases.",
        "noteMl": "ധവളപത്രം വേണം.",
        "words": [
          {
            "en": "White Paper",
            "ml": "ധവളപത്രം (ഔദ്യോഗിക വിശദ റിപ്പോർട്ട്)"
          }
        ]
      },
      {
        "title": "Delhi car blast: SC allows transfer of cases to capital for joint trial",
        "ml": "ഡൽഹി കാർ സ്ഫോടനം: കേസുകൾ സംയുക്ത വിചാരണയ്ക്ക് തലസ്ഥാനത്തേക്ക് മാറ്റാൻ സുപ്രീം കോടതി അനുമതി",
        "section": "National",
        "note": "The cases can now be heard together in Delhi.",
        "noteMl": "സംയുക്ത വിചാരണ.",
        "words": [
          {
            "en": "joint trial",
            "ml": "സംയുക്ത വിചാരണ"
          }
        ]
      },
      {
        "title": "Trump says ‘would not mind’ Huang being reinstated at Nvidia",
        "ml": "ഹുവാങ്ങിനെ എൻവിഡിയയിൽ തിരിച്ചെടുക്കുന്നതിൽ 'വിരോധമില്ല' എന്ന് ട്രംപ്",
        "section": "Business",
        "note": "Trump is fine with Jensen Huang returning as Nvidia's chief.",
        "noteMl": "തിരിച്ചുവരവിന് പിന്തുണ.",
        "words": [
          {
            "en": "reinstated",
            "ml": "തിരികെ നിയമിക്കപ്പെട്ട"
          }
        ]
      },
      {
        "title": "CBI arrests two NCB Sub-Inspectors in alleged ₹25-lakh bribery case",
        "ml": "₹25 ലക്ഷം കൈക്കൂലിക്കേസിൽ രണ്ട് NCB സബ് ഇൻസ്പെക്ടർമാരെ CBI അറസ്റ്റ് ചെയ്തു",
        "section": "National",
        "note": "Two narcotics bureau officers were arrested for taking a bribe.",
        "noteMl": "കൈക്കൂലി കേസ്.",
        "words": [
          {
            "en": "bribery",
            "ml": "കൈക്കൂലി"
          },
          {
            "en": "NCB",
            "ml": "നാർക്കോട്ടിക്സ് കൺട്രോൾ ബ്യൂറോ"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-17",
    edition: "Online · top news",
    items: [
      {
        "title": "MLAs cannot threaten government officials and browbeat them into submission: Madras High Court",
        "ml": "എംഎൽഎമാർക്ക് ഉദ്യോഗസ്ഥരെ ഭീഷണിപ്പെടുത്തി വരുതിയിലാക്കാനാവില്ല: മദ്രാസ് ഹൈക്കോടതി",
        "section": "Tamil Nadu",
        "note": "The court says lawmakers must not bully officials.",
        "noteMl": "ഉദ്യോഗസ്ഥരെ ഭീഷണിപ്പെടുത്തരുത്.",
        "words": [
          {
            "en": "browbeat",
            "ml": "ഭീഷണിപ്പെടുത്തി വഴങ്ങിക്കുക"
          }
        ]
      },
      {
        "title": "Eight killed, 26 injured as bus plunges into 100-metre gorge in Uttarakhand's Tehri Garhwal",
        "ml": "ഉത്തരാഖണ്ഡിൽ ബസ് 100 മീറ്റർ താഴ്ചയിലേക്ക് മറിഞ്ഞ് എട്ട് മരണം, 26 പേർക്ക് പരിക്ക്",
        "section": "National",
        "note": "A bus fell into a deep gorge, killing eight.",
        "noteMl": "ബസ് അപകടം.",
        "words": [
          {
            "en": "plunges",
            "ml": "കുത്തനെ വീഴുന്നു"
          },
          {
            "en": "gorge",
            "ml": "മലയിടുക്ക്"
          }
        ]
      },
      {
        "title": "Tokyo lodges protest after aircraft believed to be Russian violate Japan airspace",
        "ml": "റഷ്യൻ എന്ന് കരുതുന്ന വിമാനങ്ങൾ വ്യോമാതിർത്തി ലംഘിച്ചു; ജപ്പാൻ പ്രതിഷേധം അറിയിച്ചു",
        "section": "World",
        "note": "Japan formally complained after planes, thought to be Russian, entered its airspace.",
        "noteMl": "ഔദ്യോഗിക പ്രതിഷേധം.",
        "words": [
          {
            "en": "lodges protest",
            "ml": "ഔദ്യോഗികമായി പ്രതിഷേധം അറിയിക്കുന്നു"
          },
          {
            "en": "Tokyo",
            "ml": "ജപ്പാൻ സർക്കാർ (തലസ്ഥാനത്തിന്റെ പേര്)"
          }
        ]
      },
      {
        "title": "Jimmy Tata backs Tata Sons listing, accuses Noel of ‘back-door takeover’",
        "ml": "ടാറ്റ സൺസ് ലിസ്റ്റിങ്ങിനെ പിന്തുണച്ച് ജിമ്മി ടാറ്റ; നോയലിനെതിരെ 'പിൻവാതിൽ പിടിച്ചെടുക്കൽ' ആരോപണം",
        "section": "Business",
        "note": "Jimmy Tata supports listing Tata Sons and accuses Noel of a hidden takeover.",
        "noteMl": "കുടുംബത്തിനുള്ളിൽ തർക്കം.",
        "words": [
          {
            "en": "backs",
            "ml": "പിന്തുണയ്ക്കുന്നു"
          },
          {
            "en": "takeover",
            "ml": "നിയന്ത്രണം പിടിച്ചെടുക്കൽ"
          }
        ]
      },
      {
        "title": "Export duty on diesel hiked ₹2.5/litre, ATF ₹1.5/litre, petrol remains nil",
        "ml": "ഡീസൽ കയറ്റുമതി തീരുവ ലിറ്ററിന് ₹2.5, എടിഎഫ് ₹1.5 കൂട്ടി; പെട്രോളിന് ഇല്ല",
        "section": "Business",
        "note": "The tax on exporting diesel and jet fuel went up; petrol stays tax-free.",
        "noteMl": "കയറ്റുമതി തീരുവ കൂട്ടി.",
        "words": [
          {
            "en": "export duty",
            "ml": "കയറ്റുമതി തീരുവ"
          },
          {
            "en": "hiked",
            "ml": "കൂട്ടി"
          }
        ]
      },
      {
        "title": "U.S. federal court strikes down fixed terms for student, exchange visas",
        "ml": "വിദ്യാർഥി വിസകൾക്ക് നിശ്ചിത കാലാവധി എന്ന നിയമം യുഎസ് കോടതി റദ്ദാക്കി",
        "section": "World",
        "note": "A U.S. court cancelled a rule fixing time limits on student visas.",
        "noteMl": "നിയമം റദ്ദാക്കി.",
        "words": [
          {
            "en": "strikes down",
            "ml": "(നിയമം) റദ്ദാക്കുന്നു"
          }
        ]
      },
      {
        "title": "Bilkis Bano case: Supreme Court suspends sentence, grants bail to two convicts",
        "ml": "ബിൽക്കിസ് ബാനോ കേസ്: രണ്ട് കുറ്റവാളികളുടെ ശിക്ഷ സുപ്രീം കോടതി മരവിപ്പിച്ചു, ജാമ്യം നൽകി",
        "section": "National",
        "note": "The Supreme Court paused the sentence of two convicts and gave them bail.",
        "noteMl": "ശിക്ഷ മരവിപ്പിച്ചു.",
        "words": [
          {
            "en": "suspends sentence",
            "ml": "ശിക്ഷ മരവിപ്പിക്കുന്നു"
          },
          {
            "en": "convicts",
            "ml": "കുറ്റവാളികൾ"
          }
        ]
      },
      {
        "title": "Kerala High Court refers petition challenging clean chit to Chief Minister in Punarjani case to Chief Justice",
        "ml": "പുനർജനി കേസിൽ മുഖ്യമന്ത്രിക്ക് ക്ലീൻ ചിറ്റ് നൽകിയതിനെതിരായ ഹർജി ചീഫ് ജസ്റ്റിസിന് വിട്ടു",
        "section": "Kerala",
        "note": "The petition against the CM's clean chit goes to the Chief Justice.",
        "noteMl": "ഹർജി ചീഫ് ജസ്റ്റിസിന്.",
        "words": [
          {
            "en": "clean chit",
            "ml": "കുറ്റവിമുക്ത സാക്ഷ്യം, ക്ലീൻ ചിറ്റ്"
          },
          {
            "en": "refers",
            "ml": "കൈമാറുന്നു"
          }
        ]
      },
      {
        "title": "Six witnesses turn hostile in Abhimanyu murder trial",
        "ml": "അഭിമന്യു വധക്കേസ് വിചാരണയിൽ ആറ് സാക്ഷികൾ കൂറുമാറി",
        "section": "Kerala",
        "note": "Six witnesses went back on their earlier statements in court.",
        "noteMl": "സാക്ഷികൾ കൂറുമാറി.",
        "words": [
          {
            "en": "turn hostile",
            "ml": "(സാക്ഷി) കൂറുമാറുക"
          }
        ]
      },
      {
        "title": "Turn your bulldozer towards EC: Akhilesh Yadav taunts CM Yogi Adityanath",
        "ml": "ബുൾഡോസർ തിരഞ്ഞെടുപ്പ് കമ്മീഷന് നേരെ തിരിക്കൂ: യോഗിയെ പരിഹസിച്ച് അഖിലേഷ്",
        "section": "National",
        "note": "Akhilesh mocks the UP CM, telling him to aim his bulldozer at the EC.",
        "noteMl": "പരിഹാസം.",
        "words": [
          {
            "en": "taunts",
            "ml": "പരിഹസിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Opposition seeks judicial probe into ‘irregularities’ in Keralam govt.’s power purchase deals",
        "ml": "വൈദ്യുതി വാങ്ങൽ കരാറുകളിലെ 'ക്രമക്കേടുകളിൽ' ജുഡീഷ്യൽ അന്വേഷണം വേണമെന്ന് പ്രതിപക്ഷം",
        "section": "Kerala",
        "note": "The Opposition wants a judge-led inquiry into power purchase deals.",
        "noteMl": "ജുഡീഷ്യൽ അന്വേഷണം ആവശ്യം.",
        "words": [
          {
            "en": "judicial probe",
            "ml": "ജുഡീഷ്യൽ അന്വേഷണം"
          }
        ]
      },
      {
        "title": "SC upholds stay on Azam Khan’s conviction in fake birth certificate case, extends relief to wife, son",
        "ml": "അസം ഖാന്റെ ശിക്ഷയ്ക്കുള്ള സ്റ്റേ സുപ്രീം കോടതി ശരിവെച്ചു; ഭാര്യയ്ക്കും മകനും ആശ്വാസം",
        "section": "National",
        "note": "The Supreme Court kept the stay in place and gave the same relief to his family.",
        "noteMl": "സ്റ്റേ തുടരും.",
        "words": [
          {
            "en": "upholds",
            "ml": "ശരിവെക്കുന്നു"
          },
          {
            "en": "relief",
            "ml": "ആശ്വാസം (കോടതി)"
          }
        ]
      },
      {
        "title": "Suresh Gopi mocks E20 petrol critics",
        "ml": "E20 പെട്രോൾ വിമർശകരെ പരിഹസിച്ച് സുരേഷ് ഗോപി",
        "section": "Kerala",
        "note": "The Minister made fun of those who criticise ethanol-blended petrol.",
        "noteMl": "വിമർശകർക്ക് പരിഹാസം.",
        "words": [
          {
            "en": "mocks",
            "ml": "പരിഹസിക്കുന്നു"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-18",
    edition: "Online · top news",
    items: [
      {
        "title": "Won’t allow hiring of outsiders, hire locals: J&K CM Omar Abdullah to companies",
        "ml": "പുറത്തുനിന്നുള്ളവരെ നിയമിക്കാൻ അനുവദിക്കില്ല, നാട്ടുകാരെ നിയമിക്കൂ: കമ്പനികളോട് ഒമർ അബ്ദുള്ള",
        "section": "National",
        "note": "Omar Abdullah tells companies to give jobs to local people.",
        "noteMl": "നാട്ടുകാർക്ക് ജോലി.",
        "words": [
          {
            "en": "outsiders",
            "ml": "പുറത്തുനിന്നുള്ളവർ"
          }
        ]
      },
      {
        "title": "Ex-Nvidia CEO Jensen Huang acknowledges ‘mistakes,’ signals interest in return if company chooses",
        "ml": "'തെറ്റുകൾ' സമ്മതിച്ച് മുൻ എൻവിഡിയ സിഇഒ; കമ്പനി ആഗ്രഹിച്ചാൽ തിരിച്ചുവരാൻ താൽപര്യം",
        "section": "Business",
        "note": "Jensen Huang admits mistakes and hints he would come back.",
        "noteMl": "തിരിച്ചുവരവിന് സൂചന.",
        "words": [
          {
            "en": "acknowledges",
            "ml": "സമ്മതിക്കുന്നു"
          },
          {
            "en": "signals",
            "ml": "സൂചന നൽകുന്നു"
          }
        ]
      },
      {
        "title": "Russian military transport plane crashes in Siberia, killing 19: Defence Ministry",
        "ml": "സൈബീരിയയിൽ റഷ്യൻ സൈനിക വിമാനം തകർന്ന് 19 മരണം: പ്രതിരോധ മന്ത്രാലയം",
        "section": "World",
        "note": "Russia's Defence Ministry says a military plane crash killed 19.",
        "noteMl": "വിമാനാപകടം.",
        "words": [
          {
            "en": "crashes",
            "ml": "തകർന്നുവീഴുന്നു"
          }
        ]
      },
      {
        "title": "Ruckus erupts between SFI activists and police over setting up bookstalls near Calcutta University",
        "ml": "പുസ്തകസ്റ്റാൾ സ്ഥാപിക്കുന്നതിനെച്ചൊല്ലി എസ്എഫ്ഐ-പോലീസ് സംഘർഷം",
        "section": "West Bengal",
        "note": "Students and police clashed over bookstalls.",
        "noteMl": "ബഹളം.",
        "words": [
          {
            "en": "ruckus",
            "ml": "ബഹളം, സംഘർഷം"
          }
        ]
      },
      {
        "title": "NGT declines to stay EC given to Musi river front project",
        "ml": "മൂസി നദീതീര പദ്ധതിയുടെ പാരിസ്ഥിതികാനുമതി സ്റ്റേ ചെയ്യാൻ NGT വിസമ്മതിച്ചു",
        "section": "Telangana",
        "note": "The green tribunal refused to pause the project's environmental clearance.",
        "noteMl": "അനുമതി തുടരും.",
        "words": [
          {
            "en": "stay",
            "ml": "തൽക്കാലം നിർത്തിവെക്കൽ"
          },
          {
            "en": "EC (environmental clearance)",
            "ml": "പാരിസ്ഥിതികാനുമതി"
          }
        ]
      },
      {
        "title": "Tension erupts outside Vanchiyoor court after verdict in Ranjith murder case",
        "ml": "രഞ്ജിത്ത് വധക്കേസ് വിധിക്ക് പിന്നാലെ വഞ്ചിയൂർ കോടതിക്ക് പുറത്ത് സംഘർഷം",
        "section": "Kerala",
        "note": "There was trouble outside the court after the judgment.",
        "noteMl": "വിധിക്ക് ശേഷം സംഘർഷം.",
        "words": [
          {
            "en": "verdict",
            "ml": "വിധി"
          }
        ]
      },
      {
        "title": "Thirupparankundram row: T.N. govt pushes for stay of HC order to avoid breach of peace",
        "ml": "തിരുപ്പറങ്കുന്റം വിവാദം: സമാധാന ലംഘനം ഒഴിവാക്കാൻ ഹൈക്കോടതി ഉത്തരവിന് സ്റ്റേ തേടി സർക്കാർ",
        "section": "Tamil Nadu",
        "note": "The State wants the High Court order paused to keep the peace.",
        "noteMl": "സ്റ്റേ തേടി.",
        "words": [
          {
            "en": "breach of peace",
            "ml": "സമാധാന ലംഘനം"
          }
        ]
      },
      {
        "title": "Three arrested as Telangana’s EAGLE Force busts Snapchat-based drug network in Hyderabad",
        "ml": "സ്നാപ്ചാറ്റ് വഴിയുള്ള ലഹരി ശൃംഖല തകർത്തു; മൂന്നുപേർ അറസ്റ്റിൽ",
        "section": "Telangana",
        "note": "A police unit broke up a drug ring run through Snapchat.",
        "noteMl": "ലഹരി ശൃംഖല പിടിയിൽ.",
        "words": [
          {
            "en": "busts",
            "ml": "പിടികൂടുന്നു"
          }
        ]
      },
      {
        "title": "RBI may hike interest rates by 75 basis points by Q2 CY27: Goldman Sachs",
        "ml": "2027 രണ്ടാം പാദത്തോടെ ആർബിഐ പലിശ 0.75% കൂട്ടിയേക്കും: ഗോൾഡ്മാൻ സാക്സ്",
        "section": "Business",
        "note": "A global bank expects the RBI to raise rates by 0.75 percentage points.",
        "noteMl": "പലിശ കൂടിയേക്കും.",
        "words": [
          {
            "en": "basis points",
            "ml": "ബേസിസ് പോയിന്റ് (100 = 1%)"
          }
        ]
      },
      {
        "title": "AAIB probe report into AI 171 crash at ‘fag end’, Centre tells Supreme Court",
        "ml": "AI 171 അപകട അന്വേഷണ റിപ്പോർട്ട് 'അവസാന ഘട്ടത്തിൽ' എന്ന് കേന്ദ്രം സുപ്രീം കോടതിയിൽ",
        "section": "National",
        "note": "The government says the crash report is almost finished.",
        "noteMl": "റിപ്പോർട്ട് ഉടൻ.",
        "words": [
          {
            "en": "fag end",
            "ml": "അവസാന ഭാഗം"
          }
        ]
      },
      {
        "title": "Cyclone Akvan veers north and may cross anywhere from Narsapur to Puri, 10 Andhra districts on rain alert",
        "ml": "അക്വാൻ ചുഴലിക്കാറ്റ് വടക്കോട്ട് ദിശമാറി; 10 ആന്ധ്ര ജില്ലകളിൽ മഴ മുന്നറിയിപ്പ്",
        "section": "Andhra Pradesh",
        "note": "The cyclone changed direction northward; ten districts are on alert.",
        "noteMl": "ദിശമാറി, മുന്നറിയിപ്പ്.",
        "words": [
          {
            "en": "veers",
            "ml": "ദിശ മാറുന്നു"
          }
        ]
      },
      {
        "title": "Bombay High Court quashes ICICI Bank’s nod to prosecute ex-CEO Chanda Kochhar in ‘loan fraud’ case",
        "ml": "ചന്ദ കൊച്ചാറിനെ പ്രോസിക്യൂട്ട് ചെയ്യാനുള്ള ഐസിഐസിഐ അനുമതി ബോംബെ ഹൈക്കോടതി റദ്ദാക്കി",
        "section": "Business",
        "note": "The court cancelled the bank's approval to prosecute its former CEO.",
        "noteMl": "അനുമതി റദ്ദാക്കി.",
        "words": [
          {
            "en": "quashes",
            "ml": "റദ്ദാക്കുന്നു"
          },
          {
            "en": "nod",
            "ml": "അനുമതി"
          }
        ]
      },
      {
        "title": "Bangladesh deploys paramilitary as unrest grows over Hasina's return",
        "ml": "ഹസീനയുടെ തിരിച്ചുവരവിനെച്ചൊല്ലി അസ്വസ്ഥത; ബംഗ്ലാദേശ് അർധസൈനികരെ വിന്യസിച്ചു",
        "section": "World",
        "note": "Security forces were sent out as protests over Hasina spread.",
        "noteMl": "അർധസൈനിക വിന്യാസം.",
        "words": [
          {
            "en": "deploys",
            "ml": "വിന്യസിക്കുന്നു"
          },
          {
            "en": "unrest",
            "ml": "അസ്വസ്ഥത, സംഘർഷം"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-19",
    edition: "Online · top news",
    items: [
      {
        "title": "U.S., Venezuela sign deal to re-establish military ties: Hegseth",
        "ml": "സൈനിക ബന്ധം പുനഃസ്ഥാപിക്കാൻ യുഎസും വെനസ്വേലയും കരാർ ഒപ്പിട്ടു: ഹെഗ്സെത്",
        "section": "World",
        "note": "The U.S. Defence Secretary says the two countries agreed to restore military links.",
        "noteMl": "സൈനിക കരാർ.",
        "words": [
          {
            "en": "re-establish",
            "ml": "പുനഃസ്ഥാപിക്കുക"
          },
          {
            "en": "ties",
            "ml": "ബന്ധം"
          }
        ]
      },
      {
        "title": "NIA arrests Khalistan Zindabad Force ‘supporter’ deported from U.S. in Rajpura-Shambhu blast case",
        "ml": "യുഎസിൽ നിന്ന് നാടുകടത്തിയ ഖാലിസ്ഥാൻ സംഘടനാ 'അനുകൂലിയെ' NIA അറസ്റ്റ് ചെയ്തു",
        "section": "National",
        "note": "The NIA arrested a man sent back from the U.S. in a blast case.",
        "noteMl": "സ്ഫോടനക്കേസിൽ അറസ്റ്റ്.",
        "words": [
          {
            "en": "NIA",
            "ml": "ദേശീയ അന്വേഷണ ഏജൻസി"
          },
          {
            "en": "deported",
            "ml": "നാടുകടത്തപ്പെട്ട"
          }
        ]
      },
      {
        "title": "HC directs State government not to open any new Tasmac liquor shops in Tamil Nadu",
        "ml": "പുതിയ ടാസ്മാക് മദ്യശാലകൾ തുറക്കരുതെന്ന് ഹൈക്കോടതി",
        "section": "Tamil Nadu",
        "note": "The High Court has told the State not to open more liquor outlets.",
        "noteMl": "പുതിയ മദ്യശാലകൾ വേണ്ട.",
        "words": [
          {
            "en": "directs",
            "ml": "നിർദേശിക്കുന്നു"
          }
        ]
      },
      {
        "title": "BMC to raze ancestral home of Dawood Ibrahim",
        "ml": "ദാവൂദ് ഇബ്രാഹിമിന്റെ തറവാട് വീട് ബിഎംസി പൊളിക്കും",
        "section": "National",
        "note": "Mumbai's civic body will pull down Dawood Ibrahim's family house.",
        "noteMl": "വീട് പൊളിക്കും.",
        "words": [
          {
            "en": "raze",
            "ml": "ഇടിച്ചുനിരത്തുക"
          },
          {
            "en": "ancestral",
            "ml": "പൂർവികരുടെ, തറവാട്"
          }
        ]
      },
      {
        "title": "Armed robbers loot jewellery worth more than ₹30 crore at gunpoint in Bihar’s Bettiah",
        "ml": "ബിഹാറിൽ തോക്കുചൂണ്ടി ₹30 കോടിയിലധികം വിലയുള്ള ആഭരണങ്ങൾ കൊള്ളയടിച്ചു",
        "section": "National",
        "note": "Gunmen robbed jewellery worth over ₹30 crore.",
        "noteMl": "വൻ കവർച്ച.",
        "words": [
          {
            "en": "loot",
            "ml": "കൊള്ളയടിക്കുക"
          },
          {
            "en": "at gunpoint",
            "ml": "തോക്കുചൂണ്ടി"
          }
        ]
      },
      {
        "title": "World Court finds Myanmar committed genocide against Rohingya population",
        "ml": "റോഹിംഗ്യകൾക്കെതിരെ മ്യാൻമർ വംശഹത്യ നടത്തിയെന്ന് ലോക കോടതി",
        "section": "World",
        "note": "The International Court of Justice ruled that Myanmar committed genocide.",
        "noteMl": "വംശഹത്യയെന്ന് വിധി.",
        "words": [
          {
            "en": "genocide",
            "ml": "വംശഹത്യ"
          },
          {
            "en": "World Court",
            "ml": "അന്താരാഷ്ട്ര നീതിന്യായ കോടതി (ICJ)"
          }
        ]
      },
      {
        "title": "Malaysia to end visa-free entry to Indians from January 1, 2027",
        "ml": "2027 ജനുവരി 1 മുതൽ ഇന്ത്യക്കാർക്കുള്ള വിസരഹിത പ്രവേശനം മലേഷ്യ നിർത്തും",
        "section": "World",
        "note": "Indians will need a visa for Malaysia from next year.",
        "noteMl": "വിസ വേണ്ടിവരും.",
        "words": [
          {
            "en": "visa-free",
            "ml": "വിസ വേണ്ടാത്ത"
          }
        ]
      },
      {
        "title": "BJP mocks Rahul Gandhi's U.S. remarks, says AI can predict his speeches",
        "ml": "രാഹുലിന്റെ യുഎസ് പരാമർശങ്ങളെ പരിഹസിച്ച് ബിജെപി; AI-ക്ക് പ്രസംഗം പ്രവചിക്കാമെന്ന്",
        "section": "National",
        "note": "The BJP made fun of Rahul Gandhi's speeches abroad.",
        "noteMl": "പരിഹാസം.",
        "words": [
          {
            "en": "mocks",
            "ml": "പരിഹസിക്കുന്നു"
          },
          {
            "en": "remarks",
            "ml": "പരാമർശങ്ങൾ"
          }
        ]
      },
      {
        "title": "Rupee rallies for fourth session to close 5 paise higher at 93.36 against U.S. dollar",
        "ml": "തുടർച്ചയായ നാലാം ദിവസവും രൂപ മുന്നേറി; 5 പൈസ ഉയർന്ന് 93.36",
        "section": "Business",
        "note": "The rupee gained for the fourth trading day in a row.",
        "noteMl": "രൂപ ശക്തമായി.",
        "words": [
          {
            "en": "rallies",
            "ml": "തിരിച്ചുകയറുന്നു, മുന്നേറുന്നു"
          },
          {
            "en": "session",
            "ml": "വ്യാപാര ദിനം"
          }
        ]
      },
      {
        "title": "DRI seizes over 70 kg of heroin worth ₹700 crore in Chennai",
        "ml": "ചെന്നൈയിൽ ₹700 കോടി വിലയുള്ള 70 കിലോയിലധികം ഹെറോയിൻ DRI പിടിച്ചെടുത്തു",
        "section": "Tamil Nadu",
        "note": "Revenue intelligence officers caught a huge drug haul.",
        "noteMl": "വൻ ലഹരിവേട്ട.",
        "words": [
          {
            "en": "DRI",
            "ml": "റവന്യൂ ഇന്റലിജൻസ് ഡയറക്ടറേറ്റ്"
          }
        ]
      },
      {
        "title": "Yunus's ancestral home set ablaze as violence grips Bangladesh",
        "ml": "ബംഗ്ലാദേശിൽ അക്രമം പടരുന്നതിനിടെ യൂനുസിന്റെ തറവാട് വീടിന് തീയിട്ടു",
        "section": "World",
        "note": "Rioters burned Yunus's family home as violence spread.",
        "noteMl": "വീടിന് തീയിട്ടു.",
        "words": [
          {
            "en": "set ablaze",
            "ml": "തീയിട്ടു"
          },
          {
            "en": "grips",
            "ml": "പിടിമുറുക്കുന്നു, ബാധിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Congress relieves 25 AICC secretaries of responsibilities in organisational reshuffle",
        "ml": "സംഘടനാ അഴിച്ചുപണിയിൽ 25 AICC സെക്രട്ടറിമാരെ കോൺഗ്രസ് ചുമതലയിൽ നിന്ന് ഒഴിവാക്കി",
        "section": "National",
        "note": "Congress removed 25 party secretaries from their posts.",
        "noteMl": "പാർട്ടി അഴിച്ചുപണി.",
        "words": [
          {
            "en": "reshuffle",
            "ml": "അഴിച്ചുപണി"
          },
          {
            "en": "relieves",
            "ml": "ചുമതലയിൽ നിന്ന് ഒഴിവാക്കുന്നു"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-20",
    edition: "Online · top news",
    items: [
      {
        "title": "CBI secures deportation of murder accused wanted by Kerala Police from UAE",
        "ml": "കേരള പോലീസ് തേടുന്ന കൊലക്കേസ് പ്രതിയെ യുഎഇയിൽ നിന്ന് CBI നാട്ടിലെത്തിച്ചു",
        "section": "Kerala",
        "note": "The CBI got the UAE to send back a murder suspect.",
        "noteMl": "പ്രതിയെ തിരികെ എത്തിച്ചു.",
        "words": [
          {
            "en": "deportation",
            "ml": "നാടുകടത്തൽ"
          },
          {
            "en": "wanted",
            "ml": "(പോലീസ്) തേടുന്ന"
          }
        ]
      },
      {
        "title": "Kerala High Court disposes of PILs against reconstitution of Waqf Board",
        "ml": "വഖഫ് ബോർഡ് പുനഃസംഘടനയ്ക്കെതിരായ പൊതുതാൽപര്യ ഹർജികൾ ഹൈക്കോടതി തീർപ്പാക്കി",
        "section": "Kerala",
        "note": "The court closed public-interest cases on the Waqf Board.",
        "noteMl": "ഹർജികൾ തീർപ്പാക്കി.",
        "words": [
          {
            "en": "disposes of",
            "ml": "തീർപ്പാക്കുന്നു"
          },
          {
            "en": "reconstitution",
            "ml": "പുനഃസംഘടന"
          }
        ]
      },
      {
        "title": "Draft of COP31 cover text drops references to fossil fuel phase-out, net zero dates",
        "ml": "COP31 കരടിൽ നിന്ന് ഫോസിൽ ഇന്ധന ഘട്ടംഘട്ടമായ നിർത്തലും നെറ്റ് സീറോ തീയതികളും ഒഴിവാക്കി",
        "section": "World",
        "note": "The climate summit's draft no longer mentions ending fossil fuels.",
        "noteMl": "കരടിൽ നിന്ന് ഒഴിവാക്കി.",
        "words": [
          {
            "en": "drops",
            "ml": "ഒഴിവാക്കുന്നു"
          },
          {
            "en": "phase-out",
            "ml": "ഘട്ടംഘട്ടമായി നിർത്തൽ"
          }
        ]
      },
      {
        "title": "Anthropic soars in Wall Street debut despite AI jitters",
        "ml": "AI ആശങ്കകൾക്കിടയിലും വാൾസ്ട്രീറ്റ് അരങ്ങേറ്റത്തിൽ ആന്ത്രോപിക് കുതിച്ചു",
        "section": "Business",
        "note": "The AI company's shares jumped on its first day despite market worries.",
        "noteMl": "ഓഹരി കുതിപ്പ്.",
        "words": [
          {
            "en": "soars",
            "ml": "കുതിച്ചുയരുന്നു"
          },
          {
            "en": "debut",
            "ml": "അരങ്ങേറ്റം"
          },
          {
            "en": "jitters",
            "ml": "ആശങ്ക, പരിഭ്രാന്തി"
          }
        ]
      },
      {
        "title": "California Attorney General subpoenas Nvidia over chips, former CEO’s affair",
        "ml": "ചിപ്പുകളും മുൻ സിഇഒയുടെ ബന്ധവും: എൻവിഡിയയ്ക്ക് കാലിഫോർണിയ അറ്റോർണി ജനറലിന്റെ സമൻസ്",
        "section": "Business",
        "note": "California's top lawyer has legally demanded records from Nvidia.",
        "noteMl": "നിയമപരമായ സമൻസ്.",
        "words": [
          {
            "en": "subpoenas",
            "ml": "രേഖ/ഹാജർ ആവശ്യപ്പെട്ട് സമൻസ് അയയ്ക്കുന്നു"
          }
        ]
      },
      {
        "title": "Madhya Pradesh scraps two-child policy for Govt employees after 25 years",
        "ml": "25 വർഷത്തിന് ശേഷം സർക്കാർ ജീവനക്കാരുടെ രണ്ട് കുട്ടി നയം മധ്യപ്രദേശ് റദ്ദാക്കി",
        "section": "National",
        "note": "The State has ended its two-child rule for government staff.",
        "noteMl": "നയം റദ്ദാക്കി.",
        "words": [
          {
            "en": "scraps",
            "ml": "റദ്ദാക്കുന്നു, ഉപേക്ഷിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Video of Bihar CM’s security ‘pushing’ Nishant sparks row",
        "ml": "ബിഹാർ മുഖ്യമന്ത്രിയുടെ സുരക്ഷാ ഉദ്യോഗസ്ഥർ നിശാന്തിനെ 'തള്ളുന്ന' വീഡിയോ വിവാദമായി",
        "section": "National",
        "note": "A video of guards apparently pushing a man has caused controversy.",
        "noteMl": "വീഡിയോ വിവാദം.",
        "words": [
          {
            "en": "sparks row",
            "ml": "വിവാദത്തിന് തിരികൊളുത്തുന്നു"
          }
        ]
      },
      {
        "title": "Rajasthan High Court denies interim stay in IAS officer corruption probe",
        "ml": "ഐഎഎസ് ഉദ്യോഗസ്ഥനെതിരായ അഴിമതി അന്വേഷണത്തിന് ഇടക്കാല സ്റ്റേ നിഷേധിച്ചു",
        "section": "National",
        "note": "The court refused to pause the corruption inquiry for now.",
        "noteMl": "അന്വേഷണം തുടരും.",
        "words": [
          {
            "en": "interim stay",
            "ml": "ഇടക്കാല സ്റ്റേ"
          }
        ]
      },
      {
        "title": "Delhi High Court stays Lokpal proceedings against Defence Secretary",
        "ml": "പ്രതിരോധ സെക്രട്ടറിക്കെതിരായ ലോക്പാൽ നടപടികൾ ഡൽഹി ഹൈക്കോടതി സ്റ്റേ ചെയ്തു",
        "section": "National",
        "note": "The court halted the Lokpal case against the Defence Secretary.",
        "noteMl": "നടപടികൾക്ക് സ്റ്റേ.",
        "words": [
          {
            "en": "stays",
            "ml": "(നടപടി) സ്റ്റേ ചെയ്യുന്നു"
          }
        ]
      },
      {
        "title": "Stock markets defy global rout; Sensex jumps 898 points, Nifty climbs to 25,800",
        "ml": "ആഗോള തകർച്ചയെ മറികടന്ന് ഓഹരി വിപണി; സെൻസെക്സ് 898 പോയിന്റ് ഉയർന്നു",
        "section": "Business",
        "note": "Indian shares rose even though world markets fell sharply.",
        "noteMl": "വിപണി മുന്നേറ്റം.",
        "words": [
          {
            "en": "defy",
            "ml": "വകവെക്കാതിരിക്കുക"
          },
          {
            "en": "rout",
            "ml": "കനത്ത തകർച്ച"
          }
        ]
      },
      {
        "title": "Replace Russian junk with American weapons system: U.S. lawmaker to India",
        "ml": "റഷ്യൻ പാഴ്വസ്തുക്കൾക്ക് പകരം അമേരിക്കൻ ആയുധങ്ങൾ വാങ്ങൂ: ഇന്ത്യയോട് യുഎസ് നിയമനിർമാതാവ്",
        "section": "World",
        "note": "A U.S. lawmaker urges India to switch from Russian to American arms.",
        "noteMl": "യുഎസ് ആയുധം വാങ്ങൂ.",
        "words": [
          {
            "en": "lawmaker",
            "ml": "നിയമനിർമാതാവ് (എംപി)"
          }
        ]
      },
      {
        "title": "ED mistakenly raids fisherman’s house in Keralam’s Kozhikode; triggers protests",
        "ml": "ഇഡി അബദ്ധത്തിൽ മത്സ്യത്തൊഴിലാളിയുടെ വീട്ടിൽ റെയ്ഡ് നടത്തി; പ്രതിഷേധം",
        "section": "Kerala",
        "note": "The ED searched the wrong house, leading to protests.",
        "noteMl": "തെറ്റായ റെയ്ഡ്.",
        "words": [
          {
            "en": "mistakenly",
            "ml": "അബദ്ധത്തിൽ"
          },
          {
            "en": "triggers",
            "ml": "ഉണ്ടാക്കുന്നു, കാരണമാകുന്നു"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-21",
    edition: "Online · top news",
    items: [
      {
        "title": "Infra push and low base effect pushes core sector growth to series-high of 10.9% in October 2026",
        "ml": "അടിസ്ഥാന സൗകര്യ ഊന്നലും കുറഞ്ഞ അടിസ്ഥാനവും: പ്രധാന മേഖലാ വളർച്ച 10.9% റെക്കോർഡിൽ",
        "section": "Business",
        "note": "Core industries grew 10.9%, helped by infrastructure work and a weak last year.",
        "noteMl": "വളർച്ച റെക്കോർഡിൽ.",
        "words": [
          {
            "en": "low base effect",
            "ml": "കഴിഞ്ഞ വർഷത്തെ കുറഞ്ഞ കണക്കിന്റെ ഫലം"
          },
          {
            "en": "infra",
            "ml": "അടിസ്ഥാന സൗകര്യം"
          }
        ]
      },
      {
        "title": "Court rejects anticipatory bail pleas of six in Siddaramaiah ‘sting’ case",
        "ml": "സിദ്ധരാമയ്യ 'സ്റ്റിങ്' കേസിൽ ആറുപേരുടെ മുൻകൂർ ജാമ്യാപേക്ഷ കോടതി തള്ളി",
        "section": "Karnataka",
        "note": "The court said no to early bail for six people in a secret-camera case.",
        "noteMl": "ജാമ്യം നിഷേധിച്ചു.",
        "words": [
          {
            "en": "sting",
            "ml": "രഹസ്യ ക്യാമറ ഓപ്പറേഷൻ"
          }
        ]
      },
      {
        "title": "India says no change in its position on Indus Water Treaty as Pakistan minister attends SCO forum in Delhi",
        "ml": "പാക് മന്ത്രി ഡൽഹിയിലെത്തിയപ്പോഴും സിന്ധു നദീജല കരാറിൽ നിലപാടിൽ മാറ്റമില്ലെന്ന് ഇന്ത്യ",
        "section": "National",
        "note": "India's stand on the water treaty stays the same even with a Pakistani minister visiting.",
        "noteMl": "നിലപാടിൽ മാറ്റമില്ല.",
        "words": [
          {
            "en": "position",
            "ml": "നിലപാട്"
          }
        ]
      },
      {
        "title": "U.S. court sentences Indian national Nikhil Gupta to 235 months in jail in Pannun murder plot",
        "ml": "പന്നൂൻ വധഗൂഢാലോചന: നിഖിൽ ഗുപ്തയ്ക്ക് 235 മാസം തടവ്",
        "section": "World",
        "note": "A U.S. court gave Nikhil Gupta about 19.5 years in prison.",
        "noteMl": "തടവുശിക്ഷ.",
        "words": [
          {
            "en": "sentences",
            "ml": "ശിക്ഷ വിധിക്കുന്നു"
          }
        ]
      },
      {
        "title": "BJP’s invitation to Pakistan’s Minister vindicates Abdullah’s stance: J&K Deputy Chief Minister",
        "ml": "പാക് മന്ത്രിയെ ക്ഷണിച്ചത് അബ്ദുള്ളയുടെ നിലപാട് ശരിവെക്കുന്നു: ജമ്മു-കശ്മീർ ഉപമുഖ്യമന്ത്രി",
        "section": "National",
        "note": "He says inviting a Pakistani minister proves Abdullah was right.",
        "noteMl": "നിലപാട് ശരിയെന്ന് തെളിഞ്ഞു.",
        "words": [
          {
            "en": "vindicates",
            "ml": "ശരിയെന്ന് തെളിയിക്കുന്നു"
          }
        ]
      },
      {
        "title": "Transgender persons to be roped in for tax collection in West Bengal",
        "ml": "ബംഗാളിൽ നികുതി പിരിവിന് ട്രാൻസ്ജെൻഡർ വ്യക്തികളെ ഉൾപ്പെടുത്തും",
        "section": "West Bengal",
        "note": "Transgender people will be employed to help collect taxes.",
        "noteMl": "നികുതി പിരിവിൽ പങ്കാളിത്തം.",
        "words": [
          {
            "en": "roped in",
            "ml": "ഉൾപ്പെടുത്തുക, കൂട്ടിച്ചേർക്കുക"
          }
        ]
      },
      {
        "title": "Chandel district official issues advisory after spurious liquor kills 11 in Manipur",
        "ml": "മണിപ്പൂരിൽ വ്യാജമദ്യം കഴിച്ച് 11 മരണം; ജില്ലാ ഭരണകൂടം മുന്നറിയിപ്പ് നൽകി",
        "section": "National",
        "note": "Fake liquor killed 11 people, and officials issued a warning.",
        "noteMl": "വ്യാജമദ്യ ദുരന്തം.",
        "words": [
          {
            "en": "spurious",
            "ml": "വ്യാജം"
          },
          {
            "en": "advisory",
            "ml": "മുന്നറിയിപ്പ് നിർദേശം"
          }
        ]
      },
      {
        "title": "Comments by Abhishek Banerjee painful but not contemptuous: Calcutta High Court",
        "ml": "അഭിഷേക് ബാനർജിയുടെ പരാമർശങ്ങൾ വേദനാജനകം, എന്നാൽ കോടതിയലക്ഷ്യമല്ല: കൊൽക്കത്ത ഹൈക്കോടതി",
        "section": "West Bengal",
        "note": "The court found his remarks hurtful but not contempt of court.",
        "noteMl": "കോടതിയലക്ഷ്യമല്ല.",
        "words": [
          {
            "en": "contemptuous",
            "ml": "കോടതിയലക്ഷ്യപരം, അവഹേളനപരം"
          }
        ]
      },
      {
        "title": "Padmaja’s BJP exit reopens old wounds in Congress",
        "ml": "പത്മജയുടെ ബിജെപി വിടവാങ്ങൽ കോൺഗ്രസിൽ പഴയ മുറിവുകൾ തുറന്നു",
        "section": "Kerala",
        "note": "Padmaja leaving the BJP has revived old hurt within Congress.",
        "noteMl": "പഴയ തർക്കങ്ങൾ വീണ്ടും.",
        "words": [
          {
            "en": "reopens old wounds",
            "ml": "പഴയ മുറിവുകൾ വീണ്ടും തുറക്കുന്നു (ശൈലി)"
          }
        ]
      },
      {
        "title": "14-year-old hacker held for trying to sell private data of 4,000 Agniveers on dark web: Delhi Police",
        "ml": "4,000 അഗ്നിവീറുകളുടെ സ്വകാര്യ വിവരം വിൽക്കാൻ ശ്രമിച്ച 14-കാരൻ ഹാക്കർ പിടിയിൽ: ഡൽഹി പോലീസ്",
        "section": "National",
        "note": "Police say a 14-year-old tried to sell soldiers' personal data online.",
        "noteMl": "ഹാക്കർ പിടിയിൽ.",
        "words": [
          {
            "en": "dark web",
            "ml": "ഡാർക്ക് വെബ് (രഹസ്യ ഇന്റർനെറ്റ്)"
          }
        ]
      },
      {
        "title": "Telangana ACB traps Panchayat Secretary accepting ₹10,000 bribe for widow pension sanction",
        "ml": "വിധവാ പെൻഷന് ₹10,000 കൈക്കൂലി വാങ്ങിയ പഞ്ചായത്ത് സെക്രട്ടറിയെ ACB കുടുക്കി",
        "section": "Telangana",
        "note": "Anti-corruption officers caught an official taking a bribe.",
        "noteMl": "കൈക്കൂലിക്കാരൻ പിടിയിൽ.",
        "words": [
          {
            "en": "ACB",
            "ml": "അഴിമതി വിരുദ്ധ ബ്യൂറോ"
          },
          {
            "en": "traps",
            "ml": "കുടുക്കുന്നു (കയ്യോടെ പിടിക്കുന്നു)"
          }
        ]
      },
      {
        "title": "Thousands of govt staff, teachers lay siege to Keralam Secretariat demanding service benefits, pay revision",
        "ml": "ശമ്പള പരിഷ്കരണം ആവശ്യപ്പെട്ട് ആയിരക്കണക്കിന് ജീവനക്കാരും അധ്യാപകരും സെക്രട്ടേറിയറ്റ് ഉപരോധിച്ചു",
        "section": "Kerala",
        "note": "Thousands of staff surrounded the Secretariat demanding a pay revision.",
        "noteMl": "സെക്രട്ടേറിയറ്റ് ഉപരോധം.",
        "words": [
          {
            "en": "lay siege",
            "ml": "ഉപരോധിക്കുക"
          },
          {
            "en": "pay revision",
            "ml": "ശമ്പള പരിഷ്കരണം"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-22",
    edition: "Online · top news",
    items: [
      {
        "title": "Woman killed, newlywed couple critical as fire engulfs West Delhi home; neighbours break window to rescue family",
        "ml": "പശ്ചിമ ഡൽഹിയിൽ വീടിന് തീപിടിച്ച് സ്ത്രീ മരിച്ചു; നവദമ്പതികളുടെ നില ഗുരുതരം",
        "section": "Delhi",
        "note": "A house fire killed a woman; neighbours broke a window to save the rest.",
        "noteMl": "വീട്ടിൽ തീപിടിത്തം.",
        "words": [
          {
            "en": "engulfs",
            "ml": "(തീ) വിഴുങ്ങുന്നു"
          },
          {
            "en": "critical",
            "ml": "ഗുരുതരാവസ്ഥയിൽ"
          }
        ]
      },
      {
        "title": "Eisenkot invites Netanyahu’s party for Israeli coalition talks",
        "ml": "സഖ്യ ചർച്ചയ്ക്ക് നെതന്യാഹുവിന്റെ പാർട്ടിയെ ക്ഷണിച്ച് ഐസൻകോട്ട്",
        "section": "World",
        "note": "Eisenkot asked Netanyahu's party to talk about forming a government together.",
        "noteMl": "സഖ്യ ചർച്ച.",
        "words": [
          {
            "en": "coalition",
            "ml": "സഖ്യം (കൂട്ടുകക്ഷി)"
          }
        ]
      },
      {
        "title": "Police complaint against WB LoP, police officers for fabrication of affidavits before ECI",
        "ml": "സത്യവാങ്മൂലം വ്യാജമായി ഉണ്ടാക്കിയെന്ന് ബംഗാൾ പ്രതിപക്ഷ നേതാവിനെതിരെ പോലീസ് പരാതി",
        "section": "West Bengal",
        "note": "A complaint says the Opposition leader and some officers faked affidavits.",
        "noteMl": "വ്യാജ സത്യവാങ്മൂലം ആരോപണം.",
        "words": [
          {
            "en": "fabrication",
            "ml": "വ്യാജമായി ഉണ്ടാക്കൽ"
          },
          {
            "en": "affidavits",
            "ml": "സത്യവാങ്മൂലങ്ങൾ"
          }
        ]
      },
      {
        "title": "SC seeks report from administrator on plea to restrain office-bearers, members of BCA from functioning",
        "ml": "BCA ഭാരവാഹികളെ പ്രവർത്തനത്തിൽ നിന്ന് തടയണമെന്ന ഹർജിയിൽ സുപ്രീം കോടതി റിപ്പോർട്ട് തേടി",
        "section": "National",
        "note": "The Supreme Court asked for a report before deciding on the cricket body's officials.",
        "noteMl": "റിപ്പോർട്ട് തേടി.",
        "words": [
          {
            "en": "restrain",
            "ml": "തടയുക"
          }
        ]
      },
      {
        "title": "CCPA slaps ₹10 lakh fine on firm for selling ‘anti-drone gun’ on IndiaMART",
        "ml": "'ആന്റി-ഡ്രോൺ ഗൺ' വിറ്റ കമ്പനിക്ക് ₹10 ലക്ഷം പിഴ",
        "section": "Business",
        "note": "The consumer protection authority fined a seller ₹10 lakh.",
        "noteMl": "വൻ പിഴ.",
        "words": [
          {
            "en": "slaps fine",
            "ml": "പിഴ ചുമത്തുന്നു"
          }
        ]
      },
      {
        "title": "Gold, copper, aluminium dive to at least 7-month lows",
        "ml": "സ്വർണം, ചെമ്പ്, അലുമിനിയം വില ഏഴുമാസത്തെ താഴ്ചയിലേക്ക് ഇടിഞ്ഞു",
        "section": "Business",
        "note": "Metal prices fell to their lowest in at least seven months.",
        "noteMl": "ലോഹവില ഇടിഞ്ഞു.",
        "words": [
          {
            "en": "dive",
            "ml": "കുത്തനെ ഇടിയുക"
          }
        ]
      },
      {
        "title": "U.P. Police mistakenly give guard of honour to Owaisi in Saharanpur, probe ordered",
        "ml": "അബദ്ധത്തിൽ ഒവൈസിക്ക് യുപി പോലീസിന്റെ ഗാർഡ് ഓഫ് ഓണർ; അന്വേഷണത്തിന് ഉത്തരവ്",
        "section": "National",
        "note": "Police gave a ceremonial salute by mistake; an inquiry was ordered.",
        "noteMl": "അന്വേഷണം.",
        "words": [
          {
            "en": "guard of honour",
            "ml": "ആചാരപരമായ സല്യൂട്ട്"
          },
          {
            "en": "probe ordered",
            "ml": "അന്വേഷണത്തിന് ഉത്തരവിട്ടു"
          }
        ]
      },
      {
        "title": "Nitin Nabin announces his team; Smriti Irani, Ram Madhav make a comeback, Amit Malviya out",
        "ml": "നിതിൻ നബീന്റെ പുതിയ സംഘം; സ്മൃതി ഇറാനിയും റാം മാധവും തിരിച്ചെത്തി, അമിത് മാളവ്യ പുറത്ത്",
        "section": "National",
        "note": "The BJP chief named his team: two leaders return, one is dropped.",
        "noteMl": "പുതിയ ടീം.",
        "words": [
          {
            "en": "make a comeback",
            "ml": "തിരിച്ചുവരിക"
          },
          {
            "en": "out",
            "ml": "പുറത്ത് (ഒഴിവാക്കപ്പെട്ടു)"
          }
        ]
      },
      {
        "title": "Botcha urges Governor to recommend dismissal of Chandrababu Naidu government",
        "ml": "നായിഡു സർക്കാരിനെ പിരിച്ചുവിടാൻ ശുപാർശ ചെയ്യണമെന്ന് ഗവർണറോട് ബോച്ച",
        "section": "Andhra Pradesh",
        "note": "Botcha asks the Governor to recommend sacking the State government.",
        "noteMl": "സർക്കാർ പിരിച്ചുവിടണം.",
        "words": [
          {
            "en": "dismissal",
            "ml": "പിരിച്ചുവിടൽ"
          }
        ]
      },
      {
        "title": "Manipur hooch tragedy toll rises to 17; sample sent to Kolkata lab",
        "ml": "മണിപ്പൂർ വ്യാജമദ്യ ദുരന്തം: മരണം 17 ആയി; സാമ്പിൾ കൊൽക്കത്ത ലാബിലേക്ക്",
        "section": "National",
        "note": "Deaths from the illicit liquor have risen to 17.",
        "noteMl": "മരണസംഖ്യ ഉയർന്നു.",
        "words": [
          {
            "en": "hooch",
            "ml": "വ്യാജ/നാടൻ മദ്യം"
          },
          {
            "en": "toll",
            "ml": "മരണസംഖ്യ"
          }
        ]
      },
      {
        "title": "BMTC spare parts ‘scam’: FIR against 21 officials, employees and suppliers over alleged ₹3.97-crore fraud",
        "ml": "BMTC സ്പെയർ പാർട്സ് 'തട്ടിപ്പ്': 21 പേർക്കെതിരെ എഫ്ഐആർ",
        "section": "Karnataka",
        "note": "Police booked 21 people over an alleged fraud in buying bus parts.",
        "noteMl": "തട്ടിപ്പ് കേസ്.",
        "words": [
          {
            "en": "scam",
            "ml": "തട്ടിപ്പ്"
          }
        ]
      },
      {
        "title": "Nvidia faces U.S. accounting probe amid deepening turmoil: media",
        "ml": "പ്രതിസന്ധി രൂക്ഷമാകുന്നതിനിടെ എൻവിഡിയയ്ക്കെതിരെ അക്കൗണ്ടിങ് അന്വേഷണം: മാധ്യമങ്ങൾ",
        "section": "Business",
        "note": "Media report a U.S. inquiry into Nvidia's accounts.",
        "noteMl": "അക്കൗണ്ട് അന്വേഷണം.",
        "words": [
          {
            "en": "turmoil",
            "ml": "കലുഷിതാവസ്ഥ, പ്രതിസന്ധി"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-23",
    edition: "Online · top news",
    items: [
      {
        "title": "COP31 talks fail as EU, others reject any climate deal without language on a fossil fuel phase-out",
        "ml": "ഫോസിൽ ഇന്ധനം നിർത്തൽ ഇല്ലാത്ത കരാർ EU തള്ളി; COP31 ചർച്ച പരാജയം",
        "section": "World",
        "note": "The climate talks collapsed because the EU wanted fossil fuel phase-out in the text.",
        "noteMl": "ചർച്ച പരാജയപ്പെട്ടു.",
        "words": [
          {
            "en": "reject",
            "ml": "തള്ളിക്കളയുക"
          }
        ]
      },
      {
        "title": "Kasimedu fisherfolk withdraw strike after Minister’s intervention",
        "ml": "മന്ത്രിയുടെ ഇടപെടലിനെ തുടർന്ന് കാശിമേട് മത്സ്യത്തൊഴിലാളികൾ സമരം പിൻവലിച്ചു",
        "section": "Tamil Nadu",
        "note": "Fishers ended their strike after the Minister stepped in.",
        "noteMl": "സമരം പിൻവലിച്ചു.",
        "words": [
          {
            "en": "withdraw",
            "ml": "പിൻവലിക്കുക"
          },
          {
            "en": "intervention",
            "ml": "ഇടപെടൽ"
          }
        ]
      },
      {
        "title": "Palarivattom SHO suspended over alleged links with accused in forgery case",
        "ml": "വ്യാജരേഖ കേസ് പ്രതിയുമായി ബന്ധമെന്ന ആരോപണം: പാലാരിവട്ടം SHO-ക്ക് സസ്പെൻഷൻ",
        "section": "Kerala",
        "note": "A station house officer was suspended for alleged ties with an accused.",
        "noteMl": "എസ്എച്ച്ഒക്ക് സസ്പെൻഷൻ.",
        "words": [
          {
            "en": "SHO",
            "ml": "സ്റ്റേഷൻ ഹൗസ് ഓഫീസർ"
          },
          {
            "en": "forgery",
            "ml": "വ്യാജരേഖ ചമയ്ക്കൽ"
          }
        ]
      },
      {
        "title": "FSSAI orders prosecution against Bisleri International for unsafe packaged drinking water",
        "ml": "സുരക്ഷിതമല്ലാത്ത കുപ്പിവെള്ളം: ബിസ്ലേരിക്കെതിരെ പ്രോസിക്യൂഷന് FSSAI ഉത്തരവ്",
        "section": "Business",
        "note": "The food regulator ordered legal action against a water brand.",
        "noteMl": "നിയമനടപടി.",
        "words": [
          {
            "en": "FSSAI",
            "ml": "ഭക്ഷ്യസുരക്ഷാ അതോറിറ്റി"
          }
        ]
      },
      {
        "title": "Wanted man held after 14 months for mob attack on Delhi police team in Chhatarpur",
        "ml": "പോലീസ് സംഘത്തെ ആക്രമിച്ച കേസിൽ 14 മാസമായി തേടുന്നയാൾ പിടിയിൽ",
        "section": "Delhi",
        "note": "A man wanted for over a year for attacking police was caught.",
        "noteMl": "ഒടുവിൽ പിടിയിൽ.",
        "words": [
          {
            "en": "wanted",
            "ml": "(പോലീസ്) തേടുന്ന"
          },
          {
            "en": "mob",
            "ml": "ആൾക്കൂട്ടം"
          }
        ]
      },
      {
        "title": "Raut alleges BJP offers funds to secure support for Delimitation Bill",
        "ml": "മണ്ഡല പുനർനിർണയ ബില്ലിന് പിന്തുണ നേടാൻ ബിജെപി പണം വാഗ്ദാനം ചെയ്യുന്നുവെന്ന് റാവുത്ത്",
        "section": "National",
        "note": "Sanjay Raut claims the BJP is offering money for votes on a bill.",
        "noteMl": "ആരോപണം.",
        "words": [
          {
            "en": "delimitation",
            "ml": "മണ്ഡല പുനർനിർണയം"
          }
        ]
      },
      {
        "title": "Tata Sons board meet postponed to November 30 after Noel raises concerns",
        "ml": "നോയൽ ആശങ്ക ഉന്നയിച്ചതോടെ ടാറ്റ സൺസ് ബോർഡ് യോഗം നവംബർ 30-ലേക്ക് മാറ്റി",
        "section": "Business",
        "note": "The board meeting was pushed back after concerns were raised.",
        "noteMl": "യോഗം മാറ്റി.",
        "words": [
          {
            "en": "raises concerns",
            "ml": "ആശങ്ക ഉന്നയിക്കുന്നു"
          }
        ]
      },
      {
        "title": "‘Stop acting like Baahubali,’ says Supreme Court to Bihar judicial officer for FIR against Superintendent of Police",
        "ml": "'ബാഹുബലിയെപ്പോലെ പെരുമാറരുത്': ബിഹാർ ജുഡീഷ്യൽ ഓഫീസറോട് സുപ്രീം കോടതി",
        "section": "National",
        "note": "The Supreme Court scolded a judge for acting beyond his powers.",
        "noteMl": "കോടതിയുടെ ശാസന.",
        "words": [
          {
            "en": "acting like",
            "ml": "...പോലെ പെരുമാറുക"
          }
        ]
      },
      {
        "title": "Rupee snaps 5-day rally; tumbles 30 paise to settle at 92.92 against U.S. dollar",
        "ml": "അഞ്ചുദിവസത്തെ മുന്നേറ്റം അവസാനിച്ചു; രൂപ 30 പൈസ ഇടിഞ്ഞു",
        "section": "Business",
        "note": "The rupee's winning run ended with a 30-paise fall.",
        "noteMl": "രൂപ ഇടിഞ്ഞു.",
        "words": [
          {
            "en": "snaps",
            "ml": "(തുടർച്ച) മുറിയുന്നു"
          },
          {
            "en": "tumbles",
            "ml": "കുത്തനെ ഇടിയുന്നു"
          }
        ]
      },
      {
        "title": "Markets take heavy drubbing dragged by banks; Sensex plunges 1,484 points, Nifty dives to 25,349.65",
        "ml": "ബാങ്ക് ഓഹരികൾ വലിച്ചു; വിപണിക്ക് കനത്ത തകർച്ച, സെൻസെക്സ് 1,484 പോയിന്റ് ഇടിഞ്ഞു",
        "section": "Business",
        "note": "Bank shares pulled the market down sharply.",
        "noteMl": "വിപണി തകർച്ച.",
        "words": [
          {
            "en": "drubbing",
            "ml": "കനത്ത തോൽവി/തകർച്ച"
          },
          {
            "en": "dragged by",
            "ml": "...കാരണം താഴേക്ക് വലിക്കപ്പെട്ട്"
          }
        ]
      },
      {
        "title": "Dhanraj murder case: Court convicts three accused, acquits 17 others",
        "ml": "ധനരാജ് വധക്കേസ്: മൂന്നുപേർ കുറ്റക്കാർ, 17 പേരെ വെറുതെവിട്ടു",
        "section": "Kerala",
        "note": "Three were found guilty and 17 were freed.",
        "noteMl": "വിധി.",
        "words": [
          {
            "en": "convicts",
            "ml": "കുറ്റക്കാരെന്ന് വിധിക്കുന്നു"
          },
          {
            "en": "acquits",
            "ml": "കുറ്റവിമുക്തരാക്കുന്നു"
          }
        ]
      },
      {
        "title": "SAD open to alliances for Chandigarh civic polls, sparks buzz over potential BJP re-alignment",
        "ml": "ചണ്ഡീഗഢ് തിരഞ്ഞെടുപ്പിന് സഖ്യത്തിന് SAD തയ്യാർ; ബിജെപിയുമായി വീണ്ടും കൂട്ടുകെട്ടെന്ന് അഭ്യൂഹം",
        "section": "National",
        "note": "The Akali Dal is open to alliances, leading to talk of a return to the BJP.",
        "noteMl": "സഖ്യ അഭ്യൂഹം.",
        "words": [
          {
            "en": "sparks buzz",
            "ml": "ചർച്ചയ്ക്ക്/അഭ്യൂഹത്തിന് തിരികൊളുത്തുന്നു"
          },
          {
            "en": "re-alignment",
            "ml": "പുനഃക്രമീകരണം"
          }
        ]
      }
    ]
  },
  {
    date: "2026-11-24",
    edition: "Online · top news",
    items: [
      {
        "title": "Vance, Rubio meet with Qatari PM as uncertainty mounts over Trump's intentions with Iran",
        "ml": "ഇറാൻ വിഷയത്തിൽ അനിശ്ചിതത്വം കൂടുന്നതിനിടെ വാൻസും റൂബിയോയും ഖത്തർ പ്രധാനമന്ത്രിയെ കണ്ടു",
        "section": "World",
        "note": "U.S. leaders met Qatar's PM while doubts grow about Trump's Iran plans.",
        "noteMl": "അനിശ്ചിതത്വം.",
        "words": [
          {
            "en": "mounts",
            "ml": "വർധിക്കുന്നു"
          },
          {
            "en": "uncertainty",
            "ml": "അനിശ്ചിതത്വം"
          }
        ]
      },
      {
        "title": "Nagpur Bench grants parole to prisoner for marriage",
        "ml": "വിവാഹത്തിന് തടവുകാരന് നാഗ്പൂർ ബെഞ്ച് പരോൾ അനുവദിച്ചു",
        "section": "National",
        "note": "The court let a prisoner out temporarily to get married.",
        "noteMl": "പരോൾ.",
        "words": [
          {
            "en": "parole",
            "ml": "പരോൾ (താൽക്കാലിക മോചനം)"
          }
        ]
      },
      {
        "title": "Uttar Pradesh polls: SP, Congress kick off seat-sharing talks",
        "ml": "യുപി തിരഞ്ഞെടുപ്പ്: എസ്പിയും കോൺഗ്രസും സീറ്റ് വിഭജന ചർച്ച തുടങ്ങി",
        "section": "National",
        "note": "SP and Congress have begun talks on dividing seats.",
        "noteMl": "സീറ്റ് ചർച്ച.",
        "words": [
          {
            "en": "kick off",
            "ml": "തുടങ്ങുക"
          },
          {
            "en": "seat-sharing",
            "ml": "സീറ്റ് വിഭജനം"
          }
        ]
      },
      {
        "title": "India, China hold 10-day talks to ease LAC tensions in Arunachal Pradesh",
        "ml": "അരുണാചലിലെ LAC സംഘർഷം കുറയ്ക്കാൻ ഇന്ത്യ-ചൈന 10 ദിവസത്തെ ചർച്ച",
        "section": "National",
        "note": "The two countries talked for ten days to calm the border.",
        "noteMl": "അതിർത്തി ചർച്ച.",
        "words": [
          {
            "en": "LAC",
            "ml": "യഥാർഥ നിയന്ത്രണ രേഖ"
          },
          {
            "en": "ease",
            "ml": "കുറയ്ക്കുക, ലഘൂകരിക്കുക"
          }
        ]
      },
      {
        "title": "Federal appeals court gives President Donald Trump path to erasing hush money conviction",
        "ml": "ഹഷ് മണി കേസിലെ ശിക്ഷ ഒഴിവാക്കാൻ ട്രംപിന് വഴി തുറന്ന് അപ്പീൽ കോടതി",
        "section": "World",
        "note": "A U.S. appeals court opened a way for Trump to clear a conviction.",
        "noteMl": "ശിക്ഷ നീക്കാൻ വഴി.",
        "words": [
          {
            "en": "hush money",
            "ml": "വായടപ്പിക്കാൻ നൽകിയ പണം"
          }
        ]
      },
      {
        "title": "Inquiry into his old foreign visits based on false allegations, says Naveen Patnaik",
        "ml": "വിദേശയാത്രകളെക്കുറിച്ചുള്ള അന്വേഷണം വ്യാജ ആരോപണങ്ങളിൽ അധിഷ്ഠിതമെന്ന് നവീൻ പട്നായിക്",
        "section": "National",
        "note": "Naveen Patnaik says the probe is built on untrue claims.",
        "noteMl": "ആരോപണങ്ങൾ വ്യാജം.",
        "words": [
          {
            "en": "based on",
            "ml": "...അടിസ്ഥാനമാക്കി"
          }
        ]
      },
      {
        "title": "Violence erupts in Pithapuram amid JSP councillors’ sparring over vice-chairman pick",
        "ml": "വൈസ് ചെയർമാൻ തിരഞ്ഞെടുപ്പിനെച്ചൊല്ലി ജനസേന കൗൺസിലർമാരുടെ തർക്കം; പിതാപുരത്ത് അക്രമം",
        "section": "Andhra Pradesh",
        "note": "A fight among councillors over a post turned violent.",
        "noteMl": "അക്രമം.",
        "words": [
          {
            "en": "sparring",
            "ml": "വാക്പോര്"
          },
          {
            "en": "pick",
            "ml": "തിരഞ്ഞെടുപ്പ്"
          }
        ]
      },
      {
        "title": "State appeals against DMK ex-Minister Ponmudy’s acquittal in ₹28.37-crore red sand quarrying case",
        "ml": "മണൽ ഖനന കേസിൽ പൊൻമുടിയെ കുറ്റവിമുക്തനാക്കിയതിനെതിരെ സർക്കാർ അപ്പീൽ",
        "section": "Tamil Nadu",
        "note": "The State is challenging the former Minister's acquittal.",
        "noteMl": "അപ്പീൽ.",
        "words": [
          {
            "en": "acquittal",
            "ml": "കുറ്റവിമുക്തനാക്കൽ"
          }
        ]
      },
      {
        "title": "SC admits appeal filed by SASTRA against Madras High Court’s eviction order",
        "ml": "കുടിയൊഴിപ്പിക്കൽ ഉത്തരവിനെതിരായ SASTRA-യുടെ അപ്പീൽ സുപ്രീം കോടതി ഫയലിൽ സ്വീകരിച്ചു",
        "section": "Tamil Nadu",
        "note": "The Supreme Court agreed to hear the university's appeal.",
        "noteMl": "അപ്പീൽ സ്വീകരിച്ചു.",
        "words": [
          {
            "en": "admits",
            "ml": "(ഹർജി) ഫയലിൽ സ്വീകരിക്കുന്നു"
          },
          {
            "en": "eviction",
            "ml": "കുടിയൊഴിപ്പിക്കൽ"
          }
        ]
      },
      {
        "title": "Lula wins a record fourth presidential term as Brazil defeats far-right, defies Trump and Meta",
        "ml": "തീവ്രവലതുപക്ഷത്തെ തോൽപ്പിച്ച് ലുല റെക്കോർഡ് നാലാം തവണ പ്രസിഡന്റ്",
        "section": "World",
        "note": "Lula won a fourth term, beating the far right.",
        "noteMl": "ലുലയ്ക്ക് ജയം.",
        "words": [
          {
            "en": "defies",
            "ml": "വകവെക്കാതിരിക്കുന്നു"
          },
          {
            "en": "far-right",
            "ml": "തീവ്രവലതുപക്ഷം"
          }
        ]
      },
      {
        "title": "China announces shock corruption probe into Politburo member",
        "ml": "പൊളിറ്റ്ബ്യൂറോ അംഗത്തിനെതിരെ അപ്രതീക്ഷിത അഴിമതി അന്വേഷണം",
        "section": "World",
        "note": "China surprised many by investigating a top party leader.",
        "noteMl": "അപ്രതീക്ഷിത അന്വേഷണം.",
        "words": [
          {
            "en": "shock",
            "ml": "അപ്രതീക്ഷിതമായ (വിശേഷണം)"
          }
        ]
      },
      {
        "title": "‘Money-doubling’ fraud racket busted",
        "ml": "'പണം ഇരട്ടിപ്പിക്കൽ' തട്ടിപ്പ് സംഘം പിടിയിൽ",
        "section": "Andhra Pradesh",
        "note": "Police broke up a gang promising to double people's money.",
        "noteMl": "തട്ടിപ്പ് സംഘം.",
        "words": [
          {
            "en": "busted",
            "ml": "പിടികൂടപ്പെട്ടു"
          }
        ]
      }
    ]
  }
];
