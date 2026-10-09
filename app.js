// أذكار الصباح والمساء الصحيحة - بمصادرها
const ADHKAR = [
{
  id: "ayat-kursi",
  title: "آية الكرسي",
  cat: "both",
  repeat: 1,
  text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ [البقرة: 255]",
  virtue: "من قالها حين يُمسي أُجير من الجن حتى يُصبح، ومن قالها حين يُصبح أُجير من الجن حتى يُمسي.",
  source: "رواه النسائي في عمل اليوم والليلة، والطبراني، وصححه الألباني في صحيح الترغيب (662)",
  grade: "صحيح"
},
{
  id: "ikhlas-maoz",
  title: "سور الإخلاص والمعوذتين",
  cat: "both",
  repeat: 3,
  text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ (3 مرات) + قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ... (3 مرات) + قُلْ أَعُوذُ بِرَبِّ النَّاسِ ... (3 مرات)",
  virtue: "تكفيك من كل شيء.",
  source: "رواه أبو داود (5082) والترمذي (3575) والنسائي (5428)، وحسّنه الألباني",
  grade: "حسن صحيح"
},
{
  id: "asbahna-morning",
  title: "أصبحنا وأصبح الملك لله",
  cat: "morning",
  repeat: 1,
  text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
  virtue: "من أذكار الصباح الثابتة عن النبي ﷺ.",
  source: "رواه مسلم (2723)",
  grade: "صحيح مسلم"
},
{
  id: "amsayna-evening",
  title: "أمسينا وأمسى الملك لله",
  cat: "evening",
  repeat: 1,
  text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
  virtue: "من أذكار المساء الثابتة عن النبي ﷺ.",
  source: "رواه مسلم (2723)",
  grade: "صحيح مسلم"
},
{
  id: "bika-asbahna",
  title: "اللهم بك أصبحنا",
  cat: "morning",
  repeat: 1,
  text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
  virtue: "إعلان التوكل على الله في الحياة والممات والبعث.",
  source: "رواه الترمذي (3391) وأبو داود (5068)، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "bika-amsayna",
  title: "اللهم بك أمسينا",
  cat: "evening",
  repeat: 1,
  text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
  virtue: "إعلان التوكل على الله في الحياة والممات والمصير إليه.",
  source: "رواه الترمذي (3391) وأبو داود (5068)، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "sayyid-istighfar",
  title: "سيد الاستغفار",
  cat: "both",
  repeat: 1,
  text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
  virtue: "من قالها من النهار موقناً بها فمات من يومه قبل أن يُمسي فهو من أهل الجنة، ومن قالها من الليل وهو موقن بها فمات قبل أن يُصبح فهو من أهل الجنة.",
  source: "رواه البخاري (6306)",
  grade: "صحيح البخاري"
},
{
  id: "afini",
  title: "اللهم عافني في بدني",
  cat: "both",
  repeat: 3,
  text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
  virtue: "كان النبي ﷺ يدعو بهن حين يصبح وحين يمسي.",
  source: "رواه أبو داود (5090) وأحمد، وحسّنه الألباني",
  grade: "حسن"
},
{
  id: "afu-afiya",
  title: "اللهم إني أسألك العفو والعافية",
  cat: "both",
  repeat: 1,
  text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
  virtue: "لم يكن النبي ﷺ يدع هؤلاء الدعوات حين يمسي وحين يصبح.",
  source: "رواه أبو داود (5074) وابن ماجه (3871)، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "fatir",
  title: "اللهم فاطر السماوات والأرض",
  cat: "both",
  repeat: 1,
  text: "اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَشَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
  virtue: "قال ﷺ: قلها إذا أصبحت وإذا أمسيت وإذا أخذت مضجعك.",
  source: "رواه أبو داود (5067) والترمذي (3529)، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "bismillah",
  title: "بسم الله الذي لا يضر",
  cat: "both",
  repeat: 3,
  text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
  virtue: "من قالها ثلاثاً حين يصبح وحين يمسي لم تضره فجأة بلاء حتى يصبح / حتى يمسي.",
  source: "رواه أبو داود (5088) والترمذي (3388)، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "raditu",
  title: "رضيت بالله رباً",
  cat: "both",
  repeat: 3,
  text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
  virtue: "من قالها حين يصبح وحين يمسي كان حقاً على الله أن يرضيه يوم القيامة.",
  source: "رواه أبو داود (5072) والترمذي، وصححه الألباني",
  grade: "حسن صحيح"
},
{
  id: "ya-hayyu",
  title: "يا حي يا قيوم برحمتك أستغيث",
  cat: "both",
  repeat: 1,
  text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
  virtue: "وصية النبي ﷺ لفاطمة أن تقوله حين تصبح وحين تمسي.",
  source: "رواه الحاكم وصححه ووافقه الذهبي، وحسّنه الألباني في صحيح الترغيب (661)",
  grade: "حسن"
},
{
  id: "fitra-morning",
  title: "أصبحنا على فطرة الإسلام",
  cat: "morning",
  repeat: 1,
  text: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
  virtue: "إعلان التمسك بالفطرة والتوحيد كل صباح.",
  source: "رواه أحمد (15360) والدارمي، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "fitra-evening",
  title: "أمسينا على فطرة الإسلام",
  cat: "evening",
  repeat: 1,
  text: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
  virtue: "إعلان التمسك بالفطرة والتوحيد كل مساء.",
  source: "رواه أحمد (15360)، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "subhan-100",
  title: "سبحان الله وبحمده",
  cat: "both",
  repeat: 100,
  text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
  virtue: "من قالها مائة مرة حين يصبح وحين يمسي لم يأت أحد يوم القيامة بأفضل مما جاء به إلا أحد قال مثل ما قال أو زاد عليه. وحُطت خطاياه وإن كانت مثل زبد البحر.",
  source: "رواه مسلم (2692) والبخاري (6405)",
  grade: "متفق عليه"
},
{
  id: "tahlil-100",
  title: "لا إله إلا الله وحده لا شريك له",
  cat: "both",
  repeat: 10,
  text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (10 مرات، ومن زاد إلى 100 فأفضل)",
  virtue: "كانت له عدل عشر رقاب، وكُتبت له مائة حسنة، ومُحيت عنه مائة سيئة، وكانت له حرزاً من الشيطان يومه ذلك حتى يمسي.",
  source: "متفق عليه: البخاري (3293) ومسلم (2691)",
  grade: "متفق عليه"
},
{
  id: "subhan-khalq",
  title: "سبحان الله وبحمده عدد خلقه",
  cat: "morning",
  repeat: 3,
  text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
  virtue: "قالها النبي ﷺ بعد الفجر وهي جالسة في مصلاها، وقال: لقد قلت بعدك أربع كلمات ثلاث مرات لو وُزنت بما قلت منذ اليوم لوزنتهن.",
  source: "رواه مسلم (2726)",
  grade: "صحيح مسلم"
},
{
  id: "ilm-nafi",
  title: "اللهم إني أسألك علماً نافعاً",
  cat: "morning",
  repeat: 1,
  text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
  virtue: "كان النبي ﷺ يقوله بعد صلاة الصبح.",
  source: "رواه ابن ماجه (925) وأحمد، وصححه الألباني",
  grade: "صحيح"
},
{
  id: "istighfar-100",
  title: "أستغفر الله وأتوب إليه",
  cat: "both",
  repeat: 100,
  text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
  virtue: "قال ﷺ: يا أيها الناس توبوا إلى الله فإني أتوب في اليوم إليه مائة مرة.",
  source: "رواه مسلم (2702)",
  grade: "صحيح مسلم"
},
{
  id: "aouz-kalimat",
  title: "أعوذ بكلمات الله التامات",
  cat: "evening",
  repeat: 3,
  text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
  virtue: "من قالها حين يمسي ثلاث مرات لم تضره حُمَة تلك الليلة.",
  source: "رواه مسلم (2709) والترمذي وأحمد",
  grade: "صحيح مسلم"
},
{
  id: "hasbi",
  title: "حسبي الله لا إله إلا هو",
  cat: "both",
  repeat: 7,
  text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
  virtue: "من قالها حين يصبح وحين يمسي سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة.",
  source: "رواه ابن السني وأبو داود (5081)، وصححه شعيب الأرناؤوط وحسّنه ابن باز",
  grade: "حسن"
},
{
  id: "salah-nabi",
  title: "الصلاة على النبي ﷺ",
  cat: "both",
  repeat: 10,
  text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
  virtue: "من صلى عليَّ حين يصبح عشراً وحين يمسي عشراً أدركته شفاعتي يوم القيامة.",
  source: "رواه الطبراني في الكبير، وحسّنه الألباني في صحيح الجامع (6357)",
  grade: "حسن"
},
{
  id: "allahumma-ajirni",
  title: "اللهم أجرني من النار",
  cat: "both",
  repeat: 7,
  text: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
  virtue: "من قالها حين يصبح سبعاً فإن مات من يومه كُتب له جوار منها، ومن قالها حين يمسي سبعاً فإن مات من ليلته كُتب له جوار منها.",
  source: "رواه أبو داود (5079) وأحمد، وضعّفه بعضهم وحسّنه ابن باز بشواهده — يُذكر بصيغة الدعاء العام الثابت",
  grade: "حسن بشواهده"
},
{
  id: "allahumma-aslamtu",
  title: "اللهم أسلمت نفسي إليك (دعاء النوم - يُقال مساءً)",
  cat: "evening",
  repeat: 1,
  text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
  virtue: "من قالها حين يأوي إلى فراشه ثم مات من ليلته مات على الفطرة.",
  source: "متفق عليه: البخاري (247) ومسلم (2710)",
  grade: "متفق عليه"
},
{
  id: "subhanallah-bukra",
  title: "سبحان الله وبحمده بكرة وأصيلاً (تسبيح مطلق)",
  cat: "morning",
  repeat: 1,
  text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
  virtue: "كلمتان خفيفتان على اللسان ثقيلتان في الميزان حبيبتان إلى الرحمن: سبحان الله وبحمده سبحان الله العظيم.",
  source: "متفق عليه: البخاري (6406) ومسلم (2694)",
  grade: "متفق عليه"
}
];

