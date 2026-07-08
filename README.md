# video-generation

This repo has the [saas-product-demo-video](https://github.com/noamdorr/saas-product-demo-video) Claude Code skill installed as a project-level skill at `.claude/skills/saas-product-demo-video/`.

The skill produces 20-45s SaaS product demo videos in [Remotion](https://www.remotion.dev/): asset intake, YouTube reference-video analysis, beat-synced editing, and final render.

## Using it

Open this repo with Claude Code and ask for something like *"let's make a 30-second product demo for my SaaS"* — the skill will auto-trigger and walk through asset intake, scripting, beat detection, scene building, and rendering.

## Prerequisites

- Node.js 22, Python 3.11 — present
- Python `librosa` (+ numpy, soundfile) for beat detection — installed
- `ffmpeg`/`ffprobe` system binary — not present; not required, Remotion bundles its own ffmpeg for rendering

## Remotion project

A minimal Remotion 4.x project is scaffolded at `remotion-video/` per `.claude/skills/saas-product-demo-video/references/project-scaffold.md` — `package.json`, `tsconfig.json`, `remotion.config.ts`, and a `Placeholder` composition, verified with `npm run typecheck` and a full render.

Google Fonts are **not** wired up via `@remotion/google-fonts` yet — this sandbox's headless Chromium doesn't trust the outbound proxy's CA for direct `fonts.gstatic.com` fetches (confirmed via `curl`, which works fine — it's a browser-side trust gap, not a network block). Once the brand font stack is picked during asset intake, self-host the chosen weights under `remotion-video/public/fonts/` and load them via local `@font-face` instead of the CDN loader.

```bash
cd remotion-video
npm run dev     # Remotion Studio at localhost:3030
npm run build   # remotion render
```
