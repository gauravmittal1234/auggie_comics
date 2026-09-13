window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(
  {
    id: 89,
    age: "6-10",
    category: "home",
    title: { en: "Auggie Joins the Meeting", hi: "ऑगी की ऑफ़िस मीटिंग" },
    blurb: { en: "Papa's big laptop meeting goes wild when Auggie snores into the microphone and the charger goes missing.", hi: "पापा की बड़ी लैपटॉप मीटिंग में ऑगी माइक पर खर्राटे लेता है, और फिर चार्जर ही गायब हो जाता है!" },
    moral: { en: "Keep things in their place, and help each other when work gets tricky.", hi: "चीज़ें अपनी जगह रखो, और मुश्किल में एक-दूसरे की मदद करो।" },
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
        cap: { en: "Work-from-home Monday! Papa has a big laptop meeting, and Auggie is his office buddy.", hi: "वर्क-फ़्रॉम-होम वाला सोमवार! पापा की बड़ी लैपटॉप मीटिंग है, और ऑगी उनका ऑफ़िस-साथी है।" },
        say: [
          { who: 1, en: "Meeting at ten, Auggie. Office rules: no barking, no snoring!", hi: "दस बजे मीटिंग है, ऑगी। ऑफ़िस के नियम: न भौंकना, न खर्राटे!" },
          { who: 0, en: "Office buddy Auggie... reporting for nap duty.", hi: "ऑफ़िस-साथी ऑगी... नींद की ड्यूटी पर हाज़िर।", kind: "whisper" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.25 }, { id: "papa", pose: "sit", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "laptop", x: 0.5 } ],
        cap: { en: "Ten o'clock. Auggie's sleepy paw lands on the keyboard... and turns the microphone ON!", hi: "दस बजे। ऑगी का नींद भरा पंजा कीबोर्ड पर पड़ा... और माइक चालू हो गया!" },
        say: [ { who: 1, en: "Sorry, everyone! That's not thunder. That's my co-worker.", hi: "सॉरी सबको! ये बादल नहीं गरज रहे। ये मेरे साथी के खर्राटे हैं।" } ],
        fx: { en: "SNORE!", hi: "खर्र-खर्र!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "laptop", x: 0.52 } ],
        cap: { en: "Auggie wakes up and pushes his big nose right into the camera. The whole team giggles!", hi: "ऑगी जागा और अपनी बड़ी-सी नाक सीधे कैमरे में घुसा दी। पूरी टीम हँस पड़ी!" },
        say: [
          { who: 1, en: "Team, meet Auggie. Our new Chief Nap Officer!", hi: "टीम, मिलिए ऑगी से। हमारे नए चीफ़ नींद ऑफ़िसर!" },
          { who: 0, en: "Hello, team! My idea for today: more snack breaks.", hi: "नमस्ते, टीम! आज का मेरा आइडिया: ज़्यादा स्नैक ब्रेक।" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.2 }, { id: "papa", pose: "stand", mood: "scared", x: 0.5 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        props: [ { id: "laptop", x: 0.35, y: 0.6 } ],
        cap: { en: "Then the laptop beeps. Battery: five percent! And the charger is missing!", hi: "तभी लैपटॉप बीप करता है। बैटरी: पाँच प्रतिशत! और चार्जर गायब!" },
        say: [
          { who: 1, en: "Mottu! Have you seen my charger? The meeting isn't over!", hi: "मोटू! मेरा चार्जर देखा क्या? मीटिंग अभी ख़त्म नहीं हुई!" },
          { who: 2, en: "Mittsy, I saw it in the bedroom... somewhere!", hi: "मिट्सी, बेडरूम में कहीं देखा था... पर कहाँ?" }
        ],
        fx: { en: "BEEP!", hi: "बीप!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ],
        props: [ { id: "clock", x: 0.85, y: 0.2 } ],
        cap: { en: "Auggie knows Papa's smell best. The charger must smell of Papa's hands!", hi: "पापा की ख़ुशबू ऑगी से बेहतर कोई नहीं जानता। चार्जर में पापा के हाथों की महक होगी!" },
        say: [ { who: 0, en: "Sniff mode ON! Papa-smell... this way!", hi: "सूँघने वाला मोड चालू! पापा की महक... इस तरफ़!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.35 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Auggie! The charger was under YOUR blanket all along!", hi: "ऑगी! चार्जर तो तुम्हारे ही कंबल के नीचे था!" },
          { who: 0, en: "Oops... I used it as a pillow last night.", hi: "उफ़... कल रात मैंने इसे तकिया बना लिया था।", kind: "think" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.28 }, { id: "papa", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "laptop", x: 0.52 } ],
        cap: { en: "Auggie zooms back with the charger, just as the battery hits one percent!", hi: "ऑगी चार्जर लेकर दौड़ता हुआ लौटा, ठीक जब बैटरी एक प्रतिशत पर थी!" },
        say: [ { who: 1, en: "Saved! My Chief Nap Officer is also Chief Charger Finder!", hi: "बच गए! मेरा चीफ़ नींद ऑफ़िसर, चीफ़ चार्जर खोजी भी है!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.7, flip: true } ],
        props: [ { id: "bowl", x: 0.5 } ],
        say: [
          { who: 1, en: "Meeting over! Salary for my office buddy: one crunchy carrot.", hi: "मीटिंग ख़त्म! मेरे ऑफ़िस-साथी की तनख़्वाह: एक कुरकुरी गाजर।" },
          { who: 0, en: "Best job ever! Same time tomorrow, Papa?", hi: "सबसे बढ़िया नौकरी! कल फिर इसी टाइम, पापा?" }
        ]
      }
    ]
  },
  {
    id: 90,
    age: "6-10",
    category: "family",
    title: { en: "Café Auggie", hi: "कैफ़े ऑगी" },
    blurb: { en: "Mausi opens a café for one day, and waiter Auggie must remember every order without writing anything down.", hi: "मौसी एक दिन का कैफ़े खोलती हैं, और वेटर ऑगी को बिना लिखे हर ऑर्डर याद रखना है!" },
    moral: { en: "Everyone has a special talent. Use yours to help others!", hi: "हर किसी में कोई ख़ास हुनर होता है। उसे दूसरों की मदद में लगाओ!" },
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
        cap: { en: "Saturday! Mausi runs a little café for one day, and Auggie is her waiter.", hi: "शनिवार! मौसी एक दिन के लिए छोटा-सा कैफ़े चला रही हैं, और ऑगी उनका वेटर है।" },
        say: [
          { who: 1, en: "Welcome to Café Chottu! You take orders, I make drinks.", hi: "कैफ़े छोटू में स्वागत है! तुम ऑर्डर लो, मैं ड्रिंक बनाऊँगी।" },
          { who: 0, en: "Waiter Auggie, ready! Does the waiter get free cookies?", hi: "वेटर ऑगी तैयार! क्या वेटर को मुफ़्त कुकीज़ मिलेंगी?" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "mausi", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.15 }, { id: "apple", x: 0.52 } ],
        say: [
          { who: 0, en: "Those chocolate cookies smell SO good...", hi: "ये चॉकलेट कुकीज़ कितनी अच्छी महक रही हैं...", kind: "think" },
          { who: 1, en: "Chocolate is poison for dogs, Auggie! Have a crunchy apple slice instead.", hi: "चॉकलेट कुत्तों के लिए ज़हर है, ऑगी! ये लो, कुरकुरा सेब का टुकड़ा।" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "nanu", pose: "wave", mood: "happy", x: 0.2 }, { id: "rohan", pose: "point", mood: "laugh", x: 0.45 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.78, flip: true } ],
        cap: { en: "Suddenly, a big crowd arrives! Everyone orders at the same time.", hi: "अचानक बड़ी भीड़ आ गई! सब एक साथ ऑर्डर देने लगे।" },
        say: [
          { who: 0, en: "One masala chai, please, Auggie!", hi: "एक मसाला चाय, ऑगी बेटा!" },
          { who: 1, en: "Mango lassi for me! Extra cold!", hi: "मेरे लिए मैंगो लस्सी! एकदम ठंडी!" }
        ],
        fx: { en: "RUSH!", hi: "भीड़!" },
        action: true
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "Uh-oh, Mausi. Dogs can't write! Who ordered what?", hi: "अरे बाप रे, मौसी। कुत्ते लिख नहीं सकते! किसने क्या माँगा?" },
          { who: 1, en: "Ten orders and no notebook? My café is in trouble!", hi: "दस ऑर्डर और कोई कॉपी नहीं? मेरा कैफ़े तो गया!" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ],
        props: [ { id: "bottle", x: 0.75 } ],
        cap: { en: "Then Auggie remembers: he doesn't need paper. He has a nose that never forgets!", hi: "तभी ऑगी को याद आया: उसे काग़ज़ नहीं चाहिए। उसकी नाक कभी कुछ नहीं भूलती!" },
        say: [ { who: 0, en: "Chai smells of ginger and elaichi. Lassi smells of mango. Easy!", hi: "चाय में अदरक और इलायची की महक। लस्सी में आम की। आसान!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Auggie also remembers each customer's smell. Nanu smells of newspaper. Rohan smells of cricket balls!", hi: "ऑगी को हर ग्राहक की महक भी याद है। नानू में अख़बार की, रोहन में क्रिकेट बॉल की!" },
        say: [
          { who: 1, en: "Perfect chai! Auggie, you're the smartest waiter in Chamakpur.", hi: "एकदम बढ़िया चाय! ऑगी, तुम चमकपुर के सबसे होशियार वेटर हो।" },
          { who: 0, en: "Thank you, Nanu! My nose did all the homework.", hi: "थैंक यू, नानू! सारा होमवर्क मेरी नाक ने किया।" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "mumma", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Chottu, your café is a superhit! And look at your star waiter!", hi: "छोटू, तेरा कैफ़े तो सुपरहिट है! और देख तेरा स्टार वेटर!" },
          { who: 2, en: "Didi, all credit goes to Auggie's super nose!", hi: "दीदी, सारा क्रेडिट ऑगी की सुपर नाक को!" }
        ]
      },
      {
        bg: "cafe",
        chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.52 } ],
        cap: { en: "At closing time, everyone gets a treat. Even the waiter!", hi: "कैफ़े बंद होने पर सबको कुछ मीठा-नमकीन मिला। वेटर को भी!" },
        say: [ { who: 0, en: "Best tip ever: cool water and a carrot cookie!", hi: "सबसे अच्छी टिप: ठंडा पानी और गाजर वाली कुकी!" } ]
      }
    ]
  },
  {
    id: 91,
    age: "6-10",
    category: "home",
    title: { en: "Chef Auggie and Dadi's Kitchen", hi: "शेफ़ ऑगी और दादी की रसोई" },
    blurb: { en: "Auggie wants to cook a Doggy Thali, but Dadi must first teach him which foods are safe for dogs.", hi: "ऑगी डॉगी थाली बनाना चाहता है, पर पहले दादी उसे सिखाती हैं कि कुत्तों के लिए कौन-सा खाना सुरक्षित है।" },
    moral: { en: "Share only dog-safe food with pets: no chocolate, grapes, onions or sweets.", hi: "पालतू को सिर्फ़ सुरक्षित खाना दो: चॉकलेट, अंगूर, प्याज़ और मिठाई बिल्कुल नहीं।" },
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
        cap: { en: "Sunday in Dadi's kitchen. The whole house smells of spices and love.", hi: "रविवार, दादी की रसोई। पूरे घर में मसालों और प्यार की ख़ुशबू है।" },
        say: [
          { who: 0, en: "Dadi, today I want to be a chef, just like you!", hi: "दादी, आज मैं भी आपकी तरह शेफ़ बनूँगा!" },
          { who: 1, en: "Arre wah! Chef Auggie! What will you cook?", hi: "अरे वाह! शेफ़ ऑगी! क्या बनाओगे?" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "cake", x: 0.5 } ],
        say: [
          { who: 0, en: "My Doggy Thali: grapes, onion pakoda and one BIG laddoo!", hi: "मेरी डॉगी थाली: अंगूर, प्याज़ के पकोड़े और एक बड़ा-सा लड्डू!" },
          { who: 1, en: "Ruko, ruko! Stop right there, Chef!", hi: "रुको, रुको! वहीं रुक जाओ, शेफ़!", kind: "shout" }
        ],
        fx: { en: "STOP!", hi: "रुको!" },
        action: true
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Dadi sits down and explains gently, just like she once explained things to little Papa.", hi: "दादी बैठकर प्यार से समझाती हैं, जैसे कभी छोटे-से पापा को समझाती थीं।" },
        say: [
          { who: 1, en: "Grapes, onions, chocolate and sweets can make dogs very sick, beta.", hi: "बेटा, अंगूर, प्याज़, चॉकलेट और मिठाई से कुत्ते बहुत बीमार हो सकते हैं।" },
          { who: 0, en: "Even laddoo? My heart is breaking, Dadi...", hi: "लड्डू भी नहीं? मेरा दिल टूट गया, दादी..." }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "think", mood: "sad", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Ma, is Auggie trying to eat laddoos again?", hi: "माँ, क्या ऑगी फिर से लड्डू खाने की कोशिश कर रहा है?" },
          { who: 2, en: "No, Gaurav! Your Auggie wants to become a chef!", hi: "नहीं, गौरव! तेरा ऑगी तो शेफ़ बनना चाहता है!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "dadi", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5 }, { id: "banana", x: 0.58 } ],
        say: [
          { who: 1, en: "Dog-safe list: carrots, banana, seedless apple slices and plain boiled pumpkin.", hi: "कुत्तों के लिए सुरक्षित: गाजर, केला, बिना बीज के सेब के टुकड़े और सादा उबला कद्दू।" },
          { who: 0, en: "Crunchy carrot... soft banana... I'm hungry just listening!", hi: "कुरकुरी गाजर... नरम केला... सुनकर ही भूख लग गई!", kind: "think" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.3 }, { id: "dadi", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.5 }, { id: "bowl", x: 0.58 } ],
        cap: { en: "Dadi chops, Auggie arranges. Teamwork in the kitchen!", hi: "दादी काटती हैं, ऑगी सजाता है। रसोई में टीमवर्क!" },
        say: [ { who: 0, en: "Carrot here, banana there... a masterpiece!", hi: "गाजर यहाँ, केला वहाँ... क्या कलाकारी है!" } ],
        fx: { en: "CHOP!", hi: "खट-खट!" },
        action: true
      },
      {
        bg: "kitchen",
        chars: [ { id: "pinku", pose: "run", mood: "happy", x: 0.22 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.65, flip: true } ],
        props: [ { id: "bowl", x: 0.45 } ],
        say: [
          { who: 0, en: "Snort! I smell a feast! Is there any chocolate?", hi: "फ़्फ़! मुझे दावत की महक आई! चॉकलेट है क्या?" },
          { who: 1, en: "No chocolate, Pinku! Chef Auggie serves only dog-safe food.", hi: "चॉकलेट नहीं, पिंकू! शेफ़ ऑगी सिर्फ़ सुरक्षित खाना परोसता है।" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.25 }, { id: "pinku", pose: "sit", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "bowl", x: 0.38 } ],
        say: [
          { who: 2, en: "Chef Auggie, your thali is the tastiest in Chamakpur!", hi: "शेफ़ ऑगी, तुम्हारी थाली चमकपुर में सबसे स्वादिष्ट है!" },
          { who: 0, en: "Secret recipe: love, carrots and absolutely no chocolate!", hi: "गुप्त रेसिपी: प्यार, गाजर और चॉकलेट बिल्कुल नहीं!" }
        ]
      }
    ]
  },
  {
    id: 92,
    age: "6-10",
    category: "science",
    title: { en: "Kabir's Super-Sniffer Show-and-Tell", hi: "कबीर का सुपर-सूँघू शो-एंड-टेल" },
    blurb: { en: "Shy Kabir brings Auggie to school, and a missing tiffin box turns show-and-tell into a nose adventure.", hi: "शर्मीला कबीर ऑगी को स्कूल लाता है, और एक गुम टिफ़िन से शो-एंड-टेल बन जाता है नाक का रोमांच!" },
    moral: { en: "Being brave can start small: one friend, one fact, one word.", hi: "हिम्मत छोटे से शुरू होती है: एक दोस्त, एक बात, एक शब्द।" },
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
        cap: { en: "Tomorrow is show-and-tell at Kabir's school. Shy little Kabir wants to bring Auggie!", hi: "कल कबीर के स्कूल में शो-एंड-टेल है। शर्मीला छोटा कबीर ऑगी को ले जाना चाहता है!" },
        say: [
          { who: 0, en: "Nanu, what if I get scared and can't talk?", hi: "नानू, अगर मुझे डर लगा और मैं बोल ही न पाया तो?", kind: "whisper" },
          { who: 2, en: "Then let Auggie's nose do the talking. Here's a secret fact...", hi: "तो ऑगी की नाक को बोलने दो। सुनो, एक राज़ की बात..." }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "kabir", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "point", mood: "happy", x: 0.47 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "flower", x: 0.62 } ],
        say: [
          { who: 2, en: "Our noses have about six million smell sensors. Auggie's has about three hundred million!", hi: "हमारी नाक में क़रीब साठ लाख सूँघने वाले सेंसर हैं। ऑगी की नाक में क़रीब तीस करोड़!" },
          { who: 0, en: "Three hundred MILLION? That's a super-sniffer!", hi: "तीस करोड़? ये तो सुपर-सूँघू नाक है!" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "kabir", pose: "stand", mood: "scared", x: 0.35 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "Next morning, the whole class is staring. Kabir's words hide deep in his tummy.", hi: "अगली सुबह पूरी क्लास घूर रही है। कबीर के शब्द पेट में कहीं छिप गए।" },
        say: [
          { who: 0, en: "My mouth is stuck... like glue!", hi: "मेरा मुँह चिपक गया... जैसे गोंद लगी हो!", kind: "think" },
          { who: 1, en: "It's okay, Kabir. I'm right here with you.", hi: "कोई बात नहीं, कबीर। मैं यहीं तुम्हारे साथ हूँ।", kind: "whisper" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "anaya", pose: "stand", mood: "sad", x: 0.2 }, { id: "zoya", pose: "run", mood: "surprised", x: 0.47 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.78, flip: true } ],
        say: [
          { who: 0, en: "My tiffin box is missing! It has Mumma's aloo parathas!", hi: "मेरा टिफ़िन गायब है! उसमें मम्मी के आलू पराठे थे!" },
          { who: 1, en: "I ran around the whole school. It's nowhere!", hi: "मैंने पूरा स्कूल दौड़कर देख लिया। कहीं नहीं है!" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 }, { id: "kabir", pose: "run", mood: "surprised", x: 0.15 } ],
        cap: { en: "Auggie sniffs Anaya's schoolbag. Aloo, ghee and a little mango pickle. Got it!", hi: "ऑगी ने अनाया का बस्ता सूँघा। आलू, घी और थोड़ा आम का अचार। समझ गया!" },
        say: [ { who: 0, en: "My wet nose catches tiny smell bits. Follow me!", hi: "मेरी गीली नाक महक के छोटे-छोटे कण पकड़ती है। चलो मेरे पीछे!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "playground",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bush", x: 0.52 } ],
        cap: { en: "Behind the slide, under a bush, sits the lost tiffin box!", hi: "झूले के पीछे, एक झाड़ी के नीचे, वो रहा गुम टिफ़िन!" },
        say: [ { who: 1, en: "My tiffin! You found it, Auggie! Thank you!", hi: "मेरा टिफ़िन! तुमने ढूँढ लिया, ऑगी! थैंक यू!" } ],
        fx: { en: "FOUND IT!", hi: "मिल गया!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "kabir", pose: "point", mood: "determined", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.47 }, { id: "anaya", pose: "cheer", mood: "surprised", x: 0.8, flip: true } ],
        cap: { en: "And suddenly, Kabir's words come rushing out!", hi: "और अचानक कबीर के शब्द फ़र्राटे से बाहर आ गए!" },
        say: [
          { who: 0, en: "Auggie's nose has three hundred million smell sensors! Ours have only six million!", hi: "ऑगी की नाक में तीस करोड़ सेंसर हैं! हमारी में सिर्फ़ साठ लाख!", kind: "shout" },
          { who: 2, en: "No wonder he found my tiffin! Tell us more, Kabir!", hi: "तभी तो मेरा टिफ़िन मिला! और बताओ, कबीर!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "wave", mood: "laugh", x: 0.47 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.33 } ],
        say: [
          { who: 2, en: "I heard my shy Kabir became a science teacher today!", hi: "सुना है आज हमारा शर्मीला कबीर साइंस टीचर बन गया!" },
          { who: 0, en: "Auggie's nose did the sniffing. I did the talking!", hi: "सूँघने का काम ऑगी की नाक ने किया। बोलने का मैंने!" }
        ]
      }
    ]
  },
  {
    id: 93,
    age: "6-10",
    category: "home",
    title: { en: "Auggie's Piggy Bank Plan", hi: "ऑगी का गुल्लक प्लान" },
    blurb: { en: "Auggie dreams of a shiny blue frisbee, so he starts saving coins in Dadi's old gullak.", hi: "ऑगी को चमचमाती नीली फ़्रिस्बी चाहिए, तो वो दादी की पुरानी गुल्लक में सिक्के जमा करने लगता है।" },
    moral: { en: "Save a little every day, and share the big dream when it comes.", hi: "रोज़ थोड़ा-थोड़ा बचाओ, और सपना पूरा हो तो उसे बाँटो।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "moti", pose: "run", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "frisbee", x: 0.5, y: 0.3 } ],
      fx: { en: "CLINK!", hi: "खन्न!" }
    },
    panels: [
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "papa", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.12, y: 0.4 } ],
        say: [
          { who: 0, en: "Papa, look! A shiny blue frisbee! Can we buy it? Please, please!", hi: "पापा, देखो! चमचमाती नीली फ़्रिस्बी! ले लें? प्लीज़, प्लीज़!" },
          { who: 1, en: "It costs two hundred rupees, champ. How about you save for it?", hi: "ये दो सौ रुपये की है, चैंप। क्यों न तुम ख़ुद इसके लिए बचत करो?" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Here's my old clay gullak. Little Gaurav saved in this very one!", hi: "ये लो मेरी पुरानी मिट्टी की गुल्लक। छोटा गौरव भी इसी में बचत करता था!" },
          { who: 0, en: "Twenty coins of ten rupees make two hundred. Let's go!", hi: "दस-दस के बीस सिक्के मिलकर दो सौ बनते हैं। चलो शुरू करें!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.5 } ],
        cap: { en: "Auggie becomes Chamakpur's busiest helper. Newspaper for Nanu, sabzi bag for Dadi, slippers for Mumma!", hi: "ऑगी बन गया चमकपुर का सबसे व्यस्त मददगार। नानू का अख़बार, दादी का सब्ज़ी का थैला, मम्मा की चप्पल!" },
        say: [ { who: 1, en: "Newspaper, right on time! Ten rupees for Mr Helper.", hi: "अख़बार, बिल्कुल टाइम पर! मिस्टर मददगार के लिए दस रुपये।" } ],
        fx: { en: "CLINK!", hi: "खन्न!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "pinku", pose: "stand", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.7, flip: true } ],
        say: [
          { who: 0, en: "Snort! Why wait? Spend it ALL on squeaky toys today!", hi: "फ़्फ़! इंतज़ार क्यों? आज ही सारे पैसे चूँ-चूँ खिलौनों पर उड़ा दो!" },
          { who: 1, en: "Five little toys now... or my dream frisbee later?", hi: "अभी पाँच छोटे खिलौने... या बाद में मेरी सपनों वाली फ़्रिस्बी?", kind: "think" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.3 }, { id: "auggie", pose: "sit", mood: "determined", x: 0.7, flip: true } ],
        cap: { en: "Auggie decides to wait. Every day, one more coin goes clink.", hi: "ऑगी ने इंतज़ार करने का फ़ैसला किया। हर दिन एक और सिक्का — खन्न!" },
        say: [
          { who: 0, en: "I'm so proud of you! Waiting for a big dream is hard.", hi: "मुझे तुम पर बहुत गर्व है! बड़े सपने का इंतज़ार आसान नहीं होता।" },
          { who: 1, en: "Hard, Mumma... but my frisbee is worth it!", hi: "मुश्किल है, मम्मा... पर मेरी फ़्रिस्बी इसके लायक है!" }
        ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.45 } ],
        cap: { en: "One month later, Auggie tips out the gullak and counts every coin.", hi: "एक महीने बाद ऑगी ने गुल्लक खाली की और एक-एक सिक्का गिना।" },
        say: [ { who: 0, en: "Eighteen, nineteen... TWENTY! Two hundred rupees, all mine!", hi: "अठारह, उन्नीस... बीस! पूरे दो सौ रुपये, सब मेरे!", kind: "shout" } ],
        fx: { en: "YAHOO!", hi: "याहू!" },
        action: true
      },
      {
        bg: "market",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.4 } ],
        say: [
          { who: 1, en: "You saved every rupee yourself, champ. That makes it extra special.", hi: "हर रुपया तुमने ख़ुद बचाया, चैंप। इसलिए ये फ़्रिस्बी और भी ख़ास है।" },
          { who: 0, en: "Best frisbee ever, because I earned it myself!", hi: "दुनिया की सबसे अच्छी फ़्रिस्बी, क्योंकि मैंने ख़ुद कमाई है!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.28 }, { id: "moti", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.25 } ],
        say: [
          { who: 1, en: "Your new frisbee? You'll let me play too?", hi: "तेरी नई फ़्रिस्बी? मुझे भी खेलने देगा?" },
          { who: 0, en: "Of course, Moti! Saving makes dreams. Sharing makes them bigger!", hi: "बिल्कुल, मोती! बचत से सपने बनते हैं। बाँटने से बड़े हो जाते हैं!" }
        ]
      }
    ]
  },
  {
    id: 94,
    age: "6-10",
    category: "family",
    title: { en: "Mausi's Selfie School", hi: "मौसी का सेल्फ़ी स्कूल" },
    blurb: { en: "Mausi teaches Auggie to take the perfect selfie, but the photos keep coming out dark and blobby.", hi: "मौसी ऑगी को परफ़ेक्ट सेल्फ़ी सिखाती हैं, पर हर फ़ोटो में चेहरे काले धब्बे बन जाते हैं!" },
    moral: { en: "Good photos need good light, so let the light shine on the faces.", hi: "अच्छी फ़ोटो के लिए रोशनी चाहिए, इसलिए रोशनी चेहरे पर पड़ने दो।" },
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
        cap: { en: "Evening at Chamakpur lake. Mausi wants the perfect photo with Auggie for her new album.", hi: "चमकपुर झील पर शाम। मौसी को अपने नए एल्बम के लिए ऑगी के साथ एकदम परफ़ेक्ट फ़ोटो चाहिए।" },
        say: [
          { who: 1, en: "Welcome to Selfie School! Lesson one: smile at the camera.", hi: "सेल्फ़ी स्कूल में स्वागत है! पहला सबक: कैमरे की तरफ़ मुस्कुराओ।" },
          { who: 0, en: "Ready, Mausi! Can I lick the camera first?", hi: "तैयार हूँ, मौसी! पहले कैमरा चाट लूँ?" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "laugh", x: 0.35 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.53, y: 0.5 } ],
        say: [ { who: 1, en: "Eww, Auggie! Rule number one: never lick the lens!", hi: "छी, ऑगी! पहला नियम: लेंस कभी मत चाटो!", kind: "shout" } ],
        fx: { en: "SLURP!", hi: "सपड़!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mausi", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.15 }, { id: "camera", x: 0.55, y: 0.55 } ],
        cap: { en: "Click! Click! But every photo looks the same...", hi: "क्लिक! क्लिक! पर हर फ़ोटो एक जैसी..." },
        say: [
          { who: 1, en: "What? Our faces look like two dark blobs!", hi: "ये क्या? हमारे चेहरे दो काले धब्बे लग रहे हैं!" },
          { who: 0, en: "Did the camera switch off our lights?", hi: "क्या कैमरे ने हमारी बत्ती बुझा दी?", kind: "think" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "mausi", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.47 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.08, y: 0.12 } ],
        cap: { en: "Nanu walks by on his evening walk and peeks at the photos.", hi: "शाम की सैर पर निकले नानू रुककर फ़ोटो देखते हैं।" },
        say: [
          { who: 2, en: "Shambhavi beta, the sun is behind you. So your faces are in shadow!", hi: "शांभवी बेटा, सूरज तुम्हारे पीछे है। इसलिए चेहरों पर परछाईं है!" },
          { who: 0, en: "Oh! So the light must fall on our faces?", hi: "अच्छा! मतलब रोशनी हमारे चेहरों पर पड़नी चाहिए?" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.5 } ],
        say: [
          { who: 1, en: "A camera catches light bouncing off things. No light on face, no face in photo!", hi: "कैमरा चीज़ों से टकराकर लौटी रोशनी पकड़ता है। चेहरे पर रोशनी नहीं, तो फ़ोटो में चेहरा नहीं!" },
          { who: 0, en: "So light is the camera's food!", hi: "मतलब रोशनी कैमरे का खाना है!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.68, flip: true } ],
        props: [ { id: "camera", x: 0.52, y: 0.45 }, { id: "sun", x: 0.12, y: 0.12 } ],
        cap: { en: "They turn around. Now the golden sun shines right on their faces.", hi: "दोनों घूम गए। अब सुनहरा सूरज सीधे उनके चेहरों पर चमक रहा है।" },
        say: [
          { who: 1, en: "Sun in front of us! Everybody say 'carrot'!", hi: "सूरज हमारे सामने! सब बोलो 'गाजर'!" },
          { who: 0, en: "CARROT!", hi: "गाजर!", kind: "shout" }
        ],
        fx: { en: "CLICK!", hi: "क्लिक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "mumma", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.47 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.65, y: 0.5 } ],
        say: [
          { who: 0, en: "Chottu, send me that photo! It's my new phone wallpaper!", hi: "छोटू, वो फ़ोटो मुझे भेज! वो मेरा नया फ़ोन वॉलपेपर है!" },
          { who: 2, en: "Didi, meet my star student. He only licked the lens once!", hi: "दीदी, मिलो मेरे स्टार स्टूडेंट से। लेंस बस एक बार चाटा!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.25 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.55, flip: true }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "camera", x: 0.4, y: 0.5 } ],
        cap: { en: "Now Auggie is the photographer. He checks the light first, just like Nanu taught.", hi: "अब ऑगी फ़ोटोग्राफ़र है। नानू के सिखाए जैसे, पहले वो रोशनी देखता है।" },
        say: [
          { who: 0, en: "Sun on your faces, big smiles... Photographer Auggie clicks!", hi: "चेहरों पर धूप, बड़ी मुस्कान... फ़ोटोग्राफ़र ऑगी का क्लिक!" },
          { who: 2, en: "Perfect! Tomorrow's lesson: not photographing your own nose!", hi: "परफ़ेक्ट! कल का सबक: अपनी ही नाक की फ़ोटो न खींचना!" }
        ]
      }
    ]
  },
  {
    id: 95,
    age: "6-10",
    category: "science",
    title: { en: "Why Does Auggie Pant?", hi: "ऑगी हाँफ़ता क्यों है?" },
    blurb: { en: "On the hottest day of May, Mumma worries about Auggie's fast breathing, until Nanu reveals a dog's secret air conditioner.", hi: "मई की सबसे गर्म दोपहर, ऑगी की तेज़ साँसों से मम्मा परेशान हैं, फिर नानू बताते हैं कुत्ते का छिपा एसी!" },
    moral: { en: "On hot days, give pets fresh water, shade and cool evening walks.", hi: "गर्मी में पालतू को ताज़ा पानी, छाँव और शाम की ठंडी सैर दो।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "sit", mood: "happy", x: 0.7, flip: true } ],
      props: [ { id: "sun", x: 0.85, y: 0.12 }, { id: "bowl", x: 0.5 } ],
      fx: { en: "PANT!", hi: "हाँफ़-हाँफ़!" }
    },
    panels: [
      {
        bg: "city",
        chars: [ { id: "snowy", pose: "stand", mood: "sad", x: 0.25 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 } ],
        cap: { en: "May in Chamakpur. So hot that even the crows want umbrellas! Snowy the husky has come visiting.", hi: "चमकपुर में मई। इतनी गर्मी कि कौवे भी छतरी ढूँढ रहे हैं! स्नोवी हस्की मिलने आया है।" },
        say: [
          { who: 0, en: "Aaoooo! Auggie, your city is an oven! I'm melting!", hi: "आऊँऊँ! ऑगी, तुम्हारा शहर तो तंदूर है! मैं पिघल रहा हूँ!" },
          { who: 1, en: "Welcome, Snowy! Come inside, quick!", hi: "स्वागत है, स्नोवी! जल्दी अंदर आओ!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "mumma", pose: "stand", mood: "scared", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.47 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Mittsy! Auggie's tongue is out and he's breathing so fast. Is he sick?", hi: "मिट्सी! ऑगी की जीभ बाहर है और वो इतनी तेज़ साँस ले रहा है। बीमार है क्या?" },
          { who: 2, en: "Don't worry, Mottu. Let's ask Nanu. He'll know!", hi: "फ़िक्र मत करो, मोटू। नानू से पूछते हैं। उन्हें पता होगा!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Dogs don't sweat all over like us. They sweat a little, only from their paw pads.", hi: "कुत्तों को हमारी तरह पूरे शरीर पर पसीना नहीं आता। बस पंजों की गद्दियों से थोड़ा-सा।" },
          { who: 0, en: "No sweaty armpits for me? Lucky!", hi: "मतलब मेरी बगलों में पसीना नहीं? मज़े हैं!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.22 }, { id: "snowy", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        say: [
          { who: 2, en: "So dogs pant! Water dries off the tongue and carries the heat away.", hi: "इसलिए कुत्ते हाँफ़ते हैं! जीभ से पानी सूखता है और गर्मी साथ ले जाता है।" },
          { who: 1, en: "So my tongue is my air conditioner?", hi: "मतलब मेरी जीभ ही मेरा एसी है?" }
        ],
        fx: { en: "PANT!", hi: "हाँफ़-हाँफ़!" },
        action: true
      },
      {
        bg: "city",
        chars: [ { id: "rohan", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "nanu", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 } ],
        cap: { en: "Rohan runs up with his bat. He wants a cricket match... right now, at noon!", hi: "रोहन बल्ला लेकर दौड़ा आया। उसे क्रिकेट खेलना है... अभी, भरी दोपहर में!" },
        say: [
          { who: 2, en: "Wait! Touch the road first. Hot roads can burn soft paws.", hi: "रुको! पहले सड़क छूकर देखो। गर्म सड़क नरम पंजे जला सकती है।" },
          { who: 0, en: "Ouch! It's like a hot tawa! No noon walks!", hi: "आउच! ये तो गरम तवे जैसी है! दोपहर में सैर नहीं!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "snowy", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.5 }, { id: "bowl", x: 0.12 }, { id: "puddle", x: 0.52 } ],
        cap: { en: "Dadi and Mumma set up a shady corner: fresh water, a wet towel and a tub of cool water!", hi: "दादी और मम्मा ने छाँव वाला कोना बनाया: ताज़ा पानी, गीला तौलिया और ठंडे पानी का टब!" },
        say: [ { who: 1, en: "Now THIS is the mountains feeling!", hi: "अब आया पहाड़ों वाला मज़ा!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "run", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.5 }, { id: "snowy", pose: "run", mood: "happy", x: 0.8 } ],
        props: [ { id: "ball", x: 0.35, y: 0.4 } ],
        cap: { en: "At sunset, the road cools down. Time for evening cricket!", hi: "सूरज ढला तो सड़क ठंडी हो गई। अब शाम का क्रिकेट!" },
        say: [ { who: 2, en: "Aaoooo! Now THIS is walking weather!", hi: "आऊँऊँ! अब है असली घूमने वाला मौसम!" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "bowl", x: 0.5 } ],
        say: [
          { who: 0, en: "Shade, fresh water and evening walks. My hot-day rules!", hi: "छाँव, ताज़ा पानी और शाम की सैर। गर्मी के मेरे नियम!" },
          { who: 1, en: "And a panting tongue: nature's own little cooler!", hi: "और हाँफ़ती जीभ: क़ुदरत का अपना छोटा-सा कूलर!" }
        ]
      }
    ]
  },
  {
    id: 96,
    age: "6-10",
    category: "science",
    title: { en: "The Squeal Nobody Heard", hi: "वो आवाज़ जो किसी ने नहीं सुनी" },
    blurb: { en: "At midnight every dog in Chamakpur starts howling at a sound no human can hear.", hi: "आधी रात को चमकपुर के सारे कुत्ते एक ऐसी आवाज़ पर हुआँ-हुआँ करने लगते हैं जो इंसानों को सुनाई ही नहीं देती!" },
    moral: { en: "Dogs hear sounds we cannot, so be gentle with noise around pets.", hi: "कुत्ते वो आवाज़ें भी सुनते हैं जो हम नहीं सुनते, इसलिए उनके पास शोर कम करो।" },
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
        cap: { en: "Midnight in Chamakpur. Suddenly, every dog in the colony starts howling!", hi: "चमकपुर में आधी रात। अचानक कॉलोनी के सारे कुत्ते हुआँ-हुआँ करने लगे!" },
        say: [
          { who: 0, en: "Ow, my ears! What is that terrible squeal?", hi: "आउच, मेरे कान! ये कैसी भयानक चीं-चीं है?" },
          { who: 1, en: "Every dog in every lane can hear it!", hi: "हर गली का हर कुत्ता इसे सुन रहा है!" }
        ],
        fx: { en: "AWOOO!", hi: "आऊँऊँ!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "papa", pose: "sit", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "think", mood: "scared", x: 0.5 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Squeal? Auggie, I hear nothing. Only you!", hi: "चीं-चीं? ऑगी, मुझे तो कुछ नहीं सुनाई दे रहा। बस तुम!" },
          { who: 2, en: "Mittsy, it's so quiet. Why is he so upset?", hi: "मिट्सी, इतना सन्नाटा है। फिर ये इतना परेशान क्यों है?" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Nanu is staying over. He puts on his glasses, even at midnight.", hi: "नानू आज यहीं रुके हैं। आधी रात को भी उन्होंने चश्मा पहन लिया।" },
        say: [
          { who: 1, en: "Sound is air shaking. Very fast shakes make very high sounds.", hi: "आवाज़ मतलब हवा का काँपना। बहुत तेज़ काँपन से बहुत पतली, ऊँची आवाज़ बनती है।" },
          { who: 1, en: "Dogs hear high sounds that are too high for our ears!", hi: "कुत्ते वो ऊँची आवाज़ें सुनते हैं जो हमारे कानों तक पहुँचती ही नहीं!" }
        ]
      },
      {
        bg: "citynight",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35 }, { id: "papa", pose: "run", mood: "surprised", x: 0.1 } ],
        props: [ { id: "house", x: 0.8 } ],
        cap: { en: "Auggie turns his ears like two radar dishes and follows the squeal.", hi: "ऑगी ने दोनों कान रडार की तरह घुमाए और आवाज़ के पीछे चल पड़ा।" },
        say: [
          { who: 0, en: "My ears say... that way! Next door!", hi: "मेरे कान कहते हैं... उस तरफ़! पड़ोस में!" },
          { who: 1, en: "Professor Gadbad's workshop? Of course!", hi: "प्रोफ़ेसर गड़बड़ की वर्कशॉप? और कहाँ!" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "stand", mood: "angry", x: 0.25 }, { id: "gadbad", pose: "blast", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 1, en: "Hello, hello! Meet my Mosquito Chaser! Its sound is too high for anyone to hear!", hi: "हैलो, हैलो! मिलो मेरे मच्छर-भगाऊ से! इसकी आवाज़ इतनी ऊँची है कि कोई सुन ही नहीं सकता!" },
          { who: 0, en: "Anyone? Professor, EVERY dog can hear it!", hi: "कोई नहीं? प्रोफ़ेसर, हर कुत्ता इसे सुन रहा है!", kind: "shout" }
        ]
      },
      {
        bg: "lab",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.25 }, { id: "gadbad", pose: "stand", mood: "sad", x: 0.75, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 1, en: "Oh no! I forgot dogs have super ears. So sorry, dear dogs!", hi: "अरे नहीं! मैं भूल गया कि कुत्तों के कान सुपर होते हैं। माफ़ करना, प्यारे कुत्तों!" },
          { who: 0, en: "Thank you, Professor. Now my ears can sleep!", hi: "थैंक यू, प्रोफ़ेसर। अब मेरे कान भी सो सकते हैं!" }
        ],
        fx: { en: "PHEW!", hi: "उफ़्फ़!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "papa", pose: "stand", mood: "happy", x: 0.2 }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.45 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Next day, Gadbad turns his gadget into a gentle, quiet dog whistle for Papa.", hi: "अगले दिन गड़बड़ ने अपने गैजेट को पापा के लिए हल्की, धीमी डॉग-सीटी बना दिया।" },
        say: [
          { who: 1, en: "I heard nothing! How did Auggie hear it from the lake?", hi: "मुझे कुछ नहीं सुनाई दिया! ऑगी ने झील से कैसे सुन लिया?" },
          { who: 2, en: "Coming, Papa! Loud and clear!", hi: "आया, पापा! एकदम साफ़ सुनाई दिया!" }
        ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Humans hear up to twenty thousand shakes a second. Dogs hear over forty thousand!", hi: "इंसान एक सेकंड में बीस हज़ार काँपन तक सुनते हैं। कुत्ते चालीस हज़ार से भी ज़्यादा!" },
          { who: 0, en: "That's how I hear the fridge door from my bed!", hi: "तभी तो मैं बिस्तर से फ़्रिज का दरवाज़ा खुलना सुन लेता हूँ!" }
        ]
      }
    ]
  },
  {
    id: 97,
    age: "6-10",
    category: "science",
    title: { en: "The Ball Auggie Couldn't See", hi: "वो गेंद जो ऑगी को दिखी नहीं" },
    blurb: { en: "Fielding champion Auggie loses a bright red ball in green grass, and Nanu explains the colours dogs really see.", hi: "फ़ील्डिंग का चैंपियन ऑगी हरी घास में लाल गेंद ढूँढ ही नहीं पाता, तब नानू बताते हैं कि कुत्तों को कौन-से रंग दिखते हैं।" },
    moral: { en: "Friends see the world differently, so play in ways that work for everyone.", hi: "हर दोस्त दुनिया अलग तरह से देखता है, इसलिए ऐसे खेलो कि सबको मज़ा आए।" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "rohan", pose: "cheer", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "ball", x: 0.52, y: 0.3 } ],
      fx: { en: "CATCH!", hi: "पकड़ा!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "blast", mood: "determined", x: 0.25 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.3 } ],
        cap: { en: "Sunday cricket! Rohan bats, and Auggie is the best fielder in Chamakpur.", hi: "रविवार का क्रिकेट! रोहन बैटिंग कर रहा है, और ऑगी चमकपुर का सबसे अच्छा फ़ील्डर है।" },
        say: [ { who: 0, en: "Ready, Auggie? This one's going far!", hi: "तैयार, ऑगी? ये वाली दूर जाएगी!" } ],
        fx: { en: "THWACK!", hi: "ठक्क!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "rohan", pose: "point", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "bush", x: 0.12 }, { id: "ball", x: 0.5, y: 0.9 } ],
        say: [
          { who: 0, en: "Where did it go? I only see grass!", hi: "कहाँ गई? मुझे तो बस घास दिख रही है!" },
          { who: 1, en: "It's right there! Bright red, on green grass!", hi: "वो रही! हरी घास पर चमकीली लाल गेंद!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "zoya", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "think", mood: "sad", x: 0.55, flip: true } ],
        props: [ { id: "ball", x: 0.78, y: 0.9 } ],
        say: [
          { who: 1, en: "Bright red? It looks like a dull brown blob to me...", hi: "चमकीली लाल? मुझे तो बस फीका भूरा-सा धब्बा दिख रहा है...", kind: "think" },
          { who: 0, en: "Auggie's eyes are big as mangoes. How can he miss it?", hi: "ऑगी की आँखें तो आम जितनी बड़ी हैं। फिर भी गेंद नहीं दिखी?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Nanu, on his morning walk, has seen everything.", hi: "सुबह की सैर पर निकले नानू ने सब देख लिया था।" },
        say: [
          { who: 1, en: "Our eyes have three kinds of colour cells. Dogs have only two.", hi: "हमारी आँखों में तीन तरह की रंग पहचानने वाली कोशिकाएँ हैं। कुत्तों में सिर्फ़ दो।" },
          { who: 0, en: "Only two? Then what colours do I see?", hi: "सिर्फ़ दो? फिर मुझे कौन-से रंग दिखते हैं?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "flower", x: 0.65 } ],
        say: [
          { who: 2, en: "Mostly blues and yellows! Red and green look dull and brownish to dogs.", hi: "ज़्यादातर नीला और पीला! लाल और हरा कुत्तों को फीके, भूरे-से दिखते हैं।" },
          { who: 0, en: "So a red ball on green grass is hide-and-seek for Auggie!", hi: "मतलब हरी घास पर लाल गेंद, ऑगी के लिए छुपन-छुपाई है!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4 } ],
        props: [ { id: "ball", x: 0.75, y: 0.9 }, { id: "bush", x: 0.9 } ],
        say: [ { who: 0, en: "No problem! When my eyes can't find it, my nose can!", hi: "कोई बात नहीं! जहाँ आँखें हारें, वहाँ नाक जीते!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "anaya", pose: "wave", mood: "happy", x: 0.25 }, { id: "auggie", pose: "cheer", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "ball", x: 0.45, y: 0.5 }, { id: "frisbee", x: 0.12, y: 0.3 } ],
        say: [
          { who: 0, en: "I painted a ball BLUE and brought a yellow frisbee, just for you!", hi: "मैंने एक गेंद नीली रंगी है और पीली फ़्रिस्बी लाई हूँ, सिर्फ़ तुम्हारे लिए!" },
          { who: 1, en: "Wow! Blue shines like a star for me!", hi: "वाह! नीला तो मुझे तारे जैसा चमकता दिखता है!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.6, flip: true } ],
        props: [ { id: "ball", x: 0.62, y: 0.2 } ],
        say: [
          { who: 0, en: "OUT! Auggie caught it in one jump!", hi: "आउट! ऑगी ने एक ही छलाँग में पकड़ ली!", kind: "shout" },
          { who: 1, en: "Blue ball, yellow frisbee: my new favourite colours!", hi: "नीली गेंद, पीली फ़्रिस्बी: मेरे नए पसंदीदा रंग!" }
        ],
        fx: { en: "CATCH!", hi: "पकड़ा!" },
        action: true
      }
    ]
  },
  {
    id: 98,
    age: "6-10",
    category: "nature",
    title: { en: "Auggie the Lake Lifeguard", hi: "ऑगी, झील का लाइफ़गार्ड" },
    blurb: { en: "Kabir's ball floats away on the lake, and Pinku is sure big, heavy Auggie will sink like a rock.", hi: "कबीर की गेंद झील में बह जाती है, और पिंकू को पक्का यक़ीन है कि भारी-भरकम ऑगी पत्थर की तरह डूब जाएगा!" },
    moral: { en: "Water helps us float, but always swim safely with a grown-up nearby.", hi: "पानी हमें तैरने में मदद करता है, पर हमेशा बड़ों के साथ ही तैरो।" },
    cover: {
      bg: "river",
      chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.4 }, { id: "kabir", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
      props: [ { id: "ball", x: 0.15, y: 0.75 }, { id: "boat", x: 0.6, y: 0.7 } ],
      fx: { en: "SPLASH!", hi: "छपाक!" }
    },
    panels: [
      {
        bg: "river",
        chars: [ { id: "mumma", pose: "point", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Picnic at Chamakpur lake! Papa, Mumma, Nanu, Kabir... and one very excited Labrador.", hi: "चमकपुर झील पर पिकनिक! पापा, मम्मा, नानू, कबीर... और एक बहुत उछलता लैब्राडोर।" },
        say: [
          { who: 0, en: "Mittsy, look at Auggie's face. He's dreaming of water!", hi: "मिट्सी, ऑगी का चेहरा देखो। इसे बस पानी दिख रहा है!" },
          { who: 2, en: "Relax, Baby. First, his bright orange life jacket!", hi: "आराम से, बेबी। पहले इसकी चमकीली नारंगी लाइफ़ जैकेट!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "kabir", pose: "point", mood: "scared", x: 0.25 }, { id: "papa", pose: "stand", mood: "determined", x: 0.7, flip: true } ],
        props: [ { id: "ball", x: 0.5, y: 0.8 } ],
        say: [
          { who: 0, en: "My ball! It fell in and it's floating away!", hi: "मेरी गेंद! पानी में गिर गई और बह रही है!", kind: "shout" },
          { who: 1, en: "Stay on the shore, Kabir! Grown-ups and Auggie will help.", hi: "किनारे पर ही रहो, कबीर! बड़े और ऑगी मदद करेंगे।" }
        ],
        fx: { en: "PLOP!", hi: "टप्प!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "think", mood: "scared", x: 0.7, flip: true } ],
        say: [
          { who: 0, en: "Snort! Auggie is too big and heavy. He'll sink like a rock!", hi: "फ़्फ़! ऑगी बहुत बड़ा और भारी है। पत्थर की तरह डूब जाएगा!" },
          { who: 1, en: "Will I? I'm thirty kilos of muscle... and parathas.", hi: "सच में? मैं तीस किलो की मांसपेशियाँ हूँ... और पराठे।", kind: "think" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "kabir", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        say: [
          { who: 2, en: "Water pushes UP on everything in it. That push is called buoyancy.", hi: "पानी अपने अंदर की हर चीज़ को ऊपर धकेलता है। इस धक्के को उत्प्लावन बल कहते हैं।" },
          { who: 0, en: "Even on big, heavy Auggie?", hi: "बड़े, भारी ऑगी को भी?" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "wave", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Yes! His lungs are full of air, like balloons. And his toes are webbed, like paddles!", hi: "हाँ! उसके फेफड़ों में हवा भरी है, गुब्बारों जैसी। और उंगलियों के बीच झिल्ली है, चप्पू जैसी!" },
          { who: 0, en: "Webbed toes? So I'm a little bit duck!", hi: "झिल्ली वाले पंजे? मतलब मैं थोड़ा-सा बत्तख हूँ!" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.45 } ],
        props: [ { id: "ball", x: 0.8, y: 0.75 } ],
        cap: { en: "Auggie paddles with webbed paws and steers with his thick tail, like a boat's rudder.", hi: "ऑगी झिल्ली वाले पंजों से पानी काटता है और मोटी पूँछ से दिशा बदलता है, नाव की पतवार जैसे।" },
        say: [ { who: 0, en: "Doggy-paddle power! Hold on, ball, I'm coming!", hi: "डॉगी-पैडल पावर! रुको गेंद, मैं आ रहा हूँ!" } ],
        fx: { en: "SPLASH!", hi: "छपाक!" },
        action: true
      },
      {
        bg: "river",
        chars: [ { id: "pinku", pose: "stand", mood: "surprised", x: 0.25 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.5, y: 0.85 } ],
        say: [
          { who: 0, en: "Then why did my little rock sink? Plop, gone!", hi: "तो मेरा छोटा-सा पत्थर क्यों डूब गया? टप्प, गायब!" },
          { who: 1, en: "A rock is heavy for its size, so water's push can't hold it up.", hi: "पत्थर अपने आकार के हिसाब से बहुत भारी है, इसलिए पानी का धक्का उसे नहीं थाम पाता।" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "kabir", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "stand", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "ball", x: 0.35, y: 0.6 } ],
        cap: { en: "Auggie brings back the ball... and gives the biggest shake of his life!", hi: "ऑगी गेंद लेकर लौटा... और ज़िंदगी का सबसे बड़ा झटका दिया!" },
        say: [
          { who: 0, en: "Thank you, Lifeguard Auggie!", hi: "थैंक यू, लाइफ़गार्ड ऑगी!" },
          { who: 2, en: "And thank you for the free shower!", hi: "और मुफ़्त नहलाने के लिए भी थैंक यू!" }
        ],
        fx: { en: "SHAKE!", hi: "झर्र!" },
        action: true
      }
    ]
  },
  {
    id: 99,
    age: "6-10",
    category: "nature",
    title: { en: "Garaj and the Great Water Trip", hi: "गरज और पानी की लंबी यात्रा" },
    blurb: { en: "Detective Auggie thinks someone is stealing water from the garden pond, and the clue leads straight up to Garaj.", hi: "जासूस ऑगी को लगता है कोई बगीचे के तालाब का पानी चुरा रहा है, और सुराग सीधे ऊपर गरज तक जाता है!" },
    moral: { en: "Water travels round and round, so keep every drop clean and never waste it.", hi: "पानी गोल-गोल घूमता रहता है, इसलिए हर बूँद साफ़ रखो और कभी बर्बाद मत करो।" },
    cover: {
      bg: "sky",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "garaj", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "sun", x: 0.12, y: 0.15 }, { id: "rainbow", x: 0.55, y: 0.25 } ],
      fx: { en: "RUMBLE!", hi: "गड़गड़!" }
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.52 }, { id: "sun", x: 0.85, y: 0.12 } ],
        say: [
          { who: 0, en: "Dadi! Our little pond shrinks every day. Is someone stealing our water?", hi: "दादी! हमारा छोटा तालाब रोज़ सिकुड़ रहा है। कोई हमारा पानी चुरा रहा है क्या?" },
          { who: 1, en: "Ha! In my village, we'd say the sun drinks it up!", hi: "हा हा! मेरे गाँव में कहते थे, सूरज पानी पी जाता है!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "puddle", x: 0.52 }, { id: "sun", x: 0.15, y: 0.12 } ],
        say: [
          { who: 1, en: "Dadi is right! The sun heats water, and it becomes invisible vapour that rises up.", hi: "दादी सही हैं! सूरज पानी गरम करता है, और वो अदृश्य भाप बनकर ऊपर उड़ जाता है।" },
          { who: 0, en: "Invisible water flying away? Sneaky!", hi: "अदृश्य पानी उड़कर भाग रहा है? बड़ा चालाक है!" }
        ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.28 }, { id: "garaj", pose: "blast", mood: "angry", x: 0.72, flip: true } ],
        cap: { en: "A grumpy grey cloud floats down, frowning.", hi: "एक चिड़चिड़ा सलेटी बादल भौंहें चढ़ाए नीचे आया।" },
        say: [ { who: 1, en: "Hmph! Who are you calling sneaky? That vapour is ME!", hi: "हुँह! किसे चालाक कह रहे हो? वो भाप तो मैं हूँ!", kind: "shout" } ],
        fx: { en: "RUMBLE!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.28 }, { id: "garaj", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Up here it's cold. Vapour cools into tiny droplets. Millions of them make a cloud!", hi: "ऊपर ठंड है। भाप ठंडी होकर नन्ही बूँदें बनती है। करोड़ों बूँदें मिलकर बादल बनाती हैं!" },
          { who: 0, en: "So you're made of our pond water? Hello, pond!", hi: "मतलब तुम हमारे तालाब के पानी से बने हो? नमस्ते, तालाब!" }
        ]
      },
      {
        bg: "sky",
        chars: [ { id: "auggie", pose: "wave", mood: "determined", x: 0.28 }, { id: "garaj", pose: "stand", mood: "sad", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "But I'm too small to rain. Nobody plays with a tiny cloud.", hi: "पर मैं बरसने के लिए बहुत छोटा हूँ। छोटे बादल से कोई नहीं खेलता।" },
          { who: 0, en: "Then let's make you bigger! The big lake has lots of water.", hi: "तो चलो तुम्हें बड़ा बनाते हैं! बड़ी झील में ढेर सारा पानी है।" }
        ]
      },
      {
        bg: "river",
        chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.28 }, { id: "garaj", pose: "cheer", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.12 } ],
        cap: { en: "Over the big lake, the sun lifts up more and more vapour. Garaj grows bigger and darker!", hi: "बड़ी झील पर सूरज और-और भाप ऊपर उठाता है। गरज बड़ा और काला होता जाता है!" },
        say: [ { who: 1, en: "I feel so heavy! My droplets are joining into big drops!", hi: "मैं कितना भारी हो गया! मेरी नन्ही बूँदें जुड़कर मोटी बूँदें बन रही हैं!" } ]
      },
      {
        bg: "rain",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "garaj", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "umbrella", x: 0.1 } ],
        say: [
          { who: 1, en: "When drops get too heavy, they fall as rain! I did it!", hi: "जब बूँदें बहुत भारी हो जाती हैं, तो बारिश बनकर गिरती हैं! मैंने कर दिखाया!" },
          { who: 0, en: "Rain dance time! Mumma, bring the umbrellas!", hi: "बारिश में नाचने का टाइम! मम्मा, छतरियाँ लाओ!", kind: "shout" }
        ],
        fx: { en: "PITTER-PAT!", hi: "टप-टप!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.2 }, { id: "nanu", pose: "point", mood: "happy", x: 0.5 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "puddle", x: 0.35 }, { id: "rainbow", x: 0.6, y: 0.2 } ],
        say: [
          { who: 1, en: "Up as vapour, a cloud, down as rain, back to the pond. That's the water cycle!", hi: "भाप बनकर ऊपर, फिर बादल, फिर बारिश, फिर वापस तालाब। यही है जल-चक्र!" },
          { who: 0, en: "Our water just went on a trip... and came home!", hi: "हमारा पानी तो बस घूमने गया था... और घर लौट आया!" }
        ]
      }
    ]
  },
  {
    id: 100,
    age: "6-10",
    category: "nature",
    title: { en: "Auggie's Seed Window", hi: "ऑगी की बीज वाली खिड़की" },
    blurb: { en: "Impatient Auggie keeps digging up Dadi's sunflower seeds to check on them, until Nanu builds him a window into the soil.", hi: "बेसब्र ऑगी बार-बार दादी के सूरजमुखी के बीज खोदकर देखता है, फिर नानू उसके लिए बनाते हैं एक जादुई खिड़की!" },
    moral: { en: "Seeds need water, air, warmth and patience. Good things take time to grow.", hi: "बीज को पानी, हवा, गर्मी और सब्र चाहिए। अच्छी चीज़ें बढ़ने में वक़्त लेती हैं।" },
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
          { who: 1, en: "These tiny seeds will become sunflowers taller than you, Auggie!", hi: "ये नन्हे बीज सूरजमुखी बनेंगे, तुमसे भी लंबे, ऑगी!" },
          { who: 0, en: "Taller than me? From THAT tiny thing? By tomorrow?", hi: "मुझसे लंबे? इतनी छोटी चीज़ से? कल तक?" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.45 } ],
        props: [ { id: "sapling", x: 0.7 } ],
        cap: { en: "Next morning, Auggie can't wait. He digs up a seed to check.", hi: "अगली सुबह ऑगी से रुका नहीं गया। उसने देखने के लिए बीज खोद डाला।" },
        say: [ { who: 0, en: "Hello, seed? Are you growing yet? Hello?", hi: "हैलो, बीज? बड़े हुए क्या? हैलो?" } ],
        fx: { en: "DIG!", hi: "खुर-खुर!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Arre, Auggie! If you dig them up every day, they'll never grow!", hi: "अरे, ऑगी! रोज़ खोदोगे तो ये कभी नहीं उगेंगे!" },
          { who: 0, en: "But I can't SEE what's happening down there!", hi: "पर मुझे दिखता ही नहीं कि नीचे क्या हो रहा है!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.52 } ],
        say: [
          { who: 1, en: "Then let's build a seed window! A glass jar, wet cotton and one bean.", hi: "तो चलो बीज वाली खिड़की बनाते हैं! एक काँच का जार, गीली रुई और एक राजमा।" },
          { who: 0, en: "A window into the seed's bedroom? Yes, please!", hi: "बीज के कमरे की खिड़की? हाँ, प्लीज़!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.52 } ],
        say: [
          { who: 1, en: "A seed wakes up with water, air and warmth. That's called germination.", hi: "पानी, हवा और गर्माहट मिले तो बीज जाग जाता है। इसे अंकुरण कहते हैं।" },
          { who: 0, en: "Wake up, little bean! Your breakfast is water!", hi: "उठो, नन्हे राजमा! नाश्ते में पानी है!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.35 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "bottle", x: 0.55 } ],
        cap: { en: "Three days later, a white root pokes DOWN and a tiny green shoot pushes UP!", hi: "तीन दिन बाद एक सफ़ेद जड़ नीचे निकली, और नन्हा हरा अंकुर ऊपर!" },
        say: [
          { who: 0, en: "It's alive! Root goes down, shoot goes up!", hi: "ये ज़िंदा है! जड़ नीचे, अंकुर ऊपर!", kind: "shout" },
          { who: 1, en: "Auggie's first science experiment! Frame it!", hi: "ऑगी का पहला साइंस प्रयोग! इसे तो फ़्रेम करवाओ!" }
        ],
        fx: { en: "POP!", hi: "पॉप!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sapling", x: 0.52 }, { id: "sun", x: 0.85, y: 0.12 } ],
        say: [
          { who: 1, en: "Now it needs soil and sunshine. Leaves use sunlight to make the plant's food.", hi: "अब इसे मिट्टी और धूप चाहिए। पत्तियाँ धूप से पौधे का खाना बनाती हैं।" },
          { who: 0, en: "Plants cook with sunshine? No kitchen needed!", hi: "पौधे धूप से खाना पकाते हैं? रसोई की ज़रूरत ही नहीं!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        props: [ { id: "flower", x: 0.12, s: 1.8 }, { id: "flower", x: 0.55, s: 1.8 }, { id: "sun", x: 0.9, y: 0.1 } ],
        cap: { en: "Weeks of patient watering later...", hi: "कई हफ़्तों तक सब्र से पानी देने के बाद..." },
        say: [
          { who: 1, en: "See? Taller than you, just like I promised!", hi: "देखा? तुमसे भी लंबे, जैसा मैंने कहा था!" },
          { who: 0, en: "Worth the wait! And I didn't dig even once more!", hi: "इंतज़ार का फल मीठा! और मैंने एक बार भी फिर नहीं खोदा!" }
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
    title: { en: "Nanu's Magic Toolbox", hi: "नानू का जादुई औज़ार-बक्सा" },
    blurb: { en: "Auggie's happy tail spills Nanu's nails into the grass, and even a super-sniffer can't smell them out.", hi: "ऑगी की ख़ुश पूँछ से नानू की कीलें घास में बिखर जाती हैं, और सुपर-सूँघू नाक भी उन्हें नहीं ढूँढ पाती!" },
    moral: { en: "Magnets pull iron and steel. Tidy your tools so nobody gets hurt.", hi: "चुंबक लोहे और स्टील को खींचता है। औज़ार समेटकर रखो ताकि किसी को चोट न लगे।" },
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
        cap: { en: "Saturday morning. Nanu is fixing Kabir's bicycle, and Auggie is his helper.", hi: "शनिवार की सुबह। नानू कबीर की साइकिल ठीक कर रहे हैं, और ऑगी उनका हेल्पर है।" },
        say: [
          { who: 1, en: "Pass me the screwdriver, Auggie. And careful with that happy tail!", hi: "ऑगी, पेचकस देना। और अपनी ख़ुश पूँछ से ज़रा संभलकर!" },
          { who: 0, en: "My tail? It's the calmest tail in Chamakpur!", hi: "मेरी पूँछ? ये तो चमकपुर की सबसे शांत पूँछ है!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "gear", x: 0.5, y: 0.85 } ],
        cap: { en: "Wag, wag... and the toolbox tips over! Tiny nails and screws hide in the grass.", hi: "पूँछ हिली... और औज़ार-बक्सा उलट गया! छोटी-छोटी कीलें और पेंच घास में छिप गए।" },
        say: [
          { who: 0, en: "Oops! My tail did it, not me!", hi: "उफ़! ये पूँछ ने किया, मैंने नहीं!" },
          { who: 1, en: "Tiny nails in the grass can hurt soft paws and little feet!", hi: "घास में छोटी कीलें नरम पंजों और नन्हे पैरों को चोट पहुँचा सकती हैं!" }
        ],
        fx: { en: "CRASH!", hi: "धड़ाम!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "sad", x: 0.35 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.75, flip: true } ],
        props: [ { id: "bush", x: 0.1 } ],
        say: [
          { who: 0, en: "Sniff... sniff... Nails smell of nothing! My nose can't find them!", hi: "सूँ... सूँ... कीलों की तो कोई महक ही नहीं! मेरी नाक हार गई!" },
          { who: 1, en: "Even a super-sniffer needs a helper sometimes.", hi: "कभी-कभी सुपर-सूँघू को भी एक मददगार चाहिए।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "magnet", x: 0.52, y: 0.45 } ],
        say: [
          { who: 1, en: "Meet my magnet! It pulls things made of iron and steel.", hi: "मिलो मेरे चुंबक से! ये लोहे और स्टील की चीज़ों को अपनी तरफ़ खींचता है।" },
          { who: 0, en: "A magic horseshoe that grabs metal? Show me!", hi: "धातु पकड़ने वाली जादुई नाल? दिखाओ, दिखाओ!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "magnet", x: 0.5, y: 0.5 }, { id: "bowl", x: 0.55 }, { id: "apple", x: 0.12 } ],
        say: [
          { who: 0, en: "Apple: no. Wooden stick: no. My steel bowl... STUCK!", hi: "सेब: नहीं। लकड़ी: नहीं। मेरा स्टील का कटोरा... चिपक गया!" },
          { who: 1, en: "Magnets don't pull wood, plastic or fruit. Only iron, steel and a few metals.", hi: "चुंबक लकड़ी, प्लास्टिक या फल को नहीं खींचता। बस लोहा, स्टील और कुछ ख़ास धातुएँ।" }
        ],
        fx: { en: "CLANK!", hi: "टन्न!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.4 } ],
        props: [ { id: "magnet", x: 0.7, y: 0.85 }, { id: "flower", x: 0.12 } ],
        cap: { en: "Nanu ties the magnet to a string. Auggie pulls it across the grass, and nails leap up to cling on!", hi: "नानू ने चुंबक को डोरी से बाँधा। ऑगी उसे घास पर घुमाता है, और कीलें उछलकर चिपक जाती हैं!" },
        say: [ { who: 0, en: "Nail-sweeper Auggie at work! Click, click, click!", hi: "कील-सफ़ाई वाला ऑगी काम पर! चट, चट, चट!" } ],
        fx: { en: "ZING!", hi: "चट-चट!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "dadi", pose: "sit", mood: "sad", x: 0.25 }, { id: "auggie", pose: "stand", mood: "determined", x: 0.7, flip: true } ],
        props: [ { id: "magnet", x: 0.5, y: 0.6 } ],
        say: [
          { who: 0, en: "Hai Ram! My sewing needle fell into the rug!", hi: "हाय राम! मेरी सिलाई की सुई दरी में गिर गई!" },
          { who: 1, en: "A steel needle? Leave it to me and my magnet, Dadi!", hi: "स्टील की सुई? मुझ पर और मेरे चुंबक पर छोड़ दो, दादी!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "dadi", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "magnet", x: 0.35, y: 0.6 }, { id: "apple", x: 0.65 } ],
        say: [
          { who: 0, en: "Found in one second! Extra apple slices for you, Auggie!", hi: "एक सेकंड में मिल गई! ऑगी, तुम्हें सेब के एक्स्ट्रा टुकड़े!" },
          { who: 2, en: "Science and teamwork: the best tools in any box!", hi: "विज्ञान और टीमवर्क: किसी भी बक्से के सबसे अच्छे औज़ार!" }
        ]
      }
    ]
  },
  {
    id: 102,
    age: "6-10",
    category: "planet",
    title: { en: "Auggie and the Recycling Rescue", hi: "ऑगी और रीसाइक्लिंग का कमाल" },
    blurb: { en: "After Mausi's birthday picnic, Kichdu the mud-monster grows huge, and Auggie's mighty woof can't stop him.", hi: "मौसी की बर्थडे पिकनिक के बाद किचडू कीचड़-राक्षस बहुत बड़ा हो जाता है, और ऑगी की ज़ोरदार भौं-भौं भी काम नहीं आती!" },
    moral: { en: "Sort your waste: wet in green, dry in blue. Rubbish can become something new!", hi: "कचरा छाँटो: गीला हरे में, सूखा नीले में। कचरा भी कुछ नया बन सकता है!" },
    cover: {
      bg: "park",
      chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "kichdu", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
      props: [ { id: "dustbin", x: 0.1 }, { id: "bottle", x: 0.52 } ],
      fx: { en: "GLOOP!", hi: "गुड़ुप!" }
    },
    panels: [
      {
        bg: "park",
        chars: [ { id: "mausi", pose: "stand", mood: "sad", x: 0.25 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "bottle", x: 0.5 }, { id: "cake", x: 0.12 } ],
        cap: { en: "The evening after Mausi's birthday picnic. Plates, bottles and wrappers everywhere!", hi: "मौसी की बर्थडे पिकनिक के बाद की शाम। हर तरफ़ प्लेटें, बोतलें और रैपर!" },
        say: [
          { who: 0, en: "We had so much fun... and made so much mess!", hi: "कितना मज़ा किया... और कितना कचरा फैला दिया!" },
          { who: 1, en: "Mausi, why is that pile of rubbish... breathing?", hi: "मौसी, वो कचरे का ढेर... साँस क्यों ले रहा है?" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "blast", mood: "angry", x: 0.28 }, { id: "kichdu", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.5 } ],
        say: [
          { who: 1, en: "Blurp! More litter, more ME! I'm growing!", hi: "गुड़ुप! जितना कचरा, उतना बड़ा मैं! मैं बढ़ रहा हूँ!" },
          { who: 0, en: "WOOF! Go away, gloopy monster!", hi: "भौं! भाग जाओ, चिपचिपे राक्षस!", kind: "shout" }
        ],
        fx: { en: "GLOOP!", hi: "गुड़ुप!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "mumma", pose: "point", mood: "determined", x: 0.2 }, { id: "auggie", pose: "stand", mood: "sad", x: 0.5 }, { id: "kichdu", pose: "stand", mood: "laugh", x: 0.82, flip: true } ],
        say: [
          { who: 1, en: "My mighty woof isn't working! He's getting bigger!", hi: "मेरी ज़ोरदार भौं-भौं काम नहीं कर रही! ये तो और बड़ा हो रहा है!" },
          { who: 0, en: "Barking won't shrink him, Auggie. Sorting will!", hi: "भौंकने से ये छोटा नहीं होगा, ऑगी। छँटाई से होगा!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "mumma", pose: "point", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "mausi", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "dustbin", x: 0.35 }, { id: "dustbin", x: 0.65 } ],
        say: [
          { who: 0, en: "Green bin: wet waste like peels and leftover food. It becomes compost for plants!", hi: "हरा डिब्बा: गीला कचरा, जैसे छिलके और बचा खाना। इससे पौधों की खाद बनती है!" },
          { who: 2, en: "Blue bin: dry waste. Paper, plastic, glass and metal can be recycled!", hi: "नीला डिब्बा: सूखा कचरा। काग़ज़, प्लास्टिक, काँच और धातु रीसाइकल हो सकते हैं!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "rohan", pose: "run", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "run", mood: "determined", x: 0.5 }, { id: "kichdu", pose: "stand", mood: "scared", x: 0.82, flip: true } ],
        props: [ { id: "dustbin", x: 0.35 }, { id: "banana", x: 0.62 } ],
        cap: { en: "Rohan, Anaya, Mausi and Auggie sort everything. Peels this way, bottles that way!", hi: "रोहन, अनाया, मौसी और ऑगी सब छाँटने लगे। छिलके इधर, बोतलें उधर!" },
        say: [
          { who: 1, en: "Banana peel, green bin. Plastic bottle, blue bin!", hi: "केले का छिलका, हरा डिब्बा। प्लास्टिक की बोतल, नीला डिब्बा!" },
          { who: 0, en: "Look! Kichdu is shrinking! Keep going!", hi: "देखो! किचडू सिकुड़ रहा है! लगे रहो!", kind: "shout" }
        ],
        fx: { en: "SHRINK!", hi: "सिकुड़!" },
        action: true
      },
      {
        bg: "park",
        chars: [ { id: "kichdu", pose: "think", mood: "surprised", x: 0.25, s: 0.6 }, { id: "mausi", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bottle", x: 0.5 } ],
        say: [
          { who: 0, en: "Hey... where are my bottles going?", hi: "अरे... मेरी बोतलें कहाँ जा रही हैं?" },
          { who: 1, en: "To a recycling factory! Old bottles can become new benches and even T-shirts.", hi: "रीसाइक्लिंग फ़ैक्टरी! पुरानी बोतलों से नई बेंच और टी-शर्ट तक बन सकती हैं।" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "anaya", pose: "point", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "kichdu", pose: "stand", mood: "happy", x: 0.8, flip: true, s: 0.5 } ],
        props: [ { id: "tree", x: 0.92 }, { id: "sapling", x: 0.35 } ],
        say: [
          { who: 0, en: "And the peels will turn into compost to feed the park's trees!", hi: "और छिलकों से खाद बनेगी, जो पार्क के पेड़ों को खाना देगी!" },
          { who: 2, en: "Rubbish can become useful? That's better than being a monster!", hi: "कचरा काम का बन सकता है? ये तो राक्षस बनने से अच्छा है!" }
        ]
      },
      {
        bg: "park",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "dustbin", x: 0.1 }, { id: "tree", x: 0.52 } ],
        cap: { en: "The park sparkles again. Kichdu is now a tiny, friendly blob.", hi: "पार्क फिर से चमक उठा। किचडू अब एक नन्हा, प्यारा-सा गोला है।" },
        say: [
          { who: 1, en: "Next picnic, we bring our own steel plates. Less waste from the start!", hi: "अगली पिकनिक पर अपनी स्टील की प्लेटें लाएँगे। शुरू से ही कम कचरा!" },
          { who: 0, en: "No monster, only a clean park. Perfect party!", hi: "कोई राक्षस नहीं, बस साफ़ पार्क। एकदम परफ़ेक्ट पार्टी!" }
        ]
      }
    ]
  },
  {
    id: 103,
    age: "6-10",
    category: "planet",
    title: { en: "Super Auggie's Switch-Off Mission", hi: "सुपर ऑगी का स्विच-ऑफ़ मिशन" },
    blurb: { en: "The electricity bill is as tall as Auggie, so Super Auggie hunts down every wasted watt in the house.", hi: "बिजली का बिल ऑगी जितना लंबा आया है, तो सुपर ऑगी घर में बर्बाद होती बिजली की तलाश में निकल पड़ता है!" },
    moral: { en: "Switch off what you are not using. Saving power saves money and clean air.", hi: "जो इस्तेमाल न हो, उसे बंद करो। बिजली बचाओ, पैसे और साफ़ हवा बचाओ।" },
    cover: {
      bg: "action",
      chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.45, cape: true } ],
      props: [ { id: "bulb", x: 0.8, y: 0.25 }, { id: "star", x: 0.15, y: 0.2 } ],
      fx: { en: "CLICK!", hi: "खट!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.5 }, { id: "mumma", pose: "stand", mood: "angry", x: 0.8, flip: true } ],
        props: [ { id: "book", x: 0.32, y: 0.5 } ],
        say: [
          { who: 0, en: "Mottu! This electricity bill is as tall as Auggie!", hi: "मोटू! ये बिजली का बिल तो ऑगी जितना लंबा है!" },
          { who: 2, en: "Mittsy, someone in this house forgets to switch things off!", hi: "मिट्सी, इस घर में कोई तो है जो स्विच बंद करना भूल जाता है!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "bulb", x: 0.52, y: 0.2 } ],
        say: [
          { who: 1, en: "Much of our electricity comes from burning coal. More waste means more smoke in the sky.", hi: "हमारी काफ़ी बिजली कोयला जलाकर बनती है। ज़्यादा बर्बादी, मतलब आसमान में ज़्यादा धुआँ।" },
          { who: 0, en: "Smoke? So wasting power hurts the air too!", hi: "धुआँ? मतलब बिजली की बर्बादी से हवा भी ख़राब होती है!" }
        ]
      },
      {
        bg: "action",
        chars: [ { id: "auggie", pose: "fly", mood: "determined", x: 0.45, cape: true } ],
        cap: { en: "Mumma ties on the red Super Cape. Time for Super Auggie!", hi: "मम्मा ने लाल सुपर केप बाँधा। अब आएगा सुपर ऑगी!" },
        say: [ { who: 0, en: "Woof-woof, let's go! Mission: Switch-Off!", hi: "भौं-भौं, चलो चलें! मिशन: स्विच-ऑफ़!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.4, cape: true } ],
        props: [ { id: "bulb", x: 0.75, y: 0.2 } ],
        cap: { en: "Super Ears hear a fan whirring and a light buzzing in an EMPTY bedroom.", hi: "सुपर कानों ने ख़ाली बेडरूम में घूमता पंखा और जलती बत्ती सुन ली।" },
        say: [ { who: 0, en: "No person in the room? No power in the room! Click!", hi: "कमरे में कोई नहीं? तो बिजली भी नहीं! खट!" } ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "stand", mood: "determined", x: 0.3, cape: true }, { id: "mausi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        props: [ { id: "camera", x: 0.88, y: 0.5 } ],
        say: [
          { who: 0, en: "Mausi! The TV was talking to an empty sofa!", hi: "मौसी! टीवी ख़ाली सोफ़े से बातें कर रहा था!" },
          { who: 1, en: "Oops! I left it on and went to take selfies. Sorry!", hi: "उफ़! मैं उसे चालू छोड़कर सेल्फ़ी लेने चली गई। सॉरी!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3, cape: true }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Then Auggie finds the biggest power-eater of all: the fridge door, wide open!", hi: "फिर ऑगी को मिला सबसे बड़ा बिजली-खाऊ: पूरा खुला फ़्रिज का दरवाज़ा!" },
        say: [
          { who: 0, en: "Uh-oh. I opened it to admire the carrots... and forgot.", hi: "उफ़। मैंने गाजरें निहारने को खोला था... और भूल गया।", kind: "think" },
          { who: 1, en: "Arre, Super Auggie! Even superheroes must close the fridge!", hi: "अरे, सुपर ऑगी! सुपरहीरो को भी फ़्रिज बंद करना पड़ता है!" }
        ],
        fx: { en: "OOPS!", hi: "उफ़!" },
        action: true
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3, cape: true }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.12, y: 0.15 }, { id: "bulb", x: 0.52, y: 0.2 } ],
        say: [
          { who: 1, en: "Open the curtains in the day. And LED bulbs use much less electricity.", hi: "दिन में पर्दे खोलो। और एलईडी बल्ब बहुत कम बिजली खाते हैं।" },
          { who: 0, en: "Free sunshine and smart bulbs. Mission tips noted!", hi: "मुफ़्त धूप और समझदार बल्ब। मिशन के टिप्स नोट कर लिए!" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5, cape: true }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "book", x: 0.35, y: 0.5 } ],
        cap: { en: "One month later, the new bill arrives.", hi: "एक महीने बाद नया बिल आया।" },
        say: [
          { who: 0, en: "The bill is so much smaller! Super Auggie saved the day!", hi: "बिल कितना छोटा हो गया! सुपर ऑगी ने कमाल कर दिया!" },
          { who: 1, en: "And the air! Remember: last one out, switch it off!", hi: "और हवा भी बचाई! याद रखो: जो आख़िर में निकले, वो स्विच बंद करे!" }
        ]
      }
    ]
  },
  {
    id: 104,
    age: "6-10",
    category: "space",
    title: { en: "Who Ate Half the Moon?", hi: "आधा चाँद किसने खाया?" },
    blurb: { en: "On a camping night in the hills, Auggie is sure someone has been nibbling the Moon like a roti.", hi: "पहाड़ों पर कैंपिंग की रात ऑगी को पक्का लगता है कि कोई चाँद को रोटी की तरह कुतर रहा है!" },
    moral: { en: "The Moon doesn't change. We just see different parts of its sunny side.", hi: "चाँद बदलता नहीं। हमें बस उसके धूप वाले हिस्से के अलग-अलग टुकड़े दिखते हैं।" },
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
        cap: { en: "Camping night in the hills with Nanu and Papa. The tent is up, the campfire crackles.", hi: "नानू और पापा के साथ पहाड़ों पर कैंपिंग की रात। तंबू लग गया, अलाव चटक रहा है।" },
        say: [
          { who: 0, en: "Perfect night, Auggie. Stars, campfire and zero laptop!", hi: "एकदम बढ़िया रात, ऑगी। तारे, अलाव और लैपटॉप ज़ीरो!" },
          { who: 1, en: "Papa, look up! Someone ate half the Moon!", hi: "पापा, ऊपर देखो! किसी ने आधा चाँद खा लिया!", kind: "shout" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "campfire", x: 0.52 }, { id: "star", x: 0.15, y: 0.1 } ],
        say: [
          { who: 0, en: "Last week it was round like Dadi's roti. Who's been nibbling it?", hi: "पिछले हफ़्ते तो दादी की रोटी जैसा गोल था। इसे कौन कुतर रहा है?" },
          { who: 1, en: "Nobody eats the Moon, Auggie! Let me show you a trick.", hi: "चाँद को कोई नहीं खाता, ऑगी! चलो तुम्हें एक तरकीब दिखाता हूँ।" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.12, y: 0.15 } ],
        say: [
          { who: 1, en: "The Moon has no light of its own. It shines because the Sun lights it up.", hi: "चाँद की अपनी कोई रोशनी नहीं। वो इसलिए चमकता है क्योंकि सूरज उस पर रोशनी डालता है।" },
          { who: 0, en: "So the Moon is borrowing sunshine? Clever Moon!", hi: "मतलब चाँद सूरज से रोशनी उधार लेता है? होशियार चाँद!" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "papa", pose: "blast", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "bulb", x: 0.3, y: 0.35 }, { id: "apple", x: 0.68, y: 0.4 } ],
        cap: { en: "Nanu's mini space show! Papa's torch is the Sun, an apple is the Moon, Auggie's head is Earth.", hi: "नानू का छोटा-सा अंतरिक्ष शो! पापा की टॉर्च सूरज, सेब चाँद, और ऑगी का सिर धरती।" },
        say: [ { who: 0, en: "Torch-Sun, switched ON!", hi: "टॉर्च-सूरज, चालू!" } ],
        fx: { en: "FLASH!", hi: "चमक!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "apple", x: 0.52, y: 0.4 } ],
        say: [
          { who: 1, en: "As the Moon travels around Earth, we see different amounts of its sunny side.", hi: "चाँद धरती के चारों ओर घूमता है, तो हमें उसका धूप वाला हिस्सा कभी ज़्यादा, कभी कम दिखता है।" },
          { who: 0, en: "Round, half, thin as a banana... but it's the same apple!", hi: "गोल, आधा, केले जितना पतला... पर सेब तो वही है!" }
        ]
      },
      {
        bg: "mountains",
        chars: [ { id: "papa", pose: "point", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.7, flip: true } ],
        props: [ { id: "apple", x: 0.52, y: 0.5 } ],
        cap: { en: "The apple-Moon comes very close to Auggie's nose...", hi: "सेब-चाँद ऑगी की नाक के बहुत पास आ गया..." },
        say: [
          { who: 0, en: "Auggie! You took a bite out of the Moon!", hi: "ऑगी! तुमने चाँद में से बाइट ले ली!" },
          { who: 1, en: "Now it's a crescent Moon. Very scientific!", hi: "अब ये अर्धचंद्र है। एकदम वैज्ञानिक!" }
        ],
        fx: { en: "CHOMP!", hi: "गप्प!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "campfire", x: 0.52 }, { id: "star", x: 0.85, y: 0.1 } ],
        say: [
          { who: 1, en: "From full Moon to the next full Moon takes about twenty-nine and a half days.", hi: "एक पूरे चाँद से अगले पूरे चाँद तक क़रीब साढ़े उनतीस दिन लगते हैं।" },
          { who: 0, en: "About a month! Is that why 'month' sounds like 'Moon'?", hi: "क़रीब एक महीना! क्या इसीलिए अंग्रेज़ी में 'मंथ' और 'मून' मिलते-जुलते हैं?" }
        ]
      },
      {
        bg: "home",
        chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "book", x: 0.52 }, { id: "diya", x: 0.88 } ],
        cap: { en: "Back home, Dadi adds her own old wisdom.", hi: "घर लौटकर दादी ने अपनी पुरानी सीख जोड़ी।" },
        say: [
          { who: 1, en: "Full Moon is Purnima, no Moon is Amavasya. Diwali comes on Amavasya!", hi: "पूरा चाँद पूर्णिमा, चाँद ग़ायब तो अमावस्या। दिवाली अमावस्या को आती है!" },
          { who: 0, en: "I'm starting a Moon diary! Tonight: half Moon, one bitten apple.", hi: "मैं चाँद की डायरी लिखूँगा! आज: आधा चाँद, एक कटा सेब।" }
        ]
      }
    ]
  },
  {
    id: 105,
    age: "6-10",
    category: "space",
    title: { en: "Dhruv Tara Shows the Way", hi: "ध्रुव तारा दिखाए राह" },
    blurb: { en: "The lights go out during a night walk in Nanu's village, and even Auggie's nose gets confused by the wind.", hi: "नानू के गाँव में रात की सैर पर बत्ती चली जाती है, और हवा में ऑगी की नाक भी उलझ जाती है!" },
    moral: { en: "Dhruv Tara, the Pole Star, always shows the north. Stay calm and look for clues.", hi: "ध्रुव तारा हमेशा उत्तर दिखाता है। घबराओ मत, सुराग ढूँढो।" },
    cover: {
      bg: "village",
      chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.35 }, { id: "nanu", pose: "point", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "star", x: 0.55, y: 0.1, s: 1.5 }, { id: "star", x: 0.2, y: 0.18 } ],
      fx: { en: "TWINKLE!", hi: "टिमटिम!" }
    },
    panels: [
      {
        bg: "village",
        chars: [ { id: "papa", pose: "stand", mood: "happy", x: 0.2 }, { id: "auggie", pose: "run", mood: "happy", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "star", x: 0.35, y: 0.1 }, { id: "star", x: 0.65, y: 0.15 } ],
        cap: { en: "Holiday at Nanu's village! After dinner, Nanu, Papa and Auggie walk through the fields.", hi: "नानू के गाँव में छुट्टियाँ! खाने के बाद नानू, पापा और ऑगी खेतों में टहलने निकले।" },
        say: [
          { who: 0, en: "So many stars! In the city, I only see streetlights.", hi: "कितने सारे तारे! शहर में तो बस स्ट्रीटलाइट दिखती हैं।" },
          { who: 2, en: "Stay close. Village nights get very dark.", hi: "पास-पास रहना। गाँव की रातें बहुत अँधेरी होती हैं।" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "papa", pose: "stand", mood: "scared", x: 0.25 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "star", x: 0.5, y: 0.1 } ],
        cap: { en: "Suddenly, every light in the village goes out. A power cut!", hi: "अचानक गाँव की सारी बत्तियाँ बुझ गईं। बिजली चली गई!" },
        say: [
          { who: 0, en: "Er... I'm a city boy. Which way is home? And my phone is dead!", hi: "अरे... मैं ठहरा शहर वाला। घर किधर है? और मेरा फ़ोन भी बंद!" },
          { who: 1, en: "Don't worry, Papa. My nose will guide us!", hi: "फ़िक्र मत करो, पापा। मेरी नाक रास्ता दिखाएगी!" }
        ],
        fx: { en: "BLACKOUT!", hi: "अँधेरा!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "point", mood: "sad", x: 0.3 }, { id: "cow", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 0, en: "The wind blows every smell everywhere! Grass, goats, cows... I'm confused!", hi: "हवा हर महक को इधर-उधर उड़ा रही है! घास, बकरियाँ, गायें... मैं उलझ गया!" },
          { who: 1, en: "Moo! Don't ask me, Gauri just follows the grass.", hi: "म्माँ! मुझसे मत पूछो, गौरी तो बस घास के पीछे चलती है।" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "star", x: 0.4, y: 0.1 }, { id: "star", x: 0.55, y: 0.14 }, { id: "star", x: 0.7, y: 0.1 } ],
        say: [
          { who: 2, en: "The sky has a map. Find the Saptarishi: seven bright stars shaped like a big ladle.", hi: "आसमान में नक़्शा है। पहले सप्तर्षि ढूँढो: सात चमकीले तारे, बड़ी करछी जैसे।" },
          { who: 0, en: "I see it! Just like Ma's big kadchi!", hi: "दिख गया! बिल्कुल माँ की बड़ी करछी जैसा!" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "star", x: 0.52, y: 0.08, s: 1.5 } ],
        say: [
          { who: 1, en: "Follow the two stars at the ladle's edge. They point to Dhruv Tara, the Pole Star.", hi: "करछी के किनारे वाले दो तारों की सीध में चलो। वो ध्रुव तारे की ओर इशारा करते हैं।" },
          { who: 0, en: "Found it! Not the brightest, but sitting very still.", hi: "मिल गया! सबसे चमकीला नहीं, पर एकदम शांत बैठा है।" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "papa", pose: "point", mood: "happy", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "star", x: 0.5, y: 0.08, s: 1.5 }, { id: "house", x: 0.35 } ],
        say: [
          { who: 2, en: "Other stars slowly circle across the sky, but Dhruv Tara always stays in the north.", hi: "बाक़ी तारे धीरे-धीरे आसमान में घूमते हैं, पर ध्रुव तारा हमेशा उत्तर में रहता है।" },
          { who: 0, en: "And the house is north of the temple! This way!", hi: "और घर मंदिर के उत्तर में है! इस तरफ़!" }
        ]
      },
      {
        bg: "village",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.45 } ],
        props: [ { id: "star", x: 0.7, y: 0.08, s: 1.5 }, { id: "house", x: 0.88 } ],
        cap: { en: "They walk towards the Pole Star. Soon, the wind brings a very familiar smell.", hi: "सब ध्रुव तारे की तरफ़ चले। जल्दी ही हवा एक जानी-पहचानी महक लाई।" },
        say: [ { who: 0, en: "Ginger chai! That's Mumma's chai! We're almost home!", hi: "अदरक वाली चाय! ये मम्मा की चाय है! घर आ गया!", kind: "shout" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" },
        action: true
      },
      {
        bg: "village",
        chars: [ { id: "mumma", pose: "wave", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "diya", x: 0.33 }, { id: "house", x: 0.08 } ],
        say: [
          { who: 0, en: "Daddy! Mittsy! You found your way in the dark?", hi: "डैडी! मिट्सी! तुम लोग अँधेरे में रास्ता ढूँढ आए?" },
          { who: 2, en: "Dhruv Tara showed us north, and Auggie's nose brought us home!", hi: "ध्रुव तारे ने उत्तर दिखाया, और ऑगी की नाक घर ले आई!" }
        ]
      }
    ]
  },
  {
    id: 106,
    age: "6-10",
    category: "space",
    title: { en: "Who Took a Bite of the Sun?", hi: "सूरज पर किसने काटा?" },
    blurb: { en: "Eclipse day in Chamakpur! There's only one pair of eclipse glasses, until Auggie spots something magical under a tree.", hi: "चमकपुर में ग्रहण का दिन! ग्रहण वाला चश्मा बस एक है, फिर ऑगी को पेड़ के नीचे कुछ जादुई दिखता है!" },
    moral: { en: "Never look straight at the Sun. Watch eclipses with pinholes or eclipse glasses.", hi: "सूरज को कभी सीधे मत देखो। ग्रहण पिनहोल या ख़ास चश्मे से देखो।" },
    cover: {
      bg: "garden",
      chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.35 }, { id: "anaya", pose: "cheer", mood: "happy", x: 0.75, flip: true } ],
      props: [ { id: "tree", x: 0.55 }, { id: "sun", x: 0.12, y: 0.12 } ],
      fx: { en: "WOW!", hi: "वाह!" }
    },
    panels: [
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 }, { id: "camera", x: 0.85, y: 0.5 } ],
        cap: { en: "Big news! Today the Moon will pass in front of the Sun: a solar eclipse!", hi: "बड़ी ख़बर! आज चाँद सूरज के सामने से गुज़रेगा: सूर्य ग्रहण!" },
        say: [
          { who: 1, en: "I'll take the best selfie ever with the eclipse!", hi: "मैं ग्रहण के साथ अब तक की सबसे बढ़िया सेल्फ़ी लूँगी!" },
          { who: 0, en: "And I'll bark at the Sun. Just in case.", hi: "और मैं सूरज पर भौंकूँगा। बस यूँ ही, एहतियात के लिए।" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "mausi", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "determined", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.5, y: 0.1 } ],
        say: [
          { who: 2, en: "Stop! Never look straight at the Sun, not even through cameras. It hurts eyes!", hi: "रुको! सूरज को कभी सीधे मत देखो, कैमरे से भी नहीं। आँखों को नुकसान हो सकता है!", kind: "shout" },
          { who: 0, en: "Oh! Sorry! I didn't know that.", hi: "अरे! सॉरी! मुझे ये नहीं पता था।" }
        ],
        fx: { en: "STOP!", hi: "रुको!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.15, y: 0.1 } ],
        say: [
          { who: 1, en: "The Moon slides between the Sun and Earth, hiding the Sun. Only special glasses are safe.", hi: "चाँद सूरज और धरती के बीच आकर सूरज का चेहरा ढक देता है। बस ये ख़ास चश्मा सुरक्षित है।" },
          { who: 0, en: "Only one pair? How will everyone else see it?", hi: "बस एक चश्मा? फिर बाक़ी सब कैसे देखेंगे?" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "anaya", pose: "stand", mood: "sad", x: 0.2 }, { id: "rohan", pose: "stand", mood: "sad", x: 0.45 }, { id: "auggie", pose: "think", mood: "sad", x: 0.78, flip: true } ],
        props: [ { id: "tree", x: 0.95 } ],
        say: [
          { who: 0, en: "We waited all year to see an eclipse...", hi: "हमने पूरे साल ग्रहण देखने का इंतज़ार किया..." },
          { who: 1, en: "And now we can't even look up!", hi: "और अब हम ऊपर देख भी नहीं सकते!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.35 }, { id: "anaya", pose: "run", mood: "surprised", x: 0.75, flip: true } ],
        props: [ { id: "tree", x: 0.55 } ],
        cap: { en: "Auggie, as usual, is sniffing the ground under the neem tree. And then he sees them...", hi: "ऑगी हमेशा की तरह नीम के नीचे ज़मीन सूँघ रहा था। तभी उसे वो दिखे..." },
        say: [ { who: 0, en: "Hey! Why are there hundreds of tiny banana-shaped lights on the ground?", hi: "अरे! ज़मीन पर सैकड़ों छोटी-छोटी केले जैसी रोशनियाँ क्यों हैं?" } ],
        fx: { en: "WOW!", hi: "वाह!" },
        action: true
      },
      {
        bg: "garden",
        chars: [ { id: "anaya", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.5 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "tree", x: 0.35 } ],
        say: [
          { who: 2, en: "Brilliant, Auggie! Gaps between leaves work like pinholes. Each shows a picture of the Sun!", hi: "शाबाश, ऑगी! पत्तियों के बीच के छोटे छेद पिनहोल जैसे हैं। हर एक में सूरज की तस्वीर बनती है!" },
          { who: 0, en: "Hundreds of little eclipses, and all safe to look at!", hi: "सैकड़ों छोटे-छोटे ग्रहण, और सब देखने में सुरक्षित!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "mausi", pose: "blast", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "laugh", x: 0.5 }, { id: "dadi", pose: "point", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "book", x: 0.32, y: 0.5 } ],
        cap: { en: "Mausi pokes one tiny hole in a card, stands with her back to the Sun, and looks at the ground.", hi: "मौसी ने एक कार्ड में छोटा-सा छेद किया, सूरज की ओर पीठ करके खड़ी हुईं, और ज़मीन पर देखा।" },
        say: [
          { who: 2, en: "Look! The little Sun on the ground has a bite in it!", hi: "देखो! ज़मीन वाले छोटे सूरज में से किसी ने बाइट ली है!" },
          { who: 1, en: "Not me this time, Dadi! Promise!", hi: "इस बार मैंने नहीं लिया, दादी! पक्का!" }
        ]
      },
      {
        bg: "garden",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.52, y: 0.1 }, { id: "tree", x: 0.9 } ],
        cap: { en: "Slowly, the Moon moves on, and the Sun is round again.", hi: "धीरे-धीरे चाँद आगे बढ़ गया, और सूरज फिर से गोल हो गया।" },
        say: [
          { who: 0, en: "You can have your bite back now, Sun!", hi: "सूरज भैया, अपनी बाइट वापस ले लो!" },
          { who: 1, en: "Remember: back to the Sun, eyes on the shadows!", hi: "याद रखना: सूरज की ओर पीठ, नज़र परछाइयों पर!" }
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
    title: { en: "The Copycat in the Cave", hi: "गुफ़ा का नकलची" },
    blurb: { en: "Auggie is sure a copycat dog lives in the hill cave, until the torch goes out and the copycat saves the day.", hi: "ऑगी को यक़ीन है कि पहाड़ी गुफ़ा में कोई नकलची कुत्ता रहता है, फिर टॉर्च बुझती है और वही नकलची काम आता है!" },
    moral: { en: "Sound bounces off hard walls and comes back as an echo. Listen and learn!", hi: "आवाज़ सख़्त दीवारों से टकराकर लौटती है, इसे गूँज कहते हैं। ध्यान से सुनो और सीखो!" },
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
        cap: { en: "A trip to the Chamakpur hill caves with Papa, Mumma and Nanu, on the safe, marked path.", hi: "पापा, मम्मा और नानू के साथ चमकपुर की पहाड़ी गुफ़ाओं की सैर, सुरक्षित, निशान वाले रास्ते पर।" },
        say: [
          { who: 0, en: "Mittsy, hold my hand. It's so spooky in here!", hi: "मिट्सी, मेरा हाथ पकड़ो। यहाँ तो बड़ा डरावना है!" },
          { who: 2, en: "Relax, Mottu. Auggie is our bodyguard!", hi: "आराम से, मोटू। ऑगी हमारा बॉडीगार्ड है!" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "blast", mood: "angry", x: 0.4 } ],
        props: [ { id: "rock", x: 0.8 } ],
        cap: { en: "Auggie gives one brave bark. The cave barks back: WOOF... woof... woof...", hi: "ऑगी ने एक बहादुर भौं लगाई। गुफ़ा ने वापस भौंका: भौं... भौं... भौं..." },
        say: [ { who: 0, en: "Hey! Who's copying me? Come out, copycat dog!", hi: "ए! कौन मेरी नकल कर रहा है? बाहर आओ, नकलची कुत्ते!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" },
        action: true
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Auggie, that copycat is YOU!", hi: "ऑगी, वो नकलची तुम ख़ुद हो!" },
          { who: 0, en: "Me? But I'm standing right here!", hi: "मैं? पर मैं तो यहाँ खड़ा हूँ!", kind: "think" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.52 } ],
        say: [
          { who: 1, en: "Sound travels through air, hits these hard rock walls and bounces back. That's an echo!", hi: "आवाज़ हवा में चलती है, इन सख़्त चट्टानों से टकराकर लौट आती है। इसे गूँज कहते हैं!" },
          { who: 0, en: "My bark went on a trip and came back? Like a ball off a wall!", hi: "मेरी भौं घूमकर वापस आ गई? दीवार से लौटी गेंद जैसी!" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "papa", pose: "stand", mood: "scared", x: 0.2 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.5 }, { id: "mumma", pose: "stand", mood: "scared", x: 0.8, flip: true } ],
        say: [
          { who: 0, en: "Uh-oh. The torch battery is finished!", hi: "अरे बाप रे। टॉर्च की बैटरी ख़त्म!" },
          { who: 2, en: "It's pitch dark! Which way is out?", hi: "घुप्प अँधेरा है! बाहर किधर है?" }
        ],
        fx: { en: "FLICKER!", hi: "झपक!" },
        action: true
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "nanu", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Stay calm. Bats find their way in the dark by listening to echoes. Try it, Auggie!", hi: "सब शांत रहो। चमगादड़ अँधेरे में गूँज सुनकर रास्ता ढूँढते हैं। ऑगी, तुम भी कोशिश करो!" },
          { who: 0, en: "Bat mode! Quick echo means a wall is near. Slow echo means open space!", hi: "चमगादड़ मोड! जल्दी गूँज, मतलब दीवार पास। देर से गूँज, मतलब खुली जगह!" }
        ]
      },
      {
        bg: "cave",
        chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.4 } ],
        props: [ { id: "rock", x: 0.1 } ],
        cap: { en: "Bark left: a quick echo. Wall! Bark right: a long, faraway echo. Open space!", hi: "बाईं ओर भौं: जल्दी गूँज। दीवार! दाईं ओर भौं: लंबी, दूर की गूँज। खुली जगह!" },
        say: [ { who: 0, en: "And I smell fresh air... and pakodas! This way, everyone!", hi: "और मुझे ताज़ी हवा की महक आ रही है... और पकौड़ों की! सब इधर!" } ],
        fx: { en: "WOOF!", hi: "भौं!" },
        action: true
      },
      {
        bg: "mountains",
        chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        props: [ { id: "sun", x: 0.9, y: 0.12 } ],
        cap: { en: "Out in the sunshine! And yes, there really is a pakoda stall.", hi: "बाहर धूप में! और हाँ, सच में वहाँ पकौड़ों का ठेला है।" },
        say: [
          { who: 0, en: "Three cheers for Auggie, our bat-dog hero!", hi: "हमारे चमगादड़-कुत्ते हीरो ऑगी के लिए तीन चीयर्स!" },
          { who: 1, en: "Thank you, copycat echo! You were helpful after all!", hi: "थैंक यू, नकलची गूँज! आख़िर तुम काम आ ही गईं!" }
        ]
      }
    ]
  },
  {
    id: 108,
    age: "6-10",
    category: "science",
    title: { en: "The Volcano That Went Gadbad", hi: "गड़बड़ वाला ज्वालामुखी" },
    blurb: { en: "At the science fair, Professor Gadbad's Mega Lava Machine floods the hall with foam, and Auggie must stop it fast.", hi: "साइंस मेले में प्रोफ़ेसर गड़बड़ की मेगा लावा मशीन पूरे हॉल को झाग से भर देती है, और ऑगी को इसे जल्दी रोकना है!" },
    moral: { en: "Baking soda and vinegar make fizzy gas. Measure carefully and work as a team!", hi: "बेकिंग सोडा और सिरका मिलकर गैस के बुलबुले बनाते हैं। नाप-तौलकर करो, मिलकर करो!" },
    cover: {
      bg: "volcano",
      chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "anaya", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ],
      props: [ { id: "trophy", x: 0.52 } ],
      fx: { en: "FIZZ!", hi: "फ़िज़्ज़!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "anaya", pose: "sit", mood: "sad", x: 0.3 }, { id: "auggie", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.52 } ],
        cap: { en: "Two days before the science fair, Anaya and Auggie look at their clay volcano.", hi: "साइंस मेले से दो दिन पहले, अनाया और ऑगी अपने मिट्टी के ज्वालामुखी को देख रहे हैं।" },
        say: [
          { who: 0, en: "Our volcano looks like a sad brown laddoo.", hi: "हमारा ज्वालामुखी तो उदास भूरे लड्डू जैसा लग रहा है।" },
          { who: 1, en: "A laddoo? Now I'm sad AND hungry.", hi: "लड्डू? अब मैं उदास भी हूँ और भूखा भी।" }
        ]
      },
      {
        bg: "volcano",
        chars: [ { id: "anaya", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.5 }, { id: "nanu", pose: "point", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Nanu opens his big book of volcanoes.", hi: "नानू ने ज्वालामुखियों वाली अपनी मोटी किताब खोली।" },
        say: [
          { who: 2, en: "Deep inside, hot melted rock called magma pushes up. When it bursts out, it's lava!", hi: "धरती के अंदर पिघली गरम चट्टान होती है, जिसे मैग्मा कहते हैं। बाहर निकले तो लावा!" },
          { who: 0, en: "But we can't use real lava at school!", hi: "पर स्कूल में असली लावा थोड़ी ला सकते हैं!" }
        ]
      },
      {
        bg: "kitchen",
        chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "rock", x: 0.52 }, { id: "bottle", x: 0.62 } ],
        say: [
          { who: 1, en: "For a safe model: baking soda plus vinegar. Together they make gas bubbles that foam up!", hi: "सुरक्षित मॉडल के लिए: बेकिंग सोडा और सिरका। दोनों मिलकर गैस के बुलबुले बनाते हैं जो झाग बनकर उठते हैं!" },
          { who: 0, en: "Foamy lava! Can I lick it? No? Okay, no licking.", hi: "झागदार लावा! चाट लूँ? नहीं? ठीक है, नहीं चाटूँगा।" }
        ],
        fx: { en: "FIZZ!", hi: "फ़िज़्ज़!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3 }, { id: "gadbad", pose: "blast", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "machine", x: 0.52 } ],
        cap: { en: "Science fair day! Right next to Anaya's table: Professor Gadbad and his Mega Lava Machine!", hi: "साइंस मेले का दिन! अनाया की मेज़ के ठीक बगल में: प्रोफ़ेसर गड़बड़ और उनकी मेगा लावा मशीन!" },
        say: [
          { who: 1, en: "Behold! The biggest volcano in Chamakpur history!", hi: "देखो! चमकपुर के इतिहास का सबसे बड़ा ज्वालामुखी!" },
          { who: 0, en: "Big machine, Professor Gadbad... what could go wrong?", hi: "बड़ी मशीन, प्रोफ़ेसर गड़बड़... क्या ग़लत हो सकता है?", kind: "think" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "gadbad", pose: "stand", mood: "scared", x: 0.2 }, { id: "anaya", pose: "stand", mood: "scared", x: 0.5 }, { id: "auggie", pose: "stand", mood: "surprised", x: 0.8, flip: true } ],
        props: [ { id: "machine", x: 0.35 } ],
        cap: { en: "The machine keeps pouring vinegar onto baking soda. Foam floods the whole hall!", hi: "मशीन लगातार बेकिंग सोडा पर सिरका डाल रही है। पूरा हॉल झाग से भर गया!" },
        say: [
          { who: 0, en: "It won't stop! Sorry, sorry, sorry!", hi: "ये रुक ही नहीं रही! सॉरी, सॉरी, सॉरी!" },
          { who: 1, en: "The judges come in five minutes!", hi: "जज पाँच मिनट में आने वाले हैं!" }
        ],
        fx: { en: "WHOOSH!", hi: "फ़ुर्र!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.35 }, { id: "gadbad", pose: "stand", mood: "surprised", x: 0.78, flip: true } ],
        props: [ { id: "machine", x: 0.6 } ],
        say: [
          { who: 0, en: "Nanu said soda plus vinegar makes bubbles. No vinegar, no new bubbles!", hi: "नानू ने कहा था, सोडा और सिरका मिलें तो बुलबुले। सिरका नहीं, तो नए बुलबुले नहीं!" },
          { who: 1, en: "The vinegar pipe! Pull the vinegar pipe!", hi: "सिरके की पाइप! सिरके की पाइप खींचो!", kind: "shout" }
        ],
        fx: { en: "YANK!", hi: "खिंच!" },
        action: true
      },
      {
        bg: "school",
        chars: [ { id: "gadbad", pose: "cheer", mood: "laugh", x: 0.25 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.7, flip: true } ],
        props: [ { id: "machine", x: 0.5 } ],
        say: [
          { who: 0, en: "The foam stopped! Auggie, you are a genius dog!", hi: "झाग रुक गया! ऑगी, तुम तो जीनियस कुत्ते हो!" },
          { who: 1, en: "When one ingredient runs out, the fizzing stops. Simple science!", hi: "एक चीज़ ख़त्म, तो फ़िज़्ज़ भी ख़त्म। सीधा-सादा विज्ञान!" }
        ]
      },
      {
        bg: "school",
        chars: [ { id: "anaya", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "gadbad", pose: "cheer", mood: "happy", x: 0.8, flip: true } ],
        props: [ { id: "trophy", x: 0.35 }, { id: "rock", x: 0.65 } ],
        cap: { en: "Together, they show a small, careful eruption. The judges give them the Best Teamwork trophy!", hi: "सबने मिलकर एक छोटा, सधा हुआ विस्फोट दिखाया। जजों ने उन्हें बेस्ट टीमवर्क ट्रॉफ़ी दी!" },
        say: [
          { who: 0, en: "One spoon of soda, a splash of vinegar... eruption!", hi: "एक चम्मच सोडा, थोड़ा-सा सिरका... विस्फोट!" },
          { who: 2, en: "Measuring carefully is the real magic. Thank you, friends!", hi: "नाप-तौलकर करना ही असली जादू है। थैंक यू, दोस्तों!" }
        ]
      }
    ]
  },
  {
    id: 109,
    age: "6-10",
    category: "space",
    title: { en: "Astronaut Auggie on the Moon", hi: "अंतरिक्ष यात्री ऑगी चाँद पर" },
    blurb: { en: "After Nanu's bedtime story, Auggie dreams he is an astronaut dog on the Moon, where Zibbo needs a super-high jump.", hi: "नानू की कहानी सुनकर ऑगी सपने में अंतरिक्ष यात्री बनकर चाँद पर पहुँचता है, जहाँ ज़िब्बो को चाहिए एक सुपर-ऊँची छलाँग!" },
    moral: { en: "The Moon's gravity is weaker, so you would weigh about one-sixth as much there.", hi: "चाँद का गुरुत्वाकर्षण कमज़ोर है, इसलिए वहाँ तुम्हारा वज़न क़रीब छठा हिस्सा रह जाएगा।" },
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
        cap: { en: "Bedtime. Nanu tells Auggie about the Moon. That night, Auggie dreamed...", hi: "सोने का वक़्त। नानू ऑगी को चाँद के बारे में बताते हैं। उस रात ऑगी ने सपना देखा..." },
        say: [
          { who: 1, en: "On the Moon, you would weigh six times less, Auggie.", hi: "चाँद पर तुम्हारा वज़न छह गुना कम हो जाएगा, ऑगी।" },
          { who: 0, en: "Six times less... more room for carrots...", hi: "छह गुना कम... मतलब गाजरों के लिए और जगह...", kind: "whisper" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.4 } ],
        props: [ { id: "rocket", x: 0.82 }, { id: "planet", x: 0.15, y: 0.15 } ],
        cap: { en: "...he was Astronaut Auggie, landing on the Moon in a shiny spacesuit!", hi: "...कि वो अंतरिक्ष यात्री ऑगी है, चमचमाते स्पेससूट में चाँद पर उतरता हुआ!" },
        say: [ { who: 0, en: "Astronaut Auggie has landed! Now, where are the Moon carrots?", hi: "अंतरिक्ष यात्री ऑगी उतर गया! अब चाँद की गाजरें कहाँ हैं?" } ],
        fx: { en: "BOING!", hi: "धप्प!" },
        action: true
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "zibbo", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        say: [
          { who: 1, en: "Zeep! Welcome, Earth dog! I'm Zibbo. Why is your suit so puffy?", hi: "ज़ीप! स्वागत है, धरती के कुत्ते! मैं ज़िब्बो हूँ। तुम्हारा सूट इतना फूला क्यों है?" },
          { who: 0, en: "The Moon has no air to breathe. My suit carries air for me!", hi: "चाँद पर साँस लेने को हवा नहीं है। मेरा सूट मेरे लिए हवा रखता है!" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.3 }, { id: "zibbo", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Auggie tries a big hello bark... but no sound comes out!", hi: "ऑगी ने ज़ोर से 'हैलो' भौंका... पर कोई आवाज़ ही नहीं आई!" },
        say: [
          { who: 0, en: "WOOF? Where did my woof go?", hi: "भौं? मेरी भौं कहाँ गई?", kind: "think" },
          { who: 1, en: "Sound needs air to travel. No air, no sound! We talk by radio.", hi: "आवाज़ को चलने के लिए हवा चाहिए। हवा नहीं, तो आवाज़ नहीं! हम रेडियो से बात करते हैं।" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "zibbo", pose: "stand", mood: "sad", x: 0.25 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.7, flip: true } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.15 }, { id: "rock", x: 0.5 } ],
        say: [
          { who: 0, en: "My space frisbee is stuck way up on that crater wall!", hi: "मेरी स्पेस-फ़्रिस्बी उस गड्ढे की ऊँची दीवार पर अटक गई!" },
          { who: 1, en: "It's taller than our house! Even I can't jump that high...", hi: "ये तो हमारे घर से भी ऊँची है! इतना ऊँचा तो मैं भी नहीं कूद सकता..." }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "think", mood: "determined", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.52, y: 0.15 } ],
        say: [
          { who: 1, en: "On the Moon you can! Moon gravity pulls only one-sixth as hard as Earth's.", hi: "चाँद पर कूद सकते हो! यहाँ का गुरुत्वाकर्षण धरती के मुक़ाबले बस छठा हिस्सा खींचता है।" },
          { who: 0, en: "Weigh less, jump higher? Let's try!", hi: "वज़न कम, छलाँग ऊँची? चलो कोशिश करते हैं!" }
        ]
      },
      {
        bg: "moon",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.45 } ],
        props: [ { id: "frisbee", x: 0.5, y: 0.2 }, { id: "star", x: 0.85, y: 0.15 } ],
        cap: { en: "Auggie jumps six times higher than on Earth, then floats down slowly, like a feather!", hi: "ऑगी धरती से छह गुना ऊँचा कूदा, और फिर पंख की तरह धीरे-धीरे नीचे तैरता आया!" },
        say: [ { who: 0, en: "Got it! I'm flying... well, floating!", hi: "पकड़ ली! मैं उड़ रहा हूँ... मतलब, तैर रहा हूँ!", kind: "shout" } ],
        fx: { en: "WHEEE!", hi: "ऊऊऊ!" },
        action: true
      },
      {
        bg: "bedroom",
        chars: [ { id: "mumma", pose: "sit", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.5 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Next morning...", hi: "अगली सुबह..." },
        say: [
          { who: 0, en: "Mittsy, Auggie kicked me all night. He was jumping in his sleep!", hi: "मिट्सी, ऑगी रात भर लातें मारता रहा। नींद में कूद रहा था!" },
          { who: 1, en: "I was on the Moon! My pawprints stay there, because the Moon has no wind!", hi: "मैं चाँद पर था! मेरे पंजों के निशान वहीं रहेंगे, क्योंकि चाँद पर हवा नहीं चलती!" }
        ]
      }
    ]
  },
  {
    id: 110,
    age: "6-10",
    category: "space",
    title: { en: "Auggie's Grand Planet Tour", hi: "ऑगी की ग्रहों वाली सैर" },
    blurb: { en: "Mumma is planning the next holiday, so Auggie dreams of a one-night tour of the planets with Zibbo.", hi: "मम्मा अगली छुट्टियों का प्लान बना रही हैं, तो ऑगी सपने में ज़िब्बो के साथ एक रात में सारे ग्रह घूम आता है!" },
    moral: { en: "Of all the planets we know, only Earth has life. Let's take care of it!", hi: "जितने ग्रह हम जानते हैं, उनमें सिर्फ़ धरती पर जीवन है। चलो इसका ख़याल रखें!" },
    cover: {
      bg: "space",
      chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
      props: [ { id: "ufo", x: 0.5, y: 0.25 }, { id: "planet", x: 0.15, y: 0.2 }, { id: "planet", x: 0.88, y: 0.7 } ],
      fx: { en: "ZOOM!", hi: "ज़ूम!" }
    },
    panels: [
      {
        bg: "home",
        chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.3 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "map", x: 0.5 } ],
        cap: { en: "Mumma is planning the next family holiday.", hi: "मम्मा अगली फ़ैमिली छुट्टी का प्लान बना रही हैं।" },
        say: [
          { who: 0, en: "Beach or hills, Auggie? Mittsy can't decide!", hi: "समुद्र या पहाड़, ऑगी? मिट्सी से तो फ़ैसला ही नहीं होता!" },
          { who: 1, en: "Why not... another PLANET?", hi: "क्यों न... कोई दूसरा ग्रह?" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "ufo", x: 0.5, y: 0.3 } ],
        cap: { en: "That night, Auggie dreamed that Zibbo's UFO landed right next to his bed!", hi: "उस रात ऑगी ने सपना देखा कि ज़िब्बो की उड़न-तश्तरी ठीक उसके बिस्तर के पास उतरी!" },
        say: [
          { who: 1, en: "Zeep! Planet tour, one night, eight planets! Hop in!", hi: "ज़ीप! ग्रहों की सैर, एक रात, आठ ग्रह! बैठ जाओ!" },
          { who: 0, en: "Wait, let me pack snacks. Carrots only!", hi: "रुको, नाश्ता तो रख लूँ। सिर्फ़ गाजर!" }
        ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" },
        action: true
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "think", mood: "scared", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "sun", x: 0.1, y: 0.15 }, { id: "planet", x: 0.5, y: 0.3 } ],
        say: [
          { who: 1, en: "Mercury is closest to the Sun. Venus is hottest; its thick clouds trap heat!", hi: "बुध सूरज के सबसे पास है। शुक्र सबसे गरम है, उसके घने बादल गर्मी क़ैद कर लेते हैं!" },
          { who: 0, en: "Too hot! My tongue would pant forever!", hi: "बहुत गरमी! मेरी जीभ तो हमेशा हाँफ़ती रहेगी!" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.3 } ],
        say: [
          { who: 1, en: "Mars looks red because its dust is rusty, like an old iron gate!", hi: "मंगल लाल दिखता है क्योंकि उसकी धूल में जंग है, पुराने लोहे के गेट जैसी!" },
          { who: 0, en: "Rusty red mud? Mumma would never let me roll in that!", hi: "जंग वाली लाल मिट्टी? मम्मा मुझे उसमें कभी लोटने नहीं देंगी!" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.3 } ],
        say: [
          { who: 1, en: "Jupiter is the biggest planet. Its giant storm is bigger than our whole Earth!", hi: "बृहस्पति सबसे बड़ा ग्रह है। उसका एक तूफ़ान हमारी पूरी धरती से भी बड़ा है!" },
          { who: 0, en: "A storm bigger than Earth? Garaj would be so jealous!", hi: "धरती से बड़ा तूफ़ान? गरज को तो बड़ी जलन होगी!" }
        ],
        fx: { en: "RUMBLE!", hi: "गड़गड़!" },
        action: true
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "zibbo", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.3 }, { id: "star", x: 0.9, y: 0.12 } ],
        say: [
          { who: 1, en: "Saturn's beautiful rings are made of chunks of ice and rock.", hi: "शनि के सुंदर छल्ले बर्फ़ और चट्टान के टुकड़ों से बने हैं।" },
          { who: 0, en: "A frisbee planet! But that ring is too big to fetch.", hi: "फ़्रिस्बी वाला ग्रह! पर वो छल्ला लाने के लिए बहुत बड़ा है।" }
        ]
      },
      {
        bg: "space",
        chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "zibbo", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "planet", x: 0.5, y: 0.25 }, { id: "planet", x: 0.9, y: 0.6 } ],
        say: [
          { who: 1, en: "Uranus spins lying on its side. And Neptune has the fastest winds of all!", hi: "अरुण ग्रह करवट लेकर लेटे-लेटे घूमता है। और वरुण पर सबसे तेज़ हवाएँ चलती हैं!" },
          { who: 0, en: "A lazy, lying-down planet? That's MY kind of planet!", hi: "आलसी, लेटा हुआ ग्रह? ये तो बिल्कुल मेरे जैसा है!" }
        ]
      },
      {
        bg: "bedroom",
        chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        props: [ { id: "map", x: 0.52 } ],
        cap: { en: "Morning! Auggie jumps onto the bed with his answer.", hi: "सुबह! ऑगी अपना जवाब लेकर बिस्तर पर कूद पड़ा।" },
        say: [
          { who: 0, en: "Best holiday planet? Earth! Air, water, lakes, carrots... and you!", hi: "छुट्टी के लिए सबसे अच्छा ग्रह? धरती! हवा, पानी, झीलें, गाजर... और आप!" },
          { who: 1, en: "Earth it is! The only planet we know that has life.", hi: "तो धरती ही सही! अकेला ग्रह जिस पर हम जानते हैं कि जीवन है।" }
        ],
        fx: { en: "YAY!", hi: "याहू!" },
        action: true
      }
    ]
  }
);