const state = {
  filter: "morning",
  search: "",
  remaining: {}, // id -> remaining count
  doneToday: null
};

function todayKey(){
  const d = new Date();
  return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
}

function load(){
  try{
    const raw = localStorage.getItem("adhkar-progress");
    if(!raw) return;
    const data = JSON.parse(raw);
    if(data.date === todayKey() && data.remaining){
      state.remaining = data.remaining;
    }
  }catch(e){}
  const theme = localStorage.getItem("adhkar-theme");
  if(theme === "dark"){ document.documentElement.setAttribute("data-theme","dark"); }
  const fs = localStorage.getItem("adhkar-font");
  if(fs){ document.documentElement.style.setProperty("--font-size", fs+"px"); }
}

function save(){
  localStorage.setItem("adhkar-progress", JSON.stringify({date: todayKey(), remaining: state.remaining}));
}

function getRepeat(item){
  if(state.remaining[item.id] === undefined){
    state.remaining[item.id] = item.repeat;
  }
  return state.remaining[item.id];
}

function catLabel(cat){
  if(cat==="morning") return "☀️ صباح";
  if(cat==="evening") return "🌙 مساء";
  return "📿 مشترك";
}

function filtered(){
  return ADHKAR.filter(a=>{
    if(state.filter !== "all"){
      if(state.filter === "both"){
        if(a.cat !== "both") return false;
      } else {
        // morning shows morning+both, evening shows evening+both
        if(!(a.cat === state.filter || a.cat === "both")) return false;
      }
    }
    if(state.search){
      const q = state.search.trim();
      if(q && !(a.title.includes(q) || a.text.includes(q) || a.source.includes(q))) return false;
    }
    return true;
  });
}

