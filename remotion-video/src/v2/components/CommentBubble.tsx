import { v2Colors, fonts } from "../theme-v2";

export const CommentBubble: React.FC<{
  x: number;
  y: number;
  text: string;
  opacity: number;
  tone?: "neutral" | "warn";
}> = ({ x, y, text, opacity, tone = "neutral" }) => {
  const accent = tone === "warn" ? v2Colors.fail : v2Colors.blue;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${0.94 + opacity * 0.06})`,
        opacity,
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          padding: "12px 20px",
          boxShadow: "0 14px 34px rgba(0,10,50,0.35)",
          borderTop: `3px solid ${accent}`,
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ fontSize: 17, fontWeight: 700, color: v2Colors.ink, fontFamily: fonts.body }}>{text}</div>
        <div
          style={{
            position: "absolute",
            bottom: -7,
            left: "50%",
            width: 14,
            height: 14,
            backgroundColor: "#FFFFFF",
            transform: "translateX(-50%) rotate(45deg)",
          }}
        />
      </div>
    </div>
  );
};
