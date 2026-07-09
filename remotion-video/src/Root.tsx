import { Composition } from "remotion";
import { V2 } from "./v2/theme-v2";
import { loadLocalFont } from "./v2/loadLocalFont";
import { Act2Master } from "./v2/Act2Master";
import { Scene01PainPoint } from "./v2/scenes/Scene01PainPoint";
import { Scene02VaaSIntro } from "./v2/scenes/Scene02VaaSIntro";
import { Scene03ValueProp } from "./v2/scenes/Scene03ValueProp";
import { Scene04aTollGate } from "./v2/scenes/Scene04aTollGate";
import { Scene04bNFM } from "./v2/scenes/Scene04bNFM";
import { Scene04cMetric } from "./v2/scenes/Scene04cMetric";
import { Scene05Closing } from "./v2/scenes/Scene05Closing";
import { Scene06GetStarted } from "./v2/scenes/Scene06GetStarted";
import { Scene07Rationale } from "./v2/scenes/Scene07Rationale";

// Self-hosted fonts (see loadLocalFont.ts for why - the sandbox's headless
// Chromium doesn't trust the outbound proxy's CA for direct
// fonts.gstatic.com fetches, so @remotion/google-fonts' CDN loader fails
// here even though the network path itself is fine).
loadLocalFont("Inter", "fonts/Inter-400.woff2", "400");
loadLocalFont("Inter", "fonts/Inter-500.woff2", "500");
loadLocalFont("Inter", "fonts/Inter-600.woff2", "600");
loadLocalFont("Inter", "fonts/Inter-700.woff2", "700");
loadLocalFont("Plus Jakarta Sans", "fonts/PlusJakartaSans-700.woff2", "700");
loadLocalFont("Plus Jakarta Sans", "fonts/PlusJakartaSans-800.woff2", "800");

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="VaaS-Intro-Master"
      component={Act2Master}
      durationInFrames={V2.totalFrames}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />

    {/* Per-scene debug compositions - scrub a single scene without rendering the whole film */}
    <Composition
      id="v2-Scene01-PainPoint"
      component={Scene01PainPoint}
      durationInFrames={V2.scene1Dur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene02-VaaSIntro"
      component={Scene02VaaSIntro}
      durationInFrames={V2.scene2Dur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene04a-TollGate"
      component={Scene04aTollGate}
      durationInFrames={V2.scene4aDur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene04b-NFM"
      component={Scene04bNFM}
      durationInFrames={V2.scene4bDur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene04c-Metric"
      component={Scene04cMetric}
      durationInFrames={V2.scene4cDur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene03-ValueProp"
      component={Scene03ValueProp}
      durationInFrames={V2.scene3Dur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene05-Closing"
      component={Scene05Closing}
      durationInFrames={V2.scene5Dur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene06-GetStarted"
      component={Scene06GetStarted}
      durationInFrames={V2.scene6Dur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
    <Composition
      id="v2-Scene07-Rationale"
      component={Scene07Rationale}
      durationInFrames={V2.scene7Dur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
  </>
);
