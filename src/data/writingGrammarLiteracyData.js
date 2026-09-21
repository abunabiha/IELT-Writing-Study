// Basis Pengetahuan & Panduan Literasi Komprehensif: IELTS Writing & Academic Grammar (Fundamental hingga Advanced)
// Dilengkapi penjelasan bilingual (Inggris - Indonesia), rumus struktur baku, dan komparasi sebelum vs sesudah.

// ============================================================================
// 1. FUNDAMENTAL WRITING THEORY (Pondasi Tata Bahasa & Struktur Kalimat)
// ============================================================================
export const FUNDAMENTAL_WRITING_THEORY = [
  {
    id: 'sentence_anatomy',
    title: 'Sentence Anatomy: 5 Core Clause Patterns',
    titleId: 'Anatomi Kalimat: 5 Pola Klausa Dasar',
    badge: 'Pondasi Gramatikal',
    icon: '🏗️',
    conceptEn: 'Every English academic sentence is built upon essential syntactic slots: Subject (S), Verb (V), Object (O), Complement (C), and Adverbial (A). Mastering these basic patterns prevents fragments and garbled syntax.',
    conceptId: 'Setiap kalimat akademis bahasa Inggris dibangun atas unsur-unsur sintaksis utama: Subjek (S), Kata Kerja (V), Objek (O), Pelengkap/Komplemen (C), dan Keterangan (A). Penguasaan pola dasar ini mencegah kalimat terpenggal (fragment) dan susunan kata yang rancu.',
    formulaEn: 'Pattern 1: S + V | Pattern 2: S + V + O | Pattern 3: S + V + C | Pattern 4: S + V + Indirect O + Direct O | Pattern 5: S + V + O + C',
    formulaId: 'Pola 1: S + V | Pola 2: S + V + O | Pola 3: S + V + C | Pola 4: S + V + Objek Tak Langsung + Objek Langsung | Pola 5: S + V + O + C',
    rulesId: [
      'Subjek (S): Pelaku aksi atau topik utama berupa frasa nomina (noun phrase) atau gerund (-ing).',
      'Kata Kerja (V): Pusat predikat yang harus memiliki bentuk waktu (tense) dan selaras dengan subjek (singular vs plural).',
      'Objek (O): Entitas yang menerima aksi kata kerja transitif.',
      'Komplemen (C): Melengkapi subjek setelah linking verb (is, become, remain, appear).',
      'Adverbial (A): Keterangan waktu, tempat, cara, atau alasan (fleksibel di awal atau akhir kalimat).'
    ],
    badExample: {
      en: 'The government because want to fix air quality in capital cities.',
      id: 'Pemerintah karena ingin memperbaiki kualitas udara di ibu kota. (Kalimat cacat/fragment, tidak ada kata kerja utama)',
      reasonId: 'Klausa subordinat "because..." menggantung tanpa klausa utama mandiri.'
    },
    goodExample: {
      en: 'The municipal government implemented stringent emission standards to curb urban air pollution.',
      id: 'Pemerintah kota memberlakukan standar emisi yang ketat untuk menekan polusi udara perkotaan. (S: The municipal government, V: implemented, O: stringent emission standards, A: to curb urban air pollution)',
      reasonId: 'Memiliki struktur S-V-O-A yang utuh, lugas, dan gramatikal.'
    },
    practicePrompt: {
      en: 'Convert this fragment into a complete academic sentence: "Universities giving free access to online libraries."',
      id: 'Ubah kalimat terpenggal ini menjadi kalimat akademis utuh: "Universities giving free access to online libraries."',
      modelAnswerEn: 'Many prestigious universities now grant free access to extensive online digital libraries for international scholars.',
      modelAnswerId: 'Banyak universitas ternama kini memberikan akses gratis ke perpustakaan digital daring yang lengkap bagi para akademisi internasional.'
    }
  },
  {
    id: 'four_sentence_structures',
    title: 'The 4 Essential Sentence Types',
    titleId: '4 Jenis Kalimat Wajib IELTS',
    badge: 'Struktur Gramatikal',
    icon: '🧩',
    conceptEn: 'To secure Band 7.0+ in Grammatical Range & Accuracy (GRA), writers must demonstrate a flexible repertoire comprising Simple, Compound, Complex, and Compound-Complex sentences.',
    conceptId: 'Untuk mengamankan Band 7.0+ pada kriteria Grammatical Range & Accuracy (GRA), penulis wajib menunjukkan variasi struktur yang luwes: Kalimat Tunggal (Simple), Kalimat Majemuk Setara (Compound), Kalimat Bertingkat (Complex), dan Majemuk-Bertingkat (Compound-Complex).',
    formulaEn: '1. Simple: [1 Independent Clause] | 2. Compound: [Clause A] + FANBOYS + [Clause B] | 3. Complex: [Subordinating Conjunction + Dependent Clause], [Independent Clause] | 4. Compound-Complex: [Complex sentence] + [Coordinating Conjunction + Clause C]',
    formulaId: '1. Tunggal: [1 Klausa Mandiri] | 2. Majemuk: [Klausa A] + FANBOYS (For, And, Nor, But, Or, Yet, So) + [Klausa B] | 3. Bertingkat: [Konjungsi Subordinat + Anak Kalimat], [Induk Kalimat] | 4. Majemuk-Bertingkat: [Kalimat Bertingkat] + [Konjungsi Koordinatif + Klausa C]',
    rulesId: [
      'Simple Sentence: Menyatakan satu gagasan tegas. Jangan gunakan terus-menerus agar tidak terkesan kaku.',
      'Compound Sentence: Hubungkan dua klausa mandiri dengan tanda koma + salah satu kata sambung FANBOYS (for, and, nor, but, or, yet, so) atau titik koma (;).',
      'Complex Sentence: Gunakan kata hubung subordinatif seperti although, because, while, whereas, since, provided that. Jika anak kalimat di depan, pisahkan dengan koma.',
      'Compound-Complex Sentence: Gabungan minimal 2 klausa mandiri dan 1 anak kalimat, sangat efektif untuk sintesis argumen esai Task 2.'
    ],
    badExample: {
      en: 'Fossil fuels cause pollution. Renewable energy is cleaner. Governments should invest in solar power.',
      id: 'Bahan bakar fosil menyebabkan polusi. Energi terbarukan lebih bersih. Pemerintah harus berinvestasi pada tenaga surya. (Deretan kalimat pendek sederhana yang monoton - Band 5.0)',
      reasonId: 'Hanya menggunakan kalimat sederhana berulang-ulang tanpa variasi konektor.'
    },
    goodExample: {
      en: 'Although traditional fossil fuels remain deeply entrenched in industrial production, governments must actively subsidize renewable alternatives, for unchecked emissions inflict irreversible planetary damage.',
      id: 'Meskipun bahan bakar fosil tradisional masih mengakar kuat dalam produksi industri, pemerintah harus secara aktif menyubsidi alternatif terbarukan, karena emisi yang tak terkendali menimbulkan kerusakan bumi yang tak terpulihkan. (Compound-Complex: Band 8.5)',
      reasonId: 'Mengombinasikan klausa subordinat konsesi (Although...), klausa utama (governments must...), dan klausa koordinatif penjelas alasan (, for...).'
    },
    practicePrompt: {
      en: 'Combine these two ideas into a complex sentence using "whereas": "Older people prefer face-to-face communication. Younger generations rely on instant messaging."',
      id: 'Gabungkan kedua ide ini menjadi kalimat kompleks menggunakan "whereas": "Orang tua lebih suka komunikasi tatap muka. Generasi muda mengandalkan pesan instan."',
      modelAnswerEn: 'Whereas older demographics frequently gravitate toward face-to-face dialogue, younger generations overwhelmingly rely on digital messaging platforms for routine interaction.',
      modelAnswerId: 'Sementara generasi yang lebih tua kerap condong pada dialog tatap muka, generasi muda sangat bergantung pada platform perpesanan digital untuk interaksi sehari-hari.'
    }
  },
  {
    id: 'punctuation_mastery',
    title: 'Punctuation Precision & Comma Splice Pitfalls',
    titleId: 'Ketepatan Tanda Baca & Jebakan Comma Splice',
    badge: 'Akurasi Sintaksis',
    icon: '✒️',
    conceptEn: 'Punctuation is not decorative; it dictates sentence boundaries. The comma splice (joining two independent clauses with merely a comma) is one of the most fatal mechanical errors dragging down candidates to Band 5.0.',
    conceptId: 'Tanda baca bukan hiasan; tanda baca menentukan batas klausa gramatikal. Kesalahan "comma splice" (menggabungkan dua kalimat mandiri hanya dengan tanda koma tanpa konjungsi) adalah kesalahan paling fatal yang sering menjatuhkan skor kandidat ke Band 5.0.',
    formulaEn: 'Fix 1: [Clause A]. [Clause B]. | Fix 2: [Clause A]; [Clause B]. | Fix 3: [Clause A], and/but/so [Clause B]. | Fix 4: [Clause A]; however/consequently, [Clause B].',
    formulaId: 'Solusi 1: [Klausa A]. [Klausa B]. | Solusi 2: [Klausa A]; [Klausa B]. | Solusi 3: [Klausa A], and/but/so [Klausa B]. | Solusi 4: [Klausa A]; however/consequently, [Klausa B].',
    rulesId: [
      'Jangan pernah menyambung dua klausa mandiri hanya dengan koma! (Misal: "I study hard, I want to pass" adalah SALAH BESAR).',
      'Gunakan Titik Koma (;) untuk menyandingkan dua kalimat independen yang gagasannya bertautan sangat erat.',
      'Gunakan Titik Dua (:) untuk memperkenalkan penjelasan mendalam, rincian daftar, atau kutipan argumen.',
      'Gunakan Tanda Pisah Em-Dash (—) untuk menyisipkan penegasan dramatis atau elaborasi tak terduga.',
      'Koma Berpasangan (Parenthetical commas): Klausa penjelas tambahan yang bukan inti subjek (non-restrictive) wajib diapit sepasang koma.'
    ],
    badExample: {
      en: 'Electric cars are gaining immense popularity, they remain prohibitively expensive for middle-income households.',
      id: 'Mobil listrik semakin diminati secara luas, harganya tetap sangat mahal bagi rumah tangga berpenghasilan menengah. (Fatal Comma Splice - Band 5.5)',
      reasonId: 'Dua kalimat mandiri dipaksa tersambung hanya dengan satu tanda koma.'
    },
    goodExample: {
      en: 'Electric vehicles are gaining unprecedented popularity; however, the upfront acquisition cost remains prohibitive for average working-class households.',
      id: 'Kendaraan listrik mengalami popularitas yang belum pernah terjadi sebelumnya; namun demikian, biaya pembelian awal tetap tak terjangkau bagi rumah tangga kelas pekerja pada umumnya. (Band 8.5)',
      reasonId: 'Menggunakan titik koma (;) diikuti konjungsi adverbial (however,) secara akurat.'
    },
    practicePrompt: {
      en: 'Correct this comma splice: "Remote work provides flexibility, many employees report feelings of professional isolation."',
      id: 'Perbaiki kesalahan comma splice ini: "Remote work provides flexibility, many employees report feelings of professional isolation."',
      modelAnswerEn: 'While remote work affords considerable scheduling flexibility, numerous employees paradoxically report acute professional isolation.',
      modelAnswerId: 'Meskipun kerja jarak jauh memberikan fleksibilitas jadwal yang besar, banyak karyawan secara paradoks melaporkan isolasi profesional yang akut.'
    }
  },
  {
    id: 'subject_verb_agreement',
    title: 'Subject-Verb Agreement in Complex Noun Phrases',
    titleId: 'Keselarasan Subjek dan Kata Kerja Frasa Kompleks',
    badge: 'Akurasi Tata Bahasa',
    icon: '⚖️',
    conceptEn: 'In high-level academic writing, subjects are rarely simple single words; they are expanded with prepositional phrases, participle modifiers, and relative clauses. Candidates often mistakenly match the verb with the nearest noun instead of the true head noun.',
    conceptId: 'Dalam penulisan esai akademis, subjek jarang berupa kata tunggal sederhana; subjek biasanya diperluas oleh frasa preposisi, pengubah partisipel, dan klausa relatif. Kandidat sering keliru mencocokkan kata kerja dengan kata benda terdekat, bukan dengan kata benda inti (head noun) yang sebenarnya.',
    formulaEn: 'The [Head Noun (Singular)] + [Intervening Prepositional Phrase / Modifiers] + [Singular Verb]',
    formulaId: 'Kata Benda Inti (Tunggal) + [Frasa Preposisi / Modifikator Penyela] + [Kata Kerja Tunggal (Singular)]',
    rulesId: [
      'Abaikan kata benda pengganggu di antara subjek dan kata kerja (contoh: "The quality of these educational programs IS exceptional", BUKAN "are").',
      'Kata benda kolektif/kuantitas abstrak seperti "percentage of", "majority of", "number of" mengikuti aturan spesifik: "A number of students ARE" (jamak), tetapi "The number of students IS" (tunggal).',
      'Kata ganti tak tentu (Indefinite pronouns) seperti "each of", "either of", "neither of", "everyone" selalu menuntut kata kerja tunggal.',
      'Gerund (Verb-ing) yang bertindak sebagai subjek selalu dianggap tunggal (contoh: "Investing in public libraries promotes literacy").'
    ],
    badExample: {
      en: 'The influx of international tourists to remote cultural landmarks have caused irreparable physical damage.',
      id: 'Masuknya wisatawan internasional ke cagar budaya terpencil telah menyebabkan kerusakan fisik yang tak terpulihkan. (Salah S-V Agreement: "have caused")',
      reasonId: 'Penulis mencocokkan "have" dengan kata benda jamak "tourists", padahal subjek intinya adalah "The influx" (tunggal).'
    },
    goodExample: {
      en: 'The unprecedented influx of international tourists to delicate cultural landmarks has caused severe infrastructural degradation.',
      id: 'Masuknya wisatawan internasional yang belum pernah terjadi sebelumnya ke cagar budaya rentan telah menyebabkan degradasi infrastruktur yang parah. (Benar: "has caused")',
      reasonId: 'Kata kerja "has caused" selaras sempurna dengan head noun tunggal "The influx".'
    },
    practicePrompt: {
      en: 'Identify and fix the agreement error: "The implementation of stringent environmental policies, alongside carbon tax frameworks, were delayed by legislators."',
      id: 'Temukan dan perbaiki kesalahan keselarasan: "The implementation of stringent environmental policies, alongside carbon tax frameworks, were delayed by legislators."',
      modelAnswerEn: 'The implementation of stringent environmental policies, alongside carbon tax frameworks, was delayed by legislators.',
      modelAnswerId: 'Pemberlakuan kebijakan lingkungan yang ketat, di samping kerangka pajak karbon, telah ditunda oleh para pembuat undang-undang. (Head noun tunggal "implementation" memerlukan "was").'
    }
  }
];

