import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { v2Colors, fonts, gradients } from "../theme-v2";
import { SlidePopIn, PopIn } from "./PopIn";
import { RevealText } from "./RevealText";
import { easings } from "../../anim/easings";

export interface CapabilitySceneProps {
  headline: string;
  subtext: string;
  screenshot: string;
}

export const CapabilityScene: React.FC<CapabilitySceneProps> = ({ headline, subtext, screenshot }) => {
  const frame = useCurrentFrame();
  // Slow Ken Burns drift on the screenshot - reads as a captured video frame
  // rather than a static image dropped onto a slide.
  const zoom = interpolate(frame, [0, 280], [1, 1.035], {
    easing: easings.soft,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: gradients.bg }}>
      <AbsoluteFill style={{ padding: "64px 90px", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: 52, fontWeight: 800, color: v2Colors.navy, fontFamily: fonts.display }}>
          {headline}
        </div>
        <PopIn startFrame={2} config={{ damping: 20 }} style={{ transformOrigin: "center", marginTop: 10 }}>
          <div style={{ width: 64, height: 5, borderRadius: 3, backgroundColor: v2Colors.blue }} />
        </PopIn>
        <div style={{ maxWidth: 1150, marginTop: 18, textAlign: "center" }}>
          <RevealText
            text={subtext}
            startFrame={10}
            duration={20}
            style={{ fontSize: 27, fontWeight: 500, color: v2Colors.mutedInk, lineHeight: 1.5, fontFamily: fonts.body }}
          />
        </div>

        <SlidePopIn startFrame={16} fromY={40} style={{ marginTop: 34, flex: 1, display: "flex", alignItems: "center" }}>
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 30px 70px rgba(0,23,90,0.18)",
              display: "flex",
            }}
          >
            <Img
              src={staticFile(screenshot)}
              style={{ height: 560, width: "auto", display: "block", transform: `scale(${zoom})` }}
            />
          </div>
        </SlidePopIn>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
