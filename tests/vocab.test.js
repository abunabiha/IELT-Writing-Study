import test from 'node:test';
import assert from 'node:assert';
import { VOCAB_TOPICS } from '../src/data/vocabMemoryData.js';

test('VOCAB_TOPICS contains 8 core IELTS topics', () => {
  assert.strictEqual(VOCAB_TOPICS.length, 8);
  const expectedTopicIds = [
    'environment',
    'technology',
    'education',
    'society',
    'health',
    'globalization',
    'economy',
    'government'
  ];
  const actualIds = VOCAB_TOPICS.map(t => t.id);
  assert.deepStrictEqual(actualIds, expectedTopicIds);
});

test('Every vocabulary item has complete mnemonic, pedagogical, and cloze properties', () => {
  let totalWordsCount = 0;

  for (const topic of VOCAB_TOPICS) {
    assert.ok(topic.items.length >= 3, `Topic ${topic.id} should have at least 3 vocabulary items`);
    totalWordsCount += topic.items.length;

    for (const item of topic.items) {
      assert.ok(item.id, 'Item must have an id');
      assert.ok(item.band8Word && item.band8Word.trim().length > 0, `Item ${item.id} must have band8Word`);
      assert.ok(item.band5Basic && item.band5Basic.trim().length > 0, `Item ${item.id} must have band5Basic`);
      assert.ok(item.indonesianMeaning && item.indonesianMeaning.trim().length > 0, `Item ${item.id} must have indonesianMeaning`);
      assert.ok(item.mnemonicHook && item.mnemonicHook.trim().length > 10, `Item ${item.id} must have a rich mnemonicHook`);
      assert.ok(item.ieltsSentence && item.ieltsSentence.trim().length > 0, `Item ${item.id} must have ieltsSentence`);
      assert.ok(item.clozeSentence && item.clozeSentence.includes('[____]'), `Item ${item.id} clozeSentence must contain [____]`);
      assert.ok(item.clozeAnswer, `Item ${item.id} must have clozeAnswer`);
      assert.ok(Array.isArray(item.clozeOptions) && item.clozeOptions.length === 3, `Item ${item.id} must have 3 clozeOptions`);
      assert.ok(item.clozeOptions.includes(item.clozeAnswer), `Item ${item.id} clozeOptions must include clozeAnswer`);
    }
  }

  assert.ok(totalWordsCount >= 30, `Total vocabulary count (${totalWordsCount}) should be at least 30 items`);
});
