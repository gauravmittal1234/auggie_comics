#!/usr/bin/env node
// When everyone in a panel is running or leaping, they run the same way (the leftmost runner's direction).
// Speakers facing each other is right for talking, but a runner turned round looks like running backwards.
// Usage: node tools/fix-runners.js js/stories/stories-01.js [...]   (edits files in place, prints what changed)
const fs = require('fs');
for (const file of process.argv.slice(2)) {
  let src = fs.readFileSync(file, 'utf8');
  const changes = [];
  // walk every  chars: [ ... ]  array literal and rewrite flips inside it when all poses are run/fly
  src = src.replace(/chars:\s*\[([^\[\]]*)\]/g, (whole, inner) => {
    const items = inner.match(/\{[^{}]*\}/g) || [];
    if (items.length < 2) return whole;
    const pose = s => (s.match(/pose:\s*["']([a-z]+)["']/) || [])[1] || 'stand';
    if (!items.every(it => pose(it) === 'run' || pose(it) === 'fly')) return whole;
    const xOf = s => parseFloat((s.match(/x:\s*([0-9.]+)/) || [])[1] || '0.5');
    const left = items.slice().sort((a, b) => xOf(a) - xOf(b))[0];
    const leftFlip = /flip:\s*true/.test(left);
    let out = inner, changed = false;
    items.forEach(it => {
      const has = /flip:\s*true/.test(it);
      if (has === leftFlip) return;
      const fixed = has ? it.replace(/,\s*flip:\s*true/, '').replace(/flip:\s*true,\s*/, '') : it.replace(/\s*\}$/, ', flip: true }');
      out = out.replace(it, fixed); changed = true;
    });
    if (changed) changes.push(items.map(it => (it.match(/id:\s*["']([a-z]+)["']/) || [])[1]).join('+'));
    return changed ? whole.replace(inner, out) : whole;
  });
  fs.writeFileSync(file, src);
  console.log(`${file}: ${changes.length} running panels aligned${changes.length ? ' (' + changes.join(', ') + ')' : ''}`);
}
