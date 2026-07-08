import { Config } from "@remotion/cli/config";

Config.setEntryPoint("./src/index.ts");
Config.setPublicDir("./public");
Config.setConcurrency(4);
Config.setVideoImageFormat("png");
