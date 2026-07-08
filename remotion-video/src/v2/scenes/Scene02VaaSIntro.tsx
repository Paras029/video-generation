import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors } from "../theme-v2";
import { PopIn } from "../components/PopIn";
import { TypedText } from "../components/TypedText";

export const Scene02VaaSIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.bg, alignItems: "center", justifyContent: "center" }}>
      <PopIn startFrame={0} style={{ marginBottom: 28 }}>
        <Img src={staticFile("screenshots/amex-logo.png")} style={{ height: 64 }} />
      </PopIn>

      <PopIn startFrame={8} config={{ damping: 14 }}>
        <div
          style={{
            fontSize: 148,
            fontWeight: 800,
            color: v2Colors.navy,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: -2,
          }}
        >
          VaaS
        </div>
      </PopIn>

      <div style={{ fontSize: 34, color: v2Colors.blue, fontWeight: 600, marginTop: 4 }}>
        Validation-as-a-Service
      </div>

      <div style={{ maxWidth: 1300, textAlign: "center", marginTop: 56 }}>
        <TypedText
          text="A shift-left platform that lets model owners self-check their submissions before they ever reach MRMG."
          startFrame={50}
          perWord={7}
          style={{ fontSize: 38, fontWeight: 500, color: v2Colors.ink, lineHeight: 1.5 }}
        />
      </div>
    </AbsoluteFill>
  );
};
