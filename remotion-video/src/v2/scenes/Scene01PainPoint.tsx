import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { v2Colors, fonts, gradients } from "../theme-v2";
import { RevealText } from "../components/RevealText";
import { PeopleGroup } from "../components/PersonIcon";
import { DocumentToken } from "../components/DocumentToken";
import { CommentBubble } from "../components/CommentBubble";
import { AmbientGlow } from "../components/AmbientGlow";
import { easings } from "../../anim/easings";

const OWNER_X = 560;
const MRMG_X = 1360;
const Y0 = 260; // baseline where the document rests at each side
const ARC = 95; // vertical offset of each loop leg
const PEOPLE_Y = 430;
const LABEL_Y = 498;
const BUBBLE_Y = 90;

const CYCLE = 195;
const TRAVEL = 60;
const OUT_START = 22; // submission leg starts (top arc, owner -> MRMG)
const OUT_END = OUT_START + TRAVEL; // 82
const BACK_START = 122; // feedback leg starts (bottom arc, MRMG -> owner)
const BACK_END = BACK_START + TRAVEL; // 182

const triangle = (t: number, start: number, fadeIn: number, hold: number, fadeOut: number) =>
  interpolate(t, [start, start + fadeIn, start + fadeIn + hold, start + fadeIn + hold + fadeOut], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const GroupLabel: React.FC<{ x: number; label: string; sub: string }> = ({ x, label, sub }) => (
  <div style={{ position: "absolute", left: x, top: LABEL_Y, transform: "translateX(-50%)", textAlign: "center" }}>
    <div style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", fontFamily: fonts.display, letterSpacing: 1 }}>
      {label}
    </div>
    <div style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 4, fontFamily: fonts.body }}>{sub}</div>
  </div>
);

// Faint racetrack guide - the top leg is the submission path, the bottom leg
// is the feedback/rework path, so the loop shape itself reads as the cycle.
const LoopGuide: React.FC = () => {
  const midX = (OWNER_X + MRMG_X) / 2;
  const topPeak = Y0 - ARC * 1.65;
  const bottomPeak = Y0 + ARC * 1.65;
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <path
        d={`M ${OWNER_X} ${Y0} Q ${midX} ${topPeak} ${MRMG_X} ${Y0}`}
        stroke="rgba(255,255,255,0.14)"
        strokeWidth={2}
        strokeDasharray="1 10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M ${MRMG_X} ${Y0} Q ${midX} ${bottomPeak} ${OWNER_X} ${Y0}`}
        stroke="rgba(255,255,255,0.14)"
        strokeWidth={2}
        strokeDasharray="1 10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const Scene01PainPoint: React.FC = () => {
  const frame = useCurrentFrame();
  const introOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const docOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const t = frame % CYCLE;

  let x = OWNER_X;
  let y = Y0;
  let flagged = false;

  if (t >= OUT_START && t < OUT_END) {
    const p = interpolate(t, [OUT_START, OUT_END], [0, 1], { easing: easings.slowInLand });
    x = OWNER_X + (MRMG_X - OWNER_X) * p;
    y = Y0 - Math.sin(p * Math.PI) * ARC;
    flagged = false;
  } else if (t >= OUT_END && t < BACK_START) {
    x = MRMG_X;
    y = Y0;
    flagged = false;
  } else if (t >= BACK_START && t < BACK_END) {
    const p = interpolate(t, [BACK_START, BACK_END], [0, 1], { easing: easings.slowInLand });
    x = MRMG_X + (OWNER_X - MRMG_X) * p;
    y = Y0 + Math.sin(p * Math.PI) * ARC;
    flagged = true;
  } else if (t >= BACK_END) {
    x = OWNER_X;
    y = Y0;
    flagged = true;
  }

  const bubble1 = triangle(t, 0, 8, 18, 8); // "Validation artifacts submitted"
  const bubbleReviewing = triangle(t, 82, 8, 10, 8);
  const bubbleFeedback = triangle(t, 102, 8, 18, 8);

  return (
    <AbsoluteFill style={{ background: gradients.navy }}>
      <AmbientGlow />
      <AbsoluteFill style={{ opacity: introOpacity }}>
        <LoopGuide />

        <div style={{ position: "absolute", left: OWNER_X, top: PEOPLE_Y, transform: "translateX(-50%)" }}>
          <PeopleGroup />
        </div>
        <div style={{ position: "absolute", left: MRMG_X, top: PEOPLE_Y, transform: "translateX(-50%)" }}>
          <PeopleGroup />
        </div>
        <GroupLabel x={OWNER_X} label="MODEL OWNER" sub="1LOD" />
        <GroupLabel x={MRMG_X} label="MRMG" sub="2LOD" />

        <CommentBubble x={OWNER_X} y={BUBBLE_Y} text="Validation artifacts submitted" opacity={bubble1} />
        <CommentBubble x={MRMG_X} y={BUBBLE_Y} text="Reviewing" opacity={bubbleReviewing} />
        <CommentBubble
          x={MRMG_X}
          y={BUBBLE_Y}
          text="Feedback and challenges on submission"
          opacity={bubbleFeedback}
          tone="warn"
        />

        <div
          style={{
            position: "absolute",
            left: x,
            top: y,
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
          <RevealText
            text="Due to disconnect between various teams on expectations for model validation and requirements for challenges raised,"
            startFrame={5}
            duration={22}
            style={{ fontSize: 38, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4 }}
          />
        </div>
        <div style={{ maxWidth: 1500, textAlign: "center", marginTop: 20, fontFamily: fonts.body }}>
          <RevealText
            text="model validation journey often takes more time than anticipated, leading to delayed time-to-market for critical solutions."
            startFrame={95}
            duration={22}
            style={{ fontSize: 26, fontWeight: 500, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
