/* Auggie Comics — people, drawn in a realistic comic style.
   Front view, feet at y = 0, light from the upper left (hard cel shadows fall to the right).
   Registers into A.EXTRA, so these override the older cartoon people in art-chars.js. */
(function () {
  const A = window.AuggiArt, C = A.C, n = A.n;
  A.EXTRA = A.EXTRA || {};
  const rad = d => (d * Math.PI) / 180;
  const OW = 2.6, IW = 1.3;
  const INK = C.ink;
  const sp = A.spline, shade = A.shade;
  const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const dirv = (a, s) => (s === 'L' ? [-Math.sin(rad(a)), Math.cos(rad(a))] : [Math.sin(rad(a)), Math.cos(rad(a))]);
  const add = (p, d, l) => [p[0] + d[0] * l, p[1] + d[1] * l];
  const unit = (a, b) => { const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; };

  // path helpers (explicit strokes, no global line width)
  const F = (d, fill, ow = OW, extra = '') => `<path d="${d}" fill="${fill}" stroke="${INK}" stroke-width="${ow}" stroke-linejoin="round" stroke-linecap="round"${extra ? ' ' + extra : ''}/>`;
  const Fn = (d, fill, extra = '') => `<path d="${d}" fill="${fill}"${extra ? ' ' + extra : ''}/>`;
  const L = (d, sw = IW, col = INK, extra = '') => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${extra ? ' ' + extra : ''}/>`;
  const E = (cx, cy, rx, ry, fill, sw = 0, extra = '') => `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${fill}"${sw ? ` stroke="${INK}" stroke-width="${sw}"` : ''}${extra ? ' ' + extra : ''}/>`;
  const pts = a => a.map(p => n(p[0]) + ' ' + n(p[1]));
  const poly = a => 'M' + pts(a).join(' L') + ' Z';
  // mirror a right-hand outline into a closed symmetric loop
  const mir = (R, top, bot) => [].concat(top ? [top] : [], R, bot ? [bot] : [], R.slice().reverse().map(([x, y]) => [-x, y]));
  // shape with clipped cel shadows
  function shaded(d, fill, shadows, ow = OW, extra = '') {
    const id = A.uid('pc');
    return `<clipPath id="${id}"><path d="${d}"/></clipPath>` + Fn(d, fill, extra) +
      `<g clip-path="url(#${id})">${shadows.join('')}</g>` + `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${ow}" stroke-linejoin="round"/>`;
  }
  // several pieces merged under one ink silhouette
  const merged = (ds, fill, ow = OW) => ds.map(d => `<path d="${d}" fill="${INK}" stroke="${INK}" stroke-width="${n(ow * 2)}" stroke-linejoin="round"/>`).join('') + ds.map(d => Fn(d, fill)).join('');
  // a flat-ended tube along a->b (clothing on a limb)
  function tube(a, b, w0, w1, ext0 = 0, ext1 = 0) {
    const u = unit(a, b), nn = [-u[1], u[0]];
    const a2 = add(a, u, -ext0), b2 = add(b, u, ext1);
    return poly([add(a2, nn, w0 / 2), add(b2, nn, w1 / 2), add(b2, nn, -w1 / 2), add(a2, nn, -w0 / 2)]);
  }
  const rightShadow = (x0, y0, x1, y1, bulge = 0) => Fn(`M${n(x0)} ${n(y0)} Q${n((x0 + x1) / 2 + bulge)} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)} L${n(x1 + 400)} ${n(y1)} L${n(x0 + 400)} ${n(y0)} Z`, 'rgba(40,20,40,.17)');

  /* ------------------------------------------------------------------ cast */
  const SK = { papa: '#B98159', mumma: '#C98D66', mausi: '#C68B62', nanu: '#A7704C', dadi: '#93603F' };
  const PEOPLE = {
    papa: { kind: 'man', H: 45, leg: 100, torso: 60, neck: 7, sw: 30, hw: 12.5, waist: 25, hip: 25, belly: 3, skin: SK.papa, iris: '#3A2317',
      hair: 'tousled', hairColor: '#1B1411', hairHi: '#4A3A31', brow: '#1B1411', extras: ['beard', 'rectglasses', 'watch'],
      top: { type: 'tee', color: '#6A4430' }, bottom: { type: 'shorts', color: '#E0784C' }, shoe: { type: 'sneaker', color: '#ECE7DD', sole: '#FFFFFF' } },
    mumma: { kind: 'woman', H: 44, leg: 96, torso: 56, neck: 8, sw: 24, hw: 11, waist: 18, hip: 23, skin: SK.mumma, iris: '#3A2317', lip: '#B0505A',
      hair: 'longwavy', hairColor: '#1A1210', hairHi: '#4B3A32', brow: '#1E1512', extras: ['earrings', 'bag'],
      top: { type: 'dress', color: '#159FA5', hem: -34 }, shoe: { type: 'flat', color: '#C28650' } },
    mausi: { kind: 'woman', H: 43, leg: 98, torso: 55, neck: 8, sw: 23, hw: 10.5, waist: 17, hip: 22, skin: SK.mausi, iris: '#3A2317', lip: '#B85D63', young: true,
      hair: 'longwavy', hairColor: '#241712', hairEnds: '#8E5A34', hairHi: '#5A4336', brow: '#2A1B14', extras: ['studs'],
      top: { type: 'tee', color: '#F6F3EC', fitted: true }, bottom: { type: 'jeans', color: '#3E5F9E' }, shoe: { type: 'sneaker', color: '#FFFFFF', sole: '#E7E7E7' } },
    nanu: { kind: 'man', H: 44, leg: 102, torso: 60, neck: 8, sw: 29, hw: 12, waist: 23, hip: 23, skin: SK.nanu, iris: '#33200F', old: true,
      hair: 'sidepart', hairColor: '#221812', hairHi: '#4E4038', greyTemples: true, brow: '#2A221D', extras: [],
      top: { type: 'suit', color: '#2B3B6E', shirt: '#D4E3F6', tie: '#1C2447', square: '#E9EEF7' }, bottom: { type: 'trousers', color: '#2B3B6E' }, shoe: { type: 'formal', color: '#4A2A18' } },
    dadi: { kind: 'woman', H: 43, leg: 90, torso: 55, neck: 7, sw: 23, hw: 11.5, waist: 21, hip: 24, skin: SK.dadi, iris: '#2E1C10', lip: '#9A4A48', old: true,
      hair: 'plait', hairColor: '#2A2420', hairHi: '#8F8983', greyStreaks: true, brow: '#3A322C', extras: ['bindi', 'nosering', 'bangles', 'earrings'],
      top: { type: 'saree', color: '#EE6557', border: '#F4A43A', stripe1: '#F9B24A', stripe2: '#5FAE63', blouse: '#E0493F' }, shoe: { type: 'sandal', color: '#7A4A2A' } },
    missji: { kind: 'woman', H: 44, leg: 96, torso: 56, neck: 8, sw: 24, hw: 11, waist: 18, hip: 23, skin: '#B87A52', iris: '#3A2317', lip: '#B0505A',
      hair: 'bun', hairColor: '#1E1410', hairHi: '#4B3A32', brow: '#1E1410', extras: ['roundglasses', 'earrings', 'bindi'],
      top: { type: 'dress', color: '#7B3FC4', hem: -40, kurta: true }, shoe: { type: 'flat', color: '#E0A526' } },
    gadbad: { kind: 'man', H: 44, leg: 100, torso: 60, neck: 7, sw: 27, hw: 12, waist: 23, hip: 23, belly: 2, skin: '#E2AE88', iris: '#3E5B7A', old: true,
      hair: 'professor', hairColor: '#F2F0EC', hairHi: '#FFFFFF', brow: '#DAD6CF', extras: ['bigglasses', 'moustache', 'bowtie'],
      top: { type: 'coat', color: '#F4F6F8', shirt: '#7B3FC4', tie: '#FFB300' }, bottom: { type: 'trousers', color: '#3A3550' }, shoe: { type: 'formal', color: '#2A2A2A' } },
    rohan: { kind: 'boy', H: 40, leg: 60, torso: 40, neck: 5, sw: 19, hw: 8, waist: 16, hip: 16, skin: '#A86B45', iris: '#2E1A10',
      hair: 'short', hairColor: '#1E1410', hairHi: '#4A3A31', brow: '#1E1410', extras: ['cap'], capColor: '#1D5BD8',
      top: { type: 'tee', color: '#FF8A1F', stripe: '#FFFFFF' }, bottom: { type: 'shorts', color: '#123C99' }, shoe: { type: 'sneaker', color: '#FFFFFF', sole: '#DDDDDD' } },
    anaya: { kind: 'girl', H: 40, leg: 58, torso: 40, neck: 5, sw: 18, hw: 7.5, waist: 14, hip: 15, skin: '#C68A5E', iris: '#2E1A10', lip: '#C8606A',
      hair: 'bob', hairColor: '#2B1B16', hairHi: '#5A4238', brow: '#2B1B16', extras: ['hairband'], bandColor: '#FFD400',
      top: { type: 'dress', color: '#FF5C8A', hem: -26 }, shoe: { type: 'flat', color: '#FFD400' } },
    kabir: { kind: 'boy', H: 39, leg: 50, torso: 36, neck: 4, sw: 17, hw: 7, waist: 15, hip: 15, skin: '#9A6440', iris: '#2E1A10',
      hair: 'curly', hairColor: '#1F1612', hairHi: '#4A3A31', brow: '#1F1612', extras: [],
      top: { type: 'tee', color: '#35B24A', star: true }, bottom: { type: 'shorts', color: '#D9A000' }, shoe: { type: 'sneaker', color: '#E63329', sole: '#FFFFFF' } },
    zoya: { kind: 'girl', H: 40, leg: 62, torso: 40, neck: 5, sw: 18, hw: 7.5, waist: 14, hip: 15, skin: '#B7794E', iris: '#2E1A10', lip: '#C0606A',
      hair: 'ponytail', hairColor: '#2A1712', hairHi: '#5A4238', brow: '#2A1712', extras: ['headband'], bandColor: '#E63329',
      top: { type: 'tee', color: '#14B8A6', stripe: '#FFFFFF' }, bottom: { type: 'jeans', color: '#0E6F66' }, shoe: { type: 'sneaker', color: '#FFFFFF', sole: '#DDDDDD' } },
    mira: { kind: 'girl', H: 40, leg: 60, torso: 40, neck: 5, sw: 18, hw: 7.5, waist: 14, hip: 15, skin: '#8D5A3B', iris: '#2E1A10', lip: '#B85A62',
      hair: 'puffs', hairColor: '#2A1A14', hairHi: '#54403A', brow: '#2A1A14', extras: ['goggles'], tieColor: '#FF5C8A',
      top: { type: 'tee', color: '#FFC928' }, bottom: { type: 'overalls', color: '#7B3FC4' }, shoe: { type: 'sneaker', color: '#FF5C8A', sole: '#FFFFFF' } },
  };

  /* ------------------------------------------------------------------ poses */
  // arms: [upper-arm angle, forearm angle, hand] (0 = straight down, 90 = sideways out, 180 = up, negative = across body)
  const POSE = {
    stand: { arms: { L: [9, 4, 'relaxed'], R: [9, 4, 'relaxed'] }, legs: { L: [3, 0], R: [3, 0] } },
    wave: { arms: { L: [9, 4, 'relaxed'], R: [132, 168, 'open'] }, legs: { L: [4, 0], R: [4, 0] } },
    run: { arms: { L: [38, 100, 'fist'], R: [-22, 28, 'fist'] }, legs: { L: [30, -12], R: [-6, 26] }, rot: 7, lift: 8 },
    fly: { arms: { L: [12, 6, 'fist'], R: [172, 178, 'fist'] }, legs: { L: [3, 0], R: [-2, 5] }, rot: 22 },
    cheer: { arms: { L: [150, 168, 'fist'], R: [150, 168, 'fist'] }, legs: { L: [13, 4], R: [13, 4] }, lift: 16 },
    point: { arms: { L: [9, 4, 'relaxed'], R: [86, 90, 'point'] }, legs: { L: [4, 0], R: [4, 0] } },
    think: { arms: { L: [22, -68, 'relaxed'], R: [14, -158, 'fist'] }, legs: { L: [3, 0], R: [3, 0] }, tilt: -6 },
    sit: { arms: { L: [16, 34, 'relaxed'], R: [16, 34, 'relaxed'] }, sit: true },
    blast: { arms: { L: [-66, -82, 'fist'], R: [84, 90, 'open'] }, legs: { L: [14, 5], R: [14, 5] }, rot: 3 },
  };
  POSE.lie = POSE.sit;

  /* ------------------------------------------------------------------ face */
  function face(c, top, mood) {
    const H = c.H, kid = c.kind === 'boy' || c.kind === 'girl', fem = c.kind === 'woman' || c.kind === 'girl';
    const hw = H * (kid ? 0.43 : fem ? 0.375 : 0.39);
    const skinS = shade(c.skin, 0.2), skinL = shade(c.skin, 0.34);
    const eyeY = top + H * (kid ? 0.55 : 0.5);
    const ew = hw * (kid ? 0.5 : 0.46), eh = ew * 0.5, ex = hw * 0.45;
    const nY = top + H * (kid ? 0.74 : 0.73), mY = top + H * (kid ? 0.855 : 0.845);
    const mhw = hw * (kid ? 0.34 : 0.38);
    let s = '';

    // brows
    const BR = { happy: [-0.25, 0], laugh: [-0.35, 0], sad: [-1.1, 0.35], surprised: [-1.3, -1], angry: [1.1, -0.35], scared: [-1.2, -0.2], determined: [0.6, -0.15], sleepy: [0.3, 0.35] }[mood] || [0, 0];
    const bt = c.kind === 'man' ? 2.5 : kid ? 2 : 1.7;
    for (const sd of [-1, 1]) {
      const x = sd * ex;
      const inner = [x - sd * ew * 0.6, eyeY - eh * 1.75 + BR[0] * eh];
      const outer = [x + sd * ew * 0.78, eyeY - eh * 1.7 + BR[1] * eh];
      const mid = [x + sd * ew * 0.1, eyeY - eh * 2.3 + (BR[0] + BR[1]) * eh * 0.5];
      s += Fn(`M${n(inner[0])} ${n(inner[1])} Q${n(mid[0])} ${n(mid[1] - 1)} ${n(outer[0])} ${n(outer[1])} Q${n(mid[0])} ${n(mid[1] + bt * 0.7)} ${n(inner[0])} ${n(inner[1] + bt)} Z`, c.brow, `stroke="${c.brow}" stroke-width=".6" stroke-linejoin="round"`);
    }

    // eyes
    const open = { surprised: 1.3, scared: 1.25, angry: 0.62, determined: 0.7, sad: 0.85 }[mood] || 1;
    for (const sd of [-1, 1]) {
      const x = sd * ex;
      const inC = [x - sd * ew * 0.5, eyeY + eh * 0.12], outC = [x + sd * ew * 0.5, eyeY - eh * (fem ? 0.14 : 0.04)];
      if (mood === 'sleepy') {
        s += L(`M${n(inC[0])} ${n(inC[1])} Q${n(x)} ${n(eyeY + eh * 0.75)} ${n(outC[0])} ${n(outC[1])}`, 1.7);
        if (fem) s += L(`M${n(outC[0])} ${n(outC[1])} l${n(sd * 2)} ${n(1.4)} M${n(x + sd * ew * 0.22)} ${n(eyeY + eh * 0.5)} l${n(sd * 0.8)} ${n(1.8)}`, 1);
        s += L(`M${n(inC[0])} ${n(inC[1] - eh * 0.6)} Q${n(x)} ${n(eyeY - eh * 0.5)} ${n(outC[0])} ${n(outC[1] - eh * 0.7)}`, 0.9, skinL);
        continue;
      }
      if (mood === 'laugh') {
        s += L(`M${n(inC[0])} ${n(inC[1] + eh * 0.2)} Q${n(x)} ${n(eyeY - eh * 0.95)} ${n(outC[0])} ${n(outC[1] + eh * 0.25)}`, 1.9);
        if (fem) s += L(`M${n(outC[0])} ${n(outC[1] + eh * 0.25)} l${n(sd * 2)} ${n(-1)}`, 1.1);
        s += L(`M${n(x - sd * ew * 0.35)} ${n(eyeY + eh * 0.75)} Q${n(x)} ${n(eyeY + eh * 0.45)} ${n(x + sd * ew * 0.4)} ${n(eyeY + eh * 0.7)}`, 0.9, skinL);
        continue;
      }
      const up = eh * 0.98 * open, lo = eh * (mood === 'angry' || mood === 'determined' ? 0.62 : 0.7) * Math.min(open, 1.15);
      const almond = `M${n(inC[0])} ${n(inC[1])} C${n(inC[0] + sd * ew * 0.22)} ${n(eyeY - up)} ${n(outC[0] - sd * ew * 0.28)} ${n(eyeY - up)} ${n(outC[0])} ${n(outC[1])} C${n(outC[0] - sd * ew * 0.22)} ${n(eyeY + lo)} ${n(inC[0] + sd * ew * 0.28)} ${n(eyeY + lo)} ${n(inC[0])} ${n(inC[1])} Z`;
      const id = A.uid('ey');
      const ri = eh * (open > 1.1 ? 0.56 : 0.68), look = mood === 'sad' ? 0 : ew * 0.08;
      const iy = eyeY + (mood === 'sad' ? eh * 0.2 : eh * 0.04);
      s += `<clipPath id="${id}"><path d="${almond}"/></clipPath>` + Fn(almond, '#FBF6EF');
      s += `<g clip-path="url(#${id})">` + E(x + look, iy, ri, ri, c.iris) + E(x + look, iy, ri * 0.48, ri * 0.48, '#0E0A08') +
        E(x + look - ri * 0.35, iy - ri * 0.38, ri * 0.28, ri * 0.28, '#FFFFFF') + E(x + look + ri * 0.3, iy + ri * 0.35, ri * 0.12, ri * 0.12, '#FFFFFF', 0, 'opacity=".7"') +
        Fn(`M${n(x - ew)} ${n(eyeY - eh * 2)} L${n(x + ew)} ${n(eyeY - eh * 2)} L${n(x + ew)} ${n(eyeY - up * 0.55)} Q${n(x)} ${n(eyeY - up * 0.35)} ${n(x - ew)} ${n(eyeY - up * 0.55)} Z`, 'rgba(60,30,30,.16)') + `</g>`;
      // upper lid, lash flick, lower lid, crease
      s += L(`M${n(inC[0])} ${n(inC[1])} C${n(inC[0] + sd * ew * 0.22)} ${n(eyeY - up)} ${n(outC[0] - sd * ew * 0.28)} ${n(eyeY - up)} ${n(outC[0])} ${n(outC[1])}`, fem ? 2.1 : 1.7);
      if (fem) s += L(`M${n(outC[0] - sd * 0.5)} ${n(outC[1])} q${n(sd * 1.8)} ${n(-0.4)} ${n(sd * 2.9)} ${n(-2.2)}`, 1.3);
      s += L(`M${n(outC[0] - sd * ew * 0.12)} ${n(outC[1] + eh * 0.25)} C${n(outC[0] - sd * ew * 0.3)} ${n(eyeY + lo)} ${n(inC[0] + sd * ew * 0.3)} ${n(eyeY + lo)} ${n(inC[0] + sd * ew * 0.08)} ${n(inC[1] + eh * 0.1)}`, 0.8, skinL);
      s += L(`M${n(inC[0] + sd * ew * 0.15)} ${n(eyeY - up * 0.95 - eh * 0.45)} Q${n(x + sd * ew * 0.1)} ${n(eyeY - up - eh * 0.75)} ${n(outC[0] + sd * ew * 0.02)} ${n(outC[1] - eh * 0.9)}`, 0.8, skinL);
      if (c.old) s += L(`M${n(outC[0] + sd * ew * 0.12)} ${n(outC[1] + eh * 0.2)} l${n(sd * 2.2)} ${n(0.6)} M${n(outC[0] + sd * ew * 0.1)} ${n(outC[1] + eh * 0.7)} l${n(sd * 2)} ${n(1.2)} M${n(x - sd * ew * 0.25)} ${n(eyeY + eh * 1.25)} q${n(sd * ew * 0.3)} ${n(eh * 0.3)} ${n(sd * ew * 0.6)} 0`, 0.7, skinL);
    }

    // nose
    const nw = hw * (kid ? 0.28 : 0.33);
    s += L(`M${n(hw * 0.1)} ${n(eyeY + eh * 0.9)} Q${n(hw * 0.15)} ${n(nY - H * 0.1)} ${n(nw * 0.75)} ${n(nY - 2.2)}`, 1, skinL);
    s += Fn(`M${n(-nw * 0.25)} ${n(nY - 1.5)} Q${n(nw * 0.45)} ${n(nY - 5)} ${n(nw * 1.05)} ${n(nY - 0.5)} Q${n(nw * 0.6)} ${n(nY + 2.6)} ${n(-nw * 0.2)} ${n(nY + 1.6)} Z`, skinS, 'opacity=".55"');
    s += L(`M${n(-nw)} ${n(nY - 2.2)} q${n(nw * 0.12)} ${n(2.6)} ${n(nw * 0.62)} ${n(2.4)}`, 1.1);
    s += L(`M${n(nw)} ${n(nY - 2.2)} q${n(-nw * 0.12)} ${n(2.6)} ${n(-nw * 0.62)} ${n(2.4)}`, 1.1);
    s += L(`M${n(-nw * 0.22)} ${n(nY + 0.7)} q${n(nw * 0.22)} ${n(0.9)} ${n(nw * 0.44)} 0`, 0.9, skinL);
    if (c.old) for (const sd of [-1, 1]) s += L(`M${n(sd * (nw + 1.2))} ${n(nY)} Q${n(sd * (mhw + 2.2))} ${n(mY - 3.5)} ${n(sd * (mhw + 1.8))} ${n(mY + 2.5)}`, 0.9, skinL);

    // cheeks
    if (fem || kid) for (const sd of [-1, 1]) s += E(sd * hw * 0.58, top + H * 0.67, hw * 0.2, hw * 0.1, '#E0644F', 0, 'opacity=".22"');

    // mouth
    const lip = c.lip || shade(c.skin, 0.28);
    const mouthDark = '#4E1519';
    const smileOpen = (w, h, teeth, tongue) => {
      const d = `M${n(-w)} ${n(mY - 1.2)} Q0 ${n(mY + 0.8)} ${n(w)} ${n(mY - 1.2)} Q${n(w * 0.62)} ${n(mY + h)} 0 ${n(mY + h * 1.02)} Q${n(-w * 0.62)} ${n(mY + h)} ${n(-w)} ${n(mY - 1.2)} Z`;
      const id = A.uid('mo');
      let o = `<clipPath id="${id}"><path d="${d}"/></clipPath>` + Fn(d, mouthDark) + `<g clip-path="url(#${id})">` +
        Fn(`M${n(-w)} ${n(mY - 3)} L${n(w)} ${n(mY - 3)} L${n(w)} ${n(mY + h * teeth)} Q0 ${n(mY + h * teeth + 1.2)} ${n(-w)} ${n(mY + h * teeth)} Z`, '#FFFFFF') +
        (tongue ? E(0, mY + h * 1.02, w * 0.55, h * 0.42, '#D9606E') : '') + `</g>` + L(d, 1.3);
      if (fem) o += L(`M${n(-w)} ${n(mY - 1.2)} Q0 ${n(mY + 0.8)} ${n(w)} ${n(mY - 1.2)}`, 1.5, lip) + Fn(`M${n(-w * 0.55)} ${n(mY + h * 1.02 + 0.3)} Q0 ${n(mY + h * 1.02 + 3.2)} ${n(w * 0.55)} ${n(mY + h * 1.02 + 0.3)} Q0 ${n(mY + h * 1.02 + 1.2)} ${n(-w * 0.55)} ${n(mY + h * 1.02 + 0.3)} Z`, lip);
      else o += L(`M${n(-w * 0.4)} ${n(mY + h * 1.02 + 2.4)} Q0 ${n(mY + h * 1.02 + 3.6)} ${n(w * 0.4)} ${n(mY + h * 1.02 + 2.4)}`, 0.9, skinL);
      for (const sd of [-1, 1]) o += L(`M${n(sd * (w + 1.6))} ${n(mY - 2.6)} q${n(sd * 0.7)} ${n(1.6)} ${n(-sd * 0.4)} ${n(3)}`, 0.8, skinL);
      return o;
    };
    const closed = (curve, w = mhw * 0.85) => {
      let o = '';
      if (fem) o += Fn(`M${n(-w)} ${n(mY)} Q${n(-w * 0.4)} ${n(mY - 2.4)} 0 ${n(mY - 1.4)} Q${n(w * 0.4)} ${n(mY - 2.4)} ${n(w)} ${n(mY)} Q0 ${n(mY + 0.6)} ${n(-w)} ${n(mY)} Z`, lip) +
        Fn(`M${n(-w * 0.8)} ${n(mY + 0.4)} Q0 ${n(mY + 4.2)} ${n(w * 0.8)} ${n(mY + 0.4)} Z`, shade(lip, -0.1));
      o += L(`M${n(-w)} ${n(mY + curve * 0.4)} Q0 ${n(mY - curve)} ${n(w)} ${n(mY + curve * 0.4)}`, 1.4);
      if (!fem) o += L(`M${n(-w * 0.45)} ${n(mY + 3.2)} Q0 ${n(mY + 4.2)} ${n(w * 0.45)} ${n(mY + 3.2)}`, 0.9, skinL);
      return o;
    };
    switch (mood) {
      case 'laugh': s += smileOpen(mhw * 1.12, mhw * 1.05, 0.34, true); break;
      case 'happy': s += smileOpen(mhw, mhw * 0.62, 0.42, false); break;
      case 'sad': s += closed(-2.2, mhw * 0.7); break;
      case 'surprised': s += E(0, mY + 0.8, mhw * 0.34, mhw * 0.4, mouthDark, 1.2) + (fem ? `<ellipse cx="0" cy="${n(mY + 0.8)}" rx="${n(mhw * 0.34 + 0.9)}" ry="${n(mhw * 0.4 + 0.9)}" fill="none" stroke="${lip}" stroke-width="1.3"/>` : '') + E(0, mY + 0.8 + mhw * 0.18, mhw * 0.18, mhw * 0.12, '#C9566E'); break;
      case 'angry': s += closed(-1.4, mhw * 0.75) + L(`M${n(-hw * 0.12)} ${n(eyeY + eh * 0.6)} l${n(-1.5)} ${n(-2.5)} M${n(hw * 0.12)} ${n(eyeY + eh * 0.6)} l${n(1.5)} ${n(-2.5)}`, 0.8, skinL); break;
      case 'scared': {
        const w = mhw * 0.95, d = `M${n(-w)} ${n(mY)} Q0 ${n(mY - 2.5)} ${n(w)} ${n(mY)} Q${n(w * 0.8)} ${n(mY + 5)} 0 ${n(mY + 4.5)} Q${n(-w * 0.8)} ${n(mY + 5)} ${n(-w)} ${n(mY)} Z`;
        s += F(d, '#FFFFFF', 1.3) + L(`M${n(-w * 0.9)} ${n(mY + 1.8)} L${n(w * 0.9)} ${n(mY + 1.8)} M${n(-w * 0.4)} ${n(mY - 1.2)} v5.5 M${n(w * 0.4)} ${n(mY - 1.2)} v5.5 M0 ${n(mY - 1.6)} v6`, 0.7);
        break;
      }
      case 'determined': s += closed(1.2, mhw * 0.8) + L(`M${n(mhw * 0.8)} ${n(mY - 0.6)} q${n(1.4)} ${n(-0.5)} ${n(1.8)} ${n(-2)}`, 0.9, skinL); break;
      case 'sleepy': s += E(0, mY + 1, mhw * 0.26, mhw * 0.3, mouthDark, 1.1); break;
      default: s += closed(2, mhw * 0.8);
    }

    // mood marks
    if (mood === 'sad') s += F(`M${n(-ex - ew * 0.3)} ${n(eyeY + eh * 1.3)} q${n(-2.2)} ${n(4)} 0 ${n(5.6)} q${n(2.2)} ${n(-1.6)} 0 ${n(-5.6)} Z`, '#8FD3FF', 0.9);
    if (mood === 'scared') s += F(`M${n(hw * 0.95)} ${n(top + H * 0.2)} q${n(-2.6)} ${n(4.6)} 0 ${n(6.4)} q${n(2.6)} ${n(-1.8)} 0 ${n(-6.4)} Z`, '#8FD3FF', 0.9);
    if (mood === 'sleepy') s += [0, 1].map(i => L(`M${n(hw * (1.1 + i * 0.55))} ${n(top - i * 9)} h${n(5 + i * 2)} l${n(-(5 + i * 2))} ${n(5 + i * 2)} h${n(5 + i * 2)}`, 1.6)).join('');
    return s;
  }

  /* ------------------------------------------------------------------ head */
  function headShape(c, top) {
    const H = c.H, kid = c.kind === 'boy' || c.kind === 'girl', fem = c.kind === 'woman' || c.kind === 'girl';
    const hw = H * (kid ? 0.43 : fem ? 0.375 : 0.39);
    const jaw = c.kind === 'man' ? [[0.9, 0.79], [0.66, 0.94]] : c.kind === 'woman' ? [[0.8, 0.77], [0.5, 0.935]] : [[0.88, 0.8], [0.58, 0.95]];
    const R = [[0.4, 0.005], [0.8, 0.075], [0.98, 0.26], [1.0, 0.46], [0.95, 0.64], ...jaw, [0.24, 0.995]];
    const P = mir(R.map(([x, y]) => [x * hw, top + y * H]), [0, top - H * 0.005], [0, top + H]);
    return { hw, d: sp(P), H };
  }

  function drawHead(c, top, mood) {
    const { hw, d, H } = headShape(c, top);
    const skinS = shade(c.skin, 0.2);
    let s = '';
    // ears
    for (const sd of [-1, 1]) {
      const ed = sp([[sd * hw * 0.88, top + H * 0.43], [sd * hw * 1.1, top + H * 0.39], [sd * hw * 1.18, top + H * 0.5], [sd * hw * 1.08, top + H * 0.66], [sd * hw * 0.9, top + H * 0.68]]);
      s += F(ed, sd > 0 ? skinS : c.skin, 2.2) + L(`M${n(sd * hw * 1.05)} ${n(top + H * 0.46)} q${n(sd * 2.6)} ${n(H * 0.06)} ${n(-sd * 0.2)} ${n(H * 0.14)}`, 1, shade(c.skin, 0.38));
    }
    const faceSh = Fn(sp([[hw * 0.42, top - 4], [hw * 0.64, top + H * 0.26], [hw * 0.74, top + H * 0.52], [hw * 0.64, top + H * 0.7], [hw * 0.4, top + H * 0.88], [hw * 0.05, top + H * 1.06], [hw * 2, top + H * 1.1], [hw * 2, top - 6]]), 'rgba(90,40,30,.2)');
    s += shaded(d, c.skin, [faceSh], OW);
    s += face(c, top, mood);
    return { s, hw };
  }

  /* ------------------------------------------------------------------ hair */
  function hair(c, top, shY) {
    const H = c.H, { hw } = headShape(c, top);
    const hc = c.hairColor, hs = shade(hc, 0.35), hi = c.hairHi;
    const Y = f => top + f * H, X = f => f * hw;
    const P = a => a.map(([x, y]) => [X(x), Y(y)]);
    let back = '', front = '', over = '';
    const hl = (list, w = 1.3) => list.map(([a, b, cc, dd]) => L(`M${n(X(a))} ${n(Y(b))} Q${n((X(a) + X(cc)) / 2)} ${n((Y(b) + Y(dd)) / 2 - 1.5)} ${n(X(cc))} ${n(Y(dd))}`, w * 0.8, hi, 'opacity=".38"')).join('');
    const sh = (ptsList) => Fn(sp(P(ptsList)), hs, 'opacity=".55"');
    const hairFill = c.hairEnds ? `url(#${c._grad})` : hc;
    switch (c.hair) {
      case 'tousled': {
        const d = sp(P([[-1.0, 0.44], [-1.08, 0.22], [-0.98, 0.0], [-0.72, -0.14], [-0.36, -0.2], [0.04, -0.23], [0.46, -0.2], [0.82, -0.1], [1.06, 0.08], [1.08, 0.3], [1.0, 0.46], [0.93, 0.3], [0.74, 0.18], [0.52, 0.25], [0.3, 0.16], [0.06, 0.23], [-0.2, 0.15], [-0.48, 0.21], [-0.74, 0.16], [-0.93, 0.3]]));
        front += shaded(d, hc, [sh([[0.35, -0.3], [0.7, -0.1], [1.2, 0.1], [1.2, 0.6], [0.8, 0.4], [0.5, 0.1]])], OW);
        front += hl([[-0.7, -0.02, -0.35, -0.13], [-0.3, -0.04, 0.1, -0.14]], 1.4);
        front += L(`M${n(X(0.2))} ${n(Y(0.1))} q${n(X(0.1))} ${n(-H * 0.06)} ${n(X(0.3))} ${n(-H * 0.02)} M${n(X(-0.4))} ${n(Y(0.12))} q${n(X(0.12))} ${n(-H * 0.07)} ${n(X(0.3))} ${n(-H * 0.05)}`, 0.9);
        break;
      }
      case 'sidepart': {
        const d = sp(P([[-0.99, 0.48], [-1.04, 0.26], [-0.92, 0.04], [-0.52, -0.1], [0, -0.13], [0.56, -0.1], [0.93, 0.03], [1.05, 0.26], [0.99, 0.48], [0.93, 0.31], [0.76, 0.17], [0.25, 0.13], [-0.28, 0.11], [-0.46, 0.08], [-0.72, 0.16], [-0.93, 0.31]]));
        const grey = c.greyTemples ? [Fn(sp(P([[-1.2, 0.2], [-0.78, 0.18], [-0.8, 0.5], [-1.2, 0.55]])), '#A39C94', 'opacity=".85"'), Fn(sp(P([[1.2, 0.2], [0.8, 0.18], [0.8, 0.5], [1.2, 0.55]])), '#8E8780', 'opacity=".85"')] : [];
        front += shaded(d, hc, [sh([[0.3, -0.3], [1.3, -0.1], [1.3, 0.6], [0.8, 0.35], [0.4, 0.1]]), ...grey], OW);
        front += L(`M${n(X(-0.46))} ${n(Y(0.07))} Q${n(X(-0.42))} ${n(Y(-0.03))} ${n(X(-0.3))} ${n(Y(-0.11))}`, 1.1);
        front += hl([[-0.3, -0.05, 0.3, -0.07], [-0.25, 0.03, 0.4, 0.0], [0.2, 0.06, 0.7, 0.08]], 1.1);
        break;
      }
      case 'longwavy': {
        // back mass reaching below the shoulders
        const bot = (shY - top) / H + 1.05;
        const bd = sp(P([[-1.02, 0.1], [-0.7, -0.14], [0, -0.2], [0.7, -0.14], [1.04, 0.1], [1.16, 0.5], [1.26, 0.9], [1.46, bot * 0.72], [1.5, bot - 0.15], [1.25, bot], [0.9, bot - 0.08], [0.5, bot + 0.02], [0, bot - 0.08], [-0.5, bot + 0.02], [-0.9, bot - 0.08], [-1.28, bot], [-1.52, bot - 0.15], [-1.46, bot * 0.72], [-1.24, 0.9], [-1.14, 0.5]]));
        back += shaded(bd, hairFill, [Fn(`M${n(X(0.3))} ${n(Y(-1))} L${n(X(3))} ${n(Y(-1))} L${n(X(3))} ${n(Y(bot + 1))} L${n(X(0.6))} ${n(Y(bot + 1))} Z`, 'rgba(0,0,0,.28)')], OW);
        back += L(sp(P([[-1.25, 0.8], [-1.35, 1.3], [-1.2, bot - 0.2]]), false), 1, hi, 'opacity=".6"') + L(sp(P([[1.2, 0.9], [1.34, 1.4], [1.25, bot - 0.25]]), false), 1, hs);
        // crown with a side part
        const fd = sp(P([[-1.1, 0.62], [-1.13, 0.26], [-0.86, -0.03], [-0.3, -0.13], [0.32, -0.12], [0.9, 0.0], [1.13, 0.28], [1.1, 0.64], [0.96, 0.64], [0.92, 0.36], [0.62, 0.15], [0.1, 0.1], [-0.18, 0.06], [-0.52, 0.17], [-0.88, 0.38], [-0.96, 0.64]]));
        front += shaded(fd, hc, [sh([[0.1, -0.3], [1.3, -0.1], [1.3, 0.8], [0.95, 0.6], [0.7, 0.2]])], OW);
        front += L(`M${n(X(-0.18))} ${n(Y(0.06))} Q${n(X(-0.12))} ${n(Y(-0.04))} ${n(X(-0.05))} ${n(Y(-0.13))}`, 1);
        front += hl([[-0.75, 0.05, -0.35, -0.08], [-0.9, 0.25, -0.62, 0.05], [0.1, -0.05, 0.55, -0.02]], 1.2);
        // locks falling over the shoulders, drawn above the torso
        for (const sd of [-1, 1]) {
          const lk = sp(P([[sd * 1.08, 0.5], [sd * 1.28, 0.95], [sd * 1.5, 1.4], [sd * 1.42, bot * 0.8], [sd * 1.3, bot - 0.1], [sd * 1.12, bot * 0.8], [sd * 1.08, 1.35], [sd * 0.97, 0.95], [sd * 0.94, 0.62]]));
          over += shaded(lk, hairFill, sd > 0 ? [Fn(sp(P([[1.25, 0.5], [2, 0.5], [2, bot + 1], [1.3, bot]])), 'rgba(0,0,0,.25)')] : [], OW);
          over += L(sp(P([[sd * 1.1, 0.8], [sd * 1.3, 1.25], [sd * 1.28, bot * 0.78]]), false), 0.9, sd < 0 ? hi : hs);
        }
        break;
      }
      case 'plait': {
        const d = sp(P([[-1.02, 0.5], [-1.07, 0.24], [-0.82, -0.04], [0, -0.12], [0.82, -0.04], [1.07, 0.24], [1.02, 0.5], [0.92, 0.34], [0.62, 0.16], [0.08, 0.11], [0, 0.13], [-0.08, 0.11], [-0.62, 0.16], [-0.92, 0.34]]));
        const streaks = c.greyStreaks ? hl([[-0.8, 0.2, -0.3, 0.0], [-0.55, 0.12, -0.08, -0.08], [0.1, -0.06, 0.6, 0.05], [0.3, 0.05, 0.85, 0.25], [-0.95, 0.35, -0.75, 0.12]], 1.3) : '';
        front += shaded(d, hc, [sh([[0.2, -0.3], [1.3, -0.1], [1.3, 0.6], [0.9, 0.35], [0.6, 0.1]])], OW) + streaks;
        front += L(`M0 ${n(Y(0.12))} L0 ${n(Y(0.0))}`, 1.2, '#C0392B');
        // plait coming from behind the neck, over the right shoulder (viewer's left), down to the waist
        let pl = '';
        const segs = 10, x0 = X(-0.92), y0 = Y(0.86);
        for (let i = 0; i < segs; i++) {
          const y = y0 + i * 5.4, x = x0 - 3 - Math.min(i, 3) * 1.6 + Math.sin(i * 0.6) * 0.8, w = 3.6 - i * 0.12;
          pl += `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${n(w)}" ry="3.4" fill="${i % 2 ? hc : shade(hc, -0.1)}" stroke="${INK}" stroke-width="1.1" transform="rotate(${i % 2 ? 28 : -28} ${n(x)} ${n(y)})"/>`;
          if (c.greyStreaks && i % 3 === 1) pl += L(`M${n(x - 1.8)} ${n(y - 1)} l3 1.2`, 0.7, hi, 'opacity=".6"');
        }
        const tx = x0 - 3 - 3 * 1.6, ty = y0 + segs * 5.4 - 2;
        pl += F(`M${n(tx - 2.5)} ${n(ty)} l5 0 l0.8 8 l-1.6 -1.6 l-1 2.6 l-1 -2.6 l-1.6 1.6 Z`, '#D8323A', 1.2);
        over += pl;
        break;
      }
      case 'professor': {
        for (const sd of [-1, 1]) {
          const puffs = [[0.92, 0.02, 0.26], [1.18, -0.06, 0.28], [1.36, 0.12, 0.26], [1.22, 0.3, 0.27], [1.02, 0.4, 0.22], [0.9, 0.2, 0.22]];
          const ds = puffs.map(([x, y, r]) => { const cx = X(sd * x), cy = Y(y), rr = r * hw; return `M${n(cx - rr)} ${n(cy)} a${n(rr)} ${n(rr)} 0 1 0 ${n(rr * 2)} 0 a${n(rr)} ${n(rr)} 0 1 0 ${n(-rr * 2)} 0 Z`; });
          front += merged(ds, sd > 0 ? '#DCD8D2' : hc, 2) + L(`M${n(X(sd * 1.1))} ${n(Y(0.02))} q${n(sd * 3)} 2 ${n(sd * 6)} 1 M${n(X(sd * 1.12))} ${n(Y(0.24))} q${n(sd * 3)} 1 ${n(sd * 6)} -1`, 0.9, '#B8B2AA');
        }
        front += L(`M${n(X(-0.2))} ${n(Y(-0.005))} q${n(X(0.1))} ${n(-8)} ${n(X(0.3))} ${n(-6)} M${n(X(0.05))} ${n(Y(0.0))} q${n(X(0.1))} ${n(-9)} ${n(X(0.35))} ${n(-4)}`, 1.3, '#C9C4BD');
        front += E(X(-0.35), Y(0.08), hw * 0.3, H * 0.05, '#FFFFFF', 0, 'opacity=".35"');
        break;
      }
      case 'bun': {
        back += F(sp(P([[-0.5, -0.1], [-0.28, -0.42], [0.28, -0.42], [0.5, -0.1], [0.3, 0.06], [-0.3, 0.06]])), hc, OW) + L(sp(P([[-0.3, -0.3], [0, -0.36], [0.3, -0.3]]), false), 1, hi, 'opacity=".5"');
        const d = sp(P([[-1.02, 0.5], [-1.07, 0.24], [-0.82, -0.04], [0, -0.13], [0.82, -0.04], [1.07, 0.24], [1.02, 0.5], [0.92, 0.34], [0.62, 0.16], [0.1, 0.1], [-0.1, 0.1], [-0.62, 0.16], [-0.92, 0.34]]));
        front += shaded(d, hc, [sh([[0.2, -0.3], [1.3, -0.1], [1.3, 0.6], [0.9, 0.35], [0.6, 0.1]])], OW) + hl([[-0.7, 0.05, -0.2, -0.08], [0.15, -0.08, 0.6, 0.02]], 1.2);
        break;
      }
      case 'short': {
        const d = sp(P([[-1.0, 0.46], [-1.06, 0.2], [-0.8, -0.06], [0, -0.14], [0.8, -0.06], [1.06, 0.2], [1.0, 0.46], [0.9, 0.3], [0.6, 0.22], [0.2, 0.26], [-0.2, 0.22], [-0.6, 0.24], [-0.9, 0.3]]));
        front += shaded(d, hc, [sh([[0.3, -0.3], [1.3, 0], [1.2, 0.6], [0.7, 0.3]])], OW);
        break;
      }
      case 'bob': {
        const bd = sp(P([[-1.1, 0.2], [-0.7, -0.14], [0, -0.18], [0.7, -0.14], [1.1, 0.2], [1.2, 0.6], [1.18, 0.98], [0.95, 1.02], [0.9, 0.7], [-0.9, 0.7], [-0.95, 1.02], [-1.18, 0.98], [-1.2, 0.6]]));
        back += shaded(bd, hc, [Fn(`M${n(X(0.5))} ${n(Y(-1))} L${n(X(3))} ${n(Y(-1))} L${n(X(3))} ${n(Y(2))} L${n(X(0.9))} ${n(Y(2))} Z`, 'rgba(0,0,0,.25)')], OW);
        const fd = sp(P([[-1.12, 0.62], [-1.1, 0.2], [-0.72, -0.1], [0, -0.16], [0.72, -0.1], [1.1, 0.2], [1.12, 0.62], [0.98, 0.6], [0.9, 0.34], [0.55, 0.3], [0.2, 0.34], [-0.15, 0.3], [-0.5, 0.33], [-0.88, 0.32], [-0.98, 0.6]]));
        front += shaded(fd, hc, [sh([[0.3, -0.3], [1.3, 0], [1.3, 0.8], [0.9, 0.5]])], OW) + hl([[-0.6, 0.0, -0.15, -0.1], [0.1, -0.08, 0.5, -0.03]], 1.2);
        break;
      }
      case 'curly': {
        const cc = [];
        for (let a = 180; a <= 360; a += 20) { const r = a === 180 || a === 360 ? 0.98 : 1.02; cc.push([Math.cos(rad(a)) * r, 0.36 + Math.sin(rad(a)) * 0.5]); }
        cc.forEach(([x, y], i) => { front += E(X(x), Y(y), hw * 0.3, hw * 0.28, i > cc.length * 0.55 ? shade(hc, -0.02) : hc, 2); });
        front += F(sp(P([[-0.95, 0.34], [-0.8, 0.0], [0, -0.12], [0.8, 0.0], [0.95, 0.34], [0.7, 0.22], [0.3, 0.26], [0, 0.2], [-0.3, 0.26], [-0.7, 0.22]])), hc, 0);
        front += [[-0.5, 0.08], [0.1, 0.02], [0.5, 0.12], [-0.2, 0.18]].map(([x, y]) => L(`M${n(X(x))} ${n(Y(y))} a3 3 0 1 1 4 1`, 1, hi)).join('');
        break;
      }
      case 'ponytail': {
        back += F(sp(P([[0.7, 0.05], [1.2, 0.0], [1.55, 0.35], [1.6, 0.95], [1.4, 1.35], [1.3, 0.9], [1.1, 0.5], [0.9, 0.3]])), hc, OW) + L(sp(P([[1.25, 0.2], [1.45, 0.6], [1.42, 1.1]]), false), 1, hi);
        const d = sp(P([[-1.02, 0.46], [-1.06, 0.2], [-0.8, -0.08], [0, -0.16], [0.8, -0.08], [1.06, 0.2], [1.02, 0.46], [0.9, 0.3], [0.5, 0.18], [0, 0.16], [-0.5, 0.18], [-0.9, 0.3]]));
        front += shaded(d, hc, [sh([[0.3, -0.3], [1.3, 0], [1.2, 0.6], [0.7, 0.3]])], OW) + hl([[-0.6, 0.02, -0.1, -0.1], [0.1, -0.08, 0.6, 0.02]], 1.2);
        front += E(X(1.0), Y(0.12), 3.2, 3.2, c.bandColor || '#E63329', 1.4);
        break;
      }
      case 'puffs': {
        for (const sd of [-1, 1]) back += F(sp(P([[sd * 0.7, -0.2], [sd * 1.2, -0.42], [sd * 1.6, -0.2], [sd * 1.62, 0.2], [sd * 1.25, 0.4], [sd * 0.9, 0.25]])), hc, OW) + L(sp(P([[sd * 1.1, -0.3], [sd * 1.4, -0.2], [sd * 1.5, 0.05]]), false), 1, hi);
        const d = sp(P([[-1.02, 0.46], [-1.06, 0.2], [-0.8, -0.08], [0, -0.14], [0.8, -0.08], [1.06, 0.2], [1.02, 0.46], [0.92, 0.3], [0.5, 0.18], [0, 0.14], [-0.5, 0.18], [-0.92, 0.3]]));
        front += shaded(d, hc, [sh([[0.3, -0.3], [1.3, 0], [1.2, 0.6], [0.7, 0.3]])], OW);
        for (const sd of [-1, 1]) front += E(X(sd * 0.98), Y(-0.02), 3.4, 3.4, c.tieColor || '#FF5C8A', 1.4);
        break;
      }
    }
    return { back, front, over, hw };
  }

  /* ------------------------------------------------------------------ hands & feet */
  function hand(c, wrist, dir, kind, side) {
    const kid = c.kind === 'boy' || c.kind === 'girl';
    const h = c.H * (kid ? 0.38 : 0.42), sk = c.skin, sks = shade(sk, 0.22);
    const th = Math.atan2(dir[1], dir[0]) - Math.PI / 2;
    const cs = Math.cos(th);
    let ts = Math.abs(cs) > 0.3 ? Math.sign((side === 'L' ? 1 : -1) * cs) : Math.sign(-Math.sin(th)) || 1;
    const pw = h * 0.27; // half palm width
    let s = '';
    const fing = (x0, y0, ang, len, w) => { const e = [x0 + Math.sin(rad(ang)) * len, y0 + Math.cos(rad(ang)) * len]; return A.taper([[x0, y0], e], [w, w * 0.85], sk, { ow: 1.4, shadow: false }); };
    if (kind === 'open') {
      [-15, -5, 5, 15].forEach((a, i) => { s += fing((i - 1.5) * pw * 0.55, h * 0.45, a, h * [0.44, 0.52, 0.5, 0.42][i], h * 0.14); });
      s += fing(ts * pw * 0.8, h * 0.18, ts * 55, h * 0.36, h * 0.15);
      s += F(sp([[-pw, 0], [pw, 0], [pw * 1.1, h * 0.3], [pw * 1.05, h * 0.52], [-pw * 1.05, h * 0.52], [-pw * 1.1, h * 0.3]]), sk, 1.4);
      s += L(`M${n(pw * 0.2)} ${n(h * 0.28)} q${n(pw * 0.3)} ${n(h * 0.1)} ${n(pw * 0.6)} ${n(h * 0.02)}`, 0.8, sks);
    } else if (kind === 'fist' || kind === 'point') {
      if (kind === 'point') s += fing(-ts * pw * 0.45, h * 0.55, 0, h * 0.5, h * 0.14);
      s += F(sp([[-pw, 0], [pw, 0], [pw * 1.15, h * 0.28], [pw * 1.1, h * 0.62], [0, h * 0.7], [-pw * 1.1, h * 0.62], [-pw * 1.15, h * 0.28]]), sk, 1.4);
      s += L(`M${n(-pw * 0.9)} ${n(h * 0.5)} L${n(pw * 0.9)} ${n(h * 0.5)}`, 0.8, sks) + L(`M${n(-pw * 0.3)} ${n(h * 0.5)} l0 ${n(h * 0.14)} M${n(pw * 0.3)} ${n(h * 0.5)} l0 ${n(h * 0.14)}`, 0.8, sks);
      s += F(sp([[ts * pw * 1.05, h * 0.15], [ts * pw * 0.2, h * 0.36], [-ts * pw * 0.35, h * 0.42], [ts * pw * 0.15, h * 0.5], [ts * pw * 1.1, h * 0.36]]), sk, 1.2);
    } else {
      // relaxed: fingers together, slightly curled, thumb along the inner side
      s += F(sp([[-pw * 0.95, 0], [pw * 0.95, 0], [pw * 1.1, h * 0.35], [pw * 0.9, h * 0.8], [pw * 0.2, h * 0.98], [-pw * 0.6, h * 0.9], [-pw * 1.05, h * 0.6], [-pw * 1.1, h * 0.3]]), sk, 1.4);
      s += L(`M${n(-pw * 0.35)} ${n(h * 0.55)} l${n(pw * 0.05)} ${n(h * 0.32)} M${n(pw * 0.25)} ${n(h * 0.55)} l${n(pw * 0.05)} ${n(h * 0.34)}`, 0.8, sks);
      s += F(sp([[ts * pw * 0.7, h * 0.12], [ts * pw * 1.3, h * 0.36], [ts * pw * 1.25, h * 0.6], [ts * pw * 0.9, h * 0.58], [ts * pw * 0.7, h * 0.4]]), sk, 1.2);
      s += Fn(sp([[pw * 0.4, h * 0.1], [pw * 1.0, h * 0.35], [pw * 0.8, h * 0.8], [pw * 0.3, h * 0.9]]), 'rgba(80,30,20,.14)');
    }
    return `<g transform="translate(${n(wrist[0])} ${n(wrist[1])}) rotate(${n((th * 180) / Math.PI)})">${s}</g>`;
  }

  function shoe(c, ank, side, sitting) {
    const sd = side === 'L' ? -1 : 1, sh = c.shoe, col = sh.color;
    const [x, y] = ank;
    const kid = c.kind === 'boy' || c.kind === 'girl';
    const k = kid ? 0.82 : 1;
    let s = '';
    if (sitting) {
      // foot seen from the side, toes pointing inward
      const d = sp([[x - sd * 6 * k, y - 4], [x + sd * 5 * k, y - 5], [x + sd * 10 * k, y + 1], [x + sd * 2 * k, y + 5], [x - sd * 9 * k, y + 4]].map(p => [x + (p[0] - x) * -1, p[1]]));
      return F(d, sh.type === 'sandal' ? c.skin : col, 2);
    }
    if (sh.type === 'sandal') {
      s += F(sp([[x - 6, y - 3], [x + 6, y - 3], [x + 8 + sd * 2, y + 5], [x + sd * 3, y + 9.5], [x - 8 + sd * 2, y + 7]]), c.skin, 2);
      s += L(`M${n(x - 6)} ${n(y + 2.5)} Q${n(x + sd)} ${n(y + 4.5)} ${n(x + 7)} ${n(y + 2)}`, 3, col) + L(`M${n(x - 7 + sd * 2)} ${n(y + 9)} L${n(x + 9 + sd * 2)} ${n(y + 9)}`, 2.2, col);
      return s;
    }
    const w = (sh.type === 'formal' ? 10 : sh.type === 'flat' ? 8.5 : 11) * k, tip = sd * 3 * k;
    const d = sp([[x - w * 0.62, y - 2], [x + w * 0.62, y - 2], [x + w * 0.95 + tip * 0.5, y + 4], [x + w * 0.7 + tip, y + 8.5], [x + tip, y + 9.4], [x - w * 0.8 + tip, y + 8.5], [x - w * 0.98 + tip * 0.5, y + 4]]);
    s += shaded(d, col, [Fn(`M${n(x + tip * 0.3 + w * 0.1)} ${n(y - 4)} L${n(x + w * 2)} ${n(y - 4)} L${n(x + w * 2)} ${n(y + 12)} L${n(x + tip * 0.3 + w * 0.3)} ${n(y + 12)} Z`, 'rgba(0,0,0,.14)')], 2.2);
    if (sh.type === 'sneaker') s += L(`M${n(x - w * 0.95 + tip * 0.5)} ${n(y + 6.8)} L${n(x + w * 0.92 + tip * 0.6)} ${n(y + 6.8)}`, 1.1) + L(`M${n(x - 3)} ${n(y + 0.5)} l6 0 M${n(x - 2.5)} ${n(y + 2.8)} l5 0`, 1, INK, 'opacity=".6"');
    if (sh.type === 'formal') s += E(x - w * 0.3 + tip * 0.4, y + 3.2, w * 0.28, 1.2, '#FFFFFF', 0, 'opacity=".45"');
    if (sh.type === 'flat') s += Fn(sp([[x - w * 0.5, y - 1.5], [x + w * 0.5, y - 1.5], [x + w * 0.35, y + 2.5], [x - w * 0.35, y + 2.5]]), c.skin) + L(`M${n(x - w * 0.62)} ${n(y + 2.2)} Q${n(x)} ${n(y + 4)} ${n(x + w * 0.62)} ${n(y + 2.2)}`, 1.1);
    return s;
  }

  /* ------------------------------------------------------------------ body */
  // An office chair seen from the front: backrest behind the shoulders, seat under the hips, pole and wheeled base.
  function chairSvg(c, hipY, shY) {
    const col = '#3E4458', w = c.sw + 8, seatY = hipY + 4;
    let s = F(sp([[-w + 5, shY + 8], [w - 5, shY + 8], [w, shY + 18], [w - 1, seatY - 8], [-w + 1, seatY - 8], [-w, shY + 18]]), col, 2.2);
    s += Fn(sp([[w * 0.35, shY + 10], [w - 3, shY + 16], [w - 2, seatY - 10], [w * 0.4, seatY - 10]]), 'rgba(0,0,0,.25)');
    s += F(poly([[-w - 5, seatY - 4], [w + 5, seatY - 4], [w + 3, seatY + 7], [-w - 3, seatY + 7]]), shade(col, -0.14), 2.2);
    s += `<rect x="-3.5" y="${n(seatY + 7)}" width="7" height="${n(Math.max(4, -seatY - 15))}" fill="${shade(col, 0.2)}" stroke="${INK}" stroke-width="1.6"/>`;
    s += L('M-28 -3 L28 -3 M0 -9 L-20 0 M0 -9 L20 0', 4.2, INK) + L('M-28 -3 L28 -3 M0 -9 L-20 0 M0 -9 L20 0', 2.4, shade(col, 0.1));
    s += E(-26, -1.5, 3.2, 3.2, '#22252E', 0) + E(26, -1.5, 3.2, 3.2, '#22252E', 0) + E(0, -1.5, 3, 3, '#22252E', 0);
    return s;
  }

  function person(id, pose, mood, opt = {}) {
    const c = PEOPLE[id];
    const P = POSE[pose] || POSE.stand;
    const kid = c.kind === 'boy' || c.kind === 'girl', man = c.kind === 'man' || c.kind === 'boy';
    const sit = !!P.sit;
    const chair = sit && !!opt.chair; // sitting on a chair (offices, cafés, classrooms) instead of cross-legged on the floor
    const H = c.H;
    const hipY = chair ? -(c.leg * 0.52) - 2 : sit ? -20 : -c.leg;
    const shY = hipY - c.torso, waistY = hipY - c.torso * 0.36;
    const neckBase = shY - 7, chinY = neckBase - c.neck - 3, top = chinY - H;
    const skin = c.skin, skinS = shade(skin, 0.2);
    const top_ = c.top || {}, bot = c.bottom || {};
    let defs = '';
    if (c.hairEnds) { c._grad = A.uid('hg'); defs += `<linearGradient id="${c._grad}" gradientUnits="userSpaceOnUse" x1="0" y1="${n(top + H * 1.2)}" x2="0" y2="${n(shY + H * 1.2)}"><stop offset="0" stop-color="${c.hairColor}"/><stop offset="1" stop-color="${c.hairEnds}"/></linearGradient>`; }

    // joints
    const thigh = (c.leg - 9) * 0.5, shin = (c.leg - 9) * 0.5;
    const legs = {};
    for (const s of ['L', 'R']) {
      const sd = s === 'L' ? -1 : 1, hp = [sd * c.hw, hipY];
      if (chair) {
        // thighs point at the reader (foreshortened), shins straight down to the floor
        const kn = [sd * (c.hw + 3), hipY + 7], an = [sd * (c.hw + 4), -9];
        legs[s] = { hp, kn, an };
      } else if (sit) {
        const kn = [sd * (c.hw + thigh * 0.92), -13], an = [-sd * 7, -9];
        legs[s] = { hp, kn, an };
      } else {
        const a = P.legs[s];
        const kn = add(hp, dirv(a[0], s), thigh), an = add(kn, dirv(a[1], s), shin);
        legs[s] = { hp, kn, an };
      }
    }
    const ua = H * (kid ? 0.78 : 0.92), fa = H * (kid ? 0.68 : 0.8);
    const arms = {};
    for (const s of ['L', 'R']) {
      const sd = s === 'L' ? -1 : 1, sh = [sd * (c.sw - 4), shY + 5];
      const a = P.arms[s];
      const el = add(sh, dirv(a[0], s), ua), wr = add(el, dirv(a[1], s), fa);
      arms[s] = { sh, el, wr, hand: a[2] };
    }
    const hr = hair(c, top, shY);

    let s = defs + (chair ? chairSvg(c, hipY, shY) : '') + hr.back;
    // legs
    const legW = man ? [23, 15, 15.5, 9] : kid ? [15.5, 11, 11, 7] : [21, 13, 13.5, 8];
    const pants = bot.type === 'jeans' || bot.type === 'trousers' || bot.type === 'overalls';
    const covered = top_.type === 'saree';
    const legCol = top_.kurta ? '#F7F3EA' : skin;
    const drawLeg = s0 => {
      const Lg = legs[s0];
      const mid = lerp(Lg.kn, Lg.an, 0.35);
      return A.taper([Lg.hp, Lg.kn, [mid[0] + (s0 === 'L' ? -0.8 : 0.8), mid[1]], Lg.an], legW, legCol, { ow: OW * 0.9, shadowColor: shade(legCol, 0.18) });
    };
    if (!covered) {
      const order = sit ? ['L', 'R'] : ['L', 'R'];
      for (const k of order) {
        const Lg = legs[k];
        if (!pants) s += drawLeg(k);
        if (pants) {
          const pc = bot.color, pw = man ? [28, 21, 18.5] : kid ? [19, 15, 14] : bot.type === 'jeans' ? [23, 16.5, 14.5] : [25, 19, 17];
          const d1 = tube(Lg.hp, Lg.kn, pw[0], pw[1], 6, 0), d2 = tube(Lg.kn, Lg.an, pw[1], pw[2], 0, 2);
          s += merged([d1, d2, `M${n(Lg.kn[0])} ${n(Lg.kn[1])} m${n(-pw[1] / 2)} 0 a${n(pw[1] / 2)} ${n(pw[1] / 2)} 0 1 0 ${n(pw[1])} 0 a${n(pw[1] / 2)} ${n(pw[1] / 2)} 0 1 0 ${n(-pw[1])} 0`], pc);
          const u = unit(Lg.hp, Lg.an), nn = [u[1], -u[0]];
          const sideN = nn[0] > 0 ? nn : [-nn[0], -nn[1]];
          s += Fn(poly([add(lerp(Lg.hp, Lg.kn, 0.05), sideN, pw[0] * 0.12), add(Lg.kn, sideN, pw[1] * 0.1), add(Lg.an, sideN, pw[2] * 0.1), add(Lg.an, sideN, pw[2] * 0.5), add(Lg.kn, sideN, pw[1] * 0.5), add(Lg.hp, sideN, pw[0] * 0.5)]), 'rgba(0,0,0,.18)');
          if (bot.type === 'trousers') s += L(`M${n(Lg.hp[0])} ${n(Lg.hp[1] + 6)} L${n(Lg.kn[0])} ${n(Lg.kn[1])} L${n(Lg.an[0])} ${n(Lg.an[1])}`, 0.9, shade(pc, 0.35));
          if (bot.type === 'jeans') s += L(`M${n(Lg.kn[0] - 3)} ${n(Lg.kn[1] - 2)} l6 1.5 M${n(Lg.kn[0] - 3)} ${n(Lg.kn[1] + 2)} l5 1`, 0.8, shade(pc, 0.3)) + L(`M${n(Lg.hp[0] + (k === 'L' ? -pw[0] * 0.42 : pw[0] * 0.42))} ${n(Lg.hp[1] + 4)} L${n(Lg.an[0] + (k === 'L' ? -pw[2] * 0.45 : pw[2] * 0.45))} ${n(Lg.an[1])}`, 0.7, '#E3B55A', 'stroke-dasharray="2 2"');
          // hem
          const e = add(Lg.an, u, 2);
          s += L(`M${n(e[0] - nn[0] * pw[2] / 2)} ${n(e[1] - nn[1] * pw[2] / 2)} L${n(e[0] + nn[0] * pw[2] / 2)} ${n(e[1] + nn[1] * pw[2] / 2)}`, 1, shade(pc, 0.35));
        }
      }
      if (!pants) { /* bare legs already drawn */ }
      for (const k of ['L', 'R']) s += shoe(c, legs[k].an, k, sit && !chair);
    }

    // shorts / overalls pelvis
    if (bot.type === 'shorts' || bot.type === 'overalls') {
      const pc = bot.color, pw = man ? 25 : kid ? 17.5 : 21;
      const len = bot.type === 'overalls' ? 0.7 : 0.64;
      const ds = [];
      for (const k of ['L', 'R']) { const Lg = legs[k]; ds.push(tube(Lg.hp, lerp(Lg.hp, Lg.kn, len), pw, pw * 0.94, 8, 0)); }
      ds.push(poly([[-c.hip - 1, waistY + 3], [c.hip + 1, waistY + 3], [c.hip + 2, hipY + 3], [2.5, hipY + 9], [-2.5, hipY + 9], [-c.hip - 2, hipY + 3]]));
      s += merged(ds, pc);
      for (const k of ['L', 'R']) {
        const Lg = legs[k], e = lerp(Lg.hp, Lg.kn, len), u = unit(Lg.hp, Lg.kn), nn = [-u[1], u[0]];
        const sideN = nn[0] > 0 ? nn : [-nn[0], -nn[1]];
        s += Fn(poly([add(add(Lg.hp, u, -6), sideN, pw * 0.1), add(e, sideN, pw * 0.1), add(e, sideN, pw * 0.47), add(add(Lg.hp, u, -6), sideN, pw * 0.5)]), 'rgba(0,0,0,.16)');
        s += L(`M${n(e[0] - nn[0] * pw * 0.44)} ${n(e[1] - nn[1] * pw * 0.44 - 2)} L${n(e[0] + nn[0] * pw * 0.44)} ${n(e[1] + nn[1] * pw * 0.44 - 2)}`, 0.9, shade(pc, 0.35));
      }
      s += L(`M0 ${n(waistY + 5)} L0 ${n(hipY + 6)}`, 0.9, shade(pc, 0.35)) + L(`M${n(-c.hip)} ${n(waistY + 6)} L${n(c.hip)} ${n(waistY + 6)}`, 0.9, shade(pc, 0.3));
    }

    // saree skirt (floor length, pleated) or dress skirt
    if (top_.type === 'saree') {
      const hem = -3, wx = c.hip + 3;
      const spread = chair ? 12 : sit ? 44 : 8;
      const d = sp([[-c.waist - 2, waistY], [c.waist + 2, waistY], [wx + 2, hipY + 6], [wx + 7 + spread * 0.5, (hipY + hem) / 2], [wx + 10 + spread, hem - 2], [wx + 6 + spread, hem + 1], [0, hem + 2], [-wx - 6 - spread, hem + 1], [-wx - 10 - spread, hem - 2], [-wx - 7 - spread * 0.5, (hipY + hem) / 2], [-wx - 2, hipY + 6]]);
      const stripes = [];
      for (let i = 0; i < 7; i++) { const y = waistY + 12 + i * ((hem - waistY - 16) / 7); stripes.push(L(`M${n(-wx - 20 - spread)} ${n(y)} q${n(12)} -3 ${n(24)} 0 t${n(24)} 0 t${n(24)} 0 t${n(24)} 0 t${n(24)} 0`, 1.8, i % 2 ? top_.stripe2 : top_.stripe1, 'opacity=".85"')); }
      const pleats = [-6, -2, 2, 6, 10].map(dx => L(`M${n(dx * 0.6 + 3)} ${n(waistY + 4)} L${n(dx * (sit ? 3.6 : 1.8) + 3)} ${n(hem - 1)}`, 0.9, shade(top_.color, 0.32))).join('');
      s += shaded(d, top_.color, [...stripes, rightShadow(c.hip * 0.5, waistY, c.hip * 0.9 + spread * 0.6, hem + 4, 6), Fn(`M-200 ${n(hem - 7)} L200 ${n(hem - 7)} L200 ${n(hem + 5)} L-200 ${n(hem + 5)} Z`, top_.border)], OW) + pleats;
      s += L(`M${n(-wx - 9 - spread)} ${n(hem - 6.5)} Q0 ${n(hem - 5)} ${n(wx + 9 + spread)} ${n(hem - 6.5)}`, 1, shade(top_.border, 0.3));
      // feet peeking out
      for (const sd of [-1, 1]) s += F(sp([[sd * 5 - 4, hem - 1], [sd * 5 + 4, hem - 1], [sd * 7 + 4, hem + 3.5], [sd * 6, hem + 4.6], [sd * 5 - 5, hem + 3.5]]), skin, 1.6) + L(`M${n(sd * 5 - 4)} ${n(hem + 1)} L${n(sd * 5 + 5)} ${n(hem + 1)}`, 1.8, c.shoe.color);
    }
    if (top_.type === 'dress' || top_.type === 'coat' || bot.type === 'skirt') {
      const hemY = top_.type === 'coat' ? hipY + 30 : chair ? Math.max(hipY + 30, -40) : sit ? -6 : (top_.hem || -32);
      const col = top_.color, sx = chair ? 6 : sit ? 30 : 0;
      if (top_.type === 'dress' && top_.kurta) {
        const d = sp([[-c.waist - 1, waistY], [c.waist + 1, waistY], [c.hip + 5, hipY + 2], [c.hip + 8 + sx * 0.3, (hipY + hemY) / 2], [c.hip + 9 + sx * 0.4, hemY - 1], [0, hemY + 1], [-c.hip - 9 - sx * 0.4, hemY - 1], [-c.hip - 8 - sx * 0.3, (hipY + hemY) / 2], [-c.hip - 5, hipY + 2]]);
        s += shaded(d, col, [rightShadow(c.hip * 0.3, waistY, c.hip * 0.5 + sx * 0.3, hemY + 6, 6), Fn(`M-200 ${n(hemY - 4)} L200 ${n(hemY - 4)} L200 ${n(hemY + 6)} L-200 ${n(hemY + 6)} Z`, '#F2B52C', 'opacity=".9"')], OW);
        s += L(`M${n(-c.hip - 8)} ${n(hemY - 22)} v22 M${n(c.hip + 8)} ${n(hemY - 22)} v22`, 1.2, shade(col, 0.35));
      } else if (top_.type === 'dress') {
        const d = sp([[-c.waist - 1, waistY], [c.waist + 1, waistY], [c.hip + 4, hipY + 2], [c.hip + 11 + sx * 0.6, (hipY + hemY) / 2 + 4], [c.hip + 17 + sx, hemY - 2], [c.hip * 0.5, hemY + 2], [0, hemY], [-c.hip * 0.5, hemY + 2], [-c.hip - 17 - sx, hemY - 2], [-c.hip - 11 - sx * 0.6, (hipY + hemY) / 2 + 4], [-c.hip - 4, hipY + 2]]);
        s += shaded(d, col, [rightShadow(c.hip * 0.3, waistY, c.hip * 0.6 + sx * 0.5, hemY + 6, 8), Fn(`M-200 ${n(hemY - 5)} L200 ${n(hemY - 5)} L200 ${n(hemY + 6)} L-200 ${n(hemY + 6)} Z`, 'rgba(255,255,255,.18)')], OW);
        s += [-0.55, 0.05, 0.6].map(f => L(`M${n(f * c.hip * 0.6)} ${n(hipY + 6)} Q${n(f * c.hip * 0.9)} ${n((hipY + hemY) / 2)} ${n(f * (c.hip + 12 + sx))} ${n(hemY - 2)}`, 0.9, shade(col, 0.3))).join('');
      }
    }

    // neck
    const nw = H * (man ? 0.17 : 0.14);
    const neckD = sp(mir([[nw * 0.95, chinY - H * 0.14], [nw, neckBase - 3], [nw + 4, neckBase + 4]], [0, chinY - H * 0.1], [0, neckBase + 6]));
    s += shaded(neckD, skin, [Fn(sp([[-nw - 3, chinY - H * 0.2], [nw + 3, chinY - H * 0.2], [nw + 3, chinY + 3], [0, chinY + 6], [-nw - 3, chinY + 2]]), 'rgba(90,40,30,.3)'), rightShadow(nw * 0.35, chinY - 10, nw * 0.45, neckBase + 8)], OW * 0.9);

    // torso garment
    const sw = c.sw, bw = c.waist + (c.belly || 0), hp = c.hip;
    const t = top_.type;
    const shoulderPts = (pad = 0) => [[nw + 1.5, neckBase - 2], [sw - 5, shY - 2 - pad * 0.3], [sw + 1 + pad, shY + 3], [sw + 2 + pad, shY + 14], [sw - 1 + pad * 0.5, shY + 28]];
    if (t === 'tee' || t === 'dress' || t === 'suit' || t === 'coat' || t === 'saree') {
      let hemY = t === 'tee' ? (c.top.fitted ? hipY - 2 : hipY + 8) : t === 'dress' ? waistY + 2 : t === 'suit' ? hipY + 16 : t === 'saree' ? waistY + 3 : hipY + 30;
      const col = t === 'saree' ? top_.blouse : top_.color;
      const waistX = t === 'dress' || t === 'saree' ? c.waist + 1 : bw + 1;
      const pad = t === 'suit' ? 2.5 : t === 'coat' ? 2 : 0;
      const R = [...shoulderPts(pad), [waistX, waistY], ...(hemY > waistY + 4 ? [[hp + 1 + pad, Math.min(hipY, hemY - 4)], [hp + 2 + pad + (t === 'coat' ? 4 : 0), hemY]] : [])];
      const neckDip = t === 'dress' ? neckBase + 6 : t === 'saree' ? neckBase + 5 : t === 'suit' || t === 'coat' ? neckBase : neckBase + 2.5;
      const d = sp(mir(R, [0, neckDip], [0, hemY + (t === 'tee' ? 1.5 : 0)]));
      const shd = [rightShadow(sw * 0.36, neckBase, bw * 0.5, hemY + 10, 7), Fn(sp([[-sw, shY + 26], [-sw * 0.3, shY + 30], [sw * 0.3, shY + 30], [sw, shY + 26], [sw, shY + 34], [-sw, shY + 34]]), 'rgba(0,0,0,.07)')];
      if (top_.stripe) shd.push(Fn(`M-200 ${n(shY + 20)} L200 ${n(shY + 20)} L200 ${n(shY + 25)} L-200 ${n(shY + 25)} Z`, top_.stripe, 'opacity=".9"'));
      s += shaded(d, col, shd, OW);
      // neckline & details
      if (t === 'tee') {
        s += L(`M${n(-nw - 1.5)} ${n(neckBase - 2)} Q0 ${n(neckBase + 6)} ${n(nw + 1.5)} ${n(neckBase - 2)}`, 1.4) + L(`M${n(-nw + 0.5)} ${n(neckBase + 0.5)} Q0 ${n(neckBase + 7.5)} ${n(nw - 0.5)} ${n(neckBase + 0.5)}`, 0.8, shade(col, 0.3));
        s += L(`M${n(-bw * 0.7)} ${n(waistY + 6)} q${n(4)} ${n(3)} ${n(9)} ${n(2)} M${n(bw * 0.2)} ${n(waistY + 10)} q${n(5)} ${n(1)} ${n(9)} ${n(-2)}`, 0.8, shade(col, 0.3));
        if (top_.star) s += F(sp(A.burstPts(0, shY + 20, 7, 3.2, 5, -Math.PI / 2)), '#FFD400', 1.2);
        if (c.top.fitted) s += L(`M${n(-hp - 1)} ${n(hipY - 3)} Q0 ${n(hipY + 1)} ${n(hp + 1)} ${n(hipY - 3)}`, 0.9, shade(col, 0.25));
      }
      if (t === 'dress') s += L(`M${n(-nw - 2)} ${n(neckBase - 2)} Q0 ${n(neckBase + 10)} ${n(nw + 2)} ${n(neckBase - 2)}`, 1.3) + L(`M${n(-c.waist)} ${n(waistY + 1)} Q0 ${n(waistY + 3.5)} ${n(c.waist)} ${n(waistY + 1)}`, 1, shade(col, 0.35));
      if (t === 'saree') {
        // pallu: diagonal drape from the waist (viewer's left) up over the viewer's right shoulder
        const pd = sp([[-c.waist - 3, waistY + 6], [-c.waist + 2, waistY - 8], [sw * 0.1, shY + 8], [sw - 5, shY - 4], [sw + 5, shY + 1], [sw + 7, shY + 14], [sw * 0.55, shY + 24], [-c.waist * 0.2, waistY - 2], [-c.waist + 8, waistY + 10]]);
        const pst = [];
        for (let i = 0; i < 6; i++) pst.push(L(`M${n(-c.waist - 10 + i * 9)} ${n(waistY + 12 - i * 2)} L${n(sw + 10 - (5 - i) * 2)} ${n(shY - 8 + i * 7)}`, 1.6, i % 2 ? top_.stripe2 : top_.stripe1, 'opacity=".75"'));
        s += shaded(pd, top_.color, [...pst, rightShadow(sw * 0.3, shY - 10, sw * 0.2, waistY + 14, 4)], OW);
        s += L(sp([[-c.waist + 2, waistY - 8], [sw * 0.1, shY + 8], [sw - 5, shY - 4]], false), 3.4, top_.border) + L(sp([[-c.waist * 0.2, waistY - 2], [sw * 0.55, shY + 24], [sw + 7, shY + 14]], false), 3.4, top_.border);
        s += L(`M${n(-c.waist - 4)} ${n(waistY + 3)} Q0 ${n(waistY + 5)} ${n(c.waist + 4)} ${n(waistY + 3)}`, 1.2, shade(top_.color, 0.35));
      }
      if (t === 'suit' || t === 'coat') {
        const vB = t === 'suit' ? waistY - 2 : waistY + 4;
        s += F(poly([[-nw - 1, neckBase - 3], [nw + 1, neckBase - 3], [0, vB]]), top_.shirt, 1.2);
        // collar points
        s += F(poly([[-nw - 1, neckBase - 3], [-1, neckBase + 3], [-nw + 1, neckBase + 7]]), top_.shirt, 1.1) + F(poly([[nw + 1, neckBase - 3], [1, neckBase + 3], [nw - 1, neckBase + 7]]), shade(top_.shirt, 0.08), 1.1);
        if (t === 'suit') s += F(poly([[-2.6, neckBase + 2], [2.6, neckBase + 2], [2, neckBase + 6.5], [-2, neckBase + 6.5]]), top_.tie, 1) + F(poly([[-2, neckBase + 6.5], [2, neckBase + 6.5], [4.2, vB - 8], [0, vB - 2], [-4.2, vB - 8]]), top_.tie, 1.1) + L(`M${n(-1)} ${n(neckBase + 12)} l3 4 M${n(-2)} ${n(neckBase + 20)} l3.5 4`, 0.7, shade(top_.tie, -0.4));
        else s += F(poly([[0, neckBase + 3], [-7, neckBase - 1], [-7, neckBase + 8]]), top_.tie, 1) + F(poly([[0, neckBase + 3], [7, neckBase - 1], [7, neckBase + 8]]), top_.tie, 1) + E(0, neckBase + 3.5, 2, 2, shade(top_.tie, 0.2), 1);
        // lapels
        for (const sd of [-1, 1]) s += F(poly([[sd * (nw + 1.5), neckBase - 3], [sd * (nw + 7), neckBase + 4], [sd * (nw + 3), neckBase + 9], [sd * (nw + 8), neckBase + 12], [0.2 * sd, vB]]), sd > 0 ? shade(top_.color, 0.12) : shade(top_.color, -0.06), 1.3);
        if (t === 'suit') {
          s += E(0.5, vB + 4, 1.7, 1.7, shade(top_.color, 0.4), 0.8) + E(0.5, vB + 13, 1.7, 1.7, shade(top_.color, 0.4), 0.8);
          s += L(`M${n(-hp + 1)} ${n(hipY + 3)} l10 0 M${n(hp - 11)} ${n(hipY + 3)} l10 0`, 1, shade(top_.color, 0.4));
          s += F(poly([[sw * 0.35, shY + 18], [sw * 0.72, shY + 17], [sw * 0.66, shY + 14.5], [sw * 0.5, shY + 13], [sw * 0.4, shY + 15]]), top_.square, 0.9);
        } else {
          s += L(`M0 ${n(vB)} L0 ${n(hemY)}`, 1.2) + L(`M${n(-hp + 2)} ${n(hipY + 6)} l9 0 l0 9 M${n(hp - 11)} ${n(hipY + 6)} l9 0 l0 9`, 1, shade(top_.color, 0.3));
          s += E(sw * 0.45, shY + 17, 1.2, 3.2, '#1D5BD8', 0) + E(sw * 0.53, shY + 17, 1.2, 3.2, '#E63329', 0);
        }
      }
    }
    if (bot.type === 'overalls') {
      const col = bot.color;
      s += F(poly([[-c.waist + 1, shY + 16], [c.waist - 1, shY + 16], [c.waist + 1, waistY + 6], [-c.waist - 1, waistY + 6]]), col, 1.8) + L(`M${n(-c.waist + 3)} ${n(shY + 17)} L${n(-sw + 6)} ${n(shY)} M${n(c.waist - 3)} ${n(shY + 17)} L${n(sw - 6)} ${n(shY)}`, 3.4, shade(col, 0.2)) + F(poly([[-5, shY + 21], [5, shY + 21], [5, shY + 29], [-5, shY + 29]]), shade(col, 0.2), 1);
    }

    // head + hair
    const tilt = P.tilt || 0;
    const hd = drawHead(c, top, mood);
    let headSvg = hd.s + hr.front;
    // facial hair & accessories
    const ex = c.extras || [];
    const hw = hd.hw;
    const Y = f => top + f * H;
    if (ex.includes('beard')) {
      const hc = c.hairColor, mY = Y(0.845);
      const bd = sp([[-hw * 1.0, Y(0.47)], [-hw * 0.9, Y(0.64)], [-hw * 0.97, Y(0.8)], [-hw * 0.72, Y(0.98)], [0, Y(1.08)], [hw * 0.72, Y(0.98)], [hw * 0.97, Y(0.8)], [hw * 0.9, Y(0.64)], [hw * 1.0, Y(0.47)], [hw * 0.84, Y(0.56)], [hw * 0.7, Y(0.72)], [hw * 0.42, Y(0.8)], [0, Y(0.9)], [-hw * 0.42, Y(0.8)], [-hw * 0.7, Y(0.72)], [-hw * 0.84, Y(0.56)]]);
      headSvg += shaded(bd, hc, [Fn(`M${n(hw * 0.3)} ${n(Y(0.4))} L${n(hw * 2)} ${n(Y(0.4))} L${n(hw * 2)} ${n(Y(1.2))} L${n(hw * 0.1)} ${n(Y(1.2))} Z`, 'rgba(0,0,0,.35)')], 2.2);
      headSvg += A.strokes([[-hw * 0.8, Y(0.8), -hw * 0.7, Y(0.88)], [-hw * 0.5, Y(0.92), -hw * 0.42, Y(0.99)], [-hw * 0.15, Y(0.98), -hw * 0.1, Y(1.04)], [-hw * 0.88, Y(0.66), -hw * 0.82, Y(0.74)]], c.hairHi, 1.1, 0.8);
      // moustache + mouth window
      headSvg += F(`M${n(-hw * 0.52)} ${n(mY + 1)} Q${n(-hw * 0.45)} ${n(Y(0.765))} ${n(-hw * 0.1)} ${n(Y(0.77))} Q0 ${n(Y(0.785))} ${n(hw * 0.1)} ${n(Y(0.77))} Q${n(hw * 0.45)} ${n(Y(0.765))} ${n(hw * 0.52)} ${n(mY + 1)} Q${n(hw * 0.3)} ${n(mY - 1.8)} 0 ${n(mY - 1.2)} Q${n(-hw * 0.3)} ${n(mY - 1.8)} ${n(-hw * 0.52)} ${n(mY + 1)} Z`, hc, 1.4);
    }
    if (ex.includes('moustache')) { const mY = Y(0.8); headSvg += F(`M0 ${n(mY)} Q${n(-hw * 0.3)} ${n(mY - 4)} ${n(-hw * 0.62)} ${n(mY + 1)} Q${n(-hw * 0.8)} ${n(mY + 3)} ${n(-hw * 0.72)} ${n(mY - 1)} Q${n(-hw * 0.4)} ${n(mY - 6.5)} 0 ${n(mY - 3)} Q${n(hw * 0.4)} ${n(mY - 6.5)} ${n(hw * 0.72)} ${n(mY - 1)} Q${n(hw * 0.8)} ${n(mY + 3)} ${n(hw * 0.62)} ${n(mY + 1)} Q${n(hw * 0.3)} ${n(mY - 4)} 0 ${n(mY)} Z`, c.hairColor, 1.3); }
    if (ex.includes('rectglasses')) {
      const eyeY = Y(0.5), ex0 = hw * 0.45, gw = hw * 0.36, gh = hw * 0.26;
      for (const sd of [-1, 1]) headSvg += `<rect x="${n(sd * ex0 - gw)}" y="${n(eyeY - gh * 1.05)}" width="${n(gw * 2)}" height="${n(gh * 1.9)}" rx="2.2" fill="#FFFFFF" fill-opacity=".12" stroke="#15110F" stroke-width="1.9"/>` + L(`M${n(sd * ex0 - gw * 0.6)} ${n(eyeY - gh * 0.6)} l${n(gw * 0.5)} ${n(gh * 0.9)}`, 0.9, '#FFFFFF', 'opacity=".55"');
      headSvg += L(`M${n(-ex0 + gw)} ${n(eyeY - gh * 0.45)} Q0 ${n(eyeY - gh * 0.95)} ${n(ex0 - gw)} ${n(eyeY - gh * 0.45)}`, 1.7, '#15110F') + L(`M${n(-ex0 - gw)} ${n(eyeY - gh * 0.6)} L${n(-hw * 1.02)} ${n(eyeY - gh * 0.3)} M${n(ex0 + gw)} ${n(eyeY - gh * 0.6)} L${n(hw * 1.02)} ${n(eyeY - gh * 0.3)}`, 1.6, '#15110F');
    }
    if (ex.includes('roundglasses')) {
      const eyeY = Y(0.5), ex0 = hw * 0.45, r = hw * 0.3;
      for (const sd of [-1, 1]) headSvg += `<circle cx="${n(sd * ex0)}" cy="${n(eyeY)}" r="${n(r)}" fill="#FFFFFF" fill-opacity=".12" stroke="#15110F" stroke-width="1.8"/>` + L(`M${n(sd * ex0 - r * 0.55)} ${n(eyeY - r * 0.35)} q${n(r * 0.25)} ${n(-r * 0.3)} ${n(r * 0.6)} ${n(-r * 0.32)}`, 0.9, '#FFFFFF', 'opacity=".6"');
      headSvg += L(`M${n(-ex0 + r)} ${n(eyeY - 1)} Q0 ${n(eyeY - 4)} ${n(ex0 - r)} ${n(eyeY - 1)}`, 1.6, '#15110F') + L(`M${n(-ex0 - r)} ${n(eyeY - 2)} L${n(-hw * 1.02)} ${n(eyeY - 1)} M${n(ex0 + r)} ${n(eyeY - 2)} L${n(hw * 1.02)} ${n(eyeY - 1)}`, 1.5, '#15110F');
    }
    if (ex.includes('bigglasses')) {
      const eyeY = Y(0.5), ex0 = hw * 0.46, r = hw * 0.34;
      for (const sd of [-1, 1]) headSvg += `<circle cx="${n(sd * ex0)}" cy="${n(eyeY)}" r="${n(r)}" fill="#DDF3FF" fill-opacity=".28" stroke="#6B4A22" stroke-width="2"/>` + L(`M${n(sd * ex0 - r * 0.5)} ${n(eyeY - r * 0.4)} q${n(r * 0.3)} ${n(-r * 0.3)} ${n(r * 0.7)} ${n(-r * 0.35)}`, 1, '#FFFFFF', 'opacity=".8"');
      headSvg += L(`M${n(-ex0 + r)} ${n(eyeY - 1)} Q0 ${n(eyeY - 4)} ${n(ex0 - r)} ${n(eyeY - 1)}`, 1.8, '#6B4A22');
    }
    if (ex.includes('bindi')) headSvg += E(0, Y(0.36), 1.8, 1.8, '#C8102E', 0);
    if (ex.includes('nosering')) headSvg += `<circle cx="${n(hw * 0.3)}" cy="${n(Y(0.735))}" r="2.4" fill="none" stroke="#E0A526" stroke-width="1.1"/>`;
    if (ex.includes('earrings')) for (const sd of [-1, 1]) headSvg += L(`M${n(sd * hw * 1.08)} ${n(Y(0.66))} l0 2.5`, 0.9, '#C9921E') + E(sd * hw * 1.08, Y(0.66) + 5, 2.4, 3.2, '#F2B52C', 1);
    if (ex.includes('studs')) for (const sd of [-1, 1]) headSvg += E(sd * hw * 1.07, Y(0.655), 1.7, 1.7, '#F4F1FF', 0.8);
    if (ex.includes('cap')) {
      const cc = c.capColor;
      headSvg += shaded(sp([[-hw * 1.08, Y(0.3)], [-hw * 1.02, Y(0.02)], [-hw * 0.6, Y(-0.14)], [0, Y(-0.18)], [hw * 0.6, Y(-0.14)], [hw * 1.02, Y(0.02)], [hw * 1.08, Y(0.3)], [0, Y(0.25)]]), cc, [rightShadow(hw * 0.3, Y(-0.3), hw * 0.4, Y(0.4), 4)], OW);
      headSvg += F(sp([[-hw * 1.02, Y(0.27)], [0, Y(0.2)], [hw * 1.02, Y(0.27)], [hw * 0.95, Y(0.36)], [0, Y(0.33)], [-hw * 0.95, Y(0.36)]]), shade(cc, 0.2), 2) + E(0, Y(-0.17), 2.5, 1.6, shade(cc, 0.3), 1);
    }
    if (ex.includes('hairband')) headSvg += L(`M${n(-hw * 1.02)} ${n(Y(0.36))} Q${n(-hw * 0.9)} ${n(Y(-0.08))} 0 ${n(Y(-0.1))} Q${n(hw * 0.9)} ${n(Y(-0.08))} ${n(hw * 1.02)} ${n(Y(0.36))}`, 4.2, INK) + L(`M${n(-hw * 1.02)} ${n(Y(0.36))} Q${n(-hw * 0.9)} ${n(Y(-0.08))} 0 ${n(Y(-0.1))} Q${n(hw * 0.9)} ${n(Y(-0.08))} ${n(hw * 1.02)} ${n(Y(0.36))}`, 2.6, c.bandColor);
    if (ex.includes('headband')) headSvg += L(`M${n(-hw * 1.04)} ${n(Y(0.24))} Q0 ${n(Y(0.06))} ${n(hw * 1.04)} ${n(Y(0.24))}`, 5.4, INK) + L(`M${n(-hw * 1.04)} ${n(Y(0.24))} Q0 ${n(Y(0.06))} ${n(hw * 1.04)} ${n(Y(0.24))}`, 3.6, c.bandColor);
    if (ex.includes('goggles')) {
      headSvg += L(`M${n(-hw * 1.05)} ${n(Y(0.2))} Q0 ${n(Y(0.08))} ${n(hw * 1.05)} ${n(Y(0.2))}`, 3.2, '#3A3550');
      for (const sd of [-1, 1]) headSvg += `<circle cx="${n(sd * hw * 0.42)}" cy="${n(Y(0.15))}" r="${n(hw * 0.3)}" fill="#7FE8F5" stroke="#3A3550" stroke-width="2.2"/>` + L(`M${n(sd * hw * 0.42 - 2)} ${n(Y(0.12))} l3 -2`, 1, '#FFFFFF');
    }
    if (tilt) headSvg = `<g transform="rotate(${tilt} 0 ${n(chinY)})">${headSvg}</g>`;
    s += headSvg + (hr.over || '');

    // bag strap (across the body) before arms
    if (ex.includes('bag')) {
      const bx = c.hip + 4, by = hipY - 4;
      s += L(`M${n(-sw + 4)} ${n(shY - 3)} L${n(bx - 2)} ${n(by - 8)}`, 3.6, INK) + L(`M${n(-sw + 4)} ${n(shY - 3)} L${n(bx - 2)} ${n(by - 8)}`, 2, '#7A4526');
      s += shaded(sp([[bx - 11, by - 8], [bx + 9, by - 8], [bx + 10, by + 6], [bx - 12, by + 6]]), '#8E5534', [rightShadow(bx, by - 12, bx + 1, by + 10)], 2) + L(`M${n(bx - 11)} ${n(by - 2)} L${n(bx + 9.5)} ${n(by - 2)}`, 0.9) + E(bx - 1, by - 2, 1.6, 1.6, '#E5B64A', 0.6);
    }

    // arms
    const armW = man ? [15, 12, 8.5] : kid ? [11, 9, 6.5] : [12.5, 10, 7];
    const sleeveCol = t === 'saree' ? top_.blouse : t === 'dress' || t === 'tee' ? top_.color : null;
    for (const k of ['L', 'R']) {
      const a = arms[k];
      const fullSleeve = t === 'suit' || t === 'coat';
      if (fullSleeve) {
        const col = top_.color;
        s += A.taper([a.sh, a.el, a.wr], [armW[0] + 5, armW[1] + 4.5, armW[2] + 5], col, { ow: OW, shadowColor: shade(col, 0.18) });
        const u = unit(a.el, a.wr), nn = [-u[1], u[0]];
        const cf = add(a.wr, u, -1.5);
        s += F(poly([add(cf, nn, (armW[2] + 3.4) / 2), add(add(cf, u, 3.2), nn, (armW[2] + 2.6) / 2), add(add(cf, u, 3.2), nn, -(armW[2] + 2.6) / 2), add(cf, nn, -(armW[2] + 3.4) / 2)]), top_.shirt, 1.1);
        s += L(`M${n(a.el[0] - 2)} ${n(a.el[1] - 2)} q2 3 5 1`, 0.9, shade(col, 0.35));
        s += hand(c, add(a.wr, u, 2.2), u, a.hand, k);
      } else {
        s += A.taper([a.sh, a.el, a.wr], armW, skin, { ow: OW * 0.9, shadowColor: skinS });
        if (sleeveCol) {
          const len = t === 'saree' ? 0.55 : t === 'dress' ? 0.36 : 0.5;
          const u = unit(a.sh, a.el), nn = [-u[1], u[0]], e = lerp(a.sh, a.el, len);
          const w0 = armW[0] + 3.2, w1 = armW[0] + 3;
          const sd0 = sp([add(add(a.sh, u, -2.5), nn, w0 * 0.1), add(add(a.sh, u, 2), nn, w0 / 2), add(e, nn, w1 / 2), add(e, nn, -w1 / 2), add(add(a.sh, u, 4), nn, -w0 / 2), add(add(a.sh, u, -1.5), nn, -w0 * 0.3)]);
          s += shaded(sd0, sleeveCol, [Fn(poly([add(a.sh, nn, w0 * 0.05), add(e, nn, w1 * 0.1), add(e, nn, w1), add(a.sh, nn, w0)]), 'rgba(0,0,0,.14)')], OW * 0.95);
          if (top_.stripe && t === 'tee') s += L(`M${n(add(e, nn, -w1 / 2)[0])} ${n(add(e, nn, -w1 / 2)[1] - u[1] * 3)} L${n(add(e, nn, w1 / 2)[0])} ${n(add(e, nn, w1 / 2)[1] - u[1] * 3)}`, 2.2, top_.stripe);
          if (t === 'saree') s += L(`M${n(add(e, nn, -w1 / 2)[0])} ${n(add(e, nn, -w1 / 2)[1])} L${n(add(e, nn, w1 / 2)[0])} ${n(add(e, nn, w1 / 2)[1])}`, 2.4, top_.border);
        }
        const u = unit(a.el, a.wr);
        if (ex.includes('bangles')) for (let i = 0; i < 3; i++) { const b = add(a.wr, u, -2 - i * 2.2), nn = [-u[1], u[0]]; s += L(`M${n(b[0] - nn[0] * 5)} ${n(b[1] - nn[1] * 5)} L${n(b[0] + nn[0] * 5)} ${n(b[1] + nn[1] * 5)}`, 1.9, i === 1 ? '#F2B52C' : '#1FA3A0'); }
        if (ex.includes('watch') && k === 'L') { const b = add(a.wr, u, -3), nn = [-u[1], u[0]]; s += L(`M${n(b[0] - nn[0] * 5.2)} ${n(b[1] - nn[1] * 5.2)} L${n(b[0] + nn[0] * 5.2)} ${n(b[1] + nn[1] * 5.2)}`, 3.2, '#2A2A2A') + E(b[0], b[1], 2.4, 2.4, '#C9CED6', 0.9); }
        s += hand(c, a.wr, u, a.hand, k);
      }
    }

    // pose transform
    const rot = P.rot || 0, lift = P.lift || 0;
    const piv = hipY - c.torso / 2;
    let anchor = [0, top - H * 0.28];
    if (rot) { const r0 = rad(rot), x = anchor[0], y = anchor[1] - piv; anchor = [x * Math.cos(r0) - y * Math.sin(r0), x * Math.sin(r0) + y * Math.cos(r0) + piv]; }
    anchor = [anchor[0], anchor[1] - lift];
    const tr = `translate(0 ${-lift})${rot ? ` rotate(${rot} 0 ${n(piv)})` : ''}`;
    return { svg: `<g transform="${tr}">${s}</g>`, anchor, floats: pose === 'fly' };
  }

  Object.keys(PEOPLE).forEach(id => { A.EXTRA[id] = (pose, mood, opt) => person(id, pose, mood, opt || {}); });
  A.PEOPLE = PEOPLE;
})();
