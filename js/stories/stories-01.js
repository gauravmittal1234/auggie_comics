window.AUGGIE_COMICS = window.AUGGIE_COMICS || [];
window.AUGGIE_COMICS.push(

  // 1 — Auggie steals the big bed
  {
    id: 1, age: "4-6", category: "home",
    title: { en: "Who Stole the Big Bed?", hi: "बड़ा बिस्तर किसने चुराया?" },
    blurb: { en: "Auggie stretches out on Papa and Mumma's leafy bedsheet and leaves no room for anyone!", hi: "ऑगी पापा-मम्मा की पत्तों वाली चादर पर ऐसा फैलता है कि किसी के लिए जगह ही नहीं बचती!" },
    moral: { en: "Sharing space makes everyone cosy and happy.", hi: "जगह बाँटने से सबको आराम और खुशी मिलती है।" },
    cover: { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.4, s: 1.2 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "clock", x: 0.12, y: 0.2 } ], fx: { en: "STRETCH!", hi: "आह्ह!" } },
    panels: [
      { bg: "bedroom", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Night time! Mumma fluffs the pillows on the leafy bedsheet.", hi: "रात हो गई! मम्मा पत्तों वाली चादर पर तकिए ठीक करती हैं।" },
        say: [ { who: 0, en: "Ooh, leaves! My favourite bed!", hi: "वाह, पत्ते! मेरा सबसे प्यारा बिस्तर!" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.5, s: 1.3 } ],
        cap: { en: "Auggie jumps up and stretches out... all the way!", hi: "ऑगी कूदकर चढ़ता है और पूरा का पूरा फैल जाता है!" },
        fx: { en: "FLOP!", hi: "धप्प!" }, action: true },
      { bg: "bedroom", chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.82, flip: true } ],
        say: [ { who: 0, en: "Mottu, where do WE sleep tonight?", hi: "मोटू, आज हम कहाँ सोएँगे?" },
               { who: 2, en: "Ask the big yellow blanket, Mittsy!", hi: "इस बड़े पीले कंबल से पूछो, मिट्सी!" } ] },
      { bg: "bedroom", chars: [ { id: "papa", pose: "stand", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.5 }, { id: "mumma", pose: "stand", mood: "sleepy", x: 0.8, flip: true } ],
        cap: { en: "Papa yawns. Mumma yawns. Auggie watches.", hi: "पापा उबासी लेते हैं। मम्मा उबासी लेती हैं। ऑगी देखता है।" },
        say: [ { who: 1, en: "Oh no! Papa and Mumma are sleepy too.", hi: "अरे! पापा-मम्मा को भी तो नींद आ रही है।", kind: "think" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.22 }, { id: "papa", pose: "lie", mood: "happy", x: 0.52 }, { id: "mumma", pose: "lie", mood: "laugh", x: 0.82, flip: true } ],
        cap: { en: "Auggie scoots to his little corner. Room for everyone!", hi: "ऑगी खिसककर अपने छोटे कोने में चला जाता है। सबके लिए जगह!" },
        fx: { en: "SCOOT!", hi: "सरक!" }, action: true },
      { bg: "bedroom", chars: [ { id: "papa", pose: "lie", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "lie", mood: "sleepy", x: 0.5 }, { id: "mumma", pose: "lie", mood: "sleepy", x: 0.8, flip: true } ],
        say: [ { who: 1, en: "Good night, Papa. Good night, Mumma.", hi: "शुभ रात्रि पापा, शुभ रात्रि मम्मा।", kind: "whisper" } ],
        fx: { en: "SNORE!", hi: "खर्र!" }, action: true }
    ]
  },

  // 2 — Bath time and a big shake
  {
    id: 2, age: "4-6", category: "habits",
    title: { en: "Splish, Splash, SHAKE!", hi: "छपाक-छपाक, फुर्र-फुर्र!" },
    blurb: { en: "Muddy Auggie hides from bath time, but a bubbly bath ends with the biggest shake ever!", hi: "कीचड़ में सना ऑगी नहाने से छुपता है, पर झाग वाले स्नान के बाद होता है सबसे बड़ा झटका!" },
    moral: { en: "Baths keep us clean, fresh and healthy.", hi: "नहाने से हम साफ़, ताज़ा और तंदुरुस्त रहते हैं।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.4 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "puddle", x: 0.15 } ], fx: { en: "SHAKE!", hi: "फुर्र!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.4 } ], props: [ { id: "puddle", x: 0.62 }, { id: "bush", x: 0.9 } ],
        cap: { en: "After the rain, Auggie finds a big muddy puddle.", hi: "बारिश के बाद ऑगी को कीचड़ वाला बड़ा गड्ढा मिलता है।" },
        say: [ { who: 0, en: "Mud! My best friend!", hi: "कीचड़! मेरा सबसे अच्छा दोस्त!" } ],
        fx: { en: "SPLOSH!", hi: "छपाक!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "mumma", pose: "point", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Mittsy! Our mud ball needs a bath!", hi: "मिट्सी! हमारे मिट्टी के गोले को नहलाना पड़ेगा!", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.3 }, { id: "papa", pose: "think", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Auggie hides behind the sofa. Only his tail shows!", hi: "ऑगी सोफ़े के पीछे छुप जाता है। बस पूँछ दिख रही है!" },
        say: [ { who: 1, en: "I can see a waggy tail, Auggie!", hi: "ऑगी, हिलती हुई पूँछ तो दिख रही है!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.33 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bottle", x: 0.53 } ],
        cap: { en: "Warm water, doggy shampoo, lots of bubbles!", hi: "गुनगुना पानी, कुत्तों वाला शैम्पू, ढेर सारे झाग!" },
        say: [ { who: 0, en: "Hee hee! The bubbles tickle!", hi: "ही-ही! झाग से गुदगुदी होती है!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.38 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.78, flip: true } ],
        say: [ { who: 1, en: "Auggie, nooo! Now I'm wet too!", hi: "ऑगी, नहीं! अब तो मैं भी भीग गया!", kind: "shout" } ],
        fx: { en: "SHAKE!", hi: "फुर्र!" }, action: true },
      { bg: "home", chars: [ { id: "papa", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "A towel rub, and Auggie smells like flowers.", hi: "तौलिये से पोंछा, और ऑगी फूलों जैसा महकने लगा।" },
        say: [ { who: 2, en: "My clean, soft, sweet-smelling Auggie!", hi: "मेरा साफ़, मुलायम, खुशबूदार ऑगी!" } ] }
    ]
  },

  // 3 — Brushing a dog's teeth
  {
    id: 3, age: "4-6", category: "habits",
    title: { en: "Auggie's Sparkly Smile", hi: "ऑगी की चमकीली मुस्कान" },
    blurb: { en: "Why does Mumma want to brush a dog's teeth? Auggie finds out, one tasty brush at a time!", hi: "मम्मा कुत्ते के दाँत क्यों ब्रश करना चाहती हैं? ऑगी को पता चलता है, एक मज़ेदार ब्रश के साथ!" },
    moral: { en: "Clean teeth make happy, healthy smiles, for kids and dogs!", hi: "साफ़ दाँत मतलब खुश और सेहतमंद मुस्कान, बच्चों और कुत्तों दोनों की!" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "mumma", pose: "wave", mood: "happy", x: 0.75, flip: true } ], props: [ { id: "toothbrush", x: 0.55 } ], fx: { en: "SPARKLE!", hi: "चमक!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "toothbrush", x: 0.52 } ],
        cap: { en: "Mumma brushes her teeth every morning and every night.", hi: "मम्मा रोज़ सुबह और रात को दाँत ब्रश करती हैं।" },
        say: [ { who: 0, en: "Mumma, why do you brush so much?", hi: "मम्मा, आप इतना ब्रश क्यों करती हो?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "To keep teeth strong! Dogs need it too.", hi: "दाँत मज़बूत रखने के लिए! कुत्तों को भी चाहिए।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "scared", x: 0.3 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "toothbrush", x: 0.58 } ],
        say: [ { who: 0, en: "My teeth? Brushing? No, thank you!", hi: "मेरे दाँत? ब्रश? ना बाबा ना!", kind: "shout" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.33 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "toothbrush", x: 0.52 } ],
        cap: { en: "Doggy toothpaste only! People toothpaste is not for dogs.", hi: "सिर्फ़ कुत्तों वाला टूथपेस्ट! हमारा टूथपेस्ट कुत्तों के लिए नहीं होता।" },
        say: [ { who: 1, en: "Special doggy toothpaste. Chicken flavour!", hi: "कुत्तों वाला खास टूथपेस्ट। चिकन वाला!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "laugh", x: 0.33 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "toothbrush", x: 0.52 } ],
        say: [ { who: 0, en: "Yum! Brush my back teeth too!", hi: "मज़ा आ गया! पीछे वाले दाँत भी करो!" } ],
        fx: { en: "SCRUB!", hi: "घिस-घिस!" }, action: true },
      { bg: "home", chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 0, en: "Wow, Baby! Auggie's smile is sparkling!", hi: "वाह बेबी! ऑगी की मुस्कान तो चमक रही है!" } ],
        fx: { en: "TING!", hi: "टिंग!" }, action: true }
    ]
  },

  // 4 — The vet visit and a brave vaccine
  {
    id: 4, age: "4-6", category: "feelings",
    title: { en: "Brave Auggie at the Vet", hi: "डॉक्टर के पास बहादुर ऑगी" },
    blurb: { en: "Auggie's tail droops at the vet clinic, until Papa and Mumma help him feel brave.", hi: "जानवरों के क्लिनिक में ऑगी की पूँछ नीचे हो जाती है, फिर पापा-मम्मा उसे बहादुर बनाते हैं।" },
    moral: { en: "Vaccines keep us safe. Being brave means trying, even when scared.", hi: "टीके हमें सुरक्षित रखते हैं। डर लगने पर भी कोशिश करना ही बहादुरी है।" },
    cover: { bg: "vet", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.4 }, { id: "papa", pose: "stand", mood: "happy", x: 0.78, flip: true } ], fx: { en: "BRAVE!", hi: "शाबाश!" } },
    panels: [
      { bg: "city", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.3 }, { id: "papa", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Today Auggie is going to the vet clinic.", hi: "आज ऑगी जानवरों के डॉक्टर के पास जा रहा है।" },
        say: [ { who: 0, en: "Is the vet a park? Is there food?", hi: "क्या डॉक्टर के यहाँ पार्क है? खाना मिलेगा?" } ] },
      { bg: "vet", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.33 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Beeping machines. Funny smells. Auggie's tail droops.", hi: "बीप-बीप मशीनें, अजीब-सी खुशबू। ऑगी की पूँछ नीचे।" },
        say: [ { who: 0, en: "Mumma, I want to go home.", hi: "मम्मा, मुझे घर जाना है।", kind: "whisper" } ] },
      { bg: "vet", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "lie", mood: "sad", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "It's okay to feel scared. We're right here.", hi: "डरना ठीक है, बेटा। हम यहीं हैं ना।" } ] },
      { bg: "vet", chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "think", mood: "surprised", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "A vaccine is a tiny pinch that keeps you strong.", hi: "टीका बस एक छोटी-सी चुभन है, जो तुम्हें ताकतवर रखता है।" } ] },
      { bg: "vet", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.38 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.78, flip: true } ],
        cap: { en: "One deep breath... one tiny pinch... all done!", hi: "एक गहरी साँस... एक छोटी चुभन... हो गया!" },
        say: [ { who: 0, en: "That's it? I'm SO brave!", hi: "बस इतना? मैं तो बहुत बहादुर हूँ!", kind: "shout" } ],
        fx: { en: "PINCH!", hi: "चुभ!" }, action: true },
      { bg: "home", chars: [ { id: "papa", pose: "sit", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.5 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Back home, big hugs for a brave dog.", hi: "घर आकर बहादुर ऑगी को ढेर सारी झप्पियाँ।" },
        say: [ { who: 0, en: "Belly rubs for our brave hero!", hi: "हमारे बहादुर हीरो का पेट सहलाओ!" } ],
        fx: { en: "YAY!", hi: "याय!" }, action: true }
    ]
  },

  // 5 — No chocolate for dogs
  {
    id: 5, age: "4-6", category: "habits",
    title: { en: "Auggie and the Shiny Wrapper", hi: "ऑगी और चमकीला रैपर" },
    blurb: { en: "Auggie sniffs out Mumma's chocolate, but Mumma has a crunchier, safer treat for him.", hi: "ऑगी मम्मा की चॉकलेट सूँघ लेता है, पर मम्मा के पास उसके लिए उससे अच्छी और सुरक्षित चीज़ है।" },
    moral: { en: "Some foods are not safe for dogs, so we share healthy treats.", hi: "कुछ खाने कुत्तों के लिए ठीक नहीं होते, इसलिए हम उन्हें सेहतमंद चीज़ें ही देते हैं।" },
    cover: { bg: "kitchen", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.35 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.12 } ], fx: { en: "SNIFF!", hi: "सूँ-सूँ!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.33 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        cap: { en: "Mumma is eating something in a shiny wrapper.", hi: "मम्मा चमकीले रैपर वाली कोई चीज़ खा रही हैं।" },
        say: [ { who: 0, en: "Sniff, sniff... that smells yummy!", hi: "सूँ-सूँ... बड़ी अच्छी खुशबू है!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.33 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.75, flip: true } ],
        cap: { en: "Auggie makes his biggest, roundest puppy eyes.", hi: "ऑगी अपनी सबसे बड़ी, गोल-गोल आँखें बनाता है।" },
        say: [ { who: 0, en: "Please, Mumma? Just one tiny bite?", hi: "प्लीज़ मम्मा? बस एक छोटा-सा टुकड़ा?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "point", mood: "determined", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "No, Auggie! Chocolate makes dogs very sick.", hi: "नहीं ऑगी! चॉकलेट से कुत्ते बहुत बीमार हो जाते हैं।", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Chocolate, grapes, onions and sweets are NOT for dogs.", hi: "चॉकलेट, अंगूर, प्याज़ और मिठाई कुत्तों के लिए नहीं हैं।" },
        say: [ { who: 0, en: "Then what can a hungry doggy eat?", hi: "तो फिर एक भूखा कुत्ता क्या खाए?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Ta-da! A crunchy orange carrot for you!", hi: "टा-डा! तुम्हारे लिए कुरकुरी नारंगी गाजर!" } ],
        fx: { en: "TA-DA!", hi: "टा-डा!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.38 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.12 } ],
        say: [ { who: 0, en: "Carrots are the best! Thank you, Mumma!", hi: "गाजर सबसे बढ़िया है! थैंक यू, मम्मा!" } ],
        fx: { en: "CRUNCH!", hi: "कुर्र-कुर्र!" }, action: true }
    ]
  },

  // 6 — Sorry for chewing Papa's slipper
  {
    id: 6, age: "4-6", category: "feelings",
    title: { en: "The Slipper Sorry", hi: "चप्पल वाला सॉरी" },
    blurb: { en: "Auggie chews Papa's favourite slipper and learns how to say a big doggy sorry.", hi: "ऑगी पापा की पसंदीदा चप्पल चबा लेता है और सीखता है दिल से सॉरी बोलना।" },
    moral: { en: "When we make a mistake, we say sorry and make it right.", hi: "गलती हो जाए तो सॉरी बोलो और उसे ठीक करने की कोशिश करो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.38 }, { id: "papa", pose: "think", mood: "surprised", x: 0.78, flip: true } ], props: [ { id: "bone", x: 0.12 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.42 } ],
        cap: { en: "Papa's slipper is soft and squishy. Chomp, chomp!", hi: "पापा की चप्पल नरम-नरम है। चप-चप!" },
        say: [ { who: 0, en: "Mmm, the best chew toy ever!", hi: "वाह, सबसे बढ़िया चबाने वाला खिलौना!" } ],
        fx: { en: "CHOMP!", hi: "चप!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.3 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Auggie! That's my favourite slipper!", hi: "ऑगी! वो मेरी सबसे प्यारी चप्पल है!", kind: "shout" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.33 }, { id: "papa", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        cap: { en: "Papa looks sad. Auggie's ears go down, down, down.", hi: "पापा उदास हैं। ऑगी के कान नीचे... नीचे... नीचे।" },
        say: [ { who: 0, en: "Uh-oh. I made Papa sad.", hi: "ओह। मैंने पापा को उदास कर दिया।", kind: "think" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "A big sorry can make Papa smile again.", hi: "एक प्यारा-सा सॉरी पापा को फिर से हँसा देगा।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "sad", x: 0.33 }, { id: "papa", pose: "sit", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Auggie brings the slipper back and gives his paw.", hi: "ऑगी चप्पल वापस लाता है और अपना पंजा देता है।" },
        say: [ { who: 0, en: "Sorry, Papa. Here is my paw.", hi: "सॉरी पापा। यह लो मेरा पंजा।" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "bone", x: 0.52 } ],
        say: [ { who: 1, en: "Sorry accepted! Chew your toy bone, not slippers.", hi: "सॉरी मंज़ूर! चप्पल नहीं, अपनी खिलौने वाली हड्डी चबाओ।" } ],
        fx: { en: "HUG!", hi: "झप्पी!" }, action: true }
    ]
  },

  // 7 — Waiting patiently for dinner
  {
    id: 7, age: "4-6", category: "habits",
    title: { en: "Wait, Wag, Eat!", hi: "रुको, पूँछ हिलाओ, खाओ!" },
    blurb: { en: "Auggie's tummy rumbles loudly, but Dadi shows him that good things come to dogs who wait.", hi: "ऑगी का पेट गुड़गुड़ करता है, पर दादी सिखाती हैं कि इंतज़ार करने वालों को अच्छी चीज़ मिलती है।" },
    moral: { en: "Waiting patiently is hard, but it is a super skill.", hi: "सब्र से इंतज़ार करना मुश्किल है, पर यह एक सुपर हुनर है।" },
    cover: { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.35 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.55 } ], fx: { en: "RUMBLE!", hi: "गुड़-गुड़!" } },
    panels: [
      { bg: "kitchen", chars: [ { id: "auggie", pose: "stand", mood: "surprised", x: 0.35 } ], props: [ { id: "bowl", x: 0.65 }, { id: "clock", x: 0.85, y: 0.2 } ],
        cap: { en: "Seven o'clock. Auggie's tummy starts to rumble.", hi: "सात बज गए। ऑगी का पेट गुड़गुड़ करने लगा।" },
        say: [ { who: 0, en: "Dinner time! Dinner time! Where is everyone?", hi: "खाने का टाइम! खाने का टाइम! सब कहाँ हैं?" } ],
        fx: { en: "RUMBLE!", hi: "गुड़-गुड़!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Coming, Auggie! Let me wash your bowl first.", hi: "आ रही हूँ ऑगी! पहले कटोरा तो धो लूँ।" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "cheer", mood: "determined", x: 0.33 }, { id: "dadi", pose: "point", mood: "surprised", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.55 } ],
        say: [ { who: 1, en: "Arre! Jumping won't make dinner come faster!", hi: "अरे! उछलने से खाना जल्दी नहीं आएगा!", kind: "shout" } ],
        fx: { en: "BOING!", hi: "उछल!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "determined", x: 0.33 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.75, flip: true } ], props: [ { id: "bowl", x: 0.55 } ],
        cap: { en: "Auggie sits. His tail goes swish, swish, swish.", hi: "ऑगी बैठ जाता है। पूँछ चलती है — सर्र, सर्र, सर्र।" },
        say: [ { who: 1, en: "Sit... and wait... good boy!", hi: "बैठो... रुको... शाबाश!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.33 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.78, flip: true } ], props: [ { id: "bowl", x: 0.56 } ],
        say: [ { who: 0, en: "Waiting is hard... but I can do it!", hi: "इंतज़ार मुश्किल है... पर मैं कर सकता हूँ!", kind: "think" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.35 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "bowl", x: 0.56 } ],
        say: [ { who: 1, en: "Okay, eat! Patience tastes yummy, na?", hi: "चलो, अब खाओ! सब्र का फल मीठा होता है ना?" } ],
        fx: { en: "GULP!", hi: "गप!" }, action: true }
    ]
  },

  // 8 — Scared of thunder
  {
    id: 8, age: "4-6", category: "feelings",
    title: { en: "Boom Goes the Thunder", hi: "गड़गड़ाहट वाली रात" },
    blurb: { en: "When thunder booms over Chamakpur, Auggie hides under the bed, and his family helps him feel safe.", hi: "जब चमकपुर में बादल गरजते हैं, ऑगी बिस्तर के नीचे छुप जाता है, और परिवार उसे हिम्मत देता है।" },
    moral: { en: "When we feel scared, a hug and a calm voice help.", hi: "डर लगे तो एक झप्पी और प्यार भरी बातें बहुत मदद करती हैं।" },
    cover: { bg: "rain", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.4 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.78, flip: true } ], props: [ { id: "cloud", x: 0.2, y: 0.15 } ], fx: { en: "BOOM!", hi: "धड़ाम!" } },
    panels: [
      { bg: "rain", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.4 } ], props: [ { id: "cloud", x: 0.25, y: 0.15 }, { id: "cloud", x: 0.75, y: 0.12 } ],
        cap: { en: "Dark clouds roll over Chamakpur. The wind goes whoosh!", hi: "चमकपुर पर काले बादल छा गए। हवा चली — सूँ-सूँ!" },
        say: [ { who: 0, en: "Why is the sky so grumpy today?", hi: "आज आसमान इतना गुस्से में क्यों है?" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "run", mood: "scared", x: 0.45 } ],
        cap: { en: "Suddenly... BOOM! Auggie dives under the bed!", hi: "अचानक... धड़ाम! ऑगी बिस्तर के नीचे घुस गया!" },
        fx: { en: "BOOM!", hi: "गड़-गड़!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "scared", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Papa, the sky is shouting at me!", hi: "पापा, आसमान मुझ पर चिल्ला रहा है!", kind: "whisper" } ] },
      { bg: "bedroom", chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.2 }, { id: "auggie", pose: "lie", mood: "sad", x: 0.5 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.8, flip: true } ],
        cap: { en: "Papa and Mumma sit on the floor beside him.", hi: "पापा और मम्मा उसके पास ज़मीन पर बैठ जाते हैं।" },
        say: [ { who: 0, en: "It's just noisy clouds, buddy. You're safe.", hi: "ये बस शोर करते बादल हैं, दोस्त। तुम सुरक्षित हो।" } ] },
      { bg: "bedroom", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "Mumma closes the windows and hums a soft lullaby.", hi: "मम्मा खिड़कियाँ बंद करती हैं और धीमी लोरी गुनगुनाती हैं।" },
        say: [ { who: 0, en: "Here's your cosy blanket. Let's sing softly.", hi: "यह लो तुम्हारा प्यारा कंबल। चलो धीरे-धीरे गाएँ।" } ] },
      { bg: "bedroom", chars: [ { id: "papa", pose: "lie", mood: "sleepy", x: 0.2 }, { id: "auggie", pose: "lie", mood: "sleepy", x: 0.5 }, { id: "mumma", pose: "lie", mood: "sleepy", x: 0.8, flip: true } ],
        cap: { en: "The storm rumbles far away. Auggie feels safe and sleepy.", hi: "तूफ़ान दूर चला गया। ऑगी सुरक्षित है और उसे नींद आ रही है।" },
        say: [ { who: 1, en: "Thunder is not scary with my family.", hi: "परिवार साथ हो तो बादलों से डर नहीं लगता।", kind: "whisper" } ] }
    ]
  },

  // 9 — Papa's laptop day
  {
    id: 9, age: "4-6", category: "family",
    title: { en: "Auggie Works From Home", hi: "ऑगी का वर्क फ़्रॉम होम" },
    blurb: { en: "Papa has a busy laptop day, so Auggie becomes his sleepiest, most helpful office buddy.", hi: "पापा का लैपटॉप पर बिज़ी दिन है, तो ऑगी बन जाता है उनका सबसे नींद वाला, सबसे मददगार साथी।" },
    moral: { en: "Stay quiet when others are busy, then play together later.", hi: "जब कोई काम कर रहा हो तो चुप रहो, फिर बाद में साथ खेलो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.52 } ], fx: { en: "TAP-TAP!", hi: "टक-टक!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.53 } ],
        cap: { en: "Papa opens his laptop. Work time!", hi: "पापा ने लैपटॉप खोला। काम का टाइम!" },
        say: [ { who: 0, en: "Can I work too, Papa? I'm very smart!", hi: "पापा, मैं भी काम करूँ? मैं बहुत होशियार हूँ!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "happy", x: 0.3 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.5 } ],
        cap: { en: "Auggie's big nose types a message: 'gggggggg'!", hi: "ऑगी की बड़ी नाक ने टाइप किया: 'gggggggg'!" },
        say: [ { who: 1, en: "Ha ha! That's not a word, Auggie!", hi: "हा हा! ये कोई शब्द नहीं है, ऑगी!" } ],
        fx: { en: "TAP-TAP!", hi: "टक-टक!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.53 } ],
        say: [ { who: 1, en: "Your job is Chief Nap Officer. Very important!", hi: "तुम्हारा काम है — सोने वाले बड़े अफ़सर। बहुत ज़रूरी!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.53 }, { id: "clock", x: 0.9, y: 0.2 } ],
        cap: { en: "Auggie naps beside Papa, quiet as a mouse.", hi: "ऑगी पापा के पास चुपचाप सो जाता है, एकदम चूहे की तरह।" },
        say: [ { who: 0, en: "Zzz... working very hard...", hi: "खर्र... बहुत मेहनत कर रहा हूँ...", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.2 }, { id: "papa", pose: "sit", mood: "happy", x: 0.5 }, { id: "mumma", pose: "wave", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 2, en: "Mittsy, lunch is ready! Wake up your co-worker!", hi: "मिट्सी, खाना तैयार है! अपने साथी को उठाओ!" } ] },
      { bg: "river", chars: [ { id: "papa", pose: "stand", mood: "happy", x: 0.28 }, { id: "auggie", pose: "run", mood: "laugh", x: 0.65 } ], props: [ { id: "tree", x: 0.92 } ],
        cap: { en: "Work done! Now a walk by the lake on the red leash.", hi: "काम खत्म! अब लाल पट्टे के साथ झील किनारे सैर।" },
        say: [ { who: 0, en: "Best co-worker ever!", hi: "मेरा सबसे अच्छा साथी!" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true }
    ]
  },

  // 10 — Dadi's bedtime story
  {
    id: 10, age: "4-6", category: "family",
    title: { en: "Once Upon a Tiny Puppy", hi: "एक था नन्हा पिल्ला" },
    blurb: { en: "Dadi tells Auggie a bedtime story about a tiny golden puppy, with a big surprise at the end!", hi: "दादी ऑगी को एक नन्हे सुनहरे पिल्ले की कहानी सुनाती हैं, और आखिर में है एक बड़ा सरप्राइज़!" },
    moral: { en: "Bedtime stories with family bring sweet dreams.", hi: "परिवार के साथ कहानी सुनने से सपने मीठे आते हैं।" },
    cover: { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "book", x: 0.52 }, { id: "star", x: 0.15, y: 0.15 } ] },
    panels: [
      { bg: "bedroom", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Bedtime! But Auggie is wide awake.", hi: "सोने का समय! पर ऑगी की आँखें पूरी खुली हैं।" },
        say: [ { who: 0, en: "Dadi, Dadi! One story, please?", hi: "दादी, दादी! एक कहानी, प्लीज़?" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "book", x: 0.52 } ],
        say: [ { who: 1, en: "First, one small carrot. Then, the story!", hi: "पहले एक छोटी-सी गाजर। फिर कहानी!" } ],
        fx: { en: "CRUNCH!", hi: "कुरकुर!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "scared", x: 0.5, s: 0.6 } ],
        cap: { en: "Dadi's story: a tiny golden puppy came to a new home.", hi: "दादी की कहानी: एक नन्हा सुनहरा पिल्ला नए घर आया।" },
        say: [ { who: 0, en: "Everything is so big! I'm scared.", hi: "सब कुछ कितना बड़ा है! मुझे डर लग रहा है।", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.22 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5, s: 0.6 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.78, flip: true } ],
        cap: { en: "Then two kind people gave him a big, warm hug.", hi: "फिर दो प्यारे लोगों ने उसे कसकर गले लगा लिया।" },
        say: [ { who: 2, en: "Welcome home, little one!", hi: "घर में स्वागत है, नन्हे मुन्ने!" } ],
        fx: { en: "HUG!", hi: "झप्पी!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Dadi... was that puppy ME?", hi: "दादी... वो पिल्ला मैं था?" },
               { who: 1, en: "Yes! Our tiny puppy is a big boy now.", hi: "हाँ! हमारा नन्हा पिल्ला अब बड़ा हो गया।" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.33 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "star", x: 0.5, y: 0.12 } ],
        cap: { en: "Auggie falls asleep, dreaming of hugs.", hi: "ऑगी झप्पियों के सपने देखते हुए सो जाता है।" },
        say: [ { who: 1, en: "Good night, my golden boy.", hi: "शुभ रात्रि, मेरे सोने जैसे ऑगी।", kind: "whisper" } ] }
    ]
  },

  // 11 — Nanu's morning walk
  {
    id: 11, age: "4-6", category: "habits",
    title: { en: "Red Leash, Safe Walk", hi: "लाल पट्टा, सुरक्षित सैर" },
    blurb: { en: "Nanu takes Auggie on a morning walk and shows him how to stay safe near the busy road.", hi: "नानू ऑगी को सुबह की सैर पर ले जाते हैं और सड़क पर सुरक्षित रहना सिखाते हैं।" },
    moral: { en: "Leash on, look both ways, and walk together safely.", hi: "पट्टा पहनो, दोनों तरफ़ देखो, और साथ मिलकर सुरक्षित चलो।" },
    cover: { bg: "city", chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.28 }, { id: "auggie", pose: "stand", mood: "happy", x: 0.65, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.1 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "clock", x: 0.9, y: 0.2 } ],
        cap: { en: "Six o'clock! Nanu is ready for his morning walk.", hi: "सुबह के छह बजे! नानू सैर के लिए तैयार हैं।" },
        say: [ { who: 0, en: "Walk? WALK! Let's go, Nanu!", hi: "सैर? सैर! चलो, नानू!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "First, the red leash. Safety first, Auggie!", hi: "पहले लाल पट्टा। सबसे पहले सुरक्षा, ऑगी!" } ] },
      { bg: "city", chars: [ { id: "nanu", pose: "point", mood: "surprised", x: 0.12 }, { id: "auggie", pose: "run", mood: "determined", x: 0.4 }, { id: "squirrel", pose: "stand", mood: "happy", x: 0.88, flip: true } ], props: [ { id: "car", x: 0.64 } ],
        cap: { en: "A squirrel! Auggie pulls toward the busy road.", hi: "गिलहरी! ऑगी सड़क की तरफ़ खिंचने लगता है।" },
        say: [ { who: 0, en: "Stop, Auggie! Cars are coming!", hi: "रुको ऑगी! गाड़ियाँ आ रही हैं!", kind: "shout" } ],
        fx: { en: "BEEP!", hi: "पीं-पीं!" }, action: true },
      { bg: "city", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "nanu", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "We stop, look left, look right, then cross.", hi: "रुको, बाएँ देखो, दाएँ देखो, फिर सड़क पार करो।" } ] },
      { bg: "city", chars: [ { id: "nanu", pose: "stand", mood: "happy", x: 0.28 }, { id: "auggie", pose: "think", mood: "happy", x: 0.66, flip: true } ],
        cap: { en: "Left... right... all clear! They cross together.", hi: "बाएँ... दाएँ... सब साफ़! दोनों साथ में सड़क पार करते हैं।" },
        say: [ { who: 1, en: "Leash on, eyes open, paws together!", hi: "पट्टा पहना, आँखें खुलीं, साथ-साथ कदम!" } ] },
      { bg: "river", chars: [ { id: "nanu", pose: "point", mood: "happy", x: 0.28 }, { id: "auggie", pose: "cheer", mood: "laugh", x: 0.66, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.1 }, { id: "tree", x: 0.08 } ],
        cap: { en: "By the lake, Nanu shares a fun fact.", hi: "झील किनारे नानू एक मज़ेदार बात बताते हैं।" },
        say: [ { who: 0, en: "Your nose smells thousands of times better than mine!", hi: "तुम्हारी नाक मेरी नाक से हज़ारों गुना तेज़ सूँघती है!" } ] }
    ]
  },

  // 12 — Mausi teaches sit and paw
  {
    id: 12, age: "4-6", category: "family",
    title: { en: "Mausi's Trick School", hi: "मौसी का ट्रिक स्कूल" },
    blurb: { en: "Mausi wants to teach Auggie 'sit' and 'paw', but Auggie keeps rolling over instead!", hi: "मौसी ऑगी को 'बैठो' और 'पंजा' सिखाना चाहती हैं, पर ऑगी हर बार लोट जाता है!" },
    moral: { en: "Practise a little every day, and you will get better.", hi: "रोज़ थोड़ा-थोड़ा अभ्यास करो, तुम ज़रूर बेहतर बनोगे।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "mausi", pose: "point", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "apple", x: 0.52 } ], fx: { en: "PAW!", hi: "पंजा!" } },
    panels: [
      { bg: "garden", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "mausi", pose: "wave", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "flower", x: 0.92 } ],
        cap: { en: "Mausi is here! Today is Trick School day.", hi: "मौसी आ गईं! आज ट्रिक स्कूल का दिन है।" },
        say: [ { who: 1, en: "Ready, Auggie? Lesson one: SIT!", hi: "तैयार हो ऑगी? पहला सबक: बैठो!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "laugh", x: 0.35 }, { id: "mausi", pose: "think", mood: "surprised", x: 0.75, flip: true } ],
        say: [ { who: 1, en: "That's not sit! That's a roll-over!", hi: "ये बैठना नहीं, ये तो लोटना है!" } ],
        fx: { en: "FLOP!", hi: "धप्प!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "mausi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "I can't do it, Mausi.", hi: "मौसी, मुझसे नहीं होगा।" },
               { who: 1, en: "Everyone learns slowly. Let's try again!", hi: "सब धीरे-धीरे सीखते हैं। चलो फिर से!" } ] },
      { bg: "garden", chars: [ { id: "mausi", pose: "point", mood: "happy", x: 0.22 }, { id: "auggie", pose: "sit", mood: "determined", x: 0.5 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.8, flip: true } ],
        cap: { en: "Try, try again. Sit... sit... SIT!", hi: "कोशिश पर कोशिश। बैठो... बैठो... बैठो!" },
        say: [ { who: 2, en: "Go, Chottu! Go, Auggie! You can do it!", hi: "चलो छोटू! चलो ऑगी! तुम कर सकते हो!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.33 }, { id: "mausi", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "apple", x: 0.53 } ],
        say: [ { who: 1, en: "He did it! Apple slice for my star!", hi: "कर दिखाया! मेरे स्टार के लिए सेब का टुकड़ा!" } ],
        fx: { en: "YAY!", hi: "याय!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.33 }, { id: "mausi", pose: "wave", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Next day, more practice. Now Auggie gives a paw too!", hi: "अगले दिन और अभ्यास। अब ऑगी पंजा भी देता है!" },
        say: [ { who: 0, en: "High paw, Mausi!", hi: "हाई-पंजा, मौसी!" } ],
        fx: { en: "HIGH PAW!", hi: "हाई-पंजा!" }, action: true }
    ]
  },

  // 13 — The lost tennis ball
  {
    id: 13, age: "4-6", category: "home",
    title: { en: "Where Is My Ball?", hi: "मेरी बॉल कहाँ है?" },
    blurb: { en: "Auggie's tennis ball has vanished, so he sniffs every corner of the house to find it.", hi: "ऑगी की टेनिस बॉल गायब है, तो वह उसे ढूँढने के लिए घर का हर कोना सूँघता है।" },
    moral: { en: "Look calmly, and keep your things in their place.", hi: "शांति से ढूँढो, और अपनी चीज़ें सही जगह पर रखो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.38 } ], props: [ { id: "ball", x: 0.82 } ], fx: { en: "SNIFF!", hi: "सूँ-सूँ!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.42 } ],
        cap: { en: "Oh no! Auggie's tennis ball is missing!", hi: "अरे नहीं! ऑगी की टेनिस बॉल गायब है!" },
        say: [ { who: 0, en: "Ball? Ball? Where are you, ball?", hi: "बॉल? बॉल? कहाँ हो तुम?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "point", mood: "determined", x: 0.33 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ],
        say: [ { who: 1, en: "No ball here, beta. Only vegetables!", hi: "यहाँ बॉल नहीं है, बेटा। सिर्फ़ सब्ज़ियाँ!" } ],
        fx: { en: "SNIFF!", hi: "सूँ-सूँ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.52 } ],
        cap: { en: "Auggie sniffs behind the sofa, the laptop, the shoes...", hi: "ऑगी सोफ़े के पीछे, लैपटॉप के पास, जूतों में सूँघता है..." },
        say: [ { who: 1, en: "Not behind my laptop, Auggie!", hi: "मेरे लैपटॉप के पीछे नहीं है, ऑगी!" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.45, s: 1.2 } ],
        cap: { en: "Tired and sad, Auggie flops on the big leafy bed.", hi: "थका और उदास ऑगी पत्तों वाले बड़े बिस्तर पर लेट जाता है।" },
        say: [ { who: 0, en: "My ball is gone forever...", hi: "मेरी बॉल हमेशा के लिए खो गई...", kind: "whisper" } ] },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.38 }, { id: "mumma", pose: "point", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "ball", x: 0.56 } ],
        say: [ { who: 1, en: "Auggie! What's that under your tummy?", hi: "ऑगी! तुम्हारे पेट के नीचे क्या है?" } ],
        fx: { en: "BOING!", hi: "टप्पा!" }, action: true },
      { bg: "bedroom", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.33 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.52, y: 0.35 } ],
        cap: { en: "From now on, the ball lives in the toy basket.", hi: "अब से बॉल खिलौनों की टोकरी में रहेगी।" },
        say: [ { who: 0, en: "My ball! I was sleeping on it!", hi: "मेरी बॉल! मैं तो इसी पर सो रहा था!" } ] }
    ]
  },

  // 14 — Mumma's birthday surprise
  {
    id: 14, age: "4-6", category: "family",
    title: { en: "A Surprise for Mumma", hi: "मम्मा के लिए सरप्राइज़" },
    blurb: { en: "It's Mumma's birthday! Auggie and the family plan a secret surprise, but can Auggie keep quiet?", hi: "आज मम्मा का जन्मदिन है! ऑगी और परिवार सीक्रेट सरप्राइज़ प्लान करते हैं, पर क्या ऑगी चुप रह पाएगा?" },
    moral: { en: "The best gifts are made with love and shared with family.", hi: "सबसे अच्छे तोहफ़े प्यार से बनते हैं और परिवार के साथ बाँटे जाते हैं।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "cake", x: 0.52 }, { id: "balloon", x: 0.12, y: 0.2 }, { id: "balloon", x: 0.9, y: 0.18 } ], fx: { en: "SURPRISE!", hi: "सरप्राइज़!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Shh! Today is Mumma's birthday.", hi: "श्श! आज मम्मा का जन्मदिन है।" },
        say: [ { who: 1, en: "Let's plan a secret surprise for Mottu!", hi: "चलो मोटू के लिए एक सीक्रेट सरप्राइज़ प्लान करें!", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "mausi", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "balloon", x: 0.12, y: 0.2 }, { id: "balloon", x: 0.9, y: 0.2 } ],
        cap: { en: "Mausi blows up balloons. Dadi bakes a cake.", hi: "मौसी गुब्बारे फुलाती हैं। दादी केक बनाती हैं।" },
        say: [ { who: 1, en: "Can I help? I'm very good at helping!", hi: "मैं मदद करूँ? मैं मदद करने में बहुत अच्छा हूँ!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "surprised", x: 0.33 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "balloon", x: 0.55, y: 0.3 } ],
        cap: { en: "Oops! Auggie's happy tail pops a balloon!", hi: "उफ़! ऑगी की खुश पूँछ से एक गुब्बारा फूट गया!" },
        say: [ { who: 1, en: "Ha ha! Careful with that tail, Auggie!", hi: "हा हा! पूँछ संभालो, ऑगी!" } ],
        fx: { en: "POP!", hi: "फट!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.35 } ], props: [ { id: "flower", x: 0.68 }, { id: "flower", x: 0.85 }, { id: "tree", x: 0.08 } ],
        cap: { en: "Auggie finds a fallen yellow flower in the garden.", hi: "ऑगी को बगीचे में गिरा हुआ एक पीला फूल मिलता है।" },
        say: [ { who: 0, en: "A pretty gift for my pretty Mumma!", hi: "मेरी प्यारी मम्मा के लिए प्यारा-सा तोहफ़ा!", kind: "think" } ] },
      { bg: "home", chars: [ { id: "papa", pose: "cheer", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "cheer", mood: "happy", x: 0.5 }, { id: "mumma", pose: "stand", mood: "surprised", x: 0.8, flip: true } ], props: [ { id: "balloon", x: 0.35, y: 0.15 }, { id: "balloon", x: 0.65, y: 0.15 } ],
        cap: { en: "Mumma walks in. Lights on! Everyone shouts...", hi: "मम्मा अंदर आती हैं। लाइट ऑन! सब चिल्लाते हैं..." },
        say: [ { who: 2, en: "Mittsy! Auggie! You did all this?", hi: "मिट्सी! ऑगी! ये सब तुमने किया?" } ],
        fx: { en: "SURPRISE!", hi: "सरप्राइज़!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "sit", mood: "happy", x: 0.3 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.68, flip: true } ], props: [ { id: "flower", x: 0.49 }, { id: "cake", x: 0.9 } ],
        cap: { en: "Cake for the family, a carrot for Auggie. Best birthday ever!", hi: "परिवार के लिए केक, ऑगी के लिए गाजर। सबसे अच्छा जन्मदिन!" },
        say: [ { who: 0, en: "Happy birthday, Mumma! You're the best!", hi: "जन्मदिन मुबारक हो, मम्मा! आप सबसे अच्छी हो!" } ] }
    ]
  },

  // 15 — Feeling jealous when Mumma pets another dog
  {
    id: 15, age: "4-6", category: "feelings",
    title: { en: "Mumma's Big, Big Heart", hi: "मम्मा का बड़ा-सा दिल" },
    blurb: { en: "At the park, Mumma pets a lonely little pug, and Auggie feels a grumpy, jealous feeling inside.", hi: "पार्क में मम्मा एक अकेले छोटे पग को सहलाती हैं, और ऑगी के मन में अजीब-सी जलन होती है।" },
    moral: { en: "Love grows when we share it. There is enough for everyone.", hi: "प्यार बाँटने से बढ़ता है। सबके लिए काफ़ी प्यार है।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "sit", mood: "sad", x: 0.2 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.5 }, { id: "pinku", pose: "sit", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "tree", x: 0.95 } ] },
    panels: [
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "frisbee", x: 0.5, y: 0.3 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Sunday at the park with Mumma!", hi: "मम्मा के साथ पार्क में संडे!" },
        say: [ { who: 0, en: "Mumma, throw the frisbee! Throw it!", hi: "मम्मा, फ़्रिस्बी फेंको! फेंको ना!" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.15 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.45 }, { id: "pinku", pose: "sit", mood: "sad", x: 0.78, flip: true } ],
        cap: { en: "A little pug named Pinku sits all alone.", hi: "पिंकू नाम का एक छोटा पग अकेला बैठा है।" },
        say: [ { who: 2, en: "Snort... nobody wants to play with me.", hi: "फ़ुर्र... मेरे साथ कोई नहीं खेलता।" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.2 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.52 }, { id: "pinku", pose: "lie", mood: "happy", x: 0.82, flip: true } ],
        cap: { en: "Mumma pats Pinku. Pat, pat, pat.", hi: "मम्मा पिंकू को सहलाती हैं। थप, थप, थप।" },
        say: [ { who: 0, en: "Hmph! That's MY Mumma!", hi: "हुँह! वो मेरी मम्मा हैं!", kind: "think" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Auggie, are you feeling a little jealous?", hi: "ऑगी, क्या तुम्हें थोड़ी जलन हो रही है?" },
               { who: 0, en: "Maybe... a tiny bit.", hi: "शायद... थोड़ी-सी।", kind: "whisper" } ] },
      { bg: "park", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.3 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "My heart is big. You're always my number one!", hi: "मेरा दिल बहुत बड़ा है। तुम हमेशा मेरे नंबर वन हो!" } ],
        fx: { en: "HUG!", hi: "झप्पी!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "pinku", pose: "run", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "frisbee", x: 0.5, y: 0.3 } ],
        cap: { en: "Auggie shares his frisbee. Now Pinku has a friend!", hi: "ऑगी अपनी फ़्रिस्बी बाँटता है। अब पिंकू का भी दोस्त है!" },
        say: [ { who: 1, en: "Snort! This is the best day!", hi: "फ़ुर्र! आज का दिन सबसे बढ़िया है!" } ],
        fx: { en: "WHEE!", hi: "वाह!" }, action: true }
    ]
  },

  // 16 — Sharing toys with Chiku
  {
    id: 16, age: "4-6", category: "friends",
    title: { en: "Auggie's Toy Mountain", hi: "ऑगी का खिलौनों वाला पहाड़" },
    blurb: { en: "Tiny Chiku comes to play, but Auggie wants to keep ALL the toys for himself.", hi: "नन्हा चीकू खेलने आता है, पर ऑगी सारे खिलौने अपने पास रखना चाहता है।" },
    moral: { en: "Sharing turns 'mine' into 'ours', and doubles the fun.", hi: "बाँटने से 'मेरा' बन जाता है 'हमारा', और मज़ा दुगना हो जाता है।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.35 }, { id: "chiku", pose: "cheer", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "ball", x: 0.55 }, { id: "bone", x: 0.12 } ] },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.3 }, { id: "chiku", pose: "wave", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Ding-dong! Tiny Chiku has come to play.", hi: "टिंग-टॉन्ग! नन्हा चीकू खेलने आया है।" },
        say: [ { who: 1, en: "Hi Auggie! Can I play with your toys?", hi: "हाय ऑगी! क्या मैं तुम्हारे खिलौनों से खेल सकता हूँ?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "determined", x: 0.45 } ], props: [ { id: "ball", x: 0.2 }, { id: "bone", x: 0.7 }, { id: "frisbee", x: 0.88 } ],
        cap: { en: "Auggie grabs every toy and lies on top.", hi: "ऑगी सारे खिलौने समेटकर उन पर लेट जाता है।" },
        say: [ { who: 0, en: "Mine, mine, all mine!", hi: "मेरे, मेरे, सब मेरे!" } ],
        fx: { en: "GRAB!", hi: "झपट!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "surprised", x: 0.3 }, { id: "chiku", pose: "sit", mood: "sad", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Oh. Okay. I'll just sit here then.", hi: "अच्छा। ठीक है। मैं बस यहीं बैठ जाता हूँ।", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "laptop", x: 0.9 } ],
        say: [ { who: 1, en: "How would you feel, Auggie, with no toys?", hi: "ऑगी, अगर तुम्हारे पास खिलौने न हों, तो कैसा लगेगा?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.3 }, { id: "chiku", pose: "cheer", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.52 } ],
        say: [ { who: 0, en: "Here, Chiku! Let's play together!", hi: "लो चीकू! चलो साथ में खेलते हैं!" } ] },
      { bg: "garden", chars: [ { id: "auggie", pose: "run", mood: "laugh", x: 0.3 }, { id: "chiku", pose: "run", mood: "laugh", x: 0.7 } ], props: [ { id: "ball", x: 0.9, y: 0.45 }, { id: "bush", x: 0.05 } ],
        cap: { en: "Tiny Chiku is super fast! Sharing is double fun.", hi: "नन्हा चीकू तो सुपर तेज़ है! बाँटने में दुगना मज़ा।" },
        say: [ { who: 1, en: "Catch me if you can!", hi: "पकड़ सको तो पकड़ो!" } ],
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true }
    ]
  },

  // 17 — Drinking water on a hot day
  {
    id: 17, age: "4-6", category: "habits",
    title: { en: "Slurp on a Hot Day", hi: "गर्मी में गट-गट पानी" },
    blurb: { en: "On a super hot day, Auggie feels floppy and tired, until Dadi shows him the magic of cool water.", hi: "बहुत गर्म दिन में ऑगी थका-थका है, फिर दादी दिखाती हैं ठंडे पानी का जादू।" },
    moral: { en: "On hot days, drink water, rest in the shade, and stay cool.", hi: "गर्मी में पानी पियो, छाँव में आराम करो, और ठंडे रहो।" },
    cover: { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.38 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.8, flip: true } ], props: [ { id: "bowl", x: 0.6 }, { id: "sun", x: 0.85, y: 0.1 }, { id: "tree", x: 0.1 } ], fx: { en: "SLURP!", hi: "सुड़प!" } },
    panels: [
      { bg: "city", chars: [ { id: "auggie", pose: "stand", mood: "sad", x: 0.3 }, { id: "papa", pose: "stand", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "sun", x: 0.85, y: 0.1 } ],
        say: [ { who: 0, en: "Phew! My tongue is hanging down to my toes!", hi: "उफ़! मेरी जीभ तो ज़मीन तक लटक गई!" },
               { who: 1, en: "Too hot for a walk! Let's go home, buddy.", hi: "सैर के लिए बहुत गर्मी है! चलो घर चलें, दोस्त।" } ],
        fx: { en: "SIZZLE!", hi: "छन्न!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "sleepy", x: 0.33 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.75, flip: true } ],
        cap: { en: "Back home, Auggie flops on the cool floor.", hi: "घर आकर ऑगी ठंडे फ़र्श पर पसर जाता है।" },
        say: [ { who: 1, en: "Arre! Our Auggie looks all floppy!", hi: "अरे! हमारा ऑगी तो एकदम ढीला पड़ गया!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "sit", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "stand", mood: "happy", x: 0.72, flip: true } ], props: [ { id: "bowl", x: 0.52 } ],
        say: [ { who: 1, en: "Hot day means lots of fresh, cool water!", hi: "गर्मी का मतलब ढेर सारा ताज़ा, ठंडा पानी!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.38 } ], props: [ { id: "bowl", x: 0.62 } ],
        cap: { en: "Slurp, slurp, slurp! Water drips from his chin.", hi: "सुड़प, सुड़प, सुड़प! उसकी ठुड्डी से पानी टपकता है।" },
        say: [ { who: 0, en: "Ahh! I feel like a brand-new dog!", hi: "आहा! मैं तो बिल्कुल नया कुत्ता बन गया!" } ],
        fx: { en: "SLURP!", hi: "सुड़प!" }, action: true },
      { bg: "garden", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.35 }, { id: "nanu", pose: "sit", mood: "happy", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.1 } ],
        cap: { en: "Nanu and Auggie rest in the shade of the neem tree.", hi: "नानू और ऑगी नीम के पेड़ की छाँव में आराम करते हैं।" },
        say: [ { who: 1, en: "Dogs cool down by panting. Shade helps too.", hi: "कुत्ते हाँफकर ठंडे होते हैं। छाँव भी मदद करती है।" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.33 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "tree", x: 0.95 } ],
        cap: { en: "The evening is cooler. NOW it's walk time!", hi: "शाम को ठंडक है। अब सैर का टाइम!" },
        say: [ { who: 0, en: "Water first, then walkies! I remember!", hi: "पहले पानी, फिर सैर! मुझे याद है!" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true }
    ]
  },

  // 18 — Tidying toys into the basket
  {
    id: 18, age: "4-6", category: "home",
    title: { en: "Toys Go Home Too", hi: "खिलौनों का भी घर है" },
    blurb: { en: "Auggie's toys are everywhere, until Mumma turns tidying up into a fun race.", hi: "ऑगी के खिलौने हर जगह बिखरे हैं, फिर मम्मा सफ़ाई को मज़ेदार रेस बना देती हैं।" },
    moral: { en: "Tidy up after playing, so everything has a happy home.", hi: "खेलने के बाद सामान समेटो, ताकि हर चीज़ अपनी जगह पर रहे।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.4 }, { id: "mumma", pose: "stand", mood: "laugh", x: 0.8, flip: true } ], props: [ { id: "ball", x: 0.12 }, { id: "bone", x: 0.6 }, { id: "frisbee", x: 0.25, y: 0.3 } ], fx: { en: "TIDY!", hi: "सफ़ाई!" } },
    panels: [
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.5 } ], props: [ { id: "ball", x: 0.12 }, { id: "bone", x: 0.28 }, { id: "frisbee", x: 0.8 } ],
        cap: { en: "Balls here, bones there, a frisbee on the sofa!", hi: "यहाँ बॉल, वहाँ हड्डी, सोफ़े पर फ़्रिस्बी!" },
        say: [ { who: 0, en: "What a fun, fun day!", hi: "कितना मज़ेदार दिन था!" } ] },
      { bg: "home", chars: [ { id: "papa", pose: "stand", mood: "surprised", x: 0.3 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.72, flip: true } ], props: [ { id: "bone", x: 0.5 } ],
        say: [ { who: 0, en: "Oops! Baby, I stepped on a squeaky bone!", hi: "उफ़! बेबी, मेरा पैर चूँ-चूँ वाली हड्डी पर पड़ गया!", kind: "shout" } ],
        fx: { en: "SQUEAK!", hi: "चूँ-चूँ!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "mumma", pose: "stand", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Auggie, your toys want to go home!", hi: "ऑगी, तुम्हारे खिलौने घर जाना चाहते हैं!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "happy", x: 0.33 }, { id: "mumma", pose: "point", mood: "happy", x: 0.75, flip: true } ],
        say: [ { who: 0, en: "Toys have a home?", hi: "खिलौनों का भी घर होता है?" },
               { who: 1, en: "Yes! The big toy basket. Let's race!", hi: "हाँ! खिलौनों की बड़ी टोकरी। चलो रेस लगाते हैं!" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "run", mood: "determined", x: 0.35 } ], props: [ { id: "ball", x: 0.62 }, { id: "bone", x: 0.78 }, { id: "frisbee", x: 0.9, y: 0.4 } ],
        cap: { en: "One ball, two bones, one frisbee... into the basket!", hi: "एक बॉल, दो हड्डियाँ, एक फ़्रिस्बी... टोकरी में!" },
        fx: { en: "ZOOM!", hi: "ज़ूम!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.33 }, { id: "mumma", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        cap: { en: "Now nobody trips, and the toys sleep cosy.", hi: "अब कोई नहीं गिरेगा, और खिलौने आराम से सोएँगे।" },
        say: [ { who: 1, en: "All tidy! You're my super helper!", hi: "सब साफ़! तुम मेरे सुपर हेल्पर हो!" } ],
        fx: { en: "TA-DA!", hi: "टा-डा!" }, action: true }
    ]
  },

  // 19 — Gentle play with little Kabir
  {
    id: 19, age: "4-6", category: "friends",
    title: { en: "Gentle Giant Auggie", hi: "नरम दिल वाला बड़ा ऑगी" },
    blurb: { en: "Little Kabir is shy of big Auggie, so Auggie learns to play slow, soft and gentle.", hi: "छोटा कबीर बड़े ऑगी से डरता है, तो ऑगी सीखता है धीरे और प्यार से खेलना।" },
    moral: { en: "Be gentle with little ones. Soft and slow makes friends.", hi: "छोटों के साथ प्यार से पेश आओ। धीरे और नरमी से दोस्त बनते हैं।" },
    cover: { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.33 }, { id: "kabir", pose: "sit", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "ball", x: 0.52 }, { id: "tree", x: 0.95 } ] },
    panels: [
      { bg: "park", chars: [ { id: "auggie", pose: "run", mood: "happy", x: 0.3 }, { id: "kabir", pose: "stand", mood: "scared", x: 0.75, flip: true } ],
        cap: { en: "Auggie sees a new friend and runs over, super fast!", hi: "ऑगी नया दोस्त देखकर सुपर तेज़ दौड़ता है!" },
        say: [ { who: 1, en: "Whoa! You're so BIG!", hi: "अरे बाप रे! तुम तो कितने बड़े हो!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.22 }, { id: "kabir", pose: "stand", mood: "scared", x: 0.58, flip: true }, { id: "mumma", pose: "stand", mood: "happy", x: 0.82, flip: true } ],
        cap: { en: "Kabir hides behind Mumma.", hi: "कबीर मम्मा के पीछे छुप जाता है।" },
        say: [ { who: 0, en: "Why is he scared? I just want to play!", hi: "ये डर क्यों रहा है? मुझे तो बस खेलना है!", kind: "think" } ] },
      { bg: "park", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.68, flip: true } ],
        say: [ { who: 0, en: "You're big, Auggie. Little friends need slow and soft.", hi: "ऑगी, तुम बड़े हो। छोटे दोस्तों के साथ धीरे और प्यार से।" } ] },
      { bg: "park", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.33 }, { id: "kabir", pose: "sit", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Auggie lies down low. Kabir remembers to ask first.", hi: "ऑगी नीचे लेट जाता है। कबीर को याद है — पहले पूछना है।" },
        say: [ { who: 1, en: "Auggie, may I pet you, please?", hi: "ऑगी, क्या मैं तुम्हें सहला सकता हूँ, प्लीज़?" } ] },
      { bg: "park", chars: [ { id: "kabir", pose: "sit", mood: "laugh", x: 0.3 }, { id: "auggie", pose: "lie", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "Kabir lets Auggie sniff his hand, then pats gently.", hi: "कबीर पहले ऑगी को हाथ सुँघाता है, फिर धीरे से सहलाता है।" },
        say: [ { who: 0, en: "Your fur is so soft!", hi: "तुम्हारे बाल कितने मुलायम हैं!" } ] },
      { bg: "park", chars: [ { id: "kabir", pose: "run", mood: "laugh", x: 0.28 }, { id: "auggie", pose: "run", mood: "happy", x: 0.62 } ], props: [ { id: "ball", x: 0.88 } ],
        cap: { en: "Slow rolls, soft tugs, big smiles. New best friends!", hi: "धीमे-धीमे खेल, बड़ी-बड़ी मुस्कानें। नए पक्के दोस्त!" },
        say: [ { who: 1, en: "Gentle play is the best play!", hi: "प्यार से खेलना ही सबसे अच्छा खेल है!" } ],
        fx: { en: "HEE HEE!", hi: "ही-ही!" }, action: true }
    ]
  },

  // 20 — Please and thank-you paws
  {
    id: 20, age: "4-6", category: "habits",
    title: { en: "Please and Thank-You Paws", hi: "प्लीज़ और थैंक यू वाले पंजे" },
    blurb: { en: "Auggie barks and grabs for carrots, until Dadi teaches him two magic words.", hi: "ऑगी गाजर के लिए भौंकता और झपटता है, फिर दादी उसे दो जादुई शब्द सिखाती हैं।" },
    moral: { en: "Please and thank you are magic words that make everyone smile.", hi: "प्लीज़ और थैंक यू ऐसे जादुई शब्द हैं जो सबको मुस्कुरा देते हैं।" },
    cover: { bg: "kitchen", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.35 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "apple", x: 0.55 } ], fx: { en: "PLEASE!", hi: "प्लीज़!" } },
    panels: [
      { bg: "kitchen", chars: [ { id: "auggie", pose: "blast", mood: "determined", x: 0.3 }, { id: "dadi", pose: "stand", mood: "surprised", x: 0.72, flip: true } ],
        cap: { en: "Dadi is cutting carrots. Auggie wants one NOW!", hi: "दादी गाजर काट रही हैं। ऑगी को अभी चाहिए!" },
        say: [ { who: 0, en: "Give! Give! Carrot! Carrot!", hi: "दो! दो! गाजर! गाजर!", kind: "shout" } ],
        fx: { en: "WOOF!", hi: "भौं-भौं!" }, action: true },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "point", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Arre, arre! Where are your magic words?", hi: "अरे, अरे! तुम्हारे जादुई शब्द कहाँ गए?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.3 }, { id: "dadi", pose: "sit", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 0, en: "Magic words? Like 'abra-ka-dabra'?", hi: "जादुई शब्द? जैसे 'छू-मंतर'?" },
               { who: 1, en: "No! 'Please' and 'thank you'!", hi: "नहीं! 'प्लीज़' और 'थैंक यू'!" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.33 }, { id: "dadi", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie sits and lifts one soft paw.", hi: "ऑगी बैठता है और धीरे से एक पंजा उठाता है।" },
        say: [ { who: 0, en: "Dadi, may I have a carrot, please?", hi: "दादी, क्या मुझे एक गाजर मिलेगी, प्लीज़?" } ] },
      { bg: "kitchen", chars: [ { id: "auggie", pose: "lie", mood: "happy", x: 0.33 }, { id: "dadi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Such good manners! Here you go!", hi: "इतनी अच्छी तमीज़! ये लो!" } ],
        fx: { en: "CRUNCH!", hi: "कुर्र-कुर्र!" }, action: true },
      { bg: "home", chars: [ { id: "dadi", pose: "stand", mood: "laugh", x: 0.2 }, { id: "auggie", pose: "wave", mood: "happy", x: 0.5 }, { id: "papa", pose: "sit", mood: "laugh", x: 0.8, flip: true } ],
        say: [ { who: 1, en: "Thank you, Dadi! Papa, a walk, please?", hi: "थैंक यू, दादी! पापा, सैर पर चलें, प्लीज़?" },
               { who: 2, en: "Ma, you taught him magic words? Let's go!", hi: "माँ, आपने इसे जादुई शब्द सिखा दिए? चलो चलें!" } ] }
    ]
  },

  // 21 — A new collar
  {
    id: 21, age: "4-6", category: "home",
    title: { en: "Auggie's Shiny New Collar", hi: "ऑगी का चमचमाता नया कॉलर" },
    blurb: { en: "Auggie's old collar is too tight, but he isn't sure about the brand-new red one.", hi: "ऑगी का पुराना कॉलर टाइट हो गया है, पर नए लाल कॉलर को लेकर वह पक्का नहीं है।" },
    moral: { en: "New things feel strange at first, so give them a chance.", hi: "नई चीज़ें पहले अजीब लगती हैं, पर उन्हें एक मौका ज़रूर दो।" },
    cover: { bg: "home", chars: [ { id: "auggie", pose: "stand", mood: "happy", x: 0.4 }, { id: "mumma", pose: "cheer", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "gift", x: 0.12 } ], fx: { en: "SHINE!", hi: "चमक!" } },
    panels: [
      { bg: "home", chars: [ { id: "papa", pose: "sit", mood: "happy", x: 0.2 }, { id: "auggie", pose: "sit", mood: "sad", x: 0.5 }, { id: "mumma", pose: "sit", mood: "surprised", x: 0.8, flip: true } ],
        cap: { en: "Auggie keeps scratching his neck. Scratch, scratch!", hi: "ऑगी बार-बार गर्दन खुजला रहा है। खुज-खुज!" },
        say: [ { who: 0, en: "Mottu, his old collar is too tight now!", hi: "मोटू, इसका पुराना कॉलर अब टाइट हो गया है!" } ] },
      { bg: "home", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "sit", mood: "surprised", x: 0.68, flip: true } ], props: [ { id: "gift", x: 0.48 } ],
        say: [ { who: 0, en: "Surprise! A brand-new red collar for you!", hi: "सरप्राइज़! तुम्हारे लिए बिल्कुल नया लाल कॉलर!" } ],
        fx: { en: "TA-DA!", hi: "टा-डा!" }, action: true },
      { bg: "home", chars: [ { id: "auggie", pose: "think", mood: "sad", x: 0.3 }, { id: "mumma", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        cap: { en: "Auggie isn't sure. New things can feel funny.", hi: "ऑगी को पक्का नहीं है। नई चीज़ें अजीब लगती हैं।" },
        say: [ { who: 0, en: "But I love my old collar...", hi: "पर मुझे तो मेरा पुराना कॉलर पसंद है...", kind: "whisper" } ] },
      { bg: "home", chars: [ { id: "mumma", pose: "sit", mood: "happy", x: 0.28 }, { id: "auggie", pose: "sit", mood: "happy", x: 0.68, flip: true } ],
        cap: { en: "Mumma checks: two fingers fit under the collar. Just right!", hi: "मम्मा देखती हैं: कॉलर के नीचे दो उँगलियाँ आती हैं। एकदम सही!" },
        say: [ { who: 0, en: "Not too tight, not too loose. Comfy?", hi: "न ज़्यादा टाइट, न ज़्यादा ढीला। आराम है?" } ] },
      { bg: "home", chars: [ { id: "auggie", pose: "cheer", mood: "surprised", x: 0.35 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        say: [ { who: 0, en: "It jingles! It shines! It has my name!", hi: "ये छनकता है! चमकता है! इस पर मेरा नाम है!" } ],
        fx: { en: "JINGLE!", hi: "छन-छन!" }, action: true },
      { bg: "park", chars: [ { id: "auggie", pose: "cheer", mood: "happy", x: 0.3 }, { id: "mausi", pose: "stand", mood: "laugh", x: 0.72, flip: true } ], props: [ { id: "camera", x: 0.52 }, { id: "tree", x: 0.95 } ],
        cap: { en: "Now Auggie shows his new collar to everyone!", hi: "अब ऑगी सबको अपना नया कॉलर दिखाता फिरता है!" },
        say: [ { who: 1, en: "Selfie time! Say cheese, handsome!", hi: "सेल्फ़ी टाइम! बोलो चीज़, हैंडसम!" } ],
        fx: { en: "CLICK!", hi: "क्लिक!" }, action: true }
    ]
  },

  // 22 — First time seeing his reflection
  {
    id: 22, age: "4-6", category: "feelings",
    title: { en: "Who Is That Dog?", hi: "वो कुत्ता कौन है?" },
    blurb: { en: "On a lake walk, Auggie meets a golden dog in the water who copies everything he does!", hi: "झील किनारे सैर पर ऑगी को पानी में एक सुनहरा कुत्ता मिलता है, जो उसकी हर नकल करता है!" },
    moral: { en: "Smile at yourself. You are special just the way you are.", hi: "खुद को देखकर मुस्कुराओ। तुम जैसे हो, वैसे ही खास हो।" },
    cover: { bg: "river", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.4 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ], props: [ { id: "sun", x: 0.12, y: 0.1 } ], fx: { en: "WHO?!", hi: "कौन?!" } },
    panels: [
      { bg: "river", chars: [ { id: "papa", pose: "stand", mood: "happy", x: 0.28 }, { id: "auggie", pose: "run", mood: "happy", x: 0.65 } ], props: [ { id: "sun", x: 0.88, y: 0.1 }, { id: "tree", x: 0.06 } ],
        cap: { en: "Papa and Auggie walk by the lake on the red leash.", hi: "पापा और ऑगी लाल पट्टे के साथ झील किनारे टहलते हैं।" },
        say: [ { who: 0, en: "What a calm, sunny morning, buddy!", hi: "कितनी शांत, धूप वाली सुबह है, दोस्त!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "point", mood: "surprised", x: 0.45 } ],
        cap: { en: "Auggie peeks into the still water. A dog peeks back!", hi: "ऑगी शांत पानी में झाँकता है। एक कुत्ता भी झाँकता है!" },
        say: [ { who: 0, en: "Hello? Who are you?", hi: "हैलो? तुम कौन हो?" } ],
        fx: { en: "WHO?!", hi: "कौन?!" }, action: true },
      { bg: "river", chars: [ { id: "auggie", pose: "wave", mood: "happy", x: 0.35 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        cap: { en: "Auggie waves a paw. The water dog waves too!", hi: "ऑगी पंजा हिलाता है। पानी वाला कुत्ता भी हिलाता है!" },
        say: [ { who: 0, en: "Hey! Stop copying me!", hi: "अरे! मेरी नकल मत करो!" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "think", mood: "surprised", x: 0.33 }, { id: "papa", pose: "sit", mood: "happy", x: 0.72, flip: true } ],
        say: [ { who: 1, en: "Auggie, that's YOU! It's your reflection in the water.", hi: "ऑगी, वो तुम ही हो! पानी में तुम्हारी ही तस्वीर दिख रही है।" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "think", mood: "laugh", x: 0.38 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.78, flip: true } ],
        say: [ { who: 0, en: "Big nose, floppy ears, red collar... I'm handsome!", hi: "बड़ी नाक, लटकते कान, लाल कॉलर... मैं तो हैंडसम हूँ!", kind: "think" } ] },
      { bg: "river", chars: [ { id: "auggie", pose: "cheer", mood: "laugh", x: 0.35 }, { id: "papa", pose: "stand", mood: "laugh", x: 0.75, flip: true } ], props: [ { id: "tree", x: 0.94 } ],
        cap: { en: "Papa keeps the leash on near the water. Safe and happy!", hi: "पानी के पास पापा पट्टा पकड़े रहते हैं। सुरक्षित और खुश!" },
        say: [ { who: 0, en: "Bye, handsome water dog! See you tomorrow!", hi: "बाय, हैंडसम पानी वाले कुत्ते! कल मिलेंगे!" } ],
        fx: { en: "YAY!", hi: "याय!" }, action: true }
    ]
  }

);
