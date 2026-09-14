#!/usr/bin/env node
// Content checks the validator does not do: family pet names used by the right person, name spellings,
// people addressing themselves, house style (Mumma/Papa, never Mom/Dad), duplicate titles/blurbs, mixed scripts.
// Usage: node tools/content-check.js js/stories/*.js
const fs = require('fs'), vm = require('vm');
const comics = [];
for (const f of process.argv.slice(2)) {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
  (ctx.window.AUGGIE_COMICS || []).forEach(c => comics.push(Object.assign(c, { _file: f.split('/').pop() })));
}
const out = [];
const add = (c, where, type, msg) => out.push(`${type.padEnd(15)} #${c.id} ${where}: ${msg}`);

// who may use which pet name (the family's real nicknames)
const PET = [
  { re: /\bMittsy\b/, hi: /मिट्सी/, who: ['mumma'], name: 'Mittsy (only Mumma calls Papa this)' },
  { re: /\bMottu\b/, hi: /मोटू/, who: ['papa'], name: 'Mottu (only Papa calls Mumma this)' },
  { re: /(^|[,!?.]\s*)Baby[,!?.]|,\s*Baby\b/, hi: /(^|[,!?।]\s*)बेबी[,!?।]|,\s*बेबी/, who: ['papa'], name: 'Baby (only Papa calls Mumma this)' },
  { re: /\bChottu\b/, hi: /छोटू/, who: ['mumma'], name: 'Chottu (only Mumma calls Mausi this)' },
];
const MISSPELL = [
  [/\bMit+s?i?e?y?\b(?<!Mittsy)/, 'Mittsy'], [/\bMitsy\b|\bMittsi\b|\bMitty\b/, 'Mittsy'], [/\bMotu\b|\bMottoo\b/, 'Mottu'],
  [/\bChotu\b|\bChhotu\b|\bChottoo\b/, 'Chottu'], [/\bAuggi\b(?!e)/, 'Auggie'], [/\bNannu\b|\bNanoo\b/, 'Nanu'], [/\bDaadi\b/, 'Dadi'],
];
const MISSPELL_HI = [[/मित्सी|मिट्ठी|मिट्सि/, 'मिट्सी'], [/मोट्टू|मोतू/, 'मोटू'], [/छोट्टू|छोतू/, 'छोटू'], [/आगी|औगी|ऑगि\b/, 'ऑगी']];
const SELF = { auggie: [/^\s*Auggie[,!]/, /^\s*ऑगी[,!]/], papa: [/^\s*Papa[,!]/, /^\s*पापा[,!]/], mumma: [/^\s*Mumma[,!]/, /^\s*मम्मा[,!]/], mausi: [/^\s*Mausi[,!]/, /^\s*मौसी[,!]/], nanu: [/^\s*Nanu[,!]/, /^\s*नानू[,!]/], dadi: [/^\s*Dadi[,!]/, /^\s*दादी[,!]/] };
const LATIN_OK = /\b(PDF|OK|TV|LED|UFO|WOW|WOOF|SOS|Wi-?Fi|g{3,})\b/i;

const lines = c => {
  const L = [];
  ['title', 'blurb', 'moral'].forEach(k => c[k] && L.push({ where: k, en: c[k].en, hi: c[k].hi, who: null }));
  c.panels.forEach((p, i) => {
    if (p.cap) L.push({ where: `p${i + 1}.cap`, en: p.cap.en, hi: p.cap.hi, who: null });
    (p.say || []).forEach((b, j) => L.push({ where: `p${i + 1}.say${j + 1}`, en: b.en, hi: b.hi, who: (p.chars[b.who] || {}).id }));
  });
  return L;
};

