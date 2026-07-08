import { interpolate, useCurrentFrame } from "remotion";
import { easings } from "../../anim/easings";

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

export const DonutChart: React.FC<{
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
  startFrame?: number;
}> = ({ segments, size = 200, strokeWidth = 28, startFrame = 0 }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.slowInLand,
  });

  const total = segments.reduce((a, s) => a + s.value, 0) || 1;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const cx = size / 2;
  const cy = size / 2;

  let cumulative = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`rotate(-90 ${cx} ${cy})`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#EEF0F4" strokeWidth={strokeWidth} />
        {segments.map((seg, i) => {
          const segLen = (seg.value / total) * circumference * progress;
          const offset = -((cumulative / total) * circumference);
          cumulative += seg.value;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segLen} ${circumference - segLen}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
            />
          );
        })}
      </g>
    </svg>
  );
};
