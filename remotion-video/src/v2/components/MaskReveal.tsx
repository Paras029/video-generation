// Gotcha: do NOT apply transform: scale(...) to children of MaskReveal -
// it distorts the clip-path coordinate space and produces visible seams.

import { interpolate, useCurrentFrame } from "remotion";
import { easings } from "../../anim/easings";

export type MaskDirection = "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";

export interface MaskRevealProps {
  startFrame: number;
  duration?: number;
  direction?: MaskDirection;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const MaskReveal: React.FC<MaskRevealProps> = ({
  startFrame,
  duration = 14,
  direction = "left-to-right",
  children,
  style,
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame - startFrame, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.maskReveal,
  });

  let clipPath: string;
  switch (direction) {
    case "left-to-right":
      clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
      break;
    case "right-to-left":
      clipPath = `inset(0 0 0 ${(1 - p) * 100}%)`;
      break;
    case "top-to-bottom":
      clipPath = `inset(0 0 ${(1 - p) * 100}% 0)`;
      break;
    case "bottom-to-top":
      clipPath = `inset(${(1 - p) * 100}% 0 0 0)`;
      break;
  }

  return (
    <div
      style={{
        clipPath,
        WebkitClipPath: clipPath,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
