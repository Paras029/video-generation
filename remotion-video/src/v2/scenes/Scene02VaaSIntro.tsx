import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors, fonts } from "../theme-v2";
import { PopIn, SlidePopIn } from "../components/PopIn";
import { TypedText } from "../components/TypedText";

const capabilities = [
  { name: "Toll Gate Assist", detail: "Documentation completeness and quality" },
  { name: "Need For Model", detail: "Is a model even the right call?" },
  { name: "METRIC", detail: "Quantitative testing across data and performance" },
];

const CapabilityChip: React.FC<{ name: string; detail: string; startFrame: number }> = ({
  name,
  detail,
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
    <AbsoluteFill style={{ backgroundColor: v2Colors.bg, alignItems: "center", justifyContent: "center" }}>
      <PopIn startFrame={0} style={{ marginBottom: 24 }}>
        <Img src={staticFile("screenshots/amex-logo.png")} style={{ height: 56 }} />
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
        <TypedText
          text="A shift-left capability that lets model owners self-check submissions before validation, arriving better prepared for MRMG's challenge."
          startFrame={50}
          perWord={6}
          style={{ fontSize: 29, fontWeight: 500, color: v2Colors.ink, lineHeight: 1.5, fontFamily: fonts.body }}
        />
      </div>

      <div style={{ display: "flex", gap: 24, marginTop: 48, width: 1400 }}>
        {capabilities.map((c, i) => (
          <CapabilityChip key={c.name} name={c.name} detail={c.detail} startFrame={150 + i * 12} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
