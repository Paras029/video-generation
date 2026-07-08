// Central timing config. Every scene duration lives here as a named
// constant so the whole film can be retimed against the recorded voiceover
// by editing this file alone - no component code should ever hardcode a
// frame count.
//
// These *_DUR values are ESTIMATES placed against the draft script. Once
// the voiceover .mp3 exists, replace each with that scene's actual spoken
// duration (in frames = seconds * FPS) and TOTAL_FRAMES / SCENE_STARTS
// below recompute automatically.

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

// Crossfade length between every scene, in frames (~300ms @ 30fps).
export const TRANSITION_DUR = 9;

export const TIMINGS = {
  SCENE1_PROBLEM_DUR: 450, // ~15s - problem statement
  SCENE2_INTRO_DUR: 360, // ~12s - introducing VaaS
  SCENE3_TOLLGATE_DUR: 450, // ~15s - Toll Gate Assist
  SCENE4_NFM_DUR: 450, // ~15s - Need For Model
  SCENE5_METRIC_DUR: 450, // ~15s - METRIC
  SCENE6_CLOSE_DUR: 360, // ~12s - benefits recap + close
} as const;

const SCENE_DURS = [
  TIMINGS.SCENE1_PROBLEM_DUR,
  TIMINGS.SCENE2_INTRO_DUR,
  TIMINGS.SCENE3_TOLLGATE_DUR,
  TIMINGS.SCENE4_NFM_DUR,
  TIMINGS.SCENE5_METRIC_DUR,
  TIMINGS.SCENE6_CLOSE_DUR,
];

// TransitionSeries overlaps each scene boundary by TRANSITION_DUR frames,
// so the master's total runtime is the sum of scene durations minus one
// transition per boundary.
export const TOTAL_FRAMES =
  SCENE_DURS.reduce((a, b) => a + b, 0) - TRANSITION_DUR * (SCENE_DURS.length - 1);