// ============================================================================
// 2. INTERMEDIATE WRITING THEORY (Teknik Esai Akademis & Kohesi Paragraf)
// ============================================================================
export const INTERMEDIATE_WRITING_THEORY = [
  {
    id: 'paraphrasing_techniques',
    title: 'The 4 Pillars of Academic Paraphrasing',
    titleId: '4 Pilar Teknik Parafrase Akademik',
    badge: 'Keterampilan Parafrase',
    icon: '🔄',
    conceptEn: 'Paraphrasing is not merely swapping words with a thesaurus. Examiners instantly penalize "synonym stuffing". Authentic Band 8 paraphrasing synergizes vocabulary substitution, word-class transformation, active-passive voice shifts, and clause reordering.',
    conceptId: 'Memparafrasa bukan sekadar menukar kata dengan sinonim kamus. Penguji Cambridge langsung menurunkan nilai bagi tulisan yang memaksakan sinonim canggung (synonym stuffing). Parafrasa asli Band 8 menggabungkan pergantian kata, transformasi kelas kata, perubahan aktif-pasif, dan penataan ulang klausa.',
    formulaEn: 'Technique 1: Contextual Synonyms | Technique 2: Word Class Shift (Verb -> Noun / Adjective -> Adverb) | Technique 3: Voice Modulation (Active <-> Passive) | Technique 4: Clause Restructuring',
    formulaId: 'Teknik 1: Sinonim Kontekstual | Teknik 2: Pergeseran Kelas Kata (Verba -> Nomina / Adjektiva -> Adverbia) | Teknik 3: Modulasi Suara (Aktif <-> Pasif) | Teknik 4: Penataan Ulang Urutan Klausa',
    rulesId: [
      'Jangan memaksakan sinonim jika artinya tidak 100% cocok dalam konteks sosiologis/akademis.',
      'Gunakan nominalisasi: Ubah kata kerja soal menjadi kata benda abstrak (misal: "governments spend money" -> "governmental expenditure").',
      'Ubah urutan logika: Jika soal dimulai dengan "Efek X karena Y", mulailah parafrasa Anda dengan "Faktor Y mengakibatkan X".',
      'Jangan pernah mengubah istilah teknis universal (misal: "television", "traffic congestion", "climate change" tidak perlu dipaksakan diubah secara aneh).'
    ],
    badExample: {
      en: 'Prompt: "Some people believe that university education should be free for everyone." -> Paraphrase: "Certain humans think college learning must cost zero money for all folks."',
      id: 'Soal: "Sebagian orang percaya kuliah harus gratis untuk semua orang." -> Parafrasa Kaku: "Certain humans think college learning must cost zero money for all folks." (Band 5.5 - Canggung & tidak natural)',
      reasonId: 'Mengganti kata secara buta ("humans", "cost zero money", "folks") menghasilkan register informal dan aneh.'
    },
    goodExample: {
      en: 'It is widely contended that tertiary educational institutions ought to be completely state-funded, thereby guaranteeing universal access irrespective of socioeconomic background.',
      id: 'Kerap diperdebatkan bahwa institusi pendidikan tinggi selayaknya didanai penuh oleh negara, sehingga menjamin akses universal tanpa memandang latar belakang sosial-ekonomi. (Band 8.5)',
      reasonId: 'Memadukan transformasi kelas kata (tertiary educational institutions), perubahan suara pasif (state-funded), dan klausa partisipial (thereby guaranteeing...).'
    },
    practicePrompt: {
      en: 'Paraphrase this Task 2 prompt: "Governments should ban dangerous sports to protect citizens from fatal injuries."',
      id: 'Parafrasakan instruksi Task 2 ini: "Governments should ban dangerous sports to protect citizens from fatal injuries."',
      modelAnswerEn: 'Proponents argue that authorities ought to enact comprehensive prohibitions on high-risk extreme athletics in order to safeguard participants against catastrophic physical harm.',
      modelAnswerId: 'Para pendukung berpendapat bahwa pihak berwenang selayaknya memberlakukan larangan komprehensif terhadap olahraga ekstrem berisiko tinggi demi melindungi keselamatan peserta dari bahaya fisik yang fatal.'
    }
  },
  {
    id: 'peel_paragraph_framework',
    title: 'The PEEL Body Paragraph Architecture',
    titleId: 'Arsitektur Paragraf Tubuh PEEL',
    badge: 'Struktur Esai',
    icon: '🧱',
    conceptEn: 'Task 2 body paragraphs fail Band 7 when ideas are listed superficially. The PEEL framework (Point, Explanation, Evidence, Link) ensures that every single central argument is fully extended and logically anchored.',
    conceptId: 'Paragraf tubuh Task 2 gagal meraih Band 7 ketika argumen hanya didaftar secara dangkal. Kerangka PEEL (Point, Explanation, Evidence, Link) menjamin setiap ide pokok diperluas secara mendalam dengan penalaran sebab-akibat dan bukti konkret.',
    formulaEn: 'Sentence 1 (P): Topic Sentence | Sentence 2-3 (E): Causal Explanation (Why / How) | Sentence 4 (E): Concrete Real-World Evidence | Sentence 5 (L): Direct Synthesis back to Thesis',
    formulaId: 'Kalimat 1 (P): Kalimat Topik Tunggal | Kalimat 2-3 (E): Penjelasan Kausalitas (Mengapa / Bagaimana) | Kalimat 4 (E): Bukti Empiris Nyata | Kalimat 5 (L): Tautan Sintesis Kembali ke Tesis Utama',
    rulesId: [
      'Point (P): Hanya satu gagasan pokok per paragraf! Jangan pernah memasukkan 3 argumen berbeda dalam 1 paragraf tubuh.',
      'Explanation (E): Gunakan kata penghubung kausalitas (This is attributable to the fact that..., When this transpires...). Uraikan konsekuensi bertahap.',
      'Evidence (E): Sajikan studi kasus, statistik, atau fenomena nyata global (hindari contoh personal fiktif seperti "My uncle once told me").',
      'Link (L): Tutup paragraf dengan menegaskan bagaimana bukti tersebut membuktikan sudut pandang Anda terhadap topik esai.'
    ],
    badExample: {
      en: 'Firstly, public transport is good. It reduces pollution and people can save money. Also buses are fast. Therefore cities need buses.',
      id: 'Pertama, transportasi umum itu bagus. Hal itu mengurangi polusi dan orang bisa hemat uang. Juga bus itu cepat. Oleh karena itu kota butuh bus. (Band 5.5 - Dangkal, deretan klausa tanpa elaborasi)',
      reasonId: 'Memuat terlalu banyak poin tanpa elaborasi mendalam dan penjelasan logis.'
    },
    goodExample: {
      en: 'The foremost advantage of expanding urban rail infrastructure is the substantial mitigation of vehicular gridlock. When commuters are provided with punctual and subsidized transit alternatives, private automobile dependency declines precipitously. In metropolitan Tokyo, for instance, extensive commuter rail networks accommodate nearly eighty percent of daily journeys, yielding notably lower carbon concentrations than comparable automobile-centric capitals. Hence, public transit modernization serves as an indispensable prerequisite for sustainable metropolitan expansion.',
      id: 'Keunggulan utama perluasan infrastruktur kereta perkotaan adalah berkurangnya kemacetan kendaraan bermotor secara substansial. Ketika para komuter diberikan alternatif transit yang tepat waktu dan bersubsidi, ketergantungan pada mobil pribadi menurun drastis. Di metropolitan Tokyo, sebagai contoh, jaringan kereta komuter yang luas melayani hampir delapan puluh persen perjalanan harian, menghasilkan konsentrasi karbon yang jauh lebih rendah daripada ibu kota lain yang berpusat pada mobil. Oleh karena itu, modernisasi angkutan umum berfungsi sebagai prasyarat mutlak bagi ekspansi metropolitan yang berkelanjutan. (Band 8.5)',
      reasonId: 'Menjalankan formula PEEL secara disiplin: Topik -> Penjelasan kausal -> Bukti empiris Tokyo -> Tautan kembali ke tesis.'
    },
    practicePrompt: {
      en: 'Draft a Point (P) and Explanation (E) for the argument that space exploration funding is justified.',
      id: 'Susunlah Point (P) dan Explanation (E) untuk argumen bahwa pendanaan eksplorasi ruang angkasa dapat dibenarkan.',
      modelAnswerEn: 'Investing in aerospace exploration frequently catalyzes groundbreaking technological innovations that directly benefit terrestrial life. The stringent engineering demands of extraterrestrial missions necessitate breakthroughs in materials science and renewable energy, which are subsequently commercialized for civilian healthcare and communications infrastructure.',
      modelAnswerId: 'Investasi dalam eksplorasi kedirgantaraan kerap mengkatalisis inovasi teknologi revolusioner yang bermanfaat langsung bagi kehidupan di bumi. Tuntutan teknik yang sangat ketat dari misi luar angkasa menuntut terobosan dalam sains material dan energi terbarukan, yang kemudian dikomersialkan untuk layanan kesehatan masyarakat dan infrastruktur telekomunikasi.'
    }
  },
  {
    id: 'cohesion_and_referencing',
    title: 'Referencing Chains & Cohesive Devices',
    titleId: 'Rantai Referensi & Kohesi Alami',
    badge: 'Alur Logika & Kohesi',
    icon: '🔗',
    conceptEn: 'Band 6 essays overuse robotic sentence-initial linkers ("Firstly, Secondly, Furthermore, In conclusion"). Band 8+ writers achieve effortless flow using anaphoric/cataphoric referencing, demonstrative encapsulation, and lexical cohesion.',
    conceptId: 'Esai Band 6 terlalu sering mengandalkan kata sambung mekanis di awal kalimat ("Firstly, Secondly, Furthermore, In conclusion"). Penulis Band 8+ menciptakan alur alami yang mulus melalui rantai kata ganti rujukan (referencing), enkapsulasi demonstrativa (this phenomenon, such developments), dan variasi leksikal.',
    formulaEn: '[Sentence 1 introducing concept] -> [Sentence 2: "This / These + Summary Noun" + continues the argument]',
    formulaId: '[Kalimat 1 memperkenalkan konsep] -> [Kalimat 2: "This / These + Kata Benda Ringkas" + melanjutkan penalaran]',
    rulesId: [
      'Gunakan Demonstrative Encapsulation: Alih-alih mengulang seluruh kalimat sebelumnya, gunakan frasa: "This systemic disparity...", "Such regulatory interventions...", "These catastrophic ramifications...".',
      'Hindari kata ganti telanjang (Naked "This"): Selalu pasangkan kata "This" dengan kata benda penjelas ("This trend", bukan sekadar "This causes...").',
      'Variasikan posisi kata transisi: Masukkan kata penghubung ke tengah kalimat di antara koma (contoh: "The economic viability, however, remains questionable").'
    ],
    badExample: {
      en: 'Global temperatures are rising. Firstly, it melts glaciers. Secondly, it causes sea level rise. Furthermore, it floods coastal cities.',
      id: 'Suhu global meningkat. Pertama, itu mencairkan gletser. Kedua, itu menyebabkan kenaikan permukaan laut. Lebih lanjut, itu membanjiri kota pantai. (Band 5.5 - Mekanis & repetitive "it")',
      reasonId: 'Pengulangan kata ganti telanjang "it" yang membingungkan dan konektor mekanis beruntun.'
    },
    goodExample: {
      en: 'Anthropogenic emissions continue to accelerate global thermal averages. This planetary warming inevitable triggers polar glacial retreats, which in turn precipitates catastrophic sea-level elevation. Coastal metropolises, consequently, confront unprecedented existential flooding risks.',
      id: 'Emisi antropogenik terus mempercepat peningkatan rata-rata suhu global. Pemanasan bumi ini tak terelakkan memicu menyusutnya gletser kutub, yang pada gilirannya mempercepat kenaikan permukaan laut yang dahsyat. Akibatnya, kota-kota metropolitan pesisir menghadapi risiko banjir eksistensial yang belum pernah terjadi sebelumnya. (Band 8.5)',
      reasonId: 'Menggunakan demonstrative encapsulation ("This planetary warming"), klausa relatif bertingkat ("which in turn..."), dan konjungsi terselip (", consequently,").'
    },
    practicePrompt: {
      en: 'Connect these sentences using a summary noun phrase: "Many young people leave rural towns for employment in capitals. This causes agricultural labor shortages."',
      id: 'Hubungkan kalimat ini menggunakan frasa kata benda perangkum: "Banyak pemuda meninggalkan desa untuk bekerja di ibu kota. Hal ini menyebabkan kelangkaan tenaga kerja pertanian."',
      modelAnswerEn: 'Many young adults migrate from rural provinces in search of lucrative metropolitan careers. This rural-to-urban demographic exodus, however, has triggered acute labor deficits across the agricultural sector.',
      modelAnswerId: 'Banyak orang dewasa muda bermigrasi dari provinsi pedesaan untuk mencari karier metropolitan yang menguntungkan. Eksodus demografis dari desa ke kota ini, bagaimanapun, telah memicu defisit tenaga kerja yang akut di sektor pertanian.'
    }
  },
  {
    id: 'formal_academic_register',
    title: 'Academic Register: Eradicating Informal Idioms & Colloquialisms',
    titleId: 'Register Akademik: Menghilangkan Ungkapan Informal',
    badge: 'Gaya Bahasa Formal',
    icon: '🎓',
    conceptEn: 'IELTS Writing is a strictly formal academic exam. Informal conversational expressions, spoken idioms, emotional rhetoric, and contractions (don\'t, can\'t) will severely degrade your Lexical Resource and Task Achievement scores.',
    conceptId: 'IELTS Writing adalah ujian akademis formal yang ketat. Ungkapan percakapan santai, idiom lisan, retorika emosional, dan singkatan (don\'t, can\'t) akan secara drastis menjatuhkan nilai Lexical Resource dan Task Achievement Anda.',
    formulaEn: 'Informal / Spoken Phrase -> Formal Academic Equivalent',
    formulaId: 'Frasa Santai Percakapan -> Padanan Baku Akademis',
    rulesId: [
      'Dilarang menggunakan singkatan kontraksi: Gunakan "do not", "cannot", "will not" (BUKAN "don\'t", "can\'t", "won\'t").',
      'Hindari idiom percakapan santai: Jangan gunakan "a double-edged sword", "at the end of the day", "every coin has two sides". Ungkapan ini dianggap klise oleh penguji Cambridge.',
      'Hindari kata kerja frasa (phrasal verbs) informal: Ganti "look into" dengan "investigate"; ganti "bring about" dengan "precipitate" atau "induce"; ganti "get rid of" dengan "eradicate".',
      'Hindari pernyataan absolut tanpa data: Jangan katakan "All children are addicted to smartphones". Gunakan kata pelindung/hedging (misal: "A substantial proportion of adolescents tend to...").'
    ],
    badExample: {
      en: 'In my view, you can\'t just sweep this problem under the rug because it\'s gonna bite us back big time down the road.',
      id: 'Menurut pandanganku, kamu tidak bisa begitu saja menyembunyikan masalah ini di bawah karpet karena ini akan menggigit kita balik di masa depan. (Band 5.0 - Sangat santai seperti obrolan kedai kopi)',
      reasonId: 'Memuat kontraksi ("can\'t", "it\'s", "gonna"), idiom percakapan klise, dan kata ganti orang kedua informal "you".'
    },
    goodExample: {
      en: 'Policymakers must not neglect these underlying fiscal deficits, as unresolved socioeconomic vulnerabilities will inevitably compound future systemic crises.',
      id: 'Para pembuat kebijakan tidak boleh mengabaikan defisit fiskal mendasar ini, karena kerentanan sosial-ekonomi yang belum terselesaikan pasti akan memperparah krisis sistemik di masa mendatang. (Band 8.5)',
      reasonId: 'Menggunakan register formal tanpa kontraksi, kosakata presisi, dan argumentasi objektif tanpa idiom klise.'
    },
    practicePrompt: {
      en: 'Elevate this informal sentence: "Kids get hooked on video games and lots of parents don\'t know what to do."',
      id: 'Tingkatkan kalimat informal ini ke gaya akademis: "Kids get hooked on video games and lots of parents don\'t know what to do."',
      modelAnswerEn: 'A significant proportion of adolescents exhibit compulsive video gaming behaviors, presenting profound behavioral management challenges for guardians.',
      modelAnswerId: 'Sebagian besar remaja menunjukkan perilaku bermain permainan video secara kompulsif, menghadirkan tantangan pengelolaan perilaku yang mendalam bagi para orang tua.'
    }
  }
];

