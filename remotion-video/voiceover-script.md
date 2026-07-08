# VaaS intro - voiceover script (ElevenLabs)

Mirrors the current on-screen copy scene-by-scene. `<break time="Xs" />` tags
are ElevenLabs' supported pause markup - use them as written, don't rely on
punctuation alone for the longer pauses between scenes.

**Recommended ElevenLabs settings**
- Model: `eleven_multilingual_v2` or `eleven_turbo_v2.5` (both support break tags)
- Speed: 0.90-0.95x - a touch slower than default reads as more authoritative
  for a leadership audience. Don't go below 0.85x, it starts sounding drugged.
- Stability: ~50%. Similarity: 75-85%. Style exaggeration: low (15-25%) - keep
  it measured, not "trailer voice."
- **Generate one file per scene, not one long file.** Name them `scene1.mp3`
  ... `scene7.mp3` in the order below. That lets me set each scene's exact
  duration in `timings.ts` from that clip's real length instead of hunting for
  timestamps inside one long recording - much faster to re-time correctly.

Every scene below is timed to its own word count at ~150 words/minute
(2.5 words/sec) plus its break-tag pauses - the video's `theme-v2.ts` durations
match these figures exactly, not a uniform placeholder. Once you send the
actual clips, I'll true up each scene to that clip's real length (should be
close to these estimates, but ElevenLabs' actual pacing/breaths will differ
slightly from the math below).

---

## Scene 1 - Problem (timed to this VO: 15s / 450 frames, 33 words)

Video is now timed to this scene's estimated spoken length - no need to send
the clip first for this one, though I'll still true it up once you have it.

**Paste this directly into the ElevenLabs UI** (multilingual v2, no break
tags needed - it's one flowing sentence and the commas already carry the
pauses; added break tags here would choppy it up):

```
Due to disconnect between modeling teams and MRMG on requirements and challenges raised by MRMG during validation, model validation journey often takes more time than anticipated, leading to delayed time-to-market for critical solutions.
```

If it reads too rushed through the two comma clauses, a version with light
breaks (this also works pasted directly into the UI text box, not just the
API):

```
Due to disconnect between modeling teams and MRMG on requirements and challenges raised by MRMG during validation, <break time="0.3s" /> model validation journey often takes more time than anticipated, leading to delayed time-to-market for critical solutions.
```

## Scene 2 - Introducing VaaS (timed to this VO: 27.0s / 810 frames, 63 words)

```
To solve for this, MRMG introduced VaaS: Validation as a Service.
<break time="0.4s" />
It's a shift-left capability that lets model owners self-check submissions before validation, arriving better prepared for MRMG's challenge.
<break time="0.5s" />
Three capabilities make this possible.
<break time="0.3s" />
Toll Gate Assist reviews documentation completeness and quality.
<break time="0.3s" />
Need For Model asks whether a model is even the right call.
<break time="0.3s" />
And METRIC runs quantitative tests across data and performance.
```

## Scene 3 - Toll Gate Assist (timed to this VO: 9.2s / 275 frames, 22 words)

```
Toll Gate Assist runs a comprehensive completeness and quality review of the model documentation
<break time="0.3s" />
and shows exactly what to improve, before submission.
```

## Scene 4 - Need For Model (timed to this VO: 17.3s / 520 frames, 42 words)

```
Need For Model asks a more fundamental question: is a model even necessary here?
<break time="0.5s" />
It weighs three criteria: the modeling team's own performance, how a rule-based alternative compares, and whether the business benefit justifies the cost of building and maintaining a model.
```

## Scene 5 - METRIC (timed to this VO: 22.2s / 665 frames, 53 words)

```
METRIC is an automated testing capability for both structured and GenAI models.
<break time="0.4s" />
It runs a comprehensive test suite across data and performance dimensions, and surfaces every alert at the test level.
<break time="0.5s" />
So instead of waiting weeks to hear what MRMG found, model owners see the weak spots upfront - actionable insight before submission.
```

## Scene 6 - Benefits recap (timed to this VO: 9.5s / 285 frames, 21 words)

```
Together, these capabilities mean higher-quality submissions,
<break time="0.3s" />
fewer rejected reviews,
<break time="0.3s" />
and shorter validation timelines.
<break time="0.5s" />
All while MRMG's independent oversight stays fully intact.
```

## Scene 7 - Closing (timed to this VO: 8.3s / 250 frames, 18 words)

```
One platform. Two lines of defense.
<break time="0.5s" />
A faster, smarter path from build to validated model.
<break time="0.6s" />
This is VaaS.
```

---

**Total: 108.5s** (3255 frames @ 30fps) - every scene above is sized to its own
VO estimate, not a uniform shift. Once you send the seven clips, I'll true up
each scene's exact duration to its clip's real length and re-render.
