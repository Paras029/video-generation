import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors, fonts } from "../theme-v2";
import { SlidePopIn } from "./PopIn";
import { TypedText } from "./TypedText";

export interface CapabilitySceneProps {
  headline: string;
  subtext: string;
  screenshot: string;
}

export const CapabilityScene: React.FC<CapabilitySceneProps> = ({ headline, subtext, screenshot }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.bg }}>
      <AbsoluteFill style={{ padding: "64px 90px", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: 52, fontWeight: 800, color: v2Colors.navy, fontFamily: fonts.display }}>
          {headline}
        </div>
        <div style={{ maxWidth: 1150, marginTop: 12, textAlign: "center" }}>
          <TypedText
            text={subtext}
            startFrame={8}
            perWord={6}
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
            <Img src={staticFile(screenshot)} style={{ height: 560, width: "auto", display: "block" }} />
          </div>
        </SlidePopIn>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