// ============================================================================
// 3. ADVANCED WRITING THEORY (Sintaksis Mahir Band 8.5+)
// ============================================================================
export const ADVANCED_WRITING_THEORY = [
  {
    id: 'nominalisation',
    title: 'Nominalisation (Pembendaan Akademik & Kepadatan Leksikal)',
    titleId: 'Nominalisasi: Meningkatkan Kepadatan Informasi',
    badge: 'Band 8.0+ Lexical Density',
    icon: '💎',
    conceptEn: 'Transforming verbs and adjectives into abstract academic nouns to condense meaning, eradicate colloquial narratives, and shift the thematic focus from human actors to empirical phenomena.',
    conceptId: 'Mengubah kata kerja dan kata sifat menjadi nomina abstrak akademik untuk memadatkan makna, melenyapkan gaya bercerita santai, dan menggeser fokus dari pelaku perorangan ke fenomena empiris yang objektif.',
    formulaEn: '[Actor + Verbed + Adverbially] -> [Adjective + Nominalised Noun + Precipitated...]',
    formulaId: '[Pelaku + Melakukan Kerja + Keterangan] -> [Adjektiva + Kata Benda Hasil Nominalisasi + Memunculkan Konsekuensi...]',
    rulesId: [
      'Ganti konstruksi "because people do X" menjadi frasa nomina yang berperan sebagai subjek utama kalimat.',
      'Manfaatkan akhiran umum pembendaan: -tion (eradiate -> eradication), -ment (develop -> development), -ance (sustain -> sustenance), -ity (vulnerable -> vulnerability).',
      'Hindari nominalisasi berlebih yang bertele-tele (nominalization overload); pastikan kalimat tetap mempertahankan kejelasan makna (clarity).'
    ],
    badExample: {
      en: 'Because people are moving into large cities very quickly, the prices of houses are going up and hospitals are overcrowded.',
      id: 'Karena orang-orang pindah ke kota-kota besar dengan sangat cepat, harga rumah menjadi naik dan rumah sakit penuh sesak. (Band 6.0 - Bertele-tele & naratif)',
      reasonId: 'Menggunakan konstruksi verba bertumpuk yang mencerminkan gaya bahasa lisan sehari-hari.'
    },
    goodExample: {
      en: 'Rapid demographic urbanization inevitably accelerates housing unaffordability and places unsustainable strain on regional healthcare facilities.',
      id: 'Urbanisasi demografis yang pesat tak terelakkan mempercepat ketidakterjangkauan harga perumahan dan memberikan beban yang tak berkelanjutan pada fasilitas kesehatan daerah. (Band 8.5)',
      reasonId: 'Memanfaatkan nominalisasi "urbanization", "unaffordability", dan "strain" yang padat informasi dan bernada akademis tinggi.'
    },
    practicePrompt: {
      en: 'Nominalise this idea: "When factories pollute the rivers, people get sick and fish die."',
      id: 'Nominalisasikan ide ini: "When factories pollute the rivers, people get sick and fish die."',
      modelAnswerEn: 'Industrial effluent discharge into river systems precipitates widespread waterborne illnesses and widespread aquatic mortality.',
      modelAnswerId: 'Pembuangan limbah industri cair ke sistem sungai memicu meluasnya penyakit yang ditularkan melalui air dan kematian massal biota perairan.'
    }
  },
  {
    id: 'negative_inversion',
    title: 'Negative & Limiting Inversion (Pembalikan Klausa Berpenekanan)',
    titleId: 'Inversi Negatif: Penekanan Tajam & Berwibawa',
    badge: 'Band 8.5 Syntactic Variety',
    icon: '⚡',
    conceptEn: 'Placing negative, limiting, or conditional adverbs at the front of a sentence followed by auxiliary inversion (Auxiliary + Subject + Main Verb) to create dramatic emphasis and stylistic authority.',
    conceptId: 'Meletakkan kata keterangan pembatas atau negatif di posisi paling depan kalimat yang diikuti pembalikan kata kerja bantu (Kata Bantu + Subjek + Kata Kerja Utama) untuk menciptakan penekanan tajam dan wibawa akademis tingkat tinggi.',
    formulaEn: '[Negative / Limiting Adverbial Phrase] + [Auxiliary Verb (should/do/did/have/is)] + [Subject] + [Main Verb]...',
    formulaId: '[Frasa Negatif / Pembatas di Awal] + [Kata Kerja Bantu (should/do/have/is)] + [Subjek] + [Kata Kerja Utama]...',
    rulesId: [
      'Frasa pemicu inversi paling elegan untuk esai: "Under no circumstances...", "Not only [aux]... but [also]...", "Seldom do...", "Rarely have...", "Only by [gerund] can [subject]...".',
      'Ingat rumus pembalikan: Frasa Depan + Kata Bantu + Subjek + Kata Kerja. Jangan biarkan urutan kata tetap normal!',
      'Gunakan maksimal 1 kali per esai agar memberikan dampak retoris yang kuat dan tidak terkesan pamer tata bahasa secara berlebihan.'
    ],
    badExample: {
      en: 'Governments should never sacrifice environmental sustainability for immediate corporate profit under any circumstances.',
      id: 'Pemerintah tidak boleh mengorbankan keberlanjutan lingkungan demi keuntungan korporat jangka pendek dalam kondisi apa pun. (Band 6.5 - Urutan standar biasa)',
      reasonId: 'Kalimat benar secara tata bahasa, namun tidak memiliki variasi sintaksis tingkat mahir (GRA Band 8+).'
    },
    goodExample: {
      en: 'Under no circumstances should governing authorities sacrifice ecological sustainability for fleeting commercial gain.',
      id: 'Dalam kondisi apa pun pihak berwenang tidak selayaknya mengorbankan keberlanjutan ekologis demi keuntungan komersial yang sesaat. (Band 8.5 - Sangat berwibawa)',
      reasonId: 'Membalikkan "should" sebelum subjek "governing authorities" berkat pemicu "Under no circumstances".'
    },
    practicePrompt: {
      en: 'Convert this sentence into negative inversion using "Only by": "Governments can restore public trust if they implement total budgetary transparency."',
      id: 'Ubah kalimat ini menjadi inversi menggunakan "Only by": "Governments can restore public trust if they implement total budgetary transparency."',
      modelAnswerEn: 'Only by enacting comprehensive budgetary transparency can state administrations successfully restore eroded public trust.',
      modelAnswerId: 'Hanya dengan memberlakukan transparansi anggaran yang komprehensif barulah pemerintah negara dapat berhasil memulihkan kepercayaan publik yang terkikis.'
    }
  },
  {
    id: 'cleft_sentences',
    title: 'Cleft Sentences (Kalimat Terbelah Penegas Fokus)',
    titleId: 'Kalimat Cleft: Menyorot Faktor Kunci Argumen',
    badge: 'Band 8.0 Rhetorical Focus',
    icon: '🎯',
    conceptEn: 'Splitting a simple proposition into two clauses using "It is/was... that" (It-cleft) or "What... is" (Wh-cleft) to shine a spotlight on the decisive causative factor of your argument.',
    conceptId: 'Membelah kalimat tunggal menjadi dua klausa menggunakan pola "It is/was... that" (It-cleft) atau "What... is" (Wh-cleft) untuk menyorot secara tajam faktor penyebab utama dalam argumen Anda.',
    formulaEn: 'It-Cleft: It is/was + [Focal Element / Key Factor] + that/who + [Subsequent Consequence] | Wh-Cleft: What + [Subject + Verb] + is/was + [Core Solution/Point]',
    formulaId: 'It-Cleft: It is/was + [Elemen Kunci yang Disorot] + that/who + [Kelanjutan Kalimat] | Wh-Cleft: What + [Subjek + Tindakan] + is/was + [Solusi / Poin Inti]',
    rulesId: [
      'Gunakan It-Cleft untuk membantah anggapan umum atau mempertegas penyebab sejati dari suatu krisis.',
      'Gunakan Wh-Cleft pada kalimat rekomendasi solusi di akhir paragraf atau pada kesimpulan esai.',
      'Pastikan kata kerja "is/was" selaras dengan waktu pembicaraan (gunakan "is" untuk kebenaran umum).'
    ],
    badExample: {
      en: 'The poor quality of public schools in rural towns causes education inequality.',
      id: 'Kualitas sekolah negeri yang buruk di kota kecil pedesaan menyebabkan ketimpangan pendidikan. (Band 6.0 - Datar)',
      reasonId: 'Struktur S-V-O standar yang tidak memberikan penekanan khusus pada akar persoalan.'
    },
    goodExample: {
      en: 'It is the systemic underfunding of regional educational institutions that primarily perpetuates entrenched socioeconomic inequality.',
      id: 'Kurangnya pendanaan sistemik terhadap institusi pendidikan daerahlah yang terutama melanggengkan ketimpangan sosial-ekonomi yang telah mengakar. (Band 8.5)',
      reasonId: 'Struktur It-cleft secara eksplisit menyorot "systemic underfunding" sebagai biang keladi utama persoalan.'
    },
    practicePrompt: {
      en: 'Create a Wh-cleft sentence emphasizing that developing renewable energy requires international collaboration.',
      id: 'Buat kalimat Wh-cleft yang menegaskan bahwa pengembangan energi terbarukan memerlukan kolaborasi internasional.',
      modelAnswerEn: 'What the transition toward global carbon neutrality urgently requires is coordinated multilateral investment rather than piecemeal national policies.',
      modelAnswerId: 'Apa yang secara mendesak dibutuhkan oleh transisi menuju netralitas karbon global adalah investasi multilateral yang terkoordinasi, alih-alih kebijakan nasional yang terpecah-pecah.'
    }
  },
  {
    id: 'participle_clauses',
    title: 'Participle Clauses & Consequential Participles',
    titleId: 'Klausa Partisipial & Pemadat Akibat Logis',
    badge: 'Band 8.0 Syntactic Density',
    icon: '🌊',
    conceptEn: 'Condensing relative and adverbial clauses using present (-ing) or past (-ed) participles. The consequential participle (", thereby / thus -ing") is exceptionally potent for presenting cause-and-effect outcomes seamlessly.',
    conceptId: 'Memadatkan anak kalimat relatif dan keterangan menggunakan partisipel aktif (-ing) atau pasif (-ed). Partisipel konsekuensi (", thereby / thus [verb-ing]") sangat ampuh untuk menyajikan alur sebab-akibat secara mulus tanpa pengulangan konjungsi.',
    formulaEn: 'Pattern A: [Verb-ing / Verb-ed modifier phrase], [Main Clause S + V] | Pattern B (Consequential): [Main Clause], thereby/thus + [Verb-ing]...',
    formulaId: 'Pola A: [Frasa Partisipel -ing / -ed], [Induk Kalimat S + V] | Pola B (Konsekuensi): [Induk Kalimat], thereby/thus + [Verb-ing]...',
    rulesId: [
      'Gunakan pola ", thereby [verb-ing]..." di pengujung kalimat untuk menunjukkan hasil logis tak terelakkan dari tindakan sebelumnya.',
      'Hindari Bahaya Dangling Participle: Subjek dari frasa partisipel di depan koma HARUS SAMA dengan subjek yang berada tepat setelah koma.',
      'Manfaatkan past participle (-ed) untuk menyederhanakan kalimat pasif yang panjang.'
    ],
    badExample: {
      en: 'Companies use automated robots in factories, and this reduces their production costs, and so they can lower their retail prices.',
      id: 'Perusahaan memakai robot otomatis di pabrik, dan ini mengurangi biaya produksi mereka, dan sehingga mereka bisa menurunkan harga eceran. (Band 5.5 - Rantai "and" berulang)',
      reasonId: 'Menggunakan rantai konjungsi koordinatif berulang yang membosankan dan tidak efisien.'
    },
    goodExample: {
      en: 'Modern manufacturing plants are increasingly deploying automated robotics, thereby dramatically curtailing operational overhead and enabling substantial consumer price reductions.',
      id: 'Pabrik-pabrik manufaktur modern semakin banyak mengerahkan robotika terotomasi, sehingga secara dramatis memangkas biaya operasional dan memungkinkan penurunan harga konsumen yang substansial. (Band 8.5)',
      reasonId: 'Memanfaatkan consequential participle ", thereby dramatically curtailing..." yang memadatkan alur sebab-akibat dengan elegan.'
    },
    practicePrompt: {
      en: 'Combine using ", thereby -ing": "Governments construct extensive cycle superhighways. This encourages citizens to commute without cars."',
      id: 'Gabungkan menggunakan ", thereby -ing": "Pemerintah membangun jalur khusus sepeda yang luas. Hal ini mendorong warga untuk berkomuter tanpa mobil."',
      modelAnswerEn: 'Municipal authorities have constructed extensive segregated cycle networks, thereby encouraging urban residents to abandon private automobiles in favor of active commuting.',
      modelAnswerId: 'Otoritas kota telah membangun jaringan jalur sepeda terpisah yang luas, sehingga mendorong warga perkotaan untuk meninggalkan mobil pribadi demi komutasi aktif bersepeda.'
    }
  },
  {
    id: 'hedging_cautious_language',
    title: 'Hedging & Academic Cautiousness',
    titleId: 'Bahasa Kehati-hatian Akademik (Hedging)',
    badge: 'Register Ilmiah Band 8.5+',
    icon: '🛡️',
    conceptEn: 'Academic writing avoids absolute, dogmatic claims. Band 6 candidates make reckless over-generalizations ("Social media destroys all human relationships"). Band 8+ writers use hedging devices (modal verbs, tentative adjectives, cautious adverbs) to present balanced, defensible assertions.',
    conceptId: 'Penulisan akademis menghindari klaim dogmatis yang serba mutlak. Kandidat Band 6 kerap membuat generalisasi gegabah ("Media sosial menghancurkan semua hubungan manusia"). Penulis Band 8+ menggunakan teknik hedging (kata kerja modal, kata keterangan tentatif) untuk menyajikan argumen yang terukur dan berbobot.',
    formulaEn: '[Tentative Qualifier / Modal] + [Core Proposition] (e.g., "tends to", "arguably", "plausibly", "under certain conditions")',
    formulaId: '[Kualifikasi Tentatif / Modalitas] + [Pernyataan Inti] (misal: "tends to", "arguably", "in many instances")',
    rulesId: [
      'Ganti kata mutlak "always", "never", "everybody", "proves" dengan "tends to", "frequently", "a substantial proportion", "indicates".',
      'Gunakan kata kerja tentatif: "suggests", "implies", "appears to", "is likely to".',
      'Gunakan modalitas berlapis: "could potentially precipitate", "may partially stem from".'
    ],
    badExample: {
      en: 'Artificial intelligence will definitely steal all jobs and cause massive global poverty.',
      id: 'Kecerdasan buatan pasti akan mencuri semua pekerjaan dan menyebabkan kemiskinan global massal. (Band 5.5 - Klaim mutlak tanpa dasar ilmiah)',
      reasonId: 'Generalisasi berlebihan yang tidak objektif dan tidak bernuansa akademis.'
    },
    goodExample: {
      en: 'The proliferation of generative artificial intelligence is widely anticipated to disrupt routine cognitive professions, potentially exacerbating income polarization unless robust retraining frameworks are instituted.',
      id: 'Proliferasi kecerdasan buatan generatif secara luas diantisipasi akan mengganggu profesi kognitif rutin, yang berpotensi memperparah polarisasi pendapatan kecuali jika kerangka pelatihan ulang yang kuat diberlakukan. (Band 8.5)',
      reasonId: 'Menggunakan frasa hedging yang sangat matang: "widely anticipated", "potentially exacerbating", "unless...".'
    },
    practicePrompt: {
      en: 'Apply academic hedging to this absolute statement: "Imprisonment never rehabilitates criminals."',
      id: 'Terapkan teknik hedging akademis pada pernyataan mutlak ini: "Imprisonment never rehabilitates criminals."',
      modelAnswerEn: 'Conventional custodial sentences seldom achieve comprehensive psychological rehabilitation, with empirical evidence indicating that punitive incarceration frequently reinforces recidivism.',
      modelAnswerId: 'Hukuman penjara konvensional jarang mencapai rehabilitasi psikologis yang komprehensif, dengan bukti empiris yang menunjukkan bahwa pemenjaraan punitif kerap kali justru memperkuat residivisme.'
    }
  }
];

