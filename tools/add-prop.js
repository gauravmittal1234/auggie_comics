#!/usr/bin/env node
// Add a prop to the panel that contains a given piece of English text (caption or bubble).
// Usage: node tools/add-prop.js <file> "<unique text in the panel>" <propId> <x> [y]
const fs = require('fs');
const [file, needle, id, x, y] = process.argv.slice(2);
let s = fs.readFileSync(file, 'utf8');
const at = s.indexOf(needle);
if (at < 0) { console.error('text not found: ' + needle); process.exit(1); }
const start = s.lastIndexOf('{ bg:', at);
if (start < 0) { console.error('panel start not found'); process.exit(1); }
// the end of this panel is the next "{ bg:" (or the end of the panels array)
const nextPanel = s.indexOf('{ bg:', at);
const panelText = s.slice(start, nextPanel < 0 ? s.length : nextPanel);
const propObj = `{ id: "${id}", x: ${x}${y != null ? `, y: ${y}` : ''} }`;
let newPanel;
if (/props:\s*\[/.test(panelText)) {
  if (panelText.includes(`id: "${id}"`)) { console.log('already has ' + id); process.exit(0); }
  newPanel = panelText.replace(/props:\s*\[\s*/, m => m + propObj + ', ');
} else {
  const charsEnd = panelText.indexOf(']', panelText.indexOf('chars:'));
  newPanel = panelText.slice(0, charsEnd + 1) + `, props: [ ${propObj} ]` + panelText.slice(charsEnd + 1);
}
s = s.slice(0, start) + newPanel + s.slice(start + panelText.length);
fs.writeFileSync(file, s);
console.log(`added ${id} to panel with "${needle.slice(0, 40)}"`);
