import { interpolate, useCurrentFrame } from "remotion";
import { easings } from "../../anim/easings";
import { v2Colors } from "../theme-v2";

export interface CursorKeyframe {
  frame: number;
  x: number;
  y: number;
  /** Marks this waypoint as a click - renders a ripple + pointer scale-down here. */
  click?: boolean;
}

const RIPPLE_DUR = 15;

// Pointer arrives ~400-600ms (12-18 frames @ 30fps) before it settles at a
// waypoint - eased, not linear, per the spec.
export const Cursor: React.FC<{ keyframes: CursorKeyframe[] }> = ({ keyframes }) => {
  const frame = useCurrentFrame();

  if (keyframes.length === 0) return null;

  let x = keyframes[0].x;
  let y = keyframes[0].y;

  if (frame <= keyframes[0].frame) {
    x = keyframes[0].x;
    y = keyframes[0].y;
  } else if (frame >= keyframes[keyframes.length - 1].frame) {
    x = keyframes[keyframes.length - 1].x;
    y = keyframes[keyframes.length - 1].y;
  } else {
    for (let i = 0; i < keyframes.length - 1; i++) {
      const a = keyframes[i];
      const b = keyframes[i + 1];
      if (frame >= a.frame && frame <= b.frame) {
        x = interpolate(frame, [a.frame, b.frame], [a.x, b.x], {
          easing: easings.slowInLand,
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        y = interpolate(frame, [a.frame, b.frame], [a.y, b.y], {
          easing: easings.slowInLand,
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        break;
      }
    }
  }

  // Nearest click waypoint that has already happened, for the ripple + scale.
  const activeClick = [...keyframes]
    .filter((k) => k.click && frame >= k.frame && frame <= k.frame + RIPPLE_DUR)
    .pop();

  const clickScale = activeClick
    ? interpolate(
        frame,
        [activeClick.frame, activeClick.frame + 4, activeClick.frame + 10],
        [1, 0.82, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    : 1;

  const rippleProgress = activeClick
    ? interpolate(frame, [activeClick.frame, activeClick.frame + RIPPLE_DUR], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: easings.standard,
      })
    : 0;

  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      {activeClick && (
        <div
          style={{
            position: "absolute",
            left: x,
            top: y,
            width: 10 + rippleProgress * 46,
            height: 10 + rippleProgress * 46,
            marginLeft: -(10 + rippleProgress * 46) / 2,
            marginTop: -(10 + rippleProgress * 46) / 2,
            borderRadius: "50%",
            border: `2px solid ${v2Colors.blue}`,
            opacity: 1 - rippleProgress,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          transform: `translate(-4px, -2px) scale(${clickScale})`,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.35))",
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path
            d="M6 2 L6 24 L11.5 19.5 L15 27 L18.5 25.5 L15 18 L23 18 Z"
            fill="#1A1A1A"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
