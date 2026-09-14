window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(

  // 23 — Moti and the longest shortcut
  {
    id: 23, age: "4-6", category: "dogs",
    title: { en: "Moti and the Longest Shortcut", hi: "मोती का लंबा-सा शॉर्टकट" },
    blurb: { en: "A shy street dog, one bowl of water, and a shortcut that is NOT short at all!", hi: "एक शर्मीला गली का कुत्ता, पानी का एक कटोरा, और एक शॉर्टकट — जो छोटा बिल्कुल नहीं!" },
    moral: { en: "Street dogs are friends too. Be gentle, and share a little water.", hi: "गली के कुत्ते भी दोस्त हैं। उनसे प्यार से मिलो, थोड़ा पानी बाँटो।" },
    cover: { bg: "city", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "moti", pose: "wave", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.52 } ], fx: { en: "WOOF!", hi: "भौं-भौं!" } },
    panels: [
      { bg: "city", chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "stand", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "rickshaw", x: 0.95 } ],
        cap: { en: "Evening walk! Auggie pulled Papa like a runaway rickshaw.", hi: "शाम की सैर! ऑगी पापा को ऐसे खींच रहा था, जैसे बेलगाम रिक्शा।" },
        say: [ { who: 0, en: "Who's walking who? Near traffic, the leash stays ON!", hi: "अरे भई, सैर कौन करा रहा है? सड़क पर पट्टा पक्का!" } ] },
      { bg: "market", chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.3 }, { id: "moti", pose: "lie", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "By the chai stall lay a thin, tired dog.", hi: "चाय की टपरी के पास एक दुबला, थका-सा कुत्ता लेटा था।" },
        say: [ { who: 0, en: "A new friend! Time for my BIGGEST hello!", hi: "नया दोस्त! अब देखो मेरा सबसे बड़ा वाला हैलो!", kind: "think" } ] },
      { bg: "market", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "moti", pose: "sit", mood: "scared", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "WOOF-WOOF! HELLO! Play? Play? PLAY?", hi: "भौं-भौं! हैलो! खेलोगे? खेलोगे? खेलोगे?", kind: "shout" },
               { who: 1, en: "Please... don't shoo me away. Everyone does.", hi: "मुझे भगाना मत... सब भगा देते हैं।", kind: "whisper" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "market", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.2 }, { id: "papa", pose: "sit", mood: "happy", x: 0.5 }, { id: "moti", pose: "stand", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "bottle", x: 0.42 }, { id: "bowl", x: 0.65 } ],
        say: [ { who: 0, en: "Shh, Papa. He looks thirsty. Can he have my water?", hi: "श्श, पापा... ये प्यासा है। मेरा पानी इसे दे दो?", kind: "whisper" },
               { who: 1, en: "Here, Moti. Nobody's shooing you today.", hi: "लो मोती, जी भर के पियो। आज कोई नहीं भगाएगा।" } ] },
      { bg: "city", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "moti", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "bowl", x: 0.5 } ],
        say: [ { who: 1, en: "Slurp! Thanks, friend! Want to see my secret shortcut?", hi: "सुड़प! शुक्रिया, दोस्त! मेरा सीक्रेट शॉर्टकट देखोगे?" },
               { who: 0, en: "A shortcut to the park? YES, YES, YES!", hi: "पार्क का शॉर्टकट? हाँ-हाँ-हाँ!" } ],
        fx: { en: "SLURP!", hi: "सुड़प!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.25 }, { id: "moti", pose: "run", mood: "laugh", x: 0.55 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.85, flip: true } ], props: [ { id: "tree", x: 0.05 }, { id: "flower", x: 0.7 } ],
        say: [ { who: 2, en: "Huff... Moti, your 'shortcut' went round the WHOLE city!", hi: "हाँफ़-हाँफ़... मोती, ये शॉर्टकट था या पूरा चमकपुर दर्शन?" },
               { who: 0, en: "Worth it, Papa! I found a new best friend!", hi: "पर पापा, रास्ते में पक्का दोस्त तो मिल गया!" } ] }
    ]
  },

  // 24 — Pinku's squeaky bone disaster
  {
    id: 24, age: "4-6", category: "dogs",
    title: { en: "Pinku's Squeaky Bone Disaster", hi: "पिंकू की चूँ-चूँ आफ़त" },
    blurb: { en: "Pinku's squeaky bone has vanished! Stolen? Lost? Or is it hiding somewhere VERY close?", hi: "पिंकू की चूँ-चूँ हड्डी ग़ायब! चोरी हुई? खो गई? या कहीं बहुत पास ही छिपी है?" },
    moral: { en: "Before you panic, take a big breath and look carefully — even under yourself!", hi: "घबराने से पहले लंबी साँस लो और ध्यान से देखो — अपने नीचे भी!" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "pinku", pose: "blast", mood: "sad", x: 0.7, flip: true } ], props: [ { id: "flower", x: 0.9 } ], fx: { en: "BOO-HOO!", hi: "ऊँ-ऊँ!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "pinku", pose: "lie", mood: "sad", x: 0.72, flip: true } ], props: [ { id: "bush", x: 0.95 } ],
        cap: { en: "Pinku the pug lay flat on the grass. Very, VERY flat.", hi: "पिंकू पग घास पर चित पड़ा था। एकदम चपटा।" },
        say: [ { who: 1, en: "My squeaky bone is GONE! Tell the whole world!", hi: "हाय! मेरी चूँ-चूँ हड्डी खो गई! पूरे मोहल्ले को बताओ!", kind: "shout" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "pinku", pose: "blast", mood: "sad", x: 0.7, flip: true } ],
        say: [ { who: 0, en: "Don't cry, Pinku! Want half my carrot?", hi: "रो मत, पिंकू! आधी गाजर खाओगे?" },
               { who: 1, en: "A CARROT? My heart is BROKEN, Auggie!", hi: "गाजर?! यहाँ मेरा दिल टूट गया है, ऑगी!", kind: "shout" } ],
        fx: { en: "BOO-HOO!", hi: "ऊँ-ऊँ!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.2 }, { id: "pinku", pose: "sit", mood: "sad", x: 0.5 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Ooh, a sad pug! Hold that pose, Pinku!", hi: "अरे वाह, उदास पग! पिंकू, ऐसे ही रहो — क्लिक!" },
               { who: 0, en: "Selfies later, Mausi! Super Sniffer — ON!", hi: "सेल्फ़ी बाद में, मौसी! सुपर सूँघू नाक — चालू!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.35 } ], props: [ { id: "bush", x: 0.72 }, { id: "flower", x: 0.88 }, { id: "flower", x: 0.1 } ],
        cap: { en: "Sniff! Under the bush: a sock. Behind the flowers: a slipper!", hi: "सूँ-सूँ! झाड़ी के नीचे — एक मोज़ा। फूलों के पीछे — एक चप्पल!" },
        say: [ { who: 0, en: "Wait... the squeaky smell is coming from Pinku!", hi: "रुको... चूँ-चूँ की खुशबू तो पिंकू से आ रही है!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3 }, { id: "pinku", pose: "stand", mood: "surprised", x: 0.68, flip: true } ], props: [ { id: "bone", x: 0.7 } ],
        say: [ { who: 0, en: "Pinku, please stand up. Trust my nose.", hi: "पिंकू, ज़रा उठो तो। मेरी नाक पर भरोसा रखो।" },
               { who: 1, en: "Fine! But I'll NEVER speak to you ag— SQUEAK?!", hi: "ठीक है! पर अब मैं तुमसे कभी बात नहीं कर— चूँ?!", kind: "shout" } ],
        fx: { en: "SQUEAK!", hi: "चूँ!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.5 }, { id: "pinku", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "bone", x: 0.65 } ],
        say: [ { who: 2, en: "Sat on it all along! First squeak is yours, hero!", hi: "मैं तो इसी पर बैठा था! मेरे हीरो, पहली चूँ-चूँ तुम्हारी!" },
               { who: 1, en: "And I got the selfie! Everyone say... SQUEAK!", hi: "और सेल्फ़ी मेरी! सब बोलो... चूँ!" } ] }
    ]
  },

  // 25 — Snowy vs. the Chamakpur sun
  {
    id: 25, age: "4-6", category: "dogs",
    title: { en: "Snowy vs. the Chamakpur Sun", hi: "स्नोवी और चमकपुर की धूप" },
    blurb: { en: "A husky from the snowy mountains lands in Chamakpur in May. Can Auggie save his melting friend?", hi: "बर्फ़ीले पहाड़ों का हस्की, और चमकपुर में मई की गर्मी! क्या ऑगी अपने पिघलते दोस्त को बचा पाएगा?" },
    moral: { en: "On hot days, give pets cool water and shade, and walk them only in the evening.", hi: "गर्मी में पालतू को ठंडा पानी और छाँव दो — और सैर सिर्फ़ शाम को।" },
    cover: { bg: "city", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "snowy", pose: "stand", mood: "sad", x: 0.7, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.15 } ], fx: { en: "PHEW!", hi: "उफ़्फ़!" } },
    panels: [
      { bg: "station", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "blast", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Welcome, Snowy! I've planned a BIG afternoon walk!", hi: "स्वागत है, स्नोवी! आज दोपहर में लंबी सैर करेंगे!" },
               { who: 1, en: "Aaoooo! Oops... sorry. That was my happy howl.", hi: "आऊँऊँ! ओह सॉरी, खुशी में गाना निकल गया!" } ] },
      { bg: "city", chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3 }, { id: "snowy", pose: "lie", mood: "sad", x: 0.7, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.12 } ],
        say: [ { who: 1, en: "Aaoooo... so HOT! I'm turning into husky soup!", hi: "आऊँऊँ... उफ़्फ़ ये गर्मी! मैं तो पिघली कुल्फ़ी बन गया!", kind: "shout" } ],
        fx: { en: "AWOOO!", hi: "आऊँऊँ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.2 }, { id: "snowy", pose: "sit", mood: "sad", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 1, en: "Thanks for the ear-fan, Auggie... but I'm still melting!", hi: "कानों वाला पंखा अच्छा है, ऑगी... पर गर्मी तो वैसी ही है!" },
               { who: 2, en: "Ha ha! Mumma's heat list, number one: cold water!", hi: "हा-हा! मम्मा की गर्मी वाली लिस्ट, नंबर एक — ठंडा पानी!" } ] },
      { bg: "home", chars: [ { id: "snowy", pose: "sit", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.47 } ],
        cap: { en: "Cool water with ice cubes. Snowy drank... and drank... and DRANK!", hi: "बर्फ़ वाला ठंडा पानी। स्नोवी पीता गया... पीता गया... पीता ही गया!" },
        say: [ { who: 1, en: "Number two: NO walks in the hot afternoon sun!", hi: "नंबर दो: दोपहर की तेज़ धूप में कोई सैर नहीं!" } ],
        fx: { en: "SLURP!", hi: "सुड़प!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "snowy", pose: "lie", mood: "happy", x: 0.68, flip: true } ], props: [ { id: "tree", x: 0.5 } ],
        say: [ { who: 0, en: "Forget my big walk. Here — my SECRET nap spot!", hi: "भूल जाओ लंबी सैर। ये लो — मेरी सीक्रेट झपकी वाली जगह!" },
               { who: 1, en: "Ahh... cool neem shade. Just like my mountains.", hi: "आह... नीम की ठंडी छाँव। बिल्कुल मेरे पहाड़ों जैसी।", kind: "whisper" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "frisbee", x: 0.5, y: 0.3 }, { id: "tree", x: 0.92 } ],
        say: [ { who: 1, en: "Aaoooo! Cool evenings in Chamakpur are the BEST!", hi: "आऊँऊँ! चमकपुर की ठंडी शाम तो कमाल है!", kind: "shout" },
               { who: 0, en: "Ha ha! You just woke up the whole park!", hi: "हा-हा! तुमने तो पूरा पार्क जगा दिया!" } ] }
    ]
  },

  // 26 — Chiku is always first
  {
    id: 26, age: "4-6", category: "friends",
    title: { en: "Chiku Is ALWAYS First!", hi: "चीकू हमेशा फ़र्स्ट!" },
    blurb: { en: "Tiny Chiku always comes first. Can big, lazy Auggie beat him — just once?", hi: "छोटा-सा चीकू हर बार फ़र्स्ट आता है। क्या बड़ा, आलसी ऑगी उसे बस एक बार हरा पाएगा?" },
    moral: { en: "Caring for a friend is better than winning any race.", hi: "कोई भी रेस जीतने से बढ़कर है दोस्त का ख्याल रखना।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.3 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.7 } ], props: [ { id: "tree", x: 0.95 } ], fx: { en: "ZOOM!", hi: "ज़ूम!" } },
    panels: [
      { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "chiku", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "tree", x: 0.05 } ],
        say: [ { who: 1, en: "Auggie! Race me to the big tree! I'll be FIRST!", hi: "ऑगी! बड़े पेड़ तक रेस! फ़र्स्ट तो मैं ही आऊँगा!", kind: "shout" },
               { who: 0, en: "Race? Sorry... I'm busy. Busy napping.", hi: "रेस? अभी मैं बिज़ी हूँ... सोने में।", kind: "whisper" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.2 }, { id: "chiku", pose: "stand", mood: "laugh", x: 0.45 }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Okay, fine! Today, this big dog WINS!", hi: "अच्छा, चलो! आज तो ये बड़ा ऑगी ही जीतेगा!" },
               { who: 2, en: "On your marks... get set... GO!", hi: "पोज़ीशन लो... तैयार... भाआआगो!", kind: "shout" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.25 }, { id: "chiku", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "tree", x: 0.95 } ],
        say: [ { who: 1, en: "FIRST! First again! Hurry up, Auggie!", hi: "फ़र्स्ट! फिर से फ़र्स्ट! कहाँ रह गए, ऑगी?", kind: "shout" },
               { who: 0, en: "Huff... puff... is that tree running AWAY?", hi: "हाँफ़... हाँफ़... ये पेड़ भी भाग रहा है क्या?" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.25 }, { id: "chiku", pose: "lie", mood: "sleepy", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.55 } ],
        cap: { en: "Chiku raced again. And again. And AGAIN.", hi: "चीकू फिर दौड़ा। फिर दौड़ा। फिर से दौड़ा!" },
        say: [ { who: 1, en: "First... ten times... but my legs are noodles.", hi: "दस बार फ़र्स्ट... पर मेरी टाँगें तो जलेबी बन गईं।" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.2 }, { id: "chiku", pose: "sit", mood: "sleepy", x: 0.48 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.34 }, { id: "bottle", x: 0.66 } ],
        say: [ { who: 0, en: "Winning can wait. You drink first, Chiku.", hi: "जीतना बाद में। पहले तुम पानी पियो, चीकू।" },
               { who: 2, en: "Water break, champs! Nobody wants a HOT dog! Ha!", hi: "पानी पी लो, चैंपियनों! वरना बन जाओगे गरम पकौड़े! हा-हा!" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "chiku", pose: "cheer", mood: "laugh", x: 0.6, flip: true } ], props: [ { id: "flower", x: 0.9 } ],
        cap: { en: "They ran back side by side, and crossed the line together!", hi: "दोनों साथ-साथ दौड़े, और एक साथ लाइन पार की!" },
        say: [ { who: 1, en: "We're BOTH first! Best first ever!", hi: "हम दोनों फ़र्स्ट! ये तो सबसे बढ़िया वाला फ़र्स्ट है!", kind: "shout" } ],
        fx: { en: "HOORAY!", hi: "हुर्रे!" }, action: true }
    ]
  },

  // 27 — Auggie joins the duck parade
  {
    id: 27, age: "4-6", category: "birds",
    title: { en: "Auggie Joins the Duck Parade", hi: "ऑगी चला बतख़ों की परेड में" },
    blurb: { en: "Ducks march in a line — so why can't a big yellow Labrador join in?", hi: "बतख़ें लाइन में चलती हैं — तो एक बड़ा पीला लैब्राडोर क्यों नहीं?" },
    moral: { en: "Little ones feel safe when we are calm, quiet and gentle.", hi: "जब हम शांत, धीमे और प्यार से रहते हैं, तो नन्हे जीव बेफ़िक्र रहते हैं।" },
    cover: { bg: "river", chars: [ { id: "duck", pose: "stand", mood: "happy", x: 0.25 }, { id: "duck", pose: "stand", mood: "happy", x: 0.47, s: 0.6 }, { id: "auggie", pose: "stand", mood: "laugh", x: 0.75 } ], fx: { en: "QUACK!", hi: "क्वैक!" } },
    panels: [
      { bg: "river", chars: [ { id: "mumma", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "point", mood: "laugh", x: 0.5 }, { id: "duck", pose: "stand", mood: "happy", x: 0.82, flip: true } ],
        cap: { en: "Morning walk by the lake. Then Auggie saw... a duck parade!", hi: "झील किनारे सुबह की सैर। तभी ऑगी ने देखी... बतख़ों की परेड!" },
        say: [ { who: 1, en: "A duck parade! Mumma, I want to march too!", hi: "बतख़ों की परेड! मम्मा, मुझे भी लाइन में चलना है!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.2 }, { id: "duck", pose: "stand", mood: "happy", x: 0.55, s: 0.6 }, { id: "duck", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Quack! Quack! Look, I'm a duck too!", hi: "क्वैक! क्वैक! देखो, मैं भी बतख़ हूँ!" },
               { who: 2, en: "Ducks don't have floppy ears, dear!", hi: "बेटा, बतख़ों के कान ऐसे लटके नहीं होते!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.35 }, { id: "duck", pose: "stand", mood: "scared", x: 0.78, flip: true } ],
        cap: { en: "The ducks slid softly into the lake. Auggie did a BIG belly-flop!", hi: "बतख़ें धीरे से पानी में उतरीं। और ऑगी? धड़ाम से पेट के बल छपाक!" },
        fx: { en: "SPLASH!", hi: "छपाक!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "duck", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "QUACK! Too big! Too loud! My babies are shaking!", hi: "क्वैक! इतना बड़ा छपाका! मेरे बच्चे काँप रहे हैं!", kind: "shout" } ],
        fx: { en: "QUACK!", hi: "क्वैक!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Little ones love slow and gentle, Auggie. Give them space.", hi: "छोटे बच्चों को धीरे और प्यार से मिलना पसंद है, ऑगी। थोड़ी दूरी रखो।" },
               { who: 0, en: "Quiet? Me? Okay... I'll be the quietest dog EVER.", hi: "चुपचाप? मैं? ठीक है... मैं दुनिया का सबसे चुप कुत्ता बनूँगा!", kind: "whisper" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "duck", pose: "stand", mood: "happy", x: 0.55, flip: true }, { id: "duck", pose: "stand", mood: "laugh", x: 0.8, flip: true, s: 0.6 } ],
        cap: { en: "Auggie sat still as a rock. Then — pitter-patter — the ducklings came!", hi: "ऑगी पत्थर की तरह चुप बैठा रहा। फिर — टुक-टुक-टुक — बतख़ के बच्चे खुद आ गए!" },
        say: [ { who: 1, en: "Quack! Gentle Auggie, you can be our BIG duck!", hi: "क्वैक! प्यारे ऑगी, आज से तुम हमारी बड़ी बतख़!" } ] }
    ]
  },

  // 28 — Who's barking in the guava tree?
  {
    id: 28, age: "4-6", category: "birds",
    title: { en: "Who's Barking in the Guava Tree?", hi: "अमरूद के पेड़ पर कौन भौंका?" },
    blurb: { en: "Someone keeps barking in Auggie's garden. But there's no other dog anywhere!", hi: "ऑगी के बगीचे में कोई भौंक रहा है। पर वहाँ तो कोई दूसरा कुत्ता है ही नहीं!" },
    moral: { en: "Parrots copy what they hear, so let's say kind, happy words!", hi: "तोते वही बोलते हैं जो सुनते हैं — तो चलो, हम प्यारे बोल बोलें!" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "parrot", pose: "blast", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.8 } ], fx: { en: "WOOF!", hi: "भौं!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "blast", mood: "laugh", x: 0.35 } ], props: [ { id: "tree", x: 0.8 }, { id: "sun", x: 0.15, y: 0.15 } ],
        cap: { en: "Every morning, Auggie barks one big hello to the sun.", hi: "हर सुबह ऑगी सूरज को एक ज़ोरदार 'भौं' वाली गुड मॉर्निंग बोलता है।" },
        say: [ { who: 0, en: "Good morning, Sun! WOOF!", hi: "गुड मॉर्निंग, सूरज जी! भौं!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "parrot", pose: "blast", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.78 } ],
        cap: { en: "Then, from the guava tree... someone barked BACK!", hi: "तभी अमरूद के पेड़ से... किसी ने वापस भौंका!" },
        say: [ { who: 1, en: "WOOF! WOOF! Woofity-WOOF!", hi: "भौं! भौं! भौं-भौं-भौं!", kind: "shout" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ], props: [ { id: "bush", x: 0.78 }, { id: "tree", x: 0.1 } ],
        cap: { en: "Auggie searched every bush. No dog. Just one very grumpy snail.", hi: "ऑगी ने हर झाड़ी छान मारी। कुत्ता नहीं मिला। बस एक चिढ़ा हुआ घोंघा मिला।" },
        say: [ { who: 0, en: "Who is barking in MY garden?", hi: "मेरे बगीचे में ये भौंकने वाला है कौन?", kind: "think" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "parrot", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 } ],
        say: [ { who: 1, en: "Hee-hee! It was me, Mithu! Woof! Fooled you!", hi: "ही-ही! मैं था, मिट्ठू! भौं! बुद्धू बनाया!" },
               { who: 0, en: "A bird that BARKS? My ears are confused!", hi: "भौंकने वाला तोता? मेरे तो कान चकरा गए!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "Then Mithu called in Mumma's voice: 'Auggie! Foood tiiime!'", hi: "फिर मिट्ठू ने मम्मा की आवाज़ में पुकारा: 'ऑगी! खाना तैयार है!'" },
        say: [ { who: 1, en: "Food? I didn't call you! That was Mithu, silly!", hi: "खाना? मैंने कब बुलाया? वो तो मिट्ठू की शरारत थी!" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "wave", mood: "laugh", x: 0.3 }, { id: "parrot", pose: "cheer", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 }, { id: "flower", x: 0.1 } ],
        say: [ { who: 0, en: "I'm not cross, Mithu! Now say: 'Carrot, please!'", hi: "मैं नाराज़ नहीं, मिट्ठू! अब बोलो — 'गाजर, प्लीज़!'" },
               { who: 1, en: "Carrot, please! Thank you! ...WOOF! Hee-hee!", hi: "गाजर प्लीज़! थैंक यू! ...भौं! ही-ही!" } ] }
    ]
  },

  // 29 — Auggie and the hissy kitten
  {
    id: 29, age: "4-6", category: "friends",
    title: { en: "Auggie and the Hissy Kitten", hi: "ऑगी और फुफकारती मिष्टी" },
    blurb: { en: "Auggie's new neighbour is a kitten who only says HISS. Can they ever be friends?", hi: "ऑगी की नई पड़ोसन एक बिल्ली है, जो बस 'फ़्स्स' करती है। क्या इनकी दोस्ती हो पाएगी?" },
    moral: { en: "To make a shy friend, go slow, stay gentle and let them come to you.", hi: "शर्मीले दोस्त से धीरे-धीरे, प्यार से मिलो — और उसे खुद पास आने दो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "cat", pose: "sit", mood: "happy", x: 0.62, flip: true } ], props: [ { id: "ball", x: 0.85 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.2 }, { id: "cat", pose: "sit", mood: "scared", x: 0.5, flip: true }, { id: "anaya", pose: "wave", mood: "happy", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Auggie, meet Mishti! She's tiny and new, so be gentle!", hi: "ऑगी, ये है मिष्टी! छोटी-सी है, नई है — प्यार से मिलना!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "cat", pose: "stand", mood: "surprised", x: 0.75, flip: true } ], props: [ { id: "ball", x: 0.5 } ],
        say: [ { who: 0, en: "New friend! Ball! Carrot! PLAY-PLAY-PLAY!", hi: "नया दोस्त! गेंद! गाजर! खेलो-खेलो-खेलो!", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.3 }, { id: "cat", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Hssss! Too big! Too loud! Too SLOBBERY!", hi: "फ़्स्स्स! इतने बड़े! इतना शोर! इतनी लार!", kind: "shout" } ],
        fx: { en: "HISS!", hi: "फ़्स्स!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "anaya", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "She doesn't like me. She didn't even want my carrot.", hi: "वो मुझसे दोस्ती नहीं करेगी। मेरी गाजर भी नहीं ली।" },
               { who: 1, en: "Cats like slow and quiet. Let HER come to you.", hi: "बिल्लियों को धीरे-धीरे, चुपचाप दोस्ती पसंद है। उसे खुद आने दो।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "determined", x: 0.3 }, { id: "cat", pose: "stand", mood: "surprised", x: 0.68, flip: true } ],
        cap: { en: "Auggie lay down. His tail wanted to wag. He held it... very... still.", hi: "ऑगी लेट गया। पूँछ हिलना चाहती थी, पर उसने उसे... बिल्कुल... रोके रखा।" },
        say: [ { who: 1, en: "Hmm. The big dog is quiet now. Interesting...", hi: "हम्म... ये बड़ा कुत्ता अब चुप है। दिलचस्प...", kind: "think" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "cat", pose: "lie", mood: "sleepy", x: 0.55, flip: true }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.82, flip: true } ],
        say: [ { who: 2, en: "Look! Mishti curled up right on your paw!", hi: "देखो! मिष्टी तो तुम्हारे पंजे पर ही गोल होकर सो गई!" },
               { who: 0, en: "Shh... I'm never moving again. Ever.", hi: "श्श... अब मैं सौ साल तक नहीं हिलूँगा।", kind: "whisper" } ],
        fx: { en: "PURR!", hi: "घुर-घुर!" }, action: true }
    ]
  },

  // 30 — Gauri's lost tan-tan bell
  {
    id: 30, age: "4-6", category: "animals",
    title: { en: "Gauri's Lost Tan-Tan Bell", hi: "गौरी की खोई टन-टन" },
    blurb: { en: "A giant MOO, a missing bell, and a nose that can only smell carrots!", hi: "एक ज़ोरदार 'म्बाँ', एक खोई घंटी, और एक नाक जिसे बस गाजर की खुशबू आती है!" },
    moral: { en: "Even when you feel a little scared, you can still help a friend.", hi: "थोड़ा डर लगे तब भी, दोस्त की मदद ज़रूर कर सकते हैं।" },
    cover: { bg: "farm", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "cow", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.95 } ], fx: { en: "TAN-TAN!", hi: "टन-टन!" } },
    panels: [
      { bg: "village", chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "house", x: 0.95 } ],
        cap: { en: "Auggie and Dadi visited a village full of yellow mustard fields.", hi: "ऑगी और दादी पीली-पीली सरसों वाले गाँव पहुँचे।" },
        say: [ { who: 1, en: "Smell the mustard, Auggie! Not my pallu, naughty!", hi: "सरसों सूँघो, ऑगी! मेरा पल्लू नहीं, शैतान!" } ] },
      { bg: "farm", chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.3 }, { id: "cow", pose: "blast", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "Suddenly, a VERY big voice came from behind the haystack...", hi: "अचानक भूसे के ढेर के पीछे से एक बहुत बड़ी आवाज़ आई..." },
        fx: { en: "MOO!", hi: "म्बाँ!" }, action: true },
      { bg: "farm", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3 }, { id: "cow", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Don't run, little one! I'm Gauri. I lost my bell.", hi: "डरो मत, बच्चे! मैं गौरी हूँ। मेरी टन-टन घंटी खो गई।" },
               { who: 0, en: "Big moos scare me... but I'll help you!", hi: "मुझे बड़ी 'म्बाँ' से डर लगता है... पर मदद ज़रूर करूँगा!" } ] },
      { bg: "farm", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.4 } ], props: [ { id: "bush", x: 0.8 }, { id: "rock", x: 0.12 } ],
        cap: { en: "Super Sniffer ON! But it only smelled... Dadi's carrot.", hi: "सुपर सूँघू नाक चालू! पर उसे बस एक ही खुशबू आई... दादी की गाजर।" },
        say: [ { who: 0, en: "Silly nose! Okay, ears, your turn. Listen...", hi: "बुद्धू नाक! चलो कानों, अब तुम्हारी बारी। सुनो...", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "farm", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "cow", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Tan-tan! I HEARD it! It was in the haystack!", hi: "टन-टन! सुन लिया! भूसे के ढेर में थी!", kind: "shout" },
               { who: 1, en: "My bell! My sweet little tan-tan!", hi: "मेरी घंटी! मेरी प्यारी टन-टन!" } ],
        fx: { en: "TAN-TAN!", hi: "टन-टन!" }, action: true },
      { bg: "farm", chars: [ { id: "dadi", pose: "wave", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "cow", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Here, my hero! My not-so-secret pallu carrot!", hi: "ले मेरे शेर! पल्लू वाली 'सीक्रेट' गाजर!" },
               { who: 2, en: "Tan-tan! Thank you, my brave little friend!", hi: "टन-टन! शुक्रिया, मेरे बहादुर नन्हे दोस्त!" } ] }
    ]
  },

  // 31 — Chinki and the fuzzy nut
  {
    id: 31, age: "4-6", category: "animals",
    title: { en: "Chinki and the Fuzzy Nut", hi: "चिंकी और रोएँदार अखरोट" },
    blurb: { en: "A squirrel just stole Auggie's ball! Will barking get it back?", hi: "एक गिलहरी ऑगी की गेंद ले भागी! क्या भौंकने से वापस मिलेगी?" },
    moral: { en: "Shouting scares, but asking nicely works — and might even make a friend.", hi: "चिल्लाने से डर लगता है, प्यार से पूछने से बात बनती है — और दोस्त भी मिल जाता है।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "squirrel", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 }, { id: "ball", x: 0.6 } ] },
    panels: [
      { bg: "park", chars: [ { id: "papa", pose: "blast", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.62 } ], props: [ { id: "ball", x: 0.88, y: 0.45 } ],
        cap: { en: "Papa threw the tennis ball. Auggie zoomed after it like a rocket!", hi: "पापा ने टेनिस गेंद फेंकी। ऑगी रॉकेट की तरह उसके पीछे भागा!" } },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "squirrel", pose: "run", mood: "laugh", x: 0.7 } ], props: [ { id: "ball", x: 0.76 } ],
        cap: { en: "WHOOSH! A squirrel grabbed it first — and raced up the tree!", hi: "सर्र! एक गिलहरी ने पहले ही गेंद झपटी — और पेड़ पर चढ़ गई!" },
        fx: { en: "WHOOSH!", hi: "सर्र!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "blast", mood: "angry", x: 0.3 }, { id: "squirrel", pose: "sit", mood: "scared", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.78 }, { id: "ball", x: 0.68 } ],
        say: [ { who: 0, en: "Hey! That's MY ball! Woof! Woof! Give it back!", hi: "ऐ! वो मेरी गेंद है! भौं! भौं! वापस दो!", kind: "shout" },
               { who: 1, en: "Eek! Big barky dog! I'm NOT letting go!", hi: "ईक! इतना भौंकू कुत्ता! मैं तो नहीं छोड़ूँगी!", kind: "whisper" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie even tried climbing the tree. Scratch, scratch... FLOP!", hi: "ऑगी ने पेड़ पर चढ़ने की भी कोशिश की। खर्र-खर्र... धप्प!" },
        say: [ { who: 1, en: "Barking scares her, champ. Try a soft, kind voice?", hi: "भौंकने से वो डर गई, बेटा। प्यार से, धीरे से पूछ के देखो?" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "squirrel", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.75 }, { id: "ball", x: 0.62 } ],
        say: [ { who: 0, en: "Please, little squirrel... may I have my ball back?", hi: "प्लीज़, छोटी गिलहरी... मेरी गेंद वापस दोगी?", kind: "whisper" },
               { who: 1, en: "Your ball? Isn't it a big, fuzzy nut?", hi: "गेंद? ये कोई बड़ा, रोएँदार अखरोट नहीं है?" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "squirrel", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.5 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Nuts go crunch. Balls go BOING! Chinki giggled and rolled it down.", hi: "अखरोट करते हैं कुर्र-कुर्र, गेंद करती है टप्प-टप्प! चिंकी हँसी और गेंद लुढ़का दी।" },
        say: [ { who: 1, en: "Sorry, Auggie! Can I play fetch too?", hi: "सॉरी, ऑगी! क्या मैं भी खेल सकती हूँ?" } ] }
    ]
  },

  // 32 — The balcony water party
  {
    id: 32, age: "4-6", category: "birds",
    title: { en: "The Balcony Water Party", hi: "बालकनी पर पानी पार्टी" },
    blurb: { en: "Two thirsty pigeons, one sizzling balcony, and one very wobbly water bowl...", hi: "दो प्यासे कबूतर, एक तपती बालकनी, और एक डगमग पानी का कटोरा..." },
    moral: { en: "In summer, keep a shallow bowl of fresh water out for birds.", hi: "गर्मियों में पंछियों के लिए एक चौड़े कटोरे में ताज़ा पानी ज़रूर रखो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.55, flip: true }, { id: "pigeon", pose: "stand", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.68 } ], fx: { en: "FLAP!", hi: "फुर्र!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "pigeon", pose: "stand", mood: "sad", x: 0.72, flip: true } ], props: [ { id: "sun", x: 0.88, y: 0.12 } ],
        cap: { en: "A hot, hot afternoon. Even the balcony tiles were sizzling!", hi: "गरम-गरम दोपहर। बालकनी की टाइलें भी तवे जैसी तप रही थीं!" },
        say: [ { who: 1, en: "Gutur-goo... so thirsty... my beak is dry...", hi: "गुटर-गूँ... बहुत प्यास... चोंच सूख गई...", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.25 }, { id: "pigeon", pose: "stand", mood: "sad", x: 0.55, flip: true }, { id: "pigeon", pose: "sit", mood: "sad", x: 0.8, flip: true } ],
        say: [ { who: 1, en: "We flew over the whole city. No water anywhere!", hi: "पूरा शहर उड़ लिए, कहीं एक बूँद पानी नहीं!" },
               { who: 0, en: "No water? I've got a WHOLE bowl! Wait here!", hi: "पानी नहीं? मेरे पास पूरा कटोरा है! यहीं रुको!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.4 } ], props: [ { id: "bowl", x: 0.62 }, { id: "puddle", x: 0.78 } ],
        cap: { en: "Auggie pushed his big bowl outside with his nose... SPLOSH!", hi: "ऑगी नाक से धकेलकर अपना बड़ा कटोरा बाहर लाया... छपाक!" },
        say: [ { who: 0, en: "Oops. Now the FLOOR is having a drink.", hi: "उफ़! अब तो सारा पानी फ़र्श ही पी गया।" } ],
        fx: { en: "SPLOSH!", hi: "छपाक!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "puddle", x: 0.5 } ],
        say: [ { who: 0, en: "Mumma, I spilled it all. And they're SO thirsty.", hi: "मम्मा, सारा पानी गिर गया। और वो बेचारे बहुत प्यासे हैं।" },
               { who: 1, en: "What a kind idea, Auggie! Time for my bird list!", hi: "वाह, क्या प्यारा आइडिया है, ऑगी! अब निकालती हूँ मेरी पंछी वाली लिस्ट!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.5 }, { id: "flower", x: 0.95 } ],
        cap: { en: "Mumma's list: a wide, shallow clay bowl. Fresh water. Keep it in shade.", hi: "मम्मा की लिस्ट: चौड़ा, कम गहरा मिट्टी का कटोरा। ताज़ा पानी। और रखो छाँव में।" },
        say: [ { who: 1, en: "And number four: fresh water EVERY day!", hi: "और नंबर चार — रोज़ ताज़ा पानी!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.25 }, { id: "pigeon", pose: "cheer", mood: "laugh", x: 0.55, flip: true }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.68 } ],
        say: [ { who: 1, en: "Gutur-goo! A drink AND a bath? Thank you, Auggie!", hi: "गुटर-गूँ! पानी भी, नहाना भी? थैंक यू, ऑगी!" },
               { who: 0, en: "Hee-hee! Hey, you're giving ME a bath too!", hi: "ही-ही! अरे, मुझे भी नहला दिया!" } ],
        fx: { en: "FLAP!", hi: "फुर्र!" }, action: true }
    ]
  },

  // 33 — Shh! The peacock is dancing
  {
    id: 33, age: "4-6", category: "birds",
    title: { en: "Shh! The Peacock Is Dancing", hi: "श्श! मोर नाच रहा है" },
    blurb: { en: "Auggie wants to see a peacock dance — but his hello is WAY too loud!", hi: "ऑगी को मोर का नाच देखना है — पर उसका हैलो कुछ ज़्यादा ही ज़ोरदार है!" },
    moral: { en: "Watch wild birds quietly, from far away, and nature will show its magic.", hi: "जंगली पंछियों को दूर से, चुपचाप देखो — कुदरत खुद अपना जादू दिखाएगी।" },
    cover: { bg: "rain", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.28 }, { id: "peacock", pose: "cheer", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "cloud", x: 0.5, y: 0.1 } ], fx: { en: "WOW!", hi: "वाह!" } },
    panels: [
      { bg: "farm", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "cloud", x: 0.5, y: 0.1 }, { id: "umbrella", x: 0.85 } ],
        cap: { en: "Dark clouds rolled over the fields. The first monsoon rain!", hi: "खेतों पर काले-काले बादल छा गए। मानसून की पहली बारिश!" },
        say: [ { who: 1, en: "Fun fact: peacocks dance when the rain comes! Watch closely!", hi: "मज़ेदार बात: बादल आते ही मोर नाचने लगते हैं! ध्यान से देखना!" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "blast", mood: "laugh", x: 0.3 }, { id: "peacock", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "A PEACOCK! WOOF! Hello! Dance for me! WOOF!", hi: "मोर! भौं! हैलो! मेरे लिए नाचो ना! भौं-भौं!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "peacock", pose: "run", mood: "scared", x: 0.75 } ], props: [ { id: "bush", x: 0.92 } ],
        cap: { en: "Neelu the peacock got a fright — and hid behind a bush. Oops.", hi: "नीलू मोर डर गया — और फुर्र से झाड़ी के पीछे छिप गया। उफ़!" } },
      { bg: "rain", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "umbrella", x: 0.72 } ],
        say: [ { who: 0, en: "I only said hello... a very LOUD hello.", hi: "मैंने तो बस हैलो बोला था... ज़रा ज़ोर वाला हैलो।" },
               { who: 1, en: "Shh. Wild birds need quiet and space. Let's wait.", hi: "श्श... जंगली पंछियों को शांति और दूरी चाहिए। चलो, इंतज़ार करें।", kind: "whisper" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.28 }, { id: "peacock", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie waited... and waited. Then Neelu opened his feathers like a giant fan!", hi: "ऑगी ने इंतज़ार किया... और किया। तभी नीलू ने पंख फैलाए, जैसे कोई बड़ा-सा पंखा!" },
        say: [ { who: 0, en: "Whoa... he's wearing a hundred eyes!", hi: "बाप रे... इसके पंखों पर तो सौ आँखें हैं!", kind: "whisper" } ],
        fx: { en: "WOW!", hi: "वाह!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "nanu", pose: "cheer", mood: "laugh", x: 0.5, flip: true }, { id: "peacock", pose: "cheer", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "puddle", x: 0.25 } ],
        say: [ { who: 1, en: "Fun fact: that's the muddiest dance in history! Ha!", hi: "मज़ेदार बात: ये इतिहास का सबसे कीचड़ वाला नाच है! हा-हा!" },
               { who: 2, en: "Ha! Dance with me again next rain, muddy friend!", hi: "हा-हा! अगली बारिश में फिर नाचेंगे, कीचड़ू दोस्त!" } ],
        fx: { en: "SPLAT!", hi: "छप्प!" }, action: true }
    ]
  },

  // 34 — Tipu's puddle pool
  {
    id: 34, age: "4-6", category: "animals",
    title: { en: "Tipu's Private Puddle Pool", hi: "टिप्पू का पोखर-पूल" },
    blurb: { en: "Auggie found the biggest puddle in Chamakpur. Just one problem: someone already lives there!", hi: "ऑगी को चमकपुर का सबसे बड़ा पोखर मिला। बस एक दिक्कत है — उसमें पहले से कोई रहता है!" },
    moral: { en: "Sharing makes play more fun — and be gentle with small creatures.", hi: "मिल-बाँटकर खेलने में ज़्यादा मज़ा है — और छोटे जीवों से प्यार से पेश आओ।" },
    cover: { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "frog", pose: "cheer", mood: "laugh", x: 0.68, flip: true } ], props: [ { id: "puddle", x: 0.5 } ], fx: { en: "SPLASH!", hi: "छपाक!" } },
    panels: [
      { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "puddle", x: 0.5 }, { id: "umbrella", x: 0.78 } ],
        cap: { en: "Monsoon in Chamakpur! Puddles, puddles, everywhere!", hi: "चमकपुर में मानसून! जहाँ देखो, पोखर ही पोखर!" },
        say: [ { who: 0, en: "Papa! The BIGGEST puddle ever! Splash time!", hi: "पापा! सबसे बड़ा पोखर! छपाक टाइम!", kind: "shout" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.3 }, { id: "frog", pose: "blast", mood: "angry", x: 0.72, flip: true } ], props: [ { id: "puddle", x: 0.68 } ],
        say: [ { who: 1, en: "STOP! Croak! This is MY swimming pool!", hi: "रुको! टर्र! ये मेरा स्विमिंग पूल है!", kind: "shout" } ],
        fx: { en: "CROAK!", hi: "टर्र!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3 }, { id: "frog", pose: "stand", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "puddle", x: 0.7 } ],
        say: [ { who: 1, en: "I'm Tipu, best jumper in Chamakpur! Can YOU jump?", hi: "मैं टिप्पू — चमकपुर का सबसे बड़ा कूदू! तुम कूद सकते हो?" },
               { who: 0, en: "Can I jump? Ha! Watch THIS!", hi: "मैं? कूदना? हुँह! अभी देखो!" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "frog", pose: "cheer", mood: "laugh", x: 0.68 } ], props: [ { id: "puddle", x: 0.68 } ],
        cap: { en: "Tipu jumped high, high, HIGH! Auggie jumped... about this much.", hi: "टिप्पू ऊँचा, ऊँचा, बहुत ऊँचा कूदा! ऑगी कूदा... बस इत्ता-सा।" },
        fx: { en: "BOING!", hi: "फुदक!" }, action: true },
      { bg: "rain", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "frog", pose: "stand", mood: "surprised", x: 0.7, flip: true } ], props: [ { id: "puddle", x: 0.5 } ],
        say: [ { who: 0, en: "You win, Tipu. But... can we share? I'll splash softly!", hi: "तुम जीत गए, टिप्पू। पर... मिलकर खेलें? मैं धीरे-धीरे छपाक करूँगा!" },
               { who: 1, en: "Softly? A big dog? ...Okay, let's try!", hi: "धीरे-से? इतना बड़ा कुत्ता? ...चलो, देखते हैं!" } ] },
      { bg: "rain", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "frog", pose: "cheer", mood: "laugh", x: 0.45 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "puddle", x: 0.35 } ],
        say: [ { who: 2, en: "You splashed me! Guess I'm... TOAD-ally wet! Ha!", hi: "मुझे भी भिगो दिया! अब से मुझे बोलो — टर्र-टर्र पापा!" },
               { who: 1, en: "Groan! Best puddle party ever, though!", hi: "हा-हा! सबसे मज़ेदार पोखर पार्टी!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" }, action: true }
    ]
  },

  // 35 — Who lives down the hole?
  {
    id: 35, age: "4-6", category: "animals",
    title: { en: "Who Lives Down the Hole?", hi: "छेद में कौन रहता है?" },
    blurb: { en: "Auggie is SURE there's a bone down that hole. He's very, very wrong!", hi: "ऑगी को पक्का यकीन है कि उस छेद में हड्डी है। पर वो बहुत, बहुत गलत है!" },
    moral: { en: "Every animal's home is special — never dig it up or disturb it.", hi: "हर जानवर का घर उसके लिए खास है — उसे कभी मत छेड़ो।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "rabbit", pose: "stand", mood: "surprised", x: 0.7, flip: true } ], props: [ { id: "bush", x: 0.9 }, { id: "flower", x: 0.1 } ] },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.75, flip: true } ], props: [ { id: "flower", x: 0.9 }, { id: "bush", x: 0.55 } ],
        cap: { en: "Mausi was taking flower selfies. Auggie found a small, round hole.", hi: "मौसी फूलों के साथ सेल्फ़ी ले रही थी। ऑगी को मिला एक छोटा-सा गोल छेद।" },
        say: [ { who: 0, en: "A hole! There MUST be a bone inside!", hi: "छेद! पक्का अंदर कोई हड्डी छिपी है!", kind: "think" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.4 } ], props: [ { id: "bush", x: 0.75 }, { id: "rock", x: 0.15 } ],
        cap: { en: "Dig, dig, DIG! Mud flew everywhere — even onto Mausi's phone!", hi: "खोदो, खोदो, खोदो! मिट्टी हर तरफ़ उड़ी — मौसी के फ़ोन पर भी!" },
        say: [ { who: 0, en: "Hold on, bone! I'm coming!", hi: "रुको हड्डी! मैं आ रहा हूँ!", kind: "shout" } ],
        fx: { en: "DIG-DIG!", hi: "खुद-खुद!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "rabbit", pose: "stand", mood: "angry", x: 0.7, flip: true } ],
        say: [ { who: 1, en: "HEY! I'm Gullu, and you're digging up my HOUSE!", hi: "ऐ! मैं गुल्लू हूँ, और तुम मेरा घर खोद रहे हो!", kind: "shout" } ],
        fx: { en: "POP!", hi: "टप!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "rabbit", pose: "stand", mood: "sad", x: 0.7, flip: true } ],
        say: [ { who: 1, en: "My babies are sleeping in there. Shh!", hi: "अंदर मेरे नन्हे बच्चे सो रहे हैं। श्श!", kind: "whisper" },
               { who: 0, en: "Oh no... I thought your house was a bone shop!", hi: "हाय राम... मुझे लगा ये हड्डियों की दुकान है!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.3 }, { id: "rabbit", pose: "sit", mood: "surprised", x: 0.7, flip: true } ],
        cap: { en: "Auggie gently pushed the mud back with his big nose. Push... pat... pat.", hi: "ऑगी ने अपनी बड़ी नाक से धीरे-धीरे मिट्टी वापस भरी। सर्र... थप... थप।" },
        say: [ { who: 0, en: "Sorry, Gullu. I'll fix it. Very, very softly.", hi: "सॉरी गुल्लू। मैं ठीक कर दूँगा। बहुत, बहुत धीरे से।", kind: "whisper" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.25 }, { id: "rabbit", pose: "cheer", mood: "happy", x: 0.55, flip: true }, { id: "rabbit", pose: "cheer", mood: "laugh", x: 0.8, flip: true, s: 0.6 } ], props: [ { id: "flower", x: 0.95 } ],
        say: [ { who: 2, en: "Thank you, Uncle Auggie! Best guard EVER!", hi: "थैंक यू, ऑगी चाचा! आप सबसे अच्छे चौकीदार हो!" },
               { who: 0, en: "Guard Auggie on duty! ...right after a tiny nap.", hi: "चौकीदार ऑगी ड्यूटी पर! ...बस एक छोटी झपकी के बाद।" } ] }
    ]
  },

  // 36 — Bholu's big elephant shower
  {
    id: 36, age: "4-6", category: "animals",
    title: { en: "Bholu's Big Elephant Shower", hi: "भोलू का हाथी-फव्वारा" },
    blurb: { en: "Auggie can't go into the river... so what does a clever baby elephant do?", hi: "ऑगी नदी में नहीं जा सकता... तो एक चालाक नन्हा हाथी क्या करेगा?" },
    moral: { en: "Wild animals need space and care — visit them only with a ranger.", hi: "जंगली जानवरों को जगह और देखभाल चाहिए — उन्हें रेंजर के साथ ही देखने जाओ।" },
    cover: { bg: "river", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "bholu", pose: "blast", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.05 } ], fx: { en: "SPLOOSH!", hi: "छपाक!" } },
    panels: [
      { bg: "jungle", chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        cap: { en: "The family visited the Chamakpur Elephant Sanctuary.", hi: "पूरा परिवार चमकपुर के हाथी अभयारण्य पहुँचा।" },
        say: [ { who: 2, en: "Mumma's list: stay with the ranger, leash ON!", hi: "मम्मा की लिस्ट: रेंजर के साथ रहना, और ऑगी का पट्टा पक्का!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "bholu", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Hi-hi! I'm Bholu! Just a BABY — one year old!", hi: "हैलो-हैलो! मैं भोलू! अभी तो बस एक साल का हूँ!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "bholu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "A baby?! You're bigger than our CAR!", hi: "बच्चा?! तुम तो हमारी गाड़ी से भी बड़े हो!" },
               { who: 1, en: "Ha ha! Want to play? Jump into the river!", hi: "हा-हा! खेलोगे? आओ, नदी में कूद जाओ!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "bholu", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Auggie wanted to jump in... but he stayed with the ranger.", hi: "ऑगी का मन तो बहुत था... पर वो रेंजर के पास ही रहा।" },
        say: [ { who: 1, en: "Can't come in? Then I'll bring the river to YOU!", hi: "अंदर नहीं आ सकते? तो नदी ही तुम्हारे पास ले आता हूँ!", kind: "shout" } ],
        fx: { en: "SPLOOSH!", hi: "छपाक!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Ha! A free bath — elephant shower, no shampoo!", hi: "वाह! मुफ़्त नहाना — वो भी हाथी वाले फव्वारे से!" },
               { who: 0, en: "Shake-shake-shake! Your turn, Papa!", hi: "झटक-झटक-झटक! लो पापा, आप भी नहा लो!", kind: "shout" } ],
        fx: { en: "SHAKE!", hi: "झटक!" }, action: true },
      { bg: "river", chars: [ { id: "mumma", pose: "wave", mood: "happy", x: 0.2 }, { id: "auggie", pose: "wave", mood: "happy", x: 0.45 }, { id: "bholu", pose: "wave", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "tree", x: 0.95 } ],
        cap: { en: "The ranger said, 'Elephants need space, trees and lots of water.'", hi: "रेंजर ने बताया, 'हाथियों को खुली जगह, पेड़ और ढेर सारा पानी चाहिए।'" },
        say: [ { who: 2, en: "Bye, Auggie! Next time, an even BIGGER splash!", hi: "बाय ऑगी! अगली बार और भी बड़ा छपाका!" } ] }
    ]
  },

  // 37 — Bindu the goat eats everything
  {
    id: 37, age: "4-6", category: "animals",
    title: { en: "Bindu the Goat Eats EVERYTHING!", hi: "बिंदु बकरी सब चट कर गई!" },
    blurb: { en: "Newspaper? Chomp. Scarf? Chomp. But what happens when Bindu finds plastic?", hi: "अखबार? चप! दुपट्टा? चप! पर जब बिंदु को प्लास्टिक मिला, तब क्या हुआ?" },
    moral: { en: "Plastic hurts animals, so always put it in the dustbin.", hi: "प्लास्टिक जानवरों के लिए खतरनाक है — उसे हमेशा कूड़ेदान में डालो।" },
    cover: { bg: "village", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.28 }, { id: "goat", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "dustbin", x: 0.5 } ], fx: { en: "CHOMP!", hi: "चप-चप!" } },
    panels: [
      { bg: "village", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "book", x: 0.6 }, { id: "tree", x: 0.92 } ],
        say: [ { who: 1, en: "Fun fact: dogs nap about twelve hours a day!", hi: "मज़ेदार बात: कुत्ते दिन में करीब बारह घंटे सोते हैं!" },
               { who: 0, en: "Only twelve? Zzz...", hi: "बस बारह? ख़र्र... ख़र्र...", kind: "whisper" } ] },
      { bg: "village", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.2 }, { id: "goat", pose: "stand", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "sit", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "book", x: 0.63 } ],
        say: [ { who: 1, en: "Chomp-chomp! Mmm, today's news is delicious!", hi: "चप-चप! वाह, आज की ख़बर बड़ी स्वादिष्ट है!" },
               { who: 2, en: "Arre! Bindu, that was my SPORTS page!", hi: "अरे-अरे बिंदु! वो तो मेरा खेल वाला पन्ना था!", kind: "shout" } ],
        fx: { en: "CHOMP!", hi: "चप-चप!" }, action: true },
      { bg: "village", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.2 }, { id: "goat", pose: "run", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        cap: { en: "Auggie offered his carrot. Bindu ate it — and Mausi's scarf too!", hi: "ऑगी ने अपनी गाजर दी। बिंदु ने गाजर भी खाई — और मौसी का दुपट्टा भी!" },
        say: [ { who: 2, en: "Bindu! That's my SELFIE scarf!", hi: "बिंदु! वो मेरा सेल्फ़ी वाला दुपट्टा है!", kind: "shout" } ] },
      { bg: "village", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.25 }, { id: "goat", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "bottle", x: 0.52 } ],
        cap: { en: "Auggie's nap was over. Bindu was sniffing a plastic bottle!", hi: "ऑगी की नींद उड़ गई! बिंदु प्लास्टिक की बोतल सूँघ रही थी!" },
        say: [ { who: 0, en: "STOP, Bindu! Plastic will make your tummy SICK!", hi: "रुको, बिंदु! प्लास्टिक से पेट में दर्द होगा!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "village", chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.25 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.55, flip: true }, { id: "goat", pose: "stand", mood: "happy", x: 0.82, flip: true } ], props: [ { id: "dustbin", x: 0.08 } ],
        say: [ { who: 0, en: "Into the dustbin! Fact: plastic lasts hundreds of years!", hi: "चलो, कूड़ेदान में! पता है, प्लास्टिक सैकड़ों साल तक गलता ही नहीं!" },
               { who: 1, en: "Hundreds? That's even longer than my naps!", hi: "सैकड़ों साल? मेरी झपकी से भी लंबा!" } ] },
      { bg: "village", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "goat", pose: "cheer", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "bush", x: 0.9 }, { id: "tree", x: 0.08 } ],
        cap: { en: "Bindu munched fresh green leaves instead. Crunch, crunch!", hi: "फिर बिंदु ने ताज़ी हरी पत्तियाँ खाईं। कुर्र-कुर्र!" },
        say: [ { who: 1, en: "Baa! Thank you, Auggie! Leaves beat newspaper!", hi: "में-में! थैंक यू, ऑगी! पत्तियाँ तो अखबार से कहीं ज़्यादा टेस्टी!" } ] }
    ]
  },

  // 38 — The Diwali without a boom
  {
    id: 38, age: "4-6", category: "festivals",
    title: { en: "The Diwali Without a Boom", hi: "बिना धमाके वाली दिवाली" },
    blurb: { en: "BOOM! Auggie is hiding under the bed — well, most of him. Can Diwali still be fun?", hi: "धड़ाम! ऑगी पलंग के नीचे छिपा है — यानी आधा ऑगी। क्या दिवाली फिर भी मज़ेदार होगी?" },
    moral: { en: "Firecrackers frighten animals — let's light diyas and share love instead.", hi: "पटाखों से जानवर डर जाते हैं — चलो, दीये जलाएँ और प्यार बाँटें।" },
    cover: { bg: "festival", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "diya", x: 0.45 }, { id: "diya", x: 0.55 }, { id: "diya", x: 0.15 }, { id: "diya", x: 0.88 } ], fx: { en: "SHINE!", hi: "जगमग!" } },
    panels: [
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.35 } ], props: [ { id: "clock", x: 0.8 } ],
        cap: { en: "Diwali night. Somewhere far away... BOOM! A cracker!", hi: "दिवाली की रात। कहीं दूर... धड़ाम! एक पटाखा!" },
        say: [ { who: 0, en: "Hide! Under the bed! ...Why is my tail still outside?", hi: "छिपो! पलंग के नीचे! ...पर मेरी पूँछ बाहर क्यों रह गई?", kind: "think" } ],
        fx: { en: "BOOM!", hi: "धड़ाम!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.7, flip: true } ],
        say: [ { who: 1, en: "It's okay, my brave boy. Mumma's right here.", hi: "कोई बात नहीं, मेरा बहादुर बेटा। मम्मा यहीं है।", kind: "whisper" },
               { who: 0, en: "Brave? My tail is shaking like jelly!", hi: "बहादुर? मेरी पूँछ तो जेली जैसी थर-थर काँप रही है!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.2 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.5, flip: true }, { id: "papa", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Mottu, new rule: diyas, lights, rangoli — NO bangs!", hi: "मोटू, नया नियम: दीये, लाइटें, रंगोली — धमाके बिल्कुल नहीं!" },
               { who: 1, en: "Adding it to my list, Mittsy! A quiet Diwali!", hi: "लिस्ट में लिख लिया, मिट्सी! इस बार शांत दिवाली!" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.7, flip: true } ], props: [ { id: "diya", x: 0.45 }, { id: "diya", x: 0.55 }, { id: "diya", x: 0.1 }, { id: "diya", x: 0.9 } ],
        cap: { en: "They lit a hundred tiny diyas. The whole house twinkled!", hi: "सबने सौ नन्हे-नन्हे दीये जलाए। पूरा घर जगमगा उठा!" },
        say: [ { who: 0, en: "So pretty... and SO quiet!", hi: "कितना सुंदर... और कितना शांत!", kind: "whisper" } ],
        fx: { en: "SHINE!", hi: "जगमग!" }, action: true },
      { bg: "citynight", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "moti", pose: "sit", mood: "scared", x: 0.72, flip: true } ], props: [ { id: "diya", x: 0.1 } ],
        say: [ { who: 0, en: "Moti! Come inside. Our Diwali has lights, not BOOMS!", hi: "मोती, अंदर आ जाओ! हमारे घर में रोशनी है, धमाके नहीं!" },
               { who: 1, en: "Really? Can I sit close to you?", hi: "सच में? मैं तुम्हारे पास बैठ जाऊँ?", kind: "whisper" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.2 }, { id: "moti", pose: "lie", mood: "happy", x: 0.48 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "diya", x: 0.34 }, { id: "diya", x: 0.64 } ],
        say: [ { who: 1, en: "Best Diwali ever. Not one single boom!", hi: "अब तक की सबसे बढ़िया दिवाली। एक भी धमाका नहीं!" },
               { who: 2, en: "Happy Diwali, boys! You two are my brightest diyas!", hi: "हैप्पी दिवाली, मेरे शेरो! तुम दोनों ही मेरे सबसे चमकीले दीये हो!" } ] }
    ]
  },

  // 39 — Auggie goes pink for Holi
  {
    id: 39, age: "4-6", category: "festivals",
    title: { en: "Auggie Goes Pink for Holi!", hi: "होली में ऑगी हुआ गुलाबी!" },
    blurb: { en: "Everyone's pink, green and blue — so why can't Auggie play with colours?", hi: "सब गुलाबी, हरे, नीले हो गए — तो ऑगी रंगों से क्यों नहीं खेल सकता?" },
    moral: { en: "Always ask before you colour someone, and keep colours away from pets.", hi: "किसी को रंग लगाने से पहले पूछो — और पालतू जानवरों से रंग दूर रखो।" },
    cover: { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.5 }, { id: "flower", x: 0.12 } ], fx: { en: "WHOOSH!", hi: "फुर्र!" } },
    panels: [
      { bg: "festival", chars: [ { id: "rohan", pose: "cheer", mood: "happy", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "drum", x: 0.95 } ],
        cap: { en: "Holi morning! Plates of soft, dry, safe colours everywhere.", hi: "होली की सुबह! हर तरफ़ मुलायम, सूखे, सुरक्षित रंगों की थालियाँ।" },
        say: [ { who: 2, en: "Holi rule number one: ALWAYS ask before you colour!", hi: "होली का पहला नियम: रंग लगाने से पहले पूछना ज़रूरी!" } ] },
      { bg: "festival", chars: [ { id: "rohan", pose: "stand", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Mausi, pink or green? May I colour your cheek?", hi: "मौसी, गुलाबी या हरा? आपके गाल पर लगा दूँ?" },
               { who: 2, en: "Pink, please! Now hold that pose — Holi selfie!", hi: "गुलाबी, प्लीज़! अब ऐसे ही रुको — होली वाली सेल्फ़ी!" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Me too! Me too! Make me PINK! Ah-ah-ACHOO!", hi: "मुझे भी! मुझे भी! गुलाबी बनाओ! आ-आ-आछीं!", kind: "shout" },
               { who: 1, en: "Oh no! The colour went up your nose!", hi: "हाय राम! रंग तो नाक में घुस गया!" } ],
        fx: { en: "ACHOO!", hi: "आछीं!" }, action: true },
      { bg: "festival", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Colours can sting doggy eyes and noses, my baby.", hi: "बेटा, रंग से कुत्तों की आँखों और नाक में जलन होती है।" },
               { who: 0, en: "Okay, Mumma. No colour. I'll just cheer for everyone!", hi: "ठीक है मम्मा, रंग नहीं। मैं बस पूँछ हिला-हिलाकर चीयर करूँगा!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "blast", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.5 }, { id: "flower", x: 0.58 }, { id: "flower", x: 0.12 } ],
        cap: { en: "Mumma saw that brave, wagging tail — and had an idea. Rose petals!", hi: "मम्मा ने वो बहादुर, हिलती पूँछ देखी — और आइडिया आया। गुलाब की पंखुड़ियाँ!" },
        say: [ { who: 1, en: "Soft, safe and SUPER pink! Ready, Auggie?", hi: "मुलायम, सुरक्षित और एकदम गुलाबी! तैयार, ऑगी?" } ],
        fx: { en: "WHOOSH!", hi: "फुर्र!" }, action: true },
      { bg: "festival", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.15 }, { id: "flower", x: 0.48 } ],
        say: [ { who: 1, en: "Hold that pose! Happy Holi, our PINK Labrador!", hi: "ऐसे ही रुको! हैप्पी होली, हमारे गुलाबी लैब्राडोर!" },
               { who: 0, en: "Best Holi ever — and I smell like roses!", hi: "सबसे बढ़िया होली! और खुशबू भी गुलाब वाली!" } ],
        fx: { en: "FLOOF!", hi: "फुर्र!" }, action: true }
    ]
  },

  // 40 — Bodyguard Auggie's rakhi promise
  {
    id: 40, age: "4-6", category: "festivals",
    title: { en: "Bodyguard Auggie's Rakhi Promise", hi: "बॉडीगार्ड ऑगी का राखी वाला वादा" },
    blurb: { en: "Auggie promises to protect Mausi from EVERYTHING. Even from a glass of water?", hi: "ऑगी ने वादा किया है — मौसी को हर चीज़ से बचाएगा। पानी के गिलास से भी?" },
    moral: { en: "Looking after family means love and care, every single day.", hi: "परिवार का ख्याल रखना मतलब — हर दिन प्यार और परवाह।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "mausi", pose: "sit", mood: "laugh", x: 0.68, flip: true } ], props: [ { id: "gift", x: 0.88 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "gift", x: 0.9 } ],
        say: [ { who: 1, en: "Happy Raksha Bandhan! Auggie, this rakhi is for YOU!", hi: "हैप्पी रक्षाबंधन! ऑगी, ये राखी तुम्हारे लिए है!" },
               { who: 0, en: "For ME? ...Can I eat it?", hi: "मेरे लिए? ...क्या ये खाने वाली है?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.35 }, { id: "mausi", pose: "sit", mood: "laugh", x: 0.68, flip: true } ],
        cap: { en: "Auggie gave his paw. Mausi tied the rakhi soft and loose.", hi: "ऑगी ने पंजा आगे किया। मौसी ने राखी ढीली और मुलायम बाँधी।" },
        say: [ { who: 1, en: "Nice and loose, so your paw stays comfy! Now... selfie!", hi: "ढीली-ढीली, ताकि पंजा आराम से रहे! अब... सेल्फ़ी!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Mausi, I PROMISE to protect you. From EVERYTHING!", hi: "मौसी, मैं वादा करता हूँ — हर चीज़ से आपकी रक्षा करूँगा!", kind: "shout" },
               { who: 1, en: "Aww! My big, furry bodyguard!", hi: "अले ले! मेरा बड़ा, रोएँदार बॉडीगार्ड!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "bottle", x: 0.88 } ],
        say: [ { who: 1, en: "Auggie, you followed me to the FRIDGE? It's just water!", hi: "ऑगी, फ़्रिज तक पीछे-पीछे? अरे, बस पानी ही तो है!" },
               { who: 0, en: "Water can be sneaky, Mausi. I'm checking it.", hi: "पानी भी चालाक हो सकता है, मौसी। मैं चेक करूँगा।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "gift", x: 0.55 } ],
        cap: { en: "Ding-dong! Guard Auggie rushed to the door.", hi: "टिंग-टोंग! पहरेदार ऑगी दरवाज़े पर लपका।" },
        say: [ { who: 1, en: "Easy, guard! It's only Nanu — with sweets!", hi: "अरे-अरे, पहरेदार जी! मैं हूँ, नानू — मिठाई लेकर!" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.2 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.5, flip: true }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "gift", x: 0.65 } ],
        say: [ { who: 2, en: "Sweets for us. A crunchy carrot for the bodyguard!", hi: "मिठाई हमारे लिए। और बॉडीगार्ड के लिए कुरकुरी गाजर!" },
               { who: 1, en: "Best rakhi brother! Now hug duty, not guard duty!", hi: "सबसे अच्छा राखी भाई! अब पहरा नहीं, झप्पी ड्यूटी!" } ],
        fx: { en: "CRUNCH!", hi: "कुर्र!" }, action: true }
    ]
  },

  // 41 — Auggie vs. the makhan matki
  {
    id: 41, age: "4-6", category: "festivals",
    title: { en: "Auggie vs. the Makhan Matki", hi: "ऑगी और ऊँची माखन-मटकी" },
    blurb: { en: "A pot of makhan hangs way up high. Can a very hungry Labrador reach it?", hi: "माखन की मटकी बहुत ऊपर टँगी है। क्या एक भूखा लैब्राडोर वहाँ तक पहुँच पाएगा?" },
    moral: { en: "Share the festival joy, but keep rich festival food away from pets.", hi: "त्योहार की खुशियाँ बाँटो, पर त्योहार के भारी पकवान पालतू से दूर रखो।" },
    cover: { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.3 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "drum", x: 0.9 }, { id: "diya", x: 0.1 } ], fx: { en: "JAI KANHA!", hi: "जय कान्हा!" } },
    panels: [
      { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "diya", x: 0.5 }, { id: "flower", x: 0.1 } ],
        cap: { en: "Janmashtami at Dadi's! Bells, flowers and songs all day.", hi: "दादी के घर जन्माष्टमी! घंटियाँ, फूल और दिन भर भजन।" },
        say: [ { who: 1, en: "It's baby Kanha's birthday! Songs, dancing and makhan!", hi: "जन्माष्टमी मतलब नन्हे कान्हा का जन्मदिन! भजन, नाच और माखन!" } ] },
      { bg: "festival", chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "drum", x: 0.95 } ],
        say: [ { who: 0, en: "Ma, you're a Krishna too! So it's YOUR party too!", hi: "माँ, आप भी तो कृष्णा हो! तो पार्टी आपकी भी हुई!" },
               { who: 2, en: "Ha ha! Then you dance first, Gaurav beta!", hi: "हा-हा! तो सबसे पहले तुम नाचो, गौरव बेटा!" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.35 } ], props: [ { id: "diya", x: 0.8 }, { id: "flower", x: 0.12 } ],
        cap: { en: "Way up high swung a clay matki, full of makhan.", hi: "बहुत ऊपर एक मिट्टी की मटकी झूल रही थी — माखन से भरी।" },
        say: [ { who: 0, en: "Makhan! Soft, creamy makhan! I MUST reach it!", hi: "माखन! चिकना-चिकना माखन! मुझे तो वहाँ पहुँचना ही है!", kind: "think" } ] },
      { bg: "festival", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.45 } ], props: [ { id: "drum", x: 0.9 } ],
        cap: { en: "Boing! Boing! BOING! Auggie's nose didn't even reach the rope.", hi: "उछल! उछल! उछल! ऑगी की नाक रस्सी तक भी नहीं पहुँची।" },
        say: [ { who: 0, en: "Maybe if I nap first, I'll grow taller?", hi: "शायद पहले एक झपकी ले लूँ, तो लंबा हो जाऊँ?", kind: "think" } ],
        fx: { en: "BOING!", hi: "उछाल!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "apple", x: 0.5 } ],
        say: [ { who: 1, en: "Makhan hurts doggy tummies, beta. Guess what's in my pallu?", hi: "माखन से कुत्तों का पेट बिगड़ता है। बताओ, पल्लू में क्या है?" },
               { who: 0, en: "A secret apple! Everybody knows, Dadi!", hi: "सीक्रेट सेब! ये तो सबको पता है, दादी!" } ] },
      { bg: "festival", chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.48 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "apple", x: 0.93 } ],
        cap: { en: "Auggie cheered his loudest. Papa lifted Rohan — TAP! — the matki opened!", hi: "ऑगी ने ज़ोर से चीयर किया, पापा ने रोहन को उठाया — टक! — मटकी फूट गई!" },
        say: [ { who: 2, en: "You get makhan, I get apple! Everybody wins! Jai Kanha!", hi: "माखन तुम्हारा, सेब मेरा — सबकी मौज! जय कान्हा!", kind: "shout" } ],
        fx: { en: "TAP!", hi: "टक!" }, action: true }
    ]
  },

  // 42 — Auggie's first Eidi
  {
    id: 42, age: "4-6", category: "festivals",
    title: { en: "Auggie's First Eidi", hi: "ऑगी की पहली ईदी" },
    blurb: { en: "Something sweet smells SO good at Zoya's house. Can Auggie resist?", hi: "ज़ोया के घर से बड़ी मीठी खुशबू आ रही है। क्या ऑगी खुद को रोक पाएगा?" },
    moral: { en: "Festivals are sweeter with friends — and pets get their own safe treats.", hi: "दोस्तों के साथ त्योहार और मीठे लगते हैं — और पालतू को मिलें उसकी अपनी सुरक्षित चीज़ें।" },
    cover: { bg: "citynight", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "zoya", pose: "wave", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.12 }, { id: "gift", x: 0.52 } ] },
    panels: [
      { bg: "citynight", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "zoya", pose: "point", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.1 } ],
        cap: { en: "Zoya looked up. A thin silver moon smiled in the sky!", hi: "ज़ोया ने ऊपर देखा। आसमान में पतला-सा, चाँदी जैसा चाँद मुस्कुरा रहा था!" },
        say: [ { who: 1, en: "Ammi! Auggie! I spotted it first — the Eid moon!", hi: "अम्मी! ऑगी! सबसे पहले मैंने देखा — ईद का चाँद!", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "mumma", pose: "wave", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.45 }, { id: "zoya", pose: "wave", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Next morning: new clothes, big smiles, and a knock on Zoya's door.", hi: "अगली सुबह: नए कपड़े, बड़ी-बड़ी मुस्कानें, और ज़ोया के दरवाज़े पर खट-खट।" },
        say: [ { who: 2, en: "Eid Mubarak! Come in, come in! Hugs first!", hi: "ईद मुबारक! आइए, आइए! पहले गले मिलो!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "zoya", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Mmm! What's that sweet, milky, MAGIC smell?", hi: "म्म्म! ये मीठी-मीठी, दूध वाली जादुई खुशबू किसकी है?" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "zoya", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Sheer khurma! Milk, sewaiyan, dates and raisins. Yum!", hi: "शीर खुरमा! दूध, सेवइयाँ, खजूर और किशमिश। वाह!" },
               { who: 0, en: "Just one tiny lick? Look at my sad eyes...", hi: "बस एक बार चाट लूँ? मेरी भोली-भोली आँखें तो देखो ना...", kind: "whisper" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.3 }, { id: "zoya", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Sorry, Auggie! Sugar and raisins are bad for dogs.", hi: "सॉरी ऑगी! चीनी और किशमिश कुत्तों के लिए बिल्कुल ठीक नहीं।" },
               { who: 0, en: "Okay... I'll be good. I won't even LOOK at it.", hi: "ठीक है... मैं अच्छा बच्चा हूँ। उधर देखूँगा भी नहीं!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zoya", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.48 }, { id: "apple", x: 0.56 } ],
        cap: { en: "For being so good, Auggie got Eidi — a new ball and an apple!", hi: "इतना अच्छा बच्चा बनने पर ऑगी को मिली ईदी — नई गेंद और एक सेब!" },
        say: [ { who: 0, en: "Eid Mubarak, Zoya! Best Eidi EVER! Hug?", hi: "ईद मुबारक, ज़ोया! सबसे बढ़िया ईदी! झप्पी?" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true }
    ]
  },

  // 43 — Auggie's tail and the Christmas star
  {
    id: 43, age: "4-6", category: "festivals",
    title: { en: "Auggie's Tail and the Christmas Star", hi: "ऑगी की पूँछ और क्रिसमस का तारा" },
    blurb: { en: "Anaya made a golden star for her tree. Auggie's tail had OTHER plans...", hi: "अनाया ने अपने पेड़ के लिए सुनहरा तारा बनाया। पर ऑगी की पूँछ के इरादे कुछ और थे..." },
    moral: { en: "When you make a mistake, say sorry — and help fix it.", hi: "गलती हो जाए तो सॉरी बोलो — और उसे ठीक करने में मदद करो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.62, flip: true } ], props: [ { id: "tree", x: 0.88 }, { id: "star", x: 0.88, y: 0.12 }, { id: "gift", x: 0.75 } ], fx: { en: "TWINKLE!", hi: "टिमटिम!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "anaya", pose: "stand", mood: "happy", x: 0.6, flip: true } ], props: [ { id: "tree", x: 0.88 }, { id: "gift", x: 0.78 } ],
        cap: { en: "Christmas Eve! Anaya hung bells and bows on her little tree.", hi: "क्रिसमस से पहले की शाम! अनाया ने अपने छोटे-से पेड़ पर घंटियाँ और रिबन लगाए।" },
        say: [ { who: 1, en: "It's perfect... except it needs a star on top!", hi: "एकदम बढ़िया... बस ऊपर एक तारा चाहिए!" } ] },
      { bg: "home", chars: [ { id: "anaya", pose: "sit", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.7, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.5 }, { id: "book", x: 0.15 } ],
        cap: { en: "Anaya painted a golden paper star. Glitter everywhere!", hi: "अनाया ने कागज़ का सुनहरा तारा बनाया। हर तरफ़ चमकी ही चमकी!" },
        say: [ { who: 1, en: "Wow! It's even shinier than my food bowl!", hi: "वाह! ये तो मेरे खाने के कटोरे से भी ज़्यादा चमक रहा है!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.35 }, { id: "anaya", pose: "stand", mood: "surprised", x: 0.75, flip: true } ], props: [ { id: "star", x: 0.1, y: 0.7 } ],
        cap: { en: "Auggie's happy tail went WAG-WAG-SWISH! The star flew under the sofa!", hi: "ऑगी की खुश पूँछ चली — हिल-हिल-सर्र! तारा उड़कर सीधा सोफ़े के नीचे!" },
        fx: { en: "SWISH!", hi: "सर्र!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35 }, { id: "anaya", pose: "sit", mood: "sad", x: 0.78, flip: true } ],
        say: [ { who: 1, en: "My star! I painted it ALL afternoon...", hi: "मेरा तारा! पूरी दोपहर लगाकर बनाया था..." },
               { who: 0, en: "My silly tail did it. Sorry! I'll get it back!", hi: "मेरी बुद्धू पूँछ की गलती है। सॉरी! मैं वापस लाऊँगा!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.45, y: 0.55 } ],
        cap: { en: "Only his nose fit under the sofa. Wiggle... wiggle... got it!", hi: "सोफ़े के नीचे बस उसकी नाक ही घुस पाई। सरको... सरको... मिल गया!" },
        say: [ { who: 1, en: "So gentle! Not even one tooth mark!", hi: "कितने प्यार से लाए! एक भी दाँत का निशान नहीं!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.48 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.92 }, { id: "star", x: 0.92, y: 0.12 } ],
        cap: { en: "Up went Anaya on Papa's shoulders — and up went the star!", hi: "अनाया चढ़ी पापा के कंधों पर — और तारा पहुँचा सबसे ऊपर!" },
        say: [ { who: 0, en: "Merry Christmas! ...Tail, you stay VERY still now!", hi: "मेरी क्रिसमस! ...ऐ पूँछ, अब बिल्कुल मत हिलना!", kind: "shout" } ],
        fx: { en: "TWINKLE!", hi: "टिमटिम!" }, action: true }
    ]
  },

  // 44 — Kite day, the bird-safe way
  {
    id: 44, age: "4-6", category: "festivals",
    title: { en: "Kite Day? Birds Go First!", hi: "पतंग उड़ाओ, पंछी बचाओ!" },
    blurb: { en: "Auggie's kite is winning the sky — until a flock of pigeons flies in!", hi: "ऑगी की पतंग आसमान जीत रही है — तभी कबूतरों का झुंड आ जाता है!" },
    moral: { en: "Use plain thread for kites, and always give the birds the right of way.", hi: "पतंग के लिए सादा धागा लो, और आसमान में पहला हक़ पंछियों का।" },
    cover: { bg: "sky", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.55, y: 0.2 }, { id: "kite", x: 0.85, y: 0.12 }, { id: "sun", x: 0.12, y: 0.12 } ], fx: { en: "WHOOSH!", hi: "सर्र!" } },
    panels: [
      { bg: "park", chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.3 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.7, flip: true } ], props: [ { id: "kite", x: 0.5, y: 0.18 }, { id: "kite", x: 0.82, y: 0.12 }, { id: "sun", x: 0.1, y: 0.1 } ],
        cap: { en: "Makar Sankranti! Red, yellow and green kites filled the sky.", hi: "मकर संक्रांति! आसमान में लाल, पीली, हरी पतंगें ही पतंगें!" },
        say: [ { who: 0, en: "Fun fact: our string is plain cotton. No sharp manjha!", hi: "मज़ेदार बात: हमारा धागा सादा सूती है। तेज़ माँझा बिल्कुल नहीं!" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "determined", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.6, y: 0.15 } ],
        say: [ { who: 0, en: "No sharp manjha? But Nanu, how will we WIN?", hi: "तेज़ माँझा नहीं? तो फिर जीतेंगे कैसे, नानू?" },
               { who: 1, en: "Sharp manjha can cut birds' wings. Kindness wins first!", hi: "तेज़ माँझे से पंछियों के पंख कट जाते हैं। पहले दया, फिर जीत!" } ] },
      { bg: "park", chars: [ { id: "nanu", pose: "blast", mood: "happy", x: 0.2 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "kite", x: 0.55, y: 0.1 } ],
        cap: { en: "Up, up, UP went the red kite! Auggie chased its shadow round and round.", hi: "ऊपर, ऊपर, और ऊपर गई लाल पतंग! ऑगी उसकी परछाईं के पीछे गोल-गोल घूमा।" },
        say: [ { who: 2, en: "Higher, Daddy! Auggie, hold that pose — selfie!", hi: "और ऊपर, डैडी! ऑगी, ऐसे ही रुको — सेल्फ़ी!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सर्र!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.25 }, { id: "pigeon", pose: "stand", mood: "scared", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.6, y: 0.15 } ],
        cap: { en: "Then a flock of pigeons flew straight toward the kite string!", hi: "तभी कबूतरों का झुंड सीधा पतंग के धागे की तरफ़ उड़ा!" },
        say: [ { who: 0, en: "Nanu! Birds! Forget winning — bring the kite DOWN!", hi: "नानू! पंछी! जीत-वीत छोड़ो — पतंग नीचे उतारो!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "kite", x: 0.55, y: 0.55 } ],
        cap: { en: "Nanu reeled the kite down, slowly and safely.", hi: "नानू ने धीरे-धीरे, सँभालकर पतंग नीचे उतारी।" },
        say: [ { who: 1, en: "Sharp eyes, kind heart! Birds first, kites later — always.", hi: "तेज़ नज़र, बड़ा दिल! पहले पंछी, पतंग बाद में — हमेशा।" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "mausi", pose: "wave", mood: "happy", x: 0.5 }, { id: "pigeon", pose: "cheer", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "sun", x: 0.9, y: 0.1 } ],
        cap: { en: "The birds flew home safe. Til-gud for everyone, a carrot for Auggie!", hi: "पंछी सुरक्षित घर लौटे। सबके लिए तिल-गुड़, ऑगी के लिए गाजर!" },
        say: [ { who: 2, en: "Gutur-goo! Thank you, kindest kite team in Chamakpur!", hi: "गुटर-गूँ! थैंक यू, चमकपुर की सबसे प्यारी पतंग टीम!" } ] }
    ]
  }

);
