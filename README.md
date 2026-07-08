# video-generation

This repo has the [saas-product-demo-video](https://github.com/noamdorr/saas-product-demo-video) Claude Code skill installed as a project-level skill at `.claude/skills/saas-product-demo-video/`.

The skill produces 20-45s SaaS product demo videos in [Remotion](https://www.remotion.dev/): asset intake, YouTube reference-video analysis, beat-synced editing, and final render.

## Using it

Open this repo with Claude Code and ask for something like *"let's make a 30-second product demo for my SaaS"* — the skill will auto-trigger and walk through asset intake, scripting, beat detection, scene building, and rendering.

## Prerequisites

- Node.js 18+ (present)
- Python 3 (present)
- Python `librosa` for beat detection — not yet installed; the skill will prompt to install it (`pip install --break-system-packages librosa numpy soundfile`) the first time it's needed
- `ffmpeg`/`ffprobe` — optional, for verifying render output specs

Remotion itself isn't scaffolded yet; the skill scaffolds a minimal Remotion project on first use (see `.claude/skills/saas-product-demo-video/references/project-scaffold.md`).