// Alias for backwards compatibility
export const ADVANCED_GRAMMAR_MODULES = ADVANCED_WRITING_THEORY;

// ============================================================================
// 4. TASK 1 BLUEPRINT & ARSITEKTUR STRUKTUR (Academic & General Training)
// ============================================================================
export const TASK1_WRITING_GUIDE = {
  title: 'Task 1 Master Blueprint: Academic Report & General Training Letter',
  titleId: 'Panduan Utama Task 1: Laporan Data Akademik & Surat General Training',
  academicFormula: [
    {
      stepNumber: 1,
      name: 'Paragraph 1: Introduction (Paraphrase the Prompt)',
      nameId: 'Paragraf 1: Pendahuluan (Parafrasa Soal)',
      purposeEn: 'Accurately rewrite the prompt in one single complex sentence, modifying the action verb, the unit of measurement, the time frame, and the geographic context.',
      purposeId: 'Tulis ulang instruksi soal secara presisi dalam 1 kalimat kompleks, variasikan kata kerja, satuan ukuran, rentang waktu, dan konteks wilayah.',
      templateEn: 'The provided [chart type] delineates / illustrates / depicts the fluctuations in [topic] across [locations] between [start year] and [end year], measured in [unit].',
      templateId: 'Bagan [jenis grafik] yang disajikan mengilustrasikan fluktuasi pada [topik] di seluruh [wilayah] antara [tahun awal] dan [tahun akhir], yang diukur dalam [satuan].',
      keyTips: 'Jangan pernah menyalin kata per kata dari soal! Ganti kata "shows" dengan "delineates", "illustrates", atau "provides comparative data on".'
    },
    {
      stepNumber: 2,
      name: 'Paragraph 2: The Macro Overview (Kunci Emas Band 7+)',
      nameId: 'Paragraf 2: Gambaran Umum Makro (Syarat Mutlak Band 7+)',
      purposeEn: 'Highlight 2-3 prominent overarching trends, the highest/lowest extremes, or overall trajectories WITHOUT mentioning specific numerical data.',
      purposeId: 'Sorot 2-3 tren makro paling dominan, titik tertinggi/terendah, atau pola trajektori menyeluruh TANPA menyebut angka numerik detail.',
      templateEn: 'Overall, it is readily apparent that whilst [Item A] experienced a sustained upward trajectory, [Item B] exhibited a marked downward trend throughout the surveyed timeframe.',
      templateId: 'Secara keseluruhan, terlihat jelas bahwa sementara [Kategori A] mengalami trajektori kenaikan yang konsisten, [Kategori B] menunjukkan tren penurunan yang tajam sepanjang periode yang diteliti.',
      keyTips: 'Tanpa Overview yang jelas, nilai Task Achievement Anda otomatis terkunci maksimal di Band 5.0 oleh penguji Cambridge!'
    },
    {
      stepNumber: 3,
      name: 'Paragraph 3: Detailed Body 1 (Kelompok Data A)',
      nameId: 'Paragraf 3: Paragraf Detail 1 (Pengelompokan Data Utama)',
      purposeEn: 'Group similar categories together logically (e.g., categories with upward trends or high starting values) and cite specific figures, years, and proportions.',
      purposeId: 'Kelompokkan kategori serupa secara logis (misal: kategori yang sama-sama naik atau bermula dari angka tertinggi) dan sebutkan data numerik serta tahun yang relevan.',
      templateEn: 'Commencing with [Category 1], the figure stood at [Number X] in [Year 1], prior to surging dramatically to a zenith of [Number Y] by [Year 2].',
      templateId: 'Dimulai dari [Kategori 1], angkanya berada pada [Angka X] pada [Tahun 1], sebelum melonjak secara dramatis mencapai titik puncaknya sebesar [Angka Y] pada [Tahun 2].',
      keyTips: 'Selalu gunakan bahasa komparasi (higher than, three times as much as, marginally lower than) dan preposisi yang akurat (increased by 20% vs increased to 50%).'
    },
    {
      stepNumber: 4,
      name: 'Paragraph 4: Detailed Body 2 (Kelompok Data B / Kontras)',
      nameId: 'Paragraf 4: Paragraf Detail 2 (Kategori Pembanding & Kontras)',
      purposeEn: 'Examine the remaining categories (e.g., downward trends, fluctuations, or anomalies) and contrast them directly against the findings of Body 1.',
      purposeId: 'Ulas kategori sisanya (misal: tren penurunan, fluktuasi acak, atau anomali data) dan bandingkan secara langsung dengan temuan pada Paragraf Detail 1.',
      templateEn: 'In stark contrast, [Category 2] commenced at [Number A], followed by a steady contraction to conclude the period at a modest [Number B].',
      templateId: 'Sebaliknya, [Kategori 2] berawal pada [Angka A], yang diikuti oleh penyusutan stabil hingga menutup periode pada angka yang moderat sebesar [Angka B].',
      keyTips: 'Jangan pernah memberikan opini pribadi, spekulasi alasan di balik angka, atau paragraf kesimpulan di akhir Task 1. Cukup 4 paragraf ini.'
    }
  ],
  chartTypes: [
    { type: 'Line Graph', focusEn: 'Temporal trends, peaks, troughs, plateaus, fluctuations, sharp surges vs gradual declines.', focusId: 'Tren waktu, titik puncak, titik nadir, masa stagnasi, fluktuasi, lonjakan tajam versus penurunan bertahap.' },
    { type: 'Bar Chart', focusEn: 'Direct comparisons across distinct discrete categories, ranking order, highest vs lowest groups.', focusId: 'Perbandingan langsung antar kategori diskrit yang berbeda, urutan peringkat, kelompok tertinggi versus terendah.' },
    { type: 'Pie Chart', focusEn: 'Proportional distributions, percentages, market shares, dominant vs marginal segments.', focusId: 'Distribusi proporsi, persentase pangsa pasar, segmen dominan versus segmen kecil.' },
    { type: 'Process Diagram', focusEn: 'Sequential chronological phases, raw materials/inputs, conversions, cyclical vs linear steps.', focusId: 'Tahapan kronologis berurutan, bahan baku masukan, proses konversi, siklus alami versus tahapan linear mekanis.' },
    { type: 'Map Comparison', focusEn: 'Urban development, demolition, additions, infrastructural expansions, directional points (northward, eastward).', focusId: 'Pembangunan kota, pembongkaran, penambahan fasilitas, perluasan infrastruktur, dan referensi arah mata angin.' }
  ]
};

