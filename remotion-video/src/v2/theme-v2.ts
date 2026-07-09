// VaaS brand palette - sampled directly from the product UI screenshots
// (navy header, blue accent, pass/fail colors) so the video matches the
// real product exactly.

export const v2Colors = {
  navy: "#00175A", // header bar / primary text
  blue: "#1976E6", // accent buttons, icons
  bg: "#F4F6FA", // app page background
  cardBg: "#ECEDEE", // light card fill
  ink: "#0B1F3A", // dark text on light backgrounds
  mutedInk: "#5B6472",
  pass: "#016653",
  passBg: "#DBFCE7",
  fail: "#B41601",
  cardBorder: "rgba(0,23,90,0.08)",
} as const;

export const fonts = {
  body: "Inter, system-ui, sans-serif",
  display: "'Plus Jakarta Sans', system-ui, sans-serif",
} as const;

// Scene order: Problem -> VaaS intro (three capabilities) -> Get Started
// (landing page) -> Toll Gate Assist -> Toll Gate rationale detail -> Need
// For Model -> METRIC -> benefits recap -> closing.
export const V2 = {
  width: 1920,
  height: 1080,
  fps: 30,
  totalFrames: 3810, // 127s - matches the recorded voiceover (public/audio/voiceover.mp3)

  // Durations are timed to the voiceover.mp3 using the timestamps provided
  // directly (seconds -> end of each scene): 13, 42, 48, 57, 65, 82, 103,
  // 117. Cross-checked against a word-level transcript alignment of the
  // recording, which landed within ~1s of each of these. Scene 9's end
  // (127s) has no given timestamp - set from the transcript's last word
  // (125.28s) plus a short natural tail.
  scene1Start: 0, scene1Dur: 390, // problem: 0s -> 13s
  scene2Start: 390, scene2Dur: 870, // VaaS intro: 13s -> 42s
  scene6Start: 1260, scene6Dur: 180, // get started (landing page): 42s -> 48s
  scene4aStart: 1440, scene4aDur: 270, // Toll Gate Assist: 48s -> 57s
  scene7Start: 1710, scene7Dur: 240, // Toll Gate rationale detail: 57s -> 65s
  scene4bStart: 1950, scene4bDur: 510, // Need For Model: 65s -> 82s
  scene4cStart: 2460, scene4cDur: 630, // METRIC: 82s -> 103s
  scene3Start: 3090, scene3Dur: 420, // benefits recap: 103s -> 117s
  scene5Start: 3510, scene5Dur: 300, // closing: 117s -> 127s
  // Sum: 390+870+180+270+240+510+630+420+300 = 3810 ✓
} as const;
