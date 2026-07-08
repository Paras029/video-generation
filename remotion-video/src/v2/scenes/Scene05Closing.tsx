import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors, fonts } from "../theme-v2";
import { TypedText } from "../components/TypedText";
import { PopIn } from "../components/PopIn";

export const Scene05Closing: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.navy, alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 1400, textAlign: "center", marginBottom: 50 }}>
        <TypedText
          text="One platform. Two lines of defense."
          startFrame={0}
          perWord={8}
          style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4, fontFamily: fonts.display }}
        />
        <br />
        <TypedText
          text="A faster, smarter path from build to validated model."
          startFrame={50}
          perWord={8}
          style={{ fontSize: 48, fontWeight: 700, color: "rgba(255,255,255,0.75)", lineHeight: 1.4, fontFamily: fonts.display }}
        />
      </div>

      <PopIn startFrame={120} config={{ damping: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Img src={staticFile("screenshots/amex-logo.png")} style={{ height: 56 }} />
          <div style={{ fontSize: 60, fontWeight: 800, color: "#FFFFFF", fontFamily: fonts.display }}>VaaS</div>
        </div>
      </PopIn>

      <PopIn startFrame={150}>
        <div style={{ fontSize: 28, color: v2Colors.blue, marginTop: 26, fontWeight: 600, fontFamily: fonts.body }}>
          modelvalidation.aexp.com
        </div>
      </PopIn>
    </AbsoluteFill>
  );
};
