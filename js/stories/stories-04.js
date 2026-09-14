window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(
  {
    id: 67,
    age: "6-10",
    category: "superhero",
    title: { en: "The Sofa Dog Who Became Super", hi: "सोफ़े वाला ऑगी बना सुपर ऑगी" },
    blurb: { en: "Little Kabir is lost in a mela of a thousand smells. Can one lazy golden nose find him?", hi: "हज़ारों खुशबुओं वाले मेले में नन्हा कबीर खो गया! क्या एक आलसी सुनहरी नाक उसे ढूँढ पाएगी?" },
    moral: { en: "Your special gift shines brightest when you use it to help someone.", hi: "अपनी ख़ासियत किसी की मदद में लगाओ, तभी वो सबसे ज़्यादा चमकती है।" },
    cover: {
      bg: "action",
      chars: [ { id: "auggie", pose: "fly", mood: "happy", x: 0.42, cape: true }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
      props: [ { id: "star", x: 0.12, y: 0.2 }, { id: "balloon", x: 0.9, y: 0.25 } ],
      fx: { en: "WOOF!", hi: "भौं-भौं!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.25 }, { id: "mumma", pose: "point", mood: "happy", x: 0.55, flip: true }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "balloon", x: 0.1, y: 0.25 } ],
        cap: { en: "The Chamakpur Mela! Giant wheels, hot jalebis, and a crowd bigger than the sea.", hi: "चमकपुर का मेला! बड़े-बड़े झूले, गरम जलेबियाँ, और समंदर से भी बड़ी भीड़!" },
        say: [
          { who: 0, en: "Jalebi! Popcorn! Samosa! Mumma, my nose is having a birthday party!", hi: "जलेबी! पॉपकॉर्न! समोसा! मम्मा, मेरी नाक की तो आज दिवाली है!" },
          { who: 1, en: "First, my list: leash on, stay close, and NO jalebis for doggies!", hi: "पहले मेरी लिस्ट सुनो: पट्टा पहनो, पास रहो, और जलेबी बिल्कुल नहीं!" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "papa", pose: "stand", mood: "scared", x: 0.3 }, { id: "rohan", pose: "run", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "balloon", x: 0.5, y: 0.2 } ],
        cap: { en: "Suddenly, a panicky shout cuts right through the music...", hi: "तभी, ढोल-नगाड़ों के बीच एक घबराई हुई चीख़ सुनाई दी..." },
        say: [
          { who: 1, en: "Gaurav Uncle! Kabir let go of my hand... and now he's GONE!", hi: "गौरव अंकल! कबीर ने मेरा हाथ छुड़ाया... और अब वो कहीं नहीं है!", kind: "shout" },
          { who: 0, en: "Nobody panic! ...Okay, I'm panicking a teeny bit.", hi: "कोई घबराए नहीं! ...अच्छा, मैं थोड़ा-सा घबरा रहा हूँ।" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.25 }, { id: "papa", pose: "stand", mood: "scared", x: 0.55, flip: true }, { id: "mumma", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        say: [
          { who: 2, en: "Mittsy, there are a thousand people here! How do we find one little boy?", hi: "मिट्सी, यहाँ तो हज़ारों लोग हैं! इतनी भीड़ में एक छोटा-सा बच्चा कैसे ढूँढें?" },
          { who: 0, en: "Wait! My nose isn't just for snacks. Kabir smells of mango toffee and crayons!", hi: "रुको! मेरी नाक सिर्फ़ खाने के लिए नहीं है। कबीर से आम वाली टॉफ़ी और क्रेयॉन की महक आती है!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.5 } ],
        cap: { en: "Nose on TURBO! Jalebi... no. Samosa... NO! Focus, Auggie! Mango toffee... crayons... THIS WAY!", hi: "नाक टर्बो मोड पर! जलेबी... नहीं। समोसा... नहीं-नहीं! ध्यान से, ऑगी! आम की टॉफ़ी... क्रेयॉन... इधर!" },
        say: [ { who: 0, en: "Sorry, jalebi. Friends first!", hi: "सॉरी जलेबी, पहले दोस्त!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.32 }, { id: "kabir", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "balloon", x: 0.9, y: 0.25 } ],
        cap: { en: "Behind the toy stall, a tiny boy sits hugging his knees...", hi: "खिलौनों की दुकान के पीछे, एक नन्हा बच्चा घुटनों में मुँह छुपाए बैठा था..." },
        say: [
          { who: 1, en: "Auggie! I followed a red balloon. I wasn't crying... okay, only a little.", hi: "ऑगी! मैं लाल गुब्बारे के पीछे चला गया था। रो नहीं रहा था... बस थोड़ा-सा।", kind: "whisper" },
          { who: 0, en: "Found you, little champ! Hold my collar. My nose knows the way back.", hi: "मिल गए, नन्हे उस्ताद! मेरा पट्टा पकड़ो। वापसी का रास्ता मेरी नाक को पता है।" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "kabir", pose: "stand", mood: "happy", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Auggie trots back with Kabir, tail waving like a flag. The whole mela cheers!", hi: "ऑगी कबीर को लेकर लौटा, पूँछ झंडे की तरह लहराती हुई। पूरा मेला तालियाँ बजाने लगा!" },
        say: [ { who: 2, en: "HA-HA-HA! Five minutes flat! My sofa-sleeping baby is a HERO!", hi: "हा-हा-हा! सिर्फ़ पाँच मिनट! मेरा सोफ़े पर सोने वाला राजा बेटा तो हीरो निकला!", kind: "shout" } ],
        fx: { en: "HOORAY!", hi: "हुर्रे!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.33, cape: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.7, flip: true } ],
        cap: { en: "That night, Mumma opens a secret bundle: a red cape with a shining golden paw.", hi: "उस रात मम्मा ने एक छुपी हुई पोटली खोली: लाल केप, जिस पर चमकता सुनहरा पंजा!" },
        say: [
          { who: 1, en: "I stitched this for a very special day. Today was that day, my hero.", hi: "ये मैंने किसी ख़ास दिन के लिए सिली थी। आज वही दिन था, मेरे शेर।" },
          { who: 0, en: "A cape? For ME? Can I nap in it too?", hi: "केप? मेरे लिए? इसे पहनकर सो भी सकता हूँ ना?" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "star", x: 0.18, y: 0.2 }, { id: "star", x: 0.82, y: 0.3 } ],
        cap: { en: "And so Chamakpur got a brand-new hero, powered by one big heart... and ten carrots a day. SUPER AUGGIE!", hi: "और इस तरह चमकपुर को मिला नया हीरो: एक बड़ा दिल... और रोज़ की दस गाजरें। सुपर ऑगी!" },
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
    title: { en: "Who Gobbled Dadi's Diwali Laddoos?", hi: "दादी के लड्डू किसने गटके?" },
    blurb: { en: "Dadi's laddoos vanish and the crumbs lead straight to Auggie's bed. Is the hungry Labrador really the thief?", hi: "दादी के लड्डू ग़ायब, और चूरा मिला सीधे ऑगी के बिस्तर के पास! क्या सच में ऑगी ने गटके?" },
    moral: { en: "Look for the truth before you blame someone, even a hungry Labrador.", hi: "किसी पर इल्ज़ाम लगाने से पहले सच ढूँढो, चाहे सामने भूखा लैब्राडोर ही क्यों न हो।" },
    cover: {
      bg: "kitchen",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.38, cape: true }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.76, flip: true } ],
      props: [ { id: "bowl", x: 0.12 } ],
      fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }
    },
    panels: [
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Diwali morning. Dadi has made a mountain of golden besan laddoos.", hi: "दिवाली की सुबह। दादी ने बेसन के सुनहरे लड्डुओं का पूरा पहाड़ बना दिया है।" },
        say: [
          { who: 1, en: "These are for the puja, Auggie. Laddoos and doggies? NOT friends!", hi: "ये भगवान जी के लिए हैं, ऑगी। और लड्डू कुत्तों के लिए बिल्कुल नहीं!" },
          { who: 0, en: "I know, Dadi. Sugar and ghee give me a grumbly tummy. But can I SMELL them?", hi: "पता है, दादी। घी-चीनी से मेरा पेट गुड़-गुड़ करता है। पर सूँघ तो सकता हूँ ना?" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Exactly one hour later...", hi: "ठीक एक घंटे बाद..." },
        say: [
          { who: 1, en: "Hai Ram! My laddoo plate is EMPTY! Only crumbs are left!", hi: "हाय राम! मेरी लड्डू की थाली ख़ाली! बस चूरा पड़ा है!", kind: "shout" },
          { who: 0, en: "Wasn't me! I was busy napping... very loudly!", hi: "मैं नहीं था! मैं तो सो रहा था... ज़ोर-ज़ोर से खर्राटे लेकर!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "papa", pose: "point", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.12 } ],
        say: [
          { who: 1, en: "Hmm, crumbs right next to your bed, Mister Labrador. Very suspicious!", hi: "हम्म... चूरा तो तुम्हारे बिस्तर के पास पड़ा है, ऑगी साहब। मामला गड़बड़ है!" },
          { who: 0, en: "It wasn't me, Papa! I swear on my favourite carrot!", hi: "मैंने नहीं खाए, पापा! अपनी सबसे प्यारी गाजर की क़सम खाता हूँ!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.33, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "I believe you, baby. Detective Super Auggie, go find the REAL laddoo thief!", hi: "मुझे तुम पर पूरा भरोसा है, राजा बेटा। जासूस सुपर ऑगी, असली लड्डू-चोर को पकड़ो!" },
          { who: 0, en: "Woof-woof, let's go! These crumbs will tell me everything.", hi: "भौं-भौं, चलो चलें! ये चूरा ही सारे राज़ खोलेगा।", kind: "shout" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4, cape: true } ],
        props: [ { id: "tree", x: 0.85 }, { id: "flower", x: 0.1 } ],
        cap: { en: "The Super Sniffer follows the crumb trail: out the window, over the wall, up the mango tree!", hi: "सुपर नाक चूरे के पीछे-पीछे: खिड़की से बाहर, दीवार के ऊपर, सीधे आम के पेड़ पर!" },
        say: [ { who: 0, en: "Sniff... ghee... sugar... and a BANANA peel? Now that's a clue!", hi: "सूँ-सूँ... घी... चीनी... और केले का छिलका? अब आया मज़ा!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "monkey", pose: "sit", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.82 } ],
        cap: { en: "High in the mango tree, someone is licking very sticky fingers...", hi: "आम के पेड़ पर ऊपर, कोई बड़े मज़े से चिपचिपी उँगलियाँ चाट रहा था..." },
        say: [
          { who: 0, en: "Bablu Bandar! Those laddoos are for Dadi's puja!", hi: "बबलू बंदर! वो लड्डू दादी की पूजा के हैं!", kind: "shout" },
          { who: 1, en: "Uh-oh! Caught by a dog in a CAPE? That's not fair!", hi: "अरे बाप रे! केप वाला कुत्ता? ये तो चीटिंग है!" }
        ],
        fx: { en: "CAUGHT!", hi: "पकड़ा!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "monkey", pose: "sit", mood: "sad", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.47, cape: true }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "banana", x: 0.92 } ],
        say: [
          { who: 0, en: "Sorry, Dadi! Nobody invites monkeys to Diwali, so I made my own party.", hi: "सॉरी, दादी! दिवाली पर बंदरों को कोई नहीं बुलाता, तो मैंने अपनी पार्टी कर ली।" },
          { who: 2, en: "Arre, just ask next time! Bananas for you, and my secret pallu carrot for my detective!", hi: "अरे पगले, माँग लेता! ये ले केले। और पल्लू वाली सीक्रेट गाजर मेरे जासूस के लिए!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.33, cape: true }, { id: "papa", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.52 } ],
        cap: { en: "That evening, the whole family says sorry, and Dadi brings Auggie crunchy apple slices.", hi: "शाम को पूरे परिवार ने ऑगी से सॉरी बोला, और दादी लाईं कुरकुरे सेब के टुकड़े।" },
        say: [
          { who: 1, en: "I'm sorry, Detective. I blamed you without proof. That was a very CRUMBY thing to do.", hi: "सॉरी जासूस जी, बिना सबूत के तुम पर शक किया। मेरी तो अक़्ल ही चूरा हो गई थी!" },
          { who: 0, en: "Ha! Terrible joke, Papa. Apology accepted... in apple slices!", hi: "हा हा! पापा, जोक बेकार था। पर सॉरी मंज़ूर... सेब के टुकड़ों के साथ!" }
        ]
      }
    ]
  },
  {
    id: 69,
    age: "6-10",
    category: "mystery",
    title: { en: "Where Did Nanu's Glasses Go?", hi: "नानू का चश्मा गया कहाँ?" },
    blurb: { en: "Nanu's glasses have vanished, and the sniff-trail runs round in circles. Where could they be hiding?", hi: "नानू का चश्मा ग़ायब, और महक का निशान गोल-गोल घूम रहा है! आख़िर चश्मा छुपा कहाँ है?" },
    moral: { en: "When something is lost, stay calm and look step by step, even up!", hi: "कुछ खो जाए तो घबराओ मत, आराम से एक-एक जगह देखो... ऊपर भी!" },
    cover: {
      bg: "home",
      chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.35, cape: true }, { id: "nanu", pose: "think", mood: "surprised", x: 0.74, flip: true } ],
      props: [ { id: "book", x: 0.12 } ]
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "sleepy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.52 } ],
        cap: { en: "Sunday morning. Nanu opens his favourite book about the stars.", hi: "रविवार की सुबह। नानू ने तारों वाली अपनी सबसे प्यारी किताब खोली।" },
        say: [
          { who: 1, en: "Oh dear! Where are my glasses? Without them, every word looks like a wriggly ant!", hi: "अरे राम! मेरा चश्मा कहाँ गया? उसके बिना हर अक्षर चींटी की तरह रेंगता दिखता है!" },
          { who: 0, en: "Maybe your glasses are taking a nap. I do that ALL the time.", hi: "शायद चश्मा भी झपकी ले रहा है। मैं भी तो लेता हूँ, दिन में बीस बार।", kind: "whisper" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "nanu", pose: "think", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "run", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Don't worry, Daddy! I've made a list: drawers, sofa, fridge, washing machine!", hi: "फ़िकर मत करो, डैडी! मैंने लिस्ट बना ली है: दराज़, सोफ़ा, फ्रिज, वॉशिंग मशीन!" },
          { who: 0, en: "The fridge? Beta, I'm forgetful, not a frozen pea!", hi: "फ्रिज? बेटा, मैं भुलक्कड़ हूँ, कोई ठंडी कुल्फ़ी नहीं!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.33, cape: true }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Nanu, your glasses smell of your sandalwood soap. Super Sniffer... ON!", hi: "नानू, आपके चश्मे से चंदन वाले साबुन की महक आती है। सुपर नाक... चालू!" },
          { who: 1, en: "Splendid! A dog's nose has 300 million smell sensors. Ours has only six million!", hi: "शाबाश! पता है, कुत्ते की नाक में तीस करोड़ सूँघने वाले सेंसर होते हैं, हमारी में बस साठ लाख!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.45, cape: true } ],
        props: [ { id: "sapling", x: 0.85 }, { id: "flower", x: 0.12 } ],
        cap: { en: "Clue one: the kitchen, where Nanu made tea. Clue two: the garden tap, where he watered the tulsi.", hi: "पहला सुराग: रसोई, जहाँ नानू ने चाय बनाई। दूसरा: बगीचे का नल, जहाँ तुलसी को पानी दिया।" },
        say: [ { who: 0, en: "Sandalwood! Found them! ...Oh. It's a bar of soap. Hmph.", hi: "चंदन! मिल गया! ...ओहो, ये तो साबुन की टिकिया है। हुँह!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.4, cape: true } ],
        props: [ { id: "tree", x: 0.85 }, { id: "bush", x: 0.1 } ],
        cap: { en: "Clue three: the park bench from the morning walk... but wait, the trail goes round in a circle!", hi: "तीसरा सुराग: सुबह की सैर वाली बेंच... पर ये क्या, निशान तो गोल-गोल घूम रहा है!" },
        say: [ { who: 0, en: "Kitchen, garden, park... every path leads back home. Back to... NANU?", hi: "रसोई, बगीचा, पार्क... हर रास्ता घर लौटता है। सीधे... नानू के पास?", kind: "think" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Back home, Super Auggie looks up... and up... and UP!", hi: "घर लौटकर सुपर ऑगी ने ऊपर देखा... और ऊपर... और ऊपर!" },
        say: [
          { who: 0, en: "Nanu! Your glasses are right there, sitting on top of your head!", hi: "नानू! आपका चश्मा तो आपके सिर पर ही बैठा है!", kind: "shout" },
          { who: 1, en: "On my HEAD? Impossible! I looked everywhere... except up there.", hi: "सिर पर? नामुमकिन! मैंने हर जगह देखा... बस ऊपर नहीं देखा।" }
        ],
        fx: { en: "FOUND IT!", hi: "मिल गया!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.22, cape: true }, { id: "nanu", pose: "cheer", mood: "laugh", x: 0.52, flip: true }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [
          { who: 1, en: "Ha ha! I pushed them up while watering the tulsi. Forgetful scientist, reporting for duty!", hi: "हा हा! तुलसी को पानी देते वक़्त ऊपर सरका दिया था। भुलक्कड़ वैज्ञानिक हाज़िर है!" },
          { who: 2, en: "HA-HA-HA! Daddy, I searched the FRIDGE for you!", hi: "हा-हा-हा! डैडी, मैंने आपके लिए फ्रिज तक खोल डाला!", kind: "shout" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3, cape: true }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.55 } ],
        cap: { en: "Now Nanu has a new rule: glasses on the nose, and one clever nose on his lap.", hi: "अब नानू का नया नियम: चश्मा नाक पर, और एक होशियार नाक उनकी गोद में!" },
        say: [
          { who: 1, en: "Thank you, Detective. Next time, I'll look UP before I panic!", hi: "शुक्रिया, जासूस जी। अगली बार घबराने से पहले ऊपर देख लूँगा!" },
          { who: 0, en: "Case closed! My fee: one belly rub and two carrots.", hi: "केस बंद! मेरी फ़ीस: एक बार पेट सहलाना और दो गाजर।" }
        ]
      }
    ]
  },
  {
    id: 70,
    age: "6-10",
    category: "mystery",
    title: { en: "The Squirrel with the Golden Hoop", hi: "गिलहरी का सुनहरा हूला-हूप" },
    blurb: { en: "Dadi's precious bangle vanishes, and something up in the neem tree is jingling. Who's hiding it?", hi: "दादी का अनमोल कंगन ग़ायब, और नीम के पेड़ से आ रही है छन-छन! आख़िर किसने छुपाया?" },
    moral: { en: "A gentle, kind way often works better than a big, loud one.", hi: "ज़ोर-ज़बरदस्ती से ज़्यादा, प्यार से माँगना काम आता है।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.35, cape: true }, { id: "dadi", pose: "stand", mood: "happy", x: 0.76, flip: true } ],
      props: [ { id: "tree", x: 0.1 }, { id: "flower", x: 0.55 } ]
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.22 }, { id: "pigeon", pose: "stand", mood: "laugh", x: 0.48 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "tree", x: 0.95 } ],
        cap: { en: "Every morning, Dadi scatters grains for the birds and squirrels. Breakfast time!", hi: "हर सुबह दादी बगीचे में चिड़ियों-गिलहरियों के लिए दाना बिखेरती हैं। नाश्ते का टाइम!" },
        say: [
          { who: 2, en: "Come, come, little ones! Breakfast is served... and no pushing, Gutargoo!", hi: "आओ, आओ, मेरे चुन्नू-मुन्नू! नाश्ता तैयार है... और धक्का-मुक्की नहीं, गुटरगूँ!" },
          { who: 1, en: "Gutur-goo! I never push, Dadi. I just... walk very fast.", hi: "गुटर-गूँ! मैं धक्का नहीं देता, दादी। बस... थोड़ा तेज़ चलता हूँ।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "dadi", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Hai Ram! My gold bangle is gone! My own Amma gave it to me!", hi: "हाय राम! मेरा सोने का कंगन ग़ायब! मेरी अम्मा ने दिया था!" },
          { who: 0, en: "Don't cry, Dadi! My nose is on the case. Carrot break... LATER!", hi: "रोओ मत, दादी! मेरी नाक काम पर लग गई। गाजर... बाद में!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.45, cape: true } ],
        props: [ { id: "flower", x: 0.12 }, { id: "bush", x: 0.85 } ],
        cap: { en: "The Super Sniffer searches under the tulsi, behind the pots, even inside Papa's very smelly garden shoes...", hi: "सुपर नाक ने सब छान मारा: तुलसी के नीचे, गमलों के पीछे, पापा के बदबूदार जूतों तक में..." },
        say: [ { who: 0, en: "Phew, Papa's shoes! ...Focus! The bangle smell stops at the neem tree.", hi: "उफ़्फ़, पापा के जूते! ...ध्यान, ऑगी! कंगन की महक नीम के पेड़ पर ख़त्म होती है।", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.32, cape: true } ],
        props: [ { id: "tree", x: 0.75 } ],
        cap: { en: "Super Ears catch a tiny jingle high up. Super Auggie tries to climb... and slides right down. Oof!", hi: "सुपर कानों ने ऊपर एक बारीक-सी छन-छन सुनी। सुपर ऑगी पेड़ पर चढ़ा... और सर्र से नीचे!" },
        say: [ { who: 0, en: "Note to self: Labradors are swimmers, not climbers.", hi: "याद रखना, ऑगी: लैब्राडोर तैरते हैं, पेड़ पर नहीं चढ़ते।", kind: "think" } ],
        fx: { en: "JINGLE!", hi: "छन-छन!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3, cape: true }, { id: "squirrel", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.82 } ],
        cap: { en: "Meanwhile, inside a cosy hole in the neem tree, Chinki the squirrel is showing off...", hi: "उधर, नीम के पेड़ के एक प्यारे-से खोखले में, चिंकी गिलहरी शान बघार रही थी..." },
        say: [
          { who: 1, en: "Look, babies! Mummy found a shiny golden hula-hoop! Wheee!", hi: "देखो बच्चो! मम्मी को चमचमाता सुनहरा हूला-हूप मिला! वी-ई-ई!" },
          { who: 0, en: "A hula-hoop? Uh-oh. She thinks it's a toy!", hi: "हूला-हूप? अरे बाप रे, वो तो उसे खिलौना समझ रही है!", kind: "think" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.3, cape: true }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "Super Auggie could do his MIGHTY WOOF... but it would frighten the baby squirrels.", hi: "सुपर ऑगी ज़ोरदार भौंक लगा सकता था... पर इससे गिलहरी के नन्हे बच्चे डर जाते।" },
        say: [
          { who: 0, en: "A big woof is easy. A gentle plan is harder... and better.", hi: "ज़ोर से भौंकना आसान है। प्यार वाला तरीका मुश्किल है... पर वही सही है।", kind: "think" },
          { who: 1, en: "Here, beta, a bowl of peanuts. Nobody says no to peanuts!", hi: "ये ले, बेटा, मूँगफली का कटोरा। मूँगफली को कोई मना नहीं करता!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3, cape: true }, { id: "squirrel", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.5 }, { id: "tree", x: 0.85 } ],
        say: [
          { who: 0, en: "Chinki, that hoop is Dadi's bangle, from her Amma. Swap it for peanuts?", hi: "चिंकी, वो हूला-हूप नहीं, दादी का कंगन है, उनकी अम्मा की निशानी। मूँगफली से बदलोगी?" },
          { who: 1, en: "Peanuts?! Deal! Sorry, I didn't know it was someone's treasure.", hi: "मूँगफली?! पक्का! सॉरी, मुझे नहीं पता था ये किसी का ख़ज़ाना है।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "dadi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.52 } ],
        cap: { en: "The bangle is back on Dadi's wrist, jingling like a happy little song!", hi: "कंगन फिर से दादी की कलाई में, छन-छन गाना गाता हुआ!" },
        say: [
          { who: 1, en: "My Super Auggie! An apple slice now, and my secret pallu carrot later!", hi: "मेरा सुपर ऑगी! अभी सेब का टुकड़ा, और बाद में पल्लू वाली सीक्रेट गाजर!" },
          { who: 0, en: "Secret? Dadi, the whole of Chamakpur knows about that carrot!", hi: "सीक्रेट? दादी, उस गाजर के बारे में तो पूरा चमकपुर जानता है!" }
        ],
        fx: { en: "HOORAY!", hi: "वाह!" },
        action: true
      }
    ]
  },
  {
    id: 71,
    age: "6-10",
    category: "mystery",
    title: { en: "The Lucky Ball That Went Hiding", hi: "लकी गेंद कहाँ छुप गई?" },
    blurb: { en: "Ten minutes to the big match, and Rohan's lucky ball has vanished! Is a sneaky dog to blame?", hi: "मैच में बस दस मिनट, और रोहन की लकी गेंद ग़ायब! कहीं किसी शरारती कुत्ते का काम तो नहीं?" },
    moral: { en: "Make room for everyone in the game, and nobody will feel left out.", hi: "खेल में सबको जगह दो, तो कोई अकेला महसूस नहीं करेगा।" },
    cover: {
      bg: "playground",
      chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.35, cape: true }, { id: "rohan", pose: "stand", mood: "surprised", x: 0.75, flip: true } ],
      props: [ { id: "ball", x: 0.12 } ]
    },
    panels: [
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "rohan", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "Saturday morning. The big gully cricket match starts in exactly ten minutes...", hi: "शनिवार की सुबह। गली का बड़ा क्रिकेट मैच ठीक दस मिनट में शुरू होगा..." },
        say: [
          { who: 1, en: "My lucky red ball is GONE! No ball, no match, no LIFE!", hi: "मेरी लकी लाल गेंद ग़ायब! गेंद नहीं, तो मैच नहीं... तो ज़िंदगी में कुछ नहीं!", kind: "shout" },
          { who: 0, en: "Don't panic! My nose once found Papa's lost sock. Under PAPA.", hi: "घबराओ मत! मेरी नाक ने तो पापा का खोया मोज़ा भी ढूँढा था... पापा के ही नीचे से!" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "stand", mood: "surprised", x: 0.22 }, { id: "pinku", pose: "stand", mood: "angry", x: 0.5 }, { id: "moti", pose: "stand", mood: "sleepy", x: 0.78, flip: true } ],
        cap: { en: "Detective Auggie lines up the suspects. Chiku loves balls, Pinku loves attention, Moti loves naps.", hi: "जासूस ऑगी ने शक वालों की लाइन लगाई। चीकू को गेंद प्यारी, पिंकू को तारीफ़, मोती को नींद।" },
        say: [
          { who: 1, en: "Me? A THIEF? I'm NEVER speaking to you again, Auggie! ...Starting tomorrow.", hi: "मैं? चोर? हुँह! ऑगी, मैं तुमसे कभी बात नहीं करूँगा! ...कल से।", kind: "shout" },
          { who: 2, en: "I was napping at the bus stop, bhai. Took a shortcut there. Took an hour.", hi: "मैं तो बस-स्टॉप पर सो रहा था, भाई। शॉर्टकट से गया था... पूरा एक घंटा लगा।" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "Super Auggie sniffs the empty spot. Leather... grass... sweaty socks... and... MANGO TOFFEE!", hi: "सुपर ऑगी ने ख़ाली जगह सूँघी। चमड़ा... घास... पसीने वाले मोज़े... और... आम वाली टॉफ़ी!" },
        say: [ { who: 0, en: "Mango toffee? Now THAT is a clue!", hi: "आम वाली टॉफ़ी? अब बनी बात!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.33, cape: true }, { id: "rohan", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Only ONE friend always smells of mango toffee. Someone small... and very quiet.", hi: "आम वाली टॉफ़ी की महक तो बस एक ही दोस्त से आती है... छोटा-सा, चुप-चुप सा।" },
          { who: 1, en: "Little Kabir? But he's never even played with us!", hi: "छोटा कबीर? पर वो तो कभी हमारे साथ खेला ही नहीं!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3, cape: true }, { id: "kabir", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.58 }, { id: "flower", x: 0.92 } ],
        cap: { en: "Behind the big flower pots, someone small is hugging a red ball very tightly...", hi: "बड़े गमलों के पीछे, कोई छोटा-सा एक लाल गेंद को कसकर सीने से लगाए बैठा था..." },
        say: [
          { who: 1, en: "Sorry, Auggie. I'm too small, so nobody ever picks me for their team.", hi: "सॉरी, ऑगी। मैं छोटा हूँ ना, इसलिए कोई मुझे टीम में नहीं लेता।", kind: "whisper" },
          { who: 0, en: "Hey, I'm not angry. Tell me everything, little champ.", hi: "अरे, मैं ग़ुस्सा नहीं हूँ। मुझे सब बताओ, नन्हे उस्ताद।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3, cape: true }, { id: "kabir", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.58 } ],
        say: [
          { who: 1, en: "I thought no ball means no cricket. Then maybe they'd play hide-and-seek with me.", hi: "मैंने सोचा... गेंद नहीं होगी तो क्रिकेट नहीं होगा। फिर शायद सब मेरे साथ छुपन-छुपाई खेलें।" },
          { who: 0, en: "Hiding things makes friends sad. Asking works better. Come, I'll stand right beside you.", hi: "चीज़ें छुपाने से दोस्त दुखी होते हैं। पूछ लेना ज़्यादा अच्छा है। चलो, मैं तुम्हारे साथ खड़ा रहूँगा।" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "kabir", pose: "stand", mood: "scared", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.47, cape: true }, { id: "rohan", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "ball", x: 0.3, y: 0.55 } ],
        say: [
          { who: 0, en: "Here's your ball, Rohan bhaiya. I'm really sorry I hid it.", hi: "ये लो आपकी गेंद, रोहन भैया। मैंने ही छुपाई थी... सॉरी।", kind: "whisper" },
          { who: 2, en: "And I'm sorry we never asked you. You're on MY team, and you're batting first!", hi: "और सॉरी, हमने तुम्हें कभी बुलाया ही नहीं। तुम मेरी टीम में हो, और पहली बैटिंग तुम्हारी!" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.78, flip: true, cape: true } ],
        props: [ { id: "ball", x: 0.92, y: 0.3 } ],
        cap: { en: "Kabir scores his first run! After the match, everyone plays hide-and-seek... and Auggie sniffs out all of them.", hi: "कबीर ने अपना पहला रन बनाया! मैच के बाद सबने छुपन-छुपाई खेली... और ऑगी ने सबको सूँघकर ढूँढ लिया!" },
        say: [ { who: 0, en: "One run! ONE WHOLE RUN! Auggie, did you see?!", hi: "एक रन! पूरा एक रन! ऑगी, तुमने देखा?!", kind: "shout" } ],
        fx: { en: "ONE RUN!", hi: "एक रन!" },
        action: true
      }
    ]
  },
  {
    id: 72,
    age: "6-10",
    category: "superhero",
    title: { en: "Run! The Robot Wants Your Fluff!", hi: "भागो! रोबोट को चाहिए तुम्हारे रोएँ!" },
    blurb: { en: "Gadbad's new cleaning robot thinks dogs are dust, and every tail in Chamakpur is running! Who can stop it?", hi: "गड़बड़ के नए सफ़ाई-रोबोट को कुत्ते धूल के गोले लगते हैं, और पूरे चमकपुर की पूँछें भाग रही हैं! अब कौन रोकेगा?" },
    moral: { en: "Everyone makes mistakes; saying sorry and fixing them calmly is what counts.", hi: "ग़लती सबसे होती है; सॉरी बोलकर, ठंडे दिमाग़ से ठीक करना ही असली बात है।" },
    cover: {
      bg: "city",
      chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.35, cape: true }, { id: "gadbad", pose: "blast", mood: "surprised", x: 0.78, flip: true } ],
      props: [ { id: "machine", x: 0.12 } ],
      fx: { en: "VROOM!", hi: "घर्र्र!" }
    },
    panels: [
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.28 }, { id: "gadbad", pose: "blast", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Next door, inside Professor Gadbad's very noisy workshop...", hi: "पड़ोस में, प्रोफ़ेसर गड़बड़ की खटर-पटर वाली वर्कशॉप में..." },
        say: [
          { who: 1, en: "Behold! The Safai-Bot 3000! It gobbles up every speck of fluff in Chamakpur!", hi: "देखो ऑगी! सफ़ाई-बॉट 3000! ये चमकपुर का हर रोआँ, हर रेशा सुड़क लेगा!" },
          { who: 0, en: "Every speck of fluff? Um, Professor... I'm ninety percent fluff.", hi: "हर रोआँ? उम्म... प्रोफ़ेसर, मैं तो नब्बे प्रतिशत रोआँ ही हूँ।" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "run", mood: "scared", x: 0.45 }, { id: "gadbad", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        props: [ { id: "machine", x: 0.15 } ],
        say: [
          { who: 1, en: "Safai-Bot, STOP! ...Why is it going FASTER? Sorry, sorry, I said STOP!", hi: "सफ़ाई-बॉट, रुको! ...अरे, ये तो और तेज़ हो गया! सॉरी बेटा, मैंने रुकने को कहा था!", kind: "shout" },
          { who: 0, en: "It thinks I'm a giant dust bunny! Run, tail, RUN!", hi: "इसे लगता है मैं धूल का बड़ा गोला हूँ! भागो, पूँछ, भागो!", kind: "shout" }
        ],
        fx: { en: "VROOM!", hi: "घर्र्र!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "pinku", pose: "run", mood: "scared", x: 0.25 }, { id: "moti", pose: "run", mood: "surprised", x: 0.5 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.75 } ],
        props: [ { id: "machine", x: 0.05 } ],
        cap: { en: "Across Chamakpur, the Safai-Bot zooms down the street, chasing every tail in sight!", hi: "पूरे चमकपुर में सफ़ाई-बॉट सड़क पर दौड़ रहा था, हर पूँछ के पीछे!" },
        say: [
          { who: 0, en: "Help! Not my tail! My curly tail is a WORK OF ART!", hi: "बचाओ! मेरी पूँछ नहीं! मेरी घुंघराली पूँछ तो अनमोल है!", kind: "shout" },
          { who: 2, en: "First to get chased! I'm FIRST! Wheee!", hi: "सबसे पहले मेरा पीछा हुआ! मैं फ़र्स्ट! वी-ई-ई!" }
        ]
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.33, cape: true }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "The OFF button is on its back, but it's too fast! I'm a hopeless inventor.", hi: "बंद करने का बटन उसकी पीठ पर है, पर वो पकड़ में ही नहीं आता! मैं बेकार इन्वेंटर हूँ।" },
          { who: 0, en: "Every inventor goofs! We won't chase it... we'll lead it HOME. Woof-woof, let's go!", hi: "गड़बड़ तो सबसे होती है! पीछा नहीं करेंगे... उसे घर ले जाएँगे। भौं-भौं, चलो चलें!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.55, cape: true } ],
        props: [ { id: "machine", x: 0.15 } ],
        cap: { en: "Super Auggie's plan: shake, shake, SHAKE! A trail of golden fur leads all the way to the workshop.", hi: "सुपर ऑगी का प्लान: झटको, झटको, ज़ोर से झटको! सुनहरे रोओं की लकीर सीधी वर्कशॉप तक!" },
        say: [ { who: 0, en: "Yoo-hoo, Safai-Bot! Free fluff buffet! This way!", hi: "ओ सफ़ाई-बॉट! मुफ़्त रोओं की दावत! इधर आओ!", kind: "shout" } ],
        fx: { en: "SHAKE!", hi: "झर-झर!" },
        action: true
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25, cape: true }, { id: "gadbad", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        cap: { en: "Slurp, slurp, slurp... the robot follows the fur trail right onto its charging pad!", hi: "सुड़प, सुड़प, सुड़प... रोबोट रोओं के पीछे-पीछे सीधा अपने चार्जिंग पैड पर!" },
        say: [
          { who: 1, en: "It's docked! It's snoring! Auggie, you furry genius!", hi: "डॉक हो गया! सो गया! ऑगी, तुम तो रोएँदार जीनियस हो!", kind: "shout" },
          { who: 0, en: "See? Every problem is solved by fluff, a sniff, or a nap.", hi: "देखा? हर मुसीबत का इलाज: रोआँ, सूँघना, या झपकी!" }
        ],
        fx: { en: "CLICK!", hi: "खट!" },
        action: true
      },
      {
        bg: "lab",
        chars: [ { id: "pinku", pose: "stand", mood: "angry", x: 0.25 }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 1, en: "Pinku, I'm so sorry. You too, Safai-Bot. It was my mistake, not yours.", hi: "पिंकू, मुझे माफ़ कर दो। और सॉरी सफ़ाई-बॉट, ग़लती मेरी थी, तुम्हारी नहीं।" },
          { who: 0, en: "Hmph! I'm NEVER speaking to you again! ...Okay, fine. But my tail needs a spa day.", hi: "हुँह! मैं तुमसे कभी बात नहीं करूँगा! ...अच्छा ठीक है, पर मेरी पूँछ को स्पा चाहिए।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.25, cape: true }, { id: "pinku", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Now, in Dog-Friendly Mode, the Safai-Bot cleans the park... and politely goes AROUND every dog!", hi: "अब डॉग-फ़्रेंडली मोड में सफ़ाई-बॉट पार्क साफ़ करता है... और हर कुत्ते के बगल से तमीज़ से निकल जाता है!" },
        say: [
          { who: 0, en: "Look, Pinku! It even says 'Excuse me, sir' to my tail!", hi: "देखो पिंकू! ये तो मेरी पूँछ को भी 'माफ़ कीजिए, जनाब' बोलता है!" },
          { who: 1, en: "Finally! Someone in this town with MANNERS.", hi: "आख़िरकार! इस शहर में किसी को तो तमीज़ है।" }
        ]
      }
    ]
  },
  {
    id: 73,
    age: "6-10",
    category: "superhero",
    title: { en: "Woof In, Potato Out!", hi: "भौं-भौं अंदर, आलू बाहर!" },
    blurb: { en: "Gadbad's machine turns barks into words... until Papa starts calling himself a potato! Can Auggie switch it off?", hi: "गड़बड़ की मशीन भौंक को शब्दों में बदलती है... फिर पापा ख़ुद को आलू कहने लगे! क्या ऑगी इसे बंद कर पाएगा?" },
    moral: { en: "The people who love you understand your heart, even without words.", hi: "जो तुमसे प्यार करते हैं, वो बिना शब्दों के भी तुम्हारा दिल समझ लेते हैं।" },
    cover: {
      bg: "lab",
      chars: [ { id: "auggie", pose: "blast", mood: "laugh", x: 0.33, cape: true }, { id: "gadbad", pose: "blast", mood: "surprised", x: 0.76, flip: true } ],
      props: [ { id: "machine", x: 0.55 }, { id: "gear", x: 0.1 } ],
      fx: { en: "BZZZT!", hi: "भिर्र!" }
    },
    panels: [
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.28 }, { id: "gadbad", pose: "blast", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Professor Gadbad has a brand-new invention: the Bark-Translator 2000!", hi: "प्रोफ़ेसर गड़बड़ का एकदम नया आविष्कार: बार्क-ट्रांसलेटर 2000!" },
        say: [
          { who: 1, en: "Bark into the funnel, Auggie! At last, humans will understand every single woof!", hi: "इसमें भौंको, ऑगी! अब इंसान तुम्हारी हर भौं-भौं समझेंगे!" },
          { who: 0, en: "Every woof? Mumma's finally going to hear ALL my carrot plans!", hi: "हर भौं-भौं? अब मम्मा को मेरी सारी गाजर वाली प्लानिंग पता चलेगी!" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "blast", mood: "happy", x: 0.28 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Auggie gives one polite bark. The machine beeps... then talks in a squeaky robot voice!", hi: "ऑगी भौंका। मशीन ने बीप-बीप किया, फिर पतली-सी रोबोट आवाज़ में बोली..." },
        say: [
          { who: 1, en: "It says, 'Belly rub, please... and seventeen carrots!' HA-HA-HA! It WORKS!", hi: "ये कह रही है, 'पेट सहलाओ, प्लीज़... और सत्रह गाजर!' हा-हा-हा! ये तो सच में चलती है!", kind: "shout" },
          { who: 0, en: "Eighteen! Tell it EIGHTEEN carrots!", hi: "अठारह! इसे बोलो, अठारह गाजर!" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "gadbad", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 }, { id: "gear", x: 0.9, y: 0.3 } ],
        cap: { en: "Then the machine starts to shake, smoke and flash like a disco light...", hi: "फिर मशीन हिलने लगी, धुआँ छोड़ने लगी, और डिस्को लाइट की तरह चमकने लगी..." },
        say: [
          { who: 1, en: "Too many woofs! Calm down, little machine, PLEASE! I'll give you a lovely oiling!", hi: "बहुत ज़्यादा भौं-भौं! शांत हो जा, मेरी प्यारी मशीन! प्लीज़! तुझे बढ़िया तेल लगाऊँगा!", kind: "shout" },
          { who: 0, en: "Professor, why is it spinning like Dadi's mixer?", hi: "प्रोफ़ेसर, ये दादी की मिक्सी जैसी क्यों घूम रही है?" }
        ],
        fx: { en: "BZZZT!", hi: "भिर्र!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Meanwhile, the machine's jumble-waves zip across Chamakpur, scrambling everybody's words like eggs!", hi: "उधर, मशीन की उलट-पुलट तरंगें पूरे चमकपुर में फैल गईं, और सबकी बातें अंडा-भुर्जी बन गईं!" },
        say: [
          { who: 0, en: "Mottu, I said 'You look lovely!' And it came out as 'I am a potato!'", hi: "मोटू, मैंने कहा 'तुम कितनी प्यारी लग रही हो!' और मुँह से निकला 'मैं आलू हूँ!'" },
          { who: 1, en: "HA-HA-HA! Never mind, Mittsy. You ARE my favourite potato!", hi: "हा-हा-हा! कोई बात नहीं, मिट्सी। तुम मेरे सबसे प्यारे आलू हो!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "moti", pose: "stand", mood: "surprised", x: 0.3 }, { id: "pinku", pose: "stand", mood: "angry", x: 0.72, flip: true } ],
        cap: { en: "At the park, Moti's friendly 'Hello, Pinku!' comes out as a grumpy 'GO AWAY!'", hi: "पार्क में मोती का प्यारा-सा 'हैलो, पिंकू!' निकला एक चिड़चिड़ा 'भाग यहाँ से!'" },
        say: [
          { who: 1, en: "How RUDE! I'm NEVER speaking to you again, Moti! Never! Ever!", hi: "कितनी बदतमीज़ी! मोती, मैं तुमसे कभी बात नहीं करूँगा! कभी नहीं! कभी भी नहीं!", kind: "shout" },
          { who: 0, en: "But I said HELLO! I bet it's that jumbled-up machine!", hi: "पर मैंने तो हैलो कहा था! पक्का ये उस गड़बड़ मशीन की शरारत है!" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.28, cape: true }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        say: [
          { who: 1, en: "I shouted 'OFF!' and it heard 'MORE!' Only a really BIG sound can reset it!", hi: "मैंने चिल्लाया 'बंद!', इसने सुना 'और!' अब कोई बहुत बड़ी आवाज़ ही इसे रीसेट करेगी!" },
          { who: 0, en: "A big sound? Professor, cover your ears... and your machine's ears too!", hi: "बड़ी आवाज़? प्रोफ़ेसर, कान बंद कीजिए... और अपनी मशीन के भी!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.4, cape: true } ],
        props: [ { id: "machine", x: 0.82 } ],
        cap: { en: "Super Auggie fills his lungs, all the way down to his tail... and lets out the MIGHTIEST WOOF in history!", hi: "सुपर ऑगी ने पूँछ तक साँस भरी... और छोड़ी इतिहास की सबसे ज़बरदस्त भौंक!" },
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "moti", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "The machine hiccups and goes quiet. Words are back, and Pinku says sorry to Moti in record time.", hi: "मशीन ने हिचकी ली, पलकें झपकाईं और चुप हो गई। सबकी बातें ठीक, और पिंकू ने मोती से फटाफट सॉरी बोल दिया।" },
        say: [
          { who: 1, en: "So you ALWAYS knew what I meant, Mumma? Even the carrot hints?", hi: "मतलब आप हमेशा से मेरी बात समझती थीं, मम्मा? गाजर वाले इशारे भी?" },
          { who: 2, en: "Always, baby. Your tail talks louder than any machine.", hi: "हमेशा, बेटा। तुम्हारी पूँछ किसी भी मशीन से ज़्यादा बोलती है।" }
        ]
      }
    ]
  },
  {
    id: 74,
    age: "6-10",
    category: "planet",
    title: { en: "The Day Kichdu Grew Bus-Sized", hi: "जब किचडू बस जितना बड़ा हो गया" },
    blurb: { en: "After a messy picnic, gloopy Kichdu is growing as big as a bus. Can one woof gather a clean-up army?", hi: "गंदी पिकनिक के बाद चिपचिपा किचडू बस जितना बड़ा होता जा रहा है! क्या एक भौंक सफ़ाई की सेना जुटा पाएगी?" },
    moral: { en: "Litter goes in the dustbin, and a clean place has room for everyone.", hi: "कचरा डस्टबिन में डालो, साफ़ जगह में सबके लिए जगह होती है।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "kichdu", pose: "stand", mood: "laugh", x: 0.72, flip: true, s: 1.4 } ],
      props: [ { id: "dustbin", x: 0.08 }, { id: "bottle", x: 0.5 } ],
      fx: { en: "SPLAT!", hi: "पचाक!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "stand", mood: "sad", x: 0.3 }, { id: "moti", pose: "stand", mood: "angry", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.5 }, { id: "bottle", x: 0.1 }, { id: "dustbin", x: 0.92 } ],
        cap: { en: "Sunday evening at Chamak Lake Park. The picnickers have gone home... but their litter hasn't.", hi: "रविवार शाम, चमक लेक पार्क। पिकनिक वाले घर चले गए... पर उनका कचरा यहीं पसरा है।" },
        say: [
          { who: 1, en: "Wrappers, bottles, plates... and the dustbin is RIGHT THERE! Totally empty!", hi: "रैपर, बोतलें, प्लेटें... और डस्टबिन वहीं खड़ा है! बिल्कुल ख़ाली!", kind: "shout" },
          { who: 0, en: "My poor nose. This park smells like a hundred old socks.", hi: "हाय मेरी नाक! यहाँ तो सौ पुराने मोज़ों जैसी बदबू है।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.25 }, { id: "kichdu", pose: "stand", mood: "laugh", x: 0.7, flip: true, s: 1.2 } ],
        props: [ { id: "bottle", x: 0.48 } ],
        cap: { en: "Suddenly, the litter begins to wobble... and wobble... and RISE!", hi: "अचानक कचरा हिलने लगा... डगमग... डगमग... और उठ खड़ा हुआ!" },
        say: [
          { who: 1, en: "GLORP! Hello! I'm KICHDU! Every wrapper you drop makes me BIGGER! Yum!", hi: "ग्लॉर्प! नमस्ते! मैं किचडू! जितना कचरा फेंकोगे, उतना मोटा-ताज़ा बनूँगा! यम!", kind: "shout" },
          { who: 0, en: "WOOF! Go away! ...Hey, why are you GIGGLING at my scary woof?", hi: "भौं! भागो यहाँ से! ...अरे, मेरी डरावनी भौंक पर हँस क्यों रहे हो?" }
        ],
        fx: { en: "GLORP!", hi: "ग्लॉर्प!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "kichdu", pose: "run", mood: "sad", x: 0.6, s: 1.6 } ],
        props: [ { id: "bus", x: 0.15 }, { id: "bottle", x: 0.9 } ],
        cap: { en: "All night, Kichdu slurps litter from every lane in Chamakpur, until he's as big as a bus!", hi: "रात भर किचडू चमकपुर की हर गली का कचरा सुड़कता रहा, और बस जितना बड़ा हो गया!" },
        say: [
          { who: 0, en: "Chips packets! Plastic bags! Yum-yum-GLOOP!", hi: "चिप्स के पैकेट! पॉलीथीन! यम-यम-ग्लूप!", kind: "shout" },
          { who: 0, en: "But... why does nobody ever stay and play with me?", hi: "पर... मेरे साथ कोई खेलने क्यों नहीं रुकता?", kind: "think" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Woofing won't work, baby. Kichdu shrinks when places get clean. Here's my list: gloves, bags, neighbours!", hi: "भौंकने से किचडू छोटा नहीं होगा, बेटा। वो सफ़ाई से सिकुड़ता है। ये रही मेरी लिस्ट: दस्ताने, थैले, पड़ोसी!" },
          { who: 0, en: "An army of cleaners! Leave the calling to me. Woof-woof, let's go!", hi: "सफ़ाई की सेना! बुलाने का काम मेरा। भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "house", x: 0.12 }, { id: "house", x: 0.88 } ],
        cap: { en: "Rooftop to rooftop leaps Super Auggie, and his MIGHTY WOOF wakes up the whole neighbourhood!", hi: "छत से छत पर छलांग लगाता सुपर ऑगी! उसकी ज़ोरदार भौंक से पूरा मोहल्ला जाग गया!" },
        say: [ { who: 0, en: "Everybody out! Bring bags, bring brooms, bring your GRANNIES!", hi: "सब बाहर आओ! थैले लाओ, झाड़ू लाओ, दादी-नानी को भी लाओ!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "moti", pose: "point", mood: "determined", x: 0.2 }, { id: "anaya", pose: "cheer", mood: "happy", x: 0.5 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "dustbin", x: 0.95 } ],
        cap: { en: "Papa brings gloves, Anaya paints 'Feed Me!' signs for the dustbins, and Moti leads the way.", hi: "पापा दस्ताने लाए, अनाया ने डस्टबिन पर 'मुझे खाना दो!' लिखा, और मोती सबसे आगे।" },
        say: [
          { who: 0, en: "Team Dustbin, follow me! I know a shortcut to Lane Three!", hi: "टीम डस्टबिन, मेरे पीछे आओ! गली नंबर तीन का शॉर्टकट मुझे पता है!", kind: "shout" },
          { who: 2, en: "Moti, your last shortcut took us through Lane Seven... TWICE.", hi: "मोती, पिछली बार तुम्हारा शॉर्टकट गली नंबर सात से गया था... दो बार!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3, cape: true }, { id: "kichdu", pose: "stand", mood: "surprised", x: 0.7, flip: true, s: 0.7 } ],
        props: [ { id: "dustbin", x: 0.92 } ],
        cap: { en: "One wrapper, two bottles, a hundred bags... and Kichdu shrinks smaller, and smaller, and SMALLER!", hi: "एक रैपर, दो बोतलें, सौ थैलियाँ... और किचडू छोटा, और छोटा, और छोटा!" },
        say: [
          { who: 1, en: "Hey! I'm shrinking! But... I feel so fresh! Like a mint!", hi: "अरे! मैं सिकुड़ रहा हूँ! पर... मुझे तो पुदीने जैसी ताज़गी लग रही है!" },
          { who: 0, en: "And look, Kichdu. This time, everybody stayed. They're all here with you!", hi: "और देखो किचडू, इस बार सब रुके हैं। सब तुम्हारे साथ हैं!" }
        ],
        fx: { en: "POP!", hi: "पॉप!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "kichdu", pose: "cheer", mood: "laugh", x: 0.2, s: 0.5 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "moti", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "sapling", x: 0.95 }, { id: "flower", x: 0.05 } ],
        cap: { en: "Now the park sparkles, and tiny Kichdu has a brand-new job: Chief Litter Spotter!", hi: "अब पार्क चमचमा रहा है, और नन्हे किचडू को मिला नया काम: चीफ़ कचरा-खोजी!" },
        say: [
          { who: 0, en: "Litter spotted! Into the dustbin, please! And then... can we play?", hi: "कचरा दिखा! प्लीज़, डस्टबिन में डालो! और फिर... खेलें?" },
          { who: 2, en: "Race you to the dustbin! ...The LONG way this time. Promise.", hi: "डस्टबिन तक रेस! ...इस बार लंबे रास्ते से, पक्का।" }
        ]
      }
    ]
  },
  {
    id: 75,
    age: "6-10",
    category: "friends",
    title: { en: "The Cloud Nobody Invited", hi: "जिस बादल को किसी ने नहीं बुलाया" },
    blurb: { en: "The Grand Dog Show is about to start when grumpy Garaj rolls in with a very wet surprise. But why is he so cross?", hi: "ग्रैंड डॉग-शो शुरू ही होने वाला था कि ग़ुस्सैल गरज आ धमका, गीला-गीला सरप्राइज़ लेकर! पर वो इतना नाराज़ क्यों है?" },
    moral: { en: "Sometimes a grumpy friend just wants to be invited.", hi: "कभी-कभी रूठा हुआ दोस्त बस इतना चाहता है कि उसे भी बुलाया जाए।" },
    cover: {
      bg: "rain",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "garaj", pose: "stand", mood: "angry", x: 0.72, flip: true } ],
      props: [ { id: "umbrella", x: 0.1 } ],
      fx: { en: "BOOM!", hi: "गड़गड़!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "snowy", pose: "stand", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "pinku", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.95 }, { id: "drum", x: 0.05 } ],
        cap: { en: "The Chamakpur Grand Dog Show! Ribbons, dhol drums, and one very, very shiny trophy.", hi: "चमकपुर ग्रैंड डॉग-शो! रिबन, ढोल-ताशे, और एक चमचमाती ट्रॉफ़ी।" },
        say: [
          { who: 2, en: "Behold my DOG-walk! Weeks of practice. This trophy is basically mine.", hi: "देखो मेरी डॉग-वॉक! हफ़्तों की प्रैक्टिस। ये ट्रॉफ़ी तो समझो मेरी हो गई।" },
          { who: 0, en: "Aaoooo! Sorry, I howl when I'm excited. And when it's hot. It's hot.", hi: "आऊऊऊ! सॉरी, ख़ुशी में हूऊ निकल जाता है। और गर्मी में भी। गर्मी है।" }
        ]
      },
      {
        bg: "sky",
        chars: [ { id: "garaj", pose: "stand", mood: "angry", x: 0.55 } ],
        props: [ { id: "cloud", x: 0.15 } ],
        cap: { en: "High above, a big grey cloud watches the party... and frowns... and puffs up bigger...", hi: "ऊपर आसमान से एक बड़ा सलेटी बादल पार्टी देख रहा था... मुँह फुलाए... और फूलता जा रहा था..." },
        say: [ { who: 0, en: "A party, and nobody invited GARAJ? AGAIN? Hmph! Time for some RAIN!", hi: "पार्टी, और गरज को किसी ने नहीं बुलाया? फिर से? हुँह! अब देखो बारिश!", kind: "shout" } ]
      },
      {
        bg: "rain",
        chars: [ { id: "pinku", pose: "run", mood: "scared", x: 0.3 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.5 }, { id: "umbrella", x: 0.92 } ],
        cap: { en: "Thunder! Lightning! Rain pours on the stage, the ribbons, and Pinku's freshly blow-dried fur.", hi: "गड़-गड़! चम-चम! मंच, रिबन, और पिंकू के ताज़ा सँवारे बालों पर झमाझम बारिश!" },
        say: [
          { who: 0, en: "My fur! My beautiful fur! I'm FAINTING!", hi: "मेरे बाल! मेरे सँवारे हुए बाल! मैं बेहोश हो रहा हूँ!", kind: "shout" },
          { who: 1, en: "Pinku, you can't faint AND run at the same time!", hi: "पिंकू, भागते-भागते बेहोश कैसे होगे?" }
        ],
        fx: { en: "BOOM!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3, cape: true }, { id: "snowy", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Shh! Under all that thunder, Super Ears hear a tiny sniffle. Is Garaj CRYING?", hi: "श्श्श! इस गड़गड़ के नीचे सुपर कानों को एक नन्ही सुबकी सुनाई दी। गरज रो रहा है?" },
          { who: 1, en: "Rainy AND lonely? Poor fellow. Let me call him. Huskies speak fluent HOWL!", hi: "बारिश भी, और अकेलापन भी? बेचारा। मैं उसे बुलाता हूँ। हम हस्की फ़र्राटेदार 'हूऊ' बोलते हैं!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.3, cape: true }, { id: "snowy", pose: "blast", mood: "happy", x: 0.72 } ],
        cap: { en: "Super Auggie leaps up the tallest water tank! Snowy lifts his nose and sings the sky a friendly hello!", hi: "सुपर ऑगी सबसे ऊँची पानी की टंकी पर कूद गया! स्नोवी ने नाक उठाई और आसमान को प्यारा-सा 'हैलो' गाया!" },
        fx: { en: "AAOOOO!", hi: "आऊऊऊ!" },
        action: true
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3, cape: true }, { id: "garaj", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Hello up there, Garaj! Why the big grey sulk on our show day?", hi: "नमस्ते, गरज भैया! हमारे शो वाले दिन इतना मुँह क्यों फुलाया?" },
          { who: 1, en: "Whenever I come, everyone opens umbrellas and runs. Who invites a CLOUD to a party?", hi: "मुझे देखते ही सब छतरी तानकर भाग जाते हैं। बादल को भला कोई पार्टी में बुलाता है?" }
        ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "garaj", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "WE do! Be our Special Guest Judge! Just... a little less rain, please?", hi: "हम बुलाते हैं! हमारे स्पेशल गेस्ट जज बनो! बस... बारिश थोड़ी कम, प्लीज़?" },
          { who: 1, en: "Me? A JUDGE? With a shiny badge and everything?", hi: "मैं? जज? चमकीला बिल्ला-विल्ला सब मिलेगा?" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "pinku", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.48, cape: true }, { id: "garaj", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "rainbow", x: 0.5, y: 0.15 }, { id: "trophy", x: 0.05 } ],
        cap: { en: "Garaj stops the rain, smiles a huge rainbow, and hands out the first-ever 'Best Wet Dog' award!", hi: "गरज ने बारिश रोकी, मुस्कुराकर इंद्रधनुष बना दिया, और दिया पहला-पहला 'बेस्ट गीला कुत्ता' अवॉर्ड!" },
        say: [
          { who: 0, en: "Wet fur is my new style, darlings! ...Fine, Garaj, I'm speaking to you again.", hi: "गीले बाल अब मेरा नया फ़ैशन है, डार्लिंग! ...चलो गरज, तुमसे फिर से बात करूँगा।" },
          { who: 2, en: "Next time, I'll just ASK to join. Sulking is far too soggy!", hi: "अगली बार मुँह फुलाने की बजाय पूछ लूँगा। रूठना बहुत गीला काम है!" }
        ],
        fx: { en: "TA-DA!", hi: "टा-डा!" },
        action: true
      }
    ]
  },
  {
    id: 76,
    age: "6-10",
    category: "superhero",
    title: { en: "Carrots Don't Work on Kittens!", hi: "बिल्ली को गाजर नहीं चाहिए!" },
    blurb: { en: "A tiny kitten is stuck high up a mango tree, and dogs can't climb. What will Super Auggie do?", hi: "आम के पेड़ पर ऊपर एक नन्ही बिल्ली फँसी है, और कुत्ते पेड़ पर चढ़ नहीं सकते! अब सुपर ऑगी क्या करेगा?" },
    moral: { en: "Knowing when to ask a grown-up for help is a superpower too.", hi: "सही वक़्त पर बड़ों से मदद माँगना भी एक सुपरपावर है।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "cat", pose: "stand", mood: "scared", x: 0.72, flip: true, s: 0.6 } ],
      props: [ { id: "tree", x: 0.75 } ],
      fx: { en: "MEOW!", hi: "म्याऊँ!" }
    },
    panels: [
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.33 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "laptop", x: 0.58 } ],
        cap: { en: "A quiet afternoon. Papa works on his laptop, and Auggie 'helps' by napping on the keyboard.", hi: "एक शांत दोपहर। पापा लैपटॉप पर काम कर रहे हैं, और ऑगी कीबोर्ड पर सोकर 'मदद' कर रहा है।" },
        say: [
          { who: 0, en: "Zzz... carrot... carrot... carrot number forty-two...", hi: "ख़र्र... गाजर... गाजर... बयालीसवीं गाजर...", kind: "whisper" },
          { who: 1, en: "Auggie, you just emailed my boss 'kkkkkkkkkkk'!", hi: "ऑगी, तुमने मेरे बॉस को 'क्क्क्क्क्क्क' ईमेल कर दिया!" }
        ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.33 }, { id: "papa", pose: "sit", mood: "surprised", x: 0.75, flip: true } ],
        props: [ { id: "laptop", x: 0.58 } ],
        say: [
          { who: 0, en: "Papa! Ears UP! A kitten is crying... three whole streets away!", hi: "पापा! कान खड़े! कोई बिल्ली का बच्चा रो रहा है... पूरी तीन गली दूर!", kind: "shout" },
          { who: 1, en: "Three streets? I can't hear the pressure cooker from the NEXT room!", hi: "तीन गली? मुझे तो बगल वाले कमरे से कुकर की सीटी तक नहीं सुनती!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "bush", x: 0.1 }, { id: "flower", x: 0.9 } ],
        cap: { en: "Cape on! Super Auggie leaps over hedges and flower beds, with Papa puffing along behind.", hi: "केप तैयार! सुपर ऑगी झाड़ियों और क्यारियों के ऊपर से छलांगें मारता गया, पीछे-पीछे हाँफते पापा।" },
        say: [ { who: 0, en: "Woof-woof, let's go!", hi: "भौं-भौं, चलो चलें!", kind: "shout" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "cat", pose: "stand", mood: "scared", x: 0.72, flip: true, s: 0.6 } ],
        props: [ { id: "tree", x: 0.75 } ],
        cap: { en: "On the very top branch of the old mango tree, a tiny kitten is shivering.", hi: "पुराने आम के पेड़ की सबसे ऊँची डाल पर एक नन्ही बिल्ली थर-थर काँप रही थी।" },
        say: [
          { who: 1, en: "Mew! I chased a butterfly all the way up... and now down looks SO far!", hi: "म्याऊँ! मैं तितली के पीछे-पीछे ऊपर आ गई... अब नीचे देखूँ तो चक्कर आता है!" },
          { who: 0, en: "Hold on tight, little one! Super Auggie is here!", hi: "कसकर पकड़े रहो, नन्ही! सुपर ऑगी आ गया!", kind: "shout" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.4, cape: true } ],
        props: [ { id: "tree", x: 0.82 } ],
        cap: { en: "Plan A: offer a carrot. The kitten just stares. Kittens, it turns out, do NOT like carrots.", hi: "प्लान A: गाजर दिखाओ। बिल्ली बस घूरती रही। पता चला, बिल्लियों को गाजर पसंद ही नहीं!" },
        say: [ { who: 0, en: "Can't climb, and carrots don't work? This is the hardest case EVER.", hi: "चढ़ नहीं सकता, गाजर भी फ़ेल? ये तो अब तक का सबसे मुश्किल केस है!", kind: "think" } ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3, cape: true }, { id: "papa", pose: "run", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Then a bulb lights up in Auggie's head: real heroes know when to call a grown-up!", hi: "तभी ऑगी के दिमाग़ की बत्ती जली: असली हीरो को पता होता है कि बड़ों को कब बुलाना है!" },
        say: [
          { who: 0, en: "PAPA! NANU! Big ladder, gentle hands, QUICK!", hi: "पापा! नानू! बड़ी सीढ़ी लाओ, जल्दी-जल्दी!", kind: "shout" },
          { who: 1, en: "Coming! Don't worry, kitty, we'll take this rescue one step at a time!", hi: "आ रहा हूँ! घबराओ मत, बिल्लो रानी, ये काम सीढ़ी-दर-सीढ़ी होगा!" }
        ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "nanu", pose: "stand", mood: "determined", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.48, cape: true }, { id: "papa", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Nanu holds the ladder steady. Papa climbs slowly. Auggie talks softly so the kitten stays calm.", hi: "नानू ने सीढ़ी कसकर थामी। पापा धीरे-धीरे चढ़े। ऑगी हौले-हौले बोलता रहा ताकि बच्ची न डरे।" },
        say: [
          { who: 0, en: "Fun fact: a cat's claws are great for climbing up, but tricky for coming down!", hi: "मज़ेदार बात: बिल्ली के नाख़ून ऊपर चढ़ने में मदद करते हैं, पर उतरने में नहीं!" },
          { who: 1, en: "Shh, shh, little one. Those are Papa's hands. Softest in Chamakpur, promise.", hi: "श्श्श, नन्ही। वो पापा के हाथ हैं। चमकपुर के सबसे नरम हाथ, पक्का।", kind: "whisper" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.28, cape: true }, { id: "cat", pose: "stand", mood: "laugh", x: 0.52, s: 0.6, flip: true }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Safe and sound on the ground! Little Mishti snuggles right up to her big golden rescuer.", hi: "सही-सलामत नीचे! नन्ही मिष्टी अपने बड़े सुनहरे हीरो से लिपट गई।" },
        say: [
          { who: 1, en: "Thank you, big fluffy hero! Can I nap on you? You're very squishy.", hi: "थैंक यू, बड़े रोएँदार हीरो! तुम पर सो जाऊँ? तुम बहुत गुदगुदे हो।" },
          { who: 0, en: "Turns out asking for help is a superpower too. Now... nap time!", hi: "पता चला, मदद माँगना भी एक सुपरपावर है। अब... झपकी का टाइम!" }
        ],
        fx: { en: "PURRR!", hi: "घुर्र-घुर्र!" },
        action: true
      }
    ]
  },
  {
    id: 77,
    age: "6-10",
    category: "superhero",
    title: { en: "Golu Lost in the Monsoon Rain", hi: "बरसात में खोया नन्हा गोलू" },
    blurb: { en: "On the stormiest night of the monsoon, a tiny puppy is missing, and the rain has washed away every smell. Now what?", hi: "मानसून की सबसे तूफ़ानी रात, एक नन्हा पिल्ला लापता, और बारिश ने सारी महक धो डाली! अब क्या होगा?" },
    moral: { en: "Friends ask for help when it's hard, and every street animal deserves a dry corner.", hi: "मुश्किल में दोस्त से मदद माँगो, और बारिश में हर बेज़ुबान को सूखा कोना दो।" },
    cover: {
      bg: "rain",
      chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.35, cape: true }, { id: "moti", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
      props: [ { id: "umbrella", x: 0.1 }, { id: "puddle", x: 0.55 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "Monsoon! Rain goes tip-tip-TAP on every roof in Chamakpur.", hi: "मानसून आ गया! चमकपुर की हर छत पर टप-टप-टपाटप!" },
        say: [
          { who: 1, en: "My monsoon list: hot pakoras, cosy blankets, and carrots for my baby!", hi: "मेरी बारिश वाली लिस्ट: गरम पकौड़े, नरम कंबल, और मेरे बेटे के लिए गाजर!" },
          { who: 0, en: "Carrots, blanket, nap. Best monsoon plan EVER!", hi: "गाजर, कंबल, झपकी। वाह, क्या प्लान है!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "moti", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        cap: { en: "Scratch-scratch! A dripping, shivering Moti is at the door. The lanes are filling with water!", hi: "खुर-खुर! दरवाज़े पर भीगा, काँपता मोती। गलियों में पानी भर रहा है!" },
        say: [
          { who: 1, en: "Auggie, little Golu is missing! I know every lane, but I can't find him alone!", hi: "ऑगी, नन्हा गोलू खो गया! मुझे हर गली पता है, पर अकेले नहीं ढूँढ पा रहा!" },
          { who: 0, en: "In THIS rain? Nap cancelled! Mumma, my CAPE!", hi: "इस बारिश में? झपकी कैंसल! मम्मा, मेरी केप!", kind: "shout" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.92 } ],
        say: [
          { who: 1, en: "Cape for you, raincoat for me. Moti leads, and NOBODY wanders off!", hi: "तुम्हारी केप, मेरा रेनकोट। रास्ता मोती दिखाएगा, और कोई इधर-उधर नहीं भटकेगा!" },
          { who: 0, en: "Woof-woof, let's go!", hi: "भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.35, cape: true }, { id: "moti", pose: "run", mood: "determined", x: 0.68 } ],
        props: [ { id: "puddle", x: 0.5 }, { id: "puddle", x: 0.1 } ],
        cap: { en: "Moti takes a shortcut. It isn't shorter. It IS much wetter. Splash, splash, SPLASH!", hi: "मोती ने शॉर्टकट लिया। छोटा तो नहीं था, पर गीला ज़रूर था! छपाक, छपाक, छपाक!" },
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3, cape: true }, { id: "moti", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "The rain washed away every smell! Even your Super Sniffer can't help now, bhai.", hi: "बारिश ने सारी महक धो डाली! अब तो तुम्हारी सुपर नाक भी बेकार है, भाई।" },
          { who: 0, en: "Nose off, ears ON. Everybody... even you, rain... SHHH!", hi: "नाक बंद, कान चालू। सब चुप... तुम भी, बारिश... श्श्श!", kind: "whisper" }
        ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3, cape: true } ],
        props: [ { id: "rickshaw", x: 0.72 }, { id: "puddle", x: 0.5 } ],
        cap: { en: "Beneath the pitter-patter... a teeny-tiny 'kooon'... coming from under an old parked auto-rickshaw!", hi: "टप-टप के नीचे से... एक नन्ही-सी कूँ-कूँ... एक पुराने खड़े ऑटो के नीचे से!" },
        say: [ { who: 0, en: "There you are, little one. Hold on!", hi: "मिल गए, नन्हे! बस थोड़ी देर और!", kind: "think" } ],
        fx: { en: "WHIMPER!", hi: "कूँ-कूँ!" },
        action: true
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25, cape: true }, { id: "moti", pose: "cheer", mood: "happy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        props: [ { id: "rickshaw", x: 0.95 } ],
        cap: { en: "Mumma kneels in the puddle, lifts out shivering Golu, and wraps him in her warm dupatta.", hi: "मम्मा ने पानी में घुटने टेके, काँपते गोलू को निकाला, और अपने गरम दुपट्टे में लपेट लिया।" },
        say: [
          { who: 2, en: "Got you, little Golu! Warm and safe. Let's take you to your mama!", hi: "आ गया मेरा गोलू! गरम और सुरक्षित। चलो, तुम्हें माँ के पास ले चलें!" },
          { who: 1, en: "I'm... not crying. It's just rain on my face. Totally rain.", hi: "मैं... रो नहीं रहा। ये तो बारिश का पानी है। बस बारिश।" }
        ]
      },
      {
        bg: "city",
        chars: [ { id: "moti", pose: "cheer", mood: "happy", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "bowl", x: 0.05 }, { id: "house", x: 0.95 } ],
        cap: { en: "Kaali licks Golu's head a hundred times! Then neighbours build a dry shelter: roof, blanket, water bowl.", hi: "काली ने गोलू का सिर सौ बार चाटा! फिर पड़ोसियों ने बनाया सूखा ठिकाना: छत, कंबल, पानी का कटोरा।" },
        say: [
          { who: 2, en: "Every street dog deserves a dry corner when it rains. Every single one.", hi: "बारिश में हर गली के कुत्ते को एक सूखा कोना मिलना चाहिए। हर एक को।" },
          { who: 1, en: "And a carrot! Every single one deserves a carrot!", hi: "और एक गाजर भी! हर एक को एक गाजर!" }
        ],
        fx: { en: "HOORAY!", hi: "वाह!" },
        action: true
      }
    ]
  },
  {
    id: 78,
    age: "6-10",
    category: "sports",
    title: { en: "Frisbee Cup or Little Duckling?", hi: "फ़्रिस्बी कप या नन्ही बत्तख?" },
    blurb: { en: "Auggie is one splash away from the Golden Frisbee Cup, when a tiny 'peep' comes from the reeds. Cup or duckling?", hi: "गोल्डन फ़्रिस्बी कप बस एक छपाक दूर था, कि सरकंडों से आई एक नन्ही 'पीप'! अब कप चुने या बत्तख?" },
    moral: { en: "Winning is fun, but helping someone who needs you is the real prize.", hi: "जीतना मज़ेदार है, पर किसी ज़रूरतमंद की मदद करना असली इनाम है।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.3 }, { id: "chiku", pose: "run", mood: "happy", x: 0.68 } ],
      props: [ { id: "frisbee", x: 0.5, y: 0.25 }, { id: "trophy", x: 0.92 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.28 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "frisbee", x: 0.55, y: 0.35 }, { id: "trophy", x: 0.05 } ],
        cap: { en: "The Chamakpur Fetch Championship! Mausi is the official frisbee thrower... and official selfie-taker.", hi: "चमकपुर फ़ेच चैंपियनशिप! मौसी हैं ऑफ़िशियल फ़्रिस्बी फेंकने वाली... और ऑफ़िशियल सेल्फ़ी लेने वाली भी।" },
        say: [
          { who: 1, en: "Final round: Auggie versus Chiku! Hold that pose! ...Okay, ready, steady, FETCH!", hi: "फ़ाइनल: ऑगी बनाम चीकू! पोज़ होल्ड करो! ...चलो, रेडी, स्टेडी, फ़ेच!", kind: "shout" },
          { who: 0, en: "Golden Frisbee Cup, here I come! Twenty carrots says I win!", hi: "गोल्डन फ़्रिस्बी कप, मैं आ रहा हूँ! बीस गाजर की शर्त, मैं ही जीतूँगा!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "chiku", pose: "run", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "run", mood: "determined", x: 0.55 } ],
        props: [ { id: "frisbee", x: 0.85, y: 0.25 } ],
        cap: { en: "The frisbee sails right over the lake! 'I'm FIRST!' yells Chiku, zooming off towards the long bridge.", hi: "फ़्रिस्बी सीधी झील के ऊपर से उड़ गई! 'मैं फ़र्स्ट!' चिल्लाता चीकू लंबे पुल की तरफ़ भागा।" },
        fx: { en: "WHOOSH!", hi: "सर्र!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.45 } ],
        props: [ { id: "frisbee", x: 0.9, y: 0.3 } ],
        cap: { en: "But Auggie is a Labrador, and Labradors LOVE water. Straight in he goes!", hi: "पर ऑगी ठहरा लैब्राडोर, और लैब्राडोर को पानी से प्यार है। सीधे छपाक!" },
        say: [ { who: 0, en: "Bridges are for slowpokes! Swimming is my superpower!", hi: "पुल तो धीमे लोगों के लिए है! तैरना मेरी सुपरपावर है!", kind: "shout" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "duck", pose: "stand", mood: "sad", x: 0.72, flip: true, s: 0.6 } ],
        props: [ { id: "bush", x: 0.9 } ],
        cap: { en: "Halfway across, Auggie's ears twitch. A teeny 'peep-peep' is coming from the reeds...", hi: "आधे रास्ते में ऑगी के कान फड़के। सरकंडों से आ रही थी एक नन्ही 'पीप-पीप'..." },
        say: [
          { who: 1, en: "Peep! My foot is stuck in the weeds, and I can't find my mama!", hi: "पीप! मेरा पंजा घास में फँस गया, और मम्मा भी नहीं दिख रही!" },
          { who: 0, en: "Uh-oh! Hang on, little one, I'm coming!", hi: "अरे-रे! रुको, नन्हे, मैं आया!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.33 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.75, flip: true } ],
        cap: { en: "Up on the bridge, Chiku's tiny legs are a blur. The frisbee is SO close!", hi: "उधर पुल पर चीकू की नन्ही टाँगें फ़र्राटे भर रही थीं। फ़्रिस्बी बस दो क़दम दूर!" },
        say: [
          { who: 1, en: "Ha! I'm almost there! Auggie, why did you STOP?", hi: "हा! मैं बस पहुँचने वाला हूँ! ऑगी, तुम रुक क्यों गए?", kind: "shout" },
          { who: 0, en: "The Golden Cup... or a little lost duckling? ...Easy choice.", hi: "गोल्डन कप... या खोया हुआ बत्तख का बच्चा? ...ये तो आसान है।", kind: "think" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.25 }, { id: "duck", pose: "stand", mood: "happy", x: 0.52, s: 0.6 }, { id: "duck", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        cap: { en: "Gently, gently, Auggie nudges the duckling's foot free and paddles it back to its mama.", hi: "धीरे-धीरे, प्यार से, ऑगी ने बच्चे का पंजा छुड़ाया और तैराकर उसे मम्मा तक पहुँचाया।" },
        say: [
          { who: 2, en: "Quack! My baby! Thank you, kind swimmer, you're a true hero!", hi: "क्वैक! मेरा बच्चा! शुक्रिया, प्यारे तैराक, तुम तो सच्चे हीरो हो!" },
          { who: 1, en: "Mama! A big golden BOAT rescued me!", hi: "मम्मा! मुझे एक बड़ी सुनहरी नाव ने बचाया!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "cheer", mood: "happy", x: 0.3 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.45, y: 0.3 } ],
        cap: { en: "Chiku grabs the frisbee first! But from the bridge, he saw everything.", hi: "फ़्रिस्बी पहले चीकू ने पकड़ी! पर पुल से उसने सब कुछ देख लिया था।" },
        say: [
          { who: 0, en: "I got there FIRST... but you did something much bigger, Auggie.", hi: "मैं फ़र्स्ट आया... पर ऑगी, तुमने उससे कहीं बड़ा काम किया।" },
          { who: 1, en: "Congratulations, champ! And sorry I said bridges are for slowpokes. You were SUPER fast!", hi: "बधाई हो, चैंपियन! और सॉरी, मैंने पुल को धीमों का रास्ता कहा। तुम तो सुपरफ़ास्ट थे!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.35 }, { id: "camera", x: 0.93 } ],
        cap: { en: "Two prizes today: the Golden Frisbee Cup for Chiku, and a surprise Golden Heart medal for Auggie!", hi: "आज दो इनाम: चीकू को गोल्डन फ़्रिस्बी कप, और ऑगी को सरप्राइज़ गोल्डन हार्ट मेडल!" },
        say: [
          { who: 2, en: "My two champions! Squish together... HOLD THAT POSE! Say 'CARROTS'!", hi: "मेरे दोनों चैंपियन! पास-पास आओ... पोज़ होल्ड करो! बोलो 'गाजर'!", kind: "shout" },
          { who: 1, en: "CARROOOOTS!", hi: "गा-ज-र-र-र!", kind: "shout" }
        ],
        fx: { en: "CLICK!", hi: "क्लिक!" },
        action: true
      }
    ]
  },
  {
    id: 79,
    age: "6-10",
    category: "sports",
    title: { en: "Gauri Aunty Sat on the Final!", hi: "गौरी आंटी फ़ाइनल पर बैठ गईं!" },
    blurb: { en: "Six runs needed off the last ball, and the only ball has vanished into a farm. Can Auggie's nose save the final?", hi: "आख़िरी गेंद पर छह रन चाहिए, और इकलौती गेंद खेत में ग़ायब! क्या ऑगी की नाक फ़ाइनल बचा पाएगी?" },
    moral: { en: "Own up to mistakes, play fair, and cheer for each other.", hi: "ग़लती मानो, ईमानदारी से खेलो, और एक-दूसरे का हौसला बढ़ाओ।" },
    cover: {
      bg: "playground",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "ball", x: 0.5, y: 0.25 }, { id: "trophy", x: 0.92 } ],
      fx: { en: "SIX!", hi: "छक्का!" }
    },
    panels: [
      {
        bg: "playground",
        chars: [ { id: "rohan", pose: "stand", mood: "determined", x: 0.3 }, { id: "zoya", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.55, y: 0.5 } ],
        cap: { en: "The Colony Cup final! Last ball. Rohan's team needs a SIX to win.", hi: "कॉलोनी कप का फ़ाइनल! आख़िरी गेंद। रोहन की टीम को जीत के लिए छक्का चाहिए।" },
        say: [
          { who: 1, en: "Last ball, Rohan! My super-fast Zoya Special is coming. Blink and you'll miss it!", hi: "आख़िरी गेंद, रोहन! मेरी सुपरफ़ास्ट 'ज़ोया स्पेशल' आ रही है। पलक झपकी, तो गई!" },
          { who: 0, en: "Bring it! I haven't blinked since Tuesday!", hi: "आने दो! मैंने तो मंगलवार से पलक ही नहीं झपकी!" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "zoya", pose: "blast", mood: "scared", x: 0.3 }, { id: "rohan", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.88, y: 0.15 } ],
        cap: { en: "Whoops! Zoya's warm-up throw flies over the fence... and vanishes into the farm next door!", hi: "उफ़्फ़! ज़ोया की वॉर्म-अप थ्रो बाड़ के ऊपर से उड़ी... और बगल वाले खेत में ग़ायब!" },
        say: [
          { who: 1, en: "That was our ONLY ball! No ball means no final... means no CUP!", hi: "वो हमारी इकलौती गेंद थी! गेंद नहीं, तो फ़ाइनल नहीं... तो कप भी नहीं!", kind: "shout" },
          { who: 0, en: "Oh no, oh no, oh NO! My arm is too strong today!", hi: "हाय, हाय, हाय! आज मेरा हाथ कुछ ज़्यादा ही तेज़ चल गया!" }
        ]
      },
      {
        bg: "farm",
        chars: [ { id: "zoya", pose: "stand", mood: "sad", x: 0.3 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.72, flip: true, cape: true } ],
        props: [ { id: "sun", x: 0.9, y: 0.15 } ],
        cap: { en: "Everyone searches: tall grass, haystacks, squelchy mud... and the sun is sinking fast!", hi: "सब ढूँढने लगे: ऊँची घास, भूसे के ढेर, चिपचिपा कीचड़... और सूरज फटाफट डूब रहा है!" },
        say: [
          { who: 0, en: "It's my fault. I was showing off. Now everyone's final is ruined.", hi: "सब मेरी ग़लती है। मैं शो-ऑफ़ कर रही थी। अब सबका फ़ाइनल बिगड़ गया।" },
          { who: 1, en: "Saying sorry takes guts, Zoya. Now let the Super Sniffer do the rest!", hi: "ग़लती मानना बहादुरी है, ज़ोया। बाक़ी काम सुपर नाक का!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "Leather... red paint... a dash of Zoya's lemon hand cream... The Super Sniffer LOCKS ON!", hi: "चमड़ा... लाल रंग... ज़ोया की नींबू वाली क्रीम... सुपर नाक ने निशाना पकड़ लिया!" },
        say: [ { who: 0, en: "Found it! ...No wait, that's a tomato. Sniff AGAIN!", hi: "मिल गई! ...अरे नहीं, ये तो टमाटर है। फिर से सूँघो!", kind: "think" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3, cape: true }, { id: "cow", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Behind the biggest haystack sits Gauri the cow, looking VERY comfy and very innocent...", hi: "सबसे बड़े भूसे के ढेर के पीछे गौरी गाय बैठी थी, बड़े आराम से, एकदम भोली बनकर..." },
        say: [
          { who: 0, en: "Um, Gauri Aunty? Sorry to disturb... but I think you're sitting on our final!", hi: "गौरी आंटी? माफ़ कीजिए... पर शायद आप हमारे फ़ाइनल पर बैठी हैं!" },
          { who: 1, en: "Moo? I'm just keeping this lovely red tomato warm.", hi: "मूँ? मैं तो बस इस लाल टमाटर को गरम रख रही हूँ।" }
        ]
      },
      {
        bg: "farm",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "cow", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.6 } ],
        say: [
          { who: 1, en: "A BALL? Moo-ha-ha! No wonder my tomato was so bouncy! Take it, beta!", hi: "गेंद? मूँ-हा-हा! तभी मेरा टमाटर इतना उछल रहा था! ले जा, बेटा!" },
          { who: 0, en: "Thank you, Aunty! Tomato... I mean BALL... coming through! ZOOM!", hi: "शुक्रिया, आंटी! टमाटर... मतलब गेंद... लेकर मैं ये चला! ज़ूम!", kind: "shout" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "zoya", pose: "blast", mood: "determined", x: 0.3 }, { id: "rohan", pose: "blast", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.4 } ],
        cap: { en: "Last ball. The whole colony holds its breath. Zoya runs in... Rohan lifts his bat...", hi: "आख़िरी गेंद। पूरी कॉलोनी की साँस अटकी। ज़ोया दौड़ी... रोहन ने बल्ला उठाया..." },
        say: [
          { who: 0, en: "Here comes the Zoya Special!", hi: "ये आई 'ज़ोया स्पेशल'!", kind: "shout" },
          { who: 1, en: "Eyes open... no blinking... NOW!", hi: "आँखें खुली... पलक नहीं... अब!", kind: "shout" }
        ],
        fx: { en: "THWACK!", hi: "टक्क!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "rohan", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "zoya", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.05 }, { id: "ball", x: 0.9, y: 0.12 } ],
        cap: { en: "SIX! Rohan's team wins the Colony Cup, and Auggie is crowned Dog of the Match!", hi: "छक्का! रोहन की टीम ने कॉलोनी कप जीता, और ऑगी बना 'डॉग ऑफ़ द मैच'!" },
        say: [
          { who: 2, en: "You won fair and square, Rohan! And thanks, Auggie, for fetching back my mistake!", hi: "तुम ईमानदारी से जीते, रोहन! और थैंक यू ऑगी, मेरी ग़लती वापस लाने के लिए!" },
          { who: 1, en: "Dog of the Match gets a carrot, right? Just asking. For me.", hi: "डॉग ऑफ़ द मैच को गाजर मिलती है ना? बस पूछ रहा हूँ। अपने लिए।" }
        ],
        fx: { en: "SIX!", hi: "छक्का!" },
        action: true
      }
    ]
  },
  {
    id: 80,
    age: "6-10",
    category: "friends",
    title: { en: "Why Is Everyone Whispering?", hi: "सब खुसर-फुसर क्यों कर रहे हैं?" },
    blurb: { en: "Everyone is whispering, hiding boxes and shooing Auggie away. Have they forgotten him... or is something bigger going on?", hi: "सब खुसर-फुसर कर रहे हैं, डिब्बे छुपा रहे हैं, ऑगी को भगा रहे हैं! क्या सब उसे भूल गए... या कुछ और चल रहा है?" },
    moral: { en: "When people who love you ask you to wait, a happy surprise is usually coming.", hi: "जो तुमसे प्यार करते हैं, वो इंतज़ार करवाएँ, तो समझो कोई प्यारा सरप्राइज़ आने वाला है।" },
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
        cap: { en: "Something VERY strange is happening in Auggie's house today...", hi: "आज ऑगी के घर में कुछ बहुत अजीब हो रहा है..." },
        say: [
          { who: 1, en: "Mottu, did the... you-know-what arrive? For the... you-know-who?", hi: "मोटू, वो... वो वाली चीज़ आ गई? उसके लिए... समझ रही हो ना?", kind: "whisper" },
          { who: 2, en: "Shh, Mittsy! Big floppy ears are listening!", hi: "श्श्श, मिट्सी! बड़े-बड़े लटकते कान सुन रहे हैं!", kind: "whisper" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "gift", x: 0.9 } ],
        say: [
          { who: 0, en: "Mausi, what's that box behind your back? It smells of ribbons.", hi: "मौसी, पीठ के पीछे वो डिब्बा कैसा है? उसमें से रिबन की महक आ रही है।" },
          { who: 1, en: "Nothing! Absolutely nothing! Oh look, a butterfly! Quick, selfie with the butterfly!", hi: "कुछ नहीं! बिल्कुल कुछ नहीं! अरे देखो, तितली! जल्दी, तितली के साथ सेल्फ़ी!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "From Dadi's kitchen floats a smell: banana... carrot... oats... and something MAGICAL.", hi: "दादी की रसोई से महक आ रही है: केला... गाजर... ओट्स... और कुछ जादुई!" },
        say: [
          { who: 0, en: "My Super Sniffer says something yummy is baking. Is it for ME?", hi: "मेरी सुपर नाक कह रही है, कुछ मज़ेदार पक रहा है। मेरे लिए है क्या?" },
          { who: 1, en: "Out, out, little detective! Here's my secret pallu carrot. Now SHOO!", hi: "चल हट, नन्हे जासूस! ये ले पल्लू वाली गाजर, और भाग यहाँ से!" }
        ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.45 } ],
        props: [ { id: "ball", x: 0.85 } ],
        cap: { en: "Nobody has time to play. Auggie flops on the sofa with the biggest sigh in history.", hi: "किसी के पास खेलने का टाइम नहीं। ऑगी सोफ़े पर धप्प से गिरा, और इतिहास की सबसे लंबी आह भरी।" },
        say: [ { who: 0, en: "No walk, no fetch, not ONE belly rub. Has everybody forgotten about me?", hi: "न घूमना, न गेंद, न कोई पेट सहलाने वाला। सब मुझे भूल गए क्या?", kind: "think" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Nanu sits down beside him with a mysterious smile.", hi: "नानू एक रहस्य भरी मुस्कान के साथ पास आकर बैठ गए।" },
        say: [
          { who: 1, en: "Your Super Ears could crack this secret in one second, Auggie. But would that be fun?", hi: "ऑगी, तुम्हारे सुपर कान ये राज़ पल भर में खोल सकते हैं। पर उसमें मज़ा आएगा?" },
          { who: 0, en: "Hmm... okay, Nanu. Paws over ears. I'll trust you... mostly.", hi: "हम्म... ठीक है, नानू। कानों पर पंजे। आप पर भरोसा है... लगभग पूरा।" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "rohan", pose: "stand", mood: "happy", x: 0.22 }, { id: "moti", pose: "stand", mood: "happy", x: 0.5 }, { id: "pinku", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        props: [ { id: "gift", x: 0.92 }, { id: "balloon", x: 0.06, y: 0.25 } ],
        cap: { en: "As the sun sets, the doorbell rings... and rings... and RINGS!", hi: "सूरज ढलते ही घंटी बजी... फिर बजी... फिर बजी!" },
        say: [
          { who: 0, en: "Shh! Everybody hide, quick! The birthday boy is coming!", hi: "श्श्श! सब छुपो, जल्दी! बर्थडे बॉय आ रहा है!", kind: "whisper" },
          { who: 2, en: "Hide? This fabulous face was made to be SEEN, darling!", hi: "छुपूँ? इतना शानदार चेहरा छुपाने के लिए थोड़े बना है, डार्लिंग!" }
        ],
        fx: { en: "DING-DONG!", hi: "टिंग-टोंग!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.52 }, { id: "balloon", x: 0.08, y: 0.2 }, { id: "balloon", x: 0.92, y: 0.2 } ],
        cap: { en: "Click! The lights flash on, and EVERYBODY jumps out from behind the sofa!", hi: "खट! बत्तियाँ जलीं, और सोफ़े के पीछे से सब उछलकर बाहर!" },
        say: [
          { who: 1, en: "SURPRISE! Happy birthday, our Super Auggie! HA-HA-HA!", hi: "सरप्राइज़! हैप्पी बर्थडे, हमारे सुपर ऑगी! हा-हा-हा!", kind: "shout" },
          { who: 0, en: "My BIRTHDAY? So THAT'S what the whispering was? I thought you'd all forgotten me!", hi: "मेरा बर्थडे? तो ये सारी खुसर-फुसर इसलिए थी? मुझे लगा सब मुझे भूल गए!" }
        ],
        fx: { en: "SURPRISE!", hi: "सरप्राइज़!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.52 } ],
        cap: { en: "Dadi's cake: banana, carrot and oats. No sugar, no chocolate. One hundred percent doggy-safe, and doggy-yummy!", hi: "दादी का केक: केला, गाजर और ओट्स। न चीनी, न चॉकलेट। सौ टका कुत्तों के लिए सुरक्षित, और स्वादिष्ट भी!" },
        say: [
          { who: 1, en: "For my grandpup: a cake with NO sugar and ALL the love!", hi: "मेरे पोते के लिए केक: चीनी ज़रा भी नहीं, प्यार ढेर सारा!" },
          { who: 0, en: "Best. Surprise. EVER! Sorry I sulked, everyone. The wait was SO worth it!", hi: "सबसे. बढ़िया. सरप्राइज़! सॉरी, मैंने मुँह फुलाया। इंतज़ार का फल तो मीठा... मतलब गाजर-वाला निकला!" }
        ]
      }
    ]
  },
  {
    id: 81,
    age: "6-10",
    category: "friends",
    title: { en: "A Hundred Runaway Apples!", hi: "सौ भगोड़े सेब!" },
    blurb: { en: "A fruit cart loses a wheel, a hundred apples go rolling, and one small boy runs after them. Who'll get there first?", hi: "बाज़ार की ढलान पर ठेले का पहिया निकला, सौ सेब लुढ़के, और एक नन्हा बच्चा उनके पीछे दौड़ा! पहले कौन पहुँचेगा?" },
    moral: { en: "Stop, look both ways, and never run onto the road, not even for an apple.", hi: "रुको, दोनों तरफ़ देखो, और सड़क पर कभी मत दौड़ो, सेब के लिए भी नहीं।" },
    cover: {
      bg: "market",
      chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.3, cape: true }, { id: "moti", pose: "run", mood: "laugh", x: 0.65 } ],
      props: [ { id: "apple", x: 0.9 }, { id: "apple", x: 0.1 }, { id: "banana", x: 0.5 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.25 }, { id: "moti", pose: "stand", mood: "happy", x: 0.52, flip: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "apple", x: 0.95 } ],
        cap: { en: "Saturday bazaar! Bangles, spices, marigolds, and Ramu Kaka's famous fruit cart.", hi: "शनिवार का बाज़ार! चूड़ियाँ, मसाले, गेंदे के फूल, और रामू काका का मशहूर फलों का ठेला।" },
        say: [
          { who: 1, en: "Stick with me, Auggie. I know a shortcut to every stall!", hi: "मेरे साथ रहना, ऑगी। हर दुकान का शॉर्टकट मुझे पता है!" },
          { who: 0, en: "A real shortcut, or a MOTI shortcut?", hi: "असली शॉर्टकट, या मोती वाला शॉर्टकट?" }
        ]
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "moti", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5, y: 0.8 }, { id: "apple", x: 0.1, y: 0.85 }, { id: "banana", x: 0.9, y: 0.85 } ],
        cap: { en: "CRACK! A wheel pops off the fruit cart. Apples, oranges and bananas go tumbling down the hill!", hi: "कड़क! ठेले का पहिया निकल गया। सेब, संतरे, केले, सब ढलान पर लुढ़कने लगे!" },
        say: [
          { who: 1, en: "Runaway apples! HUNDREDS of them!", hi: "भागते सेब! सैकड़ों सेब!", kind: "shout" },
          { who: 0, en: "So many carrots... I mean APPLES! Focus, Auggie!", hi: "कितनी सारी गाजर... मतलब सेब! ध्यान, ऑगी!" }
        ],
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "kabir", pose: "run", mood: "happy", x: 0.4 } ],
        props: [ { id: "apple", x: 0.62, y: 0.85 }, { id: "car", x: 0.88 } ],
        cap: { en: "Down by the road, little Kabir is chasing an apple... and the cars are zooming right towards him!", hi: "नीचे सड़क के पास, नन्हा कबीर एक सेब के पीछे दौड़ पड़ा... और सामने गाड़ियाँ ही गाड़ियाँ!" },
        say: [ { who: 0, en: "Wait for me, Mister Apple! I'll catch you!", hi: "रुको, सेब जी! मैं पकड़ लूँगा!" } ]
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "moti", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "You stop the traffic! I'll take Spice Lane. A REAL shortcut this time, I swear!", hi: "तुम ट्रैफ़िक रोको, मैं मसाला गली से शॉर्टकट लेता हूँ! इस बार असली वाला, क़सम से!" },
          { who: 0, en: "A REAL one? ...Deal! Woof-woof, let's go!", hi: "पक्का असली? ...डन! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.45, cape: true } ],
        props: [ { id: "car", x: 0.85 }, { id: "rickshaw", x: 0.12 } ],
        cap: { en: "One MIGHTY WOOF! Every car, bus and auto freezes. Honk... screeech... and then, total silence.", hi: "एक ज़ोरदार भौंक! हर कार, बस, ऑटो जहाँ के तहाँ थम गए। पीं... चीं... और फिर सन्नाटा।" },
        say: [ { who: 0, en: "STOP! Little boy on the road!", hi: "रुको! छोटा बच्चा सड़क पर है!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "moti", pose: "run", mood: "determined", x: 0.3 }, { id: "kabir", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Moti bursts out of Spice Lane, sneezing, and gently blocks Kabir's path. Just in time!", hi: "मोती छींकता हुआ मसाला गली से निकला और प्यार से कबीर का रास्ता रोक लिया। ठीक वक़्त पर!" },
        say: [
          { who: 0, en: "Aaachoo! Whoa, little one! Never run onto the road, not even for an apple!", hi: "आ-छूँ! रुको, छोटे! सड़क पर कभी मत भागना, सेब के लिए भी नहीं!" },
          { who: 1, en: "Sorry, Moti! I forgot to stop and look. Why is your nose so red?", hi: "सॉरी, मोती! मैं रुककर देखना भूल गया। तुम्हारी नाक इतनी लाल क्यों है?" }
        ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "kabir", pose: "stand", mood: "happy", x: 0.2 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.45, flip: true }, { id: "auggie", pose: "point", mood: "happy", x: 0.75, flip: true, cape: true } ],
        props: [ { id: "apple", x: 0.95, y: 0.85 } ],
        cap: { en: "Then the two heroes nose-push every runaway fruit back into Ramu Kaka's basket.", hi: "फिर दोनों हीरो ने नाक से धकेल-धकेलकर हर भगोड़ा फल रामू काका की टोकरी में वापस पहुँचाया।" },
        say: [
          { who: 1, en: "Kabir, hold my hand. We cross roads together, and we look both ways!", hi: "कबीर, मेरा हाथ पकड़ो। सड़क हम साथ पार करेंगे, दोनों तरफ़ देखकर!" },
          { who: 0, en: "Right, left, right again! Just like Moti taught me!", hi: "पहले दाएँ, फिर बाएँ, फिर दाएँ! जैसे मोती ने सिखाया!" }
        ]
      },
      {
        bg: "market",
        chars: [ { id: "moti", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.7, flip: true, cape: true } ],
        props: [ { id: "apple", x: 0.5 }, { id: "banana", x: 0.92 } ],
        cap: { en: "A grateful Ramu Kaka hands out rewards: crunchy apples for Auggie, a banana for Moti!", hi: "रामू काका ने ख़ुश होकर इनाम दिया: ऑगी को कुरकुरे सेब, मोती को केला!" },
        say: [
          { who: 0, en: "Best team in Chamakpur? And admit it, my shortcut was actually SHORT today!", hi: "चमकपुर की सबसे बढ़िया टीम? और मान लो, आज मेरा शॉर्टकट सच में छोटा था!" },
          { who: 1, en: "First time in history! Best team in Chamakpur!", hi: "इतिहास में पहली बार! हाँ, चमकपुर की सबसे बढ़िया टीम!", kind: "shout" }
        ]
      }
    ]
  },
  {
    id: 82,
    age: "6-10",
    category: "superhero",
    title: { en: "The Best Power Cut Ever", hi: "सबसे मज़ेदार बत्ती-गुल" },
    blurb: { en: "A power cut plunges the street into darkness, and everyone is scared. Can Super Auggie turn a spooky night into a party?", hi: "बत्ती गुल होते ही पूरी गली अँधेरे में डूब गई, और सब डर गए! क्या सुपर ऑगी डरावनी रात को पार्टी बना पाएगा?" },
    moral: { en: "The dark feels much smaller when we sit in it together.", hi: "साथ बैठो, तो अँधेरा भी छोटा लगने लगता है।" },
    cover: {
      bg: "citynight",
      chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.35, cape: true }, { id: "kabir", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "star", x: 0.15, y: 0.15 }, { id: "star", x: 0.85, y: 0.2 }, { id: "diya", x: 0.55 } ],
      fx: { en: "TWINKLE!", hi: "टिमटिम!" }
    },
    panels: [
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.4 } ],
        props: [ { id: "house", x: 0.8 }, { id: "house", x: 0.1 } ],
        cap: { en: "Saturday night. Every window in Chamakpur is glowing, humming and chattering... and then...", hi: "शनिवार की रात। चमकपुर की हर खिड़की जगमगा रही है, टीवी बज रहे हैं... और फिर..." },
        say: [ { who: 0, en: "Wait. Why did the fridge stop humming?", hi: "रुको... फ्रिज की घूँ-घूँ क्यों बंद हो गई?", kind: "think" } ],
        fx: { en: "CLICK!", hi: "खट!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "pinku", pose: "stand", mood: "scared", x: 0.3 }, { id: "kabir", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        cap: { en: "POWER CUT! Pitch-black darkness. Worried voices float out of every window.", hi: "बत्ती गुल! घुप्प अँधेरा। हर खिड़की से घबराई आवाज़ें।" },
        say: [
          { who: 1, en: "I can't see anything! Is the dark going to eat us?", hi: "मुझे कुछ नहीं दिख रहा! अँधेरा हमें खा तो नहीं जाएगा?" },
          { who: 0, en: "Forget us! Is it going to eat my DINNER?!", hi: "हमें छोड़ो! कहीं मेरा डिनर तो नहीं खा जाएगा?!", kind: "shout" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "The neighbours are scared, baby. Let's bring everyone to the courtyard. Torches, diyas... and my LIST!", hi: "पड़ोसी डरे हुए हैं, बेटा। सबको आँगन में बुलाते हैं। टॉर्च, दीये... और मेरी लिस्ट!" },
          { who: 0, en: "My Super Ears can hear every scared heartbeat. Woof-woof, let's go!", hi: "मेरे सुपर कान हर डरी हुई धड़कन सुन सकते हैं। भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "house", x: 0.1 }, { id: "house", x: 0.9 } ],
        cap: { en: "Door to door leaps Super Auggie, following every sniffle, every whimper, every 'Mummyyy!'", hi: "दरवाज़े-दरवाज़े छलांग लगाता सुपर ऑगी, हर सुबकी, हर कूँ-कूँ, हर 'मम्मीईई!' के पीछे।" },
        say: [ { who: 0, en: "Everybody to the courtyard! Follow my waggy tail!", hi: "सब आँगन में चलो! मेरी हिलती पूँछ के पीछे आओ!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सर्र!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.22, cape: true }, { id: "kabir", pose: "sit", mood: "laugh", x: 0.5 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.36 }, { id: "diya", x: 0.64 } ],
        cap: { en: "Soon the whole street is in the courtyard. Papa brings torches, and grown-ups carefully light the diyas.", hi: "जल्दी ही पूरी गली आँगन में थी। पापा टॉर्च लाए, और बड़ों ने सावधानी से दीये जलाए।" },
        say: [
          { who: 2, en: "Relax, kids! The power's gone, but my jokes are still here!", hi: "घबराओ मत, बच्चो! बिजली गई है, मेरे जोक्स नहीं!" },
          { who: 1, en: "Oh no, Uncle! That's even scarier than the dark! Ha ha!", hi: "अरे बाप रे, अंकल! ये तो अँधेरे से भी डरावना है! हा हा!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "kabir", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.15, y: 0.1 }, { id: "star", x: 0.5, y: 0.15 }, { id: "star", x: 0.85, y: 0.1 } ],
        say: [
          { who: 1, en: "Look up, Kabir! No city lights means MORE stars. Some starlight is older than Dadi!", hi: "ऊपर देखो, कबीर! शहर की बत्तियाँ बंद, तो तारे ज़्यादा। कुछ तारों की रोशनी तो दादी से भी पुरानी है!" },
          { who: 0, en: "Wow! The dark is full of glitter! I'm not even scared anymore!", hi: "वाह! अँधेरा तो चमकी से भरा है! अब मुझे डर भी नहीं लग रहा!", kind: "shout" }
        ],
        fx: { en: "TWINKLE!", hi: "टिमटिम!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "pinku", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "diya", x: 0.52 } ],
        cap: { en: "Mausi sings, Dadi tells a story, and Pinku performs a VERY dramatic moonlight dance.", hi: "मौसी ने गाना गाया, दादी ने किस्सा सुनाया, और पिंकू ने चाँदनी में धुआँधार ड्रामेबाज़ डांस किया।" },
        say: [
          { who: 0, en: "Thank you, my fans! No autographs tonight... I can't find my pen!", hi: "शुक्रिया, मेरे फ़ैन्स! आज ऑटोग्राफ़ नहीं... अँधेरे में पेन ही नहीं मिल रहा!" },
          { who: 1, en: "Encore! Hold that pose! This selfie is ninety percent darkness, ten percent Pinku!", hi: "वन्स मोर! पोज़ होल्ड करो! इस सेल्फ़ी में नब्बे प्रतिशत अँधेरा, दस प्रतिशत पिंकू!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "bulb", x: 0.92, y: 0.2 } ],
        cap: { en: "Ping! The lights come back on... and the whole street groans: 'Awww! Switch them OFF again!'", hi: "पिंग! बत्ती वापस आ गई... और पूरी गली एक साथ बोली: 'ओफ़्फ़ो! फिर से बंद करो!'" },
        say: [
          { who: 0, en: "Auggie, can we have a power-cut party every Saturday? PLEASE?", hi: "ऑगी, क्या हर शनिवार बत्ती-गुल पार्टी हो सकती है? प्लीज़?" },
          { who: 2, en: "HA-HA-HA! Only if the power agrees! But courtyard picnics? Every week!", hi: "हा-हा-हा! बिजली मानेगी तभी ना! पर आँगन वाली पिकनिक? हर हफ़्ते!" }
        ]
      }
    ]
  },
  {
    id: 83,
    age: "6-10",
    category: "friends",
    title: { en: "The Pug Who Tried Being Everyone", hi: "सब बनने चला पिंकू" },
    blurb: { en: "Pinku copies his friends' howls, runs and swims to win the Talent Show. What if his best talent is hiding in plain sight?", hi: "टैलेंट शो जीतने के लिए पिंकू दोस्तों की तरह हूऊ, दौड़ और तैराकी आज़माता है! पर अगर असली टैलेंट उसके अंदर ही छुपा हो तो?" },
    moral: { en: "Your own sparkle is the best talent you'll ever have.", hi: "तुम्हारी अपनी चमक ही तुम्हारा सबसे बड़ा टैलेंट है।" },
    cover: {
      bg: "festival",
      chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.25 }, { id: "pinku", pose: "cheer", mood: "laugh", x: 0.6 } ],
      props: [ { id: "trophy", x: 0.88 }, { id: "crown", x: 0.6, y: 0.15 } ],
      fx: { en: "BRAVO!", hi: "वाह-वाह!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "pinku", pose: "stand", mood: "determined", x: 0.3 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "trophy", x: 0.52 } ],
        cap: { en: "The Chamakpur Dog Talent Show is tomorrow, and Pinku wants that trophy VERY badly.", hi: "कल है चमकपुर डॉग टैलेंट शो, और पिंकू को वो ट्रॉफ़ी हर हाल में चाहिए।" },
        say: [
          { who: 0, en: "I need a showstopper talent, Auggie. Something BIG. Something GRAND. Something... not me.", hi: "मुझे कोई धमाकेदार टैलेंट चाहिए, ऑगी। कुछ बड़ा। कुछ शानदार। कुछ... मेरे जैसा नहीं।" },
          { who: 1, en: "Not you? But you're the most dramatic dog in all of Chamakpur!", hi: "तुम्हारे जैसा नहीं? पर पूरे चमकपुर में तुमसे बड़ा ड्रामा-किंग कोई नहीं!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "pinku", pose: "blast", mood: "determined", x: 0.3 }, { id: "snowy", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Attempt Number One: howl like Snowy.", hi: "पहली कोशिश: स्नोवी जैसा 'हूऊ'।" },
        say: [
          { who: 0, en: "AROOO... hic... aroo? Why do I sound like a rubber duck?", hi: "हूऊऊ... हिच... हूऊ? मेरी आवाज़ रबर की बत्तख जैसी क्यों है?" },
          { who: 1, en: "Aaoooo! Not bad! ...Sorry, that was me. It's too hot NOT to howl.", hi: "आऊऊऊ! बुरा नहीं था! ...सॉरी, वो मैं था। गर्मी में हूऊ रुकता ही नहीं।" }
        ],
        fx: { en: "SQUEAK!", hi: "चूँ!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "pinku", pose: "run", mood: "sad", x: 0.3 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.72 } ],
        cap: { en: "Attempt Number Two: run like Chiku.", hi: "दूसरी कोशिश: चीकू जैसी दौड़।" },
        say: [
          { who: 1, en: "Faster, Pinku! Zoom-zoom! I'm FIRST! Again!", hi: "और तेज़, पिंकू! ज़ूम-ज़ूम! मैं फ़र्स्ट! फिर से!", kind: "shout" },
          { who: 0, en: "Huff... puff... my legs have gone on holiday... without me!", hi: "हाँफ... हाँफ... मेरी टाँगें तो छुट्टी पर चली गईं... मुझे छोड़कर!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "scared", x: 0.3 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Attempt Number Three: swim like Auggie.", hi: "तीसरी कोशिश: ऑगी जैसी तैराकी।" },
        say: [
          { who: 0, en: "NOPE! One toe in and I'm DONE! Pugs and deep water are NOT friends!", hi: "ना बाबा ना! एक उँगली डाली और बस! पग और गहरा पानी दोस्त नहीं हैं!", kind: "shout" },
          { who: 1, en: "Good call! Pugs shouldn't go in deep water. Stay on the bank, buddy!", hi: "बिल्कुल सही! पग को गहरे पानी में नहीं जाना चाहिए। किनारे पर ही रहो, दोस्त!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "pinku", pose: "lie", mood: "sad", x: 0.33 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.72, flip: true, cape: true } ],
        cap: { en: "The night before the show, one little pug is sulking in the corner...", hi: "शो से पहले की रात, एक नन्हा पग कोने में मुँह फुलाए पड़ा था..." },
        say: [
          { who: 0, en: "I'm not a howler, a runner or a swimmer. I'm just... Pinku. Plain old Pinku.", hi: "न मैं हूऊ कर सकता, न दौड़ सकता, न तैर सकता। मैं बस... पिंकू हूँ। सीधा-सादा पिंकू।", kind: "whisper" },
          { who: 1, en: "Want a Super Auggie secret? My best power isn't the cape. It's being ME.", hi: "सुपर ऑगी का एक राज़ बताऊँ? मेरी असली पावर केप नहीं है। वो है, मैं ख़ुद।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "pinku", pose: "think", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Your snorts, your sulks, your famous faints... they make everyone laugh! That's a TALENT!", hi: "तुम्हारी फुँफकार, तुम्हारा रूठना, तुम्हारा मशहूर 'बेहोश' होना... सब हँस पड़ते हैं! यही तो टैलेंट है!" },
          { who: 1, en: "Wait... my drama IS my talent? ...I'm going to faint. From happiness!", hi: "रुको... मेरा ड्रामा ही मेरा टैलेंट है? ...मैं बेहोश होने वाला हूँ। ख़ुशी से!" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "pinku", pose: "blast", mood: "laugh", x: 0.5 } ],
        props: [ { id: "drum", x: 0.12 }, { id: "star", x: 0.85, y: 0.2 } ],
        cap: { en: "Showtime! Pinku performs 'The Tragedy of the Last Biscuit', with snorts, sighs and a grand fainting finale!", hi: "शो टाइम! पिंकू ने पेश किया 'आख़िरी बिस्कुट की दर्द भरी दास्तान', फुँफकार, आहों और बेहोशी वाले धमाकेदार अंत के साथ!" },
        say: [ { who: 0, en: "Oh, cruel world! Who ate my LAST biscuit?! ...Oh. It was me.", hi: "हाय ज़ालिम दुनिया! मेरा आख़िरी बिस्कुट किसने खाया?! ...अरे, मैंने ही खाया था।", kind: "shout" } ],
        fx: { en: "SNORT!", hi: "फुँफ!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2, cape: true }, { id: "pinku", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "snowy", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.62 }, { id: "crown", x: 0.5, y: 0.15 } ],
        cap: { en: "The crowd roars, laughs and throws marigolds! Pinku wins the crown for 'Best Drama Star'!", hi: "लोग हँसे, तालियाँ बजीं, गेंदे के फूल बरसे! पिंकू को मिला 'बेस्ट ड्रामा स्टार' का ताज!" },
        say: [
          { who: 1, en: "I'd like to thank... myself, for being ME! And Auggie, for reminding me.", hi: "मैं शुक्रिया कहना चाहूँगा... ख़ुद को, ख़ुद जैसा रहने के लिए! और ऑगी को, याद दिलाने के लिए।" },
          { who: 2, en: "Aaoooo! Sorry, happy howl. Can't stop it!", hi: "आऊऊऊ! सॉरी, ख़ुशी वाला हूऊ। रुकता ही नहीं!", kind: "shout" }
        ],
        fx: { en: "BRAVO!", hi: "वाह-वाह!" },
        action: true
      }
    ]
  },
  {
    id: 84,
    age: "6-10",
    category: "superhero",
    title: { en: "Pinku's Nap Floats Away!", hi: "पिंकू की झपकी बह चली!" },
    blurb: { en: "Pinku naps on a floating tube at the lake picnic, and wakes up drifting far from shore. Who can bring him back?", hi: "झील की पिकनिक में पिंकू तैरती ट्यूब पर सो गया, और आँख खुली तो किनारा बहुत दूर! अब कौन लाएगा वापस?" },
    moral: { en: "Life jackets on, grown-ups close, and naps only on dry land!", hi: "लाइफ़ जैकेट पहनो, बड़ों के पास रहो, और झपकी सिर्फ़ सूखी ज़मीन पर!" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.35, cape: true }, { id: "pinku", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
      props: [ { id: "boat", x: 0.12 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Picnic day at Chamak Lake! The whole family is here, and Pinku is the guest of honour.", hi: "चमक झील पर पिकनिक का दिन! पूरा परिवार आया है, और पिंकू हैं ख़ास मेहमान।" },
        say: [
          { who: 1, en: "Rule one: no water without a grown-up! Rule two: nobody touches my samosas.", hi: "पहला नियम: बड़ों के बिना पानी में कोई नहीं जाएगा! दूसरा: मेरे समोसों को कोई हाथ नहीं लगाएगा।" },
          { who: 0, en: "Rule three: Auggie gets the first nap in the shade!", hi: "तीसरा नियम: छाँव में पहली झपकी ऑगी की!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "lie", mood: "sleepy", x: 0.5 } ],
        cap: { en: "But Pinku spots a comfy floating tube at the water's edge. He's still in his tiny life jacket...", hi: "पर पिंकू को किनारे पर एक मुलायम तैरती ट्यूब दिख गई। छोटी-सी लाइफ़ जैकेट अब भी पहने हुए..." },
        say: [ { who: 0, en: "Ahh... a floating bed. Just a teeny-weeny royal nap...", hi: "आहा... तैरता हुआ पलंग। बस एक छोटी-सी शाही झपकी...", kind: "whisper" } ]
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "scared", x: 0.7, flip: true } ],
        props: [ { id: "tree", x: 0.08 } ],
        cap: { en: "Then a sneaky breeze nudges the tube... away... and away... into the middle of the lake!", hi: "फिर एक शरारती हवा ट्यूब को धकेलती गई... दूर... और दूर... झील के बीचों-बीच!" },
        say: [ { who: 0, en: "HELP! My bed has turned into a BOAT! I did NOT book a boat!", hi: "बचाओ! मेरा पलंग तो नाव बन गया! मैंने नाव बुक नहीं की थी!", kind: "shout" } ],
        fx: { en: "EEK!", hi: "उई माँ!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "point", mood: "scared", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Pinku's drifting! Auggie, you're a strong swimmer. Pull the tube back gently, and don't let go!", hi: "पिंकू बह रहा है! ऑगी, तुम पक्के तैराक हो। ट्यूब को धीरे-धीरे खींच लाओ, छोड़ना मत!" },
          { who: 0, en: "Labrador plus lake equals SUPERPOWER! Woof-woof, let's go!", hi: "लैब्राडोर और झील, यही तो मेरी सुपरपावर है! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "One GIANT hero leap... SPLOOSH! Super Auggie zooms across the lake like a golden motorboat!", hi: "एक ज़बरदस्त हीरो वाली छलांग... छपाक! सुपर ऑगी सुनहरी मोटरबोट की तरह झील चीरता चला!" },
        say: [ { who: 0, en: "Hold on, Pinku! Super Auggie is coming!", hi: "टिके रहो, पिंकू! सुपर ऑगी आ रहा है!", kind: "shout" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "pinku", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Grab on, Pinku! I've got the tube rope in my teeth. Mmf... mmf!", hi: "कसकर पकड़ो, पिंकू! ट्यूब की रस्सी मेरे दाँतों में है। म्म्फ़... म्म्फ़!" },
          { who: 1, en: "Don't let go! And please don't splash my face! It's my BEST feature!", hi: "छोड़ना मत! और हाँ... मेरे चेहरे पर छींटे मत मारना! यही तो मेरी शान है!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3, cape: true }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Paddle, paddle, PULL! Auggie tows the tube to the shore, where Papa is waiting knee-deep.", hi: "पैडल, पैडल, खींचो! ऑगी ट्यूब को किनारे तक खींच लाया, जहाँ पापा घुटनों तक पानी में खड़े थे।" },
        say: [
          { who: 1, en: "Got him! Well done, Super Auggie! That rescue was TUBE-ular! Ha ha!", hi: "पकड़ लिया! शाबाश, सुपर ऑगी! आज से तुम्हारा नाम 'ट्यूब-वाला तूफ़ान'!", kind: "shout" },
          { who: 0, en: "Papa, that joke was colder than the lake! Ha ha!", hi: "पापा, ये जोक तो झील के पानी से भी ठंडा था! हा हा!" }
        ],
        fx: { en: "HEAVE-HO!", hi: "हइस्सा!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "sit", mood: "happy", x: 0.22 }, { id: "auggie", pose: "lie", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "umbrella", x: 0.95 } ],
        cap: { en: "Wrapped in a fluffy towel, Pinku announces a brand-new rule: naps happen ONLY on dry land!", hi: "तौलिये में लिपटे पिंकू का नया नियम: सोना है? तो सिर्फ़ सूखी ज़मीन पर!" },
        say: [
          { who: 0, en: "Auggie, you saved me. Thank you. ...And if anyone asks, I did NOT squeal.", hi: "ऑगी, तुमने मुझे बचा लिया। शुक्रिया। ...और कोई पूछे, तो मैं चीखा-विखा नहीं था।", kind: "whisper" },
          { who: 2, en: "HA-HA-HA! Your secret's safe, Pinku... except from the ducks!", hi: "हा-हा-हा! राज़ पक्का रहेगा, पिंकू... बस बत्तखों ने सुन लिया होगा!" }
        ]
      }
    ]
  },
  {
    id: 85,
    age: "6-10",
    category: "mystery",
    title: { en: "Who's Hooting in the Haveli?", hi: "हवेली में कौन हू-हू करता है?" },
    blurb: { en: "Strange hoots and glowing eyes in the empty old haveli! Is it a ghost... or something much fluffier?", hi: "ख़ाली पुरानी हवेली में अजीब 'हू-हू' और चमकती आँखें! भूत है... या कोई रोएँदार राज़?" },
    moral: { en: "Look closely before you get scared; the 'ghost' might just be a neighbour.", hi: "डरने से पहले ध्यान से देखो; 'भूत' कोई प्यारा पड़ोसी भी निकल सकता है।" },
    cover: {
      bg: "citynight",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3, cape: true }, { id: "owl", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "house", x: 0.55 }, { id: "star", x: 0.1, y: 0.15 } ],
      fx: { en: "HOO-HOO!", hi: "हू-हू!" }
    },
    panels: [
      {
        bg: "citynight",
        chars: [ { id: "rohan", pose: "point", mood: "scared", x: 0.3 }, { id: "anaya", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "house", x: 0.52 } ],
        cap: { en: "Night in Chamakpur. The old haveli on Peepal Lane has been empty for years... or has it?", hi: "चमकपुर की रात। पीपल गली की पुरानी हवेली बरसों से ख़ाली पड़ी है... या नहीं?" },
        say: [
          { who: 0, en: "Did you hear that? HOO-HOO! And two big glowing eyes blinked at me!", hi: "सुना? हू-हू! और दो बड़ी-बड़ी चमकती आँखें मुझे देखकर झपकीं!", kind: "whisper" },
          { who: 1, en: "Everyone says it's haunted! I'm NOT scared. My knees are just... dancing.", hi: "सब कहते हैं वहाँ भूत है! मैं डर नहीं रही। बस मेरे घुटने... नाच रहे हैं।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3, cape: true }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Next morning, the kids tell Auggie and Nanu every spooky detail.", hi: "अगली सुबह बच्चों ने ऑगी और नानू को हर डरावनी बात बताई।" },
        say: [
          { who: 1, en: "Haunted? Ho ho! Let's think like scientists. Step one: we OBSERVE!", hi: "भूत? हो हो! चलो वैज्ञानिकों की तरह सोचें। पहला क़दम: ध्यान से देखो!" },
          { who: 0, en: "Step two: we SNIFF! Woof-woof, let's go!", hi: "दूसरा क़दम: ध्यान से सूँघो! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.25, cape: true }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.5 }, { id: "rohan", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        props: [ { id: "house", x: 0.95 } ],
        cap: { en: "That evening, the team tiptoes up to the creaky haveli gate. Creeeak!", hi: "उस शाम टीम दबे पाँव हवेली के चरमराते गेट तक पहुँची। चर्र्र!" },
        say: [
          { who: 2, en: "Auggie... you go first. Capes are basically ghost-proof, right?", hi: "ऑगी... तुम आगे चलो। केप वाले पर तो भूत का असर नहीं होता ना?", kind: "whisper" },
          { who: 1, en: "Fun fact: ghosts don't exist, but mosquitoes do. Walk faster!", hi: "मज़ेदार बात: भूत नहीं होते, पर मच्छर ज़रूर होते हैं। जल्दी चलो!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.35, cape: true } ],
        props: [ { id: "house", x: 0.75 } ],
        cap: { en: "Super Ears listen hard... The hooting is coming from high up, near a broken window.", hi: "सुपर कान खड़े... ये 'हू-हू' तो ऊपर वाली टूटी खिड़की से आ रहा है!" },
        say: [ { who: 0, en: "Something touched my back! ...Oh. It's my own tail. Carry on.", hi: "किसी ने मेरी पीठ छुई! ...ओह, मेरी अपनी पूँछ थी। चलो आगे।", kind: "think" } ],
        fx: { en: "HOO-HOO!", hi: "हू-हू!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3, cape: true }, { id: "nanu", pose: "think", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Under the window, the Super Sniffer finds clues: feathers! Soft, fluffy, brown-and-white feathers!", hi: "खिड़की के नीचे सुपर नाक को सुराग मिले: पंख! नरम, रोएँदार, भूरे-सफ़ेद पंख!" },
        say: [
          { who: 1, en: "Feathers, hoots, big shining eyes at night... Detective, do you know who it is?", hi: "पंख, हू-हू, रात में चमकती आँखें... जासूस जी, कुछ समझ आया?" },
          { who: 0, en: "A ghost that sheds FEATHERS? No way. That's no ghost!", hi: "पंख गिराने वाला भूत? ना-ना। ये भूत-वूत नहीं है!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3, cape: true }, { id: "owl", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "house", x: 0.9 } ],
        say: [
          { who: 1, en: "Hoo-hoo! Namaste! I'm Ullu Uncle. Sorry about the spooky noises. That's how owls say hello!", hi: "हू-हू! नमस्ते! मैं उल्लू अंकल। डरावनी आवाज़ों के लिए सॉरी, हम ऐसे ही 'हैलो' बोलते हैं!" },
          { who: 0, en: "An owl! Not a ghost, just a friendly neighbour with VERY big eyes!", hi: "उल्लू! भूत नहीं, बस बड़ी-बड़ी आँखों वाले प्यारे पड़ोसी!" }
        ],
        fx: { en: "TA-DA!", hi: "टा-डा!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "nanu", pose: "point", mood: "happy", x: 0.3 }, { id: "owl", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Owls are awake at night, and their big eyes shine in torchlight. Pure science, no ghosts!", hi: "उल्लू रात में जागते हैं, और टॉर्च पड़ते ही उनकी बड़ी आँखें चमकती हैं। सीधा विज्ञान, भूत नहीं!" },
          { who: 1, en: "And please, no loud noise. My owlets are learning to fly... a bit wobbly!", hi: "और प्लीज़, शोर मत करना। मेरे बच्चे उड़ना सीख रहे हैं... अभी थोड़ा डगमगाते हैं!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "anaya", pose: "cheer", mood: "happy", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "rohan", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "house", x: 0.95 } ],
        cap: { en: "Anaya paints a sign for the gate: 'OWL FAMILY LIVES HERE. SHHH, PLEASE!'", hi: "अनाया ने गेट के लिए बोर्ड बनाया: 'यहाँ उल्लू परिवार रहता है। श्श्श, प्लीज़!'" },
        say: [
          { who: 2, en: "Yesterday I was scared of them. Today I'm their official gatekeeper! No noise allowed!", hi: "कल तक मैं इनसे डरता था। आज से मैं इनके घर का चौकीदार हूँ! कोई शोर नहीं!" },
          { who: 0, en: "And I'll paint the baby owls a welcome card!", hi: "और मैं नन्हे उल्लुओं के लिए वेलकम कार्ड बनाऊँगी!" }
        ]
      }
    ]
  },
  {
    id: 86,
    age: "6-10",
    category: "planet",
    title: { en: "Operation Cool Paws!", hi: "ऑपरेशन ठंडे पंजे!" },
    blurb: { en: "Chamakpur is baking, Snowy is melting, and every street animal is thirsty. Can carrots fix a heatwave? (Spoiler: no.)", hi: "चमकपुर तप रहा है, स्नोवी पिघल रहा है, और हर गली का जानवर प्यासा है! क्या गाजर से गर्मी भागेगी? (नहीं!)" },
    moral: { en: "On hot days, a bowl of water in the shade can save a life.", hi: "गर्मी में छाँव में रखा पानी का एक कटोरा किसी की जान बचा सकता है।" },
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
        cap: { en: "May in Chamakpur. The sun is SO hot, the road could cook a dosa!", hi: "चमकपुर में मई। धूप इतनी तेज़ कि सड़क पर डोसा बन जाए!" },
        say: [ { who: 0, en: "I'm... melting... Somebody post me back to the mountains! Aaoo... too hot to howl.", hi: "मैं... पिघल... रहा हूँ... कोई मुझे पार्सल करके पहाड़ों पर भेज दो! आऊ... हूऊ करने की भी ताक़त नहीं।" } ],
        fx: { en: "SIZZLE!", hi: "छन्न!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "snowy", pose: "lie", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.88, y: 0.12 } ],
        say: [
          { who: 0, en: "Snowy! You're panting like a pressure cooker! Quick, have a carrot! Carrots fix everything!", hi: "स्नोवी! तुम तो कुकर की तरह हाँफ रहे हो! जल्दी, गाजर खाओ! गाजर से सब ठीक होता है!" },
          { who: 1, en: "Not heat, bhai. Heat needs WATER and shade. And look, the street dogs are thirsty too.", hi: "गर्मी नहीं, भाई। गर्मी में चाहिए पानी और छाँव। और देखो, गली के कुत्ते भी प्यासे हैं।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.5 }, { id: "bottle", x: 0.92 } ],
        say: [
          { who: 1, en: "Water emergency! My list: every bowl, every bucket, every bottle in this house. GO!", hi: "पानी की इमरजेंसी! मेरी लिस्ट: घर का हर कटोरा, हर बाल्टी, हर बोतल। चलो!" },
          { who: 0, en: "Operation Cool Paws is ON! Woof-woof, let's go!", hi: "ऑपरेशन ठंडे पंजे शुरू! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "sun", x: 0.85, y: 0.15 } ],
        cap: { en: "Super Auggie leaps across hot rooftops, Super Ears locked on every thirsty pant and whimper!", hi: "गरम छतों पर छलांगें मारता सुपर ऑगी, सुपर कान हर प्यासी हाँफ और कूँ-कूँ पर टिके!" },
        say: [ { who: 0, en: "Hang on, everyone! Water is coming!", hi: "रुको, सब लोग! पानी आ रहा है!", kind: "shout" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "moti", pose: "stand", mood: "laugh", x: 0.22 }, { id: "cow", pose: "stand", mood: "happy", x: 0.5 }, { id: "papa", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "bowl", x: 0.35 }, { id: "bowl", x: 0.65 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Shady spot, water bowl. Shady spot, water bowl. Every lane gets one: for dogs, cats, cows and birds!", hi: "छाँव में कटोरा, छाँव में कटोरा। हर गली में एक: कुत्तों, बिल्लियों, गायों और चिड़ियों के लिए!" },
        say: [
          { who: 0, en: "Slurp-slurp! Thank you, Gaurav Uncle! I came by shortcut. Took twenty minutes.", hi: "सुड़प-सुड़प! शुक्रिया, गौरव अंकल! मैं शॉर्टकट से आया... बीस मिनट लगे।" },
          { who: 2, en: "Drink up, Moti! This bowl stays full all summer. Papa promise!", hi: "पी लो, मोती! ये कटोरा पूरी गर्मी भरा रहेगा। पक्का वादा!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "pigeon", pose: "stand", mood: "laugh", x: 0.2 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.78, flip: true }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5, cape: true } ],
        props: [ { id: "bowl", x: 0.35 } ],
        cap: { en: "Up on the roof, Dadi fills clay bowls with cool water. The birds come flapping!", hi: "छत पर दादी ने मिट्टी के कटोरों में ठंडा पानी भरा। चिड़ियाँ फुर्र-फुर्र आ पहुँचीं!" },
        say: [
          { who: 0, en: "Gutur-goo! Cool water on a hot day! Dadi, you're the BEST!", hi: "गुटर-गूँ! गर्मी में ठंडा पानी! दादी, आप तो कमाल हो!" },
          { who: 1, en: "Every living thing gets thirsty, beta. In my village, every roof had water for birds!", hi: "प्यास तो हर जीव को लगती है, बेटा। हमारे गाँव में हर छत पर चिड़ियों का पानी रहता था!" }
        ]
      },
      {
        bg: "vet",
        chars: [ { id: "snowy", pose: "sit", mood: "determined", x: 0.2 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.8, flip: true }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5, cape: true } ],
        cap: { en: "At the vet, Snowy gets a check-up and a cool towel. New rule: walks only in the early morning!", hi: "वेट क्लिनिक में स्नोवी का चेकअप हुआ, ठंडा तौलिया मिला। नया नियम: सैर सिर्फ़ सुबह-सुबह!" },
        say: [
          { who: 0, en: "And everyone, listen: NEVER leave a dog in a hot car! Not even for 'one minute'!", hi: "और सब लोग सुनो: कुत्ते को गरम गाड़ी में कभी मत छोड़ना! 'बस एक मिनट' के लिए भी नहीं!", kind: "shout" },
          { who: 1, en: "Noted, Snowy! Now hold that pose. Cool-towel selfie!", hi: "याद रहेगा, स्नोवी! अब पोज़ होल्ड करो। ठंडे तौलिये वाली सेल्फ़ी!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "snowy", pose: "lie", mood: "laugh", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "moti", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "tree", x: 0.05 }, { id: "bowl", x: 0.93 } ],
        cap: { en: "By sunset, Chamakpur has one hundred water bowls, and every animal has a cool, shady spot.", hi: "शाम तक चमकपुर में सौ पानी के कटोरे थे, और हर जानवर के पास ठंडी छाँव।" },
        say: [
          { who: 0, en: "Ahh! Now THIS feels like the mountains! AAOOOO! ...Sorry. Happy howl.", hi: "आहा! अब लगा पहाड़ों पर हूँ! आऊऊऊ! ...सॉरी, ख़ुशी वाला हूऊ।" },
          { who: 2, en: "Snowy, you grumbled all day... but you thought of us first. Thanks, bhai.", hi: "स्नोवी, तुम दिन भर गर्मी का रोना रोते रहे... पर सबसे पहले हमारी फ़िकर की। शुक्रिया, भाई।" }
        ],
        fx: { en: "COOL!", hi: "ठंडक!" },
        action: true
      }
    ]
  },
  {
    id: 87,
    age: "6-10",
    category: "sports",
    title: { en: "Chiku and the Very Pretty Butterfly", hi: "चीकू और प्यारी तितली" },
    blurb: { en: "Chiku is the fastest dog in Chamakpur, and the nosiest. Can he win a race without stopping to sniff EVERYTHING?", hi: "चीकू चमकपुर का सबसे तेज़ कुत्ता है, और सबसे ज़्यादा सूँघने वाला भी! क्या वो हर चीज़ सूँघे बिना रेस जीत पाएगा?" },
    moral: { en: "Keep your eyes on your goal; the fun things will still be there afterwards.", hi: "नज़र अपनी मंज़िल पर रखो; मज़ेदार चीज़ें बाद में भी वहीं मिलेंगी।" },
    cover: {
      bg: "playground",
      chars: [ { id: "chiku", pose: "run", mood: "happy", x: 0.4 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.78, flip: true, cape: true } ],
      props: [ { id: "trophy", x: 0.1 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zoya", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Big news: the Chamakpur Paws Dash is on Sunday! And Zoya, the colony's fastest runner, has a plan.", hi: "बड़ी ख़बर: रविवार को है चमकपुर पॉज़ डैश! और कॉलोनी में सबसे तेज़ दौड़ने वाली ज़ोया के पास है एक प्लान।" },
        say: [
          { who: 1, en: "Chiku, you're the zoomiest dog in Chamakpur. You HAVE to enter the Paws Dash!", hi: "चीकू, पूरे चमकपुर में तुमसे तेज़ कुत्ता कोई नहीं। पॉज़ डैश में नाम लिखवाओ!" },
          { who: 0, en: "A race? YES! I'll be FIRST! Wait... is that a butterfly?", hi: "रेस? हाँ! मैं फ़र्स्ट आऊँगा! रुको... वो तितली है क्या?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "point", mood: "happy", x: 0.33 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "flower", x: 0.12 } ],
        cap: { en: "Practice run! Chiku zooms off... and stops to sniff a flower. A leaf. A shoe. An ANT.", hi: "प्रैक्टिस शुरू! चीकू फ़र्राटे से भागा... फिर रुका: फूल सूँघा। पत्ता सूँघा। जूता सूँघा। चींटी सूँघी!" },
        say: [
          { who: 1, en: "Chiku! The finish line is THAT way! The ant is not in the race!", hi: "चीकू! फ़िनिश लाइन उधर है! चींटी रेस में नहीं है!", kind: "shout" },
          { who: 0, en: "But this ant smells like BISCUITS!", hi: "पर इस चींटी से बिस्कुट की महक आ रही है!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "sit", mood: "sad", x: 0.3 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "I can't help it! My nose goes left, my legs go right, and I go NOWHERE!", hi: "क्या करूँ, ऑगी! नाक बाएँ जाती है, टाँगें दाएँ, और मैं कहीं नहीं पहुँचता!" },
          { who: 1, en: "Trust me, I once sniffed one samosa for an hour. Champions sniff AFTER the race!", hi: "मुझे पता है! मैंने एक बार एक समोसा घंटे भर सूँघा था। चैंपियन रेस के बाद सूँघते हैं!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "chiku", pose: "run", mood: "determined", x: 0.3 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.72, flip: true, cape: true } ],
        props: [ { id: "bone", x: 0.5 }, { id: "ball", x: 0.92 } ],
        cap: { en: "Coach Super Auggie's secret training: zoom past bones, balls and biscuits. Eyes on the line!", hi: "कोच सुपर ऑगी की सीक्रेट ट्रेनिंग: हड्डी, गेंद, बिस्कुट, सबके पास से ज़ूम! नज़र लाइन पर!" },
        say: [
          { who: 1, en: "Eyes on the line! ...Ooh, a bone! NO, Auggie! Eyes on the LINE!", hi: "नज़र लाइन पर! ...ओह, हड्डी! नहीं, ऑगी! नज़र लाइन पर!", kind: "shout" },
          { who: 0, en: "Coach, are you talking to me or to yourself?", hi: "कोच, आप मुझसे बोल रहे हो या ख़ुद से?" }
        ]
      },
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "run", mood: "determined", x: 0.22 }, { id: "moti", pose: "run", mood: "determined", x: 0.47 }, { id: "snowy", pose: "run", mood: "happy", x: 0.75 } ],
        cap: { en: "Race day! Chiku, Moti, Snowy and a dozen speedy paws on the line. Ready... steady... GO!", hi: "रेस का दिन! चीकू, मोती, स्नोवी और दर्जन भर फ़ुर्तीले पंजे लाइन पर। रेडी... स्टेडी... गो!" },
        fx: { en: "GO!", hi: "भागो!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "chiku", pose: "think", mood: "surprised", x: 0.4 } ],
        props: [ { id: "flower", x: 0.72 } ],
        cap: { en: "Halfway round the track, a big blue butterfly flutters right past Chiku's nose...", hi: "आधे ट्रैक पर, एक बड़ी नीली तितली चीकू की नाक के ठीक सामने से फुर्र..." },
        say: [ { who: 0, en: "Ooh, so pretty! Just one teeny sniff... what's the harm?", hi: "ओह, कितनी प्यारी! बस एक छोटा-सा सूँ... क्या फ़र्क पड़ेगा?", kind: "think" } ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.5, cape: true } ],
        cap: { en: "Then, from the crowd, one very familiar, very MIGHTY voice booms out...", hi: "तभी भीड़ में से एक जानी-पहचानी, ज़ोरदार आवाज़ गूँजी..." },
        say: [ { who: 0, en: "CHIKU! Butterflies LATER! EYES ON THE LINE!", hi: "चीकू! तितली बाद में! नज़र लाइन पर!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.2, cape: true }, { id: "chiku", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "zoya", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.62 }, { id: "flower", x: 0.95 } ],
        cap: { en: "First across the finish line... CHIKU! His prize? One long, happy sniff of the butterfly's flower.", hi: "फ़िनिश लाइन के पार सबसे पहले... चीकू! और इनाम? तितली वाले फूल की एक लंबी सूँ!" },
        say: [
          { who: 1, en: "FIRST! And guess what, Coach? Waiting made this flower smell TEN times better!", hi: "फ़र्स्ट! और पता है, कोच? इंतज़ार के बाद ये फूल दस गुना ज़्यादा महक रहा है!", kind: "shout" },
          { who: 2, en: "Go on, champ! You earned every single sniff!", hi: "जाओ, चैंपियन! हर एक सूँ तुम्हारी कमाई है!" }
        ],
        fx: { en: "WINNER!", hi: "जीत गया!" },
        action: true
      }
    ]
  },
  {
    id: 88,
    age: "6-10",
    category: "planet",
    title: { en: "More Glow, Less Boom!", hi: "रोशनी ज़्यादा, धमाके कम!" },
    blurb: { en: "Loud crackers have Chamakpur's animals shaking with fear. Can Super Auggie make Diwali brighter AND quieter?", hi: "तेज़ पटाखों से चमकपुर के जानवर थर-थर काँप रहे हैं! क्या सुपर ऑगी दिवाली को ज़्यादा रोशन और कम शोर वाली बना पाएगा?" },
    moral: { en: "The brightest festivals are the ones that are kind to every animal too.", hi: "सबसे रोशन त्योहार वही है, जिसमें हर जानवर भी चैन से रहे।" },
    cover: {
      bg: "festival",
      chars: [ { id: "auggie", pose: "fly", mood: "happy", x: 0.4, cape: true }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.78, flip: true } ],
      props: [ { id: "diya", x: 0.12 }, { id: "diya", x: 0.6 }, { id: "star", x: 0.9, y: 0.15 } ],
      fx: { en: "SHINE!", hi: "चमक!" }
    },
    panels: [
      {
        bg: "festival",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "anaya", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "diya", x: 0.5 }, { id: "diya", x: 0.92 } ],
        cap: { en: "Diwali in Chamakpur! Diyas glow on every step, and rangoli blooms at every door.", hi: "चमकपुर में दिवाली! हर सीढ़ी पर दीये जगमग, हर दरवाज़े पर रंगोली खिली।" },
        say: [
          { who: 1, en: "Auggie, look at my peacock rangoli! It took me three whole hours!", hi: "ऑगी, मेरी मोर वाली रंगोली देखो! पूरे तीन घंटे लगे!" },
          { who: 0, en: "Beautiful! And not ONE paw print on it... yet. I'm being VERY careful.", hi: "वाह, कमाल! और इस पर मेरा एक भी पंजा नहीं... अभी तक। मैं बहुत ध्यान रख रहा हूँ।" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.4 } ],
        props: [ { id: "star", x: 0.2, y: 0.15 }, { id: "star", x: 0.8, y: 0.1 } ],
        cap: { en: "Then... BANG! BOOM! CRACKLE! Loud firecrackers go off down the street, one after another!", hi: "तभी... धड़ाम! धूम! तड़-तड़! गली में एक के बाद एक तेज़ पटाखे!" },
        say: [ { who: 0, en: "OW, my ears! Super Ears hear every bang ten times LOUDER! Make it stop!", hi: "आह, मेरे कान! सुपर कानों को हर धमाका दस गुना ज़ोर से सुनाई देता है! बंद करो!", kind: "shout" } ],
        fx: { en: "BOOM!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "citynight",
        chars: [ { id: "cat", pose: "stand", mood: "scared", x: 0.3 }, { id: "pinku", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        props: [ { id: "car", x: 0.52 } ],
        cap: { en: "All over Chamakpur, animals hide wherever they can: under cars, behind pots, beneath beds.", hi: "पूरे चमकपुर में जानवर जहाँ जगह मिली वहाँ छुप गए: गाड़ियों के नीचे, गमलों के पीछे, पलंग के नीचे।" },
        say: [
          { who: 0, en: "My kittens are shaking under this car! Please, somebody make it stop!", hi: "मेरे बच्चे गाड़ी के नीचे काँप रहे हैं! प्लीज़, कोई ये धमाके रोको!" },
          { who: 1, en: "I'm not scared. I'm just... hiding very dramatically. Is the sky ANGRY with us?", hi: "मैं डरा नहीं हूँ। बस... बड़े स्टाइल से छुपा हूँ। आसमान हमसे नाराज़ है क्या?" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mumma", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "diya", x: 0.52 } ],
        say: [
          { who: 1, en: "Crackers scare every animal in town, baby. Let's show Chamakpur a quieter, kinder Diwali!", hi: "पटाखों से शहर का हर जानवर डरता है, बेटा। चलो, चमकपुर को शांत और प्यारी दिवाली दिखाएँ!" },
          { who: 0, en: "More glow, less BOOM! Woof-woof, let's go!", hi: "रोशनी ज़्यादा, धमाके कम! भौं-भौं, चलो चलें!", kind: "shout" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.5, cape: true } ],
        props: [ { id: "house", x: 0.1 }, { id: "house", x: 0.9 } ],
        cap: { en: "From roof to roof bounds Super Auggie, with one polite request for every family: 'More diyas, fewer crackers?'", hi: "छत-छत कूदता सुपर ऑगी, हर परिवार से एक प्यारी-सी गुज़ारिश: 'दीये ज़्यादा, पटाखे कम?'" },
        say: [ { who: 0, en: "Please! The kittens are scared!", hi: "प्लीज़! बिल्ली के बच्चे डरे हुए हैं!", kind: "shout" } ],
        fx: { en: "WHOOSH!", hi: "सर्र!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "rohan", pose: "think", mood: "sad", x: 0.3 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.72, flip: true, cape: true } ],
        props: [ { id: "diya", x: 0.52 } ],
        say: [
          { who: 0, en: "Diwali without crackers? That's like cricket without a ball! So BORING!", hi: "पटाखों के बिना दिवाली? ये तो बिना गेंद का क्रिकेट हुआ! कितना बोरिंग!" },
          { who: 1, en: "Boring? Come and see! Anaya has a super-sparkly plan!", hi: "बोरिंग? चलो, देखो तो! अनाया के पास एक चमचमाता प्लान है!" }
        ]
      },
      {
        bg: "festival",
        chars: [ { id: "anaya", pose: "cheer", mood: "laugh", x: 0.22 }, { id: "kabir", pose: "cheer", mood: "happy", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.08 }, { id: "diya", x: 0.36 }, { id: "diya", x: 0.64 }, { id: "diya", x: 0.94 } ],
        cap: { en: "The street lights a THOUSAND diyas and a lane-long rangoli. Even Rohan whispers, 'Okay... this is better!'", hi: "गली ने हज़ार दीये जलाए और गली जितनी लंबी रंगोली बनाई। रोहन भी धीरे से बोला, 'ठीक है... ये तो ज़्यादा मस्त है!'" },
        say: [
          { who: 2, en: "In my village, Diwali meant diyas, songs and sharing. This feels just like home!", hi: "हमारे गाँव में दिवाली मतलब दीये, गीत और बाँटना। आज तो बिल्कुल घर जैसा लग रहा है!" },
          { who: 1, en: "Dadi, the diyas are twinkling like the stars came down to play!", hi: "दादी, दीये ऐसे टिमटिमा रहे हैं जैसे तारे खेलने नीचे आ गए!" }
        ],
        fx: { en: "SHINE!", hi: "चमक!" },
        action: true
      },
      {
        bg: "festival",
        chars: [ { id: "cat", pose: "sit", mood: "happy", x: 0.22 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.5, cape: true }, { id: "pinku", pose: "sit", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.05 }, { id: "diya", x: 0.95 } ],
        cap: { en: "One by one, the animals peep out of hiding. Three tiny kittens curl up against Auggie's warm tummy.", hi: "एक-एक करके जानवर बाहर झाँकने लगे। बिल्ली के तीन नन्हे बच्चे ऑगी के गरम पेट से सटकर सो गए।" },
        say: [
          { who: 0, en: "Thank you, Super Auggie. My kittens are smiling in their sleep!", hi: "शुक्रिया, सुपर ऑगी। मेरे बच्चे नींद में भी मुस्कुरा रहे हैं!", kind: "whisper" },
          { who: 2, en: "I was NEVER scared, obviously. ...Can I snuggle in too?", hi: "मैं तो कभी डरा ही नहीं था, हाँ। ...पर क्या मैं भी चिपककर सो सकता हूँ?" }
        ]
      }
    ]
  }
);
