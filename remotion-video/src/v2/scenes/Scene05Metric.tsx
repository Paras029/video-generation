import { ModuleScene } from "../components/ModuleScene";
import { MetricScreen } from "../screens/MetricScreen";
import { TIMINGS } from "../timings";

export const Scene05Metric: React.FC = () => (
  <ModuleScene
    activeTab="metric"
    durationInFrames={TIMINGS.SCENE5_METRIC_DUR}
    benefitCaption="Every alert visible before MRMG opens the file."
  >
    <MetricScreen />
  </ModuleScene>
);
