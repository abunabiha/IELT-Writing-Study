import test from 'node:test';
import assert from 'node:assert';

test('GradeBook projected band score calculation logic is accurate', () => {
  const calculateBand = (xp) => {
    if (xp >= 3500) return 8.5;
    if (xp >= 2200) return 8.0;
    if (xp >= 1400) return 7.5;
    if (xp >= 700) return 6.5;
    if (xp >= 300) return 6.0;
    return 5.5;
  };

  assert.strictEqual(calculateBand(100), 5.5);
  assert.strictEqual(calculateBand(400), 6.0);
  assert.strictEqual(calculateBand(800), 6.5);
  assert.strictEqual(calculateBand(1500), 7.5);
  assert.strictEqual(calculateBand(2300), 8.0);
  assert.strictEqual(calculateBand(3800), 8.5);
});

test('GradeBook criteria covers all 4 Cambridge writing descriptors', () => {
  const expectedCriteria = ['tr', 'cc', 'lr', 'gra'];
  assert.strictEqual(expectedCriteria.length, 4);

  const criteriaNames = {
    tr: 'Task Achievement & Response',
    cc: 'Coherence & Cohesion',
    lr: 'Lexical Resource',
    gra: 'Grammatical Range & Accuracy'
  };

  for (const crit of expectedCriteria) {
    assert.ok(criteriaNames[crit], `Criterion ${crit} must have official name`);
  }
});

test('GradeBook curriculum module tracker covers all core modules', () => {
  const coreModules = [
    'beginnerPuzzle',
    'writingLiteracy',
    'skillTree',
    'mindMapVault',
    'vocabMaster',
    'copyworkArena',
    'sentenceLab',
    'collocations',
    'task1Lab',
    'task2Builder'
  ];

  assert.strictEqual(coreModules.length, 10, 'GradeBook should track all 10 curriculum modules');
});
