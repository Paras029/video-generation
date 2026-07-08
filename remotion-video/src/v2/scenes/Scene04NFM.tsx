import { ModuleScene } from "../components/ModuleScene";
import { NFMScreen } from "../screens/NFMScreen";
import { TIMINGS } from "../timings";

export const Scene04NFM: React.FC = () => (
  <ModuleScene
    activeTab="nfm"
    durationInFrames={TIMINGS.SCENE4_NFM_DUR}
    exitClickTarget="metric"
    benefitCaption="A defensible answer on modeling need — early."
  >
    <NFMScreen />
  </ModuleScene>
);
