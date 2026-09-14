/* Auggie Comics — Bhootu, the tiny friendly ghost. Floats; feet at y = 0 is where his tail-wisp ends. */
(function () {
  const A = window.AuggiArt, C = A.C, n = A.n;
  A.EXTRA = A.EXTRA || {};
  const sp = A.spline, shade = A.shade, INK = C.ink;
  const F = (d, fill, ow = 2.4, extra = '') => `<path d="${d}" fill="${fill}" stroke="${INK}" stroke-width="${ow}" stroke-linejoin="round" stroke-linecap="round"${extra ? ' ' + extra : ''}/>`;
  const Fn = (d, fill, extra = '') => `<path d="${d}" fill="${fill}"${extra ? ' ' + extra : ''}/>`;
  const L = (d, sw = 1.3, col = INK, extra = '') => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${extra ? ' ' + extra : ''}/>`;
  const E = (cx, cy, rx, ry, fill, sw = 0, extra = '') => `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${fill}"${sw ? ` stroke="${INK}" stroke-width="${sw}"` : ''}${extra ? ' ' + extra : ''}/>`;

  function bhootu(pose, mood) {
    const W = '#F4F1FF', WS = '#C9C2EA';
    const up = pose === 'cheer' || pose === 'fly', wave = pose === 'wave' || pose === 'point', hide = mood === 'scared', tilt = pose === 'think' ? 12 : 0;
    const lift = pose === 'cheer' ? 14 : pose === 'run' ? 8 : 0;
    let s = '';
    // body: rounded top, wavy hem
    const body = `M-44 -70 C-44 -122 44 -122 44 -70 L46 -30 Q40 -14 32 -28 Q24 -6 14 -24 Q4 -4 -6 -24 Q-16 -6 -26 -26 Q-36 -10 -46 -30 Z`;
    const id = A.uid('gh');
    s += `<clipPath id="${id}"><path d="${body}"/></clipPath>` + Fn(body, W) + `<g clip-path="url(#${id})">` + Fn('M8 -130 L60 -130 L60 0 L2 0 Q22 -60 8 -130 Z', 'rgba(60,40,120,.18)') + `<path d="M8 -130 L60 -130 L60 0 L2 0 Z" fill="url(#ht-dark)" opacity=".5"/>` + E(-18, -96, 12, 5, '#fff', 0, 'opacity=".7"') + `</g>` + F(body, 'none', 2.6);
    // arms (stubby)
    const arm = (sd, ang) => { const ax = sd * 40, ay = -62; const ex = ax + sd * Math.cos(ang) * 30, ey = ay - Math.sin(ang) * 30; return A.taper([[ax, ay], [ex, ey]], [16, 12], W, { ow: 2.2, shadowColor: WS }); };
    s += arm(-1, up ? 1.2 : hide ? 1.3 : 0.1) + arm(1, up || wave ? 1.3 : hide ? 1.3 : -0.2);
    // face
    const eyeY = -84, ex = 15;
    if (hide) {
      s += E(-14, -60, 12, 9, W, 2) + E(14, -60, 12, 9, W, 2); // hands over the mouth
      for (const sd of [-1, 1]) s += E(sd * ex, eyeY, 7, 8, '#fff', 1.6) + E(sd * ex, eyeY + 1, 3.4, 3.8, '#2A1E4A') + E(sd * ex - 1.2, eyeY - 1.5, 1.2, 1.2, '#fff');
      s += L(`M-24 -100 q10 -6 18 2 M24 -100 q-10 -6 -18 2`, 1.8);
    } else if (mood === 'sleepy' || mood === 'laugh') {
      const upA = mood === 'laugh';
      for (const sd of [-1, 1]) s += L(`M${n(sd * ex - 7)} ${n(eyeY + (upA ? 2 : -2))} Q${n(sd * ex)} ${n(eyeY + (upA ? -8 : 5))} ${n(sd * ex + 7)} ${n(eyeY + (upA ? 2 : -2))}`, 2);
    } else {
      const big = mood === 'surprised' ? 1.25 : 1;
      for (const sd of [-1, 1]) s += E(sd * ex, eyeY, 8 * big, 9.5 * big, '#fff', 1.6) + E(sd * ex + 1, eyeY + 1, 4.2 * big, 4.8 * big, '#2A1E4A') + E(sd * ex - 0.6, eyeY - 1.8, 1.5, 1.5, '#fff');
      const bt = mood === 'sad' ? 3 : mood === 'angry' || mood === 'determined' ? -3 : 0;
      for (const sd of [-1, 1]) s += L(`M${n(sd * ex - 7)} ${n(eyeY - 13 - sd * bt * 0)} Q${n(sd * ex)} ${n(eyeY - 16 - bt)} ${n(sd * ex + 7)} ${n(eyeY - 13 + (sd > 0 ? -bt : bt))}`, 1.8);
    }
    // cheeks + mouth
    s += E(-24, -70, 6, 3.5, '#F6A0B8', 0, 'opacity=".6"') + E(24, -70, 6, 3.5, '#F6A0B8', 0, 'opacity=".6"');
    if (mood === 'laugh' || mood === 'happy') s += F(`M-10 -68 Q0 -54 10 -68 Z`, '#4E161C', 1.6) + (mood === 'laugh' ? E(0, -60, 5, 3, '#EE7F95') : '');
    else if (mood === 'surprised' || pose === 'blast') s += E(0, -64, 5, 6.5, '#4E161C', 1.6);
    else if (mood === 'sad') s += L('M-8 -62 Q0 -69 8 -62', 1.8);
    else if (mood === 'angry') s += L('M-8 -64 L8 -64', 1.8);
    else s += L('M-7 -66 Q0 -61 7 -66', 1.8);
    if (mood === 'sad') s += F('M-22 -74 q-2.5 5 0 7 q2.5 -2 0 -7 Z', '#8FD3FF', 0.9);
    if (mood === 'sleepy') s += L('M40 -120 h8 l-8 8 h8', 1.8) + L('M52 -136 h10 l-10 10 h10', 1.8);
    if (pose === 'blast') s += [0, 1, 2].map(i => L(`M${n(30 + i * 9)} ${n(-72 - i * 3)} q6 8 0 16`, 1.8)).join('');
    // little wisp under the hem + glow
    s += L('M2 -22 q-10 10 0 20', 2, WS);
    let out = `<circle cx="0" cy="-70" r="66" fill="url(#glow-c)" opacity=".18"/>` + s;
    if (tilt) out = `<g transform="rotate(${tilt} 0 -70)">${out}</g>`;
    return { svg: `<g transform="translate(0 ${-lift})">${out}</g>`, anchor: [0, -128 - lift], floats: true };
  }
  A.EXTRA.bhootu = (pose, mood) => bhootu(pose, mood);
})();
