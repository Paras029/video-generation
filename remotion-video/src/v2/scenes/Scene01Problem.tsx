import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { v2Colors, fontStack } from "../theme-v2";
import { TypedText } from "../components/TypedText";

const NodeBox: React.FC<{ label: string; sub: string }> = ({ label, sub }) => (
  <div
    style={{
      border: "2px solid rgba(255,255,255,0.25)",
      borderRadius: 16,
      padding: "28px 44px",
      textAlign: "center",
      minWidth: 320,
    }}
  >
    <div style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", fontFamily: fontStack }}>{label}</div>
    <div style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", marginTop: 6, fontFamily: fontStack }}>{sub}</div>
  </div>
);

const CYCLE = 75;
const GAP = 260;

// A single chevron looping across the gap between the two nodes, direction-aware.
const FlowArrow: React.FC<{ direction: 1 | -1; delay: number; y: number }> = ({ direction, delay, y }) => {
  const frame = useCurrentFrame();
  const local = (frame + delay) % CYCLE;
  const progress = local / CYCLE;
  const x = direction === 1 ? interpolate(progress, [0, 1], [0, GAP]) : interpolate(progress, [0, 1], [GAP, 0]);
  const opacity = interpolate(progress, [0, 0.12, 0.82, 1], [0, 1, 1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity,
        fontSize: 26,
        color: v2Colors.blue,
        transform: "translate(-50%, -50%)",
      }}
    >
      {direction === 1 ? "›" : "‹"}
    </div>
  );
};

export const Scene01Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const introOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.navy }}>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          top: -140,
          opacity: introOpacity,
        }}
      >
        <NodeBox label="Model Owner" sub="1LOD" />
        <div style={{ position: "relative", width: GAP, height: 50 }}>
          <FlowArrow direction={1} delay={0} y={16} />
          <FlowArrow direction={1} delay={25} y={16} />
          <FlowArrow direction={1} delay={50} y={16} />
          <FlowArrow direction={-1} delay={0} y={34} />
          <FlowArrow direction={-1} delay={25} y={34} />
          <FlowArrow direction={-1} delay={50} y={34} />
        </div>
        <NodeBox label="MRMG" sub="2LOD" />
      </AbsoluteFill>

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 150 }}>
        <div style={{ maxWidth: 1300, textAlign: "center", opacity: introOpacity }}>
          <TypedText
            text="Model validation today runs on repeated rounds of clarification."
            startFrame={10}
            perWord={9}
            style={{ fontSize: 44, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.4, fontFamily: fontStack }}
          />
        </div>
        <div style={{ marginTop: 26, opacity: interpolate(frame, [60, 78], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.55)", fontFamily: fontStack }}>
            Especially for teams going through it for the first time.
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
