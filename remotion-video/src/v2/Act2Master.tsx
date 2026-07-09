import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
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

// Dissolves each scene in/out within its own fixed slot instead of an
// overlapping crossfade - a real overlap would shift every later scene's
// start away from the voiceover timestamps they were aligned to. This gets
// the soft-cut feel with zero drift.
const CUT_FADE = 12;
const SceneFade: React.FC<{ duration: number; children: React.ReactNode }> = ({ duration, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, CUT_FADE, duration - CUT_FADE, duration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

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
      <SceneFade duration={V2.scene1Dur}>
        <Scene01PainPoint />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene2Start} durationInFrames={V2.scene2Dur}>
      <SceneFade duration={V2.scene2Dur}>
        <Scene02VaaSIntro />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene6Start} durationInFrames={V2.scene6Dur}>
      <SceneFade duration={V2.scene6Dur}>
        <Scene06GetStarted />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene4aStart} durationInFrames={V2.scene4aDur}>
      <SceneFade duration={V2.scene4aDur}>
        <Scene04aTollGate />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene7Start} durationInFrames={V2.scene7Dur}>
      <SceneFade duration={V2.scene7Dur}>
        <Scene07Rationale />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene4bStart} durationInFrames={V2.scene4bDur}>
      <SceneFade duration={V2.scene4bDur}>
        <Scene04bNFM />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene4cStart} durationInFrames={V2.scene4cDur}>
      <SceneFade duration={V2.scene4cDur}>
        <Scene04cMetric />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene3Start} durationInFrames={V2.scene3Dur}>
      <SceneFade duration={V2.scene3Dur}>
        <Scene03ValueProp />
      </SceneFade>
    </Sequence>
    <Sequence from={V2.scene5Start} durationInFrames={V2.scene5Dur}>
      <SceneFade duration={V2.scene5Dur}>
        <Scene05Closing />
      </SceneFade>
    </Sequence>
  </AbsoluteFill>
);
