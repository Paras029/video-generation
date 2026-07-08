// VaaS visual language - hex values per the spec, not sampled/guessed.

export const v2Colors = {
  navy: "#0B1B4D", // full-bleed title/problem/closing slides
  navBar: "#0B1B4D", // in-product top nav bar
  bg: "#F4F6FA", // in-product screen canvas
  cardBg: "#FFFFFF",
  cardBorder: "#E2E6F0",
  ink: "#0B1B33",
  mutedInk: "#5B6472",

  blue: "#2F6FED", // accent: links, active tab, primary buttons

  pass: "#1E9E5A",
  passBg: "#E6F6EC",
  fail: "#D64545",
  failBg: "#FBE9E9",
  warn: "#C98A1D",
  warnBg: "#FDF3E0",

  // Donut chart blue shades (lightest -> darkest)
  donut1: "#BBD3FA",
  donut2: "#7FA8F5",
  donut3: "#3F72E0",
  donut4: "#12308C",
} as const;

export const fontStack = "Inter, system-ui, -apple-system, sans-serif";
export const wordmarkFontStack = "Georgia, 'Times New Roman', serif";
