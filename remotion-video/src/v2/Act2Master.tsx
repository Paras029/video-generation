import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { TIMINGS, TRANSITION_DUR } from "./timings";
import { Scene01Problem } from "./scenes/Scene01Problem";
import { Scene02Intro } from "./scenes/Scene02Intro";
import { Scene03TollGate } from "./scenes/Scene03TollGate";
import { Scene04NFM } from "./scenes/Scene04NFM";
import { Scene05Metric } from "./scenes/Scene05Metric";
import { Scene06BenefitsClose } from "./scenes/Scene06BenefitsClose";

const transition = () => (
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_DUR })} />
);

export const Act2Master: React.FC = () => (
  <AbsoluteFill>
    {/*
      Single narration track goes here once the recorded voiceover is
      handed off - e.g.:
      <Audio src={staticFile("voiceover.mp3")} />
      Re-time each TIMINGS.SCENE*_DUR value in ./timings.ts to match that
      file's actual per-scene duration; nothing else needs to change.
    */}
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={TIMINGS.SCENE1_PROBLEM_DUR}>
        <Scene01Problem />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={TIMINGS.SCENE2_INTRO_DUR}>
        <Scene02Intro />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={TIMINGS.SCENE3_TOLLGATE_DUR}>
        <Scene03TollGate />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={TIMINGS.SCENE4_NFM_DUR}>
        <Scene04NFM />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={TIMINGS.SCENE5_METRIC_DUR}>
        <Scene05Metric />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={TIMINGS.SCENE6_CLOSE_DUR}>
        <Scene06BenefitsClose />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
