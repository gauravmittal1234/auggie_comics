/* Auggi Comics — page composer: panels, speech bubbles, captions, sound effects, covers.
   Produces art (SVG, no text) + text runs, so the same page can be shown on screen
   (SVG <text>) and exported to PDF (canvas fillText with the loaded web fonts). */
(function () {
  const A = window.AuggiArt, C = A.C, n = A.n;
  const K = (window.AuggiComic = {});

  const BODY = '"Baloo 2", "Nirmala UI", "Kohinoor Devanagari", "Mangal", "Noto Sans Devanagari", "Trebuchet MS", sans-serif';
  const DISPLAY = '"Bangers", "Impact", "Arial Black", sans-serif';
  K.BODY = BODY; K.DISPLAY = DISPLAY;
  K.W = 800; K.H = 1130;

  const mctx = document.createElement('canvas').getContext('2d');
  const fontStr = (size, weight, family) => `${weight || 400} ${size}px ${family}`;
  K.measure = (text, size, weight, family) => { mctx.font = fontStr(size, weight, family); return mctx.measureText(text).width; };
  K.wrap = (text, size, weight, family, maxW) => {
    const words = String(text).trim().split(/\s+/);
    const lines = []; let cur = '';
    for (const w of words) {
      const t = cur ? cur + ' ' + w : w;
      if (!cur || K.measure(t, size, weight, family) <= maxW) cur = t; else { lines.push(cur); cur = w; }
    }
    if (cur) lines.push(cur);
    return lines;
  };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const isHi = lang => lang === 'hi';
  const fxFont = lang => (isHi(lang) ? { family: BODY, weight: 800 } : { family: DISPLAY, weight: 400 });

  /* ---------- text runs ---------- */
  K.textSVG = runs => runs.map(r => {
    const tr = r.rot ? ` transform="rotate(${n(r.rot)} ${n(r.cx != null ? r.cx : r.x)} ${n(r.cy != null ? r.cy : r.y)})"` : '';
    const stroke = r.stroke ? ` stroke="${r.stroke}" stroke-width="${n(r.sw || 2)}" stroke-linejoin="round" paint-order="stroke"` : '';
    return `<text x="${n(r.x)}" y="${n(r.y)}" font-family='${r.family}' font-size="${n(r.size)}" font-weight="${r.weight || 400}" fill="${r.fill || C.ink}" text-anchor="${r.anchor || 'start'}"${stroke}${tr}${r.ls ? ` letter-spacing="${r.ls}"` : ''}>${esc(r.text)}</text>`;
  }).join('');
  K.textCanvas = (ctx, runs, scale) => {
    for (const r of runs) {
      ctx.save();
      ctx.scale(scale, scale);
      ctx.font = fontStr(r.size, r.weight, r.family);
      ctx.textAlign = r.anchor === 'middle' ? 'center' : r.anchor === 'end' ? 'right' : 'left';
      ctx.textBaseline = 'alphabetic';
      if (r.ls && 'letterSpacing' in ctx) ctx.letterSpacing = r.ls + 'px';
      if (r.rot) { const cx = r.cx != null ? r.cx : r.x, cy = r.cy != null ? r.cy : r.y; ctx.translate(cx, cy); ctx.rotate((r.rot * Math.PI) / 180); ctx.translate(-cx, -cy); }
      if (r.stroke) { ctx.lineJoin = 'round'; ctx.lineWidth = r.sw || 2; ctx.strokeStyle = r.stroke; ctx.strokeText(r.text, r.x, r.y); }
      ctx.fillStyle = r.fill || C.ink;
      ctx.fillText(r.text, r.x, r.y);
      ctx.restore();
    }
  };

  /* ---------- bubbles ---------- */
  function bubbleShape(kind, x, y, w, h, tail, rnd) {
    // returns {stroke: svg (outline layer), fill: svg (fill layer)}
    const sw = 3.2;
    let shape = '', tailSh = '';
    const ink = `stroke="${C.ink}" stroke-width="${sw * 2}" stroke-linejoin="round"`;
    if (kind === 'shout') {
      const pts = []; const step = 22; const per = [];
      for (let t = 0; t < w; t += step) per.push([x + t, y]);
      for (let t = 0; t < h; t += step) per.push([x + w, y + t]);
      for (let t = 0; t < w; t += step) per.push([x + w - t, y + h]);
      for (let t = 0; t < h; t += step) per.push([x, y + h - t]);
      const cx = x + w / 2, cy = y + h / 2;
      per.forEach((p, i) => { const dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy) || 1, o = i % 2 ? 4 : 15 + rnd() * 6; pts.push([p[0] + (dx / d) * o, p[1] + (dy / d) * o]); });
      shape = `<polygon points="${pts.map(p => n(p[0]) + ',' + n(p[1])).join(' ')}"`;
    } else if (kind === 'think') {
      const circles = [];
      const per = Math.max(6, Math.round((w + h) / 20));
      for (let i = 0; i < per * 2; i++) {
        const a = (i / (per * 2)) * Math.PI * 2;
        circles.push([x + w / 2 + Math.cos(a) * (w / 2 + 4), y + h / 2 + Math.sin(a) * (h / 2 + 4), 16 + (i % 3) * 3]);
      }
      const inner = `<ellipse cx="${n(x + w / 2)}" cy="${n(y + h / 2)}" rx="${n(w / 2 + 8)}" ry="${n(h / 2 + 8)}"`;
      const trail = tail ? [0.25, 0.55, 0.8].map((t, i) => [tail.bx + (tail.tx - tail.bx) * t, tail.by + (tail.ty - tail.by) * t, 8 - i * 2.2]) : [];
      const all = circles.concat(trail);
      return {
        stroke: all.map(c => `<circle cx="${n(c[0])}" cy="${n(c[1])}" r="${n(c[2])}" fill="#fff" ${ink}/>`).join('') + `${inner} fill="#fff" ${ink}/>`,
        fill: all.map(c => `<circle cx="${n(c[0])}" cy="${n(c[1])}" r="${n(c[2])}" fill="#fff"/>`).join('') + `${inner} fill="#fff"/>`,
      };
    } else {
      const rx = Math.min(h / 2, 26);
      shape = `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${n(rx)}"`;
    }
    if (tail) {
      const { bx, by, tx, ty, horiz } = tail;
      const tw = kind === 'shout' ? 10 : 12;
      const p = horiz ? [[bx, by - tw], [bx, by + tw], [tx, ty]] : [[bx - tw, by], [bx + tw, by], [tx, ty]];
      tailSh = `<polygon points="${p.map(q => n(q[0]) + ',' + n(q[1])).join(' ')}"`;
    }
    const dash = kind === 'whisper' ? ' stroke-dasharray="10 7"' : '';
    if (kind === 'whisper') {
      return { stroke: (tailSh ? `${tailSh} fill="#fff" stroke="${C.ink}" stroke-width="${sw}"${dash}/>` : '') + `${shape} fill="#fff" stroke="${C.ink}" stroke-width="${sw}"${dash}/>`, fill: '' };
    }
    return {
      stroke: (tailSh ? `${tailSh} fill="#fff" ${ink}/>` : '') + `${shape} fill="#fff" ${ink}/>`,
      fill: (tailSh ? `${tailSh} fill="#fff"/>` : '') + `${shape} fill="#fff"/>`,
    };
  }

  const overlap = (a, b, pad = 6) => a.x < b.x + b.w + pad && a.x + a.w + pad > b.x && a.y < b.y + b.h + pad && a.y + a.h + pad > b.y;

  /* ---------- one panel ---------- */
  // box: {x,y,w,h, poly:[[x,y]...] in page coords}. opt: {lang, fs, seed, big}
  K.panel = (sc, box, opt) => {
    const { x: X, y: Y, w, h } = box;
    const lang = opt.lang || 'en';
    const rnd = A.rng(opt.seed || 1);
    const gy = h * (A.GROUND[sc.bg] || 0.86);
    A.setLW(4.2);
    const clipId = A.uid('cp');
    const poly = box.poly.map(p => [p[0] - X, p[1] - Y]);
    let art = `<clipPath id="${clipId}"><polygon points="${poly.map(p => n(p[0]) + ',' + n(p[1])).join(' ')}"/></clipPath>`;
    art += `<g transform="translate(${n(X)} ${n(Y)})"><g clip-path="url(#${clipId})">`;
    art += A.bg(sc.bg, w, h, gy, opt.seed || 1);

    const unit = (opt.big ? Math.min(h * 0.46, w * 0.5) : Math.min(h * 0.56, w * 0.62)) / 200;

    if (sc.action) {
      const cx = w / 2, cy = h * 0.45, R = Math.hypot(w, h);
      let l = '';
      for (let i = 0; i < 44; i++) { const a = (i / 44) * Math.PI * 2 + rnd() * 0.05, r1 = Math.min(w, h) * (0.32 + rnd() * 0.12); l += `<line x1="${n(cx + Math.cos(a) * r1)}" y1="${n(cy + Math.sin(a) * r1)}" x2="${n(cx + Math.cos(a) * R)}" y2="${n(cy + Math.sin(a) * R)}" stroke="${i % 3 ? '#fff' : C.ink}" stroke-width="${n(1.5 + rnd() * 3.5)}" opacity="${i % 3 ? 0.75 : 0.35}"/>`; }
      art += l;
    }

    // props
    for (const p of sc.props || []) {
      const sky = A.SKY_PROPS[p.id];
      const k = unit * (p.s || 1) * (A.PROP_SIZE[p.id] || 1);
      const px = p.x * w;
      const py = p.y != null ? p.y * h : sky != null ? sky * h : gy + 4;
      art += `<g transform="translate(${n(px)} ${n(py)}) scale(${n(k * 100) / 100})">${A.prop(p.id)}</g>`;
    }

    // characters
    const anchors = [], bodies = [];
    const chars = sc.chars || [];
    chars.forEach(c => {
      const ch = A.char(c.id, c.pose || 'stand', c.mood || 'happy', { cape: c.cape });
      const k = unit * (c.s || 1) * (A.CHAR_SIZE[c.id] || 1);
      let cx = Math.max(w * 0.1, Math.min(w * 0.9, c.x * w));
      const dogCfg = A.DOGS && A.DOGS[c.id];
      if (dogCfg) {
        // dogs are long: keep the whole body (and a trailing cape) inside the panel
        const ds = dogCfg.size * (dogCfg.len || 1);
        const back = (c.pose === 'fly' || c.pose === 'run' ? 150 : 112) * k * ds, front = 105 * k * dogCfg.size;
        const lo = (c.flip ? front : back) + 6, hi = w - (c.flip ? back : front) - 6;
        cx = lo < hi ? Math.max(lo, Math.min(hi, c.x * w)) : w / 2;
      }
      let by = gy + 6;
      const floaty = (sc.bg === 'space' || sc.bg === 'sky' || sc.bg === 'underwater') && c.pose !== 'sit';
      if (c.pose === 'fly') by = h * 0.66;
      else if (c.id === 'garaj') by = h * 0.58;
      else if (ch.floats) by = h * 0.72;
      else if (floaty) by = h * 0.84;
      const f = c.flip ? -1 : 1;
      // keep the head inside the panel
      const headY = by + ch.anchor[1] * k;
      if (headY < h * 0.2) by += h * 0.2 - headY;
      art += `<g transform="translate(${n(cx)} ${n(by)}) scale(${n(k * f * 1000) / 1000} ${n(k * 1000) / 1000})">${ch.svg}</g>`;
      anchors.push({ x: cx + ch.anchor[0] * k * f, y: Math.max(14, by + ch.anchor[1] * k) });
      if (dogCfg) bodies.push({ x: cx - (c.flip ? 105 : 120) * k * dogCfg.size, y: by + ch.anchor[1] * k, w: 225 * k * dogCfg.size * (dogCfg.len || 1), h: -ch.anchor[1] * k });
      else bodies.push({ x: cx - 70 * k, y: by + ch.anchor[1] * k, w: 140 * k, h: -ch.anchor[1] * k });
    });
    art += A.halftone(0, 0, w, h * 0.0001, 'dark');

    const texts = [];
    const boxes = [];
    const m = 16;
    let top = 12;
    const fs = opt.fs || 18;
    const lhB = fs * (isHi(lang) ? 1.42 : 1.28);

    // caption
    if (sc.cap && sc.cap[lang]) {
      const cfs = fs * 0.92;
      const lh = cfs * (isHi(lang) ? 1.42 : 1.3);
      const lines = K.wrap(sc.cap[lang], cfs, 600, BODY, Math.min(w * 0.8, 420) - 24);
      const tw = Math.max(...lines.map(l => K.measure(l, cfs, 600, BODY)));
      const cw = tw + 26, ch = lines.length * lh + 14;
      const cx = poly[0][0] + 10, cy = Math.max(poly[0][1], poly[1][1]) + 10;
      art += `<rect x="${n(cx + 4)}" y="${n(cy + 4)}" width="${n(cw)}" height="${n(ch)}" fill="${C.ink}"/>` + A.rect(cx, cy, cw, ch, 0, '#FFE45C', 3);
      lines.forEach((l, i) => texts.push({ text: l, x: X + cx + 13, y: Y + cy + 7 + lh * (i + 0.78), size: cfs, weight: 600, family: BODY, fill: C.ink }));
      boxes.push({ x: cx, y: cy, w: cw + 4, h: ch + 4 });
      top = cy + ch + 12;
    }

    // speech bubbles
    const bubbleArt = [];
    (sc.say || []).forEach((b, bi) => {
      const txt = b[lang]; if (!txt) return;
      const kind = b.kind || 'say';
      const bfs = kind === 'shout' ? fs * 1.08 : kind === 'whisper' ? fs * 0.92 : fs;
      const weight = kind === 'shout' ? 800 : 600;
      const maxW = Math.min(w * 0.6, 300 * (fs / 18));
      const lines = K.wrap(txt, bfs, weight, BODY, maxW);
      const tw = Math.max(...lines.map(l => K.measure(l, bfs, weight, BODY)));
      const padX = kind === 'think' ? 16 : 16, padY = kind === 'think' ? 10 : 9;
      const bw = tw + padX * 2, bh = lines.length * lhB + padY * 2 - (lhB - bfs) * 0.4;
      const an = anchors[b.who] || { x: w / 2, y: h * 0.6 };
      const extra = kind === 'shout' ? 16 : kind === 'think' ? 16 : 0;
      let bx = Math.max(m + extra, Math.min(w - m - extra - bw, an.x - bw / 2));
      let byy = top + extra * 0.6;
      // stack under anything it collides with
      let guard = 0, moved = true;
      while (moved && guard++ < 8) {
        moved = false;
        for (const o of boxes) if (overlap({ x: bx - extra, y: byy - extra, w: bw + extra * 2, h: bh + extra * 2 }, o)) {
          // try beside first (if bubbles belong to different sides)
          const side = an.x > o.x + o.w / 2 ? o.x + o.w + 12 + extra : o.x - bw - 12 - extra;
          if (side >= m && side + bw <= w - m && !boxes.some(q => q !== o && overlap({ x: side - extra, y: byy - extra, w: bw + extra * 2, h: bh + extra * 2 }, q))) { bx = side; }
          else byy = o.y + o.h + 10 + extra;
          moved = true; break;
        }
      }
      byy = Math.min(byy, h - bh - 12);
      // if the bubble sits on the speaker's face, slide it sideways
      const faceBox = { x: an.x - 40, y: an.y + 4, w: 80, h: 70 };
      if (overlap({ x: bx, y: byy, w: bw, h: bh }, faceBox, 0)) {
        const right = an.x + 46, left = an.x - 46 - bw;
        if (right + bw <= w - m) bx = right; else if (left >= m) bx = left;
      }
      // tail
      let tail = null;
      const midX = bx + bw / 2;
      const below = an.y > byy + bh;
      if (below) {
        const bxT = Math.max(bx + 20, Math.min(bx + bw - 20, an.x + (midX - an.x) * 0.25));
        const dx = an.x - bxT, dy = an.y - (byy + bh), d = Math.hypot(dx, dy) || 1;
        const L = Math.min(d - 8, 56);
        if (L > 6) tail = { bx: bxT, by: byy + bh - 2, tx: bxT + (dx / d) * L, ty: byy + bh + (dy / d) * L };
      } else {
        const onRight = an.x > midX;
        const edge = onRight ? bx + bw - 2 : bx + 2;
        const by2 = byy + bh * 0.65;
        const dx = an.x - edge, dy = an.y - by2, d = Math.hypot(dx, dy) || 1;
        const L = Math.min(d - 8, 50);
        if (L > 6) tail = { bx: edge, by: by2, tx: edge + (dx / d) * L, ty: by2 + (dy / d) * L, horiz: true };
      }
      const sh = bubbleShape(kind, bx, byy, bw, bh, tail, rnd);
      bubbleArt.push(sh);
      lines.forEach((l, i) => texts.push({ text: l, x: X + bx + bw / 2, y: Y + byy + padY + lhB * i + bfs * 0.98, size: bfs, weight, family: BODY, fill: C.ink, anchor: 'middle' }));
      boxes.push({ x: bx - extra, y: byy - extra, w: bw + extra * 2, h: bh + extra * 2 });
    });
    art += bubbleArt.map(s => s.stroke).join('') + bubbleArt.map(s => s.fill).join('');

    // sound effect
    if (sc.fx && sc.fx[lang]) {
      const r = Math.min(w, h) * 0.2, R = Math.min(90, Math.max(52, r));
      const avg = chars.length ? chars.reduce((a, c) => a + c.x, 0) / chars.length : 0.5;
      const near = avg < 0.5 ? 0.78 : 0.22, far = 1 - near;
      const cands = [[near, 0.5], [near, 0.72], [near, 0.32], [far, 0.34], [far, 0.68], [0.5, 0.78], [0.5, 0.4]];
      const area = (a, b) => Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
      let best = cands[0], bestScore = 1e9;
      cands.forEach((cd, ci) => {
        const fb = { x: cd[0] * w - R, y: cd[1] * h - R * 0.8, w: R * 2, h: R * 1.6 };
        const fa = fb.w * fb.h;
        let sc2 = boxes.reduce((a, o) => a + area(fb, o) / fa, 0) * 14 + bodies.reduce((a, o) => a + area(fb, o) / fa, 0) * 8 + ci * 0.05;
        if (fb.y + fb.h > h || fb.y < 0) sc2 += 2;
        if (sc2 < bestScore) { bestScore = sc2; best = cd; }
      });
      const fx0 = Math.max(R + 6, Math.min(w - R - 6, best[0] * w)), fy0 = Math.max(R * 0.8 + 6, Math.min(h - R * 0.8 - 6, best[1] * h));
      const pts = A.burstPts(0, 0, R, R * 0.62, 13, rnd() * 0.4, 0.28, rnd).map(p => [fx0 + p[0] * 1.15, fy0 + p[1] * 0.85]);
      art += A.poly(pts.map(p => [p[0] + 5, p[1] + 5]), C.ink, 0) + A.poly(pts, C.yel, 3.5);
      const ff = fxFont(lang);
      let size = R * (isHi(lang) ? 0.62 : 0.78);
      const tw = K.measure(sc.fx[lang], size, ff.weight, ff.family);
      if (tw > R * 1.9) size *= (R * 1.9) / tw;
      texts.push({ text: sc.fx[lang], x: X + fx0, y: Y + fy0 + size * (isHi(lang) ? 0.28 : 0.36), size, weight: ff.weight, family: ff.family, fill: C.red, stroke: C.ink, sw: 5, anchor: 'middle', rot: -9, cx: X + fx0, cy: Y + fy0, ls: isHi(lang) ? 0 : 1 });
    }

    art += `</g></g>`;
    art += `<polygon points="${box.poly.map(p => n(p[0]) + ',' + n(p[1])).join(' ')}" fill="none" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>`;
    return { art, texts };
  };

  /* ---------- layouts ---------- */
  const LAYOUTS = {
    L1: { rows: [{ h: 1, cols: [1] }] },
    L2: { rows: [{ h: 1, cols: [1] }, { h: 1, cols: [1] }], rs: [14] },
    L3a: { rows: [{ h: 1, cols: [1] }, { h: 1, cols: [1] }, { h: 1, cols: [1] }], rs: [14, -14] },
    L3b: { rows: [{ h: 1.1, cols: [1, 1], cs: 16 }, { h: 1, cols: [1] }], rs: [-12] },
    L4a: { rows: [{ h: 0.92, cols: [1] }, { h: 1.1, cols: [1.1, 1], cs: 18 }, { h: 0.92, cols: [1] }], rs: [-12, 12] },
    L4b: { rows: [{ h: 1, cols: [1.25, 1], cs: 14 }, { h: 1, cols: [1, 1.25], cs: -14 }], rs: [14] },
  };
  function grid(spec, X0, Y0, X1, Y1, g) {
    const rows = spec.rows, sumH = rows.reduce((a, r) => a + r.h, 0), H = Y1 - Y0 - g * (rows.length - 1);
    const ys = [Y0]; let acc = Y0;
    rows.forEach((r, i) => { acc += H * (r.h / sumH) + (i < rows.length - 1 ? g : 0); ys.push(acc); });
    const rs = spec.rs || [];
    const tilt = (i, x) => (rs[i] || 0) * (((x - X0) / (X1 - X0)) * 2 - 1);
    const out = [];
    rows.forEach((r, i) => {
      const top = x => (i === 0 ? Y0 : ys[i] + tilt(i - 1, x));
      const bot = x => (i === rows.length - 1 ? Y1 : ys[i + 1] - g + tilt(i, x));
      const sumW = r.cols.reduce((a, c) => a + c, 0), W = X1 - X0 - g * (r.cols.length - 1);
      const xs = [X0]; let ax = X0;
      r.cols.forEach((c, j) => { ax += W * (c / sumW) + (j < r.cols.length - 1 ? g : 0); xs.push(ax); });
      const cs = r.cs || 0;
      r.cols.forEach((c, j) => {
        const lT = j === 0 ? X0 : xs[j] + cs, lB = j === 0 ? X0 : xs[j] - cs;
        const rT = j === r.cols.length - 1 ? X1 : xs[j + 1] - g + cs, rB = j === r.cols.length - 1 ? X1 : xs[j + 1] - g - cs;
        const poly = [[lT, top(lT)], [rT, top(rT)], [rB, bot(rB)], [lB, bot(lB)]];
        const xs2 = poly.map(p => p[0]), ys2 = poly.map(p => p[1]);
        const x = Math.min(...xs2), y = Math.min(...ys2);
        out.push({ x, y, w: Math.max(...xs2) - x, h: Math.max(...ys2) - y, poly });
      });
    });
    return out;
  }

  /* ---------- pages ---------- */
  K.plan = comic => {
    const P = comic.panels.length, young = comic.age === '4-6';
    const pages = [{ type: 'cover' }];
    let i = 0, flip = 0;
    while (i < P) {
      const left = P - i;
      let take, layout;
      if (young) { take = Math.min(3, left); layout = take === 3 ? (flip ? 'L3b' : 'L3a') : take === 2 ? 'L2' : 'L1'; }
      else { take = left === 5 || left === 6 ? 3 : Math.min(4, left); layout = take === 4 ? (flip ? 'L4b' : 'L4a') : take === 3 ? (flip ? 'L3b' : 'L3a') : take === 2 ? 'L2' : 'L1'; }
      pages.push({ type: 'story', from: i, to: i + take, layout });
      i += take; flip ^= 1;
    }
    pages.push({ type: 'end' });
    return pages;
  };

  const T = {
    en: { comics: 'COMICS', end: 'THE END!', lesson: "AUGGIE'S LESSON", more: 'More adventures at Auggie Comics', age: 'AGE', page: 'PAGE', lang: 'ENGLISH' },
    hi: { comics: 'कॉमिक्स', end: 'समाप्त!', lesson: 'ऑगी की सीख', more: 'और कहानियाँ पढ़ें — ऑगी कॉमिक्स', age: 'उम्र', page: 'पेज', lang: 'हिंदी' },
  };
  K.T = T;
  const pad2 = v => String(v).padStart(3, '0');

  function frame(inner) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${K.W} ${K.H}" width="${K.W}" height="${K.H}">${A.defs()}<rect width="${K.W}" height="${K.H}" fill="${C.paper}"/>${inner}</svg>`;
  }

  function coverPage(comic, lang) {
    const W = K.W, H = K.H, t = T[lang];
    const texts = [];
    const sc = Object.assign({}, comic.cover, { say: [], cap: null });
    const box = { x: 0, y: 150, w: W, h: H - 150, poly: [[0, 150], [W, 150], [W, H], [0, H]] };
    const p = K.panel(sc, box, { lang, fs: 20, seed: comic.id * 7 + 3, big: true });
    let art = p.art.replace(/<polygon points="[^"]*" fill="none" stroke="#16142B" stroke-width="5" stroke-linejoin="round"\/>$/, '');
    texts.push(...p.texts);
    // masthead
    art += `<rect x="0" y="0" width="${W}" height="162" fill="${C.red}"/>` + A.halftone(0, 0, W, 162, 'dark') + `<rect x="0" y="158" width="${W}" height="10" fill="${C.ink}"/>`;
    art += A.rect(22, 20, 118, 118, 0, '#fff', 5);
    texts.push({ text: 'No.', x: 81, y: 56, size: 24, family: DISPLAY, anchor: 'middle', fill: C.ink });
    texts.push({ text: pad2(comic.id), x: 81, y: 104, size: 52, family: DISPLAY, anchor: 'middle', fill: C.red, ls: 1 });
    texts.push({ text: `${t.age} ${comic.age}`, x: 81, y: 130, size: lang === 'hi' ? 19 : 20, weight: 800, family: lang === 'hi' ? BODY : DISPLAY, anchor: 'middle', fill: C.ink });
    texts.push({ text: 'AUGGIE', x: 440 + 7, y: 124 + 7, size: 118, family: DISPLAY, anchor: 'middle', fill: C.ink, ls: 4 });
    texts.push({ text: 'AUGGIE', x: 440, y: 124, size: 118, family: DISPLAY, anchor: 'middle', fill: C.yel, stroke: C.ink, sw: 8, ls: 4 });
    art += `<g transform="rotate(-4 700 40)">` + A.rect(640, 14, 142, 40, 4, C.blue, 4) + `</g>`;
    texts.push({ text: t.comics, x: 711, y: lang === 'hi' ? 45 : 46, size: lang === 'hi' ? 25 : 30, weight: 800, family: lang === 'hi' ? BODY : DISPLAY, anchor: 'middle', fill: '#fff', rot: -4, cx: 711, cy: 34, ls: lang === 'hi' ? 0 : 2 });
    // title band
    const title = comic.title[lang];
    const tSize = lang === 'hi' ? 54 : 64, fam = lang === 'hi' ? BODY : DISPLAY, wt = lang === 'hi' ? 800 : 400;
    const lines = K.wrap(title, tSize, wt, fam, W - 150);
    const lh = tSize * (lang === 'hi' ? 1.2 : 1.02);
    const bandH = lines.length * lh + 54;
    const by = H - bandH - 44;
    art += A.poly([[-10, by + 16], [W + 10, by - 10], [W + 10, by + bandH - 6], [-10, by + bandH + 12]], C.ink, 0) + A.poly([[-10, by + 8], [W + 10, by - 18], [W + 10, by + bandH - 14], [-10, by + bandH + 4]], C.yel, 5);
    lines.forEach((l, i) => texts.push({ text: l, x: W / 2, y: by + 30 + lh * (i + 0.78), size: tSize, weight: wt, family: fam, anchor: 'middle', fill: C.red, stroke: C.ink, sw: 6, rot: -1.6, cx: W / 2, cy: by + bandH / 2, ls: lang === 'hi' ? 0 : 1.5 }));
    art += `<rect x="0" y="${H - 40}" width="${W}" height="40" fill="${C.ink}"/>`;
    texts.push({ text: comic.blurb[lang], x: W / 2, y: H - 13, size: 19, weight: 600, family: BODY, anchor: 'middle', fill: '#fff' });
    return { art, texts };
  }

  function storyPage(comic, pg, pageNo, lang) {
    const W = K.W, H = K.H, t = T[lang];
    const boxes = grid(LAYOUTS[pg.layout], 26, 62, W - 26, H - 44, 16);
    let art = '';
    const texts = [];
    const fs = comic.age === '4-6' ? 21 : 18.5;
    for (let i = pg.from; i < pg.to; i++) {
      const p = K.panel(comic.panels[i], boxes[i - pg.from], { lang, fs, seed: comic.id * 100 + i });
      art += p.art; texts.push(...p.texts);
    }
    art += A.rect(26, 18, 34, 30, 3, C.red, 3);
    texts.push({ text: 'A', x: 43, y: 43, size: 26, family: DISPLAY, anchor: 'middle', fill: C.yel, stroke: C.ink, sw: 3 });
    texts.push({ text: `AUGGIE ${t.comics}  #${pad2(comic.id)}`, x: 70, y: 43, size: lang === 'hi' ? 22 : 24, weight: lang === 'hi' ? 800 : 400, family: lang === 'hi' ? BODY : DISPLAY, fill: C.ink, ls: lang === 'hi' ? 0 : 1 });
    texts.push({ text: comic.title[lang], x: W - 26, y: 43, size: 18, weight: 700, family: BODY, anchor: 'end', fill: C.red });
    texts.push({ text: `— ${pageNo} —`, x: W / 2, y: H - 14, size: 18, weight: 700, family: BODY, anchor: 'middle', fill: C.ink });
    return { art, texts };
  }

  function endPage(comic, lang) {
    const W = K.W, H = K.H, t = T[lang];
    const texts = [];
    const cast = [{ id: 'auggie', pose: 'wave', mood: 'laugh', x: 0.5 }];
    const others = (comic.cover.chars || []).filter(c => c.id !== 'auggie' && c.id !== 'kichdu' && c.id !== 'garaj').slice(0, 2);
    if (others[0]) { cast[0].x = 0.42; cast.push({ id: others[0].id, pose: 'cheer', mood: 'happy', x: 0.72, flip: true }); }
    if (others[1]) { cast[0].x = 0.5; cast[1].x = 0.78; cast.push({ id: others[1].id, pose: 'cheer', mood: 'happy', x: 0.22 }); }
    const box = { x: 26, y: 26, w: W - 52, h: 620, poly: [[26, 26], [W - 26, 26], [W - 26, 646], [26, 646]] };
    const p = K.panel({ bg: 'action', chars: cast }, box, { lang, seed: comic.id * 13, big: true });
    let art = p.art;
    // THE END burst
    const bx = W / 2, byy = 120;
    const pts = A.burstPts(bx, byy, 210, 150, 18, 0.1, 0.18, A.rng(comic.id)).map(q => [bx + (q[0] - bx), byy + (q[1] - byy) * 0.46]);
    art += A.poly(pts.map(q => [q[0] + 7, q[1] + 7]), C.ink, 0) + A.poly(pts, '#fff', 5);
    const endSize = lang === 'hi' ? 70 : 84;
    texts.push({ text: t.end, x: bx, y: byy + endSize * (lang === 'hi' ? 0.3 : 0.36), size: endSize, weight: lang === 'hi' ? 800 : 400, family: lang === 'hi' ? BODY : DISPLAY, anchor: 'middle', fill: C.red, stroke: C.ink, sw: 7, rot: -4, cx: bx, cy: byy, ls: lang === 'hi' ? 0 : 3 });
    // lesson box
    const my = 690;
    const mLines = K.wrap(comic.moral[lang], 34, 700, BODY, W - 190);
    const mlh = 34 * (lang === 'hi' ? 1.45 : 1.3);
    const mh = mLines.length * mlh + 110;
    art += A.rect(66, my + 8, W - 124, mh, 18, C.ink, 0) + A.rect(58, my, W - 124, mh, 18, '#fff', 5);
    art += A.rect(96, my - 22, lang === 'hi' ? 230 : 290, 46, 6, C.blue, 4);
    texts.push({ text: t.lesson, x: 96 + (lang === 'hi' ? 115 : 145), y: my + 12, size: lang === 'hi' ? 28 : 32, weight: lang === 'hi' ? 800 : 400, family: lang === 'hi' ? BODY : DISPLAY, anchor: 'middle', fill: '#fff', ls: lang === 'hi' ? 0 : 2 });
    art += A.poly(A.burstPts(W - 112, my + 18, 30, 13, 5, -Math.PI / 2), C.yel, 4);
    mLines.forEach((l, i) => texts.push({ text: l, x: W / 2 - 4, y: my + 58 + mlh * (i + 0.72), size: 34, weight: 700, family: BODY, anchor: 'middle', fill: C.ink }));
    art += `<rect x="0" y="${H - 64}" width="${W}" height="64" fill="${C.red}"/>` + A.halftone(0, H - 64, W, 64, 'dark');
    texts.push({ text: t.more, x: W / 2, y: H - 22, size: lang === 'hi' ? 26 : 30, weight: lang === 'hi' ? 800 : 400, family: lang === 'hi' ? BODY : DISPLAY, anchor: 'middle', fill: '#fff', ls: lang === 'hi' ? 0 : 1.5 });
    return { art, texts };
  }

  // Render page `idx` of comic. Returns {art (full svg, no text), texts, svg (full svg with text)}
  K.render = (comic, idx, lang) => {
    const pages = K.plan(comic);
    const pg = pages[idx];
    let r;
    if (pg.type === 'cover') r = coverPage(comic, lang);
    else if (pg.type === 'end') r = endPage(comic, lang);
    else r = storyPage(comic, pg, idx, lang);
    return { art: frame(r.art), texts: r.texts, svg: frame(r.art + K.textSVG(r.texts)), type: pg.type };
  };
  K.pageCount = comic => K.plan(comic).length;

  // Spoken script for a page (read-aloud)
  K.script = (comic, idx, lang) => {
    const pg = K.plan(comic)[idx];
    // [{text, who}] — `who` is a character id (or 'narrator') so read-aloud can give each a voice
    const N = t => ({ text: t, who: 'narrator' });
    if (pg.type === 'cover') return [N(comic.title[lang]), N(comic.blurb[lang])];
    if (pg.type === 'end') return [N(T[lang].end.replace('!', '')), N(comic.moral[lang])];
    const out = [];
    for (let i = pg.from; i < pg.to; i++) {
      const p = comic.panels[i];
      if (p.cap) out.push(N(p.cap[lang]));
      (p.say || []).forEach(b => out.push({ text: b[lang], who: (p.chars[b.who] || {}).id || 'narrator' }));
    }
    return out;
  };

  // A single scene (no page chrome) — used for hero art and character cards
  K.scene = (sc, w, h, opt = {}) => {
    const p = K.panel(sc, { x: 0, y: 0, w, h, poly: [[0, 0], [w, 0], [w, h], [0, h]] }, Object.assign({ lang: 'en', fs: 18, seed: 5 }, opt));
    const art = p.art.replace(/<polygon points="[^"]*" fill="none" stroke="#16142B" stroke-width="5" stroke-linejoin="round"\/>$/, '');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">${A.defs()}${art}${K.textSVG(p.texts)}</svg>`;
  };
})();
