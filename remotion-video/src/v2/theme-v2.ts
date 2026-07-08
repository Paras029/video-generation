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

// Scene order: Problem -> VaaS intro (three capabilities) -> Toll Gate Assist
// -> Need For Model -> METRIC -> benefits recap -> closing. Benefits moved
// to after the three capability scenes per the latest edit pass.
export const V2 = {
  width: 1920,
  height: 1080,
  fps: 30,
  totalFrames: 3420, // 114s - matches the recorded voiceover (public/audio/voiceover.mp3)

  // Durations are timed to the actual voiceover.mp3, using the timestamps
  // provided directly (seconds -> end of each scene): 13, 43, 53, 70, 91,
  // 104, 114. Cross-checked against a word-level transcript alignment of
  // the recording, which landed within ~1s of each of these.
  scene1Start: 0, scene1Dur: 390, // problem: 0s -> 13s
  scene2Start: 390, scene2Dur: 900, // VaaS intro: 13s -> 43s
  scene4aStart: 1290, scene4aDur: 300, // Toll Gate Assist: 43s -> 53s
  scene4bStart: 1590, scene4bDur: 510, // Need For Model: 53s -> 70s
  scene4cStart: 2100, scene4cDur: 630, // METRIC: 70s -> 91s
  scene3Start: 2730, scene3Dur: 390, // benefits recap: 91s -> 104s
  scene5Start: 3120, scene5Dur: 300, // closing: 104s -> 114s
  // Sum: 390+900+300+510+630+390+300 = 3420 ✓
} as const;
