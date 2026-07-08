import { AbsoluteFill } from "remotion";
import { v2Colors, fontStack } from "../theme-v2";

export type TabKey = "tollgate" | "nfm" | "metric";

const TABS: { key: TabKey; label: string; breadcrumb: string }[] = [
  { key: "tollgate", label: "Toll Gate Assist", breadcrumb: "Toll Gate Assist" },
  { key: "nfm", label: "Need For Model", breadcrumb: "Need For Model" },
  { key: "metric", label: "METRIC", breadcrumb: "METRIC" },
];

// Fixed layout constants shared with Cursor keyframes in the scene files -
// keep these two in sync if the tab bar layout ever changes.
export const NAV_BAR_H = 56;
export const TAB_BAR_H = 52;
export const TAB_WIDTH = 260;
export const TAB_GAP = 16;
export const TAB_BAR_LEFT = 48;
export const TAB_Y = NAV_BAR_H + TAB_BAR_H / 2;

export const TAB_X: Record<TabKey, number> = {
  tollgate: TAB_BAR_LEFT + TAB_WIDTH / 2,
  nfm: TAB_BAR_LEFT + TAB_WIDTH + TAB_GAP + TAB_WIDTH / 2,
  metric: TAB_BAR_LEFT + (TAB_WIDTH + TAB_GAP) * 2 + TAB_WIDTH / 2,
};

export const ProductChrome: React.FC<{ activeTab: TabKey; children: React.ReactNode }> = ({
  activeTab,
  children,
}) => {
  const active = TABS.find((t) => t.key === activeTab)!;

  return (
    <AbsoluteFill style={{ backgroundColor: v2Colors.bg, fontFamily: fontStack }}>
      <div
        style={{
          height: NAV_BAR_H,
          backgroundColor: v2Colors.navBar,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
          Home <span style={{ margin: "0 6px", color: "rgba(255,255,255,0.35)" }}>›</span> MVA Projects{" "}
          <span style={{ margin: "0 6px", color: "rgba(255,255,255,0.35)" }}>›</span>{" "}
          <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{active.breadcrumb}</span>
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
        />
      </div>

      <div
        style={{
          height: TAB_BAR_H,
          display: "flex",
          backgroundColor: "#FFFFFF",
          borderBottom: `1px solid ${v2Colors.cardBorder}`,
          paddingLeft: TAB_BAR_LEFT,
          gap: TAB_GAP,
          flexShrink: 0,
        }}
      >
        {TABS.map((t) => (
          <div
            key={t.key}
            style={{
              width: TAB_WIDTH,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: 600,
              color: t.key === activeTab ? v2Colors.blue : v2Colors.mutedInk,
              borderBottom: `2px solid ${t.key === activeTab ? v2Colors.blue : "transparent"}`,
            }}
          >
            {t.label}
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: "40px 56px", overflow: "hidden" }}>{children}</div>
    </AbsoluteFill>
  );
};