// ============================================================================
// 5. TASK 2 BLUEPRINT & ARSITEKTUR ESAI AKADEMIK BAND 8.5+
// ============================================================================
export const TASK2_WRITING_GUIDE = {
  title: 'Task 2 Master Blueprint: The Band 8.5+ Essay Framework',
  titleId: 'Panduan Utama Task 2: Arsitektur Esai Akademik Band 8.5+',
  essayTypes: [
    {
      id: 'opinion',
      type: 'Opinion (Agree / Disagree)',
      typeId: 'Esai Opini (Setuju / Tidak Setuju)',
      promptPatternEn: '"To what extent do you agree or disagree?"',
      promptPatternId: '"Sejauh mana Anda setuju atau tidak setuju dengan pernyataan tersebut?"',
      structureEn: 'Intro (Paraphrase + Thesis with clear stance) -> Body 1 (Strong argument 1) -> Body 2 (Strong argument 2 or concession) -> Conclusion (Restate thesis + synthesis).',
      structureId: 'Pendahuluan (Parafrasa + Tesis dengan posisi tegas) -> Body 1 (Argumen pendukung 1) -> Body 2 (Argumen pendukung 2 atau konsesi) -> Kesimpulan (Penegasan ulang tesis + sintesis).'
    },
    {
      id: 'discussion',
      type: 'Discussion (Discuss Both Views & Give Opinion)',
      typeId: 'Esai Diskusi (Bahas Kedua Sudut Pandang & Beri Opini)',
      promptPatternEn: '"Discuss both views and give your own opinion."',
      promptPatternId: '"Bahas kedua sudut pandang dan berikan pendapat Anda sendiri."',
      structureEn: 'Intro (Introduce both sides + state your position) -> Body 1 (Examine View A objectively) -> Body 2 (Examine View B + why you favor it) -> Conclusion (Weigh both sides and solidify verdict).',
      structureId: 'Pendahuluan (Perkenalkan kedua pihak + sebutkan posisi Anda) -> Body 1 (Bahas Pandangan A secara objektif) -> Body 2 (Bahas Pandangan B + alasan Anda memihaknya) -> Kesimpulan (Timbang kedua sisi & tegaskan keputusan final).'
    },
    {
      id: 'problem_solution',
      type: 'Causes & Solutions / Problems & Solutions',
      typeId: 'Penyebab & Solusi / Masalah & Solusi',
      promptPatternEn: '"What are the primary causes, and what measures can be taken to tackle this issue?"',
      promptPatternId: '"Apa saja faktor penyebab utama, dan tindakan apa yang dapat diambil untuk menanggulangi masalah ini?"',
      structureEn: 'Intro (Paraphrase context + outline causes/solutions) -> Body 1 (2 Root causes analyzed) -> Body 2 (2 Corresponding viable solutions) -> Conclusion (Summary of urgency and impact).',
      structureId: 'Pendahuluan (Parafrasa konteks + gambaran umum faktor dan solusi) -> Body 1 (2 Akar penyebab dianalisis tuntas) -> Body 2 (2 Solusi realistis yang sepadan) -> Kesimpulan (Rangkuman urgensi dan dampak jangka panjang).'
    },
    {
      id: 'advantages_disadvantages',
      type: 'Advantages vs Disadvantages / Outweigh Question',
      typeId: 'Kelebihan vs Kekurangan (Apakah Kelebihan Lebih Besar?)',
      promptPatternEn: '"Do the advantages of this trend outweigh the disadvantages?"',
      promptPatternId: '"Apakah kelebihan dari tren ini melampaui kerugiannya?"',
      structureEn: 'Intro (Paraphrase + unequivocal thesis that benefits exceed drawbacks) -> Body 1 (Acknowledge real drawbacks) -> Body 2 (Extensively explain why benefits are more consequential) -> Conclusion (Final synthesis).',
      structureId: 'Pendahuluan (Parafrasa + tesis tegas bahwa manfaat melampaui kerugian) -> Body 1 (Akui kerugian nyata) -> Body 2 (Ulas mendalam mengapa manfaat jauh lebih berdampak) -> Kesimpulan (Sintesis penutup).'
    },
    {
      id: 'double_question',
      type: 'Two-Part Question / Direct Questions',
      typeId: 'Dua Pertanyaan Langsung',
      promptPatternEn: '"Why is this the case? Is this a positive or negative development?"',
      promptPatternId: '"Mengapa hal ini terjadi? Apakah ini merupakan perkembangan yang positif atau negatif?"',
      structureEn: 'Intro (Paraphrase + answer Q1 and Q2 directly) -> Body 1 (Direct full answer to Q1) -> Body 2 (Direct full answer to Q2) -> Conclusion (Summarize both answers into cohesive statement).',
      structureId: 'Pendahuluan (Parafrasa + jawab langsung Q1 dan Q2) -> Body 1 (Ulasan mendalam jawaban Q1) -> Body 2 (Ulasan mendalam jawaban Q2) -> Kesimpulan (Rangkum kedua jawaban menjadi simpulan terpadu).'
    }
  ],
  peelFramework: {
    title: 'The PEEL Paragraph Architecture (Formula Paragraf Tubuh Band 8+)',
    titleId: 'Arsitektur Paragraf PEEL (Kunci Paragraf Kohesif)',
    steps: [
      {
        letter: 'P',
        name: 'Point (Topik Utama)',
        descEn: 'A clear, single topic sentence stating the primary argument of the paragraph.',
        descId: 'Satu kalimat topik yang tegas dan jelas memuat ide pokok paragraf.',
        exampleEn: 'The primary impetus behind runaway urban sprawl is the escalating cost of inner-city accommodation.',
        exampleId: 'Pendorong utama di balik meluasnya pemukiman pinggiran kota adalah melonjaknya biaya hunian di pusat kota.'
      },
      {
        letter: 'E',
        name: 'Explanation (Penjelasan Logis)',
        descEn: 'Elaborate on why or how this phenomenon occurs with logical causality.',
        descId: 'Urai secara mendalam mengapa atau bagaimana fenomena tersebut terjadi melalui alur sebab-akibat yang runtut.',
        exampleEn: 'Because metropolitan real estate markets are increasingly driven by speculative investment, average working families find themselves economically priced out of central districts.',
        exampleId: 'Karena pasar properti metropolitan kian dipacu oleh investasi spekulatif, keluarga pekerja biasa mendapati diri mereka terlempar keluar dari distrik pusat kota akibat harga yang tak terjangkau.'
      },
      {
        letter: 'E',
        name: 'Evidence / Example (Bukti Nyata)',
        descEn: 'Provide concrete empirical evidence, institutional data, or recognizable case studies.',
        descId: 'Sajikan bukti empiris konkret, data institusional, atau studi kasus nyata yang dapat dipertanggungjawabkan.',
        exampleEn: 'In cities such as London and Sydney, over sixty percent of young professionals now commute upwards of two hours daily from outer commuter belts.',
        exampleId: 'Di kota-kota seperti London dan Sydney, lebih dari enam puluh persen kaum profesional muda kini menempuh perjalanan komuter lebih dari dua jam setiap hari dari daerah pinggiran.'
      },
      {
        letter: 'L',
        name: 'Link (Kaitkan Kembali ke Tesis)',
        descEn: 'Conclude the paragraph by tying the evidence directly back to the essay prompt or central thesis.',
        descId: 'Tutup paragraf dengan menautkan kembali bukti tersebut secara langsung ke pokok pertanyaan esai atau tesis awal.',
        exampleEn: 'Consequently, this spatial dislocation underscores the urgent imperative for government-mandated affordable housing quotas.',
        exampleId: 'Akibatnya, dislokasi tempat tinggal ini menegaskan kembali urgensi penerapan kuota perumahan terjangkau oleh pemerintah.'
      }
    ]
  }
};