const seenT = new Map(), seenTh = new Map(), seenB = new Map();
for (const c of comics) {
  const t = c.title.en.trim().toLowerCase(), th = c.title.hi.trim(), bl = c.blurb.en.trim().toLowerCase();
  if (seenT.has(t)) add(c, 'title', 'dup-title', `"${c.title.en}" also #${seenT.get(t)}`); else seenT.set(t, c.id);
  if (seenTh.has(th)) add(c, 'title', 'dup-title-hi', `"${th}" also #${seenTh.get(th)}`); else seenTh.set(th, c.id);
  if (seenB.has(bl)) add(c, 'blurb', 'dup-blurb', `also #${seenB.get(bl)}`); else seenB.set(bl, c.id);
  for (const l of lines(c)) {
    const en = l.en || '', hi = l.hi || '';
    const enN = en.replace(/Caf[eé] Chottu/g, ''), hiN = hi.replace(/कैफ़े छोटू|कैफे छोटू/g, ''); // Mausi's café is named after her nickname
    if (l.who) for (const pn of PET) {
      if ((pn.re.test(enN) || pn.hi.test(hiN)) && !pn.who.includes(l.who)) add(c, l.where, 'pet-name', `${l.who} says ${pn.name}: "${en}"`);
    }
    for (const [re, good] of MISSPELL) if (re.test(en) && !new RegExp('\\b' + good + '\\b').test(en.match(re)[0])) add(c, l.where, 'spelling', `"${en.match(re)[0]}" should be ${good}: "${en}"`);
    for (const [re, good] of MISSPELL_HI) if (re.test(hi)) add(c, l.where, 'spelling-hi', `"${hi.match(re)[0]}" should be ${good}: "${hi}"`);
    if (l.who && SELF[l.who] && (SELF[l.who][0].test(en) || SELF[l.who][1].test(hi))) add(c, l.where, 'talks-to-self', `${l.who}: "${en}"`);
    if (/\b(Mom|Mommy|Mum|Dad|Daddy)\b/.test(en) && (l.who === 'auggie' || !l.who) && !/Daddy/.test(en)) add(c, l.where, 'house-style', `use Mumma/Papa: "${en}"`);
    if (l.who === 'auggie' && /मम्मी\b/.test(hi)) add(c, l.where, 'house-style', `Auggie says मम्मी (use मम्मा): "${hi}"`);
    const latin = (hi.match(/[A-Za-z]{2,}[A-Za-z'-]*/g) || []).filter(w => !LATIN_OK.test(w));
    if (latin.length) add(c, l.where, 'latin-in-hindi', `${latin.join(', ')}: "${hi}"`);
    if (/[ऀ-ॿ]/.test(en)) add(c, l.where, 'hindi-in-en', `"${en}"`);
  }
}
// pet safety: a comic that mentions a food that is dangerous for dogs must also say it is bad for dogs
const DANGER = /\b(chocolates?|grapes?|raisins?|onions?|garlic|laddoos?|sweets|jalebis?|halwa|sugar|makhan|butter|cakes?|ice[- ]?creams?|samosas?)\b/i;
const SIMILE = /\b((like|as) (a |an |the )?(melted |melting |soft )?|puddle of |pile of )(ice[- ]?cream|butter|jalebi|cake)\b/i;
// only a line that talks about eating, sharing or wanting the food needs a safety answer somewhere in the comic
const EATING = /\b(eat|eats|ate|eating|bite|bites|gobble|lick|licks|taste|tastes|munch|share|sharing|give me|have some|want|wants|hungry|yum|snack|treat|reach it|mine)\b/i;
const SAFE = /((is|are)n'?t for (dogs|auggie|you|pets)|not for doggies|hurts? (doggy |dog )?tumm|for us\b.*carrot|carrot for the|पेट बिगड़|poison|not (good |safe )?for dogs|bad for dogs|make[s]? dogs? (very )?sick|dogs? (can'?t|cannot|must not|mustn'?t|shouldn'?t) (eat|have)|no (chocolate|sweets|laddoo|sugar)|not for (auggie|you|pets|dogs)|only for (people|humans)|for people|dog[- ]safe|instead|carrot for (auggie|me|you)|apple slices?|कुत्तों के लिए (ज़हर|बुरा|ठीक नहीं|नुक़सान|नुकसान)|ज़हर|बीमार)/i;
for (const c of comics) {
  const all = lines(c);
  const hits = all.filter(l => DANGER.test(l.en || '') && !SIMILE.test(l.en || '') && EATING.test(l.en || ''));
  if (!hits.length) continue;
  const safe = all.some(l => SAFE.test(l.en || '') || SAFE.test(l.hi || ''));
  if (!safe) add(c, hits[0].where, 'pet-safety', `mentions "${(hits[0].en.match(DANGER) || [])[0]}" but never says it is bad for dogs: "${hits[0].en}"`);
}
console.log(out.join('\n'));
const counts = {}; out.forEach(l => { const k = l.split(' ')[0]; counts[k] = (counts[k] || 0) + 1; });
console.log(`\n${comics.length} comics checked. ${out.length} findings: ${JSON.stringify(counts)}`);
