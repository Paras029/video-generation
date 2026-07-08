import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { v2Colors, fonts } from "../theme-v2";
import { TypedText } from "../components/TypedText";

const NodeBox: React.FC<{ label: string; sub: string }> = ({ label, sub }) => (
  <div
    style={{
      border: `2px solid rgba(255,255,255,0.25)`,
      borderRadius: 16,
      padding: "28px 40px",
      textAlign: "center",
      minWidth: 340,
    }}
  >
    <div style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", fontFamily: fonts.display }}>{label}</div>
    <div style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", marginTop: 6, fontFamily: fonts.body }}>{sub}</div>
  </div>
);

export const Scene01PainPoint: React.FC = () => {
  const frame = useCurrentFrame();

  // Back-and-forth arrow oscillating between the two boxes
  const cycle = 40;
  const t = (frame % cycle) / cycle;
  const swing = Math.sin(t * Math.PI * 2);
  const arrowX = swing * 22;
  const arrowOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.navy }}>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 90,
          flexDirection: "row",
          top: -160,
        }}
      >
        <NodeBox label="MODEL OWNER" sub="1LOD" />
        <div
          style={{
            fontSize: 44,
            color: v2Colors.blue,
            opacity: arrowOpacity,
            transform: `translateX(${arrowX}px)`,
          }}
        >
          ⇄
        </div>
        <NodeBox label="MRMG" sub="2LOD" />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 150,
          fontFamily: fonts.display,
        }}
      >
        <div style={{ maxWidth: 1400, textAlign: "center" }}>
          <TypedText
            text="Model validation often takes longer than expected."
            startFrame={5}
            perWord={8}
            style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4 }}
          />
        </div>
        <div style={{ maxWidth: 1100, textAlign: "center", marginTop: 22, fontFamily: fonts.body }}>
          <TypedText
            text="A disconnect between modeling teams and MRMG on requirements is usually why."
            startFrame={65}
            perWord={7}
            style={{ fontSize: 26, fontWeight: 500, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
