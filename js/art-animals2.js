/* Auggie Comics — more realistic animals for travel and nature stories: camel, goat, duck, pigeon,
   squirrel, crab, tiger, deer, horse. Side view facing right, feet at y = 0. Each returns {svg, anchor, floats}. */
(function () {
  const A = window.AuggiArt, C = A.C, n = A.n;
  A.EXTRA = A.EXTRA || {};
  /* ---- Wild kit: shared drawing toolkit for the realistic animals.
     (An identical copy lives in art-wild.js and art-animals2.js; whichever loads first defines A.WK.) ---- */
  A.WK = A.WK || (function () {
    const K = {};
    const rad = d => d * Math.PI / 180;
    K.rad = rad;
    K.lw = 1; // ink-weight multiplier (set to 1/scale while drawing inside a scaled group)
    const W = v => n(v * K.lw);
    K.pose = p => ({ run: p === 'run', fly: p === 'fly', hop: p === 'cheer', sit: p === 'sit', lie: p === 'lie', blast: p === 'blast', wave: p === 'wave', point: p === 'point', think: p === 'think', stand: p === 'stand' });
    // Shift every coordinate pair of an absolute M/L/C/Q/Z path.
    K.shift = (d, dx, dy) => { let i = 0; return d.replace(/-?\d*\.?\d+(?:e[-+]?\d+)?/g, m => n(+m + (i++ % 2 ? dy : dx))); };
    K.sp = (pts, t = 1) => A.spline(pts, true, t);
    K.op = (pts, t = 1) => A.spline(pts, false, t);
    K.rot = (p, a, c = [0, 0]) => { const r = rad(a), co = Math.cos(r), si = Math.sin(r), x = p[0] - c[0], y = p[1] - c[1]; return [c[0] + x * co - y * si, c[1] + x * si + y * co]; };
    // T = {x, y, r, s}: local -> world
    K.tp = (p, T) => { const s = T.s || 1, q = K.rot([p[0] * s, p[1] * s], T.r || 0); return [q[0] + (T.x || 0), q[1] + (T.y || 0)]; };
    K.tr = T => `translate(${n(T.x || 0)} ${n(T.y || 0)})${T.r ? ` rotate(${n(T.r)})` : ''}${T.s && T.s !== 1 ? ` scale(${T.s})` : ''}`;
    K.g = (inner, T) => `<g transform="${K.tr(T)}">${inner}</g>`;
    K.mv = (pts, dx, dy) => pts.map(p => [p[0] + dx, p[1] + dy]);
    K.sc = (pts, k, c = [0, 0]) => pts.map(p => [c[0] + (p[0] - c[0]) * k, c[1] + (p[1] - c[1]) * k]);
    K.poly = pts => 'M' + pts.map(p => n(p[0]) + ' ' + n(p[1])).join(' L') + ' Z';
    K.ink = (d, w = 2, col = C.ink, extra = '') => A.ink(d, W(w), col, extra);
    K.line = (x1, y1, x2, y2, w = 2, col = C.ink, extra = '') => A.line(x1, y1, x2, y2, W(w), col, extra);
    K.dot = (x, y, r, col = C.ink, extra = '') => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${col}" ${extra}/>`;
    const BIG = 'M-5000 -5000H5000V5000H-5000Z ';
    // Inked mass with a hard cel shadow on the lower-right (copy of the outline shifted up-left, subtracted).
    // o: {ow, sh (colour | false), shOp, off:[dx,dy], ht (halftone opacity), hi (highlight colour), inner (clipped marks under shadow), over (clipped marks above shadow)}
    K.mass = (d, fill, o = {}) => {
      if (Array.isArray(d)) d = A.spline(d, true, o.t == null ? 1 : o.t);
      const ow = (o.ow == null ? 2.8 : o.ow) * K.lw;
      const off = o.off || [-6, -8];
      let inner = o.inner || '';
      if (o.sh !== false) {
        const sd = BIG + K.shift(d, off[0], off[1]);
        inner += `<path d="${sd}" fill-rule="evenodd" fill="${o.sh || A.shade(fill, 0.2)}"${o.shOp ? ` fill-opacity="${o.shOp}"` : ''}/>`;
        if (o.ht) inner += `<path d="${sd}" fill-rule="evenodd" fill="url(#ht-dark)" opacity="${o.ht}"/>`;
      }
      if (o.hi) { const k = o.hiK || 0.5; inner += `<path d="${BIG + K.shift(d, -off[0] * k, -off[1] * k)}" fill-rule="evenodd" fill="${o.hi}" fill-opacity="${o.hiOp || 0.5}"/>`; }
      if (o.over) inner += o.over;
      const stroke = ow ? `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${n(ow)}" stroke-linejoin="round" stroke-linecap="round"/>` : '';
      if (!inner) return `<path d="${d}" fill="${fill}"/>` + stroke;
      const id = A.uid('wk');
      return `<clipPath id="${id}"><path d="${d}"/></clipPath><path d="${d}" fill="${fill}"/><g clip-path="url(#${id})">${inner}</g>` + stroke;
    };
    // Plain filled blob (no ink) — for marks inside a mass.
    K.fill = (pts, col, extra = '', t = 1) => `<path d="${Array.isArray(pts) ? A.spline(pts, true, t) : pts}" fill="${col}" ${extra}/>`;
    // Outline of a tapered tube through joints (widths per joint), rounded caps.
    K.limbD = (pts, ws, t = 0.9) => {
      const N = pts.length, L = [], R = [];
      const tan = i => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(N - 1, i + 1)]; const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; };
      for (let i = 0; i < N; i++) { const [tx, ty] = tan(i), w = ws[i] / 2; L.push([pts[i][0] + ty * w, pts[i][1] - tx * w]); R.push([pts[i][0] - ty * w, pts[i][1] + tx * w]); }
      const te = tan(N - 1), we = ws[N - 1] / 2, t0 = tan(0), w0 = ws[0] / 2;
      const e = [pts[N - 1][0] + te[0] * we * 0.85, pts[N - 1][1] + te[1] * we * 0.85];
      const s = [pts[0][0] - t0[0] * w0 * 0.85, pts[0][1] - t0[1] * w0 * 0.85];
      return A.spline([...L, e, ...R.reverse(), s], true, t);
    };
    K.limb = (pts, ws, fill, o = {}) => {
      const w = ws.reduce((a, b) => a + b, 0) / ws.length;
      return K.mass(K.limbD(pts, ws, o.t == null ? 0.9 : o.t), fill, Object.assign({ off: [-w * 0.34, -w * 0.2] }, o));
    };
    // Sub-chain starting at fractional joint index t (optionally ending at t2).
    K.sub = (pts, ws, t, t2) => {
      const at = (u) => { const i = Math.min(pts.length - 2, Math.floor(u)), f = u - i, L = (a, b) => a + (b - a) * f; return [[L(pts[i][0], pts[i + 1][0]), L(pts[i][1], pts[i + 1][1])], L(ws[i], ws[i + 1]), i]; };
      const [p0, w0, i0] = at(t);
      if (t2 == null) return [[p0, ...pts.slice(i0 + 1)], [w0, ...ws.slice(i0 + 1)]];
      const [p1, w1, i1] = at(t2);
      return [[p0, ...pts.slice(i0 + 1, i1 + 1), p1], [w0, ...ws.slice(i0 + 1, i1 + 1), w1]];
    };
    // Colour bands clipped inside a limb: list of {t, t2?, col}
    K.bands = (pts, ws, list) => list.map(b => { const [bp, bw] = K.sub(pts, ws, b.t, b.t2); return bp.length < 2 ? '' : K.fill(K.limbD(bp, bw.map(w => w * 1.4), 0.9), b.col); }).join('');
    // Thin tapered stripes across a limb at fractional joint positions (clip them inside the limb).
    K.stripes = (pts, ws, ts, col, k = 0.2) => ts.map(t => {
      const i = Math.min(pts.length - 2, Math.max(0, Math.floor(t))), f = t - i, a = pts[i], b = pts[i + 1];
      const p = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f], w = ws[i] + (ws[i + 1] - ws[i]) * f;
      const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, ux = dx / l, uy = dy / l, nx = -uy, ny = ux, th = w * k;
      const e1 = [p[0] + nx * w * 0.8, p[1] + ny * w * 0.8], e2 = [p[0] - nx * w * 0.8, p[1] - ny * w * 0.8];
      return K.fill(K.poly([[e1[0] + ux * th, e1[1] + uy * th], [e1[0] - ux * th, e1[1] - uy * th], [p[0] - nx * w * 0.2, p[1] - ny * w * 0.2 + th * 0.3], e2]), col);
    }).join('');
    // Joint chain: angles in degrees from straight down (+ = forward / +x).
    K.chain = (p0, ls, as) => { const pts = [p0]; let x = p0[0], y = p0[1]; ls.forEach((l, i) => { const a = rad(as[i]); x += Math.sin(a) * l; y += Math.cos(a) * l; pts.push([x, y]); }); return pts; };
    // Leg: optional ground (y) to stretch segment gi so the foot (height fh) lands exactly on it.
    K.leg = (p0, ls, as, ws, col, o = {}) => {
      ls = ls.slice();
      if (o.ground != null) {
        const t0 = K.chain(p0, ls, as), tip = t0[t0.length - 1];
        const gi = o.gi == null ? ls.length - 2 : o.gi;
        ls[gi] = Math.max(2, ls[gi] + (o.ground - (o.fh || 0) - tip[1]) / Math.max(0.3, Math.cos(rad(as[gi]))));
      }
      const pts = K.chain(p0, ls, as), tip = pts[pts.length - 1];
      const lo = Object.assign({}, o.lo || {});
      if (o.bands) lo.inner = (lo.inner || '') + K.bands(pts, ws, o.bands);
      if (o.stripes) lo.inner = (lo.inner || '') + K.stripes(pts, ws, o.stripes.ts, o.stripes.col);
      let s = K.limb(pts, ws, col, lo);
      if (o.foot) s += o.foot(tip, as[as.length - 1], pts);
      return { svg: s, pts, tip };
    };
    // Hoof whose top (coronet) sits at p; a = rotation (0 = sole flat on the ground).
    K.hoof = (p, w, a, col, o = {}) => {
      const h = o.h || w * 0.75;
      const at = q => { const r = K.rot(q, -a); return [p[0] + r[0], p[1] + r[1]]; };
      let s = K.mass(K.poly([[-w * 0.52, -h * 0.12], [w * 0.4, -h * 0.2], [w * 0.8, h], [-w * 0.6, h]].map(at)), col, { off: [-w * 0.3, -h * 0.3], ow: 2.4, sh: A.shade(col, 0.35) });
      if (o.cloven) { const q1 = at([w * 0.1, -h * 0.1]), q2 = at([w * 0.16, h]); s += K.line(q1[0], q1[1], q2[0], q2[1], 1.4); }
      const q3 = at([-w * 0.3, h * 0.15]), q4 = at([w * 0.3, h * 0.05]);
      s += K.line(q3[0], q3[1], q4[0], q4[1], 1.2, '#fff', 'stroke-opacity=".35"');
      return s;
    };
    // Soft paw with toe lines (cats, dogs...). p = where the leg ends (paw centre), a = rotation.
    K.paw = (p, w, a, col, o = {}) => {
      const h = w * 0.55;
      const at = q => { const r = K.rot(q, -a); return [p[0] + r[0], p[1] + r[1]]; };
      const pts = [[-w * 0.45, -h * 0.6], [w * 0.1, -h * 0.85], [w * 0.62, -h * 0.35], [w * 0.7, h * 0.35], [w * 0.2, h * 0.62], [-w * 0.45, h * 0.5], [-w * 0.6, 0]].map(at);
      let s = K.mass(pts, col, { off: [-w * 0.18, -h * 0.35], ow: 2.4, sh: o.sh || A.shade(col, 0.22) });
      [0.12, 0.38].forEach(k => { const a1 = at([w * k, h * 0.62]), a2 = at([w * (k + 0.04), h * 0.15]); s += K.line(a1[0], a1[1], a2[0], a2[1], 1.4); });
      return s;
    };
    K.qpt = (p0, c, p1, t) => [(1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * c[0] + t * t * p1[0], (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * c[1] + t * t * p1[1]];
    /* Eye in profile / three-quarter view. x,y centre, r = half width, dir = facing (1 = right).
       o: {iris, pupil: round|slit|bar, lid (skin colour), lash, brow (false to hide), browCol, bw, pr, look, sw, white, duct} */
    K.eye = (x, y, r, mood, o = {}) => {
      const dir = o.dir || 1, sw = (o.sw || Math.max(1.2, Math.min(2.2, r * 0.3 / K.lw))) * K.lw;
      const X = v => x + dir * v;
      let s = '';
      const brow = (b, f) => o.brow === false ? '' : A.ink(`M${n(X(-r * 1.1))} ${n(y - r * (1.3 + b))} Q${n(X(0))} ${n(y - r * (1.62 + (b + f) / 2))} ${n(X(r * 1.0))} ${n(y - r * (1.25 + f))}`, n((o.bw ? o.bw * K.lw : sw * 0.9)), o.browCol || C.ink);
      if (mood === 'laugh' || mood === 'sleepy') {
        const up = mood === 'laugh';
        s += A.ink(`M${n(X(-r))} ${n(y + (up ? r * 0.25 : -r * 0.05))} Q${n(X(0))} ${n(y + (up ? -r * 0.85 : r * 0.7))} ${n(X(r))} ${n(y + (up ? r * 0.3 : 0))}`, n(sw * 1.35));
        if (!up && o.lash) s += [0.5, 0, -0.5].map(k => A.ink(`M${n(X(r * k))} ${n(y + r * (0.34 - Math.abs(k) * 0.14))} l${n(-dir * r * 0.15)} ${n(r * 0.36)}`, n(sw * 0.7))).join('');
        return s + brow(up ? 0.12 : -0.12, up ? 0.15 : -0.2);
      }
      let op = 1, top = 0.78, bot = 0.58, pr = o.pr || 0.46, white = !!o.white, lid = null, b = 0, f = 0;
      switch (mood) {
        case 'happy': bot = 0.44; f = 0.08; break;
        case 'surprised': op = 1.3; pr *= 0.72; white = true; b = 0.4; f = 0.5; break;
        case 'scared': op = 1.22; pr *= 0.55; white = true; b = 0.15; f = 0.55; break;
        case 'angry': lid = [-0.5, 0.05]; b = 0.18; f = -0.5; break;
        case 'determined': lid = [-0.38, -0.2]; b = 0.05; f = -0.28; break;
        case 'sad': lid = [-0.05, -0.55]; b = -0.22; f = 0.42; bot = 0.66; break;
      }
      if (o.round) { top = 0.92 * (top / 0.78); bot = 0.92 * (bot / 0.58); }
      const bk = [X(-r), y + r * 0.04], fr = [X(r), y + r * (o.duct == null ? 0.1 : o.duct)];
      const cu = [X(-r * 0.05), y - top * r * 2 * op], cl = [X(r * 0.05), y + bot * r * 2 * op];
      const d = `M${n(bk[0])} ${n(bk[1])} Q${n(cu[0])} ${n(cu[1])} ${n(fr[0])} ${n(fr[1])} Q${n(cl[0])} ${n(cl[1])} ${n(bk[0])} ${n(bk[1])} Z`;
      const ic = [X(r * 0.1 * (o.look == null ? 1 : o.look)), y - r * 0.02];
      const iris = o.iris || '#3A2414';
      let inner = '';
      const ir = white ? r * 0.64 : r * 1.0;
      inner += `<circle cx="${n(ic[0])}" cy="${n(ic[1])}" r="${n(ir)}" fill="${iris}"/>`;
      if (o.ring !== false) inner += `<circle cx="${n(ic[0])}" cy="${n(ic[1])}" r="${n(ir * 0.9)}" fill="none" stroke="${A.shade(iris, 0.45)}" stroke-width="${n(ir * 0.2)}"/>`;
      const pu = o.pupil || 'round';
      if (pu === 'slit') inner += `<ellipse cx="${n(ic[0])}" cy="${n(ic[1])}" rx="${n(r * (mood === 'scared' || mood === 'surprised' ? 0.34 : mood === 'happy' ? 0.2 : 0.13))}" ry="${n(r * 0.72 * op)}" fill="${C.ink}"/>`;
      else if (pu === 'bar') inner += `<rect x="${n(ic[0] - r * 0.5)}" y="${n(ic[1] - r * 0.15)}" width="${n(r)}" height="${n(r * 0.3)}" rx="${n(r * 0.12)}" fill="${C.ink}"/>`;
      else inner += `<circle cx="${n(ic[0])}" cy="${n(ic[1])}" r="${n(r * pr)}" fill="${C.ink}"/>`;
      inner += `<circle cx="${n(ic[0] - dir * r * 0.26)}" cy="${n(ic[1] - r * 0.3)}" r="${n(r * 0.22)}" fill="#fff"/><circle cx="${n(ic[0] + dir * r * 0.24)}" cy="${n(ic[1] + r * 0.26)}" r="${n(r * 0.09)}" fill="#fff" fill-opacity=".8"/>`;
      if (lid) {
        const l0 = [X(-r * 1.3), y + lid[0] * r], l1 = [X(r * 1.3), y + lid[1] * r];
        inner += `<path d="M${n(l0[0])} ${n(y - r * 3)} L${n(l0[0])} ${n(l0[1])} L${n(l1[0])} ${n(l1[1])} L${n(l1[0])} ${n(y - r * 3)} Z" fill="${o.lid || '#999'}"/>` + A.line(l0[0], l0[1], l1[0], l1[1], n(sw * 1.3));
      }
      const id = A.uid('ey');
      s += `<clipPath id="${id}"><path d="${d}"/></clipPath><path d="${d}" fill="${white ? '#FBF8EE' : iris}"/><g clip-path="url(#${id})">${inner}</g>`;
      s += `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${n(sw)}" stroke-linejoin="round"/>`;
      s += A.ink(`M${n(bk[0])} ${n(bk[1])} Q${n(cu[0])} ${n(cu[1])} ${n(fr[0])} ${n(fr[1])}`, n(sw * 1.7));
      if (o.lash) s += [0.18, 0.34, 0.5].map(t => { const p = K.qpt(bk, cu, fr, t); return A.ink(`M${n(p[0])} ${n(p[1])} l${n(-dir * r * 0.28)} ${n(-r * 0.3)}`, n(sw * 0.75)); }).join('');
      return s + brow(b, f);
    };
    K.tear = (x, y, s = 1) => `<path d="M${n(x)} ${n(y)} q${n(-3.4 * s)} ${n(5 * s)} ${n(-3.4 * s)} ${n(7 * s)} a${n(3.4 * s)} ${n(3.4 * s)} 0 0 0 ${n(6.8 * s)} 0 q0 ${n(-2 * s)} ${n(-3.4 * s)} ${n(-7 * s)} Z" fill="${C.tear}" stroke="${C.ink}" stroke-width="${W(1.2)}"/><circle cx="${n(x - 1.4 * s)}" cy="${n(y + 6.4 * s)}" r="${n(1 * s)}" fill="#fff"/>`;
    K.sweat = (x, y, s = 1) => K.tear(x, y, s * 1.2) + K.ink(`M${n(x + 6 * s)} ${n(y - 2 * s)} l${n(4 * s)} ${n(-4 * s)} M${n(x + 8 * s)} ${n(y + 4 * s)} l${n(5 * s)} ${n(-1 * s)}`, 1.4);
    K.zz = (x, y, s = 1) => [[0, 0, 7], [9, -12, 10]].map(([dx, dy, z]) => K.ink(`M${n(x + dx * s)} ${n(y + dy * s)} h${n(z * s)} l${n(-z * s)} ${n(z * s)} h${n(z * s)}`, 2.2)).join('');
    K.sound = (x, y, s = 1, dir = 1) => [0, 1, 2].map(i => K.ink(`M${n(x + dir * (i * 7 + 3) * s)} ${n(y - (5 + i * 4.5) * s)} q${n(dir * (5 + i * 2.2) * s)} ${n((5 + i * 4.5) * s)} 0 ${n((10 + i * 9) * s)}`, 2.4)).join('');
    K.qmark = (x, y, s = 1) => K.ink(`M${n(x - 5 * s)} ${n(y - 6 * s)} q0 ${n(-7 * s)} ${n(6 * s)} ${n(-7 * s)} q${n(6 * s)} 0 ${n(6 * s)} ${n(6 * s)} q0 ${n(4 * s)} ${n(-5 * s)} ${n(7 * s)} v${n(4 * s)}`, 2.6) + K.dot(x + 1 * s, y + 10 * s, 1.8 * s * K.lw);
    // Short texture strokes [x,y,dx,dy]
    K.fur = (list, col, sw = 1.3, op = 0.8) => list.map(([x, y, dx, dy]) => `<path d="M${n(x)} ${n(y)} l${n(dx)} ${n(dy)}" stroke="${col}" stroke-width="${W(sw)}" stroke-linecap="round" stroke-opacity="${op}" fill="none"/>`).join('');
    // Final wrapper. lift raises the whole figure; rot rotates about pivot; s scales about the ground origin.
    K.out = (s, anchor, o = {}) => {
      const lift = o.lift || 0, rot = o.rot || 0, pv = o.pivot || [0, 0], sc = o.s || 1;
      let an = rot ? K.rot(anchor, rot, pv) : anchor;
      an = [an[0] * sc, (an[1] - lift) * sc];
      const tr = `${sc !== 1 ? `scale(${sc}) ` : ''}translate(0 ${n(-lift)})${rot ? ` rotate(${n(rot)} ${n(pv[0])} ${n(pv[1])})` : ''}`;
      return { svg: `<g transform="${tr}">${s}</g>`, anchor: [n(an[0]), n(an[1])], floats: !!o.floats };
    };

    /* ---------- Carnivores: cats, big cats and dogs (side-view body, 3/4 head) ----------
       c: {s, fur, furS, light, lightS, dark, nose, iris, pupil, R, kind: 'cat'|'lion'|'tiger'|'dog', legK, tail, tailW, stripes, socks} */
    K.carn = (c, pose, mood) => {
      const P = K.pose(pose), sc = c.s || 1, kind = c.kind;
      const lw0 = K.lw; K.lw = 1 / sc;
      const F = c.fur, FS = c.furS, FF = A.shade(c.fur, 0.1), FFS = A.shade(c.furS, 0.1), L = c.light, LS = c.lightS || A.shade(c.light, 0.14), D = c.dark || C.ink;
      const sitLike = P.sit || P.wave || P.think, lie = P.lie, flow = P.run || P.fly;
      const lift = P.hop ? 26 : P.run ? 12 : P.fly ? 34 : 0;
      const up = ((c.legK || 1) - 1) * 60; // longer legs raise the body
      const low = mood === 'sad' || mood === 'scared';
      let s = '';
      // ---- head placement
      let H;
      if (sitLike) H = { x: 34, y: -146 - up * 1.2, r: P.think ? 12 : 0 };
      else if (lie) H = mood === 'sleepy' ? { x: 82, y: -38, r: 8 } : { x: 76, y: -80, r: 0 };
      else if (flow) H = { x: 92, y: -104 - up, r: -4 };
      else if (P.hop) H = { x: 84, y: -120 - up, r: -8 };
      else H = { x: 74, y: -114 - up, r: 0 };
      if (low && !lie) { H.y += 8; H.r += 6; }
      if (P.blast) H.r -= 8;
      // ---- tail
      const tailW = c.tailW || 11;
      let tb, tpts;
      const happyT = mood === 'happy' || mood === 'laugh' || P.hop;
      if (sitLike) { tb = [-58, -16]; tpts = [tb, [-62, 0], [-30, 2], [4, 0], [22, -8]]; }
      else if (lie) { tb = [-80, -24]; tpts = [tb, [-104, -12], [-128, -8], [-146, -18]]; }
      else {
        tb = [-82, -90 - up];
        if (c.tail === 'curl' && !low) tpts = [tb, [-98, -112 - up], [-92, -134 - up], [-72, -130 - up], [-66, -116 - up]];
        else if (flow) tpts = [tb, [-110, -96 - up], [-136, -98 - up], [-156, -110 - up]];
        else if (low) tpts = [tb, [-90, -64 - up], [-84, -40 - up], [-70, -28 - up]];
        else if (mood === 'angry' && kind === 'cat') tpts = [tb, [-90, -118 - up], [-92, -150 - up], [-90, -176 - up]];
        else if (happyT && kind === 'cat') tpts = [tb, [-92, -116 - up], [-96, -146 - up], [-86, -166 - up], [-74, -164 - up]];
        else if (happyT || mood === 'surprised') tpts = [tb, [-106, -96 - up], [-122, -120 - up], [-118, -146 - up]];
        else tpts = [tb, [-100, -70 - up], [-108, -40 - up], [-122, -26 - up]];
      }
      const tws = tpts.map((p, i) => tailW * (1 - i / tpts.length * (c.tailTaper == null ? 0.45 : c.tailTaper)));
      let tailS = K.limb(tpts, tws, F, { sh: FS, inner: c.tailRings ? K.stripes(tpts, tws, [0.9, 1.4, 1.9, 2.4, 2.85].filter(t => t < tpts.length - 1.4), D, 0.28) + K.bands(tpts, tws, [{ t: tpts.length - 1.4, col: D }]) : c.tailTip ? K.bands(tpts, tws, [{ t: tpts.length - 1.3, col: c.tailTip }]) : '' });
      if (c.tuft) { const e = tpts[tpts.length - 1], q = tpts[tpts.length - 2], a = Math.atan2(e[1] - q[1], e[0] - q[0]); const ux = Math.cos(a), uy = Math.sin(a); tailS += K.mass([[e[0] - uy * 7, e[1] + ux * 7], [e[0] + ux * 14, e[1] + uy * 14], [e[0] + ux * 22 + uy * 2, e[1] + uy * 22], [e[0] + uy * 7, e[1] - ux * 7], [e[0] - ux * 4, e[1] - uy * 4]], c.tuft, { off: [-3, -3], ow: 2.4 }); }
      // ---- legs
      const pawW = c.pawW || 20, fh = pawW * 0.34;
      const paw = (col, sh) => (tip, a) => K.paw(tip, pawW, a - 26, col, { sh });
      const sock = c.socks ? [{ t: 1.9, col: L }] : null;
      const lstr = c.legStripes ? { ts: [0.75, 1.1, 1.45], col: D } : null;
      const lk = c.legW || 1, FL = { ls: [18, 38 * (c.legK || 1), 12], ws: [30 * lk, 20 * lk, 15 * lk, 14 * lk] }, HL = { ls: [30, 30 * (c.legK || 1), 24 * (c.legK || 1)], ws: [40 * lk, 23 * lk, 15 * lk, 14 * lk] };
      let legs = '', front = '';
      if (sitLike) {
        // haunch + hind foot flat, front legs straight
        legs += K.limb([[-42, -14], [-6, -7]], [16, 13], FF, { sh: FFS }) + K.paw([-2, -6], pawW, -8, FF, { sh: FFS });
        const fz = K.leg([22, -84 - up], [34 + up * 0.6, 34 + up * 0.5, 10], [-6, 0, 20], [22, 17, 14, 13], FF, { lo: { sh: FFS }, foot: paw(FF, FFS), fh, ground: 0, bands: sock });
        legs += fz.svg;
        const nearAs = P.wave ? [70, 160, 175] : [-4, 2, 20];
        front += K.leg([36, -86 - up], [34 + up * 0.6, 34 + up * 0.5, 10], nearAs, [24, 18, 14, 13], F, { lo: { sh: FS }, foot: paw(c.socks ? L : F, FS), fh, ground: P.wave ? null : 0, bands: sock }).svg;
      } else if (lie) {
        legs += K.limb([[20, -30], [52, -14], [78, -12]], [20, 15, 13], FF, { sh: FFS }) + K.paw([82, -11], pawW, -82, c.socks ? L : FF, { sh: FFS });
        front += K.limb([[34, -26], [62, -9], [90, -6]], [22, 16, 14], F, { sh: FS, inner: sock ? K.bands([[34, -26], [62, -9], [90, -6]], [22, 16, 14], [{ t: 1.4, col: L }]) : '' }) + K.paw([94, -6], pawW, -84, c.socks ? L : F, { sh: FS });
      } else {
        let fN, fF, hN, hF;
        if (flow) { fN = [40, 75, 85]; fF = [30, 55, 70]; hN = [-20, -75, -85]; hF = [-8, -60, -75]; }
        else if (P.hop) { fN = [60, 115, 110]; fF = [50, 100, 100]; hN = [10, -50, -30]; hF = [16, -40, -20]; }
        else { fN = [-12, 2, 24]; fF = [-6, 5, 24]; hN = [34, -42, 6]; hF = [28, -36, 8]; }
        if (P.point) fN = [-12, 72, 84];
        if (P.blast) { fN = [-12, 14, 24]; hN = [30, -48, -4]; }
        const gr = !(flow || P.hop);
        const o = (col, sh, g, bands) => ({ lo: { sh }, foot: paw(c.socks ? L : col, sh), fh, ground: g ? 0 : null, bands, stripes: lstr });
        legs += K.leg([28, -72 - up], FL.ls, fF, FL.ws, FF, o(FF, FFS, gr, sock)).svg;
        legs += K.leg([-44, -80 - up], HL.ls, hF, HL.ws, FF, o(FF, FFS, gr, sock)).svg;
        legs += K.leg([-58, -82 - up], HL.ls, hN, HL.ws, F, o(F, FS, gr, sock)).svg;
        const nf = K.leg([42, -72 - up], FL.ls, fN, FL.ws, F, o(F, FS, gr && !P.point, sock)).svg;
        if (P.point) front += nf; else legs += nf;
      }
      // ---- body
      const nt = K.tp([-20, -12], H), th = K.tp([-8, 22], H);
      let body;
      if (sitLike) body = [[-50, -6], [-66, -34], [-60, -62], [-38, -86 - up * 0.5], [-8, -112 - up], [12, -130 - up * 1.1], nt, th, [44, -104 - up], [46, -80 - up], [38, -52], [20, -18], [0, -4], [-28, -2]];
      else if (lie) body = [[-86, -18], [-80, -44], [-60, -58], [-24, -58], [8, -60], [30, -68], nt, th, [58, -48], [52, -20], [30, -4], [-10, -2], [-60, -2]];
      else body = [[-88, -80], [-80, -96], [-56, -102], [-30, -98], [-4, -100], [18, -106], [34, -110], nt, th, [64, -90], [64, -66], [52, -50], [30, -46], [8, -50], [-16, -58], [-36, -62], [-52, -60], [-68, -62], [-84, -68]].map((p, i) => (i === 7 || i === 8) ? p : [p[0], p[1] - up]);
      // markings on the body
      let marks = '';
      const chest = sitLike ? [[26, -120 - up], [46, -104 - up], [48, -80 - up], [36, -60], [24, -80 - up]] : lie ? [[40, -60], [58, -48], [52, -24], [40, -30]] : [[40, -104 - up], [62, -88 - up], [60, -64 - up], [44, -58 - up], [38, -80 - up]];
      marks += K.fill(chest, L);
      if (!sitLike && !lie) marks += K.fill([[-40, -62 - up], [-10, -58 - up], [20, -52 - up], [50, -48 - up], [50, -30], [-40, -30]], L, 'fill-opacity=".9"');
      if (c.stripes) {
        const xs = sitLike ? [-50, -36, -22, -8, 6] : lie ? [-64, -48, -32, -16, 0, 16] : [-72, -58, -44, -30, -16, -2, 12, 26];
        xs.forEach((x, i) => {
          const topY = sitLike ? -60 + (x + 50) * -1.1 - up * 0.5 : lie ? -62 : -104 - up;
          const len = (sitLike ? 26 : lie ? 30 : 34) * (i % 2 ? 0.8 : 1), w = i % 2 ? 4 : 5.5, lean = sitLike ? 14 : 5;
          marks += K.fill([[x - w, topY - 6], [x + w, topY - 6], [x + w * 0.8 + lean * 0.5, topY + len * 0.5], [x + lean, topY + len], [x - w * 0.3 + lean * 0.4, topY + len * 0.5]], D);
          if (!(i % 2)) marks += K.fill([[x + 8, topY + len * 0.35], [x + 13, topY + len * 0.4], [x + 12 + lean * 0.4, topY + len * 0.8]], D);
        });
      }
      const contour = sitLike ? K.ink('M-54 -60 q26 -6 36 30', 1.5, C.ink, 'stroke-opacity=".55"') : lie ? K.ink('M-70 -46 q24 -4 30 30', 1.5, C.ink, 'stroke-opacity=".55"') : K.ink(`M-70 ${-98 - up} q30 4 24 42 M46 ${-102 - up} q-12 22 -2 50 M-6 ${-54 - up} q14 -10 34 -8`, 1.5, C.ink, 'stroke-opacity=".5"');
      const tailFirst = !(sitLike);
      s += (tailFirst ? tailS : '') + legs;
      s += K.mass(body, F, { sh: FS, off: [-8, -11], ht: 0.35, hi: c.hi || A.shade(F, -0.25), hiK: 0.4, hiOp: 0.5, inner: marks, over: contour + (c.bodyFur ? K.fur(c.bodyFur(up), FS, 1.3, 0.7) : '') });
      if (sitLike) s += K.mass([[-66, -28], [-60, -58], [-36, -66], [-14, -46], [-16, -18], [-40, -8], [-60, -10]], F, { sh: FS, off: [-6, -8], inner: c.stripes ? K.fill([[-54, -54], [-48, -58], [-30, -30], [-36, -28]], D) + K.fill([[-40, -58], [-34, -60], [-20, -40], [-26, -38]], D) : '' });
      if (lie) s += K.mass([[-82, -22], [-76, -46], [-52, -52], [-36, -36], [-40, -12], [-64, -6]], F, { sh: FS, off: [-6, -8] }) + K.limb([[-70, -10], [-34, -6]], [14, 12], F, { sh: FS }) + K.paw([-30, -6], pawW, -84, c.socks ? L : F, { sh: FS });
      if (sitLike) s += tailS;
      s += front;
      // ---- head
      s += K.g(K.carnHead(c, mood, P, sc), H);
      // fx
      const top = K.tp([0, -c.R * 1.7], H);
      let fx = '';
      if (P.blast) { const m = K.tp([c.R * 1.5, c.R * 0.5], H); fx += K.sound(m[0], m[1], 1.3); }
      if (mood === 'sleepy') fx += K.zz(H.x + c.R * 1.1, H.y - c.R * 1.4, 1.1);
      if (P.think) fx += K.qmark(H.x + c.R * 1.4, H.y - c.R * 1.5, 1.1);
      s += fx;
      K.lw = lw0;
      return K.out(s, [top[0], top[1]], { lift, rot: flow ? -3 : P.hop ? -10 : 0, pivot: [-40, 0], s: sc });
    };
    // 3/4 head drawn at a nominal radius of 28 (scaled by c.R / 28).
    K.carnHead = (c, mood, P, sc) => {
      const hs = c.R / 28, lw0 = K.lw; K.lw = 1 / (sc * hs);
      const kind = c.kind, F = c.fur, FS = c.furS, L = c.light, LS = c.lightS || A.shade(c.light, 0.14), D = c.dark || C.ink;
      const open = P.blast || mood === 'laugh' || (kind === 'dog' && mood === 'happy') || mood === 'surprised';
      const wide = P.blast ? 1 : mood === 'laugh' ? 0.75 : mood === 'surprised' ? 0.45 : 0.55;
      let h = '';
      // ears
      const earRot = mood === 'scared' || mood === 'angry' ? 1 : mood === 'sad' || mood === 'sleepy' ? 0.6 : mood === 'surprised' ? -0.3 : 0;
      const ear = (side) => {
        let pts, inn, base;
        if (kind === 'cat') { pts = side < 0 ? [[-22, -14], [-20, -46], [-2, -24]] : [[4, -26], [18, -44], [20, -16]]; }
        else if (kind === 'dog') { pts = side < 0 ? [[-22, -12], [-18, -48], [-4, -22]] : [[4, -24], [20, -46], [22, -14]]; }
        else { pts = side < 0 ? [[-24, -16], [-22, -32], [-10, -34], [-4, -24]] : [[2, -26], [10, -36], [20, -32], [20, -20]]; }
        base = side < 0 ? pts[0] : pts[pts.length - 1];
        const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
        inn = K.sc(pts, 0.55, [cx, cy + 3]);
        const d = kind === 'cat' || kind === 'dog' ? A.spline(pts, true, 0.35) : A.spline(pts, true, 1);
        const innerCol = kind === 'tiger' ? '#F4EDE2' : kind === 'lion' ? LS : '#E8A7A0';
        let e = K.mass(d, side < 0 ? F : A.shade(F, 0.06), { sh: FS, off: [-3, -3], ow: 2.4, inner: K.fill(A.spline(inn, true, kind === 'cat' || kind === 'dog' ? 0.35 : 1), innerCol) + (kind === 'tiger' ? K.fill(K.sc(pts, 1.4, [cx, cy - 6]).slice(0, 2).concat([[cx, cy - 12]]), D, 'fill-opacity=".9"') : '') + (kind === 'cat' || kind === 'dog' ? K.fur([[cx - 2, cy + 4, 2, -8], [cx + 2, cy + 4, 0, -9]], '#fff', 1, 0.8) : '') });
        const rot = earRot * (side < 0 ? -32 : 30);
        return rot ? K.g(e, { x: 0, y: 0, r: 0 }).replace('<g transform="translate(0 0)">', `<g transform="rotate(${n(rot)} ${n(base[0])} ${n(base[1])})">`) : e;
      };
      // lion mane
      if (kind === 'lion') {
        const lobes = (cx, cy, N, rOut, rIn, stretch) => { const pts = []; for (let i = 0; i < N; i++) { const a = -Math.PI * 0.62 + i / N * Math.PI * 2, st = stretch(a); const r1 = rOut * st, r2 = rIn * st, a2 = a + Math.PI / N; pts.push([cx + Math.cos(a) * r1, cy + Math.sin(a) * r1 * 1.05]); pts.push([cx + Math.cos(a2) * r2, cy + Math.sin(a2) * r2 * 1.05]); } return pts; };
        const stretch = a => 1 + 0.32 * Math.max(0, Math.sin(a)) * (Math.cos(a) < 0.3 ? 1 : 0.5) + 0.22 * Math.max(0, -Math.cos(a)) - 0.12 * Math.max(0, Math.cos(a) * -Math.sin(a) * 2);
        const mp = lobes(-12, 8, 13, 54, 47, stretch), mi = lobes(-6, 6, 12, 40, 35, a => 1 + 0.1 * Math.max(0, Math.sin(a)));
        const strands = []; for (let i = 0; i < 22; i++) { const a = -Math.PI * 0.62 + i / 22 * Math.PI * 2, st = stretch(a), r = 36 + (i % 3) * 5; strands.push([-12 + Math.cos(a) * r, 8 + Math.sin(a) * r, Math.cos(a + 0.35) * 12 * st, Math.sin(a + 0.35) * 12 * st]); }
        h += K.mass(mp, c.mane, { sh: c.maneS, off: [-8, -9], t: 1, over: K.fur(strands, c.maneS, 1.8, 0.85) });
        h += K.mass(mi, c.mane2, { sh: c.mane, off: [-5, -6], t: 1, ow: 2, over: K.fur(strands.map(q => [q[0] * 0.8, q[1] * 0.8, q[2] * 0.6, q[3] * 0.6]), c.mane, 1.4, 0.7) });
      }
      h += ear(1);
      if (kind !== 'lion') h += ear(-1);
      else h += ear(-1);
      // head outline
      let pts;
      const jaw = open ? 8 * wide : 0;
      if (kind === 'cat') pts = [[-4, -27], [12, -25], [22, -17], [28, -6], [31, 4], [29, 13], [22, 21 + jaw], [8, 26 + jaw * 0.6], [-8, 24], [-19, 19], [-29, 12], [-25, 8], [-31, 1], [-26, -3], [-28, -10], [-18, -21]];
      else if (kind === 'dog') pts = [[-6, -25], [8, -25], [18, -17], [24, -9], [36, -5], [46, -1], [48, 6], [42, 13], [30, 18 + jaw], [16, 22 + jaw * 0.7], [0, 24], [-14, 19], [-22, 7], [-23, -9], [-16, -20]];
      else if (kind === 'tiger') pts = [[-4, -27], [12, -25], [24, -15], [32, -4], [37, 6], [35, 16], [28, 24 + jaw], [12, 28 + jaw * 0.6], [-6, 27], [-20, 22], [-34, 16], [-28, 10], [-35, 3], [-28, -2], [-29, -10], [-18, -21]];
      else pts = [[-4, -27], [12, -25], [24, -15], [32, -4], [38, 6], [36, 16], [28, 24 + jaw], [12, 28 + jaw * 0.6], [-6, 26], [-20, 20], [-27, 6], [-26, -10], [-16, -22]];
      // face markings
      let fm = '';
      const muz = kind === 'dog' ? [[22, -6], [40, -6], [50, 4], [44, 16], [30, 22 + jaw], [18, 20], [16, 6]] : [[10, 2], [24, -4], [38, 4], [36, 18], [26, 26 + jaw], [10, 22]];
      if (kind !== 'lion' || true) fm += K.fill(muz, L);
      if (kind === 'tiger') {
        fm += K.fill([[-26, 8], [-6, 10], [4, 20], [-8, 28], [-30, 20]], L);
        fm += K.fill([[-6, -22], [-2, -8], [4, -21]], D) + K.fill([[6, -24], [8, -12], [12, -23]], D) + K.fill([[-14, -18], [-8, -10], [-10, -20]], D);
        fm += K.fill([[-30, -2], [-12, 2], [-30, 5]], D) + K.fill([[-32, 8], [-14, 9], [-30, 12]], D) + K.fill([[20, -14], [30, -8], [21, -10]], D);
        fm += K.fill([[-6, -16], [8, -16], [6, -12], [-4, -12]], '#FFF6E8', 'fill-opacity=".9"') + K.fill([[14, -17], [24, -14], [18, -12]], '#FFF6E8', 'fill-opacity=".9"');
      }
      if (kind === 'cat' && c.stripes) fm += K.fill([[-2, -26], [1, -14], [3, -26]], D) + K.fill([[5, -26], [7, -15], [10, -25]], D) + K.fill([[-9, -24], [-5, -15], [-5, -25]], D) + K.fill([[-28, 0], [-14, 3], [-28, 4]], D) + K.fill([[-27, 8], [-14, 8], [-26, 11]], D);
      if (kind === 'dog') fm += K.fill([[-4, -24], [6, -24], [16, -12], [24, -8], [16, -6], [4, -12]], A.shade(F, 0.12), 'fill-opacity=".5"');
      h += K.mass(pts, F, { sh: FS, off: [-5, -6], t: 0.95, hi: c.hi || A.shade(F, -0.25), hiK: 0.4, inner: fm });
      // mouth
      const nose = kind === 'dog' ? [44, 0] : kind === 'cat' ? [27, 1] : kind === 'tiger' ? [32, 1] : [33, 1];
      const nx = nose[0], ny = nose[1];
      if (open) {
        const mo = kind === 'dog' ? [[22, 12], [34, 12], [42, 13], [36, 20 + jaw * 1.2], [26, 20 + jaw]] : [[nx - 16, 10], [nx - 6, 9], [nx + 3, 10], [nx, 17 + jaw * 1.1], [nx - 10, 18 + jaw], [nx - 16, 15]];
        let mi = K.fill(K.mv(K.sc(mo, 0.7, [mo[0][0] + 8, mo[0][1] + 8]), 0, 4), '#E27E8C');
        if (kind !== 'dog' && P.blast) mi += K.fill([[nx - 12, 9], [nx - 9, 9], [nx - 10.5, 15]], '#FFF8EC') + K.fill([[nx - 2, 9], [nx + 1, 9], [nx - 0.5, 14]], '#FFF8EC');
        h += K.mass(mo, '#5A1B22', { ow: 2.2, sh: false, inner: mi });
        if (kind === 'dog' && !P.blast) h += K.mass([[26, 18 + jaw], [34, 18 + jaw], [36, 30 + jaw], [30, 34 + jaw], [25, 28 + jaw]], '#EC7F91', { ow: 2, off: [-2, -2], over: K.ink(`M30 ${20 + jaw} v8`, 1.1, '#B8506A') });
      }
      // nose + philtrum + lips
      if (kind === 'dog') h += K.mass([[nx - 5, ny - 4], [nx + 3, ny - 5], [nx + 5, ny + 1], [nx + 1, ny + 5], [nx - 5, ny + 3]], c.nose, { ow: 2, sh: false, over: K.dot(nx - 1, ny - 2, 1.4, '#fff', 'fill-opacity=".6"') });
      else h += K.mass([[nx - 7, ny - 4], [nx + 4, ny - 4], [nx + 1, ny + 3], [nx - 2, ny + 4]], c.nose, { ow: 2, sh: false, t: 0.6, over: K.dot(nx - 3, ny - 2, 1.2, '#fff', 'fill-opacity=".6"') });
      if (!open) {
        const smile = mood === 'happy' || mood === 'determined' ? 1 : mood === 'sad' || mood === 'scared' || mood === 'angry' ? -1 : 0;
        const mx = kind === 'dog' ? 34 : nx - 1, my = kind === 'dog' ? 12 : ny + 9;
        h += K.ink(`M${nx - 1} ${ny + 4} L${mx} ${my} M${mx - 11} ${my + 1 - smile * 2} Q${mx - 5} ${my + 4 + smile * 2} ${mx} ${my} Q${mx + 3} ${my + 3 + smile * 1.5} ${mx + 6} ${my - smile * 1.5}`, 1.8);
      } else h += K.ink(`M${nx - 1} ${ny + 4} L${nx - 2} ${ny + 9}`, 1.6);
      // whisker dots + whiskers
      if (kind !== 'dog') {
        [[nx - 12, ny + 7], [nx - 8, ny + 9], [nx - 13, ny + 11], [nx + 2, ny + 7]].forEach(p => { h += K.dot(p[0], p[1], 0.9, A.shade(L, 0.4)); });
        const wc = kind === 'cat' ? '#FFFFFF' : '#FFF6E6';
        h += K.ink(`M${nx - 12} ${ny + 8} q-18 -6 -30 -2 M${nx - 12} ${ny + 10} q-18 0 -28 6 M${nx + 3} ${ny + 8} q12 -4 22 -8 M${nx + 3} ${ny + 10} q12 0 22 2`, 1.1, wc, 'stroke-opacity=".95"');
      }
      // eyes
      const eo = { iris: c.iris, pupil: c.pupil || 'round', lid: F, bw: 1.7, look: 1.2, duct: 0.3, round: kind === 'cat' };
      const er = c.eyeR || 5.6;
      h += K.eye(22, -6, er * 0.82, mood, Object.assign({}, eo, { brow: kind === 'dog' || kind === 'cat' ? undefined : undefined }));
      h += K.eye(4, -5, er, mood, eo);
      if (mood === 'sad') h += K.tear(0, 3, 1);
      if (mood === 'scared') h += K.sweat(-24, -22, 1);
      if (kind === 'dog' && P.hop) h += '';
      K.lw = lw0;
      return `<g transform="scale(${n(hs * 100) / 100})">${h}</g>`;
    };
    /* ---------- Birds (side view). c: {s, L, D, R, ang, legH, neck:[dx,dy], body, bodyS, belly, wing, wingS, prim, bar, wingLen,
         span, tail:{len, ws, ang, col}, head, headS, headPts, headMarks(R), headOver(R), beak, beakCol, beakCol2, iris, eyeR, eyeRing,
         leg, legW, feet: 'perch'|'zygo'|'web', marks(bw, H), train(P, mood, bw) } ---------- */
    K.toe = (pts, col, w = 2.4) => A.ink(K.op(pts), n((w + 2.4) * K.lw), C.ink) + A.ink(K.op(pts), n(w * K.lw), col);
    K.beak = (type, R, open, col, col2) => {
      const o = open ? 1 : 0, S = pts => K.sc(pts, R);
      let s = '';
      if (type === 'hook') {
        if (open) s += K.mass(S([[0.6, 0.05], [1.08, 0.1], [0.98, 0.6], [0.66, 0.5]]), '#5A1B22', { ow: 1.8, sh: false });
        s += K.mass(S([[0.62, 0.14 + o * 0.16], [0.98, 0.22 + o * 0.34], [0.94, 0.44 + o * 0.36], [0.66, 0.48 + o * 0.2]]), col2, { ow: 2, off: [-1.5, -1.5] });
        s += K.mass(S([[0.52, -0.52], [0.95, -0.55], [1.28, -0.24], [1.34, 0.18], [1.2, 0.58], [1.1, 0.26], [0.86, 0.12], [0.56, 0.16]]), col, { ow: 2.2, off: [-2, -2.5], hi: '#fff', hiOp: 0.35 });
      } else if (type === 'bill') {
        if (open) s += K.mass(S([[0.62, 0.1], [1.5, 0.1], [1.45, 0.5], [0.7, 0.4]]), '#5A1B22', { ow: 1.8, sh: false });
        s += K.mass(S([[0.64, 0.14 + o * 0.1], [1.45, 0.16 + o * 0.34], [1.52, 0.28 + o * 0.4], [0.72, 0.34 + o * 0.12]]), col2, { ow: 2, off: [-1.5, -1.5] });
        s += K.mass(S([[0.58, -0.36], [1.1, -0.3], [1.58, -0.12], [1.72, 0.06], [1.6, 0.18], [1.0, 0.14], [0.62, 0.2]]), col, { ow: 2.2, off: [-2, -2.5], hi: '#fff', hiOp: 0.3, inner: K.fill(S([[1.55, -0.16], [1.8, -0.1], [1.8, 0.2], [1.58, 0.2]]), '#3A3028') });
        s += K.dot(R * 0.98, -R * 0.12, R * 0.05, C.ink);
      } else { // short (pigeon / peacock / generic)
        const L = type === 'peacock' ? 1.2 : 1;
        if (open) s += K.mass(S([[0.72, 0.02], [0.72 + 0.5 * L, 0.06], [0.72 + 0.4 * L, 0.36], [0.76, 0.3]]), '#5A1B22', { ow: 1.6, sh: false });
        s += K.mass(S([[0.74, 0.08 + o * 0.12], [0.72 + 0.5 * L, 0.08 + o * 0.28], [0.8, 0.24 + o * 0.2]]), col2 || col, { ow: 1.8, sh: false, t: 0.6 });
        s += K.mass(S([[0.7, -0.16], [0.72 + 0.46 * L, -0.06], [0.72 + 0.6 * L, 0.06], [0.76, 0.1]]), col, { ow: 2, sh: false, t: 0.7 });
        if (type === 'short') s += K.mass(S([[0.72, -0.3], [0.94, -0.28], [1.0, -0.12], [0.76, -0.08]]), '#F2EEE6', { ow: 1.4, sh: false });
      }
      return s;
    };
    K.bird = (c, pose, mood) => {
      const P = K.pose(pose), sc = c.s || 1, lw0 = K.lw; K.lw = 1 / sc;
      const fly = P.fly, seated = P.sit || P.lie, run = P.run, hop = P.hop;
      const L = c.L, D = c.D, R = c.R;
      let ang = c.ang, lift = 0;
      const legH = seated ? -D * 0.08 : fly ? 0 : c.legH;
      if (fly) { ang = c.flyAng == null ? -4 : c.flyAng; lift = 34; }
      if (run) ang += 12;
      if (hop) lift = 18;
      const B0 = [0, -(legH + D * 0.46)];
      const bw = (u, v) => { const q = K.rot([u * L, v * D], ang); return [B0[0] + q[0], B0[1] + q[1]]; };
      const nb = bw(0.36, -0.3);
      let hv = fly ? [c.neck[0] * 0.6 + R * 0.6, c.neck[1] * 0.45] : c.neck.slice();
      if (P.blast) hv = [hv[0] + 3, hv[1] - 3];
      if (mood === 'sad' && !fly) hv = [hv[0] + 2, hv[1] + 5];
      if (seated && mood === 'sleepy') hv = [hv[0] - 3, hv[1] + 6];
      const H = [nb[0] + hv[0], nb[1] + hv[1]];
      const hr = P.think ? 14 : mood === 'sad' ? 12 : P.blast ? -14 : mood === 'surprised' ? -6 : seated && mood === 'sleepy' ? 16 : 0;
      const S = bw(0.2, -0.38);
      // spread wing: raise = direction of the wing (deg, world), flip puts the trailing edge on the other side
      const spread = (raise, col, sh, flip) => {
        const Sp = c.span, sg = flip ? 1 : -1;
        const w2 = (x, y) => { const q = K.rot([x * Sp, sg * y * Sp], raise); return [S[0] + q[0], S[1] + q[1]]; };
        const wf = [[0, -0.06], [0.28, -0.12], [0.58, -0.13], [0.8, -0.07], [1, 0.03], [0.94, 0.1], [0.86, 0.15], [0.76, 0.2], [0.66, 0.25], [0.54, 0.28], [0.4, 0.3], [0.24, 0.28], [0.08, 0.2]];
        let inner = K.fill(K.poly([w2(0.52, -0.4), w2(1.3, -0.4), w2(1.3, 0.6), w2(0.5, 0.6)]), c.prim);
        if (c.bar) inner += K.fill(K.poly([w2(0.26, -0.4), w2(0.33, -0.4), w2(0.33, 0.6), w2(0.26, 0.6)]), c.bar) + K.fill(K.poly([w2(0.38, -0.4), w2(0.45, -0.4), w2(0.45, 0.6), w2(0.38, 0.6)]), c.bar);
        if (c.wingBars) inner += c.wingBars(w2);
        let over = '';
        for (let i = 0; i < 6; i++) { const t = 0.56 + i * 0.075; over += K.ink(K.op([w2(t - 0.05, -0.02), w2(t, 0.14), w2(t + 0.03, 0.3)]), 1.1, C.ink, 'stroke-opacity=".55"'); }
        over += K.ink(K.op([w2(0.06, 0.12), w2(0.28, 0.16), w2(0.5, 0.14)]), 1.1, C.ink, 'stroke-opacity=".45"');
        return K.mass(wf.map(p => w2(p[0], p[1])), col, { sh, off: [-4, -5], inner, over });
      };
      const fold = () => {
        const wl = c.wingLen == null ? 0.35 : c.wingLen;
        const pts = [bw(0.38, -0.26), bw(0.14, -0.44), bw(-0.24, -0.38), bw(-0.56, -0.18), bw(-0.5 - wl, 0.0), bw(-0.54, 0.14), bw(-0.2, 0.26), bw(0.16, 0.2), bw(0.36, -0.02)];
        let inner = K.fill(K.poly([bw(-0.28, -0.7), bw(-1.6, -0.7), bw(-1.6, 0.6), bw(-0.28, 0.6)]), c.prim);
        if (c.bar) inner += K.fill(K.poly([bw(-0.02, -0.7), bw(-0.1, -0.7), bw(-0.1, 0.6), bw(-0.02, 0.6)]), c.bar) + K.fill(K.poly([bw(-0.16, -0.7), bw(-0.24, -0.7), bw(-0.24, 0.6), bw(-0.16, 0.6)]), c.bar);
        if (c.wingBars) inner += c.wingBars(null, bw);
        let over = '';
        [0.12, 0.0, -0.12].forEach((u, r) => { for (let i = 0; i < 3; i++) { const a = bw(u - i * 0.1 + 0.05, -0.2 + r * 0.14), b = bw(u - i * 0.1 - 0.05, -0.2 + r * 0.14); over += K.ink(`M${n(a[0])} ${n(a[1])} Q${n((a[0] + b[0]) / 2)} ${n((a[1] + b[1]) / 2 + 4)} ${n(b[0])} ${n(b[1])}`, 1, C.ink, 'stroke-opacity=".45"'); } });
        [-0.1, 0.02, 0.14].forEach(v => { const a = bw(-0.3, v), b = bw(-0.45 - wl * 0.9, 0.02 + v * 0.2); over += K.ink(`M${n(a[0])} ${n(a[1])} L${n(b[0])} ${n(b[1])}`, 1.1, C.ink, 'stroke-opacity=".55"'); });
        return K.mass(pts, c.wing, { sh: c.wingS, off: [-3, -5], inner, over });
      };
      let s = '';
      // far wing when spread
      if (fly || hop) s += spread(fly ? -118 : -128, A.shade(c.wing, 0.12), A.shade(c.wingS, 0.12));
      // tail
      const T0 = bw(-0.44, 0.02), ta = (c.tail.ang || 0) + ang + (seated ? -10 : 0) + (mood === 'sad' || mood === 'scared' ? 12 : 0);
      const tp = [T0, K.mv([K.rot([-c.tail.len * 0.5, 0], ta)], T0[0], T0[1])[0], K.mv([K.rot([-c.tail.len, 0], ta)], T0[0], T0[1])[0]];
      if (!c.noTail) s += K.limb(tp, c.tail.ws, c.tail.col || c.wing, { sh: A.shade(c.tail.col || c.wing, 0.2), t: 0.8, inner: c.tail.band ? K.bands(tp, c.tail.ws, [{ t: 1.55, col: c.tail.band }]) : '', over: K.ink(K.op([T0, tp[2]]), 1, C.ink, 'stroke-opacity=".4"') });
      if (c.train) s += c.train(P, mood, bw, T0);
      // legs & feet
      const foot = (p, back) => {
        if (c.feet === 'web') return K.mass([[p[0] - 3, p[1] - 3], [p[0] + 13, p[1] - 2], [p[0] + 15, p[1] + 1], [p[0] + 9, p[1] + 1.6], [p[0] - 4, p[1] + 1.5]], c.leg, { ow: 2, off: [-2, -1.5] }) + K.ink(`M${n(p[0])} ${n(p[1] - 1)} l12 -1 M${n(p[0])} ${n(p[1] - 1)} l9 2`, 1, C.ink, 'stroke-opacity=".5"');
        const tl = c.toe || 9;
        let f = K.toe([p, [p[0] + tl * 0.6, p[1] + 1.4], [p[0] + tl, p[1] + 1.5]], c.leg) + K.toe([p, [p[0] + tl * 0.5, p[1] + 0.6], [p[0] + tl * 0.8, p[1] + 2]], c.leg);
        f += K.toe([p, [p[0] - tl * 0.45, p[1] + 1.4], [p[0] - tl * 0.7, p[1] + 1.6]], c.leg);
        return f;
      };
      let legs = '';
      if (!seated) {
        const hips = [bw(0.1, 0.4), bw(-0.02, 0.42)];
        hips.forEach((h, i) => {
          if (fly) { legs += K.limb([h, [h[0] - 10, h[1] + 8]], [c.legW * 1.3, c.legW], c.leg) ; return; }
          const dx = run ? (i ? -12 : 12) : (i ? -2 : 4);
          const f = [h[0] + dx, -1.5];
          const knee = [h[0] + dx * 0.4 - 2, (h[1] + f[1]) / 2];
          legs += K.limb([[h[0], h[1] - 2], knee, f], [c.legW * 1.8, c.legW, c.legW * 0.9], i ? A.shade(c.leg, 0.12) : c.leg, { t: 0.8 }) + foot(f, i);
        });
      }
      s += legs;
      // body (+ neck up to the head)
      const body = [bw(0.46, 0.24), bw(0.53, 0.02), [H[0] + R * 0.35, H[1] + R * 0.8], [H[0] - R * 0.8, H[1] + R * 0.25], bw(0.22, -0.5), bw(-0.08, -0.47), bw(-0.34, -0.3), bw(-0.5, -0.08), bw(-0.48, 0.1), bw(-0.28, 0.34), bw(0.02, 0.5), bw(0.3, 0.44)];
      let marks = c.belly ? K.fill([bw(0.5, 0.05), bw(0.3, 0.6), bw(-0.2, 0.6), bw(-0.2, 0.28), bw(0.2, 0.12)], c.belly) : '';
      if (c.marks) marks += c.marks(bw, H);
      s += K.mass(body, c.body, { sh: c.bodyS, off: [-6, -7], inner: marks, hi: c.hi, hiK: 0.4 });
      const nearSpread = fly || hop || P.wave || P.point;
      if (!nearSpread) s += fold();
      // head (local, centred)
      const hp = (c.headPts || [[-1, 0.15], [-0.85, -0.55], [-0.25, -0.98], [0.45, -0.88], [0.9, -0.35], [0.95, 0.2], [0.6, 0.7], [0, 0.9], [-0.7, 0.72]]).map(p => [p[0] * R, p[1] * R]);
      const open = P.blast || mood === 'laugh' || mood === 'surprised';
      let h = '';
      if (c.headUnder) h += c.headUnder(R, P, mood);
      h += K.mass(hp, c.head || c.body, { sh: c.headS || c.bodyS, off: [-3, -4], inner: c.headMarks ? c.headMarks(R) : '', hi: c.hi, hiK: 0.4 });
      if (c.headOver) h += c.headOver(R, P, mood);
      h += K.beak(c.beak, R, open, c.beakCol, c.beakCol2);
      const ea = c.eyeAt || [0.3, -0.16];
      if (c.eyeRing) h += K.dot(ea[0] * R, ea[1] * R, c.eyeR * 1.6, c.eyeRing);
      h += K.eye(ea[0] * R, ea[1] * R, c.eyeR, mood, { iris: c.iris, lid: c.head || c.body, round: true, bw: 1.3, pr: c.pr || 0.5, sw: 1.4 });
      if (mood === 'sad') h += K.tear(ea[0] * R, ea[1] * R + c.eyeR * 1.4, 0.7);
      if (mood === 'scared') h += K.sweat(-R * 0.9, -R * 1.1, 0.7);
      s += K.g(h, { x: H[0], y: H[1], r: hr });
      // near wing
      if (fly || hop) s += spread(fly ? -104 : -112, c.wing, c.wingS);
      else if (P.wave) s += spread(-70, c.wing, c.wingS);
      else if (P.point) s += spread(-14, c.wing, c.wingS, true);
      let fx = '';
      const top = [H[0], H[1] - R * (c.topK || 1.4)];
      if (P.blast) fx += K.sound(H[0] + R * (c.beak === 'bill' ? 2 : 1.5), H[1] + R * 0.1, 1);
      if (mood === 'sleepy') fx += K.zz(H[0] + R * 0.9, H[1] - R * 1.5, 0.9);
      if (P.think) fx += K.qmark(H[0] + R * 1.3, H[1] - R * 1.5, 0.9);
      s += fx;
      K.lw = lw0;
      return K.out(s, top, { lift, s: sc, floats: fly });
    };


    return K;
  })();

  const K = A.WK;
  const X = {};

  /* ================= HORSE (bay) ================= */
  X.horse = (pose, mood) => {
    const P = K.pose(pose);
    const B = '#98582F', BS = '#6E3A1C', BF = '#7F4726', BL = '#2A1D18', BLS = '#140D0B', WH = '#F6EEE2', HF = '#3A302B';
    const lying = P.sit || P.lie;
    const lift = P.hop ? 20 : P.run ? 8 : P.fly ? 26 : 0;
    const by = lying ? 62 : 0;
    let hr = 0;
    if (P.blast) hr = -34; else if (mood === 'sad') hr = 22; else if (mood === 'sleepy') hr = 16; else if (P.hop) hr = -14; else if (P.think) hr = 10; else if (P.run || P.fly) hr = -8; else if (mood === 'surprised' || mood === 'scared') hr = -10;
    const H = { x: 82, y: -172 + by + (mood === 'sad' ? 14 : 0) + (P.run || P.fly ? 14 : 0), r: hr };
    if (P.run || P.fly) H.x += 10;
    let s = '';
    const hoof = (tip, a) => K.hoof(tip, 11.5, a - 26, HF);
    // ---- tail
    const tb = [-70, -126 + by];
    const flow = P.run || P.fly;
    const tailPts = flow
      ? [[-66, -130], [-84, -134], [-108, -130], [-130, -118], [-146, -112], [-134, -104], [-114, -106], [-92, -112], [-72, -116]]
      : lying ? [[-66, -130], [-82, -126], [-96, -106], [-104, -84], [-112, -66], [-118, -60], [-104, -58], [-92, -76], [-80, -100], [-70, -114]]
        : mood === 'happy' || mood === 'laugh' || P.hop ? [[-66, -130], [-84, -128], [-98, -110], [-104, -86], [-102, -60], [-94, -50], [-88, -62], [-86, -86], [-80, -106], [-70, -116]]
          : [[-66, -130], [-80, -124], [-88, -104], [-90, -80], [-88, -56], [-82, -44], [-76, -54], [-76, -80], [-74, -102], [-68, -116]];
    const tp = tailPts.map(p => [p[0], p[1] + by]);
    const strands = A.ink(K.op(tp.slice(1, 5).map(p => [p[0] + 4, p[1] + 2])), 1.3, '#5A4034') + A.ink(K.op(tp.slice(1, 5).map(p => [p[0] + 8, p[1] + 6])), 1.1, '#5A4034');
    s += K.mass(tp, BL, { sh: BLS, off: [-4, -5], over: strands });
    // ---- legs
    const F = { ls: [28, 34, 26, 9], ws: [26, 17, 12, 10, 9.5] }, Hd = { ls: [30, 30, 34, 9], ws: [36, 21, 13.5, 10.5, 9.5] };
    let fN, fF, hN, hF;
    if (flow) { fN = [30, 70, 60, 70]; fF = [-10, 10, -80, -60]; hN = [-10, -55, -45, -30]; hF = [40, 20, 40, 60]; }
    else if (P.hop) { fN = [20, 40, -60, -30]; fF = [10, 30, -70, -40]; hN = [30, -20, 10, 20]; hF = [36, -10, 16, 30]; }
    else { fN = [-8, 0, 0, 28]; fF = [-2, 3, 2, 28]; hN = [22, -26, 4, 28]; hF = [16, -22, 3, 28]; }
    if (P.wave) fN = [-8, 95, 20, 30];
    if (P.point) fN = [-8, 70, 72, 76];
    if (P.blast && !lying) { fN = [-8, 40, 60, 60]; fF = [-2, 30, 50, 60]; }
    const grounded = !(flow || P.hop);
    const fh = 8.6;
    // bay "points": black from the knee / hock down; white sock on the near hind
    const legO = (sh, gr, bands) => ({ lo: { sh }, foot: hoof, fh, ground: gr ? 0 : null, bands });
    const ptsF = [{ t: 1.75, col: BL }], ptsH = [{ t: 2.1, col: BL }], sock = [{ t: 2.1, col: BL }, { t: 2.75, col: WH }];
    let farLegs = '', nearLegs = '';
    if (lying) {
      farLegs += K.limb([[30, -70 + by], [52, -14], [26, -8]], [20, 12, 10], BF, { sh: BS }) + hoof([20, -9], -96 + 26);
      farLegs += K.limb([[-50, -70], [-22, -40], [-54, -14], [-14, -10]], [36, 20, 13, 10], B, { sh: BS }) + hoof([-10, -10], 90 + 26);
      farLegs += K.limb([[40, -62], [62, -12], [34, -7]], [24, 13, 10], B, { sh: BS }) + hoof([28, -7], -96 + 26);
    } else {
      farLegs += K.leg([30, -102], F.ls, fF, F.ws, BF, legO(BS, grounded, ptsF)).svg;
      farLegs += K.leg([-42, -112], Hd.ls, hF, Hd.ws, BF, legO(BS, grounded, ptsH)).svg;
      farLegs += K.leg([-56, -114], Hd.ls, hN, Hd.ws, B, legO(BS, grounded, sock)).svg;
      farLegs += K.leg([42, -100], F.ls, fN, F.ws, B, legO(BS, grounded && !P.wave && !P.point && !P.blast, ptsF)).svg;
    }
    // ---- body + neck
    const nt = K.tp([-8, 8], H), th = K.tp([-8, 42], H);
    const bodyPts = [[-74, -124], [-60, -134], [-36, -128], [-8, -124], [18, -128], [32, -134], [52, -156], nt, th, [66, -120], [60, -98], [44, -80], [16, -74], [-16, -76], [-44, -82], [-66, -96], [-80, -110]]
      .map((p, i) => (i === 7 || i === 8) ? p : [p[0], p[1] + by * (i === 6 ? 1 : 1)]);
    const crest = K.op([[30, -134 + by], [52, -156 + by], K.tp([-8, 2], H)]);
    const muscle = A.ink(`M${44} ${-128 + by} q-12 22 -4 48 M${-62} ${-128 + by} q28 10 22 50 M${-10} ${-76 + by} q10 -8 26 -4`, 1.4, C.ink, 'stroke-opacity=".55"');
    s += farLegs;
    s += K.mass(bodyPts, B, { sh: BS, off: [-9, -12], ht: 0.4, hi: '#C27A48', hiK: 0.35, hiOp: 0.6, over: muscle });
    // mane (hangs on the near side of the crest)
    const c0 = [30, -136 + by], c1 = [50, -158 + by], c2 = K.tp([-6, 0], H);
    const mane = [c0, [c0[0] + 12, c0[1] - 12], c1, [c1[0] + 12, c1[1] - 10], c2, K.tp([2, -4], H), K.tp([0, 14], H), [c1[0] + 16, c1[1] + 12], [c1[0] + 8, c1[1] + 20], [c1[0] - 2, c1[1] + 14], [c0[0] + 14, c0[1] + 10], [c0[0] + 4, c0[1] + 12], [c0[0] - 6, c0[1] + 4]];
    const flowM = flow ? mane.map((p, i) => i > 5 ? [p[0] - 10, p[1] - 4] : p) : mane;
    s += K.mass(flowM, BL, { sh: BLS, off: [-3, -4], over: A.ink(K.op([[c0[0] + 2, c0[1] + 2], [c1[0] + 4, c1[1] + 4], K.tp([-4, 8], H)]), 1.1, '#5A4034') });
    // ---- head (local: origin at poll)
    let h = '';
    const earR = mood === 'surprised' ? -10 : (mood === 'scared' || mood === 'angry') ? 40 : mood === 'sad' || mood === 'sleepy' ? 30 : P.hop ? -8 : 0;
    const ear = (dx, col) => K.g(K.mass([[-4, 4], [-6, -8], [-5, -20], [0, -26], [5, -16], [6, -4], [4, 6]], col, { off: [-2, -3], ow: 2.4, inner: K.fill([[-2, -4], [-1, -16], [2, -20], [3, -6]], BL, 'fill-opacity=".7"') }), { x: dx, y: 0, r: earR });
    h += ear(6, BF);
    const open = P.blast || mood === 'laugh';
    const headPts = open
      ? [[-6, -2], [8, 2], [22, 16], [36, 32], [46, 46], [52, 56], [51, 64], [44, 64], [46, 72], [38, 76], [30, 70], [22, 60], [8, 54], [-6, 46], [-13, 32], [-12, 14]]
      : [[-6, -2], [8, 2], [22, 16], [36, 32], [46, 46], [52, 56], [51, 64], [44, 70], [34, 70], [22, 60], [8, 54], [-6, 46], [-13, 32], [-12, 14]];
    const blaze = K.fill([[8, 4], [14, 6], [30, 26], [44, 46], [48, 58], [44, 58], [36, 44], [20, 22], [10, 12]], WH);
    const muzz = K.fill([[40, 52], [50, 50], [58, 62], [52, 80], [34, 76]], '#4A3028', 'fill-opacity=".5"');
    h += K.mass(headPts, B, { sh: BS, off: [-5, -6], hi: '#C27A48', hiK: 0.4, inner: blaze + muzz, over: A.ink('M2 42 q10 8 18 14', 1.4, C.ink, 'stroke-opacity=".55"') + A.ink('M-4 26 q8 16 22 22', 1.3, C.ink, 'stroke-opacity=".4"') });
    h += ear(-2, B);
    // forelock
    h += K.mass([[-6, -4], [4, -6], [10, 0], [12, 7], [8, 6], [4, 10], [0, 5], [-4, 3]], BL, { sh: BLS, off: [-2, -2], ow: 2.2 });
    h += `<path d="M44 56 q5 -5 8 2 q-3 5 -8 -2 Z" fill="${BLS}" stroke="${C.ink}" stroke-width="1.4"/>`;
    if (open) {
      h += K.mass([[34, 64], [44, 64], [50, 65], [46, 72], [38, 72]], '#5A1B22', { ow: 1.8, sh: false });
      h += `<path d="M40 64.5 h9 v2.5 h-9 Z" fill="#F4EEDC" stroke="${C.ink}" stroke-width="1"/>`;
    } else if (mood === 'sad' || mood === 'scared') h += A.ink('M34 68 q6 -3 12 0', 1.7);
    else if (mood === 'angry' || mood === 'determined') h += A.ink('M33 67 l14 1', 1.8);
    else h += A.ink('M32 66 q7 4 14 1', 1.7);
    h += K.eye(19, 21, 6, mood, { iris: '#2E1A10', lid: B, lash: true, bw: 1.6, look: 1.2 });
    if (mood === 'sad') h += K.tear(16, 30, 0.9);
    if (mood === 'scared') h += K.sweat(-10, -10, 0.9);
    // bridle-free, just a halter strap hint? keep it natural
    let fx = '';
    if (P.blast) fx += K.sound(K.tp([56, 60], H)[0] + 8, K.tp([56, 60], H)[1] - 6, 1.3);
    if (mood === 'sleepy') fx += K.zz(H.x + 30, H.y - 34, 1.1);
    if (P.think) fx += K.qmark(H.x + 34, H.y - 30, 1.1);
    s += K.g(h, H) + fx;
    const top = K.tp([0, -30], H);
    return K.out(s, [top[0], Math.min(top[1], -60)], { lift, rot: flow ? -3 : P.hop ? -8 : 0, pivot: [-60, 0] });
  };

  /* ================= generic hoofed rig (goat, deer, camel) =================
     c: {k, col, sh, far, farSh, hoofCol, hoofW, cloven, pa, lieDy, foot, fh, F:{p0,p0f,ls,ws}, Hd:{p0,p0f,ls,ws},
         H0(P, mood, by) -> {x,y}, body(H, by) -> pts, marks(by), over(by), tail(P, mood, by), head(P, mood), after(P, mood, H, by),
         lie:{fx, hx}, top:[lx, ly] (anchor in head-local coords)} */
  const hoofed = (c, pose, mood) => {
    const P = K.pose(pose), lying = P.sit || P.lie, flow = P.run || P.fly, k = c.k;
    const lift = (P.hop ? 22 : P.run ? 10 : P.fly ? 30 : 0) * k;
    const by = lying ? c.lieDy : 0;
    let hr = 0;
    if (P.blast) hr = -26; else if (mood === 'sad') hr = 18; else if (mood === 'sleepy') hr = 14; else if (P.hop) hr = -12; else if (P.think) hr = 10; else if (flow) hr = -6; else if (mood === 'surprised' || mood === 'scared') hr = -8;
    const H = Object.assign({ r: hr }, c.H0(P, mood, by));
    if (mood === 'sad') H.y += 8 * k;
    const pa = c.pa, fh = c.fh || c.hoofW * 0.75;
    const foot = c.foot || ((tip, a) => K.hoof(tip, c.hoofW, a - pa, c.hoofCol, { cloven: c.cloven }));
    let s = c.tail(P, mood, by);
    let fN, fF, hN, hF;
    if (flow) { fN = [30, 70, 60, 70]; fF = [-10, 10, -80, -60]; hN = [-10, -55, -45, -30]; hF = [40, 20, 40, 60]; }
    else if (P.hop) { fN = [20, 40, -60, -30]; fF = [10, 30, -70, -40]; hN = [30, -20, 10, 20]; hF = [36, -10, 16, 30]; }
    else { fN = [-8, 0, 0, pa]; fF = [-2, 3, 2, pa]; hN = [26, -32, 4, pa]; hF = [20, -28, 3, pa]; }
    if (P.wave) fN = [-8, 95, 20, 30];
    if (P.point) fN = [-8, 70, 72, 76];
    const gr = !(flow || P.hop);
    const lo = (sh, g) => ({ lo: { sh }, foot, fh, ground: g ? 0 : null });
    let legs = '', over = '';
    if (lying) {
      const { fx, hx } = c.lie;
      legs += K.limb([[fx - 8, -34 * k], [fx + 12 * k, -8 * k], [fx - 12 * k, -7 * k]], [16 * k, 10 * k, 8.5 * k], c.far, { sh: c.farSh }) + foot([fx - 16 * k, -7 * k], -96 + pa);
      over += K.mass([[hx - 26 * k, -12 * k], [hx - 22 * k, -40 * k], [hx + 2 * k, -48 * k], [hx + 16 * k, -30 * k], [hx + 10 * k, -8 * k], [hx - 14 * k, -4 * k]], c.col, { sh: c.sh, off: [-6 * k, -8 * k] });
      over += K.limb([[hx - 6 * k, -10 * k], [hx + 34 * k, -8 * k]], [12 * k, 9 * k], c.col, { sh: c.sh }) + foot([hx + 38 * k, -8 * k], 90 + pa);
      over += K.limb([[fx + 4, -30 * k], [fx + 22 * k, -9 * k], [fx + 44 * k, -7 * k]], [18 * k, 11 * k, 9 * k], c.col, { sh: c.sh }) + foot([fx + 48 * k, -7 * k], 100 + pa);
    } else {
      legs += K.leg(c.F.p0f, c.F.ls, fF, c.F.ws, c.far, lo(c.farSh, gr)).svg;
      legs += K.leg(c.Hd.p0f, c.Hd.ls, hF, c.Hd.ws, c.far, lo(c.farSh, gr)).svg;
      legs += K.leg(c.Hd.p0, c.Hd.ls, hN, c.Hd.ws, c.col, lo(c.sh, gr)).svg;
      const nf = K.leg(c.F.p0, c.F.ls, fN, c.F.ws, c.col, lo(c.sh, gr && !P.wave && !P.point)).svg;
      if (P.wave || P.point) over += nf; else legs += nf;
    }
    s += legs;
    s += K.mass(c.body(H, by), c.col, { sh: c.sh, off: [-9 * k, -12 * k], ht: 0.4, hi: c.hi, hiK: 0.35, hiOp: 0.55, inner: c.marks ? c.marks(by, P) : '', over: c.over ? c.over(by) : '' });
    if (c.after) s += c.after(P, mood, H, by);
    s += over;
    s += K.g(c.head(P, mood), H);
    const top = K.tp(c.top, H);
    let fx = '';
    if (P.blast) { const m = K.tp(c.mouth, H); fx += K.sound(m[0] + 4, m[1], 1.2); }
    if (mood === 'sleepy') fx += K.zz(top[0] + 14, top[1] + 4, 1);
    if (P.think) fx += K.qmark(top[0] + 20, top[1] + 2, 1);
    s += fx;
    return K.out(s, [top[0], Math.min(top[1], -40)], { lift, rot: flow ? -3 : P.hop ? -8 : 0, pivot: [-40 * k, 0] });
  };
  const earRot = (mood, P) => mood === 'surprised' ? -18 : (mood === 'scared' || mood === 'angry') ? 30 : mood === 'sad' || mood === 'sleepy' ? 30 : P.hop ? -10 : 0;
  const mouthLine = (mood, open, closed) => mood === 'sad' || mood === 'scared' ? K.ink(closed.sad, 1.6) : mood === 'angry' || mood === 'determined' ? K.ink(closed.flat, 1.7) : K.ink(closed.smile, 1.6);

  /* ================= GOAT (Beetal-type: russet with white, long ears, beard) ================= */
  X.goat = (pose, mood) => {
    const B = '#B8743F', BS = '#8A5024', WH = '#F4EEE2', HR = '#9A8C78';
    return hoofed({
      k: 0.62, col: B, sh: BS, far: '#9C6134', farSh: '#724120', hoofCol: '#3A302B', hoofW: 7.8, cloven: true, pa: 24, lieDy: 34, hi: '#D69A62',
      F: { p0: [26, -46], p0f: [18, -46], ls: [12, 18, 14, 5], ws: [17, 9.5, 7.5, 6.8, 6.5] },
      Hd: { p0: [-40, -52], p0f: [-32, -52], ls: [16, 17, 16, 5], ws: [23, 12.5, 8, 7, 6.5] },
      lie: { fx: 22, hx: -34 },
      H0: (P, mood, by) => ({ x: (P.run || P.fly) ? 50 : 40, y: -80 + by + ((P.run || P.fly) ? 8 : 0) }),
      body: (H, by) => [[-54, -58], [-48, -69], [-26, -67], [-2, -65], [16, -69], [26, -74], K.tp([-4, 4], H), K.tp([2, 26], H), [40, -50], [34, -38], [20, -34], [0, -33], [-22, -35], [-38, -40], [-50, -46], [-56, -52]].map((p, i) => i === 6 || i === 7 ? p : [p[0], p[1] + by]),
      marks: (by) => K.fill(K.mv([[14, -72], [30, -76], [40, -60], [34, -44], [22, -52]], 0, by), WH) + K.fill(K.mv([[-30, -38], [0, -36], [16, -32], [0, -26], [-30, -30]], 0, by), WH),
      over: (by) => K.ink(`M-44 ${-66 + by} q14 6 12 28 M28 ${-64 + by} q-6 12 -2 26`, 1.3, C.ink, 'stroke-opacity=".5"') + K.fur([[-30, -62 + by, 3, 6], [-14, -60 + by, 3, 6], [2, -60 + by, 3, 6], [-38, -56 + by, 3, 5]], BS, 1.2, 0.7),
      tail: (P, mood, by) => { const t0 = [-50, -66 + by]; const pts = mood === 'sad' || mood === 'scared' ? [t0, [-58, -58 + by], [-60, -50 + by]] : [t0, [-58, -76 + by], [-58, -86 + by]]; return K.limb(pts, [7, 6, 3], B, { sh: BS }); },
      mouth: [36, 34], top: [0, -26],
      head: (P, mood) => {
        const open = P.blast || mood === 'laugh' || mood === 'surprised';
        let h = '';
        // horns sweeping back
        h += K.limb([[4, -2], [-2, -12], [-12, -20], [-20, -18]], [6.5, 5, 3.5, 2], '#A89A84', { sh: '#7C6E5A', ow: 2.2, over: K.ink('M1 -8 l4 -1 M-3 -13 l4 -2 M-9 -17 l3 -3', 1, C.ink, 'stroke-opacity=".6"') });
        const pts = open
          ? [[0, -3], [9, -1], [19, 6], [28, 16], [34, 25], [37, 31], [35, 35], [36, 41], [30, 43], [22, 36], [12, 30], [2, 24], [-5, 14], [-5, 4]]
          : [[0, -3], [9, -1], [19, 6], [28, 16], [34, 25], [37, 31], [35, 36], [28, 38], [20, 34], [10, 28], [1, 23], [-5, 13], [-5, 4]];
        h += K.mass(pts, B, { sh: BS, off: [-4, -5], hi: '#D69A62', hiK: 0.4, inner: K.fill([[8, 0], [14, 2], [28, 16], [36, 30], [32, 32], [22, 18], [10, 6]], WH) + K.fill([[30, 28], [38, 30], [38, 40], [30, 40]], '#E5B7A6', 'fill-opacity=".7"') });
        // beard
        h += K.mass(open ? [[26, 40], [32, 42], [30, 54], [26, 58], [23, 48]] : [[24, 36], [30, 37], [29, 50], [25, 55], [22, 44]], WH, { sh: '#D9D0C0', off: [-2, -2], ow: 2 });
        h += `<path d="M33 28 q3 -2 4 1" fill="none" stroke="${C.ink}" stroke-width="1.4" stroke-linecap="round"/>`;
        if (open) h += K.mass([[26, 35], [31, 35], [35.5, 36], [33, 40], [28, 40]], '#5A1B22', { ow: 1.6, sh: false, inner: K.fill([[29, 38], [33, 38], [32, 40], [29, 40]], '#E27E8C') });
        else h += mouthLine(mood, open, { sad: 'M24 36 q5 -2 10 0', flat: 'M24 35 l11 0.5', smile: 'M23 34 q6 4 12 1' });
        // long floppy ear
        h += K.g(K.mass([[2, 2], [-3, 6], [-8, 17], [-10, 28], [-6, 31], [-2, 21], [3, 9]], B, { sh: BS, off: [-2, -3], ow: 2.3, inner: K.fill([[0, 8], [-4, 17], [-7, 26], [-4, 27], [0, 17]], '#E9B9A2', 'fill-opacity=".6"') }), { x: -4, y: 4, r: -earRot(mood, P) * 0.6 });
        h += K.eye(14, 11, 4.4, mood, { iris: '#D9A53A', pupil: 'bar', lid: B, bw: 1.3, look: 0.6, lash: true });
        if (mood === 'sad') h += K.tear(14, 18, 0.7);
        if (mood === 'scared') h += K.sweat(-6, -16, 0.7);
        return h;
      },
    }, pose, mood);
  };

  /* ================= DEER (chital: spotted deer with lyre antlers) ================= */
  X.deer = (pose, mood) => {
    const B = '#C4793B', BS = '#93531F', SP = '#FFF3DE', BL = '#F8ECDA', DK = '#6E3A18';
    return hoofed({
      k: 0.85, col: B, sh: BS, far: '#A8662F', farSh: '#7C451A', hoofCol: '#2E2622', hoofW: 8, cloven: true, pa: 24, lieDy: 50, hi: '#E09A5C',
      F: { p0: [34, -64], p0f: [26, -64], ls: [16, 28, 24, 6], ws: [20, 11, 7.5, 6.8, 6.5] },
      Hd: { p0: [-48, -74], p0f: [-40, -74], ls: [24, 24, 28, 6], ws: [28, 14.5, 8.5, 7, 6.5] },
      lie: { fx: 30, hx: -44 },
      H0: (P, mood, by) => (P.run || P.fly) ? { x: 84, y: -112 + by } : { x: 64, y: -132 + by },
      body: (H, by) => [[-64, -78], [-58, -92], [-32, -90], [-4, -88], [18, -94], [30, -100], K.tp([-6, 6], H), K.tp([0, 30], H), [48, -72], [42, -58], [20, -54], [-6, -54], [-30, -56], [-48, -62], [-62, -66], [-68, -72]].map((p, i) => i === 6 || i === 7 ? p : [p[0], p[1] + by]),
      marks: (by) => {
        let m = K.fill(K.mv([[-40, -60], [0, -58], [30, -56], [30, -48], [-40, -50]], 0, by), BL);
        m += K.fill(K.mv([[-66, -90], [-30, -93], [10, -92], [28, -100], [30, -96], [10, -88], [-30, -88], [-66, -86]], 0, by), DK, 'fill-opacity=".45"');
        const rows = [[-86, [-50, -38, -26, -14, -2, 10]], [-78, [-56, -44, -32, -20, -8, 4, 16]], [-70, [-50, -38, -26, -14, -2, 10, 22]]];
        rows.forEach(([y, xs], r) => xs.forEach((x, i) => { m += `<ellipse cx="${n(x + (r % 2) * 3)}" cy="${n(y + by + (i % 2) * 1.5)}" rx="3.2" ry="2.4" fill="${SP}"/>`; }));
        return m;
      },
      over: (by) => K.ink(`M-52 ${-90 + by} q18 6 14 32 M36 ${-88 + by} q-8 14 -2 30`, 1.3, C.ink, 'stroke-opacity=".5"'),
      tail: (P, mood, by) => { const t0 = [-64, -88 + by]; const low = mood === 'sad' || mood === 'scared'; const pts = (P.run || P.fly || P.hop) && !low ? [t0, [-72, -96 + by], [-76, -104 + by]] : [t0, [-72, -80 + by], [-74, -70 + by]]; return K.limb(pts, [10, 9, 6], (P.run || P.hop) && !low ? SP : DK, { sh: '#3E2010' }); },
      mouth: [40, 40], top: [0, -48],
      after: (P, mood, H, by) => K.mass([K.tp([4, 22], H), K.tp([14, 30], H), K.tp([8, 44], H), K.tp([-2, 38], H)], SP, { sh: false, ow: 0 }),
      head: (P, mood) => {
        const open = P.blast || mood === 'laugh' || mood === 'surprised';
        let h = '';
        const antler = (dx, col, sh) => {
          let a = K.limb([[dx + 2, -2], [dx - 3, -18], [dx - 8, -32], [dx - 4, -46]], [5.6, 4.8, 4, 2.8], col, { sh, ow: 2.2 });
          a += K.limb([[dx, -8], [dx + 8, -14], [dx + 13, -16]], [4, 3.2, 2.2], col, { sh, ow: 2 });
          a += K.limb([[dx - 7, -30], [dx - 1, -36], [dx + 4, -40]], [3.6, 3, 2], col, { sh, ow: 2 });
          return a;
        };
        h += antler(9, '#B8976A', '#8E7048');
        const ear = K.mass([[2, 0], [-8, -9], [-21, -13], [-28, -9], [-20, -1], [-6, 5]], B, { sh: BS, off: [-2, -3], ow: 2.3, inner: K.fill([[-4, -2], [-12, -8], [-22, -9], [-18, -3], [-6, 2]], '#F3D6C2') });
        h += K.g(ear, { x: -2, y: 6, r: earRot(mood, P) });
        const pts = open
          ? [[0, -3], [11, 1], [21, 10], [31, 22], [39, 32], [41, 38], [37, 41], [38, 47], [31, 48], [24, 40], [14, 32], [4, 26], [-5, 17], [-6, 5]]
          : [[0, -3], [11, 1], [21, 10], [31, 22], [39, 32], [41, 38], [37, 42], [29, 43], [20, 36], [8, 29], [-3, 21], [-6, 8]];
        h += K.mass(pts, B, { sh: BS, off: [-4, -5], hi: '#E09A5C', hiK: 0.4, inner: K.fill([[24, 30], [34, 30], [42, 40], [36, 46], [26, 40]], BL) + K.fill([[16, 12], [22, 16], [20, 22], [14, 18]], DK, 'fill-opacity=".45"') });
        h += antler(1, '#E3C99A', '#B39064');
        h += K.mass([[36, 34], [41, 35], [42, 39], [38, 40]], '#241C18', { ow: 1.4, sh: false });
        if (open) h += K.mass([[28, 41], [34, 41], [38, 42], [35, 46], [30, 46]], '#5A1B22', { ow: 1.6, sh: false });
        else h += mouthLine(mood, open, { sad: 'M29 42 q5 -2 9 0', flat: 'M28 41 l10 0.5', smile: 'M27 40 q6 4 11 1' });
        h += K.eye(15, 13, 5.2, mood, { iris: '#2A1A10', lid: B, lash: true, bw: 1.4, look: 1.2 });
        if (mood === 'sad') h += K.tear(15, 21, 0.8);
        if (mood === 'scared') h += K.sweat(-10, -18, 0.8);
        return h;
      },
    }, pose, mood);
  };

  /* ================= CAMEL (dromedary, with a Rajasthani tasselled strap) ================= */
  X.camel = (pose, mood) => {
    const B = '#D3A36A', BS = '#A87540', BF = '#B98C57', BL = '#E9C993', PAD = '#8E6E4C';
    const foot = (tip, a) => { const r = -(a - 20); const at = q => { const t = K.rot(q, r); return [tip[0] + t[0], tip[1] + t[1]]; }; return K.mass(K.poly([[-8, -2], [9, -3], [12, 4], [8, 7], [-9, 7], [-11, 3]].map(at)), PAD, { ow: 2.3, off: [-3, -3] }) + K.line(at([2, 1])[0], at([2, 1])[1], at([2, 7])[0], at([2, 7])[1], 1.2); };
    return hoofed({
      k: 1, col: B, sh: BS, far: BF, farSh: '#8E6232', hoofCol: PAD, hoofW: 9, pa: 20, lieDy: 78, foot, fh: 7, hi: BL,
      F: { p0: [38, -92], p0f: [28, -92], ls: [20, 34, 30, 8], ws: [24, 12, 9.5, 8.5, 9] },
      Hd: { p0: [-46, -100], p0f: [-36, -100], ls: [26, 32, 36, 8], ws: [30, 15, 10, 8.5, 9] },
      lie: { fx: 34, hx: -44 },
      H0: (P, mood, by) => (P.run || P.fly) ? { x: 112, y: -136 + by } : { x: 98, y: -156 + by * 0.9 },
      body: (H, by) => [[-66, -104], [-58, -122], [-40, -132], [-24, -152], [-6, -164], [12, -154], [26, -134], [40, -124], [60, -112], [74, -114], [84, -130], K.tp([-4, 0], H), K.tp([0, 18], H), [84, -104], [70, -88], [52, -88], [46, -80], [20, -78], [-10, -78], [-40, -82], [-58, -90]].map((p, i) => i === 11 || i === 12 ? p : [p[0], p[1] + by]),
      marks: (by) => K.fill(K.mv([[-30, -150], [-6, -166], [16, -152], [4, -148], [-18, -144]], 0, by), BS, 'fill-opacity=".35"'),
      over: (by) => K.ink(`M-50 ${-120 + by} q16 8 14 34 M40 ${-116 + by} q-8 14 -4 30`, 1.4, C.ink, 'stroke-opacity=".5"') + K.fur([[-20, -158 + by, -2, -6], [-10, -164 + by, 0, -6], [0, -164 + by, 2, -6], [8, -158 + by, 3, -5]], BS, 1.4, 0.9),
      tail: (P, mood, by) => { const t0 = [-64, -114 + by]; const pts = P.run || P.fly ? [t0, [-80, -112 + by], [-94, -108 + by]] : [t0, [-72, -96 + by], [-74, -78 + by]]; const e = pts[2]; return K.limb(pts, [6, 4, 3], B, { sh: BS }) + K.mass([[e[0] - 4, e[1] - 2], [e[0] + 4, e[1] - 2], [e[0] + 5, e[1] + 8], [e[0], e[1] + 14], [e[0] - 5, e[1] + 8]], '#6E4A2A', { ow: 2, off: [-2, -2] }); },
      after: (P, mood, H, by) => {
        // decorated neck strap with tassels
        const a = [58, -110 + by], b = [72, -90 + by];
        let t = K.ink(`M${a[0]} ${a[1]} Q${a[0] + 12} ${a[1] + 6} ${b[0]} ${b[1]}`, 5.5, C.ink) + K.ink(`M${a[0]} ${a[1]} Q${a[0] + 12} ${a[1] + 6} ${b[0]} ${b[1]}`, 3.2, '#D8323A');
        [0.3, 0.6, 0.9].forEach((q, i) => { const p = K.qpt(a, [a[0] + 12, a[1] + 6], b, q); t += K.mass([[p[0] - 2, p[1]], [p[0] + 2, p[1]], [p[0] + 3, p[1] + 8], [p[0] - 3, p[1] + 8]], i % 2 ? '#FFD400' : '#1D5BD8', { ow: 1.4, sh: false }); });
        return t;
      },
      mouth: [44, 26], top: [4, -26],
      head: (P, mood) => {
        const open = P.blast || mood === 'laugh' || mood === 'surprised';
        let h = '';
        h += K.g(K.mass([[2, 2], [-4, -4], [-9, -6], [-10, -1], [-4, 5]], B, { sh: BS, off: [-2, -2], ow: 2.2, inner: K.fill([[-2, 0], [-6, -3], [-7, 0]], '#7A5634') }), { x: 0, y: 2, r: earRot(mood, P) * 0.6 });
        const pts = open
          ? [[0, -3], [12, -3], [24, 1], [36, 7], [43, 13], [46, 19], [44, 24], [37, 25], [38, 32], [30, 36], [22, 32], [12, 26], [2, 20], [-5, 12], [-5, 2]]
          : [[0, -3], [12, -3], [24, 1], [36, 7], [43, 13], [46, 19], [44, 25], [38, 28], [32, 27], [28, 31], [19, 30], [9, 25], [0, 19], [-5, 11], [-5, 2]];
        h += K.mass(pts, B, { sh: BS, off: [-4, -5], hi: BL, hiK: 0.4, inner: K.fill([[30, 8], [44, 12], [48, 24], [40, 32], [30, 26]], BL) });
        h += K.ink('M40 12 q3 2 2 5', 1.5);
        if (open) h += K.mass([[30, 25], [38, 25], [44, 25], [40, 30], [33, 31]], '#5A1B22', { ow: 1.6, sh: false });
        else h += mouthLine(mood, open, { sad: 'M30 28 q6 -2 12 0', flat: 'M30 27 l13 0', smile: 'M29 26 q7 4 14 0' });
        // halter
        h += K.ink('M8 -2 L10 24 M10 10 L40 8', 2.4, '#D8323A') ;
        h += K.eye(12, 6, 5, mood, { iris: '#2E1C10', lid: B, lash: true, bw: 1.6, look: 1.1 });
        if (mood === 'sad') h += K.tear(12, 13, 0.8);
        if (mood === 'scared') h += K.sweat(-8, -14, 0.8);
        return h;
      },
    }, pose, mood);
  };

  /* ================= TIGER (shared carnivore rig in the kit) ================= */
  const TIGER = { kind: 'tiger', s: 0.94, fur: '#E7862B', furS: '#B55C16', light: '#FFF4E4', dark: '#1E1714', nose: '#D98078', iris: '#E2B227', R: 29, stripes: true, legStripes: true, tailRings: true, tailW: 12, tailTaper: 0.25, eyeR: 5.2 };
  X.tiger = (pose, mood) => K.carn(TIGER, pose, mood);


  /* ================= DUCK (mallard drake) ================= */
  X.duck = (pose, mood) => K.bird({
    s: 1, L: 60, D: 30, R: 12, ang: -4, legH: 7, neck: [8, -16],
    body: '#C9CCD0', bodyS: '#9EA3AB', hi: '#FFFFFF',
    wing: '#A89A86', wingS: '#7D705E', prim: '#6E6254', wingLen: 0.25, span: 78,
    wingBars: (w2, bw) => w2 ? K.fill(K.poly([w2(0.34, -0.4), w2(0.5, -0.4), w2(0.5, 0.6), w2(0.34, 0.6)]), '#2E5FC0') : K.fill(K.poly([bw(-0.14, -0.1), bw(-0.3, -0.1), bw(-0.3, 0.2), bw(-0.14, 0.2)]), '#2E5FC0'),
    tail: { len: 16, ws: [14, 9, 5], ang: -26, col: '#F2F0EC' },
    head: '#1F7A4E', headS: '#11563A', beak: 'bill', beakCol: '#E8C22E', beakCol2: '#C99A1A', iris: '#3A2210', eyeR: 3.2,
    leg: '#F08A24', legW: 4, feet: 'web',
    marks: (bw, H) => K.fill([[H[0] - 14, H[1]], [H[0] + 10, H[1] + 6], bw(0.56, -0.04), bw(0.4, -0.32), bw(0.28, -0.5)], '#1F7A4E') +
      K.fill([bw(0.58, 0.0), bw(0.42, -0.34), bw(0.3, -0.2), bw(0.24, 0.2), bw(0.36, 0.6), bw(0.6, 0.3)], '#7A4632') +
      K.fill([bw(0.44, -0.36), bw(0.54, -0.1), bw(0.5, -0.02), bw(0.38, -0.3)], '#FFFFFF') +
      K.fill([bw(0.2, -0.52), bw(-0.5, -0.3), bw(-0.5, -0.05), bw(0.1, -0.3)], '#8C8272', 'fill-opacity=".7"') +
      K.ink(`M${n(bw(-0.5, -0.1)[0])} ${n(bw(-0.5, -0.1)[1])} q-4 -8 2 -10`, 2.2),
  }, pose, mood);

  /* ================= PIGEON (rock dove) ================= */
  X.pigeon = (pose, mood) => K.bird({
    s: 1, L: 42, D: 26, R: 10, ang: -14, legH: 9, neck: [4, -12],
    body: '#8F98AC', bodyS: '#6B7387', hi: '#C3C9D6',
    wing: '#A3ABBC', wingS: '#7C8497', prim: '#4E5465', bar: '#2E3240', wingLen: 0.42, span: 60,
    tail: { len: 26, ws: [11, 14, 16], ang: 8, col: '#7F889C', band: '#2E3240' },
    head: '#7E879B', headS: '#5F677A', beak: 'short', beakCol: '#3A3A44', iris: '#E8762A', eyeR: 2.8, eyeRing: '#C9CCD3',
    leg: '#D9636F', legW: 3, feet: 'perch', toe: 8,
    marks: (bw, H) => K.fill([[H[0] - 9, H[1] + 2], [H[0] + 6, H[1] + 8], bw(0.54, 0.0), bw(0.36, -0.1), bw(0.24, -0.46)], '#4FA88A') +
      K.fill([bw(0.52, 0.02), bw(0.42, -0.1), bw(0.3, 0.0), bw(0.36, 0.26), bw(0.5, 0.2)], '#8E5AA8', 'fill-opacity=".85"'),
  }, pose, mood);


  Object.keys(X).forEach(k => { A.EXTRA[k] = (pose, mood, opt) => X[k](pose || 'stand', mood || 'happy', opt || {}); });
})();
