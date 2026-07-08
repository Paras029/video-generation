import { v2Colors } from "../theme-v2";
import { Pill, PillStatus } from "../components/Pill";
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

const tests: { name: string; alerts: number; status: PillStatus }[] = [
  { name: "Variable Stability", alerts: 0, status: "Pass" },
  { name: "Variable - Target Relationship", alerts: 0, status: "Pass" },
  { name: "Variable Correlation", alerts: 1, status: "Fail" },
  { name: "Variable Ranks and Plots", alerts: 341, status: "Fail" },
  { name: "Model Weak Spots (GINI)", alerts: 0, status: "Pass" },
];

export const MetricScreen: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 24 }}>
      <PlaceholderHeader />

      <div style={{ ...CARD, padding: "28px 40px" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: v2Colors.ink, marginBottom: 20 }}>Summary</div>
        <div style={{ display: "flex" }}>
          <SummaryNumber value={6} label="Applicable" color={v2Colors.blue} />
          <SummaryNumber value={4} label="Passed" color={v2Colors.pass} />
          <SummaryNumber value={2} label="Failed" color={v2Colors.fail} />
          <SummaryNumber value={0} label="Errored" color={v2Colors.warn} />
        </div>
      </div>

      <div style={{ ...CARD, flex: 1, padding: 28, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: v2Colors.ink, marginBottom: 18 }}>Results</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 150px", fontSize: 13, fontWeight: 700, color: v2Colors.mutedInk, paddingBottom: 10, borderBottom: `1px solid ${v2Colors.cardBorder}` }}>
          <div>Test</div>
          <div>Alerts</div>
          <div>Status</div>
        </div>
        {tests.map((t) => (
          <div
            key={t.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 160px 150px",
              alignItems: "center",
              padding: "14px 0",
              borderBottom: `1px solid ${v2Colors.cardBorder}`,
              fontSize: 15,
            }}
          >
            <div style={{ color: v2Colors.ink }}>{t.name}</div>
            <div style={{ fontWeight: 700, color: t.alerts > 0 ? v2Colors.fail : v2Colors.mutedInk }}>
              {t.alerts}
            </div>
            <div>
              <Pill status={t.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
