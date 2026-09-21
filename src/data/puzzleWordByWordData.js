// Basis Data Bedah Kosakata Word-by-Word & Terjemahan Semakna Tantangan Mahir (Band 8.5+ Power-Up)
// Menghubungkan kata standar (Band 5/6/7) dengan kosakata baru yang semakna (Band 8+)
// Dilengkapi arti kata per kata dan penjelasan fungsi leksikalnya.

export const PUZZLE_WORD_BY_WORD_MAP = {
  // ==========================================================================
  // BAND 5 (Pondasi Dasar S-V-O) — 30 LATIHAN LENGKAP
  // ==========================================================================
  'bp5-1': {
    translation: 'Sebagian besar tenaga kerja perkotaan mengandalkan jaringan kereta metropolitan setiap hari.',
    wordByWord: [
      { standard: 'Many', upgraded: 'A substantial proportion of', meaning: 'Sebagian besar dari', note: 'Frasa kuantitas akademik formal' },
      { standard: 'commuters', upgraded: 'the urban workforce', meaning: 'tenaga kerja perkotaan', note: 'Nomina kolektif menggantikan kata umum' },
      { standard: 'use', upgraded: 'relies on', meaning: 'mengandalkan / bertumpu pada', note: 'Kolokasi kata kerja berwibawa' },
      { standard: 'trains', upgraded: 'metropolitan rail networks', meaning: 'jaringan kereta api metropolitan', note: 'Frasa spesifik institusional' },
      { standard: 'every morning', upgraded: 'daily', meaning: 'setiap hari / harian', note: 'Adverbia waktu ringkas dan padat' }
    ]
  },
  'bp5-2': {
    translation: 'Para mahasiswa sarjana secara aktif meneliti literatur akademis di dalam fasilitas riset kampus.',
    wordByWord: [
      { standard: 'Students', upgraded: 'Undergraduates', meaning: 'Mahasiswa program sarjana', note: 'Istilah perguruan tinggi yang lebih presisi' },
      { standard: 'read', upgraded: 'actively consult', meaning: 'secara aktif meneliti / membaca rujukan', note: 'Verba akademik bermakna eksplorasi studi' },
      { standard: 'textbooks', upgraded: 'academic literature', meaning: 'literatur akademis / pustaka ilmiah', note: 'Nomina akademik tingkat lanjut' },
      { standard: 'in the library', upgraded: 'within campus research facilities', meaning: 'di dalam fasilitas riset kampus', note: 'Preposisi spasial formal' }
    ]
  },
  'bp5-3': {
    translation: 'Aktivitas fisik yang konsisten membakar kelebihan kalori sekaligus meredakan tekanan psikologis.',
    wordByWord: [
      { standard: 'Regular exercise', upgraded: 'Consistent physical activity', meaning: 'Aktivitas fisik yang konsisten', note: 'Nominalisasi padat C1' },
      { standard: 'burns calories', upgraded: 'expends excess calories', meaning: 'membakar / mengeluarkan kelebihan kalori', note: 'Verba fisiologis presisi' },
      { standard: 'and', upgraded: 'while', meaning: 'sekaligus / seraya', note: 'Konjungsi simultan yang lebih luwes' },
      { standard: 'reduces stress', upgraded: 'mitigating psychological distress', meaning: 'meredakan tekanan psikologis', note: 'Partisipel penjelas akibat' }
    ]
  },
  'bp5-4': {
    translation: 'Jaringan digital menyebarluaskan sumber daya akademis yang sangat berharga kepada para pembelajar di seluruh dunia.',
    wordByWord: [
      { standard: 'The internet', upgraded: 'Digital networks', meaning: 'Jaringan digital / teknologi informasi', note: 'Variasi istilah teknologi C1' },
      { standard: 'can provide', upgraded: 'disseminate', meaning: 'menyebarluaskan / mendistribusikan', note: 'Kata kerja transmisi informasi' },
      { standard: 'useful information', upgraded: 'invaluable academic resources', meaning: 'sumber daya akademis yang sangat berharga', note: 'Kolokasi berbobot tinggi' },
      { standard: 'for students', upgraded: 'to learners worldwide', meaning: 'kepada para pembelajar di seluruh dunia', note: 'Cakupan audiens global' }
    ]
  },
  'bp5-5': {
    translation: 'Banyak warga gagal memilah limbah polimer yang dapat didaur ulang di dalam kediaman rumah tangga.',
    wordByWord: [
      { standard: 'Many citizens', upgraded: 'Numerous residents', meaning: 'Banyak warga / penduduk', note: 'Diksi formal sosiologis' },
      { standard: 'do not separate', upgraded: 'fail to segregate', meaning: 'gagal / tidak memilah', note: 'Verba presisi untuk pemilahan' },
      { standard: 'plastic waste', upgraded: 'recyclable polymers', meaning: 'limbah polimer yang dapat didaur ulang', note: 'Istilah material teknis lingkungan' },
      { standard: 'at home', upgraded: 'within domestic residences', meaning: 'di dalam kediaman rumah tangga', note: 'Register bahasa resmi' }
    ]
  },
  'bp5-6': {
    translation: 'Kendati telepon pintar menawarkan manfaat yang luar biasa, pengadaannya menuntut pengeluaran finansial yang cukup besar.',
    wordByWord: [
      { standard: 'Smartphones are useful', upgraded: 'While smartphones afford immense utility', meaning: 'Meskipun telepon pintar memberikan kegunaan luar biasa', note: 'Klausa konsesi pembuka' },
      { standard: 'but they', upgraded: 'their procurement', meaning: 'pembelian / pengadaannya', note: 'Nominalisasi dari verba membeli' },
      { standard: 'are quite expensive', upgraded: 'involves substantial financial outlays', meaning: 'menuntut pengeluaran biaya yang substansial', note: 'Frasa ekonomi formal' }
    ]
  },
  'bp5-7': {
    translation: 'Akibat kemacetan kendaraan yang parah, transportasi umum mengalami penundaan jadwal yang berkepanjangan.',
    wordByWord: [
      { standard: 'Traffic was congested', upgraded: 'Owing to severe vehicular congestion', meaning: 'Akibat kemacetan kendaraan yang parah', note: 'Frasa preposisi kausalitas formal' },
      { standard: 'so the bus', upgraded: 'public transit', meaning: 'armada transportasi umum', note: 'Istilah payung perkotaan' },
      { standard: 'arrived late', upgraded: 'suffered protracted schedule delays', meaning: 'mengalami penundaan jadwal berkepanjangan', note: 'Kolokasi keterlambatan C2' }
    ]
  },
  'bp5-8': {
    translation: 'Personel korporat yang tekun senantiasa menjaga ketepatan waktu dalam menghadiri konferensi yang dijadwalkan.',
    wordByWord: [
      { standard: 'Professional employees', upgraded: 'Diligent corporate personnel', meaning: 'Personel / karyawan korporat yang tekun', note: 'Istilah ketenagakerjaan profesional' },
      { standard: 'always arrive on time', upgraded: 'consistently maintain punctuality', meaning: 'senantiasa menjaga ketepatan waktu', note: 'Nominalisasi sifat disiplin waktu' },
      { standard: 'for meetings', upgraded: 'for scheduled conferences', meaning: 'untuk konferensi / rapat yang dijadwalkan', note: 'Peristiwa bisnis resmi' }
    ]
  },
  'bp5-9': {
    translation: 'Pusat-pusat perkotaan kontemporer menampung beraneka ragam fasilitas kebugaran mutakhir.',
    wordByWord: [
      { standard: 'There are many', upgraded: 'Contemporary urban centers accommodate a myriad of', meaning: 'Pusat kota masa kini menampung banyak sekali', note: 'Inversi retoris elegan' },
      { standard: 'sports facilities', upgraded: 'state-of-the-art athletic amenities', meaning: 'fasilitas kebugaran mutakhir', note: 'Kolokasi infrastruktur modern' },
      { standard: 'in modern cities', upgraded: 'contemporary urban centers', meaning: 'pusat-pusat perkotaan kontemporer', note: 'Variasi sinonim metropolitan' }
    ]
  },
  'bp5-10': {
    translation: 'Otoritas negara meresmikan institusi pedagogis yang inovatif selama tahun anggaran sebelumnya.',
    wordByWord: [
      { standard: 'The government', upgraded: 'State authorities', meaning: 'Otoritas / lembaga pemerintah negara', note: 'Register pemerintahan resmi' },
      { standard: 'built', upgraded: 'commissioned', meaning: 'meresmikan / membangun secara resmi', note: 'Verba legal infrastruktur' },
      { standard: 'a new school', upgraded: 'an innovative pedagogical institution', meaning: 'institusi pendidikan / sekolah inovatif', note: 'Terminologi akademis' },
      { standard: 'last year', upgraded: 'during the preceding fiscal year', meaning: 'selama tahun anggaran sebelumnya', note: 'Penyebutan waktu fiskal formal' }
    ]
  },
  'bp5-11': {
    translation: 'Pariwisata internasional menghasilkan pendapatan yang substansial bagi komunitas-komunitas daerah pelosok.',
    wordByWord: [
      { standard: 'Tourism', upgraded: 'International tourism', meaning: 'Pariwisata lintas negara', note: 'Spesifikasi konteks global' },
      { standard: 'brings income', upgraded: 'generates substantial revenue', meaning: 'menghasilkan pendapatan substansial', note: 'Kolokasi ekonomi baku' },
      { standard: 'to rural villages', upgraded: 'for peripheral communities', meaning: 'bagi komunitas-komunitas pelosok', note: 'Terminologi geografi demografi' }
    ]
  },
  'bp5-12': {
    translation: 'Arsip publik kontemporer menyediakan terminal komputer digital tanpa dipungut biaya bagi para pengunjung.',
    wordByWord: [
      { standard: 'Modern libraries', upgraded: 'Contemporary public archives', meaning: 'Arsip publik / perpustakaan masa kini', note: 'Istilah pustaka akademis' },
      { standard: 'offer free', upgraded: 'provide complimentary', meaning: 'menyediakan secara cuma-cuma', note: 'Sinonim elegan untuk "free"' },
      { standard: 'digital computers', upgraded: 'digital terminals', meaning: 'terminal komputer digital', note: 'Istilah perangkat teknologi informasi' },
      { standard: 'for users', upgraded: 'for patrons', meaning: 'bagi para pengunjung / anggota', note: 'Nomina formal pengunjung perpustakaan' }
    ]
  },
  'bp5-13': {
    translation: 'Sistem transportasi massal secara signifikan meredakan kemacetan kendaraan bermotor di pusat-pusat metropolitan.',
    wordByWord: [
      { standard: 'Public transport', upgraded: 'Mass transit systems', meaning: 'Sistem transportasi massal', note: 'Istilah tata kota resmi' },
      { standard: 'reduces traffic', upgraded: 'significantly alleviate vehicular congestion', meaning: 'secara signifikan meredakan kemacetan kendaraan', note: 'Kolokasi mitigasi masalah kota' },
      { standard: 'in big cities', upgraded: 'across metropolitan centers', meaning: 'di seluruh pusat-pusat metropolitan', note: 'Variasi geografis akademis' }
    ]
  },
  'bp5-14': {
    translation: 'Produk pangan olahan siap saji mengandung konsentrasi gula rafinasi dan lipid jenuh yang berlebihan.',
    wordByWord: [
      { standard: 'Fast food', upgraded: 'Processed foodstuffs', meaning: 'Produk makanan olahan siap saji', note: 'Terminologi sains pangan' },
      { standard: 'contains too much', upgraded: 'contain excessive concentrations of', meaning: 'mengandung konsentrasi berlebih dari', note: 'Frasa kuantitas gizi ilmiah' },
      { standard: 'sugar and fat', upgraded: 'refined sugars and saturated lipids', meaning: 'gula rafinasi dan lemak jenuh', note: 'Istilah biokimia akurat' }
    ]
  },
  'bp5-15': {
    translation: 'Para wali selayaknya menanamkan literasi keuangan dan penganggaran yang cermat pada generasi muda.',
    wordByWord: [
      { standard: 'Parents should', upgraded: 'Guardians ought to', meaning: 'Para orang tua / wali selayaknya', note: 'Modalitas kewajiban moral halus' },
      { standard: 'teach children', upgraded: 'instill in youngsters', meaning: 'menanamkan pada generasi muda', note: 'Verba pendidikan nilai C2' },
      { standard: 'about saving money', upgraded: 'financial literacy and prudent budgeting', meaning: 'literasi keuangan dan penganggaran yang bijak', note: 'Frasa konsep ekonomi esensial' }
    ]
  },
  'bp5-16': {
    translation: 'Rangkaian panel fotovoltaik membangkitkan energi listrik terbarukan yang ramah lingkungan secara berkesinambungan.',
    wordByWord: [
      { standard: 'Solar panels', upgraded: 'Photovoltaic arrays', meaning: 'Rangkaian modul sel surya fotovoltaik', note: 'Istilah sains teknologi energi' },
      { standard: 'produce clean', upgraded: 'generate sustainable renewable', meaning: 'membangkitkan energi terbarukan yang berkelanjutan', note: 'Kolokasi energi hijau C1' },
      { standard: 'green electricity', upgraded: 'electrical power', meaning: 'tenaga listrik', note: 'Nomina daya teknis' }
    ]
  },
  'bp5-17': {
    translation: 'Sebagian besar populasi remaja mengalokasikan jam-jam yang berlebihan pada platform jejaring digital.',
    wordByWord: [
      { standard: 'Many teenagers', upgraded: 'A substantial proportion of adolescents', meaning: 'Sebagian besar populasi remaja', note: 'Gaya penulisan demografis formal' },
      { standard: 'spend hours', upgraded: 'allocate excessive hours', meaning: 'mengalokasikan jam yang berlebihan', note: 'Verba distribusi waktu' },
      { standard: 'on social media', upgraded: 'to digital networking platforms', meaning: 'pada platform jejaring digital', note: 'Istilah media komunikasi modern' }
    ]
  },
  'bp5-18': {
    translation: 'Lembaga-lembaga kebudayaan melindungi warisan arkeologis demi kemaslahatan generasi mendatang.',
    wordByWord: [
      { standard: 'Museums', upgraded: 'Cultural institutions', meaning: 'Lembaga / institusi kebudayaan', note: 'Payung istilah sosiologis' },
      { standard: 'preserve artifacts', upgraded: 'safeguard archaeological heritage', meaning: 'melindungi warisan arkeologis sejarah', note: 'Kolokasi pelestarian cagar budaya' },
      { standard: 'for future generations', upgraded: 'for subsequent posterity', meaning: 'demi generasi penerus di masa depan', note: 'Ungkapan akademis klasik C2' }
    ]
  },
  'bp5-19': {
    translation: 'Fasilitas manufaktur industri melepaskan polutan gas berbahaya ke dalam lapisan biosfer bumi.',
    wordByWord: [
      { standard: 'Factories', upgraded: 'Industrial manufacturing facilities', meaning: 'Fasilitas pabrik manufaktur industri', note: 'Frasa benda komprehensif' },
      { standard: 'release toxic smoke', upgraded: 'discharge hazardous atmospheric effluents', meaning: 'melepaskan buangan gas berbahaya ke atmosfer', note: 'Istilah sains emisi lingkungan' },
      { standard: 'into the atmosphere', upgraded: 'into the biosphere', meaning: 'ke dalam biosfer / lapisan kehidupan bumi', note: 'Konsep ekologi komprehensif' }
    ]
  },
  'bp5-20': {
    translation: 'Para lulusan perguruan tinggi mengamankan profesi bergengsi di dalam institusi keuangan korporat.',
    wordByWord: [
      { standard: 'University graduates', upgraded: 'Tertiary alumni', meaning: 'Lulusan pendidikan tinggi / universitas', note: 'Istilah perguruan tinggi formal' },
      { standard: 'find good jobs', upgraded: 'secure lucrative professional occupations', meaning: 'mengamankan pekerjaan profesional yang menjanjikan', note: 'Kolokasi karier bernilai tinggi' },
      { standard: 'in financial firms', upgraded: 'within corporate fiscal institutions', meaning: 'di dalam institusi keuangan korporasi', note: 'Istilah sektor perbankan/finansial' }
    ]
  },
  'bp5-21': {
    translation: 'Pasokan air minum yang higienis merupakan kebutuhan mutlak bagi kelangsungan hidup umat manusia di muka bumi.',
    wordByWord: [
      { standard: 'Clean drinking water', upgraded: 'Potable water supplies', meaning: 'Pasokan air yang layak minum / higienis', note: 'Istilah sanitasi medis C1' },
      { standard: 'is essential', upgraded: 'remain fundamentally indispensable', meaning: 'tetap menjadi kebutuhan yang mutlak tak tergantikan', note: 'Adjektiva penguat eksistensi' },
      { standard: 'for human survival', upgraded: 'for terrestrial human sustenance', meaning: 'bagi kelangsungan hidup manusia di bumi', note: 'Konsep biologis formal' }
    ]
  },
  'bp5-22': {
    translation: 'Konsumsi bacaan yang rutin memperluas khazanah kosakata dan kemahiran artikulasi gramatikal.',
    wordByWord: [
      { standard: 'Reading books', upgraded: 'Regular literary consumption', meaning: 'Konsumsi bacaan karya tulis yang rutin', note: 'Nominalisasi aktivitas literasi' },
      { standard: 'improves vocabulary', upgraded: 'enhances lexical breadth', meaning: 'memperluas kekayaan perbendaharaan kata', note: 'Kriteria resmi Lexical Resource' },
      { standard: 'and writing skills', upgraded: 'and grammatical articulation', meaning: 'dan kefasihan pengungkapan tata bahasa', note: 'Kriteria Grammatical Range' }
    ]
  },
  'bp5-23': {
    translation: 'Presipitasi hujan badai yang ekstrem memicu luapan banjir bandang di lembah-lembah dataran rendah yang rentan.',
    wordByWord: [
      { standard: 'Heavy rain', upgraded: 'Torrid atmospheric precipitation', meaning: 'Curah hujan lebat / presipitasi atmosferik', note: 'Terminologi meteorologi ilmiah' },
      { standard: 'causes flash floods', upgraded: 'precipitates catastrophic inundations', meaning: 'memicu bencana banjir bandang yang dahsyat', note: 'Verba sebab-akibat formal' },
      { standard: 'in low areas', upgraded: 'across vulnerable low-lying basins', meaning: 'di kawasan cekungan dataran rendah yang rentan', note: 'Istilah topografi spasial' }
    ]
  },
  'bp5-24': {
    translation: 'Demografi generasi muda kerap condong menetap di pusat-pusat metropolitan yang sarat dinamika kehidupan.',
    wordByWord: [
      { standard: 'Young people', upgraded: 'Youthful demographic cohorts', meaning: 'Kelompok demografi generasi muda', note: 'Istilah sensus kependudukan' },
      { standard: 'prefer living', upgraded: 'frequently gravitate toward residing', meaning: 'kerap memiliki kecenderungan untuk bermukim', note: 'Verba kecenderungan sosiologis' },
      { standard: 'in vibrant cities', upgraded: 'in bustling metropolitan epicenters', meaning: 'di pusat-pusat kota metropolitan yang berdenyut aktif', note: 'Kolokasi tata kota C2' }
    ]
  },
  'bp5-25': {
    translation: 'Pengolahan ulang limbah selulosa menghemat sumber daya pepohonan sekaligus menjaga keasrian hutan primer.',
    wordByWord: [
      { standard: 'Recycling paper', upgraded: 'Reprocessing cellulose waste', meaning: 'Pengolahan ulang limbah kertas / serat selulosa', note: 'Istilah daur ulang industri kimia' },
      { standard: 'saves trees', upgraded: 'conserves vital arboreal resources', meaning: 'menghemat sumber daya pohon yang vital', note: 'Istilah botani & kehutanan' },
      { standard: 'and protects forests', upgraded: 'and safeguards primary woodlands', meaning: 'dan memproteksi ekosistem hutan primer', note: 'Kolokasi konservasi alam' }
    ]
  },
  'bp5-26': {
    translation: 'Pemberlakuan tarif fiskal yang tinggi terhadap minuman pemanis secara efektif menyurutkan pola konsumsi masyarakat yang tidak sehat.',
    wordByWord: [
      { standard: 'High tax on sugary drinks', upgraded: 'Elevated fiscal levies on sweetened beverages', meaning: 'Penerapan pungutan pajak tinggi pada minuman manis', note: 'Istilah kebijakan fiskal publik' },
      { standard: 'discourages', upgraded: 'substantially dissuades', meaning: 'secara substansial mencegah / menyurutkan niat', note: 'Verba prevensi psikologis C1' },
      { standard: 'consumption', upgraded: 'deleterious dietary habits', meaning: 'pola konsumsi makanan yang merusak kesehatan', note: 'Terminologi ilmu kesehatan gizi' }
    ]
  },
  'bp5-27': {
    translation: 'Armada kendaraan bertenaga baterai listrik menghasilkan nol emisi gas buang karbon secara lokal.',
    wordByWord: [
      { standard: 'Electric vehicles', upgraded: 'Battery-powered conveyances', meaning: 'Armada kendaraan bertenaga baterai', note: 'Variasi istilah transportasi teknik' },
      { standard: 'produce zero', upgraded: 'generate negligible', meaning: 'menghasilkan emisi yang mendekati nol / tidak berarti', note: 'Verba kuantitas presisi' },
      { standard: 'tailpipe emissions', upgraded: 'localized combustion exhausts', meaning: 'gas buang hasil pembakaran mesin lokal', note: 'Istilah mekanika otomotif' }
    ]
  },
  'bp5-28': {
    translation: 'Program perkuliahan daring tanpa batas wilayah memungkinkan para pembelajar menempuh studi secara fleksibel dari mana saja.',
    wordByWord: [
      { standard: 'Online courses', upgraded: 'Virtual distance-learning curricula', meaning: 'Kurikulum pembelajaran jarak jauh berbasis virtual', note: 'Istilah teknologi pendidikan modern' },
      { standard: 'allow students to study', upgraded: 'afford scholars the flexibility to acquire knowledge', meaning: 'memberikan keleluasaan bagi pembelajar untuk menimba ilmu', note: 'Frasa pedagogis anggun' },
      { standard: 'anywhere', upgraded: 'unconstrained by geographic boundaries', meaning: 'tanpa terikat oleh batasan-batasan geografis', note: 'Adverbia spasial global' }
    ]
  },
  'bp5-29': {
    translation: 'Aktivitas berjalan kaki santai yang dilakukan secara rutin memperkokoh kepadatan tulang dan menumbuhkan kesejahteraan emosional.',
    wordByWord: [
      { standard: 'Daily walking', upgraded: 'Routine pedestrian ambulation', meaning: 'Aktivitas berjalan kaki harian yang teratur', note: 'Diksi medis fisiologi gerak' },
      { standard: 'strengthens bones', upgraded: 'fortifies skeletal density', meaning: 'memperkuat kepadatan kerangka tulang', note: 'Istilah anatomi kesehatan ortopedi' },
      { standard: 'and improves mood', upgraded: 'and fosters psychological well-being', meaning: 'dan memelihara kesejahteraan psikologis / suasana hati', note: 'Kesehatan mental formal' }
    ]
  },
  'bp5-30': {
    translation: 'Alokasi bantuan subsidi negara menopang ketahanan para produsen pertanian selama menghadapi periode kekeringan berkepanjangan.',
    wordByWord: [
      { standard: 'Government subsidies', upgraded: 'State fiscal allocations', meaning: 'Alokasi dana bantuan finansial pemerintah', note: 'Istilah APBN / perbendaharaan negara' },
      { standard: 'help farmers', upgraded: 'sustain agrarian producers', meaning: 'menopang kelangsungan hidup kaum petani', note: 'Istilah ekonomi pertanian formal' },
      { standard: 'during droughts', upgraded: 'throughout protracted arid seasons', meaning: 'sepanjang musim kemarau yang berkepanjangan', note: 'Istilah iklim klimatologi' }
    ]
  }
};

// Generic Fallback Word-by-Word Generator for any item without manual entry
export const getPuzzleWordByWordData = (level) => {
  if (!level) return null;

  // 1. If explicit mapping exists in dictionary
  if (PUZZLE_WORD_BY_WORD_MAP[level.id]) {
    return PUZZLE_WORD_BY_WORD_MAP[level.id];
  }

  // 2. If level has explicit wordByWord in powerUpBand8
  if (level.powerUpBand8?.wordByWord && level.powerUpBand8?.translation) {
    return {
      translation: level.powerUpBand8.translation,
      wordByWord: level.powerUpBand8.wordByWord
    };
  }

  // 3. Intelligent automatic alignment fallback based on level blocks
  const standard = level.completedEnglish || '';
  const upgraded = level.powerUpBand8?.upgraded || standard;
  const blocks = level.blocks || [];

  // Generate sensible pairs from the level's blocks
  const wordByWord = blocks.map(b => ({
    standard: b.text,
    upgraded: b.text, // fallback
    meaning: b.translation,
    note: b.type ? `Unsur: ${b.type}` : 'Bagian kalimat'
  }));

  return {
    translation: level.indonesianGoal || 'Terjemahan kalimat belum tersedia.',
    wordByWord
  };
};
