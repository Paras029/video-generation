import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { v2Colors, fontStack, wordmarkFontStack } from "../theme-v2";
import { easings } from "../../anim/easings";

const benefits = ["Higher-quality submissions", "Fewer rejected reviews", "Shorter validation timelines"];

const BENEFITS_OUT_START = 190;
const BENEFITS_OUT_DUR = 20;
const END_CARD_IN_START = 205;

const BenefitItem: React.FC<{ text: string; startFrame: number; last: boolean }> = ({ text, startFrame, last }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.soft,
  });
  const y = interpolate(frame, [startFrame, startFrame + 18], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.soft,
  });

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ opacity, transform: `translateY(${y}px)`, fontSize: 34, fontWeight: 600, color: "#FFFFFF", fontFamily: fontStack, padding: "0 44px", textAlign: "center" }}>
        {text}
      </div>
      {!last && <div style={{ width: 1, height: 46, backgroundColor: "rgba(255,255,255,0.2)" }} />}
    </div>
  );
};

export const Scene06BenefitsClose: React.FC = () => {
  const frame = useCurrentFrame();

  const benefitsOpacity = interpolate(
    frame,
    [BENEFITS_OUT_START, BENEFITS_OUT_START + BENEFITS_OUT_DUR],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easings.standard }
  );

  const endCardOpacity = interpolate(
    frame,
    [END_CARD_IN_START, END_CARD_IN_START + 20],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easings.soft }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.navy }}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: benefitsOpacity }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {benefits.map((b, i) => (
            <BenefitItem key={b} text={b} startFrame={12 + i * 16} last={i === benefits.length - 1} />
          ))}
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: endCardOpacity }}>
        <Img src={staticFile("screenshots/amex-logo.png")} style={{ height: 56, marginBottom: 22 }} />
        <div style={{ fontSize: 108, fontWeight: 700, color: "#FFFFFF", fontFamily: wordmarkFontStack }}>VaaS</div>
        <div style={{ fontSize: 28, color: v2Colors.blue, fontWeight: 600, marginTop: 18, fontFamily: fontStack }}>
          Built for speed. Built for rigor.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
