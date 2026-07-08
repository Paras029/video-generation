import { AbsoluteFill } from "remotion";
import { v2Colors } from "../theme-v2";
import { SlidePopIn } from "../components/PopIn";

const benefits = [
  "Higher-quality submissions",
  "Fewer rejected reviews",
  "Materially shorter time-to-market",
];

const Row: React.FC<{ text: string; startFrame: number }> = ({ text, startFrame }) => (
  <SlidePopIn startFrame={startFrame} fromY={30} style={{ marginBottom: 30 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          backgroundColor: v2Colors.passBg,
          color: v2Colors.pass,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        ✓
      </div>
      <div style={{ fontSize: 46, fontWeight: 600, color: v2Colors.ink }}>{text}</div>
    </div>
  </SlidePopIn>
);

export const Scene03ValueProp: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.bg, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {benefits.map((b, i) => (
          <Row key={b} text={b} startFrame={i * 22} />
        ))}
      </div>
      <SlidePopIn startFrame={90} fromY={20} style={{ marginTop: 40 }}>
        <div style={{ fontSize: 28, color: v2Colors.mutedInk, fontStyle: "italic" }}>
          MRMG's independent oversight stays fully intact.
        </div>
      </SlidePopIn>
    </AbsoluteFill>
  );
};
