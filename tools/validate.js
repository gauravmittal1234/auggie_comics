#!/usr/bin/env node
// Validates Auggie comic data files against CONTENT_GUIDE.md.
// Usage: node tools/validate.js js/stories/stories-01.js [more files...]
const fs = require('fs');
const vm = require('vm');

const E = {
  category: 'home habits feelings family friends dogs animals birds festivals travel nature superhero mystery sports science planet space india'.split(' '),
  bg: 'city citynight park garden forest jungle beach ocean underwater space moon mountains snow desert village farm school home kitchen bedroom lab sky rain volcano cave market festival river playground action station airport wedding cafe vet'.split(' '),
  chars: 'auggie papa mumma mausi nanu dadi rohan anaya kabir zoya moti pinku snowy chiku bholu gadbad kichdu garaj zibbo cat parrot monkey cow rabbit turtle fish frog owl lion penguin dolphin peacock camel goat duck pigeon squirrel crab tiger deer horse'.split(' '),
  pose: 'stand wave run fly cheer point think sit blast lie'.split(' '),
  mood: 'happy sad surprised angry scared determined laugh sleepy'.split(' '),
  props: 'tree palm bush flower rock house ball kite balloon rocket ufo star planet cake gift book trophy umbrella mango apple banana icecream bicycle car bus boat diya toothbrush dustbin sapling map chest telescope gear clock drum rainbow sun cloud puddle bottle crown bulb shell crystal magnet machine bone bowl frisbee suitcase camera laptop plane train tent campfire sandcastle rickshaw hotair'.split(' '),
  kind: 'say shout think whisper'.split(' '),
};

const DEV = /[ऀ-ॿ]/;
const words = s => String(s).trim().split(/\s+/).filter(Boolean).length;

