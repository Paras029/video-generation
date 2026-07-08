import { AbsoluteFill } from "remotion";
import { colors } from "./theme";

export const Placeholder: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: colors.deepPurple,
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      color: colors.cream,
      fontSize: 64,
    }}
  >
    Scenes not built yet
  </AbsoluteFill>
);
