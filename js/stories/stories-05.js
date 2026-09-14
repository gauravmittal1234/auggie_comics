window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(
  {
    id: 89,
    age: "6-10",
    category: "home",
    title: { en: "Chief Nap Officer Auggie", hi: "मीटिंग में खर्राटे!" },
    blurb: { en: "Papa's biggest meeting ever. Auggie's loudest snore ever. And where on earth did the charger go?", hi: "पापा की सबसे बड़ी मीटिंग, ऑगी के सबसे ज़ोरदार खर्राटे... और ऊपर से चार्जर ग़ायब! अब क्या होगा?" },
    moral: { en: "Put things back where they belong, and if you goof up, just say sorry!", hi: "चीज़ें अपनी जगह पर रखो, और ग़लती हो जाए तो बस दिल से सॉरी बोल दो!" },
    cover: {
      bg: "home",
      chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "surprised", x: 0.72, flip: true } ],
      props: [ { id: "laptop", x: 0.52 }, { id: "clock", x: 0.88, y: 0.2 } ],
      fx: { en: "SNORE!", hi: "खर्र-खर्र!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.22 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "laptop", x: 0.5 } ],
        cap: { en: "Work-from-home Monday. Papa has his biggest laptop meeting ever. His office buddy has... other plans.", hi: "घर से ऑफ़िस वाला सोमवार। आज पापा की सबसे बड़ी मीटिंग है। और उनके ऑफ़िस-साथी का प्लान? कुछ और ही!" },
        say: [
          { who: 1, en: "Rule one, Auggie: no barking. Rule two: no snoring. Rule three: NO keyboard!", hi: "सुनो ऑगी, पहला नियम: भौंकना नहीं। दूसरा: खर्राटे नहीं। तीसरा: कीबोर्ड से दूर!" },
          { who: 0, en: "Rule four: the office buddy gets the comfy spot. Zzz...", hi: "और चौथा नियम: ऑफ़िस-साथी सबसे नरम जगह पर सोएगा... ख़र्र...", kind: "whisper" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.25 }, { id: "papa", pose: "sit", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "laptop", x: 0.5 } ],
        cap: { en: "Ten o'clock sharp. A sleepy paw rolls onto the keyboard... and switches the microphone ON!", hi: "ठीक दस बजे। नींद में ऑगी का पंजा लुढ़का, सीधा कीबोर्ड पर... और माइक चालू!" },
        say: [ { who: 1, en: "Er... that's not thunder, team. That's my co-worker. He's in a very deep meeting.", hi: "अरे... ये बादल नहीं गरज रहे, टीम। ये मेरे साथी हैं। बहुत गहरी मीटिंग में हैं।" } ],
        fx: { en: "SNORE!", hi: "खर्र-खर्र!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "laptop", x: 0.52 } ],
        cap: { en: "Auggie wakes up, sees faces on the screen, and squashes his big wet nose on the camera.", hi: "ऑगी की आँख खुली। स्क्रीन पर इतने सारे चेहरे! उसने अपनी गीली नाक सीधी कैमरे पर चिपका दी।" },
        say: [
          { who: 1, en: "Team, meet Auggie, Chief Nap Officer! Today's plan: work, work, then PAWS for lunch!", hi: "टीम, मिलिए ऑगी से, हमारे चीफ़ नींद ऑफ़िसर! इनकी तनख़्वाह? रोज़ दो गाजर!" },
          { who: 0, en: "Hello, team! My big idea: more snack breaks. Who's with me?", hi: "नमस्ते, टीम! मेरा बड़ा आइडिया: हर घंटे स्नैक ब्रेक! कौन-कौन मेरे साथ है?" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.2 }, { id: "papa", pose: "stand", mood: "scared", x: 0.5 }, { id: "mumma", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        props: [ { id: "laptop", x: 0.35, y: 0.6 } ],
        cap: { en: "Then the laptop beeps. Battery: five percent! And the charger? Gone!", hi: "तभी लैपटॉप ने बीप किया। बैटरी: सिर्फ़ पाँच प्रतिशत! और चार्जर? ग़ायब!" },
        say: [
          { who: 1, en: "Mottu! Charger! Code red! My boss is in the middle of a sentence!", hi: "मोटू! चार्जर! जल्दी! मेरे बॉस की बात अभी आधी भी नहीं हुई!" },
          { who: 2, en: "Relax, Mittsy! It's on my list: 'Charger. Last seen near the bed.'", hi: "घबराओ मत, मिट्सी! मेरी लिस्ट में लिखा है: 'चार्जर, आख़िरी बार बेड के पास देखा।'" }
        ],
        fx: { en: "BEEP!", hi: "बीप-बीप!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ],
        props: [ { id: "clock", x: 0.85, y: 0.2 } ],
        cap: { en: "Sniff one leads to the fridge. Sniff two, to Papa's smelly socks. Sniff three... the bedroom!", hi: "पहली सूँघ: सीधे फ़्रिज। दूसरी सूँघ: पापा के बदबूदार मोज़े। तीसरी सूँघ... बेडरूम!" },
        say: [ { who: 0, en: "Focus, nose! The charger smells of Papa's hands... and a bit like my blanket?", hi: "ध्यान से, नाक! चार्जर में पापा के हाथों की महक है... और मेरे कंबल की भी?" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "wave", mood: "sad", x: 0.35 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Found it! Under YOUR blanket, Auggie! Were you cuddling the charger?", hi: "मिल गया! तुम्हारे कंबल के नीचे, ऑगी! चार्जर को गले लगाकर सो रहे थे क्या?" },
          { who: 0, en: "It was so warm last night... Okay, I took it. Sorry, Mumma!", hi: "रात को ये कितना गरम था... हाँ, मैंने ही लिया था। सॉरी, मम्मा!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.28 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "laptop", x: 0.52 } ],
        cap: { en: "Auggie zooms back with the charger in his mouth. Battery: one percent. Plugged in!", hi: "ऑगी मुँह में चार्जर दबाकर तीर की तरह लौटा। बैटरी: एक प्रतिशत। प्लग लग गया!" },
        say: [ { who: 1, en: "Saved by one percent! Team, my Chief Nap Officer is also Chief Charger Finder!", hi: "बाल-बाल बचे! टीम, हमारे चीफ़ नींद ऑफ़िसर अब चीफ़ चार्जर-खोजू भी हैं!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.7, flip: true } ],
        props: [ { id: "bowl", x: 0.5 } ],
        say: [
          { who: 1, en: "Meeting over! My boss says your snore was the best part. Salary: one crunchy carrot!", hi: "मीटिंग ख़त्म! बॉस बोले, सबसे मज़ेदार तो तुम्हारे खर्राटे थे। तनख़्वाह: एक कुरकुरी गाजर!" },
          { who: 0, en: "One carrot for a Chief? Make it two, and tomorrow I'll bring my OWN pillow!", hi: "चीफ़ को सिर्फ़ एक गाजर? दो कर दो, पापा! और कल से तकिया मैं अपना लाऊँगा!" }
        ]
      }
    ]
  },
  {
    id: 90,
    age: "6-10",
    category: "family",
    title: { en: "The Waiter With a Super Nose", hi: "कैफ़े छोटू का सुपर-नाक वेटर" },
    blurb: { en: "Ten orders, zero notebooks, and one tempting plate of chocolate cookies. Can waiter Auggie save Café Chottu?", hi: "दस ऑर्डर, एक भी कॉपी नहीं, और सामने चॉकलेट कुकीज़ की प्लेट! क्या वेटर ऑगी कैफ़े छोटू बचा पाएगा?" },
    moral: { en: "It's okay to ask for help. Everyone brings a different superpower!", hi: "मदद माँगने में कोई शर्म नहीं। हर किसी के पास अपनी अलग सुपरपावर होती है!" },
    cover: {
      bg: "cafe",
      chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "cake", x: 0.52 } ],
      fx: { en: "YUM!", hi: "वाह!" }
    },
    panels: [
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Saturday! Mausi opens Café Chottu for one day only. Her waiter has four legs and one tail.", hi: "शनिवार! मौसी ने सिर्फ़ एक दिन के लिए 'कैफ़े छोटू' खोला है। वेटर के चार पैर हैं और एक पूँछ।" },
        say: [
          { who: 1, en: "Welcome to Café Chottu! First, a grand-opening selfie. Hold that pose, waiter!", hi: "कैफ़े छोटू में आपका स्वागत है! पहले ओपनिंग वाली सेल्फ़ी। पोज़ पकड़ो, वेटर साहब!" },
          { who: 0, en: "Holding! Holding! Do waiters get paid in cookies? Just asking.", hi: "पकड़ लिया पोज़! वैसे वेटर को तनख़्वाह में कुकीज़ मिलती हैं? बस यूँ ही पूछ रहा हूँ।" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.15 }, { id: "apple", x: 0.52 } ],
        say: [
          { who: 0, en: "Chocolate cookies... just ONE tiny lick... nobody will ever know...", hi: "चॉकलेट कुकीज़... बस एक छोटी-सी चाट... किसी को पता भी नहीं चलेगा...", kind: "think" },
          { who: 1, en: "I heard that! Chocolate is poison for dogs. Here, have a crunchy apple slice instead!", hi: "सब सुन लिया मैंने! चॉकलेट कुत्तों के लिए ज़हर है, बेटा। ये लो, कुरकुरा सेब!" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "nanu", pose: "wave", mood: "laugh", x: 0.2 }, { id: "rohan", pose: "point", mood: "laugh", x: 0.45 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.78, flip: true } ],
        cap: { en: "Then the whole colony arrives at once, and everybody shouts orders at the same time!", hi: "तभी पूरी कॉलोनी एक साथ टूट पड़ी, और सब एक साथ ऑर्डर चिल्लाने लगे!" },
        say: [
          { who: 0, en: "One masala chai, Auggie! Did you know tea leaves first came from... oh, never mind!", hi: "एक मसाला चाय, ऑगी बेटा! पता है, चाय की पत्ती सबसे पहले... अच्छा, छोड़ो!" },
          { who: 1, en: "Mango lassi! Extra cold! Extra mango! Extra fast, please!", hi: "मैंगो लस्सी! एकदम ठंडी! आम ज़्यादा! और फटाफट!" }
        ],
        fx: { en: "RUSH!", hi: "हल्ला!" },
        action: true
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3 }, { id: "mausi", pose: "stand", mood: "scared", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Mausi, HELP! Dogs can't write! Was it chai for Rohan? Lassi for Nanu? Carrots for me?", hi: "मौसी, बचाओ! कुत्ते लिख नहीं सकते! रोहन की चाय थी? नानू की लस्सी? मेरी गाजर?" },
          { who: 1, en: "Ten orders, no notebook, and I tried to do it all alone. Café Chottu is doomed!", hi: "दस ऑर्डर, कोई कॉपी नहीं, और मैं सब अकेले करने चली थी। कैफ़े छोटू तो गया!" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ],
        props: [ { id: "bottle", x: 0.75 } ],
        cap: { en: "Then Auggie remembers his secret notebook. It's wet, it's black, and it's right on his face!", hi: "तभी ऑगी को अपनी ख़ुफ़िया कॉपी याद आई। गीली, काली, और ठीक उसके चेहरे पर!" },
        say: [ { who: 0, en: "Ginger and elaichi: chai! Sweet mango: lassi! My nose never forgets an order!", hi: "अदरक-इलायची: चाय! मीठा आम: लस्सी! मेरी नाक कोई ऑर्डर नहीं भूलती!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "wave", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "He sniffs out each customer too. Nanu smells of newspaper. Rohan smells of cricket balls!", hi: "हर ग्राहक की पहचान भी नाक से! नानू से अख़बार की महक, रोहन से क्रिकेट बॉल की!" },
        say: [
          { who: 1, en: "Perfect chai! Fun fact: most of what we call taste is really smell!", hi: "वाह, एकदम सही चाय! मज़े की बात: खाने का ज़्यादातर स्वाद असल में नाक से आता है!" },
          { who: 0, en: "Then I'm the best taster in town. I taste everything from right here!", hi: "तब तो मैं शहर का सबसे बड़ा स्वाद-एक्सपर्ट हूँ। यहीं बैठे-बैठे सब चख लेता हूँ!" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "mumma", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Chottu, it's a SUPERHIT! Ha-ha-ha! Oops, three houses just heard me.", hi: "छोटू, तेरा कैफ़े तो सुपरहिट! हा-हा-हा! सॉरी, तीन घर दूर तक आवाज़ गई होगी।" },
          { who: 2, en: "Didi, I thought I could do it all alone. Turns out, I needed a nose!", hi: "दीदी, मुझे लगा था मैं सब अकेले कर लूँगी। पता चला, मुझे एक नाक की ज़रूरत थी!" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "mausi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "Closing time. Empty chairs, a sleepy waiter, and one last treat.", hi: "कैफ़े बंद। कुर्सियाँ ख़ाली, वेटर उनींदा, और बची है एक आख़िरी दावत।" },
        say: [
          { who: 1, en: "Your tip, partner: cool water and a carrot. And one selfie. Hold that pose!", hi: "ये रही तुम्हारी टिप, पार्टनर: ठंडा पानी और गाजर। और एक सेल्फ़ी! पोज़ पकड़ो!" },
          { who: 0, en: "Posing... posing... zzz. Wake me up for tomorrow's shift!", hi: "पोज़ पकड़ा... पकड़ा... ख़र्र... कल की शिफ़्ट में जगा देना!", kind: "whisper" }
        ]
      }
    ]
  },
  {
    id: 91,
    age: "6-10",
    category: "home",
    title: { en: "Chef Auggie's Birthday Thali", hi: "शेफ़ ऑगी की बर्थडे थाली" },
    blurb: { en: "Grapes, onion pakoras and a laddoo as big as his head: can Dadi save Chef Auggie's birthday menu?", hi: "अंगूर, प्याज़ के पकौड़े और सिर जितना बड़ा लड्डू! क्या दादी शेफ़ ऑगी की बर्थडे थाली बचा पाएँगी?" },
    moral: { en: "Real friends share only dog-safe treats: never chocolate, grapes, onions or sweets.", hi: "सच्चा दोस्त वही, जो पालतू को सिर्फ़ सुरक्षित चीज़ें खिलाए: चॉकलेट, अंगूर, प्याज़, मिठाई कभी नहीं।" },
    cover: {
      bg: "kitchen",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "point", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "apple", x: 0.5 }, { id: "banana", x: 0.58 } ],
      fx: { en: "YUM!", hi: "वाह!" }
    },
    panels: [
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Sunday in Dadi's kitchen. Tomorrow is Pinku's birthday, and Auggie has a BIG idea.", hi: "रविवार, दादी की रसोई। कल पिंकू का बर्थडे है, और ऑगी के दिमाग़ में एक बड़ा आइडिया है।" },
        say: [
          { who: 0, en: "Dadi, I'm cooking Pinku a birthday Doggy Thali! Chef Auggie, reporting for duty!", hi: "दादी, मैं पिंकू के बर्थडे के लिए डॉगी थाली बनाऊँगा! शेफ़ ऑगी हाज़िर है!" },
          { who: 1, en: "Arre wah, my little chef! So, what's on the menu?", hi: "अरे वाह, मेरा राजा बेटा शेफ़ बनेगा! बताओ, थाली में क्या-क्या है?" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.5 } ],
        say: [
          { who: 0, en: "Grapes! Onion pakoras! Chocolate! And one laddoo as big as my head!", hi: "अंगूर! प्याज़ के पकौड़े! चॉकलेट! और मेरे सिर जितना बड़ा लड्डू!" },
          { who: 1, en: "Hai Ram! Stop right there, Chef! That's not a thali, that's a tummy-ache!", hi: "हाय राम! रुक जा, शेफ़! ये थाली नहीं, पेट-दर्द की पूरी दुकान है!", kind: "shout" }
        ],
        fx: { en: "STOP!", hi: "रुक जा!" },
        action: true
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Dadi sits Auggie down, the same way she once sat down little Papa.", hi: "दादी ने ऑगी को पास बिठाया, बिल्कुल वैसे जैसे कभी छोटे-से गौरव को बिठाती थीं।" },
        say: [
          { who: 1, en: "Grapes, onions, chocolate and sweets can make dogs really sick, beta. Even one little laddoo.", hi: "बेटा, अंगूर, प्याज़, चॉकलेट और मिठाई से कुत्ते बहुत बीमार पड़ सकते हैं। एक छोटा लड्डू भी।" },
          { who: 0, en: "Not even ONE laddoo? My chef's heart just cracked like a papad...", hi: "एक भी लड्डू नहीं? मेरा शेफ़ वाला दिल तो पापड़ की तरह चटक गया..." }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "think", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Cheer up, Chef! Your menu just had too many NO-nions! Get it? No-nions!", hi: "अरे वाह! आज तो प्याज़ ने काटने से पहले ही शेफ़ को रुला दिया! हा-हा!" },
          { who: 2, en: "Gaurav, your jokes are worse than burnt rotis. Look, the chef's laughing anyway!", hi: "गौरव, तेरे चुटकुले जली रोटी से भी बुरे हैं। पर देख, शेफ़ तो फिर भी हँस पड़ा!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5 }, { id: "banana", x: 0.58 } ],
        say: [
          { who: 1, en: "Now the SAFE list: carrots, a little banana, seedless apple and plain boiled pumpkin.", hi: "अब सुनो सही वाली लिस्ट: गाजर, थोड़ा केला, बिना बीज का सेब, और सादा उबला कद्दू।" },
          { who: 0, en: "And the secret carrot in your pallu? Everybody knows it's there, Dadi!", hi: "और आपके पल्लू वाली ख़ुफ़िया गाजर? वो तो सबको पता है, दादी!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.3 }, { id: "dadi", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5 }, { id: "bowl", x: 0.58 } ],
        cap: { en: "Dadi chops, Auggie arranges. Carrot sun, banana moon, apple stars. A masterpiece!", hi: "दादी काटें, ऑगी सजाए। गाजर का सूरज, केले का चाँद, सेब के तारे। वाह, क्या कलाकारी!" },
        say: [ { who: 0, en: "Plating like a pro! Should I lick it, just to check? ...No? Okay, okay!", hi: "एकदम प्रो वाली सजावट! एक बार चाटकर चेक कर लूँ? ...नहीं? अच्छा, अच्छा!" } ],
        fx: { en: "CHOP!", hi: "खट-खट!" },
        action: true
      },
      {
        bg: "kitchen",
        chars: [ { id: "pinku", pose: "stand", mood: "angry", x: 0.22 }, { id: "auggie", pose: "wave", mood: "happy", x: 0.65, flip: true } ],
        props: [ { id: "bowl", x: 0.45 } ],
        say: [
          { who: 0, en: "Snort! A birthday feast! Where's the chocolate cake? No chocolate? I'm NEVER speaking to you again!", hi: "फ़्फ़! बर्थडे की दावत! चॉकलेट केक कहाँ है? चॉकलेट नहीं? जाओ, मैं तुमसे कभी बात नहीं करूँगा!" },
          { who: 1, en: "Chocolate is poison for us, Pinku. I want you around for LOTS of birthdays.", hi: "चॉकलेट हमारे लिए ज़हर है, पिंकू। मुझे तो तेरे साथ ढेर सारे बर्थडे मनाने हैं!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.25 }, { id: "pinku", pose: "sit", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "bowl", x: 0.38 } ],
        cap: { en: "Exactly five seconds later...", hi: "ठीक पाँच सेकंड बाद..." },
        say: [
          { who: 1, en: "Mmm, carrot sun! Fine, I'm speaking to you again. Best birthday EVER!", hi: "म्म्म, गाजर का सूरज! ठीक है, बात करूँगा। सबसे बढ़िया बर्थडे!" },
          { who: 0, en: "Happy birthday, Pinku! And Dadi... is that ANOTHER carrot in your pallu?", hi: "हैप्पी बर्थडे, पिंकू! और दादी... पल्लू में एक और गाजर छिपी है क्या?" }
        ]
      }
    ]
  },
  {
    id: 92,
    age: "6-10",
    category: "science",
    title: { en: "Kabir's Very Loud Show-and-Tell", hi: "कबीर का ज़ोरदार शो-एंड-टेल" },
    blurb: { en: "Shy Kabir can only say 'meep'. Then a tiffin goes missing, and Auggie needs a partner who talks!", hi: "शर्मीले कबीर के मुँह से बस 'चूँ' निकलता है। फिर एक टिफ़िन ग़ायब होता है, और ऑगी को चाहिए एक बोलने वाला साथी!" },
    moral: { en: "Brave doesn't mean never scared. It means speaking up with a friend beside you.", hi: "बहादुर का मतलब ये नहीं कि डर न लगे। मतलब है, दोस्त साथ हो तो डर के बावजूद बोल देना।" },
    cover: {
      bg: "school",
      chars: [ { id: "kabir", pose: "cheer", mood: "happy", x: 0.3 }, { id: "auggie", pose: "point", mood: "determined", x: 0.68 } ],
      props: [ { id: "book", x: 0.12 } ],
      fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "kabir", pose: "stand", mood: "scared", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.47 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Tomorrow is show-and-tell. Shy Kabir wants to bring Auggie... but his voice wants to stay home.", hi: "कल स्कूल में शो-एंड-टेल है। शर्मीला कबीर ऑगी को ले जाना चाहता है... पर उसकी आवाज़ घर पर ही रहना चाहती है।" },
        say: [
          { who: 0, en: "Nanu, what if everyone stares and my words hide in my tummy?", hi: "नानू, अगर सब मुझे घूरेंगे और मेरे शब्द पेट में छिप गए तो?", kind: "whisper" },
          { who: 2, en: "Then I'll give you a fact so amazing, it jumps out all by itself!", hi: "तो तुम्हें ऐसी कमाल की बात बताता हूँ, जो ख़ुद उछलकर मुँह से बाहर आएगी!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "kabir", pose: "cheer", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "point", mood: "laugh", x: 0.47 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "flower", x: 0.62 } ],
        say: [
          { who: 2, en: "Your nose has about six million smell sensors. Auggie's has about three hundred MILLION!", hi: "हमारी नाक में क़रीब साठ लाख सूँघने वाले सेंसर होते हैं। और ऑगी की नाक में? पूरे तीस करोड़!" },
          { who: 0, en: "Three hundred MILLION? Auggie, your nose is basically a superhero!", hi: "तीस करोड़?! ऑगी, तुम्हारी नाक तो पूरी सुपरहीरो है!" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "kabir", pose: "stand", mood: "scared", x: 0.35 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "Next morning. Twenty-eight faces stare at Kabir. He opens his mouth, and out comes...", hi: "अगली सुबह। अट्ठाईस चेहरे कबीर को घूर रहे हैं। उसने मुँह खोला, और निकला..." },
        say: [
          { who: 0, en: "...meep.", hi: "...चूँ।", kind: "whisper" },
          { who: 1, en: "Good start! Now try it in a bigger size. I'm right here, buddy.", hi: "बढ़िया शुरुआत! अब थोड़ा बड़े साइज़ में बोलो। मैं यहीं हूँ, दोस्त।", kind: "whisper" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "anaya", pose: "stand", mood: "sad", x: 0.2 }, { id: "zoya", pose: "run", mood: "surprised", x: 0.47 }, { id: "auggie", pose: "think", mood: "determined", x: 0.78, flip: true } ],
        say: [
          { who: 0, en: "My tiffin is GONE! Mumma's aloo parathas... gone forever!", hi: "मेरा टिफ़िन ग़ायब! मम्मी के आलू वाले पराठे... हमेशा के लिए गए!" },
          { who: 1, en: "I ran round the whole school twice. Fastest search ever. Found nothing!", hi: "मैं पूरे स्कूल के दो चक्कर लगा आई। सबसे तेज़ खोज! पर मिला कुछ नहीं!" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4, flip: true }, { id: "kabir", pose: "run", mood: "determined", x: 0.15 } ],
        cap: { en: "Auggie sniffs Anaya's schoolbag. Aloo, ghee and a pinch of mango pickle. He's got the trail!", hi: "ऑगी ने अनाया का बस्ता सूँघा। आलू, घी और ज़रा-सा आम का अचार। निशान मिल गया!" },
        say: [
          { who: 0, en: "Kabir, you're my partner! Tell everyone what my nose is doing!", hi: "कबीर, तुम मेरे पार्टनर हो! सबको बताओ, मेरी नाक क्या कर रही है!" },
          { who: 1, en: "He's... he's catching tiny smell bits! Ones we can't even see!", hi: "ये... ये महक के नन्हे-नन्हे कण पकड़ रहा है! जो हमें दिखते भी नहीं!" }
        ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bush", x: 0.52 } ],
        cap: { en: "The trail leads behind the slide, under a bush. And there it is!", hi: "निशान सीधा फिसलपट्टी के पीछे, झाड़ी के नीचे ले गया। और ये रहा!" },
        say: [
          { who: 1, en: "My tiffin! Not one paratha missing! Auggie, you're a genius!", hi: "मेरा टिफ़िन! एक भी पराठा कम नहीं! ऑगी, तुम तो जीनियस हो!" },
          { who: 0, en: "Not even one nibble. It was very hard. Very, VERY hard.", hi: "एक कौर भी नहीं खाया। बहुत मुश्किल था। बहुत, बहुत मुश्किल!" }
        ],
        fx: { en: "FOUND IT!", hi: "मिल गया!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "kabir", pose: "point", mood: "determined", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.47 }, { id: "anaya", pose: "cheer", mood: "surprised", x: 0.8, flip: true } ],
        cap: { en: "Back in class, Kabir's words don't hide anymore. They come out running!", hi: "क्लास में लौटकर कबीर के शब्द अब छिपे नहीं। दौड़ते हुए बाहर आए!" },
        say: [
          { who: 0, en: "Auggie has three hundred million smell sensors! We have six million! That's why he found it!", hi: "ऑगी की नाक में तीस करोड़ सेंसर! हमारी में बस साठ लाख! इसीलिए उसने टिफ़िन ढूँढ लिया!", kind: "shout" },
          { who: 2, en: "Whoa, Kabir! You never talk this much! Tell us MORE!", hi: "वाह, कबीर! तुम तो कभी इतना बोलते ही नहीं! और बताओ!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "wave", mood: "laugh", x: 0.47 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.33 } ],
        say: [
          { who: 2, en: "I hear my quiet Kabir gave the loudest talk in class today!", hi: "सुना है आज हमारे चुप्पे कबीर ने क्लास में सबसे ज़ोरदार भाषण दिया!" },
          { who: 0, en: "The fact jumped out, just like you said! Auggie sniffed, and I talked!", hi: "वो बात सच में उछलकर बाहर आ गई, नानू! ऑगी ने सूँघा, और मैंने बोला!" }
        ]
      }
    ]
  },
  {
    id: 93,
    age: "6-10",
    category: "home",
    title: { en: "Auggie's Frisbee Fund", hi: "ऑगी की फ़्रिस्बी वाली गुल्लक" },
    blurb: { en: "A shiny blue frisbee costs two hundred rupees. Auggie has zero. Can a dog save up without giving in?", hi: "चमचमाती नीली फ़्रिस्बी दो सौ रुपये की है, और ऑगी के पास ज़ीरो! क्या ऑगी बिना ललचाए पैसे जोड़ पाएगा?" },
    moral: { en: "Waiting for a big dream is hard, but it makes the dream feel even sweeter.", hi: "बड़े सपने का इंतज़ार मुश्किल है, पर उसके बाद सपना और भी मीठा लगता है।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "moti", pose: "run", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "frisbee", x: 0.5, y: 0.3 } ],
      fx: { en: "CLINK!", hi: "खन्न!" }
    },
    panels: [
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "papa", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.12, y: 0.4 } ],
        say: [
          { who: 0, en: "Papa, LOOK! A shiny blue frisbee! It's calling my name! Can we buy it? Pleeease?", hi: "पापा, देखो! चमचमाती नीली फ़्रिस्बी! ये मुझे बुला रही है! ले लें? प्लीज़-प्लीज़-प्लीज़!" },
          { who: 1, en: "Two hundred rupees, champ. How about you save up and buy it yourself?", hi: "दो सौ रुपये की है, चैंप। ऐसा करो, ख़ुद पैसे जोड़कर लो!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Here, my old clay gullak. Little Gaurav once tried to open it with a spoon!", hi: "ये लो, मेरी पुरानी मिट्टी की गुल्लक। छोटा गौरव तो इसे चम्मच से खोलने बैठ गया था!" },
          { who: 0, en: "Two hundred rupees... how many carrots is that? Never mind, I'll count in coins!", hi: "दो सौ रुपये... मतलब कितनी गाजरें? छोड़ो, मैं सिक्कों में ही गिन लूँगा!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.5 } ],
        cap: { en: "Auggie starts a helping business. Fetching newspapers, carrying sabzi bags, finding lost slippers. Ten rupees a job!", hi: "ऑगी ने मदद की दुकान खोल ली। अख़बार लाना, सब्ज़ी का थैला उठाना, खोई चप्पल ढूँढना। हर काम के दस रुपये!" },
        say: [
          { who: 1, en: "Ten rupees for you! Fun fact: India had coins more than two thousand years ago!", hi: "ये लो दस रुपये! एक मज़ेदार बात: भारत में दो हज़ार साल से भी पहले सिक्के बनते थे!" },
          { who: 0, en: "Nobody asked, Nanu... but WOW!", hi: "किसी ने पूछा तो नहीं था, नानू... पर वाह!" }
        ],
        fx: { en: "CLINK!", hi: "खन्न!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "pinku", pose: "stand", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.7, flip: true } ],
        say: [
          { who: 0, en: "Snort! Saving is BORING. Spend it all on squeaky toys! Today! Now!", hi: "फ़्फ़! बचत-वचत बोरिंग है! सारे पैसे चूँ-चूँ खिलौनों पर उड़ा दो! आज ही! अभी!" },
          { who: 1, en: "Five squeaky toys today... or one dream frisbee later? My tail says BOTH!", hi: "आज पाँच चूँ-चूँ खिलौने... या बाद में सपनों वाली फ़्रिस्बी? मेरी पूँछ कहती है, दोनों!", kind: "think" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "mumma", pose: "sit", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "sit", mood: "determined", x: 0.7, flip: true } ],
        cap: { en: "Auggie buys ONE squeaky toy anyway. It squeaks twice... and pops. Twenty rupees, gone!", hi: "ऑगी ने फिर भी एक चूँ-चूँ खिलौना ले लिया। दो बार चूँ-चूँ... और फट्ट! बीस रुपये, गए!" },
        say: [
          { who: 0, en: "Oh, beta. Shall I add 'patience' to my list? Right after 'buy milk'?", hi: "अरे बेटा। लिस्ट में 'सब्र' भी लिख दूँ? 'दूध लाना' के ठीक बाद?" },
          { who: 1, en: "Write it in BIG letters, Mumma. From today, every coin goes clink, not pop!", hi: "बड़े-बड़े अक्षरों में लिखना, मम्मा। आज से हर सिक्का गुल्लक में खन्न करेगा, फट्ट नहीं!" }
        ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.45 } ],
        cap: { en: "One long month later, Auggie tips out the gullak. Every coin gets counted three times.", hi: "पूरे एक महीने बाद ऑगी ने गुल्लक उलटी। हर सिक्का तीन-तीन बार गिना गया।" },
        say: [ { who: 0, en: "...eighteen, nineteen, TWENTY! Two hundred rupees! I'm RICH! Well... frisbee-rich!", hi: "...अठारह, उन्नीस, बीस! पूरे दो सौ! मैं अमीर हो गया! मतलब, फ़्रिस्बी जितना अमीर!", kind: "shout" } ],
        fx: { en: "JACKPOT!", hi: "जैकपॉट!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.4 } ],
        say: [
          { who: 1, en: "You earned every single rupee, champ! Frisbees are like my jokes: they always come back!", hi: "हर रुपया तुमने ख़ुद कमाया, चैंप! ये फ़्रिस्बी मेरे चुटकुलों जैसी है: लौटकर ज़रूर आती है!" },
          { who: 0, en: "Ha-ha! Terrible, Papa! But this frisbee feels extra special, because I waited for it.", hi: "हा-हा! बहुत बेकार, पापा! पर ये फ़्रिस्बी और भी ख़ास लग रही है, क्योंकि मैंने इसका इंतज़ार किया।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.28 }, { id: "moti", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.25 } ],
        say: [
          { who: 1, en: "Ooh, new frisbee! Race you to the big tree? I know a shortcut!", hi: "वाह, नई फ़्रिस्बी! बड़े पेड़ तक रेस? मुझे एक शॉर्टकट पता है!" },
          { who: 0, en: "Your shortcuts are always longer, Moti! Let's just share the frisbee instead. Catch!", hi: "तेरे शॉर्टकट हमेशा लंबे निकलते हैं, मोती! चल, फ़्रिस्बी मिलकर खेलते हैं। पकड़!" }
        ]
      }
    ]
  },
  {
    id: 94,
    age: "6-10",
    category: "family",
    title: { en: "Selfie School at the Lake", hi: "झील किनारे सेल्फ़ी स्कूल" },
    blurb: { en: "Ninety-nine selfies, ninety-nine dark blobs. What is the sunset doing to Mausi's photos?", hi: "निन्यानवे सेल्फ़ी, निन्यानवे काले धब्बे! आख़िर ढलता सूरज मौसी की फ़ोटो के साथ क्या कर रहा है?" },
    moral: { en: "Let light fall on the faces, and sometimes put the phone down to enjoy the view.", hi: "रोशनी चेहरे पर पड़ने दो, और कभी-कभी फ़ोन रखकर नज़ारे का मज़ा भी लो।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.7, flip: true } ],
      props: [ { id: "camera", x: 0.55, y: 0.45 }, { id: "sun", x: 0.15, y: 0.15 } ],
      fx: { en: "CLICK!", hi: "क्लिक!" }
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.55, y: 0.5 } ],
        cap: { en: "Sunset at Chamakpur lake. Mausi has taken ninety-nine selfies. She wants ONE perfect one.", hi: "चमकपुर झील पर ढलती शाम। मौसी निन्यानवे सेल्फ़ी ले चुकी हैं। उन्हें बस एक परफ़ेक्ट चाहिए।" },
        say: [
          { who: 1, en: "Welcome to Selfie School, Auggie! Lesson one: chin up, big smile, hold that pose!", hi: "सेल्फ़ी स्कूल में स्वागत है, ऑगी! पहला सबक: ठुड्डी ऊपर, बड़ी मुस्कान, पोज़ पकड़ो!" },
          { who: 0, en: "Chin up... big smile... and a friendly hello for the camera!", hi: "ठुड्डी ऊपर... बड़ी मुस्कान... और कैमरे को एक प्यारी-सी पप्पी!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.35 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.53, y: 0.5 } ],
        say: [
          { who: 1, en: "Eww, Auggie! Now every photo is ninety-nine percent tongue!", hi: "छी-छी-छी, ऑगी! अब हर फ़ोटो में बस तुम्हारी जीभ दिखेगी!", kind: "shout" },
          { who: 0, en: "That's a dog's hello! Very polite. Very slurpy.", hi: "कुत्तों का नमस्ते ऐसे ही होता है! बड़ा प्यारा, बड़ा गीला।" }
        ],
        fx: { en: "SLURP!", hi: "चप-चप!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.15 }, { id: "camera", x: 0.55, y: 0.55 } ],
        cap: { en: "Lens wiped. Click! Click! Click! But every single photo looks the same...", hi: "लेंस साफ़। क्लिक! क्लिक! क्लिक! पर हर फ़ोटो एक जैसी..." },
        say: [
          { who: 1, en: "Why are we two dark blobs? I did my hair for THIS?", hi: "हम दो काले धब्बे क्यों लग रहे हैं? मैंने इसके लिए बाल सँवारे थे?" },
          { who: 0, en: "Maybe I can bark the lights back on. WOOF! ...Nope. Still blobs.", hi: "शायद भौंककर बत्ती वापस जला दूँ। भौं! ...नहीं। अब भी धब्बे।" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "mausi", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.47 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.08, y: 0.12 } ],
        cap: { en: "Nanu strolls by on his evening walk, peeks at the phone, and smiles his fact-smile.", hi: "शाम की सैर पर निकले नानू ने फ़ोन में झाँका, और उनकी 'विज्ञान वाली' मुस्कान आ गई।" },
        say: [
          { who: 2, en: "Beta, the Sun is behind you. Light hits your backs, so your faces sit in shadow.", hi: "शांभवी बेटा, सूरज तुम्हारे पीछे है। रोशनी पीठ पर पड़ रही है, इसलिए चेहरे अँधेरे में हैं।" },
          { who: 0, en: "Nanu, did anyone ask for a science fact? ...Okay, fine. Keep going.", hi: "नानू, किसी ने साइंस पूछा था क्या? ...अच्छा, ठीक है, आगे बताइए।" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.5 } ],
        say: [
          { who: 1, en: "Cameras catch light bouncing off things. No light on a face? No face in the photo!", hi: "कैमरे की आँख रोशनी से देखती है, बेटा। चेहरे पर उजाला नहीं, तो फ़ोटो में चेहरा ग़ायब!" },
          { who: 0, en: "So light is the camera's food! And our faces were on a diet!", hi: "मतलब रोशनी कैमरे का खाना है! और हमारे चेहरे डाइटिंग पर थे!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.68, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 }, { id: "sun", x: 0.12, y: 0.12 } ],
        cap: { en: "They turn around. Now the golden evening light falls right on their faces.", hi: "दोनों ने मुँह घुमाया। अब ढलते सूरज का सुनहरा उजाला उनके चेहरों पर है।" },
        say: [
          { who: 1, en: "Eyes on the camera, never straight at the Sun! Everybody say... CARROT!", hi: "नज़र कैमरे पर, सूरज पर बिल्कुल नहीं! सब बोलो... गाजर!" },
          { who: 0, en: "CARROT! Wait, is there an actual carrot? No? Still... CARROT!", hi: "गाजर! रुको, सच में गाजर है? नहीं? फिर भी... गाजर!", kind: "shout" }
        ],
        fx: { en: "CLICK!", hi: "क्लिक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "mumma", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.47 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.65, y: 0.5 } ],
        say: [
          { who: 0, en: "Chottu, this photo! Send it NOW! It's my new wallpaper! Ha-ha-ha!", hi: "छोटू, क्या फ़ोटो है! अभी भेज! मेरा नया वॉलपेपर यही है! हा-हा-हा!" },
          { who: 2, en: "Didi, a hundred selfies, and the best one needed Nanu's 'boring' fact. Not so boring!", hi: "दीदी, सौ सेल्फ़ी के बाद पता चला, नानू की 'बोरिंग' बातें इतनी बोरिंग भी नहीं!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.25 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.55, flip: true }, { id: "mausi", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.4, y: 0.5 } ],
        cap: { en: "Photographer Auggie takes over. Rule one of his new school: first, check where the Sun is!", hi: "अब कैमरा ऑगी के पंजे में! उसके नए स्कूल का पहला नियम: पहले देखो सूरज कहाँ है!" },
        say: [
          { who: 0, en: "Sun behind me, light on you! Nanu, Mausi... hold that pose!", hi: "सूरज मेरे पीछे, रोशनी आप पर! नानू, मौसी... पोज़ पकड़ो!" },
          { who: 2, en: "Click one... then phones away. Let's just watch the lake turn gold together.", hi: "एक क्लिक... फिर फ़ोन अंदर। चलो, बस मिलकर झील को सुनहरी होते देखें।" }
        ]
      }
    ]
  },
  {
    id: 95,
    age: "6-10",
    category: "science",
    title: { en: "Auggie's Secret Air-Conditioner", hi: "ऑगी की जीभ वाला एसी" },
    blurb: { en: "Tongue out, huffing like a train: is Auggie sick, or does he have a secret air-conditioner?", hi: "जीभ बाहर, रेलगाड़ी जैसी हाँफ़! ऑगी बीमार है, या उसके पास कोई छिपा हुआ एसी है?" },
    moral: { en: "On hot days, give pets shade, fresh water, and walks only when the road is cool.", hi: "गर्मी में पालतू को छाँव और ताज़ा पानी दो, और सैर तभी करो जब सड़क ठंडी हो।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "sit", mood: "happy", x: 0.7, flip: true } ],
      props: [ { id: "sun", x: 0.85, y: 0.12 }, { id: "bowl", x: 0.5 } ],
      fx: { en: "PANT!", hi: "हाँफ़-हाँफ़!" }
    },
    panels: [
      {
        bg: "city",
        chars: [ { id: "snowy", pose: "stand", mood: "sad", x: 0.25 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.7, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 } ],
        cap: { en: "May in Chamakpur. So hot, even the lizards are hiding in the shade. Snowy the husky has come visiting!", hi: "चमकपुर में मई। धूप ऐसी कि छिपकलियाँ भी छाँव में छिपी बैठी हैं। और पहाड़ों से स्नोवी हस्की मिलने आया है!" },
        say: [
          { who: 0, en: "Aaoooo! Is this a city or a furnace? I'm melting like a kulfi!", hi: "आऊँऊँ! ये शहर है या भट्टी? मैं तो कुल्फ़ी की तरह पिघल रहा हूँ!" },
          { who: 1, en: "Welcome, Snowy! Quick, inside! We've got a fan AND a cold floor!", hi: "आओ, स्नोवी! जल्दी अंदर चलो! पंखा भी है, और ठंडा फ़र्श भी!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "mumma", pose: "stand", mood: "scared", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.47 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Mittsy! Auggie's tongue is hanging out and he's huffing like a train! Is he sick?", hi: "मिट्सी! ऑगी की जीभ बाहर लटकी है, और ये रेलगाड़ी की तरह हाँफ़ रहा है! बीमार तो नहीं?" },
          { who: 2, en: "Relax, Mottu. He's not sick... he's just a HOT dog today! Ha! Get it?", hi: "आराम से, मोटू। बीमार नहीं है... बस आज ज़रा 'हॉट' डॉग बना हुआ है! हा-हा!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Fact time! We sweat all over. Dogs sweat just a tiny bit, from their paw pads.", hi: "विज्ञान की बात! हमें पूरे बदन पर पसीना आता है। कुत्तों को बस पंजों की गद्दियों से, ज़रा-सा।" },
          { who: 0, en: "Sweaty paws? So THAT'S why I leave wet footprints on hot days!", hi: "पसीने वाले पंजे? अच्छा, तभी गर्मी में मेरे पैरों के गीले निशान बनते हैं!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.22 }, { id: "snowy", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        say: [
          { who: 2, en: "Panting is a dog's fan! As the wet tongue dries, the heat flies away with it.", hi: "हाँफ़ना ही इनका पंखा है! जीभ की नमी सूखती है, तो गर्मी भी साथ उड़ जाती है।" },
          { who: 1, en: "My tongue is an air-conditioner? Aaoooo! Switch it to FULL power!", hi: "मेरी जीभ ही मेरा एसी है? आऊँऊँ! इसे फ़ुल स्पीड पर चला दो!" }
        ],
        fx: { en: "PANT!", hi: "हाँफ़-हाँफ़!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "rohan", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "nanu", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 } ],
        cap: { en: "Rohan swings in with his bat. Cricket, right NOW, in the blazing afternoon!", hi: "रोहन बल्ला घुमाता हुआ आया: 'चलो, मैच! अभी के अभी!' और बाहर आग बरस रही है।" },
        say: [
          { who: 2, en: "Wait! Hand on the road, seven seconds. Too hot for your hand? Too hot for paws!", hi: "रुको! सड़क पर सात सेकंड उल्टा हाथ रखकर देखो। हाथ न टिके, तो पंजे भी जलेंगे!" },
          { who: 0, en: "Ow-ow-ow! Two seconds and I'm cooked! Okay, okay... evening cricket.", hi: "आह-आह! दो सेकंड में ही सिक गया! ठीक है, ठीक है... क्रिकेट शाम को।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.5 }, { id: "bowl", x: 0.12 }, { id: "puddle", x: 0.52 } ],
        cap: { en: "Dadi and Mumma make a cool corner: shade, fresh water, a wet towel and a tub to splash in!", hi: "दादी और मम्मा ने बनाया ठंडा कोना: पेड़ की छाँव, ताज़ा पानी, गीला तौलिया और छपाक वाला टब!" },
        say: [
          { who: 1, en: "Aaoooo! Ahh... now it feels like home in the mountains!", hi: "आऊँऊँ! आहा... अब लगा अपने पहाड़ों जैसा!" },
          { who: 0, en: "Shade, water, splash... and a carrot. Every problem, solved!", hi: "छाँव, पानी, छपाक... और एक गाजर। हर मुश्किल हल!" }
        ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "run", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.5 }, { id: "snowy", pose: "run", mood: "happy", x: 0.8 } ],
        props: [ { id: "ball", x: 0.35, y: 0.4 } ],
        cap: { en: "Sunset. The road has cooled. Rohan tests it again: seven seconds, easy!", hi: "सूरज ढला, सड़क ठंडी हुई। रोहन ने फिर हाथ रखकर देखा: सात सेकंड, आराम से!" },
        say: [
          { who: 2, en: "Aaoooo! NOW we can play! Rohan, bowl me your fastest!", hi: "आऊँऊँ! अब खेलने में मज़ा आएगा! रोहन, डाल अपनी सबसे तेज़ बॉल!" },
          { who: 0, en: "Waiting was worth it! Evening cricket is the best cricket!", hi: "इंतज़ार करना सही था! शाम वाला क्रिकेट ही असली क्रिकेट है!" }
        ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.5 } ],
        say: [
          { who: 0, en: "My hot-day rules: shade, fresh water, evening walks... and the seven-second paw test!", hi: "मेरे गर्मी वाले नियम: छाँव, ताज़ा पानी, शाम की सैर... और सात सेकंड वाला पंजा-टेस्ट!" },
          { who: 1, en: "Full marks! One more: never leave a dog in a parked car. Ever!", hi: "पूरे नंबर! एक और नियम: खड़ी गाड़ी में कुत्ते को कभी अकेला मत छोड़ना। कभी नहीं!" }
        ]
      }
    ]
  },
  {
    id: 96,
    age: "6-10",
    category: "science",
    title: { en: "The Squeak Only Dogs Could Hear", hi: "वो चीं-चीं जो सिर्फ़ कुत्तों ने सुनी" },
    blurb: { en: "At midnight every dog in Chamakpur is howling, and Papa hears nothing at all. Who's telling the truth?", hi: "आधी रात को चमकपुर का हर कुत्ता 'आऊँऊँ' कर रहा है, और पापा को कुछ सुनाई ही नहीं दे रहा! सच कौन बोल रहा है?" },
    moral: { en: "Just because you can't hear something doesn't mean it isn't there. Trust your friends!", hi: "अगर तुम्हें कुछ सुनाई न दे, तो ज़रूरी नहीं कि वो है ही नहीं। दोस्तों पर भरोसा करो!" },
    cover: {
      bg: "citynight",
      chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.35 }, { id: "gadbad", pose: "blast", mood: "surprised", x: 0.72, flip: true } ],
      props: [ { id: "machine", x: 0.55 }, { id: "star", x: 0.15, y: 0.15 } ],
      fx: { en: "AWOOO!", hi: "आऊँऊँ!" }
    },
    panels: [
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "blast", mood: "angry", x: 0.3 }, { id: "moti", pose: "blast", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Midnight in Chamakpur. Suddenly, every dog in every lane starts howling at once!", hi: "चमकपुर की आधी रात। अचानक हर गली का हर कुत्ता एक साथ 'आऊँऊँ' करने लगा!" },
        say: [
          { who: 0, en: "Ow, ow, my EARS! Who's scratching a giant blackboard in the sky?", hi: "उई माँ, मेरे कान! आसमान में कौन इतना बड़ा ब्लैकबोर्ड खुरच रहा है?" },
          { who: 1, en: "It's coming from your side of the lane! I'd take my shortcut, but... it's longer.", hi: "आवाज़ तेरी तरफ़ से आ रही है! मैं शॉर्टकट से आता, पर वो... लंबा है।" }
        ],
        fx: { en: "AWOOO!", hi: "आऊँऊँ!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "papa", pose: "sit", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "think", mood: "scared", x: 0.5 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Auggie, it's midnight! There's no squeak. Only you. Please... go to sleep...", hi: "ऑगी, आधी रात है! कोई चीं-चीं नहीं है। बस तुम हो। सो जाओ, भाई..." },
          { who: 2, en: "Mittsy, look at him. His ears keep twitching. Something's really bothering him.", hi: "मिट्सी, ज़रा देखो इसे। कान फड़फड़ा रहे हैं। इसे सच में कुछ परेशान कर रहा है।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Nanu is staying over. Midnight or not, a science fact needs glasses!", hi: "आज नानू यहीं रुके हैं। आधी रात हो तो क्या, विज्ञान की बात के लिए चश्मा तो लगेगा ही!" },
        say: [
          { who: 1, en: "Sound is air shaking. Super-fast shakes make super-high sounds. Too high for human ears!", hi: "आवाज़ मतलब हवा की थरथराहट। बहुत तेज़ थरथराहट से ऐसी पतली आवाज़ बनती है, जो हमें सुनाई ही नहीं देती!" },
          { who: 0, en: "But dog ears catch it? So I'm not being dramatic... I'm being SCIENTIFIC!", hi: "पर कुत्तों के कान पकड़ लेते हैं? मतलब मैं नाटक नहीं कर रहा... मैं तो वैज्ञानिक हूँ!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35, flip: true }, { id: "papa", pose: "run", mood: "determined", x: 0.1 } ],
        props: [ { id: "house", x: 0.8 } ],
        cap: { en: "Auggie swivels his ears like two radar dishes. Papa follows, still in his pyjamas.", hi: "ऑगी ने दोनों कान रडार की तरह घुमाए। पीछे-पीछे पायजामे में पापा।" },
        say: [
          { who: 0, en: "Papa, my ears say... next door! It's coming from the Professor's house!", hi: "पापा, मेरे कान कहते हैं... पड़ोस से! प्रोफ़ेसर के घर से आ रही है!" },
          { who: 1, en: "I still hear nothing... but I trust your ears, Auggie. Lead the way!", hi: "मुझे अब भी कुछ सुनाई नहीं दे रहा... पर तुम्हारे कानों पर भरोसा है। चलो!" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "angry", x: 0.25 }, { id: "gadbad", pose: "blast", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 1, en: "Welcome! Meet my Silent Mosquito Chaser! So quiet, NOBODY can hear it!", hi: "आइए, आइए! मिलिए मेरे 'चुप्पा मच्छर-भगाऊ' से! इतना चुप कि कोई सुन ही नहीं सकता!" },
          { who: 0, en: "NOBODY? Professor, every dog in Chamakpur can hear it! And the mosquitoes are dancing on it!", hi: "कोई नहीं? प्रोफ़ेसर, चमकपुर का हर कुत्ता सुन रहा है! और मच्छर तो इस पर नाच रहे हैं!", kind: "shout" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.25 }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 1, en: "Oh no! It does the exact OPPOSITE! Sorry, dear dogs. And sorry, dear machine!", hi: "अरे नहीं! ये तो उल्टा ही काम कर रहा है! माफ़ करना, प्यारे कुत्तों। और सॉरी, प्यारी मशीन!" },
          { who: 0, en: "Switched off! Aaah... silence. My ears are already snoring.", hi: "बंद हो गई! आहा... सन्नाटा। मेरे कान तो अभी से खर्राटे ले रहे हैं।" }
        ],
        fx: { en: "PHEW!", hi: "आहा!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.45 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Next day, Gadbad turns his gadget into a dog whistle: too high for people, perfect for Auggie.", hi: "अगले दिन गड़बड़ ने उस गैजेट को डॉग-सीटी बना दिया। इंसानों को सुनाई न दे, ऑगी को एकदम साफ़।" },
        say: [
          { who: 1, en: "Jiju, you blew it? I heard NOTHING! Yet Auggie's zooming back from the lake!", hi: "जीजू, आपने सीटी बजाई? मुझे तो कुछ सुनाई नहीं दिया! और ऑगी झील से दौड़ा चला आ रहा है!" },
          { who: 2, en: "Coming, Papa! Loud and clear! Do fast ears get a carrot?", hi: "आया, पापा! एकदम साफ़ सुना! तेज़ कानों के लिए गाजर मिलेगी?" }
        ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Your ears catch over forty thousand shakes a second, Auggie. Ours give up at twenty thousand!", hi: "तुम्हारे कान चालीस हज़ार से ज़्यादा थरथराहट हर सेकंड पकड़ते हैं। हमारे बीस हज़ार पर ही थक जाते हैं!" },
          { who: 0, en: "So THAT'S how I hear a carrot being peeled from three rooms away!", hi: "तभी तो मैं तीन कमरे दूर से भी गाजर छिलने की आवाज़ सुन लेता हूँ!" }
        ]
      }
    ]
  },
  {
    id: 97,
    age: "6-10",
    category: "science",
    title: { en: "The Ball That Played Hide-and-Seek", hi: "छुपन-छुपाई खेलने वाली गेंद" },
    blurb: { en: "Chamakpur's best fielder fetches a coconut shell, a slipper and a frog, but never the ball. Why?", hi: "चमकपुर का सबसे तेज़ फ़ील्डर नारियल का खोल, चप्पल और मेंढक तक ले आया, पर गेंद नहीं! आख़िर क्यों?" },
    moral: { en: "Friends see the world differently. Before getting cross, try seeing it their way.", hi: "हर दोस्त दुनिया अलग तरह से देखता है। ग़ुस्सा करने से पहले उसकी नज़र से देखो।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "rohan", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "blueball", x: 0.52, y: 0.3 } ],
      fx: { en: "CATCH!", hi: "पकड़ा!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "blast", mood: "determined", x: 0.25 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.3 } ],
        cap: { en: "Sunday cricket in the park! Rohan's team has a secret weapon: the fastest fielder on four legs.", hi: "पार्क में संडे क्रिकेट! रोहन की टीम का ख़ुफ़िया हथियार: चार पैरों वाला सबसे तेज़ फ़ील्डर।" },
        say: [
          { who: 0, en: "Ready, Auggie? This one's going all the way to the Moon!", hi: "तैयार, ऑगी? ये गेंद सीधी चाँद तक जाएगी!" },
          { who: 1, en: "Ready! Ears up, tail up, nose... also up!", hi: "तैयार! कान ऊपर, पूँछ ऊपर, नाक... वो भी ऊपर!" }
        ],
        fx: { en: "THWACK!", hi: "ठाक!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "rohan", pose: "point", mood: "angry", x: 0.72, flip: true } ],
        props: [ { id: "bush", x: 0.12 }, { id: "ball", x: 0.5, y: 0.9 } ],
        say: [
          { who: 0, en: "Where did it go? Grass... more grass... a LOT of grass!", hi: "कहाँ गई? घास... और घास... ढेर सारी घास!" },
          { who: 1, en: "It's RIGHT there, by your paw! Big and red! Are you even trying, Auggie?", hi: "वो रही, तुम्हारे पंजे के पास! इतनी लाल! ऑगी, तुम ध्यान भी दे रहे हो?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "zoya", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "think", mood: "sad", x: 0.55, flip: true } ],
        props: [ { id: "ball", x: 0.78, y: 0.9 } ],
        cap: { en: "Auggie proudly fetches... a coconut shell. Then Rohan's slipper. Then one very confused frog.", hi: "ऑगी शान से लाया... एक नारियल का खोल। फिर रोहन की चप्पल। फिर एक बेचारा हैरान मेंढक।" },
        say: [
          { who: 0, en: "Auggie, a FROG? Rohan's getting really cross. We're losing the match!", hi: "ऑगी, मेंढक?! रोहन को ग़ुस्सा आ रहा है। हम मैच हार रहे हैं!" },
          { who: 1, en: "Bright? What bright? The ball and the grass look the same muddy colour to me...", hi: "चमक? कौन-सी चमक? मुझे तो घास और गेंद, दोनों एक जैसे मटमैले दिखते हैं...", kind: "think" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Nanu has been watching from the bench, with a fact ready, as always.", hi: "बेंच पर बैठे नानू सब देख रहे थे, और हमेशा की तरह विज्ञान की एक बात तैयार थी।" },
        say: [
          { who: 1, en: "Here's why! Human eyes use three kinds of colour-catchers. Dog eyes use just two.", hi: "वजह सुनो! हमारी आँखों में रंग पकड़ने वाली तीन तरह की कोशिकाएँ होती हैं। कुत्तों में बस दो।" },
          { who: 0, en: "Only two? So I've been watching the world on a cheaper TV?", hi: "बस दो? मतलब मैं दुनिया को सस्ते वाले टीवी पर देख रहा था?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "stand", mood: "sad", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "flower", x: 0.65 } ],
        say: [
          { who: 2, en: "Dogs see blues and yellows well. But red and green look dull and brownish to them.", hi: "कुत्तों को नीला और पीला ख़ूब दिखता है। पर लाल और हरा उन्हें फीके, मटमैले-से लगते हैं।" },
          { who: 0, en: "Red ball, green grass... it's hide-and-seek for him! And I got cross. Sorry, Auggie.", hi: "लाल गेंद, हरी घास... इसके लिए तो छुपन-छुपाई है! और मैं ग़ुस्सा हो गया। सॉरी, ऑगी।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ],
        props: [ { id: "ball", x: 0.75, y: 0.9 }, { id: "bush", x: 0.9 } ],
        cap: { en: "Next ball! Auggie closes his eyes... and switches on his nose.", hi: "अगली गेंद! ऑगी ने आँखें मूँदीं... और नाक चालू की।" },
        say: [ { who: 0, en: "No problem! When my eyes lose the ball, my nose finds it. Leather and sweaty hands!", hi: "कोई बात नहीं! आँखें हारें, तो नाक जीते! चमड़े और पसीने वाले हाथों की महक... मिल गई!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "anaya", pose: "wave", mood: "happy", x: 0.25 }, { id: "auggie", pose: "cheer", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "blueball", x: 0.45, y: 0.5 }, { id: "frisbee", x: 0.12, y: 0.3 } ],
        say: [
          { who: 0, en: "I asked the animal doctor! Dogs see blue best. So I brought my blue tennis ball!", hi: "मैंने जानवरों वाले डॉक्टर से पूछा! कुत्तों को नीला सबसे अच्छा दिखता है। इसलिए लाई हूँ नीली टेनिस बॉल!" },
          { who: 1, en: "WOW! It glows like a full moon! Rohan, bowl it to me!", hi: "वाह! ये तो पूरे चाँद जैसी चमक रही है! रोहन, डालो बॉल!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.6, flip: true } ],
        props: [ { id: "blueball", x: 0.62, y: 0.2 } ],
        say: [
          { who: 0, en: "OUT! One jump, one catch! Auggie, you're back in the team... as captain!", hi: "आउट! एक छलाँग, एक कैच! ऑगी, तुम टीम में वापस... और वो भी कप्तान बनकर!", kind: "shout" },
          { who: 1, en: "Captain Auggie's rules: the ball must be blue, and there's a carrot break every over!", hi: "कप्तान ऑगी के नियम: गेंद नीली होगी, और हर ओवर के बाद गाजर ब्रेक!" }
        ],
        fx: { en: "CATCH!", hi: "कैच!" },
        action: true
      }
    ]
  },
  {
    id: 98,
    age: "6-10",
    category: "nature",
    title: { en: "Will Auggie Sink or Float?", hi: "ऑगी डूबेगा या तैरेगा?" },
    blurb: { en: "Kabir's ball is floating away, and Pinku says big, heavy Auggie will sink like a stone. Will he?", hi: "कबीर की गेंद बहती जा रही है, और पिंकू कहता है भारी-भरकम ऑगी पत्थर की तरह डूबेगा। क्या सच में?" },
    moral: { en: "Water helps us float, but always swim in a life jacket with grown-ups watching.", hi: "पानी हमें ऊपर थामता है, पर तैरो तो हमेशा लाइफ़ जैकेट पहनकर और बड़ों की नज़र में।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.4 }, { id: "kabir", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
      props: [ { id: "ball", x: 0.15, y: 0.75 }, { id: "boat", x: 0.6, y: 0.7 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "mumma", pose: "point", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Picnic at Chamakpur lake! Papa, Mumma, Nanu, Kabir, Pinku... and one very wiggly Labrador.", hi: "झील पर पिकनिक! साथ में पापा, मम्मा, नानू, कबीर, पिंकू... और पानी देखकर पागल होता एक लैब्राडोर।" },
        say: [
          { who: 0, en: "My list: mats, sandwiches, sun hats... and Auggie's orange life jacket. Tick!", hi: "मेरी लिस्ट: दरी, सैंडविच, टोपियाँ... और ऑगी की नारंगी लाइफ़ जैकेट। टिक!" },
          { who: 2, en: "Why is the lake so friendly, Baby? Because it always WAVES! Ha!", hi: "ऑगी, ये झील मेरी है या तेरी? ना मेरी, ना तेरी... 'तैरी'! हा-हा!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "kabir", pose: "point", mood: "scared", x: 0.25 }, { id: "papa", pose: "stand", mood: "determined", x: 0.7, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.8 } ],
        say: [
          { who: 0, en: "My ball! It rolled into the water and it's floating away!", hi: "मेरी गेंद! लुढ़ककर पानी में चली गई, और बहती जा रही है!", kind: "shout" },
          { who: 1, en: "Stay on the shore, Kabir! I'll get it with this stick... almost... ALMOST... nope.", hi: "कबीर, किनारे पर ही रहना! मैं इस डंडी से निकालता हूँ... बस... बस... नहीं हुआ।" }
        ],
        fx: { en: "PLOP!", hi: "छप्प!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "think", mood: "scared", x: 0.7, flip: true } ],
        say: [
          { who: 0, en: "Snort! YOU, swim? Thirty kilos of Labrador? You'll go straight to the bottom. Plop!", hi: "फ़्फ़! तू और तैरेगा? इतना भारी-भरकम? सीधा तले में जाकर बैठेगा, टप्प!" },
          { who: 1, en: "Will I? I AM very heavy... mostly carrots and parathas. Gulp.", hi: "सच में? भारी तो हूँ... ज़्यादातर गाजरों और पराठों से। गुटुक!", kind: "think" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "kabir", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        say: [
          { who: 2, en: "Nobody asked, but here's a fact! Water pushes UP on everything in it. Even big dogs!", hi: "किसी ने पूछा नहीं, पर सुनो! पानी अपने अंदर की हर चीज़ को ऊपर धकेलता है। बड़े कुत्तों को भी!" },
          { who: 0, en: "Water pushes? Like when my bath duck keeps popping up?", hi: "पानी धक्का देता है? जैसे मेरी नहाने वाली बत्तख़ बार-बार ऊपर आ जाती है?" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "wave", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Plus, you've got two air balloons inside: your lungs! And skin between your toes, like paddles!", hi: "और तुम्हारे अंदर दो हवा के गुब्बारे हैं: तुम्हारे फेफड़े! और पंजों की उँगलियों के बीच झिल्ली, चप्पू जैसी!" },
          { who: 0, en: "Skin between my toes? Wait... I'm part DUCK? Quack! I mean... woof!", hi: "पंजों में झिल्ली? रुको... मैं थोड़ा-सा बत्तख़ हूँ? क्वैक! मतलब... भौं!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.45 } ],
        props: [ { id: "ball", x: 0.8, y: 0.75 } ],
        cap: { en: "Life jacket on, grown-ups watching, Auggie wades in. Paws paddle, and his thick tail steers like a rudder!", hi: "लाइफ़ जैकेट पहनी, बड़े देख रहे हैं, और ऑगी पानी में! पंजे चप्पू चलाते हैं, मोटी पूँछ पतवार बनती है!" },
        say: [ { who: 0, en: "I'm floating! I'm FLOATING! Hold on, ball, Lifeguard Auggie is coming!", hi: "मैं तैर रहा हूँ! सच में तैर रहा हूँ! रुक जा गेंद, लाइफ़गार्ड ऑगी आ रहा है!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "surprised", x: 0.25 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.5, y: 0.85 } ],
        say: [
          { who: 0, en: "He FLOATS? Then why did my pebble sink? And... I was worried, okay? Don't tell!", hi: "वो तैर गया? तो मेरा कंकड़ क्यों डूबा? और... मुझे उसकी फ़िक्र हुई थी, ठीक है? किसी को मत बताना!" },
          { who: 1, en: "Pebbles are heavier than the same-sized bit of water, so the push can't hold them.", hi: "कंकड़ अपने ही बराबर पानी से भारी होता है, इसलिए पानी का धक्का उसे थाम नहीं पाता।" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "stand", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "ball", x: 0.35, y: 0.6 } ],
        cap: { en: "Auggie brings back the ball... then does the biggest, wettest shake in Chamakpur history!", hi: "ऑगी गेंद लेकर लौटा... और फिर चमकपुर के इतिहास का सबसे बड़ा, सबसे गीला झटका!" },
        say: [
          { who: 0, en: "My ball! Thank you, Lifeguard Auggie! You're the bravest floater ever!", hi: "मेरी गेंद! थैंक यू, लाइफ़गार्ड ऑगी! तुम सबसे बहादुर तैराक हो!" },
          { who: 2, en: "Ha-ha-ha! Auggie, I said bring the BALL, not the whole lake!", hi: "हा-हा-हा! ऑगी, गेंद लाने को कहा था, पूरी झील नहीं!" }
        ],
        fx: { en: "SHAKE!", hi: "झर्र-झर्र!" },
        action: true
      }
    ]
  },
  {
    id: 99,
    age: "6-10",
    category: "nature",
    title: { en: "Detective Auggie and the Water Thief", hi: "जासूस ऑगी और पानी-चोर" },
    blurb: { en: "Every day the garden pond shrinks. No footprints, no smell, no thief in sight. Who's stealing the water?", hi: "बगीचे का तालाब रोज़ सिकुड़ रहा है। न पैरों के निशान, न कोई महक, न कोई चोर! आख़िर पानी कौन चुरा रहा है?" },
    moral: { en: "The same water keeps coming back to us, so keep it clean and never waste it.", hi: "वही पानी घूम-फिरकर हमारे पास लौटता है, इसलिए उसे साफ़ रखो और बर्बाद मत करो।" },
    cover: {
      bg: "sky",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "garaj", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "sun", x: 0.12, y: 0.15 }, { id: "rainbow", x: 0.55, y: 0.25 } ],
      fx: { en: "RUMBLE!", hi: "गड़गड़!" }
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.52 }, { id: "sun", x: 0.85, y: 0.12 } ],
        say: [
          { who: 0, en: "Dadi! Our pond gets smaller every day. There's a water THIEF in Chamakpur!", hi: "दादी! हमारा तालाब रोज़ छोटा होता जा रहा है। चमकपुर में पानी-चोर घूम रहा है!" },
          { who: 1, en: "Ha! In my village, we said the Sun drinks the pond with a straw!", hi: "हा-हा! हमारे गाँव में कहते थे, सूरज दादा स्ट्रॉ लगाकर तालाब पी जाते हैं!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.52 }, { id: "sun", x: 0.15, y: 0.12 } ],
        say: [
          { who: 1, en: "Dadi's right! Sunshine warms the water, and it rises as vapour, too tiny to see.", hi: "दादी ठीक हैं! धूप से पानी भाप बनकर ऊपर उड़ जाता है। ऐसी भाप, जो दिखती भी नहीं!" },
          { who: 0, en: "An invisible thief who can FLY? Detective Auggie is on the case!", hi: "उड़ने वाला, न दिखने वाला चोर? जासूस ऑगी अब इस केस पर है!" }
        ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "garaj", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        cap: { en: "Auggie guards the pond all night. Morning: less water, one snoring detective... and a grumpy cloud!", hi: "ऑगी ने पूरी रात तालाब की पहरेदारी की। सुबह: पानी और कम, जासूस खर्राटे लेता हुआ... और ऊपर एक चिड़चिड़ा बादल!" },
        say: [
          { who: 1, en: "Hmph! THIEF? I'm no thief, pup. That vapour is ME! I'm Garaj!", hi: "हुँह! चोर? कौन चोर? वो भाप तो मैं हूँ! मेरा नाम है गरज!", kind: "shout" },
          { who: 0, en: "A talking cloud? Er... Detective Auggie would like a statement, please.", hi: "बोलने वाला बादल? अम्म... जासूस ऑगी को आपका बयान चाहिए, जनाब।" }
        ],
        fx: { en: "RUMBLE!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.28 }, { id: "garaj", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "It's chilly up here! Vapour shivers into teeny droplets. Millions hold hands and... poof! ME!", hi: "ऊपर ख़ूब ठंड है! भाप ठिठुरकर नन्ही बूँदें बनती है। करोड़ों बूँदें जुड़ीं, और बन गया मैं!" },
          { who: 0, en: "So you're made of OUR pond? Hello, pond! You look fluffier than before.", hi: "मतलब तुम हमारे तालाब से बने हो? नमस्ते, तालाब जी! पहले से ज़्यादा फूले-फूले लग रहे हो।" }
        ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.28 }, { id: "garaj", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "But I'm too small to rain. Everyone wants BIG clouds. Nobody plays with a tiny grump.", hi: "पर मैं बरसने लायक बड़ा नहीं। सबको बड़े बादल चाहिए। छोटे, चिड़चिड़े बादल से कोई नहीं खेलता।" },
          { who: 0, en: "Sorry I called you a thief! Come on, the big lake will make you HUGE!", hi: "सॉरी, मैंने तुम्हें चोर कहा! चलो, बड़ी झील तुम्हें एकदम मोटा-ताज़ा बना देगी!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.28 }, { id: "garaj", pose: "cheer", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.12 } ],
        cap: { en: "They race to the big lake. Sunshine sends up vapour by the bucketful, and Garaj puffs up like a pillow!", hi: "दोनों बड़ी झील तक दौड़े। धूप बाल्टी भर-भर के भाप ऊपर भेज रही है, और गरज तकिये की तरह फूलता जा रहा है!" },
        say: [
          { who: 1, en: "I feel so heavy! My droplets are bumping and joining into big, fat drops!", hi: "अरे, मैं कितना भारी हो गया! मेरी नन्ही बूँदें टकरा-टकराकर मोटी बूँदें बन रही हैं!" },
          { who: 0, en: "You look like Papa after Dadi's aloo parathas!", hi: "तुम तो दादी के आलू पराठे खाने के बाद वाले पापा जैसे लग रहे हो!" }
        ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "garaj", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.1 } ],
        say: [
          { who: 1, en: "When drops get too heavy, down they go! I'm RAINING! I've never felt so big!", hi: "बूँदें भारी हुईं, तो नीचे चलीं! मैं बरस रहा हूँ! आज मैं सच में बड़ा हो गया!" },
          { who: 0, en: "Rain dance! Mumma, bring the umbrellas! Pinku, bring your drama!", hi: "बारिश वाला डांस! मम्मा, छतरियाँ लाओ! पिंकू, अपना ड्रामा लाओ!", kind: "shout" }
        ],
        fx: { en: "PLIP-PLOP!", hi: "टप-टप!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.2 }, { id: "nanu", pose: "point", mood: "happy", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "puddle", x: 0.35 }, { id: "rainbow", x: 0.6, y: 0.2 } ],
        say: [
          { who: 1, en: "Pond, vapour, cloud, rain, and back to the pond! That's the water cycle, round and round.", hi: "तालाब से भाप, भाप से बादल, बादल से बारिश, और फिर वापस तालाब! यही है जल-चक्र, गोल-गोल!" },
          { who: 0, en: "Case closed! The thief was a friend... who just needed a hug and a big lake.", hi: "केस बंद! चोर तो एक दोस्त निकला... जिसे बस थोड़ा प्यार और एक बड़ी झील चाहिए थी।" }
        ]
      }
    ]
  },
  {
    id: 100,
    age: "6-10",
    category: "nature",
    title: { en: "Auggie Can't Wait for Sunflowers", hi: "सूरजमुखी का इंतज़ार" },
    blurb: { en: "Auggie wants sunflowers taller than him, by tomorrow. So why does digging up the seeds never work?", hi: "ऑगी को अपने से लंबे सूरजमुखी चाहिए, वो भी कल तक! पर बीज खोद-खोदकर देखने से काम क्यों नहीं बनता?" },
    moral: { en: "Some of the best things grow quietly. Give them water, warmth, and time.", hi: "कई अच्छी चीज़ें चुपचाप बढ़ती हैं। उन्हें पानी, गर्माहट और वक़्त दो।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "flower", x: 0.12, s: 1.6 }, { id: "sapling", x: 0.55 }, { id: "sun", x: 0.88, y: 0.12 } ],
      fx: { en: "WOW!", hi: "वाह!" }
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sapling", x: 0.52 } ],
        say: [
          { who: 1, en: "These tiny seeds will grow into sunflowers taller than you, my lion!", hi: "ये नन्हे-नन्हे बीज एक दिन तुमसे भी लंबे सूरजमुखी बनेंगे, मेरे शेर!" },
          { who: 0, en: "Taller than ME? From THAT? By tomorrow morning? After breakfast?", hi: "मुझसे लंबे? इस ज़रा-सी चीज़ से? कल सुबह तक? नाश्ते के बाद?" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.45 } ],
        props: [ { id: "sapling", x: 0.7 } ],
        cap: { en: "Next morning, Auggie can't wait one more minute. In goes the nose. Out comes the seed.", hi: "अगली सुबह ऑगी से एक मिनट भी रुका न गया। नाक अंदर, बीज बाहर!" },
        say: [ { who: 0, en: "Good morning, seed! Growing yet? Hello? Knock knock? Anybody in there?", hi: "गुड मॉर्निंग, बीज! बड़े हुए? हैलो? खट-खट? कोई है अंदर?" } ],
        fx: { en: "DIG!", hi: "खुर-खुर!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Arre! My amma always said: seeds and dreams grow best in the dark. Leave it be!", hi: "अरे! मेरी अम्मा कहती थीं: बीज और सपने, अँधेरे में ही अच्छे पनपते हैं। इसे छोड़ दो!" },
          { who: 0, en: "But I can't SEE what's happening down there! Waiting makes my tail droop...", hi: "पर मुझे दिखता ही नहीं कि नीचे क्या चल रहा है! इंतज़ार में मेरी पूँछ लटक गई..." }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.52 } ],
        say: [
          { who: 1, en: "Want to peek without digging? Glass jar, wet cotton, one rajma bean. Presto: a seed window!", hi: "बिना खोदे झाँकना है? एक काँच का जार, गीली रुई, और एक राजमा। बन गई बीज की खिड़की!" },
          { who: 0, en: "A window into the seed's bedroom? Can I watch it snore?", hi: "बीज के बेडरूम की खिड़की? मैं उसे खर्राटे लेते देख सकूँगा?" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.52 } ],
        say: [
          { who: 1, en: "Seeds wake up with three things: water, air and warmth. No sunlight needed yet!", hi: "बीज को जगाने के लिए तीन चीज़ें चाहिए: पानी, हवा और गर्माहट। धूप की अभी ज़रूरत नहीं!" },
          { who: 0, en: "Water, air, warmth... that's my nap recipe too! We're twins, little bean!", hi: "पानी, हवा, गर्माहट... मेरी झपकी की भी यही रेसिपी है! हम तो जुड़वाँ हैं, राजमा!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.35 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "bottle", x: 0.55 } ],
        cap: { en: "Day three! Something is happening in the jar. A tiny white tail is poking out of the bean!", hi: "तीसरे दिन जार में हलचल! राजमा में से एक नन्ही सफ़ेद पूँछ बाहर झाँक रही है!" },
        say: [
          { who: 0, en: "It's ALIVE! First a root, going down. My bean grew a tail, just like me!", hi: "ये ज़िंदा है! पहले जड़ निकली, नीचे की ओर। मेरे राजमा की भी मेरी तरह पूँछ है!", kind: "shout" },
          { who: 1, en: "Ha-ha-ha! Auggie's first experiment! I'm adding 'frame the bean' to my list!", hi: "हा-हा-हा! ऑगी का पहला प्रयोग! मेरी लिस्ट में जुड़ गया: 'राजमा को फ़्रेम करवाना'!" }
        ],
        fx: { en: "POP!", hi: "टुक!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sapling", x: 0.52 }, { id: "sun", x: 0.85, y: 0.12 } ],
        say: [
          { who: 1, en: "Now it needs soil and sunshine. Leaves are tiny kitchens: they cook food from sunlight!", hi: "अब इसे मिट्टी और धूप चाहिए। पत्तियाँ नन्ही रसोई हैं, धूप से पौधे का खाना पकाती हैं!" },
          { who: 0, en: "A kitchen with no stove? Can the leaves cook me a carrot?", hi: "बिना चूल्हे की रसोई? क्या पत्तियाँ मेरे लिए एक गाजर पका देंगी?" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "flower", x: 0.12, s: 1.8 }, { id: "flower", x: 0.55, s: 1.8 }, { id: "sun", x: 0.9, y: 0.1 } ],
        cap: { en: "Two months of patient watering later... and not one secret dig.", hi: "दो महीने तक सब्र से पानी देने के बाद... और एक बार भी चुपके से खुदाई नहीं।" },
        say: [
          { who: 1, en: "See, my lion? Taller than you, just as I promised! Now, a carrot from my pallu...", hi: "देखा, मेरे शेर? तुमसे भी लंबे, जैसा मैंने कहा था! और ये लो, पल्लू से एक गाजर..." },
          { who: 0, en: "Waiting was SO hard, Dadi. But look! They're smiling at the Sun, and at me!", hi: "इंतज़ार बहुत मुश्किल था, दादी। पर देखो! ये सूरज को भी मुस्कुरा रहे हैं, और मुझे भी!" }
        ],
        fx: { en: "WOW!", hi: "वाह!" },
        action: true
      }
    ]
  },
  {
    id: 101,
    age: "6-10",
    category: "science",
    title: { en: "Auggie and the Invisible Nails", hi: "ऑगी और छिपी हुई कीलें" },
    blurb: { en: "One happy wag, one flying toolbox, and tiny nails hidden in the grass. Even Auggie's nose can't find them!", hi: "एक ख़ुश पूँछ, एक उड़ता औज़ार-बक्सा, और घास में छिपी नन्ही कीलें! ऑगी की नाक भी हार गई। अब क्या?" },
    moral: { en: "Own up when you goof, ask for help, and keep sharp things tidy.", hi: "ग़लती हो तो मान लो, मदद माँग लो, और नुकीली चीज़ें समेटकर रखो।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "magnet", x: 0.52, y: 0.45 }, { id: "gear", x: 0.12 } ],
      fx: { en: "CLANK!", hi: "टन्न!" }
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bicycle", x: 0.52 }, { id: "gear", x: 0.9 } ],
        cap: { en: "Saturday. Nanu is fixing Kabir's wobbly bicycle. His helper has a very, very happy tail.", hi: "शनिवार। नानू कबीर की डगमग साइकिल ठीक कर रहे हैं। उनके हेल्पर की पूँछ बहुत, बहुत ख़ुश है।" },
        say: [
          { who: 1, en: "Screwdriver, please, Auggie. Fun fact: the bicycle was invented over two hundred years ago!", hi: "ऑगी, पेचकस देना। मज़ेदार बात: साइकिल दो सौ साल से भी पहले बनी थी!" },
          { who: 0, en: "Here you go! And don't worry about my tail. It's totally... thump-thump-thump... calm!", hi: "ये लीजिए! और मेरी पूँछ की फ़िक्र मत कीजिए, ये एकदम... धप-धप-धप... शांत है!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "gear", x: 0.5, y: 0.85 } ],
        cap: { en: "Wag, wag, WHACK! The toolbox flips over. Tiny nails and screws vanish into the grass.", hi: "पूँछ हिली, हिली, और धड़ाम! औज़ार-बक्सा पलट गया। छोटी-छोटी कीलें और पेंच घास में ग़ायब।" },
        say: [
          { who: 0, en: "Oops! My tail did it! Not me! We're... two different people.", hi: "उफ़! ये पूँछ ने किया! मैंने नहीं! हम दोनों... अलग-अलग हैं।" },
          { who: 1, en: "Careful! Hidden nails can hurt soft paws and Kabir's little feet!", hi: "संभलकर! घास में छिपी कीलें नरम पंजों और कबीर के नन्हे पैरों में चुभ सकती हैं!" }
        ],
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "sad", x: 0.35 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "bush", x: 0.1 } ],
        say: [
          { who: 0, en: "Nails don't smell of anything! Okay... it was ME, not my tail. Nanu, please help?", hi: "कीलों की कोई महक ही नहीं! ठीक है... पूँछ ने नहीं, मैंने गिराया। नानू, मदद करोगे?" },
          { who: 1, en: "Owning up? That's my boy! For metal, we need a different superpower.", hi: "ग़लती मान ली? शाबाश, मेरे शेर! कीलों के लिए हमें दूसरी सुपरपावर चाहिए।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "magnet", x: 0.52, y: 0.45 } ],
        say: [
          { who: 1, en: "Ta-da! A magnet! It pulls things made of iron, like nails, pins and needles.", hi: "ये देखो! चुंबक! ये लोहे की चीज़ों को अपनी तरफ़ खींचता है, जैसे कीलें, पिन और सुई।" },
          { who: 0, en: "It grabs things without hands? That's magic! Show me, show me!", hi: "बिना हाथ के चीज़ें पकड़ लेता है? ये तो जादू है! जल्दी दिखाओ!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "magnet", x: 0.5, y: 0.5 }, { id: "bowl", x: 0.55 }, { id: "apple", x: 0.12 } ],
        say: [
          { who: 0, en: "Apple: nope. My bowl: nope! Your screwdriver... CLANK! It jumped!", hi: "सेब: नहीं। मेरा कटोरा: नहीं! आपका पेचकस... टन्न! उछलकर चिपक गया!" },
          { who: 1, en: "Magnets ignore wood, fruit, plastic and even some shiny metals. But iron, they LOVE!", hi: "चुंबक लकड़ी, फल, प्लास्टिक, और कुछ चमकीली धातुओं को भी नहीं खींचता। पर लोहे से उसे प्यार है!" }
        ],
        fx: { en: "CLANK!", hi: "टन्न!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.4 } ],
        props: [ { id: "magnet", x: 0.7, y: 0.85 }, { id: "flower", x: 0.12 } ],
        cap: { en: "Magnet on a string, Auggie on patrol. Up and down the grass he goes, and the nails come jumping!", hi: "डोरी से बँधा चुंबक, और गश्त पर ऑगी। घास में इधर-उधर घूमा, और कीलें उछल-उछलकर चिपकने लगीं!" },
        say: [ { who: 0, en: "Nail-sweeper on duty! Click! Click! Click! Twelve nails... that's twelve carrots of work!", hi: "कील-सफ़ाई वाला ऑगी ड्यूटी पर! चट! चट! चट! बारह कीलें... मतलब बारह गाजरों का काम!" } ],
        fx: { en: "ZING!", hi: "चट-चट!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "dadi", pose: "sit", mood: "sad", x: 0.25 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.7, flip: true } ],
        props: [ { id: "magnet", x: 0.5, y: 0.6 } ],
        say: [
          { who: 0, en: "Hai Ram! My sewing needle fell on the rug. These old eyes can't find it anywhere!", hi: "हाय राम! मेरी सुई दरी पर गिर गई। ये बूढ़ी आँखें उसे ढूँढ ही नहीं पा रहीं!" },
          { who: 1, en: "A needle? Magnets LOVE needles! Stand back, Dadi. Magnet Auggie is here!", hi: "सुई? चुंबक को तो सुई बहुत प्यारी है! पीछे हटो, दादी, चुंबक वाला ऑगी आ गया!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "dadi", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "magnet", x: 0.35, y: 0.6 }, { id: "apple", x: 0.65 } ],
        say: [
          { who: 0, en: "Found in one second! Here, apple slices from my secret pallu stash!", hi: "एक सेकंड में मिल गई! ये लो, पल्लू के ख़ुफ़िया ख़ज़ाने से सेब के टुकड़े!" },
          { who: 2, en: "You owned up, asked for help, and used science. That's a real helper, Auggie!", hi: "ग़लती मानी, मदद माँगी, और विज्ञान से काम लिया। यही होता है असली हेल्पर, ऑगी!" }
        ]
      }
    ]
  },
  {
    id: 102,
    age: "6-10",
    category: "planet",
    title: { en: "The Monster Made of Picnic Rubbish", hi: "पिकनिक के कचरे वाला राक्षस" },
    blurb: { en: "After Mausi's birthday picnic, a pile of rubbish burps, giggles and grows. Can a mighty woof stop it?", hi: "मौसी की बर्थडे पिकनिक के बाद कचरे का ढेर डकार लेता है, हँसता है, और बढ़ता ही जाता है! क्या ऑगी की भौं उसे रोक पाएगी?" },
    moral: { en: "Waste isn't a monster if we sort it. Green bin for wet, blue bin for dry!", hi: "छाँटा हुआ कचरा राक्षस नहीं बनता। गीला हरे डिब्बे में, सूखा नीले में!" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "kichdu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "dustbin", x: 0.1 }, { id: "bottle", x: 0.52 } ],
      fx: { en: "GLOOP!", hi: "गुड़ुप!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "mausi", pose: "stand", mood: "surprised", x: 0.25 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "bottle", x: 0.5 }, { id: "cake", x: 0.12 } ],
        cap: { en: "Mausi's birthday picnic is over. Cake: gone. Songs: sung. Rubbish: EVERYWHERE.", hi: "बर्थडे पिकनिक ख़त्म। केक ख़त्म, गाने ख़त्म... पर कचरा? वो तो हर जगह पड़ा है!" },
        say: [
          { who: 0, en: "Best birthday ever! Quick, one last selfie with the... wait, why is that pile moving?", hi: "सबसे बढ़िया बर्थडे! चलो, आख़िरी सेल्फ़ी... रुको, वो कचरे का ढेर हिल क्यों रहा है?" },
          { who: 1, en: "Mausi... the rubbish pile just burped.", hi: "मौसी... कचरे के ढेर ने अभी-अभी डकार ली!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "blast", mood: "angry", x: 0.28 }, { id: "kichdu", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.5 } ],
        say: [
          { who: 1, en: "Blurp! I'm Kichdu! More litter, more ME! Thank you for the lovely snacks!", hi: "गुड़ुप! मैं हूँ किचडू! जितना कचरा, उतना मोटा मैं! इस दावत के लिए थैंक यू!" },
          { who: 0, en: "WOOF! WOOF! Shoo, gloopy monster! Go back to... wherever gloop lives!", hi: "भौं! भौं! भाग यहाँ से, चिपचिपे! जा अपने... कीचड़ वाले घर!", kind: "shout" }
        ],
        fx: { en: "GLOOP!", hi: "गुड़ुप!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "mumma", pose: "point", mood: "determined", x: 0.2 }, { id: "auggie", pose: "stand", mood: "sad", x: 0.5 }, { id: "kichdu", pose: "stand", mood: "laugh", x: 0.82, flip: true } ],
        say: [
          { who: 1, en: "My biggest woof just made him giggle! And he's getting BIGGER!", hi: "मेरी सबसे ज़ोरदार भौं पर ये तो हँस रहा है! और ऊपर से बड़ा हो रहा है!" },
          { who: 0, en: "Auggie, you can't bark rubbish away. You SORT it away! Luckily, I have a list.", hi: "ऑगी, भौंकने से नहीं, छाँटने से छोटा होगा ये! और हाँ, इसकी भी लिस्ट है मेरे पास।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "mumma", pose: "point", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "mausi", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "dustbin", x: 0.35 }, { id: "dustbin", x: 0.65 } ],
        say: [
          { who: 0, en: "Green bin: wet waste. Peels and leftover food turn into compost, which is plant food!", hi: "हरा डिब्बा: गीला कचरा। छिलके और बचा खाना बनेंगे खाद, यानी पौधों का खाना!" },
          { who: 2, en: "Blue bin: dry waste. Paper, plastic, glass and metal go off to be recycled!", hi: "नीला डिब्बा: सूखा कचरा। काग़ज़, प्लास्टिक, काँच और धातु जाएँगे रीसाइकल होने!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "run", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "run", mood: "determined", x: 0.5 }, { id: "kichdu", pose: "stand", mood: "scared", x: 0.82, flip: true } ],
        props: [ { id: "dustbin", x: 0.35 }, { id: "banana", x: 0.62 } ],
        cap: { en: "Rohan and Anaya join in. Peels this way, bottles that way. Sorting has never been so fast!", hi: "रोहन और अनाया भी जुट गए। छिलके इधर, बोतलें उधर। इतनी तेज़ छँटाई पहले कभी नहीं हुई!" },
        say: [
          { who: 1, en: "Peel? Green bin, flop! Bottle? Blue bin, clonk! Hey, Kichdu's shrinking!", hi: "छिलका? हरे में, धप्प! बोतल? नीले में, टन्न! अरे, किचडू तो सिकुड़ रहा है!" },
          { who: 0, en: "Faster than a cricket over! Keep going, team!", hi: "एक ओवर से भी तेज़! लगे रहो, टीम!", kind: "shout" }
        ],
        fx: { en: "SHRINK!", hi: "सिकुड़!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "kichdu", pose: "think", mood: "surprised", x: 0.25, s: 0.6 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.5 } ],
        say: [
          { who: 0, en: "Hey... where are my bottles going? Those were my favourite crunchy bits!", hi: "अरे... मेरी बोतलें कहाँ ले जा रहे हो? वो मेरे सबसे कुरकुरे टुकड़े थे!" },
          { who: 1, en: "Guess what? Old bottles get melted and made into benches... and even T-shirts like mine!", hi: "पता है? पुरानी बोतलें पिघलाकर बेंच बनती हैं... और मेरी जैसी टी-शर्ट भी!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "anaya", pose: "point", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "kichdu", pose: "stand", mood: "happy", x: 0.8, flip: true, s: 0.5 } ],
        props: [ { id: "tree", x: 0.92 }, { id: "sapling", x: 0.35 } ],
        say: [
          { who: 0, en: "And the peels become compost to feed this little sapling. Rubbish into flowers!", hi: "और छिलकों से खाद बनेगी, जो इस नन्हे पौधे को खाना देगी। कचरे से फूल!" },
          { who: 2, en: "Rubbish can become useful? Then... can I help sort, instead of being a monster?", hi: "कचरा भी काम का बन सकता है? तो... क्या मैं राक्षस बनने की जगह छँटाई में मदद करूँ?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "dustbin", x: 0.1 }, { id: "tree", x: 0.52 } ],
        cap: { en: "The park sparkles. And Chamakpur has a tiny new Sorting Champion: Kichdu!", hi: "पार्क चमक उठा। और चमकपुर को मिला एक नन्हा-सा 'छँटाई चैंपियन': किचडू!" },
        say: [
          { who: 1, en: "My birthday promise: steel plates next year, nothing to throw away! Now everybody... hold that pose!", hi: "मेरा बर्थडे वाला वादा: अगली बार स्टील की प्लेटें, फेंकने वाला कुछ नहीं! अब सब... पोज़ पकड़ो!" },
          { who: 0, en: "Say 'COMPOST'! Kichdu, get in the selfie. You're family now!", hi: "बोलो 'खाद'! किचडू, तुम भी फ़ोटो में आओ। अब तुम भी परिवार हो!" }
        ]
      }
    ]
  },
  {
    id: 103,
    age: "6-10",
    category: "planet",
    title: { en: "Super Auggie Hunts the Power-Eaters", hi: "सुपर ऑगी और बिजली-खाऊ" },
    blurb: { en: "The electricity bill needs its own suitcase! Super Auggie hunts the power-wasters, but who is the biggest one?", hi: "बिजली का बिल इतना लंबा कि अटैची चाहिए! सुपर ऑगी बिजली-खाऊ ढूँढने निकला, पर सबसे बड़ा कौन निकलेगा?" },
    moral: { en: "Lights, fans, fridge doors: close what you're not using, and our sky stays cleaner.", hi: "बत्ती, पंखा, फ़्रिज का दरवाज़ा: जो काम में न हो, बंद करो। आसमान साफ़ रहेगा।" },
    cover: {
      bg: "action",
      chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.45, cape: true } ],
      props: [ { id: "bulb", x: 0.8, y: 0.25 }, { id: "star", x: 0.15, y: 0.2 } ],
      fx: { en: "CLICK!", hi: "खट!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "think", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "point", mood: "angry", x: 0.8, flip: true } ],
        props: [ { id: "book", x: 0.32, y: 0.5 } ],
        say: [
          { who: 0, en: "Mottu, look at this bill! It's so long, it needs its own suitcase!", hi: "मोटू, ये बिजली का बिल देखो! इतना लंबा कि इसके लिए अलग अटैची चाहिए!" },
          { who: 2, en: "Mittsy, my suspect list: someone's laptop was on ALL night. Name starts with M!", hi: "मिट्सी, मेरी शक वाली लिस्ट तैयार है: किसी का लैपटॉप पूरी रात चालू था। नाम 'म' से शुरू होता है!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bulb", x: 0.52, y: 0.2 } ],
        say: [
          { who: 1, en: "Did you know? Most of our electricity comes from burning coal. Waste power, make more smoke!", hi: "पता है? हमारी ज़्यादातर बिजली कोयला जलाकर बनती है। बिजली बर्बाद, मतलब आसमान में और धुआँ!" },
          { who: 0, en: "Smoke? In MY sky? Where birds fly and kites dance? This calls for a superhero!", hi: "धुआँ? मेरे आसमान में? जहाँ पंछी उड़ते हैं, पतंगें नाचती हैं? अब तो सुपरहीरो बुलाना पड़ेगा!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.45, cape: true } ],
        cap: { en: "Mumma ties on the red Super Cape with the golden paw badge. Super Auggie is ON!", hi: "मम्मा ने सुनहरे पंजे वाला लाल सुपर केप बाँधा। सुपर ऑगी तैयार!" },
        say: [ { who: 0, en: "Woof-woof, let's go! Wasted power, beware! Super Ears are listening!", hi: "भौं-भौं, चलो चलें! बर्बाद बिजली, सावधान! सुपर कान सब सुन रहे हैं!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4, cape: true } ],
        props: [ { id: "bulb", x: 0.75, y: 0.2 } ],
        cap: { en: "Super Ears catch a fan whirring and a bulb humming in an EMPTY bedroom.", hi: "सुपर कानों ने सुना: ख़ाली बेडरूम में पंखा घूम रहा है, बल्ब जल रहा है।" },
        say: [ { who: 0, en: "Nobody here? Then no power here! Paw on switch... CLICK! Suspect number one: caught!", hi: "कमरे में कोई नहीं? तो बिजली भी नहीं! पंजा स्विच पर... खट! पहला मुजरिम पकड़ा गया!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.88, y: 0.5 } ],
        say: [
          { who: 0, en: "Suspect number two! The TV was chatting to an empty sofa for an HOUR!", hi: "दूसरा मुजरिम! टीवी एक घंटे से ख़ाली सोफ़े से गपशप कर रहा था!" },
          { who: 1, en: "Oops! I went out for one quick selfie... okay, forty selfies. Sorry, Super Auggie!", hi: "उफ़! मैं बस एक सेल्फ़ी लेने गई थी... अच्छा, चालीस सेल्फ़ी। सॉरी, सुपर ऑगी!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3, cape: true }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "And then, the biggest culprit of all: the fridge, door wide open! Who did this?", hi: "और फिर मिला सबसे बड़ा मुजरिम: फ़्रिज, जिसका दरवाज़ा पूरा खुला पड़ा है! किसने खोला?" },
        say: [
          { who: 0, en: "Uh-oh. Suspect number three... is ME. I opened it to say goodnight to the carrots.", hi: "उफ़्फ़। तीसरा मुजरिम... मैं हूँ। गाजरों को गुड नाइट बोलने खोला था, और भूल गया।" },
          { who: 1, en: "Arre, my Super Auggie! Even superheroes must shut the fridge. The carrots were getting cold feet!", hi: "अरे, मेरा सुपर ऑगी! सुपरहीरो को भी फ़्रिज बंद करना पड़ता है। गाजरें ठिठुर रही थीं!" }
        ],
        fx: { en: "OOPS!", hi: "उफ़्फ़!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3, cape: true }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.12, y: 0.15 }, { id: "bulb", x: 0.52, y: 0.2 } ],
        say: [
          { who: 1, en: "Owning up is super! Tip: open curtains by day. And LED bulbs sip power, not gulp!", hi: "ग़लती मानना भी सुपर काम है! दिन में पर्दे खोलो। और एलईडी बल्ब बिजली चुस्की-चुस्की पीते हैं, गटागट नहीं!" },
          { who: 0, en: "Free sunshine! Sipping bulbs! Super Auggie's new rule: leaving a room? Lights and fan OFF!", hi: "मुफ़्त धूप! चुस्की वाले बल्ब! सुपर ऑगी का नया नियम: कमरे से निकलो, तो बत्ती-पंखा बंद करके!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "book", x: 0.35, y: 0.5 } ],
        cap: { en: "One month later, the new bill arrives. Everyone holds their breath...", hi: "एक महीने बाद नया बिल आया। सबकी साँसें अटकी हुई..." },
        say: [
          { who: 0, en: "It's SO much smaller! It fits in my pocket now, not a suitcase!", hi: "ये तो कितना छोटा हो गया! अब अटैची नहीं, जेब में आ जाएगा!" },
          { who: 1, en: "And there's less smoke in the sky! Can Super Auggie's salary be one extra carrot?", hi: "और आसमान में धुआँ भी कम! सुपर ऑगी की तनख़्वाह में एक एक्स्ट्रा गाजर?" }
        ]
      }
    ]
  },
  {
    id: 104,
    age: "6-10",
    category: "space",
    title: { en: "Who's Nibbling the Moon?", hi: "चाँद को कौन कुतर रहा है?" },
    blurb: { en: "Last week the Moon was round as a roti. Tonight, half is missing. And Auggie has a suspect!", hi: "पिछले हफ़्ते चाँद रोटी जैसा गोल था। आज आधा ग़ायब! और ऑगी को किसी पर शक है..." },
    moral: { en: "The Moon never really shrinks. And before blaming someone, ask a few questions first!", hi: "चाँद कभी सच में छोटा नहीं होता। और किसी पर शक करने से पहले, दो सवाल पूछ लो!" },
    cover: {
      bg: "mountains",
      chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "tent", x: 0.9 }, { id: "campfire", x: 0.52 }, { id: "star", x: 0.2, y: 0.12 } ],
      fx: { en: "CHOMP!", hi: "गप्प!" }
    },
    panels: [
      {
        bg: "mountains",
        chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.25 }, { id: "auggie", pose: "point", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "tent", x: 0.9 }, { id: "campfire", x: 0.48 }, { id: "star", x: 0.3, y: 0.1 } ],
        cap: { en: "Camping night in the hills! Tent up, campfire crackling, and Papa has promised: ZERO laptop.", hi: "पहाड़ों पर कैंपिंग की रात! तंबू तन गया, अलाव चटक रहा है, और पापा का वादा: लैपटॉप बिल्कुल नहीं।" },
        say: [
          { who: 0, en: "Stars, campfire, fresh air... Ahh. Nobody say the word 'meeting'.", hi: "तारे, अलाव, ठंडी हवा... आहा। कोई 'मीटिंग' शब्द मत बोलना।" },
          { who: 1, en: "Papa, EMERGENCY! Look up! Somebody has eaten HALF the Moon!", hi: "पापा, ग़ज़ब हो गया! ऊपर देखो! किसी ने आधा चाँद खा लिया!", kind: "shout" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "campfire", x: 0.52 }, { id: "star", x: 0.15, y: 0.1 } ],
        say: [
          { who: 0, en: "Last week, round as Dadi's roti. Now, half! And Papa LOVES rotis. Very suspicious!", hi: "पिछले हफ़्ते दादी की रोटी जैसा गोल था। अब आधा! और पापा को रोटी बहुत पसंद है। शक है!" },
          { who: 1, en: "Ha-ha! Poor Papa is innocent. Nobody eats the Moon, beta. Let me show you a trick.", hi: "हा-हा! बेचारे पापा बेक़सूर हैं। चाँद को कोई नहीं खाता, बेटा। चलो, एक खेल दिखाता हूँ।" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.12, y: 0.15 } ],
        say: [
          { who: 1, en: "Fact! The Moon has no light of its own. It glows because sunlight falls on it.", hi: "सुनो! चाँद ख़ुद नहीं चमकता। उस पर सूरज की धूप पड़ती है, वही हमें चमकती दिखती है।" },
          { who: 0, en: "The Moon is BORROWING sunshine? Like Papa borrows my blanket?", hi: "चाँद धूप उधार लेता है? जैसे पापा मेरा कंबल उधार लेते हैं?" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "papa", pose: "blast", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "bulb", x: 0.3, y: 0.35 }, { id: "apple", x: 0.68, y: 0.4 } ],
        cap: { en: "Showtime! Starring Papa's torch as the Sun, an apple as the Moon, and Auggie's head as planet Earth!", hi: "शो शुरू! सूरज बनी पापा की टॉर्च, चाँद बना एक सेब, और धरती बना... ऑगी का सिर!" },
        say: [
          { who: 0, en: "Torch-Sun, switched ON! Why is the Sun so clever? It's full of BRIGHT ideas! Ha!", hi: "टॉर्च-सूरज चालू! सूरज जी, आज छुट्टी नहीं मिलेगी, रात की शिफ़्ट है! हा-हा!" },
          { who: 1, en: "Ha-ha-ha! Bright ideas! Good one, Papa!", hi: "हा-हा-हा! रात की शिफ़्ट! बढ़िया, पापा!" }
        ],
        fx: { en: "FLASH!", hi: "चमक!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.52, y: 0.4 } ],
        say: [
          { who: 1, en: "Sunlight always lights half the Moon. As it circles Earth, we see bigger or smaller bits.", hi: "आधा चाँद हमेशा धूप में रहता है। धरती का चक्कर लगाते हुए वो हिस्सा कभी पूरा, कभी थोड़ा दिखता है।" },
          { who: 0, en: "So the Moon isn't getting smaller. We just see a different slice of its sunny side!", hi: "मतलब चाँद छोटा नहीं हो रहा! हमें बस उसकी धूप का अलग-अलग टुकड़ा दिखता है!" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "papa", pose: "point", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.7, flip: true } ],
        props: [ { id: "apple", x: 0.52, y: 0.5 } ],
        cap: { en: "The apple-Moon circles closer... and closer... to one very hungry planet Earth.", hi: "सेब-चाँद घूमता हुआ पास आया... और पास... एक बहुत भूखी धरती के।" },
        say: [
          { who: 0, en: "AUGGIE! The Earth just took a bite out of the Moon!", hi: "ऑगी! धरती ने चाँद को ही कुतर डाला!" },
          { who: 1, en: "Look, Papa, a crescent Moon! Very scientific. Very crunchy. And... sorry I blamed you!", hi: "देखो पापा, दूज का चाँद! एकदम वैज्ञानिक। बड़ा कुरकुरा भी। और... आप पर शक किया, सॉरी!" }
        ],
        fx: { en: "CHOMP!", hi: "गप्प!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "campfire", x: 0.52 }, { id: "star", x: 0.85, y: 0.1 } ],
        say: [
          { who: 1, en: "Full, half, thin, gone, back again! One round takes about twenty-nine and a half days.", hi: "पूरा, आधा, पतला, ग़ायब, और फिर वापस! ये पूरा चक्कर क़रीब साढ़े उनतीस दिन का होता है।" },
          { who: 0, en: "About a month! So the Moon is basically a calendar that glows?", hi: "क़रीब एक महीना! मतलब चाँद आसमान में टँगा चमकता कैलेंडर है?" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.52 }, { id: "diya", x: 0.88 } ],
        cap: { en: "Back home, Dadi has her own Moon wisdom, older than any science book.", hi: "घर लौटे तो दादी के पास चाँद की अपनी पुरानी सीख थी, किसी भी किताब से पुरानी।" },
        say: [
          { who: 1, en: "Our calendar follows the Moon too! Diwali's diyas shine on Amavasya, the night with no Moon.", hi: "हमारे त्योहार भी चाँद देखकर चलते हैं! दिवाली के दीये अमावस्या को जलते हैं, जब चाँद दिखता ही नहीं।" },
          { who: 0, en: "Moon diary, night one: half Moon, one crunchy apple, and Papa is innocent!", hi: "चाँद की डायरी, पहली रात: आधा चाँद, एक कुरकुरा सेब, और पापा बेक़सूर!" }
        ]
      }
    ]
  },
  {
    id: 105,
    age: "6-10",
    category: "space",
    title: { en: "Lost in the Dark? Look Up!", hi: "अँधेरे में राह दिखाए ध्रुव तारा" },
    blurb: { en: "Power cut, dead phone, and a wind that scrambles every smell. How will three explorers find home?", hi: "बिजली गुल, फ़ोन बंद, और हवा ने सारी महकें उलझा दीं! तीनों खोजी घर कैसे पहुँचेंगे?" },
    moral: { en: "When you're lost, stay calm, look for clues, and don't be shy to ask for help.", hi: "रास्ता भटक जाओ तो घबराओ मत, सुराग ढूँढो, और मदद माँगने में शर्माओ मत।" },
    cover: {
      bg: "village",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "star", x: 0.55, y: 0.1, s: 1.5 }, { id: "star", x: 0.2, y: 0.18 } ],
      fx: { en: "TWINKLE!", hi: "टिमटिम!" }
    },
    panels: [
      {
        bg: "village",
        chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "run", mood: "happy", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "star", x: 0.35, y: 0.1 }, { id: "star", x: 0.65, y: 0.15 } ],
        cap: { en: "Nanu's village! Dinner done, bellies full, three explorers set off on a night walk through the fields.", hi: "नानू का गाँव! खाना खाया, पेट भरा, और तीन खोजी निकल पड़े खेतों में रात की सैर पर।" },
        say: [
          { who: 1, en: "So MANY stars! In Chamakpur, I only see streetlights and Papa's laptop glow!", hi: "इतने सारे तारे! चमकपुर में तो बस स्ट्रीटलाइट और पापा के लैपटॉप की रोशनी दिखती है!" },
          { who: 2, en: "Stay close, you two. Village nights get very dark, very fast.", hi: "पास-पास रहना, दोनों। गाँव में रात झट से गहरी हो जाती है।" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "papa", pose: "stand", mood: "scared", x: 0.25 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.7, flip: true } ],
        props: [ { id: "star", x: 0.5, y: 0.1 } ],
        cap: { en: "Then... every light in the village goes out at once. A power cut!", hi: "तभी... गाँव की सारी बत्तियाँ एक साथ गुल! बिजली चली गई!" },
        say: [
          { who: 0, en: "No problem! I know a shortcut. Phone torch... ON! ...Phone? Dead. Oh no.", hi: "कोई बात नहीं! मुझे शॉर्टकट पता है। फ़ोन की टॉर्च... ऑन! ...फ़ोन? बंद। अरे बाप रे।" },
          { who: 1, en: "Don't worry, Papa! My nose has never, ever been lost. Follow the tail!", hi: "फ़िक्र मत करो, पापा! मेरी नाक कभी रास्ता नहीं भूलती। पूँछ के पीछे चलो!" }
        ],
        fx: { en: "BLACKOUT!", hi: "घुप्प!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "point", mood: "sad", x: 0.3 }, { id: "cow", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "The wind scrambles every smell! Grass, goats, cows... My nose led us to a cowshed!", hi: "हवा ने सारी महकें घोल दीं! घास, बकरी, गाय... मेरी नाक तो हमें गौशाला ले आई!" },
          { who: 1, en: "Moo! Welcome to my bedroom. I'm Gauri. The exit is behind you, and please, no barking.", hi: "म्माँ! मेरे बेडरूम में स्वागत है। मैं गौरी हूँ। बाहर का रास्ता पीछे है, और प्लीज़, भौंकना मत।" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "star", x: 0.4, y: 0.1 }, { id: "star", x: 0.55, y: 0.14 }, { id: "star", x: 0.7, y: 0.1 } ],
        say: [
          { who: 2, en: "When phones and noses fail, look up! Find Saptarishi: seven bright stars shaped like a ladle.", hi: "जब फ़ोन और नाक दोनों फ़ेल हों, तो ऊपर देखो! सप्तर्षि ढूँढो: सात चमकीले तारे, करछी जैसे।" },
          { who: 0, en: "I see it! Just like Ma's big kadchi! ...Also, I didn't really know a shortcut. Sorry.", hi: "दिख गया! अरे, ये तो माँ की रसोई वाली करछी है! ...और हाँ, मुझे कोई शॉर्टकट नहीं पता था। सॉरी।" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.52, y: 0.08, s: 1.5 } ],
        say: [
          { who: 1, en: "The two stars at the ladle's edge point the way. Follow them to Dhruv Tara!", hi: "करछी के किनारे वाले दो तारे रास्ता दिखाते हैं। उनकी सीध में चलो, मिलेगा ध्रुव तारा!" },
          { who: 0, en: "Found it! Not the brightest, but so still. Like me when Dadi opens her pallu!", hi: "मिल गया! सबसे चमकीला नहीं, पर एकदम स्थिर। जैसे दादी के पल्लू खोलते ही मैं!" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "papa", pose: "point", mood: "happy", x: 0.2 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "star", x: 0.5, y: 0.08, s: 1.5 }, { id: "house", x: 0.35 } ],
        say: [
          { who: 2, en: "All night, other stars slowly wheel around it. Dhruv Tara stays put, always in the north.", hi: "रात भर बाक़ी तारे धीरे-धीरे इसके चारों ओर घूमते हैं। पर ध्रुव तारा अपनी जगह, हमेशा उत्तर में।" },
          { who: 1, en: "And our house is north of the temple! So... THIS way! Follow the Pole Star!", hi: "और हमारा घर मंदिर के उत्तर में है! तो... इधर! ध्रुव तारे के पीछे चलो!" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.45 } ],
        props: [ { id: "star", x: 0.7, y: 0.08, s: 1.5 }, { id: "house", x: 0.88 } ],
        cap: { en: "They walk towards the Pole Star. Then the breeze turns, and brings a smell Auggie knows by heart.", hi: "सब ध्रुव तारे की ओर चले। तभी हवा पलटी, और ऐसी महक लाई जो ऑगी दिल से पहचानता है।" },
        say: [ { who: 0, en: "Ginger chai and Mumma's shampoo! Home is right there! Stars AND nose: teamwork!", hi: "अदरक वाली चाय और मम्मा का शैम्पू! घर बस सामने है! तारे और नाक, दोनों की टीम!", kind: "shout" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "mumma", pose: "wave", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.33 }, { id: "house", x: 0.08 } ],
        say: [
          { who: 0, en: "Daddy! Mittsy! You found your way in total darkness? Ha-ha-ha!", hi: "डैडी! मिट्सी! तुम लोग घुप्प अँधेरे में रास्ता ढूँढ आए? हा-हा-हा!" },
          { who: 2, en: "Dhruv Tara pointed north, Auggie's nose found the chai... and Gaurav finally asked for directions!", hi: "ध्रुव तारे ने उत्तर दिखाया, ऑगी की नाक ने चाय ढूँढी... और गौरव ने आख़िरकार रास्ता पूछ ही लिया!" }
        ]
      }
    ]
  },
  {
    id: 106,
    age: "6-10",
    category: "space",
    title: { en: "Eclipse Under the Neem Tree", hi: "नीम के नीचे ग्रहण" },
    blurb: { en: "Eclipse day! One pair of safe glasses, lots of sad faces. Can Auggie's sniffing save the show?", hi: "ग्रहण का दिन! सुरक्षित चश्मा बस एक, और उदास चेहरे ढेर सारे। क्या ऑगी की सूँघने की आदत कमाल करेगी?" },
    moral: { en: "Our eyes are precious: never stare at the Sun. Let pinholes and shadows show you eclipses!", hi: "आँखें अनमोल हैं: सूरज को कभी मत घूरो। ग्रहण छोटे छेद और परछाइयों में देखो!" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.35 }, { id: "anaya", pose: "cheer", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "tree", x: 0.55 }, { id: "sun", x: 0.12, y: 0.12 } ],
      fx: { en: "WOW!", hi: "वाह!" }
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 }, { id: "camera", x: 0.85, y: 0.5 } ],
        cap: { en: "Big news in Chamakpur! Today the Moon will slide in front of the Sun: a solar eclipse!", hi: "आज चमकपुर में ख़ास दिन! चाँद सूरज के आगे से गुज़रकर उसे ढक लेगा। सूर्य ग्रहण!" },
        say: [
          { who: 1, en: "Eclipse selfie! Me, the Sun, and a perfect pout. Hold that pose, Sun!", hi: "ग्रहण वाली सेल्फ़ी! मैं, सूरज, और एक परफ़ेक्ट पोज़। सूरज जी, पोज़ पकड़ो!" },
          { who: 0, en: "And I'll bark at the Moon until it gives the Sun back. Just in case!", hi: "और मैं चाँद पर भौंकूँगा, जब तक वो सूरज वापस न कर दे। बस, पक्का करने के लिए!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "mausi", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 } ],
        say: [
          { who: 2, en: "STOP! Never look straight at the Sun, even with sunglasses or through cameras. Eyes get hurt!", hi: "रुको! सूरज को कभी सीधे मत देखो, धूप के चश्मे या कैमरे से भी नहीं। आँखें ख़राब हो सकती हैं!", kind: "shout" },
          { who: 0, en: "Not even for ONE selfie? Okay, okay... eyes matter more than likes.", hi: "एक सेल्फ़ी के लिए भी नहीं? अच्छा, ठीक है... लाइक्स से ज़्यादा ज़रूरी आँखें हैं।" }
        ],
        fx: { en: "STOP!", hi: "रुको!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.15, y: 0.1 } ],
        say: [
          { who: 1, en: "The Moon slides between Sun and Earth, covering the Sun. Only proper eclipse glasses are safe.", hi: "चाँद, सूरज और धरती के बीच आकर सूरज को ढक देता है। देखो तो सिर्फ़ ग्रहण वाले चश्मे से।" },
          { who: 0, en: "And we have... one pair? For five people and one very curious dog?", hi: "और हमारे पास... बस एक चश्मा? पाँच लोग और एक बहुत उत्सुक कुत्ता?" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "anaya", pose: "stand", mood: "sad", x: 0.2 }, { id: "rohan", pose: "stand", mood: "angry", x: 0.45 }, { id: "auggie", pose: "think", mood: "sad", x: 0.78, flip: true } ],
        props: [ { id: "tree", x: 0.95 } ],
        say: [
          { who: 0, en: "I waited a whole year for this eclipse... and I only get ten seconds?", hi: "मैंने पूरे साल इस ग्रहण का इंतज़ार किया... और मुझे बस दस सेकंड मिलेंगे?" },
          { who: 1, en: "Ten seconds, then a queue, then it's over. Worst. Eclipse. Ever.", hi: "दस सेकंड, फिर लाइन, फिर ख़त्म। सबसे बेकार ग्रहण!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.35 }, { id: "anaya", pose: "run", mood: "surprised", x: 0.75, flip: true } ],
        props: [ { id: "tree", x: 0.55 } ],
        cap: { en: "Auggie does what Auggie always does: sniffs the ground under the neem tree. And then he sees them...", hi: "ऑगी ने वही किया जो वो हमेशा करता है: नीम के नीचे ज़मीन सूँघी। और तभी उसे दिखीं..." },
        say: [
          { who: 0, en: "Anaya, LOOK! Hundreds of tiny glowing bananas, all over the ground!", hi: "अनाया, देखो! ज़मीन पर सैकड़ों छोटे-छोटे चमकते केले!" },
          { who: 1, en: "Bananas? Auggie, those are little suns... with bites taken out!", hi: "केले? ऑगी, ये तो छोटे-छोटे सूरज हैं... जिनमें से किसी ने कौर खा लिया!" }
        ],
        fx: { en: "WOW!", hi: "वाह!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "anaya", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "tree", x: 0.35 } ],
        say: [
          { who: 2, en: "Brilliant, Auggie! Tiny gaps between leaves work like pinholes. Each one paints a little Sun below!", hi: "शाबाश, ऑगी! पत्तियों की नन्ही झिरियाँ छोटे छेद का काम करती हैं। हर झिरी नीचे नन्हा सूरज बनाती है!" },
          { who: 0, en: "Hundreds of eclipses for everybody, and all safe to look at! No queue!", hi: "सबके लिए सैकड़ों ग्रहण, और सब देखने में सुरक्षित! कोई लाइन नहीं!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "mausi", pose: "blast", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "point", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "book", x: 0.32, y: 0.5 } ],
        cap: { en: "Mausi pokes a tiny hole in a card, turns her back to the Sun, and watches the ground.", hi: "मौसी ने एक कार्ड में सुई से छोटा-सा छेद किया, सूरज की ओर पीठ की, और ज़मीन पर देखा।" },
        say: [
          { who: 2, en: "Arre! The little Sun on the ground has a bite missing! Who's the culprit?", hi: "अरे! ज़मीन वाले नन्हे सूरज में से कौर ग़ायब! ये किसकी शरारत है?" },
          { who: 1, en: "Not me, Dadi! I only bite carrots. And apples. And sometimes Papa's slipper.", hi: "मैंने नहीं, दादी! मैं तो बस गाजर काटता हूँ। और सेब। और कभी-कभी पापा की चप्पल।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.52, y: 0.1 }, { id: "tree", x: 0.9 } ],
        cap: { en: "Slowly the Moon moves on. And Mausi gets her best selfie ever: back to the Sun, crescents at her feet!", hi: "धीरे-धीरे चाँद आगे खिसका। और मौसी की सबसे बढ़िया सेल्फ़ी: सूरज की ओर पीठ, पैरों के पास सैकड़ों नन्हे कटे सूरज!" },
        say: [
          { who: 0, en: "Bye, Moon! And Sun, you can have your bite back now. Good as new!", hi: "टाटा, चाँद! और सूरज भैया, अपना कौर वापस ले लो। एकदम नए जैसे!" },
          { who: 1, en: "Today's lesson: feel the sunshine, never stare at the Sun. Shadows are for looking!", hi: "आज का सबक: धूप को महसूस करो, सूरज को घूरो मत। देखना है तो परछाइयों में देखो!" }
        ],
        fx: { en: "SHINE!", hi: "चमक!" },
        action: true
      }
    ]
  },
  {
    id: 107,
    age: "6-10",
    category: "science",
    title: { en: "The Copycat Who Saved Us", hi: "गुफ़ा का नक़लची दोस्त" },
    blurb: { en: "Something in the hill cave copies every bark Auggie makes. Then the torch dies. Can a copycat help?", hi: "पहाड़ी गुफ़ा में कोई ऑगी की हर भौं की नक़ल करता है। फिर टॉर्च बुझ जाती है! क्या वो नक़लची काम आएगा?" },
    moral: { en: "Sound bounces off hard walls as an echo. And always pack a spare torch!", hi: "आवाज़ सख़्त दीवारों से टकराकर गूँज बनकर लौटती है। और हाँ, एक्स्ट्रा टॉर्च हमेशा साथ रखो!" },
    cover: {
      bg: "cave",
      chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.4 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
      props: [ { id: "crystal", x: 0.12 }, { id: "rock", x: 0.6 } ],
      fx: { en: "WOOF!", hi: "भौं!" }
    },
    panels: [
      {
        bg: "cave",
        chars: [ { id: "mumma", pose: "stand", mood: "scared", x: 0.2 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.5 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "crystal", x: 0.92 } ],
        cap: { en: "A family trip to the Chamakpur hill caves, on the safe, marked path. Auggie is Chief Bodyguard.", hi: "चमकपुर की पहाड़ी गुफ़ाओं की सैर, निशान लगे सुरक्षित रास्ते पर। ऑगी है चीफ़ बॉडीगार्ड।" },
        say: [
          { who: 0, en: "Mittsy, hold my hand. It's dark, it's drippy, and I just heard a squeak!", hi: "मिट्सी, मेरा हाथ पकड़ो। अँधेरा है, टपक-टपक है, और कुछ चूँ-चूँ भी सुना!" },
          { who: 2, en: "Relax, Mottu! We've got a torch AND a bodyguard. What could go wrong?", hi: "आराम से, मोटू! टॉर्च भी है और बॉडीगार्ड भी। क्या ग़लत हो सकता है?" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "blast", mood: "angry", x: 0.4 } ],
        props: [ { id: "rock", x: 0.8 } ],
        cap: { en: "Auggie gives one brave bark to guard his family. The cave barks back: WOOF... woof... woof...", hi: "परिवार की रक्षा के लिए ऑगी ने एक बहादुर भौं लगाई। गुफ़ा ने भी जवाब दिया: भौं... भौं... भौं..." },
        say: [ { who: 0, en: "Who's COPYING me? I'm the bravest dog here! ...Here! ...Here! Stop THAT!", hi: "कौन मेरी नक़ल कर रहा है? यहाँ सबसे बहादुर मैं हूँ! ...हूँ! ...हूँ! ये बंद करो!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" },
        action: true
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Ha-ha-ha! Auggie, that copycat is YOU! You're arguing with yourself!", hi: "हा-हा-हा! ऑगी, वो नक़लची तुम ख़ुद हो! अपने आप से झगड़ रहे हो!" },
          { who: 0, en: "Me? But I'm standing right here. How can I be over THERE too?", hi: "मैं? पर मैं तो यहाँ खड़ा हूँ। वहाँ भी मैं कैसे हो सकता हूँ?", kind: "think" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.52 } ],
        say: [
          { who: 1, en: "Your bark flies off, smacks the hard rock, and bounces home. That bounce-back is an echo!", hi: "तुम्हारी भौं उड़कर सख़्त चट्टान से टकराती है, और लौटकर आ जाती है। इसी लौटती आवाज़ को गूँज कहते हैं!" },
          { who: 0, en: "So my bark is a boomerang? Throw a woof, catch a woof! Cool!", hi: "मतलब मेरी भौं बूमरैंग है? एक भौं फेंको, वही भौं पकड़ो! मज़ेदार!" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "papa", pose: "stand", mood: "scared", x: 0.2 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.5 }, { id: "mumma", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Uh-oh. The torch just died. I, er... charged my laptop instead of the torch.", hi: "उफ़्फ़। टॉर्च बंद हो गई। मैंने, वो... टॉर्च की जगह लैपटॉप चार्ज कर लिया था।" },
          { who: 2, en: "Mittsy! 'Spare torch' was on my list! Now it's pitch dark. Which way is out?", hi: "मिट्सी! 'एक्स्ट्रा टॉर्च' मेरी लिस्ट में था! अब घुप्प अँधेरा है। बाहर किधर है?" }
        ],
        fx: { en: "FLICKER!", hi: "झप!" },
        action: true
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Stay calm, stay together. Bats fly in the dark by listening to echoes. Try it, Auggie!", hi: "घबराओ मत, साथ रहो। चमगादड़ अँधेरे में गूँज सुनकर उड़ते हैं। ऑगी, तुम भी कोशिश करो!" },
          { who: 0, en: "Bat-dog mode ON! Quick echo: wall close by. Slow, faraway echo: open space!", hi: "चमगादड़-कुत्ता मोड चालू! जल्दी लौटी गूँज: दीवार पास। देर से, दूर से आई गूँज: खुली जगह!" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.4 } ],
        props: [ { id: "rock", x: 0.1 } ],
        cap: { en: "Woof to the left: a quick echo. Wall! Woof to the right: a long, faraway echo. The way out!", hi: "बाईं ओर भौं: फ़ौरन गूँज। दीवार! दाईं ओर भौं: लंबी, दूर की गूँज। यही है रास्ता!" },
        say: [ { who: 0, en: "Plus, my nose says: fresh air... and hot PAKORAS! Everybody, follow the wagging tail!", hi: "ऊपर से नाक कह रही है: ताज़ी हवा... और गरमा-गरम पकौड़े! सब हिलती पूँछ के पीछे चलो!" } ],
        fx: { en: "WOOF!", hi: "भौं!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.9, y: 0.12 } ],
        cap: { en: "Daylight! Sunshine! And right at the cave mouth... an actual pakoda stall!", hi: "उजाला! धूप! और गुफ़ा के मुँह पर... सच में पकौड़ों का ठेला!" },
        say: [
          { who: 0, en: "Three cheers for Auggie, the bat-dog! And a new rule: I charge the TORCH first.", hi: "चमगादड़-कुत्ते ऑगी के लिए तीन चीयर्स! और नया नियम: पहले टॉर्च चार्ज होगी, फिर लैपटॉप।" },
          { who: 1, en: "Bye, copycat! You were a friend all along! ...all along! ...all along!", hi: "टाटा, नक़लची! तुम तो दोस्त निकले! ...निकले! ...निकले!" }
        ]
      }
    ]
  },
  {
    id: 108,
    age: "6-10",
    category: "science",
    title: { en: "The Mega Lava Mess", hi: "मेगा लावा की गड़बड़" },
    blurb: { en: "Anaya's volcano looks like a sleepy potato. Gadbad's is MEGA. Guess which one floods the whole hall?", hi: "अनाया का ज्वालामुखी ऊँघता आलू लगता है, और गड़बड़ का है मेगा! अब बताओ, पूरा हॉल किसने झाग से भर दिया?" },
    moral: { en: "Baking soda and vinegar make fizzy gas. Measure carefully: bigger isn't always better!", hi: "बेकिंग सोडा और सिरका मिलकर गैस के बुलबुले बनाते हैं। नाप-तौलकर करो, बड़ा हमेशा बढ़िया नहीं होता!" },
    cover: {
      bg: "volcano",
      chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "trophy", x: 0.52 } ],
      fx: { en: "FIZZ!", hi: "फ़िज़्ज़!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "anaya", pose: "sit", mood: "sad", x: 0.3 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.52 } ],
        cap: { en: "Two days before the science fair. Anaya and Auggie stare at their clay volcano. It stares back.", hi: "साइंस मेले से दो दिन पहले। अनाया और ऑगी अपने मिट्टी के ज्वालामुखी को घूर रहे हैं। वो भी उन्हें घूर रहा है।" },
        say: [
          { who: 0, en: "Our volcano looks like a sleepy potato. It won't erupt. It'll just nap.", hi: "हमारा ज्वालामुखी तो ऊँघते आलू जैसा दिख रहा है। ये फटेगा नहीं, बस सो जाएगा।" },
          { who: 1, en: "A napping potato? Honestly, that's my kind of volcano.", hi: "सोने वाला आलू? सच कहूँ, ये तो मेरे टाइप का ज्वालामुखी है।" }
        ]
      },
      {
        bg: "volcano",
        chars: [ { id: "anaya", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Before anyone can ask, Nanu opens his fattest volcano book. Fact incoming!", hi: "किसी के पूछने से पहले ही नानू ने ज्वालामुखी वाली सबसे मोटी किताब खोल ली। विज्ञान की बात आ रही है!" },
        say: [
          { who: 2, en: "Deep down, rock gets so hot it melts: magma! When it bursts out, it's called lava!", hi: "धरती के बहुत अंदर चट्टान इतनी गरम होती है कि पिघल जाती है: मैग्मा! बाहर फूटे, तो लावा!" },
          { who: 0, en: "Real lava at school? Miss Ji would faint! We need a SAFE eruption.", hi: "स्कूल में असली लावा? मिस जी तो बेहोश हो जाएँगी! हमें सुरक्षित वाला विस्फोट चाहिए।" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.52 }, { id: "bottle", x: 0.62 } ],
        say: [
          { who: 1, en: "Kitchen lava! Pour vinegar on baking soda, and gas bubbles come foaming up. Watch!", hi: "रसोई वाला लावा बनाओ! बेकिंग सोडा में सिरका डालो, और देखो, गैस के बुलबुले झाग बनकर उफन पड़ेंगे!" },
          { who: 0, en: "It's bubbling like Dadi's dal! Wait... it smells like pickle. I'll pass.", hi: "ये तो दादी की दाल की तरह उबल रहा है! रुको... इसमें अचार जैसी महक है। रहने दो।" }
        ],
        fx: { en: "FIZZ!", hi: "फ़्स्स!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3 }, { id: "gadbad", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Science fair day! Anaya's little volcano sits next to something ENORMOUS, humming and wobbling.", hi: "साइंस मेले का दिन! अनाया के छोटे ज्वालामुखी के बगल में खड़ी है एक विशाल, भनभनाती, डगमगाती मशीन।" },
        say: [
          { who: 1, en: "Behold, my Mega Lava Machine! Bigger is better! What could possibly go wrong?", hi: "देखिए, मेरी मेगा लावा मशीन! जितनी बड़ी, उतनी बढ़िया! भला क्या गड़बड़ हो सकती है?" },
          { who: 0, en: "Uh-oh. Famous last words...", hi: "उफ़्फ़... अब तो पक्का गड़बड़ होगी!", kind: "think" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "gadbad", pose: "stand", mood: "scared", x: 0.2 }, { id: "anaya", pose: "stand", mood: "scared", x: 0.5 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        props: [ { id: "machine", x: 0.35 } ],
        cap: { en: "Vinegar pours onto baking soda, again and again. Foam everywhere! Gadbad shouts STOP, and it goes FASTER!", hi: "मशीन लगातार बेकिंग सोडा पर सिरका उड़ेल रही है। हर तरफ़ झाग! गड़बड़ ने 'रुको!' कहा, तो और तेज़ हो गई!" },
        say: [
          { who: 0, en: "Stop, machine! STOP! ...Why are you going faster? Sorry, sorry, SORRY, dear machine!", hi: "रुक जा, मशीन! रुक! ...तू और तेज़ क्यों हो गई? माफ़ कर दे, प्यारी मशीन!" },
          { who: 1, en: "The judges come in five minutes! Our little volcano is swimming in foam!", hi: "जज पाँच मिनट में आने वाले हैं! हमारा छोटा ज्वालामुखी झाग में तैर रहा है!" }
        ],
        fx: { en: "WHOOSH!", hi: "फ़ुर्र!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.35 }, { id: "gadbad", pose: "point", mood: "surprised", x: 0.78, flip: true } ],
        props: [ { id: "machine", x: 0.6 } ],
        say: [
          { who: 0, en: "Think, Auggie! The bubbles need BOTH soda and vinegar. Take one away...", hi: "सोच, ऑगी, सोच! बुलबुलों को सोडा और सिरका दोनों चाहिए। एक हटा दो, तो..." },
          { who: 1, en: "...and the fizzing stops! The red pipe is vinegar! Pull it, Auggie!", hi: "...तो झाग बंद! लाल पाइप सिरके की है! खींचो, ऑगी!", kind: "shout" }
        ],
        fx: { en: "YANK!", hi: "खींच!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "gadbad", pose: "cheer", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.7, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 0, en: "It stopped! Auggie, you genius! And I learned something: bigger isn't always better.", hi: "रुक गई! ऑगी, तुम तो जीनियस हो! और मैंने सीखा: बड़ा हमेशा बढ़िया नहीं होता।" },
          { who: 1, en: "No vinegar, no fizz! Simple science. Now... who's going to mop all this?", hi: "सिरका नहीं, तो झाग नहीं! सीधा-सादा विज्ञान। अब... ये पोछा कौन लगाएगा?" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "anaya", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "gadbad", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.35 }, { id: "rock", x: 0.65 } ],
        cap: { en: "Anaya invites Gadbad to share her table. One spoon of soda, one splash of vinegar: a perfect little eruption!", hi: "अनाया ने गड़बड़ को अपनी मेज़ पर बुला लिया। एक चम्मच सोडा, थोड़ा-सा सिरका: एकदम सधा हुआ छोटा विस्फोट!" },
        say: [
          { who: 0, en: "Best Teamwork trophy! Professor, next year let's build one together. A MEDIUM one.", hi: "बेस्ट टीमवर्क ट्रॉफ़ी! प्रोफ़ेसर, अगले साल मिलकर बनाएँगे। पर मीडियम साइज़ का!" },
          { who: 2, en: "Deal! Measure carefully, work together... and never trust a machine called 'mega'!", hi: "पक्का! नाप-तौलकर करो, मिलकर करो... और 'मेगा' नाम वाली मशीन पर कभी भरोसा मत करो!" }
        ]
      }
    ]
  },
  {
    id: 109,
    age: "6-10",
    category: "space",
    title: { en: "Astronaut Auggie's Big Moon Jump", hi: "अंतरिक्ष यात्री ऑगी की चाँद वाली छलाँग" },
    blurb: { en: "On the Moon, Auggie's woof vanishes and Zibbo's frisbee is stuck sky-high. Can a sofa-loving dog jump THAT high?", hi: "चाँद पर ऑगी की भौं ग़ायब, और ज़िब्बो की फ़्रिस्बी बहुत ऊपर अटकी! क्या सोफ़े का शौक़ीन ऑगी इतना ऊँचा कूद पाएगा?" },
    moral: { en: "The Moon pulls more gently than Earth. Try, and you might jump higher than you think!", hi: "चाँद का खिंचाव धरती से बहुत हल्का है। और कोशिश करो, तो तुम सोच से भी ऊँचा कूद सकते हो!" },
    cover: {
      bg: "moon",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "zibbo", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "planet", x: 0.15, y: 0.15 }, { id: "frisbee", x: 0.55, y: 0.2 } ],
      fx: { en: "WHEEE!", hi: "ऊऊऊ!" }
    },
    panels: [
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.52 } ],
        cap: { en: "Bedtime story: Nanu's Moon book, a warm blanket, heavy eyelids. That night, Auggie dreamed...", hi: "रात की कहानी: नानू की किताब, चाँद की बातें, और ऑगी की भारी होती पलकें। उस रात ऑगी ने सपना देखा..." },
        say: [
          { who: 1, en: "Fact before sleep: on the Moon, you'd weigh only one-sixth of what you weigh here!", hi: "सोने से पहले एक बात: चाँद पर तुम्हारा वज़न यहाँ के मुक़ाबले बस छठा हिस्सा होगा!" },
          { who: 0, en: "One-sixth... so I could eat six times more carrots... zzz...", hi: "छठा हिस्सा... मतलब छह गुना ज़्यादा गाजरें... ख़र्र...", kind: "whisper" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.4 } ],
        props: [ { id: "rocket", x: 0.82 }, { id: "planet", x: 0.15, y: 0.15 } ],
        cap: { en: "...he was Astronaut Auggie! Moon dust under his paws, and blue planet Earth hanging in the sky.", hi: "...कि रॉकेट से उतरा अंतरिक्ष यात्री ऑगी! पैरों के नीचे चाँद की धूल, और ऊपर आसमान में नीली धरती।" },
        say: [ { who: 0, en: "One small step for a dog, one giant sniff for dog-kind! Moon carrots, where are you?", hi: "एक कुत्ते का छोटा-सा क़दम, पूरी कुत्ता-जाति की बड़ी-सी सूँघ! चाँद वाली गाजरें कहाँ हो?" } ],
        fx: { en: "BOING!", hi: "धप्प!" },
        action: true
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "zibbo", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Zeep! Hello, Earth dog! I'm Zibbo. Why are you wearing a giant balloon?", hi: "ज़ीप! हैलो, धरती के कुत्ते! मैं ज़िब्बो। तुमने ये बड़ा-सा गुब्बारा क्यों पहना है?" },
          { who: 0, en: "It's a spacesuit! No air to breathe up here, so my suit carries my air.", hi: "ये स्पेससूट है! यहाँ साँस लेने को हवा ही नहीं, इसलिए मेरी हवा ये सूट लेकर चलता है।" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.3 }, { id: "zibbo", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Auggie tries a big, friendly WOOF... and nothing comes out. Not even a squeak!", hi: "ऑगी ने ज़ोरदार, प्यारी-सी भौं लगाई... और आवाज़ ही नहीं निकली। चूँ तक नहीं!" },
        say: [
          { who: 0, en: "My woof! Somebody stole my WOOF! Is this a Moon robbery?", hi: "मेरी भौं! किसी ने मेरी भौं चुरा ली! ये चाँद पर चोरी है क्या?", kind: "think" },
          { who: 1, en: "Ha! Sound rides on air. No air up here, so no ride! We chat by radio.", hi: "हा-हा! आवाज़ हवा की सवारी करती है। यहाँ हवा नहीं, तो सवारी नहीं! हम रेडियो पर बात करते हैं।" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "zibbo", pose: "stand", mood: "sad", x: 0.25 }, { id: "auggie", pose: "think", mood: "scared", x: 0.7, flip: true } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.15 }, { id: "rock", x: 0.5 } ],
        say: [
          { who: 0, en: "Zeep... my space frisbee is stuck way up on that crater's edge. Nobody ever helps me.", hi: "ज़ीप... मेरी स्पेस-फ़्रिस्बी वहाँ ऊपर अटकी है, उस बड़े गड्ढे के किनारे पर। कोई नहीं उतारता।" },
          { who: 1, en: "Up THERE? I can't even get onto the sofa without a run-up and a snack!", hi: "उतना ऊपर? मैं तो बिना दौड़ और बिना नाश्ते के सोफ़े पर भी नहीं चढ़ पाता!" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.52, y: 0.15 } ],
        say: [
          { who: 1, en: "But this is the Moon! Its pull, called gravity, is just one-sixth of Earth's. You're light!", hi: "पर ये चाँद है! यहाँ का खिंचाव, यानी गुरुत्वाकर्षण, धरती का बस छठा हिस्सा है। तुम यहाँ बहुत हल्के हो!" },
          { who: 0, en: "Light as a feather? Okay, Zibbo. I've never tried a jump this big... but I'll try!", hi: "पंख जितना हल्का? ठीक है, ज़िब्बो। इतनी बड़ी छलाँग कभी नहीं लगाई... पर कोशिश ज़रूर करूँगा!" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.45 } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.2 }, { id: "star", x: 0.85, y: 0.15 } ],
        cap: { en: "Auggie crouches, springs... and soars about six times higher than on Earth, then drifts down like a feather!", hi: "ऑगी झुका, उछला... और धरती से क़रीब छह गुना ऊँचा! फिर पंख की तरह धीरे-धीरे नीचे आया।" },
        say: [ { who: 0, en: "GOT IT! I'm flying! Well... floating! Well... whatever this is, it's AMAZING!", hi: "पकड़ ली! मैं उड़ रहा हूँ! मतलब... तैर रहा हूँ! जो भी है, कमाल है!", kind: "shout" } ],
        fx: { en: "WHEEE!", hi: "ऊऊऊ!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "mumma", pose: "sit", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.5 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Next morning, in the big bed...", hi: "अगली सुबह, बड़े बिस्तर पर..." },
        say: [
          { who: 0, en: "Mittsy, who invited a kangaroo into our bed? Auggie was hopping ALL night! Ha-ha-ha!", hi: "मिट्सी, हमारे बिस्तर में कंगारू किसने बुलाया? ऑगी पूरी रात उछलता रहा! हा-हा-हा!" },
          { who: 1, en: "I was on the Moon, rescuing Zibbo's frisbee! My pawprints will stay for ages. No wind!", hi: "मैं चाँद पर था, ज़िब्बो की फ़्रिस्बी उतार रहा था! मेरे पंजों के निशान वहाँ बरसों रहेंगे। हवा ही नहीं!" }
        ]
      }
    ]
  },
  {
    id: 110,
    age: "6-10",
    category: "space",
    title: { en: "Auggie's One-Night Planet Tour", hi: "ऑगी की एक रात की ग्रह-यात्रा" },
    blurb: { en: "Beach or hills? Auggie has a bigger idea: a planet! Zibbo's UFO is waiting. Which planet wins?", hi: "समुद्र या पहाड़? ऑगी का प्लान तो और बड़ा है: कोई दूसरा ग्रह! ज़िब्बो की उड़न-तश्तरी तैयार है। कौन-सा ग्रह जीतेगा?" },
    moral: { en: "Every planet is amazing, but Earth is our only home. Let's look after it!", hi: "हर ग्रह कमाल है, पर हमारा घर तो बस धरती है। चलो, इसका ख़याल रखें!" },
    cover: {
      bg: "space",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "ufo", x: 0.5, y: 0.25 }, { id: "planet", x: 0.15, y: 0.2 }, { id: "planet", x: 0.88, y: 0.7 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "mumma", pose: "sit", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "map", x: 0.5 } ],
        cap: { en: "Mumma is planning the next family holiday. She has a map, three pens, and a very long list.", hi: "मम्मा अगली फ़ैमिली छुट्टी का प्लान बना रही हैं। हाथ में नक़्शा, तीन पेन, और एक बहुत लंबी लिस्ट।" },
        say: [
          { who: 0, en: "Beach or hills, Auggie? Mittsy has changed his mind eleven times today!", hi: "समुद्र या पहाड़, ऑगी? मिट्सी आज ग्यारह बार अपना मन बदल चुके हैं!" },
          { who: 1, en: "Why not think BIGGER, Mumma? Like... another planet?", hi: "मम्मा, थोड़ा बड़ा सोचो ना! जैसे... कोई दूसरा ग्रह?" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "ufo", x: 0.5, y: 0.3 } ],
        cap: { en: "That night, Auggie dreamed a UFO landed right beside the big bed. Out popped Zibbo!", hi: "उस रात ऑगी ने सपना देखा: बड़े बिस्तर के ठीक बगल में उड़न-तश्तरी उतरी, और उसमें से निकला ज़िब्बो!" },
        say: [
          { who: 1, en: "Zeep! Grand Planet Tour: eight planets, one night, free space snacks! Hop in!", hi: "ज़ीप! ग्रहों की बड़ी सैर: आठ ग्रह, एक रात, मुफ़्त स्पेस-नाश्ता! चढ़ जाओ!" },
          { who: 0, en: "Wait! Mumma says never travel without a list. List: carrots, carrots, more carrots. Done!", hi: "रुको! मम्मा कहती हैं, बिना लिस्ट के सफ़र नहीं। लिस्ट: गाजर, गाजर, और गाजर। हो गया!" }
        ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.1, y: 0.15 }, { id: "planet", x: 0.5, y: 0.3 } ],
        say: [
          { who: 1, en: "Mercury hugs the Sun. But Venus is hottest: its thick air traps heat like a blanket!", hi: "बुध सूरज से सटा है। पर सबसे गरम शुक्र है: उसकी घनी हवा गर्मी कंबल की तरह दबाए रखती है!" },
          { who: 0, en: "A blanket in THAT heat? Snowy would faint! Next planet, please. Fast!", hi: "इतनी गर्मी में कंबल? स्नोवी तो बेहोश हो जाएगा! अगला ग्रह, प्लीज़। जल्दी!" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.3 } ],
        say: [
          { who: 1, en: "Mars, the red planet! Its dust is full of rust, the same stuff on old bicycles.", hi: "ये है मंगल, लाल ग्रह! इसकी धूल में जंग भरा है, वही जो पुरानी साइकिल पर लगता है।" },
          { who: 0, en: "A whole planet of red mud to roll in? Dreamy! ...Mumma would never let me home.", hi: "लोटने के लिए पूरा का पूरा लाल मिट्टी वाला ग्रह? वाह! ...पर मम्मा मुझे घर में घुसने नहीं देंगी।" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.3 } ],
        say: [
          { who: 1, en: "Jupiter, the biggest planet! No ground to stand on, and a storm bigger than Earth!", hi: "बृहस्पति, सबसे बड़ा ग्रह! खड़े होने को ज़मीन नहीं, और एक तूफ़ान जो पूरी धरती से भी बड़ा है!" },
          { who: 0, en: "No ground? Where would I DIG? Where would I NAP? Nope, nope, next!", hi: "ज़मीन ही नहीं? तो खोदूँगा कहाँ? सोऊँगा कहाँ? ना बाबा ना, अगला!" }
        ],
        fx: { en: "RUMBLE!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.3 }, { id: "star", x: 0.9, y: 0.12 } ],
        say: [
          { who: 1, en: "Saturn! Its rings are billions of chunks of ice and rock, whirling round and round.", hi: "शनि! इसके छल्ले बर्फ़ और चट्टान के अरबों टुकड़ों से बने हैं, जो गोल-गोल घूमते रहते हैं।" },
          { who: 0, en: "The biggest frisbee ever! But if I fetch it, who do I bring it back to?", hi: "अब तक की सबसे बड़ी फ़्रिस्बी! पर इसे पकड़कर लौटाऊँगा किसे?" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.25 }, { id: "planet", x: 0.9, y: 0.6 } ],
        say: [
          { who: 1, en: "Uranus rolls along lying on its side. And Neptune has the wildest winds of any planet!", hi: "यूरेनस तो पड़े-पड़े, एक करवट पर घूमता है! और नेपच्यून पर सबसे तूफ़ानी हवाएँ चलती हैं।" },
          { who: 0, en: "A planet that spins lying down? Finally, a planet that understands me!", hi: "लेटे-लेटे घूमने वाला ग्रह? आख़िरकार कोई तो मुझे समझता है!" }
        ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "map", x: 0.52 } ],
        cap: { en: "Morning. THUMP! Auggie lands on the big bed, with his answer ready.", hi: "सुबह-सुबह, धम्म! ऑगी बड़े बिस्तर पर, और साथ में उसका जवाब।" },
        say: [
          { who: 0, en: "Best holiday planet? EARTH! Air to sniff, lakes to swim, mud to roll in... and you!", hi: "छुट्टी के लिए सबसे अच्छा ग्रह? धरती! सूँघने को हवा, तैरने को झील, लोटने को मिट्टी... और आप!" },
          { who: 1, en: "Ha-ha-ha! Earth it is! The only planet we know with life, and with you on it.", hi: "हा-हा-हा! तो धरती ही पक्की! हम जितने ग्रह जानते हैं, उनमें अकेली जहाँ जीवन है... और तुम हो!" }
        ],
        fx: { en: "YAY!", hi: "याहू!" },
        action: true
      }
    ]
  }
);
