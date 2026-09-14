/* Auggie Comics — dogs, drawn in a realistic comic style.
   Auggie is a golden Labrador drawn from his photos; his friends are an Indie, a pug, a husky and a dachshund.
   Body in side view facing right, head turned to look at the reader. Feet at y = 0, light from the upper left. */
(function () {
  const A = window.AuggiArt, C = A.C, n = A.n;
  A.EXTRA = A.EXTRA || {};
  const sp = A.spline, shade = A.shade, INK = C.ink, OW = 2.5;
  const F = (d, fill, ow = OW, extra = '') => `<path d="${d}" fill="${fill}" stroke="${INK}" stroke-width="${ow}" stroke-linejoin="round" stroke-linecap="round"${extra ? ' ' + extra : ''}/>`;
  const Fn = (d, fill, extra = '') => `<path d="${d}" fill="${fill}"${extra ? ' ' + extra : ''}/>`;
  const L = (d, sw = 1.3, col = INK, extra = '') => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${extra ? ' ' + extra : ''}/>`;
  const E = (cx, cy, rx, ry, fill, sw = 0, extra = '') => `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${fill}"${sw ? ` stroke="${INK}" stroke-width="${sw}"` : ''}${extra ? ' ' + extra : ''}/>`;
  const mir = (R, top, bot) => [].concat(top ? [top] : [], R, bot ? [bot] : [], R.slice().reverse().map(([x, y]) => [-x, y]));
  function shaded(d, fill, shadows, ow = OW) {
    const id = A.uid('dc');
    return `<clipPath id="${id}"><path d="${d}"/></clipPath>` + Fn(d, fill) + `<g clip-path="url(#${id})">${shadows.join('')}</g>` +
      `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${ow}" stroke-linejoin="round"/>`;
  }
  const SHADOW = 'rgba(90,45,10,.2)';
  // Smooth tapered ribbon along a curve through pts (tails): width w0 at the start, w1 at the rounded tip.
  function ribbon(pts, w0, w1, fill, ow = 2.3) {
    const N = 16, S = [], g = i => pts[Math.max(0, Math.min(pts.length - 1, i))];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
      for (let k = 0; k < N; k++) {
        const t = k / N, t2 = t * t, t3 = t2 * t;
        S.push([0, 1].map(j => 0.5 * (2 * p1[j] + (-p0[j] + p2[j]) * t + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * t2 + (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * t3)));
      }
    }
    S.push(pts[pts.length - 1]);
    const M = S.length, Lp = [], Rp = [];
    let dirEnd = [1, 0];
    for (let i = 0; i < M; i++) {
      const a = S[Math.max(0, i - 1)], b = S[Math.min(M - 1, i + 1)];
      const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
      const nx = -dy / l, ny = dx / l, f = i / (M - 1);
      const w = (w0 + (w1 - w0) * Math.pow(f, 0.9)) / 2;
      Lp.push([S[i][0] + nx * w, S[i][1] + ny * w]); Rp.push([S[i][0] - nx * w, S[i][1] - ny * w]);
      if (i === M - 1) dirEnd = [dx / l, dy / l];
    }
    const tip = S[M - 1], te = [tip[0] + dirEnd[0] * w1 * 0.55, tip[1] + dirEnd[1] * w1 * 0.55];
    const P2 = p => n(p[0]) + ' ' + n(p[1]);
    const d = 'M' + Lp.map(P2).join(' L') + ` Q${P2(te)} ${P2(Rp[M - 1])} L` + Rp.slice().reverse().map(P2).join(' L') + ' Z';
    const cl = 'M' + S.map(p => P2([p[0] + w0 * 0.22, p[1] + w0 * 0.26])).join(' L');
    return shaded(d, fill, [`<path d="${cl}" fill="none" stroke="${SHADOW}" stroke-width="${n(w0 * 0.5)}" stroke-linecap="round"/>`], ow);
  }

  const DOGS = {
    auggie: { fur: '#E4BD82', light: '#F6E5C6', muzzle: '#F2DDB8', ear: '#D5A462', nose: '#2E1F1B', eye: '#5A3218', ears: 'drop', tail: 'otter',
      R: 25, muzzleW: 0.64, ml: 0.64, cheek: 1.0, len: 1, legK: 0.96, depth: 50, legW: 15, tuck: 0.8, collar: '#D8323A', tag: true, size: 1 },
    moti: { fur: '#C98A4C', light: '#F3E0C2', muzzle: '#F0D9B5', ear: '#B97A3E', nose: '#231815', eye: '#3E2412', ears: 'erect', earH: 1.45, tail: 'sickle', bib: true,
      R: 22, muzzleW: 0.5, ml: 0.72, cheek: 0.9, len: 0.98, legK: 1.18, depth: 40, legW: 12, tuck: 1.5, size: 0.9 },
    pinku: { fur: '#E6CFA3', light: '#F2E4C8', muzzle: '#2F2724', ear: '#2A2220', nose: '#1B1514', eye: '#2A1A12', ears: 'button', tail: 'tightcurl', mask: true, wrinkles: true,
      R: 27, muzzleW: 0.74, ml: 0.34, noseW: 0.34, cheek: 1.06, eyeW: 0.38, len: 0.82, legK: 0.62, depth: 46, legW: 13, tuck: 0.35, collar: '#FF5C8A', size: 0.64 },
    snowy: { fur: '#8C96A7', light: '#F5F7FA', muzzle: '#F5F7FA', ear: '#7A8496', nose: '#1E2229', eye: '#58B0F0', ears: 'erect', earH: 1.62, tail: 'plume', husky: true, bib: true,
      R: 24, muzzleW: 0.54, ml: 0.64, cheek: 1.02, len: 1, legK: 1.05, depth: 46, legW: 14, tuck: 0.9, collar: '#1D5BD8', size: 0.98 },
    chiku: { fur: '#9A5528', light: '#C3824D', muzzle: '#B06F3E', ear: '#7E4220', nose: '#1E1410', eye: '#3A200E', ears: 'long', tail: 'thin',
      R: 22, muzzleW: 0.42, ml: 0.84, cheek: 0.86, len: 1.5, legK: 0.45, depth: 40, legW: 11, tuck: 0.3, collar: '#FFD400', size: 0.7 },
  };

  /* ------------------------------------------------------------------ head (looking at the reader) */
  function head(c, hx, hy, mood, o) {
    const R = c.R, ml = c.ml, mw = c.muzzleW, ck = c.cheek;
    const X = x => hx + x * R, Y = y => hy + y * R;
    const P = a => a.map(([x, y]) => [X(x), Y(y)]);
    const fur = c.fur, furD = shade(fur, 0.34);
    let s = '';
    const earMode = o.run ? 'fly' : mood === 'sad' || mood === 'scared' || mood === 'angry' ? 'back' : mood === 'surprised' ? 'up' : '';

    // ears
    const erect = c.ears === 'erect';
    const earSvg = sd => {
      let d, inner = '', piv, rot = 0;
      if (erect) {
        const tipY = -(c.earH || 1.5);
        d = `M${n(X(sd * 0.26))} ${n(Y(-0.86))} Q${n(X(sd * 0.4))} ${n(Y(tipY * 0.8))} ${n(X(sd * 0.72))} ${n(Y(tipY))} Q${n(X(sd * 1.04))} ${n(Y(tipY * 0.62))} ${n(X(sd * 1.0))} ${n(Y(-0.5))} Z`;
        inner = F(`M${n(X(sd * 0.42))} ${n(Y(-0.82))} Q${n(X(sd * 0.5))} ${n(Y(tipY * 0.75))} ${n(X(sd * 0.72))} ${n(Y(tipY * 0.9))} Q${n(X(sd * 0.9))} ${n(Y(tipY * 0.62))} ${n(X(sd * 0.86))} ${n(Y(-0.62))} Z`, c.husky ? '#F1F3F7' : '#E7B3A6', 0) +
          A.strokes([[X(sd * 0.55), Y(-0.8), X(sd * 0.6), Y(-1.05)], [X(sd * 0.68), Y(-0.78), X(sd * 0.7), Y(-1.0)]], c.husky ? '#FFFFFF' : c.light, 1.2, 0.9);
        piv = [X(sd * 0.64), Y(-0.72)];
        rot = earMode === 'back' ? sd * 30 : earMode === 'fly' ? sd * 42 : earMode === 'up' ? -sd * 4 : 0;
      } else if (c.ears === 'button') {
        d = `M${n(X(sd * 0.42))} ${n(Y(-0.92))} Q${n(X(sd * 0.86))} ${n(Y(-1.16))} ${n(X(sd * 1.08))} ${n(Y(-0.72))} Q${n(X(sd * 1.02))} ${n(Y(-0.44))} ${n(X(sd * 0.82))} ${n(Y(-0.42))} Q${n(X(sd * 0.72))} ${n(Y(-0.66))} ${n(X(sd * 0.42))} ${n(Y(-0.92))} Z`;
        piv = [X(sd * 0.7), Y(-0.85)];
        rot = earMode === 'back' ? sd * 16 : earMode === 'fly' ? sd * 24 : 0;
      } else {
        const lg = c.ears === 'long' ? 0.5 : 0;
        const pp = [[sd * 0.5, -0.94], [sd * 0.88, -0.86], [sd * 1.1, -0.52], [sd * 1.24, -0.02 + lg * 0.4], [sd * 1.26, 0.38 + lg], [sd * 1.12, 0.6 + lg], [sd * 0.94, 0.5 + lg], [sd * 0.85, 0.12 + lg * 0.5], [sd * 0.8, -0.34], [sd * 0.64, -0.72]];
        d = sp(P(pp));
        inner = L(sp(P([[sd * 0.72, -0.78], [sd * 0.95, -0.66], [sd * 1.08, -0.4]]), false), 1.1, shade(c.ear, 0.3));
        piv = [X(sd * 0.74), Y(-0.84)];
        rot = earMode === 'back' ? -sd * 22 : earMode === 'fly' ? -sd * 58 : earMode === 'up' ? -sd * 6 : 0;
      }
      const shadowSide = sd > 0 ? [Fn(`M${n(X(sd * 0.9))} ${n(Y(-2))} L${n(X(sd * 3))} ${n(Y(-2))} L${n(X(sd * 3))} ${n(Y(3))} L${n(X(sd * 0.9))} ${n(Y(3))} Z`, SHADOW)] : [Fn(`M${n(X(-0.95))} ${n(Y(-2))} L${n(X(-0.8))} ${n(Y(-2))} L${n(X(-0.8))} ${n(Y(3))} L${n(X(-0.95))} ${n(Y(3))} Z`, 'rgba(0,0,0,0)')];
      const g = shaded(d, c.ear, shadowSide, OW * 0.9) + inner;
      return rot ? `<g transform="rotate(${rot} ${n(piv[0])} ${n(piv[1])})">${g}</g>` : g;
    };
    if (erect) s += earSvg(-1) + earSvg(1);

    // husky ruff behind the face
    if (c.husky) {
      const ru = [];
      for (let i = 0; i <= 16; i++) { const a = Math.PI * (0.02 + i / 16 * 0.96), r = (i % 2 ? 1.28 : 1.44); ru.push([Math.cos(a) * r, 0.25 + Math.sin(a) * r * 0.82]); }
      s += F(sp(P([[1.2, -0.5], ...ru, [-1.2, -0.5]])), c.light, 2.2);
    }

    // skull + muzzle silhouette
    const Rp = [[0.45, -1.0], [0.82, -0.86], [0.99, -0.48], [ck, 0.02], [ck * 0.9, 0.36], [mw + 0.16, ml + 0.14], [mw + 0.02, ml + 0.38], [mw * 0.62, ml + 0.6]];
    const hd = sp(P(mir(Rp, [0, -1.02], [0, ml + 0.67])));
    const inside = [];
    if (c.husky) {
      inside.push(Fn(sp(P([[-1.3, -1.3], [1.3, -1.3], [1.3, 0.5], [0.96, 0.3], [0.74, 0.02], [0.44, -0.2], [0.14, -0.2], [0.02, 0.1], [-0.02, 0.1], [-0.14, -0.2], [-0.44, -0.2], [-0.74, 0.02], [-0.96, 0.3], [-1.3, 0.5]])), fur));
      inside.push(E(X(-0.36), Y(-0.42), R * 0.13, R * 0.09, c.light) + E(X(0.36), Y(-0.42), R * 0.13, R * 0.09, c.light));
    }
    const muz = sp(P([[-0.34, -0.14], [0.34, -0.14], [mw * 0.95, ml * 0.55], [mw + 0.06, ml + 0.36], [mw * 0.6, ml + 0.74], [-mw * 0.6, ml + 0.74], [-mw - 0.06, ml + 0.36], [-mw * 0.95, ml * 0.55]]));
    if (!c.husky) inside.push(Fn(muz, c.muzzle, c.mask ? '' : 'opacity=".85"'));
    if (c.mask) inside.push(E(X(-0.42), Y(-0.08), R * 0.3, R * 0.27, c.muzzle, 0, 'opacity=".9"') + E(X(0.42), Y(-0.08), R * 0.3, R * 0.27, c.muzzle, 0, 'opacity=".9"'));
    inside.push(Fn(sp(P([[0.5, -1.25], [0.64, -0.4], [0.62, 0.2], [mw * 0.78, ml + 0.2], [mw * 0.45, ml + 0.9], [1.7, ml + 1], [1.7, -1.25]])), SHADOW));
    inside.push(E(X(-0.38), Y(-0.36), R * 0.24, R * 0.09, '#FFFFFF', 0, 'opacity=".2"') + E(X(0.38), Y(-0.36), R * 0.24, R * 0.09, '#FFFFFF', 0, 'opacity=".14"'));
    s += shaded(hd, c.husky ? c.light : fur, inside, OW);

    // drop/long/button ears hang over the sides of the head
    if (!erect) s += earSvg(-1) + earSvg(1);

    // forehead: stop crease, brows, wrinkles
    s += L(`M${n(X(0))} ${n(Y(-0.34))} L${n(X(0))} ${n(Y(-0.04))}`, 1, furD, 'opacity=".55"');
    if (c.wrinkles) s += L(`M${n(X(-0.34))} ${n(Y(-0.56))} Q${n(X(0))} ${n(Y(-0.68))} ${n(X(0.34))} ${n(Y(-0.56))} M${n(X(-0.22))} ${n(Y(-0.44))} Q${n(X(0))} ${n(Y(-0.52))} ${n(X(0.22))} ${n(Y(-0.44))}`, 1.3, shade(fur, 0.45)) +
      L(`M${n(X(-mw * 0.78))} ${n(Y(ml - 0.24))} Q${n(X(0))} ${n(Y(ml - 0.42))} ${n(X(mw * 0.78))} ${n(Y(ml - 0.24))}`, 1.5, '#1A1412');

    // eyes
    const ex = c.mask ? 0.44 : 0.4, ey = -0.1, ew = (c.eyeW || 0.3) * R, eh = ew * (c.mask ? 0.9 : 0.78);
    const BR = { happy: [-0.02, 0.02], laugh: [-0.04, 0], sad: [-0.15, 0.07], surprised: [-0.16, -0.12], angry: [0.1, -0.07], scared: [-0.15, -0.02], determined: [0.07, -0.03], sleepy: [0.03, 0.05] }[mood] || [0, 0];
    const open = { surprised: 1.3, scared: 1.3, angry: 0.62, determined: 0.72, sad: 0.9 }[mood] || 1;
    for (const sd of [-1, 1]) {
      const x = X(sd * ex), y = Y(ey);
      // brow tuft
      s += L(`M${n(X(sd * (ex - 0.17)))} ${n(Y(ey - 0.27 + BR[0]))} Q${n(X(sd * ex))} ${n(Y(ey - 0.36 + (BR[0] + BR[1]) / 2))} ${n(X(sd * (ex + 0.17)))} ${n(Y(ey - 0.29 + BR[1]))}`, R * 0.07, c.husky ? '#FFFFFF' : shade(fur, 0.28));
      if (mood === 'sleepy' || mood === 'laugh') {
        const up = mood === 'laugh';
        s += L(`M${n(x - ew * 0.55)} ${n(y + (up ? 1 : -0.5))} Q${n(x)} ${n(y + (up ? -eh * 1.1 : eh * 0.7))} ${n(x + ew * 0.55)} ${n(y + (up ? 1 : -0.5))}`, 2);
        continue;
      }
      const inC = [x - sd * ew * 0.5, y + eh * 0.1], outC = [x + sd * ew * 0.5, y - eh * 0.04];
      const up = eh * 0.98 * open, lo = eh * 0.84 * Math.min(open, 1.12);
      const al = `M${n(inC[0])} ${n(inC[1])} C${n(inC[0] + sd * ew * 0.18)} ${n(y - up)} ${n(outC[0] - sd * ew * 0.22)} ${n(y - up)} ${n(outC[0])} ${n(outC[1])} C${n(outC[0] - sd * ew * 0.16)} ${n(y + lo)} ${n(inC[0] + sd * ew * 0.22)} ${n(y + lo)} ${n(inC[0])} ${n(inC[1])} Z`;
      const id = A.uid('de');
      const ri = eh * (open > 1.1 ? 0.62 : 0.86), look = mood === 'sad' ? 0 : ew * 0.07, iy = y + (mood === 'sad' ? -eh * 0.08 : eh * 0.05);
      s += `<clipPath id="${id}"><path d="${al}"/></clipPath>` + Fn(al, '#F6EEE2') + `<g clip-path="url(#${id})">` +
        E(x + look, iy, ri, ri, c.eye) + E(x + look, iy, ri * 0.56, ri * 0.56, '#0B0806') + E(x + look - ri * 0.36, iy - ri * 0.38, ri * 0.32, ri * 0.3, '#FFFFFF') +
        E(x + look + ri * 0.34, iy + ri * 0.36, ri * 0.13, ri * 0.13, '#FFFFFF', 0, 'opacity=".75"') +
        Fn(`M${n(x - ew)} ${n(y - eh * 2)} L${n(x + ew)} ${n(y - eh * 2)} L${n(x + ew)} ${n(y - up * 0.5)} Q${n(x)} ${n(y - up * 0.3)} ${n(x - ew)} ${n(y - up * 0.5)} Z`, 'rgba(40,20,10,.22)') + `</g>`;
      s += L(al, 1.5, '#1A0F0A') + L(`M${n(inC[0])} ${n(inC[1])} C${n(inC[0] + sd * ew * 0.18)} ${n(y - up)} ${n(outC[0] - sd * ew * 0.22)} ${n(y - up)} ${n(outC[0])} ${n(outC[1])}`, 2.1, '#1A0F0A');
      if (mood === 'sad') s += E(x - sd * ew * 0.1, y + eh * 0.55, ew * 0.3, eh * 0.14, '#FFFFFF', 0, 'opacity=".5"');
    }

    // nose
    const ny = ml - 0.02, nw = (c.noseW || mw * 0.64);
    const nose = sp(P(mir([[nw * 0.55, ny - 0.15], [nw, ny - 0.05], [nw * 0.8, ny + 0.1], [0.12, ny + 0.15]], [0, ny - 0.16], [0, ny + 0.19])));
    s += F(nose, c.nose, 1.6);
    for (const sd of [-1, 1]) s += Fn(`M${n(X(sd * nw * 0.66))} ${n(Y(ny + 0.03))} Q${n(X(sd * nw * 0.34))} ${n(Y(ny - 0.05))} ${n(X(sd * nw * 0.18))} ${n(Y(ny + 0.06))} Q${n(X(sd * nw * 0.42))} ${n(Y(ny + 0.11))} ${n(X(sd * nw * 0.66))} ${n(Y(ny + 0.03))} Z`, '#070404');
    s += E(X(-nw * 0.32), Y(ny - 0.08), nw * R * 0.3, R * 0.035, '#FFFFFF', 0, 'opacity=".5"');

    // mouth
    const my = ny + 0.3, lip = '#2A1A16';
    const flews = `M${n(X(-mw * 0.82))} ${n(Y(my - 0.02))} Q${n(X(-mw * 0.42))} ${n(Y(my + 0.12))} ${n(X(0))} ${n(Y(my))} Q${n(X(mw * 0.42))} ${n(Y(my + 0.12))} ${n(X(mw * 0.82))} ${n(Y(my - 0.02))}`;
    s += L(`M${n(X(0))} ${n(Y(ny + 0.19))} L${n(X(0))} ${n(Y(my))}`, 1.3, lip);
    const openMouth = (oh, tl, bark) => {
      const mo = `M${n(X(-mw * 0.8))} ${n(Y(my - 0.02))} Q${n(X(-mw * 0.4))} ${n(Y(my + 0.12))} ${n(X(0))} ${n(Y(my))} Q${n(X(mw * 0.4))} ${n(Y(my + 0.12))} ${n(X(mw * 0.8))} ${n(Y(my - 0.02))} C${n(X(mw * 0.72))} ${n(Y(my + oh))} ${n(X(mw * 0.3))} ${n(Y(my + oh + 0.08))} ${n(X(0))} ${n(Y(my + oh + 0.08))} C${n(X(-mw * 0.3))} ${n(Y(my + oh + 0.08))} ${n(X(-mw * 0.72))} ${n(Y(my + oh))} ${n(X(-mw * 0.8))} ${n(Y(my - 0.02))} Z`;
      let m = F(mo, '#4E161C', 1.5);
      if (bark) for (const sd of [-1, 1]) m += F(`M${n(X(sd * mw * 0.56))} ${n(Y(my + 0.02))} l${n(-sd * R * 0.05)} ${n(R * 0.15)} l${n(-sd * R * 0.06)} ${n(-R * 0.13)} Z`, '#FFFFFF', 1) + F(`M${n(X(sd * mw * 0.44))} ${n(Y(my + oh - 0.02))} l${n(-sd * R * 0.04)} ${n(-R * 0.12)} l${n(-sd * R * 0.05)} ${n(R * 0.11)} Z`, '#FFFFFF', 1);
      const jaw = `M${n(X(-mw * 0.62))} ${n(Y(my + oh * 0.72))} Q${n(X(0))} ${n(Y(my + oh + 0.34))} ${n(X(mw * 0.62))} ${n(Y(my + oh * 0.72))} Q${n(X(0))} ${n(Y(my + oh + 0.12))} ${n(X(-mw * 0.62))} ${n(Y(my + oh * 0.72))} Z`;
      m += F(jaw, c.husky ? c.light : c.mask ? c.muzzle : c.muzzle, 1.4);
      if (tl > 0) {
        const tg = `M${n(X(-0.2))} ${n(Y(my + 0.16))} C${n(X(-0.27))} ${n(Y(my + oh + tl))} ${n(X(0.27))} ${n(Y(my + oh + tl))} ${n(X(0.2))} ${n(Y(my + 0.16))} Z`;
        m += shaded(tg, '#EE7F95', [Fn(`M${n(X(0.04))} ${n(Y(my))} L${n(X(1))} ${n(Y(my))} L${n(X(1))} ${n(Y(my + 2))} L${n(X(0.06))} ${n(Y(my + 2))} Z`, 'rgba(150,30,60,.25)')], 1.4) +
          L(`M${n(X(0))} ${n(Y(my + 0.24))} L${n(X(0.01))} ${n(Y(my + oh + tl * 0.62))}`, 1, '#C24E6A') + E(X(-0.1), Y(my + oh + tl * 0.55), R * 0.05, R * 0.1, '#FFFFFF', 0, 'opacity=".35"');
      } else m += E(X(0), Y(my + oh * 0.55), R * mw * 0.35, R * oh * 0.28, '#E06A84');
      m += L(flews, 1.6, lip);
      return m;
    };
    if (o.bark) s += openMouth(0.56, 0, true);
    else if (mood === 'laugh') s += openMouth(0.42, 0.56);
    else if (mood === 'happy') s += openMouth(0.32, 0.44);
    else if (mood === 'surprised') s += L(flews, 1.5, lip) + E(X(0), Y(my + 0.14), R * 0.1, R * 0.13, '#4E161C', 1.2);
    else {
      s += L(flews, 1.6, lip) + L(`M${n(X(-mw * 0.42))} ${n(Y(my + 0.26))} Q${n(X(0))} ${n(Y(my + 0.34))} ${n(X(mw * 0.42))} ${n(Y(my + 0.26))}`, 1, furD, 'opacity=".6"');
      if (mood === 'determined') s += F(`M${n(X(0.12))} ${n(Y(my + 0.06))} q${n(R * 0.05)} ${n(R * 0.14)} ${n(R * 0.13)} 0`, '#EE7F95', 1);
      if (mood === 'angry') s += L(`M${n(X(-0.16))} ${n(Y(ny - 0.26))} q${n(R * 0.16)} ${n(-R * 0.06)} ${n(R * 0.32)} 0 M${n(X(-0.12))} ${n(Y(ny - 0.36))} q${n(R * 0.12)} ${n(-R * 0.05)} ${n(R * 0.24)} 0`, 1.1, furD);
    }
    // whisker dots
    if (!c.mask) for (const sd of [-1, 1]) [[0.3, 0.1], [0.4, 0.16], [0.5, 0.1], [0.36, 0.24], [0.46, 0.28]].forEach(([dx, dy]) => { s += E(X(sd * dx * (mw / 0.6)), Y(ml + dy), R * 0.025, R * 0.025, shade(c.muzzle, 0.45)); });

    // mood marks
    if (o.think) s += `<text x="${n(X(1.2))}" y="${n(Y(-0.9))}" font-family="Bangers, Impact, sans-serif" font-size="${n(R * 0.95)}" fill="${INK}">?</text>`;
    if (mood === 'sad') s += F(`M${n(X(-ex - 0.1))} ${n(Y(ey + 0.2))} q${n(-R * 0.08)} ${n(R * 0.16)} 0 ${n(R * 0.22)} q${n(R * 0.08)} ${n(-R * 0.06)} 0 ${n(-R * 0.22)} Z`, '#8FD3FF', 1);
    if (mood === 'scared') s += F(`M${n(X(0.95))} ${n(Y(-0.8))} q${n(-R * 0.1)} ${n(R * 0.18)} 0 ${n(R * 0.25)} q${n(R * 0.1)} ${n(-R * 0.07)} 0 ${n(-R * 0.25)} Z`, '#8FD3FF', 1);
    if (mood === 'sleepy') s += [0, 1].map(i => L(`M${n(X(1.0 + i * 0.4))} ${n(Y(-1.0 - i * 0.45))} h${n(R * (0.25 + i * 0.1))} l${n(-R * (0.25 + i * 0.1))} ${n(R * (0.25 + i * 0.1))} h${n(R * (0.25 + i * 0.1))}`, 1.8)).join('');
    if (o.bark) s += [0, 1, 2].map(i => L(`M${n(X(1.2 + i * 0.28))} ${n(Y(my - 0.35 - i * 0.12))} q${n(R * 0.2)} ${n(R * (0.35 + i * 0.12))} 0 ${n(R * (0.7 + i * 0.24))}`, 2)).join('');
    const top = Y(erect ? -(c.earH || 1.5) : c.ears === 'button' ? -1.1 : -1.02);
    return { s, top };
  }

  /* ------------------------------------------------------------------ body parts */
  function paw(x, y, w, col) {
    const d = sp([[x - w * 0.55, y - w * 0.36], [x + w * 0.15, y - w * 0.52], [x + w * 0.8, y - w * 0.2], [x + w * 0.88, y], [x + w * 0.1, y + 0.5], [x - w * 0.62, y]]);
    return F(d, col, 2) + L(`M${n(x + w * 0.35)} ${n(y - w * 0.12)} l${n(w * 0.04)} ${n(w * 0.12)} M${n(x + w * 0.6)} ${n(y - w * 0.12)} l${n(w * 0.04)} ${n(w * 0.12)}`, 0.9, shade(col, 0.35));
  }
  // standing leg: the paw rests on the ground (y = 0) and is drawn first so the leg overlaps its top
  function leg(pts, w, col, pawW, pawCol) {
    const end = pts[pts.length - 1];
    return paw(end[0], 0, pawW, pawCol || col) + A.taper(pts, w, col, { ow: 2.3, shadowColor: shade(col, 0.16) });
  }
  function legFree(pts, w, col, pawW) { // paw off the ground (running / raised)
    const end = pts[pts.length - 1], prev = pts[pts.length - 2];
    const ang = Math.atan2(end[1] - prev[1], end[0] - prev[0]) * 180 / Math.PI - 90;
    return `<g transform="rotate(${n(ang)} ${n(end[0])} ${n(end[1])})">${paw(end[0], end[1] + pawW * 0.35, pawW, col)}</g>` + A.taper(pts, w, col, { ow: 2.3, shadowColor: shade(col, 0.16) });
  }

  function tail(c, base, mood, pose, X, LW) {
    const happy = mood === 'happy' || mood === 'laugh' || pose === 'cheer';
    const low = mood === 'sad' || mood === 'scared';
    const run = pose === 'run' || pose === 'fly';
    const [x, y] = base, fur = c.fur;
    const wag = (ex, ey) => [0, 1].map(i => L(`M${n(ex - 10 - i * 7)} ${n(ey - 6 + i * 9)} q-7 ${n(5 + i * 2)} -3 ${n(12)}`, 1.6)).join('');
    if (c.tail === 'otter' || c.tail === 'thin') {
      const w = c.tail === 'otter' ? [LW * 1.15, LW * 0.8, LW * 0.32] : [6, 4, 2];
      let pts;
      if (run) pts = [[x, y], [x - 26, y - 2], [x - 52, y - 6]];
      else if (happy) pts = [[x, y], [x - 20, y - 16], [x - 34, y - 42]];
      else if (low) pts = [[x, y], [x - 12, y + 18], [x - 8, y + 40]];
      else pts = [[x, y], [x - 20, y + 8], [x - 40, y + 2]];
      if (c.tail === 'thin') pts = pts.map(([px, py]) => [x + (px - x) * 0.85, y + (py - y) * 0.85]);
      return { back: ribbon([[x + 6, y + 2], ...pts], w[0], w[2], fur) + (happy && !run ? wag(pts[2][0], pts[2][1]) : ''), front: '' };
    }
    if (c.tail === 'sickle') {
      const p = low ? [[x + 4, y], [x - 12, y + 14], [x - 12, y + 36]] : [[x + 4, y + 4], [x - 10, y - 12], [x - 8, y - 32], [x + 8, y - 40], [x + 18, y - 30]];
      return { back: '', front: ribbon(p, 11, 4, fur) + (happy ? wag(x - 8, y - 36) : '') };
    }
    if (c.tail === 'tightcurl') {
      const d = `M${n(x + 2)} ${n(y + 2)} C${n(x - 14)} ${n(y - 2)} ${n(x - 16)} ${n(y - 22)} ${n(x - 4)} ${n(y - 24)} C${n(x + 8)} ${n(y - 26)} ${n(x + 10)} ${n(y - 12)} ${n(x + 1)} ${n(y - 10)}`;
      return { back: '', front: L(d, 12.5, INK) + L(d, 8, fur) + L(`M${n(x - 8)} ${n(y - 14)} q2 -6 7 -6`, 1.2, shade(fur, 0.3)) + (happy ? wag(x - 12, y - 22) : '') };
    }
    if (c.tail === 'plume') {
      const d = low ? sp([[x + 2, y - 2], [x - 16, y + 12], [x - 20, y + 36], [x - 10, y + 44], [x - 6, y + 22], [x + 4, y + 8]])
        : sp([[x + 4, y + 4], [x - 16, y - 4], [x - 26, y - 24], [x - 16, y - 46], [x + 2, y - 50], [x + 8, y - 40], [x - 6, y - 32], [x - 4, y - 16], [x + 8, y - 6]]);
      return { back: '', front: shaded(d, fur, [Fn(sp(low ? [[x - 12, y + 10], [x - 8, y + 44], [x + 6, y + 30]] : [[x - 26, y - 30], [x - 10, y - 52], [x + 10, y - 40], [x - 6, y - 30], [x - 8, y - 16]]), c.light)], 2.3) + (happy ? wag(x - 20, y - 44) : '') };
    }
    return { back: '', front: '' };
  }

  function cape(pts) { // pts: neck point, back points..., trailing end
    const d = sp(pts);
    return shaded(d, '#D8323A', [Fn(d, 'url(#ht-dark)', 'opacity=".5"')], 2.5);
  }
  const badge = (x, y) => E(x, y, 6, 6, C.yel, 1.6) + E(x, y + 1.3, 2.1, 1.8, '#C98A0A') + [-2.4, 0, 2.4].map(dx => E(x + dx, y - 2.3, 1, 1, '#C98A0A')).join('');

  /* ------------------------------------------------------------------ whole dog */
  function dog(id, pose, mood, opt = {}) {
    const c = DOGS[id];
    const BL = 128 * (c.len || 1), legH = 50 * (c.legK || 1), dp = c.depth, yW = -(legH + dp), LW = c.legW, R = c.R;
    const X = f => f * BL;
    const fur = c.fur, furD = shade(fur, 0.32), farC = shade(fur, 0.14);
    const capeOn = id === 'auggie' && (opt.cape || pose === 'fly');
    const chinOff = (c.ml + 0.67) * R;
    const pawW = LW * 1.45;
    let s = '', front = '', hx, hy, headRot = 0, rot = 0, lift = 0, pivot = [0, 0], floats = false, capeSvg = '', tl;
    const fW = [LW * 1.05, LW * 0.8, LW * 0.76], rW = [LW * 1.35, LW * 0.72, LW * 0.7];
    const bodyShadow = (yTop) => Fn(sp([[X(0.8), yTop], [X(0.3), yTop + 6], [X(-0.2), yTop + 4], [X(-0.8), yTop - 2], [X(-0.8), 20], [X(0.8), 20]]), SHADOW);
    const furStrokes = list => A.strokes(list, furD, 1.1, 0.55);
    const tailBase = () => null;
    void tailBase;

    if (pose === 'sit' || pose === 'wave' || pose === 'think') {
      const out = [[X(-0.36), -2], [X(-0.45), -20], [X(-0.38), -legH - 14], [X(-0.16), yW - 6], [X(0.08), yW - 20], [X(0.2), yW - 36],
        [X(0.34), yW - 28], [X(0.38), yW + 4], [X(0.35), -legH + 2], [X(0.21), -legH + 8], [X(0.05), -legH * 0.55], [X(-0.04), -16], [X(-0.12), -2]];
      tl = tail(c, [X(-0.42), -7], mood, pose, X, LW);
      if (c.tail === 'otter' || c.tail === 'thin') {
        const happy = mood === 'happy' || mood === 'laugh';
        const tp = mood === 'sad' || mood === 'scared' ? [[X(-0.38), -6], [X(-0.2), -1], [X(0.02), -3]] : happy ? [[X(-0.42), -8], [X(-0.6), -14], [X(-0.66), -36]] : [[X(-0.42), -7], [X(-0.58), -3], [X(-0.72), -7]];
        tl.back = ribbon(tp, c.tail === 'otter' ? LW * 1.1 : 6, c.tail === 'otter' ? LW * 0.3 : 2, fur) + (happy ?[0, 1].map(i => L(`M${n(tp[2][0] - 9 - i * 7)} ${n(tp[2][1] - 4 + i * 9)} q-7 ${n(5 + i * 2)} -3 12`, 1.6)).join('') : '');
      }
      s += tl.back;
      const fx = X(0.25);
      s += leg([[fx - 9, -legH + 6], [fx - 8.5, -13], [fx - 6, -4]], fW, farC, pawW, farC);
      if (pose !== 'wave') s += leg([[fx, -legH + 6], [fx + 0.5, -13], [fx + 2, -4]], fW, fur, pawW);
      const d = sp(out);
      const sh = [bodyShadow(-legH - dp * 0.1)];
      if (c.bib) sh.unshift(Fn(sp([[X(0.28), yW - 26], [X(0.42), yW - 6], [X(0.38), -legH + 4], [X(0.22), -legH + 10], [X(0.24), yW + 10]]), c.light));
      s += shaded(d, fur, sh, OW);
      // haunch
      const hc = [X(-0.21), -legH * 0.2 - 18];
      s += shaded(sp([[X(-0.44), -6], [X(-0.42), hc[1] - 16], [X(-0.28), hc[1] - 24], [X(-0.08), hc[1] - 10], [X(-0.04), -8], [X(-0.2), -1]]), fur, [Fn(sp([[X(-0.45), hc[1] + 4], [X(-0.2), hc[1] + 6], [X(0), hc[1]], [X(0), 4], [X(-0.45), 4]]), SHADOW)], OW * 0.8);
      s += A.taper([[X(-0.3), -8], [X(-0.06), -5]], [LW * 0.9, LW * 0.75], fur, { ow: 2.2 }) + paw(X(-0.04), 0, pawW, fur);
      s += L(sp([[X(0.18), yW - 14], [X(0.26), yW + 12], [X(0.25), -legH + 6]], false), 1.2, furD, 'opacity=".6"');
      s += furStrokes([[X(0.37), yW - 4, X(0.39), yW + 3], [X(0.36), yW + 10, X(0.38), yW + 17], [X(-0.43), -26, X(-0.45), -19]]);
      if (pose === 'wave') s += legFree([[fx, -legH + 6], [fx + X(0.08), -legH - 8], [fx + X(0.16), -legH - 20]], fW, fur, pawW);
      hx = X(0.3); hy = yW - 18 - chinOff;
      if (pose === 'think') headRot = 14;
      if (capeOn) capeSvg = cape([[X(0.12), yW - 26], [X(-0.1), yW - 8], [X(-0.34), -legH - 6], [X(-0.5), -10], [X(-0.58), -4], [X(-0.46), -2], [X(-0.24), -legH + 4], [X(0.02), yW + 6]]);
    } else if (pose === 'lie') {
      const top = -(dp + 4);
      const out = [[X(-0.5), -12], [X(-0.45), top + 8], [X(-0.2), top], [X(0.08), top - 3], [X(0.24), top - 18], [X(0.4), top - 8], [X(0.43), -24], [X(0.36), -2], [X(-0.1), -1], [X(-0.46), -2]];
      tl = tail(c, [X(-0.48), -8], mood, 'lie', X, LW);
      if (c.tail === 'otter' || c.tail === 'thin') tl.back = ribbon([[X(-0.46), -9], [X(-0.64), -4], [X(-0.8), -6]], c.tail === 'otter' ? LW * 1.1 : 6, c.tail === 'otter' ? LW * 0.3 : 2, fur);
      s += tl.back;
      const sleepy = mood === 'sleepy';
      const fx = X(0.3);
      s += legFree([[fx - 6, -14], [fx + 16, -9], [fx + 28, -7]], [LW, LW * 0.8, LW * 0.76], farC, pawW);
      const d = sp(out);
      s += shaded(d, fur, [bodyShadow(top + dp * 0.55), ...(c.bib ? [Fn(sp([[X(0.3), top - 14], [X(0.44), top], [X(0.4), -10], [X(0.26), -6]]), c.light)] : [])], OW);
      s += shaded(sp([[X(-0.48), -4], [X(-0.44), -30], [X(-0.3), -38], [X(-0.12), -26], [X(-0.1), -6], [X(-0.3), -1]]), fur, [Fn(sp([[X(-0.5), -16], [X(-0.2), -14], [X(0), -20], [X(0), 4], [X(-0.5), 4]]), SHADOW)], OW * 0.8);
      s += A.taper([[X(-0.3), -7], [X(-0.08), -5]], [LW * 0.9, LW * 0.75], fur, { ow: 2.2 }) + paw(X(-0.06), 0, pawW, fur);
      s += legFree([[fx, -12], [fx + 22, -6], [fx + 36, -5]], [LW, LW * 0.8, LW * 0.76], fur, pawW);
      if (sleepy) { hx = fx + 26; hy = -8 - chinOff + 12; }
      else { hx = X(0.38); hy = top - 10 - chinOff + 14; }
      if (capeOn) capeSvg = cape([[X(0.22), top - 12], [X(-0.1), top - 4], [X(-0.44), top + 6], [X(-0.6), -6], [X(-0.5), -3], [X(-0.2), top + 18], [X(0.1), top + 12]]);
    } else {
      // stand / point / blast / run / fly / cheer
      const tuck = c.tuck == null ? 1 : c.tuck;
      const sniff = pose === 'point';
      const sHx = X(0.64), sHy = -legH * 0.42 - chinOff; // lowered head, nose towards the ground
      const back = [[X(0.26), yW], [X(0.02), yW + 3], [X(-0.2), yW + 3], [X(-0.38), yW + 1], [X(-0.48), yW + 8],
        [X(-0.53), yW + dp * 0.42], [X(-0.5), yW + dp * 0.82], [X(-0.42), -legH + 8], [X(-0.3), -legH + 4],
        [X(-0.2), -legH - dp * 0.22 * tuck], [X(0.05), -legH - dp * 0.04], [X(0.24), -legH + 3], [X(0.38), -legH + 3]];
      const frontPts = sniff
        ? [[X(0.5), yW + dp * 0.86], [sHx - R * 0.45, sHy + R * 0.7], [sHx - R * 0.2, sHy - R * 0.55], [X(0.44), yW - 2], [X(0.34), yW - 4]]
        : [[X(0.5), yW + dp * 0.72], [X(0.55), yW + dp * 0.36], [X(0.52), yW - 8], [X(0.44), yW - 22], [X(0.34), yW - 16]];
      const out = back.concat(frontPts);
      const fx = X(0.31), rx = X(-0.3);
      let fF = [[fx - 10, -legH + 2], [fx - 9, -13], [fx - 7, -4]];
      let fN = [[fx, -legH + 4], [fx + 1, -13], [fx + 3, -4]];
      let rF = [[rx + 10, -legH + 4], [X(-0.44) + 10, -18], [X(-0.4) + 12, -4]];
      let rN = [[rx, -legH + 6], [X(-0.45), -18], [X(-0.41), -4]];
      let free = false;
      if (pose === 'run' || pose === 'fly') {
        const k = pose === 'fly' ? 1.25 : 1;
        fF = [[fx - 8, -legH + 4], [fx + 18 * k, -legH * 0.42], [fx + 30 * k, -legH * 0.24]];
        fN = [[fx, -legH + 4], [fx + 30 * k, -legH * 0.58], [fx + 46 * k, -legH * 0.46]];
        rF = [[rx + 8, -legH + 6], [X(-0.5) - 6 * k, -legH * 0.5], [X(-0.5) - 26 * k, -legH * 0.38]];
        rN = [[rx, -legH + 6], [X(-0.52) - 12 * k, -legH * 0.42], [X(-0.52) - 32 * k, -legH * 0.24]];
        rot = pose === 'fly' ? -9 : -4; lift = pose === 'fly' ? 0 : legH * 0.34; floats = pose === 'fly'; free = true;
      } else if (pose === 'cheer') {
        // joyful leap: front paws tucked up, back legs stretched out behind, all four paws off the ground
        fF = [[fx - 8, -legH + 4], [fx + 14, -legH * 0.55], [fx + 6, -legH * 0.3]];
        fN = [[fx, -legH + 4], [fx + 22, -legH * 0.6], [fx + 14, -legH * 0.34]];
        rF = [[rx + 8, -legH + 6], [X(-0.5) - 4, -legH * 0.45], [X(-0.5) - 22, -legH * 0.3]];
        rN = [[rx, -legH + 6], [X(-0.52) - 8, -legH * 0.38], [X(-0.52) - 28, -legH * 0.2]];
        rot = -10; lift = legH * 0.55; free = true;
      } else if (pose === 'blast') {
        fN = [[fx, -legH + 4], [fx + 10, -13], [fx + 14, -4]];
        fF = [[fx - 10, -legH + 2], [fx - 2, -13], [fx + 1, -4]];
      }
      tl = tail(c, [X(-0.48), yW + 8], mood, pose, X, LW);
      s += tl.back;
      const drawL = (pts, w, col, isFree) => isFree ? legFree(pts, w, col, pawW) : leg(pts, w, col, pawW);
      s += drawL(rF, rW, farC, free) + drawL(fF, fW, farC, free || pose === 'cheer');
      s += drawL(rN, rW, fur, free) + drawL(fN, fW, fur, free || pose === 'cheer');
      const d = sp(out);
      const sh = [bodyShadow(yW + dp * 0.62)];
      if (c.bib) sh.unshift(Fn(sp([[X(0.42), yW - 20], [X(0.58), yW + 6], [X(0.5), yW + dp * 0.9], [X(0.3), -legH + 6], [X(0.05), -legH], [X(0.1), -legH - dp * 0.3], [X(0.36), yW + 4]]), c.light));
      if (c.husky) sh.unshift(Fn(sp([[X(0.5), yW + dp * 0.55], [X(0), yW + dp * 0.7], [X(-0.3), yW + dp * 0.8], [X(-0.3), 10], [X(0.5), 10]]), c.light));
      s += shaded(d, fur, sh, OW);
      // anatomy lines: shoulder, thigh, fur
      s += L(sp([[X(0.24), yW + 6], [X(0.34), yW + dp * 0.45], [X(0.29), -legH + 4]], false), 1.2, furD, 'opacity=".55"');
      s += L(sp([[X(-0.2), yW + 10], [X(-0.13), yW + dp * 0.6], [X(-0.24), -legH + 2], [X(-0.31), -legH + 8]], false), 1.4, furD, 'opacity=".75"');
      s += L(sp([[X(0.22), yW + 5], [X(0), yW + 7], [X(-0.3), yW + 6]], false), 4, '#FFFFFF', 'opacity=".22"');
      s += furStrokes([[X(0.53), yW + dp * 0.45, X(0.55), yW + dp * 0.55], [X(0.5), yW + dp * 0.7, X(0.51), yW + dp * 0.8], [X(-0.52), yW + dp * 0.5, X(-0.53), yW + dp * 0.62], [X(-0.49), yW + dp * 0.72, X(-0.48), yW + dp * 0.84]]);
      hx = X(0.47); hy = yW + 8 - chinOff;
      if (sniff) { hx = sHx; hy = sHy; }
      if (pose === 'blast') { hx += 6; hy -= 6; }
      if (pose === 'run' || pose === 'fly') { hx += 6; }
      if (pose === 'point') front += [0, 1, 2].map(i => L(`M${n(hx + R * 0.9 + i * 8)} ${n(hy + R * (c.ml + 0.1) - i * 5)} q5 -4 0 -8 q-5 -4 0 -8`, 1.6, INK, 'opacity=".7"')).join('');
      if (capeOn) {
        const trail = pose === 'fly' || pose === 'run' ? 1 : 0;
        capeSvg = cape([[X(0.36), yW - 18], [X(0.1), yW - 6], [X(-0.2), yW - 4 - trail * 4], [X(-0.5), yW - trail * 12], [X(-0.72) - trail * 30, yW + 6 - trail * 16], [X(-0.66) - trail * 26, yW + 20 - trail * 6], [X(-0.72) - trail * 36, yW + 32 - trail * 2], [X(-0.5) - trail * 6, yW + 30], [X(-0.2), yW + 22], [X(0.12), yW + 18], [X(0.3), yW + 8]]);
      }
    }
    s += capeSvg + tl.front + front;

    // collar under the chin, then the head
    const hd = head(c, hx, hy, mood, { think: pose === 'think', bark: pose === 'blast', run: pose === 'run' || pose === 'fly' });
    let neckBits = '';
    if (c.collar || capeOn) {
      const cy0 = hy + (c.ml + 0.42) * R, cy1 = hy + (c.ml + 0.82) * R, cw = R * 0.82;
      const cd = `M${n(hx - cw)} ${n(cy0)} Q${n(hx)} ${n(cy1 + R * 0.2)} ${n(hx + cw)} ${n(cy0)}`;
      neckBits += L(cd, 8.5, INK) + L(cd, 5.4, capeOn ? '#D8323A' : c.collar) + L(`M${n(hx - cw * 0.8)} ${n(cy0 + 0.2)} Q${n(hx)} ${n(cy1 + R * 0.12)} ${n(hx + cw * 0.3)} ${n(cy0 + (cy1 - cy0) * 0.8)}`, 1.2, '#FFFFFF', 'opacity=".35"');
      if (capeOn) neckBits += badge(hx + R * 0.08, cy1 + R * 0.12);
      else if (c.tag) neckBits += E(hx + R * 0.1, cy1 + R * 0.2, 4.6, 4.6, '#F4C542', 1.4) + E(hx + R * 0.1, cy1 + R * 0.2, 1.8, 1.8, '#C98A0A');
    }
    let headSvg = neckBits + hd.s;
    if (headRot) headSvg = `<g transform="rotate(${headRot} ${n(hx)} ${n(hy + R * 0.3)})">${headSvg}</g>`;
    s += headSvg;

    let anchor = [hx, hd.top - 6];
    const rotPt = p => { const r = rot * Math.PI / 180, cs = Math.cos(r), si = Math.sin(r), x = p[0] - pivot[0], y = p[1] - pivot[1]; return [x * cs - y * si + pivot[0], x * si + y * cs + pivot[1]]; };
    if (rot) anchor = rotPt(anchor);
    anchor = [anchor[0], anchor[1] - lift];
    const sc = c.size;
    const tr = `scale(${sc}) translate(0 ${n(-lift)})${rot ? ` rotate(${rot} ${n(pivot[0])} ${n(pivot[1])})` : ''}`;
    return { svg: `<g transform="${tr}">${s}</g>`, anchor: [anchor[0] * sc, anchor[1] * sc], floats };
  }

  Object.keys(DOGS).forEach(id => { A.EXTRA[id] = (pose, mood, opt) => dog(id, pose, mood, opt); });
  A.DOGS = DOGS;
})();
