export const AVATAR_OPTIONS = [
  { icon: '🎓', label: 'Akademisi' },
  { icon: '✍️', label: 'Penulis Esai' },
  { icon: '🚀', label: 'Sang Visioner' },
  { icon: '🏆', label: 'Juara Band 8+' },
  { icon: '🌟', label: 'Bintang Prestasi' },
  { icon: '🦉', label: 'Peneliti Kritis' },
  { icon: '💡', label: 'Inovator Ide' },
  { icon: '🎯', label: 'Kandidat Presisi' }
];

export const TARGET_BAND_OPTIONS = ['6.5', '7.0', '7.5', '8.0', '8.5', '9.0'];

export const GOAL_OPTIONS = [
  'Beasiswa Luar Negeri (LPDP, AAS, Chevening, dll.)',
  'Studi Lanjut S2 / S3 Luar Negeri',
  'Syarat Imigrasi / Visa Kerja Luar Negeri',
  'Karier Profesional & Sertifikasi Global',
  'Peningkatan Kemampuan Menulis Akademik Bahasa Inggris'
];

export const DEFAULT_USER_PROFILE = {
  name: '',
  targetBand: '7.5',
  avatar: '🎓',
  goal: GOAL_OPTIONS[0],
  joinedDate: ''
};
