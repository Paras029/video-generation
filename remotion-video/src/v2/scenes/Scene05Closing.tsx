import { AbsoluteFill, Img, staticFile } from "remotion";
import { v2Colors, fonts, gradients } from "../theme-v2";
import { RevealText } from "../components/RevealText";
import { PopIn } from "../components/PopIn";
import { AmbientGlow } from "../components/AmbientGlow";

export const Scene05Closing: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: gradients.navy, alignItems: "center", justifyContent: "center" }}>
      <AmbientGlow />
      <div style={{ maxWidth: 1400, textAlign: "center", marginBottom: 50 }}>
        <RevealText
          text="One platform. Two lines of defense."
          startFrame={0}
          duration={24}
          style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4, fontFamily: fonts.display }}
        />
        <RevealText
          text="A faster, smarter path for model validations."
          startFrame={50}
          duration={24}
          style={{ fontSize: 48, fontWeight: 700, color: "rgba(255,255,255,0.75)", lineHeight: 1.4, fontFamily: fonts.display }}
        />
      </div>

      <PopIn startFrame={120} config={{ damping: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Img src={staticFile("screenshots/amex-logo.png")} style={{ height: 56, borderRadius: 8 }} />
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
