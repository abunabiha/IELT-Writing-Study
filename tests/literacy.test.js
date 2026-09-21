import test from 'node:test';
import assert from 'node:assert';
import { 
  FUNDAMENTAL_WRITING_THEORY,
  INTERMEDIATE_WRITING_THEORY,
  ADVANCED_WRITING_THEORY,
  BAND_DESCRIPTORS_LITERACY, 
  TASK1_WRITING_GUIDE, 
  TASK2_WRITING_GUIDE, 
  ADVANCED_GRAMMAR_MODULES 
} from '../src/data/writingGrammarLiteracyData.js';

test('FUNDAMENTAL_WRITING_THEORY covers essential sentence building blocks with bilingual theory and examples', () => {
  assert.ok(FUNDAMENTAL_WRITING_THEORY.length >= 4, 'Must have at least 4 fundamental topics');
  const expectedIds = ['sentence_anatomy', 'four_sentence_structures', 'punctuation_mastery', 'subject_verb_agreement'];
  
  for (const id of expectedIds) {
    const item = FUNDAMENTAL_WRITING_THEORY.find(f => f.id === id);
    assert.ok(item, `Fundamental theory must include ${id}`);
    assert.ok(item.title && item.titleId, `Item ${id} must have bilingual title`);
    assert.ok(item.formulaEn && item.formulaId, `Item ${id} must have formula`);
    assert.ok(item.conceptEn && item.conceptId, `Item ${id} must have concept explanation`);
    assert.ok(item.rulesId && item.rulesId.length >= 2, `Item ${id} must have writing rules`);
    assert.ok(item.badExample && item.badExample.en && item.badExample.id, `Item ${id} must have weak example with translation`);
    assert.ok(item.goodExample && item.goodExample.en && item.goodExample.id, `Item ${id} must have strong example with translation`);
    assert.ok(item.practicePrompt && item.practicePrompt.modelAnswerEn, `Item ${id} must have practice prompt`);
  }
});

test('INTERMEDIATE_WRITING_THEORY covers paraphrasing, PEEL, cohesion, and register', () => {
  assert.ok(INTERMEDIATE_WRITING_THEORY.length >= 4, 'Must have at least 4 intermediate topics');
  const expectedIds = ['paraphrasing_techniques', 'peel_paragraph_framework', 'cohesion_and_referencing', 'formal_academic_register'];

  for (const id of expectedIds) {
    const item = INTERMEDIATE_WRITING_THEORY.find(f => f.id === id);
    assert.ok(item, `Intermediate theory must include ${id}`);
    assert.ok(item.title && item.titleId, `Item ${id} must have bilingual title`);
    assert.ok(item.formulaEn && item.formulaId, `Item ${id} must have formula`);
    assert.ok(item.conceptEn && item.conceptId, `Item ${id} must have concept explanation`);
    assert.ok(item.badExample && item.goodExample, `Item ${id} must have before and after examples`);
  }
});

test('ADVANCED_WRITING_THEORY covers Band 8.5+ syntax with inversion, clefts, participles, and hedging', () => {
  assert.ok(ADVANCED_WRITING_THEORY.length >= 5, 'Must have at least 5 advanced topics');
  const expectedIds = ['nominalisation', 'negative_inversion', 'cleft_sentences', 'participle_clauses', 'hedging_cautious_language'];

  for (const id of expectedIds) {
    const item = ADVANCED_WRITING_THEORY.find(f => f.id === id);
    assert.ok(item, `Advanced theory must include ${id}`);
    assert.ok(item.title && item.titleId, `Item ${id} must have bilingual title`);
    assert.ok(item.formulaEn && item.formulaId, `Item ${id} must have formula`);
    assert.ok(item.badExample && item.goodExample, `Item ${id} must have comparison examples`);
  }
});

test('BAND_DESCRIPTORS_LITERACY contains 4 core criteria with bilingual details', () => {
  assert.strictEqual(BAND_DESCRIPTORS_LITERACY.length, 4);
  const ids = BAND_DESCRIPTORS_LITERACY.map(d => d.id);
  assert.deepStrictEqual(ids, ['tr', 'cc', 'lr', 'gra']);

  for (const d of BAND_DESCRIPTORS_LITERACY) {
    assert.ok(d.title && d.titleId, `Descriptor ${d.id} must have title and titleId`);
    assert.ok(d.summaryEn && d.summaryId, `Descriptor ${d.id} must have summaryEn and summaryId`);
    assert.ok(d.bandDifferences && d.bandDifferences.length >= 3, `Descriptor ${d.id} must have band differences`);
    assert.ok(d.goldenRules && d.goldenRules.length >= 2, `Descriptor ${d.id} must have golden rules`);
    
    for (const rule of d.goldenRules) {
      assert.ok(rule.ruleEn && rule.ruleId, `Golden rule in ${d.id} must be bilingual`);
    }
  }
});

test('TASK1_WRITING_GUIDE contains valid 4-paragraph steps with templates and chart types', () => {
  assert.strictEqual(TASK1_WRITING_GUIDE.academicFormula.length, 4);
  for (const step of TASK1_WRITING_GUIDE.academicFormula) {
    assert.ok(step.name && step.nameId, 'Step must have name and nameId');
    assert.ok(step.purposeEn && step.purposeId, 'Step must have bilingual purpose');
    assert.ok(step.templateEn && step.templateId, 'Step must have bilingual template');
    assert.ok(step.keyTips, 'Step must have tips');
  }

  assert.ok(TASK1_WRITING_GUIDE.chartTypes.length >= 5, 'Must cover 5 chart types');
  for (const ct of TASK1_WRITING_GUIDE.chartTypes) {
    assert.ok(ct.type && ct.focusEn && ct.focusId, 'Chart type must be bilingual');
  }
});

test('TASK2_WRITING_GUIDE contains essay types and PEEL framework', () => {
  assert.ok(TASK2_WRITING_GUIDE.essayTypes.length >= 4);
  for (const et of TASK2_WRITING_GUIDE.essayTypes) {
    assert.ok(et.type && et.typeId, 'Essay type must have name and nameId');
    assert.ok(et.promptPatternEn && et.promptPatternId, 'Essay type must have bilingual prompt');
    assert.ok(et.structureEn && et.structureId, 'Essay type must have bilingual structure');
  }

  assert.strictEqual(TASK2_WRITING_GUIDE.peelFramework.steps.length, 4);
  for (const step of TASK2_WRITING_GUIDE.peelFramework.steps) {
    assert.ok(step.letter && step.name && step.descEn && step.descId);
    assert.ok(step.exampleEn && step.exampleId, 'PEEL step must have bilingual example');
  }
});
