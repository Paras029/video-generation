import { Composition } from "remotion";
import { V2 } from "./v2/theme-v2";
import { Act2Master } from "./v2/Act2Master";
import { Scene01PainPoint } from "./v2/scenes/Scene01PainPoint";
import { Scene02VaaSIntro } from "./v2/scenes/Scene02VaaSIntro";
import { Scene03ValueProp } from "./v2/scenes/Scene03ValueProp";
import { Scene04aTollGate } from "./v2/scenes/Scene04aTollGate";
import { Scene04bNFM } from "./v2/scenes/Scene04bNFM";
import { Scene04cMetric } from "./v2/scenes/Scene04cMetric";
import { Scene05Closing } from "./v2/scenes/Scene05Closing";

// Fonts are loaded here once the brand font stack is picked (asset intake).
// This sandbox's headless Chromium doesn't trust the proxy CA for direct
// fonts.gstatic.com fetches, so self-host the chosen weights under
// public/fonts/ and load via local @font-face - see references/gotchas.md.

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
      id="v2-Scene03-ValueProp"
      component={Scene03ValueProp}
      durationInFrames={V2.scene3Dur}
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
      id="v2-Scene05-Closing"
      component={Scene05Closing}
      durationInFrames={V2.scene5Dur}
      fps={V2.fps}
      width={V2.width}
      height={V2.height}
    />
  </>
);
