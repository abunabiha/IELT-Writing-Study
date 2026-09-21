// Comprehensive IELTS Band 8 Diagnostic Engine

// Weak / Low-Band Words and their Band 8+ academic replacements
export const WEAK_WORDS_MAP = {
  very: ['exceedingly', 'remarkably', 'exceptionally', 'immensely', 'substantially'],
  good: ['commendable', 'beneficial', 'advantageous', 'exemplary', 'efficacious'],
  bad: ['detrimental', 'adverse', 'deleterious', 'suboptimal', 'pernicious'],
  important: ['paramount', 'pivotal', 'indispensable', 'crucial', 'imperative'],
  a_lot_of: ['a myriad of', 'a substantial number of', 'copious amounts of', 'an abundance of'],
  big: ['colossal', 'monumental', 'substantial', 'formidable'],
  small: ['negligible', 'nominal', 'marginal', 'inconsequential'],
  get: ['acquire', 'attain', 'procure', 'derive', 'obtain'],
  thing: ['phenomenon', 'aspect', 'facet', 'element', 'consideration'],
  things: ['phenomena', 'aspects', 'facets', 'elements', 'dimensions'],
  people: ['individuals', 'the populace', 'citizens', 'denizens', 'members of society'],
  many: ['numerous', 'copious', 'manifold', 'multitudes of'],
  make: ['engender', 'catalyze', 'generate', 'yield'],
  show: ['illustrate', 'delineate', 'exemplify', 'manifest', 'elucidate'],
  change: ['fluctuation', 'metamorphosis', 'transformation', 'transition'],
  hard: ['arduous', 'onerous', 'formidable', 'demanding'],
  help: ['facilitate', 'bolster', 'assist', 'alleviate'],
};

// Academic C1/C2 Vocabulary to detect
export const ACADEMIC_WORDS = new Set([
  'substantiate', 'ubiquitous', 'precipitous', 'corroborate', 'paradoxically',
  'albeit', 'imperative', 'disparity', 'inadvertent', 'unprecedented',
  'detrimental', 'alleviate', 'exacerbate', 'delineate', 'multifaceted',
  'pivotal', 'scrutinize', 'prevalent', 'ostensibly', 'mitigate',
  'synthesize', 'predominant', 'tangible', 'inherent', 'propensity',
  'exponential', 'plateaued', 'plummeted', 'surged', 'fluctuated',
  'marginal', 'conspicuous', 'inevitable', 'disproportionate', 'ramifications',
  'catalyst', 'paradigm', 'empirical', 'profound', 'sustainable',
  'counterproductive', 'holistic', 'stringent', 'feasible', 'manifest'
]);

// Cohesive Devices Classification
export const ADVANCED_COHESIVES = [
  'notwithstanding', 'conversely', 'in stark contrast', 'by extension',
  'granted that', 'to substantiate this', 'in essence', 'it is posited that',
  'consequently', 'henceforth', 'subsequently', 'in tandem with',
  'on the contrary', 'in light of', 'predominantly', 'thereby'
];

export const BASIC_COHESIVES = [
  'firstly', 'secondly', 'thirdly', 'furthermore', 'moreover',
  'in conclusion', 'also', 'besides', 'in addition'
];

