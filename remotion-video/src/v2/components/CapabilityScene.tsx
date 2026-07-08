import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors } from "../theme-v2";
import { SlidePopIn } from "./PopIn";
import { TypedText } from "./TypedText";

export interface CapabilitySceneProps {
  eyebrow: string;
  headline: string;
  subtext: string;
  screenshot: string;
}

export const CapabilityScene: React.FC<CapabilitySceneProps> = ({
  eyebrow,
  headline,
  subtext,
  screenshot,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.bg }}>
      <AbsoluteFill style={{ padding: "70px 90px", flexDirection: "column" }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: v2Colors.blue, letterSpacing: 2 }}>
          {eyebrow.toUpperCase()}
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, color: v2Colors.navy, marginTop: 6 }}>
          {headline}
        </div>
        <div style={{ maxWidth: 1100, marginTop: 14 }}>
          <TypedText
            text={subtext}
            startFrame={8}
            perWord={6}
            style={{ fontSize: 30, fontWeight: 500, color: v2Colors.mutedInk, lineHeight: 1.5 }}
          />
        </div>

        <SlidePopIn
          startFrame={16}
          fromY={40}
          style={{ marginTop: 36, alignSelf: "center", flex: 1, display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 30px 70px rgba(0,23,90,0.22)",
              border: `1px solid ${v2Colors.cardBorder}`,
              maxWidth: 1500,
            }}
          >
            <Img src={staticFile(screenshot)} style={{ width: "100%", display: "block" }} />
          </div>
        </SlidePopIn>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
