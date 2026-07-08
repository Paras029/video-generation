import { Composition } from "remotion";
import { VIDEO } from "./theme";
import { Placeholder } from "./Placeholder";

// Fonts are loaded here once the brand font stack is picked (asset intake).
// This sandbox's headless Chromium doesn't trust the proxy CA for direct
// fonts.gstatic.com fetches, so self-host the chosen weights under
// public/fonts/ and load via local @font-face instead of
// @remotion/google-fonts' CDN loader - see references/gotchas.md.

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="Placeholder"
      component={Placeholder}
      durationInFrames={VIDEO.fps * 3}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  </>
);
