import { interpolate, useCurrentFrame } from "remotion";
import { easings } from "../../anim/easings";
import { v2Colors, fontStack } from "../theme-v2";
import { ProductChrome, TAB_X, TAB_Y, TabKey } from "./ProductChrome";
import { Cursor, CursorKeyframe } from "./Cursor";
import { TRANSITION_DUR } from "../timings";

const CLICK_TRAVEL = 15;

function buildKeyframes({
  entryAnimation,
  activeTab,
  exitClickTarget,
  durationInFrames,
}: {
  entryAnimation: boolean;
  activeTab: TabKey;
  exitClickTarget?: TabKey;
  durationInFrames: number;
}): CursorKeyframe[] {
  const kfs: CursorKeyframe[] = [];

  if (entryAnimation) {
    kfs.push({ frame: 0, x: 960, y: 860 });
    kfs.push({ frame: 16, x: TAB_X[activeTab], y: TAB_Y, click: true });
  } else {
    kfs.push({ frame: 0, x: TAB_X[activeTab], y: TAB_Y });
  }

  if (exitClickTarget) {
    const clickFrame = durationInFrames - TRANSITION_DUR - 3;
    const moveStart = clickFrame - CLICK_TRAVEL;
    kfs.push({ frame: moveStart, x: TAB_X[activeTab], y: TAB_Y });
    kfs.push({ frame: clickFrame, x: TAB_X[exitClickTarget], y: TAB_Y, click: true });
  }

  return kfs;
}

export interface ModuleSceneProps {
  activeTab: TabKey;
  durationInFrames: number;
  /** Only the first module scene animates the cursor arriving + clicking its own tab. */
  entryAnimation?: boolean;
  /** Tab the cursor clicks near the end of this scene, driving the transition onward. */
  exitClickTarget?: TabKey;
  benefitCaption: string;
  benefitCaptionFrame?: number;
  children: React.ReactNode;
}

export const ModuleScene: React.FC<ModuleSceneProps> = ({
  activeTab,
  durationInFrames,
  entryAnimation = false,
  exitClickTarget,
  benefitCaption,
  benefitCaptionFrame = 75,
  children,
}) => {
  const frame = useCurrentFrame();
  const contentStart = entryAnimation ? 20 : 0;

  const contentOpacity = interpolate(frame, [contentStart, contentStart + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.soft,
  });
  const contentY = interpolate(frame, [contentStart, contentStart + 15], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.soft,
  });

  const captionOpacity = interpolate(
    frame,
    [benefitCaptionFrame, benefitCaptionFrame + 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easings.soft }
  );
  const captionY = interpolate(frame, [benefitCaptionFrame, benefitCaptionFrame + 15], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.soft,
  });

  const keyframes = buildKeyframes({ entryAnimation, activeTab, exitClickTarget, durationInFrames });

  return (
    <ProductChrome activeTab={activeTab}>
      <div style={{ opacity: contentOpacity, transform: `translateY(${contentY}px)`, height: "100%" }}>
        {children}
      </div>

      <div
        style={{
          position: "absolute",
          left: 56,
          bottom: 30,
          opacity: captionOpacity,
          transform: `translateY(${captionY}px)`,
          fontFamily: fontStack,
          fontSize: 20,
          fontWeight: 600,
          color: v2Colors.ink,
        }}
      >
        {benefitCaption}
      </div>

      <Cursor keyframes={keyframes} />
    </ProductChrome>
  );
};
