import { interpolate, useCurrentFrame } from "remotion";
import { easings } from "../../anim/easings";

export interface RevealTextProps {
  text: string;
  startFrame: number;
  duration?: number;
  style?: React.CSSProperties;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, startFrame, duration = 20, style }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.soft,
  });

  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * 18}px)`,
        ...style,
      }}
    >
      {text}
    </div>
  );
};
