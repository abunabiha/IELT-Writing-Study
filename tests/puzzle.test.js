import test from 'node:test';
import assert from 'node:assert';
import { BEGINNER_PUZZLE_LEVELS, PUZZLE_BAND_TIERS } from '../src/data/beginnerLessonsData.js';

test('Puzzle Balok Kata contains 4 band tiers with exactly 30 items each (120 items total)', () => {
  assert.strictEqual(PUZZLE_BAND_TIERS.length, 4, 'Must have 4 band tiers configured');
  assert.strictEqual(BEGINNER_PUZZLE_LEVELS.length, 120, 'Total puzzle levels must be exactly 120');

  const band5Items = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === 'band5');
  const band6Items = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === 'band6');
  const band7Items = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === 'band7');
  const band8Items = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === 'band8');

  assert.strictEqual(band5Items.length, 30, 'Band 5 must contain exactly 30 items');
  assert.strictEqual(band6Items.length, 30, 'Band 6 must contain exactly 30 items');
  assert.strictEqual(band7Items.length, 30, 'Band 7 must contain exactly 30 items');
  assert.strictEqual(band8Items.length, 30, 'Band 8 must contain exactly 30 items');
});

test('Every puzzle item has valid blocks, correct order, Indonesian goal, and Band 8 Power-Up', () => {
  for (const item of BEGINNER_PUZZLE_LEVELS) {
    assert.ok(item.id, 'Item must have an id');
    assert.ok(item.bandTier, 'Item must have bandTier');
    assert.ok(item.title, 'Item must have title');
    assert.ok(item.topic, 'Item must have topic');
    assert.ok(item.indonesianGoal && item.indonesianGoal.length > 3, `indonesianGoal in ${item.id} must be non-empty`);
    assert.ok(item.completedEnglish && item.completedEnglish.length > 3, `completedEnglish in ${item.id} must be non-empty`);
    assert.ok(Array.isArray(item.blocks) && item.blocks.length >= 3, `blocks in ${item.id} must have at least 3 blocks`);
    assert.ok(Array.isArray(item.correctOrder) && item.correctOrder.length === item.blocks.length, `correctOrder in ${item.id} must match blocks length`);

    // Check block properties
    for (const block of item.blocks) {
      assert.ok(block.id, 'Block must have id');
      assert.ok(block.text, 'Block must have text');
      assert.ok(block.translation, 'Block must have Indonesian translation');
    }

    // Check Power-Up Band 8
    assert.ok(item.powerUpBand8, `Item ${item.id} must have powerUpBand8`);
    assert.ok(item.powerUpBand8.upgraded, `Item ${item.id} must have upgraded sentence`);
  }
});

test('PUZZLE_BAND_TIERS configuration covers all 4 target bands', () => {
  assert.strictEqual(PUZZLE_BAND_TIERS.length, 4);
  const ids = PUZZLE_BAND_TIERS.map(t => t.id);
  assert.deepStrictEqual(ids, ['band5', 'band6', 'band7', 'band8']);

  for (const tier of PUZZLE_BAND_TIERS) {
    assert.ok(tier.label && tier.count === 30, 'Tier must have label and count = 30');
    assert.ok(tier.desc && tier.color, 'Tier must have description and color');
  }
});

test('Every puzzle item provides valid completedEnglish and Band 8 sentences for kinesthetic typing practice', () => {
  for (const item of BEGINNER_PUZZLE_LEVELS) {
    // Standard typing sentence
    assert.ok(typeof item.completedEnglish === 'string', `Item ${item.id} completedEnglish must be a string`);
    assert.ok(item.completedEnglish.trim().length > 10, `Item ${item.id} typing target must be at least 10 chars`);
    assert.ok(/[.?!]$/.test(item.completedEnglish.trim()), `Item ${item.id} typing target must end with punctuation`);

    // Band 8.5+ upgraded typing sentence
    assert.ok(typeof item.powerUpBand8.upgraded === 'string', `Item ${item.id} upgraded sentence must be a string`);
    assert.ok(item.powerUpBand8.upgraded.trim().length > 15, `Item ${item.id} upgraded typing target must be at least 15 chars`);
  }
});

test('PUZZLE_WORD_BY_WORD_MAP provides accurate word-by-word pairs and semakna translation for Band 5 items', async () => {
  const { PUZZLE_WORD_BY_WORD_MAP, getPuzzleWordByWordData } = await import('../src/data/puzzleWordByWordData.js');

  const b5Items = BEGINNER_PUZZLE_LEVELS.filter(l => l.bandTier === 'band5');
  assert.strictEqual(b5Items.length, 30);

  for (const item of b5Items) {
    const wbwData = getPuzzleWordByWordData(item);
    assert.ok(wbwData, `Word-by-word data must exist for ${item.id}`);
    assert.ok(wbwData.translation && wbwData.translation.length > 10, `Translation must be valid for ${item.id}`);
    assert.ok(Array.isArray(wbwData.wordByWord) && wbwData.wordByWord.length >= 3, `wordByWord must have at least 3 pairs for ${item.id}`);

    for (const pair of wbwData.wordByWord) {
      assert.ok(pair.standard, `Pair must have standard word in ${item.id}`);
      assert.ok(pair.upgraded, `Pair must have upgraded word in ${item.id}`);
      assert.ok(pair.meaning, `Pair must have Indonesian meaning in ${item.id}`);
    }
  }
});
