import test from 'node:test';
import assert from 'node:assert';
import { 
  ACADEMIC_CORPUS_6000, 
  CORPUS_TOPICS, 
  searchCorpus, 
  getStudySet 
} from '../src/data/academicCorpus6000.js';

test('ACADEMIC_CORPUS_6000 contains exactly 6,000 IELTS Band 8 vocabulary items', () => {
  assert.strictEqual(ACADEMIC_CORPUS_6000.length, 6000);
});

test('CORPUS_TOPICS covers 12 comprehensive IELTS domains', () => {
  assert.strictEqual(CORPUS_TOPICS.length, 12);
  const topicIds = CORPUS_TOPICS.map(t => t.id);
  assert.ok(topicIds.includes('env'));
  assert.ok(topicIds.includes('tech'));
  assert.ok(topicIds.includes('edu'));
  assert.ok(topicIds.includes('soc'));
  assert.ok(topicIds.includes('hlt'));
  assert.ok(topicIds.includes('glb'));
  assert.ok(topicIds.includes('eco'));
  assert.ok(topicIds.includes('gov'));
  assert.ok(topicIds.includes('sci'));
  assert.ok(topicIds.includes('art'));
  assert.ok(topicIds.includes('urb'));
  assert.ok(topicIds.includes('log'));
});

test('getStudySet successfully retrieves 20 words for any daily study set (1-300)', () => {
  const set1 = getStudySet(1);
  assert.strictEqual(set1.items.length, 20);
  assert.strictEqual(set1.setNumber, 1);
  assert.strictEqual(set1.totalSets, 300);

  const set300 = getStudySet(300);
  assert.strictEqual(set300.items.length, 20);
  assert.strictEqual(set300.setNumber, 300);
});

test('searchCorpus returns instantaneous query results with pagination', () => {
  const t0 = performance.now();
  const searchResult = searchCorpus('damage', 'all', 'all', 1, 20);
  const latency = performance.now() - t0;

  assert.ok(latency < 100, `Search latency (${latency}ms) should be < 100ms`);
  assert.ok(searchResult.items.length > 0);
  assert.ok(searchResult.totalResults > 0);
  assert.strictEqual(searchResult.currentPage, 1);
});
