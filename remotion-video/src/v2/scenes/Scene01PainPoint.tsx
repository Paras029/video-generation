import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { v2Colors, fonts, gradients } from "../theme-v2";
import { TypedText } from "../components/TypedText";
import { PeopleGroup } from "../components/PersonIcon";
import { DocumentToken } from "../components/DocumentToken";
import { easings } from "../../anim/easings";

const OWNER_X = 560;
const MRMG_X = 1360;
const DOC_Y = 250;
const PEOPLE_Y = 380;
const LABEL_Y = 448;
const CYCLE = 130;
const TRAVEL = 55;
const HOLD = 10;

const GroupLabel: React.FC<{ x: number; label: string; sub: string }> = ({ x, label, sub }) => (
  <div style={{ position: "absolute", left: x, top: LABEL_Y, transform: "translateX(-50%)", textAlign: "center" }}>
    <div style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", fontFamily: fonts.display, letterSpacing: 1 }}>
      {label}
    </div>
    <div style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 4, fontFamily: fonts.body }}>{sub}</div>
  </div>
);

export const Scene01PainPoint: React.FC = () => {
  const frame = useCurrentFrame();
  const introOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const t = frame % CYCLE;
  let x: number;
  let flagged: boolean;

  if (t < TRAVEL) {
    // outbound: owner -> MRMG
    const p = interpolate(t, [0, TRAVEL], [0, 1], { easing: easings.slowInLand, extrapolateRight: "clamp" });
    x = OWNER_X + (MRMG_X - OWNER_X) * p;
    flagged = false;
  } else if (t < TRAVEL + HOLD) {
    x = MRMG_X;
    flagged = t > TRAVEL + 3;
  } else if (t < TRAVEL + HOLD + TRAVEL) {
    // return: MRMG -> owner, flagged with clarifications
    const p = interpolate(t - (TRAVEL + HOLD), [0, TRAVEL], [0, 1], {
      easing: easings.slowInLand,
      extrapolateRight: "clamp",
    });
    x = MRMG_X + (OWNER_X - MRMG_X) * p;
    flagged = true;
  } else {
    x = OWNER_X;
    flagged = t < CYCLE - 4;
  }

  const flightProgress = (x - OWNER_X) / (MRMG_X - OWNER_X);
  const arc = Math.sin(Math.max(0, Math.min(1, flightProgress)) * Math.PI) * 46;
  const docOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: gradients.navy }}>
      <AbsoluteFill style={{ opacity: introOpacity }}>
        <div style={{ position: "absolute", left: OWNER_X, top: PEOPLE_Y, transform: "translateX(-50%)" }}>
          <PeopleGroup />
        </div>
        <div style={{ position: "absolute", left: MRMG_X, top: PEOPLE_Y, transform: "translateX(-50%)" }}>
          <PeopleGroup />
        </div>
        <GroupLabel x={OWNER_X} label="MODEL OWNER" sub="1LOD" />
        <GroupLabel x={MRMG_X} label="MRMG" sub="2LOD" />

        {/* Dotted flight path */}
        <div
          style={{
            position: "absolute",
            left: OWNER_X,
            top: DOC_Y + 90,
            width: MRMG_X - OWNER_X,
            height: 0,
            borderTop: "2px dashed rgba(255,255,255,0.15)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: x,
            top: DOC_Y - arc,
            transform: "translate(-50%, -50%)",
            opacity: docOpacity,
          }}
        >
          <DocumentToken flagged={flagged} />
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 130,
          fontFamily: fonts.display,
        }}
      >
        <div style={{ maxWidth: 1700, textAlign: "center" }}>
          <TypedText
            text="Due to disconnect between various teams on expectations for model validation and requirements for challenges raised,"
            startFrame={5}
            perWord={7}
            style={{ fontSize: 38, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4 }}
          />
        </div>
        <div style={{ maxWidth: 1500, textAlign: "center", marginTop: 20, fontFamily: fonts.body }}>
          <TypedText
            text="model validation journey often takes more time than anticipated, leading to delayed time-to-market for critical solutions."
            startFrame={95}
            perWord={6}
            style={{ fontSize: 26, fontWeight: 500, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
