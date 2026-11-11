/*
 * How to read a newspaper headline: the rules of "headline English".
 * Every example is a real headline collected in notes.js.
 *
 * Each rule:
 *   title    short English name of the rule
 *   ml       the rule in Malayalam (what to do when you see it)
 *   pattern  what it looks like in a headline
 *   examples [{ h: headline, read: how to read it in full English, ml: Malayalam meaning }]
 */
window.GUIDE = [
  {
    title: "Present tense means it already happened",
    pattern: "Subject + verb (present): seizes, questions, defends",
    ml: "തലക്കെട്ടിൽ present tense കണ്ടാൽ അത് ഇപ്പോൾ നടക്കുന്നതല്ല, ഇന്നലെ നടന്ന കാര്യമാണ്. വാർത്തയ്ക്ക് പുതുമ തോന്നിക്കാൻ ഇങ്ങനെ എഴുതുന്നു.",
    examples: [
      { h: "Democrats seize Congress in major setback to Trump", read: "The Democrats have won control of Congress.", ml: "ഡെമോക്രാറ്റുകൾ കോൺഗ്രസ് പിടിച്ചെടുത്തു." },
      { h: "SC questions curbs as Delhi AQI nears 400", read: "The Supreme Court questioned the curbs.", ml: "സുപ്രീം കോടതി ചോദ്യം ചെയ്തു." },
      { h: "Oil falls as Donald Trump says new Iran attacks ‘unlikely’", read: "Oil prices fell because Trump said...", ml: "എണ്ണവില ഇടിഞ്ഞു (കഴിഞ്ഞ കാര്യം)." }
    ]
  },
  {
    title: "\"to\" + verb means the future",
    pattern: "X to do / X to be done",
    ml: "'to' + verb = വരാൻ പോകുന്നത് (will). 'to be' + past participle = ചെയ്യപ്പെടാൻ പോകുന്നു.",
    examples: [
      { h: "Kozhikode to host MERGE FUTURE 2027 business and technology summit in January", read: "Kozhikode will host the summit.", ml: "കോഴിക്കോട് ആതിഥ്യം വഹിക്കും." },
      { h: "Summary revision to begin in 6 States, U.T.s", read: "The summary revision will begin.", ml: "പുതുക്കൽ ആരംഭിക്കും." },
      { h: "Communal harmony committees to be formed in grama panchayats", read: "Committees will be formed.", ml: "സമിതികൾ രൂപീകരിക്കും." },
      { h: "Minister Agnimitra Paul says rose water to be used for mist spraying in Kolkata; environmentalist slams move", read: "Rose water will be used...", ml: "പനിനീർ ഉപയോഗിക്കും (ഭാവി)." },
      { h: "Blackstone to buy about 16% stake in India's IIFL Finance for $535 million", read: "Blackstone will buy a 16% stake.", ml: "വാങ്ങും (ഭാവി)." }
    ]
  },
  {
    title: "A lone past participle means passive: \"is/was\" is dropped",
    pattern: "Noun + shifted / elected / held / traced",
    ml: "'is', 'was', 'has been' ഒഴിവാക്കും. Verb-ന്റെ മൂന്നാം രൂപം മാത്രം കണ്ടാൽ: ആരോ അയാളെ / അതിനെ ചെയ്തു (passive).",
    examples: [
      { h: "Excise Commissioner shifted amid differences with Minister", read: "The Excise Commissioner has been shifted.", ml: "കമ്മീഷണറെ സ്ഥലം മാറ്റി." },
      { h: "3 held on charge of assault, robbery", read: "Three people have been held (arrested).", ml: "മൂന്നുപേരെ അറസ്റ്റ് ചെയ്തു." },
      { h: "India-born Nithya Raman elected Los Angeles mayor", read: "Nithya Raman has been elected.", ml: "തിരഞ്ഞെടുക്കപ്പെട്ടു." },
      { h: "19 Indian seafarers stranded in Yemen evacuated, Embassy says", read: "Seafarers who were stranded have been evacuated.", ml: "കുടുങ്ങിയവരെ ഒഴിപ്പിച്ചു." },
      { h: "Habitual offender arrested for murdering 65-year-old woman in Bengaluru", read: "A habitual offender has been arrested...", ml: "അറസ്റ്റ് ചെയ്യപ്പെട്ടു." },
      { h: "Suspension of senior IPS officer extended to March 2027", read: "The suspension has been extended.", ml: "സസ്പെൻഷൻ നീട്ടപ്പെട്ടു." }
    ]
  },
  {
    title: "Small words are left out",
    pattern: "No a / an / the / is / are",
    ml: "സ്ഥലം ലാഭിക്കാൻ a, an, the, is, are എന്നിവ ഒഴിവാക്കും. വായിക്കുമ്പോൾ മനസ്സിൽ അവ ചേർത്ത് വായിക്കുക.",
    examples: [
      { h: "Saudi Arabia warns of danger in oil hub", read: "Saudi Arabia warns of a danger in an oil hub.", ml: "എണ്ണ കേന്ദ്രത്തിൽ അപകടഭീഷണിയെന്ന് മുന്നറിയിപ്പ്." },
      { h: "PSC chief, members, under CB scanner", read: "The PSC chief and members are under the Crime Branch's scanner.", ml: "ക്രൈംബ്രാഞ്ച് അന്വേഷണത്തിൽ." }
    ]
  },
  {
    title: "A colon at the end tells you who said it",
    pattern: "Statement: Speaker",
    ml: "അവസാനം ': SC' പോലെ കണ്ടാൽ, മുന്നിലുള്ളത് ആ വ്യക്തിയോ സ്ഥാപനമോ പറഞ്ഞതാണ്. പത്രത്തിന്റെ അഭിപ്രായമല്ല.",
    examples: [
      { h: "24-hour rule starts from detention: SC", read: "The Supreme Court says the 24-hour rule starts from detention.", ml: "സുപ്രീം കോടതി പറഞ്ഞു." },
      { h: "No compromise on safety aspects: AERB chief", read: "The AERB chief says there will be no compromise.", ml: "AERB മേധാവി പറഞ്ഞു." },
      { h: "Egypt train collision kills 7, injures 125: Health Ministry", read: "The Health Ministry says the collision killed 7.", ml: "ആരോഗ്യ മന്ത്രാലയം പറയുന്നു." },
      { h: "Israeli forces shoot dead 14-year-old in West Bank: Palestinian officials", read: "Palestinian officials say this.", ml: "പലസ്തീൻ അധികൃതർ പറയുന്നു." }
    ]
  },
  {
    title: "A colon in the middle introduces the topic",
    pattern: "Topic: what happened",
    ml: "തുടക്കത്തിൽ വിഷയം, colon-ന് ശേഷം പുതിയ വിവരം.",
    examples: [
      { h: "Nedumbassery crash: car's speed put at 162 kmph", read: "About the Nedumbassery crash: the car's speed is estimated at 162 kmph.", ml: "നെടുമ്പാശ്ശേരി അപകടം: വേഗം 162 കി.മീ." },
      { h: "Cheranalloor car crash: High Court grants anticipatory bail to judge", read: "About the Cheranalloor crash: the HC granted bail.", ml: "ചേരാനല്ലൂർ അപകടം: മുൻകൂർ ജാമ്യം." },
      { h: "Rajajinagar murders: Two more bodies recovered near Chamundi hills in Mysuru", read: "About the Rajajinagar murders: two more bodies were found.", ml: "വിഷയം: രാജാജിനഗർ കൊലപാതകങ്ങൾ." }
    ]
  },
  {
    title: "Quotation marks mean a claim, not a fact",
    pattern: "'quoted words'",
    ml: "Quote-ൽ ഉള്ളത് ആരോ പറഞ്ഞതോ ആരോപിച്ചതോ ആണ്. പത്രം അത് ശരിയെന്ന് പറയുന്നില്ല.",
    examples: [
      { h: "BJP leaders meet President over 'irregularities' in KPSC", read: "BJP alleges irregularities; it is not proven.", ml: "'ക്രമക്കേട്' എന്നത് ആരോപണം മാത്രം." },
      { h: "'Zero tolerance against violence on campuses'", read: "These are the Minister's own words.", ml: "മന്ത്രി പറഞ്ഞ വാക്കുകൾ." },
      { h: "Oil falls as Donald Trump says new Iran attacks ‘unlikely’", read: "'unlikely' is Trump's view, not the paper's.", ml: "'സാധ്യതയില്ല' എന്നത് ട്രംപിന്റെ വാക്ക്." },
      { h: "After Bangladesh rules out passport for Hasina, India says ‘travel document’ needed", read: "'travel document' is India's wording.", ml: "'യാത്രാരേഖ' ഇന്ത്യയുടെ വാക്ക്." }
    ]
  },
  {
    title: "A comma means \"and\"",
    pattern: "A, B",
    ml: "തലക്കെട്ടിൽ comma = 'and'.",
    examples: [
      { h: "Prithviraj, Kunchacko Boban Forest dept. brand ambassadors", read: "Prithviraj and Kunchacko Boban are the Forest department's brand ambassadors.", ml: "പൃഥ്വിരാജും കുഞ്ചാക്കോ ബോബനും." },
      { h: "3 held on charge of assault, robbery", read: "...on charges of assault and robbery.", ml: "ആക്രമണവും കവർച്ചയും." },
      { h: "Fire engulfs Jammu’s Nehru Market, guts around 12 shops", read: "Fire engulfs the market and guts 12 shops.", ml: "തീ പടർന്നു, കടകൾ കത്തിനശിച്ചു." },
      { h: "Congress questions Modi over Delhi air pollution, demands account of measures taken", read: "Congress questions Modi and demands an account.", ml: "ചോദ്യം ചെയ്യുന്നു, കണക്കും ചോദിക്കുന്നു." }
    ]
  },
  {
    title: "\"X to Y\" means X tells Y",
    pattern: "Message: Sender to Receiver",
    ml: "'ECI to voters' = തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ വോട്ടർമാരോട് പറയുന്നു. 'tells' പലപ്പോഴും ഒഴിവാക്കും.",
    examples: [
      { h: "Resubmit enumeration form: ECI to ousted voters", read: "The ECI tells ousted voters to resubmit the form.", ml: "കമ്മീഷൻ വോട്ടർമാരോട് പറയുന്നു." },
      { h: "Do not fear prosecution, SC tells excluded voters", read: "Here 'tells' is written out.", ml: "സുപ്രീം കോടതി വോട്ടർമാരോട്." }
    ]
  },
  {
    title: "\"as\" means while or because",
    pattern: "X happens as Y happens",
    ml: "'as' = ...ന്നതിനിടെ / ...ന്നതിനാൽ.",
    examples: [
      { h: "SC questions curbs as Delhi AQI nears 400", read: "...while Delhi's AQI nears 400.", ml: "AQI 400-ലേക്ക് അടുക്കവേ." },
      { h: "Railway tracks turn fatal as train knocks down tiger on Kollam-Shencottah route", read: "...because a train knocked down a tiger.", ml: "ട്രെയിൻ ഇടിച്ചതോടെ." },
      { h: "Pope Leo takes Milei to task as he visits divided Argentina", read: "...while he visits Argentina.", ml: "സന്ദർശിക്കുന്നതിനിടെ." },
      { h: "Air pollution over 50 times WHO limit in parts of Delhi as people defy ban on firecrackers on Deepavali", read: "...because people defied the ban.", ml: "നിരോധനം ലംഘിച്ചതിനാൽ." }
    ]
  },
  {
    title: "Stacked nouns: read them backwards",
    pattern: "Noun Noun Noun + main noun",
    ml: "പല noun-കൾ ഒന്നിച്ചു വന്നാൽ അവസാനത്തെ വാക്കാണ് പ്രധാനം. പിന്നിൽ നിന്ന് മുന്നോട്ട് വായിക്കുക.",
    examples: [
      { h: "OBC creamy layer ruling will not alter past allocations: SC", read: "the ruling ← on the creamy layer ← among OBCs", ml: "OBC ക്രീമി ലെയറിനെക്കുറിച്ചുള്ള വിധി." },
      { h: "In setback to govt., HC reinstates Milma union dissolved over Sabarimala ghee row", read: "the row ← over ghee ← at Sabarimala", ml: "ശബരിമല നെയ്യ് വിവാദം." },
      { h: "Assam OIL facility fire: death toll rises to four as another injured dies; four suspended", read: "fire → at a facility → of OIL → in Assam", ml: "തീപിടിത്തം ← പ്ലാന്റിലെ ← ഓയിൽ ഇന്ത്യയുടെ ← അസമിലെ" },
      { h: "ED attaches assets worth ₹18 crore linked to rice mill loan fraud case", read: "case → of fraud → on a loan → to a rice mill", ml: "കേസ് ← തട്ടിപ്പ് ← വായ്പ ← അരി മിൽ" }
    ]
  },
  {
    title: "Short \"headline words\" stand in for long ones",
    pattern: "row, curb, held, probe, moot, quash, seize, chopper",
    ml: "സ്ഥലം കുറവായതിനാൽ ചെറിയ, ശക്തമായ വാക്കുകൾ. ഇവ പഠിച്ചാൽ പകുതി തലക്കെട്ടും മനസ്സിലാകും. പൂർണ പട്ടിക 'Phrases' ടാബിൽ.",
    examples: [
      { h: "Excursion row: CCTV footage released", read: "row = controversy", ml: "row = വിവാദം" },
      { h: "Draft report on Labour Codes moots higher minimum wages, wider eligibility for bonus", read: "moots = proposes", ml: "moot = നിർദേശിക്കുക" },
      { h: "No chopper deal was pending when CM took special flight, SPC tells Lok Ayukta", read: "chopper = helicopter", ml: "chopper = ഹെലികോപ്റ്റർ" },
      { h: "Democrats eye Musk, Miller probes after midterm rout", read: "eye = plan; probes = investigations; rout = big win", ml: "eye = ലക്ഷ്യമിടുന്നു; probe = അന്വേഷണം; rout = തൂത്തുവാരൽ" },
      { h: "NDA wrests Kadapa ZPTCs from YSRCP", read: "wrests = takes by force/wins away", ml: "wrest = പിടിച്ചെടുക്കുക" },
      { h: "Murthy Yadav quits JSP over ticket denial", read: "quits = resigns from; over = because of", ml: "quit = വിടുക; over = ...നെച്ചൊല്ലി" }
    ]
  },
  {
    title: "Idioms are not literal",
    pattern: "lock horns, under a cloud, bid adieu, Men in Blue",
    ml: "ഇവയുടെ വാക്കർത്ഥമല്ല, ശൈലി അർത്ഥമാണ് എടുക്കേണ്ടത്.",
    examples: [
      { h: "CPI(M), Congress lock horns over liquor licences", read: "lock horns = clash, fight", ml: "കൊമ്പുകോർക്കുക = ഏറ്റുമുട്ടുക" },
      { h: "CM's power purchase stance under a cloud", read: "under a cloud = in doubt", ml: "സംശയത്തിന്റെ നിഴലിൽ" },
      { h: "Ronaldo bids adieu to international football", read: "bid adieu = say goodbye, retire", ml: "വിടപറയുക" },
      { h: "Pope Leo takes Milei to task as he visits divided Argentina", read: "take someone to task = criticise them", ml: "ശാസിക്കുക, വിമർശിക്കുക" },
      { h: "Law and order in coma in Tamil Nadu, says Stalin", read: "in coma = not working at all", ml: "പ്രവർത്തനരഹിതം" }
    ]
  },
  {
    title: "Abbreviations",
    pattern: "SC, HC, ECI, CM, CB, PSC, U.T., AQI, govt., dept.",
    ml: "SC = സുപ്രീം കോടതി · HC = ഹൈക്കോടതി · ECI = തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ · CM = മുഖ്യമന്ത്രി · CB = ക്രൈംബ്രാഞ്ച് · PSC = പബ്ലിക് സർവീസ് കമ്മീഷൻ · U.T. = കേന്ദ്രഭരണ പ്രദേശം · AQI = വായു ഗുണനിലവാര സൂചിക · govt. = സർക്കാർ · dept. = വകുപ്പ്",
    examples: [
      { h: "In setback to govt., HC reinstates Milma union dissolved over Sabarimala ghee row", read: "govt. = government, HC = High Court", ml: "സർക്കാർ, ഹൈക്കോടതി" }
    ]
  },
  {
    title: "Read the labels around the headline",
    pattern: "Kicker above · deck below · dateline · \"Continued on page\"",
    ml: "തലക്കെട്ടിന് മുകളിലെ ചെറിയ ലേബൽ (kicker: 'Recruitment row', 'Prized possession') വിഷയം പറയും. താഴെയുള്ള deck/strapline വിശദാംശം നൽകും. ആദ്യ ഖണ്ഡിക (lead) ആര്, എന്ത്, എപ്പോൾ, എവിടെ എന്ന് പറയും. 'NEW DELHI' പോലുള്ള dateline വാർത്ത എവിടെ നിന്നാണെന്ന് കാണിക്കും.",
    examples: [
      { h: "Jharkhand HC quashes JSSC-CGL cancellation", read: "Kicker: \"Recruitment row\": so this is about a hiring dispute.", ml: "നിയമന വിവാദം" }
    ]
  }
];
