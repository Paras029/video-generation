import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { easings } from "../../anim/easings";

export interface TypedTextProps {
  text: string;
  startFrame: number;
  perWord?: number;
  overlap?: number;
  className?: string;
  style?: React.CSSProperties;
  riseDistance?: number;
}

export const TypedText: React.FC<TypedTextProps> = ({
  text,
  startFrame,
  perWord = 10,
  overlap = 0.6,
  className,
  style,
  riseDistance = 12,
}) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");
  const stepBetweenWords = perWord * overlap;

  return (
    <span className={className} style={style}>
      {words.map((w, i) => {
        const local = frame - startFrame - i * stepBetweenWords;
        const p = interpolate(local, [0, perWord], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: easings.maskReveal,
        });
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: p,
              transform: `translateY(${(1 - p) * riseDistance}px)`,
              marginRight: "0.25em",
              whiteSpace: "pre",
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
};
