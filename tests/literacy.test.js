import test from 'node:test';
import assert from 'node:assert';
import { 
  BAND_DESCRIPTORS_LITERACY, 
  TASK1_WRITING_GUIDE, 
  TASK2_WRITING_GUIDE, 
  ADVANCED_GRAMMAR_MODULES 
} from '../src/data/writingGrammarLiteracyData.js';

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

test('ADVANCED_GRAMMAR_MODULES contains Band 8.5+ modules with before/after comparisons', () => {
  assert.ok(ADVANCED_GRAMMAR_MODULES.length >= 5);
  for (const mod of ADVANCED_GRAMMAR_MODULES) {
    assert.ok(mod.id && mod.title, 'Grammar module must have id and title');
    assert.ok(mod.conceptEn && mod.conceptId, 'Grammar module must have conceptEn and conceptId');
    assert.ok(mod.beforeTextEn && mod.beforeTextId, 'Grammar module must have before texts');
    assert.ok(mod.afterTextEn && mod.afterTextId, 'Grammar module must have after texts');
    assert.ok(mod.rulesId && mod.rulesId.length > 0, 'Grammar module must have rules');
  }
});
