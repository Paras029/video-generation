import { continueRender, delayRender, staticFile } from "remotion";

// Self-hosted font loader. @remotion/google-fonts fetches directly from
// fonts.gstatic.com at render time in-browser, which fails in this
// sandbox (the headless Chromium doesn't trust the outbound proxy's CA
// for that direct fetch, even though plain curl/Node does). Loading the
// same font files from public/fonts/ via the FontFace API sidesteps the
// network dependency entirely.
export function loadLocalFont(family: string, path: string, weight: string) {
  // Generous timeout + retries: FontFace.load() occasionally hangs on a
  // freshly spawned worker tab in this sandbox even though the file is
  // local and loads fine most of the time. A retry re-runs this module
  // and almost always succeeds the second time.
  const handle = delayRender(`Loading ${family} ${weight}`, {
    timeoutInMilliseconds: 60000,
    retries: 3,
  });
  const font = new FontFace(family, `url(${staticFile(path)})`, { weight });
  font
    .load()
    .then((loaded) => {
      document.fonts.add(loaded);
      continueRender(handle);
    })
    .catch((err) => {
      console.error(`Font load failed: ${family} ${weight}`, err);
      continueRender(handle);
    });
}
