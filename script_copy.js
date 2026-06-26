const verses = [
  //0
  {
    NLT_verse: "Seeing their faith, Jesus said to the paralyzed man, “My child, your sins are forgiven.”",
    KJV_verse: "When Jesus saw their faith, he said unto the sick of the palsy, Son, thy sins be forgiven thee.",
    NKJV_verse: "When Jesus saw their faith, He said to the paralytic, “Son, your sins are forgiven you.”",
    NASB_verse: "And seeing their faith, Jesus *said to the paralytic, “Son, your sins are forgiven.”",
    AMP_verse: "When Jesus saw their [active] faith [springing from confidence in Him], He said to the paralyzed man, “Son, your sins are forgiven.”",
    ESV_verse: "And when Jesus saw their faith, he said to the paralytic, “Son, your sins are forgiven.”",
    NRSV_verse: "When Jesus saw their faith, he said to the paralytic, “Son, your sins are forgiven.”",
    address: "Mark 2:5",
    image: "photos/0.jpg"
  },

  //1
  {
    NLT_verse: "Jesus replied, “If you only knew the gift God has for you and who you are speaking to, you would ask me, and I would give you living water.”",
    KJV_verse: "Jesus answered and said unto her, If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water.",
    NKJV_verse: "Jesus answered and said to her, “If you knew the gift of God, and who it is who says to you, ‘Give Me a drink,’ you would have asked Him, and He would have given you living water.”",
    NASB_verse: "Jesus answered and said to her, “If you knew the gift of God, and who it is who says to you, ‘Give Me a drink,’ you would have asked Him, and He would have given you living water.”",
    AMP_verse: "Jesus answered her, “If you knew [about] God’s gift [of eternal life], and who it is who says to you, ‘Give Me a drink,’ you would have asked Him [instead], and He would have given you living water (eternal life).”",
    ESV_verse: "Jesus answered her, “If you knew the gift of God, and who it is that is saying to you, ‘Give me a drink,’ you would have asked him, and he would have given you living water.”",
    NRSV_verse: "Jesus answered her, “If you knew the gift of God, and who it is that is saying to you, ‘Give me a drink,’ you would have asked him, and he would have given you living water.”",
    address: "John 4:10",
    image: "photos/1.jpg"
  },

  //2
  {
    NLT_verse: "For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.",
    KJV_verse: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    NKJV_verse: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
    NASB_verse: "“For God so loved the world, that He gave His only Son, that whoever believes in Him shall not perish, but have eternal life.",
    AMP_verse: "“For God so [greatly] loved and dearly prized the world, that He [even] gave His [One and] only begotten Son, so that whoever believes and trusts in Him [as Savior] shall not perish, but have eternal life.",
    ESV_verse: "“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    NRSV_verse: "“For God so loved the world, that he gave his only Son, so that everyone who believes in him may not perish but may have eternal life.",
    address: "John 3:16",
    image: "photos/2.jpg"
  },

  //3
  {
    NLT_verse: "Trust in the Lord with all your heart; do not depend on your own understanding.",
    KJV_verse: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
    NKJV_verse: "Trust in the Lord with all your heart, And lean not on your own understanding;",
    NASB_verse: "Trust in the Lord with all your heart And do not lean on your own understanding.",
    AMP_verse: "Trust in and rely confidently on the Lord with all your heart and do not rely on your own insight or understanding.",
    ESV_verse: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
    NRSV_verse: "Trust in the Lord with all your heart, and do not rely on your own insight.",
    address: "Proverbs 3:5",
    image: "photos/3.jpg"
  },

  //4
  {
    NLT_verse: "Seek his will in all you do, and he will show you which path to take.",
    KJV_verse: "In all thy ways acknowledge him, and he shall direct thy paths.",
    NKJV_verse: "In all your ways acknowledge Him, And He shall direct your paths.",
    NASB_verse: "In all your ways acknowledge Him, And He will make your paths straight.",
    AMP_verse: "In all your ways know and acknowledge and recognize Him, and He will make your paths straight and smooth [removing obstacles that block your way].",
    ESV_verse: "In all your ways acknowledge him, and he will make straight your paths.",
    NRSV_verse: "In all your ways acknowledge him, and he will make straight your paths.",
    address: "Proverbs 3:6",
    image: "photos/4.jpg"
  },

  //5
  {
    NLT_verse: "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.",
    KJV_verse: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    NKJV_verse: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
    NASB_verse: "And we know that God causes all things to work together for good to those who love God, to those who are called according to His purpose.",
    AMP_verse: "And we know [with great confidence] that God [who is deeply concerned about us] causes all things to work together for good for those who love God, to those who are called according to His plan and purpose.",
    ESV_verse: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    NRSV_verse: "We know that all things work together for good for those who love God, who are called according to his purpose.",
    address: "Romans 8:28",
    image: "photos/5.jpg"
  },

  //6
  {
    NLT_verse: "Don’t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done.",
    KJV_verse: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
    NKJV_verse: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God;",
    NASB_verse: "Be anxious for nothing, but in everything by prayer and pleading with thanksgiving let your requests be made known to God.",
    AMP_verse: "Do not be anxious or worried about anything, but in everything [every circumstance and situation] by prayer and petition with thanksgiving, continue to make your [specific] requests known to God.",
    ESV_verse: "do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
    NRSV_verse: "Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
    address: "Philippians 4:6",
    image: "photos/6.jpg"
  },

  //7
  {
    NLT_verse: "Then you will experience God’s peace, which exceeds anything we can understand. His peace will guard your hearts and minds as you live in Christ Jesus.",
    KJV_verse: "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
    NKJV_verse: "and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.",
    NASB_verse: "And the peace of God, which surpasses all comprehension, will guard your hearts and your minds in Christ Jesus.",
    AMP_verse: "And the peace of God [that peace which reassures the heart, that peace] which transcends all understanding stands guard over your hearts and your minds in Christ Jesus.",
    ESV_verse: "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    NRSV_verse: "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    address: "Philippians 4:7",
    image: "photos/7.jpg"
  },

  //8
  {
    NLT_verse: "For I can do everything through Christ, who gives me strength.",
    KJV_verse: "I can do all things through Christ which strengtheneth me.",
    NKJV_verse: "I can do all things through Christ who strengthens me.",
    NASB_verse: "I can do all things through Him who strengthens me.",
    AMP_verse: "I can do all things [which He has called me to do] through Him who strengthens and empowers me [to fulfill His purpose—I am self-sufficient in Christ’s sufficiency; I am ready for anything and equal to anything through Him who infuses me with inner strength and confident peace.]",
    ESV_verse: "I can do all things through him who strengthens me.",
    NRSV_verse: "I can do all things through him who strengthens me.",
    address: "Philippians 4:13",
    image: "photos/8.jpg"
  },

  //9
  {
    NLT_verse: "“For I know the plans I have for you,” says the Lord. “They are plans for good and not for disaster, to give you a future and a hope.”",
    KJV_verse: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.",
    NKJV_verse: "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
    NASB_verse: "‘For I know the plans that I have for you,’ declares the Lord, ‘plans for welfare and not for calamity, to give you a future and a hope.",
    AMP_verse: "‘For I know the plans and thoughts that I have for you,’ declares the Lord, ‘plans for peace and well-being and not for disaster, to give you a future and a hope.’",
    ESV_verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    NRSV_verse: "For surely I know the plans I have for you, says the Lord, plans for welfare and not for harm, to give you a future with hope.",
    address: "Jeremiah 29:11",
    image: "photos/9.jpg"
  },

  //10
  {
    NLT_verse: "The Lord is my shepherd; I have all that I need.",
    KJV_verse: "The Lord is my shepherd; I shall not want.",
    NKJV_verse: "The Lord is my shepherd; I shall not want.",
    NASB_verse: "The Lord is my shepherd, I shall not want.",
    AMP_verse: "The Lord is my Shepherd [to feed, to guide and to shield me], I shall not want.",
    ESV_verse: "The Lord is my shepherd; I shall not want.",
    NRSV_verse: "The Lord is my shepherd, I shall not want.",
    address: "Psalm 23:1",
    image: "photos/10.jpg"
  },

  //11
  {
    NLT_verse: "Even when I walk through the darkest valley, I will not be afraid, for you are close beside me. Your rod and your staff protect and comfort me.",
    KJV_verse: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
    NKJV_verse: "Yea, though I walk through the valley of the shadow of death, I will fear no evil; For You are with me; Your rod and Your staff, they comfort me.",
    NASB_verse: "Even though I walk through the valley of the shadow of death, I fear no evil, for You are with me; Your rod and Your staff, they comfort me.",
    AMP_verse: "Even though I walk through the [sunless] valley of the shadow of death, I fear no evil, for You are with me; Your rod [to protect] and Your staff [to guide], they comfort me.",
    ESV_verse: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    NRSV_verse: "Even though I walk through the darkest valley, I fear no evil; for you are with me; your rod and your staff— they comfort me.",
    address: "Psalm 23:4",
    image: "photos/11.jpg"
  },

  //12
  {
    NLT_verse: "This is my command — be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go.",
    KJV_verse: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.",
    NKJV_verse: "Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.”",
    NASB_verse: "Have I not commanded you? Be strong and courageous! Do not be terrified nor dismayed, for the Lord your God is with you wherever you go.”",
    AMP_verse: "Have I not commanded you? Be strong and courageous! Do not be terrified or dismayed, for the Lord your God is with you wherever you go.”",
    ESV_verse: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.”",
    NRSV_verse: "I hereby command you: Be strong and courageous; do not be frightened or dismayed, for the Lord your God is with you wherever you go.”",
    address: "Joshua 1:9",
    image: "photos/12.jpg"
  },

  //13
  {
    NLT_verse: "Don’t be afraid, for I am with you. Don’t be discouraged, for I am your God. I will strengthen you and help you. I will hold you up with my victorious right hand.",
    KJV_verse: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
    NKJV_verse: "Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand.’",
    NASB_verse: "Do not fear, for I am with you; Do not be anxious, for I am your God. I will strengthen you, surely I will help you, Surely I will uphold you with My righteous right hand.’",
    AMP_verse: "‘Do not fear [anything], for I am with you; Do not be afraid, for I am your God. I will strengthen you, be assured I will help you; I will certainly take hold of you with My righteous right hand [a hand of justice, of power, of victory, of salvation].’",
    ESV_verse: "fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
    NRSV_verse: "do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand.",
    address: "Isaiah 41:10",
    image: "photos/13.jpg"
  },

  //14
  {
    NLT_verse: "But those who trust in the Lord will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint.",
    KJV_verse: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    NKJV_verse: "But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.",
    NASB_verse: "Yet those who wait for the Lord Will gain new strength; They will mount up with wings like eagles, They will run and not get tired, They will walk and not become weary.",
    AMP_verse: "But those who wait for the Lord [who expect, look for, and hope in Him] Will gain new strength and renew their power; They will lift up their wings [and rise up close to God] like eagles [rising into the sun]; They will run and not become weary, They will walk and not grow tired.",
    ESV_verse: "but they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    NRSV_verse: "but those who wait for the Lord shall renew their strength, they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint.",
    address: "Isaiah 40:31",
    image: "photos/14.jpg"
  },

  //15
  {
    NLT_verse: "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need.",
    KJV_verse: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    NKJV_verse: "But seek first the kingdom of God and His righteousness, and all these things shall be added to you.",
    NASB_verse: "But seek first His kingdom and His righteousness, and all these things will be provided to you.",
    AMP_verse: "But first and most vitally seek (aim at, strive after) His kingdom and His righteousness [His way of doing and being right—the attitude and character of God], and all these things will be given to you also.",
    ESV_verse: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    NRSV_verse: "But strive first for the kingdom of God and his righteousness, and all these things will be given to you as well.",
    address: "Matthew 6:33",
    image: "photos/15.jpg"
  },

  //16
  {
    NLT_verse: "So don’t worry about tomorrow, for tomorrow will bring its own worries. Today’s trouble is enough for today.",
    KJV_verse: "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.",
    NKJV_verse: "Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble.",
    NASB_verse: "“So do not worry about tomorrow; for tomorrow will care for itself. Each day has enough trouble of its own.",
    AMP_verse: "“So do not worry about tomorrow; for tomorrow will worry about itself. Each day has enough trouble of its own.",
    ESV_verse: "“Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.",
    NRSV_verse: "“So do not worry about tomorrow, for tomorrow will bring troubles of its own. Today’s trouble is enough for today.",
    address: "Matthew 6:34",
    image: "photos/16.jpg"
  },

  //17
  {
    NLT_verse: "Don’t copy the behavior and customs of this world, but let God transform you into a new person by changing the way you think. Then you will learn to know God’s will for you, which is good and pleasing and perfect.",
    KJV_verse: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
    NKJV_verse: "And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.",
    NASB_verse: "And do not be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what the will of God is, that which is good and acceptable and perfect.",
    AMP_verse: "And do not be conformed to this world [any longer with its superficial values and customs], but be transformed and progressively changed [as you are renewed from within] by the renewing of your mind [focusing on godly values and ethical attitudes], so that you may prove [for yourselves] what the will of God is, that which is good and acceptable and perfect [in His sight and for you].",
    ESV_verse: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
    NRSV_verse: "Do not be conformed to this world, but be transformed by the renewing of your minds, so that you may discern what is the will of God—what is good and acceptable and perfect.",
    address: "Romans 12:2",
    image: "photos/17.jpg"
  },

  //18
  {
    NLT_verse: "And I am convinced that nothing can ever separate us from God’s love. Neither death nor life, neither angels nor demons, neither our fears for today nor our worries about tomorrow—not even the powers of hell can separate us from God’s love.",
    KJV_verse: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
    NKJV_verse: "For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.",
    NASB_verse: "For I am convinced that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing will be able to separate us from the love of God which is in Christ Jesus our Lord.",
    AMP_verse: "For I am convinced [and continue to be certain] that neither death, nor life, nor angels, nor principalities, nor things present and threatening, nor things to come, nor powers, nor height, nor depth, nor any other created thing will be able to separate us from the [unlimited] love of God which is in Christ Jesus our Lord.",
    ESV_verse: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    NRSV_verse: "For I am convinced that neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor powers, nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    address: "Romans 8:38",
    image: "photos/18.jpg"
  },

  //19
  {
    NLT_verse: "Each time he said, “My grace is all you need. My power works best in weakness.” So now I am glad to boast about my weaknesses, so that the power of Christ can work through me.",
    KJV_verse: "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.",
    NKJV_verse: "And He said to me, “My grace is sufficient for you, for My strength is made perfect in weakness.” Therefore most gladly I will rather boast in my infirmities, that the power of Christ may rest upon me.",
    NASB_verse: "And He has said to me, “My grace is sufficient for you, for power is perfected in weakness.” Most gladly, therefore, I will rather boast in my weaknesses, so that the power of Christ may dwell in me.",
    AMP_verse: "but He has said to me, “My grace is sufficient for you [My lovingkindness and My mercy are more than enough—always available regardless of the situation]; for My power is being perfected [and is completed and shows itself most effectively] in weakness.” Therefore, I will all the more gladly boast in my weaknesses, so that the power of Christ [may overshadow and] dwell in me.",
    ESV_verse: "But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.",
    NRSV_verse: "but he said to me, “My grace is sufficient for you, for power is made perfect in weakness.” So, I will boast all the more gladly of my weaknesses, so that the power of Christ may dwell in me.",
    address: "2 Corinthians 12:9",
    image: "photos/19.jpg"
  },

  //20
  {
    NLT_verse: "This means that anyone who belongs to Christ has become a new person. The old life is gone; a new life has begun!",
    KJV_verse: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    NKJV_verse: "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.",
    NASB_verse: "Therefore if anyone is in Christ, this person is a new creation; the old things passed away; behold, new things have come.",
    AMP_verse: "Therefore if anyone is in Christ [that is, grafted in, joined to Him by faith in Him as Savior], he is a new creature [reborn and renewed by the Holy Spirit]; the old things [the previous moral and spiritual condition] have passed away. Behold, new things have come [because spiritual awakening brings a new life].",
    ESV_verse: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
    NRSV_verse: "So if anyone is in Christ, there is a new creation: everything old has passed away; see, everything has become new!",
    address: "2 Corinthians 5:17",
    image: "photos/20.jpg"
  },

  //21
  {
    NLT_verse: "But the Holy Spirit produces this kind of fruit in our lives: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. There is no law against these things!",
    KJV_verse: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.",
    NKJV_verse: "But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control. Against such there is no law.",
    NASB_verse: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    AMP_verse: "But the fruit of the Spirit [the result of His presence within us] is love [unselfish concern for others], joy, [inner] peace, patience [not the ability to wait, but how we act while waiting], kindness, goodness, faithfulness, gentleness, self-control. Against such things there is no law.",
    ESV_verse: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such there is no law.",
    NRSV_verse: "By contrast, the fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness, gentleness, and self-control. There is no law against such things.",
    address: "Galatians 5:22-23",
    image: "photos/21.jpg"
  },

  //22
  {
    NLT_verse: "Give all your worries and cares to God, for he cares about you.",
    KJV_verse: "Casting all your care upon him; for he careth for you.",
    NKJV_verse: "casting all your care upon Him, for He cares for you.",
    NASB_verse: "casting all your anxiety on Him, because He cares for you.",
    AMP_verse: "casting all your cares [all your anxieties, all your worries, and all your concerns, once and for all] on Him, for He cares for you [with deepest affection, and watches over you very carefully].",
    ESV_verse: "casting all your anxieties on him, because he cares for you.",
    NRSV_verse: "Cast all your anxiety on him, because he cares for you.",
    address: "1 Peter 5:7",
    image: "photos/22.jpg"
  },

  //23
  {
    NLT_verse: "For God has not given us a spirit of fear and timidity, but of power, love, and self-discipline.",
    KJV_verse: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    NKJV_verse: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
    NASB_verse: "For God has not given us a spirit of timidity, but of power and love and discipline.",
    AMP_verse: "For God did not give us a spirit of timidity or cowardice or fear, but [He has given us a spirit] of power and of love and of sound judgment and personal discipline [abilities that result in a calm, well-balanced mind and self-control].",
    ESV_verse: "for God gave us a spirit not of fear but of power and love and self-control.",
    NRSV_verse: "for God did not give us a spirit of cowardice, but rather a spirit of power and of love and of self-discipline.",
    address: "2 Timothy 1:7",
    image: "photos/23.jpg"
  },

  //24
  {
    NLT_verse: "Then Jesus said, “Come to me, all of you who are weary and carry heavy burdens, and I will give you rest.”",
    KJV_verse: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    NKJV_verse: "Come to Me, all you who labor and are heavy laden, and I will give you rest.",
    NASB_verse: "“Come to Me, all who are weary and burdened, and I will give you rest.",
    AMP_verse: "“Come to Me, all who are weary and heavily burdened [by religious rituals that provide no peace], and I will give you rest [refreshing your souls with salvation].",
    ESV_verse: "Come to me, all who labor and are heavy laden, and I will give you rest.",
    NRSV_verse: "“Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest.",
    address: "Matthew 11:28",
    image: "photos/24.jpg"
  },

  //25
  {
    NLT_verse: "The thief’s purpose is to steal and kill and destroy. My purpose is to give them a rich and satisfying life.",
    KJV_verse: "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.",
    NKJV_verse: "The thief does not come except to steal, and to kill, and to destroy. I have come that they may have life, and that they may have it more abundantly.",
    NASB_verse: "The thief comes only to steal and kill and destroy; I came so that they would have life, and have it abundantly.",
    AMP_verse: "The thief comes only in order to steal and kill and destroy. I came that they may have and enjoy life, and have it in abundance [to the full, till it overflows].",
    ESV_verse: "The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.",
    NRSV_verse: "The thief comes only to steal and kill and destroy. I came that they may have life, and have it abundantly.",
    address: "John 10:10",
    image: "photos/25.jpg"
  },

  //26
  {
    NLT_verse: "“I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world.”",
    KJV_verse: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
    NKJV_verse: "These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.”",
    NASB_verse: "These things I have spoken to you, so that in Me you may have peace. In the world you have tribulation, but take courage; I have overcome the world.”",
    AMP_verse: "I have told you these things, so that in Me you may have [perfect] peace. In the world you have tribulation and distress and suffering, but be courageous [be confident, be undaunted, be filled with joy]; I have overcome the world.” [I have deprived it of power to harm you and have conquered it for you.]",
    ESV_verse: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.”",
    NRSV_verse: "I have said this to you, so that in me you may have peace. In the world you face persecution. But take courage; I have conquered the world!”",
    address: "John 16:33",
    image: "photos/26.jpg"
  },

  //27
  {
    NLT_verse: "Always be joyful. Never stop praying. Be thankful in all circumstances, for this is God’s will for you who belong to Christ Jesus.",
    KJV_verse: "Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
    NKJV_verse: "Rejoice always, pray without ceasing, in everything give thanks; for this is the will of God in Christ Jesus for you.",
    NASB_verse: "Rejoice always, pray without ceasing, in everything give thanks; for this is the will of God for you in Christ Jesus.",
    AMP_verse: "Rejoice always and delight in your faith; be unceasing and persistent in prayer; in every situation [no matter what the circumstances] be thankful and give thanks to God; for this is the will of God for you in Christ Jesus.",
    ESV_verse: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
    NRSV_verse: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
    address: "1 Thessalonians 5:16-18",
    image: "photos/27.jpg"
  },

  //28
  {
    NLT_verse: "Your word is a lamp to guide my feet and a light for my path.",
    KJV_verse: "Thy word is a lamp unto my feet, and a light unto my path.",
    NKJV_verse: "Your word is a lamp to my feet And a light to my path.",
    NASB_verse: "Your word is a lamp to my feet And a light to my path.",
    AMP_verse: "Your word is a lamp to my feet And a light to my path.",
    ESV_verse: "Your word is a lamp to my feet and a light to my path.",
    NRSV_verse: "Your word is a lamp to my feet and a light to my path.",
    address: "Psalm 119:105",
    image: "photos/28.jpg"
  },

  //29
  {
    NLT_verse: "God saved you by his grace when you believed. And you can’t take credit for this; it is a gift from God. Salvation is not a reward for the good things we have done, so none of us can boast about it.",
    KJV_verse: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
    NKJV_verse: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.",
    NASB_verse: "For by grace you have been saved through faith; and this is not of yourselves, it is the gift of God; not as a result of works, so that no one may boast.",
    AMP_verse: "For it is by free grace (God’s unmerited favor) that you are saved (delivered from judgment and made partakers of Christ’s salvation) through [your] faith. And this [salvation] is not of yourselves [of your own doing, it came not through your own effort], but it is the gift of God; not as a result of [your] works [any attempts to keep the Law], so that no one will [be able to] boast or take credit in any way for it.",
    ESV_verse: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
    NRSV_verse: "For by grace you have been saved through faith, and this is not your own doing; it is the gift of God— not the result of works, so that no one may boast.",
    address: "Ephesians 2:8-9",
    image: "photos/29.jpg"
  },

  //30
  {
    NLT_verse: "For when they die, they take nothing with them. Their wealth will not follow them into the grave.",
    KJV_verse: "For when he dieth he shall carry nothing away: his glory shall not descend after him.",
    NKJV_verse: "For when he dies he shall carry nothing away; His glory shall not descend after him.",
    NASB_verse: "For when he dies he will carry nothing away; His glory will not descend after him.",
    AMP_verse: "For when he dies he will carry nothing away; His glory will not descend after him.",
    ESV_verse: "For when he dies he will carry nothing away; his glory will not descend after him.",
    NRSV_verse: "For when they die they will carry nothing away; their glory will not descend after them.",
    address: "Psalm 49:17",
    image: "photos/30.jpg"
  }
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const day = date.getDate() - 1;
const monthNum = date.getMonth();

const verseWallpaper = document.getElementById("verse-wallpaper");
verseWallpaper.style.backgroundImage = `url(${verses[day].image})`;

const dailyVerse = document.getElementById("daily-verse");
dailyVerse.textContent = verses[day].NLT_verse;

const dailyAddress = document.getElementById("daily-verse-address");
dailyAddress.textContent = verses[day].address;

const dailyDate = document.getElementById("date");
dailyDate.textContent = `${months[monthNum]} ${day + 1}`;

//NLT Translation
const translation_0_verse = document.getElementById("0-verse");
translation_0_verse.textContent = verses[day].NLT_verse;
const translation_0_address = document.getElementById("0-verse-address");
translation_0_address.textContent = `${verses[day].address} NLT`;

//NKJV Translation
const translation_1_verse = document.getElementById("1-verse");
translation_1_verse.textContent = verses[day].NKJV_verse;
const translation_1_address = document.getElementById("1-verse-address");
translation_1_address.textContent = `${verses[day].address} NKJV`;

//ESV Translation
const translation_2_verse = document.getElementById("2-verse");
translation_2_verse.textContent = verses[day].ESV_verse;
const translation_2_address = document.getElementById("2-verse-address");
translation_2_address.textContent = `${verses[day].address} ESV`;

//AMP Translation
const translation_3_verse = document.getElementById("3-verse");
translation_3_verse.textContent = verses[day].AMP_verse;
const translation_3_address = document.getElementById("3-verse-address");
translation_3_address.textContent = `${verses[day].address} AMP`;

//NASB Translation
const translation_4_verse = document.getElementById("4-verse");
translation_4_verse.textContent = verses[day].NASB_verse;
const translation_4_address = document.getElementById("4-verse-address");
translation_4_address.textContent = `${verses[day].address} NASB`;

//KJV Translation
const translation_5_verse = document.getElementById("5-verse");
translation_5_verse.textContent = verses[day].KJV_verse;
const translation_5_address = document.getElementById("5-verse-address");
translation_5_address.textContent = `${verses[day].address} KJV`;

//NRSV Translation
const translation_6_verse = document.getElementById("6-verse");
translation_6_verse.textContent = verses[day].NRSV_verse;
const translation_6_address = document.getElementById("6-verse-address");
translation_6_address.textContent = `${verses[day].address} NRSV`;