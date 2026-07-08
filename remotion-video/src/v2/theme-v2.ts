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
  totalFrames: 1790, // ~59.7s - re-time remaining scenes once their VO clips arrive

  scene1Start: 0, scene1Dur: 450, // problem (15s) - timed to the scene 1 VO script
  scene2Start: 450, scene2Dur: 330, // VaaS intro + three capabilities (11s)
  scene4aStart: 780, scene4aDur: 180, // Toll Gate Assist
  scene4bStart: 960, scene4bDur: 190, // Need For Model
  scene4cStart: 1150, scene4cDur: 190, // METRIC
  scene3Start: 1340, scene3Dur: 210, // benefits recap (7s)
  scene5Start: 1550, scene5Dur: 240, // closing (8s)
  // Sum: 450+330+180+190+190+210+240 = 1790 ✓
} as const;
