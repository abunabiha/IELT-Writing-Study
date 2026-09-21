import test from 'node:test';
import assert from 'node:assert';
import { COPYWORK_LEVELS, COPYWORK_LESSONS } from '../src/data/copyworkLessonsData.js';

test('COPYWORK_LEVELS contains 4 graduated proficiency tiers', () => {
  assert.strictEqual(COPYWORK_LEVELS.length, 4);
  const levelIds = COPYWORK_LEVELS.map(l => l.id);
  assert.deepStrictEqual(levelIds, [1, 2, 3, 4]);
});

test('COPYWORK_LESSONS contains valid lessons for each level with full anatomical breakdown', () => {
  assert.ok(COPYWORK_LESSONS.length >= 8);

  for (let lvl = 1; lvl <= 4; lvl++) {
    const lessonsInLevel = COPYWORK_LESSONS.filter(l => l.level === lvl);
    assert.ok(lessonsInLevel.length >= 2, `Level ${lvl} should have at least 2 lessons`);
  }

  for (const lesson of COPYWORK_LESSONS) {
    assert.ok(lesson.id, 'Lesson must have an id');
    assert.ok(lesson.modelText && lesson.modelText.length > 20, `Lesson ${lesson.id} must have model text`);
    assert.ok(lesson.wordCount > 10, `Lesson ${lesson.id} must have wordCount`);
    assert.ok(lesson.grammaticalBreakdown, `Lesson ${lesson.id} must have grammaticalBreakdown`);
    assert.ok(lesson.grammaticalBreakdown.clauseStructure, `Lesson ${lesson.id} must have clauseStructure`);
    assert.ok(lesson.grammaticalBreakdown.academicVocabulary.length > 0, `Lesson ${lesson.id} must have academicVocabulary`);
    assert.ok(lesson.grammaticalBreakdown.punctuationFocus, `Lesson ${lesson.id} must have punctuationFocus`);
  }

  // Verify Level 4 has full essays (>200 words)
  const fullEssays = COPYWORK_LESSONS.filter(l => l.level === 4);
  for (const essay of fullEssays) {
    assert.ok(essay.wordCount >= 250, `Full essay ${essay.id} must be at least 250 words`);
  }
});
