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

export const V2 = {
  width: 1920,
  height: 1080,
  fps: 30,
  totalFrames: 1350, // 45s - re-time once the recorded voiceover arrives

  scene1Start: 0, scene1Dur: 180, // pain point (6s)
  scene2Start: 180, scene2Dur: 240, // VaaS intro (8s)
  scene3Start: 420, scene3Dur: 210, // value prop (7s)
  scene4aStart: 630, scene4aDur: 160, // Toll Gate Assist
  scene4bStart: 790, scene4bDur: 160, // Need For Model
  scene4cStart: 950, scene4cDur: 160, // METRIC
  scene5Start: 1110, scene5Dur: 240, // closing (8s)
  // Sum: 180+240+210+160+160+160+240 = 1350 ✓
} as const;
