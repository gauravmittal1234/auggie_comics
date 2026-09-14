/* Auggie Comics — PDF export. Draws each page's art (SVG) to a canvas, letters it with the
   loaded web fonts (so Hindi shapes correctly), and packs the pages into an A4 PDF. */
(function () {
  const K = window.AuggiComic;

  const loadImg = src => new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => rej(new Error('Could not draw a comic page')); im.src = src; });

  async function pageCanvas(comic, idx, lang, scale) {
    const r = K.render(comic, idx, lang);
    const img = await loadImg('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(r.art));
    const cv = document.createElement('canvas');
    cv.width = Math.round(K.W * scale); cv.height = Math.round(K.H * scale);
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.drawImage(img, 0, 0, cv.width, cv.height);
    K.textCanvas(ctx, r.texts, scale);
    return cv;
  }

  async function make(comic, lang, onProgress) {
    if (!window.jspdf || !window.jspdf.jsPDF) throw new Error('The PDF maker did not load. Check your internet connection and reload the page.');
    const { jsPDF } = window.jspdf;
    // make sure the comic fonts are loaded for canvas lettering, otherwise fallbacks are wider and text can spill
    if (document.fonts && document.fonts.load) {
      try { await Promise.race([Promise.all([document.fonts.load('400 40px Bangers', 'AUGGIE'), document.fonts.load('600 20px "Baloo 2"', 'Aa अआ'), document.fonts.load('800 20px "Baloo 2"', 'Aa अआ'), document.fonts.load('700 20px "Baloo 2"', 'Aa')]), new Promise(r => setTimeout(r, 3000))]); } catch (e) { /* use fallbacks */ }
    }
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
    const total = K.pageCount(comic);
    for (let i = 0; i < total; i++) {
      onProgress && onProgress(i + 1, total);
      const cv = await pageCanvas(comic, i, lang, 1.6);
      if (i > 0) doc.addPage();
      // Keep a white safety margin all round: home printers cannot print to the paper edge and would cut off
      // the outer panels and words. The page keeps its exact shape (800 × 1130) inside the margin.
      const MARGIN = 9, pw = 210 - MARGIN * 2, ph = pw * (K.H / K.W);
      const fitH = Math.min(ph, 297 - MARGIN * 2), fitW = fitH * (K.W / K.H);
      doc.addImage(cv.toDataURL('image/jpeg', 0.92), 'JPEG', (210 - fitW) / 2, (297 - fitH) / 2, fitW, fitH, undefined, 'FAST');
      await new Promise(r => setTimeout(r, 0));
    }
    doc.setProperties({ title: `Auggie Comics #${comic.id} — ${comic.title.en}`, subject: comic.blurb.en, author: 'Auggie Comics', creator: 'Auggie Comics' });
    return doc.output('blob');
  }

  let dlPromise = null;
  const downloadsCap = () => {
    if (!dlPromise) dlPromise = (window.claude && typeof window.claude.use === 'function') ? Promise.resolve(window.claude.use('downloads')).catch(() => null) : Promise.resolve(null);
    return dlPromise;
  };
  downloadsCap();

  // Returns 'saved' | 'declined'
  async function save(blob, filename) {
    const dl = await downloadsCap();
    if (dl) {
      try { await dl.save({ filename, data: blob }); return 'saved'; }
      catch (e) { if (e && e.code === 'declined') return 'declined'; throw new Error('This viewer could not save the file.'); }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    return 'saved';
  }

  window.AuggiPDF = { make, save, pageCanvas };
})();