export function analyzeBand8Text(text, taskType = 'task2') {
  if (!text || text.trim().length === 0) {
    return {
      wordCount: 0,
      charCount: 0,
      sentenceCount: 0,
      paragraphCount: 0,
      targetWords: taskType === 'task1' ? 150 : 250,
      isWordCountMet: false,
      lexicalScore: 5.0,
      cohesionScore: 5.0,
      grammarScore: 5.0,
      taskScore: 5.0,
      overallBand: 5.0,
      weakWordMatches: [],
      academicWordMatches: [],
      advancedCohesivesFound: [],
      basicCohesivesFound: [],
      sentenceStructures: { simple: 0, compound: 0, complex: 0, advanced: 0 },
      suggestions: ['Mulai menulis untuk melihat evaluasi diagnostik instan.']
    };
  }

  // Tokenization
  const cleanText = text.trim();
  const words = cleanText.match(/\b[a-zA-Z0-9'-]+\b/g) || [];
  const wordCount = words.length;
  const targetWords = taskType === 'task1' ? 150 : 250;
  const isWordCountMet = wordCount >= targetWords;

  // Paragraphs
  const paragraphs = cleanText.split(/\n+/).filter(p => p.trim().length > 0);
  const paragraphCount = paragraphs.length;

  // Sentences
  const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentenceCount = sentences.length || 1;

  // Weak Word detection
  const lowerText = cleanText.toLowerCase();
  const weakWordMatches = [];
  Object.keys(WEAK_WORDS_MAP).forEach(wKey => {
    const formattedWord = wKey.replace('_', ' ');
    const regex = new RegExp(`\\b${formattedWord}\\b`, 'gi');
    const matches = lowerText.match(regex);
    if (matches) {
      weakWordMatches.push({
        word: formattedWord,
        count: matches.length,
        alternatives: WEAK_WORDS_MAP[wKey]
      });
    }
  });

  // Academic Word detection
  const academicWordMatches = [];
  const lowerWords = words.map(w => w.toLowerCase());
  const uniqueLowerWords = new Set(lowerWords);
  uniqueLowerWords.forEach(w => {
    if (ACADEMIC_WORDS.has(w)) {
      academicWordMatches.push(w);
    }
  });

  // Cohesives detection
  const advancedCohesivesFound = ADVANCED_COHESIVES.filter(phrase =>
    lowerText.includes(phrase)
  );
  const basicCohesivesFound = BASIC_COHESIVES.filter(phrase =>
    lowerText.includes(phrase)
  );

  // Sentence complexity heuristic
  let simpleCount = 0;
  let compoundCount = 0;
  let complexCount = 0;
  let advancedCount = 0;

  sentences.forEach(s => {
    const lowerS = s.toLowerCase();
    const hasSubordinating = /\b(although|whereas|while|despite|in spite of|because|since|provided that|unless|if|even though)\b/.test(lowerS);
    const hasRelative = /\b(which|who|whom|whose|wherein|whereby)\b/.test(lowerS);
    const hasInversionOrPassive = /\b(not only|rarely|seldom|little did|was observed|were recorded|is projected|can be attributed)\b/.test(lowerS);
    const hasCoordinating = /\b( and | but | or | yet | so )\b/.test(lowerS);

    if (hasInversionOrPassive || (hasSubordinating && hasRelative)) {
      advancedCount++;
    } else if (hasSubordinating || hasRelative) {
      complexCount++;
    } else if (hasCoordinating) {
      compoundCount++;
    } else {
      simpleCount++;
    }
  });

  // Band Scorings calculation (Heuristic based on official descriptors)

  // 1. Task Achievement / Response (TR)
  let taskScore = 5.0;
  if (wordCount >= targetWords) taskScore += 1.5;
  else if (wordCount >= targetWords * 0.75) taskScore += 0.5;
  if (taskType === 'task2') {
    if (paragraphCount >= 4 && paragraphCount <= 5) taskScore += 1.0;
  } else {
    // Task 1 needs Overview paragraph + Body details
    if (paragraphCount >= 3 && paragraphCount <= 4) taskScore += 1.0;
    if (/overall|in summary|it is notable that/i.test(cleanText)) taskScore += 0.5;
  }
  taskScore = Math.min(9.0, Math.max(4.0, taskScore));

  // 2. Coherence & Cohesion (CC)
  let cohesionScore = 5.0;
  if (advancedCohesivesFound.length >= 3) cohesionScore += 2.0;
  else if (advancedCohesivesFound.length >= 1) cohesionScore += 1.0;
  if (basicCohesivesFound.length > 5) cohesionScore -= 0.5; // Overuse of mechanical linkers
  if (paragraphCount >= 3) cohesionScore += 1.0;
  cohesionScore = Math.min(9.0, Math.max(4.0, cohesionScore));

  // 3. Lexical Resource (LR)
  let lexicalScore = 5.0;
  const academicRatio = academicWordMatches.length / Math.max(1, wordCount);
  if (academicWordMatches.length >= 6 || academicRatio >= 0.04) lexicalScore += 2.5;
  else if (academicWordMatches.length >= 3) lexicalScore += 1.5;
  else if (academicWordMatches.length >= 1) lexicalScore += 0.5;

  if (weakWordMatches.length > 4) lexicalScore -= 0.5;
  lexicalScore = Math.min(9.0, Math.max(4.0, lexicalScore));

  // 4. Grammatical Range & Accuracy (GRA)
  let grammarScore = 5.0;
  const complexRatio = (complexCount + advancedCount) / Math.max(1, sentenceCount);
  if (advancedCount >= 2 && complexRatio >= 0.5) grammarScore += 3.0;
  else if (complexRatio >= 0.4) grammarScore += 2.0;
  else if (complexRatio >= 0.2) grammarScore += 1.0;
  grammarScore = Math.min(9.0, Math.max(4.0, grammarScore));

  // Overall Band (Average rounded to nearest 0.5)
  const rawAvg = (taskScore + cohesionScore + lexicalScore + grammarScore) / 4;
  const overallBand = Math.round(rawAvg * 2) / 2;

  // Actionable Suggestions
  const suggestions = [];
  if (!isWordCountMet) {
    suggestions.push(`Jumlah kata (${wordCount}) belum mencapai batas minimum ${targetWords} kata. Tulisan di bawah batas kata akan dikenakan penalti TR.`);
  }
  if (weakWordMatches.length > 0) {
    suggestions.push(`Ditemukan ${weakWordMatches.length} kata pasaran (e.g. ${weakWordMatches.slice(0, 3).map(w => `"${w.word}"`).join(', ')}). Ganti dengan alternatif C1/C2 agar Lexical Resource mencapai Band 8.`);
  }
  if (advancedCohesivesFound.length === 0) {
    suggestions.push('Gunakan perangkat kohesi tingkat tinggi seperti "Notwithstanding", "In stark contrast", atau "Consequently" alih-alih hanya "Furthermore/Moreover".');
  }
  if (complexCount + advancedCount < simpleCount) {
    suggestions.push('Variasikan struktur kalimat dengan menggabungkan klausa independen menggunakan relative clause ("which...") atau adverbial subordinators ("Whereas...", "Albeit...").');
  }
  if (taskType === 'task1' && !/overall|in summary/i.test(cleanText)) {
    suggestions.push('Task 1 WAJIB memiliki Overview yang jelas (biasanya di paragraf 2) yang menyoroti tren utama tanpa angka spesifik.');
  }

  return {
    wordCount,
    sentenceCount,
    paragraphCount,
    targetWords,
    isWordCountMet,
    lexicalScore: Number(lexicalScore.toFixed(1)),
    cohesionScore: Number(cohesionScore.toFixed(1)),
    grammarScore: Number(grammarScore.toFixed(1)),
    taskScore: Number(taskScore.toFixed(1)),
    overallBand: Number(overallBand.toFixed(1)),
    weakWordMatches,
    academicWordMatches,
    advancedCohesivesFound,
    basicCohesivesFound,
    sentenceStructures: {
      simple: simpleCount,
      compound: compoundCount,
      complex: complexCount,
      advanced: advancedCount
    },
    suggestions
  };
}
