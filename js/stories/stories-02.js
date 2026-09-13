window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(

  // 23 — Meeting Moti the street dog
  {
    id: 23, age: "4-6", category: "dogs",
    title: { en: "Moti, King of the Lanes", hi: "गलियों का राजा मोती" },
    blurb: { en: "On his evening walk, Auggie meets Moti, a shy street dog with a very big heart.", hi: "शाम की सैर पर ऑगी की मुलाक़ात होती है मोती से — एक शर्मीला गली का कुत्ता, जिसका दिल बहुत बड़ा है।" },
    moral: { en: "Street dogs are our friends too. Be kind and gentle with them.", hi: "गली के कुत्ते भी हमारे दोस्त हैं। उनसे प्यार और नरमी से पेश आओ।" },
    cover: { bg: "city", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "moti", pose: "wave", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.52 } ], fx: { en: "WOOF!", hi: "भौं-भौं!" } },
    panels: [
      { bg: "city", chars: [ { id: "papa", pose: "stand", mood: "happy", x: 0.3 }, { id: "auggie", pose: "run", mood: "happy", x: 0.7 } ], props: [ { id: "rickshaw", x: 0.95 } ],
        cap: { en: "Evening walk time! Leash on, tail up!", hi: "शाम की सैर का समय! पट्टा पहना, पूँछ ऊपर!" },
        say: [ { who: 0, en: "Slow down, Auggie! Leash walks are safe walks.", hi: "धीरे, ऑगी! पट्टे के साथ सैर ही सबसे सुरक्षित है।" } ] },
      { bg: "market", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "moti", pose: "lie", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "Near the chai stall sat a thin, tired dog.", hi: "चाय की दुकान के पास एक दुबला, थका-सा कुत्ता बैठा था।" },
        say: [ { who: 0, en: "Hello! I am Auggie. Who are you?", hi: "नमस्ते! मैं ऑगी हूँ। तुम कौन हो?" } ] },
      { bg: "market", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "moti", pose: "sit", mood: "scared", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "I'm Moti. Please don't shoo me away.", hi: "मैं मोती हूँ। मुझे भगाना मत, प्लीज़।", kind: "whisper" } ] },
      { bg: "market", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.2 }, { id: "papa", pose: "sit", mood: "happy", x: 0.5 }, { id: "moti", pose: "stand", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "bottle", x: 0.42 }, { id: "bowl", x: 0.65 } ],
        cap: { en: "Papa filled a bowl with fresh, cool water.", hi: "पापा ने कटोरे में ठंडा, ताज़ा पानी भर दिया।" },
        say: [ { who: 1, en: "Here you go, Moti. Drink up!", hi: "लो मोती, जी भर के पियो!" } ] },
      { bg: "city", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "moti", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "bowl", x: 0.5 } ],
        say: [ { who: 1, en: "Thank you! Want to see my secret lane?", hi: "धन्यवाद! मेरी सीक्रेट गली देखोगे?" } ],
        fx: { en: "SLURP!", hi: "सुड़प!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.25 }, { id: "moti", pose: "run", mood: "happy", x: 0.55 }, { id: "papa", pose: "wave", mood: "laugh", x: 0.85, flip: true } ], props: [ { id: "tree", x: 0.05 }, { id: "flower", x: 0.7 } ],
        cap: { en: "Moti showed them the shortest way to the best park!", hi: "मोती ने सबसे अच्छे पार्क का सबसे छोटा रास्ता दिखाया!" },
        say: [ { who: 0, en: "Moti, you really are the king of the lanes!", hi: "मोती, तुम तो सच में गलियों के राजा हो!" } ] }
    ]
  },

  // 24 — Pinku's big drama
  {
    id: 24, age: "4-6", category: "dogs",
    title: { en: "Pinku's Big, Big Drama", hi: "पिंकू का बड़ा-सा ड्रामा" },
    blurb: { en: "Pinku the pug has lost his squeaky bone, and the whole world must know!", hi: "पिंकू पग की चूँ-चूँ हड्डी खो गई है, और पूरी दुनिया को ये पता चलना चाहिए!" },
    moral: { en: "Stay calm and look carefully before you worry.", hi: "घबराओ मत, पहले ध्यान से देखो।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "pinku", pose: "blast", mood: "sad", x: 0.7, flip: true } ], props: [ { id: "flower", x: 0.9 } ], fx: { en: "BOO-HOO!", hi: "ऊँ-ऊँ!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "pinku", pose: "lie", mood: "sad", x: 0.72, flip: true } ], props: [ { id: "bush", x: 0.95 } ],
        cap: { en: "Pinku the pug was lying flat on the grass.", hi: "पिंकू पग घास पर एकदम सपाट लेटा था।" },
        say: [ { who: 1, en: "My squeaky bone is GONE! Gone forever!", hi: "मेरी चूँ-चूँ हड्डी खो गई! हमेशा के लिए!", kind: "shout" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "pinku", pose: "blast", mood: "sad", x: 0.7, flip: true } ],
        say: [ { who: 1, en: "This is the WORST day ever! Snort, snort!", hi: "ये तो सबसे बुरा दिन है! सूँ-सूँ, सूँ-सूँ!", kind: "shout" } ],
        fx: { en: "BOO-HOO!", hi: "ऊँ-ऊँ!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.2 }, { id: "pinku", pose: "sit", mood: "sad", x: 0.5 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Auggie, use your super sniffer nose!", hi: "ऑगी, अपनी सुपर सूँघने वाली नाक चलाओ!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35 } ], props: [ { id: "bush", x: 0.72 }, { id: "flower", x: 0.88 }, { id: "flower", x: 0.1 } ],
        cap: { en: "Sniff under the bush... sniff behind the flowers...", hi: "झाड़ी के नीचे सूँ-सूँ... फूलों के पीछे सूँ-सूँ..." },
        say: [ { who: 0, en: "The smell is coming from... Pinku!", hi: "खुशबू तो आ रही है... पिंकू से!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.3 }, { id: "pinku", pose: "stand", mood: "surprised", x: 0.68, flip: true } ], props: [ { id: "bone", x: 0.7 } ],
        cap: { en: "Pinku stood up. SQUEAK! The bone was under his tummy!", hi: "पिंकू उठा। चूँ! हड्डी तो उसी के पेट के नीचे थी!" },
        fx: { en: "SQUEAK!", hi: "चूँ!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.5 }, { id: "pinku", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "bone", x: 0.65 } ],
        cap: { en: "Everyone laughed, and Pinku laughed the loudest.", hi: "सब हँस पड़े, और पिंकू सबसे ज़ोर से हँसा।" },
        say: [ { who: 2, en: "Oops! I was sitting on it all along!", hi: "उफ़! मैं तो इसी पर बैठा था!" } ] }
    ]
  },

  // 25 — Snowy finds Chamakpur too hot
  {
    id: 25, age: "4-6", category: "dogs",
    title: { en: "Snowy Says, 'Too Hot!'", hi: "स्नोवी बोला, 'बहुत गर्मी!'" },
    blurb: { en: "Snowy the husky visits Chamakpur in summer, and Auggie shows him how to stay cool.", hi: "स्नोवी हस्की गर्मियों में चमकपुर आता है, और ऑगी उसे ठंडा रहना सिखाता है।" },
    moral: { en: "On hot days, give pets shade, fresh water and cool evening walks.", hi: "गर्मी में पालतू जानवरों को छाँव, ताज़ा पानी और शाम की ठंडी सैर दो।" },
    cover: { bg: "city", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "snowy", pose: "stand", mood: "sad", x: 0.7, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.15 } ], fx: { en: "PHEW!", hi: "उफ़्फ़!" } },
    panels: [
      { bg: "station", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "snowy", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Snowy the husky came down from the snowy mountains.", hi: "स्नोवी हस्की बर्फ़ीले पहाड़ों से नीचे आया।" },
        say: [ { who: 0, en: "Welcome to Chamakpur, Snowy!", hi: "चमकपुर में तुम्हारा स्वागत है, स्नोवी!" } ] },
      { bg: "city", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "snowy", pose: "lie", mood: "sad", x: 0.7, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.12 } ],
        say: [ { who: 1, en: "Awoo... it is SO hot! I'm melting!", hi: "आऊ... कितनी गर्मी है! मैं तो पिघल रहा हूँ!", kind: "shout" } ],
        fx: { en: "AWOOO!", hi: "आऊऊ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.2 }, { id: "snowy", pose: "sit", mood: "sad", x: 0.5 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Mumma, Snowy needs cool water, quick!", hi: "मम्मा, स्नोवी को ठंडा पानी चाहिए, जल्दी!", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "snowy", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.47 } ],
        cap: { en: "Fresh water with ice cubes. Snowy drank and drank!", hi: "बर्फ़ के टुकड़ों वाला ताज़ा पानी। स्नोवी पीता ही गया!" },
        say: [ { who: 1, en: "And no walks in the hot afternoon, okay?", hi: "और दोपहर की धूप में कोई सैर नहीं, ठीक है?" } ],
        fx: { en: "SLURP!", hi: "सुड़प!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "snowy", pose: "lie", mood: "happy", x: 0.68, flip: true } ], props: [ { id: "tree", x: 0.5 } ],
        cap: { en: "Auggie showed him the coolest shady spot under the neem tree.", hi: "ऑगी ने उसे नीम के पेड़ के नीचे सबसे ठंडी छाँव दिखाई।" },
        say: [ { who: 1, en: "Ahh... this feels like my mountains.", hi: "आह... ये तो मेरे पहाड़ों जैसा लग रहा है।", kind: "whisper" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "frisbee", x: 0.5, y: 0.3 }, { id: "tree", x: 0.92 } ],
        cap: { en: "In the cool evening, they ran and played together.", hi: "शाम की ठंडक में दोनों ने खूब दौड़-भाग की।" },
        say: [ { who: 1, en: "Chamakpur is fun when you stay cool!", hi: "ठंडे रहो तो चमकपुर बड़ा मज़ेदार है!" } ] }
    ]
  },

  // 26 — Racing tiny speedy Chiku
  {
    id: 26, age: "4-6", category: "friends",
    title: { en: "Zoom, Chiku, Zoom!", hi: "ज़ूम, चीकू, ज़ूम!" },
    blurb: { en: "Tiny Chiku zooms like the wind — can big, lazy Auggie keep up?", hi: "छोटा-सा चीकू हवा की तरह भागता है — क्या बड़ा, आलसी ऑगी उसके साथ दौड़ पाएगा?" },
    moral: { en: "Playing together is more fun than winning.", hi: "जीतने से ज़्यादा मज़ा साथ खेलने में है।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.3 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.7 } ], props: [ { id: "tree", x: 0.95 } ], fx: { en: "ZOOM!", hi: "ज़ूम!" } },
    panels: [
      { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "chiku", pose: "cheer", mood: "happy", x: 0.7, flip: true } ], props: [ { id: "tree", x: 0.05 } ],
        say: [ { who: 1, en: "Auggie! Race me to the big tree!", hi: "ऑगी! बड़े पेड़ तक मुझसे रेस लगाओ!", kind: "shout" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.2 }, { id: "chiku", pose: "stand", mood: "determined", x: 0.45 }, { id: "rohan", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Ready... steady... GO!", hi: "एक... दो... तीन... भागो!", kind: "shout" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.25 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.7 } ], props: [ { id: "tree", x: 0.95 } ],
        cap: { en: "Chiku's tiny legs went faster than the wind!", hi: "चीकू की छोटी-छोटी टाँगें हवा से भी तेज़ चलीं!" },
        say: [ { who: 0, en: "Wait for me, Chiku! Huff, puff!", hi: "रुको चीकू! हाँफ़-हाँफ़!" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.25 }, { id: "chiku", pose: "lie", mood: "sleepy", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.55 } ],
        say: [ { who: 1, en: "I won! But now I'm SO tired...", hi: "मैं जीत गया! पर अब बहुत थक गया..." } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.2 }, { id: "chiku", pose: "sit", mood: "happy", x: 0.48 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.34 }, { id: "bottle", x: 0.66 } ],
        cap: { en: "Auggie shared his water bowl with his tiny friend.", hi: "ऑगी ने अपने छोटे दोस्त के साथ पानी का कटोरा बाँटा।" },
        say: [ { who: 2, en: "Running is thirsty work. Water break, champs!", hi: "दौड़ने के बाद पानी ज़रूरी है, चैंपियनों!" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.6 } ], props: [ { id: "flower", x: 0.9 } ],
        say: [ { who: 1, en: "Let's run back together — side by side!", hi: "चलो, वापस साथ-साथ दौड़ें!" } ],
        fx: { en: "WHEEE!", hi: "वाह!" }, action: true }
    ]
  },

  // 27 — The ducks at the lake
  {
    id: 27, age: "4-6", category: "birds",
    title: { en: "Auggie Joins the Duck Line", hi: "ऑगी बतख़ों की लाइन में" },
    blurb: { en: "Mama Duck and her ducklings march to the lake, and Auggie wants to march too!", hi: "मम्मी बतख़ और उसके बच्चे झील की ओर चलते हैं, और ऑगी भी साथ चलना चाहता है!" },
    moral: { en: "Be calm and gentle around little ones.", hi: "छोटे बच्चों के पास शांत और नरम रहो।" },
    cover: { bg: "river", chars: [ { id: "duck", pose: "stand", mood: "happy", x: 0.25 }, { id: "duck", pose: "stand", mood: "happy", x: 0.47, s: 0.6 }, { id: "auggie", pose: "stand", mood: "laugh", x: 0.75 } ], fx: { en: "QUACK!", hi: "क्वैक!" } },
    panels: [
      { bg: "river", chars: [ { id: "mumma", pose: "stand", mood: "happy", x: 0.2 }, { id: "auggie", pose: "point", mood: "surprised", x: 0.5 }, { id: "duck", pose: "stand", mood: "happy", x: 0.82, flip: true } ],
        cap: { en: "A morning walk by the lake with Mumma.", hi: "मम्मा के साथ झील किनारे सुबह की सैर।" },
        say: [ { who: 1, en: "Look, Mumma! A mama duck and her babies!", hi: "देखो मम्मा! मम्मी बतख़ और उसके बच्चे!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.2 }, { id: "duck", pose: "stand", mood: "happy", x: 0.55, s: 0.6 }, { id: "duck", pose: "stand", mood: "happy", x: 0.8 } ],
        cap: { en: "Quack, quack, waddle! Auggie joined the end of the line.", hi: "क्वैक-क्वैक, डगमग! ऑगी भी लाइन के आख़िर में चल पड़ा।" },
        say: [ { who: 0, en: "Quack! Quack! I am a duck too!", hi: "क्वैक! क्वैक! मैं भी बतख़ हूँ!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.35 }, { id: "duck", pose: "stand", mood: "scared", x: 0.78, flip: true } ],
        cap: { en: "The ducks swam. So Auggie jumped in with a BIG splash!", hi: "बतख़ें तैरने लगीं। तो ऑगी भी छपाक से कूद गया!" },
        fx: { en: "SPLASH!", hi: "छपाक!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "duck", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Quack! Too loud! My babies are scared!", hi: "क्वैक! इतना शोर! मेरे बच्चे डर गए!", kind: "shout" } ],
        fx: { en: "QUACK!", hi: "क्वैक!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Gentle and slow, Auggie. Give them some space.", hi: "धीरे और आराम से, ऑगी। उन्हें थोड़ी जगह दो।" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "duck", pose: "stand", mood: "happy", x: 0.55, flip: true }, { id: "duck", pose: "stand", mood: "happy", x: 0.8, flip: true, s: 0.6 } ],
        cap: { en: "Auggie sat quietly. Soon the ducklings waddled over to say hi!", hi: "ऑगी चुपचाप बैठ गया। थोड़ी देर में बच्चे खुद हैलो कहने आ गए!" },
        say: [ { who: 1, en: "Quack! Thank you for being so gentle!", hi: "क्वैक! इतने प्यार से रहने के लिए धन्यवाद!" } ] }
    ]
  },

  // 28 — Mithu the parrot copies Auggie's woof
  {
    id: 28, age: "4-6", category: "birds",
    title: { en: "Mithu Says 'Woof!'", hi: "मिट्ठू बोला 'भौं!'" },
    blurb: { en: "A cheeky green parrot learns to bark, and Auggie can't find the 'other dog'!", hi: "एक नटखट हरा तोता भौंकना सीख जाता है, और ऑगी 'दूसरे कुत्ते' को ढूँढता रह जाता है!" },
    moral: { en: "Say kind words — someone may copy you!", hi: "अच्छे शब्द बोलो — कोई तुम्हारी नकल कर सकता है!" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "parrot", pose: "blast", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.8 } ], fx: { en: "WOOF!", hi: "भौं!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "blast", mood: "happy", x: 0.35 } ], props: [ { id: "tree", x: 0.8 }, { id: "sun", x: 0.15, y: 0.15 } ],
        cap: { en: "Good morning! Auggie barked hello to the sun.", hi: "सुप्रभात! ऑगी ने भौंककर सूरज को हैलो कहा।" },
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "parrot", pose: "blast", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.78 } ],
        cap: { en: "From the guava tree came a funny sound...", hi: "अमरूद के पेड़ से एक मज़ेदार आवाज़ आई..." },
        say: [ { who: 1, en: "WOOF! WOOF!", hi: "भौं! भौं!", kind: "shout" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ], props: [ { id: "bush", x: 0.78 }, { id: "tree", x: 0.1 } ],
        say: [ { who: 0, en: "Another dog? Where is he hiding?", hi: "दूसरा कुत्ता? कहाँ छिपा है?", kind: "think" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "parrot", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 } ],
        say: [ { who: 1, en: "It's me, Mithu! Woof! Woof! Hee hee!", hi: "मैं हूँ, मिट्ठू! भौं! भौं! ही-ही!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "Then Mithu called, 'Auggie, food time!' in Mumma's voice.", hi: "फिर मिट्ठू ने मम्मा की आवाज़ में पुकारा, 'ऑगी, खाना!'" },
        say: [ { who: 1, en: "Food? No, Auggie, that was Mithu!", hi: "खाना? नहीं ऑगी, वो तो मिट्ठू था!" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "wave", mood: "laugh", x: 0.3 }, { id: "parrot", pose: "cheer", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 }, { id: "flower", x: 0.1 } ],
        cap: { en: "So Auggie taught Mithu the best words of all.", hi: "तो ऑगी ने मिट्ठू को सबसे अच्छे शब्द सिखाए।" },
        say: [ { who: 1, en: "Thank you! Thank you! Woof!", hi: "धन्यवाद! धन्यवाद! भौं!" } ] }
    ]
  },

  // 29 — Mishti the cat
  {
    id: 29, age: "4-6", category: "friends",
    title: { en: "Can a Dog and Cat Be Friends?", hi: "क्या कुत्ता और बिल्ली दोस्त बन सकते हैं?" },
    blurb: { en: "Anaya's new kitten Mishti hisses at Auggie, so he learns the secret of going slow.", hi: "अनाया की नई बिल्ली मिष्टी ऑगी पर फुफकारती है, तो ऑगी सीखता है धीरे-धीरे दोस्ती करने का राज़।" },
    moral: { en: "Go slow and be gentle to make a new friend.", hi: "नया दोस्त बनाना हो तो धीरे और प्यार से चलो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "cat", pose: "sit", mood: "happy", x: 0.62, flip: true } ], props: [ { id: "ball", x: 0.85 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.2 }, { id: "cat", pose: "sit", mood: "happy", x: 0.5, flip: true }, { id: "anaya", pose: "wave", mood: "happy", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Auggie, meet Mishti, my new kitten!", hi: "ऑगी, इससे मिलो — मिष्टी, मेरी नई बिल्ली!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "cat", pose: "stand", mood: "surprised", x: 0.75, flip: true } ], props: [ { id: "ball", x: 0.5 } ],
        say: [ { who: 0, en: "A new friend! Let's play, play, PLAY!", hi: "नया दोस्त! चलो खेलें, खेलें, खेलें!", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.3 }, { id: "cat", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Too big! Too fast! Stay back!", hi: "इतने बड़े! इतने तेज़! दूर रहो!", kind: "shout" } ],
        fx: { en: "HISS!", hi: "फ़्स्स!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "anaya", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Cats like it slow and quiet, Auggie.", hi: "बिल्लियों को धीरे-धीरे और शांति पसंद है, ऑगी।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "cat", pose: "stand", mood: "surprised", x: 0.68, flip: true } ],
        cap: { en: "So Auggie lay down, very still, and waited...", hi: "तो ऑगी चुपचाप लेट गया, बिल्कुल शांत, और इंतज़ार करने लगा..." },
        say: [ { who: 1, en: "Hmm... this big dog is quiet now.", hi: "हम्म... ये बड़ा कुत्ता अब शांत है।", kind: "think" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "cat", pose: "lie", mood: "sleepy", x: 0.55, flip: true }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.82, flip: true } ],
        cap: { en: "Mishti curled up right next to Auggie.", hi: "मिष्टी ऑगी के पास ही गोल होकर लेट गई।" },
        say: [ { who: 2, en: "Look! A dog and a cat — best friends!", hi: "देखो! कुत्ता और बिल्ली — पक्के दोस्त!" } ],
        fx: { en: "PURR!", hi: "घुर-घुर!" }, action: true }
    ]
  },

  // 30 — Gauri the village cow
  {
    id: 30, age: "4-6", category: "animals",
    title: { en: "Gauri's Lost Bell", hi: "गौरी की खोई घंटी" },
    blurb: { en: "On a village trip with Dadi, Auggie meets Gauri the big, gentle cow, who has lost her bell.", hi: "दादी के साथ गाँव घूमने गया ऑगी मिलता है गौरी गाय से, जिसकी घंटी खो गई है।" },
    moral: { en: "Big or small, every animal is a friend. Help each other.", hi: "बड़ा हो या छोटा, हर जानवर दोस्त है। एक-दूसरे की मदद करो।" },
    cover: { bg: "farm", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "cow", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.95 } ], fx: { en: "TAN-TAN!", hi: "टन-टन!" } },
    panels: [
      { bg: "village", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "house", x: 0.95 } ],
        cap: { en: "Auggie and Dadi went to a green, green village.", hi: "ऑगी और दादी एक हरे-भरे गाँव घूमने गए।" },
        say: [ { who: 1, en: "Fresh air, Auggie! Smell the mustard fields!", hi: "ताज़ी हवा, ऑगी! सरसों के खेतों की खुशबू लो!" } ] },
      { bg: "farm", chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.3 }, { id: "cow", pose: "blast", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Suddenly, a very BIG voice...", hi: "अचानक, एक बहुत बड़ी आवाज़..." },
        fx: { en: "MOO!", hi: "म्बाँ!" }, action: true },
      { bg: "farm", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "cow", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Don't be scared. I'm Gauri. I lost my bell.", hi: "डरो मत। मैं गौरी हूँ। मेरी घंटी खो गई है।" } ] },
      { bg: "farm", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ], props: [ { id: "bush", x: 0.8 }, { id: "rock", x: 0.12 } ],
        cap: { en: "Auggie turned on his super sniffer nose.", hi: "ऑगी ने अपनी सुपर सूँघने वाली नाक चालू की।" },
        say: [ { who: 0, en: "Sniff... grass... mud... and shiny METAL!", hi: "सूँ... घास... मिट्टी... और चमकता लोहा!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "farm", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "cow", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Found it! It was in the haystack!", hi: "मिल गई! भूसे के ढेर में थी!", kind: "shout" } ],
        fx: { en: "TAN-TAN!", hi: "टन-टन!" }, action: true },
      { bg: "farm", chars: [ { id: "dadi", pose: "wave", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "cow", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Dadi gave Gauri fresh green grass. Auggie got a carrot!", hi: "दादी ने गौरी को ताज़ी हरी घास दी। ऑगी को मिली गाजर!" },
        say: [ { who: 2, en: "Thank you, my brave little friend!", hi: "धन्यवाद, मेरे बहादुर छोटे दोस्त!" } ] }
    ]
  },

  // 31 — The squirrel who stole the tennis ball
  {
    id: 31, age: "4-6", category: "animals",
    title: { en: "The Squirrel Who Took the Ball", hi: "गेंद ले भागी गिलहरी" },
    blurb: { en: "A cheeky squirrel runs off with Auggie's tennis ball — does she think it's a nut?", hi: "एक नटखट गिलहरी ऑगी की टेनिस गेंद ले भागती है — कहीं उसे ये अखरोट तो नहीं लगा?" },
    moral: { en: "Don't chase or shout. Ask nicely, and you may make a friend.", hi: "पीछा मत करो, चिल्लाओ मत। प्यार से पूछो, तो दोस्त भी बन जाएगा।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "squirrel", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 }, { id: "ball", x: 0.6 } ] },
    panels: [
      { bg: "park", chars: [ { id: "papa", pose: "blast", mood: "happy", x: 0.25 }, { id: "auggie", pose: "run", mood: "happy", x: 0.62 } ], props: [ { id: "ball", x: 0.88, y: 0.45 } ],
        cap: { en: "Papa threw the tennis ball. Auggie ran to fetch it!", hi: "पापा ने टेनिस गेंद फेंकी। ऑगी उसे लाने दौड़ा!" },
        say: [ { who: 0, en: "Fetch, Auggie! Go, go, go!", hi: "ले आओ, ऑगी! जाओ, जाओ, जाओ!", kind: "shout" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "squirrel", pose: "run", mood: "laugh", x: 0.7 } ], props: [ { id: "ball", x: 0.76 } ],
        cap: { en: "But a squirrel grabbed it first!", hi: "पर एक गिलहरी ने पहले ही उसे झपट लिया!" },
        fx: { en: "WHOOSH!", hi: "सर्र!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "squirrel", pose: "sit", mood: "scared", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.78 }, { id: "ball", x: 0.68 } ],
        say: [ { who: 0, en: "Hey! Give it back! Woof, woof!", hi: "अरे! वापस दो! भौं, भौं!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Shouting scares her. Try asking nicely, Auggie.", hi: "चिल्लाने से वो डर जाती है। प्यार से पूछो, ऑगी।" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "squirrel", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 }, { id: "ball", x: 0.62 } ],
        say: [ { who: 0, en: "Please, little squirrel, may I have my ball?", hi: "प्लीज़, छोटी गिलहरी, मेरी गेंद वापस दोगी?", kind: "whisper" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "squirrel", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.5 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Chinki the squirrel rolled the ball back. New friends!", hi: "चिंकी गिलहरी ने गेंद लुढ़का दी। नए दोस्त बन गए!" },
        say: [ { who: 1, en: "Sorry! I thought it was a big fuzzy nut!", hi: "सॉरी! मुझे लगा ये कोई बड़ा रोएँदार अखरोट है!" } ] }
    ]
  },

  // 32 — Pigeons on the balcony
  {
    id: 32, age: "4-6", category: "birds",
    title: { en: "A Water Bowl for the Pigeons", hi: "कबूतरों के लिए पानी का कटोरा" },
    blurb: { en: "On a hot summer day, thirsty pigeons land on the balcony, and Auggie has an idea.", hi: "गर्मी के एक दिन प्यासे कबूतर बालकनी पर आ बैठते हैं, और ऑगी को एक आइडिया आता है।" },
    moral: { en: "In summer, keep a bowl of water out for birds.", hi: "गर्मियों में पंछियों के लिए पानी का कटोरा ज़रूर रखो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.55, flip: true }, { id: "pigeon", pose: "stand", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.68 } ], fx: { en: "FLAP!", hi: "फुर्र!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "pigeon", pose: "stand", mood: "sad", x: 0.72, flip: true } ], props: [ { id: "sun", x: 0.88, y: 0.12 } ],
        cap: { en: "A hot, hot afternoon on the balcony.", hi: "बालकनी पर गरम-गरम दोपहर।" },
        say: [ { who: 1, en: "Gutur-goo... I'm so thirsty...", hi: "गुटर-गूँ... बहुत प्यास लगी है...", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.25 }, { id: "pigeon", pose: "stand", mood: "sad", x: 0.55, flip: true }, { id: "pigeon", pose: "sit", mood: "sad", x: 0.8, flip: true } ],
        say: [ { who: 1, en: "We flew all day. No water anywhere!", hi: "दिन भर उड़े। कहीं पानी नहीं मिला!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.4 } ], props: [ { id: "bowl", x: 0.62 }, { id: "puddle", x: 0.78 } ],
        cap: { en: "Auggie pushed his own bowl outside. Oops! Water everywhere!", hi: "ऑगी अपना कटोरा धकेलकर बाहर ले गया। उफ़! सारा पानी बिखर गया!" },
        fx: { en: "SPLOSH!", hi: "छपाक!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "puddle", x: 0.5 } ],
        say: [ { who: 1, en: "Good idea, Auggie! Let's do it together.", hi: "अच्छा आइडिया है, ऑगी! चलो साथ मिलकर करते हैं।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.5 }, { id: "flower", x: 0.95 } ],
        cap: { en: "Mumma filled a wide, shallow clay bowl and kept it in the shade.", hi: "मम्मा ने एक चौड़ा, कम गहरा मिट्टी का कटोरा भरकर छाँव में रखा।" } },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.25 }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.55, flip: true }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.68 } ],
        say: [ { who: 1, en: "Gutur-goo! Thank you, Auggie!", hi: "गुटर-गूँ! धन्यवाद, ऑगी!" } ],
        fx: { en: "FLAP!", hi: "फुर्र!" }, action: true }
    ]
  },

  // 33 — The peacock dance in the rain
  {
    id: 33, age: "4-6", category: "birds",
    title: { en: "The Peacock's Rain Dance", hi: "मोर का बारिश वाला नाच" },
    blurb: { en: "On a rainy day out with Nanu, Auggie learns how to watch a peacock dance — quietly!", hi: "नानू के साथ बारिश वाली सैर पर ऑगी सीखता है कि मोर का नाच कैसे देखते हैं — चुपचाप!" },
    moral: { en: "Watch wild birds quietly, from far away. Nature will show its magic.", hi: "जंगली पंछियों को दूर से, चुपचाप देखो। कुदरत अपना जादू दिखाएगी।" },
    cover: { bg: "rain", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.28 }, { id: "peacock", pose: "cheer", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "cloud", x: 0.5, y: 0.1 } ], fx: { en: "WOW!", hi: "वाह!" } },
    panels: [
      { bg: "farm", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "cloud", x: 0.5, y: 0.1 }, { id: "umbrella", x: 0.85 } ],
        cap: { en: "Dark clouds rolled over the fields. The first rain!", hi: "खेतों पर काले बादल छा गए। पहली बारिश!" },
        say: [ { who: 1, en: "Peacocks love the first rain, Auggie. Watch!", hi: "मोर को पहली बारिश बहुत पसंद है, ऑगी। देखना!" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "blast", mood: "happy", x: 0.3 }, { id: "peacock", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "A peacock! Woof! Hello, hello!", hi: "मोर! भौं! हैलो, हैलो!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "peacock", pose: "run", mood: "scared", x: 0.75 } ], props: [ { id: "bush", x: 0.92 } ],
        cap: { en: "Neelu the peacock got scared and ran behind a bush.", hi: "नीलू मोर डर गया और झाड़ी के पीछे भाग गया।" } },
      { bg: "rain", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "umbrella", x: 0.72 } ],
        say: [ { who: 1, en: "Shh. Sit quietly and wait. Birds need space.", hi: "श्श। चुपचाप बैठो और रुको। पंछियों को जगह चाहिए।", kind: "whisper" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.28 }, { id: "peacock", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Then Neelu opened his feathers like a giant fan!", hi: "फिर नीलू ने अपने पंख किसी बड़े पंखे की तरह फैला दिए!" },
        fx: { en: "WOW!", hi: "वाह!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "nanu", pose: "cheer", mood: "laugh", x: 0.5, flip: true }, { id: "peacock", pose: "cheer", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "puddle", x: 0.25 } ],
        cap: { en: "Auggie tried to dance too... in the mud! Splat!", hi: "ऑगी ने भी नाचने की कोशिश की... कीचड़ में! छप!" },
        say: [ { who: 1, en: "Ha ha! Two dancers in the rain!", hi: "हा-हा! बारिश में दो-दो डांसर!" } ] }
    ]
  },

  // 34 — The frog in the puddle
  {
    id: 34, age: "4-6", category: "animals",
    title: { en: "Whose Puddle Is It?", hi: "ये पोखर किसका है?" },
    blurb: { en: "Auggie wants to splash in a big rain puddle, but Tipu the frog says it's his pool!", hi: "ऑगी बारिश के पोखर में छपाक करना चाहता है, पर टिप्पू मेंढक कहता है ये उसका स्विमिंग पूल है!" },
    moral: { en: "Sharing makes play more fun. Be gentle with small creatures.", hi: "बाँटकर खेलने में ज़्यादा मज़ा है। छोटे जीवों के साथ प्यार से रहो।" },
    cover: { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "frog", pose: "cheer", mood: "laugh", x: 0.68, flip: true } ], props: [ { id: "puddle", x: 0.5 } ], fx: { en: "SPLASH!", hi: "छपाक!" } },
    panels: [
      { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "papa", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "puddle", x: 0.5 }, { id: "umbrella", x: 0.78 } ],
        cap: { en: "Monsoon in Chamakpur! Puddles everywhere!", hi: "चमकपुर में मानसून! हर तरफ़ पोखर ही पोखर!" },
        say: [ { who: 0, en: "Papa, look! The biggest puddle ever!", hi: "पापा, देखो! सबसे बड़ा पोखर!" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "frog", pose: "blast", mood: "angry", x: 0.72, flip: true } ], props: [ { id: "puddle", x: 0.68 } ],
        say: [ { who: 1, en: "Stop! This is MY swimming pool!", hi: "रुको! ये मेरा स्विमिंग पूल है!", kind: "shout" } ],
        fx: { en: "CROAK!", hi: "टर्र!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "frog", pose: "stand", mood: "happy", x: 0.7, flip: true } ], props: [ { id: "puddle", x: 0.7 } ],
        say: [ { who: 1, en: "I'm Tipu. And I'm the best jumper!", hi: "मैं टिप्पू हूँ। और मैं सबसे बढ़िया कूदता हूँ!" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "frog", pose: "cheer", mood: "laugh", x: 0.68 } ], props: [ { id: "puddle", x: 0.68 } ],
        cap: { en: "Tipu jumped high, high, HIGH! Plop!", hi: "टिप्पू ऊँचा, ऊँचा, बहुत ऊँचा कूदा! छप!" },
        fx: { en: "BOING!", hi: "फुदक!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "frog", pose: "stand", mood: "happy", x: 0.7, flip: true } ], props: [ { id: "puddle", x: 0.5 } ],
        say: [ { who: 0, en: "Can we share the puddle? I'll be gentle!", hi: "क्या हम पोखर बाँट लें? मैं आराम से खेलूँगा!" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "frog", pose: "cheer", mood: "laugh", x: 0.45 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "puddle", x: 0.35 } ],
        cap: { en: "They jumped together — and splashed Papa too!", hi: "दोनों साथ कूदे — और पापा भी भीग गए!" },
        say: [ { who: 2, en: "Ha ha! Now I'm a frog too!", hi: "हा-हा! अब मैं भी मेंढक बन गया!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" }, action: true }
    ]
  },

  // 35 — A rabbit's burrow
  {
    id: 35, age: "4-6", category: "animals",
    title: { en: "Knock Knock, Who's in the Hole?", hi: "खट-खट, बिल में कौन है?" },
    blurb: { en: "Auggie finds a hole in the garden and starts to dig — until someone pops out!", hi: "ऑगी को बगीचे में एक गड्ढा मिलता है और वो खोदने लगता है — तभी अंदर से कोई बाहर झाँकता है!" },
    moral: { en: "Every animal's home is special. Never disturb it.", hi: "हर जानवर का घर खास होता है। उसे कभी मत छेड़ो।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "rabbit", pose: "stand", mood: "surprised", x: 0.7, flip: true } ], props: [ { id: "bush", x: 0.9 }, { id: "flower", x: 0.1 } ] },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.75, flip: true } ], props: [ { id: "flower", x: 0.9 }, { id: "bush", x: 0.55 } ],
        cap: { en: "Mausi watered the flowers. Auggie found a round little hole.", hi: "मौसी फूलों को पानी दे रही थी। ऑगी को एक छोटा-सा गोल गड्ढा मिला।" },
        say: [ { who: 0, en: "A hole! Maybe there's a bone inside!", hi: "गड्ढा! शायद अंदर हड्डी छिपी है!", kind: "think" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.4 } ], props: [ { id: "bush", x: 0.75 }, { id: "rock", x: 0.15 } ],
        cap: { en: "Dig, dig, dig! Mud flew everywhere!", hi: "खोदो, खोदो, खोदो! मिट्टी हर तरफ़ उड़ी!" },
        fx: { en: "DIG-DIG!", hi: "खुद-खुद!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "rabbit", pose: "stand", mood: "angry", x: 0.7, flip: true } ],
        say: [ { who: 1, en: "Hey! I'm Gullu, and that's my house!", hi: "अरे! मैं गुल्लू हूँ, और वो मेरा घर है!", kind: "shout" } ],
        fx: { en: "POP!", hi: "टप!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "rabbit", pose: "stand", mood: "sad", x: 0.7, flip: true } ],
        say: [ { who: 1, en: "My babies are sleeping inside. Shh!", hi: "अंदर मेरे बच्चे सो रहे हैं। श्श!", kind: "whisper" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.3 }, { id: "rabbit", pose: "sit", mood: "surprised", x: 0.7, flip: true } ],
        cap: { en: "Auggie gently pushed the mud back with his nose.", hi: "ऑगी ने अपनी नाक से धीरे-धीरे मिट्टी वापस भर दी।" },
        say: [ { who: 0, en: "Sorry, Gullu! I didn't know it was your home.", hi: "सॉरी गुल्लू! मुझे नहीं पता था ये तुम्हारा घर है।" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.25 }, { id: "rabbit", pose: "cheer", mood: "happy", x: 0.55, flip: true }, { id: "rabbit", pose: "cheer", mood: "laugh", x: 0.8, flip: true, s: 0.6 } ], props: [ { id: "flower", x: 0.95 } ],
        cap: { en: "Now Auggie guards the burrow. The babies call him Uncle Auggie!", hi: "अब ऑगी बिल की रखवाली करता है। बच्चे उसे ऑगी चाचा कहते हैं!" },
        say: [ { who: 2, en: "Thank you, Uncle Auggie!", hi: "धन्यवाद, ऑगी चाचा!" } ] }
    ]
  },

  // 36 — Bholu the baby elephant at the sanctuary
  {
    id: 36, age: "4-6", category: "animals",
    title: { en: "Bholu's Big Splash", hi: "भोलू का बड़ा छपाका" },
    blurb: { en: "At the elephant sanctuary, baby Bholu has a very wet surprise for Auggie!", hi: "हाथी अभयारण्य में नन्हा भोलू ऑगी के लिए एक गीला-गीला सरप्राइज़ लाता है!" },
    moral: { en: "Wild animals need space and care. Visit them with a guide.", hi: "जंगली जानवरों को जगह और देखभाल चाहिए। उन्हें गाइड के साथ ही देखो।" },
    cover: { bg: "river", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "bholu", pose: "blast", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.05 } ], fx: { en: "SPLOOSH!", hi: "छपाक!" } },
    panels: [
      { bg: "jungle", chars: [ { id: "papa", pose: "stand", mood: "happy", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "The family visited the Chamakpur elephant sanctuary.", hi: "पूरा परिवार चमकपुर के हाथी अभयारण्य घूमने गया।" },
        say: [ { who: 2, en: "Stay with the ranger, Mittsy. Leash on, Auggie!", hi: "रेंजर के साथ ही रहना, मिट्सी। ऑगी, पट्टा पहन लो!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "bholu", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Hello! I'm Bholu. I'm only one year old!", hi: "नमस्ते! मैं भोलू हूँ। मैं बस एक साल का हूँ!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "bholu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "One year old? But you are SO big!", hi: "एक साल के? पर तुम तो कितने बड़े हो!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "bholu", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Bholu filled his trunk with water and...", hi: "भोलू ने अपनी सूँड में पानी भरा और..." },
        fx: { en: "SPLOOSH!", hi: "छपाक!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Ha ha! A free bath for Auggie!", hi: "हा-हा! ऑगी का मुफ़्त स्नान हो गया!" } ] },
      { bg: "river", chars: [ { id: "mumma", pose: "wave", mood: "happy", x: 0.2 }, { id: "auggie", pose: "wave", mood: "happy", x: 0.45 }, { id: "bholu", pose: "wave", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "tree", x: 0.95 } ],
        cap: { en: "The ranger said, 'Elephants need space, trees and water.'", hi: "रेंजर ने बताया, 'हाथियों को जगह, पेड़ और पानी चाहिए।'" },
        say: [ { who: 2, en: "Bye, Auggie! Come back soon!", hi: "बाय ऑगी! जल्दी फिर आना!" } ] }
    ]
  },

  // 37 — The goat who eats everything
  {
    id: 37, age: "4-6", category: "animals",
    title: { en: "Bindu the Goat Eats Everything!", hi: "बिंदु बकरी सब कुछ खा जाती है!" },
    blurb: { en: "Bindu the goat munches newspapers and scarves, but Auggie stops her from eating plastic.", hi: "बिंदु बकरी अखबार और दुपट्टा चबा जाती है, पर ऑगी उसे प्लास्टिक खाने से रोक लेता है।" },
    moral: { en: "Plastic is bad for animals. Always put it in the dustbin.", hi: "प्लास्टिक जानवरों के लिए खतरनाक है। उसे हमेशा कूड़ेदान में डालो।" },
    cover: { bg: "village", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.28 }, { id: "goat", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "dustbin", x: 0.5 } ], fx: { en: "CHOMP!", hi: "चप-चप!" } },
    panels: [
      { bg: "village", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "book", x: 0.6 }, { id: "tree", x: 0.92 } ],
        cap: { en: "Nanu read his newspaper. Auggie had a lazy nap.", hi: "नानू अखबार पढ़ रहे थे। ऑगी आराम से झपकी ले रहा था।" } },
      { bg: "village", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.2 }, { id: "goat", pose: "stand", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "sit", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "book", x: 0.63 } ],
        cap: { en: "Chomp! Bindu the goat ate the newspaper!", hi: "चप! बिंदु बकरी अखबार खा गई!" },
        say: [ { who: 2, en: "Arre! I was reading that, Bindu!", hi: "अरे! मैं वो पढ़ रहा था, बिंदु!", kind: "shout" } ],
        fx: { en: "CHOMP!", hi: "चप-चप!" }, action: true },
      { bg: "village", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.2 }, { id: "goat", pose: "run", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        cap: { en: "Then she nibbled the end of Mausi's scarf!", hi: "फिर उसने मौसी के दुपट्टे का कोना कुतर डाला!" },
        say: [ { who: 2, en: "Bindu! That's my favourite scarf!", hi: "बिंदु! वो मेरा सबसे प्यारा दुपट्टा है!", kind: "shout" } ] },
      { bg: "village", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.25 }, { id: "goat", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "bottle", x: 0.52 } ],
        cap: { en: "Then Bindu sniffed some plastic lying on the road...", hi: "फिर बिंदु ने सड़क पर पड़ा प्लास्टिक सूँघा..." },
        say: [ { who: 0, en: "STOP, Bindu! Plastic will hurt your tummy!", hi: "रुको, बिंदु! प्लास्टिक से पेट खराब होगा!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "village", chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.25 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.55 }, { id: "goat", pose: "stand", mood: "happy", x: 0.82, flip: true } ], props: [ { id: "dustbin", x: 0.08 } ],
        cap: { en: "Nanu put the plastic in the dustbin.", hi: "नानू ने प्लास्टिक कूड़ेदान में डाल दिया।" },
        say: [ { who: 0, en: "Well done, Auggie! Plastic is poison for animals.", hi: "शाबाश, ऑगी! प्लास्टिक जानवरों के लिए ज़हर है।" } ] },
      { bg: "village", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "goat", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "bush", x: 0.9 }, { id: "tree", x: 0.08 } ],
        cap: { en: "Bindu munched fresh green leaves instead. Yum!", hi: "बिंदु ने उसकी जगह ताज़ी हरी पत्तियाँ खाईं। मज़ा आ गया!" },
        say: [ { who: 1, en: "Baa! Leaves taste better than newspaper!", hi: "में-में! पत्तियाँ तो अखबार से भी स्वादिष्ट हैं!" } ] }
    ]
  },

  // 38 — A quiet, bright Diwali
  {
    id: 38, age: "4-6", category: "festivals",
    title: { en: "Auggie's Quiet, Bright Diwali", hi: "ऑगी की शांत, जगमग दिवाली" },
    blurb: { en: "Loud crackers scare Auggie and Moti, so the family plans a Diwali full of lights, not bangs.", hi: "पटाखों के शोर से ऑगी और मोती डर जाते हैं, तो परिवार मनाता है रोशनी से भरी, बिना शोर वाली दिवाली।" },
    moral: { en: "Crackers scare animals. Light diyas and spread love instead.", hi: "पटाखों से जानवर डरते हैं। दीये जलाओ और प्यार बाँटो।" },
    cover: { bg: "festival", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "diya", x: 0.45 }, { id: "diya", x: 0.55 }, { id: "diya", x: 0.15 }, { id: "diya", x: 0.88 } ], fx: { en: "SHINE!", hi: "जगमग!" } },
    panels: [
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.35 } ], props: [ { id: "clock", x: 0.8 } ],
        cap: { en: "Diwali night. Far away, a cracker went BOOM!", hi: "दिवाली की रात। दूर कहीं एक पटाखा फूटा — धड़ाम!" },
        say: [ { who: 0, en: "What was THAT? I'm hiding under the bed!", hi: "ये क्या था? मैं तो पलंग के नीचे छिप रहा हूँ!", kind: "think" } ],
        fx: { en: "BOOM!", hi: "धड़ाम!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.7, flip: true } ],
        say: [ { who: 1, en: "It's okay, Auggie. Mumma is right here.", hi: "कोई बात नहीं, ऑगी। मम्मा यहीं है।", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.2 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.5 }, { id: "papa", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Mottu, this year — only diyas, lights and rangoli!", hi: "मोटू, इस साल — सिर्फ़ दीये, लाइटें और रंगोली!" },
               { who: 1, en: "Yes, Mittsy! A quiet Diwali for Auggie!", hi: "हाँ, मिट्सी! ऑगी के लिए शांत दिवाली!" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "diya", x: 0.45 }, { id: "diya", x: 0.55 }, { id: "diya", x: 0.1 }, { id: "diya", x: 0.9 } ],
        cap: { en: "They lit a hundred little diyas. The house sparkled!", hi: "सबने सौ छोटे-छोटे दीये जलाए। घर जगमगा उठा!" },
        fx: { en: "SHINE!", hi: "जगमग!" }, action: true },
      { bg: "citynight", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "moti", pose: "sit", mood: "scared", x: 0.72, flip: true } ], props: [ { id: "diya", x: 0.1 } ],
        say: [ { who: 0, en: "Moti is scared too! Come sit with us, friend.", hi: "मोती भी डरा हुआ है! आओ दोस्त, हमारे पास बैठो।" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.2 }, { id: "moti", pose: "lie", mood: "happy", x: 0.48 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "diya", x: 0.34 }, { id: "diya", x: 0.64 } ],
        cap: { en: "A quiet, bright Diwali — the happiest one ever!", hi: "एक शांत, जगमग दिवाली — अब तक की सबसे खुशहाल!" },
        say: [ { who: 2, en: "Happy Diwali, Auggie! Happy Diwali, Moti!", hi: "शुभ दिवाली, ऑगी! शुभ दिवाली, मोती!" } ] }
    ]
  },

  // 39 — Holi with safe colours
  {
    id: 39, age: "4-6", category: "festivals",
    title: { en: "Auggie Turns Pink!", hi: "ऑगी हो गया गुलाबी!" },
    blurb: { en: "On Holi, everyone asks before adding colour, and Auggie finds a very pink way to play.", hi: "होली पर सब रंग लगाने से पहले पूछते हैं, और ऑगी को खेलने का एक बहुत गुलाबी तरीका मिल जाता है।" },
    moral: { en: "Always ask before you play colours. Keep colours away from pets.", hi: "रंग लगाने से पहले हमेशा पूछो। पालतू जानवरों से रंग दूर रखो।" },
    cover: { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.5 }, { id: "flower", x: 0.12 } ], fx: { en: "WHOOSH!", hi: "फुर्र!" } },
    panels: [
      { bg: "festival", chars: [ { id: "rohan", pose: "cheer", mood: "happy", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "drum", x: 0.95 } ],
        cap: { en: "Holi morning! Plates of soft, dry, safe colours.", hi: "होली की सुबह! मुलायम, सूखे, सुरक्षित रंगों की थालियाँ।" },
        say: [ { who: 2, en: "Remember, everyone — always ask first!", hi: "याद रखना सब — पहले पूछना ज़रूरी है!" } ] },
      { bg: "festival", chars: [ { id: "rohan", pose: "stand", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Mausi, may I put pink on your cheek?", hi: "मौसी, क्या मैं आपके गाल पर गुलाबी रंग लगा दूँ?" },
               { who: 2, en: "Yes! Happy Holi, Rohan!", hi: "हाँ! हैप्पी होली, रोहन!" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Me too! Me too! I want colour!", hi: "मैं भी! मैं भी! मुझे भी रंग चाहिए!", kind: "shout" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Colours can hurt doggy eyes and noses, Auggie.", hi: "रंग से कुत्तों की आँखों और नाक को तकलीफ़ हो सकती है, ऑगी।" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "mumma", pose: "blast", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.5 }, { id: "flower", x: 0.58 }, { id: "flower", x: 0.12 } ],
        cap: { en: "Then Mumma had an idea — a big pile of rose petals!", hi: "फिर मम्मा को आइडिया आया — गुलाब की पंखुड़ियों का बड़ा ढेर!" },
        fx: { en: "WHOOSH!", hi: "फुर्र!" }, action: true },
      { bg: "festival", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.15 }, { id: "flower", x: 0.48 } ],
        cap: { en: "Auggie rolled and rolled. Now he was a PINK Labrador!", hi: "ऑगी लोटता रहा, लोटता रहा। अब वो गुलाबी लैब्राडोर बन गया!" },
        say: [ { who: 1, en: "Happy Holi, our pink Auggie!", hi: "हैप्पी होली, हमारे गुलाबी ऑगी!" } ],
        fx: { en: "FLOOF!", hi: "फुर्र!" }, action: true }
    ]
  },

  // 40 — Raksha Bandhan
  {
    id: 40, age: "4-6", category: "festivals",
    title: { en: "A Rakhi for Auggie's Paw", hi: "ऑगी के पंजे पर राखी" },
    blurb: { en: "Mausi ties a soft rakhi on Auggie's paw, and he takes his promise very seriously!", hi: "मौसी ऑगी के पंजे पर मुलायम राखी बाँधती है, और ऑगी अपना वादा बहुत गंभीरता से निभाता है!" },
    moral: { en: "Family looks after each other, every single day.", hi: "परिवार हर दिन एक-दूसरे का ख्याल रखता है।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "mausi", pose: "sit", mood: "laugh", x: 0.68, flip: true } ], props: [ { id: "gift", x: 0.88 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "gift", x: 0.9 } ],
        cap: { en: "Raksha Bandhan! Mausi brought a shiny rakhi.", hi: "रक्षाबंधन! मौसी एक चमकीली राखी लाई।" },
        say: [ { who: 1, en: "Auggie, this one is for YOU!", hi: "ऑगी, ये वाली तुम्हारे लिए है!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.35 }, { id: "mausi", pose: "sit", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "Auggie gave his paw. Mausi tied it soft and loose.", hi: "ऑगी ने पंजा दिया। मौसी ने राखी मुलायम और ढीली बाँधी।" },
        say: [ { who: 1, en: "Not too tight — just right for a paw!", hi: "ज़्यादा टाइट नहीं — पंजे के लिए बिल्कुल सही!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "I promise to look after you, Mausi! Always!", hi: "मौसी, मैं वादा करता हूँ — हमेशा आपका ख्याल रखूँगा!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "bottle", x: 0.88 } ],
        cap: { en: "Auggie followed Mausi everywhere, like a big, furry bodyguard!", hi: "ऑगी हर जगह मौसी के पीछे-पीछे चला, जैसे एक बड़ा, रोएँदार बॉडीगार्ड!" },
        say: [ { who: 1, en: "Auggie, I'm just getting some water!", hi: "ऑगी, मैं तो बस पानी लेने आई हूँ!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "gift", x: 0.55 } ],
        cap: { en: "Ding-dong! Guard Auggie ran to the door.", hi: "टिंग-टोंग! पहरेदार ऑगी दरवाज़े की ओर दौड़ा।" },
        say: [ { who: 1, en: "It's only me, Auggie! With sweets!", hi: "मैं हूँ, ऑगी! मिठाई लेकर आया हूँ!" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.2 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.5, flip: true }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "gift", x: 0.65 } ],
        cap: { en: "Sweets for the family, a crunchy carrot for Auggie!", hi: "परिवार के लिए मिठाई, ऑगी के लिए कुरकुरी गाजर!" },
        say: [ { who: 1, en: "Best rakhi brother in the whole world!", hi: "दुनिया का सबसे अच्छा राखी भाई!" } ] }
    ]
  },

  // 41 — Janmashtami at Dadi Krishna's house
  {
    id: 41, age: "4-6", category: "festivals",
    title: { en: "Auggie and the Makhan Matki", hi: "ऑगी और माखन की मटकी" },
    blurb: { en: "At Dadi Krishna's house, Janmashtami means songs, a high-up matki and one very hungry Labrador.", hi: "दादी कृष्णा के घर जन्माष्टमी का मतलब है भजन, ऊपर टँगी मटकी और एक बहुत भूखा लैब्राडोर।" },
    moral: { en: "Share the festival fun — and give pets only pet-safe treats.", hi: "त्योहार की खुशियाँ बाँटो — और पालतू को सिर्फ़ सुरक्षित चीज़ें खिलाओ।" },
    cover: { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.3 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "drum", x: 0.9 }, { id: "diya", x: 0.1 } ], fx: { en: "JAI KANHA!", hi: "जय कान्हा!" } },
    panels: [
      { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "diya", x: 0.5 }, { id: "flower", x: 0.1 } ],
        cap: { en: "Janmashtami at Dadi's house! Bells, flowers and songs.", hi: "दादी के घर जन्माष्टमी! घंटियाँ, फूल और भजन।" },
        say: [ { who: 1, en: "Today is little Kanha's birthday, Auggie!", hi: "आज नन्हे कान्हा का जन्मदिन है, ऑगी!" } ] },
      { bg: "festival", chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "drum", x: 0.95 } ],
        say: [ { who: 0, en: "Ma, your name is Krishna too! Double party!", hi: "माँ, आपका नाम भी कृष्णा है! डबल पार्टी!" },
               { who: 2, en: "Ha ha! Then everyone, dance!", hi: "हा-हा! तो सब नाचो!" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.35 } ], props: [ { id: "diya", x: 0.8 }, { id: "flower", x: 0.12 } ],
        cap: { en: "High up hung a matki full of white, creamy makhan.", hi: "ऊपर एक मटकी टँगी थी, सफ़ेद मलाईदार माखन से भरी।" },
        say: [ { who: 0, en: "Makhan! Yum! I must reach it!", hi: "माखन! वाह! मुझे वहाँ तक पहुँचना है!", kind: "think" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.45 } ], props: [ { id: "drum", x: 0.9 } ],
        cap: { en: "Jump! Jump! JUMP! But the matki was too high.", hi: "कूदो! कूदो! कूदो! पर मटकी बहुत ऊँची थी।" },
        fx: { en: "BOING!", hi: "उछाल!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "apple", x: 0.5 } ],
        say: [ { who: 1, en: "Makhan is too rich for doggy tummies. Here, apple!", hi: "माखन कुत्तों के पेट के लिए भारी है। ये लो, सेब!" } ] },
      { bg: "festival", chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.48 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "apple", x: 0.93 } ],
        cap: { en: "Papa lifted Rohan. Tap! The matki opened. Hooray!", hi: "पापा ने रोहन को उठाया। टक! मटकी खुल गई। हुर्रे!" },
        say: [ { who: 2, en: "Makhan for you, apple for me! Jai Kanha!", hi: "माखन तुम्हारे लिए, सेब मेरे लिए! जय कान्हा!" } ],
        fx: { en: "TAP!", hi: "टक!" }, action: true }
    ]
  },

  // 42 — Eid at Zoya's home
  {
    id: 42, age: "4-6", category: "festivals",
    title: { en: "Eid Mubarak, Auggie!", hi: "ईद मुबारक, ऑगी!" },
    blurb: { en: "Zoya invites Auggie home for Eid — a silver moon, a sweet smell and a special surprise.", hi: "ज़ोया ऑगी को ईद पर घर बुलाती है — चाँदी जैसा चाँद, मीठी खुशबू और एक खास सरप्राइज़।" },
    moral: { en: "Festivals are happier when we share them with friends.", hi: "त्योहार दोस्तों के साथ मनाने से और भी खुशहाल हो जाते हैं।" },
    cover: { bg: "citynight", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "zoya", pose: "wave", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.12 }, { id: "gift", x: 0.52 } ] },
    panels: [
      { bg: "citynight", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "zoya", pose: "point", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.1 } ],
        cap: { en: "Zoya looked up at the sky. A thin, silver moon!", hi: "ज़ोया ने आसमान में देखा। पतला-सा, चाँदी जैसा चाँद!" },
        say: [ { who: 1, en: "The Eid moon! Tomorrow is Eid, Auggie!", hi: "ईद का चाँद! कल ईद है, ऑगी!", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "mumma", pose: "wave", mood: "happy", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.45 }, { id: "zoya", pose: "wave", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Next morning, Auggie and Mumma visited Zoya's home.", hi: "अगली सुबह ऑगी और मम्मा ज़ोया के घर गए।" },
        say: [ { who: 2, en: "Eid Mubarak! Come in, come in!", hi: "ईद मुबारक! आइए, अंदर आइए!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "zoya", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Mmm! What is that sweet, sweet smell?", hi: "म्म्म! ये मीठी-मीठी खुशबू किसकी है?" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "zoya", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Sheer khurma — sweet milk with sewaiyan!", hi: "शीर खुरमा — मीठा दूध और सेवइयाँ!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "zoya", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "But it has sugar and raisins — not for dogs.", hi: "पर इसमें चीनी और किशमिश है — ये कुत्तों के लिए नहीं।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zoya", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.48 }, { id: "apple", x: 0.56 } ],
        cap: { en: "Zoya gave Auggie his Eidi — a shiny new ball and an apple!", hi: "ज़ोया ने ऑगी को ईदी दी — एक चमकदार नई गेंद और एक सेब!" },
        say: [ { who: 0, en: "Eid Mubarak, Zoya! Best Eidi ever!", hi: "ईद मुबारक, ज़ोया! सबसे अच्छी ईदी!" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true }
    ]
  },

  // 43 — Christmas star with Anaya
  {
    id: 43, age: "4-6", category: "festivals",
    title: { en: "Auggie and the Christmas Star", hi: "ऑगी और क्रिसमस का तारा" },
    blurb: { en: "Anaya's Christmas tree needs a star on top, and Auggie's happy tail causes a little trouble.", hi: "अनाया के क्रिसमस ट्री पर सबसे ऊपर तारा चाहिए, और ऑगी की खुश पूँछ थोड़ी गड़बड़ कर देती है।" },
    moral: { en: "Helping friends makes every festival shine brighter.", hi: "दोस्तों की मदद करने से हर त्योहार और चमकता है।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.62, flip: true } ], props: [ { id: "tree", x: 0.88 }, { id: "star", x: 0.88, y: 0.12 }, { id: "gift", x: 0.75 } ], fx: { en: "TWINKLE!", hi: "टिमटिम!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "anaya", pose: "stand", mood: "happy", x: 0.6, flip: true } ], props: [ { id: "tree", x: 0.88 }, { id: "gift", x: 0.78 } ],
        cap: { en: "Christmas Eve! Anaya decorated her little tree.", hi: "क्रिसमस से पहले की रात! अनाया ने अपना छोटा पेड़ सजाया।" },
        say: [ { who: 1, en: "Auggie, it needs a star on top!", hi: "ऑगी, इसके ऊपर एक तारा चाहिए!" } ] },
      { bg: "home", chars: [ { id: "anaya", pose: "sit", mood: "happy", x: 0.3 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.7, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.5 }, { id: "book", x: 0.15 } ],
        cap: { en: "Anaya painted a big, golden paper star.", hi: "अनाया ने कागज़ का एक बड़ा, सुनहरा तारा बनाया।" },
        say: [ { who: 1, en: "Wow! It shines like a real star!", hi: "वाह! ये तो असली तारे जैसा चमक रहा है!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.35 }, { id: "anaya", pose: "stand", mood: "surprised", x: 0.75, flip: true } ], props: [ { id: "star", x: 0.1, y: 0.7 } ],
        cap: { en: "Auggie wagged his happy tail — the star flew under the sofa!", hi: "ऑगी ने खुशी से पूँछ हिलाई — तारा उड़कर सोफ़े के नीचे चला गया!" },
        fx: { en: "SWISH!", hi: "सर्र!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35 }, { id: "anaya", pose: "sit", mood: "sad", x: 0.78, flip: true } ],
        say: [ { who: 0, en: "Don't worry, Anaya. I'll get it!", hi: "चिंता मत करो, अनाया। मैं ले आऊँगा!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.45, y: 0.55 } ],
        say: [ { who: 1, en: "You carried it so gently, Auggie!", hi: "तुम इसे कितने प्यार से लाए, ऑगी!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.48 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.92 }, { id: "star", x: 0.92, y: 0.12 } ],
        cap: { en: "Papa lifted Anaya, and she put the star on top!", hi: "पापा ने अनाया को उठाया, और उसने तारा सबसे ऊपर लगा दिया!" },
        say: [ { who: 0, en: "Merry Christmas, everyone!", hi: "सबको मेरी क्रिसमस!", kind: "shout" } ],
        fx: { en: "TWINKLE!", hi: "टिमटिम!" }, action: true }
    ]
  },

  // 44 — Kite day for Makar Sankranti
  {
    id: 44, age: "4-6", category: "festivals",
    title: { en: "Kite Day, the Bird-Safe Way!", hi: "पतंग का दिन, पंछियों का ध्यान!" },
    blurb: { en: "On Makar Sankranti the sky fills with kites, and Auggie makes sure the birds stay safe.", hi: "मकर संक्रांति पर आसमान पतंगों से भर जाता है, और ऑगी पंछियों की हिफ़ाज़त करता है।" },
    moral: { en: "Fly kites with plain thread, and let birds fly first.", hi: "सादे धागे से पतंग उड़ाओ, और पंछियों को पहले उड़ने दो।" },
    cover: { bg: "sky", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.55, y: 0.2 }, { id: "kite", x: 0.85, y: 0.12 }, { id: "sun", x: 0.12, y: 0.12 } ], fx: { en: "WHOOSH!", hi: "सर्र!" } },
    panels: [
      { bg: "park", chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.3 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.7, flip: true } ], props: [ { id: "kite", x: 0.5, y: 0.18 }, { id: "kite", x: 0.82, y: 0.12 }, { id: "sun", x: 0.1, y: 0.1 } ],
        cap: { en: "Makar Sankranti! The sky was full of kites.", hi: "मकर संक्रांति! आसमान पतंगों से भरा था।" },
        say: [ { who: 0, en: "Our string is plain cotton, Auggie. No sharp manjha!", hi: "हमारा धागा सादा सूती है, ऑगी। कोई तेज़ माँझा नहीं!" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.6, y: 0.15 } ],
        say: [ { who: 0, en: "Why no sharp manjha, Nanu?", hi: "तेज़ माँझा क्यों नहीं, नानू?" },
               { who: 1, en: "It can hurt the birds' wings.", hi: "उससे पंछियों के पंखों को चोट लग सकती है।" } ] },
      { bg: "park", chars: [ { id: "nanu", pose: "blast", mood: "happy", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "kite", x: 0.55, y: 0.1 } ],
        cap: { en: "Up, up, UP went the red kite!", hi: "ऊपर, ऊपर, और ऊपर गई लाल पतंग!" },
        say: [ { who: 2, en: "Higher, Daddy! Higher!", hi: "और ऊपर, डैडी! और ऊपर!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सर्र!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.25 }, { id: "pigeon", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.6, y: 0.15 } ],
        cap: { en: "Suddenly, a flock of pigeons flew near the kite!", hi: "अचानक कबूतरों का झुंड पतंग के पास उड़ आया!" },
        say: [ { who: 0, en: "Nanu! Birds! Bring the kite down!", hi: "नानू! पंछी! पतंग नीचे लाओ!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.55, y: 0.55 } ],
        cap: { en: "Nanu pulled the kite down, slowly and safely.", hi: "नानू ने धीरे-धीरे, आराम से पतंग नीचे उतारी।" },
        say: [ { who: 1, en: "Well spotted! Birds first, kites later.", hi: "शाबाश! पहले पंछी, फिर पतंग।" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "mausi", pose: "wave", mood: "happy", x: 0.5 }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "sun", x: 0.9, y: 0.1 } ],
        cap: { en: "Birds flew home safe. Til-gud for people, a carrot for Auggie!", hi: "पंछी सुरक्षित घर लौटे। लोगों के लिए तिल-गुड़, ऑगी के लिए गाजर!" },
        say: [ { who: 2, en: "Gutur-goo! Thank you, kind kite friends!", hi: "गुटर-गूँ! धन्यवाद, प्यारे पतंग वाले दोस्तो!" } ] }
    ]
  }

);
