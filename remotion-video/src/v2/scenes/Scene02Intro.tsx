import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors, fontStack, wordmarkFontStack } from "../theme-v2";
import { PopIn } from "../components/PopIn";
import { TypedText } from "../components/TypedText";

export const Scene02Intro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.bg, alignItems: "center", justifyContent: "center" }}>
      <PopIn startFrame={0} style={{ marginBottom: 28 }}>
        <Img src={staticFile("screenshots/amex-logo.png")} style={{ height: 60 }} />
      </PopIn>

      <PopIn startFrame={8} config={{ damping: 14 }}>
        <div
          style={{
            fontSize: 140,
            fontWeight: 700,
            color: v2Colors.navy,
            fontFamily: wordmarkFontStack,
            letterSpacing: -1,
          }}
        >
          VaaS
        </div>
      </PopIn>

      <div style={{ fontSize: 32, color: v2Colors.blue, fontWeight: 600, marginTop: 2, fontFamily: fontStack }}>
        Validation-as-a-Service
      </div>

      <div style={{ maxWidth: 1200, textAlign: "center", marginTop: 60 }}>
        <TypedText
          text="A shift-left platform so submissions arrive ready — while MRMG's review stays independent."
          startFrame={48}
          perWord={7}
          style={{ fontSize: 34, fontWeight: 500, color: v2Colors.ink, lineHeight: 1.5, fontFamily: fontStack }}
        />
      </div>
    </AbsoluteFill>
  );
};
