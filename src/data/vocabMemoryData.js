// Bank Kosa Kata IELTS Band 8 dengan Teknik Memori & Mnemonic
// Didesain khusus untuk pembelajar yang sulit mengingat kosakata akademik formal.

export const VOCAB_TOPICS = [
  {
    id: 'environment',
    name: 'Lingkungan & Iklim',
    englishName: 'Environment & Climate',
    icon: 'Leaf',
    color: 'from-emerald-500 to-teal-600',
    accentBorder: 'border-emerald-500/40',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: 'Kosakata vital untuk isu pemanasan global, polusi, keanekaragaman hayati, dan energi terbarukan.',
    items: [
      {
        id: 'env-1',
        band8Word: 'inflict irreversible ecological damage',
        band5Basic: 'hurt nature permanently',
        indonesianMeaning: 'Menimbulkan kerusakan lingkungan yang tak dapat dipulihkan',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: 'Ingat "INFLICT" mirip kata "INFEKSI" yang mendatangkan penyakit parah. Jika alam terkena "infeksi", kerusakannya jadi "irreversible" (tidak bisa diputar balik).',
        ieltsSentence: 'Unregulated industrial effluent continues to inflict irreversible ecological damage on fragile marine biomes.',
        clozeSentence: 'Fossil fuel extraction continues to [____] on pristine arctic habitats.',
        clozeAnswer: 'inflict irreversible ecological damage',
        clozeOptions: [
          'inflict irreversible ecological damage',
          'make a permanent natural trouble',
          'break nature without return'
        ]
      },
      {
        id: 'env-2',
        band8Word: 'mitigate the ramifications',
        band5Basic: 'reduce the bad effects',
        indonesianMeaning: 'Meredakan atau memperkecil dampak negatif yang timbul',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: 'Ingat kata "MITIGASI" (tindakan pencegahan bencana). "Ramification" mirip "ranting pohon" yang bercabang-cabang ke mana-mana; jadi kita memangkas cabang dampak buruknya.',
        ieltsSentence: 'Governments must implement carbon taxes to mitigate the ramifications of uncontrolled industrial emissions.',
        clozeSentence: 'Subsidizing solar energy is crucial to [____] of the impending climate crisis.',
        clozeAnswer: 'mitigate the ramifications',
        clozeOptions: [
          'mitigate the ramifications',
          'make smaller the bad results',
          'cut down the difficult effects'
        ]
      },
      {
        id: 'env-3',
        band8Word: 'deplete finite natural endowments',
        band5Basic: 'use up limited natural resources',
        indonesianMeaning: 'Menghabiskan sumber daya alam yang terbatas / tidak terbarukan',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Deplete" mirip "Drop & Empty" (turun sampai kosong). "Endowment" adalah modal/karunia alam yang terbatas (finite) yang kita miliki.',
        ieltsSentence: 'Overconsumption threatens to deplete finite natural endowments before the close of this century.',
        clozeSentence: 'Unsustainable farming methods rapidly [____] of the fertile topsoil.',
        clozeAnswer: 'deplete finite natural endowments',
        clozeOptions: [
          'deplete finite natural endowments',
          'spend out limited nature stocks',
          'finish the limited earth belongings'
        ]
      },
      {
        id: 'env-4',
        band8Word: 'transition to sustainable alternatives',
        band5Basic: 'change to green energy',
        indonesianMeaning: 'Beralih secara terencana ke opsi ramah lingkungan jangka panjang',
        wordType: 'Collocation (Verb + Preposition)',
        mnemonicHook: '"Transisi" = perpindahan bertahap dan rapi, bukan mendadak. Band 8 lebih menyukai "transition to..." daripada sekadar kata "change".',
        ieltsSentence: 'Fiscal incentives accelerate the national transition to sustainable alternatives such as wind and geothermal power.',
        clozeSentence: 'Developing economies must receive global funding to [____].',
        clozeAnswer: 'transition to sustainable alternatives',
        clozeOptions: [
          'transition to sustainable alternatives',
          'change around to green things',
          'move into enduring choices'
        ]
      },
      {
        id: 'env-5',
        band8Word: 'precipitous decline in biodiversity',
        band5Basic: 'animals and plants dying very fast',
        indonesianMeaning: 'Penurunan drastis dan curam pada keanekaragaman hayati',
        wordType: 'Noun Phrase (Adj + Noun)',
        mnemonicHook: '"Precipitous" berasal dari kata "precipice" (tebing curam / jurang). Bayangkan grafik populasi hewan yang jatuh bebas dari atas tebing.',
        ieltsSentence: 'Deforestation has precipitated a precipitous decline in biodiversity across tropical rainforest regions.',
        clozeSentence: 'The widespread usage of synthetic pesticides has caused a [____].',
        clozeAnswer: 'precipitous decline in biodiversity',
        clozeOptions: [
          'precipitous decline in biodiversity',
          'very sharp drop of living things',
          'rapid death of diverse animals'
        ]
      }
    ]
  },
  {
    id: 'technology',
    name: 'Teknologi & AI',
    englishName: 'Technology & AI',
    icon: 'Cpu',
    color: 'from-indigo-500 to-purple-600',
    accentBorder: 'border-indigo-500/40',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    description: 'Kosakata untuk topik kecerdasan buatan, otomatisasi kerja, privasi data, dan etika digital.',
    items: [
      {
        id: 'tech-1',
        band8Word: 'displace the traditional workforce',
        band5Basic: 'take away people jobs',
        indonesianMeaning: 'Menggantikan posisi tenaga kerja manusia konvensional',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: '"Displace" = "Dis-" (lepas) + "Place" (tempat). Posisi orang-orang lama digeser keluar dari tempat duduk kerjanya oleh robot/AI.',
        ieltsSentence: 'Robotic assembly lines increasingly displace the traditional workforce in manufacturing hubs.',
        clozeSentence: 'Generative AI algorithms have begun to [____] in entry-level administrative roles.',
        clozeAnswer: 'displace the traditional workforce',
        clozeOptions: [
          'displace the traditional workforce',
          'kick out normal working people',
          'substitute customary laborers'
        ]
      },
      {
        id: 'tech-2',
        band8Word: 'a double-edged sword fraught with perils',
        band5Basic: 'a dangerous tool with good and bad sides',
        indonesianMeaning: 'Pedang bermata dua yang sarat akan risiko/bahaya tersembunyi',
        wordType: 'Idiomatic Academic Metaphor',
        mnemonicHook: 'Bayangkan pedang yang dua sisinya tajam ("double-edged"). "Fraught" artinya penuh sesak dengan muatan ("perils" = bahaya).',
        ieltsSentence: 'Social media remains a double-edged sword fraught with perils concerning mental health and cognitive fragmentation.',
        clozeSentence: 'Autonomous weapon systems represent [____] for international security.',
        clozeAnswer: 'a double-edged sword fraught with perils',
        clozeOptions: [
          'a double-edged sword fraught with perils',
          'a sharp tool with bad risks',
          'a twofold weapon full of hazards'
        ]
      },
      {
        id: 'tech-3',
        band8Word: 'streamline laborious processes',
        band5Basic: 'make hard work easy and fast',
        indonesianMeaning: 'Menyederhanakan dan mempercepat proses yang melelahkan',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: '"Streamline" seperti aliran air yang lurus tanpa hambatan. "Laborious" dari kata "Labor" (kerja keras otot/pikiran). Mengalirkan pekerjaan berat agar jadi mulus.',
        ieltsSentence: 'Algorithmic inventory systems streamline laborious processes, enabling corporations to curtail overhead costs.',
        clozeSentence: 'Automated diagnostic tools effectively [____] in public healthcare facilities.',
        clozeAnswer: 'streamline laborious processes',
        clozeOptions: [
          'streamline laborious processes',
          'make heavy work simple',
          'speed up tiring operations'
        ]
      },
      {
        id: 'tech-4',
        band8Word: 'evolve at an unprecedented trajectory',
        band5Basic: 'change very fast like never before',
        indonesianMeaning: 'Berkembang dengan kecepatan lintasan yang belum pernah ada sebelumnya',
        wordType: 'Collocation (Verb + Prepositional Phrase)',
        mnemonicHook: '"Unprecedented" = "Un-" (tidak) + "Precedent" (contoh masa lalu). Tidak pernah ada contohnya dalam sejarah! "Trajectory" = lintasan roket.',
        ieltsSentence: 'Quantum computing continues to evolve at an unprecedented trajectory, baffling conventional regulatory frameworks.',
        clozeSentence: 'Biotechnological innovations currently [____], raising profound ethical dilemmas.',
        clozeAnswer: 'evolve at an unprecedented trajectory',
        clozeOptions: [
          'evolve at an unprecedented trajectory',
          'grow up with never-seen speed',
          'advance at an unheard roadway'
        ]
      },
      {
        id: 'tech-5',
        band8Word: 'infringe upon individual privacy',
        band5Basic: 'steal or spy on personal secrets',
        indonesianMeaning: 'Melanggar atau mengikis batas privasi individu',
        wordType: 'Collocation (Verb + Preposition)',
        mnemonicHook: '"Infringe" mirip "In-Fringe" (masuk melintasi pinggiran pagar orang tanpa izin). Kata resmi hukum untuk pelanggaran hak pribadi.',
        ieltsSentence: 'Facial recognition cameras deployed in public spaces severely infringe upon individual privacy.',
        clozeSentence: 'Mass surveillance programs blatantly [____] in modern democratic societies.',
        clozeAnswer: 'infringe upon individual privacy',
        clozeOptions: [
          'infringe upon individual privacy',
          'break inside private secrets',
          'enter into personal boundaries'
        ]
      }
    ]
  },
  {
    id: 'education',
    name: 'Pendidikan & Akademik',
    englishName: 'Education & Rigour',
    icon: 'GraduationCap',
    color: 'from-amber-500 to-orange-600',
    accentBorder: 'border-amber-500/40',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description: 'Kosakata untuk sistem sekolah, kurikulum, pemikiran kritis, dan pemerataan peluang belajar.',
    items: [
      {
        id: 'edu-1',
        band8Word: 'foster analytical acumen and cognitive dexterity',
        band5Basic: 'teach students to think smart and quick',
        indonesianMeaning: 'Memupuk ketajaman analisis dan kelincahan berpikir kritis',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Foster" = mengasuh/memupuk. "Acumen" = ketajaman insting (dari akar kata *acute* = tajam). "Dexterity" = kelincahan tangan/otak saat menyelesaikan masalah rumit.',
        ieltsSentence: 'Contemporary tertiary education must strive to foster analytical acumen and cognitive dexterity rather than mere memorization.',
        clozeSentence: 'STEM education programs are structured to [____] among secondary school cohorts.',
        clozeAnswer: 'foster analytical acumen and cognitive dexterity',
        clozeOptions: [
          'foster analytical acumen and cognitive dexterity',
          'make students think cleverly and swiftly',
          'grow analytical sharpness and quick minds'
        ]
      },
      {
        id: 'edu-2',
        band8Word: 'bridge the socioeconomic disparity',
        band5Basic: 'close the gap between rich and poor students',
        indonesianMeaning: 'Menjembatani ketimpangan akses sosial-ekonomi di bidang pendidikan',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: 'Bayangkan membangun "Bridge" (jembatan) melintasi jurang pemisah ("disparity") antara si kaya dan si miskin.',
        ieltsSentence: 'Universal access to subsidized high-speed broadband helps bridge the socioeconomic disparity in rural education.',
        clozeSentence: 'Equitable scholarship endowments serve to [____] in elite academic universities.',
        clozeAnswer: 'bridge the socioeconomic disparity',
        clozeOptions: [
          'bridge the socioeconomic disparity',
          'close down the rich-poor inequality',
          'link up the class differences'
        ]
      },
      {
        id: 'edu-3',
        band8Word: 'eschew rote memorization',
        band5Basic: 'stop memorizing facts by heart',
        indonesianMeaning: 'Menghindari atau meninggalkan metode hafalan mati tanpa pemahaman konsep',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: '"Eschew" diucapkan seperti "es-cyu" (seperti meludah menjauhkan hal buruk). Hafalan buta ("rote") harus dijauhi agar murid benar-benar paham.',
        ieltsSentence: 'Forward-thinking educational systems eschew rote memorization in favor of inquiry-based project learning.',
        clozeSentence: 'Progressive pedagogues strongly advise curricula to [____] in standard assessment models.',
        clozeAnswer: 'eschew rote memorization',
        clozeOptions: [
          'eschew rote memorization',
          'avoid blindly learning facts',
          'stay away from head memorizing'
        ]
      },
      {
        id: 'edu-4',
        band8Word: 'instill civic responsibility and empathy',
        band5Basic: 'teach children to be good citizens and care for others',
        indonesianMeaning: 'Menanamkan rasa tanggung jawab kewarganegaraan dan empati sosial sejak dini',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: '"Instill" = meneteskan nilai sedikit demi sedikit sampai meresap ke dalam jiwa anak ("Civic" = warga negara).',
        ieltsSentence: 'Mandatory community service curricula instill civic responsibility and empathy in impressionable adolescents.',
        clozeSentence: 'Extracurricular volunteer projects help [____] among university undergraduates.',
        clozeAnswer: 'instill civic responsibility and empathy',
        clozeOptions: [
          'instill civic responsibility and empathy',
          'put in good citizen feelings and care',
          'insert civil duty and kindheartedness'
        ]
      },
      {
        id: 'edu-5',
        band8Word: 'cultivate well-rounded individuals',
        band5Basic: 'make complete students with many skills',
        indonesianMeaning: 'Membina individu yang berimbang secara akademis, sosial, dan emosional',
        wordType: 'Collocation (Verb + Noun)',
        mnemonicHook: '"Well-rounded" = bulat sempurna di semua sisi (tidak cuma pintar matematika tapi kaku sosial, melainkan seimbang di segala aspek).',
        ieltsSentence: 'A balanced blend of humanities and science serves to cultivate well-rounded individuals ready for global challenges.',
        clozeSentence: 'Holistic pedagogical approaches seek to [____] rather than examination technicians.',
        clozeAnswer: 'cultivate well-rounded individuals',
        clozeOptions: [
          'cultivate well-rounded individuals',
          'grow all-around complete persons',
          'make balanced persons with skills'
        ]
      }
    ]
  },
  {
    id: 'society',
    name: 'Masyarakat & Kriminalitas',
    englishName: 'Society & Justice',
    icon: 'Building2',
    color: 'from-blue-500 to-indigo-600',
    accentBorder: 'border-blue-500/40',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    description: 'Kosakata untuk ketertiban umum, penegakan hukum, kepadatan kota, dan rehabilitasi narapidana.',
    items: [
      {
        id: 'soc-1',
        band8Word: 'act as a potent deterrent against recidivism',
        band5Basic: 'stop criminals from doing crimes again',
        indonesianMeaning: 'Berfungsi sebagai pencegah yang ampuh terhadap kejahatan berulang',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Potent" = berkhasiat kuat. "Deterrent" = penangkal/penghalang. "Recidivism" = residivis (penjahat yang kambuh mengulangi dosanya).',
        ieltsSentence: 'Vocational training in correctional facilities acts as a potent deterrent against recidivism upon release.',
        clozeSentence: 'Severe financial penalties rarely [____] among organized syndicates.',
        clozeAnswer: 'act as a potent deterrent against recidivism',
        clozeOptions: [
          'act as a potent deterrent against recidivism',
          'work as a strong stopper for repeat crimes',
          'be a powerful preventer of doing bad again'
        ]
      },
      {
        id: 'soc-2',
        band8Word: 'the burgeoning wealth disparity',
        band5Basic: 'the growing gap between rich and poor',
        indonesianMeaning: 'Kesenjangan kekayaan yang berkembang pesat dan semakin mencolok',
        wordType: 'Noun Phrase (Adj + Noun)',
        mnemonicHook: '"Burgeon" = bertunas dan membesar dengan cepat. Kesenjangan harta ("wealth disparity") bukan cuma ada, tapi bertunas membesar secara agresif.',
        ieltsSentence: 'Regressive fiscal policies inevitably exacerbate the burgeoning wealth disparity within metropolitan centers.',
        clozeSentence: 'Unchecked real estate speculation directly fuels [____] in capital cities.',
        clozeAnswer: 'the burgeoning wealth disparity',
        clozeOptions: [
          'the burgeoning wealth disparity',
          'the increasing money difference',
          'the growing divide of rich and poor'
        ]
      },
      {
        id: 'soc-3',
        band8Word: 'densely populated metropolises grappling with congestion',
        band5Basic: 'crowded big cities fighting traffic jams',
        indonesianMeaning: 'Kota-kota metropolitan padat penduduk yang berjuang mengatasi kemacetan',
        wordType: 'Participial Noun Phrase',
        mnemonicHook: '"Grappling with" = bergulat fisik sampai lelah. Bayangkan jutaan komuter bergulat setiap pagi melawan kemacetan parah di kota raksasa.',
        ieltsSentence: 'Urban planners in densely populated metropolises grappling with congestion must prioritize high-capacity rapid transit.',
        clozeSentence: 'Municipal authorities in [____] must subsidize subterranean subway networks.',
        clozeAnswer: 'densely populated metropolises grappling with congestion',
        clozeOptions: [
          'densely populated metropolises grappling with congestion',
          'crowded mega cities struggling with heavy traffic',
          'heavily inhabited towns fighting road jams'
        ]
      },
      {
        id: 'soc-4',
        band8Word: 'foster social cohesion and mutual trust',
        band5Basic: 'make people unite and trust each other',
        indonesianMeaning: 'Mempererat kohesi (keharmonisan sosial) dan rasa saling percaya antarwarga',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Cohesion" seperti lem perekat yang menyatukan molekul masyarakat majemuk agar tidak terpecah-belah menjadi konflik horizontal.',
        ieltsSentence: 'Public parks and shared community centers are instrumental to foster social cohesion and mutual trust.',
        clozeSentence: 'Multicultural festivals proactively [____] among diverse immigrant neighborhoods.',
        clozeAnswer: 'foster social cohesion and mutual trust',
        clozeOptions: [
          'foster social cohesion and mutual trust',
          'make social unity and shared belief',
          'glue society together and help confidence'
        ]
      },
      {
        id: 'soc-5',
        band8Word: 'promulgate stringent legislative frameworks',
        band5Basic: 'make strict laws',
        indonesianMeaning: 'Mengesahkan dan memberlakukan kerangka hukum yang ketat',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Promulgate" = memproklamasikan hukum resmi ke publik. "Stringent" = ketat dan mengikat tanpa celah hukum.',
        ieltsSentence: 'Parliament must promulgate stringent legislative frameworks to curtail cyberbullying and digital fraud.',
        clozeSentence: 'Environmental ministries should [____] to govern industrial carbon disposal.',
        clozeAnswer: 'promulgate stringent legislative frameworks',
        clozeOptions: [
          'promulgate stringent legislative frameworks',
          'enforce tight legal rules',
          'bring out strict rule systems'
        ]
      }
    ]
  },
  {
    id: 'health',
    name: 'Kesehatan & Gaya Hidup',
    englishName: 'Public Health & Wellbeing',
    icon: 'HeartPulse',
    color: 'from-rose-500 to-pink-600',
    accentBorder: 'border-rose-500/40',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    description: 'Kosakata untuk topik obesitas, gaya hidup sedentari, krisis gizi, dan beban fasilitas medis.',
    items: [
      {
        id: 'hlt-1',
        band8Word: 'a sedentary lifestyle exacerbates chronic ailments',
        band5Basic: 'sitting too much makes sickness worse',
        indonesianMeaning: 'Gaya hidup pasif tanpa gerak memperparah penyakit menahun / kronis',
        wordType: 'Collocation (Subject + Verb + Object)',
        mnemonicHook: '"Sedentary" dari kata dasar duduk (*sedere*). "Exacerbate" = membuat semakin pahit (*acerbic*) dan parah. Duduk diam merusak organ tubuh perlahan.',
        ieltsSentence: 'Prolonged desk-bound working conditions perpetuate a sedentary lifestyle that exacerbates chronic ailments such as cardiovascular disease.',
        clozeSentence: 'Public health scholars warn that [____] among white-collar desk workers.',
        clozeAnswer: 'a sedentary lifestyle exacerbates chronic ailments',
        clozeOptions: [
          'a sedentary lifestyle exacerbates chronic ailments',
          'sitting too long makes bad illnesses bigger',
          'an inactive life style worsens old sicknesses'
        ]
      },
      {
        id: 'hlt-2',
        band8Word: 'prohibitive medical expenditures',
        band5Basic: 'very expensive hospital costs',
        indonesianMeaning: 'Biaya pengobatan medis yang terlampau mahal hingga tak terjangkau rakyat',
        wordType: 'Noun Phrase (Adj + Noun)',
        mnemonicHook: '"Prohibitive" artinya melarang atau menghalangi. Biayanya begitu tinggi sampai-sampai secara de facto "melarang" orang miskin berobat.',
        ieltsSentence: 'Without state-sponsored universal healthcare, citizens are pushed into insolvency by prohibitive medical expenditures.',
        clozeSentence: 'Families often deplete their life savings to cope with [____].',
        clozeAnswer: 'prohibitive medical expenditures',
        clozeOptions: [
          'prohibitive medical expenditures',
          'too pricey doctor payments',
          'extremely expensive treatment bills'
        ]
      },
      {
        id: 'hlt-3',
        band8Word: 'adopt preventative healthcare paradigms',
        band5Basic: 'focus on preventing sick rather than curing',
        indonesianMeaning: 'Mengadopsi pola pikir kesehatan preventif (mencegah sebelum sakit)',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Paradigm" = pola pikir mendasar / sudut pandang menyeluruh. Mengubah sistem kesehatan dari "pemadam kebakaran" menjadi "pencegah api".',
        ieltsSentence: 'Modern health ministries should adopt preventative healthcare paradigms through early dietary education and fitness subsidies.',
        clozeSentence: 'Policymakers are urged to [____] to reduce downstream hospital strain.',
        clozeAnswer: 'adopt preventative healthcare paradigms',
        clozeOptions: [
          'adopt preventative healthcare paradigms',
          'use prevention health habits',
          'pick up early protection ways'
        ]
      },
      {
        id: 'hlt-4',
        band8Word: 'curb the pervasive consumption of ultra-processed foods',
        band5Basic: 'stop eating too much junk food everywhere',
        indonesianMeaning: 'Membendung konsumsi makanan olahan pabrik yang tersebar merajalela',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Curb" = menarik tali kekang kuda agar berhenti. "Pervasive" = menyusup ke setiap sudut warung dan supermarket.',
        ieltsSentence: 'Imposing excise duties on sugary snacks aims to curb the pervasive consumption of ultra-processed foods among youth.',
        clozeSentence: 'Public health campaigns must aggressively [____].',
        clozeAnswer: 'curb the pervasive consumption of ultra-processed foods',
        clozeOptions: [
          'curb the pervasive consumption of ultra-processed foods',
          'stop widespread eating of factory junk',
          'hold back too much fast food ingestion'
        ]
      }
    ]
  },
  {
    id: 'globalization',
    name: 'Globalisasi & Budaya',
    englishName: 'Globalization & Heritage',
    icon: 'Globe',
    color: 'from-cyan-500 to-blue-600',
    accentBorder: 'border-cyan-500/40',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    description: 'Kosakata untuk topik homogenisasi budaya, pelestarian bahasa adat, dan pariwisata massal.',
    items: [
      {
        id: 'glb-1',
        band8Word: 'cultural homogenization eroding indigenous customs',
        band5Basic: 'western culture destroying local traditions',
        indonesianMeaning: 'Penyeragaman budaya global yang perlahan mengikis tradisi lokal asli',
        wordType: 'Participial Phrase (Noun + Participle + Noun)',
        mnemonicHook: '"Homogen" = sama rata seperti susu homogen. Seluruh dunia jadi seragam meminum kopi yang sama, "eroding" (mengikis tanah tradisi lokal seperti erosi pantai).',
        ieltsSentence: 'The unchecked spread of Western commercial media threatens cultural homogenization, eroding indigenous customs and vernacular tongues.',
        clozeSentence: 'Critics lament that consumerist globalization fosters [____].',
        clozeAnswer: 'cultural homogenization eroding indigenous customs',
        clozeOptions: [
          'cultural homogenization eroding indigenous customs',
          'sameness in culture breaking local habits',
          'uniform lifestyle washing away native traditions'
        ]
      },
      {
        id: 'glb-2',
        band8Word: 'preserve tangible and intangible heritage',
        band5Basic: 'protect old buildings and cultural traditions',
        indonesianMeaning: 'Melestarikan warisan budaya baik yang berbentuk fisik maupun non-fisik',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Tangible" bisa disentuh tangan (candi, istana, artefak), "Intangible" tidak bisa disentuh fisik tapi dirasakan (tarian, dongeng rakyat, musik tradisional).',
        ieltsSentence: 'UNESCO allocations assist vulnerable post-conflict nations to preserve tangible and intangible heritage for posterity.',
        clozeSentence: 'Municipalities must enact strict zoning ordinances to [____].',
        clozeAnswer: 'preserve tangible and intangible heritage',
        clozeOptions: [
          'preserve tangible and intangible heritage',
          'save touchable and untouchable culture',
          'keep safe old structures and songs'
        ]
      },
      {
        id: 'glb-3',
        band8Word: 'foster intercultural empathy and tolerance',
        band5Basic: 'make people understand other countries peacefully',
        indonesianMeaning: 'Menumbuhkan empati dan toleransi antar-budaya yang berbeda',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Inter-" = antar. Dengan pertukaran pelajar, bukan cuma kenal tapi timbul "empathy" (bisa merasakan perasaan orang lain).',
        ieltsSentence: 'International student exchange programs foster intercultural empathy and tolerance in an increasingly polarized global landscape.',
        clozeSentence: 'Cross-border academic collaborations undeniably [____].',
        clozeAnswer: 'foster intercultural empathy and tolerance',
        clozeOptions: [
          'foster intercultural empathy and tolerance',
          'grow mutual understanding among nations',
          'bring about international sympathy'
        ]
      }
    ]
  },
  {
    id: 'economy',
    name: 'Ekonomi & Ketenagakerjaan',
    englishName: 'Economy & Labor',
    icon: 'TrendingUp',
    color: 'from-emerald-600 to-green-700',
    accentBorder: 'border-emerald-500/40',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: 'Kosakata untuk produktivitas nasional, upah minimum, inflasi, dan disrupsi gig economy.',
    items: [
      {
        id: 'eco-1',
        band8Word: 'bolster aggregate economic productivity',
        band5Basic: 'help the whole country make more money',
        indonesianMeaning: 'Mendongkrak produktivitas perekonomian secara keseluruhan/agregat',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Bolster" = bantal guling penopang agar tidak jatuh; menopang kuat. "Aggregate" = total gabungan dari seluruh sektor.',
        ieltsSentence: 'Targeted investments in cutting-edge logistics bolster aggregate economic productivity across rural and urban corridors.',
        clozeSentence: 'Technological automation is projected to [____] over the subsequent decade.',
        clozeAnswer: 'bolster aggregate economic productivity',
        clozeOptions: [
          'bolster aggregate economic productivity',
          'lift up total country income',
          'push up overall work output'
        ]
      },
      {
        id: 'eco-2',
        band8Word: 'acute income inequality and precarity',
        band5Basic: 'big money gap and unstable jobs',
        indonesianMeaning: 'Ketimpangan pendapatan yang parah dan ketidakpastian nasib pekerja',
        wordType: 'Noun Phrase (Adj + Noun + Noun)',
        mnemonicHook: '"Acute" = tajam dan menusuk. "Precarity" dari kata *precarious* (berdiri di ujung tanduk / pekerjaan rentan yang bisa dipecat kapan saja).',
        ieltsSentence: 'The deregulation of temporary labor contracts has spawned acute income inequality and precarity among youth cohorts.',
        clozeSentence: 'Unregulated gig economy platforms frequently induce [____].',
        clozeAnswer: 'acute income inequality and precarity',
        clozeOptions: [
          'acute income inequality and precarity',
          'sharp wage difference and job danger',
          'intense money gap and uncertainty'
        ]
      },
      {
        id: 'eco-3',
        band8Word: 'stimulate sustainable consumer spending',
        band5Basic: 'make people buy things without going broke',
        indonesianMeaning: 'Merangsang daya beli masyarakat secara sehat dan berkesinambungan',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Stimulate" = memberi suntikan pendorong. Belanja masyarakat ("consumer spending") adalah mesin penggerak ekonomi.',
        ieltsSentence: 'Lowering personal income tax thresholds during recessions serves to stimulate sustainable consumer spending.',
        clozeSentence: 'Direct cash transfers are engineered to [____] in depressed regional economies.',
        clozeAnswer: 'stimulate sustainable consumer spending',
        clozeOptions: [
          'stimulate sustainable consumer spending',
          'encourage continuous customer buying',
          'trigger durable people shopping'
        ]
      }
    ]
  },
  {
    id: 'government',
    name: 'Pemerintah & Kebijakan',
    englishName: 'Government & Policy',
    icon: 'Landmark',
    color: 'from-purple-500 to-indigo-700',
    accentBorder: 'border-purple-500/40',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    description: 'Kosakata untuk alokasi APBN, intervensi hukum, regulasi monopoli, dan infrastruktur strategis.',
    items: [
      {
        id: 'gov-1',
        band8Word: 'allocate fiscal resources judiciously',
        band5Basic: 'spend government money wisely',
        indonesianMeaning: 'Mengalokasikan anggaran keuangan negara secara bijaksana dan terukur',
        wordType: 'Collocation (Verb + Noun + Adverb)',
        mnemonicHook: '"Fiscal" = kas negara / perbendaharaan. "Judiciously" dari kata *judge* (seperti hakim adil yang menimbang dengan sangat cermat).',
        ieltsSentence: 'It is incumbent upon state administrations to allocate fiscal resources judiciously between defense and healthcare.',
        clozeSentence: 'Treasury officials are obligated to [____] to avoid excessive sovereign debt.',
        clozeAnswer: 'allocate fiscal resources judiciously',
        clozeOptions: [
          'allocate fiscal resources judiciously',
          'distribute state funds with wisdom',
          'spend tax cash carefully'
        ]
      },
      {
        id: 'gov-2',
        band8Word: 'warrant decisive governmental intervention',
        band5Basic: 'need the government to step in and fix things',
        indonesianMeaning: 'Memerlukan campur tangan pemerintah yang tegas dan nyata',
        wordType: 'Collocation (Verb + Noun Phrase)',
        mnemonicHook: '"Warrant" = menuntut / membenarkan tindakan. Masalah sudah sangat darurat sehingga campur tangan pemerintah ("intervention") mutlak diperlukan.',
        ieltsSentence: 'Monopolistic cartels manipulating pharmaceutical prices warrant decisive governmental intervention.',
        clozeSentence: 'Runaway inflation and catastrophic natural calamities undoubtedly [____].',
        clozeAnswer: 'warrant decisive governmental intervention',
        clozeOptions: [
          'warrant decisive governmental intervention',
          'need clear leadership taking action',
          'demand certain state stepping in'
        ]
      },
      {
        id: 'gov-3',
        band8Word: 'a paramount social obligation',
        band5Basic: 'a very important duty for the country',
        indonesianMeaning: 'Kewajiban sosial yang berada pada urutan paling utama / prioritas tertinggi',
        wordType: 'Noun Phrase (Adj + Noun)',
        mnemonicHook: '"Paramount" = di atas gunung tertinggi (*paramount mountain*); tidak ada yang lebih tinggi derajat kepentingannya dari ini.',
        ieltsSentence: 'Providing accessible primary education for disadvantaged rural children constitutes a paramount social obligation.',
        clozeSentence: 'Safeguarding vulnerable senior citizens represents [____] for any civilized nation.',
        clozeAnswer: 'a paramount social obligation',
        clozeOptions: [
          'a paramount social obligation',
          'a top-level community duty',
          'a supreme collective assignment'
        ]
      }
    ]
  }
];
