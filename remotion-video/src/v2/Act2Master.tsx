import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { V2 } from "./theme-v2";

// Background music ducked well under the voiceover, with a soft fade in/out
// at the very start and end so it never competes with narration.
const MUSIC_VOLUME = 0.16;
const musicVolume = (frame: number) =>
  MUSIC_VOLUME *
  interpolate(frame, [0, 45, V2.totalFrames - 75, V2.totalFrames], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
import { Scene01PainPoint } from "./scenes/Scene01PainPoint";
import { Scene02VaaSIntro } from "./scenes/Scene02VaaSIntro";
import { Scene06GetStarted } from "./scenes/Scene06GetStarted";
import { Scene04aTollGate } from "./scenes/Scene04aTollGate";
import { Scene07Rationale } from "./scenes/Scene07Rationale";
import { Scene04bNFM } from "./scenes/Scene04bNFM";
import { Scene04cMetric } from "./scenes/Scene04cMetric";
import { Scene03ValueProp } from "./scenes/Scene03ValueProp";
import { Scene05Closing } from "./scenes/Scene05Closing";

export const Act2Master: React.FC = () => (
  <AbsoluteFill>
    <Audio src={staticFile("audio/voiceover.mp3")} />
    <Audio src={staticFile("audio/music.wav")} volume={musicVolume} />
    <Sequence from={V2.scene1Start} durationInFrames={V2.scene1Dur}>
      <Scene01PainPoint />
    </Sequence>
    <Sequence from={V2.scene2Start} durationInFrames={V2.scene2Dur}>
      <Scene02VaaSIntro />
    </Sequence>
    <Sequence from={V2.scene6Start} durationInFrames={V2.scene6Dur}>
      <Scene06GetStarted />
    </Sequence>
    <Sequence from={V2.scene4aStart} durationInFrames={V2.scene4aDur}>
      <Scene04aTollGate />
    </Sequence>
    <Sequence from={V2.scene7Start} durationInFrames={V2.scene7Dur}>
      <Scene07Rationale />
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
