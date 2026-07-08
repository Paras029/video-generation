import { v2Colors } from "../theme-v2";

export type PillStatus = "Pass" | "Fail" | "Missing" | "Insufficient" | "Not Applicable" | "Error";

const STATUS_STYLE: Record<PillStatus, { fg: string; bg: string }> = {
  Pass: { fg: v2Colors.pass, bg: v2Colors.passBg },
  Fail: { fg: v2Colors.fail, bg: v2Colors.failBg },
  Missing: { fg: v2Colors.fail, bg: v2Colors.failBg },
  Insufficient: { fg: v2Colors.warn, bg: v2Colors.warnBg },
  "Not Applicable": { fg: v2Colors.mutedInk, bg: "#EEF0F4" },
  Error: { fg: v2Colors.fail, bg: v2Colors.failBg },
};

export const Pill: React.FC<{ status: PillStatus; style?: React.CSSProperties }> = ({ status, style }) => {
  const s = STATUS_STYLE[status];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 14px",
        borderRadius: 999,
        fontSize: 14,
        fontWeight: 600,
        color: s.fg,
        backgroundColor: s.bg,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {status}
    </span>
  );
};
