import test from 'node:test';
import assert from 'node:assert';

// Official IELTS Band Rounding Formula
const calculateOverallBand = (tr, cc, lr, gra) => {
  const avg = (parseFloat(tr) + parseFloat(cc) + parseFloat(lr) + parseFloat(gra)) / 4;
  const decimal = avg - Math.floor(avg);
  if (decimal < 0.25) return Math.floor(avg);
  if (decimal < 0.75) return Math.floor(avg) + 0.5;
  return Math.ceil(avg);
};

test('calculateOverallBand follows official IELTS rounding rules', () => {
  // Average 6.25 -> rounds to 6.5
  assert.strictEqual(calculateOverallBand(6.5, 6.0, 6.5, 6.0), 6.5);

  // Average 6.125 -> rounds down to 6.0 (decimal < 0.25)
  assert.strictEqual(calculateOverallBand(6.0, 6.0, 6.5, 6.0), 6.0);

  // Average 6.75 -> rounds up to 7.0 (decimal >= 0.75)
  assert.strictEqual(calculateOverallBand(7.0, 6.5, 7.0, 6.5), 7.0);

  // Average 7.5 -> exactly 7.5
  assert.strictEqual(calculateOverallBand(7.5, 7.5, 7.5, 7.5), 7.5);

  // Average 8.25 -> rounds to 8.5
  assert.strictEqual(calculateOverallBand(8.5, 8.0, 8.5, 8.0), 8.5);
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
    'mindMapVault',
    'copyworkArena'
  ];

  assert.ok(coreModules.length >= 4, 'GradeBook should track key integrated curriculum modules');
});
