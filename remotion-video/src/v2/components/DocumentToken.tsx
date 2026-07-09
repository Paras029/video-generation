import { v2Colors } from "../theme-v2";

export const DocumentToken: React.FC<{ flagged?: boolean; scale?: number }> = ({
  flagged = false,
  scale = 1,
}) => (
  <div style={{ position: "relative", transform: `scale(${scale})` }}>
    <svg width="52" height="64" viewBox="0 0 52 64" fill="none">
      <path d="M4 2h32l12 12v48H4V2z" fill="#FFFFFF" />
      <path d="M36 2v12h12L36 2z" fill="#D7DEEC" />
      <rect x="12" y="24" width="28" height="3.4" rx="1.7" fill={v2Colors.cardBorder} />
      <rect x="12" y="33" width="28" height="3.4" rx="1.7" fill={v2Colors.cardBorder} />
      <rect x="12" y="42" width="18" height="3.4" rx="1.7" fill={v2Colors.cardBorder} />
    </svg>
    {flagged && (
      <div
        style={{
          position: "absolute",
          top: -8,
          right: -10,
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: v2Colors.fail,
          border: "2px solid #FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: 800,
          color: "#FFFFFF",
        }}
      >
        !
      </div>
    )}
  </div>
);
