// Points / Streaks / Sparks — real, localStorage-backed tracking shared
// across every page that shows .rp-stats-row (grade, chapter, lesson, topic,
// exam pages) plus the test-prep worksheet page (which awards points but
// doesn't show the stats row itself — see maths-testprep-worksheet.html).
//
// PROVISIONAL RULESET — see Open Questions & Decisions.md §13. Manasa's
// explicit direction: implement something genuinely functional (not random)
// to demonstrate the mechanic, but none of the numbers below (points per
// action, spark cap, refill rate) are decided. Treat every constant in this
// file as a placeholder pending a real product/points-formula call.
//
// Uses localStorage on purpose — these should survive across sessions/tabs
// closing, unlike the existing one-free-lesson / one-free-worksheet gating
// (cuemathGlobalCompletedLesson, cuemathGlobalCompletedTestPrepWorksheet),
// which is intentionally sessionStorage-scoped and is NOT touched by this
// file. cuemathSignedIn (also sessionStorage, shared with that gating) is
// only *read* here, to let a signed-in user skip the spark cap.

const CM_POINTS_KEY = 'cuemathPoints';
const CM_STREAK_KEY = 'cuemathStreak'; // {lastActiveDate:'YYYY-MM-DD', currentStreak:N}
const CM_SPARKS_KEY = 'cuemathSparks'; // {count:N, lastConsumed:epochMs|null}
const CM_LESSON_POINTS_KEY = 'cuemathLessonPointsAwarded'; // string[] of "grade-ch-lesson" already paid out

const CM_POINTS_PER_LESSON = 10; // provisional — Open Questions §13 Q1
const CM_POINTS_PER_CORRECT_ANSWER = 2; // provisional — Open Questions §13 Q1
const CM_SPARK_MAX = 3; // provisional — Open Questions §13 Q2/Q3
const CM_SPARK_REFILL_HOURS = 4; // provisional — Open Questions §13 Q2

function cmToday() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC date — fine for a mockup, real impl should use local calendar day)
}

// ── Points ──
function cmGetPoints() {
  return parseInt(localStorage.getItem(CM_POINTS_KEY) || '0', 10);
}

function cmAddPoints(n) {
  const total = cmGetPoints() + n;
  localStorage.setItem(CM_POINTS_KEY, String(total));
  cmBumpStreak();
  cmRenderStats();
  return total;
}

// +10 once a specific lesson is completed (Learn practice finished, or
// manually marked complete). lessonKey should uniquely identify the lesson,
// e.g. `${grade}-${chIdx}-${lessonIdx}`. Persisted dedup means reloading the
// page (or revisiting later) never double-pays the same lesson, but a
// genuinely different lesson completed later — this session or a future one
// — still earns its own +10.
function cmAwardLessonPoints(lessonKey) {
  const raw = localStorage.getItem(CM_LESSON_POINTS_KEY);
  const awarded = raw ? JSON.parse(raw) : [];
  if (awarded.indexOf(lessonKey) !== -1) return false;
  awarded.push(lessonKey);
  localStorage.setItem(CM_LESSON_POINTS_KEY, JSON.stringify(awarded));
  cmAddPoints(CM_POINTS_PER_LESSON);
  return true;
}

// +2 for a correct practice answer. Callers are responsible for only
// invoking this once per question — guarded by that question's own
// answered/submitted flag (see selectOpt() in maths-grade-3-lesson.html and
// submitAnswer() in maths-testprep-worksheet.html), not by anything in here.
function cmAwardPracticePoints() {
  cmAddPoints(CM_POINTS_PER_CORRECT_ANSWER);
}

// ── Streak — calendar-day based ──
function cmBumpStreak() {
  const raw = localStorage.getItem(CM_STREAK_KEY);
  const state = raw ? JSON.parse(raw) : { lastActiveDate: null, currentStreak: 0 };
  const today = cmToday();
  if (state.lastActiveDate === today) {
    // already counted today — no change
  } else if (state.lastActiveDate === null) {
    state.currentStreak = 1;
  } else {
    const msPerDay = 86400000;
    const last = new Date(state.lastActiveDate + 'T00:00:00Z').getTime();
    const now = new Date(today + 'T00:00:00Z').getTime();
    const dayGap = Math.round((now - last) / msPerDay);
    state.currentStreak = dayGap === 1 ? state.currentStreak + 1 : 1;
  }
  state.lastActiveDate = today;
  localStorage.setItem(CM_STREAK_KEY, JSON.stringify(state));
}

function cmGetStreak() {
  const raw = localStorage.getItem(CM_STREAK_KEY);
  return raw ? JSON.parse(raw).currentStreak : 0;
}

// ── Sparks — the limiting mechanic (energy/lives-style cap, not a reward) ──
function cmGetSparksState() {
  const raw = localStorage.getItem(CM_SPARKS_KEY);
  return raw ? JSON.parse(raw) : { count: CM_SPARK_MAX, lastConsumed: null };
}

// Current spark count computed from stored state + real elapsed time — not
// a live countdown, just evaluated fresh on every read.
function cmGetSparks() {
  const state = cmGetSparksState();
  if (state.lastConsumed === null) return CM_SPARK_MAX;
  const hoursElapsed = (Date.now() - state.lastConsumed) / 3600000;
  return Math.min(CM_SPARK_MAX, state.count + Math.floor(hoursElapsed / CM_SPARK_REFILL_HOURS));
}

// Milliseconds until the next spark increments (0 if already at max or
// never consumed).
function cmMsUntilNextSpark() {
  const state = cmGetSparksState();
  if (state.lastConsumed === null || cmGetSparks() >= CM_SPARK_MAX) return 0;
  const msPerRefill = CM_SPARK_REFILL_HOURS * 3600000;
  const msIntoCurrentCycle = (Date.now() - state.lastConsumed) % msPerRefill;
  return msPerRefill - msIntoCurrentCycle;
}

function cmFormatRefillTime(ms) {
  const totalMinutes = Math.max(1, Math.ceil(ms / 60000));
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

// Attempts to spend one spark. Returns true and persists the reduced count
// (with a refreshed refill-timer baseline) if one was available; false if
// the user is already at 0 — callers should block the action and show the
// refill time (cmMsUntilNextSpark / cmFormatRefillTime) in that case.
function cmConsumeSpark() {
  const current = cmGetSparks();
  if (current <= 0) return false;
  localStorage.setItem(CM_SPARKS_KEY, JSON.stringify({ count: current - 1, lastConsumed: Date.now() }));
  cmRenderStats();
  return true;
}

// ── Rendering ──
// Call on any page with .rp-stats-row. Looks for #rp-points-value /
// #rp-streak-value / #rp-sparks-value and no-ops if a page doesn't have them
// (e.g. maths-testprep-worksheet.html, which earns points but has no sidebar
// stats display).
function cmRenderStats() {
  const pointsEl = document.getElementById('rp-points-value');
  const streakEl = document.getElementById('rp-streak-value');
  const sparksEl = document.getElementById('rp-sparks-value');
  if (pointsEl) pointsEl.textContent = cmGetPoints();
  if (streakEl) streakEl.textContent = cmGetStreak();
  if (sparksEl) sparksEl.textContent = cmGetSparks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', cmRenderStats);
} else {
  cmRenderStats();
}
