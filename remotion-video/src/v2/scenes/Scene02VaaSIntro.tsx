import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors, fonts, gradients } from "../theme-v2";
import { PopIn, SlidePopIn } from "../components/PopIn";
import { RevealText } from "../components/RevealText";

const icons: Record<string, React.ReactNode> = {
  gate: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V6l8-3 8 3v14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11h16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  question: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M9.5 9.2a2.5 2.5 0 1 1 3.6 2.25c-.75.4-1.1.9-1.1 1.55" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16.6" r="1.05" fill="#FFFFFF" />
    </svg>
  ),
  metric: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 20V4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 20v-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

const capabilities = [
  { name: "Toll Gate Assist", detail: "Documentation completeness and quality", icon: "gate" },
  { name: "Need For Model", detail: "Is a model even the right call?", icon: "question" },
  { name: "METRIC", detail: "Quantitative testing across data and performance", icon: "metric" },
];

const CapabilityChip: React.FC<{ name: string; detail: string; icon: string; startFrame: number }> = ({
  name,
  detail,
  icon,
  startFrame,
}) => (
  <SlidePopIn startFrame={startFrame} fromY={24} style={{ flex: 1 }}>
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: `1px solid ${v2Colors.cardBorder}`,
        borderRadius: 12,
        padding: "22px 26px",
        boxShadow: "0 10px 30px rgba(0,23,90,0.08)",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          backgroundColor: v2Colors.navy,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
        }}
      >
        {icons[icon]}
      </div>
      <div style={{ fontSize: 21, fontWeight: 700, color: v2Colors.navy, fontFamily: fonts.display }}>
        {name}
      </div>
      <div style={{ fontSize: 16, fontWeight: 500, color: v2Colors.mutedInk, marginTop: 8, fontFamily: fonts.body, lineHeight: 1.4 }}>
        {detail}
      </div>
    </div>
  </SlidePopIn>
);

export const Scene02VaaSIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: gradients.bg, alignItems: "center", justifyContent: "center" }}>
      <PopIn startFrame={0} style={{ marginBottom: 24 }}>
        <Img src={staticFile("screenshots/amex-logo.png")} style={{ height: 56, borderRadius: 8 }} />
      </PopIn>

      <PopIn startFrame={8} config={{ damping: 14 }}>
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: v2Colors.navy,
            fontFamily: fonts.display,
            letterSpacing: -2,
          }}
        >
          VaaS
        </div>
      </PopIn>

      <div style={{ fontSize: 28, color: v2Colors.blue, fontWeight: 700, marginTop: 2, fontFamily: fonts.display }}>
        Validation-as-a-Service
      </div>

      <div style={{ maxWidth: 1200, textAlign: "center", marginTop: 40 }}>
        <RevealText
          text="A shift-left capability that lets model owners self-check submissions before validation, arriving better prepared for MRMG's challenge."
          startFrame={50}
          duration={22}
          style={{ fontSize: 29, fontWeight: 500, color: v2Colors.ink, lineHeight: 1.5, fontFamily: fonts.body }}
        />
      </div>

      <div style={{ display: "flex", gap: 24, marginTop: 48, width: 1400 }}>
        {capabilities.map((c, i) => (
          <CapabilityChip key={c.name} name={c.name} detail={c.detail} icon={c.icon} startFrame={150 + i * 12} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
