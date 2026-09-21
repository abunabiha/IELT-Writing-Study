import { test } from 'node:test';
import assert from 'node:assert';
import { ACADEMIC_TASK1_PROMPTS } from '../src/data/academicTask1Data.js';
import { IELTS_TASK2_PROMPTS, TASK2_QUESTION_TYPES } from '../src/data/ieltsTask2Data.js';
import { GENERAL_TRAINING_PROMPTS, LETTER_PHRASES_BANK } from '../src/data/generalTrainingData.js';
import { calculateOverallBand, saveExamRecord } from '../src/utils/gradeBookStorage.js';

test('Academic Task 1 Simulation Data covers all 6 official visual formats', () => {
  assert.strictEqual(ACADEMIC_TASK1_PROMPTS.length, 6, 'Should have exactly 6 Task 1 visual formats');
  
  const categories = ACADEMIC_TASK1_PROMPTS.map(p => p.category);
  assert.ok(categories.includes('Line Graph'), 'Must have Line Graph');
  assert.ok(categories.includes('Bar Chart'), 'Must have Bar Chart');
  assert.ok(categories.includes('Pie Chart'), 'Must have Pie Chart');
  assert.ok(categories.includes('Data Table'), 'Must have Data Table');
  assert.ok(categories.includes('Process Diagram'), 'Must have Process Diagram');
  assert.ok(categories.includes('Map / Plan'), 'Must have Map / Plan');

  ACADEMIC_TASK1_PROMPTS.forEach(prompt => {
    assert.ok(prompt.title && prompt.title.length > 5, `Prompt ${prompt.id} must have a title`);
    assert.ok(prompt.question && prompt.question.length > 20, `Prompt ${prompt.id} must have question text`);
    assert.ok(prompt.questionTranslation && prompt.questionTranslation.length > 20, `Prompt ${prompt.id} must have question translation`);
    assert.ok(prompt.modelAnswerBand8 && prompt.modelAnswerBand8.split(/\s+/).length >= 140, `Prompt ${prompt.id} model answer must meet ~150 word standard`);
    assert.ok(prompt.modelAnswerTranslation && prompt.modelAnswerTranslation.length > 50, `Prompt ${prompt.id} must have model translation`);
    assert.ok(prompt.keyFeatures && prompt.keyFeatures.length >= 3, `Prompt ${prompt.id} must provide key features`);
  });
});

test('General Training Task 1 contains 12 realistic exam letters across 3 styles', () => {
  assert.strictEqual(GENERAL_TRAINING_PROMPTS.length, 12, 'Must have 12 letter prompts');
  
  const formal = GENERAL_TRAINING_PROMPTS.filter(p => p.letterType === 'Formal');
  const semiFormal = GENERAL_TRAINING_PROMPTS.filter(p => p.letterType === 'Semi-Formal');
  const informal = GENERAL_TRAINING_PROMPTS.filter(p => p.letterType === 'Informal');

  assert.strictEqual(formal.length, 4, 'Must have 4 Formal letters');
  assert.strictEqual(semiFormal.length, 4, 'Must have 4 Semi-Formal letters');
  assert.strictEqual(informal.length, 4, 'Must have 4 Informal letters');

  GENERAL_TRAINING_PROMPTS.forEach(letter => {
    assert.ok(letter.promptTitle, `Letter ${letter.id} must have title`);
    assert.ok(letter.recipient, `Letter ${letter.id} must describe recipient`);
    assert.ok(letter.salutationRule, `Letter ${letter.id} must provide salutation rule`);
    assert.ok(letter.promptText && letter.promptText.includes('•'), `Letter ${letter.id} must include 3 bullet points`);
    assert.ok(letter.promptTranslation, `Letter ${letter.id} must have Indonesian translation`);
    assert.ok(letter.modelAnswerBand8 && letter.modelAnswerBand8.split(/\s+/).length >= 140, `Letter ${letter.id} must have Band 8 model`);
    assert.ok(letter.modelAnswerTranslation, `Letter ${letter.id} must have model translation`);
    assert.ok(letter.structureBreakdown && letter.structureBreakdown.length >= 3, `Letter ${letter.id} must have breakdown`);
  });

  assert.ok(LETTER_PHRASES_BANK.formal.openings.length >= 3, 'Must have formal openings');
  assert.ok(LETTER_PHRASES_BANK.informal.openings.length >= 3, 'Must have informal openings');
});

