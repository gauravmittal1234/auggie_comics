/* Auggie Comics — automated quality check. Load in a page with all art + story scripts, then AuggiQC.run().
   Renders every page of every comic in both languages and reports layout problems (overlaps, faces covered,
   text off the page) and data problems (untranslated Hindi, characters facing away from each other). */
(function () {
  const K = window.AuggiComic;
  const ov = (a, b, pad = 0) => a && b && a.x < b.x + b.w + pad && a.x + a.w + pad > b.x && a.y < b.y + b.h + pad && a.y + a.h + pad > b.y;
  const area = (a, b) => Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  const DEV = /[ऀ-ॿ]/;
  const DP = new DOMParser();
  const norm = s => String(s || '').toLowerCase().replace(/[^a-zऀ-ॿ0-9]+/g, ' ').trim();

  function run(opts = {}) {
    const list = (window.AUGGIE_COMICS || []).slice().sort((a, b) => a.id - b.id);
    const issues = [];
    const add = (type, comic, where, detail) => issues.push({ type, comic, where, detail });
    for (const c of list) {
      // ---- data checks (language-independent)
      const bi = (o, key, where) => { if (!o || !o[key]) return; const en = norm(o[key].en), hi = o[key].hi || ''; if (en && norm(hi) === en) add('untranslated', c.id, where, o[key].en); if (hi && !DEV.test(hi)) add('hindi-missing', c.id, where, hi); };
      bi(c, 'title', 'title'); bi(c, 'blurb', 'blurb'); bi(c, 'moral', 'moral');
      c.panels.forEach((p, pi) => {
        const where = `p${pi + 1}`;
        bi(p, 'cap', where + '.cap');
        (p.say || []).forEach((b, bi2) => { bi(p, null, ''); const en = norm(b.en), hi = b.hi || ''; if (en && norm(hi) === en) add('untranslated', c.id, `${where}.say${bi2}`, b.en); if (typeof b.who !== 'number' || !(p.chars || [])[b.who]) add('who-invalid', c.id, `${where}.say${bi2}`, String(b.who)); });
        const chars = p.chars || [];
        if (chars.length >= 2) {
          const sorted = chars.slice().sort((a, b) => a.x - b.x);
          const talking = (p.say || []).length > 0;
          // the renderer turns speakers round automatically for these poses; only flag the ones it cannot fix
          const AUTO = { stand: 1, sit: 1, lie: 1, wave: 1, cheer: 1, think: 1, blast: 1, point: 1, run: 1, fly: 1 }; // running/leaping characters face the way they go
          const L0 = sorted[0], R0 = sorted[sorted.length - 1];
          if (talking && L0.flip && !AUTO[L0.pose || 'stand']) add('faces-away', c.id, where, `${L0.id} (leftmost, ${L0.pose}) faces away`);
          if (talking && !R0.flip && !AUTO[R0.pose || 'stand']) add('faces-away', c.id, where, `${R0.id} (rightmost, ${R0.pose}) faces away`);
          for (let i = 1; i < sorted.length; i++) if (sorted[i].x - sorted[i - 1].x < 0.18) add('chars-too-close', c.id, where, `${sorted[i - 1].id}@${sorted[i - 1].x} & ${sorted[i].id}@${sorted[i].x}`);
        }
        const sad = chars.filter(ch => ch.mood === 'sad' || ch.mood === 'scared');
        if (p.fx && !p.action && !opts.quiet) add('fx-without-action', c.id, where, p.fx.en);
      });
      // ---- rendered checks
      for (const lang of ['en', 'hi']) {
        const N = K.pageCount(c);
        for (let i = 0; i < N; i++) {
          const meta = [];
          let r;
          try { r = K.render(c, i, lang, meta); } catch (e) { add('render-throws', c.id, `page${i}/${lang}`, e.message); continue; }
          // every page must be valid SVG: the PDF export draws it as an image, and one bad attribute breaks the download
          { const pe = DP.parseFromString(r.art, 'image/svg+xml').getElementsByTagName('parsererror')[0]; if (pe) add('broken-drawing', c.id, `page${i}/${lang}`, (pe.textContent.match(/error[^\n]*/) || [''])[0].slice(0, 120)); }
          // text runs off the page
          for (const t of r.texts2 || []) {
            const size = t.maxW ? Math.min(t.size, t.size * (t.maxW / Math.max(1, K.measure(t.text, t.size, t.weight, t.family)))) : t.size;
            const tw = K.measure(t.text, size, t.weight, t.family);
            const x0 = t.anchor === 'middle' ? t.x - tw / 2 : t.anchor === 'end' ? t.x - tw : t.x, x1 = x0 + tw;
            if (!t.rot && (x0 < -1 || x1 > K.W + 1)) add('text-off-page', c.id, `page${i}/${lang}`, `"${t.text.slice(0, 40)}" ${Math.round(x0)}..${Math.round(x1)}`);
            if (t.y > K.H || t.y - size < 0) add('text-off-page', c.id, `page${i}/${lang}`, `"${t.text.slice(0, 40)}" y=${Math.round(t.y)}`);
          }
          meta.forEach((m, mi) => {
            const where = `page${i}/${lang}/panel${mi + 1}`;
            const w = m.box.w, h = m.box.h;
            // characters in the same depth layer must not overlap (back-layer characters stand between/behind on purpose)
            [0, 1].forEach(dep => { const a = m.chars.filter(q => (q.depth || 0) === dep).sort((p, q) => p.cx - q.cx); for (let j = 1; j < a.length; j++) if (a[j].l < a[j - 1].r - 2) add('chars-overlap', c.id, where, `${a[j - 1].id}/${a[j].id} by ${Math.round(a[j - 1].r - a[j].l)}`); });
            // a back-layer face must not be hidden behind a front-layer body
            m.chars.forEach((q, qi) => { if (!q.depth) return; const f = m.faces[qi]; m.chars.forEach((p2, pi) => { if (p2.depth) return; const fr = m.faces[pi]; if (f && fr && area(f, fr) > f.w * f.h * 0.3) add('face-hidden', c.id, where, `${q.id} behind ${p2.id}`); }); });
            m.chars.forEach(ch => { if (ch.l < -8 || ch.r > w + 8) add('char-outside-panel', c.id, where, `${ch.id} ${Math.round(ch.l)}..${Math.round(ch.r)} of ${Math.round(w)}`); });
            if (m.ks < 0.65) add('panel-crowded', c.id, where, `characters shrunk to ${Math.round(m.ks * 100)}%`);
            const faceHit = (bx, label) => m.faces.forEach((f, fi) => { const a = area(bx, f); if (a > f.w * f.h * 0.22) add(label, c.id, where, `${m.chars[fi] ? m.chars[fi].id : fi} ${Math.round(a / (f.w * f.h) * 100)}%`); });
            (m.bubbles || []).forEach(b => {
              faceHit(b, 'bubble-on-face');
              if (b.x < -1 || b.x + b.w > w + 1 || b.y < -1 || b.y + b.h > h + 1) add('bubble-outside-panel', c.id, where, `${Math.round(b.x)},${Math.round(b.y)} ${Math.round(b.w)}x${Math.round(b.h)} in ${Math.round(w)}x${Math.round(h)}`);
              if (m.cap && ov(b, m.cap, -2)) add('bubble-on-caption', c.id, where, '');
            });
            const bl = m.bubbles || [];
            for (let a = 0; a < bl.length; a++) for (let b2 = a + 1; b2 < bl.length; b2++) if (ov(bl[a], bl[b2], -2)) add('bubbles-overlap', c.id, where, '');
            // reading order: each bubble must come after the previous one (lower, or same row to the right)
            for (let a = 1; a < bl.length; a++) { const p0 = bl[a - 1], p1 = bl[a]; const sameRow = Math.abs(p1.y - p0.y) < Math.min(p0.h, p1.h) * 0.6; if (sameRow ? p1.x + p1.w / 2 < p0.x + p0.w / 2 : p1.y < p0.y) add('reading-order', c.id, where, 'bubble ' + (a + 1) + ' reads before bubble ' + a); }
            if (m.fx) { faceHit(m.fx, 'fx-on-face'); (m.bubbles || []).forEach(b => { if (area(m.fx, b) > b.w * b.h * 0.08) add('fx-on-bubble', c.id, where, `${Math.round(area(m.fx, b) / (b.w * b.h) * 100)}% of a bubble`); }); }
            m.faces.forEach((f, fi) => { if (f.y < 2) add('face-cut-top', c.id, where, m.chars[fi] ? m.chars[fi].id : String(fi)); });
          });
        }
      }
    }
    const counts = {};
    issues.forEach(i => { counts[i.type] = (counts[i.type] || 0) + 1; });
    return { comics: list.length, total: issues.length, counts, issues };
  }
  // Render one page exactly as the PDF does (canvas lettering) and save it through the dev server.
  async function snap(comicId, pageIdx, lang = 'en', scale = 1) {
    const c = (window.AUGGIE_COMICS || []).find(x => x.id === comicId);
    if (!c) throw new Error('no comic ' + comicId);
    const cv = await window.AuggiPDF.pageCanvas(c, pageIdx, lang, scale);
    const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
    const name = `c${comicId}-p${pageIdx}-${lang}.png`;
    const res = await fetch(`/__snap?name=${name}`, { method: 'POST', body: blob });
    if (!res.ok) throw new Error('snap upload failed ' + res.status);
    return name;
  }
  window.AuggiQC = { run, snap };
})();
