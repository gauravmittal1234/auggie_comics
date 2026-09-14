// Auggie Comics — stories-03: TRAVEL adventures (ids 45–66)
// 45–55: Little Readers (4-6), 6 panels. 56–66: Big Readers (6-10), 8 panels.
window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(

  // ───────────────────────── 45 ─────────────────────────
  {
    id: 45,
    age: "4-6",
    category: "travel",
    title: { en: "Auggie and the Big Shiny Car", hi: "ऑगी और चमचमाती बड़ी गाड़ी" },
    blurb: { en: "The car is SO big and SO shiny… is Auggie brave enough to hop in?", hi: "गाड़ी इत्ती बड़ी, इत्ती चमकीली… क्या ऑगी अंदर बैठने की हिम्मत करेगा?" },
    moral: { en: "Being brave means trying, with someone you love right beside you.", hi: "बहादुरी का मतलब है — अपनों के साथ बैठो और एक बार कोशिश करो।" },
    cover: {
      bg: "city",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "papa", pose: "wave", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "car", x: 0.52 } ],
      fx: { en: "VROOM!", hi: "व्रूम!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "papa", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Jingle-jingle! Papa shakes the car keys.", hi: "छन-छन-छन! पापा ने गाड़ी की चाबी खनकाई।" },
        say: [ { who: 1, en: "Car ride, Auggie! I'm a wheel-y good driver!", hi: "चलो ऑगी, घूमने! पापा ड्राइवर, तुम सवारी — पोंपों!" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.28 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "car", x: 0.52 } ],
        cap: { en: "The car is SO big. Auggie's legs go wobble-wobble.", hi: "गाड़ी तो बहुत बड़ी है! ऑगी की टाँगें थर-थर काँपने लगीं।" },
        say: [ { who: 0, en: "Um… I'll just nap here instead. Forever.", hi: "उम्म… मैं तो यहीं सो जाता हूँ। हमेशा के लिए।", kind: "whisper" }, { who: 1, en: "Ha-ha! Nice try, my sleepy lion!", hi: "हा-हा! बहाना अच्छा है, मेरे शेर!" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.5 } ],
        cap: { en: "Mumma sits right beside him and clicks on his harness.", hi: "मम्मा उसके पास बैठ गईं और हार्नेस की क्लिक लगा दी।" },
        say: [ { who: 1, en: "Click! Now the car is hugging you tight.", hi: "क्लिक! लो, अब गाड़ी ने तुम्हें कसके झप्पी दे दी।" }, { who: 0, en: "A car hug? Okay… I'll be brave!", hi: "गाड़ी की झप्पी? ठीक है… मैं बहादुर बनूँगा!" } ],
        fx: { en: "CLICK!", hi: "क्लिक!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Papa opens the window just a crack.", hi: "पापा ने खिड़की ज़रा-सी खोली।" },
        say: [ { who: 0, en: "Papa! My ears are FLYING!", hi: "पापा! मेरे कान उड़ रहे हैं! फर्र-फर्र!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सर्र्र!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.3 }, { id: "cow", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        cap: { en: "Trees, fields and cows go zooming past.", hi: "पेड़ भागे, खेत भागे, गायें भी पीछे छूट गईं!" },
        say: [ { who: 1, en: "Moo! Is that a dog or a flag?", hi: "बाँ! ये कुत्ता है या उड़ता हुआ झंडा?" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "wave", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "bowl", x: 0.5 } ],
        cap: { en: "At the park, Auggie hops out too. No dog waits alone in a car!", hi: "पार्क आ गया! ऑगी भी साथ उतरा — कुत्ते को कभी कार में अकेला नहीं छोड़ते।" },
        say: [ { who: 0, en: "Wobbly legs? Gone! Can we drive home the long way?", hi: "टाँगों की थर-थर? ग़ायब! घर लंबे रास्ते से चलें ना?" }, { who: 1, en: "HA-HA-HA! My brave little co-pilot!", hi: "हा-हा-हा! मेरा बहादुर शेर!" } ]
      }
    ]
  },

  // ───────────────────────── 46 ─────────────────────────
  {
    id: 46,
    age: "4-6",
    category: "travel",
    title: { en: "Chhuk-Chhuk to Dadi's House", hi: "छुक-छुक-छुक, दादी के घर!" },
    blurb: { en: "A busy station, a singing train and a samosa smell… will Auggie reach Dadi?", hi: "भीड़ वाला स्टेशन, गाना गाती ट्रेन और समोसे की ख़ुशबू… क्या ऑगी दादी तक पहुँचेगा?" },
    moral: { en: "Every journey feels sweeter when someone you love waits at the end.", hi: "सफ़र के आख़िर में कोई अपना इंतज़ार करे, तो हर रास्ता मीठा लगता है।" },
    cover: {
      bg: "station",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "suitcase", x: 0.1 } ],
      fx: { en: "TOOT!", hi: "कूऊ!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 } ],
        props: [ { id: "suitcase", x: 0.6 }, { id: "ball", x: 0.82 } ],
        cap: { en: "Auggie packs for Dadi's house. Ball. Blanket. Bone. More bones.", hi: "दादी के घर की पैकिंग! गेंद, कंबल, हड्डी… और हड्डियाँ!" },
        say: [ { who: 0, en: "Hmm… can I pack Papa's pillow too?", hi: "हम्म… पापा का तकिया भी चुपके से रख लूँ?", kind: "think" } ]
      },
      {
        bg: "station",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "The station is SO busy! Auggie sticks close on his red leash.", hi: "स्टेशन पर इत्ती भीड़! ऑगी लाल पट्टे के साथ नानू से चिपककर चलता है।" },
        say: [ { who: 1, en: "Fact time! Our trains carry millions of people every day!", hi: "एक मज़ेदार बात सुनो! हमारी रेलगाड़ियाँ रोज़ करोड़ों लोगों को ले जाती हैं!" } ]
      },
      {
        bg: "station",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Nanu! The train is SINGING! Should I sing back?", hi: "नानू! ट्रेन तो गाना गा रही है! मैं भी गाऊँ?", kind: "shout" }, { who: 1, en: "Go on! Toot-toot, woof-woof!", hi: "हाँ-हाँ, गाओ! कू-छुक, भौं-भौं!" } ],
        fx: { en: "TOOT-TOOT!", hi: "कू-छुक!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "wave", mood: "laugh", x: 0.3 }, { id: "goat", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Chhuk-chhuk! Fields and villages race past the window.", hi: "छुक-छुक-छुक! खेत दौड़े, गाँव दौड़े, पेड़ भी दौड़े!" },
        say: [ { who: 1, en: "Meh-eh! Wave faster, train doggy, you're zooming!", hi: "में-में! ज़ोर से पंजा हिलाओ, ट्रेन वाले भैया!" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5 } ],
        cap: { en: "“Garam samosa!” calls a seller. Auggie's nose goes sniff-sniff.", hi: "“गरम समोसे!” — ऑगी की नाक फड़कने लगी। सूँ-सूँ!" },
        say: [ { who: 0, en: "Just ONE samosa, Nanu? Pleeease?", hi: "नानू, बस एक समोसा? प्लीईईज़?" }, { who: 1, en: "Too spicy and oily for dogs! Apple slices instead.", hi: "ना बाबा, तीखा-तेल वाला नहीं! ये लो, कुरकुरा सेब।" } ]
      },
      {
        bg: "station",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Last stop! Dadi is waiting with her arms wide open.", hi: "आख़िरी स्टेशन! दादी बाँहें फैलाए खड़ी हैं।" },
        say: [ { who: 1, en: "My brave traveller! Psst… a secret carrot, just for you!", hi: "मेरा राजा बेटा ट्रेन से आया! ले, पल्लू वाली गाजर, चुपके से!" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      }
    ]
  },

  // ───────────────────────── 47 ─────────────────────────
  {
    id: 47,
    age: "4-6",
    category: "nature",
    title: { en: "Tiku Moves Into Auggie's Castle", hi: "ऑगी के महल में टिकू का घर" },
    blurb: { en: "Auggie builds the biggest sandcastle ever… and someone tiny moves in without asking!", hi: "ऑगी ने बनाया सबसे बड़ा रेत का महल… और कोई नन्हा-सा बिना पूछे उसमें रहने आ गया!" },
    moral: { en: "Sharing turns a small castle into a big, happy home.", hi: "बाँटने से छोटा-सा महल भी बड़ा, प्यारा घर बन जाता है।" },
    cover: {
      bg: "beach",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "crab", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "sandcastle", x: 0.5 }, { id: "sun", x: 0.88, y: 0.15 } ]
    },
    panels: [
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.92 } ],
        cap: { en: "Beach day! Hot sun, soft sand, salty wind.", hi: "समुंदर वाला दिन! गरम धूप, नरम रेत, नमकीन हवा।" },
        say: [ { who: 0, en: "Sand! Sand! My paws are dancing!", hi: "रेत! रेत! मेरे पंजे नाच रहे हैं!", kind: "shout" }, { who: 1, en: "Wait! My beach list: water, shade, towel…", hi: "रुको! पहले मेरी लिस्ट: पानी, छाँव, तौलिया…" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.28 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "sandcastle", x: 0.52 } ],
        cap: { en: "Dig, pat, dig, pat. The castle grows and grows!", hi: "खोदो, थपको, खोदो, थपको। महल बड़ा, और बड़ा!" },
        say: [ { who: 1, en: "Why is the sea so friendly? It keeps waving!", hi: "पता है समुंदर नमकीन क्यों है? उसने सारे चिप्स खा लिए!" }, { who: 0, en: "Ha-ha! Tell it again, Papa!", hi: "हा-हा! पापा, फिर से सुनाओ!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "crab", pose: "stand", mood: "happy", x: 0.55, flip: true } ],
        props: [ { id: "sandcastle", x: 0.78 } ],
        cap: { en: "Peek-a-boo! A tiny crab pops out of the castle door!", hi: "टुक-टुक! महल के दरवाज़े से एक नन्हा केकड़ा झाँका!" },
        say: [ { who: 1, en: "Hello! I'm Tiku. I LOVE my new house!", hi: "नमस्ते! मैं टिकू। वाह, मेरा नया घर!" }, { who: 0, en: "Hey! That's MY castle…", hi: "अरे! वो तो मेरा महल है…", kind: "think" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "crab", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "sandcastle", x: 0.9 } ],
        say: [ { who: 0, en: "Hmm… okay, Tiku! You live inside, I'll guard outside!", hi: "हम्म… ठीक है टिकू! तुम अंदर रहो, मैं बाहर पहरा दूँगा!" }, { who: 1, en: "Yay! Just keep your giant nose out of my door!", hi: "याय! बस अपनी बड़ी-सी नाक दरवाज़े में मत घुसाना!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.28 }, { id: "crab", pose: "stand", mood: "sad", x: 0.75, flip: true } ],
        props: [ { id: "sandcastle", x: 0.52 } ],
        cap: { en: "Uh-oh! A big wave rushes in. Auggie barks, “Sit, wave, SIT!”", hi: "हाय राम! बड़ी लहर आई। ऑगी भौंका — “बैठ जा लहर, बैठ!”" },
        say: [ { who: 1, en: "My house is gone! Waves don't sit, Auggie!", hi: "मेरा घर बह गया! लहरें कुत्तों की बात नहीं मानतीं!", kind: "shout" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.25 }, { id: "crab", pose: "wave", mood: "happy", x: 0.5 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "sandcastle", x: 0.5 }, { id: "bowl", x: 0.08 }, { id: "umbrella", x: 0.94 } ],
        cap: { en: "So they build a new castle together, far from the waves.", hi: "फिर दोनों ने मिलकर लहरों से दूर नया महल बनाया।" },
        say: [ { who: 0, en: "Now we're neighbours, Tiku! Castle for you, shade for me!", hi: "अब हम पड़ोसी हैं, टिकू! महल तुम्हारा, छाँव मेरी!" }, { who: 2, en: "HA-HA-HA! Water break, builders!", hi: "हा-हा-हा! चलो कारीगरो, पहले पानी पी लो!" } ]
      }
    ]
  },

  // ───────────────────────── 48 ─────────────────────────
  {
    id: 48,
    age: "4-6",
    category: "nature",
    title: { en: "Auggie and the Hoppy Frog", hi: "ऑगी और फुदकू मेंढक" },
    blurb: { en: "A frog hops past and Auggie's legs shout CHASE! Can the red leash save the day?", hi: "एक मेंढक उछला और ऑगी की टाँगें बोलीं — पकड़ो! क्या लाल पट्टा बचा पाएगा?" },
    moral: { en: "A leash keeps you safe, and watching gently keeps animal friends happy.", hi: "पट्टा हमें सुरक्षित रखता है, और प्यार से दूर से देखो तो जानवर भी खुश रहते हैं।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.32 }, { id: "nanu", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "tree", x: 0.08 }, { id: "sun", x: 0.88, y: 0.15 } ]
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Morning! Auggie drags his red leash to Nanu.", hi: "सुबह-सुबह! ऑगी अपना लाल पट्टा घसीटता हुआ नानू के पास आया।" },
        say: [ { who: 0, en: "Nanu! Leash! Lake! Ducks! Let's GO!", hi: "नानू! पट्टा! झील! बत्तखें! चलो ना!", kind: "shout" }, { who: 1, en: "Easy, champ! Your tail is going 100 kmph!", hi: "आराम से, पहलवान! तुम्हारी पूँछ तो सौ की स्पीड पे है!" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Busy road! Nanu keeps the red leash short and snug.", hi: "सड़क पर गाड़ियाँ ही गाड़ियाँ! नानू ने पट्टा छोटा करके कसकर पकड़ा।" },
        say: [ { who: 0, en: "Cars go VROOM. Auggie goes… slow and close!", hi: "गाड़ियाँ करें पीं-पीं, ऑगी चले धीरे-धीरे, पास-पास!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.3 }, { id: "duck", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "At the lake, the ducks paddle over to say hi.", hi: "झील पर बत्तखें तैरती-तैरती पास आ गईं।" },
        say: [ { who: 1, en: "Quack-quack! Morning, Auggie! Nice big nose!", hi: "क्वैक-क्वैक! राम-राम, ऑगी भैया! क्या बढ़िया नाक है!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.32 }, { id: "frog", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
        cap: { en: "Boing! A frog hops past. Auggie's legs shout, “CHASE!”", hi: "फुदक! एक मेंढक उछला। ऑगी की टाँगें बोलीं — “पकड़ो!”" },
        say: [ { who: 1, en: "Ribbit! Catch me if you can!", hi: "टर्र-टर्र! पकड़ के दिखाओ!" } ],
        fx: { en: "HOP!", hi: "फुदक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "TUG! The red leash holds. Auggie flops down. Plop!", hi: "खिंच! लाल पट्टे ने रोका, और ऑगी धप्प से बैठ गया!" },
        say: [ { who: 1, en: "Gently! Frogs can jump 20 times their length!", hi: "आराम से! मेंढक अपने से बीस गुना लंबा कूदता है, तुम हार जाओगे!" }, { who: 0, en: "Fine. I'll be a frog-watcher, not a frog-chaser.", hi: "ठीक है… मैं मेंढक देखूँगा, पकड़ूँगा नहीं।" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.5 }, { id: "tree", x: 0.92 } ],
        cap: { en: "Shade, a bowl of cool water, and one happy dog.", hi: "पेड़ की छाँव, ठंडा-ठंडा पानी, और एक खुश कुत्ता।" },
        say: [ { who: 0, en: "Nanu, the frog waved at me! Best walk EVER!", hi: "नानू, मेंढक ने मुझे टाटा किया! आज की सैर एकदम मस्त!" }, { who: 1, en: "Because you let him hop home, my wise boy.", hi: "क्योंकि तुमने उसे घर जाने दिया, मेरे समझदार बच्चे।" } ],
        fx: { en: "SLURP!", hi: "लप-लप!" },
        action: true
      }
    ]
  },

  // ───────────────────────── 49 ─────────────────────────
  {
    id: 49,
    age: "4-6",
    category: "family",
    title: { en: "Dadi's Secret Picnic Pallu", hi: "दादी का जादुई पल्लू" },
    blurb: { en: "Laddoos on the picnic mat, and Auggie has a plan. Will his puppy eyes work?", hi: "पिकनिक में लड्डू, और ऑगी के पास है एक प्लान। क्या उसकी भोली शक्ल काम करेगी?" },
    moral: { en: "Sharing is lovely, but pets need pet-safe treats.", hi: "बाँटना अच्छी बात है, पर पालतू दोस्तों को उनके लायक़ चीज़ ही खिलाओ।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "apple", x: 0.5 }, { id: "tree", x: 0.92 }, { id: "sun", x: 0.12, y: 0.15 } ]
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.52 } ],
        cap: { en: "Sunday! Mumma plans a picnic. With a list, of course.", hi: "इतवार! मम्मा ने पिकनिक का प्लान बनाया। लिस्ट के साथ, और क्या!" },
        say: [ { who: 1, en: "Mat, tiffin, water, ball… Mittsy! Where's the mat?", hi: "चटाई, टिफ़िन, पानी, गेंद… मिट्सी! चटाई कहाँ है?", kind: "shout" }, { who: 0, en: "Ball? Check! Me? Double check!", hi: "गेंद — हाज़िर! ऑगी — डबल हाज़िर!" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.7, flip: true } ],
        props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Under a big shady tree, Papa spreads the mat.", hi: "बड़े-से छायादार पेड़ के नीचे पापा ने चटाई बिछाई।" },
        say: [ { who: 1, en: "Welcome to the picnic! It's un-BARK-lievable!", hi: "पिकनिक में सबसे अच्छा क्या? खाना! और दूसरा? और खाना!" }, { who: 0, en: "Ha-ha! Now where's my nap spot?", hi: "हा-हा! अब मेरी झपकी की जगह कहाँ है?" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Dadi opens the tiffin. Puris, pickle… and sweet laddoos!", hi: "दादी ने टिफ़िन खोला। पूरी, अचार… और मीठे-मीठे लड्डू!" },
        say: [ { who: 0, en: "Laddoos! Time for my saddest puppy eyes…", hi: "लड्डू! अब चलाता हूँ अपनी सबसे भोली शक्ल…", kind: "think" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "dadi", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Those eyes won't work, beta! Sweets give doggies tummy aches.", hi: "ये भोली शक्ल नहीं चलेगी, बेटा! मिठाई से कुत्तों का पेट दुखता है।" }, { who: 0, en: "Not even one crumb? Sniff…", hi: "एक चूरा भी नहीं? सूँ…", kind: "whisper" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5 } ],
        cap: { en: "Then Dadi peeks into her pallu. Her “secret” snacks!", hi: "फिर दादी ने पल्लू खोला — उनका “सीक्रेट” ख़ज़ाना!" },
        say: [ { who: 0, en: "Apple AND a carrot? Dadi, you're magic!", hi: "सेब भी, गाजर भी? दादी, आप तो जादूगरनी हो!" }, { who: 1, en: "Shh! Nobody knows about my pallu!", hi: "श्श! मेरे पल्लू का राज़ किसी को मत बताना!", kind: "whisper" } ],
        fx: { en: "CRUNCH!", hi: "कुरकुर!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.3 } ],
        cap: { en: "Then Mausi throws the frisbee. Auggie leaps!", hi: "फिर मौसी ने फ़्रिस्बी उछाली। ऑगी ने लगाई छलाँग!" },
        say: [ { who: 1, en: "Hold that pose! Flying-dog selfie!", hi: "रुको-रुको, ऐसे ही! उड़ते ऑगी वाली सेल्फ़ी!", kind: "shout" }, { who: 0, en: "Hold it? I'm in the AIR!", hi: "कैसे रुकूँ? मैं तो हवा में हूँ!" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      }
    ]
  },

  // ───────────────────────── 50 ─────────────────────────
  {
    id: 50,
    age: "4-6",
    category: "nature",
    title: { en: "Auggie Bites a Cloud", hi: "ऑगी ने बादल को काटा!" },
    blurb: { en: "In Meghalaya, a cloud floats down to say hello… and suddenly everyone disappears!", hi: "मेघालय में एक बादल नीचे उतर आया… और अचानक सब ग़ायब!" },
    moral: { en: "When you can't see the way, stay calm, stay close, and help each other.", hi: "जब रास्ता न दिखे, तो घबराओ मत — पास रहो और एक-दूसरे का साथ दो।" },
    cover: {
      bg: "mountains",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.32 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
      props: [ { id: "cloud", x: 0.2, y: 0.25 }, { id: "cloud", x: 0.7, y: 0.2 } ]
    },
    panels: [
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "cloud", x: 0.5, y: 0.2 } ],
        cap: { en: "Hello, Meghalaya! Green hills as far as you can see.", hi: "नमस्ते मेघालय! जहाँ देखो, हरी-भरी पहाड़ियाँ।" },
        say: [ { who: 1, en: "Fact! Meghalaya means “home of the clouds”!", hi: "पता है? मेघालय मतलब — बादलों का घर!" }, { who: 0, en: "Clouds live HERE? Can I nap on one?", hi: "बादल यहाँ रहते हैं? मैं एक पे सो जाऊँ?" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.35 } ],
        props: [ { id: "cloud", x: 0.2, y: 0.5 }, { id: "cloud", x: 0.6, y: 0.3 }, { id: "cloud", x: 0.85, y: 0.55 } ],
        cap: { en: "A fluffy cloud floats down. Chomp! Just wet air… and everyone's gone!", hi: "एक रुई जैसा बादल नीचे आया। गप्प! बस गीली हवा… और सब ग़ायब!" },
        say: [ { who: 0, en: "Mumma? Papa? Where did everyone go?", hi: "मम्मा? पापा? सब कहाँ चले गए?", kind: "think" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35 } ],
        props: [ { id: "cloud", x: 0.15, y: 0.4 }, { id: "cloud", x: 0.8, y: 0.45 } ],
        cap: { en: "Auggie can't see a thing. But his big nose can!", hi: "आँखों को कुछ नहीं दिख रहा। पर ऑगी की बड़ी नाक किस दिन काम आएगी?" },
        say: [ { who: 0, en: "No crying. Nose, it's your turn!", hi: "रोना-वोना नहीं। चल नाक, अब तेरी बारी!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "wave", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "cloud", x: 0.5, y: 0.35 } ],
        cap: { en: "Sniff… roses? That's Mumma's flower shampoo!", hi: "सूँ-सूँ… गुलाब? ये तो मम्मा का फूलों वाला शैम्पू है!" },
        say: [ { who: 1, en: "Auggie! You found me with your NOSE?", hi: "ऑगी! तूने मुझे सूँघकर ढूँढ लिया?" }, { who: 0, en: "Next smell… a very smelly sock. That's Papa!", hi: "अगली ख़ुशबू… पुराना बदबूदार मोज़ा। पापा इधर हैं!" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "cloud", x: 0.5, y: 0.15 } ],
        cap: { en: "Auggie leads Mumma straight to Papa. Clever nose!", hi: "ऑगी मम्मा को सीधा पापा तक ले आया। वाह री नाक!" },
        say: [ { who: 1, en: "Smelly socks? Me? …Okay, maybe. Hold hands, Mottu!", hi: "मेरे मोज़े बदबूदार? …अच्छा, थोड़े-से। मोटू, हाथ पकड़ो!" }, { who: 2, en: "HA-HA-HA! Auggie, stay close!", hi: "हा-हा-हा! ऑगी, पास-पास रहना!" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.85, y: 0.15 }, { id: "rainbow", x: 0.45, y: 0.2 } ],
        cap: { en: "The cloud drifts away. Green hills, and a rainbow!", hi: "बादल उड़ गया। हरी पहाड़ियाँ… और इंद्रधनुष!" },
        say: [ { who: 0, en: "Bye, cloud! Next time, bring some flavour!", hi: "टाटा बादल! अगली बार थोड़ा स्वाद लेकर आना!" }, { who: 1, en: "Group hug for my super nose!", hi: "मेरी सुपर नाक वाले को जादू की झप्पी!" } ],
        fx: { en: "WOW!", hi: "वाह!" },
        action: true
      }
    ]
  },

  // ───────────────────────── 51 ─────────────────────────
  {
    id: 51,
    age: "4-6",
    category: "india",
    title: { en: "Auggie Squeezes Into a Tuk-Tuk", hi: "ऑगी और टुक-टुक ऑटो" },
    blurb: { en: "Three wheels, zero doors and one very big Labrador. Will Auggie fit in?", hi: "तीन पहिए, दरवाज़ा एक भी नहीं, और एक बड़ा-सा लैब्राडोर। ऑगी समाएगा कैसे?" },
    moral: { en: "When we squeeze in together, even a small ride is big fun.", hi: "मिल-जुलकर एडजस्ट करो, तो छोटी सवारी भी बड़ा मज़ा देती है।" },
    cover: {
      bg: "city",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "rickshaw", x: 0.52 } ],
      fx: { en: "TUK-TUK!", hi: "टुक-टुक!" }
    },
    panels: [
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "rickshaw", x: 0.52 } ],
        cap: { en: "A yellow-green auto-rickshaw stops. Three wheels, zero doors!", hi: "एक पीला-हरा ऑटो रुका। पहिए तीन, दरवाज़ा एक भी नहीं!" },
        say: [ { who: 1, en: "Hop in, Auggie! Carrots are waiting at the market!", hi: "चढ़ जा ऑगी! बाज़ार में गाजरें इंतज़ार कर रही हैं!" }, { who: 0, en: "Carrots! But… will I even fit?", hi: "गाजर! पर… मैं इसमें समाऊँगा कैसे?" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "rickshaw", x: 0.5 } ],
        cap: { en: "Auggie tries the seat like a person. SQUISH! No room!", hi: "ऑगी सीट पर इंसानों की तरह बैठने चला। दबाक! जगह ही नहीं!" },
        say: [ { who: 1, en: "Down by my feet, beta! Chottu, hold his leash tight!", hi: "नीचे आ जा बेटा, मेरे पैरों के पास! छोटू, पट्टा कसके पकड़!" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 } ],
        props: [ { id: "rickshaw", x: 0.55 }, { id: "bus", x: 0.88 } ],
        cap: { en: "Tuk-tuk-tuk! The auto zips through the busy street.", hi: "टुक-टुक-टुक! ऑटो भीड़ वाली सड़क में फुर्र से दौड़ा!" },
        say: [ { who: 0, en: "It honks like a duck! Peep-peep! Quack!", hi: "ये तो बत्तख जैसा हॉर्न बजाता है! पीं-पीं! क्वैक!", kind: "shout" } ],
        fx: { en: "PEEP-PEEP!", hi: "पीं-पीं!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Bumpy-road selfie! Hold that pose… oops, blurry!", hi: "उछलती सड़क पे सेल्फ़ी! पोज़ पकड़ो… ओफ़्फ़ो, धुँधली आ गई!" }, { who: 0, en: "My ears went up! My tummy went down!", hi: "मेरे कान ऊपर गए, पेट नीचे!" } ],
        fx: { en: "BUMP!", hi: "धक्क!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "carrot", x: 0.5 } ],
        cap: { en: "Here's the market, bursting with colours!", hi: "लो जी, आ गया रंग-बिरंगा बाज़ार!" },
        say: [ { who: 0, en: "Carrots! Bananas! I count… twenty-three carrots!", hi: "गाजरें! केले! एक, दो… तेईस गाजरें!" }, { who: 1, en: "Ha-ha! My list says TWO carrots, not twenty-three!", hi: "हा-हा! मेरी लिस्ट में दो गाजरें हैं, तेईस नहीं!" } ]
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "mumma", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "rickshaw", x: 0.52 } ],
        cap: { en: "Auggie gives the kind auto bhaiya a big paw-shake.", hi: "ऑगी ने ऑटो वाले भैया से पंजा मिलाया — धन्यवाद!" },
        say: [ { who: 0, en: "Thank you, tuk-tuk! Small ride, BIG fun!", hi: "शुक्रिया टुक-टुक! सवारी छोटी, मज़ा बड़ा!" }, { who: 1, en: "Squeezed together, laughed together. Best ride!", hi: "सब चिपककर बैठे, सब मिलकर हँसे। वाह!" } ]
      }
    ]
  },

  // ───────────────────────── 52 ─────────────────────────
  {
    id: 52,
    age: "4-6",
    category: "travel",
    title: { en: "Auggie Waits a Hundred Years", hi: "ऑगी का सौ साल लंबा इंतज़ार" },
    blurb: { en: "Mausi's plane lands in one hour. For Auggie, that's a hundred years!", hi: "मौसी का जहाज़ एक घंटे में आएगा। ऑगी के लिए तो वो सौ साल हैं!" },
    moral: { en: "Waiting gets easier when you fill it with fun.", hi: "इंतज़ार में कुछ मज़ेदार करो, तो वक़्त फुर्र से उड़ जाता है।" },
    cover: {
      bg: "airport",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "plane", x: 0.55, y: 0.18 } ]
    },
    panels: [
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "papa", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "plane", x: 0.5, y: 0.2 } ],
        cap: { en: "Airport! Mausi's plane is coming home today!", hi: "एयरपोर्ट! आज मौसी का जहाज़ घर आ रहा है!" },
        say: [ { who: 1, en: "She lands in one hour, Auggie.", hi: "बस एक घंटे में उतरेगा, ऑगी।" }, { who: 0, en: "One hour? That's a HUNDRED years!", hi: "एक घंटा? वो तो सौ साल हुए!", kind: "shout" } ]
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 } ],
        props: [ { id: "plane", x: 0.65, y: 0.15 } ],
        cap: { en: "Whoosh! A giant plane zooms into the sky.", hi: "सूँऽऽ! एक बड़ा जहाज़ आसमान में उड़ चला।" },
        say: [ { who: 0, en: "Mausi, is that you? Wait! Wrong way!", hi: "मौसी, आप हो? रुको! उल्टी तरफ़ जा रही हो!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सूँऽऽ!" },
        action: true
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "plane", x: 0.5, y: 0.15 } ],
        say: [ { who: 0, en: "How does it fly? It doesn't even flap!", hi: "ये उड़ता कैसे है? पंख तो हिलाता ही नहीं!" }, { who: 1, en: "Big wings, strong engines! Planes just… wing it! Ha!", hi: "बड़े-बड़े पंख, तगड़े इंजन! और पायलट अंकल, जो कभी झपकी नहीं लेते!" } ]
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.32 } ],
        props: [ { id: "clock", x: 0.72, y: 0.3 } ],
        cap: { en: "Tick-tock. Auggie counts planes. One carrot, two carrots, three…", hi: "टिक-टिक। ऑगी जहाज़ गिनता है — एक गाजर, दो गाजर, तीन…" },
        say: [ { who: 0, en: "Zzz… four carrots… Mausi… zzz…", hi: "खर्र… चार गाजर… मौसी… खर्र…", kind: "whisper" } ]
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "run", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "suitcase", x: 0.92 } ],
        say: [ { who: 1, en: "AUGGIEEE! Did you miss me?", hi: "ऑगीईईई! मेरी याद आई?", kind: "shout" }, { who: 0, en: "For a HUNDRED years!", hi: "पूरे सौ साल जितनी!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 } ],
        cap: { en: "First thing? A welcome-home selfie, of course!", hi: "सबसे पहला काम? वेलकम-होम सेल्फ़ी, और क्या!" },
        say: [ { who: 1, en: "Hold that pose! Say cheese!", hi: "पोज़ पकड़ो! बोलो चीज़!" }, { who: 0, en: "Woof-cheese! Now… did you bring carrots?", hi: "भौं-चीज़! अब बताओ… गाजर लाईं?" } ]
      }
    ]
  },

  // ───────────────────────── 53 ─────────────────────────
  {
    id: 53,
    age: "4-6",
    category: "india",
    title: { en: "Auggie's Wobbly Shikara Ride", hi: "ऑगी की डगमग शिकारा सवारी" },
    blurb: { en: "A fish says hello from Dal Lake. Auggie wants to jump in. Uh-oh!", hi: "डल झील से एक मछली ने हाय बोला। ऑगी को छलाँग लगानी है। हाय राम!" },
    moral: { en: "On the water, staying calm keeps everyone safe and happy.", hi: "पानी पर शांत रहो, तो सब सुरक्षित भी रहते हैं और खुश भी।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.35 }, { id: "papa", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "boat", x: 0.5 } ]
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        cap: { en: "Dal Lake in Srinagar, shining like a giant mirror.", hi: "श्रीनगर की डल झील — जैसे कोई बड़ा-सा आईना!" },
        say: [ { who: 1, en: "These painted boats are shikaras. See the heart-shaped paddles?", hi: "इन रंगीन नावों को शिकारा कहते हैं। देखो, चप्पू दिल जैसे हैं!" }, { who: 0, en: "Boats with hearts? I love them already!", hi: "दिल वाली नाव? मुझे तो अभी से प्यार हो गया!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Rule one: everybody wears a life jacket. Auggie too!", hi: "पहला नियम: सबकी लाइफ़ जैकेट। ऑगी की भी!" },
        say: [ { who: 0, en: "Mumma, I look like a floating mango!", hi: "मम्मा, मैं तो तैरता हुआ आम लग रहा हूँ!" }, { who: 1, en: "HA-HA-HA! The cutest mango in Kashmir!", hi: "हा-हा-हा! कश्मीर का सबसे प्यारा आम!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "boat", x: 0.5 } ],
        cap: { en: "The boatman paddles slowly. Splish… splash… so calm.", hi: "नाववाले भैया धीरे-धीरे चप्पू चलाते हैं। छप… छप… कितना शांत!" },
        say: [ { who: 1, en: "Auggie, what does a boat eat? ROW-tis!", hi: "ये नाव इतनी धीरे क्यों चलती है? इसे भी झपकी आ रही है!" }, { who: 0, en: "Ha-ha! I don't get it… ha-ha-ha!", hi: "हा-हा! मुझे भी आ रही है!" } ],
        fx: { en: "SPLISH!", hi: "छप-छप!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "fish", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Auggie leans out to say hi… the whole boat wobbles!", hi: "ऑगी झुककर हाय बोलने लगा… पूरी नाव डगमगाई!" },
        say: [ { who: 1, en: "Blub! Stay in, big doggy! Big splashes scare us!", hi: "ब्लब-ब्लब! अंदर ही रहो, बड़े भैया! छपाक से हमें डर लगता है!" }, { who: 0, en: "Oops! Okay, I'll wave from right here.", hi: "उफ़्फ़! ठीक है, यहीं से टाटा करूँगा।" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "flower", x: 0.5 }, { id: "boat", x: 0.52 } ],
        cap: { en: "Look! Boats piled with flowers float right past!", hi: "देखो! फूलों से लदी नावें पास से तैरती जा रही हैं!" },
        say: [ { who: 1, en: "Hold that pose! Flower-crown selfie!", hi: "पोज़ पकड़ो! फूलों के ताज वाली सेल्फ़ी!" }, { who: 0, en: "Achoo! The flowers tickle my nose!", hi: "आक्छीं! फूल नाक में गुदगुदी कर रहे हैं!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "boat", x: 0.5 }, { id: "sun", x: 0.88, y: 0.2 } ],
        cap: { en: "The boat rocks gently. Rock-a-bye, Auggie…", hi: "नाव धीरे-धीरे झूला झुलाती है… और ऑगी सो गया।" },
        say: [ { who: 1, en: "Shh… our brave sailor chose calm today.", hi: "श्श… आज हमारा नाविक एकदम शांत रहा।", kind: "whisper" } ],
        fx: { en: "SNORE!", hi: "खर्र!" },
        action: true
      }
    ]
  },

  // ───────────────────────── 54 ─────────────────────────
  {
    id: 54,
    age: "4-6",
    category: "nature",
    title: { en: "Auggie and the Tree Monster", hi: "ऑगी और पेड़ वाला राक्षस" },
    blurb: { en: "First night in a tent, and something in the tree says HOO! Is it a monster?", hi: "तंबू में पहली रात, और पेड़ से कोई बोला — हू-ऊ! कहीं राक्षस तो नहीं?" },
    moral: { en: "The dark is less scary when you look up and stay together.", hi: "ऊपर तारे देखो और अपनों के पास रहो, तो अँधेरा भी प्यारा लगता है।" },
    cover: {
      bg: "forest",
      chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "tent", x: 0.52 }, { id: "star", x: 0.2, y: 0.1 }, { id: "star", x: 0.82, y: 0.12 } ]
    },
    panels: [
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "papa", pose: "blast", mood: "surprised", x: 0.75, flip: true } ],
        props: [ { id: "tent", x: 0.52 } ],
        cap: { en: "Camping trip! Papa builds the tent. Sort of.", hi: "कैंपिंग! पापा तंबू लगा रहे हैं। मतलब… कोशिश कर रहे हैं।" },
        say: [ { who: 1, en: "Mottu! Is this tent upside down, or am I?", hi: "मोटू! ये तंबू उल्टा है, या मैं?", kind: "shout" }, { who: 0, en: "I'll test it! Nap test… starting now!", hi: "मैं चेक करता हूँ! झपकी वाला टेस्ट शुरू!" } ]
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "mumma", pose: "sit", mood: "determined", x: 0.78, flip: true } ],
        props: [ { id: "campfire", x: 0.52 } ],
        cap: { en: "A cosy campfire. Auggie sits a safe distance away.", hi: "गरमागरम अलाव। ऑगी सुरक्षित दूरी पर बैठा है।" },
        say: [ { who: 1, en: "Not too close, beta! Fire is hot, hot, HOT!", hi: "ज़्यादा पास नहीं, बेटा! आग गरम-गरम-गरम!" }, { who: 0, en: "I'm way back here! Toasty tail, safe nose!", hi: "मैं तो पीछे हूँ! पूँछ गरम, नाक सुरक्षित!" } ],
        fx: { en: "CRACKLE!", hi: "चट-चट!" },
        action: true
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.3 }, { id: "owl", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.9 } ],
        cap: { en: "It gets dark. Something in the tree goes… HOO!", hi: "अँधेरा हुआ। पेड़ पर से कोई बोला… हू-ऊ!" },
        say: [ { who: 0, en: "Eek! A tree monster!", hi: "हाय! पेड़ वाला राक्षस!", kind: "shout" }, { who: 1, en: "Monster? I'm Hootu the owl! Tiny and friendly!", hi: "राक्षस? मैं? अरे, मैं तो हूटू उल्लू हूँ, छोटा-सा!" } ],
        fx: { en: "HOO-HOO!", hi: "हू-हू!" },
        action: true
      },
      {
        bg: "nightsky",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "papa", pose: "lie", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.25, y: 0.1 }, { id: "star", x: 0.55, y: 0.15 }, { id: "star", x: 0.85, y: 0.08 } ],
        cap: { en: "Papa and Auggie lie down and look up. Wow…", hi: "पापा और ऑगी लेटकर ऊपर देखते हैं। वाह…" },
        say: [ { who: 0, en: "So many stars! More than all my carrots!", hi: "इत्ते सारे तारे! मेरी सारी गाजरों से भी ज़्यादा!" }, { who: 1, en: "More than all my jokes, too!", hi: "मेरे जोक्स से भी ज़्यादा!" } ]
      },
      {
        bg: "nightsky",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "papa", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.4, y: 0.1 }, { id: "star", x: 0.7, y: 0.12 } ],
        say: [ { who: 1, en: "Stars look tiny, but they're giant suns, far, far away!", hi: "ये जो नन्हे-नन्हे तारे हैं ना, असल में बहुत दूर के बड़े-बड़े सूरज हैं!" }, { who: 0, en: "Giant suns? Then the dark isn't scary. It's sparkly!", hi: "बड़े-बड़े सूरज? फिर तो अँधेरा डरावना नहीं, चमकीला है!" } ]
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "mumma", pose: "lie", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "tent", x: 0.52 }, { id: "star", x: 0.2, y: 0.1 }, { id: "star", x: 0.82, y: 0.1 } ],
        cap: { en: "Snug in the tent, Auggie dreams of carrot-shaped stars.", hi: "तंबू में दुबककर ऑगी गाजर जैसे तारों के सपने देखता है।" },
        say: [ { who: 1, en: "Good night, my brave little star.", hi: "सो जा, मेरे चंदा… मेरे बहादुर तारे।", kind: "whisper" } ]
      }
    ]
  },

  // ───────────────────────── 55 ─────────────────────────
  {
    id: 55,
    age: "4-6",
    category: "animals",
    title: { en: "Moo-Woof! Auggie on the Farm", hi: "बाँ-भौं! ऑगी चला खेत पर" },
    blurb: { en: "Auggie tries to moo like a cow and meh like a goat. What comes out?", hi: "ऑगी गाय की तरह बाँ और बकरी की तरह में करना चाहता है। पर निकलता क्या है?" },
    moral: { en: "You don't have to sound like others. Your own woof is wonderful.", hi: "दूसरों जैसा बनने की ज़रूरत नहीं — तुम जैसे हो, वैसे ही बढ़िया हो।" },
    cover: {
      bg: "farm",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "cow", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "tree", x: 0.08 } ],
      fx: { en: "MOO-WOOF!", hi: "बाँ-भौं!" }
    },
    panels: [
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Nanu and Auggie visit a real village farm. Moo! Meh! Quack!", hi: "नानू और ऑगी गाँव के असली खेत पर! बाँ! में! क्वैक!" },
        say: [ { who: 1, en: "Fact! Farmers grow the food on our plates!", hi: "पता है? हमारी थाली का खाना किसान ही उगाते हैं!" }, { who: 0, en: "Even carrots? Farmers are my HEROES!", hi: "गाजर भी? फिर तो किसान मेरे हीरो हैं!" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "cow", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Auggie wants to fit in. He tries to moo…", hi: "ऑगी को सबके जैसा बनना है। उसने रँभाने की कोशिश की…" },
        say: [ { who: 0, en: "MOO-WOOF! …Hmm. That came out wrong.", hi: "बाँ-भौं! …उफ़, ये ग़लत निकला।" }, { who: 1, en: "Moo-ha-ha! I'm Lali. Good try, though!", hi: "बाँ-हा-हा! मैं लाली। कोशिश बढ़िया थी!" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "goat", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Okay, goat time. MEH-WOOF!", hi: "अच्छा, अब बकरी वाली। में-भौं!", kind: "shout" }, { who: 1, en: "Meh-eh! You sound like a sneezing scooter!", hi: "में-में! तुम तो छींकते स्कूटर जैसे लग रहे हो!" } ],
        fx: { en: "MEH-EH!", hi: "में-में!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "duck", pose: "run", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.52 } ],
        cap: { en: "Auggie's ears droop. He can't moo OR meh.", hi: "ऑगी के कान लटक गए। न बाँ आया, न में।" },
        say: [ { who: 1, en: "Quack! Who cares? Can you SPLASH?", hi: "क्वैक! छोड़ो ना! छपाक करना आता है?" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.32 }, { id: "duck", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.5 } ],
        cap: { en: "Can he splash? He's a Labrador! Best splasher on the farm!", hi: "छपाक? अरे, ऑगी तो लैब्राडोर है! खेत का नंबर वन छपाकू!" },
        say: [ { who: 0, en: "WOOF! My own woof works best!", hi: "भौं! अपनी वाली भौं ही सबसे बढ़िया है!", kind: "shout" }, { who: 1, en: "Quack-tastic! Again, again!", hi: "क्वैक-क्वैक! फिर से, फिर से!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "The farmer gives muddy Auggie a crunchy carrot.", hi: "किसान भैया ने कीचड़ वाले ऑगी को कुरकुरी गाजर दी।" },
        say: [ { who: 1, en: "Fun fact: a cow's tummy has four parts!", hi: "एक बात बताऊँ? गाय के पेट के चार हिस्से होते हैं!" }, { who: 0, en: "Four? Then I'm sharing my carrot with Lali!", hi: "चार? तो मेरी गाजर में लाली का भी हिस्सा!" } ]
      }
    ]
  },

  // ───────────────────────── 56 ─────────────────────────
  {
    id: 56,
    age: "6-10",
    category: "travel",
    title: { en: "Papa's Slipper Goes on Holiday", hi: "पापा की चप्पल चली छुट्टी पर" },
    blurb: { en: "A sneaky wave steals Papa's slipper. Can Auggie be a hero without jumping into a red-flag sea?", hi: "एक शरारती लहर पापा की चप्पल ले भागी। क्या ऑगी लाल झंडे वाले समुंदर में कूदे बिना हीरो बन पाएगा?" },
    moral: { en: "Real heroes know when to wait, and are kind to sea creatures.", hi: "असली हीरो जानते हैं कि कब रुकना है, और समुंदर के जीवों से प्यार से पेश आते हैं।" },
    cover: {
      bg: "beach",
      chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.25 }, { id: "papa", pose: "run", mood: "surprised", x: 0.52 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
      props: [ { id: "palm", x: 0.05 }, { id: "sun", x: 0.9, y: 0.12 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.28 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "suitcase", x: 0.53 } ],
        cap: { en: "Holiday! Mumma's packing list is longer than Auggie's tail.", hi: "छुट्टी! मम्मा की पैकिंग लिस्ट ऑगी की पूँछ से भी लंबी है।" },
        say: [ { who: 1, en: "Bowl, towel, sunscreen, ball… Mittsy, did you pack your orange shorts?", hi: "कटोरा, तौलिया, सनस्क्रीन, गेंद… मिट्सी, तुम्हारी संतरी निक्कर रखी?" }, { who: 0, en: "I packed the important stuff: one ball and seven carrots!", hi: "मैंने ज़रूरी सामान रख लिया — एक गेंद और सात गाजरें!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "wave", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "palm", x: 0.95 } ],
        cap: { en: "Goa is India's smallest state, but its golden beaches go on and on!", hi: "गोवा भारत का सबसे छोटा राज्य है, पर इसके सुनहरे बीच ख़त्म ही नहीं होते!" },
        say: [ { who: 0, en: "Holiday Papa, reporting for duty! Orange shorts: ON!", hi: "छुट्टी वाले पापा हाज़िर! संतरी निक्कर — पहन ली!" }, { who: 2, en: "HA-HA-HA! You look like a walking mango, Mittsy!", hi: "हा-हा-हा! मिट्सी, तुम तो चलता-फिरता आम लग रहे हो!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "umbrella", x: 0.32 }, { id: "bowl", x: 0.52 } ],
        cap: { en: "Hot sand can burn paws, so Auggie stays in the shade with fresh water.", hi: "गरम रेत पंजे जला सकती है, इसलिए ऑगी छतरी की छाँव में ठंडा पानी पी रहा है।" },
        say: [ { who: 0, en: "Holiday rule number one: shade, water, nap. In that order.", hi: "छुट्टी का पहला नियम: छाँव, पानी, झपकी। बस इतना ही!" }, { who: 1, en: "Rule number two: no sand in my sandwich, please!", hi: "और दूसरा नियम: मेरे सैंडविच में रेत नहीं, प्लीज़!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.25 }, { id: "papa", pose: "run", mood: "surprised", x: 0.62, flip: true } ],
        cap: { en: "Papa strolls by the water. Then a sneaky wave rushes in… and out!", hi: "पापा पानी के किनारे टहल रहे थे। तभी एक शरारती लहर आई… और गई!" },
        say: [ { who: 1, en: "My slipper! It's gone on its own holiday!", hi: "मेरी चप्पल! ये तो अकेले ही घूमने निकल गई!", kind: "shout" }, { who: 0, en: "Don't worry, Papa! Hero Auggie is ON it!", hi: "फ़िक्र मत करो पापा! हीरो ऑगी आ रहा है!" } ],
        fx: { en: "WHOOSH!", hi: "सर्र्र!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "stand", mood: "sad", x: 0.3 }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "Auggie charges for the waves. But the lifeguard's red flag means the sea is rough today.", hi: "ऑगी लहरों की तरफ़ दौड़ा। पर लाइफ़गार्ड का लाल झंडा बता रहा है — आज समुंदर तेज़ है।" },
        say: [ { who: 1, en: "STOP, Auggie! Red flag means nobody swims, not even heroes!", hi: "रुको ऑगी! लाल झंडा मतलब कोई नहीं तैरेगा — हीरो भी नहीं!", kind: "shout" }, { who: 0, en: "But… heroes are supposed to be FAST!", hi: "पर… हीरो तो फटाफट काम करते हैं!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "papa", pose: "think", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "So they wait. When the tide pulls back, Auggie sniffs along the wet sand.", hi: "तो सबने इंतज़ार किया। पानी पीछे हटा, तो ऑगी गीली रेत सूँघने लगा।" },
        say: [ { who: 1, en: "Find it, Super Sniffer! Trust me, that slipper smells VERY Papa.", hi: "ढूँढो, सुपर नाक! मेरी चप्पल की ख़ुशबू तो तुम दूर से पहचान लोगे!" }, { who: 0, en: "Sniff… seaweed… shells… aha! Stinky-slipper smell!", hi: "सूँ-सूँ… समुंदरी घास… सीपियाँ… मिल गई! बदबूदार चप्पल!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.28 }, { id: "crab", pose: "wave", mood: "happy", x: 0.7, flip: true } ],
        props: [ { id: "rock", x: 0.9 }, { id: "shell", x: 0.5 } ],
        cap: { en: "Behind a rock lies the slipper, and someone has moved in: a tiny hermit crab!", hi: "चट्टान के पीछे मिली चप्पल… पर उसमें तो कोई रहने लगा है! एक नन्हा हर्मिट केकड़ा!" },
        say: [ { who: 1, en: "I'm Tak-Tak! Hermit crabs borrow homes. This one is super comfy!", hi: "मैं टक-टक! हम हर्मिट केकड़े उधार के घर में रहते हैं। ये वाला बड़ा आरामदायक है!" }, { who: 0, en: "It's Papa's slipper! How about this shiny shell instead? Just your size!", hi: "वो पापा की चप्पल है! बदले में ये चमकीली सीप कैसी रहेगी? एकदम तुम्हारे साइज़ की!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "crab", pose: "wave", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "shell", x: 0.9 }, { id: "sun", x: 0.88, y: 0.15 } ],
        cap: { en: "Tak-Tak moves into his shiny new shell. Papa gets his slipper back, sandy but safe!", hi: "टक-टक अपनी चमकीली सीप में शिफ़्ट हो गया। पापा को मिली चप्पल — रेत भरी, पर सही-सलामत!" },
        say: [ { who: 1, en: "I wanted to be a FAST hero. Turns out waiting was the hero part!", hi: "मुझे फटाफट वाला हीरो बनना था। पर असली बहादुरी तो इंतज़ार करने में थी!" }, { who: 0, en: "Best detective ever! This slipper never goes on holiday alone again!", hi: "सबसे बढ़िया जासूस! अब ये चप्पल अकेले छुट्टी पर कभी नहीं जाएगी!" } ]
      }
    ]
  },

  // ───────────────────────── 57 ─────────────────────────
  {
    id: 57,
    age: "6-10",
    category: "nature",
    title: { en: "Auggie Hears the Giant Wave", hi: "ऑगी ने सुनी बड़ी लहर की आहट" },
    blurb: { en: "Mausi wants the perfect photo at the rocky edge. Only Auggie can hear what's coming…", hi: "मौसी को चट्टान के किनारे वाली परफ़ेक्ट फ़ोटो चाहिए। पर आने वाली मुसीबत सिर्फ़ ऑगी सुन सकता है…" },
    moral: { en: "No photo is worth the risk; admire the sea from a safe distance.", hi: "कोई भी फ़ोटो जान से बढ़कर नहीं; समुंदर को सुरक्षित दूरी से निहारो।" },
    cover: {
      bg: "ocean",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.32 }, { id: "mausi", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
      props: [ { id: "rock", x: 0.92 } ],
      fx: { en: "CRASH!", hi: "धड़ाम!" }
    },
    panels: [
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        cap: { en: "Malpe beach, Karnataka. A little boat chugs the family toward St. Mary's Island.", hi: "कर्नाटक का मालपे बीच। एक छोटी नाव परिवार को सेंट मैरी द्वीप की तरफ़ ले चली।" },
        say: [ { who: 1, en: "Life jackets first! Auggie, yours is the one with paw prints.", hi: "पहले सब लाइफ़ जैकेट पहनो! ऑगी, पंजे वाली जैकेट तुम्हारी है।" }, { who: 0, en: "Paw prints? Finally, fashion that understands me!", hi: "पंजे वाली? वाह, आख़िरकार कोई तो मेरा स्टाइल समझा!" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        cap: { en: "The boat bounces over the waves. Salty spray everywhere!", hi: "नाव लहरों पर उछल-उछलकर चली। नमकीन फुहारें — छपाक!" },
        say: [ { who: 1, en: "Bouncy-boat selfie! Hold that pose… Auggie, stop licking my lens!", hi: "उछलती नाव वाली सेल्फ़ी! पोज़ पकड़ो… अरे ऑगी, लेंस चाटने को किसने बोला?" }, { who: 0, en: "It had sea salt on it! Yum!", hi: "उस पे नमक लगा था! मज़ेदार!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "rock", x: 0.52 }, { id: "rock", x: 0.95 } ],
        cap: { en: "The island is full of strange rocks, standing in tall stripes like giant pencils!", hi: "द्वीप पर अजीब-सी चट्टानें हैं — एक-दूसरे से सटी, जैसे बड़ी-बड़ी पेंसिलें!" },
        say: [ { who: 1, en: "Fact! Millions of years ago, hot lava cooled and cracked into these columns!", hi: "सुनो! लाखों साल पहले गरम लावा ठंडा होकर चटका, और बन गए ये खंभे!" }, { who: 0, en: "Millions of years? They're even older than Nanu!", hi: "लाखों साल? ये तो नानू से भी पुरानी हैं!" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.28 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.92 } ],
        cap: { en: "Mausi spots the perfect photo place: the slippery edge of the rocks.", hi: "मौसी को फ़ोटो की एकदम सही जगह दिखी — चट्टानों का फिसलन वाला किनारा।" },
        say: [ { who: 0, en: "Mausi, how about a photo waaay back here? Nice and dry?", hi: "मौसी, फ़ोटो यहाँ पीछे से लें? सूखी-सूखी जगह से?" }, { who: 1, en: "Aww, a photobomb! Cute! Now shoo, one step closer…", hi: "अरे वाह, फ़ोटोबॉम्ब! प्यारा! अब हटो, बस एक क़दम आगे…" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.35 } ],
        props: [ { id: "rock", x: 0.8 } ],
        cap: { en: "Auggie's Super Ears twitch. Far out at sea, a deep rumble grows louder… and louder…", hi: "ऑगी के सुपर कान खड़े हो गए। दूर समुंदर में एक भारी गड़गड़ाहट बढ़ती जा रही है…" },
        say: [ { who: 0, en: "That rumble… a GIANT wave! Hints aren't working. Time for my biggest woof!", hi: "ये आवाज़… बहुत बड़ी लहर! इशारे बेकार। अब लगेगी सबसे ज़ोरदार भौं!", kind: "think" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "mausi", pose: "run", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "WOOF! Auggie gently tugs Mausi's dupatta and pulls her back from the edge.", hi: "भौं-भौं! ऑगी ने धीरे से मौसी का दुपट्टा खींचा और उन्हें किनारे से पीछे ले आया।" },
        say: [ { who: 1, en: "Hey! My photo! Auggie, what's gotten into you?", hi: "अरे! मेरी फ़ोटो! ऑगी, तुम्हें हुआ क्या है?", kind: "shout" } ],
        fx: { en: "WOOF-WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.22 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        props: [ { id: "rock", x: 0.65 } ],
        cap: { en: "CRASH! A giant wave smashes over the exact spot where Mausi was standing!", hi: "धड़ाम! ठीक उसी जगह, जहाँ मौसी खड़ी थीं, एक विशाल लहर आ टकराई!" },
        say: [ { who: 1, en: "Oh! He heard it coming… and I only heard my camera.", hi: "ओह! इसने लहर की आवाज़ सुन ली… और मैं बस अपने कैमरे की क्लिक सुन रही थी।" }, { who: 2, en: "Shabash, Auggie! Rule of the sea: admire it from a safe distance.", hi: "शाबाश ऑगी! समुंदर का नियम: उसे दूर से निहारो, किनारे से नहीं।" } ],
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 } ],
        cap: { en: "New photo spot: far back, dry and safe. And somehow, it's the best one yet!", hi: "नई जगह: पीछे, सूखी और सुरक्षित। और मज़े की बात — ये अब तक की सबसे बढ़िया फ़ोटो है!" },
        say: [ { who: 1, en: "Sorry I didn't listen, Auggie. No photo is worth a wave!", hi: "सॉरी ऑगी, मैंने तुम्हारी बात नहीं सुनी। कोई फ़ोटो लहर से बड़ी नहीं!" }, { who: 0, en: "Apology accepted! Fee: one carrot. Now… say CHEESE!", hi: "सॉरी मंज़ूर! फ़ीस — एक गाजर। अब बोलो… चीज़!" } ]
      }
    ]
  },

  // ───────────────────────── 58 ─────────────────────────
  {
    id: 58,
    age: "6-10",
    category: "travel",
    title: { en: "Snowy's Howl in the Snowstorm", hi: "बर्फ़ीले तूफ़ान में स्नोवी का गाना" },
    blurb: { en: "Auggie meets snow, a very loud husky and a sudden snowfall. Where did Mausi go?", hi: "ऑगी की पहली बर्फ़, एक बेसुरा हस्की और अचानक बर्फ़बारी। मौसी कहाँ गईं?" },
    moral: { en: "In the mountains, stay with your group, and remember every friend's gift counts.", hi: "पहाड़ों में हमेशा साथ रहो — और याद रखो, हर दोस्त की कोई ख़ूबी काम आती है।" },
    cover: {
      bg: "snow",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "tree", x: 0.08 } ],
      fx: { en: "AWOOO!", hi: "आऊऊ!" }
    },
    panels: [
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "map", x: 0.52 } ],
        cap: { en: "Next stop: Manali in Himachal Pradesh! Nanu and Auggie study the map.", hi: "अगला पड़ाव: हिमाचल का मनाली! नानू और ऑगी नक्शा देख रहे हैं।" },
        say: [ { who: 1, en: "Fact! Manali sits beside the Beas River, high in the Himalayas.", hi: "सुनो! मनाली हिमालय की गोद में, ब्यास नदी के किनारे बसा है।" }, { who: 0, en: "Great. But where on this map are the snacks?", hi: "बढ़िया। पर इस नक्शे में नाश्ता कहाँ है?" } ]
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.28 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        cap: { en: "Solang Valley! Everything is white. Auggie has never seen snow before!", hi: "सोलंग घाटी! चारों तरफ़ सफ़ेदी ही सफ़ेदी। ऑगी ने पहली बार बर्फ़ देखी!" },
        say: [ { who: 0, en: "Mumma! The whole ground is VANILLA ICE CREAM!", hi: "मम्मा! पूरी ज़मीन वनीला आइसक्रीम की बनी है!", kind: "shout" }, { who: 1, en: "It's snow, silly! My list: jacket on, no snow-eating, stay close!", hi: "बर्फ़ है, बुद्धू! मेरी लिस्ट: जैकेट पहनो, बर्फ़ मत खाओ, पास रहो!" } ],
        fx: { en: "WOW!", hi: "वाह!" },
        action: true
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "snowy", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "AWOOO! I'm Snowy! Huskies don't bark, we SING. Badly, but loudly!", hi: "आऊऊऊ! मैं स्नोवी! हस्की भौंकते नहीं, गाते हैं। बेसुरा, पर ज़ोर से!", kind: "shout" }, { who: 0, en: "Woof! I'm Auggie. My ears hurt… and my paws are freezing!", hi: "भौं! मैं ऑगी। मेरे कान बज गए… और पंजे जम गए!" } ],
        fx: { en: "AWOOO!", hi: "आऊऊ!" },
        action: true
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "run", mood: "laugh", x: 0.7 } ],
        cap: { en: "Snowy bounces through the snow like a spring. Auggie tries… and sinks like a potato.", hi: "स्नोवी बर्फ़ में स्प्रिंग जैसा उछलता है। ऑगी ने कोशिश की… और आलू की तरह धँस गया!" },
        say: [ { who: 1, en: "My thick double coat keeps me toasty. I love cold and HATE summer!", hi: "मेरी घनी दोहरी खाल मुझे गरम रखती है। ठंड मेरी दोस्त, गर्मी से मेरी तौबा!" }, { who: 0, en: "Show-off! …Okay, fine. Teach me the bouncy thing!", hi: "दिखावेबाज़! …अच्छा ठीक है, मुझे भी उछलना सिखाओ!" } ]
      },
      {
        bg: "snow",
        chars: [ { id: "mausi", pose: "stand", mood: "laugh", x: 0.4 } ],
        props: [ { id: "camera", x: 0.6, y: 0.4 }, { id: "tree", x: 0.12 }, { id: "tree", x: 0.9 } ],
        cap: { en: "Meanwhile, Mausi wanders off, taking selfies with the snowy pine trees…", hi: "इधर मौसी बर्फ़ीले देवदार के पेड़ों के साथ सेल्फ़ी लेते-लेते दूर निकल गईं…" },
        say: [ { who: 0, en: "Hold that pose, tree! Just one more… and one more…", hi: "पेड़ जी, पोज़ पकड़ो! बस एक और… और एक…" } ]
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.28 }, { id: "mumma", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        props: [ { id: "cloud", x: 0.3, y: 0.15 }, { id: "cloud", x: 0.7, y: 0.12 } ],
        cap: { en: "Whoosh! Thick snow tumbles down. Everything turns white… and Mausi is nowhere!", hi: "सर्र! घनी बर्फ़ गिरने लगी। सब कुछ सफ़ेद… और मौसी का कहीं पता नहीं!" },
        say: [ { who: 1, en: "CHOTTU! Can you hear me? Chottuuu!", hi: "छोटू! आवाज़ आ रही है? छोटूऊऊ!", kind: "shout" }, { who: 0, en: "I can't see her… but I can SMELL her!", hi: "दिख तो नहीं रहीं… पर ख़ुशबू आ रही है!" } ]
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.28 }, { id: "snowy", pose: "blast", mood: "determined", x: 0.6, flip: true } ],
        props: [ { id: "cloud", x: 0.5, y: 0.12 } ],
        cap: { en: "Auggie follows her trail. But the snow is so thick, Mausi can't see them coming!", hi: "ऑगी ख़ुशबू के पीछे चला। पर बर्फ़ इतनी घनी है कि मौसी को वो दिख ही नहीं रहे!" },
        say: [ { who: 0, en: "Snowy! Now's the time for your loudest, wrong-est howl!", hi: "स्नोवी! अब लगाओ अपना सबसे बेसुरा, सबसे ज़ोरदार गाना!" }, { who: 1, en: "Finally, someone ASKED! AWOOOOO! Follow my song, Mausi!", hi: "आख़िरकार किसी ने बोला! आऊऊऊऊ! मौसी, मेरे गाने के पीछे आओ!", kind: "shout" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.5 }, { id: "snowy", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Mausi follows the howl and finds them. Everyone walks back to the cosy hut together.", hi: "मौसी गाने की आवाज़ के पीछे-पीछे आ गईं। अब सब साथ-साथ गरम झोपड़ी की ओर!" },
        say: [ { who: 1, en: "Sorry! From now on I stay with the group. Group selfie… TOGETHER!", hi: "सॉरी! अब से मैं सबके साथ रहूँगी। ग्रुप सेल्फ़ी… सबके साथ!" }, { who: 0, en: "Snowy, I thought your howl was just noise. It's a superpower!", hi: "स्नोवी, मुझे लगा था तुम्हारा गाना बस शोर है। वो तो सुपरपावर है!" } ]
      }
    ]
  },

  // ───────────────────────── 59 ─────────────────────────
  {
    id: 59,
    age: "6-10",
    category: "india",
    title: { en: "Auggie Tries to Be a Camel", hi: "जब ऑगी बना ऊँट!" },
    blurb: { en: "Ghumru the camel can walk for days with little water. Can Auggie? (Spoiler: NO!)", hi: "घुमरू ऊँट कम पानी में कई दिन चल लेता है। क्या ऑगी भी? (बता दें… बिल्कुल नहीं!)" },
    moral: { en: "Learn from your friends, but look after yourself just the way you are.", hi: "दोस्तों से ज़रूर सीखो, पर अपना ख़्याल अपने हिसाब से रखो।" },
    cover: {
      bg: "desert",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "camel", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "hotair", x: 0.5, y: 0.15 }, { id: "sun", x: 0.9, y: 0.12 } ]
    },
    panels: [
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "papa", pose: "point", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "sun", x: 0.88, y: 0.12 } ],
        cap: { en: "Jaisalmer! The golden sand of the Thar Desert stretches all the way to the sky.", hi: "जैसलमेर! थार रेगिस्तान की सुनहरी रेत — जहाँ तक नज़र जाए, बस रेत ही रेत!" },
        say: [ { who: 1, en: "We came in the evening, champ. At noon, this sand could toast your paws!", hi: "हम शाम को आए हैं, पहलवान। दोपहर में ये रेत पंजे सेंक देती है!" }, { who: 0, en: "Toasted paws? No, thank you!", hi: "पंजों का टोस्ट? ना बाबा ना!" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.28 }, { id: "camel", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Khamma ghani, little golden dog! I'm Ghumru. Welcome to my desert!", hi: "खम्मा घणी, नन्हे सुनहरे कुत्ते! मैं घुमरू ऊँट। मेरे रेगिस्तान में स्वागत है!" }, { who: 0, en: "LITTLE? I'm a big dog! …Okay, next to you, I'm pocket-sized.", hi: "नन्हा? मैं तो बड़ा कुत्ता हूँ! …अच्छा, तुम्हारे सामने जेब जितना।" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.28 }, { id: "camel", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Ghumru folds his long legs and shares a desert secret.", hi: "घुमरू ने अपनी लंबी टाँगें मोड़ीं और एक रेगिस्तानी राज़ बताया।" },
        say: [ { who: 1, en: "People call us ships of the desert. We can walk for days with very little water!", hi: "लोग हमें रेगिस्तान का जहाज़ कहते हैं। हम बहुत कम पानी में कई दिन चल लेते हैं!" }, { who: 0, en: "Cool! Then I'm a camel too. No water for me today!", hi: "वाह! तो आज से मैं भी ऊँट। आज पानी बंद!" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.28 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "bowl", x: 0.48 }, { id: "bottle", x: 0.6 } ],
        cap: { en: "Ten minutes later, the 'camel' is panting like a pressure cooker. Huff-huff!", hi: "दस मिनट बाद… 'ऊँट ऑगी' प्रेशर कुकर जैसे हाँफ रहा है। हफ़-हफ़!" },
        say: [ { who: 1, en: "Dogs aren't camels, beta! Mumma's rule: water every half hour.", hi: "बेटा, कुत्ते ऊँट नहीं होते! मम्मा का नियम: हर आधे घंटे पानी।" }, { who: 0, en: "Okay, okay… I'm a dog. A very THIRSTY dog. Slurp!", hi: "ठीक है, ठीक है… मैं कुत्ता हूँ। बहुत प्यासा कुत्ता! लप-लप!" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "camel", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "drum", x: 0.5 } ],
        cap: { en: "At sunset, folk musicians play. Ghumru's bells jingle as he sways!", hi: "सूरज ढला, लोक संगीत बजा। घुमरू झूमा, और उसकी घंटियाँ बजीं — टन-टन!" },
        say: [ { who: 0, en: "Dance-off! You have bells, but I have a HELICOPTER TAIL!", hi: "डांस का मुक़ाबला! तुम्हारे पास घंटियाँ, मेरे पास हेलिकॉप्टर वाली पूँछ!", kind: "shout" }, { who: 1, en: "Ha! You dance much better than you camel!", hi: "हा-हा! तुम ऊँट बनने से अच्छा तो नाचते हो!" } ],
        fx: { en: "TUN-TUN!", hi: "टन-टन!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "hotair", x: 0.5, y: 0.2 } ],
        cap: { en: "Jaipur at sunrise! Colourful balloons drift over the Pink City.", hi: "जयपुर की सुबह! गुलाबी शहर के ऊपर रंग-बिरंगे गुब्बारे तैर रहे हैं।" },
        say: [ { who: 1, en: "Fact! Long ago, the old city was painted pink as a colour of welcome.", hi: "पता है? बहुत पहले मेहमानों के स्वागत में पूरा पुराना शहर गुलाबी रंगा गया था!" }, { who: 0, en: "A whole city that says hello? Like a giant tail-wag!", hi: "पूरा शहर 'नमस्ते' बोलता है? जैसे कोई बड़ी-सी पूँछ हिला रहा हो!" } ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.7, flip: true } ],
        props: [ { id: "hotair", x: 0.12, y: 0.3 }, { id: "hotair", x: 0.88, y: 0.2 }, { id: "cloud", x: 0.5, y: 0.1 } ],
        cap: { en: "Up, up they float! Auggie's harness is clipped in, and Papa hugs him close.", hi: "ऊपर, और ऊपर! ऑगी का हार्नेस बँधा है, और पापा ने उसे कसकर पकड़ा है।" },
        say: [ { who: 0, en: "Papa, the houses look like tiny toys! Is that a honeycomb palace?", hi: "पापा, घर तो छोटे-छोटे खिलौने लग रहे हैं! वो छत्ते जैसा महल क्या है?" }, { who: 1, en: "That's Hawa Mahal, with over 900 windows! This ride is so… UPLIFTING! Ha!", hi: "वो हवा महल है — 900 से ज़्यादा खिड़कियाँ! गिनते-गिनते तुम तो सो ही जाओगे!" } ],
        fx: { en: "FWOOSH!", hi: "भर्र्र!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 }, { id: "hotair", x: 0.5, y: 0.12 } ],
        cap: { en: "A camel friend, a dance-off and a balloon ride. What a trip!", hi: "ऊँट दोस्त, डांस मुक़ाबला और गुब्बारे की सैर। क्या सफ़र था!" },
        say: [ { who: 1, en: "Hold that pose! Now say 'Padharo mhare des!'", hi: "पोज़ पकड़ो! बोलो — 'पधारो म्हारे देस!'" }, { who: 0, en: "Padharo! That means welcome! Also… water, please. I'm NOT a camel!", hi: "पधारो! मतलब स्वागत है! और हाँ… पानी लाओ, मैं ऊँट नहीं हूँ!" } ]
      }
    ]
  },

  // ───────────────────────── 60 ─────────────────────────
  {
    id: 60,
    age: "6-10",
    category: "india",
    title: { en: "Auggie Whispers Chinnu Home", hi: "ऑगी की फुसफुसाहट और चिन्नू" },
    blurb: { en: "A lost duckling peeps in the reeds. Can the loudest dog on the houseboat learn to whisper?", hi: "सरकंडों में एक खोया चूज़ा चीं-चीं कर रहा है। क्या हाउसबोट का सबसे ज़ोरदार कुत्ता फुसफुसाना सीखेगा?" },
    moral: { en: "Gentle help is often the strongest help of all.", hi: "प्यार से, धीरे से की गई मदद अक्सर सबसे ताक़तवर होती है।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.32 }, { id: "duck", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "boat", x: 0.5 }, { id: "palm", x: 0.92 } ]
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.28 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "boat", x: 0.5 }, { id: "palm", x: 0.92 } ],
        cap: { en: "Alappuzha, Kerala! Green water, swaying palms, and a houseboat just for them!", hi: "केरल का अलप्पुझा! हरा पानी, झूमते नारियल के पेड़, और उनकी अपनी हाउसबोट!" },
        say: [ { who: 1, en: "A floating house! Bedroom, kitchen, sundeck… and life jackets, as per my list!", hi: "तैरता हुआ घर! कमरा, रसोई, छत… और मेरी लिस्ट के हिसाब से लाइफ़ जैकेट!" }, { who: 0, en: "A bed that rocks me to sleep? Best house EVER!", hi: "बिस्तर जो झूला भी झुलाए? ऐसा घर तो कभी नहीं देखा!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        say: [ { who: 1, en: "Fact! These boats are called kettuvallam. They're tied with coconut rope, no nails!", hi: "पता है? इन्हें केट्टुवल्लम कहते हैं। इनमें कील नहीं, नारियल की रस्सी से बँधाई होती है!" }, { who: 0, en: "No nails, just knots? It's a giant floating friendship bracelet!", hi: "कील नहीं, बस गाँठें? नानू, ये तो तैरती हुई राखी है!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.28 }, { id: "mausi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "palm", x: 0.92 }, { id: "camera", x: 0.5, y: 0.45 } ],
        cap: { en: "The boat glides slowly. Auggie naps in the shade, life jacket and all.", hi: "नाव धीरे-धीरे सरकती है। ऑगी लाइफ़ जैकेट पहने-पहने छाँव में ख़र्राटे ले रहा है।" },
        say: [ { who: 1, en: "Hold that snore! Caption: 'Captain Auggie, hard at work.'", hi: "ख़र्राटे पकड़े रहो! कैप्शन: 'कैप्टन ऑगी, ड्यूटी पर।'" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 } ],
        props: [ { id: "bush", x: 0.78 } ],
        cap: { en: "Twitch! One ear pops up. Then the other. A teeny peep-peep from the reeds!", hi: "फड़क! एक कान खड़ा हुआ, फिर दूसरा। सरकंडों से आई नन्ही-सी चीं-चीं!" },
        say: [ { who: 0, en: "Someone small sounds scared. Hero time!", hi: "कोई नन्हा डरा हुआ है। हीरो बनने का टाइम!", kind: "think" } ],
        fx: { en: "PEEP!", hi: "चीं-चीं!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.28 }, { id: "duck", pose: "stand", mood: "sad", x: 0.7, flip: true } ],
        props: [ { id: "bush", x: 0.9 } ],
        say: [ { who: 1, en: "Peep! I'm Chinnu. I lost my flock, and Amma is far, far away!", hi: "चीं! मैं चिन्नू। मैं झुंड से बिछड़ गया, और अम्मा बहुत दूर है!" }, { who: 0, en: "DON'T WORRY, CHINNU! HERO AUGGIE IS HERE! WOOF!", hi: "घबराओ मत चिन्नू! हीरो ऑगी आ गया! भौं!", kind: "shout" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.28 }, { id: "papa", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        cap: { en: "Oops! The big woof scares Chinnu deeper into the reeds. Auggie wants to leap in, but the water is deep.", hi: "उफ़! ज़ोरदार भौं से डरकर चिन्नू और अंदर छिप गया। ऑगी कूदना चाहता है, पर पानी गहरा है।" },
        say: [ { who: 1, en: "Easy, hero. Big splashes scare little ducks. Can your ears find his Amma instead?", hi: "आराम से, हीरो। बड़े छपाकों से नन्हे चूज़े डरते हैं। अपने कानों से उसकी अम्मा ढूँढ सकते हो?" }, { who: 0, en: "Gentle… and clever. Okay. Ears ON, woof OFF.", hi: "प्यार से… और दिमाग़ से। ठीक है। कान चालू, भौं बंद।" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "duck", pose: "run", mood: "happy", x: 0.62, flip: true } ],
        props: [ { id: "boat", x: 0.3 } ],
        cap: { en: "Far away: quack-quack! Auggie whispers directions. The boatman steers slowly, and Chinnu paddles alongside.", hi: "दूर से आई क्वैक-क्वैक! ऑगी धीरे-धीरे रास्ता बताता है, नाववाले भैया आराम से नाव मोड़ते हैं, और चिन्नू साथ-साथ तैरता है।" },
        say: [ { who: 0, en: "This way, Chinnu. Nice and slow. I'm right here.", hi: "इधर चिन्नू, धीरे-धीरे। मैं यहीं हूँ, डरना मत।", kind: "whisper" }, { who: 1, en: "Your whisper is nice. Your bark is… a LOT.", hi: "तुम्हारी फुसफुसाहट अच्छी है। पर भौं… बाप रे!" } ],
        fx: { en: "QUACK!", hi: "क्वैक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "duck", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "palm", x: 0.92 }, { id: "sun", x: 0.12, y: 0.15 } ],
        cap: { en: "There's the flock! Alappuzha is famous for its ducks. Chinnu zooms straight to Amma.", hi: "वो रहा झुंड! अलप्पुझा अपनी बत्तखों के लिए मशहूर है। चिन्नू फुर्र से अम्मा के पास!" },
        say: [ { who: 1, en: "Amma! Amma! This big dog whispered me home!", hi: "अम्मा! अम्मा! इस बड़े भैया ने फुसफुसाकर मुझे घर पहुँचा दिया!", kind: "shout" }, { who: 0, en: "Turns out my softest voice was my strongest one.", hi: "पता चला, मेरी सबसे धीमी आवाज़ ही सबसे ताक़तवर है।" } ]
      }
    ]
  },

  // ───────────────────────── 61 ─────────────────────────
  {
    id: 61,
    age: "6-10",
    category: "travel",
    title: { en: "Slowpoke Train and the Stubborn Goat", hi: "धीमी ट्रेन और ज़िद्दी बकरी" },
    blurb: { en: "Auggie wants a zoomy train. Darjeeling gives him a slow one… and a goat who won't move!", hi: "ऑगी को फुर्र वाली ट्रेन चाहिए थी। दार्जिलिंग ने दी धीमी ट्रेन… और एक ज़िद्दी बकरी!" },
    moral: { en: "Slow down and listen; that's how you notice what really matters.", hi: "थोड़ा धीरे चलो और ध्यान से सुनो — तभी असली बात समझ आती है।" },
    cover: {
      bg: "station",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "cloud", x: 0.2, y: 0.15 } ],
      fx: { en: "TOOT!", hi: "कूऊ!" }
    },
    panels: [
      {
        bg: "station",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        cap: { en: "Darjeeling station! A tiny blue train puffs and whistles like a kettle.", hi: "दार्जिलिंग स्टेशन! एक नन्ही नीली ट्रेन केतली की तरह सीटी बजा रही है।" },
        say: [ { who: 1, en: "Fact! This toy train has climbed these hills since 1881. It's a World Heritage treasure!", hi: "पता है? ये नन्ही ट्रेन सन 1881 से पहाड़ चढ़ रही है! पूरी दुनिया की धरोहर!" }, { who: 0, en: "Toy train? I want a ZOOMY train! Does this one go fast?", hi: "खिलौना ट्रेन? मुझे तो फुर्र वाली ट्रेन चाहिए! ये तेज़ चलती है?" } ]
      },
      {
        bg: "station",
        chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.28 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Chug… chug… so slow that a village kid on a bicycle zooms past!", hi: "छुक… छुक… इतनी धीरे कि साइकिल वाला एक बच्चा आगे निकल गया!" },
        say: [ { who: 0, en: "Hey! A bicycle is beating us! Faster, train, FASTER!", hi: "अरे! साइकिल हमसे आगे! तेज़ चलो ट्रेन, और तेज़!", kind: "shout" }, { who: 1, en: "Arre, what's the hurry? Slow trains see the most beautiful things.", hi: "अरे, इतनी जल्दी किस बात की? धीरे चलने वाले ही सबसे सुंदर नज़ारे देखते हैं।" } ],
        fx: { en: "TOOT-TOOT!", hi: "कू-छुक!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 } ],
        props: [ { id: "train", x: 0.58 }, { id: "bush", x: 0.12 }, { id: "bush", x: 0.88 } ],
        cap: { en: "Round and round go the tea gardens, green rows like a giant comb. Darjeeling tea is world-famous!", hi: "गोल-गोल घूमते चाय के बागान — हरी-हरी क़तारें, जैसे कोई बड़ी-सी कंघी! दार्जिलिंग की चाय दुनिया भर में मशहूर है।" },
        say: [ { who: 0, en: "Hello, tea bushes! Dogs can't drink tea, so… just a sniff. Ahh, fancy!", hi: "नमस्ते चाय की झाड़ियो! कुत्ते चाय नहीं पीते, तो बस… एक सूँघ। वाह, क्या ख़ुशबू!" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "train", x: 0.52 }, { id: "cloud", x: 0.8, y: 0.12 } ],
        cap: { en: "At Batasia Loop, the train goes round in a big spiral, like a dog chasing its tail!", hi: "बतासिया लूप पर ट्रेन गोल-गोल घूमकर चढ़ती है — बिल्कुल अपनी पूँछ पकड़ते कुत्ते जैसे!" },
        say: [ { who: 1, en: "Fact! On clear days you can see Kanchenjunga, the third-highest mountain on Earth!", hi: "पता है? साफ़ दिन में यहाँ से कंचनजंगा दिखता है — दुनिया का तीसरा सबसे ऊँचा पहाड़!" }, { who: 0, en: "Chasing its tail? Finally, a train that gets me!", hi: "पूँछ के पीछे गोल-गोल? आख़िरकार कोई ट्रेन मेरी तरह सोचती है!" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.28 }, { id: "goat", pose: "stand", mood: "angry", x: 0.72, flip: true } ],
        props: [ { id: "train", x: 0.1 } ],
        cap: { en: "SCREECH! The train stops. A goat is standing on the track, and she won't budge!", hi: "किर्र्र! ट्रेन रुक गई। पटरी पर एक बकरी अड़ी खड़ी है, टस से मस नहीं!" },
        say: [ { who: 1, en: "MEH! Honk all you like! I'm not moving till I find my kid!", hi: "में! जितना हॉर्न बजाना है बजाओ! जब तक मेरा मेमना नहीं मिलता, नहीं हटूँगी!", kind: "shout" }, { who: 0, en: "SHOO, goat! WOOF-WOOF! …Uh-oh, now she's even crosser.", hi: "हट बकरी! भौं-भौं! …उफ़, ये तो और भड़क गई।" } ],
        fx: { en: "SCREECH!", hi: "किर्र्र!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.32 } ],
        props: [ { id: "bush", x: 0.8 } ],
        cap: { en: "Auggie remembers Dadi: “Slow down, and you'll notice things.” He listens… and hears a teeny 'meh'.", hi: "ऑगी को दादी की बात याद आई — 'धीरे चलो, तो सब दिखता है।' उसने कान लगाए… और सुनी एक नन्ही-सी 'में'!" },
        say: [ { who: 0, en: "Shh… there! Behind that bush, up the slope. A tiny kid!", hi: "श्श… वो रहा! ढलान पे, उस झाड़ी के पीछे। नन्हा मेमना!", kind: "think" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.28 }, { id: "goat", pose: "stand", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "bush", x: 0.92 }, { id: "train", x: 0.1 } ],
        cap: { en: "Auggie stays on the train, gives one soft woof, and points his nose at the bush.", hi: "ऑगी ट्रेन से उतरा नहीं। बस एक हल्की-सी भौं, और नाक से झाड़ी की तरफ़ इशारा।" },
        say: [ { who: 0, en: "Goat Aunty, sorry I shouted. Your baby is right behind that bush!", hi: "बकरी आंटी, चिल्लाने के लिए सॉरी। आपका मेमना उस झाड़ी के पीछे है!" }, { who: 1, en: "My Munni! Oh, you clever, quiet doggy!", hi: "मेरी मुन्नी! अरे वाह, समझदार कुत्ते!" } ],
        fx: { en: "WOOF!", hi: "भौं!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.5 }, { id: "goat", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Mama goat skips off the track to Munni. Toot-toot! The little train chugs on.", hi: "बकरी मम्मा उछलकर मुन्नी के पास पहुँची। कू-छुक! नन्ही ट्रेन फिर चल पड़ी।" },
        say: [ { who: 1, en: "Well done! You cleared the track by listening, not shouting.", hi: "शाबाश! तुमने चिल्लाकर नहीं, सुनकर रास्ता साफ़ किया।" }, { who: 0, en: "And guess what? Slow trains are my favourite now!", hi: "और पता है? अब धीमी ट्रेन ही मेरी फ़ेवरेट है!" } ]
      }
    ]
  },

  // ───────────────────────── 62 ─────────────────────────
  {
    id: 62,
    age: "6-10",
    category: "family",
    title: { en: "Super Auggie Saves the Wedding Ring", hi: "सुपर ऑगी और शादी की अँगूठी" },
    blurb: { en: "Papa promised to keep the ring safe. Then he found a hole in his pocket…", hi: "पापा ने कहा था, 'अँगूठी मेरे पास सेफ़ है।' फिर जेब में निकला एक छेद…" },
    moral: { en: "Everyone makes mistakes; saying sorry and asking for help fixes most of them.", hi: "ग़लती सबसे होती है; सॉरी बोलने और मदद माँगने से ज़्यादातर ठीक हो जाती है।" },
    cover: {
      bg: "wedding",
      chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.35, cape: true }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "drum", x: 0.1 } ],
      fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.28 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Wedding day! Papa shines in a new suit; Auggie shines even brighter in a red bow collar.", hi: "शादी का दिन! पापा नए सूट में चमक रहे हैं, और ऑगी लाल बो वाले पट्टे में उनसे भी ज़्यादा!" },
        say: [ { who: 1, en: "Mottu, the ring is safe in my pocket. Trust me, I'm a professional!", hi: "मोटू, अँगूठी मेरी जेब में एकदम सेफ़ है। भरोसा रखो, मैं प्रोफ़ेशनल हूँ!" }, { who: 0, en: "Papa, you lost your glasses this morning. They were on your head.", hi: "पापा, आज सुबह आपका चश्मा खो गया था। आपके सिर पर ही था।" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.28 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Mumma sweeps in, lehenga twirling, bangles jingling. Chhan-chhan!", hi: "मम्मा आईं — लहंगा घूमता हुआ, चूड़ियाँ खनकती हुईं। छन-छन!" },
        say: [ { who: 0, en: "Mumma, you're sparkling like Diwali! Can I wear bangles too?", hi: "मम्मा, आप तो दिवाली जैसी जगमग हो! मुझे भी चूड़ियाँ पहनाओ ना!" }, { who: 1, en: "Ha-ha-ha! My list: dance, eat, smile, and Mittsy does NOT lose the ring!", hi: "हा-हा-हा! मेरी लिस्ट: नाचो, खाओ, मुस्कुराओ… और मिट्सी अँगूठी न खोए!" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "drum", x: 0.5 } ],
        cap: { en: "The dhol booms! Nanu asked for flower petals instead of firecrackers, so Auggie dances without fear.", hi: "ढोल बजा — ढम-ढम! नानू ने पटाखों की जगह फूलों की बारिश करवाई, ताकि ऑगी बेफ़िक्र नाचे।" },
        say: [ { who: 1, en: "Dance, beta! Shake that tail! Show them your bhangra!", hi: "नाच मेरे शेर! पूँछ हिला! दिखा दे अपना भांगड़ा!", kind: "shout" }, { who: 0, en: "Watch this: the Tail-Wag Twist!", hi: "ये देखो: पूँछ-घुमाऊ ठुमका!" } ],
        fx: { en: "DHAM-DHAM!", hi: "ढम-ढम!" },
        action: true
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.22 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.5 }, { id: "papa", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "The ring box is EMPTY! There's a hole in my pocket!", hi: "अँगूठी का डिब्बा ख़ाली! हाय, मेरी जेब में छेद है!", kind: "shout" }, { who: 1, en: "MITTSY! The ceremony is in ten minutes! So much for 'professional'!", hi: "मिट्सी! दस मिनट में रस्म है! बड़े आए प्रोफ़ेशनल!" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "Swish! Mumma ties on the red Super Cape with the golden paw badge.", hi: "सर्र! मम्मा ने सुनहरे पंजे वाली लाल सुपर केप बाँध दी।" },
        say: [ { who: 0, en: "Super Auggie is here! Woof-woof, let's go!", hi: "सुपर ऑगी हाज़िर है! भौं-भौं, चलो चलें!", kind: "shout" }, { who: 1, en: "Go, Super Sniffer! Start with Papa's pocket!", hi: "जाओ, सुपर नाक! शुरुआत पापा की जेब से करो!" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.32, cape: true } ],
        props: [ { id: "flower", x: 0.72 }, { id: "flower", x: 0.9 } ],
        cap: { en: "Sniff… the trail winds through the glittering hall. But the hall is FULL of smells!", hi: "सूँ-सूँ… सुराग जगमगाते हॉल में घूमता है। पर हॉल में तो हज़ार ख़ुशबुएँ हैं!" },
        say: [ { who: 0, en: "Roses… hot puris… paneer tikka… FOCUS, Auggie! Papa's pocket smell!", hi: "गुलाब… गरम पूरियाँ… पनीर टिक्का… ध्यान दो ऑगी! पापा की जेब वाली ख़ुशबू!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.28, cape: true }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "cake", x: 0.52 } ],
        cap: { en: "The trail ends under the dessert table, right next to a mountain of laddoos!", hi: "सुराग मिठाई की मेज़ के नीचे ख़त्म हुआ — लड्डुओं के पहाड़ के ठीक बगल में!" },
        say: [ { who: 0, en: "The RING! And… laddoos. No! Heroes don't eat sweets. …Right, Dadi?", hi: "अँगूठी मिल गई! और… लड्डू। नहीं! हीरो मिठाई नहीं खाते। …है ना दादी?" }, { who: 1, en: "Right, my raja! Sweets hurt doggy tummies. Here, a secret carrot from my pallu!", hi: "बिल्कुल मेरे राजा! मिठाई से कुत्तों का पेट दुखता है। ये ले, पल्लू वाली गाजर!" } ],
        fx: { en: "FOUND IT!", hi: "मिल गई!" },
        action: true
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "The ring reaches the couple just in time. The whole hall claps for the best-dressed detective!", hi: "रस्म ठीक वक़्त पर हुई! पूरे हॉल ने सजे-धजे जासूस के लिए ज़ोरदार तालियाँ बजाईं।" },
        say: [ { who: 1, en: "Sorry, Mottu. Next time I'll ask for help BEFORE saying 'trust me'!", hi: "सॉरी मोटू। अगली बार 'भरोसा रखो' से पहले 'मदद करो' बोलूँगा!" }, { who: 2, en: "HA-HA-HA! And the ring rides in Auggie's bow collar!", hi: "हा-हा-हा! और अगली बार अँगूठी ऑगी के बो में रहेगी!" } ]
      }
    ]
  },

  // ───────────────────────── 63 ─────────────────────────
  {
    id: 63,
    age: "6-10",
    category: "india",
    title: { en: "Auggie Hugs a Thundercloud", hi: "ऑगी ने बादल को झप्पी दी" },
    blurb: { en: "Garaj is the grumpiest cloud in Mumbai. What happens when a Labrador tries to hug him?", hi: "गरज मुंबई का सबसे चिड़चिड़ा बादल है। जब एक लैब्राडोर उसे झप्पी देने चला, तो क्या हुआ?" },
    moral: { en: "Even a grumpy cloud shines when a friend shows it how much it matters.", hi: "जब कोई दोस्त बताए कि तुम कितने ख़ास हो, तो चिड़चिड़ा बादल भी चमक उठता है।" },
    cover: {
      bg: "rain",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "garaj", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "umbrella", x: 0.1 }, { id: "puddle", x: 0.5 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mumma", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "cloud", x: 0.5, y: 0.12 }, { id: "umbrella", x: 0.92 } ],
        cap: { en: "June in Mumbai! The monsoon rolls in from the sea with big, dark clouds.", hi: "मुंबई में जून! समुंदर की तरफ़ से काले-काले बादलों के साथ मानसून आ गया।" },
        say: [ { who: 1, en: "Monsoon list: raincoat, towel, umbrella! Mumbai gets rain from June to September!", hi: "बारिश वाली लिस्ट: रेनकोट, तौलिया, छाता! मुंबई में जून से सितंबर तक झमाझम बारिश होती है!" }, { who: 0, en: "Four months of puddles? Best. City. EVER!", hi: "चार महीने कीचड़-पानी? वाह, क्या शहर है!" } ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.28 }, { id: "garaj", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "GRRR-BOOM! I'm Garaj, the scariest cloud in Mumbai! Run, doggy, RUN!", hi: "गड़-गड़-बूम! मैं गरज, मुंबई का सबसे डरावना बादल! भागो कुत्ते, भागो!", kind: "shout" }, { who: 0, en: "I'm not running. You sound grumpy… and a teeny bit lonely.", hi: "मैं नहीं भागूँगा। तुम चिड़चिड़े लग रहे हो… और थोड़े-से अकेले भी।" } ],
        fx: { en: "BOOM!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.28 }, { id: "garaj", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.5 } ],
        cap: { en: "Auggie tries a big hug. SPLOOSH! Clouds are made of water. Soggy dog!", hi: "ऑगी ने कसके झप्पी दी। छपाक! बादल तो पानी का बना है। ऑगी — भीगा पकौड़ा!" },
        say: [ { who: 1, en: "People see me and go, 'Uff, again?' Nobody ever says, 'Yay, Garaj!'", hi: "मुझे देखते ही सब बोलते हैं, 'उफ़्फ़, फिर से?' कोई 'वाह गरज!' नहीं बोलता।" }, { who: 0, en: "Soggy… but not giving up. Come on, I'll show you something!", hi: "भीग गया… पर हार नहीं मानी। चलो, तुम्हें कुछ दिखाता हूँ!" } ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.5 } ],
        cap: { en: "Soggy but smiling, Auggie shows Garaj the street. Look who's jumping in puddles!", hi: "भीगा-भागा पर मुस्कुराता ऑगी गरज को गली दिखाता है। देखो, पानी में कौन कूद रहा है!" },
        say: [ { who: 1, en: "Rain-dance selfie! Chai, pakoras and puddles: Mumbai's favourite season!", hi: "बारिश-डांस सेल्फ़ी! चाय, पकौड़े और पानी के गड्ढे — मुंबई का फ़ेवरेट मौसम!", kind: "shout" }, { who: 0, en: "See, Garaj? THAT is a 'Yay, Garaj!' face!", hi: "देखा गरज? ये है 'वाह गरज!' वाली शक्ल!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.28 }, { id: "garaj", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "sapling", x: 0.5 } ],
        cap: { en: "Next, Auggie takes Garaj outside the city, where farmers cheer as rain fills their fields.", hi: "फिर ऑगी गरज को शहर के बाहर ले गया, जहाँ बारिश से भरे खेत देखकर किसान खुश हैं।" },
        say: [ { who: 0, en: "Look! Your rain grows the rice. And it fills the lakes that give Mumbai its water!", hi: "तुम बरसे तो धान के खेत लहलहाए। और मुंबई की झीलें भी तुम्हीं भरते हो, सबका पीने का पानी!" }, { who: 1, en: "Me? I'm… useful?", hi: "मैं? मैं… काम का हूँ?" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.28 }, { id: "papa", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "At Marine Drive, high-tide waves leap right over the sea wall!", hi: "मरीन ड्राइव पर ज्वार की लहरें दीवार के ऊपर तक उछल रही हैं!" },
        say: [ { who: 1, en: "High tide! We watch the waves from waaay back here. Safe AND dry-ish!", hi: "ज्वार आया है! लहरें दूर से देखेंगे — सुरक्षित भी, और थोड़े-से सूखे भी!" }, { who: 0, en: "Dry-ish? Papa, I'm already a wet mop!", hi: "सूखे? पापा, मैं तो पहले से ही गीला पोछा हूँ!" } ],
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "garaj", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "rainbow", x: 0.5, y: 0.15 } ],
        say: [ { who: 1, en: "So I'm not a bother… I'm a HELPER? Rumble-rumble-HOORAY!", hi: "तो मैं मुसीबत नहीं… मददगार हूँ? गड़-गड़-हुर्रे!", kind: "shout" }, { who: 0, en: "Just maybe a little less BOOM near the puppies, okay?", hi: "बस छोटे पिल्लों के पास थोड़ा कम 'बूम' करना, ठीक है?" } ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.22 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.5 }, { id: "garaj", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "The rain stops. Marine Drive's lights curve along the bay like pearls: the famous Queen's Necklace.", hi: "बारिश थमी। मरीन ड्राइव की बत्तियाँ समुंदर किनारे मोतियों की माला जैसी चमकीं — मशहूर 'क्वीन्स नेकलेस'!" },
        say: [ { who: 2, en: "Tonight I'll drizzle soft and gentle, like a lullaby. Pitter-patter…", hi: "आज रात मैं धीरे-धीरे, लोरी जैसा बरसूँगा। टिप… टिप… टप…", kind: "whisper" }, { who: 1, en: "HA-HA-HA! Garaj, you're officially invited for chai!", hi: "हा-हा-हा! गरज, कल की चाय पे तुम्हारा पक्का न्योता!" } ]
      }
    ]
  },

  // ───────────────────────── 64 ─────────────────────────
  {
    id: 64,
    age: "6-10",
    category: "animals",
    title: { en: "Auggie's Best No-Safari Day", hi: "ऑगी का बिना-सफ़ारी वाला दिन" },
    blurb: { en: "No pets allowed in Gir National Park! So what's a lion-loving Labrador supposed to do all day?", hi: "गिर नेशनल पार्क में पालतू जानवर मना हैं! तो शेरों का दीवाना लैब्राडोर सारा दिन क्या करे?" },
    moral: { en: "Rules keep wild animals safe, and there's always an adventure right where you are.", hi: "नियम जंगली जानवरों को सुरक्षित रखते हैं — और एडवेंचर तो वहीं मिल जाता है, जहाँ तुम हो।" },
    cover: {
      bg: "village",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.28 }, { id: "cow", pose: "stand", mood: "happy", x: 0.74, flip: true, s: 0.65 } ],
      props: [ { id: "bush", x: 0.52 }, { id: "house", x: 0.92 } ],
      fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }
    },
    panels: [
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "house", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Sasan Gir, Gujarat! The family arrives at a cosy guest-house at the edge of the forest.", hi: "गुजरात का सासन गिर! परिवार जंगल के किनारे एक प्यारे-से गेस्ट-हाउस पहुँचा।" },
        say: [ { who: 1, en: "Fact! Gir is the only place in the world where Asiatic lions live in the wild!", hi: "पता है? पूरी दुनिया में एशियाई शेर सिर्फ़ यहीं, गिर के जंगल में आज़ाद रहते हैं!" }, { who: 0, en: "Real LIONS? I'm packing my bravest face!", hi: "असली शेर? मैं अपनी सबसे बहादुर शक्ल लेकर चलूँगा!" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.28 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.95 } ],
        cap: { en: "But the friendly ranger didi explains a rule: pets must stay outside national parks.", hi: "पर रेंजर दीदी प्यार से एक नियम बताती हैं: पालतू जानवर नेशनल पार्क के बाहर ही रहेंगे।" },
        say: [ { who: 0, en: "What if I wear Nanu's hat? I'd be a very hairy tourist!", hi: "अगर मैं नानू की टोपी पहन लूँ? बहुत बालों वाला टूरिस्ट लगूँगा!" }, { who: 1, en: "Ha-ha! Nice try! Barks scare lions, and some dog germs can make lions sick.", hi: "हा-हा! अच्छी कोशिश! तुम्हारी भौं से शेर घबराते हैं, और कुत्तों की कुछ बीमारियाँ शेरों को भी लग जाती हैं।" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "wave", mood: "sad", x: 0.22 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "wave", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.96 } ],
        cap: { en: "Papa, Mumma and Mausi ride off in the safari jeep. Auggie stays behind with Dadi and Nanu.", hi: "पापा, मम्मा और मौसी सफ़ारी जीप में निकल गए। ऑगी दादी और नानू के साथ गेस्ट-हाउस पर रुका।" },
        say: [ { who: 2, en: "Bye, Auggie! I'll bring back a hundred lion selfies… taken from far away!", hi: "बाय ऑगी! तुम्हारे लिए सौ शेर-सेल्फ़ी लाऊँगी… दूर से, सुरक्षित वाली!" }, { who: 1, en: "Don't sulk, beta. Psst… secret carrot! We'll have our own adventure.", hi: "मुँह मत लटका, बेटा। श्श… पल्लू वाली गाजर! हम यहीं अपना एडवेंचर करेंगे।" } ]
      },
      {
        bg: "jungle",
        chars: [ { id: "papa", pose: "sit", mood: "laugh", x: 0.22 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.46 }, { id: "lion", pose: "lie", mood: "happy", x: 0.8, flip: true, s: 0.8 } ],
        props: [ { id: "car", x: 0.32 }, { id: "tree", x: 0.96 } ],
        cap: { en: "Inside Gir, the jeep stops far away and switches off. A lioness snoozes in the shade with two cubs.", hi: "गिर के अंदर जीप दूर रुकी, इंजन बंद। छाँव में एक शेरनी अपने दो शावकों के साथ ऊँघ रही है।" },
        say: [ { who: 1, en: "Mittsy! Cubs! They're napping just like Auggie!", hi: "मिट्सी! शावक! बिल्कुल ऑगी की तरह झपकी ले रहे हैं!", kind: "whisper" }, { who: 0, en: "Shh, Mottu! Stay inside. Even my jokes are on silent mode.", hi: "श्श मोटू! जीप में ही रहो। आज तो मेरे जोक्स भी साइलेंट मोड पर हैं।", kind: "whisper" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.28 }, { id: "cow", pose: "stand", mood: "sad", x: 0.75, flip: true } ],
        props: [ { id: "house", x: 0.52 } ],
        cap: { en: "Meanwhile… MOOO! A worried cry drifts over from the Maldhari herders' village next door.", hi: "इधर… म्बाँऽऽ! पास के मालधारी चरवाहों के गाँव से एक परेशान पुकार आई।" },
        say: [ { who: 1, en: "Moo! I'm Gauri. My little calf Chhutki wandered off and won't come back!", hi: "म्बाँ! मैं गौरी। मेरी नन्ही बछिया छुटकी कहीं भटक गई, लौटी ही नहीं!", kind: "shout" }, { who: 0, en: "No safari for me, but THIS adventure I can do. Super Sniffer, ON!", hi: "सफ़ारी नहीं तो क्या, ये एडवेंचर तो मेरा है! सुपर नाक, चालू!" } ],
        fx: { en: "MOO!", hi: "म्बाँ!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.68, flip: true }, { id: "dadi", pose: "run", mood: "laugh", x: 0.25 } ],
        props: [ { id: "bush", x: 0.95 } ],
        cap: { en: "Sniff-sniff! A milky calf smell zigzags across the fields. Dadi puffs along behind.", hi: "सूँ-सूँ! बछिया की दूध जैसी महक खेतों में टेढ़ी-मेढ़ी चलती है। दादी हाँफती-हाँफती पीछे!" },
        say: [ { who: 1, en: "Arre, slowly! Your Dadi has knees, not rocket boosters!", hi: "अरे धीरे, बेटा! दादी के घुटने हैं, रॉकेट नहीं!", kind: "shout" }, { who: 0, en: "Sorry, Dadi! I'll wait at every bush. The smell is getting stronger!", hi: "सॉरी दादी! हर झाड़ी पे रुकूँगा। महक तेज़ हो रही है!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "cow", pose: "stand", mood: "sad", x: 0.72, flip: true, s: 0.6 } ],
        props: [ { id: "bush", x: 0.82 }, { id: "tree", x: 0.98 } ],
        cap: { en: "There's Chhutki, stuck in a thorny bush by the forest fence, on the village side. Auggie gently tugs her free.", hi: "वो रही छुटकी — जंगल की बाड़ के पास, गाँव वाली तरफ़, काँटेदार झाड़ी में फँसी। ऑगी ने धीरे से उसे छुड़ाया।" },
        say: [ { who: 1, en: "I just wanted one peek at the lions…", hi: "मुझे बस एक बार शेर देखना था…" }, { who: 0, en: "Me too! But the forest is their home. Let's get you back to Gauri.", hi: "मुझे भी! पर जंगल उनका घर है, हमारा नहीं। चलो, गौरी मम्मा के पास चलें।" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "cow", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.92, y: 0.45 }, { id: "sun", x: 0.08, y: 0.12 } ],
        cap: { en: "At sunset, Gauri and Chhutki are together again. The jeep rolls back with lion photos and stories!", hi: "शाम ढले गौरी और छुटकी फिर साथ हैं। और जीप लौटी — शेरों की फ़ोटो और क़िस्सों के साथ!" },
        say: [ { who: 2, en: "We saw two cubs! But Dadi says YOU were today's real hero!", hi: "हमने दो शावक देखे! पर दादी कह रही हैं, आज के असली हीरो तुम हो!" }, { who: 0, en: "The lions stayed safe at home, and so did Chhutki. Best no-safari ever!", hi: "शेर अपने घर में सुरक्षित, और छुटकी भी। ये 'बिना-सफ़ारी' वाला दिन सबसे बढ़िया रहा!" } ],
        fx: { en: "HOORAY!", hi: "हुर्रे!" },
        action: true
      }
    ]
  },

  // ───────────────────────── 65 ─────────────────────────
  {
    id: 65,
    age: "6-10",
    category: "family",
    title: { en: "Co-Pilot Auggie's Upside-Down Map", hi: "सह-पायलट ऑगी और उल्टा नक्शा" },
    blurb: { en: "Nanu trusts his paper map. Auggie trusts his nose. Who will find the road to the Ganga?", hi: "नानू को अपने नक्शे पर भरोसा है, ऑगी को अपनी नाक पर। गंगा तक का रास्ता कौन ढूँढेगा?" },
    moral: { en: "Even the wisest people ask for help, and that's what makes journeys fun.", hi: "समझदार लोग भी मदद माँगते हैं — और मिलकर चलने से ही सफ़र मज़ेदार बनता है।" },
    cover: {
      bg: "village",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "dadi", pose: "wave", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "car", x: 0.52 }, { id: "sun", x: 0.9, y: 0.12 } ],
      fx: { en: "VROOM!", hi: "व्रूम!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.28 }, { id: "nanu", pose: "sit", mood: "determined", x: 0.75, flip: true } ],
        props: [ { id: "map", x: 0.52 }, { id: "suitcase", x: 0.08 } ],
        cap: { en: "Road trip! Nanu spreads a giant paper map on the floor. Auggie is the official co-pilot.", hi: "रोड ट्रिप! नानू ने फ़र्श पर बड़ा-सा काग़ज़ वाला नक्शा फैलाया। ऑगी है ऑफ़िशियल सह-पायलट।" },
        say: [ { who: 1, en: "North to Rishikesh, where the Ganga leaves the mountains! No phone maps, only REAL maps!", hi: "उत्तर की ओर ऋषिकेश, जहाँ गंगा पहाड़ों से उतरती है! फ़ोन-वोन नहीं, असली नक्शा चलेगा!" }, { who: 0, en: "Co-pilot Auggie reporting! Job one: guard the snacks.", hi: "सह-पायलट ऑगी हाज़िर! पहला काम: नाश्ते की रखवाली।" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.22 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.08 } ],
        cap: { en: "Seat belts on, and Auggie's harness goes click! Dadi packs carrots, apples and her famous stories.", hi: "सबने बेल्ट बाँधी, ऑगी के हार्नेस की क्लिक हुई। दादी ने गाजर, सेब और अपनी मशहूर कहानियाँ रख लीं।" },
        say: [ { who: 1, en: "Ma, how many stories did you pack? This car has a weight limit!", hi: "माँ, कितनी कहानियाँ पैक कीं? गाड़ी की भी वज़न की हद होती है!" }, { who: 2, en: "And you'll still fall asleep in the first one, beta!", hi: "और तू फिर भी पहली कहानी में ही सो जाएगा, बेटा!" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "car", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Yellow mustard fields and tall sugarcane whizz past the window.", hi: "पीले-पीले सरसों के खेत और लंबे-लंबे गन्ने खिड़की के बाहर फुर्र-फुर्र भागे।" },
        say: [ { who: 1, en: "Fact! India's highways link cities from north to south and east to west!", hi: "पता है? भारत के हाईवे उत्तर से दक्षिण, पूरब से पश्चिम तक शहरों को जोड़ते हैं!" }, { who: 0, en: "Co-pilot tip: turn left at the cow! …Wait, there are forty cows.", hi: "सह-पायलट की सलाह: गाय के पास बाएँ मुड़ो! …रुको, यहाँ तो चालीस गायें हैं।" } ],
        fx: { en: "VROOM!", hi: "व्रूम!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.28 }, { id: "dadi", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.92 }, { id: "sun", x: 0.5, y: 0.1 } ],
        cap: { en: "Lunch at a highway dhaba. The sun is blazing.", hi: "हाईवे के ढाबे पर खाना। धूप एकदम तेज़!" },
        say: [ { who: 1, en: "Nobody leaves Auggie in the car! In this sun, a closed car turns into an oven.", hi: "ऑगी को गाड़ी में कोई नहीं छोड़ेगा! ऐसी धूप में बंद गाड़ी भट्टी बन जाती है।", kind: "shout" }, { who: 0, en: "Thanks, Dadi! Also… is that paratha smell for the co-pilot?", hi: "शुक्रिया दादी! वैसे… ये परांठे की ख़ुशबू सह-पायलट के लिए है?" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "tree", x: 0.12 }, { id: "bowl", x: 0.52 } ],
        cap: { en: "Auggie rests under a shady neem tree with a bowl of cool water. No paratha. Sigh.", hi: "ऑगी नीम की छाँव में ठंडे पानी के साथ आराम कर रहा है। परांठा नहीं मिला। हाय!" },
        say: [ { who: 1, en: "Fact! Neem leaves, twigs, bark… all useful! It's called the village pharmacy!", hi: "नीम के पत्ते, टहनी, छाल — सब काम के! इसीलिए इसे गाँव का दवाख़ाना कहते हैं।" }, { who: 0, en: "Does the pharmacy sell carrots?", hi: "इस दवाख़ाने में गाजर मिलती है?" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.28 }, { id: "nanu", pose: "think", mood: "surprised", x: 0.75, flip: true } ],
        props: [ { id: "map", x: 0.52 } ],
        cap: { en: "Uh-oh! The road splits in two. Nanu turns the map this way… that way… and upside down.", hi: "उफ़! सड़क दो तरफ़ बँट गई। नानू नक्शा इधर घुमाते हैं… उधर… और फिर उल्टा।" },
        say: [ { who: 1, en: "Hmm. I, er… Auggie, I'm lost. Co-pilot, I need your help!", hi: "हम्म… मैं, वो… ऑगी, मैं रास्ता भूल गया। सह-पायलट, मदद करो!" }, { who: 0, en: "Finally, a job for my nose! Open the window a crack, please!", hi: "आख़िरकार मेरी नाक का काम आया! खिड़की ज़रा-सी खोलो!" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.28 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Sniff… cool, fresh, river-y air from the LEFT road! And look, a signboard agrees: Rishikesh!", hi: "सूँ-सूँ… ठंडी, ताज़ी, नदी वाली हवा — बाईं सड़क से! और देखो, बोर्ड भी यही कह रहा है: ऋषिकेश!" },
        say: [ { who: 0, en: "LEFT! I smell the Ganga!", hi: "बाएँ मुड़ो! गंगा मैया की ख़ुशबू आ रही है!", kind: "shout" }, { who: 1, en: "Follow the co-pilot's nose! Better than any map!", hi: "सह-पायलट की नाक ज़िंदाबाद! किसी नक्शे से कम नहीं!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.5 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.08 }, { id: "sun", x: 0.9, y: 0.15 } ],
        cap: { en: "Rishikesh at last! At the evening aarti, little diyas float and glow on the Ganga.", hi: "आख़िरकार ऋषिकेश! शाम की आरती में गंगा पर नन्हे-नन्हे दीये तैरते, जगमगाते हैं।" },
        say: [ { who: 1, en: "Fact! The Ganga begins at Gangotri glacier. Today I learned: asking for help is smart!", hi: "पता है? गंगा गंगोत्री ग्लेशियर से निकलती है। और आज मैंने सीखा — मदद माँगना समझदारी है!" }, { who: 2, en: "And our co-pilot gets a big, juicy apple. From my pallu, of course!", hi: "और हमारे सह-पायलट को मिलेगा बड़ा-सा रसीला सेब — पल्लू वाला, और क्या!" } ]
      }
    ]
  },

  // ───────────────────────── 66 ─────────────────────────
  {
    id: 66,
    age: "6-10",
    category: "animals",
    title: { en: "Who Took Mausi's Tiger Camera?", hi: "मौसी का कैमरा किसने लिया?" },
    blurb: { en: "The jeep leaves in ten minutes, Mausi's camera is missing, and Auggie isn't even allowed on safari!", hi: "जीप दस मिनट में निकलेगी, मौसी का कैमरा ग़ायब है, और ऑगी को तो सफ़ारी पर जाने की इजाज़त भी नहीं!" },
    moral: { en: "Even when you must stay behind, your help can travel all the way.", hi: "कभी-कभी साथ नहीं जा पाते, पर हमारी मदद बहुत दूर तक जाती है।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.25 }, { id: "mausi", pose: "cheer", mood: "surprised", x: 0.78, flip: true } ],
      props: [ { id: "camera", x: 0.5 }, { id: "bush", x: 0.05 } ],
      fx: { en: "FOUND IT!", hi: "मिल गया!" }
    },
    panels: [
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "papa", pose: "point", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "car", x: 0.52 }, { id: "sun", x: 0.9, y: 0.12 } ],
        cap: { en: "Rajasthan! Near Ranthambore National Park, an open safari jeep rumbles up to the guest-house at sunrise.", hi: "राजस्थान! रणथंभौर नेशनल पार्क के पास, सुबह-सुबह गेस्ट-हाउस के बाहर खुली सफ़ारी जीप आ खड़ी हुई।" },
        say: [ { who: 1, en: "Tiger country! Everybody ready? I'm feline good today! Get it? FELINE!", hi: "बाघों का इलाक़ा! सब तैयार? मैं तो पहले से धारीदार शर्ट पहनकर आया हूँ!" }, { who: 0, en: "Ready! Leash, water bowl, and my best stripy face!", hi: "तैयार! पट्टा, पानी का कटोरा, और मेरी सबसे धारीदार शक्ल!" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.28 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.95 } ],
        cap: { en: "Then the ranger bhaiya shares the park rule, very kindly: no pets inside national parks.", hi: "फिर रेंजर भैया ने बड़े प्यार से पार्क का नियम बताया: नेशनल पार्क में पालतू जानवर मना हैं।" },
        say: [ { who: 0, en: "Not even a very, VERY quiet Labrador? I can whisper-bark!", hi: "एक बहुत-बहुत शांत लैब्राडोर भी नहीं? मैं फुसफुसाकर भौंक सकता हूँ!" }, { who: 1, en: "Sorry, sweetie! Even a whisper-bark can scare wild animals. The park is their home, not ours.", hi: "सॉरी, मेरे प्यारे! फुसफुसाती भौं से भी जंगली जानवर डर जाते हैं। पार्क उनका घर है।" } ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.28 }, { id: "mausi", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "suitcase", x: 0.5 } ],
        cap: { en: "Minutes before the jeep leaves, Mausi shakes out her bag. Socks, snacks… but NO camera!", hi: "जीप चलने से ठीक पहले मौसी ने बैग उलट दिया। मोज़े, नमकीन… पर कैमरा ग़ायब!" },
        say: [ { who: 1, en: "My camera! No camera means no tiger photos! This is a DISASTER!", hi: "मेरा कैमरा! कैमरा नहीं, तो बाघ की फ़ोटो नहीं! हाय, सब बर्बाद!", kind: "shout" }, { who: 0, en: "I can't go on safari… but I CAN find that camera. Nose, on duty!", hi: "सफ़ारी पर नहीं जा सकता… पर कैमरा तो ढूँढ सकता हूँ! नाक, ड्यूटी पर!" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.25 }, { id: "peacock", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "camera", x: 0.52 }, { id: "bush", x: 0.95 } ],
        cap: { en: "The trail leads to the kitchen first (hello, parathas!), then out to the garden where Mausi took peacock selfies.", hi: "सुराग पहले रसोई ले गया (अरे वाह, परांठे!), फिर बगीचे में, जहाँ मौसी ने कल मोर के साथ सेल्फ़ी ली थीं।" },
        say: [ { who: 1, en: "Ahem! Is this shiny thing yours? I've admired my reflection in it all night.", hi: "अहम्! ये चमकीली चीज़ तुम्हारी है? मैं रात भर इसमें अपना सुंदर चेहरा देख रहा था!" }, { who: 0, en: "Found it! Thank you, Neelu! You're even prettier than the photos!", hi: "मिल गया! शुक्रिया नीलू! तुम तो फ़ोटो से भी सुंदर हो!", kind: "shout" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.22 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.5 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.96 } ],
        cap: { en: "Mausi squeezes Auggie tight and hops into the jeep. Auggie stays behind with Nanu.", hi: "मौसी ने ऑगी को कसके गले लगाया और जीप में बैठ गईं। ऑगी नानू के साथ रुका।" },
        say: [ { who: 2, en: "My hero! I promise, the very best tiger photo is yours!", hi: "मेरा हीरो! पक्का वादा, सबसे बढ़िया बाघ वाली फ़ोटो तुम्हारी!" }, { who: 1, en: "Fact: that hilltop fort is about a thousand years old! Let's go bird-spotting.", hi: "पता है? उस पहाड़ी वाले क़िले की उम्र क़रीब हज़ार साल है! चलो, यहीं से पंछी देखें।" } ]
      },
      {
        bg: "jungle",
        chars: [ { id: "papa", pose: "sit", mood: "surprised", x: 0.22 }, { id: "mausi", pose: "sit", mood: "surprised", x: 0.46 }, { id: "deer", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.32 }, { id: "tree", x: 0.96 } ],
        cap: { en: "Deep in the park: DHONK! A sambar deer's alarm call. The ranger whispers, “Tiger nearby!”", hi: "पार्क के अंदर: धोंक! साँभर हिरण की चेतावनी। रेंजर भैया फुसफुसाए, “बाघ पास में है!”" },
        say: [ { who: 2, en: "DHONK! Everybody freeze! Stripes are coming!", hi: "धोंक! सब रुक जाओ! धारियाँ आ रही हैं!", kind: "shout" }, { who: 0, en: "Deer and langurs warn the whole jungle when a tiger walks by. Nature's alarm!", hi: "जब बाघ गुज़रता है, तो हिरण और लंगूर पूरे जंगल को ख़बर कर देते हैं। कुदरत का अलार्म!", kind: "whisper" } ],
        fx: { en: "DHONK!", hi: "धोंक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "mausi", pose: "sit", mood: "happy", x: 0.22 }, { id: "tiger", pose: "lie", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "car", x: 0.22 }, { id: "camera", x: 0.36, y: 0.5 } ],
        cap: { en: "And there she is: a tigress, wading into a cool lake. The jeep stays far back, engine off.", hi: "और वो रही — एक बाघिन, ठंडी झील में धीरे-धीरे उतरती हुई। जीप दूर खड़ी, इंजन बंद।" },
        say: [ { who: 0, en: "For once, I'm not rushing a photo. I'm just… watching. Wow.", hi: "आज पहली बार फ़ोटो की जल्दी नहीं। बस… देख रही हूँ। वाह।", kind: "whisper" }, { who: 0, en: "Okay, now ONE photo. A swimmer, just like Auggie! Click!", hi: "अब एक फ़ोटो। ये भी ऑगी जैसी तैराक है! क्लिक!", kind: "whisper" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "papa", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.62, y: 0.4 } ],
        cap: { en: "Back at the guest-house, heads bump together over the little camera screen. Ooooh!", hi: "गेस्ट-हाउस लौटकर सब छोटे-से कैमरे पर सिर जोड़कर झुक गए। ओहो!" },
        say: [ { who: 2, en: "One tiger needs a HUGE patch of forest. That's why we protect parks like this.", hi: "एक बाघ को रहने के लिए बहुत बड़ा जंगल चाहिए। इसीलिए ऐसे पार्क बचाने ज़रूरी हैं।" }, { who: 0, en: "A swimmer like me! We're friends now… from very, very far away!", hi: "मेरी तरह तैराक! हम दोस्त हैं… पर बहुत-बहुत दूर वाले!" } ]
      }
    ]
  }

);
