/* Auggie Comics — read-aloud.
   Two child voices (girl / boy) in English and Hindi, built on the voices installed in the reader's browser.
   Picks the most natural voice available (Microsoft "Natural", Google, Apple premium), speaks sentence by
   sentence with small pauses, and gives each character a gentle pitch variation instead of a robotic one.
   Optional: set window.AUGGIE_TTS = { url } to fetch studio-quality audio from your own text-to-speech
   server (POST JSON {text, lang, style} → audio/mpeg). */
(function () {
  const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
  const SP = (window.AuggiSpeech = {});

  // ---------- voices ----------
  const FEMALE = /female|woman|girl|samantha|karen|moira|tessa|fiona|veena|lekha|kiyara|swara|neerja|ananya|aditi|kajal|heera|zira|aria|jenny|sonia|libby|natasha|hazel|susan|catherine|allison|ava|nicky|sara|siri.*female|कल्पना|लेखा/i;
  const MALE = /male|man|boy|daniel|rishi|alex|fred|tom|arthur|george|ryan|thomas|william|guy|davis|prabhat|madhur|hemant|ravi|kumar|oliver|james|christopher|eric|siri.*male/i;
  const quality = v => {
    const nm = v.name;
    let q = 0;
    if (/natural/i.test(nm)) q += 40;               // Microsoft Edge neural voices
    if (/google/i.test(nm)) q += 30;                // Chrome network voices
    if (/premium|enhanced|siri/i.test(nm)) q += 25; // Apple higher-quality voices
    if (/online/i.test(nm)) q += 6;
    if (/compact|espeak|eloquence|novelty|bad news|bells|boing|bubbles|cellos|deranged|hysterical|trinoids|whisper|zarvox|jester|organ|superstar|wobble/i.test(nm)) q -= 60;
    if (v.localService === false) q += 4;
    return q;
  };
  const langOf = v => (v.lang || '').toLowerCase().replace('_', '-');
  const voicesFor = lang => (synth ? synth.getVoices() : []).filter(v => langOf(v).startsWith(lang === 'hi' ? 'hi' : 'en'));

  let voicesPromise = null;
  SP.ready = () => {
    if (!synth) return Promise.resolve([]);
    if (synth.getVoices().length) return Promise.resolve(synth.getVoices());
    if (!voicesPromise) voicesPromise = new Promise(res => {
      let done = false;
      const fin = () => { if (!done) { done = true; res(synth.getVoices()); } };
      synth.addEventListener('voiceschanged', fin, { once: true });
      setTimeout(fin, 1500);
    });
    return voicesPromise;
  };

  // style: 'girl' | 'boy'
  SP.pick = (lang, style) => {
    const list = voicesFor(lang);
    if (!list.length) return null;
    const wantF = style !== 'boy';
    const score = v => {
      let s = quality(v);
      const f = FEMALE.test(v.name), m = MALE.test(v.name);
      if (wantF ? f : m) s += 20; else if (wantF ? m : f) s -= 20;
      if (lang === 'en' && /in\b|india/i.test(langOf(v) + ' ' + v.name)) s += 8; // Indian English first
      if (lang === 'hi' && langOf(v) === 'hi-in') s += 8;
      return s;
    };
    return list.slice().sort((a, b) => score(b) - score(a))[0];
  };
  SP.hasVoice = lang => voicesFor(lang).length > 0;
  SP.voiceName = (lang, style) => { const v = SP.pick(lang, style); return v ? v.name.replace(/\s*\(.*\)/, '') : ''; };

  // ---------- delivery ----------
  // Gentle per-character offsets around the chosen child voice (0 = as chosen). Big changes sound robotic.
  const OFFSET = {
    narrator: 0, auggie: 0.06, moti: 0.02, pinku: 0.12, snowy: -0.04, chiku: 0.14, rohan: 0.04, anaya: 0.08, kabir: 0.12, zoya: 0.06,
    bhootu: 0.16, zibbo: 0.16, bholu: 0.08, mumma: -0.06, mausi: 0.0, dadi: -0.12, missji: -0.04, papa: -0.22, nanu: -0.28, gadbad: -0.1, kichdu: -0.3, garaj: -0.34,
  };
  const splitSentences = text => String(text).replace(/[—–]/g, ', ').replace(/\.\.\./g, '…').split(/(?<=[.!?।…])\s+/).map(s => s.trim()).filter(Boolean);

  let keep = [];   // Chrome drops utterances that get garbage-collected
  let active = false, token = 0;

  // iPhone/iPad Safari only lets speech start from inside the tap itself. Call this synchronously in the click
  // handler: it speaks a silent, empty utterance so the later (async) speech is allowed to play.
  let unlocked = false;
  SP.unlock = () => {
    if (!synth || unlocked) return;
    try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; u.rate = 2; synth.speak(u); unlocked = true; } catch (e) { /* ignore */ }
  };

  SP.stop = () => { active = false; token++; keep = []; if (synth) synth.cancel(); if (SP.audio) { SP.audio.pause(); SP.audio = null; } };
  SP.isSpeaking = () => active;

  // lines: [{text, who}], opts: {lang, style ('girl'|'boy'), age, onEnd, onStart}
  SP.speak = async (lines, opts) => {
    SP.stop();
    const my = ++token;
    if (window.AUGGIE_TTS && window.AUGGIE_TTS.url) return speakServer(lines, opts, my);
    if (!synth) { opts.onEnd && opts.onEnd('unsupported'); return; }
    await SP.ready();
    if (my !== token) return;
    const voice = SP.pick(opts.lang, opts.style);
    if (!voice && opts.lang === 'hi') { opts.onEnd && opts.onEnd('no-hindi-voice'); return; }
    const female = voice ? FEMALE.test(voice.name) || !MALE.test(voice.name) : true;
    // a child sounds a little higher than the adult voice we have; a boy a little lower than a girl
    const base = opts.style === 'boy' ? (female ? 0.98 : 1.12) : (female ? 1.16 : 1.3);
    const rate = (opts.age === '4-6' ? 0.9 : 0.96);
    const units = [];
    lines.forEach(l => splitSentences(l.text).forEach((s, i, arr) => units.push({ text: s, who: l.who, last: i === arr.length - 1 })));
    if (!units.length) { opts.onEnd && opts.onEnd('empty'); return; }
    active = true; opts.onStart && opts.onStart();
    keep = [];
    let idx = 0;
    const next = () => {
      if (my !== token) return;
      if (idx >= units.length) { active = false; opts.onEnd && opts.onEnd('done'); return; }
      const u0 = units[idx++];
      const u = new SpeechSynthesisUtterance(u0.text);
      u.lang = opts.lang === 'hi' ? 'hi-IN' : (voice && langOf(voice).startsWith('en') ? voice.lang : 'en-IN');
      if (voice) u.voice = voice;
      u.pitch = Math.max(0.6, Math.min(1.6, base + (OFFSET[u0.who] || 0)));
      u.rate = rate * (u0.who === 'narrator' ? 0.97 : 1);
      u.volume = 1;
      const pause = u0.last ? 420 : 160;
      u.onend = () => setTimeout(next, pause);
      u.onerror = e => { if (e.error === 'interrupted' || e.error === 'canceled') return; setTimeout(next, 100); };
      keep.push(u);
      synth.speak(u);
    };
    // Chrome needs a beat after cancel() before it will honour a new speak(); when nothing was playing, start at once
    // (staying close to the tap keeps iPhone/iPad Safari happy)
    if (synth.speaking || synth.pending) setTimeout(next, 80); else next();
  };

  // Optional server-side TTS (studio voices). Expects audio/mpeg (or any <audio>-playable) in the response body.
  async function speakServer(lines, opts, my) {
    active = true; opts.onStart && opts.onStart();
    try {
      for (const l of lines) {
        if (my !== token) return;
        const res = await fetch(window.AUGGIE_TTS.url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: l.text, lang: opts.lang, style: opts.style, who: l.who }) });
        if (!res.ok) throw new Error('tts ' + res.status);
        const blob = await res.blob();
        if (my !== token) return;
        await new Promise((resolve, reject) => {
          const a = new Audio(URL.createObjectURL(blob));
          SP.audio = a; a.onended = resolve; a.onerror = reject; a.play().catch(reject);
        });
        await new Promise(r => setTimeout(r, 350));
      }
      if (my === token) { active = false; opts.onEnd && opts.onEnd('done'); }
    } catch (e) {
      active = false; opts.onEnd && opts.onEnd('error');
    }
  }
})();