function render(){
  const wrap = document.getElementById("cards");
  const list = filtered();
  wrap.innerHTML = "";
  list.forEach(a=>{
    const rem = getRepeat(a);
    const done = rem <= 0;
    const card = document.createElement("article");
    card.className = "card" + (done ? " done" : "");
    card.innerHTML = `
      <div class="card-head">
        <h3 class="card-title">${a.title}</h3>
      </div>
      <div class="card-tags">
        <span class="tag">${catLabel(a.cat)}</span>
        <span class="tag count">التكرار: ${a.repeat} ${a.repeat>1?"مرات":"مرة"}</span>
        <span class="tag grade">✔ ${a.grade}</span>
      </div>
      <div class="dhikr">${escapeHtml(a.text)}</div>
      <div class="virtue"><strong>الفضل:</strong> ${escapeHtml(a.virtue)}</div>
      <div class="source"><strong>المصدر:</strong> ${escapeHtml(a.source)}</div>
      <div class="card-actions">
        <div class="remain" title="المتبقي">${rem} / ${a.repeat}</div>
        <button class="counter-btn" ${done?"disabled":""}> ${done ? "✓ تم بحمد الله" : "سبّح — اضغط لإنقاص العدد"} </button>
        <button class="icon-btn btn-copy" title="نسخ الذكر">📋 نسخ</button>
        <button class="icon-btn btn-reset" title="إعادة">↺</button>
      </div>
    `;
    const btn = card.querySelector(".counter-btn");
    btn.addEventListener("click", ()=>{
      if(state.remaining[a.id] > 0){
        state.remaining[a.id]--;
        save(); render(); updateProgress();
        if(state.remaining[a.id]===0){
          showBanner(`تقبّل الله منك «${a.title}» ✔`);
        }
      }
    });
    card.querySelector(".btn-reset").addEventListener("click", ()=>{
      state.remaining[a.id] = a.repeat; save(); render(); updateProgress();
    });
    card.querySelector(".btn-copy").addEventListener("click", async ()=>{
      const txt = `${a.title}\n${a.text}\nالفضل: ${a.virtue}\nالمصدر: ${a.source}`;
      try{ await navigator.clipboard.writeText(txt); showBanner("تم نسخ الذكر — انسخه وانشره ولك الأجر"); }
      catch(e){ showBanner("تعذّر النسخ التلقائي"); }
    });
    wrap.appendChild(card);
  });
  if(list.length===0){
    wrap.innerHTML = `<div class="card"><p>لا توجد نتائج مطابقة لبحثك. جرّب كلمة أخرى.</p></div>`;
  }
  updateProgress();
}

