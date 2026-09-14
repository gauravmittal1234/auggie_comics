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
  const fitSize = r => { if (!r.maxW) return r.size; const tw = K.measure(r.text, r.size, r.weight, r.family); return tw > r.maxW ? r.size * (r.maxW / tw) : r.size; };
  K.textSVG = runs => runs.map(r0 => {
    const r = Object.assign({}, r0, { size: fitSize(r0) });
    const tr = r.rot ? ` transform="rotate(${n(r.rot)} ${n(r.cx != null ? r.cx : r.x)} ${n(r.cy != null ? r.cy : r.y)})"` : '';
    const stroke = r.stroke ? ` stroke="${r.stroke}" stroke-width="${n(r.sw || 2)}" stroke-linejoin="round" paint-order="stroke"` : '';
    return `<text x="${n(r.x)}" y="${n(r.y)}" font-family='${r.family}' font-size="${n(r.size)}" font-weight="${r.weight || 400}" fill="${r.fill || C.ink}" text-anchor="${r.anchor || 'start'}"${stroke}${tr}${r.ls ? ` letter-spacing="${r.ls}"` : ''}>${esc(r.text)}</text>`;
  }).join('');
  K.textCanvas = (ctx, runs, scale) => {
    for (const r0 of runs) {
      const r = Object.assign({}, r0, { size: fitSize(r0) });
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

  /* ---------- character measurements (local units, feet at 0, facing right) ---------- */
  // Horizontal extents so the layout can keep characters apart and inside the panel.
  const PEOPLE_EXT = { stand: [-46, 46], wave: [-46, 74], run: [-70, 72], fly: [-60, 110], cheer: [-62, 62], point: [-46, 108], think: [-58, 52], sit: [-80, 80], blast: [-100, 108], lie: [-80, 80] };
  const KID = { rohan: 1, anaya: 1, kabir: 1, zoya: 1, mira: 1 };
  const OTHER_EXT = { bholu: [-100, 120], kichdu: [-130, 140], garaj: [-110, 110], zibbo: [-40, 40], bhootu: [-50, 50], cat: [-60, 70], dog: [-70, 80], parrot: [-50, 50], monkey: [-60, 55], cow: [-90, 105], rabbit: [-40, 40], turtle: [-55, 60], fish: [-70, 45], frog: [-45, 50], owl: [-45, 45], lion: [-110, 100], penguin: [-40, 40], dolphin: [-100, 110], peacock: [-120, 60], camel: [-80, 120], goat: [-45, 65], duck: [-40, 45], pigeon: [-40, 40], squirrel: [-45, 40], crab: [-50, 50], tiger: [-115, 100], deer: [-55, 75], horse: [-90, 110] };
  K.extent = (id, pose, flip, cape, chair) => {
    let l, r;
    const dog = A.DOGS && A.DOGS[id];
    if (dog) {
      const BL = 128 * (dog.len || 1), R = 31 * (dog.R ? dog.R / 25 : 1);
      if (pose === 'sit' || pose === 'wave' || pose === 'think') { l = -0.5 * BL - 30; r = 0.42 * BL + R; }
      else if (pose === 'lie') { l = -0.85 * BL; r = 0.62 * BL + 46; }
      else if (pose === 'run' || pose === 'fly') { l = -0.62 * BL - 60; r = 0.66 * BL + 50; }
      else if (pose === 'cheer') { l = -0.62 * BL - 50; r = 0.6 * BL + 30; }
      else if (pose === 'point') { l = -0.62 * BL - 50; r = 0.72 * BL + 30; }
      else { l = -0.62 * BL - 50; r = 0.55 * BL + 34; }
      if (cape || pose === 'fly') l -= 26;
      l *= dog.size; r *= dog.size;
    } else if (A.PEOPLE && A.PEOPLE[id]) {
      [l, r] = chair && (pose === 'sit' || pose === 'lie') ? [-56, 56] : (PEOPLE_EXT[pose] || PEOPLE_EXT.stand);
      if (KID[id]) { l *= 0.72; r *= 0.72; }
    } else {
      [l, r] = OTHER_EXT[id] || [-80, 80];
      if (pose === 'fly' || pose === 'cheer') { l -= 20; r += 20; }
    }
    return flip ? { l: -r, r: -l } : { l, r };
  };
  // Approximate head radius (local units) for face-avoidance: people ~ half head height, dogs the skull.
  K.HEAD = { auggie: 40, moti: 34, pinku: 30, snowy: 40, chiku: 26, papa: 26, mumma: 25, mausi: 25, nanu: 25, dadi: 25, gadbad: 26, missji: 25, rohan: 22, anaya: 22, kabir: 21, zoya: 22, mira: 22, bholu: 46, kichdu: 60, garaj: 70, zibbo: 46, bhootu: 40, cow: 34, horse: 36, camel: 30, lion: 44, tiger: 40, peacock: 22 };

  // rooms with chairs: people who sit here sit on a chair instead of cross-legged on the floor
  const CHAIR_BG = { office: 1, cafe: 1, classroom: 1, kitchen: 1, lab: 1, station: 1, airport: 1, wedding: 1, vet: 1 };

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

    // props. Small story objects (a ball, a carrot, a camera, a book) are what a panel is often about, so speech
    // bubbles try not to cover them; big scenery (trees, houses, vehicles, the sun) may be covered.
    const SCENERY = { tree: 1, palm: 1, bush: 1, flower: 1, rock: 1, house: 1, rainbow: 1, sun: 1, cloud: 1, bus: 1, train: 1, hotair: 1, plane: 1, tent: 1, car: 1, boat: 1, rickshaw: 1, bicycle: 1, dustbin: 1, puddle: 1, sandcastle: 1, campfire: 1, machine: 1 };
    const propBoxes = [];
    for (const p of sc.props || []) {
      const sky = A.SKY_PROPS[p.id];
      const k = unit * (p.s || 1) * (A.PROP_SIZE[p.id] || 1);
      const px = p.x * w;
      const py = p.y != null ? p.y * h : sky != null ? sky * h : gy + 4;
      art += `<g transform="translate(${n(px)} ${n(py)}) scale(${n(k * 100) / 100})">${A.prop(p.id)}</g>`;
      if (!SCENERY[p.id]) propBoxes.push({ x: px - 32 * k, y: py - 46 * k, w: 64 * k, h: 48 * k, id: p.id });
    }

    // headroom: how much of the top of the panel the caption and bubbles will need, so heads sit below the words.
    // If a tight panel has more words than room, letter it a little smaller (like a real letterer), down to 78%.
    const needFor = fsz => {
      const hi = isHi(lang);
      let capH = 0;
      if (sc.cap && sc.cap[lang]) { const cfs = fsz * 0.92; capH = K.wrap(sc.cap[lang], cfs, 600, BODY, Math.min(w * 0.8, 420) - 24).length * cfs * (hi ? 1.42 : 1.3) + 14 + 22; }
      const says = (sc.say || []).filter(b => b[lang]).map(b => {
        const kind = b.kind || 'say', bfs = kind === 'shout' ? fsz * 1.08 : kind === 'whisper' ? fsz * 0.92 : fsz;
        const nl = K.wrap(b[lang], bfs, kind === 'shout' ? 800 : 600, BODY, Math.min(w * 0.6, 300 * (fsz / 18))).length;
        return nl * bfs * (hi ? 1.42 : 1.28) + 18 + (kind === 'shout' || kind === 'think' ? 30 : 10);
      });
      const side = w > 520 && says.length === 2;
      return 12 + capH + (side ? Math.max(0, ...says) : says.reduce((a2, b2) => a2 + b2, 0));
    };
    const narrowP = w < 450; // half-width panels have no room beside the heads, so the words need the full height
    const roomFrac = narrowP ? 0.64 : 0.55, useFrac = narrowP ? 1 : 0.85;
    let fsPanel = opt.fs || 18, need0 = needFor(fsPanel);
    if (need0 * useFrac > h * roomFrac) {
      for (let f = 0.94; f >= 0.78; f -= 0.04) { fsPanel = (opt.fs || 18) * f; need0 = needFor(fsPanel); if (need0 * useFrac <= h * roomFrac) break; }
    }
    const headroom = Math.min(need0 * useFrac, h * roomFrac);

    // characters ------------------------------------------------------------------
    // 1) auto-facing: in a conversation the left one looks right and the right one looks left
    // 2) measure: horizontal extents (local units, before scale) so nobody overlaps
    // 3) camera: fewer characters → closer shot (bigger faces), cropped below the knees
    // 4) crowd: if a row cannot fit, every other character steps back (smaller, higher), like a real crowd shot
    // 5) separate: push apart within each depth layer, shrink if still too wide, keep everything inside
    const anchors = [], bodies = [], faces = [];
    const chars = sc.chars || [];
    const nC = chars.length;
    const shot = sc.shot || (opt.big ? 'wide' : nC === 1 ? 'medium' : nC === 2 ? 'two' : 'wide');
    const zoom = { close: 1.9, medium: 1.42, two: 1.16, wide: 1 }[shot] || 1;
    const FACE_OK = { stand: 1, sit: 1, lie: 1, wave: 1, cheer: 1, think: 1, blast: 1, point: 1 };
    const facing = chars.map(c => !!c.flip);
    if (nC >= 2 && (sc.say || []).length) {
      const idx = chars.map((c, i) => i).sort((p, q) => chars[p].x - chars[q].x);
      const Li = idx[0], Ri = idx[idx.length - 1];
      if (chars[Li].face == null && chars[Li].flip && FACE_OK[chars[Li].pose || 'stand']) facing[Li] = false;
      if (chars[Ri].face == null && !chars[Ri].flip && FACE_OK[chars[Ri].pose || 'stand']) facing[Ri] = true;
    }
    chars.forEach((c, i) => { if (c.face === 'left') facing[i] = true; if (c.face === 'right') facing[i] = false; });
    const drawn = chars.map((c, i) => {
      const chair = !!(CHAIR_BG[sc.bg] && (c.pose === 'sit' || c.pose === 'lie') && A.PEOPLE && A.PEOPLE[c.id]);
      const ch = A.char(c.id, c.pose || 'stand', c.mood || 'happy', { cape: c.cape, chair });
      const ext = K.extent(c.id, c.pose || 'stand', facing[i], !!c.cape, chair);
      const k = unit * (c.s || 1) * (A.CHAR_SIZE[c.id] || 1) * (A.DOGS && A.DOGS[c.id] && zoom > 1 ? 1 + (zoom - 1) * 0.8 : zoom);
      return { c, i, ch, ext, k, cx: c.x * w, flip: facing[i], depth: 0 };
    });
    const gap = 10;
    const widthOf = d => (d.ext.r - d.ext.l) * d.k;
    const spanOf = arr => arr.reduce((a2, d) => a2 + widthOf(d), 0) + gap * Math.max(0, arr.length - 1) + 12;
    const order = drawn.slice().sort((p, q) => p.cx - q.cx);
    if (nC >= 3 && spanOf(order) > w * 0.98) {
      // crowd staging: the middle character steps back (a little smaller, standing further up the floor)
      // and stands in the gap between the other two, so every face stays visible
      const mid = order[Math.floor(order.length / 2)];
      const hOf = d => -d.ch.anchor[1] * d.k;
      const tallest = Math.max(...order.filter(d => d !== mid).map(hOf));
      // a much smaller middle character (a pug between a Labrador and a person) stays in front: stepping back
      // would hide their face behind a bigger head. Then the row just shrinks a little to fit.
      if (hOf(mid) >= tallest * 0.8) { mid.depth = 1; mid.k *= 0.84; }
    }
    const layers = [order.filter(d => !d.depth), order.filter(d => d.depth)];
    const need = Math.max(...layers.map(Lr => (Lr.length ? spanOf(Lr) : 0)));
    let ks = 1;
    if (need > w) ks = Math.max(0.5, w / need);
    drawn.forEach(d => { d.k *= ks; });
    layers.forEach(Lr => {
      Lr.forEach(d => { d.l = d.cx + d.ext.l * d.k; d.r = d.cx + d.ext.r * d.k; });
      for (let i = 1; i < Lr.length; i++) { const p = Lr[i - 1], d = Lr[i]; const nd = p.r + gap - d.l; if (nd > 0) { d.cx += nd; d.l += nd; d.r += nd; } }
      if (Lr.length) {
        let shift = 0;
        const first = Lr[0], last = Lr[Lr.length - 1];
        if (last.r > w - 6) shift = w - 6 - last.r;
        if (first.l + shift < 6) shift = 6 - first.l;
        Lr.forEach(d => { d.cx += shift; d.l += shift; d.r += shift; });
        if (last.r > w - 6 || first.l < 6) {
          const tot = Lr.reduce((a2, d) => a2 + (d.r - d.l), 0);
          const free = Math.max(0, (w - 12 - tot) / (Lr.length + 1));
          let x = 6 + free;
          Lr.forEach(d => { const wd = d.r - d.l, off = x - d.l; d.cx += off; d.l += off; d.r += off; x += wd + free; });
        }
      }
    });
    // back-layer characters stand between the front ones so their faces stay visible
    if (layers[1].length) layers[1].forEach(d => {
      const left = layers[0].filter(f => f.cx < d.cx).pop(), right = layers[0].find(f => f.cx > d.cx);
      if (left && right) { const mid = (left.r + right.l) / 2; d.cx = mid; }
      d.l = d.cx + d.ext.l * d.k; d.r = d.cx + d.ext.r * d.k;
    });
    const drawOrder = layers[1].concat(layers[0]);
    const placed = [];
    drawOrder.forEach(d => {
      const { c, ch } = d;
      let k = d.k;
      const cx = d.cx;
      let by = gy + 6;
      const floaty = (sc.bg === 'space' || sc.bg === 'sky' || sc.bg === 'underwater') && c.pose !== 'sit';
      const isFloater = c.pose === 'fly' || c.id === 'garaj' || ch.floats || floaty;
      if (c.pose === 'fly') by = h * 0.66;
      else if (c.id === 'garaj') by = h * 0.58;
      else if (ch.floats) by = h * 0.72;
      else if (floaty) by = h * 0.84;
      const f = d.flip ? -1 : 1;
      const charH = -ch.anchor[1] * k;
      if (zoom > 1 && !isFloater) by += charH * (zoom - 1) * 0.42;
      if (d.depth) by -= charH * 0.2;
      let minHead = h * (zoom > 1.3 ? 0.1 : 0.16);
      if (!isFloater) minHead = Math.max(minHead, headroom);
      const headY = by + ch.anchor[1] * k;
      if (headY < minHead) {
        // lower the character (a comic crop: feet may leave the panel) — and if that is not enough, step back a little
        const crop = A.DOGS && A.DOGS[c.id] ? 0.28 : 0.42;
        const H0 = -ch.anchor[1];
        if (d.depth && !isFloater) {
          // back-row characters keep standing further back (feet stay raised) and simply get a little smaller,
          // instead of being pushed down behind the front row
          const k2 = Math.max(k * 0.6, (by - minHead) / H0);
          if (k2 < k) { k = k2; d.k = k2; d.l = cx + d.ext.l * k2; d.r = cx + d.ext.r * k2; }
        } else if (isFloater || minHead + H0 * k <= h + H0 * k * crop) by += minHead - headY;
        else {
          const k2 = Math.max(k * 0.62, (h - minHead) / (H0 * (1 - crop)));
          if (k2 < k) { k = k2; d.k = k2; d.l = cx + d.ext.l * k2; d.r = cx + d.ext.r * k2; }
          by = minHead + H0 * k;
        }
      }
      if (!isFloater) art += `<ellipse cx="${n(cx + (d.ext.l + d.ext.r) / 2 * k)}" cy="${n(Math.min(by - 2, h + 40))}" rx="${n((d.ext.r - d.ext.l) / 2 * k * 0.42)}" ry="${n(7 * Math.sqrt(k * 4))}" fill="rgba(20,10,30,.18)"/>`;
      art += `<g transform="translate(${n(cx)} ${n(by)}) scale(${n(k * f * 1000) / 1000} ${n(k * 1000) / 1000})">${ch.svg}</g>`;
      const ax = cx + ch.anchor[0] * k * f, ay = Math.max(14, by + ch.anchor[1] * k);
      const headR = (K.HEAD[c.id] || 40) * k;
      placed[d.i] = { anchor: { x: ax, y: ay }, face: { x: ax - headR, y: ay + 4, w: headR * 2, h: headR * 2.1 }, body: { x: d.l, y: by + ch.anchor[1] * k, w: d.r - d.l, h: Math.min(h, by) - (by + ch.anchor[1] * k) } };
    });
    chars.forEach((c, i) => { anchors.push(placed[i].anchor); faces.push(placed[i].face); bodies.push(placed[i].body); });
    if (opt.meta) opt.meta.push({ props: propBoxes, box, chars: drawn.map(d => ({ id: d.c.id, l: d.l, r: d.r, cx: d.cx, depth: d.depth })), faces, anchors, shot, ks });
    art += A.halftone(0, 0, w, h * 0.0001, 'dark');

    const texts = [];
    const boxes = [];
    const m = 16;
    let top = 12;
    const fs = fsPanel;
    const areaOf = (a, b2) => Math.max(0, Math.min(a.x + a.w, b2.x + b2.w) - Math.max(a.x, b2.x)) * Math.max(0, Math.min(a.y + a.h, b2.y + b2.h) - Math.max(a.y, b2.y));

    // caption
    if (sc.cap && sc.cap[lang]) {
      const cfs = fs * 0.92;
      const lh = cfs * (isHi(lang) ? 1.42 : 1.3);
      const capW = Math.min(w * 0.8, 420) - 24;
      let lines = K.wrap(sc.cap[lang], cfs, 600, BODY, capW), tw = Math.max(...lines.map(l => K.measure(l, cfs, 600, BODY)));
      if (tw > capW) tw = capW;
      const cw = tw + 26, ch = lines.length * lh + 14;
      const cx = poly[0][0] + 10, cy = Math.max(poly[0][1], poly[1][1]) + 10;
      art += `<rect x="${n(cx + 4)}" y="${n(cy + 4)}" width="${n(cw)}" height="${n(ch)}" fill="${C.ink}"/>` + A.rect(cx, cy, cw, ch, 0, '#FFE45C', 3);
      lines.forEach((l, i) => texts.push({ text: l, x: X + cx + 13, y: Y + cy + 7 + lh * (i + 0.78), size: cfs, weight: 600, family: BODY, fill: C.ink, maxW: cw - 20 }));
      boxes.push({ x: cx, y: cy, w: cw + 4, h: ch + 4 });
      if (opt.meta) opt.meta[opt.meta.length - 1].cap = { x: cx, y: cy, w: cw + 4, h: ch + 4 };
      top = cy + ch + 12;
    }

    // speech bubbles: each bubble gets candidate spots (several wraps × many positions), scored for faces covered,
    // the caption, the panel edge and distance from the speaker. Panels with two bubbles are then solved together,
    // so bubbles never overlap each other and always read in order (top-to-bottom, then left-to-right).
    const bubbleArt = [];
    const specs = [];
    (sc.say || []).forEach(b => {
      const txt = b[lang]; if (!txt) return;
      const kind = b.kind || 'say';
      const bfs0 = kind === 'shout' ? fs * 1.08 : kind === 'whisper' ? fs * 0.92 : fs;
      const weight = kind === 'shout' ? 800 : 600;
      const maxW = Math.min(w * 0.6, 300 * (fs / 18));
      const padX = 16, padY = kind === 'think' ? 10 : 9;
      const extra = kind === 'shout' ? 16 : kind === 'think' ? 16 : 0;
      const an = anchors[b.who] || { x: w / 2, y: h * 0.6 };
      const fb = faces[b.who] || { x: an.x - 40, y: an.y, w: 80, h: 80 };
      const layout = mw => {
        let bfs = bfs0, lines = K.wrap(txt, bfs, weight, BODY, mw), tw = Math.max(...lines.map(l => K.measure(l, bfs, weight, BODY)));
        if (tw > mw) { bfs *= mw / tw; lines = K.wrap(txt, bfs, weight, BODY, mw); tw = Math.max(...lines.map(l => K.measure(l, bfs, weight, BODY))); }
        if (lines.length > 5) { bfs *= 0.88; lines = K.wrap(txt, bfs, weight, BODY, mw * 1.12); tw = Math.max(...lines.map(l => K.measure(l, bfs, weight, BODY))); }
        const lhB = bfs * (isHi(lang) ? 1.42 : 1.28);
        return { bfs, lines, lhB, bw: tw + padX * 2, bh: lines.length * lhB + padY * 2 - (lhB - bfs) * 0.4 };
      };
      const clampX = (x, bw) => Math.max(m + extra, Math.min(w - m - extra - bw, x));
      const topY = 10 + extra * 0.6; // very top of the panel; the caption is avoided by the overlap penalty
      const clampY = (y, bh) => Math.max(topY, Math.min(h - bh - 10 - extra * 0.6, y));
      const stackY = Math.max(top, ...boxes.map(o => o.y + o.h + 10 + extra * 0.6));
      const cands = [];
      [[maxW, 0], [maxW * 0.72, 1.4], [Math.min(maxW, w * 0.42), 1.8], [Math.min(maxW, w * 0.34), 2.6]].forEach(([mw, narrowPen]) => {
        const L = layout(mw);
        const { bw, bh } = L;
        const besideY = clampY(fb.y - bh * 0.15, bh);
        const aboveY = fb.y - bh - 14 - extra;
        const capR = boxes.length ? Math.max(...boxes.map(o => o.x + o.w)) + 12 + extra : m + extra;
        const pos = [
          [clampX(an.x - bw / 2, bw), top + extra * 0.6, 0],
          [clampX(an.x - bw / 2, bw), topY, 0.05], [clampX(capR, bw), topY, 0.1], [w - m - extra - bw, topY, 0.15],
          [clampX(an.x - bw / 2, bw), aboveY, 0.25],
          [clampX(fb.x + fb.w * 0.5 - bw * 0.15, bw), aboveY, 0.35],
          [clampX(fb.x + fb.w * 0.5 - bw * 0.85, bw), aboveY, 0.35],
          [fb.x + fb.w + 12 + extra, besideY, 0.2], [fb.x - 12 - extra - bw, besideY, 0.2],
          [fb.x + fb.w + 12 + extra, top + extra * 0.6, 0.1], [fb.x - 12 - extra - bw, top + extra * 0.6, 0.1],
          [clampX(an.x - bw / 2, bw), stackY, 0.8], [m + extra, stackY, 1], [w - m - extra - bw, stackY, 1],
          [clampX(an.x - bw / 2, bw), clampY(fb.y + fb.h + 12, bh), 2.2],
        ];
        // a ladder of rows so two bubbles can stack cleanly
        [0.14, 0.28, 0.42].forEach((f, i) => [m + extra, clampX(an.x - bw / 2, bw), w - m - extra - bw].forEach(x => pos.push([x, top + extra * 0.6 + h * f, 0.5 + i * 0.25])));
        pos.forEach(([x, y, pen]) => {
          const box2 = { x, y, w: bw, h: bh }, big = { x: x - extra, y: y - extra, w: bw + extra * 2, h: bh + extra * 2 };
          let score = pen + narrowPen;
          faces.forEach(fc => { score += (areaOf(box2, fc) / (fc.w * fc.h)) * 40; });
          propBoxes.forEach(pb => { score += (areaOf(box2, pb) / (pb.w * pb.h)) * 16; }); // keep story objects visible
          boxes.forEach(o => { const ov2 = areaOf(big, o); if (ov2 > 0) score += 30 + (ov2 / (bw * bh)) * 90; }); // never on the caption
          if (x < m + extra - 1 || x + bw > w - m - extra + 1 || y < 6 || y + bh > h - 6) score += 60;
          score += Math.hypot(x + bw / 2 - an.x, y + bh / 2 - an.y) / w * 2.2;
          score += (y / h) * 0.6;
          if (y > an.y + 10) score += 1.2; // bubbles belong above or beside the head
          cands.push({ score, x, y, L, big });
        });
      });
      cands.sort((p1, p2) => p1.score - p2.score);
      specs.push({ b, kind, weight, padY, extra, an, cands: cands.slice(0, 48) });
    });
    // pair penalty: bubbles never touch, and the later one reads after the earlier one
    const pairPen = (p1, q1) => {
      let pen = 0;
      const ov2 = areaOf(p1.big, q1.big);
      if (ov2 > 0) pen += 30 + (ov2 / (q1.L.bw * q1.L.bh)) * 90;
      const sameRow = Math.abs(q1.y - p1.y) < Math.min(p1.L.bh, q1.L.bh) * 0.6;
      if (sameRow ? q1.x + q1.L.bw / 2 < p1.x + p1.L.bw / 2 : q1.y < p1.y) pen += 25;
      return pen;
    };
    const chosen = [];
    if (specs.length === 1) chosen.push(specs[0].cands[0]);
    else if (specs.length >= 2) {
      let best = null;
      for (const p1 of specs[0].cands) for (const q1 of specs[1].cands) { const tot = p1.score + q1.score + pairPen(p1, q1); if (!best || tot < best.tot) best = { tot, p1, q1 }; }
      chosen.push(best.p1, best.q1);
      for (let i = 2; i < specs.length; i++) {
        let bb = null;
        for (const q1 of specs[i].cands) { const tot = q1.score + chosen.reduce((acc, p1) => acc + pairPen(p1, q1), 0); if (!bb || tot < bb.tot) bb = { tot, q1 }; }
        chosen.push(bb.q1);
      }
    }
    specs.forEach((spec, i) => {
      const { b, kind, weight, padY, extra, an } = spec;
      const pick = chosen[i];
      const { bw, bh, lines, bfs, lhB } = pick.L;
      const bx = pick.x, byy = pick.y;
      if (opt.meta) opt.meta[opt.meta.length - 1].bubbles = (opt.meta[opt.meta.length - 1].bubbles || []).concat([{ x: bx, y: byy, w: bw, h: bh, who: b.who, score: pick.score }]);
      // tail
      let tail = null;
      const midX = bx + bw / 2;
      const below = an.y > byy + bh;
      if (below) {
        const bxT = Math.max(bx + 20, Math.min(bx + bw - 20, an.x + (midX - an.x) * 0.25));
        const dx = an.x - bxT, dy = an.y - (byy + bh), d = Math.hypot(dx, dy) || 1;
        const L2 = Math.min(d - 8, 56);
        if (L2 > 6) tail = { bx: bxT, by: byy + bh - 2, tx: bxT + (dx / d) * L2, ty: byy + bh + (dy / d) * L2 };
      } else {
        const onRight = an.x > midX;
        const edge = onRight ? bx + bw - 2 : bx + 2;
        const by2 = byy + bh * 0.65;
        const dx = an.x - edge, dy = an.y - by2, d = Math.hypot(dx, dy) || 1;
        const L2 = Math.min(d - 8, 50);
        if (L2 > 6) tail = { bx: edge, by: by2, tx: edge + (dx / d) * L2, ty: by2 + (dy / d) * L2, horiz: true };
      }
      const sh = bubbleShape(kind, bx, byy, bw, bh, tail, rnd);
      bubbleArt.push(sh);
      lines.forEach((l, li) => texts.push({ text: l, x: X + bx + bw / 2, y: Y + byy + padY + lhB * li + bfs * 0.98, size: bfs, weight, family: BODY, fill: C.ink, anchor: 'middle' }));
      boxes.push({ x: bx - extra, y: byy - extra, w: bw + extra * 2, h: bh + extra * 2 });
    });
    art += bubbleArt.map(s => s.stroke).join('') + bubbleArt.map(s => s.fill).join('');

    // sound effect
    if (sc.fx && sc.fx[lang]) {
      const R0 = Math.min(90, Math.max(46, Math.min(w, h) * 0.2));
      let R = R0;
      const avg = chars.length ? chars.reduce((a, c) => a + c.x, 0) / chars.length : 0.5;
      const near = avg < 0.5 ? 0.78 : 0.22, far = 1 - near;
      const cands = [[near, 0.5], [near, 0.72], [near, 0.32], [far, 0.34], [far, 0.68], [0.5, 0.78], [0.5, 0.4], [0.18, 0.28], [0.82, 0.28], [0.18, 0.74], [0.82, 0.74], [0.5, 0.26]];
      const area = areaOf;
      let best = cands[0], bestScore = 1e9, bestR = R0;
      [1, 0.82, 0.68, 0.56, 0.46].forEach(fz => cands.forEach((cd, ci) => { // down to a small burst for very tight panels
        const R = R0 * fz;
        const cxx = Math.max(R + 6, Math.min(w - R - 6, cd[0] * w)), cyy = Math.max(R * 0.8 + 6, Math.min(h - R * 0.8 - 6, cd[1] * h));
        const fb = { x: cxx - R, y: cyy - R * 0.8, w: R * 2, h: R * 1.6 };
        const fa = fb.w * fb.h;
        let sc2 = boxes.reduce((a, o) => a + area(fb, o) / Math.max(1, Math.min(fa, o.w * o.h)), 0) * 120 + bodies.reduce((a, o) => a + area(fb, o) / fa, 0) * 3 + faces.reduce((a, o) => a + area(fb, o) / (o.w * o.h), 0) * 120 + ci * 0.05 + (1 - fz) * 1.2;
        if (fb.y + fb.h > h || fb.y < 0) sc2 += 2;
        if (sc2 < bestScore) { bestScore = sc2; best = [cxx / w, cyy / h]; bestR = R; }
      }));
      R = bestR;
      const fx0 = Math.max(R + 6, Math.min(w - R - 6, best[0] * w)), fy0 = Math.max(R * 0.8 + 6, Math.min(h - R * 0.8 - 6, best[1] * h));
      const fxBox = { x: fx0 - R, y: fy0 - R * 0.8, w: R * 2, h: R * 1.6 };
      const coversFace = faces.some(fc => areaOf(fxBox, fc) > fc.w * fc.h * 0.18);
      if (opt.meta && !(coversFace)) opt.meta[opt.meta.length - 1].fx = Object.assign({ score: bestScore }, fxBox);
      const coversWords = boxes.some(o => areaOf(fxBox, o) > Math.min(fxBox.w * fxBox.h, o.w * o.h) * 0.12);
      if (!(coversFace || coversWords)) {

      const pts = A.burstPts(0, 0, R, R * 0.62, 13, rnd() * 0.4, 0.28, rnd).map(p => [fx0 + p[0] * 1.15, fy0 + p[1] * 0.85]);
      art += A.poly(pts.map(p => [p[0] + 5, p[1] + 5]), C.ink, 0) + A.poly(pts, C.yel, 3.5);
      const ff = fxFont(lang);
      let size = R * (isHi(lang) ? 0.62 : 0.78);
      const tw = K.measure(sc.fx[lang], size, ff.weight, ff.family);
      if (tw > R * 1.9) size *= (R * 1.9) / tw;
      texts.push({ text: sc.fx[lang], x: X + fx0, y: Y + fy0 + size * (isHi(lang) ? 0.28 : 0.36), size, weight: ff.weight, family: ff.family, fill: C.red, stroke: C.ink, sw: 5, anchor: 'middle', rot: -9, cx: X + fx0, cy: Y + fy0, ls: isHi(lang) ? 0 : 1 });
      } else if (opt.meta) opt.meta[opt.meta.length - 1].fxSkipped = true;
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
    L4c: { rows: [{ h: 1.08, cols: [1, 1.1], cs: 14 }, { h: 0.96, cols: [1] }, { h: 0.96, cols: [1] }], rs: [-12, 10] },
    L4d: { rows: [{ h: 0.96, cols: [1] }, { h: 0.96, cols: [1] }, { h: 1.08, cols: [1.1, 1], cs: -14 }], rs: [12, -10] },
  };
  // which panel indexes (within the page) land in half-width slots
  const HALF = { L1: [], L2: [], L3a: [], L3b: [0, 1], L4a: [1, 2], L4b: [0, 1, 2, 3], L4c: [0, 1], L4d: [2, 3] };
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
    const crowd = j => ((comic.panels[j] && comic.panels[j].chars) || []).length;
    // word-heavy panels (a caption plus two bubbles, or lots of words) need a full-width slot to stay readable
    const wc = t => String(t || '').trim().split(/\s+/).filter(Boolean).length;
    const heavy = j => {
      const p = comic.panels[j]; if (!p) return false;
      const words = wc(p.cap && p.cap.en) + (p.say || []).reduce((a, b) => a + wc(b.en), 0);
      return words > 30 || (!!p.cap && (p.say || []).length >= 2 && words > 22);
    };
    // how badly a layout fits: 3 characters or lots of words in a half-width slot; among the best, alternate for variety
    // words beyond what a half-width panel holds comfortably: the wordiest panel should get the full width
    const excess = j => { const p = comic.panels[j]; if (!p) return 0; const words = wc(p.cap && p.cap.en) + (p.say || []).reduce((a, b) => a + wc(b.en), 0); return Math.max(0, words - 18) + (p.cap && (p.say || []).length >= 2 ? 6 : 0); };
    const misfit = (from, L) => HALF[L].reduce((a, j) => a + (crowd(from + j) > 2 ? 40 : 0) + excess(from + j), 0);
    const pick = (from, options) => {
      const best = Math.min(...options.map(L => misfit(from, L)));
      const list = options.filter(L => misfit(from, L) === best);
      return list[flip % list.length];
    };
    while (i < P) {
      const left = P - i;
      let take, layout;
      if (young) { take = Math.min(3, left); layout = take === 3 ? pick(i, ['L3a', 'L3b']) : take === 2 ? 'L2' : 'L1'; }
      else { take = left === 5 || left === 6 ? 3 : Math.min(4, left); layout = take === 4 ? pick(i, ['L4a', 'L4c', 'L4d', 'L4b']) : take === 3 ? pick(i, ['L3a', 'L3b']) : take === 2 ? 'L2' : 'L1'; }
      pages.push({ type: 'story', from: i, to: i + take, layout });
      i += take; flip = (flip + 1) % 4;
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
    // title band geometry first, so the cover scene can end right behind it (faces never hide under the title)
    const title = comic.title[lang];
    const tSize = lang === 'hi' ? 54 : 64, fam = lang === 'hi' ? BODY : DISPLAY, wt = lang === 'hi' ? 800 : 400;
    let tSz = tSize, lines = K.wrap(title, tSz, wt, fam, W - 150);
    while (lines.length > 2 && tSz > 34) { tSz -= 4; lines = K.wrap(title, tSz, wt, fam, W - 150); }
    const lh = tSz * (lang === 'hi' ? 1.2 : 1.02);
    const bandH = lines.length * lh + 54;
    const by = H - bandH - 48 - (K.wrap(comic.blurb[lang], 19, 600, BODY, W - 60).length > 1 ? 24 : 0);
    const nCast = (comic.cover.chars || []).length;
    // a closer "hero shot": one or two big characters, cropped by the title band like a real comic cover
    const sc = Object.assign({}, comic.cover, { say: [], cap: null, shot: nCast <= 1 ? 'medium' : nCast === 2 ? 'two' : 'wide' });
    const boxH = by + 30 - 150;
    const box = { x: 0, y: 150, w: W, h: boxH, poly: [[0, 150], [W, 150], [W, 150 + boxH], [0, 150 + boxH]] };
    const p = K.panel(sc, box, { lang, fs: 20, seed: comic.id * 7 + 3, big: true });
    let art = p.art.replace(/<polygon points="[^"]*" fill="none" stroke="#16142B" stroke-width="5" stroke-linejoin="round"\/>$/, '');
    art += `<rect x="0" y="${n(by + 20)}" width="${W}" height="${n(H - by - 20)}" fill="${C.ink}"/>`;
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
    art += A.poly([[-10, by + 16], [W + 10, by - 10], [W + 10, by + bandH - 6], [-10, by + bandH + 12]], C.ink, 0) + A.poly([[-10, by + 8], [W + 10, by - 18], [W + 10, by + bandH - 14], [-10, by + bandH + 4]], C.yel, 5);
    lines.forEach((l, i) => texts.push({ text: l, x: W / 2, y: by + 30 + lh * (i + 0.78), size: tSz, weight: wt, family: fam, anchor: 'middle', fill: C.red, stroke: C.ink, sw: 6, rot: -1.6, cx: W / 2, cy: by + bandH / 2, ls: lang === 'hi' ? 0 : 1.5, maxW: W - 120 }));
    const bl = K.wrap(comic.blurb[lang], 19, 600, BODY, W - 60).slice(0, 2);
    const blh = 19 * (lang === 'hi' ? 1.4 : 1.25), bandB = bl.length * blh + 18;
    art += `<rect x="0" y="${n(H - bandB)}" width="${W}" height="${n(bandB)}" fill="${C.ink}"/>`;
    bl.forEach((l, i) => texts.push({ text: l, x: W / 2, y: H - bandB + 9 + blh * (i + 0.8), size: 19, weight: 600, family: BODY, anchor: 'middle', fill: '#fff', maxW: W - 40 }));
    return { art, texts };
  }

  function storyPage(comic, pg, pageNo, lang, meta) {
    const W = K.W, H = K.H, t = T[lang];
    const boxes = grid(LAYOUTS[pg.layout], 26, 62, W - 26, H - 44, 16);
    let art = '';
    const texts = [];
    const fs = comic.age === '4-6' ? 21 : 18.5;
    for (let i = pg.from; i < pg.to; i++) {
      const p = K.panel(comic.panels[i], boxes[i - pg.from], { lang, fs, seed: comic.id * 100 + i, meta });
      art += p.art; texts.push(...p.texts);
    }
    art += A.rect(26, 18, 34, 30, 3, C.red, 3);
    texts.push({ text: 'A', x: 43, y: 43, size: 26, family: DISPLAY, anchor: 'middle', fill: C.yel, stroke: C.ink, sw: 3 });
    texts.push({ text: `AUGGIE ${t.comics}  #${pad2(comic.id)}`, x: 70, y: 43, size: lang === 'hi' ? 22 : 24, weight: lang === 'hi' ? 800 : 400, family: lang === 'hi' ? BODY : DISPLAY, fill: C.ink, ls: lang === 'hi' ? 0 : 1 });
    texts.push({ text: comic.title[lang], x: W - 26, y: 43, size: 18, weight: 700, family: BODY, anchor: 'end', fill: C.red, maxW: W - 26 - 360 });
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
    texts.push({ text: t.lesson, x: 96 + (lang === 'hi' ? 115 : 145), y: my + 12, size: lang === 'hi' ? 28 : 32, weight: lang === 'hi' ? 800 : 400, family: lang === 'hi' ? BODY : DISPLAY, anchor: 'middle', fill: '#fff', ls: lang === 'hi' ? 0 : 2, maxW: lang === 'hi' ? 210 : 270 });
    art += A.poly(A.burstPts(W - 112, my + 18, 30, 13, 5, -Math.PI / 2), C.yel, 4);
    mLines.forEach((l, i) => texts.push({ text: l, x: W / 2 - 4, y: my + 58 + mlh * (i + 0.72), size: 34, weight: 700, family: BODY, anchor: 'middle', fill: C.ink }));
    art += `<rect x="0" y="${H - 64}" width="${W}" height="64" fill="${C.red}"/>` + A.halftone(0, H - 64, W, 64, 'dark');
    texts.push({ text: t.more, x: W / 2, y: H - 22, size: lang === 'hi' ? 26 : 30, weight: lang === 'hi' ? 800 : 400, family: lang === 'hi' ? BODY : DISPLAY, anchor: 'middle', fill: '#fff', ls: lang === 'hi' ? 0 : 1.5 });
    return { art, texts };
  }

  // Render page `idx` of comic. Returns {art (full svg, no text), texts, svg (full svg with text)}
  K.render = (comic, idx, lang, meta) => {
    const pages = K.plan(comic);
    const pg = pages[idx];
    let r;
    if (pg.type === 'cover') r = coverPage(comic, lang);
    else if (pg.type === 'end') r = endPage(comic, lang);
    else r = storyPage(comic, pg, idx, lang, meta);
    return { art: frame(r.art), texts: r.texts, svg: frame(r.art + K.textSVG(r.texts)), type: pg.type, texts2: r.texts };
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
