/* Auggi Comics — character drawings. Every character is original.
   Local frame: feet at (0,0), ~200 units tall, facing right/front. */
(function () {
  const A = window.AuggiArt, C = A.C, n = A.n;

  const POSES = {
    stand: { arms: { L: [16, 6], R: [16, 6] }, legs: { L: [4, 0], R: [4, 0] } },
    wave: { arms: { L: [16, 6], R: [128, 172] }, legs: { L: [5, 0], R: [5, 0] } },
    run: { arms: { L: [55, 125], R: [-30, 35] }, legs: { L: [48, -8], R: [-12, 22] }, rot: 9, lift: 8 },
    fly: { arms: { L: [14, 8], R: [176, 180] }, legs: { L: [3, 0], R: [-3, 2] }, rot: 25 },
    cheer: { arms: { L: [148, 165], R: [148, 165] }, legs: { L: [22, 8], R: [22, 8] }, lift: 18 },
    point: { arms: { L: [38, -45], R: [95, 92] }, legs: { L: [6, 0], R: [6, 0] } },
    think: { arms: { L: [22, -72], R: [18, -152] }, legs: { L: [4, 0], R: [4, 0] }, tilt: -7 },
    sit: { arms: { L: [22, 55], R: [22, 55] }, legs: { L: [86, 8], R: [86, 8] }, sit: true },
    blast: { arms: { L: [-82, -88], R: [88, 90] }, legs: { L: [24, 14], R: [24, 14] }, rot: 3 },
  };
  POSES.lie = POSES.sit;
  A.POSES = POSES;

  const rad = d => (d * Math.PI) / 180;
  const dir = (a, s) => (s === 'L' ? [-Math.sin(rad(a)), Math.cos(rad(a))] : [Math.sin(rad(a)), Math.cos(rad(a))]);
  const joint = (p, a, len, s) => { const d = dir(a, s); return [p[0] + d[0] * len, p[1] + d[1] * len]; };
  const rotPt = (p, deg, py) => {
    const r = rad(deg), c = Math.cos(r), s = Math.sin(r);
    const x = p[0], y = p[1] - py;
    return [x * c - y * s, x * s + y * c + py];
  };

  function rig(cfg, pose) {
    const P = POSES[pose] || POSES.stand;
    const leg = cfg.leg, sit = !!P.sit;
    const hipY = sit ? -leg * 0.5 : -leg;
    const shY = hipY - cfg.torso + (cfg.shIn || 6);
    const arms = {}, legs = {};
    for (const s of ['L', 'R']) {
      const sh = [s === 'L' ? -cfg.sw : cfg.sw, shY];
      const a = P.arms[s];
      const el = joint(sh, a[0], cfg.arm / 2, s), hd = joint(el, a[1], cfg.arm / 2, s);
      arms[s] = { sh, el, hd };
      const hp = [s === 'L' ? -cfg.hw : cfg.hw, hipY];
      const l = P.legs[s];
      const kn = joint(hp, l[0], leg / 2, s), ft = joint(kn, l[1], leg / 2, s);
      legs[s] = { hp, kn, ft };
    }
    return { P, pose, hipY, shY, arms, legs, sit };
  }

  // Wrap a drawing with pose rotation + lift; transform anchor the same way.
  function finish(svg, anchor, r, cfg, pivotY) {
    const P = r.P || {};
    let rot = P.rot || 0;
    if (r.pose === 'fly' && cfg.flyRot != null) rot = cfg.flyRot;
    const lift = P.lift || 0;
    let a = anchor;
    if (rot) a = rotPt(a, rot, pivotY);
    a = [a[0], a[1] - lift];
    const tr = `translate(0 ${-lift})${rot ? ` rotate(${rot} 0 ${n(pivotY)})` : ''}`;
    return { svg: `<g transform="${tr}">${svg}</g>`, anchor: a };
  }

  /* ---------------- AUGGI: the little super-robot ---------------- */
  function auggi(pose, mood) {
    const cfg = { leg: 42, torso: 60, sw: 33, hw: 15, arm: 50, shIn: 8, flyRot: 72 };
    const r = rig(cfg, pose);
    const { hipY, shY } = r;
    let s = '';
    // cape
    const fly = pose === 'fly', run = pose === 'run';
    const cy0 = shY - 4;
    let cape;
    if (fly) cape = `M-30 ${cy0} C-62 ${cy0 + 50} -74 ${cy0 + 120} -70 ${cy0 + 160} Q-44 ${cy0 + 146} -24 ${cy0 + 166} Q0 ${cy0 + 148} 20 ${cy0 + 168} Q44 ${cy0 + 150} 64 ${cy0 + 160} C66 ${cy0 + 110} 56 ${cy0 + 50} 30 ${cy0} Z`;
    else if (run) cape = `M-28 ${cy0} C-60 ${cy0 + 30} -96 ${cy0 + 60} -120 ${cy0 + 70} Q-100 ${cy0 + 84} -104 ${cy0 + 104} Q-80 ${cy0 + 96} -70 ${cy0 + 112} Q-50 ${cy0 + 96} -30 ${cy0 + 100} C-10 ${cy0 + 70} 10 ${cy0 + 30} 28 ${cy0} Z`;
    else cape = `M-30 ${cy0} C-46 ${cy0 + 30} -58 ${cy0 + 70} -62 ${cy0 + 100} Q-44 ${cy0 + 90} -24 ${cy0 + 104} Q0 ${cy0 + 90} 22 ${cy0 + 104} Q44 ${cy0 + 90} 62 ${cy0 + 100} C58 ${cy0 + 70} 46 ${cy0 + 30} 30 ${cy0} Z`;
    s += A.path(cape, C.blue) + A.path(cape.replace(/^M-3\d/, m => m), 'none', 0);
    s += `<path d="${cape}" fill="url(#ht-dark)" opacity=".8"/>`;
    // legs
    for (const k of ['L', 'R']) {
      const L = r.legs[k];
      s += A.limb([L.hp, L.kn, L.ft], C.silver, 15);
      const fx = L.ft[0], fy = L.ft[1];
      if (fly) s += A.poly([[fx - 10, fy + 12], [fx, fy + 52], [fx + 10, fy + 12]], C.yel, A.getLW() * 0.6) + A.poly([[fx - 5, fy + 14], [fx, fy + 34], [fx + 5, fy + 14]], C.orange, 0);
      s += A.rect(fx - 15, fy - 16, 30, 22, 9, C.red) + A.rect(fx - 15, fy - 9, 30, 5, 0, C.yel, 0);
    }
    // body
    const tt = shY - 10, tb = hipY + 8;
    s += A.path(`M-38 ${tt + 14} Q-38 ${tt} -24 ${tt} L24 ${tt} Q38 ${tt} 38 ${tt + 14} L34 ${tb - 8} Q34 ${tb} 24 ${tb} L-24 ${tb} Q-34 ${tb} -34 ${tb - 8} Z`, C.red);
    s += A.path(`M-30 ${tt + 12} Q-30 ${tt + 6} -22 ${tt + 6} L-10 ${tt + 6}`, 'none', 4, 'stroke="#FF8B84"');
    s += A.rect(-34, tb - 16, 68, 10, 2, C.yel);
    s += A.rect(-7, tb - 17, 14, 12, 3, C.yelD);
    // heart-core star
    const sy = (tt + tb - 12) / 2;
    s += `<circle cx="0" cy="${n(sy)}" r="26" fill="url(#glow-y)" opacity=".9"/>`;
    s += A.poly(A.burstPts(0, sy, 16, 7, 5, -Math.PI / 2), C.yel, A.getLW() * 0.7) + A.circ(0, sy, 4, '#fff', 0);
    // head
    const hy = shY - 8; // bottom of head
    const H = 88, top = hy - H;
    s += A.circ(-52, top + 46, 11, C.red) + A.circ(52, top + 46, 11, C.red);
    s += A.line(0, top + 2, 3, top - 22, 4.5) + `<circle cx="4" cy="${top - 28}" r="18" fill="url(#glow-r)"/>` + A.circ(4, top - 28, 9, C.red) + A.circ(1, top - 31, 3, '#fff', 0);
    s += A.rect(-50, top, 100, H, 34, C.silver);
    s += A.path(`M36 ${top + 18} Q46 ${top + 44} 38 ${top + 72}`, 'none', 5, `stroke="${C.silverD}"`);
    s += A.ell(-28, top + 14, 12, 6, '#fff', 0, 'opacity=".9"');
    s += A.rect(-38, top + 14, 76, 60, 22, C.screen);
    s += A.face(0, top + 44, 0.92, mood, { robot: true, look: 1.2 });
    // arms (on top)
    for (const k of ['L', 'R']) {
      const a = r.arms[k];
      s += A.limb([a.sh, a.el, a.hd], C.silver, 12);
      s += A.circ(a.hd[0], a.hd[1], 11, C.blue);
    }
    if (pose === 'blast') {
      const [hx, hy2] = r.arms.R.hd;
      s += `<g opacity=".95">` + A.poly([[hx + 6, hy2 - 10], [hx + 460, hy2 - 58], [hx + 460, hy2 + 58], [hx + 6, hy2 + 10]], C.yel, 0, 'opacity=".75"') +
        A.poly([[hx + 6, hy2 - 5], [hx + 460, hy2 - 22], [hx + 460, hy2 + 22], [hx + 6, hy2 + 5]], '#fff', 0) + `</g>` +
        `<circle cx="${n(hx + 8)}" cy="${n(hy2)}" r="34" fill="url(#glow-c)"/>` +
        [60, 130, 210, 300].map((d, i) => A.poly(A.burstPts(hx + d, hy2 + (i % 2 ? -30 : 26), 10, 4, 4, 0), '#fff', 2)).join('');
    }
    const res = finish(s, [2, top - 40], r, cfg, -95);
    return res;
  }

  /* ---------------- Humans ---------------- */
  const HUMANS = {
    mira: { skin: '#8D5A3B', hairColor: '#2A1A14', hair: 'puffs', tie: C.pink, shirt: '#FFC928', bottom: 'overalls', bottomColor: C.purple, shoe: C.pink, extras: ['goggles'] },
    rohan: { skin: '#A86B45', hairColor: '#1E1410', hair: 'short', shirt: C.orange, bottom: 'shorts', bottomColor: C.blueD, shoe: '#fff', extras: ['cap'], capColor: C.blue },
    anaya: { skin: '#C68A5E', hairColor: '#2B1B16', hair: 'bob', shirt: C.pink, bottom: 'dress', bottomColor: C.pink, shoe: C.yel, extras: ['hairband'], bandColor: C.yel },
    kabir: { skin: '#9A6440', hairColor: '#1F1612', hair: 'curly', shirt: C.green, bottom: 'shorts', bottomColor: '#E0A200', shoe: C.red, scale: 0.84, headR: 36 },
    zoya: { skin: '#B7794E', hairColor: '#2A1712', hair: 'ponytail', shirt: C.teal, bottom: 'pants', bottomColor: '#0E6F66', shoe: '#fff', extras: ['headband'], bandColor: C.red },
    // Auggie's family, drawn from their photos
    papa: { skin: '#B9825A', hairColor: '#1E1410', hair: 'tousled', shirt: '#5A3A2A', bottom: 'shorts', bottomColor: '#E07A50', shoe: '#E9E4DA', extras: ['rectglasses', 'beard'], leg: 74, torso: 68, headR: 32, sw: 28, hw: 15, arm: 62, belly: true },
    mumma: { skin: '#C98E66', hairColor: '#1C1210', hair: 'longwavy', shirt: '#17A2A8', bottom: 'dress', bottomColor: '#17A2A8', shoe: '#C98A55', extras: ['earrings', 'bag'], leg: 70, torso: 62, headR: 33, sw: 26, hw: 14, arm: 58, belly: true },
    mausi: { skin: '#C58C63', hairColor: '#2A1A12', hairEnds: '#8A5530', hair: 'longwavy', shirt: '#F7F5EF', bottom: 'pants', bottomColor: '#3E5E9C', shoe: '#FFFFFF', extras: ['earrings'], leg: 72, torso: 60, headR: 31, sw: 24, hw: 12, arm: 58 },
    nanu: { skin: '#A8714D', hairColor: '#23180F', hair: 'sidepart', shirt: '#CFE0F5', bottom: 'suit', bottomColor: '#2B3A6B', tie: '#1D2645', shoe: '#3A2418', extras: [], leg: 78, torso: 68, headR: 31, sw: 27, hw: 13, arm: 62 },
    dadi: { skin: '#8E5A3A', hairColor: '#2A2522', hair: 'longgrey', shirt: '#E8584C', bottom: 'saree', bottomColor: '#F0655A', border: '#F7A23B', stripes: true, shoe: C.brown, extras: ['bindi', 'nosering', 'bangles'], bangleColor: '#1FA3A0', leg: 62, torso: 60, headR: 31, sw: 25, hw: 12, arm: 56 },
    gadbad: { skin: '#E6B08A', hairColor: '#FFFFFF', hair: 'wild', shirt: '#F5F0FF', bottom: 'coat', bottomColor: '#3FAE6A', pants: '#3A3550', shoe: C.brownD, extras: ['bigglasses', 'bowtie', 'moustache'], leg: 78, torso: 66, headR: 30, sw: 25, arm: 60 },
  };

  function human(id, pose, mood) {
    const h = HUMANS[id];
    const cfg = Object.assign({ leg: 56, torso: 50, sw: 22, hw: 10, arm: 48, headR: 34, shIn: 6 }, h);
    const r = rig(cfg, pose);
    const { hipY, shY } = r;
    const R0 = cfg.headR, hy = shY - 4 - R0;
    const LW = A.getLW();
    let s = '';
    // back hair
    if (h.hair === 'puffs') s += A.circ(-R0 - 6, hy - R0 * 0.55, 16, h.hairColor) + A.circ(R0 + 6, hy - R0 * 0.55, 16, h.hairColor);
    if (h.hair === 'bob') s += A.path(`M${-R0 - 8} ${hy + R0 * 0.7} C${-R0 - 14} ${hy - R0 * 1.6} ${R0 + 14} ${hy - R0 * 1.6} ${R0 + 8} ${hy + R0 * 0.7} Q0 ${hy + R0 * 0.9} ${-R0 - 8} ${hy + R0 * 0.7} Z`, h.hairColor);
    if (h.hair === 'ponytail') s += A.path(`M${-R0 + 4} ${hy - R0 * 0.6} C${-R0 - 34} ${hy - R0 * 0.8} ${-R0 - 36} ${hy + R0 * 0.6} ${-R0 - 20} ${hy + R0 * 1.1} C${-R0 - 14} ${hy + R0 * 0.4} ${-R0 - 6} ${hy} ${-R0 + 6} ${hy - R0 * 0.1} Z`, h.hairColor);
    if (h.hair === 'wild') s += A.poly(A.burstPts(0, hy - 8, R0 + 22, R0 + 6, 11, 0.2), h.hairColor);
    if (h.hair === 'longwavy' || h.hair === 'longgrey') {
      const bot = hy + R0 * (h.hair === 'longgrey' ? 2.3 : 2.7), wd = R0 + 14;
      let d = `M${-wd} ${hy - R0 * 0.2} C${-wd} ${hy - R0 * 1.6} ${wd} ${hy - R0 * 1.6} ${wd} ${hy - R0 * 0.2} C${wd + 8} ${hy + R0} ${wd + 2} ${bot - 20} ${wd - 6} ${bot}`;
      for (let i = 0; i < 5; i++) { const x0 = wd - 6 - (i + 1) * ((wd * 2 - 12) / 5); d += ` Q${n(x0 + (wd * 2 - 12) / 10)} ${n(bot + (i % 2 ? 12 : -8))} ${n(x0)} ${n(bot)}`; }
      d += ` C${-wd - 2} ${bot - 20} ${-wd - 8} ${hy + R0} ${-wd} ${hy - R0 * 0.2} Z`;
      s += A.path(d, h.hairColor);
      if (h.hairEnds) s += `<path d="M${-wd + 2} ${n(bot - R0 * 0.9)} L${wd - 2} ${n(bot - R0 * 0.9)} L${wd - 6} ${bot} L${-wd + 6} ${bot} Z" fill="${h.hairEnds}" opacity=".85"/>`;
      if (h.hair === 'longgrey') s += [-0.6, 0.1, 0.7].map(f => A.path(`M${n(f * wd)} ${n(hy - R0 * 0.6)} q${n(6)} ${n(R0)} ${n(-2)} ${n(R0 * 2.4)}`, 'none', 2.5, 'stroke="#A8A29C"')).join('');
    }
    // legs
    const bare = h.bottom === 'shorts' || h.bottom === 'dress' || h.bottom === 'skirt';
    const legCol = bare ? h.skin : h.bottom === 'overalls' ? h.bottomColor : h.bottom === 'coat' ? h.pants : h.bottomColor;
    for (const k of ['L', 'R']) {
      const L = r.legs[k];
      if (h.bottom !== 'saree') s += A.limb([L.hp, L.kn, L.ft], legCol, 12);
      const fx = L.ft[0], fy = L.ft[1];
      s += A.ell(fx + (k === 'L' ? -3 : 3), fy - 4, 12, 7.5, h.shoe);
    }
    // garments below torso
    const wy = hipY - 6;
    if (h.bottom === 'shorts') s += A.path(`M${-cfg.hw - 11} ${wy} L${cfg.hw + 11} ${wy} L${cfg.hw + 13} ${hipY + 20} L2 ${hipY + 20} L0 ${hipY + 8} L-2 ${hipY + 20} L${-cfg.hw - 13} ${hipY + 20} Z`, h.bottomColor);
    if (h.bottom === 'dress' || h.bottom === 'skirt') { const by = Math.min(hipY + cfg.leg * 0.5, -6); s += A.path(`M${-cfg.hw - 10} ${wy - 8} L${cfg.hw + 10} ${wy - 8} L${cfg.hw + 26} ${by} Q0 ${by + 6} ${-cfg.hw - 26} ${by} Z`, h.bottomColor) + A.path(`M${-cfg.hw - 22} ${by - 8} Q0 ${by - 2} ${cfg.hw + 22} ${by - 8}`, 'none', 3, 'stroke="#fff" opacity=".7"'); }
    if (h.bottom === 'saree') { const by = -5; s += A.path(`M${-cfg.hw - 12} ${wy - 6} L${cfg.hw + 12} ${wy - 6} L${cfg.hw + 22} ${by} L${-cfg.hw - 22} ${by} Z`, h.bottomColor) + A.rect(-cfg.hw - 22, by - 9, cfg.hw * 2 + 44, 7, 0, h.border, LW * 0.5) + A.path(`M-4 ${wy} L-8 ${by - 10} M6 ${wy} L10 ${by - 10}`, 'none', 2);
      if (h.stripes) for (let i = 0; i < 4; i++) { const y = wy + 8 + i * ((by - wy - 16) / 4), half = cfg.hw + 12 + ((y - wy) / (by - wy)) * 10; s += `<path d="M${n(-half)} ${n(y)} q${n(half / 4)} -6 ${n(half / 2)} 0 t${n(half / 2)} 0 t${n(half / 2)} 0 t${n(half / 2)} 0" fill="none" stroke="${i % 2 ? '#4CAF50' : '#FFB02E'}" stroke-width="2.5"/>`; } }
    if (h.bottom === 'coat') { const by = hipY + cfg.leg * 0.45; s += A.path(`M${-cfg.sw - 4} ${shY - 2} L${cfg.sw + 4} ${shY - 2} L${cfg.hw + 22} ${by} L${-cfg.hw - 22} ${by} Z`, h.bottomColor); }
    // torso
    const tt = shY - 6, tb = hipY + 6;
    const bw = cfg.hw + (h.belly ? 17 : 10), mid = (tt + tb) / 2;
    const torso = h.belly
      ? `M${-cfg.sw - 3} ${tt + 9} Q${-cfg.sw - 3} ${tt} ${-cfg.sw + 8} ${tt} L${cfg.sw - 8} ${tt} Q${cfg.sw + 3} ${tt} ${cfg.sw + 3} ${tt + 9} Q${bw + 8} ${mid + 10} ${bw} ${tb} L${-bw} ${tb} Q${-bw - 8} ${mid + 10} ${-cfg.sw - 3} ${tt + 9} Z`
      : `M${-cfg.sw - 3} ${tt + 9} Q${-cfg.sw - 3} ${tt} ${-cfg.sw + 8} ${tt} L${cfg.sw - 8} ${tt} Q${cfg.sw + 3} ${tt} ${cfg.sw + 3} ${tt + 9} L${bw} ${tb} L${-bw} ${tb} Z`;
    s += A.path(torso, h.bottom === 'dress' || h.bottom === 'suit' ? h.bottomColor : h.shirt);
    if (h.bottom === 'suit') {
      s += A.poly([[-11, tt], [11, tt], [0, tt + 36]], h.shirt, LW * 0.6);
      s += A.poly([[-3.5, tt + 4], [3.5, tt + 4], [5.5, tt + 28], [0, tt + 35], [-5.5, tt + 28]], h.tie, LW * 0.5);
      s += A.path(`M-11 ${tt} L-3 ${tt + 26} M11 ${tt} L3 ${tt + 26}`, 'none', LW * 0.6) + A.circ(0, tb - 16, 2.5, C.ink, 0);
    }
    if (id === 'papa') s += A.path(`M-9 ${tt + 18} h18 M-7 ${tt + 24} h14`, 'none', 2, 'stroke="#8A6A56"');
    if (h.bottom === 'overalls') s += A.path(`M${-cfg.hw - 4} ${tt + 18} L${cfg.hw + 4} ${tt + 18} L${cfg.hw + 10} ${tb} L${-cfg.hw - 10} ${tb} Z`, h.bottomColor) + A.line(-cfg.hw - 2, tt + 20, -cfg.sw + 4, tt + 2, 4) + A.line(cfg.hw + 2, tt + 20, cfg.sw - 4, tt + 2, 4) + A.rect(-7, tt + 26, 14, 10, 2, C.purpleD, 2);
    if (h.bottom === 'saree') s += A.path(`M${-cfg.sw - 2} ${tt + 4} L${-cfg.sw + 12} ${tt} L${cfg.hw + 12} ${tb - 2} L${cfg.hw} ${tb + 2} Z`, h.bottomColor) + A.path(`M${-cfg.sw + 12} ${tt} L${cfg.hw + 12} ${tb - 2}`, 'none', 4, `stroke="${h.border}"`);
    if (h.bottom === 'coat') s += A.path(`M-6 ${tt} L0 ${tt + 30} L6 ${tt}`, 'none', 3) + A.path(`M${-cfg.sw + 2} ${tt} L-7 ${tt + 40} L-12 ${tb + 30}`, 'none', LW * 0.8) + A.path(`M${cfg.sw - 2} ${tt} L7 ${tt + 40} L12 ${tb + 30}`, 'none', LW * 0.8);
    if (id === 'rohan') s += A.path(`M-6 ${tt + 14} l6 10 l6 -10`, 'none', 3, 'stroke="#fff"');
    if (id === 'kabir') s += A.poly(A.burstPts(0, tt + 22, 8, 3.5, 5, -Math.PI / 2), C.yel, 2);
    if (id === 'zoya') s += A.path(`M${-cfg.sw} ${tt + 12} L${cfg.sw} ${tt + 12}`, 'none', 4, 'stroke="#fff"');
    // neck + head
    s += A.rect(-6, hy + R0 - 8, 12, 12, 3, h.skin, LW * 0.6);
    if (h.extras && h.extras.includes('bowtie')) s += A.poly([[0, hy + R0 + 6], [-14, hy + R0 - 2], [-14, hy + R0 + 14]], C.purple, 2.5) + A.poly([[0, hy + R0 + 6], [14, hy + R0 - 2], [14, hy + R0 + 14]], C.purple, 2.5) + A.circ(0, hy + R0 + 6, 3.5, C.purpleD, 2);
    s += A.circ(-R0, hy + 4, 7, h.skin) + A.circ(R0, hy + 4, 7, h.skin);
    s += A.circ(0, hy, R0, h.skin);
    const exs = h.extras || [];
    if (exs.includes('beard')) {
      const hc2 = h.hairColor;
      s += A.path(`M${-R0 - 1} ${hy - R0 * 0.1} Q${-R0 * 0.95} ${hy + R0 * 1.1} 0 ${hy + R0 * 1.16} Q${R0 * 0.95} ${hy + R0 * 1.1} ${R0 + 1} ${hy - R0 * 0.1} L${R0 * 0.72} ${hy + R0 * 0.05} Q${R0 * 0.6} ${hy + R0 * 0.82} 0 ${hy + R0 * 0.86} Q${-R0 * 0.6} ${hy + R0 * 0.82} ${-R0 * 0.72} ${hy + R0 * 0.05} Z`, hc2, LW * 0.7);
      s += A.path(`M${-R0 * 0.36} ${hy + R0 * 0.5} Q0 ${hy + R0 * 0.28} ${R0 * 0.36} ${hy + R0 * 0.5} Q0 ${hy + R0 * 0.42} ${-R0 * 0.36} ${hy + R0 * 0.5} Z`, hc2, LW * 0.5);
    }
    s += A.face(0, hy + (exs.includes('beard') ? 1 : 5), R0 / 34, mood, { look: 1.8, noCheeks: exs.includes('beard') });
    // front hair
    const cap = `M${-R0 - 3} ${hy + 1} C${-R0 - 3} ${hy - R0 * 1.42} ${R0 + 3} ${hy - R0 * 1.42} ${R0 + 3} ${hy + 1} C${R0 * 0.7} ${hy - R0 * 0.45} ${-R0 * 0.1} ${hy - R0 * 0.75} ${-R0 - 3} ${hy + 1} Z`;
    const hc = h.hairColor;
    switch (h.hair) {
      case 'puffs': s += A.path(cap, hc) + A.circ(-R0 - 3, hy - R0 * 0.45, 4, h.tie, 2) + A.circ(R0 + 3, hy - R0 * 0.45, 4, h.tie, 2); break;
      case 'short': s += A.path(cap, hc) + A.path(`M${-R0 * 0.5} ${hy - R0 * 0.95} l6 -12 l6 10 l6 -12 l6 12`, hc, LW * 0.6); break;
      case 'curly': for (let a = 185; a <= 355; a += 24) { const x = Math.cos(rad(a)) * (R0 + 1), y = hy + Math.sin(rad(a)) * (R0 + 1); s += A.circ(x, y, 10, hc); } break;
      case 'bob': s += A.path(`M${-R0 - 3} ${hy - 2} C${-R0 - 3} ${hy - R0 * 1.42} ${R0 + 3} ${hy - R0 * 1.42} ${R0 + 3} ${hy - 2} L${R0 * 0.7} ${hy - R0 * 0.35} L${-R0 * 0.7} ${hy - R0 * 0.35} Z`, hc); break;
      case 'ponytail': s += A.path(cap, hc); break;
      case 'bun': s += A.circ(0, hy - R0 - 8, 13, hc) + A.path(cap, hc); break;
      case 'wild': s += A.path(`M${-R0 * 0.6} ${hy - R0 * 0.8} l-8 -16 l14 6 l2 -14 l10 12 l6 -14 l6 14 l10 -12 l2 14 l14 -6 l-8 16 Z`, hc, LW * 0.7); break;
      case 'tousled':
        s += A.path(cap, hc);
        for (let a = 214; a <= 326; a += 28) { const x = Math.cos(rad(a)) * (R0 - 1), y = hy + Math.sin(rad(a)) * (R0 - 1); s += A.circ(x, y, 7.5, hc, 0); }
        s += A.path(`M${-R0 * 0.2} ${hy - R0 * 0.95} q${R0 * 0.5} ${-R0 * 0.1} ${R0 * 0.75} ${R0 * 0.35} q${-R0 * 0.35} ${-R0 * 0.1} ${-R0 * 0.55} ${R0 * 0.05} Z`, hc, LW * 0.5);
        break;
      case 'longwavy':
        s += A.path(`M${-R0 - 4} ${hy + R0 * 0.2} C${-R0 - 6} ${hy - R0 * 1.5} ${R0 + 6} ${hy - R0 * 1.5} ${R0 + 4} ${hy + R0 * 0.2} C${R0 * 0.8} ${hy - R0 * 0.55} ${R0 * 0.2} ${hy - R0 * 0.8} ${-R0 * 0.15} ${hy - R0 * 0.82} C${-R0 * 0.55} ${hy - R0 * 0.7} ${-R0 * 0.85} ${hy - R0 * 0.3} ${-R0 - 4} ${hy + R0 * 0.2} Z`, hc);
        s += A.path(`M${-R0 - 3} ${hy} q-4 ${R0 * 0.8} 6 ${R0 * 1.5} M${R0 + 3} ${hy} q4 ${R0 * 0.8} -6 ${R0 * 1.5}`, 'none', 9, `stroke="${hc}"`);
        break;
      case 'sidepart':
        s += A.path(`M${-R0 - 2} ${hy - R0 * 0.1} C${-R0 - 3} ${hy - R0 * 1.4} ${R0 + 3} ${hy - R0 * 1.4} ${R0 + 2} ${hy - R0 * 0.1} C${R0 * 0.9} ${hy - R0 * 0.5} ${R0 * 0.1} ${hy - R0 * 0.7} ${-R0 * 0.35} ${hy - R0 * 0.72} C${-R0 * 0.7} ${hy - R0 * 0.6} ${-R0 * 0.95} ${hy - R0 * 0.4} ${-R0 - 2} ${hy - R0 * 0.1} Z`, hc);
        s += A.path(`M${-R0 * 0.45} ${hy - R0 * 0.72} Q${-R0 * 0.3} ${hy - R0 * 1.05} ${-R0 * 0.1} ${hy - R0 * 1.12}`, 'none', 2.5, 'stroke="#5A4A3A"');
        break;
      case 'longgrey':
        s += A.path(`M${-R0 - 4} ${hy + R0 * 0.3} C${-R0 - 6} ${hy - R0 * 1.5} ${R0 + 6} ${hy - R0 * 1.5} ${R0 + 4} ${hy + R0 * 0.3} C${R0 * 0.75} ${hy - R0 * 0.5} ${R0 * 0.2} ${hy - R0 * 0.75} 0 ${hy - R0 * 0.8} C${-R0 * 0.2} ${hy - R0 * 0.75} ${-R0 * 0.75} ${hy - R0 * 0.5} ${-R0 - 4} ${hy + R0 * 0.3} Z`, hc);
        s += A.path(`M${-R0 * 0.7} ${hy - R0 * 0.7} q${R0 * 0.2} ${-R0 * 0.3} ${R0 * 0.6} ${-R0 * 0.35}`, 'none', 2.5, 'stroke="#A8A29C"');
        break;
    }
    const ex = h.extras || [];
    if (ex.includes('goggles')) s += A.path(`M${-R0 - 2} ${hy - R0 * 0.5} Q0 ${hy - R0 * 0.72} ${R0 + 2} ${hy - R0 * 0.5}`, 'none', 6, `stroke="${C.ink}"`) + A.circ(-12, hy - R0 * 0.68, 10, C.cyan) + A.circ(12, hy - R0 * 0.68, 10, C.cyan) + A.circ(-15, hy - R0 * 0.74, 3, '#fff', 0) + A.circ(9, hy - R0 * 0.74, 3, '#fff', 0);
    if (ex.includes('cap')) s += A.path(`M${-R0 - 2} ${hy - R0 * 0.35} C${-R0} ${hy - R0 * 1.45} ${R0} ${hy - R0 * 1.45} ${R0 + 2} ${hy - R0 * 0.35} Z`, h.capColor) + A.path(`M${R0 - 4} ${hy - R0 * 0.4} Q${R0 + 22} ${hy - R0 * 0.45} ${R0 + 26} ${hy - R0 * 0.22} L${R0 - 2} ${hy - R0 * 0.25} Z`, h.capColor);
    if (ex.includes('hairband')) s += A.path(`M${-R0 + 2} ${hy - R0 * 0.55} Q0 ${hy - R0 * 1.25} ${R0 - 2} ${hy - R0 * 0.55}`, 'none', 7, `stroke="${h.bandColor}"`);
    if (ex.includes('headband')) s += A.path(`M${-R0 - 1} ${hy - R0 * 0.45} Q0 ${hy - R0 * 0.8} ${R0 + 1} ${hy - R0 * 0.45}`, 'none', 7, `stroke="${h.bandColor}"`);
    if (ex.includes('glasses')) s += A.circ(-12.5 * R0 / 34, hy + 3, 10, 'none', 2.5) + A.circ(12.5 * R0 / 34, hy + 3, 10, 'none', 2.5) + A.line(-3, hy + 2, 3, hy + 2, 2.5);
    if (ex.includes('bigglasses')) s += A.circ(-13, hy + 3, 14, 'rgba(200,240,255,.35)', 3.5) + A.circ(13, hy + 3, 14, 'rgba(200,240,255,.35)', 3.5) + A.line(-2, hy + 1, 2, hy + 1, 3);
    if (ex.includes('bindi')) s += A.circ(0, hy - 14, 2.8, C.red, 0);
    if (ex.includes('rectglasses')) s += A.rect(-12.5 * R0 / 34 - 10, hy - 4, 20, 15, 4, 'rgba(255,255,255,.18)', 3.2) + A.rect(12.5 * R0 / 34 - 10, hy - 4, 20, 15, 4, 'rgba(255,255,255,.18)', 3.2) + A.line(-2.5, hy + 1, 2.5, hy + 1, 3) + A.line(-R0 + 2, hy + 1, -12.5 * R0 / 34 - 10, hy + 1, 3) + A.line(R0 - 2, hy + 1, 12.5 * R0 / 34 + 10, hy + 1, 3);
    if (ex.includes('earrings')) s += A.circ(-R0 - 1, hy + 12, 3.5, C.yel, 1.5) + A.circ(R0 + 1, hy + 12, 3.5, C.yel, 1.5);
    if (ex.includes('nosering')) s += A.circ(5, hy + 12, 2.6, 'none', 1.5, `stroke="${C.yelD}"`);
    if (ex.includes('moustache')) s += A.path(`M0 ${hy + 13} q-8 -6 -16 0 q-6 4 -10 -2 M0 ${hy + 13} q8 -6 16 0 q6 4 10 -2`, 'none', 3.5, `stroke="${C.ink}"`);
    // arms last
    const sleeve = h.bottom === 'coat' || h.bottom === 'suit' ? h.bottomColor : null;
    for (const k of ['L', 'R']) {
      const a = r.arms[k];
      if (sleeve) s += A.limb([a.sh, a.el, a.hd], sleeve, 12);
      else {
        s += A.limb([a.sh, a.el, a.hd], h.skin, 10);
        const m = [a.sh[0] + (a.el[0] - a.sh[0]) * 0.55, a.sh[1] + (a.el[1] - a.sh[1]) * 0.55];
        s += A.limb([a.sh, m], h.bottom === 'dress' ? h.bottomColor : h.shirt, 14);
      }
      s += A.circ(a.hd[0], a.hd[1], 7.5, h.skin);
      if (ex.includes('bangles')) { const wx = a.el[0] + (a.hd[0] - a.el[0]) * 0.72, wyy = a.el[1] + (a.hd[1] - a.el[1]) * 0.72; s += A.circ(wx, wyy, 6.5, 'none', 2.8, `stroke="${h.bangleColor}"`); }
    }
    if (ex.includes('bag')) { const bx2 = cfg.hw + 12, by2 = hipY - 4; s += A.line(-cfg.sw + 4, shY - 2, bx2 - 4, by2 - 6, 3, '#6B3E22') + A.rect(bx2 - 12, by2 - 10, 22, 17, 4, '#8A5234', 2.5) + A.line(bx2 - 12, by2 - 3, bx2 + 10, by2 - 3, 1.5, '#5A3018'); }
    if (pose === 'blast' && id === 'gadbad') s += machineRay(r.arms.R.hd);
    const sc = cfg.scale || 1;
    const out = finish(s, [0, hy - R0 - (h.hair === 'wild' || h.hair === 'bun' ? 22 : 10)], r, cfg, hipY - cfg.torso / 2);
    if (sc !== 1) return { svg: `<g transform="scale(${sc})">${out.svg}</g>`, anchor: [out.anchor[0] * sc, out.anchor[1] * sc] };
    return out;
  }

  function machineRay(hd) {
    const [x, y] = hd;
    return A.rect(x - 6, y - 12, 30, 20, 5, C.grey) + A.rect(x + 20, y - 8, 14, 12, 3, C.pink) +
      [0, 1, 2].map(i => A.path(`M${x + 40 + i * 26} ${y - 14 - i * 6} q10 12 0 24`, 'none', 4, `stroke="${C.pink}"`)).join('');
  }

  /* ---------------- GLITCHY: purple robot ---------------- */
  function glitchy(pose, mood) {
    const cfg = { leg: 44, torso: 58, sw: 34, hw: 16, arm: 54, shIn: 8, flyRot: 60 };
    const r = rig(cfg, pose);
    const { hipY, shY } = r;
    let s = '';
    for (const k of ['L', 'R']) {
      const L = r.legs[k];
      s += A.limb([L.hp, L.kn, L.ft], C.greyD, 10);
      [0.3, 0.55, 0.8].forEach(t => { const p = [L.hp[0] + (L.ft[0] - L.hp[0]) * t, L.hp[1] + (L.ft[1] - L.hp[1]) * t]; s += A.ell(p[0], p[1], 11, 4, C.silverD, 2.5); });
      if (pose === 'fly') s += A.poly([[L.ft[0] - 9, L.ft[1] + 10], [L.ft[0], L.ft[1] + 44], [L.ft[0] + 9, L.ft[1] + 10]], '#FF4FD8', 3);
      s += A.rect(L.ft[0] - 16, L.ft[1] - 12, 32, 16, 4, C.purpleD);
    }
    const tt = shY - 10, tb = hipY + 8;
    s += A.rect(-38, tt, 76, tb - tt, 10, C.purple);
    s += `<rect x="-38" y="${tt}" width="76" height="${tb - tt}" rx="10" fill="url(#ht-dark)"/>`;
    s += A.poly(A.burstPts(0, (tt + tb) / 2, 14, 10, 8, 0), C.yel, 3) + A.circ(0, (tt + tb) / 2, 5, C.purpleD, 2);
    const top = shY - 84;
    s += A.path(`M0 ${top} l-6 -10 l10 -6 l-6 -10`, 'none', 4) + A.circ(-2, top - 30, 8, C.yel);
    s += A.rect(-46, top, 92, 76, 12, C.purple) + A.rect(-46, top, 92, 12, 6, C.purpleD, 0);
    s += A.rect(-36, top + 16, 72, 48, 10, '#2A0F3F');
    s += A.face(0, top + 38, 0.8, mood, { robot: true, eyeColor: '#FF4FD8', look: 1 });
    s += A.rect(-54, top + 26, 8, 22, 3, C.greyD) + A.rect(46, top + 26, 8, 22, 3, C.greyD);
    for (const k of ['L', 'R']) {
      const a = r.arms[k];
      s += A.limb([a.sh, a.el, a.hd], C.purpleD, 11);
      s += A.path(`M${a.hd[0] - 9} ${a.hd[1] - 4} l9 12 l9 -12`, 'none', 5, `stroke="${C.greyD}"`) + A.circ(a.hd[0], a.hd[1] - 2, 7, C.greyD);
    }
    if (pose === 'blast') { const [x, y] = r.arms.R.hd; s += [0, 1, 2, 3].map(i => A.path(`M${x + 20 + i * 30} ${y - 18} l10 12 l-8 4 l10 14`, 'none', 5, `stroke="#FF4FD8"`)).join(''); }
    return finish(s, [0, top - 40], r, cfg, -95);
  }

  /* ---------------- ZIBBO: tiny alien ---------------- */
  function zibbo(pose, mood) {
    const cfg = { leg: 26, torso: 40, sw: 18, hw: 9, arm: 34, shIn: 4, flyRot: 12 };
    const r = rig(cfg, pose);
    const { hipY, shY } = r;
    const G = '#6BD66B', GD = '#3E9E48';
    let s = '';
    if (pose === 'fly') s += A.ell(0, 8, 34, 8, C.cyan, 3, 'opacity=".8"');
    for (const k of ['L', 'R']) { const L = r.legs[k]; s += A.limb([L.hp, L.kn, L.ft], G, 9) + A.ell(L.ft[0], L.ft[1] - 3, 8, 5, C.silverD); }
    s += A.path(`M-22 ${shY + 2} Q-26 ${hipY + 10} 0 ${hipY + 10} Q26 ${hipY + 10} 22 ${shY + 2} Q0 ${shY - 8} -22 ${shY + 2} Z`, C.silver);
    s += A.circ(0, (shY + hipY) / 2 + 2, 5, C.cyan, 2);
    const hy = shY - 34;
    s += A.line(-16, hy - 30, -26, hy - 58, 3.5) + A.circ(-27, hy - 60, 7, C.pink) + A.line(16, hy - 30, 26, hy - 58, 3.5) + A.circ(27, hy - 60, 7, C.pink);
    s += A.ell(0, hy, 44, 38, G);
    s += A.circ(-26, hy - 16, 5, GD, 0) + A.circ(28, hy + 12, 4, GD, 0) + A.circ(18, hy - 26, 3.5, GD, 0);
    s += A.circ(0, hy - 24, 6, '#fff', 2.5) + A.circ(1, hy - 24, 3, C.ink, 0);
    s += A.face(0, hy + 4, 1.05, mood, { look: 1.4, eyeSpread: 1.1 });
    for (const k of ['L', 'R']) { const a = r.arms[k]; s += A.limb([a.sh, a.el, a.hd], G, 8) + A.circ(a.hd[0], a.hd[1], 6, G); }
    return finish(s, [0, hy - 64], r, cfg, -50);
  }

  /* ---------------- KICHDU: mud monster ---------------- */
  function kichdu(pose, mood) {
    const M = '#7A4E2D', ML = '#9C6A40';
    let s = '';
    s += A.ell(0, -4, 92, 12, '#5E3A1E', A.getLW() * 0.7);
    const body = `M-80 -6 C-86 -70 -60 -150 0 -154 C60 -150 86 -70 80 -6 Q66 6 56 -6 Q46 14 34 -4 Q22 10 10 -6 Q-2 12 -14 -6 Q-28 12 -40 -4 Q-54 10 -64 -4 Q-72 8 -80 -6 Z`;
    let armL = [[-70, -80], [-104, -60], [-112, -24]], armR = [[70, -80], [104, -60], [112, -24]];
    if (pose === 'cheer' || pose === 'wave') { armL = [[-66, -96], [-104, -120], [-110, -160]]; armR = [[66, -96], [104, -120], [110, -160]]; }
    if (pose === 'blast' || pose === 'point') armR = [[70, -90], [110, -100], [150, -104]];
    s += A.curveLimb(armL[0], armL[1], armL[2], M, 24) + A.curveLimb(armR[0], armR[1], armR[2], M, 24);
    s += A.path(body, M);
    s += `<path d="${body}" fill="url(#ht-big)"/>`;
    s += A.ell(-36, -110, 16, 10, ML, 0) + A.ell(40, -48, 12, 8, ML, 0) + A.ell(-50, -40, 8, 6, '#5E3A1E', 0);
    // litter stuck in the mud
    s += `<g transform="rotate(-25 52 -110)">${A.rect(40, -126, 22, 38, 6, '#BFE8FF', 3)}${A.rect(45, -134, 12, 9, 2, C.blue, 3)}</g>`;
    s += `<g transform="rotate(18 -58 -78)">${A.rect(-70, -92, 22, 28, 3, C.red, 3)}${A.line(-70, -84, -48, -84, 2.5, '#fff')}</g>`;
    s += A.path('M8 -150 q10 -26 26 -18 q-12 4 -14 18 Z', C.yel, 3);
    s += A.face(0, -98, 1.5, mood, { look: 2, eyeSpread: 1, noCheeks: true });
    if (pose === 'blast') s += A.circ(162, -104, 18, M) + A.circ(186, -110, 9, M) + A.circ(196, -94, 6, M);
    const lift = pose === 'cheer' ? 10 : 0;
    return { svg: `<g transform="translate(0 ${-lift})">${s}</g>`, anchor: [0, -164 - lift] };
  }

  /* ---------------- GARAJ: grumpy storm cloud ---------------- */
  function garaj(pose, mood) {
    const angry = mood === 'angry' || mood === 'determined';
    const col = angry ? '#6C7389' : mood === 'happy' || mood === 'laugh' ? '#C9D3E6' : C.grey;
    const puffs = [[0, -70, 52], [-50, -52, 38], [50, -52, 40], [-24, -104, 36], [28, -108, 40], [-82, -36, 26], [84, -38, 26]];
    let s = '';
    if (angry) s += A.poly([[-10, -20], [-34, 40], [-14, 36], [-30, 90], [16, 22], [-4, 26], [10, -20]], C.yel, 4);
    if (mood === 'sad' || mood === 'scared' || pose === 'blast') for (let i = 0; i < 9; i++) s += A.line(-70 + i * 18, -8 + (i % 3) * 10, -76 + i * 18, 18 + (i % 3) * 10, 4, C.water);
    s += puffs.map(p => A.circ(p[0], p[1], p[2], C.ink, 0, `stroke="${C.ink}" stroke-width="${A.getLW() * 2.2}"`)).join('');
    s += puffs.map(p => A.circ(p[0], p[1], p[2], col, 0)).join('');
    s += A.path('M-104 -26 Q0 -12 104 -26', 'none', 0);
    s += A.ell(-34, -112, 14, 7, '#fff', 0, 'opacity=".7"');
    s += A.face(0, -66, 1.35, mood, { look: 1, noCheeks: !(mood === 'happy' || mood === 'laugh') });
    if (angry) s += A.line(-30, -96, -8, -84, 5) + A.line(30, -96, 8, -84, 5);
    return { svg: s, anchor: [0, -150], floats: true };
  }

  /* ---------------- BHOLU: baby elephant (side view) ---------------- */
  function bholu(pose, mood) {
    const B = '#9DB2C8', BD = '#7F95AE', P = '#F4A7B9';
    let s = '';
    const sit = pose === 'sit', up = pose === 'cheer' || pose === 'wave', blast = pose === 'blast' || pose === 'point';
    const run = pose === 'run';
    s += A.path('M-62 -62 q-16 6 -14 26', 'none', 5) + A.circ(-76, -34, 5, C.ink, 0);
    const lg = (x, a, col) => A.limb([[x, -40], [x + Math.sin(rad(a)) * 20, -20], [x + Math.sin(rad(a)) * 40, 0]], col, 22);
    if (!sit) { s += lg(-30, run ? -25 : 0, BD) + lg(28, run ? 25 : 0, BD); }
    s += A.ell(-6, -64, 60, 44, B);
    s += `<ellipse cx="-6" cy="-64" rx="60" ry="44" fill="url(#ht-dark)" opacity=".6"/>`;
    if (sit) { s += A.ell(-40, -20, 24, 16, B) + A.ell(26, -22, 14, 20, B); }
    else { s += lg(-44, run ? 25 : 0, B) + lg(14, run ? -25 : 0, B); [-44, 14].forEach(x => s += A.path(`M${x - 8 + (run ? 0 : 0)} -4 q4 -5 8 0 q4 -5 8 0`, 'none', 2.5, 'stroke="#fff"')); }
    const hx = 46, hy = -94;
    // trunk
    if (up) s += A.curveLimb([hx + 26, hy + 14], [hx + 62, hy - 4], [hx + 58, hy - 52], B, 17) + [0, 1, 2, 3, 4].map(i => A.circ(hx + 40 + i * 9, hy - 70 - (i % 2) * 14, 5, C.cyan, 2)).join('');
    else if (blast) s += A.curveLimb([hx + 26, hy + 14], [hx + 60, hy + 18], [hx + 82, hy + 4], B, 17) + A.poly([[hx + 90, hy], [hx + 190, hy - 34], [hx + 190, hy + 34]], C.cyan, 3, 'opacity=".8"');
    else s += A.curveLimb([hx + 26, hy + 14], [hx + 58, hy + 30], [hx + 50, hy + 64], B, 17);
    s += A.circ(hx, hy, 40, B);
    s += A.path(`M${hx - 6} ${hy - 40} l-3 -10 M${hx + 2} ${hy - 40} l1 -12 M${hx + 10} ${hy - 39} l5 -9`, 'none', 3.5);
    const droop = mood === 'sad' || mood === 'scared' ? 24 : up ? -18 : 0;
    s += `<g transform="rotate(${droop} ${hx - 20} ${hy - 10})">${A.ell(hx - 24, hy + 2, 26, 34, B)}${A.ell(hx - 24, hy + 4, 16, 23, P, 0)}</g>`;
    s += A.face(hx + 12, hy - 2, 0.72, mood, { look: 1.6, eyeSpread: 0.9 });
    return { svg: s, anchor: [hx, hy - 50] };
  }

  /* ---------------- Animals (side / 3-quarter view) ---------------- */
  const legs4 = (xs, y0, len, col, w = 9) => xs.map(x => A.limb([[x, y0], [x, y0 + len]], col, w)).join('');
  const ANIMALS = {
    cat(mood, pose) {
      const O = '#FF9F43', OD = '#E07B1A';
      let s = A.path('M-34 -30 C-60 -40 -56 -80 -40 -84', 'none', 0) + A.curveLimb([-34, -28], [-62, -44], [-46, -82], O, 9);
      s += legs4([-22, -8, 10, 22], -22, 20, O) + A.ell(-6, -32, 32, 18, O);
      s += A.path('M-20 -46 l6 10 M-8 -48 l4 10', 'none', 3, `stroke="${OD}"`);
      s += A.poly([[10, -62], [14, -86], [28, -68]], O) + A.poly([[36, -68], [48, -86], [52, -62]], O);
      s += A.circ(30, -52, 22, O) + A.face(30, -50, 0.55, mood, { look: 1.4 });
      s += A.line(44, -46, 62, -50, 2) + A.line(44, -42, 62, -40, 2);
      return { svg: s, anchor: [30, -86] };
    },
    dog(mood, pose) {
      const D = '#C98B4F', W = '#FFF3E0';
      let s = A.curveLimb([-38, -44], [-54, -60], [-50, -78], D, 9);
      s += legs4([-26, -10, 12, 26], -30, 30, D, 10) + A.ell(-4, -44, 38, 22, D) + A.ell(0, -36, 22, 10, W, 0);
      s += A.circ(32, -64, 25, D) + A.ell(50, -56, 14, 10, W) + A.circ(62, -58, 5, C.ink, 0);
      s += A.ell(14, -62, 10, 20, '#7A4B26', undefined, 'transform="rotate(20 14 -62)"');
      s += A.face(30, -66, 0.6, mood, { look: 2 });
      if (mood === 'happy' || mood === 'laugh') s += A.ell(52, -42, 5, 8, C.tongue, 2);
      return { svg: s, anchor: [32, -96] };
    },
    parrot(mood, pose) {
      const G = '#2DBE4F', GD = '#1D8A36';
      const fly = pose === 'fly' || pose === 'cheer';
      let s = A.poly([[-8, -18], [-30, 20], [-14, 16], [-22, 34], [0, -10]], C.blue, 3);
      s += A.ell(0, -42, 18, 28, G);
      s += fly ? A.path('M-6 -50 Q-40 -110 -64 -84 Q-40 -70 -10 -36 Z', GD) + A.path('M6 -50 Q30 -112 56 -92 Q36 -70 10 -36 Z', GD) : A.path('M-12 -56 Q-26 -30 -10 -14 Q0 -30 -12 -56 Z', GD);
      s += A.circ(6, -72, 17, G) + A.path('M20 -78 Q36 -76 30 -58 Q24 -66 18 -66 Z', C.red, 3);
      s += A.face(6, -72, 0.42, mood, { look: 1.4, noCheeks: true });
      s += A.path('M-6 -14 l-4 10 M6 -14 l4 10', 'none', 3);
      return { svg: s, anchor: [6, -94], floats: fly };
    },
    monkey(mood, pose) {
      const M = '#9A6236', T = '#E8B888';
      let s = A.path('M-26 -30 C-70 -20 -70 -90 -44 -80', 'none', 7) + A.path('M-26 -30 C-70 -20 -70 -90 -44 -80', 'none', 4, `stroke="${M}"`);
      s += legs4([-12, 12], -30, 30, M, 11);
      s += A.ell(0, -46, 26, 30, M) + A.ell(0, -40, 16, 20, T, 0);
      const up = pose === 'cheer' || pose === 'wave';
      s += A.limb([[-20, -64], [-34, up ? -94 : -40], [-30, up ? -120 : -20]], M, 9) + A.limb([[20, -64], [34, up ? -94 : -40], [30, up ? -120 : -20]], M, 9);
      s += A.circ(-28, -96, 11, T) + A.circ(28, -96, 11, T);
      s += A.circ(0, -94, 26, M) + A.ell(0, -88, 20, 17, T, 0);
      s += A.face(0, -90, 0.62, mood, { look: 1.2 });
      return { svg: s, anchor: [0, -126] };
    },
    cow(mood, pose) {
      let s = A.curveLimb([-60, -80], [-74, -60], [-70, -40], '#fff', 5);
      s += legs4([-44, -20, 22, 44], -54, 54, '#fff', 13) + [-44, -20, 22, 44].map(x => A.rect(x - 8, -8, 16, 8, 2, C.ink, 0)).join('');
      s += A.ell(-4, -80, 64, 34, '#fff');
      s += A.path('M-40 -106 q-18 20 0 36 q20 6 18 -18 q-2 -18 -18 -18Z', C.ink, 0) + A.path('M20 -60 q14 -20 32 -6 q-6 14 -32 6Z', C.ink, 0);
      s += A.path('M44 -120 q-8 -18 4 -22 M84 -120 q8 -18 -4 -22', 'none', 6, `stroke="${C.sand}"`);
      s += A.circ(64, -98, 28, '#fff') + A.ell(68, -80, 20, 13, '#FFB3C1');
      s += A.circ(62, -80, 3, C.ink, 0) + A.circ(74, -80, 3, C.ink, 0);
      s += A.face(64, -106, 0.55, mood, { look: 1 }).replace(/<path d="M[^"]*Q[^"]*" fill="none" stroke="#16142B" stroke-width="[\d.]+" stroke-linecap="round"\/>$/, '');
      s += A.circ(48, -64, 9, C.yel) + A.line(48, -58, 48, -54, 3);
      return { svg: s, anchor: [64, -132] };
    },
    rabbit(mood, pose) {
      const lift = pose === 'cheer' || pose === 'run' ? 16 : 0;
      let s = A.circ(-24, -26, 9, '#fff') + A.ell(0, -28, 24, 26, '#fff');
      s += A.ell(-6, -104, 8, 26, '#fff') + A.ell(-6, -104, 4, 18, '#FFB3C1', 0) + A.ell(14, -106, 8, 26, '#fff', undefined, 'transform="rotate(14 14 -106)"');
      s += A.circ(6, -64, 20, '#fff') + A.face(6, -62, 0.5, mood, { look: 1.4 });
      s += A.ell(-4, -4, 12, 6, '#fff') + A.ell(18, -4, 12, 6, '#fff');
      return { svg: `<g transform="translate(0 ${-lift})">${s}</g>`, anchor: [6, -132 - lift] };
    },
    turtle(mood, pose) {
      let s = legs4([-24, 22], -12, 12, '#7BCB5B', 12);
      s += A.circ(44, -22, 14, '#7BCB5B') + A.face(46, -22, 0.36, mood, { look: 1.2, noCheeks: true });
      s += A.path('M-40 -10 C-40 -60 36 -60 36 -10 Z', C.greenD);
      s += A.path('M-20 -14 l6 -22 l18 0 l6 22 M-14 -36 l-12 -4 M10 -36 l10 -6', 'none', 3, 'stroke="#9BE07A"');
      s += A.rect(-44, -14, 84, 8, 4, '#C8A04A');
      return { svg: s, anchor: [40, -60] };
    },
    fish(mood, pose) {
      let s = A.poly([[-36, -50], [-62, -70], [-58, -50], [-62, -30]], C.orange);
      s += A.ell(-4, -50, 36, 24, C.orange) + A.path('M-10 -74 q12 -12 24 0', '#FFB36B', 3) + A.path('M-20 -50 q6 10 0 20 M-8 -52 q6 10 0 20', 'none', 3, 'stroke="#fff"');
      s += A.face(14, -52, 0.42, mood, { look: 1.4, noCheeks: true });
      return { svg: s, anchor: [10, -80], floats: true };
    },
    frog(mood, pose) {
      const G = '#56C95B';
      let s = A.ell(-20, -8, 18, 9, G) + A.ell(20, -8, 18, 9, G);
      s += A.ell(0, -30, 32, 24, G) + A.ell(0, -24, 20, 13, '#C9F59B', 0);
      s += A.circ(-16, -54, 12, G) + A.circ(16, -54, 12, G);
      s += A.face(0, -48, 0.6, mood, { look: 1, eyeSpread: 1.3, noCheeks: true });
      return { svg: s, anchor: [0, -70] };
    },
    owl(mood, pose) {
      const O = '#8A5A33', T = '#E8C9A0';
      const fly = pose === 'fly' || pose === 'cheer';
      let s = fly ? A.path('M-20 -60 Q-70 -110 -84 -60 Q-50 -64 -24 -40 Z', '#6B4426') + A.path('M20 -60 Q70 -110 84 -60 Q50 -64 24 -40 Z', '#6B4426') : '';
      s += A.ell(0, -48, 32, 44, O) + A.ell(0, -36, 20, 26, T, 0);
      s += A.poly([[-26, -84], [-20, -104], [-8, -88]], O) + A.poly([[26, -84], [20, -104], [8, -88]], O);
      s += A.circ(-13, -68, 13, T, 2) + A.circ(13, -68, 13, T, 2);
      s += A.face(0, -66, 0.75, mood, { look: 1, noCheeks: true }) + A.poly([[-4, -58], [4, -58], [0, -50]], C.orange, 2);
      s += A.path('M-10 -4 l-4 6 M-6 -4 l0 7 M6 -4 l0 7 M10 -4 l4 6', 'none', 3, `stroke="${C.orange}"`);
      return { svg: s, anchor: [0, -106], floats: fly };
    },
    lion(mood, pose) {
      const L = '#F2B33D', MN = '#C8641E';
      let s = A.curveLimb([-60, -70], [-90, -70], [-94, -100], L, 7) + A.circ(-94, -104, 9, MN);
      s += legs4([-44, -20, 24, 46], -52, 52, L, 15) + A.ell(-6, -76, 62, 32, L);
      s += A.poly(A.burstPts(52, -110, 48, 34, 13, 0), MN);
      s += A.circ(52, -108, 30, L) + A.ell(52, -94, 12, 8, '#F7D48C', 0) + A.poly([[46, -100], [58, -100], [52, -93]], C.ink, 0);
      s += A.face(52, -110, 0.68, mood, { look: 1.2 });
      return { svg: s, anchor: [52, -162] };
    },
    penguin(mood, pose) {
      const up = pose === 'cheer' || pose === 'wave' || pose === 'fly';
      let s = A.ell(-14, -2, 14, 6, C.orange) + A.ell(14, -2, 14, 6, C.orange);
      s += A.path(`M-28 -30 Q${up ? -58 : -44} ${up ? -70 : -40} ${up ? -44 : -34} ${up ? -80 : -10}`, 'none', 14, `stroke="${C.ink}"`);
      s += A.path(`M28 -30 Q${up ? 58 : 44} ${up ? -70 : -40} ${up ? 44 : 34} ${up ? -80 : -10}`, 'none', 14, `stroke="${C.ink}"`);
      s += A.ell(0, -50, 32, 48, '#23233A') + A.ell(0, -42, 22, 36, '#fff', 0);
      s += A.face(0, -72, 0.6, mood, { look: 1 }) + A.poly([[-6, -62], [6, -62], [0, -52]], C.orange, 2);
      return { svg: s, anchor: [0, -106] };
    },
    dolphin(mood, pose) {
      const D = '#6FA8DC';
      let s = A.path('M-70 -40 C-50 -120 50 -130 76 -80 Q86 -70 96 -72 Q86 -62 70 -64 C40 -100 -20 -90 -52 -30 Z', D);
      s += A.poly([[-62, -38], [-94, -30], [-80, -56]], D) + A.poly([[0, -106], [-10, -130], [16, -110]], D);
      s += A.path('M-40 -44 C-10 -80 30 -84 60 -70', 'none', 4, 'stroke="#EAF4FF"');
      s += A.face(50, -86, 0.45, mood, { look: 1.4, noCheeks: true });
      return { svg: s, anchor: [40, -130], floats: true };
    },
    peacock(mood, pose) {
      const B = '#1E5BD6', T = '#1FA67A';
      let s = '';
      for (let i = 0; i < 11; i++) { const a = rad(200 + i * 14); const x = -24 + Math.cos(a) * 92, y = -70 + Math.sin(a) * 92; s += A.line(-24, -60, x, y, 3, C.greenD) + A.circ(x, y, 13, T, 3) + A.circ(x, y, 6, B, 0) + A.circ(x, y, 2.5, C.yel, 0); }
      s += legs4([-8, 8], -24, 24, C.orange, 4);
      s += A.ell(0, -44, 22, 28, B) + A.path('M6 -64 Q12 -96 20 -104', 'none', 16, `stroke="${C.ink}"`) + A.path('M6 -64 Q12 -96 20 -104', 'none', 10, `stroke="${B}"`);
      s += A.circ(22, -108, 13, B) + A.poly([[32, -110], [44, -106], [32, -102]], C.yel, 2);
      s += [0, 1, 2].map(i => A.line(20, -120, 12 + i * 8, -136, 2) + A.circ(12 + i * 8, -137, 3, B, 0)).join('');
      s += A.face(24, -108, 0.34, mood, { look: 1.2, noCheeks: true });
      return { svg: s, anchor: [22, -150] };
    },
  };

  A.CHAR_IDS = ['auggi', 'mira', 'bholu', 'dadi', 'rohan', 'anaya', 'kabir', 'zoya', 'zibbo', 'gadbad', 'glitchy', 'kichdu', 'garaj', ...Object.keys(ANIMALS)];

  // Main entry: returns {svg, anchor:[x,y] (bubble target), floats}
  A.char = (id, pose = 'stand', mood = 'happy', opt = {}) => {
    if (A.EXTRA && A.EXTRA[id]) return A.EXTRA[id](pose, mood, opt);
    if (id === 'auggi') return auggi(pose, mood);
    if (HUMANS[id]) return human(id, pose, mood);
    if (id === 'glitchy') return glitchy(pose, mood);
    if (id === 'zibbo') return zibbo(pose, mood);
    if (id === 'kichdu') return kichdu(pose, mood);
    if (id === 'garaj') return garaj(pose, mood);
    if (id === 'bholu') return bholu(pose, mood);
    if (ANIMALS[id]) return ANIMALS[id](mood, pose);
    return auggi(pose, mood);
  };
  // Relative display size of each character (1 = kid height)
  A.CHAR_SIZE = { auggi: 1, mira: 1, rohan: 1, anaya: 1, kabir: 1, zoya: 1, dadi: 1, gadbad: 1, glitchy: 1, zibbo: 1, kichdu: 1.05, garaj: 1, bholu: 1.05, cat: 0.9, dog: 0.95, parrot: 0.95, monkey: 0.95, cow: 1.1, rabbit: 0.9, turtle: 0.95, fish: 0.95, frog: 0.95, owl: 0.95, lion: 1.1, penguin: 0.95, dolphin: 1, peacock: 1, bhootu: 0.85, missji: 1 };
})();
