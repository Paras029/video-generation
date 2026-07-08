import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { v2Colors } from "../theme-v2";
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
    <div style={{ fontSize: 30, fontWeight: 700, color: "#FFFFFF" }}>{label}</div>
    <div style={{ fontSize: 20, color: "rgba(255,255,255,0.55)", marginTop: 6 }}>{sub}</div>
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
          paddingBottom: 140,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 1400, textAlign: "center" }}>
          <TypedText
            text="Model validation today means months of back-and-forth"
            startFrame={5}
            perWord={8}
            style={{ fontSize: 46, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.4 }}
          />
          <br />
          <TypedText
            text="before a single model ever reaches production."
            startFrame={70}
            perWord={8}
            style={{ fontSize: 46, fontWeight: 600, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
