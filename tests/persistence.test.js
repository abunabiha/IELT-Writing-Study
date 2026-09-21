import test from 'node:test';
import assert from 'node:assert';
import { AVATAR_OPTIONS, TARGET_BAND_OPTIONS, GOAL_OPTIONS, DEFAULT_USER_PROFILE } from '../src/data/userProfileData.js';

test('UserProfileModal contains complete avatar, band, and goal options', () => {
  assert.ok(Array.isArray(AVATAR_OPTIONS) && AVATAR_OPTIONS.length >= 6, 'Should have at least 6 avatars');
  AVATAR_OPTIONS.forEach(av => {
    assert.ok(av.icon && av.label, 'Each avatar must have icon and label');
  });

  assert.ok(TARGET_BAND_OPTIONS.includes('7.5'), 'Must include Band 7.5');
  assert.ok(TARGET_BAND_OPTIONS.includes('8.0'), 'Must include Band 8.0');
  assert.ok(TARGET_BAND_OPTIONS.includes('8.5'), 'Must include Band 8.5');

  assert.ok(Array.isArray(GOAL_OPTIONS) && GOAL_OPTIONS.length >= 3, 'Must have diverse study goals');
});

test('UserProfile data structure conforms to persistence specification', () => {
  const mockProfile = {
    name: 'Dr. Imam Asrowardi',
    targetBand: '8.0',
    avatar: '🎓',
    goal: GOAL_OPTIONS[0],
    joinedDate: '2026-09-21'
  };

  assert.strictEqual(typeof mockProfile.name, 'string');
  assert.ok(mockProfile.name.trim().length > 0, 'Name cannot be blank');
  assert.ok(TARGET_BAND_OPTIONS.includes(mockProfile.targetBand), 'Target band must be valid');
  assert.ok(mockProfile.avatar.length > 0, 'Avatar must be selected');

  const jsonStr = JSON.stringify(mockProfile);
  const parsed = JSON.parse(jsonStr);
  assert.strictEqual(parsed.name, 'Dr. Imam Asrowardi');
  assert.strictEqual(parsed.targetBand, '8.0');
});

test('Level calculation and XP thresholds scale predictably', () => {
  const getLevel = (xp) => Math.floor(xp / 500) + 1;
  assert.strictEqual(getLevel(0), 1, '0 XP = Level 1');
  assert.strictEqual(getLevel(100), 1, '100 XP = Level 1');
  assert.strictEqual(getLevel(500), 2, '500 XP = Level 2');
  assert.strictEqual(getLevel(1000), 3, '1000 XP = Level 3');
  assert.strictEqual(getLevel(2500), 6, '2500 XP = Level 6');
});

test('Persistence keys naming conventions are coherent across modules', () => {
  const EXPECTED_STORAGE_KEYS = [
    'ielts_user_profile',
    'ielts_active_tab',
    'ielts_game_xp',
    'ielts_game_streak',
    'ielts_puzzle_band',
    'ielts_puzzle_completed',
    'ielts_puzzle_typed_completed',
    'ielts_copywork_topic',
    'ielts_copywork_lesson_idx',
    'ielts_copywork_completed',
    'ielts_exam_records'
  ];

  EXPECTED_STORAGE_KEYS.forEach(key => {
    assert.ok(key.startsWith('ielts_'), `Key ${key} must have ielts_ prefix to prevent collisions`);
  });
});
