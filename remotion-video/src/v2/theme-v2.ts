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
  totalFrames: 1520, // ~50.7s - re-time once the recorded voiceover arrives

  scene1Start: 0, scene1Dur: 180, // problem (6s)
  scene2Start: 180, scene2Dur: 330, // VaaS intro + three capabilities (11s)
  scene4aStart: 510, scene4aDur: 180, // Toll Gate Assist
  scene4bStart: 690, scene4bDur: 190, // Need For Model
  scene4cStart: 880, scene4cDur: 190, // METRIC
  scene3Start: 1070, scene3Dur: 210, // benefits recap (7s)
  scene5Start: 1280, scene5Dur: 240, // closing (8s)
  // Sum: 180+330+180+190+190+210+240 = 1520 ✓
} as const;
