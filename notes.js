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
  }
];
