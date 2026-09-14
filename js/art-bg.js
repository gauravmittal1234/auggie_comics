/* Auggi Comics — backgrounds. Each takes (w, h, gy, rnd) and returns SVG. gy = ground line. */
(function () {
  const A = window.AuggiArt, C = A.C, n = A.n;
  const LWb = () => A.getLW() * 0.8;

  const sky = (id, w, h, stops, ht = 'dark', htH) => `<defs>${A.vgrad('sg-' + id, stops)}</defs><rect width="${n(w)}" height="${n(h)}" fill="url(#sg-${id})"/>` + (ht ? A.halftone(0, 0, w, htH || h, ht) : '');
  const ground = (w, h, gy, fill, edge) => `<rect x="-5" y="${n(gy)}" width="${n(w + 10)}" height="${n(h - gy + 5)}" fill="${fill}" ${A.st(LWb())}/>` + (edge ? `<rect x="-5" y="${n(gy)}" width="${n(w + 10)}" height="${n(Math.min(14, h - gy))}" fill="${edge}"/>` : '');
  const cloud = (x, y, s, fill = '#fff') => {
    const P = [[0, 0, 22], [-24, 8, 16], [24, 8, 17], [-10, -12, 16], [12, -14, 18]];
    return P.map(p => A.circ(x + p[0] * s, y + p[1] * s, p[2] * s, C.ink, 0, `stroke="${C.ink}" stroke-width="${LWb() * 2}"`)).join('') + P.map(p => A.circ(x + p[0] * s, y + p[1] * s, p[2] * s, fill, 0)).join('');
  };
  A.cloud = cloud;
  const sun = (x, y, r) => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r * 2.2)}" fill="url(#glow-y)" opacity=".8"/>` + A.poly(A.burstPts(x, y, r * 1.45, r * 1.1, 12, 0), C.yelD, 0) + A.circ(x, y, r, C.yel, LWb());
  const hills = (w, gy, h1, col, rnd, bumps = 3) => {
    let d = `M-5 ${n(gy + 2)}`; const step = (w + 10) / bumps;
    for (let i = 0; i < bumps; i++) { const x0 = -5 + i * step; d += ` Q${n(x0 + step / 2)} ${n(gy - h1 * (0.6 + rnd() * 0.6))} ${n(x0 + step)} ${n(gy + 2)}`; }
    return A.path(d + ' Z', col, LWb());
  };
  const bgTree = (x, gy, s, col = C.green, trunk = C.brown) => A.rect(x - 6 * s, gy - 50 * s, 12 * s, 50 * s, 3, trunk, LWb()) + A.circ(x - 18 * s, gy - 58 * s, 22 * s, col, LWb()) + A.circ(x + 18 * s, gy - 60 * s, 22 * s, col, LWb()) + A.circ(x, gy - 82 * s, 26 * s, col, LWb());
  const pine = (x, gy, s, col = '#1E7A4A', snow) => A.rect(x - 5 * s, gy - 18 * s, 10 * s, 18 * s, 2, C.brownD, LWb()) + [0, 1, 2].map(i => A.poly([[x - (36 - i * 8) * s, gy - (16 + i * 26) * s], [x, gy - (60 + i * 26) * s], [x + (36 - i * 8) * s, gy - (16 + i * 26) * s]], col, LWb()) + (snow ? A.poly([[x - 10 * s, gy - (50 + i * 26) * s], [x, gy - (60 + i * 26) * s], [x + 10 * s, gy - (50 + i * 26) * s]], '#fff', 0) : '')).join('');
  const stars = (w, h, rnd, count, maxY = 1) => { let s = ''; for (let i = 0; i < count; i++) { const x = rnd() * w, y = rnd() * h * maxY, r = 1 + rnd() * 2.4; s += i % 7 === 0 ? A.poly(A.burstPts(x, y, r * 3, r, 4, 0), '#FFF6B0', 0) : A.circ(x, y, r, '#fff', 0); } return s; };
  const building = (x, gy, bw, bh, col, win, rnd) => {
    let s = A.rect(x, gy - bh, bw, bh, 0, col, LWb());
    const cols = Math.max(1, Math.floor(bw / 22)), rows = Math.max(1, Math.floor((bh - 20) / 26));
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { if (rnd() < 0.15) continue; const lit = win === 'night' ? (rnd() < 0.7 ? C.yel : '#2A2660') : (rnd() < 0.2 ? '#FFF6B0' : '#BFE8FF'); s += A.rect(x + 8 + c * ((bw - 12) / cols), gy - bh + 12 + r * 26, (bw - 12) / cols - 8, 14, 1, lit, win === 'night' ? 0 : LWb() * 0.5); }
    return s;
  };
  const speedDots = (w, h) => A.halftone(0, 0, w, h, 'big');

  const BG = {
    city(w, h, gy, rnd) {
      let s = sky('city', w, h, ['#58B8FF', '#BDE9FF']) + sun(w * 0.85, h * 0.18, 26) + cloud(w * 0.2, h * 0.16, 1) + cloud(w * 0.6, h * 0.1, 0.8);
      let x = -10; const farC = ['#9FC4EA', '#B7D3F0', '#8EB4DE'];
      while (x < w) { const bw = 50 + rnd() * 50, bh = (gy) * (0.35 + rnd() * 0.35); s += A.rect(x, gy - bh, bw, bh, 0, farC[Math.floor(rnd() * 3)], 0); x += bw + 4; }
      x = -20; const cols = ['#FF7B6B', '#FFC94A', '#7C6CF0', '#4FC3A1', '#F28FB0', '#6AA9FF'];
      while (x < w) { const bw = 60 + rnd() * 60, bh = gy * (0.25 + rnd() * 0.3); s += building(x, gy, bw, bh, cols[Math.floor(rnd() * cols.length)], 'day', rnd); x += bw + 10 + rnd() * 20; }
      s += ground(w, h, gy, '#6B6F80', '#9AA0B2');
      for (let i = 0; i < w; i += 70) s += A.rect(i, gy + (h - gy) * 0.55, 36, 6, 2, C.yel, 0);
      return s;
    },
    citynight(w, h, gy, rnd) {
      let s = sky('citynight', w, h, ['#171444', '#4A2C7A'], 'light', h * 0.6) + stars(w, h, rnd, 40, 0.5);
      s += A.circ(w * 0.8, h * 0.18, 26, '#FFF3C4', LWb()) + A.circ(w * 0.8 + 12, h * 0.18 - 8, 22, '#3A2A70', 0);
      let x = -20;
      while (x < w) { const bw = 60 + rnd() * 60, bh = gy * (0.3 + rnd() * 0.4); s += building(x, gy, bw, bh, ['#2C2A5E', '#3B2F72', '#23204F'][Math.floor(rnd() * 3)], 'night', rnd); x += bw + 6 + rnd() * 16; }
      s += ground(w, h, gy, '#2A2940', '#46445E');
      return s;
    },
    park(w, h, gy, rnd) {
      let s = sky('park', w, h, ['#6CC8FF', '#DDF6FF']) + sun(w * 0.12, h * 0.16, 24) + cloud(w * 0.55, h * 0.14, 0.9) + cloud(w * 0.88, h * 0.22, 0.7);
      s += hills(w, gy, gy * 0.3, '#8FD66E', rnd, 3) + hills(w, gy, gy * 0.18, '#6CC254', rnd, 4);
      s += bgTree(w * 0.1, gy, 1.1) + bgTree(w * 0.88, gy, 1.3, C.leaf);
      s += ground(w, h, gy, '#5DBB4B', '#7FD366');
      s += A.path(`M${n(w * 0.35)} ${n(h + 4)} Q${n(w * 0.5)} ${n(gy + (h - gy) * 0.4)} ${n(w * 0.7)} ${n(gy)} L${n(w * 0.78)} ${n(gy)} Q${n(w * 0.62)} ${n(gy + (h - gy) * 0.5)} ${n(w * 0.55)} ${n(h + 4)} Z`, '#F3D9A4', LWb());
      return s;
    },
    garden(w, h, gy, rnd) {
      let s = sky('garden', w, h, ['#7BD3FF', '#E6FAFF']) + cloud(w * 0.3, h * 0.14, 0.8) + sun(w * 0.86, h * 0.14, 22);
      for (let x = -10; x < w; x += 30) s += A.path(`M${x} ${n(gy)} L${x} ${n(gy - 70)} L${x + 11} ${n(gy - 84)} L${x + 22} ${n(gy - 70)} L${x + 22} ${n(gy)} Z`, '#FFFFFF', LWb());
      s += A.rect(-5, gy - 58, w + 10, 9, 0, '#fff', LWb()) + A.rect(-5, gy - 26, w + 10, 9, 0, '#fff', LWb());
      s += ground(w, h, gy, '#62C04F', '#84D96C');
      const fc = [C.pink, C.yel, C.red, C.purple, C.orange];
      for (let x = 14; x < w; x += 34) { const y = gy + 6 + rnd() * 10; s += A.line(x, y + 14, x, y, 3, C.greenD) + A.circ(x, y, 8, fc[Math.floor(rnd() * 5)], LWb() * 0.6) + A.circ(x, y, 3, C.yel, 0); }
      return s;
    },
    forest(w, h, gy, rnd) {
      let s = sky('forest', w, h, ['#9EE3C8', '#E9FFF3']);
      for (let i = 0; i < 7; i++) s += pine(rnd() * w, gy - 10, 1.4 + rnd() * 0.6, '#7FC79A');
      for (let i = 0; i < 6; i++) { const x = (i + 0.3) * w / 5.5; s += A.rect(x - 12, gy - 190, 24, 190, 0, '#7A4B26', LWb()) + A.circ(x, gy - 200, 62, ['#2E8B57', '#3FA66A', '#257A4A'][i % 3], LWb()); }
      s += ground(w, h, gy, '#3E8E4A', '#58A862');
      s += A.path(`M${n(w * 0.2)} ${n(gy + 18)} q8 -16 16 0 Z`, C.red, LWb() * 0.6) + A.rect(w * 0.2 + 6, gy + 18, 4, 8, 1, '#fff', 0);
      return s;
    },
    jungle(w, h, gy, rnd) {
      let s = sky('jungle', w, h, ['#3FAE6A', '#B9F0A6']);
      const leaf = (x, y, r, a, col) => `<path transform="rotate(${n(a)} ${n(x)} ${n(y)})" d="M${n(x)} ${n(y)} q${n(r * 0.5)} ${n(-r * 0.45)} ${n(r)} 0 q${n(-r * 0.5)} ${n(r * 0.45)} ${n(-r)} 0Z" fill="${col}" ${A.st(LWb() * 0.8)}/>`;
      for (let i = 0; i < 4; i++) s += A.rect(w * (0.1 + i * 0.27), -10, 22, gy + 10, 0, '#6B4426', LWb());
      for (let i = 0; i < 26; i++) s += leaf(rnd() * w, rnd() * h * 0.45, 60 + rnd() * 70, rnd() * 360, ['#1E8C45', '#2BA657', '#157037', '#48B85E'][i % 4]);
      for (let i = 0; i < 5; i++) { const x = rnd() * w; s += A.path(`M${n(x)} -5 q20 ${n(gy * 0.3)} -6 ${n(gy * 0.55)}`, 'none', 5, 'stroke="#2E6B2F"'); }
      s += ground(w, h, gy, '#4A7A2E', '#5E9A38');
      for (let i = 0; i < 8; i++) s += leaf(rnd() * w, gy + 4, 50, 180 + rnd() * 40 - 20, '#2BA657');
      return s;
    },
    beach(w, h, gy, rnd) {
      let s = sky('beach', w, h, ['#4FC2FF', '#D6F3FF']) + sun(w * 0.8, h * 0.2, 28) + cloud(w * 0.25, h * 0.18, 0.8);
      const sea = gy - (gy * 0.28);
      s += A.rect(-5, sea, w + 10, gy - sea + 4, 0, '#1E9BE8', LWb());
      for (let i = 0; i < 5; i++) s += A.path(`M${n(rnd() * w)} ${n(sea + 12 + rnd() * (gy - sea - 20))} q10 -7 20 0 t20 0`, 'none', 3, 'stroke="#fff"');
      s += A.path(`M-5 ${n(gy)} Q${n(w * 0.25)} ${n(gy - 10)} ${n(w * 0.5)} ${n(gy)} T${n(w + 5)} ${n(gy)} L${n(w + 5)} ${n(gy + 10)} L-5 ${n(gy + 10)} Z`, '#fff', LWb() * 0.6);
      s += ground(w, h, gy + 6, C.sand, '#FBE3A8');
      return s;
    },
    ocean(w, h, gy, rnd) {
      let s = sky('ocean', w, h, ['#5CC6FF', '#E0F6FF']) + cloud(w * 0.7, h * 0.15, 1) + cloud(w * 0.18, h * 0.22, 0.7);
      const sea = h * 0.48;
      s += `<defs>${A.vgrad('sea-o', ['#2A9DF4', '#0B5FB0'])}</defs><rect x="-5" y="${n(sea)}" width="${n(w + 10)}" height="${n(h - sea + 5)}" fill="url(#sea-o)" ${A.st(LWb())}/>`;
      for (let i = 0; i < 9; i++) { const y = sea + 16 + rnd() * (h - sea - 20); s += A.path(`M${n(rnd() * w)} ${n(y)} q12 -9 24 0 t24 0`, 'none', 3.5, 'stroke="#BFE8FF"'); }
      s += A.halftone(0, sea, w, h - sea, 'light');
      return s;
    },
    underwater(w, h, gy, rnd) {
      let s = sky('under', w, h, ['#2BB5E8', '#0B4F8F'], 'light');
      for (let i = 0; i < 4; i++) s += A.poly([[w * (0.1 + i * 0.25), 0], [w * (0.18 + i * 0.25), 0], [w * (0.3 + i * 0.25), gy], [w * (0.14 + i * 0.25), gy]], '#fff', 0, 'opacity=".12"');
      for (let i = 0; i < 14; i++) s += A.circ(rnd() * w, rnd() * gy, 3 + rnd() * 7, 'none', 2, 'stroke="#DFF6FF"');
      s += ground(w, h, gy, '#E9CF8E', '#F4DFA8');
      for (let i = 0; i < 6; i++) { const x = rnd() * w; s += A.path(`M${n(x)} ${n(gy + 4)} q-14 -40 4 -70 q-16 30 4 50 q10 -30 -2 -60`, 'none', 7, 'stroke="#1F9E5A"'); }
      const cor = ['#FF6F91', '#FF9F43', '#B267E6'];
      for (let i = 0; i < 3; i++) { const x = w * (0.15 + i * 0.35) + rnd() * 30; s += A.path(`M${n(x)} ${n(gy + 6)} l-4 -30 l-14 -16 m18 16 l2 -26 m-2 26 l14 -20`, 'none', 9, `stroke="${cor[i]}"`); }
      return s;
    },
    space(w, h, gy, rnd) {
      let s = sky('space', w, h, ['#0B0A2A', '#2B1766'], 'light') + stars(w, h, rnd, 70);
      s += `<ellipse cx="${n(w * 0.25)}" cy="${n(h * 0.45)}" rx="${n(w * 0.3)}" ry="${n(h * 0.14)}" fill="#8B4FE0" opacity=".25" transform="rotate(-18 ${n(w * 0.25)} ${n(h * 0.45)})"/>`;
      s += A.circ(w * 0.84, h * 0.24, 34, '#FF8A5B') + A.ell(w * 0.84, h * 0.24, 58, 12, 'none', LWb(), `stroke="${C.yel}" transform="rotate(-15 ${n(w * 0.84)} ${n(h * 0.24)})"`);
      s += A.circ(w * 0.1, h * 0.14, 12, C.cyan) + A.circ(w * 0.52, h * 0.1, 8, C.pink);
      return s;
    },
    moon(w, h, gy, rnd) {
      let s = sky('moon', w, h, ['#05051A', '#1E1B4A'], 'light', gy) + stars(w, gy, rnd, 50);
      s += A.circ(w * 0.8, h * 0.2, 30, '#3E8EF7') + A.path(`M${n(w * 0.8 - 20)} ${n(h * 0.2 - 10)} q12 -8 20 4 q-4 16 -18 10Z`, '#52C46B', 0) + A.path(`M${n(w * 0.8 + 6)} ${n(h * 0.2 + 8)} q10 -4 14 6 q-8 8 -14 -6Z`, '#52C46B', 0);
      s += A.path(`M-5 ${n(gy)} Q${n(w * 0.3)} ${n(gy - 22)} ${n(w * 0.6)} ${n(gy - 4)} T${n(w + 5)} ${n(gy - 10)} L${n(w + 5)} ${n(h + 5)} L-5 ${n(h + 5)} Z`, '#B9BCC9', LWb());
      s += A.halftone(0, gy - 20, w, h - gy + 20, 'dark');
      for (let i = 0; i < 6; i++) { const x = rnd() * w, y = gy + 10 + rnd() * (h - gy - 16), r = 8 + rnd() * 18; s += A.ell(x, y, r, r * 0.35, '#9396A6', LWb() * 0.6); }
      return s;
    },
    mountains(w, h, gy, rnd) {
      let s = sky('mtn', w, h, ['#6FC3FF', '#E3F6FF']) + cloud(w * 0.5, h * 0.12, 0.8);
      const peak = (x, bw, ph, col) => A.poly([[x - bw, gy], [x, gy - ph], [x + bw, gy]], col, LWb()) + A.poly([[x - bw * 0.28, gy - ph * 0.72], [x, gy - ph], [x + bw * 0.28, gy - ph * 0.72], [x + bw * 0.1, gy - ph * 0.64], [x - bw * 0.05, gy - ph * 0.74]], '#fff', LWb() * 0.6);
      s += peak(w * 0.2, w * 0.3, gy * 0.75, '#7C8CC4') + peak(w * 0.62, w * 0.36, gy * 0.9, '#6576B3') + peak(w * 0.95, w * 0.25, gy * 0.6, '#8A99CF');
      s += hills(w, gy, gy * 0.14, '#72C35A', rnd, 3);
      s += ground(w, h, gy, '#5DB04A', '#77C660');
      return s;
    },
    snow(w, h, gy, rnd) {
      let s = sky('snow', w, h, ['#A9D8FF', '#F1FAFF']);
      s += A.poly([[-10, gy], [w * 0.3, gy - gy * 0.7], [w * 0.65, gy]], '#DDEBFA', LWb()) + A.poly([[w * 0.4, gy], [w * 0.78, gy - gy * 0.8], [w + 10, gy]], '#CFE1F6', LWb());
      s += pine(w * 0.08, gy + 4, 1.1, '#1E6B4A', true) + pine(w * 0.92, gy + 4, 1.3, '#1E6B4A', true);
      s += ground(w, h, gy, '#FFFFFF', '#E6F1FF');
      for (let i = 0; i < 40; i++) s += A.circ(rnd() * w, rnd() * h, 2 + rnd() * 3, '#fff', 1, 'stroke="#9CC3E8"');
      return s;
    },
    desert(w, h, gy, rnd) {
      let s = sky('desert', w, h, ['#FFB347', '#FFE8A3']) + sun(w * 0.72, h * 0.2, 32);
      s += A.path(`M-5 ${n(gy)} Q${n(w * 0.2)} ${n(gy - gy * 0.28)} ${n(w * 0.45)} ${n(gy)} Z`, '#F0B45A', LWb()) + A.path(`M${n(w * 0.35)} ${n(gy)} Q${n(w * 0.7)} ${n(gy - gy * 0.36)} ${n(w + 5)} ${n(gy - 10)} L${n(w + 5)} ${n(gy)} Z`, '#E9A548', LWb());
      const cactus = (x, s2) => A.rect(x - 9 * s2, gy - 80 * s2, 18 * s2, 80 * s2, 9 * s2, '#3FA14C', LWb()) + A.path(`M${n(x - 9 * s2)} ${n(gy - 40 * s2)} h-14 v-24`, 'none', 10 * s2, 'stroke="#3FA14C"');
      s += cactus(w * 0.12, 1) + cactus(w * 0.9, 0.8);
      s += ground(w, h, gy, '#F6CF7E', '#FAE0A2');
      for (let i = 0; i < 5; i++) s += A.path(`M${n(rnd() * w)} ${n(gy + 10 + rnd() * (h - gy - 14))} q14 -6 28 0`, 'none', 3, 'stroke="#D9A650"');
      return s;
    },
    village(w, h, gy, rnd) {
      let s = sky('village', w, h, ['#7DD0FF', '#F0FBFF']) + sun(w * 0.15, h * 0.16, 24) + cloud(w * 0.7, h * 0.13, 0.9);
      s += hills(w, gy, gy * 0.22, '#9ED47A', rnd, 3);
      const hut = (x, s2, wall) => A.rect(x - 40 * s2, gy - 60 * s2, 80 * s2, 60 * s2, 0, wall, LWb()) + A.poly([[x - 56 * s2, gy - 56 * s2], [x, gy - 110 * s2], [x + 56 * s2, gy - 56 * s2]], '#C8943F', LWb()) + A.path(`M${n(x - 40 * s2)} ${n(gy - 70 * s2)} l20 -8 m20 -8 l20 -8`, 'none', 2.5) + A.rect(x - 12 * s2, gy - 36 * s2, 24 * s2, 36 * s2, 10 * s2, C.brownD, LWb());
      s += hut(w * 0.18, 1, '#F2D6A2') + hut(w * 0.8, 0.85, '#F7E2B8');
      s += bgTree(w * 0.5, gy, 0.9);
      s += ground(w, h, gy, '#C99A5B', '#D9AE72');
      return s;
    },
    farm(w, h, gy, rnd) {
      let s = sky('farm', w, h, ['#6FCBFF', '#EAFBFF']) + sun(w * 0.86, h * 0.15, 24) + cloud(w * 0.35, h * 0.13, 0.8);
      for (let i = 0; i < 6; i++) { const y = gy - gy * 0.24 + i * gy * 0.04; s += A.rect(-5, y, w + 10, gy * 0.04 + 1, 0, i % 2 ? '#B9E27A' : '#8FCB55', 0); }
      s += A.path(`M${n(w * 0.12)} ${n(gy)} q30 -70 60 0 Z`, '#F2C94C', LWb()) + A.path(`M${n(w * 0.12 + 14)} ${n(gy - 20)} l30 0 M${n(w * 0.12 + 20)} ${n(gy - 40)} l20 0`, 'none', 2.5);
      for (let x = w * 0.6; x < w; x += 26) s += A.line(x, gy, x, gy - 40, 4, C.brown) + A.line(x - 13, gy - 30, x + 13, gy - 30, 3, C.brown);
      s += ground(w, h, gy, '#8B6B3E', '#A5824F');
      for (let i = 0; i < w; i += 40) s += A.path(`M${i} ${n(gy + 12)} l20 ${n(h - gy)}`, 'none', 3, 'stroke="#6E5230"');
      return s;
    },
    school(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#FFE7B0"/>` + A.halftone(0, 0, w, gy, 'dark');
      const bx = w * 0.18, bw = w * 0.64, by = h * 0.1, bh = gy * 0.52;
      s += A.rect(bx - 8, by - 8, bw + 16, bh + 16, 4, '#9A6236', LWb()) + A.rect(bx, by, bw, bh, 2, '#2D5A3D', LWb() * 0.6);
      s += A.circ(bx + bw * 0.2, by + bh * 0.4, bh * 0.16, 'none', 3, 'stroke="#fff"') + A.poly([[bx + bw * 0.42, by + bh * 0.62], [bx + bw * 0.5, by + bh * 0.2], [bx + bw * 0.58, by + bh * 0.62]], 'none', 3, 'stroke="#fff"') + A.rect(bx + bw * 0.68, by + bh * 0.24, bh * 0.36, bh * 0.36, 0, 'none', 3, 'stroke="#fff"');
      s += A.path(`M${n(bx + bw * 0.1)} ${n(by + bh * 0.85)} q20 -10 40 0 t40 0`, 'none', 3, 'stroke="#FFE36E"');
      s += A.rect(w * 0.88, h * 0.1, w * 0.08, gy * 0.3, 2, '#fff', LWb()) + A.circ(w * 0.92, h * 0.1 + gy * 0.15, gy * 0.07, C.yel, 2);
      s += ground(w, h, gy, '#C98B4F', '#D9A066');
      for (let i = 0; i < w; i += 60) s += A.line(i, gy, i - 30, h, 2, '#A36F3B');
      return s;
    },
    home(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#A8E0D8"/>` + A.halftone(0, 0, w, gy, 'dark');
      const wx = w * 0.62, wy = h * 0.1, ww = w * 0.26, wh = gy * 0.45;
      s += A.rect(wx, wy, ww, wh, 4, '#BDE9FF', LWb()) + A.line(wx + ww / 2, wy, wx + ww / 2, wy + wh, LWb()) + A.line(wx, wy + wh / 2, wx + ww, wy + wh / 2, LWb());
      s += cloud(wx + ww * 0.3, wy + wh * 0.3, 0.45);
      s += A.path(`M${n(wx - 18)} ${n(wy - 8)} q10 ${n(wh * 0.6)} -4 ${n(wh + 20)} l22 0 q-6 ${n(-wh * 0.6)} 6 ${n(-wh - 20)}Z`, C.red, LWb()) + A.path(`M${n(wx + ww + 18)} ${n(wy - 8)} q-10 ${n(wh * 0.6)} 4 ${n(wh + 20)} l-22 0 q6 ${n(-wh * 0.6)} -6 ${n(-wh - 20)}Z`, C.red, LWb());
      s += A.rect(w * 0.08, h * 0.12, w * 0.14, gy * 0.24, 3, '#FFD86B', LWb()) + A.circ(w * 0.15, h * 0.12 + gy * 0.12, gy * 0.06, C.pink, 2);
      s += ground(w, h, gy, '#E8B26A', '#F2C688') + A.ell(w * 0.35, gy + (h - gy) * 0.5, w * 0.22, (h - gy) * 0.3, '#E86A5C', LWb());
      s += A.rect(w * 0.02, gy - 70, w * 0.2, 60, 14, C.purple, LWb()) + A.rect(w * 0.02, gy - 30, w * 0.2, 30, 8, C.purpleD, LWb());
      return s;
    },
    kitchen(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#FFF3D6"/>`;
      for (let x = 0; x < w; x += 34) for (let y = gy * 0.35; y < gy * 0.72; y += 34) s += A.rect(x + 2, y + 2, 30, 30, 3, (x / 34 + y / 34) % 2 < 1 ? '#CFEFFF' : '#fff', 1.5);
      s += A.rect(w * 0.05, gy * 0.12, w * 0.4, 12, 2, C.brown, LWb());
      [0.1, 0.18, 0.26, 0.36].forEach((f, i) => s += A.rect(w * f, gy * 0.12 - 34, 26, 34, 6, [C.red, C.yel, C.green, C.orange][i], LWb() * 0.7));
      s += A.rect(-5, gy * 0.72, w + 10, gy * 0.28 + 2, 0, '#D28C4E', LWb()) + A.rect(-5, gy * 0.72, w + 10, 12, 0, '#8E8E9E', LWb());
      s += A.rect(w * 0.62, gy * 0.72 - 40, 70, 40, 10, '#6B6F80', LWb()) + A.path(`M${n(w * 0.62 + 20)} ${n(gy * 0.72 - 48)} q-6 -14 4 -24 m20 24 q-6 -14 4 -24`, 'none', 3, 'stroke="#fff"');
      s += ground(w, h, gy, '#B6834E', '#C99662');
      return s;
    },
    bedroom(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#35306E"/>` + A.halftone(0, 0, w, gy, 'light') + stars(w, gy * 0.5, rnd, 12);
      const wx = w * 0.1, wy = h * 0.1, ww = w * 0.24, wh = gy * 0.4;
      s += A.rect(wx, wy, ww, wh, 6, '#141040', LWb()) + A.circ(wx + ww * 0.65, wy + wh * 0.35, wh * 0.15, '#FFF3C4', 2) + A.line(wx + ww / 2, wy, wx + ww / 2, wy + wh, LWb());
      s += `<circle cx="${n(w * 0.86)}" cy="${n(gy * 0.45)}" r="${n(gy * 0.3)}" fill="url(#glow-y)" opacity=".6"/>` + A.poly([[w * 0.82, gy * 0.38], [w * 0.9, gy * 0.38], [w * 0.92, gy * 0.5], [w * 0.8, gy * 0.5]], C.yel, LWb()) + A.rect(w * 0.855, gy * 0.5, 8, gy * 0.35, 0, '#6B6F80', 2);
      s += A.rect(w * 0.45, gy - 50, w * 0.36, 50, 8, '#8B5AC8', LWb()) + A.rect(w * 0.45, gy - 70, 40, 30, 10, '#fff', LWb());
      s += ground(w, h, gy, '#5A4B9A', '#6C5DB0');
      return s;
    },
    lab(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#2B3A66"/>` + A.halftone(0, 0, w, gy, 'light');
      s += A.rect(w * 0.06, h * 0.08, w * 0.3, gy * 0.42, 10, '#101A36', LWb()) + A.path(`M${n(w * 0.08)} ${n(h * 0.08 + gy * 0.3)} l${n(w * 0.05)} -20 l${n(w * 0.05)} 14 l${n(w * 0.05)} -30 l${n(w * 0.06)} 10`, 'none', 3.5, `stroke="${C.cyan}"`);
      s += A.circ(w * 0.3, h * 0.08 + gy * 0.12, 6, C.red, 0) + A.circ(w * 0.33, h * 0.08 + gy * 0.12, 6, C.yel, 0);
      s += A.path(`M${n(w * 0.45)} -5 v${n(gy * 0.3)} h${n(w * 0.2)} v${n(gy * 0.2)}`, 'none', 12, 'stroke="#8C94A8"') + A.path(`M${n(w * 0.45)} -5 v${n(gy * 0.3)} h${n(w * 0.2)} v${n(gy * 0.2)}`, 'none', 6, 'stroke="#C0C7D8"');
      s += A.poly(A.burstPts(w * 0.85, gy * 0.3, 34, 26, 10, 0), '#8C94A8', LWb()) + A.circ(w * 0.85, gy * 0.3, 12, '#2B3A66', LWb());
      s += A.rect(-5, gy - 46, w * 0.45, 46, 0, '#6B4F3A', LWb());
      s += A.path(`M${n(w * 0.1)} ${n(gy - 46)} l-8 -26 h26 l-8 26Z`, C.pink, 3) + A.rect(w * 0.2, gy - 76, 16, 30, 4, C.lime, 3) + A.circ(w * 0.3, gy - 58, 12, C.cyan, 3);
      s += ground(w, h, gy, '#3E4A70', '#56628A');
      return s;
    },
    sky(w, h, gy, rnd) {
      let s = sky('skyf', w, h, ['#3FA8FF', '#BFE9FF']);
      for (let i = 0; i < 6; i++) s += cloud(rnd() * w, h * (0.15 + rnd() * 0.75), 0.7 + rnd() * 0.8);
      for (let i = 0; i < 3; i++) { const x = rnd() * w, y = rnd() * h * 0.4; s += A.path(`M${n(x)} ${n(y)} q6 -6 12 0 q6 -6 12 0`, 'none', 2.5); }
      return s;
    },
    rain(w, h, gy, rnd) {
      let s = sky('rain', w, h, ['#5B6378', '#A9B2C6']);
      s += cloud(w * 0.2, h * 0.1, 1.2, '#8C94A8') + cloud(w * 0.7, h * 0.08, 1.4, '#7C849A');
      let x = -10; while (x < w) { const bw = 50 + rnd() * 50, bh = gy * (0.2 + rnd() * 0.3); s += A.rect(x, gy - bh, bw, bh, 0, '#7F88A0', LWb() * 0.6); x += bw + 8; }
      s += ground(w, h, gy, '#4F5668', '#626A80');
      for (let i = 0; i < 4; i++) s += A.ell(rnd() * w, gy + 10 + rnd() * (h - gy - 16), 30, 6, '#8FC7F0', 2);
      for (let i = 0; i < 60; i++) { const x2 = rnd() * w, y = rnd() * h; s += A.line(x2, y, x2 - 6, y + 18, 2.5, '#DDEEFF'); }
      return s;
    },
    volcano(w, h, gy, rnd) {
      let s = sky('volc', w, h, ['#FF6B3D', '#FFD27A']);
      s += A.poly([[w * 0.15, gy], [w * 0.42, gy * 0.3], [w * 0.58, gy * 0.3], [w * 0.85, gy]], '#6B3E2E', LWb());
      s += A.path(`M${n(w * 0.42)} ${n(gy * 0.3)} q${n(w * 0.02)} ${n(gy * 0.2)} ${n(-w * 0.04)} ${n(gy * 0.4)} q${n(w * 0.05)} 0 ${n(w * 0.06)} ${n(-gy * 0.2)} q${n(w * 0.03)} ${n(gy * 0.1)} ${n(w * 0.05)} ${n(gy * 0.3)} q${n(w * 0.02)} ${n(-gy * 0.3)} ${n(w * 0.05)} ${n(-gy * 0.5)} Z`, C.orange, LWb() * 0.6);
      s += cloud(w * 0.5, gy * 0.18, 1.1, '#9A8F96') + cloud(w * 0.58, gy * 0.06, 0.8, '#B3A8AE');
      s += ground(w, h, gy, '#4A2E24', '#5E3A2E');
      return s;
    },
    cave(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#3B2A24"/>` + A.halftone(0, 0, w, h, 'light');
      s += `<ellipse cx="${n(w / 2)}" cy="${n(gy * 0.6)}" rx="${n(w * 0.45)}" ry="${n(gy * 0.55)}" fill="#5A4034"/>`;
      for (let i = 0; i < 9; i++) { const x = (i + 0.5) * w / 9; s += A.poly([[x - 18, -5], [x, 30 + rnd() * 50], [x + 18, -5]], '#6E5244', LWb()); }
      const cr = (x, y, s2, col) => `<circle cx="${n(x)}" cy="${n(y - 20 * s2)}" r="${n(40 * s2)}" fill="url(#glow-c)" opacity=".5"/>` + A.poly([[x - 10 * s2, y], [x - 4 * s2, y - 40 * s2], [x + 4 * s2, y - 44 * s2], [x + 10 * s2, y]], col, LWb() * 0.7) + A.poly([[x + 6 * s2, y], [x + 16 * s2, y - 28 * s2], [x + 22 * s2, y]], col, LWb() * 0.7);
      s += cr(w * 0.08, gy + 4, 1, '#9B6CF0') + cr(w * 0.9, gy + 4, 1.2, C.cyan);
      s += ground(w, h, gy, '#4A3830', '#5C463C');
      return s;
    },
    market(w, h, gy, rnd) {
      let s = sky('market', w, h, ['#FFC54D', '#FFF0C2']);
      for (let i = 0; i < w; i += 40) s += A.poly([[i, 8], [i + 40, 8], [i + 20, 30]], [C.red, C.blue, C.green, C.pink, C.yel][Math.floor(i / 40) % 5], 2);
      s += A.line(-5, 8, w + 5, 8, 3);
      const stall = (x, sw, c1, c2, fruit) => {
        let t = A.rect(x, gy - 90, sw, 90, 0, '#F3D9A4', LWb());
        for (let k = 0; k < sw; k += 24) t += A.path(`M${n(x + k)} ${n(gy - 130)} h24 v30 q-12 12 -24 0Z`, (k / 24) % 2 ? c1 : c2, LWb() * 0.7);
        t += A.rect(x - 6, gy - 60, sw + 12, 14, 2, '#9A6236', LWb());
        for (let k = 0; k < sw - 10; k += 16) t += A.circ(x + 12 + k, gy - 68, 8, fruit, 2);
        return t;
      };
      s += stall(w * 0.04, w * 0.36, C.red, '#fff', C.orange) + stall(w * 0.58, w * 0.38, C.green, '#fff', C.red);
      s += ground(w, h, gy, '#D9B27A', '#E6C18E');
      return s;
    },
    festival(w, h, gy, rnd) {
      let s = sky('fest', w, h, ['#1C0F4A', '#5A1F6E'], 'light') + stars(w, h * 0.4, rnd, 20);
      for (let r = 0; r < 2; r++) { const y0 = h * (0.12 + r * 0.14); s += A.path(`M-5 ${n(y0)} Q${n(w / 2)} ${n(y0 + 40)} ${n(w + 5)} ${n(y0)}`, 'none', 2.5, 'stroke="#FFE9A8"'); for (let i = 0; i < 12; i++) { const t = i / 11, x = -5 + t * (w + 10), y = y0 + 4 * 40 * t * (1 - t) * 0.5 * 2; s += `<circle cx="${n(x)}" cy="${n(y + 6)}" r="10" fill="url(#glow-y)"/>` + A.circ(x, y + 6, 4.5, [C.yel, C.pink, C.cyan, C.orange][i % 4], 0); } }
      const lantern = x => A.line(x, 0, x, h * 0.36, 2, '#FFE9A8') + A.poly([[x, h * 0.36], [x + 20, h * 0.44], [x, h * 0.52], [x - 20, h * 0.44]], C.orange, LWb()) + A.poly([[x, h * 0.4], [x + 10, h * 0.44], [x, h * 0.48], [x - 10, h * 0.44]], C.yel, 0);
      s += lantern(w * 0.12) + lantern(w * 0.9);
      s += ground(w, h, gy, '#4A2A5E', '#5E3A74');
      const rx = w * 0.5, ry = gy + (h - gy) * 0.5;
      s += A.ell(rx, ry, 70, (h - gy) * 0.34, C.pink, LWb() * 0.6) + A.ell(rx, ry, 48, (h - gy) * 0.22, C.yel, 0) + A.ell(rx, ry, 24, (h - gy) * 0.12, C.teal, 0);
      for (let i = 0; i < 6; i++) { const x = w * (0.08 + i * 0.17); s += `<circle cx="${n(x)}" cy="${n(gy + 2)}" r="16" fill="url(#glow-y)"/>` + A.path(`M${n(x - 12)} ${n(gy + 6)} q12 12 24 0 Z`, '#C0652B', 2) + A.path(`M${n(x)} ${n(gy + 4)} q-5 -8 0 -16 q5 8 0 16Z`, C.yel, 1.5); }
      return s;
    },
    river(w, h, gy, rnd) {
      let s = sky('river', w, h, ['#6CCBFF', '#E6FAFF']) + sun(w * 0.18, h * 0.15, 22) + cloud(w * 0.7, h * 0.14, 0.9);
      s += hills(w, gy - (h - gy) * 0.2, gy * 0.2, '#86CF68', rnd, 3);
      const ry = gy - (gy * 0.12);
      s += A.rect(-5, ry, w + 10, gy - ry + 20, 0, '#2A9DF4', LWb());
      for (let i = 0; i < 7; i++) s += A.path(`M${n(rnd() * w)} ${n(ry + 8 + rnd() * (gy - ry))} q10 -6 20 0 t20 0`, 'none', 3, 'stroke="#CFEFFF"');
      s += ground(w, h, gy + 16, '#6DBE52', '#8AD36C');
      for (let i = 0; i < 6; i++) { const x = rnd() * w; s += A.path(`M${n(x)} ${n(gy + 20)} l-4 -26 M${n(x + 6)} ${n(gy + 20)} l2 -32 M${n(x + 12)} ${n(gy + 20)} l6 -24`, 'none', 3.5, `stroke="${C.greenD}"`); }
      return s;
    },
    playground(w, h, gy, rnd) {
      let s = sky('play', w, h, ['#64C4FF', '#DDF5FF']) + sun(w * 0.9, h * 0.14, 22) + cloud(w * 0.4, h * 0.12, 0.8);
      const sx = w * 0.08;
      s += A.path(`M${n(sx)} ${n(gy)} L${n(sx + 40)} ${n(gy - 150)} L${n(sx + 80)} ${n(gy)} M${n(sx + 140)} ${n(gy)} L${n(sx + 180)} ${n(gy - 150)} L${n(sx + 220)} ${n(gy)}`, 'none', 8, `stroke="${C.red}"`) + A.line(sx + 40, gy - 150, sx + 180, gy - 150, 8, C.red);
      s += A.line(sx + 90, gy - 150, sx + 90, gy - 50, 2.5) + A.line(sx + 130, gy - 150, sx + 130, gy - 50, 2.5) + A.rect(sx + 84, gy - 52, 52, 10, 3, C.yel, 3);
      const sl = w * 0.72;
      s += A.path(`M${n(sl)} ${n(gy)} v-120 h30 L${n(sl + 150)} ${n(gy - 10)} v10`, 'none', 0) + A.path(`M${n(sl + 30)} ${n(gy - 120)} C${n(sl + 80)} ${n(gy - 110)} ${n(sl + 100)} ${n(gy - 20)} ${n(sl + 160)} ${n(gy - 12)}`, 'none', 16, `stroke="${C.ink}"`) + A.path(`M${n(sl + 30)} ${n(gy - 120)} C${n(sl + 80)} ${n(gy - 110)} ${n(sl + 100)} ${n(gy - 20)} ${n(sl + 160)} ${n(gy - 12)}`, 'none', 9, `stroke="${C.yel}"`) + A.line(sl, gy, sl, gy - 124, 7, C.blue) + A.line(sl + 30, gy, sl + 30, gy - 124, 7, C.blue);
      s += ground(w, h, gy, '#63C24E', '#83D96A');
      return s;
    },
    station(w, h, gy, rnd) {
      let s = sky('station', w, h, ['#86CFFF', '#E9F7FF']);
      const ty = gy - 26;
      for (let x = -20; x < w; x += 170) { s += A.rect(x, ty - 110, 160, 104, 12, '#2E5EAA', LWb()) + A.rect(x, ty - 44, 160, 9, 0, C.yel, 0); for (let k = 0; k < 4; k++) s += A.rect(x + 12 + k * 37, ty - 94, 26, 30, 4, '#BFE8FF', LWb() * 0.6); }
      s += A.rect(-5, ty - 6, w + 10, 8, 0, '#3A3A48', 0);
      s += A.rect(-5, h * 0.04, w + 10, 18, 0, '#8C94A8', LWb()) + [0.1, 0.5, 0.9].map(f => A.rect(w * f - 5, h * 0.04 + 18, 10, ty - 110 - h * 0.04 - 18, 0, '#8C94A8', LWb() * 0.6)).join('');
      s += A.rect(w * 0.38, h * 0.04 + 20, w * 0.24, 26, 4, C.yel, LWb()) + A.path(`M${n(w * 0.42)} ${n(h * 0.04 + 33)} h${n(w * 0.16)}`, 'none', 4);
      s += ground(w, h, gy, '#B7B2A8', '#CFCABF') + A.rect(-5, gy, w + 10, 8, 0, C.yel, 0);
      return s;
    },
    airport(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#DCE6F0"/>`;
      const top = h * 0.06, wh = gy * 0.62;
      s += A.rect(-5, top, w + 10, wh, 0, '#8ED2FF', LWb()) + A.halftone(0, top, w, wh, 'light');
      s += cloud(w * 0.25, top + wh * 0.3, 0.7) + `<g transform="translate(${n(w * 0.66)} ${n(top + wh * 0.42)}) scale(.8)">${A.prop('plane')}</g>`;
      for (let x = 0; x < w; x += w / 5) s += A.line(x, top, x, top + wh, LWb(), '#5F6678');
      s += ground(w, h, gy, '#EEF2F6', '#FFFFFF');
      for (let i = 0; i < 5; i++) s += A.rect(w * 0.05 + i * 56, gy - 36, 46, 30, 8, C.blue, LWb() * 0.8);
      return s;
    },
    wedding(w, h, gy, rnd) {
      let s = sky('wed', w, h, ['#E9C98E', '#F8E6C0'], 'dark', gy);
      s += A.ell(w / 2, h * 0.02, w * 0.3, h * 0.16, '#F3DDB0', LWb()) + A.ell(w / 2, h * 0.02, w * 0.2, h * 0.1, '#E7C88A', LWb() * 0.6);
      for (let i = 0; i < 16; i++) { const a = Math.PI * (i / 15), x = w / 2 + Math.cos(a) * w * 0.3, y = h * 0.02 + Math.sin(a) * h * 0.16; s += `<circle cx="${n(x)}" cy="${n(y)}" r="8" fill="url(#glow-y)"/>` + A.circ(x, y, 2.5, '#fff', 0); }
      [0.06, 0.28, 0.72, 0.94].forEach(f => { s += A.rect(w * f - 16, h * 0.18, 32, gy - h * 0.18, 4, '#F1D7A2', LWb()) + A.path(`M${n(w * f - 16)} ${n(h * 0.24)} h32 M${n(w * f - 16)} ${n(gy - 20)} h32`, 'none', 3, 'stroke="#C9A060"'); });
      s += ground(w, h, gy, '#F4EEE4', '#FFFFFF');
      for (let i = 0; i < 6; i++) s += A.path(`M${n(rnd() * w)} ${n(gy + 6 + rnd() * (h - gy - 10))} q20 -8 40 0`, 'none', 2, 'stroke="#CFC4B4"');
      [0.17, 0.83].forEach(f => { s += A.rect(w * f - 8, gy - 44, 16, 44, 3, '#FFFFFF', LWb() * 0.7) + [-12, 0, 12, -6, 6].map((dx, i) => A.circ(w * f + dx, gy - 52 - (i > 2 ? 10 : 0), 9, C.yel, 2)).join(''); });
      return s;
    },
    cafe(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#5A3A28"/>` + A.halftone(0, 0, w, gy, 'light');
      const wx = w * 0.06, ww = w * 0.34;
      s += A.rect(wx, h * 0.06, ww, gy * 0.72, 4, '#CFE8EE', LWb());
      for (let x = wx + 12; x < wx + ww; x += 22) s += A.rect(x, h * 0.06, 8, gy * 0.72, 0, '#3A2418', 0);
      const sx = w * 0.56;
      for (let r = 0; r < 3; r++) { s += A.rect(sx, h * 0.1 + r * gy * 0.22, w * 0.38, 8, 0, '#8A5A33', LWb() * 0.7); [0, 1, 2, 3].forEach(k => { if (rnd() < 0.8) s += A.rect(sx + 10 + k * 34, h * 0.1 + r * gy * 0.22 - 26, 18, 26, 3, [C.teal, C.orange, C.cream || '#F3E0B0', C.pink][k], 2); }); }
      [0.46, 0.52].forEach(f => { s += A.line(w * f, 0, w * f, h * 0.2, 2, '#1B1210') + `<circle cx="${n(w * f)}" cy="${n(h * 0.24)}" r="20" fill="url(#glow-y)"/>` + A.path(`M${n(w * f - 10)} ${n(h * 0.2)} h20 l-4 8 h-12 Z`, C.yel, 2); });
      s += ground(w, h, gy, '#8A5A33', '#A06A3E');
      s += A.ell(w * 0.5, gy - 30, 60, 10, '#DDD6CC', LWb()) + A.rect(w * 0.5 - 5, gy - 30, 10, 30, 2, '#6B6F80', LWb() * 0.6);
      return s;
    },
    vet(w, h, gy, rnd) {
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#D9F2E6"/>` + A.halftone(0, 0, w, gy, 'dark');
      const px = w * 0.12, py = h * 0.1;
      s += A.rect(px, py, 90, 90, 12, '#fff', LWb()) + A.ell(px + 45, py + 56, 18, 15, C.teal, 0) + [[-16, -14], [-6, -24], [6, -24], [16, -14]].map(d => A.ell(px + 45 + d[0], py + 56 + d[1], 6, 8, C.teal, 0)).join('');
      s += A.rect(w * 0.74, h * 0.08, w * 0.2, gy * 0.5, 6, '#fff', LWb()) + A.line(w * 0.84, h * 0.08, w * 0.84, h * 0.08 + gy * 0.5, LWb() * 0.6) + A.circ(w * 0.82, h * 0.08 + gy * 0.25, 3, C.ink, 0) + A.circ(w * 0.86, h * 0.08 + gy * 0.25, 3, C.ink, 0);
      s += ground(w, h, gy, '#BFD8CC', '#D2E8DD');
      s += A.rect(w * 0.4, gy - 56, w * 0.26, 14, 4, '#C9D0DA', LWb()) + A.rect(w * 0.43, gy - 42, 10, 42, 2, '#8C94A8', LWb() * 0.6) + A.rect(w * 0.6, gy - 42, 10, 42, 2, '#8C94A8', LWb() * 0.6);
      return s;
    },
    nightsky(w, h, gy, rnd) {
      // a real night sky seen from Earth: deep blue, lots of stars, a soft Milky Way, a crescent moon, rooftops and trees
      let s = sky('nightsky', w, h, ['#070B2A', '#16225E', '#2B3C84'], 'light', gy);
      s += `<path d="M${n(-w * 0.1)} ${n(h * 0.62)} Q${n(w * 0.42)} ${n(h * 0.22)} ${n(w * 1.1)} ${n(h * 0.02)}" stroke="#DDE6FF" stroke-opacity=".13" stroke-width="${n(h * 0.17)}" fill="none" stroke-linecap="round"/>`;
      s += `<path d="M${n(-w * 0.1)} ${n(h * 0.62)} Q${n(w * 0.42)} ${n(h * 0.22)} ${n(w * 1.1)} ${n(h * 0.02)}" stroke="#FFFFFF" stroke-opacity=".08" stroke-width="${n(h * 0.06)}" fill="none" stroke-linecap="round"/>`;
      s += stars(w, gy * 0.92, rnd, Math.round(70 + w / 8));
      const mx = w * 0.82, my = h * 0.16, mr = Math.max(14, h * 0.06);
      s += `<circle cx="${n(mx)}" cy="${n(my)}" r="${n(mr * 2.6)}" fill="url(#glow-y)" opacity=".35"/>` + A.path(`M${n(mx)} ${n(my - mr)} A${n(mr)} ${n(mr)} 0 0 0 ${n(mx)} ${n(my + mr)} A${n(mr * 0.52)} ${n(mr)} 0 0 1 ${n(mx)} ${n(my - mr)} Z`, '#FFF3C4', LWb() * 0.7); // a real crescent, not a disc cut-out
      // village rooftops and trees in silhouette along the horizon
      let x = -10;
      while (x < w) {
        const bw = 36 + rnd() * 54, bh = 16 + rnd() * 30;
        if (rnd() < 0.35) s += A.circ(x + bw * 0.5, gy - bh - 10, bh * 0.7 + 8, '#0B1030', 0) + A.rect(x + bw * 0.5 - 3, gy - bh, 6, bh, 0, '#0B1030', 0);
        else s += A.poly([[x, gy], [x, gy - bh], [x + bw / 2, gy - bh - 16 - rnd() * 8], [x + bw, gy - bh], [x + bw, gy]], '#0A0E28', 0) + (rnd() < 0.5 ? A.rect(x + bw * 0.3, gy - bh * 0.7, bw * 0.18, bh * 0.28, 1, '#FFD76A', 0) : '');
        x += bw + rnd() * 34;
      }
      s += ground(w, h, gy, '#141B3D', '#1E2752');
      return s;
    },
    office(w, h, gy, rnd) {
      // Papa's open-plan office: blinds, a long desk with screens, a plant, a notice board
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#E9EEF5"/>` + A.halftone(0, 0, w, gy, 'dark');
      const wx = w * 0.08, wy = h * 0.08, ww = w * 0.4, wh = gy * 0.42;
      s += A.rect(wx, wy, ww, wh, 3, '#BDE9FF', LWb());
      for (let y = wy + 8; y < wy + wh - 4; y += 12) s += A.rect(wx + 3, y, ww - 6, 6, 1, '#F4F7FB', 0);
      s += A.rect(wx + 3, wy + 3, ww - 6, 8, 1, '#8C94A8', 0);
      s += A.rect(w * 0.62, h * 0.1, w * 0.3, gy * 0.32, 4, '#F6E3B5', LWb());
      [[0.66, 0.14, C.yel], [0.78, 0.13, C.pink], [0.7, 0.26, '#BDE9FF'], [0.82, 0.25, '#A7E34B']].forEach(([fx, fy, col]) => { s += A.rect(w * fx, h * fy, w * 0.07, gy * 0.09, 1, col, 1.5) + A.circ(w * fx + w * 0.035, h * fy, 3, C.red, 0); });
      s += ground(w, h, gy, '#9FB0C4', '#B7C6D8');
      const dy = gy - 58, dx = w * 0.06, dw = w * 0.88;
      s += A.rect(dx, dy, dw, 14, 3, '#F3EAD8', LWb()) + A.rect(dx + 10, dy + 14, 12, 44, 2, '#8C94A8', LWb() * 0.6) + A.rect(dx + dw - 22, dy + 14, 12, 44, 2, '#8C94A8', LWb() * 0.6);
      [0.14, 0.42, 0.7].forEach(f => { const mx = w * f; s += A.rect(mx, dy - 60, w * 0.16, 52, 4, '#1B2440', LWb()) + A.rect(mx + 5, dy - 55, w * 0.16 - 10, 42, 2, '#2E8BEF', 0) + A.path(`M${n(mx + 12)} ${n(dy - 30)} h${n(w * 0.1)} M${n(mx + 12)} ${n(dy - 40)} h${n(w * 0.06)} M${n(mx + 12)} ${n(dy - 20)} h${n(w * 0.08)}`, 'none', 2.5, 'stroke="#BDE9FF"') + A.rect(mx + w * 0.07, dy - 8, 10, 8, 1, '#8C94A8', 1.5); });
      s += A.rect(w * 0.9, dy - 26, 22, 26, 3, C.orange, LWb()) + [[-8, -30], [8, -34], [0, -46], [-14, -44], [14, -46]].map(d => A.ell(w * 0.9 + 11 + d[0], dy + d[1], 12, 8, C.leaf, 2, `transform="rotate(${d[0] * 2} ${n(w * 0.9 + 11 + d[0])} ${n(dy + d[1])})"`)).join('');
      s += A.rect(w * 0.3, dy - 14, 22, 14, 2, '#fff', 2) + A.path(`M${n(w * 0.3 + 4)} ${n(dy - 10)} q7 -8 14 0`, 'none', 2, `stroke="${C.brown}"`);
      return s;
    },
    classroom(w, h, gy, rnd) {
      // Miss Ji's classroom: blackboard with chalk, a window, two desks
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="#FFF0C9"/>` + A.halftone(0, 0, w, gy, 'dark');
      const bx = w * 0.1, by = h * 0.08, bw = w * 0.5, bh = gy * 0.46;
      s += A.rect(bx - 8, by - 8, bw + 16, bh + 16, 4, '#9A6236', LWb()) + A.rect(bx, by, bw, bh, 2, '#2D5A3D', LWb() * 0.6);
      s += A.path(`M${n(bx + bw * 0.08)} ${n(by + bh * 0.22)} h${n(bw * 0.5)} M${n(bx + bw * 0.08)} ${n(by + bh * 0.4)} h${n(bw * 0.7)} M${n(bx + bw * 0.08)} ${n(by + bh * 0.58)} h${n(bw * 0.4)}`, 'none', 3, 'stroke="#fff" opacity=".85"');
      s += A.path(`M${n(bx + bw * 0.66)} ${n(by + bh * 0.28)} l14 -14 l14 14 l-14 14 Z`, 'none', 2.5, 'stroke="#FFE36E"') + A.circ(bx + bw * 0.86, by + bh * 0.66, bh * 0.1, 'none', 2.5, 'stroke="#FFB3C1"');
      s += A.rect(bx - 8, by + bh + 8, bw + 16, 10, 2, '#7A4E2D', LWb() * 0.6) + A.rect(bx + 10, by + bh + 2, 22, 6, 2, '#fff', 1.2) + A.rect(bx + 40, by + bh + 2, 22, 6, 2, C.pink, 1.2);
      const wx = w * 0.7, wy = h * 0.1, ww = w * 0.22, wh = gy * 0.36;
      s += A.rect(wx, wy, ww, wh, 3, '#BDE9FF', LWb()) + A.line(wx + ww / 2, wy, wx + ww / 2, wy + wh, LWb() * 0.7) + cloud(wx + ww * 0.35, wy + wh * 0.3, 0.4);
      s += A.rect(w * 0.7, wy + wh + 12, ww, 16, 2, '#F2C688', LWb() * 0.6) + A.rect(w * 0.72, wy + wh - 2, 12, 16, 2, C.red, 1.5) + A.rect(w * 0.76, wy + wh - 6, 12, 20, 2, C.blue, 1.5) + A.rect(w * 0.8, wy + wh, 12, 14, 2, C.green, 1.5);
      s += ground(w, h, gy, '#C98B4F', '#D9A066');
      [0.06, 0.62].forEach(f => { const dx = w * f, dy = gy - 44; s += A.rect(dx, dy, w * 0.3, 12, 3, '#E8B26A', LWb()) + A.rect(dx + 8, dy + 12, 8, 32, 1, '#8A5A33', LWb() * 0.5) + A.rect(dx + w * 0.3 - 16, dy + 12, 8, 32, 1, '#8A5A33', LWb() * 0.5) + A.rect(dx + 20, dy - 10, 34, 10, 2, C.blue, 2) + A.rect(dx + 24, dy - 14, 26, 6, 1, '#fff', 1.2); });
      return s;
    },
    haunted(w, h, gy, rnd) {
      // the old bungalow at the end of the lane: night, big moon, bats, a cobweb, glowing windows. Funny, not scary.
      let s = sky('haunted', w, h, ['#1B1740', '#3E2C6E', '#5B3F8A'], 'light', gy) + stars(w, gy * 0.55, rnd, 22);
      s += `<circle cx="${n(w * 0.78)}" cy="${n(h * 0.17)}" r="${n(h * 0.17)}" fill="url(#glow-y)" opacity=".55"/>` + A.circ(w * 0.78, h * 0.17, h * 0.085, '#FFF3C4', LWb()) + A.circ(w * 0.76, h * 0.15, 6, '#F0DFA6', 0) + A.circ(w * 0.81, h * 0.2, 4, '#F0DFA6', 0);
      s += hills(w, gy, gy * 0.18, '#2A2352', rnd, 2);
      const hx = w * 0.18, hw = w * 0.5, hy = gy * 0.3, hh = gy - hy;
      s += A.poly([[hx - 20, hy + 10], [hx + hw / 2, hy - gy * 0.2], [hx + hw + 20, hy + 10]], '#3B2E62', LWb());
      s += A.rect(hx, hy, hw, hh, 0, '#52407E', LWb());
      s += A.rect(hx + hw * 0.62, hy - gy * 0.12, 18, gy * 0.12, 0, '#3B2E62', LWb() * 0.7);
      [[0.12, 0.2], [0.62, 0.2], [0.12, 0.55], [0.62, 0.55]].forEach(([fx, fy], i) => { const wx = hx + hw * fx, wy = hy + hh * fy; s += `<rect x="${n(wx - 6)}" y="${n(wy - 6)}" width="${n(hw * 0.26 + 12)}" height="${n(hh * 0.25 + 12)}" rx="6" fill="url(#glow-y)" opacity=".5"/>` + A.rect(wx, wy, hw * 0.26, hh * 0.25, 2, i === 1 ? '#2A2352' : '#FFE36E', LWb() * 0.8) + A.line(wx + hw * 0.13, wy, wx + hw * 0.13, wy + hh * 0.25, LWb() * 0.6) + A.line(wx, wy + hh * 0.125, wx + hw * 0.26, wy + hh * 0.125, LWb() * 0.6); });
      s += A.rect(hx + hw * 0.4, gy - hh * 0.36, hw * 0.2, hh * 0.36, 8, '#2A2352', LWb()) + A.circ(hx + hw * 0.56, gy - hh * 0.18, 3.5, C.yel, 0);
      s += A.path(`M${n(hx + hw * 0.4)} ${n(gy - hh * 0.36)} l-6 -14 M${n(hx + hw * 0.3)} ${n(hy + 4)} l-8 -10`, 'none', 2.5, 'stroke="#BDB6E6" opacity=".7"');
      // cobweb in the top-left corner
      const cw = w * 0.14;
      for (let i = 0; i <= 4; i++) { const a = (i / 4) * Math.PI / 2; s += A.line(0, 0, Math.cos(a) * cw, Math.sin(a) * cw, 1.6, '#D9D4F0'); }
      [0.35, 0.65, 0.95].forEach(f => { let d = `M${n(cw * f)} 0`; for (let i = 1; i <= 4; i++) { const a = (i / 4) * Math.PI / 2; d += ` Q${n(Math.cos(a - 0.2) * cw * f * 0.9)} ${n(Math.sin(a - 0.2) * cw * f * 0.9)} ${n(Math.cos(a) * cw * f)} ${n(Math.sin(a) * cw * f)}`; } s += A.path(d, 'none', 1.4, 'stroke="#D9D4F0"'); });
      // bats (friendly, tiny)
      [[0.62, 0.32], [0.9, 0.4], [0.72, 0.5]].forEach(([fx, fy]) => { const bx = w * fx, by = h * fy; s += A.path(`M${n(bx - 16)} ${n(by)} q8 -10 16 0 q8 -10 16 0 q-8 6 -16 2 q-8 4 -16 -2 Z`, '#1B1740', 1.5) + A.circ(bx - 3, by - 1, 1.5, C.yel, 0) + A.circ(bx + 3, by - 1, 1.5, C.yel, 0); });
      s += ground(w, h, gy, '#3A4A3A', '#4E6B4A');
      for (let x = 10; x < w; x += 36) s += A.path(`M${n(x)} ${n(gy + 2)} l4 -12 l4 12 M${n(x + 14)} ${n(gy + 2)} l3 -9 l3 9`, 'none', 2, 'stroke="#6C8F5E"');
      s += A.path(`M${n(w * 0.84)} ${n(gy + 2)} v-40 l-14 -10 M${n(w * 0.84)} ${n(gy - 22)} l16 -12`, 'none', 5, 'stroke="#2A2352"'); // the default style already has round caps
      return s;
    },
    action(w, h, gy, rnd) {
      const cx = w * 0.5, cy = h * 0.5, R = Math.hypot(w, h);
      let s = `<rect width="${n(w)}" height="${n(h)}" fill="${C.yel}"/>`;
      const N = 22;
      for (let i = 0; i < N; i += 2) { const a1 = (i / N) * Math.PI * 2, a2 = ((i + 1) / N) * Math.PI * 2; s += A.poly([[cx, cy], [cx + Math.cos(a1) * R, cy + Math.sin(a1) * R], [cx + Math.cos(a2) * R, cy + Math.sin(a2) * R]], C.red, 0); }
      s += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(Math.min(w, h) * 0.45)}" fill="url(#glow-y)"/>` + speedDots(w, h);
      return s;
    },
  };
  A.BG = BG;
  A.GROUND = { space: 0.9, sky: 0.9, underwater: 0.86, ocean: 0.9, action: 0.9, beach: 0.84, river: 0.8 };
  A.bg = (id, w, h, gy, seed) => (BG[id] || BG.city)(w, h, gy, A.rng(seed));
})();
