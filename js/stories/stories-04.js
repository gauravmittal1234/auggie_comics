window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(
  {
    id: 67,
    age: "6-10",
    category: "superhero",
    title: { en: "The Day Super Auggie Was Born", hi: "जिस दिन सुपर ऑगी बना" },
    blurb: { en: "Little Kabir is lost in the giant Chamakpur mela, and only one big golden nose can find him.", hi: "चमकपुर के बड़े मेले में नन्हा कबीर खो गया, और उसे ढूँढ सकती है सिर्फ़ एक बड़ी सुनहरी नाक!" },
    moral: { en: "Real heroes use their special gifts to help others.", hi: "असली हीरो अपनी ख़ास ताक़त दूसरों की मदद में लगाते हैं।" },
    cover: {
      bg: "action",
      chars: [ { id: "auggie", pose: "fly", mood: "happy", x: 0.42, cape: true }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
      props: [ { id: "star", x: 0.12, y: 0.2 }, { id: "balloon", x: 0.9, y: 0.25 } ],
      fx: { en: "WOOF!", hi: "भौं-भौं!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.55, flip: true }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "balloon", x: 0.1, y: 0.25 } ],
        cap: { en: "The Chamakpur Mela! Giant wheels, jalebis, balloons, and a crowd as big as the sea.", hi: "चमकपुर का मेला! बड़े-बड़े झूले, जलेबियाँ, गुब्बारे, और समंदर जितनी भीड़!" },
        say: [
          { who: 0, en: "Popcorn! Jalebi! Candyfloss! My nose is having a party!", hi: "पॉपकॉर्न! जलेबी! बुढ़िया के बाल! मेरी नाक की तो पार्टी हो गई!" },
          { who: 1, en: "Stay close on your leash, Auggie. The crowd is huge today!", hi: "पट्टे के साथ पास रहना, ऑगी। आज भीड़ बहुत है!" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.3 }, { id: "rohan", pose: "run", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "balloon", x: 0.5, y: 0.2 } ],
        cap: { en: "Suddenly, a worried shout rises above the music...", hi: "अचानक, गाने-बाजे के बीच एक घबराई हुई आवाज़ गूँजी..." },
        say: [ { who: 1, en: "Gaurav Uncle! Kabir let go of my hand. Now I can't find him anywhere!", hi: "गौरव अंकल! कबीर ने मेरा हाथ छोड़ दिया। अब वो कहीं नहीं दिख रहा!", kind: "shout" } ]
      },
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.25 }, { id: "papa", pose: "stand", mood: "scared", x: 0.55, flip: true }, { id: "mumma", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        say: [
          { who: 2, en: "Mittsy, there are thousands of people here! How will we find him?", hi: "मिट्सी, यहाँ तो हज़ारों लोग हैं! हम उसे कैसे ढूँढेंगे?" },
          { who: 0, en: "Leave it to me! Kabir always smells of mango candy and crayons.", hi: "मुझ पर छोड़ दो! कबीर से हमेशा आम वाली टॉफ़ी और क्रेयॉन की खुशबू आती है।" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.5 } ],
        cap: { en: "Auggie's nose switches to TURBO. Past the jalebi stall, past the bangles, past the giant wheel...", hi: "ऑगी की नाक टर्बो मोड में! जलेबी की दुकान के पार, चूड़ियों के पार, बड़े झूले के पार..." },
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.32 }, { id: "kabir", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "balloon", x: 0.9, y: 0.25 } ],
        cap: { en: "Meanwhile, behind the toy stall, a tiny boy sits all alone...", hi: "उधर, खिलौनों की दुकान के पीछे, एक नन्हा बच्चा अकेला बैठा था..." },
        say: [
          { who: 1, en: "Auggie! I followed a red balloon, and then every path looked the same.", hi: "ऑगी! मैं लाल गुब्बारे के पीछे गया, फिर सारे रास्ते एक जैसे लगने लगे।" },
          { who: 0, en: "Found you, little buddy! Hold my collar. We'll go back together.", hi: "मिल गए, छोटे दोस्त! मेरा पट्टा पकड़ो। हम साथ में वापस चलेंगे।" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "kabir", pose: "stand", mood: "happy", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "The whole mela claps as Auggie leads Kabir back, tail waving like a flag!", hi: "ऑगी कबीर को वापस लाया, पूँछ झंडे जैसी लहराती हुई, और पूरा मेला तालियाँ बजाने लगा!" },
        say: [ { who: 2, en: "My clever, brave boy! You found him in five minutes flat!", hi: "मेरा होशियार, बहादुर बच्चा! सिर्फ़ पाँच मिनट में ढूँढ लिया!", kind: "shout" } ],
        fx: { en: "HOORAY!", hi: "वाह!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.33, cape: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.7, flip: true } ],
        cap: { en: "That evening, Mumma opens a secret bundle: a red cape with a shining golden paw badge.", hi: "उस शाम मम्मा ने एक सीक्रेट पोटली खोली: लाल केप, जिस पर चमकता सुनहरा पंजा बना था।" },
        say: [
          { who: 1, en: "I stitched this for a special day. Today, you became a hero!", hi: "ये मैंने किसी ख़ास दिन के लिए सिली थी। आज तुम हीरो बन गए!" },
          { who: 0, en: "A cape? For me? Mumma, I feel ten feet tall!", hi: "केप? मेरे लिए? मम्मा, मैं तो दस फ़ुट लंबा महसूस कर रहा हूँ!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "happy", x: 0.5, cape: true } ],
        props: [ { id: "star", x: 0.18, y: 0.2 }, { id: "star", x: 0.82, y: 0.3 } ],
        cap: { en: "And so, Chamakpur got its brand-new hero... SUPER AUGGIE!", hi: "और इस तरह चमकपुर को मिला अपना नया हीरो... सुपर ऑगी!" },
        say: [ { who: 0, en: "Woof-woof, let's go!", hi: "भौं-भौं, चलो चलें!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      }
    ]
  },
  {
    id: 68,
    age: "6-10",
    category: "mystery",
    title: { en: "Detective Auggie and the Missing Laddoos", hi: "जासूस ऑगी और ग़ायब लड्डू" },
    blurb: { en: "Dadi's Diwali laddoos vanish, everyone suspects the hungry Labrador, and Auggie must sniff out the real thief.", hi: "दादी के दिवाली वाले लड्डू ग़ायब! सबको भूखे ऑगी पर शक है, अब ऑगी को असली चोर ढूँढना होगा।" },
    moral: { en: "Never blame someone without proof. Find the truth first.", hi: "बिना सबूत किसी पर इल्ज़ाम मत लगाओ। पहले सच ढूँढो।" },
    cover: {
      bg: "kitchen",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.38, cape: true }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.76, flip: true } ],
      props: [ { id: "bowl", x: 0.12 } ],
      fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }
    },
    panels: [
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Diwali morning. Dadi has made a big plate of golden besan laddoos.", hi: "दिवाली की सुबह। दादी ने बेसन के सुनहरे लड्डुओं की पूरी थाली बनाई है।" },
        say: [
          { who: 1, en: "These are for the puja, Auggie. And laddoos are NOT for doggies!", hi: "ये पूजा के लिए हैं, ऑगी। और लड्डू कुत्तों के लिए बिल्कुल नहीं!" },
          { who: 0, en: "I know, Dadi. Sugar and ghee give dogs a sore tummy.", hi: "पता है, दादी। चीनी और घी से कुत्तों का पेट ख़राब होता है।" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "One hour later...", hi: "एक घंटे बाद..." },
        say: [ { who: 1, en: "Hai Ram! The laddoo plate is EMPTY! Only crumbs are left!", hi: "हे राम! लड्डू की थाली ख़ाली! सिर्फ़ चूरा बचा है!", kind: "shout" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "papa", pose: "point", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.12 } ],
        say: [
          { who: 1, en: "Auggie... there are crumbs right next to your bed, buddy.", hi: "ऑगी... तुम्हारे बिस्तर के पास ही चूरा पड़ा है, दोस्त।" },
          { who: 0, en: "It wasn't me, Papa! I promise on my favourite carrot!", hi: "मैंने नहीं खाए, पापा! मेरी सबसे प्यारी गाजर की क़सम!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.33, cape: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "I believe you, Auggie. Detective Super Auggie, find the real laddoo thief!", hi: "मुझे तुम पर भरोसा है, ऑगी। जासूस सुपर ऑगी, असली लड्डू-चोर को ढूँढो!" },
          { who: 0, en: "Woof-woof, let's go! These crumbs will tell the whole story.", hi: "भौं-भौं, चलो चलें! ये चूरा ही सारी कहानी बताएगा।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4, cape: true } ],
        props: [ { id: "tree", x: 0.85 }, { id: "flower", x: 0.1 } ],
        cap: { en: "The Super Sniffer follows the crumbs: out the window, over the wall, up to the mango tree...", hi: "सुपर नाक चूरे के पीछे चली: खिड़की से बाहर, दीवार के ऊपर, आम के पेड़ तक..." },
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "monkey", pose: "sit", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.82 } ],
        cap: { en: "Meanwhile, high in the mango tree, someone is licking very sticky fingers...", hi: "उधर, आम के पेड़ पर कोई अपनी चिपचिपी उँगलियाँ चाट रहा था..." },
        say: [
          { who: 0, en: "Bablu Bandar! Those are Dadi's puja laddoos!", hi: "बबलू बंदर! वो दादी के पूजा वाले लड्डू हैं!", kind: "shout" },
          { who: 1, en: "Uh-oh! Caught by a dog in a cape!", hi: "अरे बाप रे! केप वाले कुत्ते ने पकड़ लिया!" }
        ],
        fx: { en: "CAUGHT!", hi: "पकड़ा!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "monkey", pose: "sit", mood: "sad", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.47, cape: true }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "banana", x: 0.92 } ],
        say: [
          { who: 0, en: "Sorry, Dadi! I hid them for a monkey party. Here, take them back!", hi: "सॉरी, दादी! मैंने मंकी-पार्टी के लिए छुपाए थे। लो, वापस ले लो!" },
          { who: 2, en: "Next time, just ask, Bablu! Take these bananas for your party.", hi: "अगली बार पूछ लेना, बबलू! ये केले ले जाओ अपनी पार्टी के लिए।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.33, cape: true }, { id: "papa", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.52 } ],
        cap: { en: "That evening, everyone says sorry, and Dadi brings Auggie his very own treat: crunchy apple slices!", hi: "शाम को सबने ऑगी से सॉरी कहा, और दादी लाईं ऑगी की अपनी दावत: कुरकुरे सेब के टुकड़े!" },
        say: [ { who: 1, en: "Sorry I doubted you, Detective. You're the best nose in Chamakpur!", hi: "सॉरी जासूस जी, मैंने तुम पर शक किया। तुम चमकपुर की सबसे बढ़िया नाक हो!" } ]
      }
    ]
  },
  {
    id: 69,
    age: "6-10",
    category: "mystery",
    title: { en: "The Mystery of Nanu's Missing Glasses", hi: "नानू के ग़ायब चश्मे का रहस्य" },
    blurb: { en: "Nanu can't read his star book without his glasses, so Detective Auggie sniffs the whole house for clues.", hi: "चश्मे के बिना नानू अपनी तारों वाली किताब नहीं पढ़ पा रहे, तो जासूस ऑगी पूरे घर में सुराग सूँघने निकला।" },
    moral: { en: "When something is lost, stay calm and check step by step.", hi: "कुछ खो जाए तो घबराओ मत, आराम से एक-एक जगह देखो।" },
    cover: {
      bg: "home",
      chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.35, cape: true }, { id: "nanu", pose: "think", mood: "surprised", x: 0.74, flip: true } ],
      props: [ { id: "book", x: 0.12 } ]
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.52 } ],
        cap: { en: "Sunday morning. Nanu sits down with his favourite book about the stars.", hi: "रविवार की सुबह। नानू तारों वाली अपनी पसंदीदा किताब लेकर बैठे।" },
        say: [ { who: 1, en: "Oh dear! Where are my glasses? Without them, every word looks like a bee!", hi: "अरे! मेरा चश्मा कहाँ गया? उसके बिना हर शब्द मधुमक्खी जैसा दिखता है!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "nanu", pose: "think", mood: "sad", x: 0.3 }, { id: "mumma", pose: "run", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Daddy, don't worry! I'll check the drawers, the sofa, even the fridge!", hi: "डैडी, फ़िकर मत करो! मैं दराज़, सोफ़ा, फ्रिज तक सब देख लूँगी!" },
          { who: 0, en: "I went to so many places this morning, beta. They could be anywhere!", hi: "आज सुबह मैं कितनी जगह गया, बेटा। चश्मा कहीं भी हो सकता है!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.33, cape: true }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Nanu, your glasses smell of your sandalwood soap. My Super Sniffer can follow that!", hi: "नानू, आपके चश्मे से चंदन वाले साबुन की खुशबू आती है। मेरी सुपर नाक उसे पकड़ लेगी!" },
          { who: 1, en: "Splendid! Did you know a dog's nose is thousands of times stronger than ours?", hi: "शाबाश! पता है, कुत्ते की नाक हमसे हज़ारों गुना तेज़ होती है?" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.45, cape: true } ],
        props: [ { id: "sapling", x: 0.85 }, { id: "flower", x: 0.12 } ],
        cap: { en: "Clue one: the kitchen, where Nanu made tea. Clue two: the garden, where he watered the tulsi.", hi: "पहला सुराग: रसोई, जहाँ नानू ने चाय बनाई। दूसरा सुराग: बगीचा, जहाँ उन्होंने तुलसी को पानी दिया।" },
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.4, cape: true } ],
        props: [ { id: "tree", x: 0.85 }, { id: "bush", x: 0.1 } ],
        cap: { en: "Clue three: the park bench from the morning walk... But the trail goes round in a circle!", hi: "तीसरा सुराग: सुबह की सैर वाली पार्क की बेंच... पर ये निशान तो गोल-गोल घूम रहा है!" },
        say: [ { who: 0, en: "Strange... every path leads back home. Back to... NANU?", hi: "अजीब बात है... हर रास्ता घर लौट आता है। वापस... नानू के पास?", kind: "think" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Meanwhile, back in the living room, Super Auggie looks up... and up... and UP!", hi: "उधर, वापस बैठक में, सुपर ऑगी ने ऊपर देखा... और ऊपर... और ऊपर!" },
        say: [ { who: 0, en: "Nanu! Your glasses are sitting right on top of your head!", hi: "नानू! आपका चश्मा तो आपके सिर पर ही रखा है!", kind: "shout" } ],
        fx: { en: "FOUND IT!", hi: "मिल गया!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.22, cape: true }, { id: "nanu", pose: "cheer", mood: "laugh", x: 0.52, flip: true }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [
          { who: 1, en: "Ha ha! I pushed them up while watering the tulsi. What a forgetful scientist!", hi: "हा हा! तुलसी को पानी देते वक़्त ऊपर खिसका दिया था। कैसा भुलक्कड़ वैज्ञानिक हूँ!" },
          { who: 2, en: "Daddy, you're the cutest scientist in all of Chamakpur!", hi: "डैडी, आप पूरे चमकपुर के सबसे प्यारे वैज्ञानिक हो!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3, cape: true }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.55 } ],
        cap: { en: "Now Nanu has a new rule: glasses go on the nose, and a clever nose goes on his lap!", hi: "अब नानू का नया नियम: चश्मा नाक पर, और होशियार नाक उनकी गोद में!" },
        say: [
          { who: 1, en: "Thank you, Detective Auggie. Case closed!", hi: "शुक्रिया, जासूस ऑगी। केस बंद!" },
          { who: 0, en: "Case closed! Now... belly rub time?", hi: "केस बंद! अब... पेट सहलाने का टाइम?" }
        ]
      }
    ]
  },
  {
    id: 70,
    age: "6-10",
    category: "mystery",
    title: { en: "The Case of Dadi's Lost Bangle", hi: "दादी के खोए कंगन का केस" },
    blurb: { en: "Dadi's favourite bangle vanishes in the garden, and Super Auggie's nose and ears must team up to find it.", hi: "दादी का पसंदीदा कंगन बगीचे में खो गया, और सुपर ऑगी की नाक और कानों को मिलकर उसे ढूँढना है।" },
    moral: { en: "Asking kindly works better than shouting or grabbing.", hi: "छीनने या चिल्लाने से ज़्यादा, प्यार से माँगना काम आता है।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.35, cape: true }, { id: "dadi", pose: "stand", mood: "happy", x: 0.76, flip: true } ],
      props: [ { id: "tree", x: 0.1 }, { id: "flower", x: 0.55 } ]
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.22 }, { id: "pigeon", pose: "stand", mood: "happy", x: 0.48 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "tree", x: 0.95 } ],
        cap: { en: "Every morning, Dadi feeds grains to the birds and squirrels in the garden.", hi: "हर सुबह दादी बगीचे में चिड़ियों और गिलहरियों को दाना डालती हैं।" },
        say: [ { who: 2, en: "Come, come, little ones! Breakfast is ready!", hi: "आओ, आओ, छोटे-छोटे दोस्तो! नाश्ता तैयार है!" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3, cape: true }, { id: "dadi", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Oh no! My gold bangle! It was on my wrist just a moment ago!", hi: "अरे नहीं! मेरा सोने का कंगन! अभी तो कलाई में था!" },
          { who: 0, en: "Don't worry, Dadi. Super Auggie is on the case!", hi: "फ़िकर मत करो, दादी। सुपर ऑगी इस केस पर है!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.45, cape: true } ],
        props: [ { id: "flower", x: 0.12 }, { id: "bush", x: 0.85 } ],
        cap: { en: "The Super Sniffer searches under the tulsi, behind the pots, even inside Papa's gardening shoes...", hi: "सुपर नाक ने सब छाना: तुलसी के नीचे, गमलों के पीछे, पापा के बागवानी वाले जूतों के अंदर तक..." },
        say: [ { who: 0, en: "The smell stops at the neem tree. Bangles can't climb trees... can they?", hi: "खुशबू नीम के पेड़ पर ख़त्म हो जाती है। कंगन पेड़ पर तो नहीं चढ़ सकते... है ना?", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.32, cape: true } ],
        props: [ { id: "tree", x: 0.75 } ],
        cap: { en: "Then Super Ears pick up a tiny sound, high up in the branches...", hi: "तभी सुपर कानों ने ऊपर डालियों में एक बारीक-सी आवाज़ सुनी..." },
        fx: { en: "JINGLE!", hi: "छन-छन!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3, cape: true }, { id: "squirrel", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.82 } ],
        cap: { en: "Meanwhile, in a cosy hole in the neem tree, Chinki the squirrel is showing off...", hi: "उधर, नीम के पेड़ के एक आरामदायक खोखले में, चिंकी गिलहरी शान दिखा रही थी..." },
        say: [ { who: 1, en: "Look, babies! I found a shiny golden hula-hoop!", hi: "देखो बच्चो! मुझे चमचमाता सुनहरा हूला-हूप मिला!" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.3, cape: true }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "Super Auggie could do his mighty WOOF... but that would scare the baby squirrels.", hi: "सुपर ऑगी ज़ोरदार भौंक लगा सकता था... पर इससे नन्ही गिलहरियाँ डर जातीं।" },
        say: [
          { who: 0, en: "A hero is gentle. Let's try the kind way.", hi: "हीरो नरम दिल होता है। प्यार वाला तरीका आज़माते हैं।", kind: "think" },
          { who: 1, en: "Here, Auggie. Take this bowl of peanuts for Chinki.", hi: "ये लो, ऑगी। चिंकी के लिए मूँगफली का कटोरा ले जाओ।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3, cape: true }, { id: "squirrel", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.5 }, { id: "tree", x: 0.85 } ],
        say: [
          { who: 0, en: "Chinki, that's Dadi's bangle. Would you swap it for yummy peanuts?", hi: "चिंकी, वो दादी का कंगन है। बदले में मज़ेदार मूँगफली लोगी?" },
          { who: 1, en: "Peanuts?! Deal! Sorry, I didn't know it belonged to someone.", hi: "मूँगफली?! पक्का! सॉरी, मुझे पता नहीं था ये किसी का है।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.52 } ],
        cap: { en: "The bangle is back on Dadi's wrist, jingling happily!", hi: "कंगन वापस दादी की कलाई में, ख़ुशी से छन-छन करता हुआ!" },
        say: [ { who: 1, en: "My Super Auggie! Here's an apple slice for my hero!", hi: "मेरा सुपर ऑगी! ये लो सेब का टुकड़ा, मेरे हीरो के लिए!" } ],
        fx: { en: "HOORAY!", hi: "वाह!" },
        action: true
      }
    ]
  },
  {
    id: 71,
    age: "6-10",
    category: "mystery",
    title: { en: "Who Took Rohan's Lucky Ball?", hi: "रोहन की लकी गेंद किसने ली?" },
    blurb: { en: "Minutes before the big gully match, Rohan's lucky red ball disappears, and every dog on the street is a suspect!", hi: "गली के बड़े मैच से ठीक पहले रोहन की लकी लाल गेंद ग़ायब, और गली का हर कुत्ता शक के घेरे में!" },
    moral: { en: "Make room for everyone, and nobody will feel left out.", hi: "सबको साथ खिलाओ, तो कोई अकेला महसूस नहीं करेगा।" },
    cover: {
      bg: "playground",
      chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.35, cape: true }, { id: "rohan", pose: "stand", mood: "surprised", x: 0.75, flip: true } ],
      props: [ { id: "ball", x: 0.12 } ]
    },
    panels: [
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "rohan", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "Saturday. The big gully cricket match starts in ten minutes...", hi: "शनिवार। गली का बड़ा क्रिकेट मैच दस मिनट में शुरू होने वाला है..." },
        say: [ { who: 1, en: "My lucky red ball is gone! No ball, no match!", hi: "मेरी लकी लाल गेंद ग़ायब है! गेंद नहीं, तो मैच नहीं!", kind: "shout" } ]
      },
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "stand", mood: "surprised", x: 0.22 }, { id: "pinku", pose: "stand", mood: "angry", x: 0.5 }, { id: "moti", pose: "stand", mood: "sleepy", x: 0.78, flip: true } ],
        cap: { en: "Auggie lines up the suspects: Chiku loves balls, Pinku loves attention, and Moti loves adventures.", hi: "ऑगी ने शक वालों को लाइन में खड़ा किया: चीकू को गेंद पसंद, पिंकू को ध्यान, मोती को एडवेंचर।" },
        say: [
          { who: 1, en: "Me? Steal? Hmph! I am far too fabulous for that!", hi: "मैं? चोरी? हुँह! मेरे जैसा शानदार पग ऐसा काम करेगा?" },
          { who: 2, en: "I was napping under the bus stop, bhai. Ask the pigeons!", hi: "मैं तो बस-स्टॉप के नीचे सो रहा था, भाई। कबूतरों से पूछ लो!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "Super Auggie sniffs the spot where the ball was kept. Leather... grass... and... MANGO CANDY!", hi: "सुपर ऑगी ने वो जगह सूँघी जहाँ गेंद रखी थी। चमड़ा... घास... और... आम वाली टॉफ़ी!" },
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.33, cape: true }, { id: "rohan", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Mango candy? I know only one friend who smells like that...", hi: "आम वाली टॉफ़ी? ऐसी खुशबू तो बस एक ही दोस्त से आती है..." },
          { who: 1, en: "Little Kabir? But he never even plays with us!", hi: "छोटा कबीर? पर वो तो कभी हमारे साथ खेलता ही नहीं!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3, cape: true }, { id: "kabir", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.58 }, { id: "flower", x: 0.92 } ],
        cap: { en: "Meanwhile, behind the big flower pots, someone small is hugging a red ball...", hi: "उधर, बड़े गमलों के पीछे, कोई छोटा-सा एक लाल गेंद को सीने से लगाए बैठा था..." },
        say: [ { who: 1, en: "Sorry, Auggie. I'm too small for cricket, so nobody ever picks me.", hi: "सॉरी, ऑगी। मैं क्रिकेट के लिए छोटा हूँ, इसलिए कोई मुझे टीम में नहीं लेता।", kind: "whisper" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3, cape: true }, { id: "kabir", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.58 } ],
        say: [
          { who: 1, en: "I thought if there's no ball, maybe everyone will play hide-and-seek with me.", hi: "मैंने सोचा, गेंद नहीं होगी तो शायद सब मेरे साथ छुपन-छुपाई खेलेंगे।" },
          { who: 0, en: "Hiding things isn't the answer, buddy. Talking to friends is. Come!", hi: "चीज़ें छुपाना हल नहीं है, दोस्त। दोस्तों से बात करना है। चलो!" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "kabir", pose: "stand", mood: "sad", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.47, cape: true }, { id: "rohan", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "ball", x: 0.3, y: 0.55 } ],
        say: [
          { who: 0, en: "Here's your ball, Rohan bhaiya. I'm sorry I hid it.", hi: "ये लो आपकी गेंद, रोहन भैया। सॉरी, मैंने छुपा दी थी।" },
          { who: 2, en: "And I'm sorry we never asked you to play. You're on my team!", hi: "और सॉरी, हमने कभी तुम्हें खेलने नहीं बुलाया। तुम मेरी टीम में हो!" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.78, flip: true, cape: true } ],
        props: [ { id: "ball", x: 0.92, y: 0.3 } ],
        cap: { en: "Kabir scores his very first run, and after the match, everyone plays hide-and-seek too!", hi: "कबीर ने अपना पहला रन बनाया, और मैच के बाद सबने छुपन-छुपाई भी खेली!" },
        fx: { en: "RUN!", hi: "दौड़ो!" },
        action: true
      }
    ]
  },
  {
    id: 72,
    age: "6-10",
    category: "superhero",
    title: { en: "The Robot Vacuum That Chased Dogs", hi: "कुत्तों के पीछे भागा रोबो-झाड़ू" },
    blurb: { en: "Professor Gadbad's new cleaning robot thinks dogs are dust, and now every tail in Chamakpur is on the run!", hi: "प्रोफ़ेसर गड़बड़ के नए सफ़ाई-रोबोट को लगता है कुत्ते धूल हैं, और अब चमकपुर की हर पूँछ सिर पर पैर रखकर भाग रही है!" },
    moral: { en: "Mistakes can be fixed when we stay calm and think.", hi: "शांत रहकर सोचें, तो हर गड़बड़ ठीक हो सकती है।" },
    cover: {
      bg: "city",
      chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.35, cape: true }, { id: "gadbad", pose: "blast", mood: "surprised", x: 0.78, flip: true } ],
      props: [ { id: "machine", x: 0.12 } ],
      fx: { en: "VROOM!", hi: "घर्र्र!" }
    },
    panels: [
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "gadbad", pose: "blast", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Next door, in Professor Gadbad's workshop...", hi: "पड़ोस में, प्रोफ़ेसर गड़बड़ की वर्कशॉप में..." },
        say: [
          { who: 1, en: "Behold, Auggie! The Safai-Bot 3000! It sucks up every speck of fluff!", hi: "देखो ऑगी! सफ़ाई-बॉट 3000! ये रुई का हर रेशा चूस लेता है!" },
          { who: 0, en: "Every speck of fluff? Um... Professor, I'm made of fluff.", hi: "हर रेशा? उम्म... प्रोफ़ेसर, मैं तो पूरा बालों का गोला हूँ।" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "run", mood: "scared", x: 0.45 }, { id: "gadbad", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        props: [ { id: "machine", x: 0.15 } ],
        say: [ { who: 1, en: "Oh no! It thinks dogs are giant dust bunnies!", hi: "अरे नहीं! इसे कुत्ते बड़े-बड़े धूल के गोले लग रहे हैं!", kind: "shout" } ],
        fx: { en: "VROOM!", hi: "घर्र्र!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "pinku", pose: "run", mood: "scared", x: 0.25 }, { id: "moti", pose: "run", mood: "surprised", x: 0.5 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.75 } ],
        props: [ { id: "machine", x: 0.05 } ],
        cap: { en: "Meanwhile, across Chamakpur, the Safai-Bot zooms down the street, chasing every tail it sees!", hi: "उधर, पूरे चमकपुर में सफ़ाई-बॉट सड़क पर दौड़ रहा था, हर पूँछ के पीछे!" },
        say: [ { who: 0, en: "Help! It wants to vacuum my beautiful curly tail!", hi: "बचाओ! ये मेरी सुंदर घुंघराली पूँछ को चूस लेगा!", kind: "shout" } ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.33, cape: true }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "The OFF button is on its back, but it's too fast to catch!", hi: "बंद करने का बटन पीछे है, पर ये पकड़ में ही नहीं आता!" },
          { who: 0, en: "Then we won't catch it. We'll send it HOME. Woof-woof, let's go!", hi: "तो हम इसे पकड़ेंगे नहीं। इसे घर भेजेंगे। भौं-भौं, चलो चलें!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.55, cape: true } ],
        props: [ { id: "machine", x: 0.15 } ],
        cap: { en: "Super Auggie's plan: shake, shake, SHAKE! A trail of golden fur leads all the way back to the workshop.", hi: "सुपर ऑगी का प्लान: हिलो, हिलो, ज़ोर से हिलो! सुनहरे बालों का निशान सीधे वर्कशॉप तक!" },
        fx: { en: "SHAKE!", hi: "झर-झर!" },
        action: true
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25, cape: true }, { id: "gadbad", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        cap: { en: "The robot slurps up the fur trail... slurp, slurp... right onto its charging pad!", hi: "रोबोट बालों का निशान चूसता गया... सुड़प, सुड़प... सीधे अपने चार्जिंग पैड पर!" },
        say: [ { who: 1, en: "It's docked! It's sleeping! Auggie, you genius!", hi: "डॉक हो गया! सो गया! ऑगी, तुम तो जीनियस हो!", kind: "shout" } ],
        fx: { en: "CLICK!", hi: "खट!" },
        action: true
      },
      {
        bg: "lab",
        chars: [ { id: "pinku", pose: "stand", mood: "angry", x: 0.25 }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 1, en: "Pinku, I'm very sorry. I'll add a Dog-Friendly Mode right now.", hi: "पिंकू, मुझे बहुत अफ़सोस है। मैं अभी डॉग-फ़्रेंडली मोड लगाता हूँ।" },
          { who: 0, en: "Hmph! Fine. But my poor tail needs a spa day.", hi: "हुँह! ठीक है। पर मेरी बेचारी पूँछ को अब स्पा चाहिए।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.25, cape: true }, { id: "pinku", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Now the Safai-Bot cleans the park every day... and politely goes AROUND every dog!", hi: "अब सफ़ाई-बॉट रोज़ पार्क साफ़ करता है... और हर कुत्ते के बगल से तमीज़ से निकल जाता है!" },
        say: [ { who: 0, en: "Good robot! Now that's what I call teamwork!", hi: "शाबाश रोबोट! इसे कहते हैं टीमवर्क!" } ]
      }
    ]
  },
  {
    id: 73,
    age: "6-10",
    category: "superhero",
    title: { en: "The Bark-Translator Goes Bonkers", hi: "बेक़ाबू बार्क-ट्रांसलेटर" },
    blurb: { en: "Gadbad's new machine turns barks into words, until it starts mixing up everything everyone says!", hi: "गड़बड़ की नई मशीन भौंक को शब्दों में बदलती है, फिर अचानक सबकी बातें उलट-पुलट करने लगती है!" },
    moral: { en: "Love is understood with the heart, not just with words.", hi: "प्यार शब्दों से नहीं, दिल से समझा जाता है।" },
    cover: {
      bg: "lab",
      chars: [ { id: "auggie", pose: "blast", mood: "laugh", x: 0.33, cape: true }, { id: "gadbad", pose: "blast", mood: "surprised", x: 0.76, flip: true } ],
      props: [ { id: "machine", x: 0.55 }, { id: "gear", x: 0.1 } ],
      fx: { en: "BZZZT!", hi: "भिर्र!" }
    },
    panels: [
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.28 }, { id: "gadbad", pose: "blast", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Professor Gadbad has a brand-new invention: the Bark-Translator!", hi: "प्रोफ़ेसर गड़बड़ का बिल्कुल नया आविष्कार: बार्क-ट्रांसलेटर!" },
        say: [ { who: 1, en: "Bark into it, Auggie! Finally, humans will understand every single woof!", hi: "इसमें भौंको, ऑगी! अब इंसान तुम्हारी हर भौं-भौं समझ पाएँगे!" } ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "blast", mood: "happy", x: 0.28 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Auggie barks. The machine beeps, then speaks in a squeaky robot voice...", hi: "ऑगी भौंका। मशीन ने बीप किया, फिर पतली-सी रोबोट आवाज़ में बोली..." },
        say: [ { who: 1, en: "It says, 'Belly rub, please!' Ha ha! It really works!", hi: "ये कह रही है, 'पेट सहलाओ, प्लीज़!' हा हा! ये तो सच में चलती है!" } ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "gadbad", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 }, { id: "gear", x: 0.9, y: 0.3 } ],
        cap: { en: "Then the machine starts to shake, smoke and sparkle...", hi: "फिर मशीन हिलने लगी, धुआँ छोड़ने लगी, चिंगारियाँ उड़ाने लगी..." },
        say: [ { who: 1, en: "Uh-oh. Too many woofs! The Translate-Chip is overheating!", hi: "ओ-हो। बहुत ज़्यादा भौं-भौं! ट्रांसलेट-चिप गरम हो गई!", kind: "shout" } ],
        fx: { en: "BZZZT!", hi: "भिर्र!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Meanwhile, the broken translator's jumble-waves spread across Chamakpur, mixing up everybody's words!", hi: "उधर, ख़राब ट्रांसलेटर की उलट-पुलट तरंगें पूरे चमकपुर में फैल गईं, सबकी बातें गड़बड़ हो गईं!" },
        say: [
          { who: 0, en: "Mottu, I said 'Good morning!' Why did it come out as 'I am a potato'?", hi: "मोटू, मैंने 'गुड मॉर्निंग' कहा था! ये 'मैं आलू हूँ' क्यों निकला?" },
          { who: 1, en: "And when I called Auggie, it said MEOW! Mittsy, this is chaos!", hi: "और मैंने ऑगी को बुलाया तो निकला 'म्याऊँ'! मिट्सी, ये तो हंगामा है!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "moti", pose: "stand", mood: "surprised", x: 0.3 }, { id: "pinku", pose: "stand", mood: "angry", x: 0.72, flip: true } ],
        cap: { en: "At the park, Moti's friendly 'Hello!' comes out as a grumpy 'GO AWAY!'", hi: "पार्क में मोती का प्यारा-सा 'हैलो!' निकला एक चिड़चिड़ा 'भाग जाओ!'" },
        say: [
          { who: 1, en: "How rude! I'm never talking to you again, Moti!", hi: "कितनी बदतमीज़ी! मैं तुमसे कभी बात नहीं करूँगा, मोती!" },
          { who: 0, en: "But I didn't say that! It's that jumbled-up machine!", hi: "पर मैंने ऐसा नहीं कहा! ये उस गड़बड़ मशीन का कमाल है!" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.28, cape: true }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        say: [
          { who: 1, en: "The OFF switch is stuck! Only a really BIG sound can reset it!", hi: "बंद करने वाला बटन अटक गया! सिर्फ़ बहुत बड़ी आवाज़ ही इसे रीसेट कर सकती है!" },
          { who: 0, en: "A big sound? Professor, cover your ears!", hi: "बड़ी आवाज़? प्रोफ़ेसर, कान बंद कर लीजिए!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.4, cape: true } ],
        props: [ { id: "machine", x: 0.82 } ],
        cap: { en: "Super Auggie takes the deepest breath of his life... and lets out his MIGHTIEST woof ever!", hi: "सुपर ऑगी ने ज़िंदगी की सबसे गहरी साँस ली... और लगाई अब तक की सबसे ज़ोरदार भौंक!" },
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "moti", pose: "cheer", mood: "happy", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "The machine goes quiet. Everyone's words are back to normal, and Moti and Pinku are friends again.", hi: "मशीन चुप हो गई। सबकी बातें ठीक हो गईं, और मोती-पिंकू फिर से दोस्त बन गए।" },
        say: [ { who: 2, en: "Who needs a machine? I understand every wag of your tail, Auggie!", hi: "मशीन की क्या ज़रूरत? मैं तो तुम्हारी पूँछ का हर इशारा समझती हूँ, ऑगी!" } ]
      }
    ]
  },
  {
    id: 74,
    age: "6-10",
    category: "planet",
    title: { en: "Kichdu and the Great Clean-Up", hi: "किचडू और महा-सफ़ाई अभियान" },
    blurb: { en: "After a messy picnic, gloopy Kichdu grows as big as a bus, and Super Auggie needs the whole city's help!", hi: "एक गंदी पिकनिक के बाद चिपचिपा किचडू बस जितना बड़ा हो गया, और सुपर ऑगी को पूरे शहर की मदद चाहिए!" },
    moral: { en: "Keep your city clean, and put litter only in the dustbin.", hi: "अपने शहर को साफ़ रखो, कचरा सिर्फ़ डस्टबिन में डालो।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "kichdu", pose: "stand", mood: "laugh", x: 0.72, flip: true, s: 1.4 } ],
      props: [ { id: "dustbin", x: 0.08 }, { id: "bottle", x: 0.5 } ],
      fx: { en: "SPLAT!", hi: "पचाक!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "stand", mood: "sad", x: 0.3 }, { id: "moti", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.5 }, { id: "bottle", x: 0.1 }, { id: "dustbin", x: 0.92 } ],
        cap: { en: "Sunday evening at Chamakpur Lake Park. The picnic crowds have gone home... but their litter hasn't.", hi: "रविवार शाम, चमकपुर लेक पार्क। पिकनिक वाले घर चले गए... पर उनका कचरा यहीं रह गया।" },
        say: [ { who: 1, en: "Wrappers, bottles, plates... Auggie, the whole park smells like a dustbin!", hi: "रैपर, बोतलें, प्लेटें... ऑगी, पूरा पार्क कूड़ेदान जैसा महक रहा है!" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.25 }, { id: "kichdu", pose: "stand", mood: "laugh", x: 0.7, flip: true, s: 1.2 } ],
        props: [ { id: "bottle", x: 0.48 } ],
        cap: { en: "Suddenly, the litter begins to wobble... and wobble... and rise up!", hi: "अचानक, कचरा हिलने लगा... और हिलने लगा... और ऊपर उठने लगा!" },
        say: [ { who: 1, en: "GLORP! I am KICHDU! Every wrapper makes me BIGGER!", hi: "ग्लॉर्प! मैं हूँ किचडू! हर रैपर मुझे और बड़ा बनाता है!", kind: "shout" } ],
        fx: { en: "GLORP!", hi: "ग्लॉर्प!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "kichdu", pose: "run", mood: "laugh", x: 0.6, s: 1.6 } ],
        props: [ { id: "bus", x: 0.15 }, { id: "bottle", x: 0.9 } ],
        cap: { en: "Meanwhile, across Chamakpur, Kichdu slurps up litter from every lane and grows as big as a bus!", hi: "उधर, पूरे चमकपुर में किचडू हर गली का कचरा सुड़कता गया और बस जितना बड़ा हो गया!" },
        say: [ { who: 0, en: "More chips packets! More plastic bags! Yum-yum-GLOOP!", hi: "और चिप्स के पैकेट! और पॉलीथीन! यम-यम-ग्लूप!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Barking won't chase Kichdu away, Auggie. He only shrinks when places get cleaned!", hi: "किचडू भौंकने से नहीं भागेगा, ऑगी। वो तभी छोटा होता है जब जगह साफ़ हो!" },
          { who: 0, en: "Then we need an army of cleaners! Woof-woof, let's go!", hi: "तो हमें सफ़ाई वालों की सेना चाहिए! भौं-भौं, चलो चलें!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "house", x: 0.12 }, { id: "house", x: 0.88 } ],
        cap: { en: "Super Auggie leaps across the rooftops, and his mighty WOOF calls the whole neighbourhood!", hi: "सुपर ऑगी छतों के ऊपर से छलांग लगाता गया, और उसकी ज़ोरदार भौंक ने पूरे मोहल्ले को बुला लिया!" },
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "moti", pose: "point", mood: "determined", x: 0.2 }, { id: "anaya", pose: "cheer", mood: "happy", x: 0.5 }, { id: "papa", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "dustbin", x: 0.95 } ],
        cap: { en: "Moti knows every lane! Papa brings gloves, Anaya paints signs, and everyone fills the dustbins.", hi: "मोती को हर गली पता है! पापा दस्ताने लाए, अनाया ने पोस्टर बनाए, और सबने डस्टबिन भर दिए।" },
        say: [ { who: 0, en: "Team Dustbin! Lane Number Three next. Follow me!", hi: "टीम डस्टबिन! अगली गली नंबर तीन। मेरे पीछे आओ!", kind: "shout" } ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3, cape: true }, { id: "kichdu", pose: "stand", mood: "surprised", x: 0.7, flip: true, s: 0.7 } ],
        props: [ { id: "dustbin", x: 0.92 } ],
        cap: { en: "With every wrapper picked up, Kichdu gets smaller... and smaller... and SMALLER!", hi: "हर रैपर उठाने के साथ, किचडू छोटा होता गया... और छोटा... और छोटा!" },
        say: [ { who: 1, en: "Hey! I'm shrinking! But... I actually feel quite fresh?", hi: "अरे! मैं छोटा हो रहा हूँ! पर... मुझे तो ताज़गी लग रही है?" } ],
        fx: { en: "POP!", hi: "पॉप!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "kichdu", pose: "cheer", mood: "happy", x: 0.2, s: 0.5 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "moti", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "sapling", x: 0.95 }, { id: "flower", x: 0.05 } ],
        cap: { en: "Now the park sparkles. Tiny Kichdu has a new job: Chief Litter Spotter!", hi: "अब पार्क चमक रहा है। नन्हे किचडू को नया काम मिला: चीफ़ कचरा-खोजी!" },
        say: [ { who: 0, en: "Litter spotted! Into the dustbin, please! GLORP!", hi: "कचरा दिखा! प्लीज़, डस्टबिन में डालो! ग्लॉर्प!" } ]
      }
    ]
  },
  {
    id: 75,
    age: "6-10",
    category: "friends",
    title: { en: "Garaj Rains on the Dog Show", hi: "डॉग-शो पर गरज की बारिश" },
    blurb: { en: "Chamakpur's Grand Dog Show is about to begin, when grumpy Garaj the storm cloud arrives with a very wet surprise!", hi: "चमकपुर का ग्रैंड डॉग-शो शुरू होने ही वाला था, कि ग़ुस्सैल बादल गरज आ पहुँचा एक गीला-गीला सरप्राइज़ लेकर!" },
    moral: { en: "Sometimes grumpy friends just want to be included.", hi: "कभी-कभी ग़ुस्सा करने वाले दोस्त बस साथ चाहते हैं।" },
    cover: {
      bg: "rain",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "garaj", pose: "stand", mood: "angry", x: 0.72, flip: true } ],
      props: [ { id: "umbrella", x: 0.1 } ],
      fx: { en: "BOOM!", hi: "गड़गड़!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "snowy", pose: "stand", mood: "happy", x: 0.22 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "pinku", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.95 }, { id: "drum", x: 0.05 } ],
        cap: { en: "The Chamakpur Grand Dog Show! Ribbons, drums and a very shiny trophy.", hi: "चमकपुर ग्रैंड डॉग-शो! रिबन, ढोल और एक चमचमाती ट्रॉफ़ी।" },
        say: [ { who: 2, en: "I've practised my catwalk for weeks. I mean... my DOG-walk!", hi: "मैंने हफ़्तों कैटवॉक की प्रैक्टिस की है। मतलब... डॉग-वॉक!" } ]
      },
      {
        bg: "sky",
        chars: [ { id: "garaj", pose: "stand", mood: "angry", x: 0.55 } ],
        props: [ { id: "cloud", x: 0.15 } ],
        cap: { en: "Meanwhile, high above Chamakpur, a big grey cloud is watching... and frowning...", hi: "उधर, चमकपुर के ऊपर, एक बड़ा सलेटी बादल सब देख रहा था... और मुँह फुला रहा था..." },
        say: [ { who: 0, en: "A party, and nobody invited GARAJ? Hmph! Time for some RAIN!", hi: "पार्टी, और गरज को किसी ने बुलाया ही नहीं? हुँह! अब होगी बारिश!", kind: "shout" } ]
      },
      {
        bg: "rain",
        chars: [ { id: "pinku", pose: "run", mood: "scared", x: 0.3 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.5 }, { id: "umbrella", x: 0.92 } ],
        cap: { en: "Thunder! Lightning! Rain pours on the stage, the ribbons, and Pinku's freshly brushed fur.", hi: "गड़गड़ाहट! बिजली! मंच, रिबन और पिंकू के ताज़ा ब्रश किए बालों पर झमाझम बारिश!" },
        say: [ { who: 0, en: "My fur! My beautiful fur! This is a DISASTER!", hi: "मेरे बाल! मेरे सुंदर बाल! ये तो आफ़त है!", kind: "shout" } ],
        fx: { en: "BOOM!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3, cape: true }, { id: "snowy", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Wait... Super Ears hear something under the thunder. Garaj is... sniffling?", hi: "रुको... सुपर कान गड़गड़ाहट के नीचे कुछ और सुन रहे हैं। गरज... सुबक रहा है?" },
          { who: 1, en: "Clouds get lonely up there. Let me talk to him. Huskies speak HOWL!", hi: "बादल ऊपर अकेले पड़ जाते हैं। मैं बात करता हूँ। हम हस्की 'हूऊ' वाली भाषा बोलते हैं!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.3, cape: true }, { id: "snowy", pose: "blast", mood: "happy", x: 0.72 } ],
        cap: { en: "Super Auggie leaps onto the tallest water tank, and Snowy howls a long, friendly hello to the sky!", hi: "सुपर ऑगी सबसे ऊँची पानी की टंकी पर कूद गया, और स्नोवी ने आसमान को लंबा, प्यारा-सा 'हैलो' हूऊ किया!" },
        fx: { en: "AROOO!", hi: "हूऊऊ!" },
        action: true
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3, cape: true }, { id: "garaj", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Garaj, why are you raining on our show?", hi: "गरज, तुम हमारे शो पर क्यों बरस रहे हो?" },
          { who: 1, en: "Everyone runs inside when I come. Nobody ever invites a cloud...", hi: "मैं आता हूँ तो सब अंदर भाग जाते हैं। बादल को कोई बुलाता ही नहीं..." }
        ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3, cape: true }, { id: "garaj", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Then you're invited! Be our Special Guest Judge. Just... less rain, please?", hi: "तो तुम्हें न्योता है! हमारे स्पेशल गेस्ट जज बनो। बस... बारिश थोड़ी कम, प्लीज़?" },
          { who: 1, en: "Me? A JUDGE? Nobody has ever asked me that!", hi: "मैं? जज? मुझसे तो आज तक किसी ने ऐसा नहीं कहा!" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "pinku", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.48, cape: true }, { id: "garaj", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "rainbow", x: 0.5, y: 0.15 }, { id: "trophy", x: 0.05 } ],
        cap: { en: "Garaj stops the rain, smiles a big rainbow, and gives everyone the 'Best Wet Dog' award!", hi: "गरज ने बारिश रोकी, मुस्कुराकर इंद्रधनुष बनाया, और सबको दिया 'बेस्ट गीला कुत्ता' अवॉर्ड!" },
        say: [ { who: 0, en: "Wet fur is my new style, darlings!", hi: "गीले बाल अब मेरा नया स्टाइल है, डार्लिंग!" } ],
        fx: { en: "TA-DA!", hi: "वाह!" },
        action: true
      }
    ]
  },
  {
    id: 76,
    age: "6-10",
    category: "superhero",
    title: { en: "The Mew in the Mango Tree", hi: "आम के पेड़ पर म्याऊँ" },
    blurb: { en: "Super Auggie's ears hear a tiny cry three streets away, but how can a dog rescue a kitten up a tree?", hi: "सुपर ऑगी के कानों ने तीन गली दूर एक नन्ही-सी आवाज़ सुनी, पर कुत्ता पेड़ पर फँसी बिल्ली की बच्ची को कैसे बचाए?" },
    moral: { en: "Knowing when to call a grown-up is a superpower too.", hi: "सही समय पर बड़ों को बुलाना भी एक सुपरपावर है।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "cat", pose: "stand", mood: "scared", x: 0.72, flip: true, s: 0.6 } ],
      props: [ { id: "tree", x: 0.75 } ],
      fx: { en: "MEOW!", hi: "म्याऊँ!" }
    },
    panels: [
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.33 }, { id: "papa", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "laptop", x: 0.58 } ],
        cap: { en: "A quiet afternoon. Papa works on his laptop while Auggie naps beside him.", hi: "एक शांत दोपहर। पापा लैपटॉप पर काम कर रहे हैं और ऑगी बगल में सो रहा है।" },
        say: [ { who: 0, en: "Zzz... carrots... more carrots...", hi: "ख़र्र... गाजर... और गाजर...", kind: "whisper" } ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.33 }, { id: "papa", pose: "sit", mood: "surprised", x: 0.75, flip: true } ],
        props: [ { id: "laptop", x: 0.58 } ],
        say: [
          { who: 0, en: "Papa! Super Ears hear a kitten crying, three streets away!", hi: "पापा! सुपर कान सुन रहे हैं, तीन गली दूर एक बिल्ली की बच्ची रो रही है!", kind: "shout" },
          { who: 1, en: "Three streets? I can't even hear the pressure cooker from here!", hi: "तीन गली? मुझे तो यहाँ से कुकर की सीटी भी नहीं सुनती!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "bush", x: 0.1 }, { id: "flower", x: 0.9 } ],
        cap: { en: "Cape on! Super Auggie leaps over hedges and flower beds, with Papa running right behind.", hi: "केप पहनी! सुपर ऑगी झाड़ियों और क्यारियों के ऊपर से कूदा, पापा ठीक पीछे दौड़ते हुए।" },
        say: [ { who: 0, en: "Woof-woof, let's go!", hi: "भौं-भौं, चलो चलें!", kind: "shout" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "cat", pose: "stand", mood: "scared", x: 0.72, flip: true, s: 0.6 } ],
        props: [ { id: "tree", x: 0.75 } ],
        cap: { en: "Meanwhile, on the very top branch of the old mango tree, a tiny kitten is shivering.", hi: "उधर, पुराने आम के पेड़ की सबसे ऊँची डाल पर, एक नन्ही बिल्ली काँप रही थी।" },
        say: [ { who: 1, en: "Mew! I chased a butterfly up here... and now I can't get down!", hi: "म्याऊँ! मैं तितली के पीछे ऊपर आ गई... अब नीचे नहीं उतर पा रही!" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.4, cape: true } ],
        props: [ { id: "tree", x: 0.82 } ],
        cap: { en: "Uh-oh. Even Super Auggie has a problem...", hi: "ओह-हो। सुपर ऑगी के सामने भी मुश्किल..." },
        say: [ { who: 0, en: "I can sniff, swim and woof... but dogs can't climb trees. Hmm...", hi: "मैं सूँघ सकता हूँ, तैर सकता हूँ, भौंक सकता हूँ... पर कुत्ते पेड़ पर नहीं चढ़ सकते। हम्म...", kind: "think" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "papa", pose: "run", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Then Auggie has the best idea: a real hero knows when to call the grown-ups!", hi: "तभी ऑगी को सबसे बढ़िया आइडिया आया: असली हीरो जानता है कब बड़ों को बुलाना है!" },
        say: [ { who: 0, en: "PAPA! NANU! Bring the big ladder, quickly!", hi: "पापा! नानू! जल्दी से बड़ी सीढ़ी लाओ!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "nanu", pose: "stand", mood: "determined", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.48, cape: true }, { id: "papa", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Nanu holds the ladder steady. Papa climbs up slowly. Auggie speaks softly to keep the kitten calm.", hi: "नानू ने सीढ़ी मज़बूती से पकड़ी। पापा धीरे-धीरे चढ़े। ऑगी प्यार से बोलता रहा ताकि बच्ची शांत रहे।" },
        say: [ { who: 1, en: "Don't be scared, little one. Papa has the gentlest hands in Chamakpur.", hi: "डरो मत, नन्ही। पापा के हाथ चमकपुर में सबसे प्यारे और नरम हैं।" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.28, cape: true }, { id: "cat", pose: "stand", mood: "laugh", x: 0.52, s: 0.6, flip: true }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Safe on the ground! Mishti the kitten snuggles up to her big golden rescuer.", hi: "सही-सलामत नीचे! नन्ही मिष्टी अपने बड़े सुनहरे बचाने वाले से लिपट गई।" },
        say: [ { who: 1, en: "Thank you! You're the fluffiest hero ever!", hi: "थैंक यू! तुम सबसे रोएँदार हीरो हो!" } ],
        fx: { en: "PURRR!", hi: "घुर्र-घुर्र!" },
        action: true
      }
    ]
  },
  {
    id: 77,
    age: "6-10",
    category: "superhero",
    title: { en: "The Lost Puppy in the Monsoon", hi: "बारिश में खोया पिल्ला" },
    blurb: { en: "On the stormiest night of the monsoon, Super Auggie and Moti search the wet lanes for a lost little puppy.", hi: "मानसून की सबसे तूफ़ानी रात, सुपर ऑगी और मोती भीगी गलियों में एक खोए पिल्ले को ढूँढने निकले।" },
    moral: { en: "In the rain, help street animals find a dry, safe place.", hi: "बारिश में गली के जानवरों को सूखी, सुरक्षित जगह दिलाओ।" },
    cover: {
      bg: "rain",
      chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.35, cape: true }, { id: "moti", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
      props: [ { id: "umbrella", x: 0.1 }, { id: "puddle", x: 0.55 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "The monsoon is here! Rain drums on every roof in Chamakpur.", hi: "मानसून आ गया! चमकपुर की हर छत पर बारिश ढोल बजा रही है।" },
        say: [ { who: 1, en: "Pakoras for us, carrots for you, and a cosy blanket for everyone!", hi: "हमारे लिए पकौड़े, तुम्हारे लिए गाजर, और सबके लिए गरम कंबल!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "moti", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "Suddenly, a soaking-wet Moti scratches at the door!", hi: "अचानक, भीगा हुआ मोती दरवाज़ा खुरचने लगा!" },
        say: [ { who: 1, en: "Auggie! Kaali's littlest puppy, Golu, is missing. Water is rising in our lane!", hi: "ऑगी! काली का सबसे छोटा पिल्ला, गोलू, खो गया है। हमारी गली में पानी भर रहा है!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.92 } ],
        say: [
          { who: 1, en: "Cape for you, raincoat for me. We go together, and we stay together!", hi: "तुम्हारी केप, मेरा रेनकोट। हम साथ जाएँगे और साथ रहेंगे!" },
          { who: 0, en: "Woof-woof, let's go!", hi: "भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.35, cape: true }, { id: "moti", pose: "run", mood: "determined", x: 0.68 } ],
        props: [ { id: "puddle", x: 0.5 }, { id: "puddle", x: 0.1 } ],
        cap: { en: "Meanwhile, across Chamakpur, the rain grows louder. Super Auggie and Moti race through the puddles.", hi: "उधर, पूरे चमकपुर में बारिश और तेज़ हो गई। सुपर ऑगी और मोती पानी में छपाक-छपाक दौड़े।" },
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3, cape: true }, { id: "moti", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "The rain has washed away every smell! Even your nose can't help now.", hi: "बारिश ने सारी खुशबू धो दी! अब तो तुम्हारी नाक भी काम नहीं करेगी।" },
          { who: 0, en: "Then it's time for Super Ears. Everyone, please... shhh!", hi: "तो अब सुपर कानों की बारी। सब लोग, प्लीज़... श्श्श!" }
        ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3, cape: true } ],
        props: [ { id: "rickshaw", x: 0.72 }, { id: "puddle", x: 0.5 } ],
        cap: { en: "Under the drumming rain comes a teeny-tiny whimper... from beneath an old parked rickshaw!", hi: "बारिश के शोर के नीचे से एक नन्ही-सी कूँ-कूँ... एक पुराने खड़े ऑटो के नीचे से!" },
        fx: { en: "WHIMPER!", hi: "कूँ-कूँ!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25, cape: true }, { id: "moti", pose: "cheer", mood: "happy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "rickshaw", x: 0.95 } ],
        cap: { en: "Mumma gently lifts out a shivering Golu and wraps him in her warm dupatta.", hi: "मम्मा ने काँपते गोलू को धीरे से निकाला और अपने गरम दुपट्टे में लपेट लिया।" },
        say: [ { who: 1, en: "Golu! You're safe! Your mama is waiting for you!", hi: "गोलू! तुम सही-सलामत हो! तुम्हारी माँ तुम्हारा इंतज़ार कर रही है!", kind: "shout" } ]
      },
      {
        bg: "city",
        chars: [ { id: "moti", pose: "cheer", mood: "happy", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "bowl", x: 0.05 }, { id: "house", x: 0.95 } ],
        cap: { en: "Kaali gets her puppy back. The neighbours build a dry shelter with a roof, a blanket and a water bowl.", hi: "काली को उसका पिल्ला मिल गया। पड़ोसियों ने छत, कंबल और पानी के कटोरे वाला एक सूखा ठिकाना बनाया।" },
        say: [ { who: 2, en: "Every street dog deserves a dry corner in the monsoon.", hi: "मानसून में हर गली के कुत्ते को एक सूखा कोना मिलना चाहिए।" } ],
        fx: { en: "HOORAY!", hi: "वाह!" },
        action: true
      }
    ]
  },
  {
    id: 78,
    age: "6-10",
    category: "sports",
    title: { en: "The Great Fetch Championship", hi: "फ़ेच का महा-मुक़ाबला" },
    blurb: { en: "Auggie and Chiku race for the Golden Frisbee Cup, but a tiny cry from the lake changes everything.", hi: "गोल्डन फ़्रिस्बी कप के लिए ऑगी और चीकू की दौड़, पर झील से आई एक नन्ही पुकार ने सब बदल दिया।" },
    moral: { en: "Helping someone in need is the biggest win of all.", hi: "ज़रूरतमंद की मदद करना सबसे बड़ी जीत है।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.3 }, { id: "chiku", pose: "run", mood: "happy", x: 0.68 } ],
      props: [ { id: "frisbee", x: 0.5, y: 0.25 }, { id: "trophy", x: 0.92 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.28 }, { id: "mausi", pose: "wave", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "frisbee", x: 0.55, y: 0.35 }, { id: "trophy", x: 0.05 } ],
        cap: { en: "The Chamakpur Fetch Championship! Mausi is the official frisbee thrower.", hi: "चमकपुर फ़ेच चैंपियनशिप! मौसी हैं ऑफ़िशियल फ़्रिस्बी फेंकने वाली।" },
        say: [ { who: 1, en: "Final round: Auggie versus Chiku! Ready... steady... FETCH!", hi: "फ़ाइनल राउंड: ऑगी बनाम चीकू! रेडी... स्टेडी... फ़ेच!", kind: "shout" } ]
      },
      {
        bg: "river",
        chars: [ { id: "chiku", pose: "run", mood: "happy", x: 0.25 }, { id: "auggie", pose: "run", mood: "determined", x: 0.55 } ],
        props: [ { id: "frisbee", x: 0.85, y: 0.25 } ],
        cap: { en: "The frisbee flies right over the lake and lands on the far bank!", hi: "फ़्रिस्बी झील के ऊपर से उड़ी और दूसरे किनारे पर जा गिरी!" },
        say: [ { who: 0, en: "I'll take the bridge. Zoom-zoom-zoom!", hi: "मैं पुल से जाऊँगा। ज़ूम-ज़ूम-ज़ूम!" } ],
        fx: { en: "WHOOSH!", hi: "सर्र!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.45 } ],
        props: [ { id: "frisbee", x: 0.9, y: 0.3 } ],
        cap: { en: "But Auggie is a Labrador, and Labradors LOVE water. He jumps straight in!", hi: "पर ऑगी लैब्राडोर है, और लैब्राडोर को पानी बहुत पसंद है। वो सीधे कूद गया!" },
        say: [ { who: 0, en: "Swimming is my superpower! Straight across!", hi: "तैरना मेरी सुपरपावर है! सीधे उस पार!", kind: "shout" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "duck", pose: "stand", mood: "sad", x: 0.72, flip: true, s: 0.6 } ],
        props: [ { id: "bush", x: 0.9 } ],
        cap: { en: "Halfway across, Auggie's ears pick up a tiny 'peep-peep' from the reeds...", hi: "आधे रास्ते में, ऑगी के कानों ने सरकंडों से एक नन्ही 'पीप-पीप' सुनी..." },
        say: [ { who: 1, en: "Peep! I'm stuck in the weeds, and I can't find my mama!", hi: "पीप! मैं घास में फँस गया हूँ, और मुझे मम्मा नहीं मिल रही!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.33 }, { id: "chiku", pose: "run", mood: "happy", x: 0.75 } ],
        cap: { en: "Meanwhile, on the bridge, Chiku is zooming closer and closer to the frisbee!", hi: "उधर, पुल पर चीकू फ़्रिस्बी के क़रीब, और क़रीब पहुँच रहा था!" },
        say: [ { who: 0, en: "The trophy... or the duckling? Easy choice!", hi: "ट्रॉफ़ी... या बत्तख का बच्चा? ये तो आसान है!", kind: "think" } ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25 }, { id: "duck", pose: "stand", mood: "happy", x: 0.52, s: 0.6 }, { id: "duck", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        cap: { en: "Gently, gently, Auggie nudges the duckling free and swims it back to its mama.", hi: "धीरे-धीरे, ऑगी ने बच्चे को घास से छुड़ाया और तैराकर उसकी मम्मा तक पहुँचाया।" },
        say: [ { who: 2, en: "Quack! Thank you, kind swimmer! You're a true hero!", hi: "क्वैक! शुक्रिया, प्यारे तैराक! तुम सच्चे हीरो हो!" } ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "cheer", mood: "happy", x: 0.3 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.45, y: 0.3 } ],
        cap: { en: "Chiku wins the frisbee... but he saw everything from the bridge.", hi: "फ़्रिस्बी चीकू ने पकड़ी... पर उसने पुल से सब देख लिया था।" },
        say: [
          { who: 0, en: "I won the race, Auggie... but YOU won something much bigger.", hi: "रेस मैं जीता, ऑगी... पर तुमने उससे कहीं बड़ी चीज़ जीती है।" },
          { who: 1, en: "Congratulations, champ! Those little legs were super fast!", hi: "बधाई हो, चैंपियन! वो छोटी टाँगें तो सुपरफ़ास्ट थीं!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.35 }, { id: "camera", x: 0.93 } ],
        cap: { en: "Two prizes today: the Golden Frisbee Cup for Chiku, and a special Golden Heart medal for Auggie!", hi: "आज दो इनाम: चीकू को गोल्डन फ़्रिस्बी कप, और ऑगी को ख़ास गोल्डन हार्ट मेडल!" },
        say: [ { who: 2, en: "Selfie time with my two champions!", hi: "मेरे दोनों चैंपियंस के साथ सेल्फ़ी टाइम!" } ],
        fx: { en: "HOORAY!", hi: "वाह!" },
        action: true
      }
    ]
  },
  {
    id: 79,
    age: "6-10",
    category: "sports",
    title: { en: "Auggie Fetches the Winning Ball", hi: "ऑगी और जीत वाली गेंद" },
    blurb: { en: "Six runs needed off the last ball, but the only cricket ball has vanished! Can Auggie's nose save the match?", hi: "आख़िरी गेंद पर छह रन चाहिए, पर इकलौती क्रिकेट बॉल ग़ायब! क्या ऑगी की नाक मैच बचा पाएगी?" },
    moral: { en: "Play fair and play together. That's the real way to win.", hi: "ईमानदारी और मिल-जुलकर खेलो। यही असली जीत है।" },
    cover: {
      bg: "playground",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "ball", x: 0.5, y: 0.25 }, { id: "trophy", x: 0.92 } ],
      fx: { en: "SIX!", hi: "छक्का!" }
    },
    panels: [
      {
        bg: "playground",
        chars: [ { id: "rohan", pose: "stand", mood: "determined", x: 0.3 }, { id: "zoya", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.55, y: 0.5 } ],
        cap: { en: "The Colony Cup final! Rohan's team needs six runs off the very last ball.", hi: "कॉलोनी कप फ़ाइनल! रोहन की टीम को बिल्कुल आख़िरी गेंद पर छह रन चाहिए।" },
        say: [
          { who: 1, en: "My fastest ball is coming, Rohan! Get ready!", hi: "मेरी सबसे तेज़ गेंद आ रही है, रोहन! तैयार हो जाओ!" },
          { who: 0, en: "Bring it on, Zoya! Everyone's watching!", hi: "आ जाओ, ज़ोया! सब देख रहे हैं!" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "zoya", pose: "blast", mood: "surprised", x: 0.3 }, { id: "rohan", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.88, y: 0.15 } ],
        cap: { en: "Oops! Zoya's warm-up throw sails right over the fence into the farm next door!", hi: "उफ़्फ़! ज़ोया की वॉर्म-अप थ्रो सीधे बाड़ के ऊपर से बगल वाले खेत में!" },
        say: [ { who: 1, en: "That was our ONLY ball! No ball, no final!", hi: "वो हमारी इकलौती गेंद थी! गेंद नहीं, तो फ़ाइनल नहीं!", kind: "shout" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "zoya", pose: "stand", mood: "sad", x: 0.3 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.72, flip: true, cape: true } ],
        props: [ { id: "sun", x: 0.9, y: 0.15 } ],
        cap: { en: "Everyone searches the farm. Tall grass, haystacks, mud... and the sun is going down!", hi: "सब खेत में ढूँढने लगे। ऊँची घास, भूसे के ढेर, कीचड़... और सूरज डूब रहा है!" },
        say: [
          { who: 0, en: "Sorry, everyone. It's all my fault.", hi: "सॉरी, सब लोग। सब मेरी ग़लती है।" },
          { who: 1, en: "Don't worry, Zoya! This is a job for the Super Sniffer!", hi: "फ़िकर मत करो, ज़ोया! ये काम है सुपर नाक का!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "Leather, a little mud, and Rohan's lucky wristband... The Super Sniffer locks on!", hi: "चमड़ा, थोड़ा कीचड़ और रोहन के लकी रिस्टबैंड की महक... सुपर नाक ने निशाना पकड़ लिया!" },
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3, cape: true }, { id: "cow", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Meanwhile, behind the biggest haystack, Gauri the cow is sitting very comfortably...", hi: "उधर, सबसे बड़े भूसे के ढेर के पीछे, गौरी गाय बड़े आराम से बैठी थी..." },
        say: [ { who: 0, en: "Excuse me, Gauri Aunty. I think you're sitting on our cricket ball!", hi: "माफ़ कीजिए, गौरी आंटी। शायद आप हमारी क्रिकेट बॉल पर बैठी हैं!" } ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "cow", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.6 } ],
        say: [
          { who: 1, en: "Moo! I thought it was a warm red tomato. Here you go, dear!", hi: "मूँ! मुझे लगा गरम-गरम लाल टमाटर है। ये लो, बेटा!" },
          { who: 0, en: "Thank you! Now, back to the pitch, FAST!", hi: "शुक्रिया! अब सीधे पिच पर, फटाफट!" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "zoya", pose: "blast", mood: "determined", x: 0.3 }, { id: "rohan", pose: "blast", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.4 } ],
        cap: { en: "Last ball. Zoya bowls her fastest ever. Rohan swings with all his heart...", hi: "आख़िरी गेंद। ज़ोया ने अपनी सबसे तेज़ गेंद डाली। रोहन ने पूरे दिल से बल्ला घुमाया..." },
        fx: { en: "THWACK!", hi: "टक्क!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "rohan", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "zoya", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.05 }, { id: "ball", x: 0.9, y: 0.12 } ],
        cap: { en: "SIX! Rohan's team wins, and Auggie is named... DOG of the Match!", hi: "छक्का! रोहन की टीम जीत गई, और ऑगी बना... डॉग ऑफ़ द मैच!" },
        say: [ { who: 2, en: "Great match, Rohan! And thank you, Auggie, for saving our final!", hi: "बढ़िया मैच, रोहन! और शुक्रिया ऑगी, हमारा फ़ाइनल बचाने के लिए!" } ],
        fx: { en: "SIX!", hi: "छक्का!" },
        action: true
      }
    ]
  },
  {
    id: 80,
    age: "6-10",
    category: "friends",
    title: { en: "Auggie's Birthday Secret", hi: "ऑगी के जन्मदिन का राज़" },
    blurb: { en: "Everyone is whispering and hiding things, and Auggie's Super Ears are itching to find out why!", hi: "घर में सब फुसफुसा रहे हैं और चीज़ें छुपा रहे हैं, और ऑगी के सुपर कान जानने को बेचैन हैं!" },
    moral: { en: "Some surprises are worth waiting for. Trust the people who love you.", hi: "कुछ सरप्राइज़ इंतज़ार के लायक होते हैं। अपने प्यार करने वालों पर भरोसा रखो।" },
    cover: {
      bg: "home",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
      props: [ { id: "cake", x: 0.55 }, { id: "balloon", x: 0.1, y: 0.2 } ],
      fx: { en: "SURPRISE!", hi: "सरप्राइज़!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.2 }, { id: "papa", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Something strange is happening in Auggie's house today...", hi: "आज ऑगी के घर में कुछ अजीब हो रहा है..." },
        say: [
          { who: 1, en: "Mottu, did you order the... you-know-what?", hi: "मोटू, तुमने वो... वो वाली चीज़ मँगवाई?", kind: "whisper" },
          { who: 2, en: "Shh, Mittsy! Big ears are listening!", hi: "श्श्श, मिट्सी! बड़े-बड़े कान सुन रहे हैं!", kind: "whisper" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "gift", x: 0.9 } ],
        say: [
          { who: 0, en: "Mausi, what's in that box behind your back?", hi: "मौसी, पीठ के पीछे उस डिब्बे में क्या है?" },
          { who: 1, en: "Nothing! Absolutely nothing! Oh look, a butterfly!", hi: "कुछ नहीं! बिल्कुल कुछ नहीं! अरे देखो, तितली!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "From the kitchen comes a smell of banana, carrot and oats...", hi: "रसोई से केले, गाजर और ओट्स की खुशबू आ रही है..." },
        say: [
          { who: 0, en: "My Super Sniffer says something yummy is baking. But what for?", hi: "मेरी सुपर नाक कह रही है कुछ मज़ेदार पक रहा है। पर किसलिए?" },
          { who: 1, en: "Out, out, little detective! No peeking in Dadi's kitchen today!", hi: "बाहर, बाहर, नन्हे जासूस! आज दादी की रसोई में ताक-झाँक मना है!" }
        ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.45 } ],
        props: [ { id: "ball", x: 0.85 } ],
        cap: { en: "Everyone is too busy to play. Auggie flops on the sofa with a big sad sigh.", hi: "किसी के पास खेलने का वक़्त नहीं। ऑगी उदास होकर लंबी आह भरते हुए सोफ़े पर लुढ़क गया।" },
        say: [ { who: 0, en: "No walk, no fetch, no belly rubs. Did everyone forget about me?", hi: "न सैर, न फ़ेच, न पेट सहलाना। क्या सब मुझे भूल गए?", kind: "think" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Nanu sits beside him with a secret smile.", hi: "नानू एक राज़ भरी मुस्कान के साथ उसके पास बैठ गए।" },
        say: [
          { who: 1, en: "Auggie, your Super Ears could uncover the secret. But would that be fun?", hi: "ऑगी, तुम्हारे सुपर कान ये राज़ खोल सकते हैं। पर क्या उसमें मज़ा आएगा?" },
          { who: 0, en: "Hmm... okay, Nanu. I'll put my paws over my ears and trust you!", hi: "हम्म... ठीक है, नानू। मैं कानों पर पंजे रखकर आप पर भरोसा करूँगा!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "rohan", pose: "stand", mood: "happy", x: 0.22 }, { id: "moti", pose: "stand", mood: "happy", x: 0.5 }, { id: "pinku", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "gift", x: 0.92 }, { id: "balloon", x: 0.06, y: 0.25 } ],
        cap: { en: "Meanwhile, as the sun sets, the doorbell rings... again, and again, and AGAIN!", hi: "उधर, सूरज ढलते ही घंटी बजी... फिर से, फिर से, और फिर से!" },
        say: [ { who: 0, en: "Shh! Everyone hide! He's coming!", hi: "श्श्श! सब छुप जाओ! वो आ रहा है!", kind: "whisper" } ],
        fx: { en: "DING-DONG!", hi: "टिंग-टोंग!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.52 }, { id: "balloon", x: 0.08, y: 0.2 }, { id: "balloon", x: 0.92, y: 0.2 } ],
        cap: { en: "The lights flick on, and the whole room jumps out!", hi: "बत्तियाँ जलीं, और पूरा कमरा उछलकर सामने आ गया!" },
        say: [ { who: 1, en: "SURPRISE! Happy birthday, our Super Auggie!", hi: "सरप्राइज़! जन्मदिन मुबारक हो, हमारे सुपर ऑगी!", kind: "shout" } ],
        fx: { en: "SURPRISE!", hi: "सरप्राइज़!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.52 } ],
        cap: { en: "The cake is made of banana, carrot and oats. No sugar, no chocolate: one hundred percent doggy-safe!", hi: "केक बना है केले, गाजर और ओट्स से। न चीनी, न चॉकलेट: पूरा सौ प्रतिशत कुत्तों के लिए सुरक्षित!" },
        say: [
          { who: 1, en: "A special cake for my special grandpup!", hi: "मेरे ख़ास पोते के लिए ख़ास केक!" },
          { who: 0, en: "Best. Secret. Ever! Thank you, family!", hi: "सबसे. बढ़िया. राज़! थैंक यू, मेरे परिवार!" }
        ]
      }
    ]
  },
  {
    id: 81,
    age: "6-10",
    category: "friends",
    title: { en: "Moti and Auggie: Bazaar Blitz!", hi: "मोती और ऑगी: बाज़ार में धमाल!" },
    blurb: { en: "A fruit cart loses a wheel on Bazaar Hill, and a hundred runaway apples need a two-dog rescue team!", hi: "बाज़ार की ढलान पर फलों के ठेले का पहिया निकल गया, और सौ भागते सेबों को चाहिए दो कुत्तों की रेस्क्यू टीम!" },
    moral: { en: "Two friends working together can solve a big problem.", hi: "दो दोस्त मिलकर बड़ी से बड़ी मुश्किल हल कर सकते हैं।" },
    cover: {
      bg: "market",
      chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.3, cape: true }, { id: "moti", pose: "run", mood: "laugh", x: 0.65 } ],
      props: [ { id: "apple", x: 0.9 }, { id: "apple", x: 0.1 }, { id: "banana", x: 0.5 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25 }, { id: "moti", pose: "stand", mood: "happy", x: 0.52, flip: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "apple", x: 0.95 } ],
        cap: { en: "Saturday bazaar in Chamakpur! Bangles, spices, flowers, and Ramu Kaka's famous fruit cart.", hi: "चमकपुर का शनिवार बाज़ार! चूड़ियाँ, मसाले, फूल, और रामू काका का मशहूर फलों का ठेला।" },
        say: [ { who: 1, en: "I know every lane here, Auggie. Stick with me!", hi: "मुझे यहाँ की हर गली पता है, ऑगी। मेरे साथ रहना!" } ]
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "moti", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5, y: 0.8 }, { id: "apple", x: 0.1, y: 0.85 }, { id: "banana", x: 0.9, y: 0.85 } ],
        cap: { en: "Suddenly, a wheel pops off the fruit cart. Apples, oranges and bananas go tumbling down the hill!", hi: "अचानक, ठेले का पहिया निकल गया। सेब, संतरे और केले ढलान पर लुढ़कने लगे!" },
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "kabir", pose: "run", mood: "happy", x: 0.4 } ],
        props: [ { id: "apple", x: 0.62, y: 0.85 }, { id: "car", x: 0.88 } ],
        cap: { en: "Meanwhile, at the bottom of the hill, little Kabir runs after a rolling apple... straight towards the busy road!", hi: "उधर, ढलान के नीचे, नन्हा कबीर एक लुढ़कते सेब के पीछे भागा... सीधे भीड़ वाली सड़क की ओर!" },
        say: [ { who: 0, en: "Come back, apple! Come back!", hi: "वापस आओ, सेब! वापस आओ!" } ]
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "moti", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "You stop the traffic. I'll take the shortcut through Spice Lane!", hi: "तुम ट्रैफ़िक रोको, मैं मसाला गली से शॉर्टकट लेता हूँ!" },
          { who: 0, en: "Deal! Woof-woof, let's go!", hi: "पक्का! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.45, cape: true } ],
        props: [ { id: "car", x: 0.85 }, { id: "rickshaw", x: 0.12 } ],
        cap: { en: "Super Auggie's MIGHTY WOOF! Every car, bus and rickshaw stops... honk... screech... silence.", hi: "सुपर ऑगी की ज़ोरदार भौंक! हर कार, बस और ऑटो रुक गया... पीं... चीं... सन्नाटा।" },
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "moti", pose: "run", mood: "determined", x: 0.3 }, { id: "kabir", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Moti zooms out of Spice Lane and gently blocks Kabir's way, just in time!", hi: "मोती मसाला गली से फ़र्राटे से निकला और ठीक समय पर कबीर का रास्ता रोक लिया!" },
        say: [
          { who: 0, en: "Whoa, little one! Never run onto the road, not even for an apple!", hi: "रुको, छोटे! सड़क पर कभी मत भागना, सेब के लिए भी नहीं!" },
          { who: 1, en: "Sorry, Moti! I forgot to stop and look.", hi: "सॉरी, मोती! मैं रुककर देखना भूल गया।" }
        ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "kabir", pose: "stand", mood: "happy", x: 0.2 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.45, flip: true }, { id: "auggie", pose: "point", mood: "happy", x: 0.75, flip: true, cape: true } ],
        props: [ { id: "apple", x: 0.95, y: 0.85 } ],
        cap: { en: "Then the two heroes nose-push every runaway fruit back into Ramu Kaka's big basket.", hi: "फिर दोनों हीरो ने नाक से धकेल-धकेलकर हर भागा हुआ फल रामू काका की बड़ी टोकरी में पहुँचाया।" },
        say: [ { who: 1, en: "Kabir, hold my hand. We always cross roads together.", hi: "कबीर, मेरा हाथ पकड़ो। सड़क हम हमेशा साथ पार करेंगे।" } ]
      },
      {
        bg: "market",
        chars: [ { id: "moti", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.7, flip: true, cape: true } ],
        props: [ { id: "apple", x: 0.5 }, { id: "banana", x: 0.92 } ],
        cap: { en: "Ramu Kaka is so thankful, he gives the heroes a treat: apples for Auggie, bananas for Moti!", hi: "रामू काका इतने ख़ुश हुए कि हीरो को इनाम दिया: ऑगी को सेब, मोती को केले!" },
        say: [
          { who: 0, en: "Best team in Chamakpur?", hi: "चमकपुर की सबसे बढ़िया टीम?" },
          { who: 1, en: "Best team in Chamakpur!", hi: "चमकपुर की सबसे बढ़िया टीम!", kind: "shout" }
        ]
      }
    ]
  },
  {
    id: 82,
    age: "6-10",
    category: "superhero",
    title: { en: "Lights Out in Chamakpur!", hi: "चमकपुर की बत्ती गुल!" },
    blurb: { en: "A big power cut plunges the neighbourhood into darkness, and Super Auggie must turn scared faces into smiles.", hi: "बड़ी बत्ती गुल होने से पूरा मोहल्ला अँधेरे में डूब गया, अब सुपर ऑगी को डरे चेहरों पर मुस्कान लानी है।" },
    moral: { en: "The dark is less scary when we are together.", hi: "साथ हों तो अँधेरा भी डरावना नहीं लगता।" },
    cover: {
      bg: "citynight",
      chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.35, cape: true }, { id: "kabir", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "star", x: 0.15, y: 0.15 }, { id: "star", x: 0.85, y: 0.2 }, { id: "diya", x: 0.55 } ],
      fx: { en: "TWINKLE!", hi: "टिमटिम!" }
    },
    panels: [
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.4 } ],
        props: [ { id: "house", x: 0.8 }, { id: "house", x: 0.1 } ],
        cap: { en: "Saturday night. Chamakpur is glowing... and then...", hi: "शनिवार की रात। चमकपुर जगमगा रहा है... और फिर..." },
        fx: { en: "CLICK!", hi: "खट!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "pinku", pose: "stand", mood: "scared", x: 0.3 }, { id: "kabir", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        cap: { en: "Power cut! The whole street goes dark. Worried voices come from every window.", hi: "बत्ती गुल! पूरी गली अँधेरे में। हर खिड़की से घबराई हुई आवाज़ें।" },
        say: [
          { who: 1, en: "I can't see anything! I don't like the dark!", hi: "मुझे कुछ नहीं दिख रहा! मुझे अँधेरा अच्छा नहीं लगता!" },
          { who: 0, en: "Is it... is it the end of my dinner?!", hi: "कहीं... कहीं मेरा डिनर तो ख़त्म नहीं हो गया?!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "The neighbours are scared, Auggie. Can you gather everyone in the courtyard?", hi: "पड़ोसी डरे हुए हैं, ऑगी। सबको आँगन में इकट्ठा कर सकते हो?" },
          { who: 0, en: "Super Ears can hear every worried heart. Woof-woof, let's go!", hi: "सुपर कान हर घबराया दिल सुन सकते हैं। भौं-भौं, चलो चलें!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "house", x: 0.1 }, { id: "house", x: 0.9 } ],
        cap: { en: "Meanwhile, across the dark street, Super Auggie leaps from door to door, following every tiny sniffle.", hi: "उधर, अँधेरी गली में सुपर ऑगी हर दरवाज़े तक छलांग लगाता गया, हर सुबकी की आवाज़ के पीछे।" },
        fx: { en: "WHOOSH!", hi: "सर्र!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.22, cape: true }, { id: "kabir", pose: "sit", mood: "happy", x: 0.5 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.36 }, { id: "diya", x: 0.64 } ],
        cap: { en: "Soon everyone is in the courtyard. Papa brings torches, and Mumma lights diyas carefully, with grown-ups nearby.", hi: "जल्दी ही सब आँगन में थे। पापा टॉर्च लाए, और मम्मा ने बड़ों के साथ, सावधानी से दीये जलाए।" },
        say: [ { who: 2, en: "No TV, no phones... just us. This feels like an old-time picnic!", hi: "न टीवी, न फ़ोन... बस हम सब। ये तो पुराने ज़माने की पिकनिक लग रही है!" } ]
      },
      {
        bg: "citynight",
        chars: [ { id: "kabir", pose: "stand", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.15, y: 0.1 }, { id: "star", x: 0.5, y: 0.15 }, { id: "star", x: 0.85, y: 0.1 } ],
        say: [
          { who: 1, en: "Look up, Kabir! With the city lights off, we can see a thousand more stars!", hi: "ऊपर देखो, कबीर! शहर की बत्तियाँ बंद हैं, तो हज़ार और तारे दिख रहे हैं!" },
          { who: 0, en: "Wow! The dark is full of sparkles!", hi: "वाह! अँधेरे में तो चमकीले मोती भरे हैं!", kind: "shout" }
        ],
        fx: { en: "TWINKLE!", hi: "टिमटिम!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "pinku", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "diya", x: 0.52 } ],
        cap: { en: "Mausi sings, Dadi tells a story, and Pinku performs a dramatic moonlight dance.", hi: "मौसी ने गाना गाया, दादी ने कहानी सुनाई, और पिंकू ने चाँदनी में ड्रामेबाज़ डांस किया।" },
        say: [ { who: 0, en: "Thank you, thank you! No autographs in the dark, please!", hi: "थैंक यू, थैंक यू! अँधेरे में ऑटोग्राफ़ नहीं मिलेंगे, प्लीज़!" } ]
      },
      {
        bg: "citynight",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "bulb", x: 0.92, y: 0.2 } ],
        cap: { en: "Ding! The power comes back... and the whole neighbourhood groans, 'Awww! Switch it off again!'", hi: "टिंग! बत्ती वापस आ गई... और पूरा मोहल्ला बोला, 'ओह्ह! फिर से बंद करो!'" },
        say: [ { who: 0, en: "Auggie, can we have a power-cut party every Saturday?", hi: "ऑगी, क्या हर शनिवार बत्ती-गुल पार्टी कर सकते हैं?" } ]
      }
    ]
  },
  {
    id: 83,
    age: "6-10",
    category: "friends",
    title: { en: "Pinku Learns to Be Pinku", hi: "पिंकू बना असली पिंकू" },
    blurb: { en: "At the Chamakpur Talent Show, Pinku tries to be everyone except himself, until Auggie shares a super secret.", hi: "चमकपुर टैलेंट शो में पिंकू ख़ुद को छोड़कर सब जैसा बनने की कोशिश करता है, जब तक ऑगी उसे एक सुपर राज़ नहीं बताता।" },
    moral: { en: "Be yourself, because nobody else can do it better!", hi: "जैसे हो वैसे रहो, क्योंकि तुमसे बढ़िया तुम कोई नहीं बन सकता!" },
    cover: {
      bg: "festival",
      chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.25 }, { id: "pinku", pose: "cheer", mood: "laugh", x: 0.6 } ],
      props: [ { id: "trophy", x: 0.88 }, { id: "crown", x: 0.6, y: 0.15 } ],
      fx: { en: "BRAVO!", hi: "वाह-वाह!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "pinku", pose: "stand", mood: "determined", x: 0.3 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "trophy", x: 0.52 } ],
        cap: { en: "The Chamakpur Dog Talent Show is tomorrow! Pinku is VERY serious about winning.", hi: "कल है चमकपुर डॉग टैलेंट शो! पिंकू जीतने के लिए बहुत-बहुत सीरियस है।" },
        say: [
          { who: 0, en: "I need a showstopper talent, Auggie. Something BIG. Something GRAND!", hi: "मुझे कोई धमाकेदार टैलेंट चाहिए, ऑगी। कुछ बड़ा। कुछ शानदार!" },
          { who: 1, en: "Why not just be you? You're the most dramatic dog I know!", hi: "तुम बस ख़ुद जैसे क्यों नहीं रहते? तुमसे बड़ा ड्रामा-किंग मैंने नहीं देखा!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "pinku", pose: "blast", mood: "determined", x: 0.3 }, { id: "snowy", pose: "blast", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Try Number One: howling like Snowy.", hi: "कोशिश नंबर एक: स्नोवी की तरह हूऊ करना।" },
        say: [ { who: 0, en: "AROOO... cough... aroo? Why does mine sound like a squeaky toy?", hi: "हूऊऊ... खों-खों... हूऊ? मेरी आवाज़ चूँ-चूँ वाले खिलौने जैसी क्यों है?" } ],
        fx: { en: "SQUEAK!", hi: "चूँ!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "pinku", pose: "run", mood: "sad", x: 0.3 }, { id: "chiku", pose: "run", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Try Number Two: running like Chiku.", hi: "कोशिश नंबर दो: चीकू की तरह दौड़ना।" },
        say: [
          { who: 1, en: "Faster, Pinku! Zoom-zoom!", hi: "और तेज़, पिंकू! ज़ूम-ज़ूम!" },
          { who: 0, en: "Huff... puff... I think my legs have gone on holiday!", hi: "हाँफ... हाँफ... मेरी टाँगें तो छुट्टी पर चली गईं!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "scared", x: 0.3 }, { id: "auggie", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Try Number Three: swimming like Auggie.", hi: "कोशिश नंबर तीन: ऑगी की तरह तैरना।" },
        say: [ { who: 0, en: "Nope! Too wet! Pugs and deep water are NOT best friends!", hi: "ना बाबा! बहुत गीला! पग और गहरे पानी की दोस्ती नहीं है!", kind: "shout" } ]
      },
      {
        bg: "home",
        chars: [ { id: "pinku", pose: "lie", mood: "sad", x: 0.33 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.72, flip: true, cape: true } ],
        cap: { en: "Meanwhile, the night before the show, one little pug is sulking in a corner...", hi: "उधर, शो से पहले की रात, एक नन्हा पग कोने में मुँह फुलाए बैठा था..." },
        say: [
          { who: 0, en: "I'm not a howler, a runner or a swimmer. I'm just... Pinku.", hi: "मैं न हूऊ कर सकता हूँ, न दौड़ सकता हूँ, न तैर सकता हूँ। मैं बस... पिंकू हूँ।" },
          { who: 1, en: "Want a Super Auggie secret? My best power is being ME.", hi: "सुपर ऑगी का एक राज़ जानना है? मेरी सबसे बड़ी पावर है, ख़ुद जैसा रहना।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "pinku", pose: "think", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Your snorts, your sulks, your big dramatic sighs... they make everyone laugh!", hi: "तुम्हारी फुँफकार, तुम्हारा मुँह फुलाना, तुम्हारी लंबी-लंबी आहें... सबको हँसाती हैं!" },
          { who: 1, en: "Wait... my drama IS my talent?", hi: "रुको... मेरा ड्रामा ही मेरा टैलेंट है?" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "pinku", pose: "blast", mood: "laugh", x: 0.5 } ],
        props: [ { id: "drum", x: 0.12 }, { id: "star", x: 0.85, y: 0.2 } ],
        cap: { en: "Show time! Pinku performs 'The Tragedy of the Last Biscuit', with snorts, sighs and a fainting finale!", hi: "शो टाइम! पिंकू ने पेश किया 'आख़िरी बिस्कुट का दुख', फुँफकार, आहों और बेहोशी वाले धमाकेदार अंत के साथ!" },
        say: [ { who: 0, en: "Oh, cruel world! Who ate my last biscuit?!", hi: "हाय रे ज़ालिम दुनिया! मेरा आख़िरी बिस्कुट किसने खाया?!", kind: "shout" } ],
        fx: { en: "SNORT!", hi: "फुँफ!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2, cape: true }, { id: "pinku", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "snowy", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.62 }, { id: "crown", x: 0.5, y: 0.15 } ],
        cap: { en: "The crowd laughs, claps and stands up cheering. Pinku wins 'Best Drama Star'!", hi: "लोग हँसे, तालियाँ बजाईं, खड़े होकर सराहा। पिंकू जीता 'बेस्ट ड्रामा स्टार'!" },
        say: [ { who: 1, en: "I'd like to thank... myself, for being ME!", hi: "मैं शुक्रिया कहना चाहूँगा... ख़ुद को, ख़ुद जैसा रहने के लिए!" } ],
        fx: { en: "BRAVO!", hi: "वाह-वाह!" },
        action: true
      }
    ]
  },
  {
    id: 84,
    age: "6-10",
    category: "superhero",
    title: { en: "The Runaway Tube at Chamak Lake", hi: "चमक झील की भागती ट्यूब" },
    blurb: { en: "Pinku naps on a floating tube at the lake picnic, and wakes up drifting far from the shore!", hi: "झील की पिकनिक में पिंकू तैरती ट्यूब पर सो गया, और जागा तो किनारे से बहुत दूर बह चुका था!" },
    moral: { en: "Near water, always wear a life jacket and stay close to grown-ups.", hi: "पानी के पास हमेशा लाइफ़ जैकेट पहनो और बड़ों के पास रहो।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.35, cape: true }, { id: "pinku", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
      props: [ { id: "boat", x: 0.12 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Picnic day at Chamak Lake! The whole family is here, with Pinku as a special guest.", hi: "चमक झील पर पिकनिक का दिन! पूरा परिवार आया है, और पिंकू ख़ास मेहमान है।" },
        say: [ { who: 1, en: "Rule number one: nobody goes in the water without a grown-up!", hi: "पहला नियम: बड़ों के बिना कोई पानी में नहीं जाएगा!" } ]
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "lie", mood: "sleepy", x: 0.5 } ],
        cap: { en: "But Pinku finds a comfy floating tube at the water's edge, still wearing his tiny life jacket...", hi: "पर पिंकू को किनारे पर एक आरामदायक तैरती ट्यूब मिल गई, अपनी छोटी-सी लाइफ़ जैकेट पहने-पहने..." },
        say: [ { who: 0, en: "Ahh... a floating bed. Just a teeny little nap...", hi: "आह... तैरता बिस्तर। बस एक छोटी-सी झपकी...", kind: "whisper" } ]
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "scared", x: 0.7, flip: true } ],
        props: [ { id: "tree", x: 0.08 } ],
        cap: { en: "Meanwhile, a sneaky breeze pushes the tube... further... and FURTHER out into the lake!", hi: "उधर, एक शरारती हवा ट्यूब को धकेलती गई... दूर... और दूर... झील के बीच की ओर!" },
        say: [ { who: 0, en: "HELP! My bed is sailing away! I'm too fabulous to be a boat!", hi: "बचाओ! मेरा बिस्तर बह रहा है! मैं इतना शानदार हूँ, नाव नहीं!", kind: "shout" } ],
        fx: { en: "EEK!", hi: "उई माँ!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Pugs can't swim well! Auggie, gently does it. Bring the tube back!", hi: "पग ठीक से तैर नहीं पाते! ऑगी, आराम से। ट्यूब को वापस लाओ!" },
          { who: 0, en: "Swimming is my superpower, Mumma! Woof-woof, let's go!", hi: "तैरना मेरी सुपरपावर है, मम्मा! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "One giant hero leap... and Super Auggie paddles through the water like a golden motorboat!", hi: "एक बड़ी हीरो वाली छलांग... और सुपर ऑगी सुनहरी मोटरबोट की तरह पानी चीरता चला!" },
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "pinku", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Hold on tight, Pinku! I've got the tube's rope in my mouth.", hi: "कसकर पकड़ो, पिंकू! ट्यूब की रस्सी मेरे मुँह में है।" },
          { who: 1, en: "Don't let go! And... please don't splash my face!", hi: "छोड़ना मत! और हाँ... प्लीज़ मेरे मुँह पर छींटे मत मारना!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.3, cape: true }, { id: "papa", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "Paddle, paddle, pull! Auggie tows the tube to the shore, where Papa waits to lift Pinku out.", hi: "पैडल, पैडल, खींचो! ऑगी ट्यूब को किनारे तक लाया, जहाँ पापा पिंकू को उठाने को तैयार थे।" },
        say: [ { who: 1, en: "Got him! Well done, Super Auggie!", hi: "पकड़ लिया! शाबाश, सुपर ऑगी!", kind: "shout" } ],
        fx: { en: "HEAVE-HO!", hi: "हइस्सा!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "sit", mood: "happy", x: 0.22 }, { id: "auggie", pose: "lie", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "umbrella", x: 0.95 } ],
        cap: { en: "Wrapped in a towel, Pinku makes a new rule: naps only on dry land!", hi: "तौलिये में लिपटे पिंकू ने नया नियम बनाया: झपकी सिर्फ़ सूखी ज़मीन पर!" },
        say: [ { who: 0, en: "Auggie, you're my hero. Please don't tell anyone I squealed.", hi: "ऑगी, तुम मेरे हीरो हो। प्लीज़ किसी को मत बताना कि मैं चीखा था।", kind: "whisper" } ]
      }
    ]
  },
  {
    id: 85,
    age: "6-10",
    category: "mystery",
    title: { en: "The Mystery of the Hooting Haveli", hi: "हू-हू करती हवेली का रहस्य" },
    blurb: { en: "Strange hoots and glowing eyes in the old haveli! Detective Auggie and Nanu set out to find the truth.", hi: "पुरानी हवेली में अजीब 'हू-हू' और चमकती आँखें! जासूस ऑगी और नानू सच ढूँढने निकले।" },
    moral: { en: "Many scary things stop being scary once you understand them.", hi: "जिसे समझ लो, उससे डर नहीं लगता।" },
    cover: {
      bg: "citynight",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3, cape: true }, { id: "owl", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "house", x: 0.55 }, { id: "star", x: 0.1, y: 0.15 } ],
      fx: { en: "HOO-HOO!", hi: "हू-हू!" }
    },
    panels: [
      {
        bg: "citynight",
        chars: [ { id: "rohan", pose: "stand", mood: "scared", x: 0.3 }, { id: "anaya", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "house", x: 0.52 } ],
        cap: { en: "Chamakpur, night. The old haveli on Peepal Lane has been empty for years...", hi: "चमकपुर की रात। पीपल गली की पुरानी हवेली बरसों से ख़ाली पड़ी है..." },
        say: [
          { who: 0, en: "Did you hear that? HOO-HOO! And I saw two big glowing eyes!", hi: "सुना तुमने? हू-हू! और मैंने दो बड़ी चमकती आँखें देखीं!" },
          { who: 1, en: "Everyone says the haveli is haunted!", hi: "सब कहते हैं हवेली में भूत है!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3, cape: true }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Next morning, the kids tell Auggie and Nanu everything.", hi: "अगली सुबह बच्चों ने ऑगी और नानू को सब बताया।" },
        say: [
          { who: 1, en: "Haunted? Ho ho! Let's think like scientists. First, we observe!", hi: "भूत? हो हो! चलो वैज्ञानिकों की तरह सोचें। पहले ध्यान से देखें!" },
          { who: 0, en: "Detective Super Auggie is on the case! Woof-woof, let's go!", hi: "जासूस सुपर ऑगी इस केस पर है! भौं-भौं, चलो चलें!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.25, cape: true }, { id: "nanu", pose: "stand", mood: "happy", x: 0.5 }, { id: "rohan", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        props: [ { id: "house", x: 0.95 } ],
        cap: { en: "That evening, the team tiptoes to the haveli gate with a big torch.", hi: "उस शाम, टीम एक बड़ी टॉर्च लेकर दबे पाँव हवेली के गेट तक पहुँची।" },
        say: [ { who: 2, en: "Auggie... you go first. You're the one with the cape!", hi: "ऑगी... तुम आगे चलो। केप तो तुम्हारे पास है!", kind: "whisper" } ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.35, cape: true } ],
        props: [ { id: "house", x: 0.75 } ],
        cap: { en: "Super Ears listen carefully... The hooting comes from high up, near a broken window.", hi: "सुपर कान ध्यान से सुन रहे हैं... 'हू-हू' ऊपर से आ रहा है, एक टूटी खिड़की के पास से।" },
        fx: { en: "HOO-HOO!", hi: "हू-हू!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3, cape: true }, { id: "nanu", pose: "think", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Meanwhile, the Super Sniffer finds a clue under the window: feathers, lots of them!", hi: "उधर, सुपर नाक को खिड़की के नीचे सुराग मिला: पंख, ढेर सारे पंख!" },
        say: [ { who: 1, en: "Feathers, hoots, big shining eyes at night... Auggie, do you know who it is?", hi: "पंख, हू-हू, रात में चमकती बड़ी आँखें... ऑगी, समझे कौन है?" } ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "owl", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "house", x: 0.9 } ],
        say: [
          { who: 1, en: "Hoo! Hello! I'm Ullu Uncle, and this is my family's cosy home!", hi: "हू! नमस्ते! मैं उल्लू अंकल हूँ, और ये मेरे परिवार का प्यारा घर है!" },
          { who: 0, en: "An owl! Not a ghost at all, just a friendly neighbour!", hi: "उल्लू! कोई भूत-वूत नहीं, बस एक प्यारे पड़ोसी!" }
        ],
        fx: { en: "TA-DA!", hi: "टा-डा!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.3 }, { id: "owl", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Owls stay awake at night, and their big eyes shine in torchlight. Pure science!", hi: "उल्लू रात में जागते हैं, और टॉर्च की रोशनी में उनकी बड़ी आँखें चमकती हैं। सीधा विज्ञान!" },
          { who: 1, en: "And please, no loud noise. My owlets are still learning to fly!", hi: "और प्लीज़, शोर मत करना। मेरे बच्चे अभी उड़ना सीख रहे हैं!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "anaya", pose: "cheer", mood: "happy", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "house", x: 0.95 } ],
        cap: { en: "Anaya paints a sign for the gate: 'Owl Family Home. Please Be Quiet!'", hi: "अनाया ने गेट के लिए बोर्ड बनाया: 'उल्लू परिवार का घर। कृपया शांति रखें!'" },
        say: [ { who: 2, en: "The spooky haveli is now the coolest house in Chamakpur!", hi: "डरावनी हवेली अब चमकपुर का सबसे कूल घर है!" } ]
      }
    ]
  },
  {
    id: 86,
    age: "6-10",
    category: "planet",
    title: { en: "Snowy's Heatwave Emergency", hi: "स्नोवी और गर्मी की आफ़त" },
    blurb: { en: "Chamakpur is baking, Snowy the husky is melting, and every street animal is thirsty. Super Auggie to the rescue!", hi: "चमकपुर तप रहा है, हस्की स्नोवी पिघल रहा है, और हर गली का जानवर प्यासा है। सुपर ऑगी हाज़िर!" },
    moral: { en: "In summer, share water and shade with every animal.", hi: "गर्मी में हर जानवर के साथ पानी और छाँव बाँटो।" },
    cover: {
      bg: "city",
      chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "snowy", pose: "lie", mood: "sad", x: 0.72, flip: true } ],
      props: [ { id: "sun", x: 0.88, y: 0.12 }, { id: "bowl", x: 0.52 } ],
      fx: { en: "SIZZLE!", hi: "छन्न!" }
    },
    panels: [
      {
        bg: "city",
        chars: [ { id: "snowy", pose: "lie", mood: "sad", x: 0.4 } ],
        props: [ { id: "sun", x: 0.85, y: 0.12 }, { id: "car", x: 0.1 } ],
        cap: { en: "May in Chamakpur. The sun is blazing. The road is hot enough to cook a dosa!", hi: "चमकपुर में मई। सूरज आग बरसा रहा है। सड़क इतनी गरम कि डोसा सेंक लो!" },
        say: [ { who: 0, en: "I'm... melting... Somebody send me back to the mountains!", hi: "मैं... पिघल... रहा हूँ... कोई मुझे पहाड़ों पर वापस भेजो!" } ],
        fx: { en: "SIZZLE!", hi: "छन्न!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "snowy", pose: "lie", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.88, y: 0.12 } ],
        say: [
          { who: 0, en: "Snowy! You're panting so hard. Let's get you into the shade, NOW!", hi: "स्नोवी! तुम कितना हाँफ रहे हो। चलो, अभी छाँव में चलो!" },
          { who: 1, en: "Thanks... but look, Auggie. Moti and the others are thirsty too.", hi: "शुक्रिया... पर देखो ऑगी। मोती और बाकी सब भी प्यासे हैं।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.5 }, { id: "bottle", x: 0.92 } ],
        say: [
          { who: 1, en: "This is a water emergency! Every bowl, bucket and bottle in the house, please!", hi: "ये पानी की इमरजेंसी है! घर का हर कटोरा, बाल्टी, बोतल ले आओ!" },
          { who: 0, en: "Operation Cool Paws! Woof-woof, let's go!", hi: "ऑपरेशन ठंडे पंजे! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "sun", x: 0.85, y: 0.15 } ],
        cap: { en: "Meanwhile, across Chamakpur, Super Ears follow every tired pant and thirsty whimper.", hi: "उधर, पूरे चमकपुर में सुपर कान हर थकी हाँफ और प्यासी कूँ-कूँ के पीछे चले।" },
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "moti", pose: "stand", mood: "happy", x: 0.22 }, { id: "cow", pose: "stand", mood: "happy", x: 0.5 }, { id: "papa", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "bowl", x: 0.35 }, { id: "bowl", x: 0.65 }, { id: "tree", x: 0.95 } ],
        cap: { en: "The family puts water bowls in shady spots on every lane, for dogs, cats, cows and birds.", hi: "परिवार ने हर गली में छाँव वाली जगहों पर पानी के कटोरे रखे, कुत्तों, बिल्लियों, गायों और चिड़ियों के लिए।" },
        say: [ { who: 0, en: "Slurp! Best water party ever! Thank you, Gaurav Uncle!", hi: "सुड़प! अब तक की सबसे बढ़िया पानी-पार्टी! शुक्रिया, गौरव अंकल!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "pigeon", pose: "stand", mood: "happy", x: 0.2 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.78, flip: true }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5, cape: true } ],
        props: [ { id: "bowl", x: 0.35 } ],
        cap: { en: "On the rooftop, Dadi fills clay bowls with cool water for the birds.", hi: "छत पर दादी ने चिड़ियों के लिए मिट्टी के कटोरों में ठंडा पानी भरा।" },
        say: [
          { who: 0, en: "Gutur-goo! Cool water on a hot day! Dadi, you're the best!", hi: "गुटर-गूँ! गर्मी में ठंडा पानी! दादी, आप सबसे अच्छी हो!" },
          { who: 1, en: "Every living thing gets thirsty, my dear. Drink up!", hi: "हर जीव को प्यास लगती है, मेरे प्यारे। जी भर के पियो!" }
        ]
      },
      {
        bg: "vet",
        chars: [ { id: "snowy", pose: "sit", mood: "happy", x: 0.2 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.8, flip: true }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5, cape: true } ],
        cap: { en: "At the vet, Snowy gets a check-up and a cool towel. Walks only in early mornings now!", hi: "वेट के पास स्नोवी का चेकअप हुआ और ठंडा तौलिया मिला। अब सैर सिर्फ़ सुबह-सुबह!" },
        say: [
          { who: 0, en: "And everyone: NEVER leave a dog in a hot car!", hi: "और सब लोग सुनो: कुत्ते को गरम गाड़ी में कभी मत छोड़ना!", kind: "shout" },
          { who: 1, en: "Noted, Snowy! And fresh water every single day.", hi: "याद रहेगा, स्नोवी! और रोज़ ताज़ा पानी भी।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "snowy", pose: "lie", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "moti", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "tree", x: 0.05 }, { id: "bowl", x: 0.93 } ],
        cap: { en: "By evening, Chamakpur has 100 water bowls, and every animal has a cool, shady spot.", hi: "शाम तक चमकपुर में 100 पानी के कटोरे थे, और हर जानवर के पास ठंडी छाँव।" },
        say: [ { who: 0, en: "Ahh! Now THIS feels like the mountains!", hi: "आहा! अब लग रहा है जैसे पहाड़ों पर हूँ!" } ],
        fx: { en: "COOL!", hi: "ठंडक!" },
        action: true
      }
    ]
  },
  {
    id: 87,
    age: "6-10",
    category: "sports",
    title: { en: "Chiku's Big Race", hi: "चीकू की बड़ी दौड़" },
    blurb: { en: "Chiku is the fastest dog in Chamakpur, but also the most curious. Can he stay focused and win?", hi: "चीकू चमकपुर का सबसे तेज़ कुत्ता है, पर सबसे जिज्ञासु भी। क्या वो ध्यान लगाकर जीत पाएगा?" },
    moral: { en: "Keep your eyes on your goal, and cheer for your friends.", hi: "अपने लक्ष्य पर नज़र रखो, और दोस्तों का हौसला बढ़ाओ।" },
    cover: {
      bg: "playground",
      chars: [ { id: "chiku", pose: "run", mood: "happy", x: 0.4 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.78, flip: true, cape: true } ],
      props: [ { id: "trophy", x: 0.1 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "cheer", mood: "happy", x: 0.3 }, { id: "zoya", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "The Chamakpur Paws Dash is on Sunday! Zoya, the fastest runner in the colony, has an idea.", hi: "रविवार को है चमकपुर पॉज़ डैश! कॉलोनी की सबसे तेज़ धाविका ज़ोया के पास एक आइडिया है।" },
        say: [
          { who: 1, en: "Chiku, you're the fastest dog I know. Enter the Paws Dash!", hi: "चीकू, मेरे जाने तुम सबसे तेज़ कुत्ते हो। पॉज़ डैश में हिस्सा लो!" },
          { who: 0, en: "A race? Yes! Wait... is that a butterfly?", hi: "रेस? हाँ! रुको... क्या वो तितली है?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "point", mood: "surprised", x: 0.33 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "flower", x: 0.12 } ],
        cap: { en: "Practice run! Chiku zooms off... then stops to sniff a flower, a leaf, a shoe and an ant.", hi: "प्रैक्टिस! चीकू ज़ूम से भागा... फिर एक फूल, एक पत्ता, एक जूता और एक चींटी सूँघने रुक गया।" },
        say: [ { who: 1, en: "Chiku! The finish line is THAT way!", hi: "चीकू! फ़िनिश लाइन उस तरफ़ है!", kind: "shout" } ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "sit", mood: "sad", x: 0.3 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "I can't help it, Auggie. The world is full of interesting smells!", hi: "क्या करूँ, ऑगी। दुनिया में इतनी मज़ेदार खुशबुएँ हैं!" },
          { who: 1, en: "I know! I'm a Labrador. But champions save the sniffing for AFTER the race.", hi: "पता है! मैं भी तो लैब्राडोर हूँ। पर चैंपियन सूँघना रेस के बाद करते हैं।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "run", mood: "determined", x: 0.3 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.72, flip: true, cape: true } ],
        props: [ { id: "bone", x: 0.5 }, { id: "ball", x: 0.92 } ],
        cap: { en: "Coach Super Auggie's secret training: run past the treats and keep your eyes on the finish line!", hi: "कोच सुपर ऑगी की सीक्रेट ट्रेनिंग: दावत के पास से दौड़ते निकलो और नज़र फ़िनिश लाइन पर रखो!" },
        say: [ { who: 1, en: "Eyes on the line! Eyes on the line!", hi: "नज़र लाइन पर! नज़र लाइन पर!", kind: "shout" } ]
      },
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "run", mood: "determined", x: 0.22 }, { id: "moti", pose: "run", mood: "determined", x: 0.47 }, { id: "snowy", pose: "run", mood: "happy", x: 0.75 } ],
        cap: { en: "Race day! Moti, Snowy and a dozen speedy dogs line up. Ready... steady... GO!", hi: "रेस का दिन! मोती, स्नोवी और दर्जन भर तेज़ कुत्ते लाइन में। रेडी... स्टेडी... गो!" },
        fx: { en: "GO!", hi: "चलो!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "think", mood: "surprised", x: 0.4 } ],
        props: [ { id: "flower", x: 0.72 } ],
        cap: { en: "Meanwhile, halfway round the track, a big blue butterfly flutters right past Chiku's nose...", hi: "उधर, आधे ट्रैक पर, एक बड़ी नीली तितली चीकू की नाक के ठीक सामने से उड़ी..." },
        say: [ { who: 0, en: "Ooh, so pretty! Maybe just one little sniff...", hi: "ओह, कितनी सुंदर! बस एक छोटा-सा सूँघना...", kind: "think" } ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "From the crowd, a very familiar WOOF rings out!", hi: "भीड़ में से एक जानी-पहचानी भौंक गूँजी!" },
        say: [ { who: 0, en: "CHIKU! EYES ON THE LINE!", hi: "चीकू! नज़र लाइन पर!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2, cape: true }, { id: "chiku", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "zoya", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.62 }, { id: "flower", x: 0.95 } ],
        cap: { en: "Chiku zooms past the finish line: FIRST! Then he sniffs the butterfly's flower as a winner's treat.", hi: "चीकू फ़र्राटे से फ़िनिश लाइन के पार: पहला! फिर जीत की दावत में तितली वाला फूल सूँघा।" },
        say: [ { who: 1, en: "Thank you, Coach Auggie! Now can I sniff EVERYTHING?", hi: "थैंक यू, कोच ऑगी! अब मैं सब कुछ सूँघ सकता हूँ?" } ],
        fx: { en: "WINNER!", hi: "जीत गया!" },
        action: true
      }
    ]
  },
  {
    id: 88,
    age: "6-10",
    category: "planet",
    title: { en: "The Diwali of a Thousand Diyas", hi: "हज़ार दीयों वाली दिवाली" },
    blurb: { en: "Loud firecrackers are scaring Chamakpur's animals, so Super Auggie lights up a brand-new kind of Diwali.", hi: "तेज़ पटाखे चमकपुर के जानवरों को डरा रहे हैं, तो सुपर ऑगी ने शुरू की एक नई तरह की दिवाली।" },
    moral: { en: "Celebrate with lights and love, and keep festivals kind to animals.", hi: "रोशनी और प्यार से त्योहार मनाओ, और जानवरों का भी ख़याल रखो।" },
    cover: {
      bg: "festival",
      chars: [ { id: "auggie", pose: "fly", mood: "happy", x: 0.4, cape: true }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.78, flip: true } ],
      props: [ { id: "diya", x: 0.12 }, { id: "diya", x: 0.6 }, { id: "star", x: 0.9, y: 0.15 } ],
      fx: { en: "SHINE!", hi: "चमक!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "anaya", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "diya", x: 0.5 }, { id: "diya", x: 0.92 } ],
        cap: { en: "Diwali in Chamakpur! Diyas on every step, rangoli at every door.", hi: "चमकपुर में दिवाली! हर सीढ़ी पर दीये, हर दरवाज़े पर रंगोली।" },
        say: [
          { who: 1, en: "Auggie, look at my peacock rangoli! Isn't it beautiful?", hi: "ऑगी, मेरी मोर वाली रंगोली देखो! सुंदर है ना?" },
          { who: 0, en: "Beautiful! And no paw prints on it... yet!", hi: "बहुत सुंदर! और इस पर कोई पंजे का निशान नहीं... अभी तक!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.4 } ],
        props: [ { id: "star", x: 0.2, y: 0.15 }, { id: "star", x: 0.8, y: 0.1 } ],
        cap: { en: "Suddenly, loud firecrackers go off down the street!", hi: "अचानक, गली में तेज़ पटाखे फूटने लगे!" },
        say: [ { who: 0, en: "Ow, my ears! Super Ears hear everything ten times LOUDER!", hi: "आह, मेरे कान! सुपर कानों को हर आवाज़ दस गुना तेज़ सुनाई देती है!", kind: "shout" } ],
        fx: { en: "BOOM!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "cat", pose: "stand", mood: "scared", x: 0.3 }, { id: "pinku", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.52 } ],
        cap: { en: "Meanwhile, across Chamakpur, animals are hiding everywhere: under cars, behind pots, beneath beds.", hi: "उधर, पूरे चमकपुर में जानवर जहाँ-तहाँ छुप रहे थे: गाड़ियों के नीचे, गमलों के पीछे, पलंग के नीचे।" },
        say: [
          { who: 0, en: "My kittens are shaking! Please, someone help!", hi: "मेरे बच्चे काँप रहे हैं! प्लीज़, कोई मदद करो!" },
          { who: 1, en: "Is the sky angry with us? Make it stop!", hi: "क्या आसमान हमसे नाराज़ है? इसे रोको!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "diya", x: 0.52 } ],
        say: [
          { who: 1, en: "Firecrackers scare animals, Auggie. Let's show Chamakpur the kind way to celebrate!", hi: "पटाखों से जानवर डरते हैं, ऑगी। चलो चमकपुर को प्यार से त्योहार मनाना दिखाएँ!" },
          { who: 0, en: "A Diwali of lights, not bangs! Woof-woof, let's go!", hi: "धमाकों वाली नहीं, रोशनी वाली दिवाली! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "house", x: 0.1 }, { id: "house", x: 0.9 } ],
        cap: { en: "Super Auggie leaps from rooftop to rooftop, gently asking every family to light diyas instead.", hi: "सुपर ऑगी एक छत से दूसरी छत पर कूदा, और हर परिवार से प्यार से कहा: पटाखों की जगह दीये जलाओ।" },
        fx: { en: "WHOOSH!", hi: "सर्र!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "rohan", pose: "think", mood: "sad", x: 0.3 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.72, flip: true, cape: true } ],
        props: [ { id: "diya", x: 0.52 } ],
        say: [
          { who: 0, en: "But Diwali without crackers? Won't it be boring?", hi: "पर पटाखों के बिना दिवाली? बोरिंग नहीं होगी?" },
          { who: 1, en: "Come and see! Anaya has a sparkly plan!", hi: "आकर देखो! अनाया के पास एक चमचमाता प्लान है!" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "anaya", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "kabir", pose: "cheer", mood: "happy", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.08 }, { id: "diya", x: 0.36 }, { id: "diya", x: 0.64 }, { id: "diya", x: 0.94 } ],
        cap: { en: "The whole street lights a thousand diyas, draws giant rangolis, and sings Diwali songs together!", hi: "पूरी गली ने हज़ार दीये जलाए, बड़ी-बड़ी रंगोलियाँ बनाईं, और मिलकर दिवाली के गीत गाए!" },
        say: [ { who: 2, en: "This is the most beautiful Diwali I have ever seen!", hi: "ऐसी सुंदर दिवाली मैंने पहले कभी नहीं देखी!" } ],
        fx: { en: "SHINE!", hi: "चमक!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "cat", pose: "sit", mood: "happy", x: 0.22 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.5, cape: true }, { id: "pinku", pose: "sit", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.05 }, { id: "diya", x: 0.95 } ],
        cap: { en: "One by one, the animals come out of hiding. The kittens even curl up beside Auggie.", hi: "एक-एक करके जानवर बाहर आ गए। बिल्ली के बच्चे तो ऑगी से सटकर सो गए।" },
        say: [ { who: 0, en: "Thank you, Super Auggie. This is the happiest Diwali ever!", hi: "शुक्रिया, सुपर ऑगी। ये अब तक की सबसे ख़ुशियों भरी दिवाली है!" } ]
      }
    ]
  }
);