test('IELTS Task 2 Essay Simulation Bank covers all 5 question types with PEEL outlines', () => {
  assert.ok(IELTS_TASK2_PROMPTS.length >= 10, 'Must have at least 10 comprehensive Task 2 prompts');
  assert.ok(TASK2_QUESTION_TYPES.length >= 6, 'Must have question type filter categories');

  const questionTypesFound = new Set(IELTS_TASK2_PROMPTS.map(p => p.questionType));
  assert.ok(questionTypesFound.has('Opinion (Agree or Disagree)'), 'Must have Opinion prompts');
  assert.ok(questionTypesFound.has('Discussion (Both Views)'), 'Must have Discussion prompts');
  assert.ok(questionTypesFound.has('Problem & Solution'), 'Must have Problem & Solution prompts');
  assert.ok(questionTypesFound.has('Advantages vs Disadvantages'), 'Must have Advantages vs Disadvantages prompts');
  assert.ok(questionTypesFound.has('Direct / Double Question'), 'Must have Direct / Double Question prompts');

  IELTS_TASK2_PROMPTS.forEach(essay => {
    assert.ok(essay.question && essay.question.length > 20, `Essay ${essay.id} must have question`);
    assert.ok(essay.questionTranslation && essay.questionTranslation.length > 20, `Essay ${essay.id} must have translation`);
    const wordCount = essay.modelAnswerBand8.split(/\s+/).length;
    assert.ok(wordCount >= 240, `Essay ${essay.id} must have at least ~250 words (got ${wordCount})`);
    assert.ok(essay.modelAnswerTranslation, `Essay ${essay.id} must have Indonesian translation`);
    assert.ok(essay.peelFramework && essay.peelFramework.intro && essay.peelFramework.conclusion, `Essay ${essay.id} must have PEEL breakdown`);
    assert.ok(essay.academicCollocations && essay.academicCollocations.length >= 3, `Essay ${essay.id} must have academic collocations`);
  });
});

test('gradeBookStorage correctly computes overall band rounding and record structure', () => {
  assert.strictEqual(calculateOverallBand(7.0, 7.0, 7.0, 7.0), 7.0);
  assert.strictEqual(calculateOverallBand(6.5, 7.0, 7.0, 6.5), 7.0); // 6.75 -> 7.0
  assert.strictEqual(calculateOverallBand(6.0, 6.5, 6.0, 6.5), 6.5); // 6.25 -> 6.5
  assert.strictEqual(calculateOverallBand(6.0, 6.0, 6.0, 6.5), 6.0); // 6.125 -> 6.0

  // Test saveExamRecord in simulated environment
  const mockStorage = {};
  global.localStorage = {
    getItem: (k) => mockStorage[k] || null,
    setItem: (k, v) => { mockStorage[k] = v; }
  };

  const success = saveExamRecord({
    type: 'Task 2 Essay',
    title: 'Test Essay',
    taskResponse: 7.5,
    coherenceCohesion: 7.0,
    lexicalResource: 7.5,
    grammaticalRange: 7.0,
    wordCount: 290
  });

  assert.strictEqual(success, true);
  const saved = JSON.parse(mockStorage['ielts_exam_records']);
  assert.strictEqual(saved.length, 1);
  assert.strictEqual(saved[0].title, 'Test Essay');
  assert.strictEqual(saved[0].overallBand, 7.5); // (7.5+7.0+7.5+7.0)/4 = 7.25 -> 7.5
});
