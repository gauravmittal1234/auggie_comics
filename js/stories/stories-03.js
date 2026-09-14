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
        cap: { en: "Near the road, the leash stays short and snug.", hi: "सड़क के पास पट्टा छोटा और कसकर पकड़ा।" },
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
    title: { en: "Tuk-Tuk Auto Ride", hi: "टुक-टुक ऑटो की सवारी" },
    blurb: { en: "Auggie squeezes into a bright auto-rickshaw with Mumma and Mausi for a bumpy ride to the market.", hi: "ऑगी मम्मा और मौसी के साथ चमकीले ऑटो में बैठकर हिचकोले खाता हुआ बाज़ार जाता है।" },
    moral: { en: "Small rides bring big smiles when you ride together.", hi: "साथ मिलकर चलो तो छोटी सवारी भी बड़ी खुशी देती है।" },
    cover: {
      bg: "city",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "rickshaw", x: 0.52 } ],
      fx: { en: "TUK-TUK!", hi: "टुक-टुक!" }
    },
    panels: [
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "mausi", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "rickshaw", x: 0.52 } ],
        cap: { en: "A yellow and green auto-rickshaw stops. It has three wheels!", hi: "एक पीला-हरा ऑटो रुका। उसके तीन पहिए हैं!" },
        say: [ { who: 1, en: "Hop in, Auggie! Auto time!", hi: "चढ़ो ऑगी! ऑटो का टाइम!" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "rickshaw", x: 0.5 } ],
        cap: { en: "Auggie sits on the floor, snug by Mumma's feet.", hi: "ऑगी मम्मा के पैरों के पास आराम से नीचे बैठ गया।" },
        say: [ { who: 1, en: "Chottu, hold his leash tight!", hi: "छोटू, इसका पट्टा कसकर पकड़ना!" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 } ],
        props: [ { id: "rickshaw", x: 0.55 }, { id: "bus", x: 0.88 } ],
        cap: { en: "The auto zips tuk-tuk-tuk through the busy street!", hi: "ऑटो भीड़ भरी सड़क पर टुक-टुक-टुक दौड़ा!" },
        say: [ { who: 0, en: "It honks like a duck!", hi: "ये तो बत्तख जैसा हॉर्न बजाता है!", kind: "shout" } ],
        fx: { en: "PEEP-PEEP!", hi: "पीं-पीं!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Whee! A bumpy-jumpy road!", hi: "वी! उछलती-कूदती सड़क!" } ],
        fx: { en: "BUMP!", hi: "धक्क!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "banana", x: 0.5 } ],
        cap: { en: "The auto stops at the colourful market.", hi: "ऑटो रंग-बिरंगे बाज़ार में रुका।" },
        say: [ { who: 0, en: "Look, carrots and bananas! My favourites!", hi: "देखो, गाजर और केले! मेरे पसंदीदा!" } ]
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "mumma", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rickshaw", x: 0.52 } ],
        cap: { en: "Mumma thanks the kind auto driver.", hi: "मम्मा ने दयालु ऑटो वाले भैया को धन्यवाद कहा।" },
        say: [ { who: 0, en: "Thank you, auto! Tuk-tuk again soon!", hi: "शुक्रिया ऑटो! जल्दी फिर टुक-टुक!" } ]
      }
    ]
  },

  // ───────────────────────── 52 ─────────────────────────
  {
    id: 52,
    age: "4-6",
    category: "travel",
    title: { en: "Waiting for Mausi's Plane", hi: "मौसी के हवाई जहाज़ का इंतज़ार" },
    blurb: { en: "Auggie watches giant planes zoom into the sky while he waits to welcome Mausi home.", hi: "मौसी का स्वागत करने के इंतज़ार में ऑगी बड़े-बड़े हवाई जहाज़ों को आसमान में उड़ते देखता है।" },
    moral: { en: "Waiting is easier when you find something wonderful to watch.", hi: "कुछ अच्छा देखते रहो तो इंतज़ार आसान हो जाता है।" },
    cover: {
      bg: "airport",
      chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "plane", x: 0.55, y: 0.18 } ]
    },
    panels: [
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "papa", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "plane", x: 0.5, y: 0.2 } ],
        cap: { en: "Papa and Auggie go to the airport. Mausi is flying home!", hi: "पापा और ऑगी हवाई अड्डे गए। मौसी हवाई जहाज़ से घर आ रही हैं!" },
        say: [ { who: 1, en: "Her plane lands soon, Auggie.", hi: "उनका जहाज़ जल्दी उतरेगा, ऑगी।" } ]
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 } ],
        props: [ { id: "plane", x: 0.65, y: 0.15 } ],
        cap: { en: "A giant plane zooms up into the sky!", hi: "एक बड़ा हवाई जहाज़ आसमान में ऊपर उड़ गया!" },
        say: [ { who: 0, en: "It flies without flapping!", hi: "ये पंख फड़फड़ाए बिना उड़ता है!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सूँऽऽ!" },
        action: true
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "plane", x: 0.5, y: 0.15 } ],
        say: [ { who: 1, en: "Big wings and strong engines lift it up!", hi: "बड़े पंख और ताक़तवर इंजन इसे ऊपर उठाते हैं!" } ]
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.32 } ],
        props: [ { id: "clock", x: 0.72, y: 0.3 } ],
        cap: { en: "Waiting... waiting... Auggie counts planes. One, two, three...", hi: "इंतज़ार... इंतज़ार... ऑगी जहाज़ गिनता है। एक, दो, तीन..." },
        say: [ { who: 0, en: "Zzz... planes... Mausi...", hi: "खर्र... जहाज़... मौसी...", kind: "whisper" } ]
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "run", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "suitcase", x: 0.92 } ],
        say: [ { who: 1, en: "Auggieee! I missed you so much!", hi: "ऑगीईई! मुझे तुम्हारी बहुत याद आई!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "airport",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 } ],
        cap: { en: "First thing? A welcome-home selfie with Mausi's camera!", hi: "सबसे पहले? मौसी के कैमरे से वेलकम-होम सेल्फ़ी!" },
        say: [ { who: 0, en: "Woof-cheese!", hi: "भौं-चीज़!" } ]
      }
    ]
  },

  // ───────────────────────── 53 ─────────────────────────
  {
    id: 53,
    age: "4-6",
    category: "india",
    title: { en: "Auggie's Shikara Ride", hi: "ऑगी की शिकारा सवारी" },
    blurb: { en: "On Dal Lake in Srinagar, Auggie floats in a painted wooden boat called a shikara.", hi: "श्रीनगर की डल झील पर ऑगी शिकारा नाम की रंगीन लकड़ी की नाव में घूमता है।" },
    moral: { en: "Stay safe and calm, and the water will show you wonders.", hi: "सुरक्षित और शांत रहो, तो पानी तुम्हें कमाल की चीज़ें दिखाएगा।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.35 }, { id: "papa", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "boat", x: 0.5 } ]
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        cap: { en: "Dal Lake in Srinagar shines like a mirror.", hi: "श्रीनगर की डल झील आईने जैसी चमक रही है।" },
        say: [ { who: 1, en: "These painted boats are called shikaras.", hi: "इन रंगीन नावों को शिकारा कहते हैं।" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "First, everyone puts on a life jacket. Auggie too!", hi: "पहले सबने लाइफ़ जैकेट पहनी। ऑगी ने भी!" },
        say: [ { who: 0, en: "I look like an orange balloon!", hi: "मैं संतरी गुब्बारे जैसा लग रहा हूँ!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "boat", x: 0.5 } ],
        cap: { en: "The boatman paddles slowly across the calm lake.", hi: "नाववाले भैया शांत झील में धीरे-धीरे चप्पू चलाते हैं।" },
        fx: { en: "SPLISH!", hi: "छप-छप!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "fish", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Blub! Hello, doggy! Please don't jump in!", hi: "ब्लब! हेलो डॉगी! प्लीज़ पानी में मत कूदना!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "flower", x: 0.5 }, { id: "boat", x: 0.52 } ],
        cap: { en: "A floating market! Boats full of flowers drift by.", hi: "तैरता बाज़ार! फूलों से भरी नावें पास से गुज़रती हैं।" },
        say: [ { who: 1, en: "Smile, Auggie! Flower selfie!", hi: "मुस्कुराओ ऑगी! फूलों वाली सेल्फ़ी!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "boat", x: 0.5 }, { id: "sun", x: 0.88, y: 0.2 } ],
        cap: { en: "The boat rocks gently. Auggie falls fast asleep.", hi: "नाव धीरे-धीरे झूलती है। ऑगी गहरी नींद में सो गया।" },
        say: [ { who: 1, en: "Shh... our little sailor is sleeping.", hi: "श्श... हमारा छोटा नाविक सो रहा है।", kind: "whisper" } ],
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
    title: { en: "Auggie Under a Million Stars", hi: "लाखों तारों के नीचे ऑगी" },
    blurb: { en: "Auggie camps outside for the first time and finds the dark is full of twinkly friends.", hi: "ऑगी पहली बार बाहर कैंप करता है और पाता है कि अँधेरा टिमटिमाते दोस्तों से भरा है।" },
    moral: { en: "The dark is not scary when you look up and stay together.", hi: "ऊपर देखो और साथ रहो, तो अँधेरा डरावना नहीं लगता।" },
    cover: {
      bg: "forest",
      chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "papa", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "tent", x: 0.52 }, { id: "star", x: 0.2, y: 0.1 }, { id: "star", x: 0.82, y: 0.12 } ]
    },
    panels: [
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.28 }, { id: "papa", pose: "blast", mood: "determined", x: 0.75, flip: true } ],
        props: [ { id: "tent", x: 0.52 } ],
        cap: { en: "Camping trip! Papa sets up the tent.", hi: "कैंपिंग ट्रिप! पापा ने तंबू लगाया।" },
        say: [ { who: 1, en: "Mottu, does this tent look upside down?", hi: "मोटू, ये तंबू उल्टा तो नहीं लग रहा?" } ]
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "campfire", x: 0.52 } ],
        cap: { en: "A cosy campfire crackles. Auggie sits a safe distance away.", hi: "अलाव चटचटा रहा है। ऑगी सुरक्षित दूरी पर बैठा है।" },
        say: [ { who: 1, en: "Not too close, Auggie. Fire is hot!", hi: "ज़्यादा पास नहीं ऑगी। आग गरम होती है!" } ],
        fx: { en: "CRACKLE!", hi: "चट-चट!" },
        action: true
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.3 }, { id: "owl", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.9 } ],
        cap: { en: "Something in the tree says hoo-hoo!", hi: "पेड़ पर कोई बोला, हू-हू!" },
        say: [ { who: 1, en: "Don't be scared! I'm just Hootu the owl.", hi: "डरो मत! मैं तो बस हूटू उल्लू हूँ।" } ],
        fx: { en: "HOO-HOO!", hi: "हू-हू!" },
        action: true
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "papa", pose: "lie", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.25, y: 0.1 }, { id: "star", x: 0.55, y: 0.15 }, { id: "star", x: 0.85, y: 0.08 } ],
        cap: { en: "Papa and Auggie lie down and look up.", hi: "पापा और ऑगी लेटकर ऊपर देखते हैं।" },
        say: [ { who: 0, en: "So many stars, Papa!", hi: "पापा, कितने सारे तारे!" } ]
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "papa", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.4, y: 0.1 }, { id: "star", x: 0.7, y: 0.12 } ],
        say: [ { who: 1, en: "Stars look tiny, but they are giant faraway suns!", hi: "तारे छोटे दिखते हैं, पर वो बहुत दूर के बड़े-बड़े सूरज हैं!" } ]
      },
      {
        bg: "forest",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "mumma", pose: "lie", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "tent", x: 0.52 }, { id: "star", x: 0.2, y: 0.1 }, { id: "star", x: 0.82, y: 0.1 } ],
        cap: { en: "Snug in the tent, Auggie dreams of twinkly stars.", hi: "तंबू में दुबककर ऑगी टिमटिमाते तारों के सपने देखता है।" },
        say: [ { who: 1, en: "Good night, my little star.", hi: "शुभ रात्रि, मेरे नन्हे तारे।", kind: "whisper" } ]
      }
    ]
  },

  // ───────────────────────── 55 ─────────────────────────
  {
    id: 55,
    age: "4-6",
    category: "animals",
    title: { en: "Auggie Goes to the Farm", hi: "ऑगी चला खेत पर" },
    blurb: { en: "On a village farm, Auggie tries to talk like every animal he meets.", hi: "गाँव के एक खेत पर ऑगी हर मिलने वाले जानवर की तरह बोलने की कोशिश करता है।" },
    moral: { en: "Every animal is different, and every animal deserves kindness.", hi: "हर जानवर अलग है, और हर जानवर प्यार का हक़दार है।" },
    cover: {
      bg: "farm",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "cow", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "tree", x: 0.08 } ],
      fx: { en: "MOO-WOOF!", hi: "बाँ-भौं!" }
    },
    panels: [
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "nanu", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Nanu takes Auggie to a real village farm!", hi: "नानू ऑगी को गाँव के एक असली खेत पर ले गए!" },
        say: [ { who: 1, en: "Farmers grow the food we eat every day.", hi: "किसान वो खाना उगाते हैं जो हम रोज़ खाते हैं।" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "cow", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie tries to moo. Out comes... MOO-WOOF!", hi: "ऑगी ने रँभाने की कोशिश की। निकला... बाँ-भौं!" },
        say: [ { who: 1, en: "Moo! I'm Lali. Welcome to the farm!", hi: "बाँ! मैं लाली हूँ। खेत में स्वागत है!" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.3 }, { id: "goat", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Meh-woof! Did I do it right?", hi: "में-भौं! ठीक किया ना?" } ],
        fx: { en: "MEH-EH!", hi: "में-में!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "duck", pose: "run", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.52 } ],
        say: [ { who: 1, en: "Quack! Want to splash in my puddle?", hi: "क्वैक! मेरे गड्ढे में छपाक करोगे?" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.32 }, { id: "duck", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.5 } ],
        cap: { en: "Auggie and the duck splash in the mud. Muddy fun!", hi: "ऑगी और बत्तख कीचड़ में छपाक-छपाक खेले। कीचड़ वाला मज़ा!" },
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "The farmer gives Auggie a fresh, crunchy carrot.", hi: "किसान ने ऑगी को ताज़ी, कुरकुरी गाजर दी।" },
        say: [ { who: 0, en: "Thank you, farm friends! Woof!", hi: "शुक्रिया, खेत के दोस्तो! भौं!" } ]
      }
    ]
  },

  // ───────────────────────── 56 ─────────────────────────
  {
    id: 56,
    age: "6-10",
    category: "travel",
    title: { en: "Goa and the Runaway Slipper", hi: "गोवा और भागती चप्पल" },
    blurb: { en: "On a sunny Goa holiday, a sneaky wave steals Papa's slipper, and Auggie follows a very surprising trail.", hi: "गोवा की धूप भरी छुट्टी में एक शरारती लहर पापा की चप्पल ले भागती है, और ऑगी एक अनोखे सुराग के पीछे चल पड़ता है।" },
    moral: { en: "Be patient with the sea, and kind to the creatures who live there.", hi: "समुंदर के साथ सब्र रखो, और वहाँ रहने वाले जीवों से प्यार से पेश आओ।" },
    cover: {
      bg: "beach",
      chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.25 }, { id: "papa", pose: "run", mood: "surprised", x: 0.52 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
      props: [ { id: "palm", x: 0.05 }, { id: "sun", x: 0.9, y: 0.12 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "mumma", pose: "point", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "suitcase", x: 0.53 } ],
        cap: { en: "Holiday time! Auggie packs his suitcase: ball, towel, water bowl and his sunny-day bandana.", hi: "छुट्टी का समय! ऑगी ने अपना सूटकेस पैक किया: गेंद, तौलिया, पानी का कटोरा और धूप वाला रुमाल।" },
        say: [ { who: 1, en: "Goa, here we come! Mittsy, did you pack your orange shorts?", hi: "गोवा, हम आ रहे हैं! मिट्सी, तुमने अपनी संतरी शॉर्ट्स रखीं?" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "wave", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "palm", x: 0.95 } ],
        cap: { en: "Goa is India's smallest state, but its beaches are long and golden!", hi: "गोवा भारत का सबसे छोटा राज्य है, पर इसके समुंदर किनारे लंबे और सुनहरे हैं!" },
        say: [ { who: 0, en: "Brown T-shirt, orange shorts. Holiday Papa is ready, Mottu!", hi: "भूरी टी-शर्ट, संतरी शॉर्ट्स। छुट्टी वाले पापा तैयार हैं, मोटू!" }, { who: 2, en: "And my teal dress matches the sea!", hi: "और मेरी टील ड्रेस समुंदर से मैच करती है!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "umbrella", x: 0.32 }, { id: "bowl", x: 0.52 } ],
        cap: { en: "Under the big umbrella, Auggie gets shade and fresh water. Hot sand can hurt paws!", hi: "बड़ी छतरी के नीचे ऑगी को छाँव और ताज़ा पानी मिला। गरम रेत पंजों को जला सकती है!" },
        say: [ { who: 0, en: "Slurp! Holiday rule number one: stay cool!", hi: "लप-लप! छुट्टी का पहला नियम: ठंडे रहो!" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.25 }, { id: "papa", pose: "run", mood: "surprised", x: 0.62 } ],
        cap: { en: "Papa strolls by the water. Suddenly, a sneaky wave rushes in!", hi: "पापा पानी के किनारे टहल रहे थे। तभी एक शरारती लहर दौड़ी आई!" },
        say: [ { who: 1, en: "My slipper! Come back, slipper!", hi: "मेरी चप्पल! वापस आओ, चप्पल!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सर्र्र!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.3 }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "Auggie wants to leap into the big waves. But a red flag means the sea is rough today.", hi: "ऑगी बड़ी लहरों में कूदना चाहता है। पर लाल झंडे का मतलब है आज समुंदर तेज़ है।" },
        say: [ { who: 1, en: "Stop, Auggie! Big waves are dangerous. We'll wait for the water to go back.", hi: "रुको ऑगी! बड़ी लहरें ख़तरनाक होती हैं। हम पानी उतरने का इंतज़ार करेंगे।" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "papa", pose: "think", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "When the water goes back, Auggie sniffs along the wet sand. The slipper smells very Papa!", hi: "पानी पीछे हटा तो ऑगी गीली रेत सूँघने लगा। चप्पल में से एकदम पापा वाली ख़ुशबू आती है!" },
        say: [ { who: 1, en: "Go, Super Sniffer! Find it before the next wave!", hi: "चलो सुपर स्निफ़र! अगली लहर से पहले ढूँढो!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "crab", pose: "wave", mood: "happy", x: 0.7, flip: true } ],
        props: [ { id: "rock", x: 0.9 }, { id: "shell", x: 0.5 } ],
        cap: { en: "Behind a rock lies the slipper. And inside it sits a little crab!", hi: "एक चट्टान के पीछे चप्पल पड़ी है। और उसके अंदर बैठा है एक छोटा केकड़ा!" },
        say: [ { who: 1, en: "I'm Tak-Tak! This is my new house. It's very comfy!", hi: "मैं टक-टक हूँ! ये मेरा नया घर है। बहुत आरामदायक है!" }, { who: 0, en: "It's Papa's slipper! How about this shell house instead?", hi: "ये पापा की चप्पल है! बदले में ये सीप वाला घर कैसा रहेगा?" } ]
      },
      {
        bg: "beach",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "crab", pose: "wave", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "shell", x: 0.9 }, { id: "sun", x: 0.88, y: 0.15 } ],
        cap: { en: "Tak-Tak loves the pretty shell. Papa gets his slipper back, sandy but happy!", hi: "टक-टक को सुंदर सीप पसंद आई। पापा को चप्पल वापस मिल गई, रेत से भरी पर खुश!" },
        say: [ { who: 0, en: "Best holiday detective ever! Mottu, take a photo!", hi: "सबसे बढ़िया छुट्टी वाला जासूस! मोटू, फ़ोटो लो!" } ]
      }
    ]
  },

  // ───────────────────────── 57 ─────────────────────────
  {
    id: 57,
    age: "6-10",
    category: "nature",
    title: { en: "The Island of Giant Waves", hi: "बड़ी लहरों वाला द्वीप" },
    blurb: { en: "On a rocky island off Karnataka's coast, Auggie's super ears hear a giant wave coming just in time.", hi: "कर्नाटक के तट के पास एक पथरीले द्वीप पर ऑगी के सुपर कान एक विशाल लहर को ठीक समय पर सुन लेते हैं।" },
    moral: { en: "Respect the sea: stay back from edges and listen to the signs.", hi: "समुंदर का सम्मान करो: किनारों से दूर रहो और संकेतों को सुनो।" },
    cover: {
      bg: "ocean",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.32 }, { id: "mausi", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
      props: [ { id: "rock", x: 0.92 } ],
      fx: { en: "CRASH!", hi: "धड़ाम!" }
    },
    panels: [
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        cap: { en: "A small boat carries the family from Malpe beach to St. Mary's Island.", hi: "एक छोटी नाव परिवार को मालपे बीच से सेंट मैरी द्वीप ले जा रही है।" },
        say: [ { who: 1, en: "Everyone wears a life jacket. Auggie, yours is the one with paw prints!", hi: "सब लाइफ़ जैकेट पहनेंगे। ऑगी, तुम्हारी वाली पर पंजों के निशान हैं!" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        cap: { en: "The boat bounces over the waves. Salty spray flies everywhere!", hi: "नाव लहरों पर उछलती है। खारे पानी की फुहारें चारों ओर उड़ती हैं!" },
        say: [ { who: 1, en: "Selfie on a bouncy boat! Auggie, stop licking my camera!", hi: "उछलती नाव पर सेल्फ़ी! ऑगी, मेरा कैमरा चाटना बंद करो!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "rock", x: 0.52 }, { id: "rock", x: 0.95 } ],
        cap: { en: "The island is full of strange rocks shaped like tall columns.", hi: "द्वीप अजीब चट्टानों से भरा है, जो लंबे खंभों जैसी दिखती हैं।" },
        say: [ { who: 1, en: "Millions of years ago, hot volcano lava cooled and cracked into these shapes!", hi: "लाखों साल पहले ज्वालामुखी का गरम लावा ठंडा होकर इन आकारों में चटक गया था!" }, { who: 0, en: "Rocks made by a volcano? Woof, that's hot news!", hi: "ज्वालामुखी से बनी चट्टानें? भौं, ये तो गरमागरम ख़बर है!" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "mausi", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.92 } ],
        cap: { en: "Mausi spots the perfect photo place, right at the edge of the rocks.", hi: "मौसी को फ़ोटो की सबसे बढ़िया जगह दिखी, ठीक चट्टानों के किनारे पर।" },
        say: [ { who: 1, en: "Just one quick picture with the big blue sea!", hi: "बस बड़े नीले समुंदर के साथ एक जल्दी वाली फ़ोटो!" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.35 } ],
        props: [ { id: "rock", x: 0.8 } ],
        cap: { en: "Auggie's ears twitch. Far away, the sea is rumbling louder and louder...", hi: "ऑगी के कान खड़े हो गए। दूर समुंदर ज़ोर-ज़ोर से गरज रहा है..." },
        say: [ { who: 0, en: "That sound... a giant wave is coming!", hi: "ये आवाज़... एक बहुत बड़ी लहर आ रही है!", kind: "think" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "mausi", pose: "run", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Auggie gives his biggest woof and gently tugs Mausi's scarf, pulling her back from the edge!", hi: "ऑगी ने सबसे ज़ोरदार भौंक लगाई और धीरे से मौसी का दुपट्टा खींचकर उन्हें किनारे से पीछे ले आया!" },
        say: [ { who: 1, en: "Okay, okay, Auggie! I'm coming!", hi: "ठीक है, ठीक है ऑगी! आ रही हूँ!" } ],
        fx: { en: "WOOF-WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.22 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        props: [ { id: "rock", x: 0.65 } ],
        cap: { en: "A giant wave smashes over the exact spot where Mausi was standing!", hi: "एक विशाल लहर ठीक उसी जगह टकराई जहाँ मौसी खड़ी थीं!" },
        say: [ { who: 2, en: "Wise dog! The sea is beautiful, but we must always stay back from edges.", hi: "समझदार कुत्ता! समुंदर सुंदर है, पर किनारों से हमेशा दूर रहना चाहिए।" } ],
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "beach",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 } ],
        cap: { en: "They take the photo from a safe spot, far from the waves. It's the best one yet!", hi: "उन्होंने लहरों से दूर, सुरक्षित जगह से फ़ोटो ली। ये अब तक की सबसे अच्छी फ़ोटो है!" },
        say: [ { who: 1, en: "This photo is called 'Auggie, the Wave Watcher'!", hi: "इस फ़ोटो का नाम है 'लहरों का पहरेदार ऑगी'!" }, { who: 0, en: "Say cheese! And stay safe!", hi: "बोलो चीज़! और सुरक्षित रहो!" } ]
      }
    ]
  },

  // ───────────────────────── 58 ─────────────────────────
  {
    id: 58,
    age: "6-10",
    category: "travel",
    title: { en: "Snow Day with Snowy", hi: "स्नोवी के साथ बर्फ़ीला दिन" },
    blurb: { en: "In snowy Manali, Auggie meets Snowy the husky, and a sudden snowfall turns their play into a rescue.", hi: "बर्फ़ीले मनाली में ऑगी की मुलाक़ात स्नोवी हस्की से होती है, और अचानक बर्फ़बारी उनके खेल को बचाव अभियान बना देती है।" },
    moral: { en: "In the mountains, always stay together with your group.", hi: "पहाड़ों में हमेशा अपने साथियों के साथ रहो।" },
    cover: {
      bg: "snow",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "blast", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "tree", x: 0.08 } ],
      fx: { en: "AWOOO!", hi: "आऊऊ!" }
    },
    panels: [
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "map", x: 0.52 } ],
        cap: { en: "Nanu and Auggie read the map together. Next stop: Manali in Himachal Pradesh!", hi: "नानू और ऑगी साथ में नक्शा पढ़ते हैं। अगला पड़ाव: हिमाचल प्रदेश का मनाली!" },
        say: [ { who: 1, en: "Manali sits beside the Beas River, high up in the Himalayas.", hi: "मनाली हिमालय में ऊँचाई पर, ब्यास नदी के किनारे बसा है।" }, { who: 0, en: "Does the map show where the snacks are?", hi: "नक्शे में ये दिखता है कि नाश्ता कहाँ है?" } ]
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.28 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        cap: { en: "Solang Valley is covered in soft white snow. Auggie has never seen snow before!", hi: "सोलंग घाटी मुलायम सफ़ेद बर्फ़ से ढकी है। ऑगी ने पहले कभी बर्फ़ नहीं देखी!" },
        say: [ { who: 0, en: "Mumma! The ground is made of cold ice cream!", hi: "मम्मा! ज़मीन तो ठंडी आइसक्रीम की बनी है!", kind: "shout" }, { who: 1, en: "It's snow, silly! Don't eat it. Here's your warm doggy jacket.", hi: "ये बर्फ़ है, बुद्धू! इसे खाना मत। लो, अपनी गरम जैकेट पहनो।" } ],
        fx: { en: "WOW!", hi: "वाह!" },
        action: true
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "snowy", pose: "blast", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Awooo! Hi, I'm Snowy! Huskies don't bark, we sing!", hi: "आऊऊ! हाय, मैं स्नोवी हूँ! हस्की भौंकते नहीं, गाते हैं!" }, { who: 0, en: "Woof! I'm Auggie. And my paws are freezing!", hi: "भौं! मैं ऑगी हूँ। और मेरे पंजे जम रहे हैं!" } ],
        fx: { en: "AWOOO!", hi: "आऊऊ!" },
        action: true
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "run", mood: "laugh", x: 0.7, flip: true } ],
        cap: { en: "Snowy shows Auggie how to bounce in the snow. Soon they are racing and rolling!", hi: "स्नोवी ने ऑगी को बर्फ़ में उछलना सिखाया। जल्दी ही दोनों दौड़ रहे थे और लोटपोट हो रहे थे!" },
        say: [ { who: 1, en: "My thick fur keeps me warm. That's why I love cold and hate heat!", hi: "मेरे घने बाल मुझे गरम रखते हैं। इसीलिए मुझे ठंड पसंद है और गर्मी बिल्कुल नहीं!" } ]
      },
      {
        bg: "snow",
        chars: [ { id: "mausi", pose: "stand", mood: "happy", x: 0.4 } ],
        props: [ { id: "camera", x: 0.6, y: 0.4 }, { id: "tree", x: 0.12 }, { id: "tree", x: 0.9 } ],
        cap: { en: "Meanwhile, Mausi wanders off to take selfies with the snowy pine trees.", hi: "इस बीच, मौसी बर्फ़ीले चीड़ के पेड़ों के साथ सेल्फ़ी लेते-लेते दूर निकल गईं।" },
        say: [ { who: 0, en: "Just one more photo... and one more...", hi: "बस एक फ़ोटो और... और एक..." } ]
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.28 }, { id: "mumma", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        props: [ { id: "cloud", x: 0.3, y: 0.15 }, { id: "cloud", x: 0.7, y: 0.12 } ],
        cap: { en: "Suddenly, thick snow starts falling. Everything turns white. Where is Mausi?", hi: "अचानक घनी बर्फ़ गिरने लगी। सब कुछ सफ़ेद हो गया। मौसी कहाँ हैं?" },
        say: [ { who: 1, en: "Chottu! Chottu, where are you?", hi: "छोटू! छोटू, कहाँ हो तुम?", kind: "shout" } ]
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.28 }, { id: "snowy", pose: "blast", mood: "determined", x: 0.6 } ],
        props: [ { id: "cloud", x: 0.5, y: 0.12 } ],
        cap: { en: "Auggie's nose finds Mausi's trail. Snowy howls loudly so Mausi can follow the sound.", hi: "ऑगी की नाक ने मौसी की ख़ुशबू पकड़ ली। स्नोवी ज़ोर से गाता है ताकि मौसी आवाज़ के पीछे आ सकें।" },
        say: [ { who: 1, en: "Awooo! Follow my song, Mausi!", hi: "आऊऊ! मेरे गाने के पीछे आओ, मौसी!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "snow",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.5 }, { id: "snowy", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Mausi is safe! Everyone walks back to the cosy hut together.", hi: "मौसी सुरक्षित हैं! सब साथ मिलकर गरम झोपड़ी की ओर लौटते हैं।" },
        say: [ { who: 1, en: "Sorry! From now on, I'll stay with the group. Group selfie, everyone!", hi: "सॉरी! अब से मैं सबके साथ रहूँगी। चलो, ग्रुप सेल्फ़ी!" } ]
      }
    ]
  },

  // ───────────────────────── 59 ─────────────────────────
  {
    id: 59,
    age: "6-10",
    category: "india",
    title: { en: "Desert Friend, Pink City Sky", hi: "रेगिस्तान का दोस्त, गुलाबी शहर का आसमान" },
    blurb: { en: "In Rajasthan, Auggie makes a camel friend in the desert and floats over Jaipur in a hot-air balloon.", hi: "राजस्थान में ऑगी रेगिस्तान में एक ऊँट से दोस्ती करता है और जयपुर के ऊपर गरम हवा के गुब्बारे में उड़ता है।" },
    moral: { en: "Every place has its own wisdom, if you are ready to learn.", hi: "हर जगह की अपनी समझ होती है, बस सीखने को तैयार रहो।" },
    cover: {
      bg: "desert",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "camel", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "hotair", x: 0.5, y: 0.15 }, { id: "sun", x: 0.9, y: 0.12 } ]
    },
    panels: [
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "papa", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "sun", x: 0.88, y: 0.12 } ],
        cap: { en: "Jaisalmer! The golden sand of the Thar Desert stretches as far as Auggie can see.", hi: "जैसलमेर! थार रेगिस्तान की सुनहरी रेत दूर-दूर तक फैली है, जहाँ तक ऑगी की नज़र जाए।" },
        say: [ { who: 1, en: "We came in the evening, Auggie. At noon, the sand is too hot for paws.", hi: "हम शाम को आए हैं ऑगी। दोपहर में रेत पंजों के लिए बहुत गरम होती है।" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "camel", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Namaste, little golden dog! I'm Ghumru the camel. Welcome to my desert!", hi: "नमस्ते, छोटे सुनहरे कुत्ते! मैं घुमरू ऊँट हूँ। मेरे रेगिस्तान में स्वागत है!" }, { who: 0, en: "Little? I'm a big dog! But you are a GIANT!", hi: "छोटा? मैं तो बड़ा कुत्ता हूँ! पर तुम तो विशाल हो!" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "camel", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Ghumru shares his desert secrets.", hi: "घुमरू अपने रेगिस्तान के राज़ बताता है।" },
        say: [ { who: 1, en: "People call camels the ships of the desert. We can walk for days with little water!", hi: "लोग ऊँट को रेगिस्तान का जहाज़ कहते हैं। हम थोड़े-से पानी में कई दिन चल सकते हैं!" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "bowl", x: 0.48 }, { id: "bottle", x: 0.6 } ],
        cap: { en: "But dogs are not camels! Mumma gives Auggie fresh water every half hour.", hi: "पर कुत्ते ऊँट नहीं होते! मम्मा हर आधे घंटे में ऑगी को ताज़ा पानी देती हैं।" },
        say: [ { who: 1, en: "Drink up, Auggie. In the desert, water is your best friend.", hi: "पी लो ऑगी। रेगिस्तान में पानी सबसे अच्छा दोस्त है।" } ]
      },
      {
        bg: "desert",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "camel", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "drum", x: 0.5 } ],
        cap: { en: "At sunset, folk music plays. Ghumru dances and his bells jingle!", hi: "सूरज ढलते ही लोक संगीत बजता है। घुमरू नाचता है और उसकी घंटियाँ बजती हैं!" },
        say: [ { who: 0, en: "Dance-off! My tail can dance too!", hi: "डांस मुक़ाबला! मेरी पूँछ भी नाच सकती है!" } ],
        fx: { en: "TUN-TUN!", hi: "टन-टन!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "hotair", x: 0.5, y: 0.2 } ],
        cap: { en: "Next morning: Jaipur! Hot-air balloons float above the Pink City.", hi: "अगली सुबह: जयपुर! गुलाबी शहर के ऊपर गरम हवा के गुब्बारे तैर रहे हैं।" },
        say: [ { who: 1, en: "Jaipur's old city is painted pink, the colour of welcome!", hi: "जयपुर का पुराना शहर गुलाबी रंग से रंगा है, जो स्वागत का रंग है!" } ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.7, flip: true } ],
        props: [ { id: "hotair", x: 0.12, y: 0.3 }, { id: "hotair", x: 0.88, y: 0.2 }, { id: "cloud", x: 0.5, y: 0.1 } ],
        cap: { en: "Up, up they rise at sunrise! Auggie's harness is clipped in, and Papa holds him close.", hi: "सूरज उगते ही वे ऊपर, और ऊपर उठते हैं! ऑगी का हार्नेस बँधा है और पापा उसे पास पकड़े हैं।" },
        say: [ { who: 0, en: "Papa, the houses look like tiny toys!", hi: "पापा, घर छोटे-छोटे खिलौनों जैसे दिख रहे हैं!" }, { who: 1, en: "That's Hawa Mahal. It has more than 900 little windows!", hi: "वो है हवा महल। उसमें 900 से ज़्यादा छोटी खिड़कियाँ हैं!" } ],
        fx: { en: "FWOOSH!", hi: "भर्र्र!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 }, { id: "hotair", x: 0.5, y: 0.12 } ],
        cap: { en: "What a trip! A camel friend in the desert and a balloon ride over Jaipur.", hi: "क्या सफ़र था! रेगिस्तान में ऊँट दोस्त और जयपुर के ऊपर गुब्बारे की सैर।" },
        say: [ { who: 1, en: "Selfie time, Auggie! Say 'Padharo mhare des!'", hi: "सेल्फ़ी का टाइम, ऑगी! बोलो 'पधारो म्हारे देस!'" }, { who: 0, en: "Padharo! That means welcome! Woof!", hi: "पधारो! इसका मतलब है स्वागत! भौं!" } ]
      }
    ]
  },

  // ───────────────────────── 60 ─────────────────────────
  {
    id: 60,
    age: "6-10",
    category: "india",
    title: { en: "The Houseboat and the Lost Duckling", hi: "हाउसबोट और खोया बत्तख का बच्चा" },
    blurb: { en: "Drifting on Kerala's backwaters, Auggie's super ears hear a tiny cry for help among the reeds.", hi: "केरल के बैकवॉटर्स में तैरते हुए ऑगी के सुपर कान सरकंडों के बीच एक नन्ही पुकार सुन लेते हैं।" },
    moral: { en: "Gentle help is the strongest kind of help.", hi: "प्यार से की गई मदद सबसे ताक़तवर मदद होती है।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.32 }, { id: "duck", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "boat", x: 0.5 }, { id: "palm", x: 0.92 } ]
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.28 }, { id: "mumma", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "boat", x: 0.5 }, { id: "palm", x: 0.92 } ],
        cap: { en: "Kerala! The family boards a houseboat on the backwaters of Alappuzha.", hi: "केरल! परिवार अलप्पुझा के बैकवॉटर्स में हाउसबोट पर चढ़ा।" },
        say: [ { who: 1, en: "A houseboat is a house that floats! It has beds, a kitchen and a sundeck.", hi: "हाउसबोट एक तैरता हुआ घर है! इसमें बिस्तर, रसोई और धूप सेंकने वाली छत है।" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "boat", x: 0.52 } ],
        say: [ { who: 1, en: "These boats are called kettuvallam. They are tied with coconut rope, not nails!", hi: "इन नावों को केट्टुवल्लम कहते हैं। इन्हें कीलों से नहीं, नारियल की रस्सी से बाँधा जाता है!" }, { who: 0, en: "A boat held together with rope? Clever, Nanu!", hi: "रस्सी से जुड़ी नाव? कमाल है, नानू!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.28 }, { id: "mausi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "palm", x: 0.92 }, { id: "camera", x: 0.5, y: 0.45 } ],
        cap: { en: "Palm trees sway. The boat glides slowly. Auggie naps in the shade, wearing his life jacket.", hi: "नारियल के पेड़ झूमते हैं। नाव धीरे-धीरे चलती है। ऑगी लाइफ़ जैकेट पहनकर छाँव में झपकी लेता है।" },
        say: [ { who: 1, en: "Life-jacket nap selfie! You're the laziest sailor in Kerala!", hi: "लाइफ़ जैकेट वाली झपकी की सेल्फ़ी! तुम केरल के सबसे आलसी नाविक हो!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 } ],
        props: [ { id: "bush", x: 0.78 } ],
        cap: { en: "Suddenly, Auggie's super ears twitch. A tiny peep-peep is coming from the reeds.", hi: "अचानक ऑगी के सुपर कान खड़े हो गए। सरकंडों से एक नन्ही चीं-चीं आ रही है।" },
        say: [ { who: 0, en: "Someone small is crying...", hi: "कोई छोटा रो रहा है...", kind: "think" } ],
        fx: { en: "PEEP!", hi: "चीं-चीं!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "duck", pose: "stand", mood: "sad", x: 0.7, flip: true } ],
        props: [ { id: "bush", x: 0.9 } ],
        say: [ { who: 1, en: "Peep! I'm Chinnu. I got lost from my flock, and Mama is far away!", hi: "चीं! मैं चिन्नू हूँ। मैं अपने झुंड से बिछड़ गया, और मम्मा बहुत दूर है!" }, { who: 0, en: "Don't cry, Chinnu. We'll help you find your family.", hi: "रो मत चिन्नू। हम तुम्हारा परिवार ढूँढने में मदद करेंगे।" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.28 }, { id: "papa", pose: "point", mood: "determined", x: 0.75, flip: true } ],
        cap: { en: "Auggie wants to jump in and swim. But the water is deep, and big splashes would scare Chinnu.", hi: "ऑगी पानी में कूदना चाहता है। पर पानी गहरा है, और बड़े छपाकों से चिन्नू डर जाएगा।" },
        say: [ { who: 1, en: "Let's be gentle and clever, Auggie. Can your ears find his mama?", hi: "चलो प्यार और समझदारी से काम लें ऑगी। क्या तुम्हारे कान उसकी मम्मा को ढूँढ सकते हैं?" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "duck", pose: "run", mood: "happy", x: 0.62 } ],
        props: [ { id: "boat", x: 0.3 } ],
        cap: { en: "Auggie hears quacking far away. The boatman steers slowly that way, and Chinnu paddles alongside.", hi: "ऑगी को दूर से क्वैक-क्वैक सुनाई देता है। नाववाले भैया धीरे-धीरे उधर नाव ले जाते हैं, और चिन्नू साथ-साथ तैरता है।" },
        say: [ { who: 0, en: "This way, Chinnu! Nice and slow!", hi: "इधर चिन्नू! आराम से, धीरे-धीरे!" } ],
        fx: { en: "QUACK!", hi: "क्वैक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "duck", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "palm", x: 0.92 }, { id: "sun", x: 0.12, y: 0.15 } ],
        cap: { en: "There's the flock! Alappuzha is famous for its ducks. Chinnu swims straight to Mama.", hi: "वो रहा झुंड! अलप्पुझा अपनी बत्तखों के लिए मशहूर है। चिन्नू सीधा मम्मा के पास तैर गया।" },
        say: [ { who: 1, en: "Quack-quack! Thank you, Auggie! You're a gentle giant!", hi: "क्वैक-क्वैक! शुक्रिया ऑगी! तुम बड़े दिल वाले बड़े दोस्त हो!" }, { who: 0, en: "Bye, Chinnu! Stay close to your mama!", hi: "टाटा चिन्नू! अपनी मम्मा के पास रहना!" } ]
      }
    ]
  },

  // ───────────────────────── 61 ─────────────────────────
  {
    id: 61,
    age: "6-10",
    category: "travel",
    title: { en: "The Little Toy Train Adventure", hi: "छोटी खिलौना ट्रेन का रोमांच" },
    blurb: { en: "Auggie rides Darjeeling's tiny toy train up the misty hills, until a goat on the track stops everything.", hi: "ऑगी दार्जिलिंग की छोटी खिलौना ट्रेन में धुंध भरी पहाड़ियों पर चढ़ता है, जब तक पटरी पर खड़ी एक बकरी सब रोक नहीं देती।" },
    moral: { en: "A little patience and kindness can clear any path.", hi: "थोड़ा सब्र और थोड़ी दया हर रास्ता साफ़ कर देते हैं।" },
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
        cap: { en: "Darjeeling station! A tiny blue train puffs and whistles.", hi: "दार्जिलिंग स्टेशन! एक छोटी नीली ट्रेन धुआँ छोड़ती है और सीटी बजाती है।" },
        say: [ { who: 1, en: "This toy train has climbed these hills since 1881. It's a World Heritage treasure!", hi: "ये खिलौना ट्रेन 1881 से इन पहाड़ियों पर चढ़ रही है। ये विश्व धरोहर है!" }, { who: 0, en: "It's even older than you, Nanu!", hi: "ये तो आपसे भी पुरानी है, नानू!" } ]
      },
      {
        bg: "station",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Off they go, slower than a bicycle!", hi: "ट्रेन चल पड़ी, साइकिल से भी धीरे!" },
        say: [ { who: 1, en: "Slow is lovely, Auggie. Now we can see everything!", hi: "धीरे चलना अच्छा है ऑगी। अब हम सब कुछ देख सकते हैं!" } ],
        fx: { en: "TOOT-TOOT!", hi: "कू-छुक!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 } ],
        props: [ { id: "train", x: 0.58 }, { id: "bush", x: 0.12 }, { id: "bush", x: 0.88 } ],
        cap: { en: "The train winds past green tea gardens. Darjeeling tea is famous all over the world.", hi: "ट्रेन हरे-भरे चाय के बागानों के पास से घूमती हुई गुज़रती है। दार्जिलिंग की चाय पूरी दुनिया में मशहूर है।" },
        say: [ { who: 0, en: "Hello, tea bushes! Dogs can't drink tea, so I'll stick to water.", hi: "नमस्ते, चाय की झाड़ियो! कुत्ते चाय नहीं पी सकते, तो मैं पानी ही पियूँगा।" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "train", x: 0.52 }, { id: "cloud", x: 0.8, y: 0.12 } ],
        cap: { en: "At Batasia Loop, the train circles round and round to climb the steep hill.", hi: "बतासिया लूप पर ट्रेन गोल-गोल घूमकर खड़ी पहाड़ी पर चढ़ती है।" },
        say: [ { who: 1, en: "On a clear day, you can see Kanchenjunga, one of the highest mountains on Earth!", hi: "साफ़ दिन में यहाँ से कंचनजंगा दिखता है, जो धरती के सबसे ऊँचे पहाड़ों में से एक है!" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.28 }, { id: "goat", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "train", x: 0.1 } ],
        cap: { en: "The train stops. A goat is standing on the track, and she won't budge!", hi: "ट्रेन रुक गई। पटरी पर एक बकरी खड़ी है, और हिलने को तैयार नहीं!" },
        say: [ { who: 1, en: "Meh! I'm not moving until I find my baby!", hi: "में! जब तक मेरा बच्चा नहीं मिलता, मैं नहीं हटूँगी!" } ],
        fx: { en: "SCREECH!", hi: "किर्र्र!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.32 } ],
        props: [ { id: "bush", x: 0.8 } ],
        cap: { en: "Auggie tilts his head. His super ears pick up a teeny 'meh' from behind a bush.", hi: "ऑगी ने सिर टेढ़ा किया। उसके सुपर कानों ने झाड़ी के पीछे से एक नन्ही-सी 'में' सुनी।" },
        say: [ { who: 0, en: "Up the slope, behind the bushes... there!", hi: "ढलान के ऊपर, झाड़ियों के पीछे... वहाँ!", kind: "think" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "blast", mood: "happy", x: 0.28 }, { id: "goat", pose: "stand", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "bush", x: 0.92 }, { id: "train", x: 0.1 } ],
        cap: { en: "Auggie stays on the train and gives a gentle woof, pointing his nose at the bush.", hi: "ऑगी ट्रेन में ही रहा और हल्का-सा भौंककर नाक से झाड़ी की ओर इशारा किया।" },
        say: [ { who: 0, en: "Goat Aunty, your baby is behind that bush!", hi: "बकरी आंटी, आपका बच्चा उस झाड़ी के पीछे है!" } ],
        fx: { en: "WOOF!", hi: "भौं!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.5 }, { id: "goat", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Mama goat skips off the track to her kid. Toot-toot! The little train chugs on.", hi: "बकरी मम्मा पटरी से कूदकर अपने बच्चे के पास गई। कू-छुक! छोटी ट्रेन फिर चल पड़ी।" },
        say: [ { who: 1, en: "Well done! You cleared the track without a single shout.", hi: "शाबाश! तुमने बिना चिल्लाए पटरी साफ़ कर दी।" }, { who: 2, en: "Thank you, kind dog! Meh-eh!", hi: "शुक्रिया, प्यारे कुत्ते! में-में!" } ]
      }
    ]
  },

  // ───────────────────────── 62 ─────────────────────────
  {
    id: 62,
    age: "6-10",
    category: "family",
    title: { en: "Super Sniffer and the Missing Ring", hi: "सुपर स्निफ़र और खोई अँगूठी" },
    blurb: { en: "At a grand family wedding, the ring goes missing, and only one well-dressed dog can sniff it out.", hi: "एक शानदार पारिवारिक शादी में अँगूठी खो जाती है, और सिर्फ़ एक सजा-धजा कुत्ता ही उसे सूँघकर ढूँढ सकता है।" },
    moral: { en: "Stay calm in trouble; teamwork and a good nose can fix it.", hi: "मुसीबत में शांत रहो; साथ मिलकर काम करने और अच्छी नाक से सब ठीक हो जाता है।" },
    cover: {
      bg: "wedding",
      chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.35, cape: true }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "drum", x: 0.1 } ],
      fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Wedding day! Papa wears a smart suit. Auggie wears his fancy red bow collar.", hi: "शादी का दिन! पापा ने शानदार सूट पहना। ऑगी ने अपना फ़ैंसी लाल बो वाला पट्टा पहना।" },
        say: [ { who: 1, en: "Mottu, look! Auggie is more handsome than me!", hi: "मोटू, देखो! ऑगी तो मुझसे भी ज़्यादा हैंडसम है!" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.28 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Mumma arrives in a shining lehenga and sparkly bangles.", hi: "मम्मा चमकीले लहंगे और झिलमिल चूड़ियों में आईं।" },
        say: [ { who: 0, en: "Mumma, you're sparkling like Diwali!", hi: "मम्मा, आप तो दिवाली जैसी चमक रही हो!" }, { who: 1, en: "Mittsy, keep the ring safe! The ring ceremony starts soon!", hi: "मिट्सी, अँगूठी संभालकर रखना! अँगूठी की रस्म जल्दी शुरू होगी!", kind: "shout" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "drum", x: 0.5 } ],
        cap: { en: "The dhol booms and everyone dances. Nanu asked for flower petals instead of firecrackers, so Auggie feels safe.", hi: "ढोल बजता है और सब नाचते हैं। नानू ने पटाखों की जगह फूलों की पंखुड़ियाँ मँगवाईं, ताकि ऑगी को डर न लगे।" },
        say: [ { who: 1, en: "Dance, Auggie! Shake that tail!", hi: "नाचो ऑगी! पूँछ हिलाओ!" } ],
        fx: { en: "DHAM-DHAM!", hi: "ढम-ढम!" },
        action: true
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.22 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.5 }, { id: "papa", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Oh no! The ring box is empty! There's a hole in my pocket!", hi: "अरे नहीं! अँगूठी का डिब्बा ख़ाली है! मेरी जेब में छेद है!", kind: "shout" }, { who: 1, en: "Mittsy! The ceremony starts in ten minutes!", hi: "मिट्सी! रस्म दस मिनट में शुरू होगी!" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "Mumma quickly ties on the red Super Cape. Auggie becomes Super Auggie!", hi: "मम्मा ने झट से लाल सुपर केप बाँध दी। ऑगी बन गया सुपर ऑगी!" },
        say: [ { who: 0, en: "Woof-woof, let's go!", hi: "भौं-भौं, चलो चलें!", kind: "shout" } ]
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.32, cape: true } ],
        props: [ { id: "flower", x: 0.72 }, { id: "flower", x: 0.9 } ],
        cap: { en: "The Super Sniffer sniffs Papa's pocket, then follows the trail across the glittering hall.", hi: "सुपर स्निफ़र ने पापा की जेब सूँघी, फिर जगमगाते हॉल में सुराग के पीछे चल पड़ा।" },
        say: [ { who: 0, en: "Rose petals... hot puris... and a tiny whiff of Papa's pocket!", hi: "गुलाब की पंखुड़ियाँ... गरम पूरियाँ... और पापा की जेब की हल्की-सी ख़ुशबू!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.28, cape: true }, { id: "dadi", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "cake", x: 0.52 } ],
        cap: { en: "The trail ends at the dessert table, right next to a big plate of laddoos!", hi: "सुराग मिठाई की मेज़ पर ख़त्म हुआ, लड्डुओं की बड़ी थाली के ठीक पास!" },
        say: [ { who: 0, en: "Found it! The ring! And... may I have one laddoo?", hi: "मिल गई! अँगूठी! और... क्या मुझे एक लड्डू मिलेगा?" }, { who: 1, en: "No sweets for dogs, my hero! Here's a crunchy carrot instead.", hi: "कुत्तों के लिए मिठाई नहीं, मेरे हीरो! ये लो कुरकुरी गाजर।" } ],
        fx: { en: "FOUND IT!", hi: "मिल गई!" },
        action: true
      },
      {
        bg: "wedding",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "The ring reaches the couple just in time. Everyone cheers for the best-dressed detective!", hi: "अँगूठी ठीक समय पर दूल्हा-दुल्हन तक पहुँच गई। सबने सबसे सजे-धजे जासूस के लिए तालियाँ बजाईं!" },
        say: [ { who: 1, en: "Thank you, Auggie! Next time, the ring rides in your bow collar!", hi: "शुक्रिया ऑगी! अगली बार अँगूठी तुम्हारे बो वाले पट्टे में रहेगी!" }, { who: 2, en: "And Mittsy, please sew that pocket!", hi: "और मिट्सी, प्लीज़ वो जेब सिल लेना!" } ]
      }
    ]
  },

  // ───────────────────────── 63 ─────────────────────────
  {
    id: 63,
    age: "6-10",
    category: "india",
    title: { en: "Auggie and the Mumbai Monsoon", hi: "ऑगी और मुंबई की बारिश" },
    blurb: { en: "When the monsoon roars into Mumbai, Auggie meets Garaj the grumpy cloud and shows him why rain is loved.", hi: "जब मानसून गरजता हुआ मुंबई आता है, ऑगी चिड़चिड़े बादल गरज से मिलता है और उसे दिखाता है कि बारिश सबको क्यों प्यारी है।" },
    moral: { en: "Everyone has a gift; sometimes a friend helps you see it.", hi: "हर किसी में कोई ख़ूबी होती है; कभी-कभी कोई दोस्त उसे देखने में मदद करता है।" },
    cover: {
      bg: "rain",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "garaj", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "umbrella", x: 0.1 }, { id: "puddle", x: 0.5 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "mumma", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "cloud", x: 0.5, y: 0.12 }, { id: "umbrella", x: 0.92 } ],
        cap: { en: "June in Mumbai! The monsoon arrives, bringing big dark clouds from the sea.", hi: "मुंबई में जून! मानसून आ गया, समुंदर से बड़े काले बादल लेकर।" },
        say: [ { who: 1, en: "Raincoat on, Auggie! Mumbai gets lots of rain from June to September.", hi: "रेनकोट पहनो ऑगी! मुंबई में जून से सितंबर तक ख़ूब बारिश होती है।" } ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "garaj", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "GRRR-BOOM! I'm Garaj! Everyone runs away when I come!", hi: "गड़-गड़-बूम! मैं गरज हूँ! मेरे आते ही सब भाग जाते हैं!", kind: "shout" }, { who: 0, en: "Hello, Garaj! You sound grumpy... and a bit lonely.", hi: "हेलो गरज! तुम चिड़चिड़े लग रहे हो... और थोड़े अकेले भी।" } ],
        fx: { en: "BOOM!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.28 }, { id: "garaj", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.5 } ],
        say: [ { who: 1, en: "People open umbrellas and shut windows. Nobody likes me.", hi: "लोग छाते खोलते हैं और खिड़कियाँ बंद करते हैं। मुझे कोई पसंद नहीं करता।" }, { who: 0, en: "Come with me, Garaj. I'll show you something!", hi: "मेरे साथ चलो गरज। मैं तुम्हें कुछ दिखाता हूँ!" } ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.5 } ],
        cap: { en: "Look, Garaj! Mausi and Auggie dance and jump in the puddles!", hi: "देखो गरज! मौसी और ऑगी नाचते हैं और गड्ढों में छपाक-छपाक कूदते हैं!" },
        say: [ { who: 1, en: "Chai, rain and puddles! Mumbai's favourite season!", hi: "चाय, बारिश और गड्ढे! मुंबई का पसंदीदा मौसम!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.28 }, { id: "garaj", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "sapling", x: 0.5 } ],
        cap: { en: "Outside the city, farmers smile as rain fills their fields.", hi: "शहर के बाहर किसान मुस्कुराते हैं, क्योंकि बारिश उनके खेतों को भर रही है।" },
        say: [ { who: 0, en: "Your rain grows rice and fills the lakes that give Mumbai its water!", hi: "तुम्हारी बारिश से धान उगता है और वो झीलें भरती हैं जिनसे मुंबई को पानी मिलता है!" } ]
      },
      {
        bg: "ocean",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "papa", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "At Marine Drive, waves leap high over the sea wall. It is high tide!", hi: "मरीन ड्राइव पर लहरें समुद्री दीवार के ऊपर तक उछल रही हैं। ज्वार का समय है!" },
        say: [ { who: 1, en: "Stay back, Auggie. At high tide, we watch the waves from far away.", hi: "पीछे रहो ऑगी। ज्वार के समय हम लहरों को दूर से देखते हैं।" } ],
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "garaj", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rainbow", x: 0.5, y: 0.15 } ],
        say: [ { who: 1, en: "So I'm not a bother? I'm a helper!", hi: "तो मैं परेशानी नहीं? मैं मददगार हूँ!" }, { who: 0, en: "You're the star of the season, Garaj!", hi: "तुम इस मौसम के सितारे हो, गरज!" } ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.22 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.5 }, { id: "garaj", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "After the rain, Marine Drive's lights twinkle like pearls. People call it the Queen's Necklace.", hi: "बारिश के बाद मरीन ड्राइव की रोशनियाँ मोतियों जैसी चमकती हैं। लोग इसे 'क्वीन्स नेकलेस' कहते हैं।" },
        say: [ { who: 2, en: "Tonight I'll drizzle gently, so everyone sleeps well!", hi: "आज रात मैं धीरे-धीरे बरसूँगा, ताकि सब चैन से सोएँ!" } ]
      }
    ]
  },

  // ───────────────────────── 64 ─────────────────────────
  {
    id: 64,
    age: "6-10",
    category: "animals",
    title: { en: "The Lions of Gir and the Lost Calf", hi: "गिर के शेर और खोई बछिया" },
    blurb: { en: "Pets can't enter Gir National Park, so Auggie stays with Dadi. Then his Super Ears hear a lost calf's moo!", hi: "पालतू जानवर गिर नेशनल पार्क में नहीं जा सकते, इसलिए ऑगी दादी के साथ रुकता है। फिर उसके सुपर कान एक खोई बछिया की पुकार सुनते हैं!" },
    moral: { en: "Wild places have rules to keep animals safe, and good friends follow them happily.", hi: "जंगल के नियम जानवरों को सुरक्षित रखते हैं, और अच्छे दोस्त उन्हें ख़ुशी-ख़ुशी मानते हैं।" },
    cover: {
      bg: "village",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.28 }, { id: "cow", pose: "stand", mood: "happy", x: 0.74, flip: true, s: 0.65 } ],
      props: [ { id: "bush", x: 0.52 }, { id: "house", x: 0.92 } ],
      fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }
    },
    panels: [
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "house", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Sasan Gir in Gujarat! The family arrives at a cosy forest guest-house at the edge of Gir.", hi: "गुजरात का सासन गिर! परिवार गिर जंगल के किनारे एक प्यारे-से फ़ॉरेस्ट गेस्ट-हाउस पहुँचता है।" },
        say: [ { who: 1, en: "Gir is the only place in the world where Asiatic lions live in the wild.", hi: "गिर दुनिया की इकलौती जगह है जहाँ एशियाई शेर जंगल में रहते हैं।" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.95 } ],
        cap: { en: "A friendly ranger didi explains an important rule: pets must stay outside national parks.", hi: "एक प्यारी रेंजर दीदी एक ज़रूरी नियम बताती हैं: पालतू जानवर नेशनल पार्क के बाहर ही रहेंगे।" },
        say: [ { who: 0, en: "No safari for me? But I'm a very good boy!", hi: "मेरे लिए सफ़ारी नहीं? पर मैं तो बहुत अच्छा बच्चा हूँ!" }, { who: 1, en: "You are! But barks scare lions, and dog germs can make them sick.", hi: "हो तो! पर भौंकने से शेर डरते हैं, और कुत्तों के कीटाणु उन्हें बीमार कर सकते हैं।" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.22 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "wave", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.96 } ],
        cap: { en: "Papa, Mumma and Mausi ride off in the safari jeep. Auggie stays with Dadi and Nanu.", hi: "पापा, मम्मा और मौसी सफ़ारी जीप में निकल पड़ते हैं। ऑगी दादी और नानू के साथ रुकता है।" },
        say: [ { who: 2, en: "Bye, Auggie! I'll bring back lots of lion photos for you!", hi: "बाय ऑगी! मैं तुम्हारे लिए शेरों की ढेर सारी फ़ोटो लाऊँगी!" }, { who: 1, en: "Come, beta. We'll have our own adventure right here!", hi: "आओ बेटा, हम यहीं अपना मज़ेदार एडवेंचर करेंगे!" } ]
      },
      {
        bg: "jungle",
        chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.22 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.46 }, { id: "lion", pose: "lie", mood: "happy", x: 0.8, flip: true, s: 0.8 } ],
        props: [ { id: "car", x: 0.32 }, { id: "tree", x: 0.96 } ],
        cap: { en: "Deep in Gir, the jeep stops at a safe distance. A lioness rests with her cubs in the shade.", hi: "गिर के अंदर, जीप सुरक्षित दूरी पर रुकती है। एक शेरनी अपने शावकों के साथ छाँव में आराम कर रही है।" },
        say: [ { who: 1, en: "Mittsy, look! Two tiny cubs!", hi: "मिट्सी, देखो! दो नन्हे शावक!", kind: "whisper" }, { who: 0, en: "Shh, Mottu. Stay quiet, stay inside, just watch.", hi: "श्श, मोटू। चुप रहो, अंदर रहो, बस देखो।", kind: "whisper" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "cow", pose: "stand", mood: "sad", x: 0.75, flip: true } ],
        props: [ { id: "house", x: 0.52 } ],
        cap: { en: "Back at the guest-house, Auggie's Super Ears catch a worried moo from the Maldhari herders' village.", hi: "गेस्ट-हाउस में ऑगी के सुपर कानों ने मालधारी चरवाहों के गाँव से आती एक परेशान पुकार सुनी।" },
        say: [ { who: 1, en: "Moo! I'm Gauri. My little calf Chhutki is lost!", hi: "म्बाँ! मैं गौरी हूँ। मेरी नन्ही बछिया छुटकी खो गई है!", kind: "shout" }, { who: 0, en: "Don't worry, Gauri. My Super Sniffer will find her!", hi: "चिंता मत करो गौरी। मेरी सुपर नाक उसे ढूँढ लेगी!" } ],
        fx: { en: "MOO!", hi: "म्बाँ!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.68 }, { id: "dadi", pose: "run", mood: "laugh", x: 0.25 } ],
        props: [ { id: "bush", x: 0.95 } ],
        cap: { en: "Nose down, Auggie follows Chhutki's milky smell past the fields. Dadi hurries behind.", hi: "नाक ज़मीन पर, ऑगी खेतों के पार छुटकी की दूध जैसी महक के पीछे चलता है। दादी पीछे-पीछे भागती हैं।" },
        say: [ { who: 1, en: "Slow down, beta! Dadi's knees are not Super Knees!", hi: "धीरे बेटा! दादी के घुटने सुपर घुटने नहीं हैं!", kind: "shout" }, { who: 0, en: "The smell is getting stronger. This way!", hi: "महक तेज़ हो रही है। इस तरफ़!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "cow", pose: "stand", mood: "sad", x: 0.72, flip: true, s: 0.6 } ],
        props: [ { id: "bush", x: 0.82 }, { id: "tree", x: 0.98 } ],
        cap: { en: "There's Chhutki, stuck in a thorny bush by the forest fence. Auggie gently helps her out.", hi: "वो रही छुटकी, जंगल की बाड़ के पास एक काँटेदार झाड़ी में फँसी हुई। ऑगी धीरे से उसे बाहर निकालता है।" },
        say: [ { who: 1, en: "I wanted to see the lions, like your family!", hi: "मैं भी तुम्हारे परिवार की तरह शेर देखना चाहती थी!" }, { who: 0, en: "Me too! But the forest is their home. Let's go back to your mumma.", hi: "मैं भी! पर जंगल उनका घर है। चलो, तुम्हारी माँ के पास वापस चलें।" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "cow", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.92, y: 0.45 }, { id: "sun", x: 0.08, y: 0.12 } ],
        cap: { en: "At sunset, Gauri and Chhutki are together again. The jeep returns with lion photos and stories!", hi: "सूरज ढलते-ढलते गौरी और छुटकी फिर साथ हैं। जीप शेरों की फ़ोटो और कहानियाँ लेकर लौटती है!" },
        say: [ { who: 2, en: "We saw lion cubs, Auggie! But Dadi says YOU were today's real hero!", hi: "हमने शेर के शावक देखे, ऑगी! पर दादी कहती हैं, आज के असली हीरो तो तुम हो!" }, { who: 0, en: "The lions stayed safe at home, and so did Chhutki!", hi: "शेर अपने घर में सुरक्षित रहे, और छुटकी भी!" } ],
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
    title: { en: "The Great Road Trip to the Ganga", hi: "गंगा तक का बड़ा रोड ट्रिप" },
    blurb: { en: "Auggie is the co-pilot on a long road trip to Rishikesh with Nanu, Dadi and a very confusing map.", hi: "नानू, दादी और एक बड़े उलझे हुए नक्शे के साथ ऋषिकेश के लंबे रोड ट्रिप पर ऑगी बनता है सह-पायलट।" },
    moral: { en: "On a journey, caring for each other matters more than arriving fast.", hi: "सफ़र में जल्दी पहुँचने से ज़्यादा ज़रूरी है एक-दूसरे का ख़्याल रखना।" },
    cover: {
      bg: "village",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "dadi", pose: "wave", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "car", x: 0.52 }, { id: "sun", x: 0.9, y: 0.12 } ],
      fx: { en: "VROOM!", hi: "व्रूम!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "map", x: 0.52 }, { id: "suitcase", x: 0.08 } ],
        cap: { en: "Road trip! Nanu spreads the big map on the floor. Auggie is the official co-pilot.", hi: "रोड ट्रिप! नानू ने फ़र्श पर बड़ा नक्शा फैलाया। ऑगी है ऑफ़िशियल सह-पायलट।" },
        say: [ { who: 1, en: "We drive north to Rishikesh, where the Ganga comes down from the mountains.", hi: "हम उत्तर की ओर ऋषिकेश जाएँगे, जहाँ गंगा पहाड़ों से नीचे उतरती है।" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.22 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.08 } ],
        cap: { en: "Everyone buckles up. Dadi packs carrots, apples and her famous stories.", hi: "सबने बेल्ट बाँधी। दादी ने गाजर, सेब और अपनी मशहूर कहानियाँ साथ रख लीं।" },
        say: [ { who: 1, en: "Ma, your stories are longer than this highway!", hi: "माँ, आपकी कहानियाँ तो इस हाईवे से भी लंबी हैं!" }, { who: 2, en: "And you still fall asleep in the middle, beta!", hi: "और तुम फिर भी बीच में सो जाते हो, बेटा!" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "car", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Yellow mustard fields and tall sugarcane rush past the window.", hi: "पीले सरसों के खेत और लंबे गन्ने खिड़की के बाहर भागते जा रहे हैं।" },
        say: [ { who: 1, en: "India's highways join big cities from north to south and east to west!", hi: "भारत के हाईवे उत्तर से दक्षिण और पूरब से पश्चिम तक बड़े शहरों को जोड़ते हैं!" } ],
        fx: { en: "VROOM!", hi: "व्रूम!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.28 }, { id: "dadi", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.92 }, { id: "sun", x: 0.5, y: 0.1 } ],
        cap: { en: "Lunch stop at a highway dhaba. The sun is blazing hot.", hi: "हाईवे के ढाबे पर खाने के लिए रुके। धूप बहुत तेज़ है।" },
        say: [ { who: 1, en: "Nobody leaves Auggie in the car! A closed car gets hot like an oven.", hi: "ऑगी को कोई कार में नहीं छोड़ेगा! बंद कार भट्टी जैसी गरम हो जाती है।" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "tree", x: 0.12 }, { id: "bowl", x: 0.52 } ],
        cap: { en: "Auggie rests under a shady neem tree with a bowl of cool water.", hi: "ऑगी एक छायादार नीम के पेड़ के नीचे ठंडे पानी के कटोरे के साथ आराम करता है।" },
        say: [ { who: 1, en: "Neem is so useful that people call it the village pharmacy!", hi: "नीम इतना काम का है कि लोग इसे गाँव का दवाख़ाना कहते हैं!" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.28 }, { id: "nanu", pose: "think", mood: "surprised", x: 0.75, flip: true } ],
        props: [ { id: "map", x: 0.52 } ],
        cap: { en: "Uh-oh! The road splits in two. Nanu turns the map this way... and that way...", hi: "उफ़! सड़क दो हिस्सों में बँट गई। नानू नक्शा इधर घुमाते हैं... फिर उधर..." },
        say: [ { who: 1, en: "Hmm. Left or right? Is the map upside down... or am I?", hi: "हम्म। बाएँ या दाएँ? नक्शा उल्टा है... या मैं?" } ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.28 }, { id: "dadi", pose: "cheer", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Auggie sniffs cool river air from the left road. Then a signboard agrees: Rishikesh, this way!", hi: "ऑगी ने बाईं सड़क से आती ठंडी नदी की हवा सूँघी। फिर एक बोर्ड ने भी कहा: ऋषिकेश, इस तरफ़!" },
        say: [ { who: 0, en: "Left! I smell the river!", hi: "बाएँ! मुझे नदी की ख़ुशबू आ रही है!", kind: "shout" }, { who: 1, en: "Follow the co-pilot's nose!", hi: "सह-पायलट की नाक के पीछे चलो!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.5 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.08 }, { id: "sun", x: 0.9, y: 0.15 } ],
        cap: { en: "Rishikesh at last! The Ganga sparkles, and evening lamps glow along the river.", hi: "आख़िरकार ऋषिकेश! गंगा चमक रही है, और नदी के किनारे शाम के दीये जगमगा रहे हैं।" },
        say: [ { who: 1, en: "The Ganga begins at the Gangotri glacier, high in the Himalayas.", hi: "गंगा हिमालय में ऊँचे गंगोत्री ग्लेशियर से निकलती है।" }, { who: 2, en: "And our co-pilot gets a big apple for dinner!", hi: "और हमारे सह-पायलट को रात के खाने में बड़ा सेब मिलेगा!" } ]
      }
    ]
  },

  // ───────────────────────── 66 ─────────────────────────
  {
    id: 66,
    age: "6-10",
    category: "animals",
    title: { en: "Ranthambore and the Missing Camera", hi: "रणथंभौर और ग़ायब कैमरा" },
    blurb: { en: "Pets can't go on the tiger safari, but Auggie's Super Sniffer makes sure Mausi gets her perfect tiger photo!", hi: "पालतू जानवर बाघ सफ़ारी पर नहीं जा सकते, पर ऑगी की सुपर नाक पक्का करती है कि मौसी को बाघ की एकदम सही फ़ोटो मिले!" },
    moral: { en: "You can't always go along, but you can always help in your own way.", hi: "हर जगह साथ जाना मुमकिन नहीं होता, पर अपने तरीके से मदद हमेशा की जा सकती है।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.25 }, { id: "mausi", pose: "cheer", mood: "surprised", x: 0.78, flip: true } ],
      props: [ { id: "camera", x: 0.5 }, { id: "bush", x: 0.05 } ],
      fx: { en: "FOUND IT!", hi: "मिल गया!" }
    },
    panels: [
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.28 }, { id: "papa", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "car", x: 0.52 }, { id: "sun", x: 0.9, y: 0.12 } ],
        cap: { en: "Sunrise near Ranthambore National Park in Rajasthan! An open safari jeep waits outside the guest-house.", hi: "राजस्थान के रणथंभौर नेशनल पार्क के पास सूरज उग रहा है! गेस्ट-हाउस के बाहर एक खुली सफ़ारी जीप खड़ी है।" },
        say: [ { who: 1, en: "Ranthambore is famous for its tigers. Everybody ready?", hi: "रणथंभौर अपने बाघों के लिए मशहूर है। सब तैयार?" }, { who: 0, en: "Ready! Leash, water bowl and my best safari face!", hi: "तैयार! पट्टा, पानी का कटोरा और मेरा सबसे बढ़िया सफ़ारी चेहरा!" } ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.28 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.95 } ],
        cap: { en: "But the ranger bhaiya kindly explains the park rule: pets must stay outside national parks.", hi: "पर रेंजर भैया प्यार से पार्क का नियम समझाते हैं: पालतू जानवर नेशनल पार्क के बाहर ही रहेंगे।" },
        say: [ { who: 0, en: "Not even a very, very quiet Labrador?", hi: "एक बहुत-बहुत शांत लैब्राडोर भी नहीं?" }, { who: 1, en: "Sorry, cutie! Dog smells and barks can scare wild animals. The park is their home.", hi: "सॉरी, प्यारे! कुत्तों की गंध और भौंकने से जंगली जानवर डर सकते हैं। पार्क उनका घर है।" } ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.28 }, { id: "mausi", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "suitcase", x: 0.5 } ],
        cap: { en: "Uh-oh! Mausi turns her bag upside down. Her camera is gone!", hi: "उफ़! मौसी ने अपना बैग उल्टा कर दिया। उनका कैमरा ग़ायब है!" },
        say: [ { who: 1, en: "My camera is missing! No camera means no tiger photos!", hi: "मेरा कैमरा नहीं मिल रहा! कैमरा नहीं, तो बाघ की फ़ोटो भी नहीं!", kind: "shout" }, { who: 0, en: "Don't worry, Mausi. Super Sniffer, switch on!", hi: "चिंता मत करो मौसी। सुपर नाक, चालू हो जा!" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.25 }, { id: "peacock", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "camera", x: 0.52 }, { id: "bush", x: 0.95 } ],
        cap: { en: "Auggie follows Mausi's smell to the garden, where she took peacock selfies last evening.", hi: "ऑगी मौसी की महक के पीछे-पीछे बगीचे में पहुँचता है, जहाँ कल शाम उन्होंने मोर के साथ सेल्फ़ी ली थीं।" },
        say: [ { who: 1, en: "Looking for this? I guarded it all night!", hi: "ये ढूँढ रहे हो? मैंने रात भर इसकी रखवाली की!" }, { who: 0, en: "Found it! Thank you, Neelu!", hi: "मिल गया! शुक्रिया, नीलू!", kind: "shout" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.22 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.5 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.96 } ],
        cap: { en: "Mausi hugs Auggie and hops into the jeep. Auggie stays behind with Nanu.", hi: "मौसी ऑगी को गले लगाकर जीप में बैठ जाती हैं। ऑगी नानू के साथ रुकता है।" },
        say: [ { who: 2, en: "You saved the safari! Every tiger photo is for you, Auggie!", hi: "तुमने सफ़ारी बचा ली! बाघ की हर फ़ोटो तुम्हारे लिए, ऑगी!" }, { who: 1, en: "Come, Auggie. From here we can watch birds and the thousand-year-old fort!", hi: "आओ ऑगी। यहाँ से हम पक्षी और हज़ार साल पुराना क़िला देखेंगे!" } ]
      },
      {
        bg: "jungle",
        chars: [ { id: "papa", pose: "sit", mood: "surprised", x: 0.22 }, { id: "mausi", pose: "sit", mood: "surprised", x: 0.46 }, { id: "deer", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        props: [ { id: "car", x: 0.32 }, { id: "tree", x: 0.96 } ],
        cap: { en: "Inside the park, a sambar deer gives a loud alarm call. The ranger whispers: a tiger is near!", hi: "पार्क के अंदर एक साँभर हिरण ज़ोर से चेतावनी वाली आवाज़ देता है। रेंजर भैया फुसफुसाते हैं: बाघ पास में है!" },
        say: [ { who: 2, en: "Dhonk! Watch out, everyone! Stripes are coming!", hi: "धोंक! सब सावधान! धारियाँ आ रही हैं!", kind: "shout" }, { who: 0, en: "Deer and monkeys warn the whole jungle when a tiger walks by.", hi: "जब बाघ पास से गुज़रता है, तो हिरण और बंदर पूरे जंगल को सावधान करते हैं।", kind: "whisper" } ],
        fx: { en: "DHONK!", hi: "धोंक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "mausi", pose: "sit", mood: "happy", x: 0.22 }, { id: "tiger", pose: "lie", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "car", x: 0.22 }, { id: "camera", x: 0.36, y: 0.5 } ],
        cap: { en: "There she is! A tigress wades into the cool lake. The jeep stays far away and quiet.", hi: "वो रही! एक बाघिन ठंडी झील में उतरती है। जीप दूर और चुपचाप खड़ी रहती है।" },
        say: [ { who: 0, en: "Click! Tigers love swimming, just like Auggie. This photo is for him!", hi: "क्लिक! बाघों को तैरना पसंद है, बिल्कुल ऑगी की तरह। ये फ़ोटो उसके लिए है!", kind: "whisper" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "papa", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.62, y: 0.4 } ],
        cap: { en: "Back at the guest-house, everyone crowds around the camera. The tigress photo is perfect!", hi: "गेस्ट-हाउस लौटकर सब कैमरे के चारों ओर जमा हो जाते हैं। बाघिन की फ़ोटो एकदम परफ़ेक्ट है!" },
        say: [ { who: 2, en: "Each tiger needs lots of forest. Let's always protect their home!", hi: "हर बाघ को बहुत सारा जंगल चाहिए। चलो, हमेशा उनके घर को बचाएँ!" }, { who: 0, en: "A swimmer like me! We're friends... from far away!", hi: "मेरी तरह तैराक! हम दोस्त हैं... दूर से ही!" } ]
      }
    ]
  }

);
