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
const PEOPLE_Y = 430; // top of the person icons
const PEOPLE_BOTTOM = PEOPLE_Y + 56; // bottom of the tallest person icon
const TOP_Y = PEOPLE_Y - 12; // submission leg touches just above the people
const BOTTOM_Y = PEOPLE_BOTTOM - 14; // feedback leg touches just below the people
const ARC = 60; // vertical bulge of each loop leg - kept small so the loop
// stays contained near the people instead of reaching down toward the label
const DOC_SCALE = 0.72; // smaller token gives more clearance from the label
const LABEL_Y = 500;
const BUBBLE_Y = 90;

const CYCLE = 195;
const TRAVEL = 60;
const OUT_START = 22; // submission leg starts (top arc, owner -> MRMG)
const OUT_END = OUT_START + TRAVEL; // 82
const BACK_START = 122; // feedback leg starts (bottom arc, MRMG -> owner)
const BACK_END = BACK_START + TRAVEL; // 182
const HOLD_OWNER_LEN = CYCLE - BACK_END + OUT_START; // 35

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

export const Scene01PainPoint: React.FC = () => {
  const frame = useCurrentFrame();
  const introOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const docOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const t = frame % CYCLE;

  // The document's path is anchored directly on the people: it leaves and
  // arrives at the TOP of each group on the outbound (submission) leg, and
  // at the BOTTOM of each group on the return (feedback) leg, so the loop
  // visually wraps around the two teams instead of floating above them.
  let x = OWNER_X;
  let y = TOP_Y;
  let flagged = false;

  if (t >= OUT_START && t < OUT_END) {
    // symmetric easing keeps the horizontal and vertical motion in sync, so
    // the bulge always decays back to baseline exactly as the document
    // reaches its destination x - a front-loaded landing ease would let x
    // arrive early while the arc is still near its peak, dropping the
    // document into the label text below.
    const p = interpolate(t, [OUT_START, OUT_END], [0, 1], { easing: easings.soft });
    x = OWNER_X + (MRMG_X - OWNER_X) * p;
    y = TOP_Y - Math.sin(p * Math.PI) * ARC;
  } else if (t >= OUT_END && t < BACK_START) {
    // holding at MRMG - drifts from the top anchor down to the bottom
    // anchor, ready to depart on the return leg
    x = MRMG_X;
    const p = interpolate(t, [OUT_END, BACK_START], [0, 1], { easing: easings.soft });
    y = TOP_Y + (BOTTOM_Y - TOP_Y) * p;
  } else if (t >= BACK_START && t < BACK_END) {
    const p = interpolate(t, [BACK_START, BACK_END], [0, 1], { easing: easings.soft });
    x = MRMG_X + (OWNER_X - MRMG_X) * p;
    y = BOTTOM_Y + Math.sin(p * Math.PI) * ARC;
    flagged = true;
  } else {
    // holding at Owner - drifts from the bottom anchor back up to the top
    // anchor, ready for the next submission; wraps across the cycle seam
    x = OWNER_X;
    const elapsed = t >= BACK_END ? t - BACK_END : t + (CYCLE - BACK_END);
    const p = interpolate(elapsed, [0, HOLD_OWNER_LEN], [0, 1], { easing: easings.soft });
    y = BOTTOM_Y - (BOTTOM_Y - TOP_Y) * p;
    flagged = true;
  }

  const bubble1 = triangle(t, 0, 8, 18, 8); // "Validation artifacts submitted"
  const bubbleReviewing = triangle(t, 82, 8, 10, 8);
  const bubbleFeedback = triangle(t, 102, 8, 18, 8);

  return (
    <AbsoluteFill style={{ background: gradients.navy }}>
      <AmbientGlow />
      <AbsoluteFill style={{ opacity: introOpacity }}>
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
          <DocumentToken flagged={flagged} scale={DOC_SCALE} />
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
