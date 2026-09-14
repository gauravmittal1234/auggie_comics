window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(

  // 1 — Auggie steals the big bed
  {
    id: 1, age: "4-6", category: "home",
    title: { en: "The Great Big-Bed Grab", hi: "बड़े बिस्तर पर ऑगी का कब्ज़ा!" },
    blurb: { en: "Auggie has taken the WHOLE big bed. So where will Papa and Mumma sleep?", hi: "पूरा का पूरा बड़ा बिस्तर ऑगी का! अब पापा-मम्मा सोएँगे कहाँ?" },
    moral: { en: "A bed is cosiest when everyone fits in.", hi: "जब सबको जगह मिले, तभी नींद सबसे मीठी आती है।" },
    cover: { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.4, s: 1.2 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "clock", x: 0.12, y: 0.2 } ], fx: { en: "STRETCH!", hi: "अँगड़ाई!" } },
    panels: [
      { bg: "bedroom", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Bedtime list: pillows fluffed, lights off, NO sprawling!", hi: "सोने की लिस्ट: तकिए ठीक, बत्ती बंद, और कोई नहीं फैलेगा!" },
               { who: 0, en: "Sprawling? What's sprawling?", hi: "फैलना? वो क्या होता है?" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.5, s: 1.3 } ],
        cap: { en: "Three seconds later... Auggie is sprawled out. All. The. Way.", hi: "बस तीन सेकंड बाद... ऑगी चारों पैर फैलाकर पूरे बिस्तर पर पसर गया!" },
        say: [ { who: 0, en: "Ohhh, THIS is sprawling! I love it!", hi: "ओहो, तो ये होता है फैलना! बड़ा मज़ा है!" } ],
        fx: { en: "FLOP!", hi: "धप्प!" }, action: true },
      { bg: "bedroom", chars: [ { id: "papa", pose: "point", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "lie", mood: "sleepy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.82, flip: true } ],
        say: [ { who: 0, en: "Budge up, buddy! Just one teeny inch?", hi: "ओ मेरे शेर, ज़रा सरक जा ना! बस थोड़ा-सा!" },
               { who: 1, en: "Snore... I'm totally asleep... can't hear you...", hi: "खर्र... मैं तो सो रहा हूँ... मुझे कुछ सुनाई नहीं दे रहा...", kind: "whisper" } ] },
      { bg: "bedroom", chars: [ { id: "papa", pose: "stand", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.5 }, { id: "mumma", pose: "stand", mood: "sleepy", x: 0.8, flip: true } ],
        cap: { en: "Papa yawns. Mumma yawns. One golden eye peeks open.", hi: "पापा ने उबासी ली। मम्मा ने उबासी ली। ऑगी ने चुपके से एक आँख खोली।" },
        say: [ { who: 1, en: "Hmm. Sleepy Papa, sleepy Mumma... and one very big me.", hi: "ओहो... पापा को नींद, मम्मा को नींद... और बीच में इत्ता बड़ा मैं!", kind: "think" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.22 }, { id: "papa", pose: "lie", mood: "happy", x: 0.52 }, { id: "mumma", pose: "lie", mood: "laugh", x: 0.82, flip: true } ],
        cap: { en: "Auggie scoots to his little corner. Scoot, scoot. Room for all!", hi: "ऑगी सरक-सरककर अपने कोने में चला गया। अब सबको जगह!" },
        say: [ { who: 2, en: "My hero! Mittsy, now even your snores will fit!", hi: "मेरा राजा बेटा! मिट्सी, अब तो तुम्हारे खर्राटे भी समा जाएँगे!" } ],
        fx: { en: "SCOOT!", hi: "सरक!" }, action: true },
      { bg: "bedroom", chars: [ { id: "papa", pose: "lie", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "lie", mood: "sleepy", x: 0.5 }, { id: "mumma", pose: "lie", mood: "sleepy", x: 0.8, flip: true } ],
        say: [ { who: 1, en: "Night, Papa. Night, Mumma. Tomorrow... I get the pillow.", hi: "गुड नाइट पापा, गुड नाइट मम्मा... पर कल तकिया मेरा!", kind: "whisper" } ],
        fx: { en: "SNORE!", hi: "खर्र!" }, action: true }
    ]
  },

  // 2 — Bath time and a big shake
  {
    id: 2, age: "4-6", category: "habits",
    title: { en: "Mud Ball vs. Bath Time", hi: "नहाना? ना बाबा ना!" },
    blurb: { en: "Auggie is a walking mud ball and loving it. Can anyone get him into the bath?", hi: "ऑगी कीचड़ में लथपथ है और बड़ा खुश है। अब इसे नहलाएगा कौन?" },
    moral: { en: "Bath time can be fun, and being clean feels great!", hi: "नहाना भी मज़ेदार हो सकता है, और साफ़ रहकर मन भी खुश रहता है।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.4 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.78, flip: true } ], props: [ { id: "puddle", x: 0.15 } ], fx: { en: "SHAKE!", hi: "फुर्र!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.4 } ], props: [ { id: "puddle", x: 0.62 }, { id: "bush", x: 0.9 } ],
        cap: { en: "After the rain, Auggie finds the biggest, gooiest puddle!", hi: "बारिश रुकी, और ऑगी को मिल गया सबसे बड़ा, सबसे चिपचिपा गड्ढा!" },
        say: [ { who: 0, en: "Mud! Squishy, squelchy, lovely mud!", hi: "कीचड़! चिपचिप, पचपच, प्यारा-प्यारा कीचड़!" } ],
        fx: { en: "SPLOSH!", hi: "छपाक!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "point", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Mittsy, quick! Who is this walking mud ball?", hi: "मिट्सी! जल्दी आओ! ये चलता-फिरता कीचड़ का गोला कौन है?", kind: "shout" },
               { who: 0, en: "It's me! Handsome, right?", hi: "मैं हूँ! हैंडसम लग रहा हूँ ना?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.3 }, { id: "papa", pose: "think", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Bath? Auggie hides behind the sofa. The perfect hiding spot!", hi: "नहाना? ऑगी झट से सोफ़े के पीछे छुप गया। एकदम पक्की जगह!" },
        say: [ { who: 1, en: "Hmm. The sofa is wagging. Very suspicious!", hi: "अरे वाह! आज तो सोफ़ा भी पूँछ हिला रहा है!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.33 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "bottle", x: 0.53 } ],
        cap: { en: "Papa blows doggy-shampoo bubbles. Auggie can't resist. In he hops!", hi: "पापा ने कुत्तों वाले शैम्पू के बुलबुले उड़ाए। ऑगी से रहा नहीं गया — छपाक, अंदर!" },
        say: [ { who: 0, en: "Hee hee! I've got a bubble beard like Papa!", hi: "ही-ही! देखो, मेरी भी पापा जैसी झाग वाली दाढ़ी!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.38 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.78, flip: true } ],
        say: [ { who: 1, en: "Auggie, NOOO! Now I need a bath!", hi: "ऑगी, नहीं! अब तो मुझे नहाना पड़ेगा!", kind: "shout" } ],
        fx: { en: "SHAKE!", hi: "फुर्र!" }, action: true },
      { bg: "home", chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "One big towel rub later, Auggie smells like a flower garden.", hi: "तौलिये से रगड़-रगड़कर पोंछा, और ऑगी गुलाब जैसा महकने लगा!" },
        say: [ { who: 2, en: "My fluffy flower! Mittsy, YOU smell like a puddle!", hi: "मेरा खुशबूदार ऑगी! और मिट्सी... तुमसे तो गड्ढे की खुशबू आ रही है!" } ] }
    ]
  },

  // 3 — Brushing a dog's teeth
  {
    id: 3, age: "4-6", category: "habits",
    title: { en: "Operation Sparkly Smile", hi: "ऑगी की चमचम मुस्कान" },
    blurb: { en: "Mumma wants to brush Auggie's teeth. Auggie wants to be anywhere else!", hi: "मम्मा ऑगी के दाँत ब्रश करना चाहती हैं। और ऑगी? वो तो भागने की फ़िराक में है!" },
    moral: { en: "Brush every day for a smile that shines, for kids and dogs!", hi: "रोज़ ब्रश करो और मुस्कान चमकाओ, बच्चे भी और कुत्ते भी!" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "mumma", pose: "wave", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "toothbrush", x: 0.55 } ], fx: { en: "SPARKLE!", hi: "चमचम!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "toothbrush", x: 0.52 } ],
        cap: { en: "Mumma brushes every morning. Her smile is the biggest in Chamakpur!", hi: "मम्मा रोज़ सुबह ब्रश करती हैं। चमकपुर में सबसे बड़ी मुस्कान उन्हीं की है!" },
        say: [ { who: 0, en: "Mumma, how is your smile SO shiny?", hi: "मम्मा, आपकी मुस्कान इतनी चमचम कैसे करती है?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Brushing, Auggie! And guess whose turn is next?", hi: "ब्रश से, बेटा! और अब बताओ, अगली बारी किसकी है?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "scared", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "toothbrush", x: 0.58 } ],
        say: [ { who: 0, en: "No brush! I'll just crunch ten carrots instead!", hi: "ब्रश-व्रश नहीं! मैं दस गाजर चबा लूँगा, दाँत अपने आप साफ़!", kind: "shout" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.33 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "toothbrush", x: 0.52 } ],
        cap: { en: "Only doggy toothpaste! People toothpaste is NOT for dogs.", hi: "कुत्तों का टूथपेस्ट अलग आता है। हमारा वाला उनके लिए बिल्कुल नहीं!" },
        say: [ { who: 1, en: "Your very own toothpaste. And it's... chicken flavour!", hi: "ये है ऑगी का अपना खास टूथपेस्ट... चिकन वाला!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.33 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "toothbrush", x: 0.52 } ],
        say: [ { who: 0, en: "Chicken?! Brush the back ones too! And again!", hi: "चिकन?! पीछे वाले भी घिसो! एक बार और!" } ],
        fx: { en: "SCRUB!", hi: "घिस-घिस!" }, action: true },
      { bg: "home", chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Whoa! That smile is so bright, I need sunglasses!", hi: "अरे बाप रे! इतनी चमक? मुझे तो चश्मे के ऊपर चश्मा लगाना पड़ेगा!" },
               { who: 1, en: "Look, Mumma! Now we have matching smiles!", hi: "देखो मम्मा! अब अपनी मुस्कान एक जैसी!" } ],
        fx: { en: "TING!", hi: "टिंग!" }, action: true }
    ]
  },

  // 4 — The vet visit and a brave vaccine
  {
    id: 4, age: "4-6", category: "feelings",
    title: { en: "Auggie the Brave (Mostly)", hi: "ऑगी और छोटा-सा टीका" },
    blurb: { en: "Auggie thought 'vet' meant snacks. It doesn't! Can he still be brave?", hi: "ऑगी को लगा डॉक्टर के यहाँ बिस्कुट मिलेंगे। पर वहाँ तो टीका है! अब क्या?" },
    moral: { en: "Feeling scared is okay. Brave means trying anyway, with a hand to hold.", hi: "डर लगना ठीक है। किसी का हाथ पकड़कर कोशिश करना ही असली बहादुरी है।" },
    cover: { bg: "vet", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.4 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ], fx: { en: "BRAVE!", hi: "शाबाश!" } },
    panels: [
      { bg: "city", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Today Papa and Auggie walk to the vet clinic.", hi: "आज पापा ऑगी को जानवरों के डॉक्टर के पास ले जा रहे हैं।" },
        say: [ { who: 0, en: "Vet? Is that a snack shop? Is it? Is it?", hi: "डॉक्टर? वहाँ बिस्कुट मिलते हैं क्या? बोलो ना, बोलो!" } ] },
      { bg: "vet", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.33 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Beep-beep machines. Funny smells. Auggie's tail droops... down, down.", hi: "बीप-बीप मशीनें, अजीब-सी गंध। ऑगी की पूँछ धीरे-धीरे नीचे... और नीचे।" },
        say: [ { who: 0, en: "Shh, Mumma. I'm a rug. Rugs don't get checkups.", hi: "श्श मम्मा... मैं दरी हूँ। दरी का चेकअप थोड़ी होता है!", kind: "whisper" } ] },
      { bg: "vet", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "lie", mood: "sad", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "Little rug, it's okay to feel scared. I'm right here.", hi: "मेरी प्यारी दरी, डर लगना ठीक है। मम्मा यहीं है ना।" } ] },
      { bg: "vet", chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "A vaccine is one tiny pinch. Germs can't catch you!", hi: "टीका बस चींटी जितनी चुभन है। फिर कीटाणु तुम्हें छू भी नहीं पाएँगे!" },
               { who: 1, en: "Tiny like an ant? ...Okay. Hold my paw?", hi: "चींटी जितनी? अच्छा... तो मेरा पंजा पकड़ोगे?" } ] },
      { bg: "vet", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.38 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        cap: { en: "Paw in Mumma's hand. One deep breath... pinch... all done!", hi: "मम्मा के हाथ में पंजा। एक लंबी साँस... चुभ... हो गया!" },
        say: [ { who: 0, en: "That's IT? Ha! I'm the bravest rug ever!", hi: "बस इतना सा? हा! मैं तो दुनिया की सबसे बहादुर दरी हूँ!", kind: "shout" } ],
        fx: { en: "PINCH!", hi: "चुभ!" }, action: true },
      { bg: "home", chars: [ { id: "papa", pose: "sit", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Back home: belly rubs and ONE crunchy carrot for the hero.", hi: "घर पहुँचकर: पेट पर गुदगुदी और हीरो के लिए एक कुरकुरी गाजर!" },
        say: [ { who: 0, en: "Our brave boy! Next time, give the vet a hug!", hi: "शाबाश मेरे शेर! अगली बार तो डॉक्टर को भी झप्पी देना!" } ],
        fx: { en: "YAY!", hi: "हुर्रे!" }, action: true }
    ]
  },

  // 5 — No chocolate for dogs
  {
    id: 5, age: "4-6", category: "habits",
    title: { en: "The Shiny Wrapper Mystery", hi: "चमकीले रैपर का राज़" },
    blurb: { en: "Something crinkly smells AMAZING. Will Auggie's puppy eyes win this time?", hi: "कोई चीज़ चर-चर करती है और गज़ब की खुशबू आती है! क्या आज ऑगी की भोली आँखें जीतेंगी?" },
    moral: { en: "Some yummy foods are unsafe for dogs, so we share dog-safe treats.", hi: "जो चीज़ें हमें मज़ेदार लगती हैं, वो कुत्तों को बीमार कर सकती हैं। उन्हें उनकी वाली चीज़ दो।" },
    cover: { bg: "kitchen", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.35 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.12 } ], fx: { en: "SNIFF!", hi: "सूँ-सूँ!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.33 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        cap: { en: "Crinkle, crinkle! Mumma opens something in a shiny wrapper.", hi: "चर-चर, चर-चर! मम्मा ने चमकीले रैपर वाली कोई चीज़ खोली।" },
        say: [ { who: 0, en: "Sniff! My nose says... something VERY yummy!", hi: "सूँ-सूँ! मेरी नाक कह रही है... कुछ तो बड़ा मज़ेदार है!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.33 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.75, flip: true } ],
        cap: { en: "Auggie tries his secret trick: Super Puppy Eyes!", hi: "ऑगी ने चलाई अपनी खास चाल: भोली-भोली, गोल-गोल आँखें!" },
        say: [ { who: 0, en: "Pleeease, Mumma? One teeny bite? I'm SO tiny.", hi: "प्लीज़ मम्मा? बस एक छोटा-सा टुकड़ा? मैं तो बहुत छोटा-सा हूँ!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "No, Auggie! Chocolate makes dogs very, very sick.", hi: "ना बाबा ना! चॉकलेट से कुत्ते बहुत बीमार पड़ जाते हैं!", kind: "shout" },
               { who: 0, en: "What if I eat it with my eyes closed?", hi: "और अगर मैं आँखें बंद करके खाऊँ तो?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Mumma's list: chocolate, grapes, onions, sweets. NOT for dogs!", hi: "मम्मा की लिस्ट: चॉकलेट, अंगूर, प्याज़, मिठाई — कुत्तों के लिए बिल्कुल नहीं!" },
        say: [ { who: 0, en: "So what can a poor, starving doggy eat?", hi: "तो फिर ये बेचारा, भूखा-प्यासा कुत्ता खाए क्या?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Ta-da! A crunchy carrot. Your favourite!", hi: "टा-डा! कुरकुरी, नारंगी गाजर! तुम्हारी फ़ेवरेट!" },
               { who: 0, en: "Hmm... shiny wrapper or carrot? CARROT!", hi: "हम्म... चमकीला रैपर या गाजर? गाजर!" } ],
        fx: { en: "TA-DA!", hi: "टा-डा!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.38 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.12 } ],
        say: [ { who: 0, en: "Thank you, Mumma! That's carrot one. Now... two?", hi: "थैंक यू मम्मा! एक गाजर हो गई... अब दूसरी कब?" } ],
        fx: { en: "CRUNCH!", hi: "कुर्र-कुर्र!" }, action: true }
    ]
  },

  // 6 — Sorry for chewing Papa's slipper
  {
    id: 6, age: "4-6", category: "feelings",
    title: { en: "The Case of the Chewed Chappal", hi: "पापा की चप्पल किसने चबाई?" },
    blurb: { en: "Papa's favourite slipper has tooth marks. Who could it be? (It's Auggie.)", hi: "पापा की प्यारी चप्पल पर दाँतों के निशान! किसके होंगे भला? (ऑगी के!)" },
    moral: { en: "When we make a mistake, a real sorry makes it better.", hi: "गलती हो जाए, तो दिल से सॉरी बोलो। सब ठीक हो जाता है।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.38 }, { id: "papa", pose: "think", mood: "surprised", x: 0.78, flip: true } ], props: [ { id: "bone", x: 0.12 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.42 } ],
        cap: { en: "Something soft and squishy by the door. Chomp, chomp!", hi: "दरवाज़े के पास कुछ नरम-नरम, गुदगुदा पड़ा है। चप-चप!" },
        say: [ { who: 0, en: "Mmm! Smells like Papa! Best chew toy EVER!", hi: "आहा! इसमें से पापा की खुशबू आती है! सबसे बढ़िया खिलौना!" } ],
        fx: { en: "CHOMP!", hi: "चप!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.3 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Auggie! Is that my favourite slipper?!", hi: "ऑगी! ये मेरी सबसे प्यारी चप्पल है क्या?!", kind: "shout" },
               { who: 0, en: "Slipper? What slipper? I see no slipper.", hi: "चप्पल? कौन-सी चप्पल? यहाँ कोई चप्पल-वप्पल नहीं है।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.33 }, { id: "papa", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "Papa holds up the soggy slipper. Auggie's ears droop... down... down.", hi: "पापा ने गीली, चबी हुई चप्पल उठाई। ऑगी के कान नीचे... और नीचे।" },
        say: [ { who: 0, en: "Uh-oh. Papa's sad face. That's worse than no dinner.", hi: "उफ़! पापा का उदास चेहरा... ये तो खाना न मिलने से भी बुरा है।", kind: "think" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Mumma, can a carrot fix a sad Papa?", hi: "मम्मा, एक गाजर देने से पापा खुश हो जाएँगे?" },
               { who: 1, en: "No, silly! But a real sorry can.", hi: "बुद्धू! गाजर से नहीं, दिल वाले सॉरी से।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "sad", x: 0.33 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie brings the slipper back and lifts one soft paw.", hi: "ऑगी चप्पल वापस लाया और धीरे से अपना पंजा आगे बढ़ाया।" },
        say: [ { who: 0, en: "Sorry, Papa. I chewed it. It smelled like you.", hi: "सॉरी पापा। मैंने ही चबाई थी... उसमें आपकी खुशबू थी ना।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "bone", x: 0.52 } ],
        say: [ { who: 0, en: "Here, my best bone. For you, Papa!", hi: "ये लो मेरी सबसे अच्छी हड्डी। आपके लिए, पापा!" },
               { who: 1, en: "Sorry accepted! You chew bones, I wear slippers. Deal?", hi: "सॉरी मंज़ूर! हड्डी तुम चबाओ, चप्पल मैं पहनूँ। पक्का?" } ],
        fx: { en: "HUG!", hi: "झप्पी!" }, action: true }
    ]
  },

  // 7 — Waiting patiently for dinner
  {
    id: 7, age: "4-6", category: "habits",
    title: { en: "Auggie's Rumbly Tummy", hi: "ऑगी के पेट में चूहे!" },
    blurb: { en: "Auggie's tummy is rumbling like a truck. Can he wait five whole minutes?", hi: "ऑगी के पेट में चूहे कूद रहे हैं! क्या वो पूरे पाँच मिनट रुक पाएगा?" },
    moral: { en: "Waiting is hard, but patient paws get the best surprises.", hi: "इंतज़ार मुश्किल है, पर सब्र करने वालों को सबसे बढ़िया सरप्राइज़ मिलता है।" },
    cover: { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.35 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.55 } ], fx: { en: "RUMBLE!", hi: "गुड़-गुड़!" } },
    panels: [
      { bg: "kitchen", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.35 } ], props: [ { id: "bowl", x: 0.65 }, { id: "clock", x: 0.85, y: 0.2 } ],
        cap: { en: "Seven o'clock. Auggie's tummy rumbles like a truck!", hi: "सात बज गए। ऑगी के पेट में चूहे कूदने लगे!" },
        say: [ { who: 0, en: "Dinner! Dinner! Can anyone hear my tummy?", hi: "खाना! खाना! कोई मेरे पेट की आवाज़ सुन रहा है?", kind: "shout" } ],
        fx: { en: "RUMBLE!", hi: "गुड़-गुड़!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Coming, coming! First I'll wash your bowl, beta.", hi: "आई, आई! पहले तेरा कटोरा तो धो लूँ, बेटा।" },
               { who: 0, en: "FIRST? How long is first?", hi: "पहले?! ये 'पहले' कितना लंबा होता है?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.33 }, { id: "dadi", pose: "point", mood: "surprised", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.55 } ],
        say: [ { who: 0, en: "Boing! Ready? Boing! Now? Boing!", hi: "टप! हो गया? टप! अब? टप!" },
               { who: 1, en: "Arre! Jumping won't make the food jump faster!", hi: "अरे बाबा! तेरे उछलने से खाना जल्दी नहीं उछलेगा!", kind: "shout" } ],
        fx: { en: "BOING!", hi: "धम!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.33 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.55 } ],
        cap: { en: "Dadi's trick: sit still, and count carrots in your head.", hi: "दादी की तरकीब: चुपचाप बैठो और मन में गाजरें गिनो।" },
        say: [ { who: 1, en: "Sit... wait... that's my good boy!", hi: "बैठ जा... रुक जा... शाबाश मेरा राजा बेटा!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.33 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "bowl", x: 0.56 } ],
        say: [ { who: 0, en: "One carrot... two carrots... ninety carrots... still waiting!", hi: "एक गाजर... दो गाजर... नब्बे गाजर... अभी भी इंतज़ार!", kind: "think" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.35 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "bowl", x: 0.56 } ],
        say: [ { who: 1, en: "Done! And for patient paws... a secret pallu carrot!", hi: "लो, खाना हाज़िर! और सब्र वाले के लिए... पल्लू वाली गाजर!" },
               { who: 0, en: "Carrot number ninety-one! Worth the wait!", hi: "इक्यानवे नंबर वाली गाजर! इंतज़ार का मज़ा आ गया!" } ],
        fx: { en: "GULP!", hi: "गप!" }, action: true }
    ]
  },

  // 8 — Scared of thunder
  {
    id: 8, age: "4-6", category: "feelings",
    title: { en: "Who's Shouting in the Sky?", hi: "आसमान में कौन चिल्लाया?" },
    blurb: { en: "BOOM! Something in the sky is very noisy tonight. And where did Auggie go?", hi: "धड़ाम! आज रात आसमान बहुत शोर मचा रहा है। और ऑगी कहाँ गायब हो गया?" },
    moral: { en: "Scared is okay. Hugs and a calm song make it smaller.", hi: "डर लगना ठीक है। झप्पी और धीमी-सी लोरी से डर छोटा हो जाता है।" },
    cover: { bg: "rain", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.4 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.78, flip: true } ], props: [ { id: "cloud", x: 0.2, y: 0.15 } ], fx: { en: "BOOM!", hi: "धड़ाम!" } },
    panels: [
      { bg: "rain", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.4 } ], props: [ { id: "cloud", x: 0.25, y: 0.15 }, { id: "cloud", x: 0.75, y: 0.12 } ],
        cap: { en: "Dark clouds roll over Chamakpur. Whoooosh goes the wind!", hi: "चमकपुर पर काले-काले बादल घिर आए। हवा चली — सूँ-सूँ-सूँ!" },
        say: [ { who: 0, en: "Why's the sky so grumpy? Did someone steal its carrot?", hi: "आसमान इतना मुँह फुलाए क्यों है? किसी ने उसकी गाजर ले ली क्या?" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "run", mood: "scared", x: 0.45 } ],
        cap: { en: "BOOM! Auggie dives under the bed... well, most of him.", hi: "धड़ाम! ऑगी बिस्तर के नीचे घुस गया... यानी, आधा ऑगी।" },
        say: [ { who: 0, en: "Hide! Hide! Nobody can see me!", hi: "छुपो! छुपो! मुझे कोई नहीं देख सकता!", kind: "shout" } ],
        fx: { en: "BOOM!", hi: "गड़-गड़!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Papa! The sky's shouting at me! What did I do?", hi: "पापा! आसमान मुझ पर चिल्ला रहा है! मैंने क्या किया?", kind: "whisper" } ] },
      { bg: "bedroom", chars: [ { id: "papa", pose: "sit", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "lie", mood: "surprised", x: 0.5 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Papa and Mumma sit on the floor right beside him.", hi: "पापा और मम्मा फ़र्श पर उसके पास आकर बैठ गए।" },
        say: [ { who: 0, en: "It's just clouds bumping heads. Ouch! Say sorry, clouds!", hi: "अरे, ये तो बादल आपस में टकरा रहे हैं। बादलों, सॉरी बोलो!" } ] },
      { bg: "bedroom", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "Mumma hums a lullaby. Slowly, one golden nose peeks out.", hi: "मम्मा लोरी गुनगुनाती हैं। धीरे से एक सुनहरी नाक बाहर झाँकती है।" },
        say: [ { who: 0, en: "Lalla-lalla lori... thunder goes away, hugs stay!", hi: "लल्ला-लल्ला लोरी... बादल जाएँ दूर, झप्पी रहे भरपूर!" } ] },
      { bg: "bedroom", chars: [ { id: "papa", pose: "lie", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "lie", mood: "sleepy", x: 0.5 }, { id: "mumma", pose: "lie", mood: "sleepy", x: 0.8, flip: true } ],
        cap: { en: "Far away, the storm grumbles. In here, three sleepyheads snuggle.", hi: "दूर कहीं बादल बड़बड़ा रहे हैं। यहाँ तीन नींद के मारे चिपककर सो रहे हैं।" },
        say: [ { who: 1, en: "Thunder's still out there. But you're in here.", hi: "बादल अब भी गरज रहे हैं... पर आप दोनों तो यहीं हो।", kind: "whisper" } ] }
    ]
  },

  // 9 — Papa's laptop day
  {
    id: 9, age: "4-6", category: "family",
    title: { en: "Auggie, Chief Nap Officer", hi: "ऑगी साहब का ऑफ़िस" },
    blurb: { en: "Papa has a big work day. Auggie has big plans... for the keyboard.", hi: "पापा का आज बहुत काम है। और ऑगी? उसकी नज़र है लैपटॉप के कीबोर्ड पर!" },
    moral: { en: "When someone is busy, help quietly, then play together later.", hi: "जब कोई काम कर रहा हो, चुपचाप साथ दो। खेल बाद में, साथ-साथ!" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.52 } ], fx: { en: "TAP-TAP!", hi: "टक-टक!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.53 } ],
        cap: { en: "Papa opens his laptop. Very serious work time!", hi: "पापा ने लैपटॉप खोला। अब बड़ा ज़रूरी काम!" },
        say: [ { who: 0, en: "Can I work too? I'm very smart. I know 'sit'!", hi: "मैं भी काम करूँ? मैं बहुत होशियार हूँ, मुझे 'बैठो' आता है!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.5 } ],
        cap: { en: "Auggie helps. His big nose types: gggggggggg!", hi: "ऑगी ने मदद की। उसकी बड़ी नाक ने टाइप किया: gggggggggg!" },
        say: [ { who: 1, en: "Ha! You just sent my whole office 'gggg'!", hi: "हा हा! तुमने तो मेरे पूरे ऑफ़िस को 'gggg' भेज दिया!" } ],
        fx: { en: "TAP-TAP!", hi: "टक-टक!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.53 } ],
        say: [ { who: 1, en: "Tell you what: you're my Chief Nap Officer!", hi: "सुनो, आज से तुम मेरे 'सोने वाले बड़े साहब' हो!" },
               { who: 0, en: "A nap job? I was BORN for this!", hi: "सोने की नौकरी? ये तो मेरे लिए ही बनी है!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.53 }, { id: "clock", x: 0.9, y: 0.2 } ],
        cap: { en: "The Chief Nap Officer works very, very hard. Shh!", hi: "सोने वाले बड़े साहब बहुत मेहनत से काम कर रहे हैं। श्श!" },
        say: [ { who: 0, en: "Zzz... do not disturb... big meeting... with my pillow.", hi: "खर्र... डिस्टर्ब मत करो... तकिये के साथ मीटिंग चल रही है...", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.2 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "wave", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Mittsy! Lunch! Wake up your hardworking boss!", hi: "मिट्सी! खाना लग गया! अपने मेहनती साहब को उठाओ!" },
               { who: 1, en: "Can't. He's in a very long meeting!", hi: "नहीं उठेंगे। इनकी मीटिंग बहुत लंबी चल रही है!" } ] },
      { bg: "river", chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.28 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.65, flip: true } ], props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Work done! Now a lake walk, red leash on.", hi: "काम खत्म! अब लाल पट्टा पहनकर झील किनारे सैर।" },
        say: [ { who: 1, en: "Best office ever! Same time tomorrow, Papa?", hi: "ये ऑफ़िस तो ज़बरदस्त है! कल फिर आऊँ, पापा?" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true }
    ]
  },

  // 10 — Dadi's bedtime story
  {
    id: 10, age: "4-6", category: "family",
    title: { en: "Once Upon a Tiny Golden Puppy", hi: "एक था नन्हा-सा सुनहरा पिल्ला" },
    blurb: { en: "Dadi's bedtime story has a tiny puppy, a big house... and a BIG secret!", hi: "दादी की कहानी में है एक नन्हा पिल्ला, एक बड़ा-सा घर... और एक बड़ा राज़!" },
    moral: { en: "Family stories remind us how loved we are.", hi: "परिवार की कहानियाँ याद दिलाती हैं कि हमें कितना प्यार मिलता है।" },
    cover: { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "book", x: 0.52 }, { id: "star", x: 0.15, y: 0.15 } ] },
    panels: [
      { bg: "bedroom", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Bedtime! But Auggie's eyes are wide, wide open.", hi: "सोने का टाइम! पर ऑगी की आँखें तो पूरी की पूरी खुली हैं।" },
        say: [ { who: 0, en: "Dadi, one story? I'll lie down super nicely. Promise!", hi: "दादी, एक कहानी? मैं एकदम अच्छे बच्चे की तरह लेटूँगा। पक्का!" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "book", x: 0.52 } ],
        say: [ { who: 1, en: "First, a carrot... from my secret pallu! Shh!", hi: "पहले एक गाजर... मेरे खुफ़िया पल्लू से! श्श!", kind: "whisper" },
               { who: 0, en: "Dadi, EVERYBODY knows about your pallu carrots!", hi: "दादी, आपके पल्लू वाली गाजर तो पूरा मोहल्ला जानता है!" } ],
        fx: { en: "CRUNCH!", hi: "कुरकुर!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.5, s: 0.6 } ],
        cap: { en: "Dadi's story: once, a tiny golden puppy came to a big house.", hi: "दादी की कहानी: एक बार एक नन्हा सुनहरा पिल्ला एक बड़े-से घर में आया।" },
        say: [ { who: 0, en: "Everything is SO big! Even the slippers look scary!", hi: "बाप रे, सब कुछ कितना बड़ा है! चप्पलें भी डरावनी लग रही हैं!", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5, s: 0.6 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.78, flip: true } ],
        cap: { en: "Then two kind people scooped him up for a big hug.", hi: "फिर दो प्यारे-प्यारे लोगों ने उसे उठाया और कसके गले लगा लिया।" },
        say: [ { who: 2, en: "Welcome home, little one! You're OUR puppy now!", hi: "आजा मेरे नन्हे! अब तू हमारा है, पक्का!" } ],
        fx: { en: "HUG!", hi: "झप्पी!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Dadi... big nose, red collar... was that puppy ME?", hi: "दादी... बड़ी नाक, लाल कॉलर... वो पिल्ला मैं था क्या?" },
               { who: 1, en: "Yes! And you snored even then!", hi: "हाँ रे! और खर्राटे तब भी ऐसे ही लेता था!" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.33 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.12 } ],
        cap: { en: "Auggie falls asleep, dreaming of that very first hug.", hi: "ऑगी उस पहली झप्पी के सपने देखते-देखते सो गया।" },
        say: [ { who: 1, en: "Sleep tight, my golden boy. Snore away!", hi: "सो जा, मेरे सोने से बच्चे। जी भर के खर्राटे ले!", kind: "whisper" } ] }
    ]
  },

  // 11 — Nanu's morning walk
  {
    id: 11, age: "4-6", category: "habits",
    title: { en: "Nanu's Stop-Look-Go Walk", hi: "नानू की रुको-देखो-चलो सैर" },
    blurb: { en: "A squirrel, a busy road, and one very excited Labrador. Uh-oh!", hi: "एक गिलहरी, एक भीड़ वाली सड़क, और एक बहुत उछलता ऑगी। अब क्या होगा?" },
    moral: { en: "Leash on, stop, look both ways, then cross together.", hi: "पट्टा पहनो, रुको, दोनों तरफ़ देखो, फिर साथ मिलकर सड़क पार करो।" },
    cover: { bg: "city", chars: [ { id: "nanu", pose: "point", mood: "happy", x: 0.28 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.65, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.1 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "clock", x: 0.9, y: 0.2 } ],
        cap: { en: "Six a.m.! Nanu is ready in his blue suit. Of course.", hi: "सुबह के छह बजे! नानू सैर के लिए तैयार — सूट-टाई में, हमेशा की तरह!" },
        say: [ { who: 0, en: "Walk? WALK?! The best word in the world!", hi: "सैर? सैर?! दुनिया का सबसे प्यारा शब्द!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Fun fact: Labradors run super fast. So, leash first!", hi: "एक मज़ेदार बात: लैब्राडोर बहुत तेज़ भागते हैं। इसीलिए पहले पट्टा!" },
               { who: 0, en: "Nanu, it's six a.m.! Even facts are sleeping!", hi: "नानू, सुबह छह बजे भी साइंस? साइंस भी अभी सो रही होगी!" } ] },
      { bg: "city", chars: [ { id: "nanu", pose: "point", mood: "surprised", x: 0.12 }, { id: "auggie", pose: "run", mood: "determined", x: 0.4 }, { id: "squirrel", pose: "stand", mood: "laugh", x: 0.88, flip: true } ], props: [ { id: "car", x: 0.64 } ],
        say: [ { who: 0, en: "STOP, Auggie! Car coming!", hi: "रुको ऑगी! गाड़ी आ रही है!", kind: "shout" },
               { who: 2, en: "Hee hee! Can't catch Chunmun!", hi: "ही-ही! चुनमुन को पकड़ के दिखाओ!" } ],
        fx: { en: "BEEP!", hi: "पीं-पीं!" }, action: true },
      { bg: "city", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Phew! My heart went BEEP-BEEP too!", hi: "उफ़्फ़! मेरा दिल भी पीं-पीं कर रहा था!" },
               { who: 1, en: "Good sit! Now: stop, look left, look right. Then go.", hi: "शाबाश, बैठ गए! अब रुको, बाएँ देखो, दाएँ देखो, फिर चलो।" } ] },
      { bg: "city", chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.28 }, { id: "auggie", pose: "think", mood: "happy", x: 0.66, flip: true } ],
        cap: { en: "Left... right... all clear! Paws and shoes cross together.", hi: "बाएँ... दाएँ... सब साफ़! पंजे और जूते साथ-साथ पार।" },
        say: [ { who: 1, en: "Left, right, go! I'm a road-crossing genius!", hi: "बाएँ, दाएँ, चलो! मैं तो सड़क पार करने का उस्ताद हूँ!" } ] },
      { bg: "river", chars: [ { id: "nanu", pose: "point", mood: "happy", x: 0.28 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.66, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.1 }, { id: "tree", x: 0.08 } ],
        cap: { en: "By the lake, Nanu shares one more fact. Nobody asked. Still!", hi: "झील किनारे नानू ने एक और बात बताई। किसी ने पूछा नहीं था, फिर भी!" },
        say: [ { who: 0, en: "Fact! Your nose sniffs thousands of times better than mine!", hi: "पता है? तुम्हारी नाक मेरी नाक से हज़ारों गुना तेज़ सूँघती है!" } ] }
    ]
  },

  // 12 — Mausi teaches sit and paw
  {
    id: 12, age: "4-6", category: "family",
    title: { en: "Sit, Auggie! No, SIT!", hi: "बैठो ऑगी! अरे, बैठो!" },
    blurb: { en: "Mausi says 'sit'. Auggie rolls over. Mausi says 'SIT!' Auggie... rolls again?", hi: "मौसी कहती हैं 'बैठो'। ऑगी लोट जाता है। मौसी फिर कहती हैं... और ऑगी फिर लोट!" },
    moral: { en: "Practise a little every day, and you'll get there!", hi: "रोज़ थोड़ी-थोड़ी प्रैक्टिस करो, एक दिन कमाल कर दोगे!" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "apple", x: 0.52 } ], fx: { en: "PAW!", hi: "पंजा!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "wave", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.92 } ],
        cap: { en: "Mausi's Trick School is open! Students: one. Very fluffy.", hi: "मौसी का ट्रिक स्कूल खुल गया! बच्चे: सिर्फ़ एक, वो भी रोएँदार!" },
        say: [ { who: 1, en: "Lesson one: SIT! But first... selfie! Hold that pose!", hi: "पहला सबक: बैठो! पर पहले... सेल्फ़ी! हिलना मत!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.35 }, { id: "mausi", pose: "think", mood: "surprised", x: 0.75, flip: true } ],
        say: [ { who: 0, en: "Ta-da! Sitting... sideways!", hi: "टा-डा! बैठा हूँ... लेटे-लेटे!" },
               { who: 1, en: "That's not sit! That's a roll-over! Again?!", hi: "ये बैठना नहीं, ये तो लोटना है! फिर से?!" } ],
        fx: { en: "FLOP!", hi: "धप्प!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "mausi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "I tried ten times, Mausi. My legs won't listen!", hi: "मौसी, दस बार कोशिश की। मेरे पैर बात ही नहीं मानते!" },
               { who: 1, en: "Then let's try eleven. With my secret trick!", hi: "तो चलो ग्यारहवीं बार! इस बार मेरी सीक्रेट तरकीब से।" } ] },
      { bg: "garden", chars: [ { id: "mausi", pose: "point", mood: "happy", x: 0.22 }, { id: "auggie", pose: "sit", mood: "determined", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Mausi holds an apple slice high. Nose up... tail down... SIT!", hi: "मौसी ने सेब का टुकड़ा ऊपर उठाया। नाक ऊपर... पूँछ नीचे... बैठ गया!" },
        say: [ { who: 2, en: "Go, Auggie! Go, Chottu! Woo-hoo-hoo!", hi: "चलो ऑगी! चलो छोटू! तुम दोनों कर लोगे!", kind: "shout" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.33 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "apple", x: 0.53 } ],
        say: [ { who: 1, en: "He SAT! Apple for my star! Hold that pose!", hi: "बैठ गया! मेरे स्टार को सेब! बस, ऐसे ही रुकना... क्लिक!" } ],
        fx: { en: "YAY!", hi: "हुर्रे!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "wave", mood: "laugh", x: 0.33 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Every day, a little practice. Now Auggie does 'paw' too!", hi: "रोज़ थोड़ी-थोड़ी प्रैक्टिस। अब ऑगी पंजा भी देता है!" },
        say: [ { who: 0, en: "High paw, Mausi! Now take MY selfie!", hi: "हाई-पंजा, मौसी! अब मेरी वाली सेल्फ़ी लो!" } ],
        fx: { en: "HIGH PAW!", hi: "हाई-पंजा!" }, action: true }
    ]
  },

  // 13 — The lost tennis ball
  {
    id: 13, age: "4-6", category: "home",
    title: { en: "The Great Ball Hunt", hi: "बॉल गई कहाँ?" },
    blurb: { en: "Auggie's tennis ball has vanished! Can the best nose in Chamakpur find it?", hi: "ऑगी की टेनिस बॉल छू-मंतर हो गई! क्या चमकपुर की सबसे तेज़ नाक उसे ढूँढ पाएगी?" },
    moral: { en: "Keep your things in their place, and they're easy to find.", hi: "अपनी चीज़ें अपनी जगह रखो, तो ढूँढना ही नहीं पड़ेगा।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.38 } ], props: [ { id: "ball", x: 0.82 } ], fx: { en: "SNIFF!", hi: "सूँ-सूँ!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.42 } ],
        cap: { en: "Oh no! Auggie's tennis ball is MISSING!", hi: "हाय राम! ऑगी की टेनिस बॉल गायब!" },
        say: [ { who: 0, en: "Don't worry, ball! My super nose is coming!", hi: "घबराओ मत, बॉल! मेरी सुपर नाक आ रही है!", kind: "shout" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.33 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        say: [ { who: 1, en: "No ball here, beta. Only my secret carrot... oops!", hi: "यहाँ बॉल-वॉल नहीं है, बेटा। बस मेरी खुफ़िया गाजर... अरे, बोल दिया!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.52 } ],
        cap: { en: "Behind the sofa, under the shoes... onto Papa's keyboard!", hi: "सोफ़े के पीछे, जूतों के नीचे... और सीधे पापा के कीबोर्ड पर!" },
        say: [ { who: 1, en: "Buddy, my laptop has no ball. Just boring emails!", hi: "अरे बेटा, मेरे लैपटॉप में बॉल नहीं, बस बोरिंग ईमेल हैं!" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.45, s: 1.2 } ],
        cap: { en: "Tired and sad, Auggie flops onto the big leafy bed.", hi: "थका-हारा, उदास ऑगी पत्तों वाले बड़े बिस्तर पर धप्प से गिरा।" },
        say: [ { who: 0, en: "My ball is gone forever. Goodbye, bouncy friend...", hi: "मेरी बॉल हमेशा के लिए चली गई... अलविदा, मेरी टप्पे वाली दोस्त...", kind: "whisper" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.38 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "ball", x: 0.56 } ],
        say: [ { who: 1, en: "Auggie! What's that round lump under your tummy?", hi: "ऑगी! तुम्हारे पेट के नीचे ये गोल-गोल क्या दबा है?" } ],
        fx: { en: "BOING!", hi: "टप्पा!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.33 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.52, y: 0.35 } ],
        cap: { en: "Auggie's new rule: the ball lives in the toy basket!", hi: "ऑगी का नया नियम: अब बॉल खिलौनों की टोकरी में रहेगी!" },
        say: [ { who: 0, en: "My ball! I was sleeping on it ALL morning!", hi: "मेरी बॉल! मैं तो सुबह से इसी पर सो रहा था!" } ] }
    ]
  },

  // 14 — Mumma's birthday surprise
  {
    id: 14, age: "4-6", category: "family",
    title: { en: "Shhh! Mumma's Birthday Secret", hi: "श्श्श! मम्मा का बर्थडे सरप्राइज़" },
    blurb: { en: "It's Mumma's birthday! Everyone has a secret. Can Auggie keep his mouth shut?", hi: "आज मम्मा का बर्थडे है! सबके पास एक सीक्रेट है। पर क्या ऑगी का मुँह बंद रहेगा?" },
    moral: { en: "The best gifts are made with love, not money.", hi: "सबसे अच्छा तोहफ़ा पैसों से नहीं, प्यार से बनता है।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mumma", pose: "cheer", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "cake", x: 0.52 }, { id: "balloon", x: 0.12, y: 0.2 }, { id: "balloon", x: 0.9, y: 0.18 } ], fx: { en: "SURPRISE!", hi: "सरप्राइज़!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Shh! Today is Mumma's birthday. Top secret mission!", hi: "श्श! आज मम्मा का बर्थडे है। एकदम टॉप सीक्रेट मिशन!" },
        say: [ { who: 1, en: "Mumma loves lists, so... Surprise List, item one: SHHH!", hi: "मम्मा हर चीज़ की लिस्ट बनाती है। तो हमारी लिस्ट की पहली बात: चुप!", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "mausi", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "balloon", x: 0.12, y: 0.2 }, { id: "balloon", x: 0.9, y: 0.2 } ],
        cap: { en: "Mausi blows balloons. Dadi bakes a cake. Auggie... supervises.", hi: "मौसी गुब्बारे फुला रही हैं। दादी केक बना रही हैं। और ऑगी? निगरानी!" },
        say: [ { who: 1, en: "I'm helping! I'm the official balloon sniffer!", hi: "मैं भी मदद कर रहा हूँ! मैं गुब्बारे सूँघने वाला अफ़सर हूँ!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.33 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "balloon", x: 0.55, y: 0.3 } ],
        cap: { en: "Wag, wag... POP! Auggie's happy tail strikes again!", hi: "हिल-हिल... फट! ऑगी की खुश पूँछ ने फिर कमाल कर दिया!" },
        say: [ { who: 1, en: "Ha! Hold that pose, balloon-popper! Selfie!", hi: "हा हा! रुको-रुको, गुब्बारा-फोड़ू! सेल्फ़ी तो बनती है!" } ],
        fx: { en: "POP!", hi: "फट!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.35 } ], props: [ { id: "flower", x: 0.68 }, { id: "flower", x: 0.85 }, { id: "tree", x: 0.08 } ],
        cap: { en: "Auggie has no gift. Then he spots a fallen yellow flower.", hi: "ऑगी के पास कोई तोहफ़ा नहीं। तभी उसे ज़मीन पर गिरा एक पीला फूल दिखा।" },
        say: [ { who: 0, en: "Yellow, like me! Mumma will LOVE it!", hi: "अरे, मेरे जैसा पीला! मम्मा को तो बहुत पसंद आएगा!", kind: "think" } ] },
      { bg: "home", chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "balloon", x: 0.35, y: 0.15 }, { id: "balloon", x: 0.65, y: 0.15 } ],
        cap: { en: "Mumma walks in. Click! Lights on! Everyone shouts...", hi: "मम्मा अंदर आईं। खट! लाइट ऑन! सब एक साथ चिल्लाए..." },
        say: [ { who: 2, en: "Mittsy! Auggie! So THAT'S why something went POP!", hi: "मिट्सी! ऑगी! तो वो 'फट' की आवाज़ इसी की थी?!" } ],
        fx: { en: "SURPRISE!", hi: "सरप्राइज़!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.68, flip: true } ], props: [ { id: "flower", x: 0.49 }, { id: "cake", x: 0.9 } ],
        cap: { en: "Cake for the family. A carrot for Auggie. Mumma's laugh fills the lane!", hi: "सबके लिए केक, ऑगी के लिए गाजर। मम्मा की हँसी पूरे मोहल्ले में गूँजी!" },
        say: [ { who: 0, en: "Happy birthday, Mumma! This flower is yellow, like me!", hi: "हैप्पी बर्थडे, मम्मा! ये फूल आपके लिए... मेरे जैसा पीला!" } ] }
    ]
  },

  // 15 — Feeling jealous when Mumma pets another dog
  {
    id: 15, age: "4-6", category: "feelings",
    title: { en: "Hmph! That's MY Mumma!", hi: "हुँह! वो मेरी मम्मा हैं!" },
    blurb: { en: "Mumma is patting another dog. A pug! Is Auggie's tail wagging? Not today.", hi: "मम्मा किसी और कुत्ते को सहला रही हैं! एक पग को! ऑगी की पूँछ? बिल्कुल बंद!" },
    moral: { en: "Love grows when we share it. There's enough for everyone.", hi: "प्यार बाँटने से घटता नहीं, बढ़ता है। सबके लिए काफ़ी है।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "angry", x: 0.2 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.5 }, { id: "pinku", pose: "sit", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "tree", x: 0.95 } ] },
    panels: [
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "frisbee", x: 0.5, y: 0.3 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Sunday at the park! Just Auggie and Mumma.", hi: "संडे को पार्क! बस ऑगी और मम्मा, और कोई नहीं।" },
        say: [ { who: 0, en: "Throw it, Mumma! Throw it! THROW IT!", hi: "फेंको मम्मा! फेंको ना! अरे फेंको भी!", kind: "shout" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.15 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.45 }, { id: "pinku", pose: "sit", mood: "sad", x: 0.78, flip: true } ],
        cap: { en: "Then they see Pinku the pug, sitting alone. Very dramatically.", hi: "तभी दिखा पिंकू पग — अकेला बैठा, पूरे ड्रामे के साथ।" },
        say: [ { who: 2, en: "Sniff... nobody plays with me. I'll just fade away...", hi: "सुड़क... मेरे साथ कोई नहीं खेलता। मैं तो यहीं गुम हो जाऊँगा..." } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "angry", x: 0.2 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.52 }, { id: "pinku", pose: "lie", mood: "happy", x: 0.82, flip: true } ],
        cap: { en: "Mumma pats Pinku. Pat, pat, pat. Auggie's tail stops.", hi: "मम्मा ने पिंकू को सहलाया। थप, थप, थप। ऑगी की पूँछ रुक गई।" },
        say: [ { who: 0, en: "Hmph! That's MY Mumma! And MY pats!", hi: "हुँह! वो मेरी मम्मा हैं! और वो मेरी वाली थपकियाँ!", kind: "think" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Auggie, is someone feeling a teeny bit jealous?", hi: "ऑगी, किसी को थोड़ी-सी जलन हो रही है क्या?" },
               { who: 0, en: "Maybe... a tiny bit. About one carrot big.", hi: "शायद... थोड़ी-सी। बस एक गाजर जितनी।", kind: "whisper" } ] },
      { bg: "park", chars: [ { id: "mumma", pose: "sit", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "Silly! My heart is super big. You're always number one!", hi: "पगले, मेरा दिल बहुत बड़ा है। तू तो हमेशा मेरा नंबर वन है!" } ],
        fx: { en: "HUG!", hi: "झप्पी!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "pinku", pose: "run", mood: "laugh", x: 0.72 } ], props: [ { id: "frisbee", x: 0.5, y: 0.3 } ],
        cap: { en: "Auggie shares his frisbee. Now two happy tails are wagging!", hi: "ऑगी ने अपनी फ़्रिस्बी बाँट ली। अब दो पूँछें हिल रही हैं!" },
        say: [ { who: 1, en: "Snort! Best day EVER! I may faint from joy!", hi: "फ़्रुर्र! आज का दिन सबसे बढ़िया! मैं तो खुशी से बेहोश हो जाऊँगा!" } ],
        fx: { en: "WHEE!", hi: "हुर्रे!" }, action: true }
    ]
  },

  // 16 — Sharing toys with Chiku
  {
    id: 16, age: "4-6", category: "friends",
    title: { en: "Chiku and the Toy Mountain", hi: "ऑगी का खिलौना-पहाड़" },
    blurb: { en: "Tiny Chiku wants to play. Big Auggie is lying on EVERY toy. Now what?", hi: "नन्हा चीकू खेलना चाहता है। पर बड़ा ऑगी तो सारे खिलौनों पर चढ़कर लेटा है! अब?" },
    moral: { en: "Share your toys and 'mine' becomes 'ours'. Double the fun!", hi: "बाँटो तो 'मेरा' बन जाता है 'हमारा', और मज़ा हो जाता है दुगना!" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "chiku", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "ball", x: 0.55 }, { id: "bone", x: 0.12 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "chiku", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Ding-dong! Tiny Chiku zooms in. First, as always!", hi: "टिंग-टोंग! नन्हा चीकू फ़र्राटे से अंदर। हमेशा की तरह सबसे पहले!" },
        say: [ { who: 1, en: "FIRST! I'm first! Auggie, can I play with your toys?", hi: "पहला! मैं पहला! ऑगी, तुम्हारे खिलौनों से खेलूँ?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "determined", x: 0.45 } ], props: [ { id: "ball", x: 0.2 }, { id: "bone", x: 0.7 }, { id: "frisbee", x: 0.88 } ],
        cap: { en: "Auggie grabs every toy and flops on top. Toy Mountain!", hi: "ऑगी ने सारे खिलौने समेटे और ऊपर चढ़कर लेट गया। खिलौना-पहाड़!" },
        say: [ { who: 0, en: "Mine! Mine! All mine! Ouch... the bone is poking me.", hi: "मेरे! मेरे! सब मेरे! उई... हड्डी चुभ रही है।", kind: "shout" } ],
        fx: { en: "GRAB!", hi: "झपट!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.3 }, { id: "chiku", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Oh. Okay. I'll just... count the floor tiles.", hi: "अच्छा... कोई बात नहीं। मैं बस... फ़र्श की टाइलें गिन लेता हूँ।", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.9 } ],
        say: [ { who: 1, en: "Buddy, what if Chiku lay on all YOUR toys?", hi: "बेटा, अगर चीकू तुम्हारे सारे खिलौनों पर लेट जाए तो?" },
               { who: 0, en: "I'd feel like... a carrot with no crunch.", hi: "तो मुझे लगेगा... जैसे बिना कुरकुर वाली गाजर।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "chiku", pose: "cheer", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.52 } ],
        say: [ { who: 0, en: "Chiku! You pick first. You LOVE being first!", hi: "चीकू! पहले तुम चुनो। तुम्हें तो पहला बनना पसंद है ना!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.7 } ], props: [ { id: "ball", x: 0.9, y: 0.45 }, { id: "bush", x: 0.05 } ],
        cap: { en: "Tiny Chiku is SUPER fast! Two friends, double fun.", hi: "नन्हा चीकू तो बिजली जैसा तेज़! दो दोस्त, दुगना मज़ा।" },
        say: [ { who: 1, en: "First to the ball! Catch me, Toy Mountain!", hi: "बॉल तक पहला मैं! पकड़ो मुझे, खिलौना-पहाड़!" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true }
    ]
  },

  // 17 — Drinking water on a hot day
  {
    id: 17, age: "4-6", category: "habits",
    title: { en: "Too Hot to Trot!", hi: "उफ़्फ़ ये गर्मी!" },
    blurb: { en: "It's so hot the road is sizzling. But Auggie still wants his walk. Uh-oh!", hi: "इतनी गर्मी कि सड़क भी तप रही है! पर ऑगी को तो अभी सैर करनी है!" },
    moral: { en: "On hot days, drink water, rest in the shade, and walk when it's cool.", hi: "गर्मी में खूब पानी पियो, छाँव में आराम करो, और ठंडक में टहलो।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.38 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.6 }, { id: "sun", x: 0.85, y: 0.1 }, { id: "tree", x: 0.1 } ], fx: { en: "SLURP!", hi: "सुड़प!" } },
    panels: [
      { bg: "city", chars: [ { id: "auggie", pose: "stand", mood: "sad", x: 0.3 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.1 } ],
        say: [ { who: 0, en: "Hot! Hot! HOT! My tongue is melting to my toes!", hi: "गरम! गरम! गरम! मेरी जीभ तो पिघलकर पैरों तक आ गई!" },
               { who: 1, en: "Road's too hot for paws! Home, buddy. Walk later.", hi: "सड़क बहुत तप रही है, पंजे जल जाएँगे! घर चलो, सैर शाम को।" } ],
        fx: { en: "SIZZLE!", hi: "छन्न!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.33 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.75, flip: true } ],
        cap: { en: "Home! Auggie flops on the cool floor like melted ice cream.", hi: "घर पहुँचते ही ऑगी ठंडे फ़र्श पर पिघली कुल्फ़ी की तरह पसर गया।" },
        say: [ { who: 1, en: "Hai Ram! Is that Auggie, or a puddle of butter?", hi: "हाय राम! ये ऑगी है या पिघला हुआ मक्खन?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.52 } ],
        say: [ { who: 1, en: "Hot day rule: fresh, cool water. Lots and lots!", hi: "गर्मी का पहला नियम: ठंडा, ताज़ा पानी। ढेर सारा!" },
               { who: 0, en: "Can I just sit IN the bowl?", hi: "क्या मैं कटोरे के अंदर ही बैठ जाऊँ?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.38 } ], props: [ { id: "bowl", x: 0.62 } ],
        cap: { en: "Slurp, slurp, SLURP! Water drips off his chin. Drip, drip!", hi: "सुड़प, सुड़प, सुड़प! ठुड्डी से पानी टपक रहा है — टप, टप!" },
        say: [ { who: 0, en: "Ahh! I'm a brand-new dog! A wet one!", hi: "आहा! मैं तो एकदम नया कुत्ता बन गया! गीला वाला!" } ],
        fx: { en: "SLURP!", hi: "सुड़प!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.35 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.1 } ],
        cap: { en: "Nanu and Auggie rest under the shady neem tree.", hi: "नानू और ऑगी नीम की ठंडी छाँव में लेटे हैं।" },
        say: [ { who: 1, en: "Fun fact: dogs hardly sweat. They pant to cool down!", hi: "पता है? कुत्तों को पसीना बहुत कम आता है। वो हाँफकर ठंडे होते हैं!" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.33 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.95 } ],
        cap: { en: "Evening. The sun is sleepy, the road is cool. NOW walk!", hi: "शाम हुई। सूरज को नींद आई, सड़क ठंडी हुई। अब सैर!" },
        say: [ { who: 0, en: "Water bottle? Check! Cool road? Check! WALKIES!", hi: "पानी की बोतल? हाँ! ठंडी सड़क? हाँ! चलो सैर!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true }
    ]
  },

  // 18 — Tidying toys into the basket
  {
    id: 18, age: "4-6", category: "home",
    title: { en: "Toys Need a Home Too!", hi: "खिलौनों का भी घर होता है!" },
    blurb: { en: "Squeak! Papa stepped on a bone. Who left the toys everywhere? Hmm...", hi: "चूँ! पापा का पैर हड्डी पर पड़ गया! ये खिलौने किसने बिखेरे? हम्म..." },
    moral: { en: "Tidy up after play, and every toy gets home safe.", hi: "खेल के बाद सामान समेटो, ताकि हर चीज़ अपने घर पहुँचे।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.4 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "ball", x: 0.12 }, { id: "bone", x: 0.6 }, { id: "frisbee", x: 0.25, y: 0.3 } ], fx: { en: "TIDY!", hi: "सफ़ाई!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.5 } ], props: [ { id: "ball", x: 0.12 }, { id: "bone", x: 0.28 }, { id: "frisbee", x: 0.8 } ],
        cap: { en: "A ball here, a bone there, a frisbee on the sofa!", hi: "इधर बॉल, उधर हड्डी, और सोफ़े पर फ़्रिस्बी आराम फ़रमा रही है!" },
        say: [ { who: 0, en: "Best. Day. Ever! Tidying? Never heard of it!", hi: "आज तो मज़ा आ गया! सफ़ाई? वो क्या होती है?" } ] },
      { bg: "home", chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.3 }, { id: "auggie", pose: "think", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bone", x: 0.5 } ],
        say: [ { who: 0, en: "OUCH! Mottu, the floor just squeaked at me!", hi: "उई माँ! मोटू, फ़र्श ने मुझ पर चूँ-चूँ किया!", kind: "shout" },
               { who: 1, en: "Wasn't me! It was... the bone!", hi: "मैंने कुछ नहीं किया! हड्डी ने किया!" } ],
        fx: { en: "SQUEAK!", hi: "चूँ-चूँ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Auggie! Your toys are calling: 'We want to go HOME!'", hi: "ऑगी! सुनो, तुम्हारे खिलौने बोल रहे हैं: 'हमें घर जाना है!'" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.33 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.75, flip: true } ],
        say: [ { who: 0, en: "Toys have a home? Do they have beds too?", hi: "खिलौनों का भी घर होता है? उनका भी बिस्तर है?" },
               { who: 1, en: "Yes! The big basket! Let's race! Ready... steady...", hi: "हाँ! बड़ी टोकरी! चलो रेस लगाएँ! तैयार... एक, दो..." } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.35 } ], props: [ { id: "ball", x: 0.62 }, { id: "bone", x: 0.78 }, { id: "frisbee", x: 0.9, y: 0.4 } ],
        cap: { en: "GO! One ball, two bones, one frisbee... into the basket!", hi: "तीन! एक बॉल, दो हड्डियाँ, एक फ़्रिस्बी... धड़ाधड़ टोकरी में!" },
        say: [ { who: 0, en: "Zoom! Plop! Zoom! Plop! I'm winning!", hi: "ज़ूम! टप! ज़ूम! टप! मैं जीत रहा हूँ!", kind: "shout" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.33 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "All tidy! Nobody trips, and the toys sleep cosy.", hi: "सब साफ़! अब कोई नहीं फिसलेगा, और खिलौने चैन से सोएँगे।" },
        say: [ { who: 1, en: "Tick! Tidy-up done. My list is SO happy!", hi: "टिक! सफ़ाई हो गई। मेरी लिस्ट आज बहुत खुश है!" } ],
        fx: { en: "TA-DA!", hi: "टा-डा!" }, action: true }
    ]
  },

  // 19 — Gentle play with little Kabir
  {
    id: 19, age: "4-6", category: "friends",
    title: { en: "Big Auggie, Soft Paws", hi: "बड़ा-सा ऑगी, नरम-से पंजे" },
    blurb: { en: "Auggie's hello is a HUGE, bouncy WOOF. Little Kabir's hello is... hiding!", hi: "ऑगी का 'हैलो' है एक बड़ा-सा भौं! और छोटे कबीर का 'हैलो'? छुप जाना!" },
    moral: { en: "Be slow and gentle with little ones. Soft makes friends.", hi: "छोटों के साथ धीरे और प्यार से खेलो। नरमी से दोस्त बनते हैं।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.33 }, { id: "kabir", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.52 }, { id: "tree", x: 0.95 } ] },
    panels: [
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "kabir", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        cap: { en: "Auggie spots a new friend and charges over. Full speed!", hi: "ऑगी को नया दोस्त दिखा और वो पूरी रफ़्तार से दौड़ा!" },
        say: [ { who: 1, en: "Whoa! You're SO big! Like a golden sofa!", hi: "अरे बाप रे! तुम तो कितने बड़े हो! सोफ़े जितने!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.22 }, { id: "kabir", pose: "stand", mood: "scared", x: 0.58, flip: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.82, flip: true } ],
        cap: { en: "Kabir hides behind Mumma. Only his shoes peek out.", hi: "कबीर मम्मा के पीछे छुप गया। बस उसके जूते दिख रहे हैं।" },
        say: [ { who: 0, en: "Why is he hiding? I only did a tiny WOOF!", hi: "ये छुप क्यों गया? मैंने तो बस छोटा-सा 'भौं' किया था!", kind: "think" } ] },
      { bg: "park", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "Your 'tiny' woof sounds like thunder to Kabir. Go slow?", hi: "तुम्हारा छोटा-सा भौं कबीर को बादल की गरज लगता है। धीरे-धीरे, ठीक?" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.33 }, { id: "kabir", pose: "sit", mood: "determined", x: 0.72, flip: true } ],
        cap: { en: "Auggie lies down low and waits. Kabir takes one brave step.", hi: "ऑगी नीचे लेटकर चुपचाप इंतज़ार करता है। कबीर एक हिम्मत वाला कदम बढ़ाता है।" },
        say: [ { who: 1, en: "Um... Mister Auggie? May I pet you, please?", hi: "अ... ऑगी जी? क्या मैं आपको छू सकता हूँ? प्लीज़?", kind: "whisper" } ] },
      { bg: "park", chars: [ { id: "kabir", pose: "sit", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "First Auggie sniffs Kabir's hand. Then... pat, pat, pat.", hi: "पहले ऑगी ने कबीर का हाथ सूँघा। फिर... थप, थप, थप।" },
        say: [ { who: 0, en: "You're not a sofa! You're a giant teddy bear!", hi: "तुम सोफ़ा नहीं हो! तुम तो बड़े वाले टेडी बियर हो!" } ] },
      { bg: "park", chars: [ { id: "kabir", pose: "run", mood: "laugh", x: 0.28 }, { id: "auggie", pose: "run", mood: "happy", x: 0.62 } ], props: [ { id: "ball", x: 0.88 } ],
        cap: { en: "Slow rolls, soft tugs, big giggles. New best friends!", hi: "धीमे-धीमे टप्पे, हल्की-सी खींचतान, ढेर सारी हँसी। पक्के दोस्त!" },
        say: [ { who: 0, en: "Gentle play is the BEST play! Again, Auggie!", hi: "प्यार वाला खेल सबसे अच्छा! एक बार और, ऑगी!" } ],
        fx: { en: "HEE HEE!", hi: "ही-ही!" }, action: true }
    ]
  },

  // 20 — Please and thank-you paws
  {
    id: 20, age: "4-6", category: "habits",
    title: { en: "The Magic Carrot Words", hi: "गाजर वाले जादुई शब्द" },
    blurb: { en: "Auggie knows how to bark for a carrot. But does he know the magic words?", hi: "ऑगी गाजर के लिए भौंकना तो जानता है। पर क्या उसे जादुई शब्द आते हैं?" },
    moral: { en: "'Please' and 'thank you' are magic words that make everyone smile.", hi: "'प्लीज़' और 'थैंक यू' ऐसे जादुई शब्द हैं, जिनसे सबके चेहरे खिल जाते हैं।" },
    cover: { bg: "kitchen", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.35 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "apple", x: 0.55 } ], fx: { en: "PLEASE!", hi: "प्लीज़!" } },
    panels: [
      { bg: "kitchen", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Chop, chop! Dadi is cutting carrots. Auggie wants one NOW!", hi: "खट-खट! दादी गाजर काट रही हैं। और ऑगी को अभी की अभी चाहिए!" },
        say: [ { who: 0, en: "Carrot! Carrot! Give! Give! GIVE!", hi: "गाजर! गाजर! दो! दो! अभी दो!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "point", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Arre, arre! Where did your magic words run off to?", hi: "अरे-अरे! तुम्हारे जादुई शब्द कहाँ भाग गए?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Magic words? Um... abra-ka-CARROT?", hi: "जादुई शब्द? अच्छा... छू-मंतर-गाजर?" },
               { who: 1, en: "Ha! No, silly! 'Please' and 'thank you'!", hi: "हा हा! ना रे बुद्धू! 'प्लीज़' और 'थैंक यू'!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.33 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie sits, lifts one soft paw, and makes his sweetest face.", hi: "ऑगी बैठा, धीरे से एक पंजा उठाया, और सबसे भोला चेहरा बनाया।" },
        say: [ { who: 0, en: "Dadi, may I please have one carrot? Please-please?", hi: "दादी, क्या मुझे एक गाजर मिल सकती है? प्लीज़-प्लीज़?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.33 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Such manners! Here you go! Plus one from my pallu!", hi: "वाह, क्या तमीज़ है! ये लो! और एक पल्लू वाली भी!" } ],
        fx: { en: "CRUNCH!", hi: "कुर्र-कुर्र!" }, action: true },
      { bg: "home", chars: [ { id: "dadi", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "wave", mood: "happy", x: 0.5 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 1, en: "Thank you, Dadi! Papa, walk, please? Pretty please?", hi: "थैंक यू, दादी! पापा, सैर पर चलें? प्लीज़-प्लीज़?" },
               { who: 2, en: "Ma, you taught him magic? Now I can't say no!", hi: "माँ, आपने तो इस पर जादू कर दिया! अब मना कैसे करूँ?" } ] }
    ]
  },

  // 21 — A new collar
  {
    id: 21, age: "4-6", category: "home",
    title: { en: "Jingle-Jangle New Collar", hi: "छन-छन वाला नया कॉलर" },
    blurb: { en: "Auggie's old collar is too tight. The new one is red and shiny. So why is Auggie sulking?", hi: "पुराना कॉलर टाइट हो गया है, नया वाला लाल और चमचमाता है। फिर ऑगी मुँह क्यों फुलाए बैठा है?" },
    moral: { en: "New things feel funny at first. Give them one try!", hi: "नई चीज़ें शुरू में अजीब लगती हैं। उन्हें एक मौका तो दो!" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.4 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "gift", x: 0.12 } ], fx: { en: "JINGLE!", hi: "छन-छन!" } },
    panels: [
      { bg: "home", chars: [ { id: "papa", pose: "sit", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "sit", mood: "sad", x: 0.5 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.8, flip: true } ],
        cap: { en: "Scratch, scratch, scratch! Auggie can't stop scratching his neck.", hi: "खुज-खुज-खुज! ऑगी की गर्दन की खुजली रुक ही नहीं रही।" },
        say: [ { who: 0, en: "Mottu, his collar's too tight! Our boy grew again!", hi: "मोटू, इसका कॉलर टाइट हो गया! हमारा बेटा फिर बड़ा हो गया!" } ] },
      { bg: "home", chars: [ { id: "mumma", pose: "sit", mood: "laugh", x: 0.28 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.68, flip: true } ], props: [ { id: "gift", x: 0.48 } ],
        say: [ { who: 0, en: "Ta-da! A brand-new red collar, just for you!", hi: "टा-डा! तुम्हारे लिए एकदम नया, लाल-लाल कॉलर!" } ],
        fx: { en: "TA-DA!", hi: "टा-डा!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie isn't sure. He hugs his old collar with one paw.", hi: "ऑगी को यकीन नहीं। उसने पुराने कॉलर को पंजे से दबा रखा है।" },
        say: [ { who: 0, en: "But old collar and I are best friends...", hi: "पर मैं और पुराना कॉलर तो पक्के दोस्त हैं...", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.68, flip: true } ],
        cap: { en: "Mumma's rule: two fingers must fit under the collar. Just right!", hi: "मम्मा का नियम: कॉलर के नीचे दो उँगलियाँ जानी चाहिए। एकदम सही!" },
        say: [ { who: 0, en: "Not too tight, not too loose. Just one try?", hi: "न ज़्यादा कसा, न ज़्यादा ढीला। बस एक बार पहनकर देखो?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.35 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        say: [ { who: 0, en: "Wait! It JINGLES! It SHINES! It has my NAME!", hi: "अरे! ये तो छन-छन करता है! चमकता है! इस पर मेरा नाम है!", kind: "shout" },
               { who: 1, en: "Hold that pose, Mister Jingle!", hi: "हिलना मत, मिस्टर छन-छन!" } ],
        fx: { en: "JINGLE!", hi: "छन-छन!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "camera", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Old collar goes in the treasure box. New collar goes on walks!", hi: "पुराना कॉलर गया खज़ाने वाले डिब्बे में, और नया वाला चला सैर पर!" },
        say: [ { who: 1, en: "Selfie time! Everybody say... 'CARROT!'", hi: "सेल्फ़ी टाइम! सब बोलो... 'गाजर'!" } ],
        fx: { en: "CLICK!", hi: "क्लिक!" }, action: true }
    ]
  },

  // 22 — First time seeing his reflection
  {
    id: 22, age: "4-6", category: "feelings",
    title: { en: "The Copycat Water Dog", hi: "पानी वाला नकलची कुत्ता" },
    blurb: { en: "There's a golden dog in the lake who copies EVERYTHING Auggie does. Who is he?", hi: "झील में एक सुनहरा कुत्ता है जो ऑगी की हर एक नकल करता है! आखिर है कौन?" },
    moral: { en: "Smile at yourself. You're special just the way you are.", hi: "खुद को देखकर मुस्कुराओ। तुम जैसे हो, वैसे ही सबसे खास हो।" },
    cover: { bg: "river", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.4 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "sun", x: 0.12, y: 0.1 } ], fx: { en: "WHO?!", hi: "कौन?!" } },
    panels: [
      { bg: "river", chars: [ { id: "papa", pose: "stand", mood: "happy", x: 0.28 }, { id: "auggie", pose: "run", mood: "happy", x: 0.65, flip: true } ], props: [ { id: "sun", x: 0.88, y: 0.1 }, { id: "tree", x: 0.06 } ],
        cap: { en: "A sunny lake walk. Red leash on, as always.", hi: "धूप वाली सुबह, झील किनारे सैर। लाल पट्टा हमेशा की तरह साथ।" },
        say: [ { who: 0, en: "What a sunny morning! Even the lake is smiling!", hi: "कितनी प्यारी धूप है! देखो, झील भी मुस्कुरा रही है!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.45 } ],
        cap: { en: "Auggie peers into the lake. Someone peers right back!", hi: "ऑगी ने झील में झाँका। उधर से भी कोई झाँक रहा है!" },
        say: [ { who: 0, en: "Whoa! Who are YOU? And why so handsome?", hi: "अरे! तुम कौन हो? और इतने हैंडसम क्यों हो?" } ],
        fx: { en: "WHO?!", hi: "कौन?!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "wave", mood: "determined", x: 0.35 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        cap: { en: "Auggie lifts a paw. The water dog does the SAME!", hi: "ऑगी ने पंजा उठाया। पानी वाले कुत्ते ने भी बिल्कुल वैसा ही किया!" },
        say: [ { who: 0, en: "Hey, copycat! I waved FIRST! No copying!", hi: "ऐ नकलची! पहले मैंने हिलाया था! नकल मत कर!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "blast", mood: "surprised", x: 0.33 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "I'll out-bark you! WOOF! ...Hey, no fair!", hi: "ठीक है, देख मेरा भौं! भौं! ...अरे, इसने भी किया!", kind: "shout" },
               { who: 1, en: "Buddy, that's YOU! Your reflection, like a mirror!", hi: "बुद्धू, वो तुम ही हो! पानी में तुम्हारी परछाईं है।" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.38 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        say: [ { who: 0, en: "ME? Big nose, floppy ears... I'm SO handsome!", hi: "मैं?! बड़ी नाक, लटकते कान... मैं तो कितना हैंडसम हूँ!" },
               { who: 1, en: "Of course! You take after ME!", hi: "होगा ही! आखिर बेटा किसका है!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.94 } ],
        cap: { en: "Near water, Papa holds the leash tight. Safe AND happy!", hi: "पानी के पास पापा पट्टा कसकर पकड़े रहते हैं। सुरक्षित भी, खुश भी!" },
        say: [ { who: 0, en: "Bye, handsome water dog! Same smile tomorrow?", hi: "टाटा, हैंडसम पानी वाले ऑगी! कल फिर इसी मुस्कान के साथ मिलना!" } ],
        fx: { en: "YAY!", hi: "हुर्रे!" }, action: true }
    ]
  }

);
