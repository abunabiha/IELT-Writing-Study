// IELTS General Training Task 1 (Letter Writing) Data & Guide

export const GENERAL_TRAINING_PROMPTS = [
  {
    id: 'gt-formal-1',
    letterType: 'Formal',
    typeBadge: 'Surat Resmi (Formal)',
    recipient: 'Orang yang tidak Anda kenal namanya (e.g. Manajer Hotel, Perusahaan Penerbangan)',
    salutationRule: 'Buka dengan "Dear Sir or Madam," dan tutup dengan "Yours faithfully,"',
    toneRule: 'Sopan, resmi, TIDAK BOLEH menggunakan singkatan (Gunakan "I am" bukan "I\'m", "do not" bukan "don\'t").',
    promptTitle: 'Surat Komplain Layanan Maskapai Penerbangan',
    promptText: `You recently traveled by plane and your luggage was damaged during the flight. Write a letter to the airline manager.
In your letter:
• Give details of your flight (flight number, date, destination)
• Describe what happened to your luggage and the damage caused
• Explain what action you expect the airline to take`,
    promptTranslation: `Anda baru-baru ini bepergian dengan pesawat dan koper bagasi Anda rusak selama penerbangan. Tulis surat kepada manajer maskapai penerbangan.
Dalam surat Anda:
• Berikan rincian penerbangan Anda (nomor penerbangan, tanggal, tujuan)
• Jelaskan apa yang terjadi pada bagasi Anda dan kerusakan yang ditimbulkan
• Jelaskan tindakan apa yang Anda harapkan diambil oleh pihak maskapai`,
    modelAnswerBand8: `Dear Sir or Madam,

I am writing to officially register a complaint regarding severe damage sustained by my luggage during a recent flight with your airline, and to request appropriate financial compensation.

On the 14th of September, I traveled from London Heathrow to Singapore Changi on flight SQ318, occupying seat 24A. Upon my arrival at Terminal 3 baggage reclaim, I discovered that my hard-shell suitcase (Tag No. BA892104) had been severely cracked across the main zipper compartment, resulting in irreparable structural damage and the loss of several personal souvenirs purchased abroad.

Given that this luggage was brand-new prior to departure and safely checked in according to your baggage regulations, the mishandling by the ground operations crew is profoundly disappointing. 

Therefore, I request that your customer service department reimburses the cost of the damaged suitcase, which is valued at £180, in addition to reimbursing £65 for the lost personal items. I have attached the original purchase receipts alongside photographic evidence of the damaged case for your prompt review.

I look forward to hearing from you at your earliest convenience.

Yours faithfully,
Imam Asrowardi`,
    modelAnswerTranslation: `Kepada Bapak atau Ibu yang terhormat,

Saya menulis surat ini untuk secara resmi menyampaikan keluhan mengenai kerusakan parah yang dialami oleh koper bagasi saya dalam penerbangan baru-baru ini bersama maskapai Anda, serta untuk meminta kompensasi finansial yang sesuai.

Pada tanggal 14 September, saya melakukan perjalanan dari London Heathrow menuju Singapore Changi dengan penerbangan SQ318, menempati kursi 24A. Setibanya di pengambilan bagasi Terminal 3, saya mendapati bahwa koper cangkang keras saya (Nomor Label BA892104) telah retak parah di sepanjang kompartemen resleting utama, yang mengakibatkan kerusakan struktural yang tidak dapat diperbaiki serta hilangnya beberapa cinderamata pribadi yang saya beli di luar negeri.

Mengingat koper ini masih baru sebelum keberangkatan dan telah didaftarkan dengan aman sesuai ketentuan bagasi Anda, penanganan ceroboh oleh kru operasional darat sangatlah mengecewakan.

Oleh karena itu, saya meminta bagian layanan pelanggan Anda mengganti biaya koper yang rusak tersebut, yang bernilai £180, di samping mengganti £65 untuk barang-barang pribadi yang hilang. Bersama ini saya lampirkan kuitansi pembelian asli beserta bukti foto koper yang rusak untuk segera Anda tinjau.

Saya menantikan kabar dari Anda secepatnya.

Hormat saya,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Tujuan Surat', content: 'Paragraf 1: Langsung menyebutkan maksud penulisan secara tegas dan sopan ("I am writing to officially register a complaint...").' },
      { step: 'Bullet 1 (Detail Tiket)', content: 'Paragraf 2: Menyebutkan nomor penerbangan (SQ318), tanggal (14 Sept), rute, dan nomor label bagasi.' },
      { step: 'Bullet 2 (Kerusakan)', content: 'Paragraf 2-3: Menjelaskan kerusakan secara spesifik dengan bahasa formal ("sustained irreparable structural damage").' },
      { step: 'Bullet 3 (Tuntutan)', content: 'Paragraf 4: Menyebutkan jumlah ganti rugi yang jelas dan melampirkan kuitansi bukti.' },
      { step: 'Penutup Resmi', content: '"Yours faithfully," karena diawali "Dear Sir or Madam,".' }
    ]
  },
  {
    id: 'gt-semiformal-1',
    letterType: 'Semi-Formal',
    typeBadge: 'Surat Semi-Formal',
    recipient: 'Orang yang Anda kenal namanya namun hubungan profesional (e.g. Pemilik Sewa Rumah / Landlord, Rekan Kerja)',
    salutationRule: 'Buka dengan "Dear Mr. Davies," atau "Dear Mrs. Henderson," dan tutup dengan "Yours sincerely,"',
    toneRule: 'Sopan, hangat namun tetap terstruktur dan profesional.',
    promptTitle: 'Surat Permintaan Perbaikan kepada Pemilik Sewa Rumah (Landlord)',
    promptText: `You are renting an apartment and recently noticed a leak in the kitchen ceiling. Write a letter to your landlord.
In your letter:
• Remind the landlord who you are and where you live
• Explain the problem with the leak and how it affects you
• Suggest a suitable time for a plumber to visit and fix it`,
    promptTranslation: `Anda sedang menyewa sebuah apartemen dan baru-baru ini melihat ada kebocoran di langit-langit dapur. Tulis surat kepada pemilik sewa rumah (landlord) Anda.
Dalam surat Anda:
• Ingatkan pemilik rumah siapa Anda dan di mana Anda tinggal
• Jelaskan masalah kebocoran tersebut dan bagaimana hal itu mempengaruhi Anda
• Sarankan waktu yang tepat bagi tukang ledeng untuk datang dan memperbaikinya`,
    modelAnswerBand8: `Dear Mr. Henderson,

I am writing to notify you of an urgent maintenance issue regarding the apartment I am currently leasing at Flat 4B, Greenwood Court.

Over the past three days, I have observed a persistent water leak emerging from the kitchen ceiling directly above the sink area. The water appears to be seeping through the plasterwork, causing noticeable discoloration and a constant dripping sound. This situation has become increasingly problematic, as I am compelled to place buckets underneath to prevent the timber flooring from warping, and there is a genuine concern regarding electrical wiring in that vicinity.

Could you please arrange for a qualified plumber to inspect and rectify the plumbing issue as soon as possible? I work remotely on Mondays and Thursdays, so I will be available at home throughout those days to grant access to the contractor. Alternatively, you may utilize your spare key provided I receive prior notification.

Thank you in advance for your prompt attention to this matter.

Yours sincerely,
Imam Asrowardi`,
    modelAnswerTranslation: `Yth. Tn. Henderson,

Saya menulis surat ini untuk memberi tahu Anda mengenai masalah pemeliharaan mendesak terkait apartemen yang sedang saya sewa di Flat 4B, Greenwood Court.

Selama tiga hari terakhir, saya mengamati adanya kebocoran air yang terus-menerus muncul dari langit-langit dapur tepat di atas area bak cuci piring. Air tersebut tampaknya merembes melalui lapisan plester, menyebabkan perubahan warna yang mencolok dan bunyi tetesan air yang tiada henti. Situasi ini menjadi semakin bermasalah, karena saya terpaksa meletakkan ember-ember di bawahnya guna mencegah lantai kayu melengkung rusak, dan ada kekhawatiran nyata terkait kabel instalasi listrik di sekitar area tersebut.

Dapatkah Anda mengatur agar tukang ledeng yang berkualifikasi memeriksa dan memperbaiki masalah pipa saluran air ini sesegera mungkin? Saya bekerja dari rumah (WFH) pada hari Senin dan Kamis, sehingga saya akan berada di rumah sepanjang hari tersebut untuk memberikan akses kepada kontraktor. Sebagai alternatif, Anda dapat memanfaatkan kunci cadangan Anda asalkan saya menerima pemberitahuan terlebih dahulu.

Terima kasih sebelumnya atas perhatian cepat Anda terhadap masalah ini.

Hormat saya,
Imam Asrowardi`,
    structureBreakdown: [
      { step: 'Salam & Identitas', content: 'Dear Mr. Henderson + mengingatkan alamat unit sewa (Flat 4B, Greenwood Court).' },
      { step: 'Masalah Kebocoran', content: 'Mendeskripsikan rembesan air, resiko lantai kayu rusak, dan bahaya korsleting kabel listrik.' },
      { step: 'Waktu Perbaikan', content: 'Memberikan hari spesifik (Senin/Kamis) di mana penyewa ada di rumah.' },
      { step: 'Penutup', content: '"Yours sincerely," karena nama penerima (Mr. Henderson) diketahui.' }
    ]
  },
  {
    id: 'gt-informal-1',
    letterType: 'Informal',
    typeBadge: 'Surat Santai (Informal)',
    recipient: 'Sahabat dekat atau anggota keluarga',
    salutationRule: 'Buka dengan "Dear Mark," atau "Hi Sarah," dan tutup dengan "Warm regards," atau "All the best,"',
    toneRule: 'Santai, ramah, boleh menggunakan kontraksi/singkatan ("I\'m", "can\'t wait", "we\'ll").',
    promptTitle: 'Surat Mengundang Teman Berlibur Bersama',
    promptText: `You have planned a holiday to a seaside resort and want to invite a friend to come along. Write a letter to your friend.
In your letter:
• Tell your friend about your holiday plans (where and when)
• Explain why you want them to join you
• Give details about accommodation and travel arrangements`,
    promptTranslation: `Anda telah merencanakan liburan ke sebuah resor tepi pantai dan ingin mengajak seorang sahabat untuk ikut serta. Tulis surat kepada teman Anda.
Dalam surat Anda:
• Ceritakan kepada teman Anda tentang rencana liburan Anda (ke mana dan kapan)
• Jelaskan mengapa Anda ingin mereka ikut bersama Anda
• Berikan rincian tentang pengaturan akomodasi dan perjalanan`,
    modelAnswerBand8: `Dear Liam,

I hope you and your family are doing great! It feels like ages since we last caught up properly.

I am writing because I have just finalized plans for a week-long getaway to Cornwall next month, from the 10th to the 17th of October, and I would absolutely love it if you could join me. The autumn scenery along the coastal cliffs is supposed to be breathtaking, and I know how much you enjoy outdoor hiking and photography.

We haven't had a proper road trip together since university, so this would be a fantastic opportunity to unwind and reminisce about old times. I've already booked a charming seaside cottage right on the edge of St Ives. It has two separate bedrooms and a spacious kitchen with ocean views, and best of all, the cost is remarkably reasonable.

In terms of travel, I plan to drive down from London on Friday morning, so I can easily pick you up on my way through Bristol. All you really need to bring is your walking boots and camera gear.

Let me know if you can make it so we can start counting down the days!

Warm regards,
Imam`,
    modelAnswerTranslation: `Halo Liam,

Semoga kamu dan keluarga kabarnya sehat selalu! Rasanya sudah lama sekali sejak terakhir kali kita mengobrol santai.

Aku menulis surat ini karena aku baru saja mematangkan rencana liburan seminggu ke Cornwall bulan depan, dari tanggal 10 sampai 17 Oktober, dan aku akan sangat senang jika kamu bisa ikut denganku. Pemandangan musim gugur di sepanjang tebing pantai konon sangat memukau, dan aku tahu betapa kamu sangat menikmati hiking luar ruangan dan fotografi.

Kita belum pernah road trip bareng lagi sejak masa kuliah dulu, jadi ini akan menjadi kesempatan luar biasa untuk melepas penat dan mengenang masa-masa lalu. Aku sudah memesan sebuah pondok tepi pantai yang menawan tepat di tepi St Ives. Pondok ini memiliki dua kamar tidur terpisah dan dapur luas dengan pemandangan langsung ke laut, dan yang terbaik dari semuanya, biayanya sangat terjangkau.

Terkait perjalanan, rencananya aku akan menyetir dari London pada Jumat pagi, jadi aku bisa dengan mudah menjemputmu saat melewat Bristol. Yang kamu perlukan hanyalah membawa sepatu hiking dan perlengkapan kamera.

Beri tahu aku ya kalau kamu bisa ikut, biar kita bisa mulai menghitung hari!

Salam hangat,
Imam`,
    structureBreakdown: [
      { step: 'Basa-basi Ramah', content: 'Menanyakan kabar teman dengan santai ("It feels like ages since we last caught up...").' },
      { step: 'Rencana Liburan', content: 'Tujuan (Cornwall) dan tanggal (10-17 Oktober).' },
      { step: 'Alasan Mengajak', content: 'Menyebutkan hobi teman (hiking, photography) dan reuni masa kuliah.' },
      { step: 'Akomodasi & Transportasi', content: 'Pondok 2 kamar dan rencana jemput naik mobil.' },
      { step: 'Penutup Akrab', content: '"Warm regards," atau "All the best,".' }
    ]
  }
];

export const LETTER_PHRASES_BANK = {
  formal: {
    openings: [
      { en: 'I am writing to inform you that...', id: 'Saya menulis surat ini untuk memberi tahu Anda bahwa...' },
      { en: 'I am writing to officially register a complaint regarding...', id: 'Saya menulis untuk secara resmi menyampaikan keluhan terkait...' },
      { en: 'I am writing to express my profound dissatisfaction with...', id: 'Saya menulis untuk menyampaikan ketidakpuasan mendalam saya atas...' },
      { en: 'I am writing to inquire about the possibility of...', id: 'Saya menulis untuk menanyakan tentang kemungkinan...' }
    ],
    requests: [
      { en: 'I would be most grateful if you could look into this matter urgently.', id: 'Saya akan sangat berterima kasih jika Anda dapat menyelidiki masalah ini dengan segera.' },
      { en: 'I would appreciate it if you could arrange for an immediate replacement.', id: 'Saya akan sangat menghargai jika Anda dapat mengatur penggantian segera.' },
      { en: 'Could you please furnish me with detailed information regarding...', id: 'Bisakah Anda memberikan informasi rinci kepada saya mengenai...' }
    ],
    closings: [
      { en: 'Thank you for your prompt attention to this matter.', id: 'Terima kasih atas perhatian cepat Anda terhadap masalah ini.' },
      { en: 'I look forward to hearing from you at your earliest convenience.', id: 'Saya menantikan kabar dari Anda secepatnya.' },
      { en: 'Yours faithfully, (jika diawali Dear Sir or Madam)', id: 'Hormat saya (bila nama penerima tidak diketahui)' },
      { en: 'Yours sincerely, (jika diawali nama e.g. Dear Mr. Smith)', id: 'Hormat saya (bila nama penerima diketahui)' }
    ]
  },
  informal: {
    openings: [
      { en: 'How have you been doing?', id: 'Bagaimana kabarmu sekarang?' },
      { en: 'It was so wonderful to hear from you the other day!', id: 'Senang sekali bisa mendengar kabarmu tempo hari!' },
      { en: 'I hope everything is going smoothly with your new job.', id: 'Semoga semuanya berjalan lancar dengan pekerjaan barumu.' }
    ],
    invitations: [
      { en: 'I was wondering if you would like to come with me to...', id: 'Aku ingin tahu apakah kamu ingin ikut denganku ke...' },
      { en: 'It would be absolutely brilliant if you could make it!', id: 'Akan sangat menyenangkan jika kamu bisa datang!' },
      { en: 'You really must join us, you will love it!', id: 'Kamu benar-benar harus ikut kami, kamu pasti akan menyukainya!' }
    ],
    closings: [
      { en: 'Can\'t wait to catch up soon!', id: 'Tidak sabar untuk segera bertemu dan mengobrol!' },
      { en: 'Give my best to your family.', id: 'Sampaikan salam hangatku untuk keluargamu.' },
      { en: 'All the best, / Warm regards,', id: 'Salam hangat dan yang terbaik untukmu,' }
    ]
  }
};
