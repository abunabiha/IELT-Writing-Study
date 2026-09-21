// Data for Sentence Transformer Game: Upgrade from Band 5 to Band 8+

export const SENTENCE_TRANSFORMER_CHALLENGES = [
  {
    id: 'st-1',
    category: 'Nominalisation & Cause-Effect',
    band5Original: 'Because more people are moving to big cities, housing prices are getting very high and traffic is getting really bad.',
    targetBand: 'Band 8.5',
    focusSkill: 'Nominalisation & Advanced Lexis',
    clues: [
      'Ubah "people are moving" menjadi "rapid rural-to-urban migration".',
      'Ganti "very high housing prices" dengan "exorbitant property valuations".',
      'Ganti "traffic is getting bad" dengan "chronic vehicular congestion".'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Rapid rural-to-urban migration has precipitated exorbitant property valuations and exacerbated chronic vehicular congestion.',
        isCorrect: true,
        bandEstimate: '8.5',
        explanation: 'Sangat impresif! Struktur kalimat nominal, kata kerja C2 ("precipitated", "exacerbated"), dan kolokasi akademis presisi.'
      },
      {
        id: 'opt-b',
        text: 'More and more individuals migrate to major metropolitan centers, so housing is extremely expensive and roads are jammed.',
        isCorrect: false,
        bandEstimate: '6.0',
        explanation: 'Masih merupakan kalimat compound sederhana ("so...") dengan leksis umum ("extremely expensive", "roads are jammed").'
      },
      {
        id: 'opt-c',
        text: 'Since lots of people go to cities, the houses cost too much and the traffic is terrible everywhere.',
        isCorrect: false,
        bandEstimate: '5.0',
        explanation: 'Terlalu informal dengan kata-kata lemah ("lots of", "too much", "terrible everywhere").'
      }
    ]
  },
  {
    id: 'st-2',
    category: 'Academic Inversion (GRA Master)',
    band5Original: 'Governments should not ignore early childhood education under any circumstance because it is very important.',
    targetBand: 'Band 8.5+',
    focusSkill: 'Negative Inversion for Academic Authority',
    clues: [
      'Gunakan awalan inversi "Under no circumstances should..."',
      'Ganti "very important" dengan "paramount significance / foundational importance".'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Governments have to pay attention to small kids education at all times because it is crucial.',
        isCorrect: false,
        bandEstimate: '5.5',
        explanation: 'Bahasa lisan yang tidak formal ("small kids education", "pay attention").'
      },
      {
        id: 'opt-b',
        text: 'Under no circumstances should policymakers neglect early childhood development, given its paramount significance in cognitive formation.',
        isCorrect: true,
        bandEstimate: '9.0',
        explanation: 'Sempurna! Inversi formal C2 ("Under no circumstances should..."), diksi akademis ("policymakers", "paramount significance", "cognitive formation").'
      },
      {
        id: 'opt-c',
        text: 'Under no circumstances governments can ignore children schooling due to its great importance.',
        isCorrect: false,
        bandEstimate: '6.0',
        explanation: 'Salah pola inversi ("governments can" alih-alih "can governments").'
      }
    ]
  },
  {
    id: 'st-3',
    category: 'Non-defining Relative Clause & Analytical Commentary (Task 1 Report)',
    band5Original: 'The consumption of fast food went up a lot from 10% to 50% and this shows that eating habits became unhealthy.',
    targetBand: 'Band 8.0',
    focusSkill: 'Relative Clause Commentary (Task 1 Trend Analysis)',
    clues: [
      'Gunakan kata kerja tren kuat ("surged", "escalated").',
      'Gunakan ", which..." untuk memberikan analisis makna tren.'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Fast food intake surged fivefold from 10% to 50%, which clearly underscores a pronounced deterioration in dietary habits.',
        isCorrect: true,
        bandEstimate: '8.5',
        explanation: 'Luar biasa! "surged fivefold", non-defining relative clause ", which underscores...", dan frasa "pronounced deterioration in dietary habits".'
      },
      {
        id: 'opt-b',
        text: 'Fast food went up from 10% to 50% very quickly and it demonstrates bad food choices.',
        isCorrect: false,
        bandEstimate: '5.5',
        explanation: 'Penggunaan kata sambung "and it", serta "went up very quickly" membatasi skor GRA dan LR.'
      },
      {
        id: 'opt-c',
        text: 'Fast food consumption climbed to 50% from 10% and this is because people like unhealthy food.',
        isCorrect: false,
        bandEstimate: '5.0',
        explanation: 'Spekulatif dan informal untuk laporan Task 1.'
      }
    ]
  },
  {
    id: 'st-4',
    category: 'Concession & Counter-Balancing (Task 2 Discursive)',
    band5Original: 'I know technology brings good things, but it also causes bad problems like social isolation.',
    targetBand: 'Band 8.0',
    focusSkill: 'Concessive Clauses (Albeit / While / Notwithstanding)',
    clues: [
      'Gunakan klausa konsesif formal ("While...", "Notwithstanding the undeniable...").',
      'Hindari "good things" dan "bad problems".'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Notwithstanding the undeniable communicative conveniences afforded by technological innovation, its propensity to foster interpersonal detachment remains a pressing concern.',
        isCorrect: true,
        bandEstimate: '8.5',
        explanation: 'Sangat anggun dan akademis! "Notwithstanding the undeniable conveniences...", "propensity to foster interpersonal detachment".'
      },
      {
        id: 'opt-b',
        text: 'Although technology is very advantageous, it creates bad problems such as lonely individuals.',
        isCorrect: false,
        bandEstimate: '6.0',
        explanation: 'Meskipun sudah memakai "Although", leksisnya masih sederhana ("very advantageous", "bad problems").'
      },
      {
        id: 'opt-c',
        text: 'Technology brings great benefits but however it makes people isolated from each other.',
        isCorrect: false,
        bandEstimate: '5.0',
        explanation: 'Double connector error ("but however") yang sering terjadi di level dasar.'
      }
    ]
  }
];
