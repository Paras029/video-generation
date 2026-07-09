import { AbsoluteFill, useCurrentFrame } from "remotion";

// Slow-drifting soft glows for navy scenes, so the background reads as
// alive rather than a flat fill behind the content.
export const AmbientGlow: React.FC = () => {
  const frame = useCurrentFrame();
  const drift1 = Math.sin(frame / 200) * 40;
  const drift2 = Math.cos(frame / 260) * 50;

  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: -200 + drift1,
          top: -260,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(80,120,255,0.16) 0%, rgba(80,120,255,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -260 + drift2,
          bottom: -300,
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(60,90,220,0.14) 0%, rgba(60,90,220,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: -420,
          width: 1300,
          height: 1300,
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,150,255,0.08) 0%, rgba(120,150,255,0) 65%)",
        }}
      />
    </AbsoluteFill>
  );
};
