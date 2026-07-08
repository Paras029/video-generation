import { ModuleScene } from "../components/ModuleScene";
import { TollGateScreen } from "../screens/TollGateScreen";
import { TIMINGS } from "../timings";

export const Scene03TollGate: React.FC = () => (
  <ModuleScene
    activeTab="tollgate"
    durationInFrames={TIMINGS.SCENE3_TOLLGATE_DUR}
    entryAnimation
    exitClickTarget="nfm"
    benefitCaption="Gaps caught before submission."
  >
    <TollGateScreen />
  </ModuleScene>
);