// ============================================================================
// 6. 4 BAND DESCRIPTORS CAMBRIDGE ASSESSMENT
// ============================================================================
export const BAND_DESCRIPTORS_LITERACY = [
  {
    id: 'tr',
    title: 'Task Achievement / Task Response (TR / TA)',
    titleId: 'Pencapaian Tugas & Jawaban Menyeluruh',
    weight: '25% dari Total Skor Writing',
    icon: '🎯',
    summaryEn: 'How fully, accurately, and relevantly your response answers all parts of the question prompt.',
    summaryId: 'Seberapa lengkap, akurat, dan relevan tulisan Anda menjawab seluruh bagian dari instruksi soal.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Addresses the task only partially; main ideas are limited, repetitive, or insufficiently developed; position may be unclear or inconsistent.',
        characteristicsId: 'Hanya menjawab sebagian instruksi; ide pokok terbatas, berulang, atau kurang dikembangkan; posisi/pendapat penulis mungkin tidak jelas atau inkonsisten.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Addresses all parts of the task; presents a clear position throughout; extends and supports main ideas, though there may be slight over-generalization.',
        characteristicsId: 'Menjawab seluruh bagian tugas; menyajikan sudut pandang yang konsisten; memperluas dan mendukung ide utama, meski sesekali ada generalisasi berlebih.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Fully satisfies all requirements of the task with a well-developed, highly nuanced response; relevant, fully extended, and sharply focused supporting ideas throughout.',
        characteristicsId: 'Memenuhi seluruh tuntutan tugas secara tuntas dengan argumen matang dan bernuansa; ide pendukung relevan, terelaborasi secara mendalam, dan fokus tajam.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Never leave any question prompt unaddressed (if prompt asks for causes AND solutions, both must have balanced paragraphs).',
        ruleId: 'Jangan pernah melewatkan satu pun instruksi soal (jika meminta penyebab DAN solusi, keduanya wajib dibahas secara seimbang).'
      },
      {
        ruleEn: 'In Task 1, an "Overview" identifying 2-3 key macro trends without specific numbers is non-negotiable for Band 7+.',
        ruleId: 'Pada Task 1, paragraf "Overview" yang merangkum 2-3 tren makro utama tanpa menyebut angka detail adalah syarat mutlak untuk meraih Band 7+.'
      },
      {
        ruleEn: 'Every main argument must be supported by an explanation and a concrete real-world example.',
        ruleId: 'Setiap argumen inti wajib didukung oleh penjelasan logis dan contoh nyata yang kredibel.'
      }
    ]
  },
  {
    id: 'cc',
    title: 'Coherence & Cohesion (CC)',
    titleId: 'Keterpaduan & Alur Logika Paragraf',
    weight: '25% dari Total Skor Writing',
    icon: '🔗',
    summaryEn: 'The logical flow of ideas, paragraph progression, and skillful use of cohesive devices and referencing.',
    summaryId: 'Alur logis penyampaian ide, progresivitas antar paragraf, dan kemahiran memakai kata hubung serta kata rujukan.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Mechanically uses cohesive devices (overuse of "Firstly, Secondly, In conclusion"); faulty or unclear referencing; poor paragraphing.',
        characteristicsId: 'Memakai kata hubung secara kaku/mekanis (terlalu banyak "Firstly, Secondly, In conclusion"); kata rujukan sering membingungkan pembaca.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Logically organizes information with clear progression throughout; uses a range of cohesive devices appropriately with some under-/over-use.',
        characteristicsId: 'Mengorganisir informasi secara logis dengan alur jelas; menggunakan variasi kata hubung secara tepat meski sesekali masih terasa sedikit berlebih.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Sequences information and ideas effortlessly; cohesion is seamless and attracts no unwanted attention; skillful paragraphing with central topic per paragraph.',
        characteristicsId: 'Menata ide secara alami dan mulus; kata penghubung menyatu sempurna tanpa terkesan dipaksakan; pembagian paragraf sangat terencana dan berfokus.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Employ anaphoric and cataphoric referencing (this phenomenon, such policies, these subsequent developments) instead of repeating nouns.',
        ruleId: 'Gunakan kata ganti rujukan (this phenomenon, such policies) daripada mengulang kata benda yang sama berulang kali.'
      },
      {
        ruleEn: 'Follow the PEEL method strictly: Point -> Explanation -> Evidence -> Link.',
        ruleId: 'Patuhi metode PEEL secara disiplin: Pokok Pikiran -> Penjelasan -> Bukti Contoh -> Kaitan Logis ke Tesis.'
      }
    ]
  },
  {
    id: 'lr',
    title: 'Lexical Resource (LR)',
    titleId: 'Kekayaan Kosakata & Kolokasi Alami',
    weight: '25% dari Total Skor Writing',
    icon: '📚',
    summaryEn: 'Range, precision, natural collocation, and register of academic vocabulary, with minimal spelling slips.',
    summaryId: 'Variasi, presisi makna, kolokasi alami, dan gaya bahasa formal akademis dengan kesalahan ejaan yang mendekati nol.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Uses an adequate range of vocabulary with basic phrasing; attempts less common words but makes errors in word choice, collocation, or spelling.',
        characteristicsId: 'Kosakata cukup namun mendasar; mencoba kata sulit tetapi sering salah penempatan konteks, salah kolokasi, atau salah eja.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Uses a sufficient range of vocabulary to allow flexibility; uses less common and idiomatic vocabulary with awareness of style and collocation; few spelling errors.',
        characteristicsId: 'Kosakata cukup luas dan fleksibel; mampu memakai kata akademik dan kolokasi dengan kesadaran gaya bahasa formal; sedikit kesalahan eja.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Uses a wide, sophisticated lexical repertoire with natural, subtle collocations; rare minor inaccuracies or slips; demonstrates full lexical flexibility and nuance.',
        characteristicsId: 'Menguasai perbendaharaan kata yang sangat kaya dengan kolokasi halus dan alami; kesalahan hampir tidak ada; fleksibilitas dan presisi makna luar biasa.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Never sacrifice clarity for rare words. Only use uncommon vocabulary when you are 100% certain of its exact grammatical collocation.',
        ruleId: 'Jangan pernah mengorbankan kejelasan demi kata-kata langka. Gunakan kata canggih hanya jika Anda yakin 100% akan pasangan kolokasinya.'
      },
      {
        ruleEn: 'Master topic-specific noun phrases (e.g. "carbon abatement strategies", "pedagogical efficacy", "demographic transition").',
        ruleId: 'Kuasai frasa nomina spesifik topik (misal: "carbon abatement strategies", "pedagogical efficacy", "demographic transition").'
      }
    ]
  },
  {
    id: 'gra',
    title: 'Grammatical Range & Accuracy (GRA)',
    titleId: 'Variasi Struktur & Akurasi Tata Bahasa',
    weight: '25% dari Total Skor Writing',
    icon: '⚖️',
    summaryEn: 'The variety of complex sentence structures deployed and the precision of grammatical mechanics and punctuation.',
    summaryId: 'Keberagaman struktur kalimat kompleks yang digunakan serta ketepatan mekanika tata bahasa dan tanda baca.',
    bandDifferences: [
      {
        band: 'Band 5.0 - 6.0',
        characteristicsEn: 'Uses a mix of simple and compound forms; attempts complex sentences but with frequent grammatical errors; faulty punctuation like comma splices.',
        characteristicsId: 'Menggunakan kalimat sederhana dan majemuk dasar; mencoba kalimat kompleks namun sering salah; tanda baca sering salah penempatan.'
      },
      {
        band: 'Band 7.0',
        characteristicsEn: 'Uses a variety of complex structures; produces frequent error-free sentences; has good control of grammar and punctuation but may make a few errors.',
        characteristicsId: 'Memakai beragam struktur kompleks; menghasilkan mayoritas kalimat bebas kesalahan; penguasaan tata bahasa dan tanda baca baik meski ada sedikit kekeliruan.'
      },
      {
        band: 'Band 8.0 - 9.0',
        characteristicsEn: 'Uses a wide range of structures flexibly (inversions, conditionals, clefts, participles); the vast majority of sentences are error-free; punctuation is faultless.',
        characteristicsId: 'Memakai rentang struktur kalimat yang sangat luas secara luwes (inversi, pengandaian, cleft, partisipial); mayoritas besar kalimat bebas kesalahan; tanda baca sempurna.'
      }
    ],
    goldenRules: [
      {
        ruleEn: 'Aim for a 70/30 balance: 70% complex/compound sentences and 30% crisp, direct simple sentences for rhetorical impact.',
        ruleId: 'Targetkan rasio 70/30: 70% kalimat kompleks/majemuk dan 30% kalimat sederhana yang lugas dan tegas untuk dampak retoris.'
      },
      {
        ruleEn: 'Eliminate comma splices entirely by ensuring every independent clause has an appropriate coordinator or semicolon.',
        ruleId: 'Hilangkan kesalahan comma splice sepenuhnya dengan memastikan setiap klausa mandiri memiliki konjungsi koordinat atau titik koma yang tepat.'
      }
    ]
  }
];
