import test from 'node:test';
import assert from 'node:assert';
import { VOCAB_MINDMAP_DATA } from '../src/data/vocabMindMapData.js';

test('VOCAB_MINDMAP_DATA contains 6 macro domains (Lapis 1)', () => {
  assert.strictEqual(VOCAB_MINDMAP_DATA.length, 6);
  const themeIds = VOCAB_MINDMAP_DATA.map(t => t.id);
  assert.deepStrictEqual(themeIds, ['env', 'tech', 'edu', 'health', 'econ', 'soc']);

  for (const theme of VOCAB_MINDMAP_DATA) {
    assert.ok(theme.id && theme.titleEn && theme.titleId, `Theme ${theme.id} must have id and bilingual titles`);
    assert.ok(theme.icon && theme.accentColor, `Theme ${theme.id} must have icon and styling`);
    assert.ok(theme.clusters && theme.clusters.length >= 2, `Theme ${theme.id} must have at least 2 clusters`);
  }
});

test('Every cluster (Lapis 2) and word (Lapis 3) has complete lexical metadata and bilingual sentences', () => {
  let totalWords = 0;

  for (const theme of VOCAB_MINDMAP_DATA) {
    for (const cluster of theme.clusters) {
      assert.ok(cluster.id && cluster.titleEn && cluster.titleId, `Cluster ${cluster.id} missing titles`);
      assert.ok(cluster.summaryId, `Cluster ${cluster.id} missing summaryId`);
      assert.ok(cluster.words && cluster.words.length >= 2, `Cluster ${cluster.id} must have words`);

      for (const word of cluster.words) {
        totalWords++;
        assert.ok(word.id && word.word, 'Word must have id and word');
        assert.ok(word.pos, `Word ${word.word} must have part of speech`);
        assert.ok(word.phonetic, `Word ${word.word} must have phonetic pronunciation`);
        assert.ok(word.meaningEn && word.meaningId, `Word ${word.word} must have bilingual meaning`);
        assert.ok(word.band8Collocation, `Word ${word.word} must have band8Collocation`);
        assert.ok(word.academicSynonyms && word.academicSynonyms.length > 0, `Word ${word.word} must have synonyms`);
        assert.ok(word.sampleSentenceEn && word.sampleSentenceId, `Word ${word.word} must have bilingual sample sentence`);
        assert.ok(word.bandTarget, `Word ${word.word} must have band target`);
      }
    }
  }

  assert.ok(totalWords >= 20, `Total words in mindmap should be substantial, found ${totalWords}`);
});
