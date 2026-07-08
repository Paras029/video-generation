import { v2Colors } from "../theme-v2";

export const PlaceholderHeader: React.FC = () => (
  <div style={{ fontSize: 14, fontWeight: 600, color: v2Colors.mutedInk, marginBottom: 20 }}>
    Model ID: XXXX-000 &nbsp;|&nbsp; Version: X.X &nbsp;|&nbsp; Market:{" "}
    <span style={{ borderBottom: `1px dashed ${v2Colors.mutedInk}`, paddingBottom: 1 }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </div>
);
