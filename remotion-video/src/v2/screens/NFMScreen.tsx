import { v2Colors } from "../theme-v2";
import { Pill } from "../components/Pill";
import { PlaceholderHeader } from "./PlaceholderHeader";

const CARD: React.CSSProperties = {
  backgroundColor: v2Colors.cardBg,
  border: `1px solid ${v2Colors.cardBorder}`,
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
};

const SummaryNumber: React.FC<{ value: number; label: string; color: string }> = ({ value, label, color }) => (
  <div style={{ textAlign: "center", flex: 1 }}>
    <div style={{ fontSize: 40, fontWeight: 800, color }}>{value}</div>
    <div style={{ fontSize: 15, color: v2Colors.mutedInk, marginTop: 4 }}>{label}</div>
  </div>
);

const GaugeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path d="M4 15a8 8 0 1 1 16 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 15 L16 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ScalesIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v15M7 21h10M4 7h6M14 7h6M4 7l-2 5a3 3 0 0 0 6 0L6 7M20 7l-2 5a3 3 0 0 0 6 0l-2-5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DollarIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path d="M12 2v20M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.4-5 3.5S9.2 10 12 10s5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const tiles = [
  { label: "Model Performance", icon: <GaugeIcon />, verdict: "Pass" as const },
  { label: "Challenger vs. Champion", icon: <ScalesIcon />, verdict: "Pass" as const },
  { label: "Business Impact", icon: <DollarIcon />, verdict: "Pass" as const },
];

export const NFMScreen: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 24 }}>
      <PlaceholderHeader />

      <div style={{ ...CARD, padding: "28px 40px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: v2Colors.ink, marginBottom: 20 }}>Summary</div>
        <div style={{ display: "flex" }}>
          <SummaryNumber value={3} label="Total" color={v2Colors.blue} />
          <SummaryNumber value={3} label="Pass" color={v2Colors.pass} />
          <SummaryNumber value={0} label="Fail" color={v2Colors.fail} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 24, flex: 1 }}>
        {tiles.map((t) => (
          <div key={t.label} style={{ ...CARD, flex: 1, padding: 28, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", backgroundColor: v2Colors.blue, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {t.icon}
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, color: v2Colors.ink }}>{t.label}</div>
            <Pill status={t.verdict} />
          </div>
        ))}
      </div>
    </div>
  );
};
