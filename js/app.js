/* Auggie Comics — site UI: library, filters, reader, heroes, language, favourites, read-aloud, PDF. */
(function () {
  const K = window.AuggiComic, SP = window.AuggiSpeech;
  const COMICS = (window.AUGGIE_COMICS || []).slice().sort((a, b) => a.id - b.id);
  const byId = new Map(COMICS.map(c => [c.id, c]));
  const app = document.getElementById('app');

  const store = {
    get(k, d) { try { const v = localStorage.getItem('auggie:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('auggie:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };
  const S = {
    lang: store.get('lang', 'en') === 'hi' ? 'hi' : 'en',
    age: 'all', cat: 'all', q: '', favOnly: false, filtersOpen: false,
    voice: store.get('voice-style', 'girl') === 'boy' ? 'boy' : 'girl',
    favs: new Set(store.get('favs', [])), read: new Set(store.get('read', [])),
  };

  const UI = {
    en: {
      comicsTag: 'COMICS', library: 'Library', heroes: 'Meet the Heroes',
      eyebrow: n => `${n} original comics · English + हिंदी · free PDFs`,
      heroTitle: 'Woof-woof! Big adventures with a golden hero.',
      lede: 'Auggie is a big-hearted golden Labrador who lives with Papa, Mumma, Mausi, Nanu and Dadi. Travel with him, sniff out mysteries and make new animal friends — every story in English and Hindi.',
      little: 'Little Readers', littleSub: 'Age 4–6 · 6 panels', big: 'Big Readers', bigSub: 'Age 6–10 · 8 panels', all: 'All ages', allSub: 'Every comic',
      search: 'Search by title, hero or topic…', favs: 'Favourites', count: n => `${n} ${n === 1 ? 'comic' : 'comics'}`,
      allCats: 'All topics', empty: 'No comics match. Try another topic or clear the search.', emptyFav: 'Tap the star on any comic to keep it here.',
      age: 'Age', panels: 'panels', read: 'Read', addFav: 'Add to favourites', removeFav: 'Remove from favourites',
      back: 'Library', readAloud: 'Read to me', stop: 'Stop reading', download: 'Download PDF', making: (p, t) => `Making PDF… ${p}/${t}`,
      saved: 'PDF saved.', declined: 'Download cancelled.', pdfError: 'Could not make the PDF.',
      prev: 'Previous page', next: 'Next page', pageOf: (p, t) => `Page ${p} of ${t}`, readNext: 'Read next', keys: 'Tip: use the ← → keys or swipe to turn pages.',
      notFound: 'That comic does not exist yet.', heroesTitle: 'Meet the Heroes', heroesLede: 'Auggie, his family and his friends. Tap a name to read their stories.',
      footer: 'Every story and drawing here is original. Free to read, free to download — no sign-up needed.', cover: 'Cover', end: 'The End',
      noVoice: 'Your browser cannot read aloud.', noHindi: 'No Hindi voice is installed on this device. iPhone/Mac: Settings → Accessibility → Spoken Content → Voices → Hindi. Android: install Google Text-to-speech and add Hindi.',
      catch: 'Woof-woof, let’s go!', voice: 'Voice', girl: 'Girl', boy: 'Boy',
      topics: 'Browse by topic', topicsSub: (c, t) => `${c} comics in ${t} topics — tap one to start`,
      filters: 'Filters', clear: 'Clear all', showing: (n, total) => `Showing ${n} of ${total}`, topic: 'Topic',
      newest: 'Newest', allComics: 'All comics',
    },
    hi: {
      comicsTag: 'कॉमिक्स', library: 'लाइब्रेरी', heroes: 'हीरो से मिलो',
      eyebrow: n => `${n} नई कॉमिक्स · हिंदी + English · मुफ़्त PDF`,
      heroTitle: 'भौं-भौं! एक सुनहरे हीरो के साथ बड़े कारनामे।',
      lede: 'ऑगी एक बड़े दिल वाला सुनहरा लैब्राडोर है, जो पापा, मम्मा, मौसी, नानू और दादी के साथ रहता है। उसके साथ घूमो, रहस्य सूँघकर सुलझाओ और नए जानवर दोस्त बनाओ — हर कहानी हिंदी और अंग्रेज़ी में।',
      little: 'नन्हे पाठक', littleSub: 'उम्र 4–6 · 6 चित्र', big: 'बड़े पाठक', bigSub: 'उम्र 6–10 · 8 चित्र', all: 'सभी उम्र', allSub: 'हर कॉमिक',
      search: 'नाम, हीरो या विषय से खोजो…', favs: 'पसंदीदा', count: n => `${n} कॉमिक्स`,
      allCats: 'सभी विषय', empty: 'कोई कॉमिक नहीं मिली। दूसरा विषय चुनो या खोज साफ़ करो।', emptyFav: 'किसी भी कॉमिक पर तारा दबाओ, वह यहाँ दिखेगी।',
      age: 'उम्र', panels: 'चित्र', read: 'पढ़ ली', addFav: 'पसंदीदा में जोड़ो', removeFav: 'पसंदीदा से हटाओ',
      back: 'लाइब्रेरी', readAloud: 'पढ़कर सुनाओ', stop: 'रोको', download: 'PDF डाउनलोड करो', making: (p, t) => `PDF बन रही है… ${p}/${t}`,
      saved: 'PDF सेव हो गई।', declined: 'डाउनलोड रद्द हुआ।', pdfError: 'PDF नहीं बन पाई।',
      prev: 'पिछला पेज', next: 'अगला पेज', pageOf: (p, t) => `पेज ${p} / ${t}`, readNext: 'आगे पढ़ो', keys: 'सुझाव: पेज पलटने के लिए ← → बटन दबाओ या स्वाइप करो।',
      notFound: 'यह कॉमिक अभी नहीं है।', heroesTitle: 'हीरो से मिलो', heroesLede: 'ऑगी, उसका परिवार और उसके दोस्त। नाम पर टैप करके उनकी कहानियाँ पढ़ो।',
      footer: 'यहाँ की हर कहानी और हर चित्र नया और मौलिक है। पढ़ना मुफ़्त, डाउनलोड मुफ़्त — कोई साइन-अप नहीं।', cover: 'कवर', end: 'समाप्त',
      noVoice: 'आपका ब्राउज़र पढ़कर नहीं सुना सकता।', noHindi: 'इस डिवाइस पर हिंदी आवाज़ नहीं है। iPhone/Mac: Settings → Accessibility → Spoken Content → Voices → Hindi। Android: Google Text-to-speech में हिंदी जोड़ो।',
      catch: 'भौं-भौं, चलो चलें!', voice: 'आवाज़', girl: 'लड़की', boy: 'लड़का',
      topics: 'विषय चुनो', topicsSub: (c, t) => `${t} विषयों में ${c} कॉमिक्स — किसी एक पर टैप करो`,
      filters: 'फ़िल्टर', clear: 'सब हटाओ', showing: (n, total) => `${total} में से ${n}`, topic: 'विषय',
      newest: 'सबसे नई', allComics: 'सभी कॉमिक्स',
    },
  };
  const t = (k, ...a) => { const v = UI[S.lang][k]; return typeof v === 'function' ? v(...a) : v; };

  const CATS = {
    home: ['Home', 'घर'], habits: ['Good Habits', 'अच्छी आदतें'], feelings: ['Feelings', 'भावनाएँ'], family: ['Family', 'परिवार'],
    friends: ['Friends', 'दोस्ती'], dogs: ['Dog Friends', 'कुत्ते दोस्त'], animals: ['Animals', 'जानवर'], birds: ['Birds', 'पंछी'],
    festivals: ['Festivals', 'त्योहार'], travel: ['Travel', 'सैर-सपाटा'], holiday: ['Holidays', 'छुट्टियाँ'], nature: ['Nature', 'प्रकृति'], forest: ['Forest', 'जंगल'],
    superhero: ['Super Auggie', 'सुपर ऑगी'], mystery: ['Mysteries', 'रहस्य'], ghost: ['Ghost Fun', 'भूतिया मज़ा'], school: ['School', 'स्कूल'], office: ['Office', 'दफ़्तर'],
    sports: ['Sports', 'खेल'], science: ['Science', 'विज्ञान'], planet: ['Save the Planet', 'धरती बचाओ'],
    space: ['Space', 'अंतरिक्ष'], india: ['India', 'भारत'],
  };
  const CAT_COLOR = { home: '#FFD400', habits: '#7FD3FF', feelings: '#FF9FC0', family: '#FFB347', friends: '#A7E34B', dogs: '#F3D48B', animals: '#5ACB5F', birds: '#5CF2FF', festivals: '#FF8A1F', travel: '#14B8A6', holiday: '#FFE45C', nature: '#35B24A', forest: '#1E9E4A', superhero: '#E63329', mystery: '#7B3FC4', ghost: '#BDB6E6', school: '#1D5BD8', office: '#8C94A8', sports: '#FF5C8A', science: '#5CF2FF', planet: '#1E7A31', space: '#123C99', india: '#FF8A1F' };
  const catName = c => (CATS[c] ? CATS[c][S.lang === 'hi' ? 1 : 0] : c);

  const HEROES = [
    { id: 'auggie', bg: 'park', pose: 'sit', mood: 'happy', name: ['Auggie', 'ऑगी'], role: ['The golden hero', 'सुनहरा हीरो'], bio: ['A big, gentle Labrador with floppy ears and a smile that never stops. Loves naps on the big bed, lake walks, swimming and carrots. When a friend needs help, Mumma ties on his red cape: Super Auggie!', 'बड़े-बड़े कानों वाला प्यारा लैब्राडोर, जिसकी मुस्कान कभी ख़त्म नहीं होती। बड़े पलंग पर झपकी, झील की सैर, तैरना और गाजर उसे बहुत पसंद हैं। जब किसी दोस्त को मदद चाहिए, मम्मा उसकी लाल केप बाँधती हैं: सुपर ऑगी!'] },
    { id: 'papa', bg: 'beach', pose: 'wave', mood: 'laugh', name: ['Papa · Gaurav', 'पापा · गौरव'], role: ['Mumma calls him “Mittsy”', 'मम्मा उन्हें “मिट्सी” बुलाती हैं'], bio: ['Loves travel, beaches and bad jokes. Works on his laptop while Auggie snores right beside him.', 'सैर, समुद्र-तट और मज़ेदार चुटकुलों के शौक़ीन। लैपटॉप पर काम करते हैं और ऑगी बगल में खर्राटे लेता है।'] },
    { id: 'mumma', bg: 'beach', pose: 'cheer', mood: 'laugh', name: ['Mumma · Apurva', 'मम्मा · अपूर्वा'], role: ['Papa calls her “Mottu” and “Baby”', 'पापा उन्हें “मोटू” और “बेबी” बुलाते हैं'], bio: ['Plans every adventure and loves Auggie the most. Her laugh is the loudest in all of Chamakpur.', 'हर सैर की योजना बनाती हैं और ऑगी को सबसे ज़्यादा प्यार करती हैं। पूरे चमकपुर में सबसे ज़ोरदार हँसी उन्हीं की है।'] },
    { id: 'mausi', bg: 'cafe', pose: 'point', mood: 'happy', name: ['Mausi · Shambhavi', 'मौसी · शांभवी'], role: ['Mumma calls her “Chottu”', 'मम्मा उन्हें “छोटू” बुलाती हैं'], bio: ['Café lover, selfie queen and Auggie’s trick teacher. Sit! Paw! Pose for the camera!', 'कैफ़े की दीवानी, सेल्फ़ी की रानी और ऑगी की ट्रिक-टीचर। बैठो! पंजा! कैमरे के लिए पोज़!'] },
    { id: 'nanu', bg: 'garden', pose: 'stand', mood: 'happy', name: ['Nanu · Ashok', 'नानू · अशोक'], role: ['Mumma calls him “Daddy”', 'मम्मा उन्हें “डैडी” बुलाती हैं'], bio: ['A smart gentleman in a blue suit who has a science fact for everything, and long morning walks with Auggie.', 'नीले सूट वाले समझदार सज्जन, जिनके पास हर बात का एक विज्ञान वाला जवाब है, और ऑगी के साथ लंबी सुबह की सैर।'] },
    { id: 'dadi', bg: 'home', pose: 'wave', mood: 'laugh', name: ['Dadi · Krishna', 'दादी · कृष्णा'], role: ['Papa calls her “Mummy” and “Ma”', 'पापा उन्हें “मम्मी” और “माँ” बुलाते हैं'], bio: ['Colourful sarees, jingly bangles, the best stories — and a secret carrot for Auggie.', 'रंग-बिरंगी साड़ियाँ, खनकती चूड़ियाँ, सबसे अच्छी कहानियाँ — और ऑगी के लिए एक छुपी हुई गाजर।'] },
    { id: 'missji', bg: 'classroom', pose: 'point', mood: 'happy', name: ['Miss Ji', 'मिस जी'], role: ['The class teacher', 'क्लास टीचर'], bio: ['Kind, funny and strict about tidy desks. Secretly the biggest dog-lover in Chamakpur Public School.', 'प्यारी, मज़ेदार और साफ़-सुथरी डेस्क की पक्की। चमकपुर पब्लिक स्कूल में चुपके से कुत्तों की सबसे बड़ी फ़ैन।'] },
    { id: 'moti', bg: 'city', pose: 'stand', mood: 'determined', name: ['Moti', 'मोती'], role: ['Street-smart best friend', 'गलियों का होशियार दोस्त'], bio: ['A brave Indie dog who knows every lane of Chamakpur, and a shortcut that is never shorter.', 'बहादुर देसी कुत्ता, जो चमकपुर की हर गली जानता है, और एक शॉर्टकट जो कभी छोटा नहीं निकलता।'] },
    { id: 'pinku', bg: 'home', pose: 'sit', mood: 'surprised', name: ['Pinku', 'पिंकू'], role: ['The dramatic pug', 'नाटकबाज़ पग'], bio: ['Snorts, sulks, faints and loves being the centre of attention.', 'फुँफकारता है, रूठता है, बेहोश हो जाता है और सबका ध्यान चाहता है।'] },
    { id: 'snowy', bg: 'snow', pose: 'stand', mood: 'happy', name: ['Snowy', 'स्नोवी'], role: ['The mountain husky', 'पहाड़ों वाला हस्की'], bio: ['Howls instead of barking. Loves snow, hates the summer heat.', 'भौंकने की जगह हूँ-हूँ करता है। बर्फ़ पसंद, गर्मी नापसंद।'] },
    { id: 'chiku', bg: 'playground', pose: 'run', mood: 'laugh', name: ['Chiku', 'चीकू'], role: ['Tiny, speedy, curious', 'छोटा, तेज़, जिज्ञासु'], bio: ['A little dachshund who is always first to the finish line, and always says so.', 'छोटा-सा डैशहुंड, जो हर रेस में सबसे पहले पहुँचता है, और सबको बताता भी है।'] },
    { id: 'bholu', bg: 'river', pose: 'cheer', mood: 'laugh', name: ['Bholu', 'भोलू'], role: ['Baby elephant pal', 'नन्हा हाथी दोस्त'], bio: ['Lives at the elephant sanctuary and loves trunk-showers.', 'हाथी अभयारण्य में रहता है और सूँड से फुहार डालना पसंद करता है।'] },
    { id: 'bhootu', bg: 'haunted', pose: 'wave', mood: 'happy', name: ['Bhootu', 'भूतू'], role: ['The friendly little ghost', 'प्यारा नन्हा भूत'], bio: ['Lives in the old bungalow at the end of the lane. Not scary at all: he just wants a friend to play hide-and-seek with.', 'गली के आख़िरी पुराने बंगले में रहता है। ज़रा भी डरावना नहीं: उसे बस छुपन-छुपाई खेलने के लिए एक दोस्त चाहिए।'] },
    { id: 'gadbad', bg: 'lab', pose: 'blast', mood: 'laugh', name: ['Professor Gadbad', 'प्रोफ़ेसर गड़बड़'], role: ['Inventor next door', 'पड़ोसी आविष्कारक'], bio: ['His gadgets always go wrong. He always says sorry — to the gadget.', 'इनकी मशीनें हमेशा गड़बड़ करती हैं। ये हमेशा सॉरी बोलते हैं — मशीन से।'], villain: true },
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
    filter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18l-7 8v6l-4 2v-8z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
  };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const pad = n => String(n).padStart(3, '0');
  const tr = o => o[S.lang] || o.en;

  let toastTimer;
  function toast(msg, long) {
    const el = document.querySelector('.toast');
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, long ? 9000 : 3200);
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
    bg: 'city', action: true, shot: 'wide',
    chars: [
      { id: 'papa', pose: 'cheer', mood: 'laugh', x: 0.13 },
      { id: 'auggie', pose: 'fly', mood: 'determined', x: 0.5, s: 1.2, cape: true },
      { id: 'mumma', pose: 'cheer', mood: 'happy', x: 0.87, flip: true },
    ],
    props: [{ id: 'balloon', x: 0.3, y: 0.3 }, { id: 'kite', x: 0.7, y: 0.2 }],
    say: [{ who: 1, kind: 'shout', en: UI.en.catch, hi: UI.hi.catch }],
    fx: { en: 'WOOF!', hi: 'भौं-भौं!' },
  });

  const countsAll = (() => { const m = {}; COMICS.forEach(c => { m[c.category] = (m[c.category] || 0) + 1; }); return m; })();
  const catList = () => Object.keys(CATS).filter(k => countsAll[k]);

  function filtered() {
    const q = S.q.trim().toLowerCase();
    return COMICS.filter(c => (S.age === 'all' || c.age === S.age) && (S.cat === 'all' || c.category === S.cat) && (!S.favOnly || S.favs.has(c.id)) &&
      (!q || [c.title.en, c.title.hi, c.blurb.en, c.blurb.hi, catName(c.category), String(c.id)].join(' ').toLowerCase().includes(q) ||
        c.panels.some(p => (p.chars || []).some(ch => ch.id.includes(q)))));
  }
  const activeFilterCount = () => (S.age !== 'all') + (S.cat !== 'all') + S.favOnly + (S.q.trim() ? 1 : 0);

  function renderShelf() {
    const list = filtered();
    const pool = COMICS.filter(c => S.age === 'all' || c.age === S.age);
    const counts = {}; pool.forEach(c => { counts[c.category] = (counts[c.category] || 0) + 1; });
    if (S.cat !== 'all' && !counts[S.cat]) S.cat = 'all';
    const panel = app.querySelector('.fpanel');
    panel.hidden = !S.filtersOpen;
    const fb = app.querySelector('.fbtn'); fb.setAttribute('aria-expanded', String(S.filtersOpen));
    const nActive = activeFilterCount();
    fb.querySelector('.fcount').textContent = nActive ? String(nActive) : ''; fb.querySelector('.fcount').hidden = !nActive;
    panel.querySelector('.cats').innerHTML = `<button class="chip" type="button" data-cat="all" aria-pressed="${S.cat === 'all'}">${t('allCats')}<span>${pool.length}</span></button>` +
      catList().map(k => `<button class="chip" type="button" data-cat="${k}" aria-pressed="${S.cat === k}"${counts[k] ? '' : ' disabled'}>${esc(catName(k))}<span>${counts[k] || 0}</span></button>`).join('');
    app.querySelectorAll('.age-btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.age === S.age)));
    app.querySelector('.fav-toggle').setAttribute('aria-pressed', String(S.favOnly));
    app.querySelector('.shelf .count').textContent = nActive ? t('showing', list.length, COMICS.length) : t('count', list.length);
    // active-filter summary (always visible, even when the panel is closed)
    const act = [];
    if (S.age !== 'all') act.push({ k: 'age', label: `${t('age')} ${S.age}` });
    if (S.cat !== 'all') act.push({ k: 'cat', label: catName(S.cat) });
    if (S.favOnly) act.push({ k: 'fav', label: t('favs') });
    if (S.q.trim()) act.push({ k: 'q', label: `“${S.q.trim()}”` });
    app.querySelector('.active').innerHTML = act.map(a => `<button class="achip" type="button" data-clear="${a.k}">${esc(a.label)}${ICON.x}</button>`).join('') + (act.length > 1 ? `<button class="achip all" type="button" data-clear="all">${esc(t('clear'))}</button>` : '');
    app.querySelectorAll('.tile').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.cat === S.cat)));
    const grid = app.querySelector('.grid');
    grid.innerHTML = list.length ? list.map(card).join('') : `<li class="empty">${S.favOnly && !S.favs.size ? t('emptyFav') : t('empty')}</li>`;
    lazyCovers(grid);
  }

  function home() {
    applyChrome('home');
    document.title = 'Auggie Comics';
    const cats = catList();
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
      <section class="topics" aria-labelledby="topics-h">
        <div class="shelf-head"><h2 id="topics-h" class="display">${esc(t('topics'))}</h2><span class="count">${esc(t('topicsSub', COMICS.length, cats.length))}</span></div>
        <ul class="tiles">${cats.map(k => `<li><button class="tile" type="button" data-cat="${k}" data-jumpcat="1" aria-pressed="false" style="--tc:${CAT_COLOR[k] || '#FFD400'}"><span class="tn">${countsAll[k]}</span><span class="tl">${esc(catName(k))}</span></button></li>`).join('')}</ul>
      </section>
      <section class="shelf" id="shelf" aria-labelledby="shelf-h">
        <div class="shelf-head">
          <h2 id="shelf-h" class="display">${esc(t('library'))}</h2><span class="count"></span>
          <div class="shelf-tools">
            <label class="search"><span class="skip">${esc(t('search'))}</span><input type="search" value="${esc(S.q)}" placeholder="${esc(t('search'))}"></label>
            <button class="btn fbtn" type="button" aria-expanded="false" aria-controls="fpanel">${ICON.filter}${esc(t('filters'))}<span class="fcount" hidden></span></button>
          </div>
        </div>
        <div class="fpanel" id="fpanel" hidden>
          <div class="frow"><span class="flabel">${esc(t('age'))}</span>
            <div class="ages" role="group" aria-label="${esc(t('age'))}">
              <button class="age-btn" type="button" data-age="all">${esc(t('all'))}<small>${esc(t('allSub'))}</small></button>
              <button class="age-btn" type="button" data-age="4-6">${esc(t('little'))}<small>${esc(t('littleSub'))}</small></button>
              <button class="age-btn" type="button" data-age="6-10">${esc(t('big'))}<small>${esc(t('bigSub'))}</small></button>
            </div>
          </div>
          <div class="frow"><span class="flabel">${esc(t('topic'))}</span><div class="cats" role="group" aria-label="${esc(t('topic'))}"></div></div>
          <div class="frow"><span class="flabel"></span><button class="fav-toggle" type="button" aria-pressed="false">${ICON.star}${esc(t('favs'))}</button><button class="btn fclear" type="button" data-clear="all">${esc(t('clear'))}</button></div>
        </div>
        <div class="active"></div>
        <ol class="grid"></ol>
      </section>`;
    renderShelf();
    app.querySelector('.search input').addEventListener('input', e => { S.q = e.target.value; renderShelf(); });
  }

  /* ---------- READER ---------- */
  let speaking = false;
  const R = { comic: null, page: 0, total: 0 };

  function stopSpeech() { SP.stop(); speaking = false; updateSpeakBtn(); }
  function updateSpeakBtn() {
    const b = app.querySelector('.speak'); if (!b) return;
    b.innerHTML = speaking ? `${ICON.stop}${esc(t('stop'))}` : `${ICON.speak}${esc(t('readAloud'))}`;
    b.setAttribute('aria-pressed', String(speaking));
  }
  function updateVoiceUI() {
    app.querySelectorAll('[data-voice]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.voice === S.voice)));
    const nm = app.querySelector('.vname'); if (nm) nm.textContent = SP.voiceName(S.lang, S.voice);
  }
  function speakPage() {
    const lines = K.script(R.comic, R.page, S.lang).filter(l => l.text);
    speaking = true; updateSpeakBtn();
    SP.speak(lines, {
      lang: S.lang, style: S.voice, age: R.comic.age,
      onEnd: why => {
        speaking = false; updateSpeakBtn();
        if (why === 'unsupported') toast(t('noVoice'));
        else if (why === 'no-hindi-voice') toast(t('noHindi'), true);
      },
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
    const next = COMICS.filter(x => x.category === c.category && x.id !== c.id).concat(COMICS.filter(x => x.age === c.age && x.category !== c.category && x.id > c.id)).slice(0, 4);
    const dots = Array.from({ length: R.total }, (_, i) => `<button class="dot" type="button" data-page="${i}" aria-label="${i === 0 ? esc(t('cover')) : i === R.total - 1 ? esc(t('end')) : esc(t('pageOf', i, R.total - 2))}"></button>`).join('');
    app.innerHTML = `
      <section class="reader">
        <div class="rbar">
          <a class="btn" href="#/">${ICON.left}${esc(t('back'))}</a>
          <div class="rtitle"><span class="num">No. ${pad(c.id)}</span><h1 class="display">${esc(tr(c.title))}</h1>
            <p class="meta">${t('age')} ${c.age} · ${esc(catName(c.category))} · ${c.panels.length} ${t('panels')}</p></div>
          <div class="ractions">
            <div class="voice-pick" role="group" aria-label="${esc(t('voice'))}">
              <button type="button" data-voice="girl" aria-pressed="true">${esc(t('girl'))}</button><button type="button" data-voice="boy" aria-pressed="false">${esc(t('boy'))}</button>
            </div>
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
    updateVoiceUI();
    SP.ready().then(updateVoiceUI);
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
        const sc = { bg: h.bg, shot: 'medium', chars: [{ id: h.id, pose: h.pose, mood: h.mood, x: h.pose === 'fly' ? 0.46 : 0.5, s: h.id === 'kichdu' ? 0.85 : 1 }] };
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
  const scrollShelf = () => { const s = document.getElementById('shelf'); if (s) s.scrollIntoView(); };

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
    if (el.dataset.jump) { S.age = el.dataset.jump; S.cat = 'all'; renderShelf(); scrollShelf(); return; }
    if (el.classList.contains('age-btn')) { S.age = el.dataset.age; renderShelf(); return; }
    if (el.dataset.cat) { S.cat = S.cat === el.dataset.cat && el.dataset.jumpcat ? 'all' : el.dataset.cat; renderShelf(); if (el.dataset.jumpcat) scrollShelf(); return; }
    if (el.classList.contains('fav-toggle')) { S.favOnly = !S.favOnly; renderShelf(); return; }
    if (el.classList.contains('fbtn')) { S.filtersOpen = !S.filtersOpen; renderShelf(); return; }
    if (el.dataset.clear) {
      const k = el.dataset.clear;
      if (k === 'age' || k === 'all') S.age = 'all';
      if (k === 'cat' || k === 'all') S.cat = 'all';
      if (k === 'fav' || k === 'all') S.favOnly = false;
      if (k === 'q' || k === 'all') { S.q = ''; const inp = app.querySelector('.search input'); if (inp) inp.value = ''; }
      renderShelf(); return;
    }
    if (el.dataset.hero) { e.preventDefault(); S.q = el.dataset.hero; S.age = 'all'; S.cat = 'all'; S.favOnly = false; location.hash = '#/'; setTimeout(scrollShelf, 30); return; }
    if (el.dataset.go) { if (speaking) SP.unlock(); showPage(R.page + +el.dataset.go); return; }
    if (el.dataset.page != null && el.classList.contains('dot')) { showPage(+el.dataset.page); return; }
    if (el.dataset.voice) { S.voice = el.dataset.voice; store.set('voice-style', S.voice); updateVoiceUI(); if (speaking) { SP.unlock(); speakPage(); } return; }
    if (el.classList.contains('speak')) { if (speaking) stopSpeech(); else { SP.unlock(); speakPage(); } return; }
    if (el.classList.contains('dl')) { downloadPDF(el); return; }
  });
  document.addEventListener('keydown', e => {
    const tg = e.target;
    if (!R.comic || !app.querySelector('.reader') || (tg && tg.matches && tg.matches('input, textarea, select, [contenteditable="true"]'))) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return; // leave browser shortcuts (back/forward) alone
    if (e.key === 'ArrowRight') { showPage(R.page + 1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { showPage(R.page - 1); e.preventDefault(); }
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
