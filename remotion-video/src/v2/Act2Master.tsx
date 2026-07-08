import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { V2 } from "./theme-v2";
import { Scene01PainPoint } from "./scenes/Scene01PainPoint";
import { Scene02VaaSIntro } from "./scenes/Scene02VaaSIntro";
import { Scene04aTollGate } from "./scenes/Scene04aTollGate";
import { Scene04bNFM } from "./scenes/Scene04bNFM";
import { Scene04cMetric } from "./scenes/Scene04cMetric";
import { Scene03ValueProp } from "./scenes/Scene03ValueProp";
import { Scene05Closing } from "./scenes/Scene05Closing";

export const Act2Master: React.FC = () => (
  <AbsoluteFill>
    <Audio src={staticFile("audio/voiceover.mp3")} />
    <Sequence from={V2.scene1Start} durationInFrames={V2.scene1Dur}>
      <Scene01PainPoint />
    </Sequence>
    <Sequence from={V2.scene2Start} durationInFrames={V2.scene2Dur}>
      <Scene02VaaSIntro />
    </Sequence>
    <Sequence from={V2.scene4aStart} durationInFrames={V2.scene4aDur}>
      <Scene04aTollGate />
    </Sequence>
    <Sequence from={V2.scene4bStart} durationInFrames={V2.scene4bDur}>
      <Scene04bNFM />
    </Sequence>
    <Sequence from={V2.scene4cStart} durationInFrames={V2.scene4cDur}>
      <Scene04cMetric />
    </Sequence>
    <Sequence from={V2.scene3Start} durationInFrames={V2.scene3Dur}>
      <Scene03ValueProp />
    </Sequence>
    <Sequence from={V2.scene5Start} durationInFrames={V2.scene5Dur}>
      <Scene05Closing />
    </Sequence>
  </AbsoluteFill>
);