function totalStats(){
  // stats for current filter
  const list = filtered();
  let total = 0, done = 0;
  list.forEach(a=>{
    const rem = getRepeat(a);
    total += a.repeat;
    done += (a.repeat - rem);
  });
  return {total, done, count:list.length};
}

function updateProgress(){
  const {total, done, count} = totalStats();
  const pct = total===0 ? 0 : Math.round(done/total*100);
  document.getElementById("progressText").textContent = `${done} / ${total} تكرار — ${count} ذكر`;
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("progressFill").style.width = pct + "%";
  if(total>0 && done===total){
    showBanner("ما شاء الله! أتممت جميع أذكار هذا القسم — تقبّل الله منك 🎉");
  }
}

let bannerTimer=null;
function showBanner(msg){
  const b = document.getElementById("doaaBanner");
  b.textContent = msg;
  b.classList.remove("hidden");
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(()=> b.classList.add("hidden"), 3500);
}

function escapeHtml(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function initDates(){
  const now = new Date();
  try{
    const hijri = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {day:"numeric", month:"long", year:"numeric"}).format(now);
    document.getElementById("hijriDate").textContent = hijri;
  }catch(e){ document.getElementById("hijriDate").textContent = ""; }
  document.getElementById("gregDate").textContent = new Intl.DateTimeFormat("ar", {weekday:"long", day:"numeric", month:"long", year:"numeric"}).format(now);
  const h = now.getHours();
  // صباح: 4-17 ، مساء: غير ذلك
  const isMorning = h >= 4 && h < 17;
  document.getElementById("suggested").textContent = isMorning ? "🌅 الآن وقت الصباح" : "🌙 الآن وقت المساء";
  // auto select
  state.filter = isMorning ? "morning" : "evening";
  document.querySelectorAll(".tab").forEach(t=>{
    t.classList.toggle("active", t.dataset.filter===state.filter);
  });
}

function initEvents(){
  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click", ()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      state.filter = t.dataset.filter;
      render();
    });
  });
  document.getElementById("search").addEventListener("input", e=>{
    state.search = e.target.value;
    render();
  });
  document.getElementById("resetAll").addEventListener("click", ()=>{
    if(confirm("هل تريد تصفير تقدم اليوم؟")){
      state.remaining = {};
      ADHKAR.forEach(a=> state.remaining[a.id]=a.repeat);
      save(); render();
    }
  });
  document.getElementById("toggleTheme").addEventListener("click", (e)=>{
    const cur = document.documentElement.getAttribute("data-theme");
    if(cur==="dark"){ document.documentElement.removeAttribute("data-theme"); localStorage.setItem("adhkar-theme","light"); e.target.textContent="🌙 ليلي"; }
    else{ document.documentElement.setAttribute("data-theme","dark"); localStorage.setItem("adhkar-theme","dark"); e.target.textContent="☀️ نهاري"; }
  });
  const getFont = ()=> parseInt(getComputedStyle(document.body).fontSize) || 18;
  document.getElementById("fontPlus").addEventListener("click", ()=>{
    const v = Math.min(24, getFont()+1);
    document.documentElement.style.setProperty("--font-size", v+"px");
    document.body.style.fontSize = v+"px";
    localStorage.setItem("adhkar-font", v);
  });
  document.getElementById("fontMinus").addEventListener("click", ()=>{
    const v = Math.max(14, getFont()-1);
    document.documentElement.style.setProperty("--font-size", v+"px");
    document.body.style.fontSize = v+"px";
    localStorage.setItem("adhkar-font", v);
  });
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", ()=> toTop.classList.toggle("show", window.scrollY>600));
  toTop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
  // init theme button label
  if(document.documentElement.getAttribute("data-theme")==="dark"){
    document.getElementById("toggleTheme").textContent="☀️ نهاري";
  }
}

load();
initDates();
initEvents();
render();
