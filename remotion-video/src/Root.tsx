import { Composition } from "remotion";
import { TIMINGS, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from "./v2/timings";
import { Act2Master } from "./v2/Act2Master";
import { Scene01Problem } from "./v2/scenes/Scene01Problem";
import { Scene02Intro } from "./v2/scenes/Scene02Intro";
import { Scene03TollGate } from "./v2/scenes/Scene03TollGate";
import { Scene04NFM } from "./v2/scenes/Scene04NFM";
import { Scene05Metric } from "./v2/scenes/Scene05Metric";
import { Scene06BenefitsClose } from "./v2/scenes/Scene06BenefitsClose";

// Fonts are loaded here once the brand font stack is picked (asset intake).
// This sandbox's headless Chromium doesn't trust the proxy CA for direct
// fonts.gstatic.com fetches, so self-host the chosen weights under
// public/fonts/ and load via local @font-face - see references/gotchas.md.

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="VaaS-Intro-Master"
      component={Act2Master}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />

    {/* Per-scene debug compositions - scrub a single scene without rendering the whole film */}
    <Composition
      id="v2-Scene01-Problem"
      component={Scene01Problem}
      durationInFrames={TIMINGS.SCENE1_PROBLEM_DUR}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
    <Composition
      id="v2-Scene02-Intro"
      component={Scene02Intro}
      durationInFrames={TIMINGS.SCENE2_INTRO_DUR}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
    <Composition
      id="v2-Scene03-TollGate"
      component={Scene03TollGate}
      durationInFrames={TIMINGS.SCENE3_TOLLGATE_DUR}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
    <Composition
      id="v2-Scene04-NFM"
      component={Scene04NFM}
      durationInFrames={TIMINGS.SCENE4_NFM_DUR}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
    <Composition
      id="v2-Scene05-Metric"
      component={Scene05Metric}
      durationInFrames={TIMINGS.SCENE5_METRIC_DUR}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
    <Composition
      id="v2-Scene06-BenefitsClose"
      component={Scene06BenefitsClose}
      durationInFrames={TIMINGS.SCENE6_CLOSE_DUR}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  </>
);
