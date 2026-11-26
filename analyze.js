/*
 * Reads one headline and finds what it can teach: which headline rules it
 * uses (guide.js) and which core words it contains (core.js). Nothing about
 * a headline needs to be written by hand; this works it out from the text.
 *
 * Used by index.html and by tools/check.js (Node).
 *
 *   analyze(title) -> {
 *     rules: [{ id, i, hits: ["matched text", ...] }],   // i = index in GUIDE
 *     words: [{ p: phrase from CORE, hits: [...] }],
 *     score: number of distinct things to learn
 *   }
 */
(function (root) {
  "use strict";

  const words = (s) => s.split(/\s+/).filter(Boolean);
  const bare = (w) => w.replace(/^[‘“"'(\[]+|[’”"')\],;:.!?]+$/g, "");
  const isLower = (w) => /^[a-z]/.test(w);
  const reEsc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const PREP = new Set(("in for at by after over near on as with from to under during outside inside amid " +
    "into across against before till until since without within ahead off out back again following among " +
    "ablaze dead alive free unopposed guilty").split(" "));
  const AUX = new Set("is are was were be been being has have had who that which".split(" "));
  const DET = new Set("a an the of for with against to his her their its this these those our my".split(" "));
  const NOT_PASSIVE = new Set(("alleged proposed unidentified advanced united dedicated detailed limited " +
    "armed retired supposed so-called talented skilled red bed need feed speed seed shed proceed exceed " +
    "succeed indeed breed embed often even seven between sudden wooden then when eleven open woken garden golden kitchen children citizen " +
    "women men chicken hundred heaven listen threaten broken-down linked related based outdated divided renewed scheduled concerned committed interested").split(" "));
  const IRREG = new Set(("held hit shot caught sent sold struck found built set cut put laid stolen seized " +
    "taken given shown known seen won lost hurt bitten beaten sworn shut spent paid kept left brought " +
    "bought thrown driven drawn grown chosen frozen hidden written").split(" "));
  const NOT_VERB_S = new Set(("is as us has was his its this thus plus news series crisis basis status " +
    "process bus gas yes less unless across various previous serious famous dangerous jobs years days " +
    "times months weeks hours others analysis campus census bonus virus genius chaos lens thesis").split(" "));
  // Common headline verbs (base form). A word counts as a present-tense verb
  // only when it is one of these, so nouns like "voters" or "assets" are not picked.
  const VERBS = new Set(("accept accuse acquire act add address admit adopt aim allege allow announce appeal " +
    "appoint approach approve argue arrest ask assure attach attack attend avoid back ban bar battle beat " +
    "begin blame block blast boost brace break bring build bust buy call cancel capture caution cede " +
    "challenge charge chase cite claim clash clear close come complain condemn confirm continue cross curb " +
    "cut decide decline defeat defend defy delay demand deny describe destroy die direct disclose dismiss " +
    "dispose dive doubt drag draw drift drop ease end engulf ensure enter erupt escape examine expand " +
    "expect explain extend eye face fail fall file fine fire flag flay fly force form get give go grant " +
    "grip gut hail halt hand hear help hike hit hold hope host hunt identify impose inaugurate include " +
    "inform injure insist introduce invite issue join keep kick kill knock launch lay lead leave lift " +
    "light link list lock lodge look lose loom make mark meet mock moot move name near need note notify " +
    "object offer open oppose order outline pass pay pitch plan play pledge plunge point post postpone " +
    "praise press prevent probe prohibit promise propose protest prove pull push put question quit quash " +
    "raid raise rap reach recall receive recommend record recover refer refuse reject release remain " +
    "remove reopen replace report rescue reserve resign resume retain retire return reveal review rise " +
    "rob rock roll rule sack save say scrap secure see seek seize sell send set settle sign skip slam slip " +
    "slash snap soar spar spark spell spend split stage stall stand start stay step stop strike stun " +
    "submit succeed sue suffer suggest summon support suspend take talk target taunt tell term test " +
    "threaten top track trigger trust try turn unearth unveil uphold urge use visit vote vow walk want " +
    "overturn warn welcome win withdraw woo wrest yield criticise criticize veer shoot pick agree differ assume " +
    "clinch downplay rescue participate develop organise organize smash collect reveal see demolish " +
    "detain nab book probe slap lash snub storm sweep swear thank torch trap unite upset weigh worry " +
    "shrink power sustain predict hear assert bag clinch emerge celebrate mourn honour mount rally tumble " +
    "surge slump jump climb gain dip edge").split(" "));
  // Verbs that are just as often nouns: "lodges protest" is not "protest" as the verb.
  const NOUNY = new Set("protest report order probe question move plan test raid attack issue call bust bid ban cut hike stay vote fire appeal lead talk".split(" "));
  const stem = (w) => VERBS.has(w) ? w : w.endsWith("ies") && VERBS.has(w.slice(0, -3) + "y") ? w.slice(0, -3) + "y"
    : w.endsWith("es") && VERBS.has(w.slice(0, -2)) ? w.slice(0, -2) : w.endsWith("s") && VERBS.has(w.slice(0, -1)) ? w.slice(0, -1) : "";
  // Verbs that follow "to" in future-tense headlines ("X to host Y").
  const TO_VERBS = ("get host begin open hold set launch seek visit meet form take make give start resume " +
    "introduce build come go receive conduct review decide cut raise hike buy sell acquire succeed raze " +
    "replace move shift close shut ban allow bring roll lay hand appoint name create unveil hit return " +
    "skip contest field quit join leave lead head strike file approach probe study table announce " +
    "issue release roll invest spend set up expand reopen restore stage deploy enforce implement scrap " +
    "challenge appeal pay double tighten ease extend continue get stay rise fall cost face").split(" ");
  const SPEAKER = new Set(("chief officials official minister ministry police sources source media experts " +
    "expert study report survey court govt. govt government leaders leader residents activists party " +
    "panel body officers spokesperson envoy president secretary board data analysts lawmaker lawmakers").split(" "));
  const AS_ROLE = new Set(("retires retire named appointed elected re-elected sworn joins join serves " +
    "serve continues continue quits quit steps takes such well same").split(" "));

  // ---- one detector per guide rule id; each returns the matched pieces of text ----
  // Quoted words are someone else's words; grammar detectors skip them.
  const unquote = (t) => t.replace(/[‘“][^’”]*[’”]|(^|[\s(])'[^']+'(?=[\s,;:.)]|$)/g, "$1…");

  const detect = {
    present(t) {
      const rawWs = words(unquote(t).split(/[:;|]/)[0]);
      const ws = rawWs.map(bare);
      const hits = [];
      const sForm = (w) => !!w && isLower(w) && /s$/.test(w) && !!stem(w) && stem(w) !== w;
      const base = (w) => !!w && isLower(w) && VERBS.has(w);
      // The first verb after the subject: "SC questions", "Oil falls", "Democrats seize".
      for (let i = 1, seen = 0; i < ws.length && seen < 5; i++) {
        const w = ws[i], prev = ws[i - 1], next = ws[i + 1] || "";
        if (!isLower(w)) continue;
        seen++;
        if (w === "to" || PREP.has(w) || DET.has(w) || AUX.has(w)) break;
        const pluralSubject = (/s$/.test(prev) && !sForm(prev)) || /^(police|people)$/i.test(prev) ||
          ws[i - 2] === "and" || rawWs.slice(0, i - 1).some((x) => /,$/.test(x));
        if (!(sForm(w) || (base(w) && pluralSubject))) continue;
        if (/,$/.test(rawWs[i])) continue; // "Traffic curbs, diversions": a list of nouns
        if (i === ws.length - 1) break; // "Punjab polls:" is a noun, not a verb
        // "Railway tracks turn": a plural noun followed by its verb.
        if (sForm(w) && base(next) && !NOUNY.has(next)) { hits.push(next); break; }
        hits.push(w);
        break;
      }
      const say = t.match(/\b(says?|tells?)\b/g);
      if (say) hits.push(...say);
      return [...new Set(hits)];
    },
    future(t) {
      // "X to do": "to" is the main verb only when no other verb comes before it
      // in the same part of the headline ("Rupee falls 33 paise to close" is not the future).
      const hits = [];
      const parts = unquote(t).split(/[:;|,]|\b(?:says?|said|tells?)\b/);
      for (const part of parts) {
        const m = part.match(/^(.*?)\bto (be (?:[a-z]+(?:ed|en)|[a-z]+)|[a-z]{3,})\b/);
        if (!m) continue;
        const next = m[2];
        if (/ing$/.test(next) || DET.has(next) || /^be [a-z]+$/.test(next) && !/(ed|en)$/.test(next) && !IRREG.has(next.slice(3))) continue;
        if (!next.startsWith("be ") && !TO_VERBS.includes(next) && !/^[a-z]+$/.test(next)) continue;
        if (/^(one|two|three|four|five|six|seven|eight|nine|ten|twenty|hundred)$/.test(next)) continue;
        const before = words(m[1]).map(bare).filter((w) => /[A-Za-z0-9]/.test(w));
        if (!before.length || detect.xToY(t).length) continue;
        const hasVerb = before.some((w) => isLower(w) && (!!stem(w) || /ed$/.test(w) || IRREG.has(w) || AUX.has(w)));
        const nouny = before.some((w) => /^(plans?|bid|move|demand|plea|call|order|key|way|road|path|due|close|next|back|onus|need|setback|relief|boost|blow|tribute|reply|response|according|prior|ahead|up|access|threat|refuses?|look|bids|initiative|efforts?|steps?|decision|nod|approval|request|appeal|attempt|chance|time|right|power|licence|permission|go-ahead)$/i.test(w));
        if (!hasVerb && !nouny) hits.push("to " + next);
      }
      return hits;
    },
    passive(t) {
      const ws = words(unquote(t));
      const hits = [];
      for (let i = 1; i < ws.length; i++) {
        const raw = ws[i], w = bare(raw).toLowerCase();
        if (!isLower(bare(raw))) continue;
        if (!(/^[a-z-]{2,}ed$|^[a-z-]{3,}en$/.test(w) || IRREG.has(w)) || NOT_PASSIVE.has(w) || /(teen|een|men)$/.test(w)) continue;
        const prev = bare(ws[i - 1]).toLowerCase();
        if (AUX.has(prev) || DET.has(prev) || prev === "be") continue;
        if (w === "set" && bare(ws[i + 1] || "") === "to") continue; // "set to" = about to (a headline word)
        const endsClause = /[,;:]$/.test(raw) || i === ws.length - 1;
        const next = i + 1 < ws.length ? bare(ws[i + 1]) : "";
        // "Raman elected Los Angeles mayor": a capital after it counts only when a name comes before it.
        const nameBefore = /^[A-Z0-9]/.test(bare(ws[i - 1]));
        if (endsClause || PREP.has(next.toLowerCase()) || /^[0-9₹$]/.test(next) || nameBefore) hits.push(bare(raw));
      }
      return hits;
    },
    colonEnd(t) {
      const hits = [];
      const i = t.lastIndexOf(":");
      if (i > 0) {
        const after = t.slice(i + 1).trim(), ws = words(after);
        if (ws.length && ws.length <= 5 && !/\bto\b/.test(after) &&
          ws.every((w) => !isLower(bare(w)) || SPEAKER.has(bare(w).toLowerCase()) || /^(of|and|in)$/.test(bare(w)))) hits.push(": " + after);
      }
      const says = t.match(/,\s*(?:says?|said)\s+(?:[A-Z][^,;:]{1,40}|police|sources|officials|experts)$|,\s*[^,;:]{2,45}\s(?:says?|said|finds|reports|told)$/);
      if (says) hits.push(says[0].replace(/^,\s*/, ""));
      return hits;
    },
    colonTopic(t) {
      if (/\s\|\s/.test(t)) return [t.split(/\s\|\s/)[0] + " |"];
      const i = t.indexOf(":");
      if (i <= 0 || detect.colonEnd(t).some((h) => h.startsWith(":")) || detect.xToY(t).length) return [];
      if (t.indexOf(":") !== t.lastIndexOf(":")) return [];
      const before = t.slice(0, i).trim();
      return words(before).length <= 7 ? [before + ":"] : [];
    },
    quotes(t) {
      return t.match(/[‘“][^’”]+[’”]|(?:^|[\s(])'[^']+'(?=[\s,;:.)]|$)/g)?.map((s) => s.trim()) || [];
    },
    comma(t) {
      const s = t.replace(/(\d),(\d)/g, "$1$2")
        .replace(/,\s*(?:says?|said)\s+[^,;:]+$|,\s*[^,;:]+\s(?:says?|said|tells?)\s?[^,;:]*$/, "");
      return /,/.test(s) ? [","] : [];
    },
    xToY(t) {
      // "Resubmit form: ECI to ousted voters": the speaker is only names, titles and speaker words.
      let m = t.match(/:\s*([A-Z][^:]{0,40}?)\sto\s([^:]{1,30})$/);
      if (m && !words(m[1]).every((w) => !isLower(bare(w)) || SPEAKER.has(bare(w).toLowerCase()))) m = null;
      if (m) m = [m[0], m[1] + " to " + m[2]];
      const tells = t.match(/,\s*[^,;:]{1,40}\stells?\s[^,;:]+$/);
      return [m && m[1], tells && tells[0].replace(/^,\s*/, "")].filter(Boolean);
    },
    as(t) {
      const ws = words(t), hits = [];
      for (let i = 1; i < ws.length - 1; i++) {
        if (bare(ws[i]) !== "as") continue;
        const prev = bare(ws[i - 1]).toLowerCase(), next = bare(ws[i + 1]).toLowerCase();
        if (AS_ROLE.has(prev) || /^(well|per|part|many|much|soon|long|far|of|usual|a|an)$/.test(next)) continue;
        hits.push("as");
      }
      return hits.slice(0, 1);
    },
    abbr(t) {
      const m = t.match(/\b(?:[A-Z]{2,6}s?|[A-Z](?:\.[A-Z])+\.?|U\.T\.s?)(?![a-z])|\b(?:govt|dept|Govt|Dept)\./g) || [];
      const set = new Set(m);
      return [...set].filter((x) => !/^(I|A)$/.test(x) && !set.has(x + "."));
    }
  };

  let cache = null;
  function setup() {
    if (cache) return cache;
    const GUIDE = root.GUIDE || [], CORE = root.CORE || [];
    const phrases = CORE.flatMap((grp, gi) => grp.items.map((it, ii) => ({
      ...it, gi, ii, group: grp,
      rx: (it.m || ["\\b" + reEsc(it.en) + "\\b"]).map((x) => new RegExp(x, /^[A-Z]/.test(it.en) ? "g" : "gi"))
    })));
    const ruleIndex = new Map(GUIDE.map((r, i) => [r.id, i]));
    cache = { GUIDE, CORE, phrases, ruleIndex };
    return cache;
  }

  function analyze(title) {
    const { GUIDE, phrases, ruleIndex } = setup();
    const t = String(title || "").replace(/\s+/g, " ").trim();
    const wordHits = [];
    phrases.forEach((p) => {
      const hits = p.rx.flatMap((r) => [...t.matchAll(r)].map((m) => m[0]));
      if (hits.length) wordHits.push({ p, hits: [...new Set(hits)] });
    });
    const rules = [];
    GUIDE.forEach((r, i) => {
      let hits = detect[r.id] ? detect[r.id](t) : [];
      // Rules taught through vocabulary: hit when a word from that core group appears.
      if (r.coreGroup) wordHits.filter((w) => w.p.group.g === r.coreGroup).forEach((w) => hits.push(...w.hits));
      if (!detect[r.id] && !r.coreGroup) return;
      hits = [...new Set(hits)];
      if (hits.length) rules.push({ id: r.id, i, hits });
    });
    // A guide example always shows the rule it was picked for.
    GUIDE.forEach((r, i) => {
      if ((r.examples || []).some((ex) => ex.h === t) && !rules.some((x) => x.i === i)) rules.push({ id: r.id, i, hits: [] });
    });
    rules.sort((a, b) => a.i - b.i);
    const score = rules.length + wordHits.filter((w) => !rules.some((r) => GUIDE[r.i].coreGroup === w.p.group.g)).length;
    return { rules, words: wordHits, score };
  }

  root.analyzeHeadline = analyze;
  if (typeof module !== "undefined") module.exports = analyze;
})(typeof window !== "undefined" ? window : globalThis);
