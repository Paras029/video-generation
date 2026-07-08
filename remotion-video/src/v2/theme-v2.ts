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
  totalFrames: 3255, // ~108.5s - each scene sized to its own VO script estimate below

  // Every duration below is derived from the voiceover-script.md word count
  // for that scene (150 wpm) plus its break-tag pauses, not a placeholder
  // guess. Re-time to the exact figure once the real clip exists for that
  // scene - see the comment on each line for the word-count math.
  scene1Start: 0, scene1Dur: 450, // problem: 33 words -> 13.2s speaking + lead/lead-out = 15s
  scene2Start: 450, scene2Dur: 810, // VaaS intro: 63 words + 1.8s breaks = 27.0s
  scene4aStart: 1260, scene4aDur: 275, // Toll Gate Assist: 22 words + 0.3s breaks = 9.1s
  scene4bStart: 1535, scene4bDur: 520, // Need For Model: 42 words + 0.5s breaks = 17.3s
  scene4cStart: 2055, scene4cDur: 665, // METRIC: 53 words + 0.9s breaks = 22.1s
  scene3Start: 2720, scene3Dur: 285, // benefits recap: 21 words + 1.1s breaks = 9.5s
  scene5Start: 3005, scene5Dur: 250, // closing: 18 words + 1.1s breaks = 8.3s
  // Sum: 450+810+275+520+665+285+250 = 3255 ✓
} as const;
