/* Auggi Comics — art engine core: palette, SVG helpers, faces, halftone defs. */
(function () {
  const A = (window.AuggiArt = window.AuggiArt || {});

  const C = (A.C = {
    ink: '#16142B', paper: '#FFFBF0', white: '#FFFFFF',
    red: '#E63329', redD: '#B01E18', blue: '#1D5BD8', blueD: '#123C99',
    yel: '#FFD400', yelD: '#F29F05', orange: '#FF8A1F', pink: '#FF5C8A',
    purple: '#7B3FC4', purpleD: '#57269A', cyan: '#5CF2FF', teal: '#14B8A6',
    green: '#35B24A', greenD: '#1E7A31', leaf: '#5ACB5F', lime: '#A7E34B',
    brown: '#8A5A33', brownD: '#5E3A1E', sand: '#F3D48B', sky: '#7FD3FF',
    silver: '#E6EEF8', silverD: '#A9BBD3', grey: '#8C94A8', greyD: '#5F6678',
    screen: '#1B2440', mouth: '#7A1020', tongue: '#FF7A8A', cheek: '#FF8FA3',
    tear: '#4FB6FF', water: '#2E8BEF',
  });

  let LW = 5;
  A.setLW = v => { LW = v; };
  A.getLW = () => LW;

  const n = v => Math.round(v * 10) / 10;
  A.n = n;
  const st = sw => (sw === 0 ? 'stroke="none"' : `stroke="${C.ink}" stroke-width="${sw == null ? LW : sw}" stroke-linejoin="round" stroke-linecap="round"`);
  A.st = st;
  // Default stroke attrs, minus any the caller overrides in `extra` (duplicate attributes are invalid XML
  // and would break SVG-to-image rendering for PDFs).
  const sx = (sw, extra) => {
    let s = st(sw);
    if (/(^|\s)stroke="/.test(extra)) s = s.replace(/stroke="[^"]*"/, '');
    if (/stroke-width="/.test(extra)) s = s.replace(/stroke-width="[^"]*"/, '');
    return s + ' ' + extra;
  };

  A.path = (d, fill = 'none', sw, extra = '') => `<path d="${d}" fill="${fill}" ${sx(sw, extra)}/>`;
  A.circ = (cx, cy, r, fill = C.white, sw, extra = '') => `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}" fill="${fill}" ${sx(sw, extra)}/>`;
  A.ell = (cx, cy, rx, ry, fill = C.white, sw, extra = '') => `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${fill}" ${sx(sw, extra)}/>`;
  A.rect = (x, y, w, h, rx, fill = C.white, sw, extra = '') => `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${n(rx || 0)}" fill="${fill}" ${sx(sw, extra)}/>`;
  A.poly = (pts, fill = C.white, sw, extra = '') => `<polygon points="${pts.map(p => n(p[0]) + ',' + n(p[1])).join(' ')}" fill="${fill}" ${sx(sw, extra)}/>`;
  A.line = (x1, y1, x2, y2, sw, color = C.ink, extra = '') => `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${color}" stroke-width="${sw == null ? LW : sw}" stroke-linecap="round" ${extra}/>`;
  A.g = (inner, tr) => `<g${tr ? ` transform="${tr}"` : ''}>${inner}</g>`;

  // Thick outlined limb: ink stroke under a colour stroke.
  A.limb = (pts, color, width) => {
    const d = 'M' + pts.map(p => n(p[0]) + ' ' + n(p[1])).join(' L');
    return `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${n(width + LW * 1.6)}" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<path d="${d}" fill="none" stroke="${color}" stroke-width="${n(width)}" stroke-linecap="round" stroke-linejoin="round"/>`;
  };
  // Smooth curve limb through 3 points (quadratic via mid control)
  A.curveLimb = (a, c, b, color, width) => {
    const d = `M${n(a[0])} ${n(a[1])} Q${n(c[0])} ${n(c[1])} ${n(b[0])} ${n(b[1])}`;
    return `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${n(width + LW * 1.6)}" stroke-linecap="round"/>` +
      `<path d="${d}" fill="none" stroke="${color}" stroke-width="${n(width)}" stroke-linecap="round"/>`;
  };

  /* ---------- "realistic" toolkit: smooth silhouettes, tapered limbs, cel shading ---------- */
  // Darken (amt > 0) or lighten (amt < 0) a hex colour.
  A.shade = (hex, amt) => {
    const h = hex.replace('#', '');
    const v = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    const f = c => Math.max(0, Math.min(255, Math.round(amt >= 0 ? c * (1 - amt) : c + (255 - c) * -amt)));
    const r = f(v >> 16), g = f((v >> 8) & 255), b = f(v & 255);
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  };
  // Smooth path through points (Catmull-Rom -> cubic Bezier). closed = true joins the ends.
  A.spline = (pts, closed = true, t = 1) => {
    const P = pts, N = P.length;
    if (N < 2) return '';
    const g = i => closed ? P[(i + N) % N] : P[Math.max(0, Math.min(N - 1, i))];
    let d = `M${n(P[0][0])} ${n(P[0][1])}`;
    const last = closed ? N : N - 1;
    for (let i = 0; i < last; i++) {
      const p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
      const c1 = [p1[0] + (p2[0] - p0[0]) * t / 6, p1[1] + (p2[1] - p0[1]) * t / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) * t / 6, p2[1] - (p3[1] - p1[1]) * t / 6];
      d += ` C${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(p2[0])} ${n(p2[1])}`;
    }
    return closed ? d + ' Z' : d;
  };
  // Filled shape with an ink contour: fill + optional cel-shadow shape clipped inside it.
  // ow = outline width. shadow = {d, color} drawn clipped to the shape.
  A.shape = (d, fill, ow = 3, shadow, extra = '') => {
    let s = `<path d="${d}" fill="${fill}" stroke="${C.ink}" stroke-width="${ow}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
    if (shadow) {
      const id = A.uid('cl');
      s = `<clipPath id="${id}"><path d="${d}"/></clipPath>` + s.replace('/>', '/>') +
        `<g clip-path="url(#${id})">${[].concat(shadow).map(sh => `<path d="${sh.d}" fill="${sh.color}" ${sh.extra || ''}/>`).join('')}</g>` +
        `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${ow}" stroke-linejoin="round"/>`;
    }
    return s;
  };
  // Tapered limb through 2-4 joints. w = widths at each joint. Light comes from the upper left,
  // so a hard-edged shadow runs down the right/lower side. Returns an ink-underlaid, merged silhouette.
  A.taper = (pts, w, color, opt = {}) => {
    const ow = opt.ow == null ? 2.8 : opt.ow;
    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
      const L = Math.hypot(x2 - x1, y2 - y1) || 1;
      let nx = -(y2 - y1) / L, ny = (x2 - x1) / L; // normal
      if (nx < 0 || (Math.abs(nx) < 0.2 && ny < 0)) { nx = -nx; ny = -ny; } // point to shadow side (right/down)
      const r1 = w[i] / 2, r2 = w[i + 1] / 2;
      const q = (x, y, r, k) => [x + nx * r * k, y + ny * r * k];
      segs.push({ poly: [q(x1, y1, r1, 1), q(x2, y2, r2, 1), q(x2, y2, r2, -1), q(x1, y1, r1, -1)], sh: [q(x1, y1, r1, 0.3), q(x2, y2, r2, 0.3), q(x2, y2, r2, 1.02), q(x1, y1, r1, 1.02)] });
    }
    const pp = p => p.map(v => n(v[0]) + ',' + n(v[1])).join(' ');
    const joints = pts.map((p, i) => [p, w[i] / 2]);
    const body = (fill, extra) => segs.map(s => `<polygon points="${pp(s.poly)}" fill="${fill}" ${extra}/>`).join('') +
      joints.map(([p, r]) => `<circle cx="${n(p[0])}" cy="${n(p[1])}" r="${n(r)}" fill="${fill}" ${extra}/>`).join('');
    let s = body(C.ink, `stroke="${C.ink}" stroke-width="${n(ow * 2)}" stroke-linejoin="round"`);
    s += body(color, '');
    if (opt.shadow !== false) s += segs.map(sg => `<polygon points="${pp(sg.sh)}" fill="${opt.shadowColor || A.shade(color, 0.2)}"/>`).join('');
    if (opt.hi) s += segs.map(sg => { const a = sg.poly[3], b = sg.poly[2]; return `<line x1="${n(a[0] * 0.8 + sg.poly[0][0] * 0.2)}" y1="${n(a[1] * 0.8 + sg.poly[0][1] * 0.2)}" x2="${n(b[0] * 0.8 + sg.poly[1][0] * 0.2)}" y2="${n(b[1] * 0.8 + sg.poly[1][1] * 0.2)}" stroke="#fff" stroke-opacity=".28" stroke-width="${n(Math.min(w[0], w[1] || w[0]) * 0.14)}" stroke-linecap="round"/>`; }).join('');
    return s;
  };
  // Short fur / hair strokes along a line of points (texture).
  A.strokes = (list, color, sw = 1.6, op = 1) => list.map(([x1, y1, x2, y2]) => `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-opacity="${op}"/>`).join('');
  A.ink = (d, sw = 2, color = C.ink, extra = '') => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;

  // Deterministic random
  A.rng = seed => {
    let t = (seed >>> 0) + 0x6d2b79f5;
    return () => {
      t += 0x6d2b79f5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  };
  A.hash = s => { let h = 2166136261; for (const ch of String(s)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };

  let uidN = 0;
  A.uid = p => (p || 'u') + (++uidN).toString(36);

  // Shared defs: halftone patterns and gradients (identical everywhere, so duplicate ids are harmless)
  A.defs = () => `<defs>
<pattern id="ht-dark" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><circle cx="2.5" cy="2.5" r="1.7" fill="${C.ink}" fill-opacity=".16"/></pattern>
<pattern id="ht-light" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><circle cx="2.5" cy="2.5" r="1.7" fill="#fff" fill-opacity=".35"/></pattern>
<pattern id="ht-big" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><circle cx="4" cy="4" r="3.4" fill="${C.ink}" fill-opacity=".12"/></pattern>
<radialGradient id="glow-y"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="${C.yel}"/><stop offset="1" stop-color="${C.yel}" stop-opacity="0"/></radialGradient>
<radialGradient id="glow-c"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="${C.cyan}"/><stop offset="1" stop-color="${C.cyan}" stop-opacity="0"/></radialGradient>
<radialGradient id="glow-r"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="#FF6B5E"/><stop offset="1" stop-color="#FF6B5E" stop-opacity="0"/></radialGradient>
</defs>`;

  A.halftone = (x, y, w, h, kind = 'dark') => `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="url(#ht-${kind})"/>`;

  // Vertical gradient helper (returns {id, def})
  A.vgrad = (id, stops) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${stops.map((c, i) => `<stop offset="${n(i / (stops.length - 1))}" stop-color="${c}"/>`).join('')}</linearGradient>`;

  // Starburst polygon points
  A.burstPts = (cx, cy, r1, r2, spikes, rot = 0, jitter = 0, rnd = Math.random) => {
    const pts = [];
    for (let i = 0; i < spikes * 2; i++) {
      const a = rot + (Math.PI * i) / spikes;
      const r = (i % 2 ? r2 : r1) * (1 + (jitter ? (rnd() - 0.5) * jitter : 0));
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    return pts;
  };

  // Zig-zag "Z" for sleepy
  const zee = (x, y, s) => A.path(`M${x} ${y} h${s} l${-s} ${s} h${s}`, 'none', LW * 0.5);

  /* Face: cx,cy = face centre, s = scale (1 ≈ head radius 34), mood, opts {robot, look}
     Human eyes: white + pupil. Robot eyes: glowing cyan shapes on dark screen. */
  A.face = (cx, cy, s, mood = 'happy', o = {}) => {
    const robot = !!o.robot;
    const ec = o.eyeColor || C.cyan;
    const lk = (o.look == null ? 1.6 : o.look) * s;
    const ex = 12.5 * s * (o.eyeSpread || 1), ey = cy - 2 * s;
    const sw = LW * (o.lw || 0.75);
    const mcol = robot ? ec : C.ink;
    let out = '';
    const eyes = [cx - ex, cx + ex];
    const brow = (dir) => { // dir: 1 = angry (inner down), -1 = sad (inner up), 0 = raised
      if (robot && !o.brows) return '';
      return eyes.map((x, i) => {
        const inner = i === 0 ? 1 : -1; // inner side direction
        const y0 = ey - 13 * s;
        const dy = dir * 5 * s;
        const x1 = x - 7 * s * inner, x2 = x + 7 * s * inner;
        return A.line(x1, y0 - (dir === 0 ? 4 * s : 0) - dy * 0.2, x2, y0 + dy - (dir === 0 ? 4 * s : 0), sw * 1.1);
      }).join('');
    };
    const roundEyes = (rx, ry, pr, py = 0) => eyes.map(x => robot
      ? `<ellipse cx="${n(x)}" cy="${n(ey)}" rx="${n(rx)}" ry="${n(ry)}" fill="${ec}"/><ellipse cx="${n(x - rx * 0.25)}" cy="${n(ey - ry * 0.35)}" rx="${n(rx * 0.35)}" ry="${n(ry * 0.3)}" fill="#fff"/>`
      : A.ell(x, ey, rx, ry, '#fff', sw) + A.circ(x + lk, ey + py, pr, C.ink, 0) + A.circ(x + lk - pr * 0.35, ey + py - pr * 0.4, pr * 0.35, '#fff', 0)).join('');
    const arcEyes = (up) => eyes.map(x => `<path d="M${n(x - 7 * s)} ${n(ey + (up ? 2 : -2) * s)} Q${n(x)} ${n(ey + (up ? -8 : 6) * s)} ${n(x + 7 * s)} ${n(ey + (up ? 2 : -2) * s)}" fill="none" stroke="${robot ? ec : C.ink}" stroke-width="${n(sw * (robot ? 1.8 : 1.2))}" stroke-linecap="round"/>`).join('');
    const halfEyes = (angry) => eyes.map((x, i) => {
      const inner = i === 0 ? 1 : -1;
      const top1 = ey - 7 * s + (angry ? -3 * s : 0), top2 = ey - 7 * s + (angry ? 4 * s : 1 * s);
      const xa = x - 7 * s * inner, xb = x + 7 * s * inner;
      const d = `M${n(xa)} ${n(top1)} L${n(xb)} ${n(top2)} Q${n(xb)} ${n(ey + 8 * s)} ${n(x)} ${n(ey + 8 * s)} Q${n(xa)} ${n(ey + 8 * s)} ${n(xa)} ${n(top1)} Z`;
      return robot ? `<path d="${d}" fill="${ec}"/>` : A.path(d, '#fff', sw) + A.circ(x + lk * 0.6, ey + 2 * s, 3.6 * s, C.ink, 0);
    }).join('');
    const mouthArc = (y1, y2, w = 10) => `<path d="M${n(cx - w * s)} ${n(cy + y1 * s)} Q${n(cx)} ${n(cy + y2 * s)} ${n(cx + w * s)} ${n(cy + y1 * s)}" fill="none" stroke="${mcol}" stroke-width="${n(sw * (robot ? 1.6 : 1))}" stroke-linecap="round"/>`;
    const openMouth = (y1, y2, w = 12) => robot
      ? `<path d="M${n(cx - w * s)} ${n(cy + y1 * s)} Q${n(cx)} ${n(cy + y2 * s)} ${n(cx + w * s)} ${n(cy + y1 * s)} Z" fill="${ec}"/>`
      : A.path(`M${n(cx - w * s)} ${n(cy + y1 * s)} Q${n(cx)} ${n(cy + y2 * s)} ${n(cx + w * s)} ${n(cy + y1 * s)} Z`, C.mouth, sw) +
        A.ell(cx, cy + (y1 + (y2 - y1) * 0.38) * s, w * 0.42 * s, 3.2 * s, C.tongue, 0);
    const cheeks = () => (robot || o.noCheeks) ? '' : A.ell(cx - 20 * s, cy + 9 * s, 5 * s, 3 * s, C.cheek, 0, 'opacity=".7"') + A.ell(cx + 20 * s, cy + 9 * s, 5 * s, 3 * s, C.cheek, 0, 'opacity=".7"');

    switch (mood) {
      case 'laugh':
        out += arcEyes(true) + openMouth(11, 30, 12) + cheeks(); break;
      case 'sad':
        out += roundEyes(6.5 * s, 8 * s, 4 * s, 2.5 * s) + brow(-1) + mouthArc(20, 13, 8);
        out += `<path d="M${n(cx - ex - 4 * s)} ${n(ey + 9 * s)} q${n(-3 * s)} ${n(6 * s)} 0 ${n(8 * s)} q${n(3 * s)} ${n(-2 * s)} 0 ${n(-8 * s)}Z" fill="${C.tear}" stroke="${C.ink}" stroke-width="${n(sw * 0.5)}"/>`;
        break;
      case 'surprised':
        out += roundEyes(8 * s, 10.5 * s, 3.4 * s) + brow(0);
        out += robot ? `<ellipse cx="${n(cx)}" cy="${n(cy + 17 * s)}" rx="${n(5 * s)}" ry="${n(6.5 * s)}" fill="${ec}"/>` : A.ell(cx, cy + 17 * s, 5 * s, 6.5 * s, C.mouth, sw);
        break;
      case 'angry':
        out += halfEyes(true) + brow(1) + (robot ? mouthArc(20, 14, 9) : A.rect(cx - 9 * s, cy + 13 * s, 18 * s, 7 * s, 2 * s, '#fff', sw) + A.line(cx, cy + 13 * s, cx, cy + 20 * s, sw * 0.6));
        break;
      case 'scared':
        out += roundEyes(8 * s, 10 * s, 2.6 * s) + brow(-1);
        out += `<path d="M${n(cx - 11 * s)} ${n(cy + 18 * s)} q${n(3.6 * s)} ${n(-4 * s)} ${n(7.3 * s)} 0 t${n(7.3 * s)} 0 t${n(7.3 * s)} 0" fill="none" stroke="${mcol}" stroke-width="${n(sw)}" stroke-linecap="round"/>`;
        if (!robot) out += `<path d="M${n(cx + 30 * s)} ${n(cy - 16 * s)} q${n(-4 * s)} ${n(7 * s)} 0 ${n(9 * s)} q${n(4 * s)} ${n(-2 * s)} 0 ${n(-9 * s)}Z" fill="${C.tear}" stroke="${C.ink}" stroke-width="${n(sw * 0.5)}"/>`;
        break;
      case 'determined':
        out += halfEyes(false) + brow(0.6) + `<path d="M${n(cx - 8 * s)} ${n(cy + 16 * s)} Q${n(cx + 2 * s)} ${n(cy + 21 * s)} ${n(cx + 10 * s)} ${n(cy + 12 * s)}" fill="none" stroke="${mcol}" stroke-width="${n(sw * (robot ? 1.6 : 1.1))}" stroke-linecap="round"/>`;
        break;
      case 'sleepy':
        out += arcEyes(false) + (robot ? `<ellipse cx="${n(cx)}" cy="${n(cy + 16 * s)}" rx="${n(3.5 * s)}" ry="${n(3 * s)}" fill="${ec}"/>` : A.ell(cx, cy + 16 * s, 3.5 * s, 3 * s, C.mouth, sw * 0.8));
        out += zee(cx + 26 * s, cy - 30 * s, 8 * s) + zee(cx + 38 * s, cy - 44 * s, 11 * s);
        break;
      default: // happy
        out += roundEyes(6.5 * s, 8.5 * s, 4.3 * s) + mouthArc(12, 25, 10) + cheeks();
    }
    return out;
  };
})();
