import test from 'node:test';
import assert from 'node:assert';
import { analyzeBand8Text } from '../src/utils/band8Analyzer.js';

test('analyzeBand8Text returns correct defaults for empty text', () => {
  const res = analyzeBand8Text('', 'task2');
  assert.strictEqual(res.wordCount, 0);
  assert.strictEqual(res.overallBand, 5.0);
  assert.strictEqual(res.isWordCountMet, false);
});

test('analyzeBand8Text accurately detects weak words and academic words', () => {
  const sample = `Traffic congestion is a big problem in modern metropolises. It is very important that we mitigate environmental degradation. Overall, public transit must be optimized.`;
  const res = analyzeBand8Text(sample, 'task1');
  
  assert.ok(res.wordCount > 10);
  assert.ok(res.weakWordMatches.some(w => w.word === 'big' || w.word === 'very' || w.word === 'important'));
  assert.ok(res.academicWordMatches.includes('mitigate'));
});

test('analyzeBand8Text accurately calculates sentence structure complexity', () => {
  const complexSample = `Although renewable sources are progressively viable, fossil fuels remain predominant, which severely impacts ecosystems.`;
  const res = analyzeBand8Text(complexSample, 'task2');

  assert.ok(res.sentenceStructures.complex > 0 || res.sentenceStructures.advanced > 0);
});
