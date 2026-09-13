/* Auggie Comics — site UI: library, reader, heroes, language, favourites, read-aloud, PDF. */
(function () {
  const K = window.AuggiComic;
  const COMICS = (window.AUGGIE_COMICS || []).slice().sort((a, b) => a.id - b.id);
  const byId = new Map(COMICS.map(c => [c.id, c]));
  const app = document.getElementById('app');

  const store = {
    get(k, d) { try { const v = localStorage.getItem('auggie:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('auggie:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };
  const S = {
    lang: store.get('lang', 'en') === 'hi' ? 'hi' : 'en',
    age: 'all', cat: 'all', q: '', favOnly: false,
    favs: new Set(store.get('favs', [])), read: new Set(store.get('read', [])),
  };

  const UI = {
    en: {
      comicsTag: 'COMICS', library: 'Library', heroes: 'Meet the Heroes',
      eyebrow: n => `${n} original comics · English + हिंदी · free PDFs`,
      heroTitle: 'Woof-woof! Big adventures with a golden hero.',
      lede: 'Auggie is a big-hearted golden Labrador who lives with Papa, Mumma, Mausi, Nanu and Dadi. Travel with him, sniff out mysteries and make new animal friends — every story in English and Hindi.',
      little: 'Little Readers', littleSub: 'Age 4–6 · 6 panels', big: 'Big Readers', bigSub: 'Age 6–10 · 8 panels', all: 'All comics', allSub: 'Every age',
      search: 'Search by title, hero or topic…', favs: 'Favourites', count: n => `${n} ${n === 1 ? 'comic' : 'comics'}`,
      allCats: 'All topics', empty: 'No comics match. Try another topic or clear the search.', emptyFav: 'Tap the star on any comic to keep it here.',
      age: 'Age', panels: 'panels', read: 'Read', addFav: 'Add to favourites', removeFav: 'Remove from favourites',
      back: 'Library', readAloud: 'Read to me', stop: 'Stop reading', download: 'Download PDF', making: (p, t) => `Making PDF… ${p}/${t}`,
      saved: 'PDF saved.', declined: 'Download cancelled.', pdfError: 'Could not make the PDF.',
      prev: 'Previous page', next: 'Next page', pageOf: (p, t) => `Page ${p} of ${t}`, readNext: 'Read next', keys: 'Tip: use the ← → keys or swipe to turn pages.',
      notFound: 'That comic does not exist yet.', heroesTitle: 'Meet the Heroes', heroesLede: 'Auggie, his family and his friends. Tap a name to read their stories.',
      footer: 'Every story and drawing here is original. Free to read, free to download — no sign-up needed.', cover: 'Cover', end: 'The End',
      noVoice: 'Your browser cannot read aloud.', catch: 'Woof-woof, let’s go!', voice: 'Voice',
    },
    hi: {
      comicsTag: 'कॉमिक्स', library: 'लाइब्रेरी', heroes: 'हीरो से मिलो',
      eyebrow: n => `${n} नई कॉमिक्स · हिंदी + English · मुफ़्त PDF`,
      heroTitle: 'भौं-भौं! एक सुनहरे हीरो के साथ बड़े कारनामे।',
      lede: 'ऑगी एक बड़े दिल वाला सुनहरा लैब्राडोर है, जो पापा, मम्मा, मौसी, नानू और दादी के साथ रहता है। उसके साथ घूमो, रहस्य सूँघकर सुलझाओ और नए जानवर दोस्त बनाओ — हर कहानी हिंदी और अंग्रेज़ी में।',
      little: 'नन्हे पाठक', littleSub: 'उम्र 4–6 · 6 चित्र', big: 'बड़े पाठक', bigSub: 'उम्र 6–10 · 8 चित्र', all: 'सभी कॉमिक्स', allSub: 'हर उम्र',
      search: 'नाम, हीरो या विषय से खोजो…', favs: 'पसंदीदा', count: n => `${n} कॉमिक्स`,
      allCats: 'सभी विषय', empty: 'कोई कॉमिक नहीं मिली। दूसरा विषय चुनो या खोज साफ़ करो।', emptyFav: 'किसी भी कॉमिक पर तारा दबाओ, वह यहाँ दिखेगी।',
      age: 'उम्र', panels: 'चित्र', read: 'पढ़ ली', addFav: 'पसंदीदा में जोड़ो', removeFav: 'पसंदीदा से हटाओ',
      back: 'लाइब्रेरी', readAloud: 'पढ़कर सुनाओ', stop: 'रोको', download: 'PDF डाउनलोड करो', making: (p, t) => `PDF बन रही है… ${p}/${t}`,
      saved: 'PDF सेव हो गई।', declined: 'डाउनलोड रद्द हुआ।', pdfError: 'PDF नहीं बन पाई।',
      prev: 'पिछला पेज', next: 'अगला पेज', pageOf: (p, t) => `पेज ${p} / ${t}`, readNext: 'आगे पढ़ो', keys: 'सुझाव: पेज पलटने के लिए ← → बटन दबाओ या स्वाइप करो।',
      notFound: 'यह कॉमिक अभी नहीं है।', heroesTitle: 'हीरो से मिलो', heroesLede: 'ऑगी, उसका परिवार और उसके दोस्त। नाम पर टैप करके उनकी कहानियाँ पढ़ो।',
      footer: 'यहाँ की हर कहानी और हर चित्र नया और मौलिक है। पढ़ना मुफ़्त, डाउनलोड मुफ़्त — कोई साइन-अप नहीं।', cover: 'कवर', end: 'समाप्त',
      noVoice: 'आपका ब्राउज़र पढ़कर नहीं सुना सकता।', catch: 'भौं-भौं, चलो चलें!', voice: 'आवाज़',
    },
  };
  const t = (k, ...a) => { const v = UI[S.lang][k]; return typeof v === 'function' ? v(...a) : v; };

  const CATS = {
    home: ['Home', 'घर'], habits: ['Good Habits', 'अच्छी आदतें'], feelings: ['Feelings', 'भावनाएँ'], family: ['Family', 'परिवार'],
    friends: ['Friends', 'दोस्ती'], dogs: ['Dog Friends', 'कुत्ते दोस्त'], animals: ['Animals', 'जानवर'], birds: ['Birds', 'पंछी'],
    festivals: ['Festivals', 'त्योहार'], travel: ['Travel', 'सैर-सपाटा'], nature: ['Nature', 'प्रकृति'], superhero: ['Super Auggie', 'सुपर ऑगी'],
    mystery: ['Mysteries', 'रहस्य'], sports: ['Sports', 'खेल'], science: ['Science', 'विज्ञान'], planet: ['Save the Planet', 'धरती बचाओ'],
    space: ['Space', 'अंतरिक्ष'], india: ['India', 'भारत'],
  };
  const catName = c => (CATS[c] ? CATS[c][S.lang === 'hi' ? 1 : 0] : c);

  const HEROES = [
    { id: 'auggie', bg: 'park', pose: 'sit', mood: 'happy', name: ['Auggie', 'ऑगी'], role: ['The golden hero', 'सुनहरा हीरो'], bio: ['A big, gentle Labrador with floppy ears and a smile that never stops. Loves naps on the big bed, lake walks, swimming and carrots. When a friend needs help, Mumma ties on his red cape: Super Auggie!', 'बड़े-बड़े कानों वाला प्यारा लैब्राडोर, जिसकी मुस्कान कभी ख़त्म नहीं होती। बड़े पलंग पर झपकी, झील की सैर, तैरना और गाजर उसे बहुत पसंद हैं। जब किसी दोस्त को मदद चाहिए, मम्मा उसकी लाल केप बाँधती हैं: सुपर ऑगी!'] },
    { id: 'papa', bg: 'beach', pose: 'wave', mood: 'laugh', name: ['Papa · Gaurav', 'पापा · गौरव'], role: ['Mumma calls him “Mittsy”', 'मम्मा उन्हें “मिट्सी” बुलाती हैं'], bio: ['Loves travel, beaches and bad jokes. Works on his laptop while Auggie snores right beside him.', 'सैर, समुद्र-तट और मज़ेदार चुटकुलों के शौक़ीन। लैपटॉप पर काम करते हैं और ऑगी बगल में खर्राटे लेता है।'] },
    { id: 'mumma', bg: 'beach', pose: 'cheer', mood: 'laugh', name: ['Mumma · Apurva', 'मम्मा · अपूर्वा'], role: ['Papa calls her “Mottu” and “Baby”', 'पापा उन्हें “मोटू” और “बेबी” बुलाते हैं'], bio: ['Plans every adventure and loves Auggie the most. Her laugh is the loudest in all of Chamakpur.', 'हर सैर की योजना बनाती हैं और ऑगी को सबसे ज़्यादा प्यार करती हैं। पूरे चमकपुर में सबसे ज़ोरदार हँसी उन्हीं की है।'] },
    { id: 'mausi', bg: 'cafe', pose: 'point', mood: 'happy', name: ['Mausi · Shambhavi', 'मौसी · शांभवी'], role: ['Mumma calls her “Chottu”', 'मम्मा उन्हें “छोटू” बुलाती हैं'], bio: ['Café lover, selfie queen and Auggie’s trick teacher. Sit! Paw! Pose for the camera!', 'कैफ़े की दीवानी, सेल्फ़ी की रानी और ऑगी की ट्रिक-टीचर। बैठो! पंजा! कैमरे के लिए पोज़!'] },
    { id: 'nanu', bg: 'garden', pose: 'stand', mood: 'happy', name: ['Nanu · Ashok', 'नानू · अशोक'], role: ['Mumma calls him “Daddy”', 'मम्मा उन्हें “डैडी” बुलाती हैं'], bio: ['A smart gentleman in a blue suit who has a science fact for everything, and long morning walks with Auggie.', 'नीले सूट वाले समझदार सज्जन, जिनके पास हर बात का एक विज्ञान वाला जवाब है, और ऑगी के साथ लंबी सुबह की सैर।'] },
    { id: 'dadi', bg: 'home', pose: 'wave', mood: 'laugh', name: ['Dadi · Krishna', 'दादी · कृष्णा'], role: ['Papa calls her “Mummy” and “Ma”', 'पापा उन्हें “मम्मी” और “माँ” बुलाते हैं'], bio: ['Colourful sarees, jingly bangles, the best stories — and a secret carrot for Auggie.', 'रंग-बिरंगी साड़ियाँ, खनकती चूड़ियाँ, सबसे अच्छी कहानियाँ — और ऑगी के लिए एक छुपी हुई गाजर।'] },
    { id: 'moti', bg: 'city', pose: 'stand', mood: 'determined', name: ['Moti', 'मोती'], role: ['Street-smart best friend', 'गलियों का होशियार दोस्त'], bio: ['A brave Indie dog who knows every lane of Chamakpur.', 'बहादुर देसी कुत्ता, जो चमकपुर की हर गली जानता है।'] },
    { id: 'pinku', bg: 'home', pose: 'sit', mood: 'surprised', name: ['Pinku', 'पिंकू'], role: ['The dramatic pug', 'नाटकबाज़ पग'], bio: ['Snorts, sulks and loves being the centre of attention.', 'फुँफकारता है, रूठता है और सबका ध्यान चाहता है।'] },
    { id: 'snowy', bg: 'snow', pose: 'stand', mood: 'happy', name: ['Snowy', 'स्नोवी'], role: ['The mountain husky', 'पहाड़ों वाला हस्की'], bio: ['Howls instead of barking. Loves snow, hates the summer heat.', 'भौंकने की जगह हूँ-हूँ करता है। बर्फ़ पसंद, गर्मी नापसंद।'] },
    { id: 'chiku', bg: 'playground', pose: 'run', mood: 'laugh', name: ['Chiku', 'चीकू'], role: ['Tiny, speedy, curious', 'छोटा, तेज़, जिज्ञासु'], bio: ['A little dachshund who is always first to the finish line.', 'छोटा-सा डैशहुंड, जो हर रेस में सबसे पहले पहुँचता है।'] },
    { id: 'bholu', bg: 'river', pose: 'cheer', mood: 'laugh', name: ['Bholu', 'भोलू'], role: ['Baby elephant pal', 'नन्हा हाथी दोस्त'], bio: ['Lives at the elephant sanctuary and loves trunk-showers.', 'हाथी अभयारण्य में रहता है और सूँड से फुहार डालना पसंद करता है।'] },
    { id: 'gadbad', bg: 'lab', pose: 'blast', mood: 'laugh', name: ['Professor Gadbad', 'प्रोफ़ेसर गड़बड़'], role: ['Inventor next door', 'पड़ोसी आविष्कारक'], bio: ['His gadgets always go wrong. He always says sorry.', 'इनकी मशीनें हमेशा गड़बड़ करती हैं। ये हमेशा सॉरी बोलते हैं।'], villain: true },
    { id: 'kichdu', bg: 'river', pose: 'cheer', mood: 'angry', name: ['Kichdu', 'किचडू'], role: ['The litter mud-monster', 'कचरे वाला कीचड़-राक्षस'], bio: ['Grows when people litter, shrinks when places are cleaned.', 'कचरा फैले तो बड़ा होता है, सफ़ाई हो तो छोटा।'], villain: true },
    { id: 'garaj', bg: 'rain', pose: 'stand', mood: 'angry', name: ['Garaj', 'गरज'], role: ['The grumpy storm cloud', 'गुस्सैल तूफ़ानी बादल'], bio: ['Thunders when upset — but mostly he is just lonely.', 'नाराज़ होने पर गरजता है — पर असल में अकेला है।'], villain: true },
  ];

  const ICON = {
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',
    left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4l-8 8 8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5l5 5 5-5M4 20h16" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    speak: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor"/></svg>',
  };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const pad = n => String(n).padStart(3, '0');
  const tr = o => o[S.lang] || o.en;

  let toastTimer;
  function toast(msg) {
    const el = document.querySelector('.toast');
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 3200);
  }

  /* ---------- static chrome ---------- */
  function applyChrome(route) {
    document.documentElement.lang = S.lang;
    document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === S.lang)));
    document.querySelectorAll('[data-nav]').forEach(a => { if (a.dataset.nav === route) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  }

  /* ---------- covers (lazy) ---------- */
  const coverCache = new Map();
  const coverSVG = c => { const key = c.id + S.lang; if (!coverCache.has(key)) coverCache.set(key, K.render(c, 0, S.lang).svg); return coverCache.get(key); };
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { const el = e.target; io.unobserve(el); const c = byId.get(+el.dataset.id); if (c) el.innerHTML = coverSVG(c); } });
  }, { rootMargin: '500px 0px' }) : null;
  function lazyCovers(root) {
    root.querySelectorAll('.cover[data-id]').forEach((el, i) => {
      if (!io || i < 8) { const c = byId.get(+el.dataset.id); el.innerHTML = coverSVG(c); } else io.observe(el);
    });
  }

  function card(c) {
    const fav = S.favs.has(c.id);
    return `<li class="card">
      <a class="card-link" href="#/comic/${c.id}">
        <div class="cover" data-id="${c.id}" role="img" aria-label="${esc(tr(c.title))}"></div>
        <div class="card-body"><span class="num">No. ${pad(c.id)}</span><h3>${esc(tr(c.title))}</h3>
        <p class="meta">${t('age')} ${c.age} · ${esc(catName(c.category))}</p></div>
      </a>
      <button class="fav" type="button" data-fav="${c.id}" aria-pressed="${fav}" aria-label="${esc(fav ? t('removeFav') : t('addFav'))}">${ICON.star}</button>
      ${S.read.has(c.id) ? `<span class="badge-read">✓ ${t('read')}</span>` : ''}
    </li>`;
  }

  /* ---------- HOME ---------- */
  const heroScene = () => ({
    bg: 'city', action: true,
    chars: [
      { id: 'papa', pose: 'cheer', mood: 'laugh', x: 0.13 },
      { id: 'auggie', pose: 'fly', mood: 'determined', x: 0.5, s: 1.2, cape: true },
      { id: 'mumma', pose: 'cheer', mood: 'happy', x: 0.87, flip: true },
    ],
    props: [{ id: 'balloon', x: 0.3, y: 0.3 }, { id: 'kite', x: 0.7, y: 0.2 }],
    say: [{ who: 1, kind: 'shout', en: UI.en.catch, hi: UI.hi.catch }],
    fx: { en: 'WOOF!', hi: 'भौं-भौं!' },
  });

  function filtered() {
    const q = S.q.trim().toLowerCase();
    return COMICS.filter(c => (S.age === 'all' || c.age === S.age) && (S.cat === 'all' || c.category === S.cat) && (!S.favOnly || S.favs.has(c.id)) &&
      (!q || [c.title.en, c.title.hi, c.blurb.en, c.blurb.hi, catName(c.category), String(c.id)].join(' ').toLowerCase().includes(q) ||
        c.panels.some(p => (p.chars || []).some(ch => ch.id.includes(q)))));
  }

  function renderShelf() {
    const list = filtered();
    const pool = COMICS.filter(c => S.age === 'all' || c.age === S.age);
    const counts = {}; pool.forEach(c => { counts[c.category] = (counts[c.category] || 0) + 1; });
    const cats = Object.keys(CATS).filter(k => counts[k]);
    if (S.cat !== 'all' && !counts[S.cat]) S.cat = 'all';
    app.querySelector('.cats').innerHTML = `<button class="chip" type="button" data-cat="all" aria-pressed="${S.cat === 'all'}">${t('allCats')}<span>${pool.length}</span></button>` +
      cats.map(k => `<button class="chip" type="button" data-cat="${k}" aria-pressed="${S.cat === k}">${esc(catName(k))}<span>${counts[k]}</span></button>`).join('');
    app.querySelectorAll('.age-btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.age === S.age)));
    app.querySelector('.fav-toggle').setAttribute('aria-pressed', String(S.favOnly));
    app.querySelector('.count').textContent = t('count', list.length);
    const grid = app.querySelector('.grid');
    grid.innerHTML = list.length ? list.map(card).join('') : `<li class="empty">${S.favOnly && !S.favs.size ? t('emptyFav') : t('empty')}</li>`;
    lazyCovers(grid);
  }

  function home() {
    applyChrome('home');
    document.title = 'Auggie Comics';
    app.innerHTML = `
      <section class="hero">
        <div class="hero-art" role="img" aria-label="Super Auggie leaping over Chamakpur with Papa and Mumma">${K.scene(heroScene(), 1200, 500, { lang: S.lang, fs: 30, seed: 11, big: true })}</div>
        <div class="hero-copy">
          <p class="eyebrow">${esc(t('eyebrow', COMICS.length))}</p>
          <h1 class="display">${esc(t('heroTitle'))}</h1>
          <p class="lede">${esc(t('lede'))}</p>
          <div class="hero-cta">
            <button class="btn btn-red" type="button" data-jump="4-6">${esc(t('little'))}<small>${esc(t('littleSub'))}</small></button>
            <button class="btn btn-blue" type="button" data-jump="6-10">${esc(t('big'))}<small>${esc(t('bigSub'))}</small></button>
          </div>
        </div>
      </section>
      <section class="shelf" id="shelf" aria-labelledby="shelf-h">
        <div class="shelf-head"><h2 id="shelf-h" class="display">${esc(t('library'))}</h2><span class="count"></span></div>
        <div class="filters">
          <div class="ages" role="group" aria-label="${esc(t('age'))}">
            <button class="age-btn" type="button" data-age="all">${esc(t('all'))}<small>${esc(t('allSub'))}</small></button>
            <button class="age-btn" type="button" data-age="4-6">${esc(t('little'))}<small>${esc(t('littleSub'))}</small></button>
            <button class="age-btn" type="button" data-age="6-10">${esc(t('big'))}<small>${esc(t('bigSub'))}</small></button>
          </div>
          <label class="search"><span class="skip">${esc(t('search'))}</span><input type="search" value="${esc(S.q)}" placeholder="${esc(t('search'))}"></label>
          <button class="fav-toggle" type="button" aria-pressed="false">${ICON.star}${esc(t('favs'))}</button>
        </div>
        <div class="cats" role="group" aria-label="Topics"></div>
        <ol class="grid"></ol>
      </section>`;
    renderShelf();
    app.querySelector('.search input').addEventListener('input', e => { S.q = e.target.value; renderShelf(); });
  }

  /* ---------- READER ---------- */
  let speaking = false;
  const R = { comic: null, page: 0, total: 0 };

  function stopSpeech() { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); speaking = false; updateSpeakBtn(); }
  function updateSpeakBtn() {
    const b = app.querySelector('.speak'); if (!b) return;
    b.innerHTML = speaking ? `${ICON.stop}${esc(t('stop'))}` : `${ICON.speak}${esc(t('readAloud'))}`;
    b.setAttribute('aria-pressed', String(speaking));
  }
  // Read-aloud: a high, child-like pitch for the narrator and kids, a different pitch for each character.
  const PITCH = { narrator: 1.55, auggie: 1.9, moti: 1.5, pinku: 2, snowy: 1.6, chiku: 2, rohan: 1.75, anaya: 1.85, kabir: 2, zoya: 1.8, mumma: 1.35, mausi: 1.5, dadi: 1.2, papa: 0.95, nanu: 0.8, gadbad: 1.2, kichdu: 0.6, garaj: 0.5, zibbo: 2, bholu: 1.7 };
  const PREF = { hi: ['Lekha', 'लेखा', 'Google हिन्दी', 'Kiyara', 'Swara'], en: ['Veena', 'Samantha', 'Google UK English Female', 'Karen', 'Tessa', 'Moira', 'Zira', 'Google US English', 'Female'] };
  const voicesFor = lang => ('speechSynthesis' in window ? window.speechSynthesis.getVoices() : []).filter(v => (v.lang || '').toLowerCase().replace('_', '-').startsWith(lang === 'hi' ? 'hi' : 'en'));
  function pickVoice(lang) {
    const list = voicesFor(lang);
    if (!list.length) return null;
    const saved = store.get('voice-' + lang, null);
    const hit = saved && list.find(v => v.name === saved);
    if (hit) return hit;
    for (const p of PREF[lang]) { const v = list.find(x => x.name.includes(p)); if (v) return v; }
    return list[0];
  }
  function fillVoices() {
    const sel = app.querySelector('.voice-sel'); if (!sel) return;
    const list = voicesFor(S.lang), cur = pickVoice(S.lang);
    sel.closest('.voice-pick').hidden = list.length < 2;
    sel.innerHTML = list.map(v => `<option value="${esc(v.name)}"${cur && v.name === cur.name ? ' selected' : ''}>${esc(v.name.replace(/\s*\(.*\)/, ''))}</option>`).join('');
  }
  if ('speechSynthesis' in window) window.speechSynthesis.addEventListener('voiceschanged', fillVoices);
  function speakPage() {
    if (!('speechSynthesis' in window)) { toast(t('noVoice')); return; }
    const synth = window.speechSynthesis;
    synth.cancel();
    const lines = K.script(R.comic, R.page, S.lang).filter(l => l.text);
    const voice = pickVoice(S.lang);
    speaking = true; updateSpeakBtn();
    lines.forEach((l, i) => {
      const u = new SpeechSynthesisUtterance(l.text.replace(/[—–]/g, ', '));
      u.lang = S.lang === 'hi' ? 'hi-IN' : 'en-IN'; if (voice) u.voice = voice;
      u.pitch = PITCH[l.who] != null ? PITCH[l.who] : 1.7;
      u.rate = (R.comic.age === '4-6' ? 0.86 : 0.94) * (l.who === 'narrator' ? 0.96 : 1);
      if (i === lines.length - 1) u.onend = () => { speaking = false; updateSpeakBtn(); };
      synth.speak(u);
    });
  }

  function showPage(p, focus) {
    const c = R.comic;
    R.page = Math.max(0, Math.min(R.total - 1, p));
    const fig = app.querySelector('.page');
    fig.innerHTML = K.render(c, R.page, S.lang).svg;
    const label = R.page === 0 ? t('cover') : R.page === R.total - 1 ? t('end') : t('pageOf', R.page, R.total - 2);
    fig.setAttribute('aria-label', `${tr(c.title)} — ${label}`);
    app.querySelector('.pageno').textContent = label;
    app.querySelectorAll('.dot').forEach((d, i) => d.setAttribute('aria-current', String(i === R.page)));
    app.querySelectorAll('[data-go="-1"]').forEach(b => { b.disabled = R.page === 0; });
    app.querySelectorAll('[data-go="1"]').forEach(b => { b.disabled = R.page === R.total - 1; });
    if (R.page === R.total - 1 && !S.read.has(c.id)) { S.read.add(c.id); store.set('read', [...S.read]); }
    const h = `#/comic/${c.id}/${R.page + 1}`;
    if (location.hash !== h) history.replaceState(null, '', h);
    if (speaking) speakPage();
    if (focus) fig.focus({ preventScroll: true });
  }

  function reader(id, page) {
    const c = byId.get(id);
    stopSpeech();
    applyChrome('');
    if (!c) { app.innerHTML = `<section class="reader"><p class="empty">${esc(t('notFound'))}</p><p><a class="btn" href="#/">${ICON.left}${esc(t('back'))}</a></p></section>`; return; }
    R.comic = c; R.total = K.pageCount(c);
    document.title = `${tr(c.title)} · Auggie Comics`;
    const next = COMICS.filter(x => x.age === c.age && x.id > c.id).concat(COMICS.filter(x => x.age === c.age && x.id < c.id)).slice(0, 4);
    const dots = Array.from({ length: R.total }, (_, i) => `<button class="dot" type="button" data-page="${i}" aria-label="${i === 0 ? esc(t('cover')) : i === R.total - 1 ? esc(t('end')) : esc(t('pageOf', i, R.total - 2))}"></button>`).join('');
    app.innerHTML = `
      <section class="reader">
        <div class="rbar">
          <a class="btn" href="#/">${ICON.left}${esc(t('back'))}</a>
          <div class="rtitle"><span class="num">No. ${pad(c.id)}</span><h1 class="display">${esc(tr(c.title))}</h1>
            <p class="meta">${t('age')} ${c.age} · ${esc(catName(c.category))} · ${c.panels.length} ${t('panels')}</p></div>
          <div class="ractions">
            <label class="voice-pick" hidden><span>${esc(t('voice'))}</span><select class="voice-sel"></select></label>
            <button class="btn btn-yel speak" type="button" aria-pressed="false"></button>
            <button class="btn btn-red dl" type="button">${ICON.down}<span>${esc(t('download'))}</span></button>
          </div>
        </div>
        <div class="stage">
          <button class="arrow" type="button" data-go="-1" aria-label="${esc(t('prev'))}">${ICON.left}</button>
          <figure class="page" tabindex="-1"></figure>
          <button class="arrow" type="button" data-go="1" aria-label="${esc(t('next'))}">${ICON.right}</button>
        </div>
        <div class="pager">
          <button class="arrow" type="button" data-go="-1" aria-label="${esc(t('prev'))}">${ICON.left}</button>
          <div class="dots">${dots}</div>
          <span class="pageno"></span>
          <button class="arrow" type="button" data-go="1" aria-label="${esc(t('next'))}">${ICON.right}</button>
        </div>
        <p class="hint">${esc(t('keys'))}</p>
        <section class="more"><h2 class="display">${esc(t('readNext'))}</h2><ol class="grid">${next.map(card).join('')}</ol></section>
      </section>`;
    updateSpeakBtn();
    fillVoices();
    lazyCovers(app.querySelector('.more'));
    showPage((page || 1) - 1);
    // swipe
    const fig = app.querySelector('.page');
    let sx = null;
    fig.addEventListener('pointerdown', e => { sx = e.clientX; });
    fig.addEventListener('pointerup', e => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) showPage(R.page + (dx < 0 ? 1 : -1)); });
    window.scrollTo({ top: 0 });
  }

  async function downloadPDF(btn) {
    const c = R.comic; if (!c) return;
    const label = btn.querySelector('span');
    btn.disabled = true;
    try {
      const blob = await window.AuggiPDF.make(c, S.lang, (p, total) => { label.textContent = t('making', p, total); });
      const slug = c.title.en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const res = await window.AuggiPDF.save(blob, `auggie-comic-${pad(c.id)}-${slug}-${S.lang === 'hi' ? 'hindi' : 'english'}.pdf`);
      toast(res === 'saved' ? t('saved') : t('declined'));
    } catch (e) {
      toast(`${t('pdfError')} ${e && e.message ? e.message : ''}`);
    } finally {
      btn.disabled = false; label.textContent = t('download');
    }
  }

  /* ---------- HEROES ---------- */
  function heroes() {
    applyChrome('heroes');
    stopSpeech();
    document.title = `${t('heroesTitle')} · Auggie Comics`;
    const L = S.lang === 'hi' ? 1 : 0;
    app.innerHTML = `<section class="heroes"><h1 class="display">${esc(t('heroesTitle'))}</h1><p>${esc(t('heroesLede'))}</p>
      <ul class="hgrid">${HEROES.map((h, i) => {
        const sc = { bg: h.bg, chars: [{ id: h.id, pose: h.pose, mood: h.mood, x: h.pose === 'fly' ? 0.46 : 0.5, s: h.id === 'kichdu' ? 0.85 : 1.1 }] };
        return `<li class="hcard${h.villain ? ' villain' : ''}"><div class="art">${K.scene(sc, 400, 300, { lang: S.lang, seed: 30 + i })}</div>
          <div class="body"><h2 class="display"><a href="#/" data-hero="${h.id}" style="text-decoration:none">${esc(h.name[L])}</a></h2><p class="role">${esc(h.role[L])}</p><p>${esc(h.bio[L])}</p></div></li>`;
      }).join('')}</ul></section>`;
    window.scrollTo({ top: 0 });
  }

  /* ---------- routing ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const m = h.match(/^comic\/(\d+)(?:\/(\d+))?/);
    if (m) {
      const id = +m[1], pg = m[2] ? +m[2] : 1;
      if (R.comic && R.comic.id === id && app.querySelector('.reader .page')) { showPage(pg - 1); return; }
      reader(id, pg); return;
    }
    R.comic = null;
    if (h.startsWith('heroes')) { heroes(); return; }
    home();
  }

  /* ---------- events ---------- */
  document.addEventListener('click', e => {
    const el = e.target.closest('button, a');
    if (!el) return;
    if (el.dataset.lang) {
      if (S.lang !== el.dataset.lang) {
        S.lang = el.dataset.lang; store.set('lang', S.lang); stopSpeech();
        if (R.comic && app.querySelector('.reader .page')) reader(R.comic.id, R.page + 1); else route();
      }
      return;
    }
    if (el.dataset.fav) { e.preventDefault(); const id = +el.dataset.fav; if (S.favs.has(id)) S.favs.delete(id); else S.favs.add(id); store.set('favs', [...S.favs]); el.setAttribute('aria-pressed', String(S.favs.has(id))); el.setAttribute('aria-label', S.favs.has(id) ? t('removeFav') : t('addFav')); if (S.favOnly && app.querySelector('.shelf')) renderShelf(); return; }
    if (el.dataset.jump) { S.age = el.dataset.jump; S.cat = 'all'; renderShelf(); document.getElementById('shelf').scrollIntoView(); return; }
    if (el.classList.contains('age-btn')) { S.age = el.dataset.age; renderShelf(); return; }
    if (el.dataset.cat) { S.cat = el.dataset.cat; renderShelf(); return; }
    if (el.classList.contains('fav-toggle')) { S.favOnly = !S.favOnly; renderShelf(); return; }
    if (el.dataset.hero) { e.preventDefault(); S.q = el.dataset.hero; S.age = 'all'; S.cat = 'all'; S.favOnly = false; location.hash = '#/'; setTimeout(() => { const s = document.getElementById('shelf'); if (s) s.scrollIntoView(); }, 30); return; }
    if (el.dataset.go) { showPage(R.page + +el.dataset.go); return; }
    if (el.dataset.page != null && el.classList.contains('dot')) { showPage(+el.dataset.page); return; }
    if (el.classList.contains('speak')) { if (speaking) stopSpeech(); else speakPage(); return; }
    if (el.classList.contains('dl')) { downloadPDF(el); return; }
  });
  document.addEventListener('keydown', e => {
    if (!R.comic || !app.querySelector('.reader') || e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowRight') { showPage(R.page + 1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { showPage(R.page - 1); e.preventDefault(); }
  });
  document.addEventListener('change', e => {
    if (e.target.classList.contains('voice-sel')) { store.set('voice-' + S.lang, e.target.value); if (speaking) speakPage(); }
  });
  window.addEventListener('hashchange', route);

  /* ---------- boot: wait for comic fonts so bubbles are measured correctly ---------- */
  const fontsReady = document.fonts && document.fonts.load ? Promise.race([
    Promise.all([
      document.fonts.load('400 40px Bangers', 'AUGGI'),
      document.fonts.load('600 20px "Baloo 2"', 'Aa अआ ऑगी'),
      document.fonts.load('800 20px "Baloo 2"', 'Aa अआ ऑगी'),
      document.fonts.load('700 20px "Baloo 2"', 'Aa अआ'),
    ]),
    new Promise(r => setTimeout(r, 3500)),
  ]).catch(() => {}) : Promise.resolve();
  fontsReady.then(route);
  window.AuggiApp = { S, COMICS };
})();