function checkFile(file, seenIds) {
  const errors = [], warns = [];
  const ctx = { window: {} };
  try { vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }
  catch (e) { return { errors: [`Cannot run file: ${e.message}`], warns, count: 0 }; }
  const list = ctx.window.AUGGIE_COMICS;
  if (!Array.isArray(list)) return { errors: ['window.AUGGIE_COMICS is not an array'], warns, count: 0 };

  const bi = (where, o, key, maxWords) => {
    const v = o && o[key];
    if (!v || typeof v !== 'object') { errors.push(`${where}.${key} missing {en, hi}`); return; }
    if (!v.en || !String(v.en).trim()) errors.push(`${where}.${key}.en empty`);
    if (!v.hi || !DEV.test(v.hi)) errors.push(`${where}.${key}.hi missing or not Devanagari`);
    if (maxWords && v.en && words(v.en) > maxWords) warns.push(`${where}.${key}.en has ${words(v.en)} words (max ${maxWords}): "${v.en}"`);
  };

  const checkScene = (where, sc, isPanel, age) => {
    if (!sc || typeof sc !== 'object') { errors.push(`${where} is not an object`); return; }
    if (!E.bg.includes(sc.bg)) errors.push(`${where}.bg "${sc.bg}" invalid`);
    const chars = sc.chars || [];
    if (!Array.isArray(chars) || chars.length > 3) errors.push(`${where}.chars must be an array of 0-3`);
    chars.forEach((c, i) => {
      const w = `${where}.chars[${i}]`;
      if (!E.chars.includes(c.id)) errors.push(`${w}.id "${c.id}" invalid`);
      if (c.pose && !E.pose.includes(c.pose)) errors.push(`${w}.pose "${c.pose}" invalid`);
      if (c.mood && !E.mood.includes(c.mood)) errors.push(`${w}.mood "${c.mood}" invalid`);
      if (typeof c.x !== 'number' || c.x < 0 || c.x > 1) errors.push(`${w}.x must be a number 0..1`);
      if (c.s != null && (typeof c.s !== 'number' || c.s < 0.4 || c.s > 2.2)) errors.push(`${w}.s must be 0.4..2.2`);
      if (c.cape != null && (c.cape !== true || c.id !== 'auggie')) errors.push(`${w}.cape is only allowed as cape: true on auggie`);
    });
    const props = sc.props || [];
    if (!Array.isArray(props) || props.length > 4) errors.push(`${where}.props must be an array of 0-4`);
    props.forEach((p, i) => {
      const w = `${where}.props[${i}]`;
      if (!E.props.includes(p.id)) errors.push(`${w}.id "${p.id}" invalid`);
      if (typeof p.x !== 'number' || p.x < 0 || p.x > 1) errors.push(`${w}.x must be a number 0..1`);
      if (p.y != null && (typeof p.y !== 'number' || p.y < 0 || p.y > 1)) errors.push(`${w}.y must be 0..1`);
    });
    if (sc.fx) {
      if (!sc.fx.en || !sc.fx.hi) errors.push(`${where}.fx needs en and hi`);
      else {
        if (sc.fx.en.length > 12) warns.push(`${where}.fx.en too long: "${sc.fx.en}"`);
        if (!DEV.test(sc.fx.hi)) errors.push(`${where}.fx.hi not Devanagari`);
      }
    }
    if (!isPanel) return;
    const maxSay = age === '4-6' ? 10 : 16, maxCap = age === '4-6' ? 14 : 20;
    if (sc.cap) bi(where, sc, 'cap', maxCap);
    const say = sc.say || [];
    if (!Array.isArray(say) || say.length > 2) errors.push(`${where}.say must be an array of 0-2`);
    say.forEach((b, i) => {
      const w = `${where}.say[${i}]`;
      if (typeof b.who !== 'number' || !chars[b.who]) errors.push(`${w}.who=${b.who} does not point to a character in this panel`);
      if (b.kind && !E.kind.includes(b.kind)) errors.push(`${w}.kind "${b.kind}" invalid`);
      if (!b.en || !String(b.en).trim()) errors.push(`${w}.en empty`);
      if (!b.hi || !DEV.test(b.hi)) errors.push(`${w}.hi missing or not Devanagari`);
      if (b.en && words(b.en) > maxSay) warns.push(`${w}.en has ${words(b.en)} words (max ${maxSay}): "${b.en}"`);
    });
    if (!sc.cap && !say.length) errors.push(`${where} needs a cap or at least one say`);
  };

  list.forEach((c, n) => {
    const where = `comic#${c && c.id != null ? c.id : '?' + n}`;
    if (!Number.isInteger(c.id)) errors.push(`${where}: id must be an integer`);
    else if (seenIds.has(c.id)) errors.push(`${where}: duplicate id ${c.id} (also in ${seenIds.get(c.id)})`);
    else seenIds.set(c.id, file);
    if (!['4-6', '6-10'].includes(c.age)) errors.push(`${where}: age must be "4-6" or "6-10"`);
    if (!E.category.includes(c.category)) errors.push(`${where}: category "${c.category}" invalid`);
    bi(where, c, 'title', 8); bi(where, c, 'blurb', 24); bi(where, c, 'moral', 16);
    checkScene(`${where}.cover`, c.cover, false, c.age);
    if (c.cover && !(c.cover.chars || []).length) errors.push(`${where}.cover needs at least one character`);
    const need = c.age === '4-6' ? 6 : 8;
    if (!Array.isArray(c.panels) || c.panels.length !== need) errors.push(`${where}: needs exactly ${need} panels (has ${c.panels ? c.panels.length : 0})`);
    (c.panels || []).forEach((p, i) => checkScene(`${where}.panels[${i}]`, p, true, c.age));
  });
  return { errors, warns, count: list.length };
}

const files = process.argv.slice(2);
if (!files.length) { console.log('Usage: node tools/validate.js <file.js> [...]'); process.exit(1); }
const seen = new Map();
let bad = 0, total = 0;
for (const f of files) {
  const { errors, warns, count } = checkFile(f, seen);
  total += count;
  console.log(`\n${f}: ${count} comics, ${errors.length} errors, ${warns.length} warnings`);
  errors.forEach(e => console.log('  ERROR  ' + e));
  warns.forEach(w => console.log('  WARN   ' + w));
  bad += errors.length;
}
console.log(`\nTotal comics: ${total}. ${bad ? bad + ' errors.' : 'All valid.'}`);
process.exit(bad ? 1 : 0);
