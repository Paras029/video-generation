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

Word counts below assume ~150 words/minute (2.5 words/sec). Scene 1's
duration is now locked to its VO estimate (15s); scenes 2 through 7 are still
placeholders and **will be re-timed to match your actual clips** once you
send them - don't worry about hitting their current frame counts exactly.

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

## Scene 2 - Introducing VaaS (~11s placeholder / est. 26-28s, 63 words)

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

## Scene 3 - Toll Gate Assist (~6s placeholder / est. 11s, 27 words)

```
Toll Gate Assist runs a comprehensive completeness and quality review of the model documentation
<break time="0.3s" />
and shows exactly what to improve, before submission.
```

## Scene 4 - Need For Model (~6.3s placeholder / est. 17-18s, 44 words)

```
Need For Model asks a more fundamental question: is a model even necessary here?
<break time="0.5s" />
It weighs three criteria: the modeling team's own performance, how a rule-based alternative compares, and whether the business benefit justifies the cost of building and maintaining a model.
```

## Scene 5 - METRIC (~6.3s placeholder / est. 20-22s, 52 words)

```
METRIC is an automated testing capability for both structured and GenAI models.
<break time="0.4s" />
It runs a comprehensive test suite across data and performance dimensions, and surfaces every alert at the test level.
<break time="0.5s" />
So instead of waiting weeks to hear what MRMG found, model owners see the weak spots upfront - actionable insight before submission.
```

## Scene 6 - Benefits recap (~7s placeholder / est. 11-12s, 27 words)

```
Together, these capabilities mean higher-quality submissions,
<break time="0.3s" />
fewer rejected reviews,
<break time="0.3s" />
and shorter validation timelines.
<break time="0.5s" />
All while MRMG's independent oversight stays fully intact.
```

## Scene 7 - Closing (~8s placeholder / est. 9-10s, 19 words)

```
One platform. Two lines of defense.
<break time="0.5s" />
A faster, smarter path from build to validated model.
<break time="0.6s" />
This is VaaS.
```

---

**Total estimate at this pace: ~105-115s** (current cut is 59.7s, with scene 1
now locked to its 15s VO estimate) - the added capability detail in scenes 2,
4, and 5 is naturally longer spoken than it reads as on-screen captions. Once
you send the remaining six clips, I'll set the rest of `V2`'s scene durations
to each one's actual length and re-render.
