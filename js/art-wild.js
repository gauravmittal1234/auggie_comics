/* Auggie Comics — realistic "nature-guide" animals, inked for comics.
   Overrides the cartoon animals in art-chars.js via A.EXTRA: cat, dog, parrot, monkey, cow, rabbit, turtle,
   fish, frog, owl, lion, penguin, dolphin, peacock and bholu (a baby elephant).
   Local frame: feet at y = 0, facing right (+x), up = -y. Each returns {svg, anchor, floats}. */
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
      else if (P.wave) s += spread(-128, c.wing, c.wingS);
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

  /* ================= COW (Holstein) ================= */
  X.cow = (pose, mood) => {
    const P = K.pose(pose);
    const W = '#F7F2E8', WS = '#D6CCBF', WF = '#E4DBCE', WFS = '#C4B9AB', BK = '#2F2B2C', PK = '#EBAAA4', HN = '#EFE3C6', HF = '#3E3636';
    const lying = P.sit || P.lie;
    const lift = P.hop ? 16 : P.run ? 6 : P.fly ? 22 : 0;
    const by = lying ? 40 : 0;
    const restHead = P.lie && mood === 'sleepy';
    let hr = 0;
    if (P.blast) hr = -30; else if (mood === 'sad') hr = 18; else if (mood === 'sleepy') hr = 12; else if (P.hop) hr = -12; else if (P.think) hr = 10; else if (mood === 'surprised' || mood === 'scared') hr = -8;
    if (restHead) hr = 26;
    const H = restHead ? { x: 66, y: -88, r: hr } : { x: 60, y: -110 + by + (mood === 'sad' ? 6 : 0) + (P.blast ? -6 : 0), r: hr };
    let s = '';
    const hoof = (tip, a) => K.hoof(tip, 12, a - 22, HF, { cloven: true });
    // ---- tail
    const tb = [-78, -96 + by];
    let tpts;
    if (P.run || P.fly) tpts = [tb, [-98, -94 + by], [-116, -84 + by], [-128, -86 + by]];
    else if (lying) tpts = [tb, [-94, -70 + by], [-106, -48 + by], [-118, -44 + by]];
    else if (P.hop || mood === 'happy' || mood === 'laugh') tpts = [tb, [-94, -82], [-104, -62], [-106, -42]];
    else tpts = [tb, [-86, -72], [-88, -48], [-87, -30]];
    const tend = tpts[tpts.length - 1];
    const tail = K.limb(tpts, [6, 4.2, 3.6, 3.2], W, { sh: WS }) + K.mass([[tend[0] - 5, tend[1] - 3], [tend[0] + 5, tend[1] - 3], [tend[0] + 6, tend[1] + 10], [tend[0], tend[1] + 18], [tend[0] - 6, tend[1] + 10]], BK, { off: [-2, -3], ow: 2.2 });
    // ---- legs (drawn under the body)
    const F = { ls: [34, 28, 9], ws: [27, 15, 12.5, 11] }, Hd = { ls: [28, 28, 26, 9], ws: [34, 19, 13.5, 11.5, 11] };
    let fN, fF, hN, hF;
    if (P.run || P.fly) { fN = [45, 25, 35]; fF = [-8, -78, -50]; hN = [-6, -52, -30, -12]; hF = [46, 12, 36, 50]; }
    else if (P.hop) { fN = [28, -40, -12]; fF = [20, -48, -20]; hN = [34, -16, 26, 34]; hF = [40, -8, 30, 40]; }
    else { fN = [-2, 1, 22]; fF = [5, 1, 22]; hN = [30, -40, 5, 22]; hF = [24, -36, 4, 22]; }
    if (P.wave) fN = [100, 8, 25];
    if (P.point) fN = [80, 70, 80];
    const grounded = !(P.run || P.fly || P.hop);
    const legO = (sh, gr) => ({ lo: { sh }, foot: hoof, fh: 8.3, ground: gr ? 0 : null });
    let legs = '', nearLie = '';
    if (lying) {
      legs += K.limb([[26, -44 + by], [44, -10], [22, -8]], [18, 11, 10], WF, { sh: WFS }) + hoof([18, -9], -95 + 22);
      nearLie = K.mass([[-84, -30], [-76, -52], [-52, -58], [-34, -40], [-38, -16], [-62, -8], [-80, -14]], W, { sh: WS, off: [-6, -8], inner: K.fill([[-86, -40], [-72, -60], [-56, -50], [-66, -30]], BK) }) +
        K.limb([[-62, -14], [-24, -9]], [15, 12], W, { sh: WS }) + hoof([-18, -9], 90 + 22) +
        K.limb([[40, -30], [58, -12], [80, -8]], [22, 14, 12], W, { sh: WS }) + hoof([84, -8], 100 + 22);
    } else {
      legs += K.leg([22, -76], F.ls, fF, F.ws, WF, legO(WFS, grounded)).svg;
      legs += K.leg([-40, -84], Hd.ls, hF, Hd.ws, WF, legO(WFS, grounded)).svg;
      legs += K.leg([-56, -86], Hd.ls, hN, Hd.ws, W, legO(WS, grounded)).svg;
      const nf = K.leg([36, -76], F.ls, fN, F.ws, W, legO(WS, grounded && !P.wave && !P.point)).svg;
      if (P.wave || P.point) nearLie = nf; else legs += nf;
    }
    // ---- body + deep neck with dewlap
    const nt = K.tp([-6, 6], H), th = K.tp([-2, 44], H);
    const body = (lying ? [[-84, -48], [-70, -58], [-42, -57], [-14, -55], [14, -59], [36, -64], nt, th, [58, -30], [50, -8], [20, -2], [-20, -2], [-60, -4], [-84, -18]]
      : [[-80, -94], [-68, -103], [-42, -100], [-14, -97], [14, -101], [36, -107], nt, th, [58, -60], [50, -48], [36, -50], [18, -46], [-6, -44], [-30, -46], [-50, -52], [-68, -58], [-80, -70], [-84, -84]]);
    const patch = pts => K.fill(K.mv(pts, 0, by), BK);
    const patches = patch([[-86, -84], [-74, -104], [-54, -100], [-46, -88], [-48, -74], [-58, -64], [-72, -66], [-80, -74]]) +
      patch([[-28, -100], [-6, -100], [6, -92], [2, -78], [-6, -64], [-20, -60], [-30, -72], [-26, -86]]) +
      patch([[22, -106], [42, -110], [54, -102], [50, -86], [38, -76], [26, -80], [20, -92]]);
    const folds = A.ink(`M-60 ${-98 + by} q24 10 18 46 M40 ${-96 + by} q-10 22 -2 46 M${-8} ${-44 + by} q14 -6 30 -2`, 1.5, C.ink, 'stroke-opacity=".6"') +
      A.ink(`M${th[0] - 6} ${th[1] + 4} q-2 10 -8 16 M${th[0] - 12} ${th[1] + 2} q-2 8 -6 12`, 1.3, C.ink, 'stroke-opacity=".5"');
    const udder = lying ? '' : K.mass([[-42, -50], [-26, -50], [-22, -40], [-28, -34], [-38, -35], [-43, -42]], PK, { ow: 2.2, off: [-3, -4] }) + A.ink('M-37 -35 v5 M-31 -34 v5 M-26 -36 v4', 2, '#D88C88');
    s += tail + legs + udder;
    s += K.mass(body, W, { sh: WS, off: [-9, -12], ht: 0.45, inner: patches, over: folds });
    s += nearLie;
    // ---- head (local: origin = poll)
    let h = '';
    const earR = mood === 'surprised' ? -20 : (mood === 'scared' || mood === 'angry') ? 24 : mood === 'sad' || mood === 'sleepy' ? 34 : P.hop ? -12 : 0;
    const horn = (dx, dy, col) => K.mass([[dx, dy], [dx - 3, dy - 7], [dx + 1, dy - 14], [dx + 8, dy - 18], [dx + 11, dy - 15], [dx + 7, dy - 9], [dx + 7, dy]], col, { off: [-2, -2], ow: 2.3, inner: K.fill([[dx + 2, dy - 13], [dx + 8, dy - 19], [dx + 12, dy - 14], [dx + 7, dy - 11]], '#8B7B62') });
    h += horn(12, 0, '#DCCDAA');
    const open = P.blast || mood === 'surprised' || mood === 'laugh';
    const headPts = open
      ? [[0, -2], [10, 0], [22, 8], [34, 22], [44, 38], [51, 48], [57, 55], [58, 62], [55, 66], [56, 74], [48, 81], [34, 73], [22, 62], [8, 53], [-4, 40], [-10, 24], [-8, 8]]
      : [[0, -2], [10, 0], [22, 8], [34, 22], [44, 38], [51, 48], [57, 55], [58, 63], [54, 69], [46, 73], [34, 69], [22, 61], [8, 53], [-4, 40], [-10, 24], [-8, 8]];
    const muzzle = K.fill([[42, 38], [54, 42], [62, 54], [61, 70], [52, 84], [42, 72], [38, 54]], PK);
    const headPatch = K.fill([[-14, -8], [6, -8], [12, 4], [10, 14], [2, 30], [-12, 36]], BK);
    h += K.mass(headPts, W, { sh: WS, off: [-5, -6], inner: headPatch + muzzle, over: A.ink('M8 38 q12 8 26 6', 1.3, C.ink, 'stroke-opacity=".5"') + A.ink('M24 8 q6 2 10 8', 1.2, C.ink, 'stroke-opacity=".45"') });
    h += horn(3, -1, HN);
    h += K.g(K.mass([[3, -2], [-10, -6], [-25, -4], [-34, 4], [-26, 12], [-10, 12], [3, 8]], BK, { off: [-2, -3], ow: 2.4, inner: K.fill([[-6, 0], [-20, -1], [-28, 4], [-20, 7], [-8, 6]], PK, 'fill-opacity=".85"') }), { x: -4, y: 14, r: earR });
    h += `<path d="M50 50 q7 -3 8 4 q-4 3 -7 0" fill="${BK}" stroke="${C.ink}" stroke-width="1.2"/>`;
    if (open) {
      const wd = P.blast ? 1 : mood === 'laugh' ? 0.8 : 0.55;
      h += K.mass([[38, 65], [47, 65], [56, 65.5], [56, 67 + 7 * wd], [51, 71 + 7 * wd], [44, 69 + 4 * wd]], '#5A1B22', { ow: 2, sh: false });
      h += K.fill([[45, 69 + 3 * wd], [53, 69 + 4 * wd], [54, 72 + 5 * wd], [47, 72 + 5 * wd]], '#E27E8C');
    } else if (mood === 'sad' || mood === 'scared') h += A.ink('M40 67 q8 -3 15 0', 1.8);
    else if (mood === 'angry' || mood === 'determined') h += A.ink('M39 66 l16 1', 1.9);
    else h += A.ink('M38 64 q9 5 17 2', 1.8);
    h += A.ink('M8 2 q3 -5 7 -2 M11 5 q3 -4 7 -1', 1.4);
    h += K.eye(23, 20, 6.4, mood, { iris: '#3B2418', lid: W, lash: true, bw: 1.5, look: 1.2 });
    if (mood === 'sad') h += K.tear(23, 30, 0.9);
    if (mood === 'scared') h += K.sweat(-6, -10, 0.9);
    let fx = '';
    if (P.blast) { const m = K.tp([62, 70], H); fx += K.sound(m[0] + 4, m[1], 1.3); }
    if (mood === 'sleepy') fx += K.zz(H.x + 34, H.y - 30, 1.1);
    if (P.think) fx += K.qmark(H.x + 40, H.y - 34, 1.1);
    s += K.g(h, H) + fx;
    const top = K.tp([6, -28], H);
    return K.out(s, [top[0], Math.min(top[1], -60)], { lift, rot: P.run || P.fly ? -3 : P.hop ? -4 : 0 });
  };

  /* ================= CATS & DOGS (shared carnivore rig in the kit) ================= */
  const CARN = {
    cat: { kind: 'cat', s: 0.56, fur: '#E39A4E', furS: '#B96D2B', light: '#FAE8CF', dark: '#A95A1E', nose: '#E28A8A', iris: '#8DBB3C', pupil: 'slit', R: 33, stripes: true, tailW: 12, tailTaper: 0.2, legK: 1.05, eyeR: 6.6, pawW: 19 },
    lion: { kind: 'lion', s: 1, legW: 1.15, pawW: 23, fur: '#D8A85C', furS: '#AD7A36', light: '#F4E2BA', nose: '#9B5A4C', iris: '#C98A1C', R: 28, mane: '#9A5220', maneS: '#6C3514', mane2: '#B96B2C', tuft: '#6C3514', tailW: 8, tailTaper: 0.3, eyeR: 5.2 },
    dog: { kind: 'dog', s: 0.62, fur: '#C98B4F', furS: '#9A6130', light: '#F6E7D2', nose: '#2A1D18', iris: '#5A3416', R: 30, legK: 1.15, tail: 'curl', tailW: 11, tailTaper: 0.2, socks: true, eyeR: 5.4, pawW: 18 },
  };
  Object.keys(CARN).forEach(k => { X[k] = (pose, mood) => K.carn(CARN[k], pose, mood); });


  /* ================= PARROT (rose-ringed parakeet) ================= */
  X.parrot = (pose, mood) => K.bird({
    s: 1.35, L: 38, D: 28, R: 12.5, ang: -46, legH: 11, neck: [5, -6],
    body: '#3DAE4B', bodyS: '#23803A', hi: '#9BDD7A', belly: '#8ED06A',
    wing: '#33A044', wingS: '#1E7434', prim: '#1D6A5A', wingLen: 0.4, span: 62,
    tail: { len: 58, ws: [10, 7, 3], ang: 34, col: '#2F9F7A' },
    head: '#46B852', headS: '#27853B', beak: 'hook', beakCol: '#D8322E', beakCol2: '#3A2626', iris: '#EFE6C0', pr: 0.42, eyeR: 3.4, eyeRing: '#F2A33A',
    leg: '#9C8C8C', legW: 3, feet: 'perch', toe: 7, topK: 1.5,
    headOver: (R) => K.ink(`M${n(R * 0.5)} ${n(R * 0.7)} Q${n(-R * 0.1)} ${n(R * 1.25)} ${n(-R * 0.95)} ${n(R * 0.55)}`, 2.6, C.ink) + K.ink(`M${n(R * 0.3)} ${n(R * 0.62)} Q${n(-R * 0.2)} ${n(R * 1.05)} ${n(-R * 0.9)} ${n(R * 0.42)}`, 1.6, '#F28FB0'),
  }, pose, mood);

  /* ================= PEACOCK (Indian peafowl) ================= */
  const eyeSpot = (x, y, r, a) => {
    const t = `transform="rotate(${n(a)} ${n(x)} ${n(y)})"`;
    return `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${n(r * 0.8)}" ry="${n(r)}" fill="#C8A23A" stroke="${C.ink}" stroke-width="1" ${t}/>` +
      `<ellipse cx="${n(x)}" cy="${n(y + r * 0.1)}" rx="${n(r * 0.6)}" ry="${n(r * 0.74)}" fill="#1FA38A" ${t}/>` +
      `<ellipse cx="${n(x)}" cy="${n(y + r * 0.2)}" rx="${n(r * 0.34)}" ry="${n(r * 0.44)}" fill="#1B2F8A" ${t}/>`;
  };
  X.peacock = (pose, mood) => {
    const P = K.pose(pose);
    const display = !(P.run || P.fly || P.sit || P.lie || mood === 'sad' || mood === 'scared' || mood === 'sleepy');
    return K.bird({
      s: 1, L: 46, D: 32, R: 10, ang: -22, legH: 40, neck: [12, -30],
      body: '#1E5CC8', bodyS: '#123C8E', hi: '#5F9BF0',
      wing: '#C8A878', wingS: '#9A7C50', prim: '#9A4E26', wingLen: 0.2, span: 64,
      wingBars: (w2, bw) => { let s = ''; for (let i = 0; i < 5; i++) s += w2 ? K.ink(K.op([w2(0.1 + i * 0.08, -0.1), w2(0.12 + i * 0.08, 0.3)]), 1.4, '#5E4630') : K.ink(K.op([bw(0.28 - i * 0.12, -0.36), bw(0.22 - i * 0.12, 0.16)]), 1.4, '#5E4630'); return s; },
      tail: { len: 20, ws: [12, 10, 8], ang: 10, col: '#6E5A2E' }, noTail: true,
      head: '#1F62D0', headS: '#123C8E', beak: 'peacock', beakCol: '#B8A898', iris: '#2A1A10', eyeR: 2.8,
      leg: '#9C8B7A', legW: 3.4, feet: 'perch', toe: 10, topK: 2.8,
      headMarks: (R) => K.fill([[R * 0.05, -R * 0.42], [R * 0.7, -R * 0.4], [R * 0.6, -R * 0.1], [R * 0.1, -R * 0.12]], '#FFFFFF') + K.fill([[R * 0.05, R * 0.12], [R * 0.6, R * 0.1], [R * 0.4, R * 0.35], [R * 0.0, R * 0.35]], '#FFFFFF'),
      headOver: (R) => [-14, -4, 6].map((a, i) => { const tip = K.rot([0, -R * 1.5], a); return K.ink(`M0 ${n(-R * 0.8)} L${n(tip[0])} ${n(tip[1] - R * 0.6)}`, 1.2) + `<ellipse cx="${n(tip[0])}" cy="${n(tip[1] - R * 0.7)}" rx="2.2" ry="3" fill="#1FA38A" stroke="${C.ink}" stroke-width="1.1"/>`; }).join(''),
      train: (P2, md, bw, T0) => {
        let s = '';
        if (display) {
          const cx = T0[0] - 4, cy = T0[1] - 8, R1 = 92;
          const fan = []; for (let i = 0; i <= 24; i++) { const a = K.rad(-200 + i * (190 / 24)); const r = R1 * (i % 2 ? 0.96 : 1.02); fan.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); }
          fan.push([cx + 12, cy + 12], [cx - 12, cy + 16]);
          let inner = '';
          for (let i = 0; i < 26; i++) { const a = K.rad(-200 + i * (190 / 25)); inner += K.ink(`M${n(cx)} ${n(cy)} L${n(cx + Math.cos(a) * R1)} ${n(cy + Math.sin(a) * R1)}`, 1, '#6F7A2A', 'stroke-opacity=".7"'); }
          [[82, 11, 17], [60, 9, 13], [40, 7, 9]].forEach(([r, sz, cnt], ring) => { for (let i = 0; i <= cnt; i++) { const a = -200 + (i + (ring % 2) * 0.5) * (190 / cnt); if (a > -8) continue; const q = K.rad(a); inner += eyeSpot(cx + Math.cos(q) * r, cy + Math.sin(q) * r, sz, a + 90); } });
          s += K.mass(fan, '#4E7A2E', { sh: '#2F4F1C', off: [-6, -8], inner, t: 0.9 });
        } else {
          const e = [T0[0] - 110, -6 + (P2.fly ? -20 : 0)];
          const pts = [[T0[0] + 2, T0[1] - 6], [T0[0] - 40, T0[1] - 4], [e[0] + 10, e[1] - 12], [e[0], e[1] - 2], [e[0] + 14, e[1] + 6], [T0[0] - 40, T0[1] + 14], [T0[0] + 2, T0[1] + 8]];
          let inner = '';
          for (let i = 0; i < 5; i++) { const t = 0.2 + i * 0.17; inner += eyeSpot(T0[0] + (e[0] - T0[0]) * t, T0[1] + 2 + (e[1] - T0[1] - 2) * t, 8 - i * 0.6, 90); }
          s += K.mass(pts, '#4E7A2E', { sh: '#2F4F1C', off: [-4, -5], inner });
        }
        return s;
      },
      marks: (bw, H) => K.fill([bw(0.2, -0.5), bw(-0.6, -0.4), bw(-0.6, 0.6), bw(0.1, 0.6)], '#2A6A5A', 'fill-opacity=".35"'),
    }, pose, mood);
  };

  /* ================= OWL (Indian eagle-owl, facing us) ================= */
  X.owl = (pose, mood) => {
    const P = K.pose(pose), sc = 0.86;
    const lw0 = K.lw; K.lw = 1 / sc;
    const B = '#9A6B3E', BS = '#6E4724', BR = '#E3C79A', DK = '#3E2A18', DISC = '#D9B98A', OR = '#F08A1E';
    const fly = P.fly, low = P.sit || P.lie;
    const lift = fly ? 30 : P.hop ? 16 : 0;
    const sq = low ? 8 : 0;
    let s = '';
    const wing = (side, up) => {
      const m = p => [p[0] * side, p[1]];
      if (up) {
        const pts = [[26, -76], [52, -104], [84, -112], [104, -100], [96, -90], [100, -80], [88, -74], [90, -64], [74, -60], [70, -50], [52, -52], [32, -44]].map(m);
        let over = ''; for (let i = 0; i < 5; i++) over += K.ink(K.op([m([46 + i * 11, -86 - i * 3]), m([56 + i * 10, -62 - i * 3])]), 1.1, C.ink, 'stroke-opacity=".5"');
        for (let i = 0; i < 4; i++) over += K.ink(K.op([m([38 + i * 14, -82 - i * 4]), m([46 + i * 14, -88 - i * 4])]), 3, DK, 'stroke-opacity=".5"');
        return K.mass(pts, side < 0 ? B : A.shade(B, 0.06), { sh: BS, off: [-5, -6], over });
      }
      const pts = [[24, -78 + sq], [36, -60 + sq], [38, -30], [32, -6], [24, -10], [22, -40]].map(m);
      let over = ''; for (let i = 0; i < 4; i++) over += K.ink(K.op([m([28, -64 + i * 14 + sq]), m([36, -58 + i * 14 + sq])]), 2.6, DK, 'stroke-opacity=".6"');
      return K.mass(pts, B, { sh: BS, off: [-4, -5], over });
    };
    const up = fly || P.hop;
    if (up) s += wing(-1, true) + wing(1, true);
    // feet
    if (!fly) [-10, 10].forEach(x => { s += K.mass([[x - 7, -6], [x + 7, -6], [x + 8, 0], [x - 8, 0]], BR, { ow: 2.2, off: [-2, -2] }) + [-5, 0, 5].map(d => K.ink(`M${x + d} -1 q1 3 2 3`, 2.2, DK)).join(''); });
    // body
    const body = [[-8, -86 + sq], [8, -86 + sq], [24, -76 + sq], [32, -50], [30, -22], [20, -5], [0, -1], [-20, -5], [-30, -22], [-32, -50], [-24, -76 + sq]];
    let marks = K.fill([[-18, -70 + sq], [18, -70 + sq], [22, -30], [0, -6], [-22, -30]], BR);
    for (let r = 0; r < 4; r++) for (let i = -2; i <= 2; i++) marks += K.fill([[i * 8 - 1.5 + (r % 2) * 4, -64 + r * 14 + sq * 0.5], [i * 8 + 1.5 + (r % 2) * 4, -64 + r * 14 + sq * 0.5], [i * 8 + (r % 2) * 4 + 1, -54 + r * 14 + sq * 0.5], [i * 8 + (r % 2) * 4 - 1, -54 + r * 14 + sq * 0.5]], DK, 'fill-opacity=".75"');
    s += K.mass(body, B, { sh: BS, off: [-7, -8], ht: 0.35, inner: marks });
    if (!up) s += wing(-1, false) + wing(1, false);
    if (P.wave) s += wing(1, true);
    // head
    let h = '';
    const tuft = mood === 'surprised' || mood === 'angry' ? -6 : mood === 'sad' || mood === 'sleepy' ? 16 : mood === 'scared' ? 24 : 0;
    [-1, 1].forEach(side => { h += K.g(K.mass([[side * 16, -18], [side * 26, -44], [side * 22, -30], [side * 30, -38], [side * 26, -14]], B, { sh: BS, off: [-2, -3], ow: 2.4 }), { x: 0, y: 0, r: 0 }).replace('<g transform="translate(0 0)">', `<g transform="rotate(${side * tuft} ${side * 20} -16)">`); });
    h += K.mass([[-30, -4], [-26, -22], [-12, -30], [12, -30], [26, -22], [30, -4], [24, 14], [10, 22], [-10, 22], [-24, 14]], B, { sh: BS, off: [-5, -6], over: K.fur([[-20, -24, 3, 4], [-8, -28, 2, 4], [6, -28, 2, 4], [18, -24, 2, 4]], DK, 1.3, 0.8) });
    h += K.mass([[-27, -10], [-18, -22], [-5, -19], [0, -12], [5, -19], [18, -22], [27, -10], [25, 6], [14, 18], [0, 20], [-14, 18], [-25, 6]], DISC, { sh: '#BE9A68', off: [-3, -3], ow: 2.2, over: K.ink('M-26 -8 Q-24 14 0 19 Q24 14 26 -8', 2.6, DK, 'stroke-opacity=".55"') });
    h += K.ink('M-22 -18 q10 -6 20 2 M22 -18 q-10 -6 -20 2', 2.8, '#F6EAD0');
    const eo = { iris: OR, round: true, lid: DISC, pr: 0.5, sw: 1.8, bw: 2 };
    h += K.eye(-12, -4, 8.2, mood, Object.assign({ dir: -1 }, eo)) + K.eye(12, -4, 8.2, mood, eo);
    const open = P.blast || mood === 'laugh' || mood === 'surprised';
    if (open) h += K.mass([[-4, 7], [4, 7], [3, 15], [-3, 15]], '#5A1B22', { ow: 1.6, sh: false });
    h += K.mass([[-4.5, 2], [4.5, 2], [3, 9], [0, 13], [-3, 9]], '#4A4650', { ow: 1.8, sh: false, t: 0.6 });
    if (mood === 'sad') h += K.tear(-14, 6, 0.9);
    if (mood === 'scared') h += K.sweat(26, -30, 0.9);
    const HY = -94 + sq;
    s += K.g(h, { x: 0, y: HY, r: P.think ? 14 : 0 });
    let fx = '';
    if (P.blast) fx += K.sound(30, HY + 8, 1.1);
    if (mood === 'sleepy') fx += K.zz(26, HY - 40, 1);
    if (P.think) fx += K.qmark(34, HY - 36, 1);
    s += fx;
    K.lw = lw0;
    return K.out(s, [0, HY - 46], { lift, s: sc, floats: fly });
  };

  /* ================= PENGUIN (king penguin) ================= */
  X.penguin = (pose, mood) => {
    const P = K.pose(pose);
    const BK = '#1F2433', BKS = '#10131C', WH = '#FAF7F0', WHS = '#D5D3DA', OR = '#F5A623', YE = '#F7CF6A', FT = '#3A3A44';
    const slide = P.lie || P.fly, run = P.run, sit = P.sit;
    const lift = P.hop ? 16 : 0;
    let s = '';
    // body local coords (upright); slide rotates the whole bird forward
    const flip = (side, up, out) => {
      const sh = [side < 0 ? -2 : 6, -70];
      const tip = up ? [sh[0] + (side < 0 ? -18 : 24), sh[1] - 40] : out ? [sh[0] + (side < 0 ? -30 : 34), sh[1] + 14] : [sh[0] - 12 + (run ? -10 : 0), sh[1] + 40];
      return K.limb([sh, [(sh[0] + tip[0]) / 2 + (up ? 4 : -3), (sh[1] + tip[1]) / 2], tip], [13, 10, 4], side < 0 ? BKS : BK, { sh: BKS, over: '', inner: K.bands([sh, [(sh[0] + tip[0]) / 2, (sh[1] + tip[1]) / 2], tip], [13, 10, 4], [{ t: 1.5, col: A.shade(BK, -0.15) }]) });
    };
    const sq = sit ? 12 : 0;
    const up2 = P.hop, wave = P.wave, point = P.point;
    s += flip(-1, up2, false);
    if (!slide) [-8, 12].forEach((x, i) => { const dx = run ? (i ? 8 : -8) : 0; s += K.mass([[x - 8 + dx, -6], [x + 12 + dx, -5], [x + 14 + dx, 0], [x - 8 + dx, 0]], FT, { ow: 2.2, off: [-2, -2] }); });
    const body = [[-6, -86 + sq], [-20, -72 + sq], [-28, -46], [-26, -18], [-16, -5], [4, -1], [20, -6], [28, -24], [28, -50], [22, -72 + sq], [12, -86 + sq]];
    const marks = K.fill([[4, -84 + sq], [18, -76 + sq], [26, -52], [26, -24], [18, -6], [2, -2], [-4, -30], [-2, -60]], WH) + K.fill([[6, -86 + sq], [20, -78 + sq], [22, -66 + sq], [10, -68 + sq], [2, -76 + sq]], YE);
    s += K.mass(body, BK, { sh: BKS, off: [-8, -9], inner: marks, hi: '#4A5270', hiK: 0.3 });
    s += flip(1, up2 || wave, point);
    // head
    let h = '';
    h += K.mass([[-12, 2], [-12, -12], [-4, -22], [8, -22], [16, -14], [18, -4], [12, 4]], BK, { sh: BKS, off: [-3, -4], inner: K.fill([[-6, -2], [-2, -10], [2, -2], [0, 6], [-6, 6]], OR) });
    const open = P.blast || mood === 'laugh' || mood === 'surprised';
    h += K.mass([[14, -10], [26, -8], [38, -3], [26, -4], [16, -5]], BK, { ow: 2, sh: false });
    h += K.mass([[16, -4 + (open ? 2 : 0)], [34, -1 + (open ? 5 : 0)], [26, 1 + (open ? 5 : 0)], [16, -1 + (open ? 2 : 0)]], OR, { ow: 1.8, sh: false });
    if (open) h += K.mass([[16, -5], [30, -3], [28, 1], [16, -2]], '#5A1B22', { ow: 1.4, sh: false });
    h += K.eye(7, -12, 3, mood, { iris: '#3A2210', round: true, lid: BK, browCol: '#8C93A8', sw: 1.3, bw: 1.2 });
    if (mood === 'sad') h += K.tear(7, -7, 0.7);
    if (mood === 'scared') h += K.sweat(-14, -26, 0.8);
    const HT = { x: 2, y: -88 + sq, r: P.think ? 14 : mood === 'sad' ? 12 : P.blast ? -18 : 0 };
    s += K.g(h, HT);
    let fx = '';
    if (P.blast) fx += K.sound(42, -94, 1);
    if (mood === 'sleepy') fx += K.zz(20, -124 + sq, 1);
    if (P.think) fx += K.qmark(28, -122, 1);
    if (slide) {
      const trail = P.fly ? K.ink('M-70 -30 q10 -6 20 0 M-80 -18 q10 -6 20 0', 2, '#5FA8E8') : K.ink('M-60 -2 h30 M-70 -8 h22', 2, C.ink, 'stroke-opacity=".5"');
      return K.out(`<g transform="rotate(${P.fly ? 72 : 78} 0 -16) translate(0 ${P.fly ? 0 : 8})">${s}</g>` + trail, [60, P.fly ? -54 : -48], { lift: P.fly ? 20 : 0, floats: P.fly });
    }
    s += fx;
    return K.out(s, [6, -118 + sq], { lift, rot: run ? 8 : 0, pivot: [0, 0] });
  };

  /* ================= MONKEY (rhesus macaque) ================= */
  X.monkey = (pose, mood) => {
    const P = K.pose(pose);
    const F = '#A57A4E', FS = '#795433', FL = '#D8BD98', FF = '#8C6440', FFS = '#664528', PK = '#E7A28C', PKL = '#F1BBA6', HD = '#9C7466';
    const sit = P.sit || P.lie, run = P.run || P.fly, hop = P.hop;
    const lift = hop ? 18 : P.run ? 8 : P.fly ? 26 : 0;
    let hip = [-6, -46], sh = [4, -84], H = { x: 12, y: -102, r: 0 };
    if (run) { hip = [-10, -44]; sh = [10, -80]; H = { x: 22, y: -96, r: -4 }; }
    if (sit) { hip = [-10, -16]; sh = [2, -54]; H = { x: 10, y: -72, r: 0 }; }
    if (P.lie && mood === 'sleepy') { H.y += 12; H.r = 24; H.x += 6; }
    if (P.think) H.r = 12;
    if (mood === 'sad') { H.r += 12; H.y += 3; }
    if (P.blast) H.r -= 10;
    let s = '';
    // tail
    const tpts = sit ? [[hip[0] - 8, hip[1] + 4], [hip[0] - 30, hip[1] + 10], [hip[0] - 50, hip[1] + 12]] : run ? [[hip[0] - 8, hip[1]], [hip[0] - 28, hip[1] - 10], [hip[0] - 44, hip[1] - 26]] : [[hip[0] - 8, hip[1] + 2], [hip[0] - 26, hip[1] + 8], [hip[0] - 36, hip[1] + 22], [hip[0] - 38, hip[1] + 36]];
    s += K.limb(tpts, tpts.map((p, i) => 8 - i * 1.5), F, { sh: FS });
    // legs
    const foot = (a, dir = 1) => K.mass([[a[0] - 5, a[1] - 5], [a[0] + 5, a[1] - 6], [a[0] + 16 * dir, a[1] - 2], [a[0] + 18 * dir, a[1] + 3], [a[0] - 4, a[1] + 3]], HD, { ow: 2.3, off: [-2, -2] });
    const legPts = (near) => {
      const o = near ? 0 : -6;
      if (sit) return [[hip[0] + o, hip[1]], [hip[0] + 24 + o, hip[1] - 20], [hip[0] + 28 + o, -6]];
      if (run) return near ? [[hip[0], hip[1]], [hip[0] + 22, hip[1] + 12], [hip[0] + 30, -8]] : [[hip[0], hip[1]], [hip[0] - 6, hip[1] + 22], [hip[0] - 24, -10]];
      if (hop) return [[hip[0] + o, hip[1]], [hip[0] + 16 + o, hip[1] + 10], [hip[0] + 2 + o, hip[1] + 26]];
      return [[hip[0] + o, hip[1]], [hip[0] + 14 + o, -24], [hip[0] + 4 + o, -6]];
    };
    const lp = legPts(false), ln = legPts(true);
    s += K.limb(lp, [20, 13, 10], FF, { sh: FFS }) + foot(lp[2]);
    // arms
    const armPts = (near) => {
      const o = near ? 0 : -8, e = (dx, dy) => [sh[0] + dx + o, sh[1] + dy], sp = [sh[0] + o, sh[1]];
      if (P.cheer || hop) return [sp, e(near ? 16 : -8, -16), e(near ? 14 : -6, -42)];
      if (P.wave && near) return [sp, e(18, -12), e(22, -38)];
      if (P.point && near) return [sp, e(22, 4), e(44, 2)];
      if (P.think && near) return [sp, e(16, 18), e(18, -6)];
      if (P.blast) return [sp, e(near ? 16 : 6, 8), e(near ? 26 : 14, -8)];
      if (run) return near ? [sp, e(16, 14), e(30, 6)] : [sp, e(-12, 14), e(-20, 30)];
      if (sit) return [sp, e(10, 22), e(24, 22)];
      return [sp, e(8, 22), e(12, 42)];
    };
    const hand = (w, up) => K.mass([[w[0] - 4, w[1] - 3], [w[0] + 3, w[1] - 5], [w[0] + 7, w[1] + (up ? -6 : 2)], [w[0] + 4, w[1] + (up ? -2 : 7)], [w[0] - 3, w[1] + 5]], HD, { ow: 2.2, off: [-2, -2] });
    const af = armPts(false);
    s += K.limb(af, [13, 10, 8], FF, { sh: FFS }) + hand(af[2], P.cheer || hop);
    // torso
    const mid = [(sh[0] + hip[0]) / 2 - 3, (sh[1] + hip[1]) / 2];
    const tor = K.limbD([[sh[0] - 1, sh[1] - 4], mid, hip], [30, 34, 30]);
    s += K.mass(tor, F, { sh: FS, off: [-7, -8], hi: '#C49A68', hiK: 0.4, inner: K.fill([[sh[0] + 8, sh[1] + 6], [mid[0] + 16, mid[1]], [hip[0] + 14, hip[1] - 2], [hip[0] + 4, hip[1] + 6], [mid[0] + 4, mid[1]]], FL) + K.fill([[hip[0] - 16, hip[1] - 12], [hip[0] + 4, hip[1] - 14], [hip[0] + 8, hip[1] + 10], [hip[0] - 14, hip[1] + 14]], '#B8804A', 'fill-opacity=".7"'), over: K.fur([[sh[0] - 12, sh[1] + 10, -3, 5], [mid[0] - 14, mid[1], -3, 5], [sh[0] - 6, sh[1] + 2, -2, 5]], FS, 1.3, 0.8) });
    s += K.limb(ln, [21, 14, 10], F, { sh: FS }) + foot(ln[2]);
    const an = armPts(true);
    s += K.limb(an, [14, 11, 8.5], F, { sh: FS, inner: '' }) + hand(an[2], P.cheer || hop || P.wave);
    if (P.point) s += K.limb([[an[2][0] + 4, an[2][1] - 1], [an[2][0] + 13, an[2][1] - 2]], [3.4, 3], HD);
    // head (local, centred)
    let h = '';
    h += K.mass([[-14, -8], [-21, -9], [-23, -2], [-18, 4], [-13, 1]], '#C98C74', { ow: 2.2, off: [-2, -2] });
    h += K.mass([[-17, -2], [-16, -13], [-6, -19], [8, -19], [16, -12], [19, -2], [16, 9], [6, 15], [-6, 15], [-15, 8]], F, { sh: FS, off: [-4, -5], hi: '#C49A68', hiK: 0.4, over: K.fur([[-8, -18, 1, 4], [0, -19, 1, 4], [8, -18, 0, 4], [-14, -10, 2, 3]], FS, 1.2, 0.8) });
    h += K.mass([[-3, -9], [7, -12], [15, -9], [20, -2], [21, 6], [15, 12], [4, 13], [-3, 7], [-5, -1]], PK, { sh: '#C9806C', off: [-2, -3], ow: 1.8 });
    const open = P.blast || mood === 'laugh' || mood === 'surprised';
    h += K.mass([[7, 1], [17, -1], [23, 3], [22, 9 + (open ? 3 : 0)], [13, 12 + (open ? 3 : 0)], [6, 8]], PKL, { sh: '#D99A86', off: [-1.5, -2], ow: 1.8 });
    h += K.dot(18.5, 2.5, 0.9) + K.dot(21, 3.2, 0.9);
    if (open) h += K.mass([[11, 7], [19, 6], [21, 10], [16, 14], [11, 12]], '#5A1B22', { ow: 1.4, sh: false, inner: K.fill([[12, 7], [19, 6.5], [19, 8], [12, 8.5]], '#FFF8EC') });
    else h += mood === 'sad' || mood === 'scared' ? K.ink('M11 10 q5 -3 10 0', 1.5) : mood === 'angry' || mood === 'determined' ? K.ink('M11 9 l10 -0.5', 1.5) : K.ink('M11 8 q5 4 10 0', 1.5);
    h += K.ink('M-2 -9 q6 -4 12 -1 M11 -10 q4 -2 8 1', 2.2, '#5A3A28');
    const eo = { iris: '#6A3E18', lid: PK, bw: 1.3, sw: 1.3, round: true, look: 1.2 };
    h += K.eye(13, -4, 2.7, mood, eo) + K.eye(4, -4, 3.1, mood, eo);
    if (mood === 'sad') h += K.tear(3, 1, 0.7);
    if (mood === 'scared') h += K.sweat(-16, -16, 0.8);
    s += K.g(h, H);
    const top = [H.x, H.y - 26];
    let fx = '';
    if (P.blast) fx += K.sound(H.x + 26, H.y + 6, 1.1);
    if (mood === 'sleepy') fx += K.zz(H.x + 16, H.y - 34, 1);
    if (P.think) fx += K.qmark(H.x + 26, H.y - 30, 1);
    return K.out(s + fx, top, { lift, rot: run ? 10 : 0, pivot: [0, 0] });
  };

  /* ================= RABBIT (wild-type brown rabbit) ================= */
  X.rabbit = (pose, mood) => {
    const P = K.pose(pose);
    const F = '#A88462', FS = '#7B5D41', FF = '#937153', L = '#EFE4D2', PKI = '#E9A9A2';
    const leap = P.run || P.fly || P.hop, flop = P.lie;
    const lift = P.hop ? 26 : P.run ? 12 : P.fly ? 30 : 0;
    let s = '', H, earBase;
    const earA = mood === 'surprised' ? 10 : (mood === 'scared' || mood === 'angry') ? -62 : mood === 'sad' ? -80 : mood === 'sleepy' ? -58 : leap ? -48 : -6;
    const ear = (bx, by, rot, col, far) => K.g(K.mass([[-4, 2], [-10, -18], [-12, -42], [-6, -50], [4, -44], [6, -20], [4, 2]], col, { sh: FS, off: [-2, -3], ow: 2.4, inner: far ? '' : K.fill([[-4, -4], [-8, -20], [-8, -40], [-4, -44], [1, -38], [2, -18]], PKI) }), { x: bx, y: by, r: rot });
    if (leap) {
      // stretched mid-leap
      s += K.limb([[-34, -40], [-58, -32], [-86, -28]], [22, 12, 10], FF, { sh: FS }) + K.mass([[-88, -32], [-104, -30], [-106, -24], [-86, -23]], FF, { ow: 2.2, off: [-2, -2] });
      s += K.limb([[22, -40], [34, -26], [42, -16]], [10, 8, 7], FF, { sh: FS });
      s += K.mass([[-56, -44], [-44, -58], [-18, -64], [10, -62], [28, -56], [34, -44], [26, -34], [6, -30], [-22, -30], [-48, -34]], F, { sh: FS, off: [-7, -8], hi: '#C9A684', hiK: 0.4, inner: K.fill([[20, -52], [34, -44], [26, -32], [10, -32], [14, -44]], L) });
      s += K.mass([[-58, -48], [-66, -52], [-68, -44], [-60, -40]], '#FFFFFF', { ow: 2.2, off: [-2, -2] });
      s += K.limb([[-40, -42], [-62, -38], [-90, -36]], [26, 14, 11], F, { sh: FS }) + K.mass([[-92, -40], [-110, -38], [-112, -31], [-90, -31]], F, { ow: 2.2, off: [-2, -2] });
      s += K.limb([[26, -42], [40, -30], [50, -22]], [11, 9, 7], F, { sh: FS });
      H = { x: 42, y: -62, r: -8 }; earBase = [-14, -16];
    } else if (flop) {
      s += K.mass([[-54, -4], [-58, -18], [-44, -30], [-12, -34], [12, -32], [22, -20], [20, -6], [0, -1], [-30, -1]], F, { sh: FS, off: [-7, -8], hi: '#C9A684', hiK: 0.4 });
      s += K.limb([[-46, -8], [-74, -6]], [16, 12], F, { sh: FS }) + K.mass([[-60, -10], [-84, -8], [-86, -2], [-60, -2]], F, { ow: 2.2, off: [-2, -2] });
      s += K.mass([[-56, -18], [-64, -22], [-66, -14], [-58, -10]], '#FFFFFF', { ow: 2.2, off: [-2, -2] });
      s += K.limb([[16, -12], [34, -6], [44, -4]], [10, 8, 7], F, { sh: FS });
      H = { x: 34, y: -20, r: 6 }; earBase = [-14, -16];
    } else {
      // classic hunched sit
      s += K.limb([[6, -30], [8, -14], [9, -3]], [9, 7, 6.5], FF, { sh: FS });
      s += K.mass([[-44, -8], [-50, -26], [-46, -48], [-30, -62], [-10, -66], [6, -62], [16, -50], [20, -32], [16, -12], [6, -3], [-24, -2]], F, { sh: FS, off: [-8, -9], hi: '#C9A684', hiK: 0.4, inner: K.fill([[6, -54], [20, -42], [18, -12], [8, -4], [2, -30]], L), over: K.fur([[-30, -58, -3, 5], [-16, -62, -2, 5], [-40, -46, -3, 5]], FS, 1.2, 0.7) });
      s += K.mass([[-48, -36], [-40, -52], [-20, -50], [-12, -32], [-18, -12], [-40, -8]], F, { sh: FS, off: [-5, -6] });
      s += K.mass([[-36, -8], [-4, -7], [8, -3], [6, 0], [-38, 0]], F, { sh: FS, off: [-2, -2], ow: 2.3 });
      s += K.mass([[-50, -26], [-58, -30], [-60, -20], [-52, -16]], '#FFFFFF', { ow: 2.2, off: [-2, -2] });
      const arm = P.wave ? [[12, -34], [22, -50], [28, -60]] : P.think ? [[12, -34], [24, -42], [26, -52]] : P.point ? [[12, -34], [28, -36], [42, -38]] : [[13, -30], [15, -14], [16, -3]];
      s += K.limb(arm, [10, 8, 7], F, { sh: FS }) + K.mass([[arm[2][0] - 4, arm[2][1] - 3], [arm[2][0] + 6, arm[2][1] - 3], [arm[2][0] + 6, arm[2][1] + 3], [arm[2][0] - 4, arm[2][1] + 3]], F, { ow: 2, off: [-2, -2] });
      H = { x: 26, y: -66, r: P.think ? 12 : mood === 'sad' ? 12 : P.blast ? -10 : 0 }; earBase = [-10, -18];
    }
    // head (local, centred)
    let h = ear(earBase[0] + 8, earBase[1], earA + 8, FF, true);
    h += K.mass([[-18, -6], [-10, -16], [4, -20], [16, -14], [24, -4], [26, 4], [22, 10], [12, 14], [-2, 14], [-14, 8]], F, { sh: FS, off: [-4, -5], hi: '#C9A684', hiK: 0.4, inner: K.fill([[8, 0], [22, -2], [26, 8], [16, 14], [4, 12]], L) + K.fill([[0, -12], [12, -12], [12, 0], [0, 0]], L, 'fill-opacity=".6"') });
    h += ear(earBase[0], earBase[1], earA, F, false);
    h += K.mass([[23, 1], [27, 1], [25, 5]], '#D98C8C', { ow: 1.4, sh: false });
    const open = P.blast || mood === 'laugh' || mood === 'surprised';
    if (open) h += K.mass([[19, 8], [25, 8], [24, 13], [20, 13]], '#5A1B22', { ow: 1.4, sh: false, inner: K.fill([[20, 8], [24, 8], [24, 10], [20, 10]], '#FFF8EC') });
    else h += K.ink(mood === 'sad' || mood === 'scared' ? 'M25 5 v3 M20 10 q5 -3 9 0' : 'M25 5 v3 M20 8 q2.5 3 5 0 q2.5 3 5 0', 1.4);
    h += K.ink('M22 5 q-12 -3 -20 1 M22 7 q-10 2 -18 7 M27 5 q8 -3 14 -2', 0.9, '#FFFFFF');
    h += K.eye(8, -6, 4.6, mood, { iris: '#2A1A10', lid: F, round: true, bw: 1.3, pr: 0.55, look: 0.8 });
    if (mood === 'sad') h += K.tear(8, 0, 0.8);
    if (mood === 'scared') h += K.sweat(-20, -20, 0.8);
    s += K.g(h, H);
    const top = [H.x - 4, flop ? H.y - 30 : H.y - 66];
    let fx = '';
    if (P.blast) fx += K.sound(H.x + 30, H.y + 6, 1);
    if (mood === 'sleepy') fx += K.zz(H.x + 16, H.y - 30, 1);
    if (P.think) fx += K.qmark(H.x + 26, H.y - 40, 1);
    return K.out(s + fx, top, { lift, rot: P.hop ? -12 : 0, pivot: [0, 0] });
  };

  /* ================= TURTLE (Indian star tortoise) ================= */
  X.turtle = (pose, mood) => {
    const P = K.pose(pose);
    const SH = '#35271A', SHS = '#1E150C', ST = '#E6C24A', SK = '#C9A45A', SKS = '#94743A', SKF = '#B08C48';
    const hide = mood === 'scared' || ((P.lie || P.sit) && mood === 'sleepy');
    const walk = P.run || P.fly, lift = P.hop ? 12 : P.fly ? 20 : 0;
    let s = '';
    const nails = (x, y) => [0, 4, 8].map(d => K.mass([[x - 5 + d, y - 1], [x - 3 + d, y - 1], [x - 3.5 + d, y + 1.5]], '#EFE3C8', { ow: 1, sh: false })).join('');
    const leg = (x, dx, col, sh, up) => { const tip = [x + dx, up ? -8 : -2]; return K.limb([[x, -18], tip], [17, 14], col, { sh, inner: [0, 1, 2].map(i => K.dot(x + dx * 0.5 + (i - 1) * 3, -10 + i * 2, 1.2, SKS)).join('') }) + nails(tip[0] + 2, tip[1] + 4); };
    if (!hide) { s += leg(20, walk ? 12 : 2, SKF, SKS) + leg(-24, walk ? -12 : -2, SKF, SKS); }
    s += K.mass([[-44, -12], [-54, -9], [-44, -6]], SK, { ow: 2, off: [-2, -1] });
    // head + neck
    const hr = P.blast ? -18 : P.hop ? -12 : mood === 'sad' ? 16 : P.think ? 12 : 0;
    const HN = { x: 40, y: -20, r: hr };
    let hd = '';
    if (!hide) {
      hd += K.limb([[-4, 0], [10, -4], [18, -8]], [15, 12, 11], SK, { sh: SKS });
      hd += K.mass([[12, -14], [22, -18], [31, -15], [35, -8], [32, -2], [22, 0], [14, -3]], SK, { sh: SKS, off: [-2, -3], inner: [[18, -14], [24, -15], [27, -11], [20, -9]].map(p => K.dot(p[0], p[1], 1.4, '#4A3A20')).join('') });
      const open = P.blast || mood === 'laugh' || mood === 'surprised';
      if (open) hd += K.mass([[26, -5], [35, -6], [33, -1], [27, -1]], '#5A1B22', { ow: 1.4, sh: false });
      else hd += K.ink(mood === 'sad' ? 'M24 -3 q5 -2 10 -1' : 'M24 -4 q5 2 10 -2', 1.4);
      hd += K.eye(25, -11, 2.8, mood, { iris: '#3A2210', lid: SK, round: true, bw: 1.2, sw: 1.2 });
      if (mood === 'sad') hd += K.tear(25, -7, 0.6);
    }
    if (!hide) s += K.g(hd, HN);
    // shell
    const shell = [[-46, -12], [-44, -30], [-32, -46], [-12, -55], [10, -56], [30, -48], [42, -32], [46, -12], [30, -8], [0, -7], [-30, -8]];
    let inner = '';
    const scute = (cx, cy, r) => {
      const hex = []; for (let i = 0; i < 6; i++) { const a = K.rad(i * 60 + 30); hex.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.85]); }
      let o = `<path d="${K.poly(hex)}" fill="none" stroke="${C.ink}" stroke-width="${n(1.6 * K.lw)}" stroke-linejoin="round"/>`;
      o += K.fill([[cx - r * 0.3, cy - r * 0.2], [cx + r * 0.3, cy - r * 0.2], [cx + r * 0.3, cy + r * 0.2], [cx - r * 0.3, cy + r * 0.2]], ST);
      hex.forEach(p => { o += K.fill(K.poly([[cx - r * 0.12, cy], [cx + r * 0.12, cy], [p[0] + (p[0] - cx) * 0.05, p[1] + (p[1] - cy) * 0.05]]), ST); });
      return o;
    };
    [[-20, -45, 10], [2, -49, 10], [24, -43, 9], [-36, -27, 9], [-13, -31, 10], [11, -31, 10], [32, -27, 9]].forEach(q => { inner += scute(q[0], q[1], q[2]); });
    for (let i = 0; i < 8; i++) inner += scute(-40 + i * 11.6, -14, 6);
    s += K.mass(shell, SH, { sh: SHS, off: [-6, -7], inner, hi: '#6A5238', hiK: 0.4, hiOp: 0.6 });
    s += K.mass([[-44, -14], [0, -10], [44, -14], [40, -6], [0, -3], [-40, -6]], '#C9A04A', { ow: 2.2, sh: '#8E6C2C', off: [-2, -2] });
    if (hide) {
      s += K.mass([[34, -24], [44, -24], [44, -12], [34, -12]], '#1A120A', { ow: 2, sh: false });
      if (mood === 'scared') s += K.dot(38, -18, 2.2, '#fff') + K.dot(38.5, -18, 1.1) + K.sweat(52, -44, 0.8);
    }
    if (!hide) { s += leg(28, walk ? 14 : 3, SK, SKS, P.wave) + leg(-30, walk ? -14 : -3, SK, SKS); }
    let fx = '';
    if (P.blast) fx += K.sound(80, -34, 1);
    if (mood === 'sleepy') fx += K.zz(58, -64, 1);
    if (P.think) fx += K.qmark(66, -60, 1);
    if (walk) fx += K.ink('M-62 -40 h-18 M-60 -28 h-24 M-62 -16 h-16', 2, C.ink, 'stroke-opacity=".6"');
    return K.out(s + fx, [36, -64], { lift, floats: false });
  };

  /* ================= FISH (goldfish) ================= */
  X.fish = (pose, mood) => {
    const P = K.pose(pose);
    const O = '#F28A1E', OS = '#C45F0E', OL = '#FFC46A', FIN = '#F7A64A', FINS = '#D9782A';
    let rot = 0; if (P.run || P.fly) rot = -8; if (P.hop) rot = -22; if (mood === 'sad') rot = 10; if (P.blast) rot = -6; if (P.lie) rot = 6;
    const cy = -52, wag = P.run || P.fly ? 8 : P.hop ? -6 : 0;
    let s = '';
    const rays = (base, tips) => tips.map(t => K.ink(`M${n(base[0])} ${n(base[1])} L${n(t[0])} ${n(t[1])}`, 1, FINS, 'stroke-opacity=".8"')).join('');
    const tail = [[-34, cy - 2], [-52, cy - 22 + wag], [-70, cy - 34 + wag], [-80, cy - 28 + wag], [-68, cy - 12 + wag], [-62, cy + wag * 0.5], [-68, cy + 14 + wag], [-80, cy + 28 + wag], [-68, cy + 32 + wag], [-50, cy + 20 + wag], [-34, cy + 2]];
    s += K.mass(tail, FIN, { sh: FINS, off: [-4, -5], ow: 2.4, over: rays([-36, cy], [[-72, cy - 30 + wag], [-70, cy - 16 + wag], [-64, cy + wag * 0.5], [-70, cy + 18 + wag], [-72, cy + 28 + wag]]) });
    s += K.mass([[-18, cy - 18], [-12, cy - 36], [4, cy - 32], [16, cy - 20]], FIN, { sh: FINS, off: [-3, -4], ow: 2.4, over: rays([-4, cy - 18], [[-12, cy - 34], [-4, cy - 34], [6, cy - 30]]) });
    s += K.mass([[-20, cy + 14], [-32, cy + 26], [-22, cy + 28], [-10, cy + 16]], FIN, { ow: 2.2, off: [-2, -3] });
    s += K.mass([[0, cy + 18], [-6, cy + 32], [6, cy + 28], [12, cy + 18]], FIN, { ow: 2.2, off: [-2, -3] });
    let scales = '';
    for (let c = 0; c < 5; c++) for (let r = 0; r < 4; r++) { const x = 12 - c * 8, y = cy - 12 + r * 8 + (c % 2) * 4; scales += K.ink(`M${x} ${y - 4} q-4 4 0 8`, 1.1, OS, 'stroke-opacity=".7"'); }
    const body = [[40, cy + 2], [34, cy - 12], [18, cy - 20], [-4, cy - 22], [-24, cy - 16], [-38, cy - 4], [-38, cy + 4], [-24, cy + 14], [-4, cy + 20], [18, cy + 20], [34, cy + 12]];
    s += K.mass(body, O, { sh: OS, off: [-6, -7], hi: '#FFD08A', hiK: 0.45, hiOp: 0.7, inner: K.fill([[36, cy + 6], [10, cy + 10], [-24, cy + 8], [-20, cy + 20], [18, cy + 22]], OL) + scales, over: K.ink(`M18 ${cy - 16} q-7 16 0 32`, 1.6, C.ink, 'stroke-opacity=".7"') });
    s += K.mass([[14, cy + 4], [2, cy + 16], [8, cy + 20], [18, cy + 10]], '#FFB45A', { ow: 2, off: [-2, -2], over: rays([14, cy + 6], [[4, cy + 15], [8, cy + 18]]) });
    const open = P.blast || mood === 'surprised' || mood === 'laugh';
    s += open ? K.mass([[37, cy + 1], [42, cy + 1], [42, cy + 6], [37, cy + 6]], '#7A2A1A', { ow: 1.4, sh: false, t: 1 }) : K.ink(mood === 'sad' || mood === 'scared' ? `M34 ${cy + 6} q3 -2 6 0` : `M34 ${cy + 4} q3 3 6 0`, 1.4);
    s += K.eye(26, cy - 5, 5.2, mood, { iris: '#E8B020', lid: O, round: true, pr: 0.55, bw: 1.3, sw: 1.5 });
    if (mood === 'sad') s += K.tear(24, cy + 2, 0.7);
    if (mood === 'scared') s += K.sweat(8, cy - 38, 0.8);
    let fx = '';
    if (mood === 'happy' || mood === 'laugh' || P.blast) fx += [[48, cy - 14, 3], [54, cy - 26, 4], [50, cy - 40, 2.6]].map(b => `<circle cx="${b[0]}" cy="${b[1]}" r="${b[2]}" fill="#DDF3FF" fill-opacity=".6" stroke="${C.ink}" stroke-width="1.2"/>`).join('');
    if (P.blast) fx += K.sound(58, cy + 2, 1);
    if (mood === 'sleepy') fx += K.zz(34, cy - 40, 1);
    if (P.think) fx += K.qmark(40, cy - 38, 1);
    if (P.run || P.fly) fx += K.ink(`M-92 ${cy - 10} h-20 M-90 ${cy + 4} h-26 M-92 ${cy + 18} h-16`, 2, C.ink, 'stroke-opacity=".5"');
    return K.out(`<g transform="rotate(${rot} 0 ${cy})">${s}</g>` + fx, [12, cy - 38], { floats: true, lift: P.hop ? 14 : 0 });
  };

  /* ================= FROG (Indian bullfrog) ================= */
  X.frog = (pose, mood) => {
    const P = K.pose(pose);
    const G = '#7DA23A', GS = '#56752A', GF = '#6A8C30', BL = '#EFE6A8', DK = '#44581E', YE = '#E3D14C';
    const leap = P.run || P.fly || P.hop;
    const lift = P.hop ? 26 : P.run ? 14 : P.fly ? 32 : 0;
    let s = '', eyeC, mouth, head;
    const web = (p, dir = 1) => K.mass([[p[0] - 2, p[1] - 4], [p[0] + 16 * dir, p[1] - 5], [p[0] + 22 * dir, p[1] - 1], [p[0] + 18 * dir, p[1] + 2], [p[0] - 4, p[1] + 2]], GF, { ow: 2, off: [-2, -2], over: K.ink(`M${p[0]} ${p[1] - 1} l${20 * dir} -3 M${p[0]} ${p[1] - 1} l${18 * dir} 1`, 1, C.ink, 'stroke-opacity=".5"') });
    const hand = (p) => [[-4, 0], [0, 1], [4, 0]].map(d => K.ink(`M${p[0]} ${p[1] - 2} l${d[0]} ${4 + d[1]}`, 3, C.ink) + K.ink(`M${p[0]} ${p[1] - 2} l${d[0]} ${4 + d[1]}`, 1.4, GF)).join('');
    const spots = (list) => list.map(q => K.fill([[q[0] - q[2], q[1]], [q[0], q[1] - q[2] * 0.7], [q[0] + q[2], q[1]], [q[0], q[1] + q[2] * 0.7]], DK, 'fill-opacity=".8"')).join('');
    if (leap) {
      s += K.limb([[-22, -44], [-48, -34], [-74, -26], [-86, -22]], [18, 11, 8, 7], GF, { sh: GS }) + web([-86, -20], -1);
      s += K.mass([[-34, -42], [-22, -60], [4, -70], [24, -72], [40, -66], [50, -56], [46, -46], [30, -38], [10, -32], [-16, -30]], G, { sh: GS, off: [-6, -7], hi: '#A9C85E', hiK: 0.4, inner: K.fill([[46, -52], [30, -44], [10, -40], [12, -48], [34, -52]], BL) + spots([[-14, -50, 5], [0, -58, 4], [-24, -44, 4]]) + K.ink('M-30 -46 Q0 -66 30 -66', 2.2, YE) });
      s += K.limb([[-18, -42], [-44, -38], [-70, -32], [-82, -30]], [20, 12, 9, 7], G, { sh: GS }) + web([-82, -28], -1);
      s += K.limb([[30, -46], [42, -32], [48, -24]], [9, 7, 5], G, { sh: GS }) + hand([48, -22]);
      eyeC = [34, -68]; mouth = 'M50 -56 Q40 -50 26 -54';
    } else {
      s += K.limb([[20, -24], [21, -12], [22, -3]], [7, 6, 5], GF, { sh: GS }) + hand([21, -1]);
      s += K.mass([[-30, -6], [-36, -20], [-30, -36], [-12, -46], [8, -50], [26, -52], [38, -46], [46, -36], [44, -28], [34, -24], [24, -18], [14, -10], [0, -4], [-18, -2]], G, { sh: GS, off: [-7, -8], hi: '#A9C85E', hiK: 0.4, inner: K.fill([[44, -30], [30, -22], [16, -10], [4, -4], [12, -18], [30, -28]], BL) + spots([[-16, -36, 5], [-2, -44, 4], [-26, -24, 4], [4, -30, 3.5]]) + K.ink('M-30 -30 Q-4 -50 26 -52', 2.2, YE) });
      s += K.mass([[-30, -12], [-28, -28], [-10, -30], [2, -20], [-6, -8], [-24, -4]], G, { sh: GS, off: [-4, -5], inner: spots([[-18, -20, 4]]) });
      s += K.limb([[-24, -10], [-2, -7]], [11, 8], G, { sh: GS }) + web([-2, -3]);
      const arm = P.wave ? [[24, -24], [34, -36], [40, -48]] : P.point ? [[24, -24], [38, -26], [52, -28]] : [[26, -24], [27, -12], [28, -3]];
      s += K.limb(arm, [8, 6.5, 5], G, { sh: GS }) + hand([arm[2][0], arm[2][1] + 2]);
      eyeC = [26, -52]; mouth = mood === 'sad' || mood === 'scared' ? 'M45 -30 Q34 -32 18 -30' : 'M45 -31 Q34 -25 17 -32';
    }
    if (P.blast) s += K.mass([[eyeC[0] + 2, eyeC[1] + 26], [eyeC[0] + 18, eyeC[1] + 24], [eyeC[0] + 22, eyeC[1] + 36], [eyeC[0] + 10, eyeC[1] + 42], [eyeC[0] - 2, eyeC[1] + 36]], '#F2ECC8', { ow: 2.2, off: [-2, -3], sh: '#D6CC98' });
    s += K.ink(mouth, 1.8);
    if (P.blast || mood === 'laugh' || mood === 'surprised') s += K.mass([[eyeC[0] + 2, eyeC[1] + 20], [eyeC[0] + 18, eyeC[1] + 20], [eyeC[0] + 12, eyeC[1] + 26], [eyeC[0] + 4, eyeC[1] + 25]], '#5A1B22', { ow: 1.4, sh: false });
    s += K.mass([[eyeC[0] - 16, eyeC[1] + 12], [eyeC[0] - 10, eyeC[1] + 6], [eyeC[0] - 4, eyeC[1] + 12], [eyeC[0] - 10, eyeC[1] + 17]], GS, { ow: 1.4, sh: false, t: 1 });
    s += K.mass([[eyeC[0] - 9, eyeC[1] + 4], [eyeC[0] - 6, eyeC[1] - 7], [eyeC[0] + 2, eyeC[1] - 10], [eyeC[0] + 9, eyeC[1] - 6], [eyeC[0] + 10, eyeC[1] + 4]], G, { sh: GS, off: [-2, -3], ow: 2.4 });
    s += K.eye(eyeC[0] + 1, eyeC[1] - 1, 5.8, mood, { iris: '#D9A92A', pupil: 'bar', lid: G, round: true, bw: 1.4, sw: 1.5 });
    if (mood === 'sad') s += K.tear(eyeC[0], eyeC[1] + 6, 0.7);
    if (mood === 'scared') s += K.sweat(eyeC[0] - 20, eyeC[1] - 10, 0.8);
    let fx = '';
    if (P.blast) fx += K.sound(eyeC[0] + 30, eyeC[1] + 30, 1);
    if (mood === 'sleepy') fx += K.zz(eyeC[0] + 10, eyeC[1] - 22, 1);
    if (P.think) fx += K.qmark(eyeC[0] + 18, eyeC[1] - 22, 1);
    return K.out(s + fx, [eyeC[0], eyeC[1] - 18], { lift, rot: P.hop ? -8 : 0, pivot: [0, 0] });
  };

  /* ================= DOLPHIN (bottlenose) ================= */
  X.dolphin = (pose, mood) => {
    const P = K.pose(pose);
    const G = '#7F97AE', GS = '#5A7089', GD = '#627A93', BL = '#E1E9F0';
    let rot = 0; if (P.run || P.fly) rot = -16; if (P.hop) rot = -28; if (mood === 'sad') rot = 10; if (P.lie || P.sit) rot = 4;
    let s = '';
    const flukeUp = P.run || P.fly || P.hop ? 8 : 0;
    s += K.mass([[-88, -68], [-104, -86 - flukeUp], [-118, -92 - flukeUp], [-112, -78], [-100, -68]], GD, { sh: GS, off: [-2, -3], ow: 2.4 });
    s += K.mass([[-4, -104], [-14, -126], [-26, -132], [-22, -120], [-30, -100]], GD, { sh: GS, off: [-3, -3], ow: 2.4 });
    const open = P.blast || mood === 'laugh' || mood === 'surprised';
    const body = open
      ? [[94, -73], [80, -76], [68, -92], [34, -106], [0, -106], [-30, -100], [-60, -86], [-86, -72], [-96, -66], [-84, -60], [-54, -54], [-14, -50], [30, -52], [62, -58], [78, -60], [92, -60], [80, -66]]
      : [[94, -70], [80, -74], [68, -92], [34, -106], [0, -106], [-30, -100], [-60, -86], [-86, -72], [-96, -66], [-84, -60], [-54, -54], [-14, -50], [30, -52], [62, -58], [80, -64]];
    s += K.mass(body, G, { sh: GS, off: [-9, -10], hi: '#A9BED2', hiK: 0.4, hiOp: 0.7, inner: K.fill([[94, -66], [70, -62], [30, -58], [-20, -58], [-60, -60], [-60, -40], [40, -40], [96, -52]], BL) + K.fill([[60, -96], [30, -110], [-30, -104], [-70, -86], [-30, -94], [20, -98]], GD, 'fill-opacity=".6"') });
    s += K.mass([[-94, -66], [-108, -50 - flukeUp * 0.5], [-122, -46 - flukeUp * 0.5], [-112, -60]], G, { sh: GS, off: [-2, -3], ow: 2.4 });
    const fl = P.wave ? [[42, -60], [52, -80], [60, -86], [56, -70], [48, -58]] : [[44, -60], [32, -42], [24, -38], [28, -50], [36, -58]];
    s += K.mass(fl, GD, { sh: GS, off: [-2, -3], ow: 2.4 });
    if (open) s += K.mass([[80, -70], [92, -69], [90, -63], [78, -64]], '#5A2A34', { ow: 1.4, sh: false });
    s += K.ink(mood === 'sad' || mood === 'scared' ? 'M92 -67 Q80 -66 68 -66' : 'M92 -67 Q78 -66 66 -72', 1.6);
    s += K.dot(50, -99, 1.6, C.ink);
    s += K.eye(62, -80, 3.6, mood, { iris: '#2A2A3A', lid: G, round: true, bw: 1.3, sw: 1.4 });
    if (mood === 'sad') s += K.tear(62, -76, 0.7);
    if (mood === 'scared') s += K.sweat(40, -118, 0.8);
    let fx = '';
    if (P.blast) fx += K.sound(104, -70, 1.1);
    if (mood === 'sleepy') fx += K.zz(74, -112, 1);
    if (P.think) fx += K.qmark(84, -110, 1);
    if (P.hop || P.fly) fx += [[-60, -30, 3], [-40, -22, 4], [-76, -24, 2.6], [-20, -28, 2.4]].map(b => `<circle cx="${b[0]}" cy="${b[1]}" r="${b[2]}" fill="#9ED8FF" stroke="${C.ink}" stroke-width="1.2"/>`).join('');
    return K.out(`<g transform="rotate(${rot} 0 -76)">${s}</g>` + fx, [44, -128], { floats: true, lift: P.hop ? 20 : 0 });
  };

  /* ================= BHOLU (baby Asian elephant) ================= */
  X.bholu = (pose, mood) => {
    const P = K.pose(pose);
    const E = '#9097A4', ES = '#6C7382', EF = '#7E8594', EFS = '#5E6574', EL = '#B8BEC9', PNK = '#D9A7AA', NAIL = '#EDE3CF';
    const low = P.sit || P.lie, run = P.run || P.fly;
    const lift = P.hop ? 10 : P.run ? 8 : P.fly ? 26 : 0;
    const dy = low ? 36 : 0;
    let s = '';
    const nails = (x, y) => [-8, 0, 8].map(d => K.mass([[x + d - 3.5, y - 5], [x + d + 3.5, y - 5], [x + d + 3.5, y], [x + d - 3.5, y]], NAIL, { ow: 1.4, sh: false, t: 1 })).join('');
    const leg = (pts, col, sh) => { const t = pts[pts.length - 1]; return K.limb(pts, [34, 29, 28], col, { sh, over: [0.35, 0.55, 0.75].map(k => { const y = pts[0][1] + (t[1] - pts[0][1]) * k; return K.ink(`M${n(t[0] - 10)} ${n(y)} q10 3 20 0`, 1.2, C.ink, 'stroke-opacity=".4"'); }).join('') }) + nails(t[0] + 2, t[1] + 4); };
    // tail
    const tt = run ? [[-62, -82 + dy], [-80, -84 + dy], [-92, -78 + dy]] : [[-64, -80 + dy], [-72, -64 + dy], [-74, -46 + dy]];
    s += K.limb(tt, [7, 5, 4], E, { sh: ES }) + K.mass([[tt[2][0] - 4, tt[2][1] - 2], [tt[2][0] + 4, tt[2][1] - 2], [tt[2][0] + 3, tt[2][1] + 9], [tt[2][0] - 3, tt[2][1] + 9]], '#3A3A44', { ow: 1.8, off: [-1, -2] });
    // legs
    if (low) {
      s += leg([[22, -26], [48, -14], [66, -8]], EF, EFS);
      s += leg([[-40, -30], [-18, -16], [6, -8]], EF, EFS);
    } else {
      const F = run ? { nf: [[34, -62], [48, -32], [58, -8]], ff: [[22, -62], [12, -32], [4, -6]], nh: [[-44, -64], [-54, -34], [-66, -10]], fh: [[-32, -64], [-24, -34], [-18, -4]] }
        : P.hop ? { nf: [[34, -62], [50, -42], [52, -22]], ff: [[22, -62], [36, -44], [40, -26]], nh: [[-44, -64], [-44, -34], [-48, -4]], fh: [[-32, -64], [-32, -34], [-34, -4]] }
          : { nf: [[34, -62], [35, -32], [36, -4]], ff: [[22, -62], [21, -32], [20, -4]], nh: [[-44, -64], [-42, -34], [-46, -4]], fh: [[-32, -64], [-31, -34], [-32, -4]] };
      if (P.wave) F.nf = [[34, -62], [52, -54], [60, -34]];
      s += leg(F.ff, EF, EFS) + leg(F.fh, EF, EFS);
      s += leg(F.nh, E, ES);
      var nf = F.nf;
    }
    const body = [[-66, -58], [-62, -86], [-44, -104], [-14, -110], [16, -108], [38, -100], [52, -84], [50, -62], [40, -44], [10, -40], [-20, -40], [-46, -44], [-62, -50]].map(p => [p[0], p[1] + dy]);
    s += K.mass(body, E, { sh: ES, off: [-9, -11], ht: 0.45, hi: EL, hiK: 0.35, hiOp: 0.6, over: K.ink(`M-54 ${-92 + dy} q20 10 16 44 M30 ${-96 + dy} q-10 20 -4 46`, 1.4, C.ink, 'stroke-opacity=".45"') + [-40, -20, 0, 20].map(x => K.ink(`M${x} ${-70 + dy} q4 8 0 16`, 1, C.ink, 'stroke-opacity=".3"')).join('') });
    if (!low) s += leg(nf, E, ES);
    // head
    let hr = 0; if (mood === 'sad') hr = 10; if (P.think) hr = 8; if (P.blast || P.hop) hr = -8; if (P.lie && mood === 'sleepy') hr = 14;
    const H = { x: 62, y: -104 + dy + (mood === 'sad' ? 4 : 0), r: hr };
    let h = '';
    const up = P.hop || P.wave || (mood === 'happy' && P.stand) || mood === 'laugh';
    let tr;
    if (P.blast) tr = [[26, 2], [44, -4], [58, -20], [70, -42]];
    else if (P.point) tr = [[26, 2], [44, 8], [64, 8], [86, 2]];
    else if (P.think) tr = [[26, 2], [36, 18], [30, 32], [18, 26]];
    else if (up && !low) tr = [[26, 2], [44, -8], [50, -32], [42, -52], [32, -54]];
    else if (low && mood === 'sleepy') tr = [[26, 2], [36, 18], [40, 36], [52, 42]];
    else tr = [[26, 2], [36, 20], [38, 44], [34, 62], [40, 70]];
    const tws = tr.map((p, i) => 22 - i * (13 / (tr.length - 1)));
    const trunk = K.limb(tr, tws, E, { sh: ES, inner: K.stripes(tr, tws, [0.5, 0.8, 1.1, 1.4, 1.7, 2.0, 2.3, 2.6, 2.9, 3.2].filter(t => t < tr.length - 1.1), '#6E7584', 0.06) });
    const te = tr[tr.length - 1];
    let tip = K.dot(te[0], te[1], 2.4, '#3A3A44');
    if (P.blast) tip = K.mass([[te[0] - 8, te[1] + 4], [te[0] + 4, te[1] - 10], [te[0] + 12, te[1] - 2], [te[0] + 2, te[1] + 10]], E, { sh: ES, ow: 2.4, off: [-2, -2] }) + K.dot(te[0] + 3, te[1], 2.6, '#3A3A44');
    h += K.mass([[-28, -16], [-14, -34], [0, -38], [8, -35], [18, -32], [28, -18], [32, 0], [28, 16], [14, 26], [-2, 28], [-18, 20], [-28, 6]], E, { sh: ES, off: [-6, -7], hi: EL, hiK: 0.4, hiOp: 0.6, over: K.ink('M3 -37 q2 6 -1 12', 1.3, C.ink, 'stroke-opacity=".5"') + K.ink('M8 -2 q4 -8 12 -6 M6 4 q6 -6 14 -2', 1.1, C.ink, 'stroke-opacity=".4"') + K.fur([[-10, -34, -1, -5], [-4, -37, 0, -5], [2, -38, 1, -5], [8, -36, 2, -5], [14, -33, 3, -4]], '#5E6574', 1.3, 0.9) });
    const open = P.blast || mood === 'laugh' || mood === 'surprised' || P.hop;
    h += open ? K.mass([[10, 16], [24, 18], [22, 30], [12, 30]], '#8A3A4A', { ow: 2, sh: false, inner: K.fill([[12, 24], [22, 24], [20, 30], [13, 30]], '#E27E8C') }) : K.mass([[10, 18], [22, 18], [20, 25], [12, 25]], '#A07E86', { ow: 2, sh: false });
    h += trunk + tip;
    const earR = mood === 'surprised' ? -24 : mood === 'happy' || mood === 'laugh' || P.hop ? -12 : mood === 'scared' || mood === 'angry' ? 16 : mood === 'sad' || mood === 'sleepy' ? 26 : 0;
    const earPts = [[-8, -20], [-24, -26], [-38, -16], [-42, 6], [-34, 24], [-20, 30], [-8, 20], [-5, 0]];
    h += K.g(K.mass(earPts, E, { sh: ES, off: [-4, -5], inner: K.fill([[-38, -18], [-26, -30], [-44, -8], [-46, 10], [-40, 28], [-34, 20], [-38, 4]], PNK, 'fill-opacity=".55"'), over: K.ink('M-12 -20 q-18 -4 -26 6', 1.3, C.ink, 'stroke-opacity=".5"') }), { x: 0, y: 0, r: 0 }).replace('<g transform="translate(0 0)">', `<g transform="rotate(${earR} -6 -4)">`);
    h += K.eye(14, -8, 5.4, mood, { iris: '#3A2414', lid: E, lash: true, round: true, bw: 1.6, look: 1 });
    if (mood === 'sad') h += K.tear(12, -1, 1);
    if (mood === 'scared') h += K.sweat(-20, -40, 1);
    s += K.g(h, H);
    const top = [H.x, H.y - 46];
    let fx = '';
    if (P.blast) { const t2 = K.tp(te, H); fx += K.sound(t2[0] + 8, t2[1] - 4, 1.3) + [[10, -14, 3], [18, -6, 2.4], [6, -24, 2.2]].map(b => `<circle cx="${n(t2[0] + b[0])}" cy="${n(t2[1] + b[1])}" r="${b[2]}" fill="#9ED8FF" stroke="${C.ink}" stroke-width="1.2"/>`).join(''); }
    if (mood === 'sleepy') fx += K.zz(H.x + 30, H.y - 50, 1.1);
    if (P.think) fx += K.qmark(H.x + 36, H.y - 50, 1.1);
    return K.out(s + fx, top, { lift, rot: P.hop ? -6 : run ? -2 : 0, pivot: [-50, 0] });
  };

  Object.keys(X).forEach(k => { A.EXTRA[k] = (pose, mood, opt) => X[k](pose || 'stand', mood || 'happy', opt || {}); });
})();
