import { v2Colors } from "../theme-v2";
import { Pill, PillStatus } from "../components/Pill";
import { DonutChart } from "../components/DonutChart";
import { PlaceholderHeader } from "./PlaceholderHeader";

const CARD: React.CSSProperties = {
  backgroundColor: v2Colors.cardBg,
  border: `1px solid ${v2Colors.cardBorder}`,
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
};

const rows: { no: number; question: string; verdict: PillStatus }[] = [
  { no: 1, question: "Does the model document follow the Enterprise-wide Documentation Standards?", verdict: "Not Applicable" },
  { no: 2, question: "Is the business objective and downstream impact of the use-case documented?", verdict: "Missing" },
  { no: 3, question: "Is the model impact on financial and regulatory reporting clear?", verdict: "Insufficient" },
  { no: 4, question: "Are model inputs and outputs well defined and bounded to this use-case?", verdict: "Pass" },
  { no: 5, question: "Are model limitations and compensating controls documented?", verdict: "Pass" },
];

const donutSegments = [
  { label: "Not Applicable", value: 14, color: v2Colors.donut1 },
  { label: "Missing", value: 8, color: v2Colors.donut2 },
  { label: "Insufficient", value: 8, color: v2Colors.donut3 },
  { label: "Complete", value: 2, color: v2Colors.donut4 },
];

export const TollGateScreen: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <PlaceholderHeader />
      <div style={{ display: "flex", gap: 28, flex: 1, minHeight: 0 }}>
        <div style={{ ...CARD, flex: 1.7, padding: 28, display: "flex", flexDirection: "column", minWidth: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: v2Colors.ink, marginBottom: 18 }}>
            Toll Gating Checklist
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 150px", fontSize: 13, fontWeight: 700, color: v2Colors.mutedInk, paddingBottom: 10, borderBottom: `1px solid ${v2Colors.cardBorder}` }}>
            <div>No.</div>
            <div>Question</div>
            <div>Verdict</div>
          </div>
          {rows.map((r) => (
            <div
              key={r.no}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr 150px",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: `1px solid ${v2Colors.cardBorder}`,
                fontSize: 15,
              }}
            >
              <div style={{ color: v2Colors.mutedInk }}>{r.no}</div>
              <div style={{ color: v2Colors.ink, paddingRight: 16, lineHeight: 1.4 }}>{r.question}</div>
              <div>
                <Pill status={r.verdict} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...CARD, width: 380, padding: 28, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: v2Colors.ink, alignSelf: "flex-start", marginBottom: 16 }}>
            Outcome Summary
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: v2Colors.fail }}>FAIL</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: v2Colors.mutedInk, marginBottom: 20 }}>
            58.87% Completeness
          </div>
          <DonutChart segments={donutSegments} size={190} strokeWidth={26} startFrame={10} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20, width: "100%" }}>
            {donutSegments.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: v2Colors.mutedInk }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: s.color, flexShrink: 0 }} />
                {s.label}: {s.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
