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
    modelAnswerBand8: `Dear Sir or Madam,

I am writing to officially register a complaint regarding severe damage sustained by my luggage during a recent flight with your airline, and to request appropriate financial compensation.

On the 14th of September, I traveled from London Heathrow to Singapore Changi on flight SQ318, occupying seat 24A. Upon my arrival at Terminal 3 baggage reclaim, I discovered that my hard-shell suitcase (Tag No. BA892104) had been severely cracked across the main zipper compartment, resulting in irreparable structural damage and the loss of several personal souvenirs purchased abroad.

Given that this luggage was brand-new prior to departure and safely checked in according to your baggage regulations, the mishandling by the ground operations crew is profoundly disappointing. 

Therefore, I request that your customer service department reimburses the cost of the damaged suitcase, which is valued at £180, in addition to reimbursing £65 for the lost personal items. I have attached the original purchase receipts alongside photographic evidence of the damaged case for your prompt review.

I look forward to hearing from you at your earliest convenience.

Yours faithfully,
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
    modelAnswerBand8: `Dear Mr. Henderson,

I am writing to notify you of an urgent maintenance issue regarding the apartment I am currently leasing at Flat 4B, Greenwood Court.

Over the past three days, I have observed a persistent water leak emerging from the kitchen ceiling directly above the sink area. The water appears to be seeping through the plasterwork, causing noticeable discoloration and a constant dripping sound. This situation has become increasingly problematic, as I am compelled to place buckets underneath to prevent the timber flooring from warping, and there is a genuine concern regarding electrical wiring in that vicinity.

Could you please arrange for a qualified plumber to inspect and rectify the plumbing issue as soon as possible? I work remotely on Mondays and Thursdays, so I will be available at home throughout those days to grant access to the contractor. Alternatively, you may utilize your spare key provided I receive prior notification.

Thank you in advance for your prompt attention to this matter.

Yours sincerely,
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
    modelAnswerBand8: `Dear Liam,

I hope you and your family are doing great! It feels like ages since we last caught up properly.

I am writing because I have just finalized plans for a week-long getaway to Cornwall next month, from the 10th to the 17th of October, and I would absolutely love it if you could join me. The autumn scenery along the coastal cliffs is supposed to be breathtaking, and I know how much you enjoy outdoor hiking and photography.

We haven't had a proper road trip together since university, so this would be a fantastic opportunity to unwind and reminisce about old times. I've already booked a charming seaside cottage right on the edge of St Ives. It has two separate bedrooms and a spacious kitchen with ocean views, and best of all, the cost is remarkably reasonable.

In terms of travel, I plan to drive down from London on Friday morning, so I can easily pick you up on my way through Bristol. All you really need to bring is your walking boots and camera gear.

Let me know if you can make it so we can start counting down the days!

Warm regards,
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
      'I am writing to inform you that...',
      'I am writing to officially register a complaint regarding...',
      'I am writing to express my profound dissatisfaction with...',
      'I am writing to inquire about the possibility of...'
    ],
    requests: [
      'I would be most grateful if you could look into this matter urgently.',
      'I would appreciate it if you could arrange for an immediate replacement.',
      'Could you please furnish me with detailed information regarding...'
    ],
    closings: [
      'Thank you for your prompt attention to this matter.',
      'I look forward to hearing from you at your earliest convenience.',
      'Yours faithfully, (jika diawali Dear Sir or Madam)',
      'Yours sincerely, (jika diawali nama e.g. Dear Mr. Smith)'
    ]
  },
  informal: {
    openings: [
      'How have you been doing?',
      'It was so wonderful to hear from you the other day!',
      'I hope everything is going smoothly with your new job.'
    ],
    invitations: [
      'I was wondering if you would like to come with me to...',
      'It would be absolutely brilliant if you could make it!',
      'You really must join us, you will love it!'
    ],
    closings: [
      'Can\'t wait to catch up soon!',
      'Give my best to your family.',
      'All the best, / Warm regards,'
    ]
  }
};
