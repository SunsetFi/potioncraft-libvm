import { lintStagedWorkspaceRunner } from "../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@potioncraft-libvm/app");

export default {
  "src/**/*.ts,astro.config.mjs": [
    run("format"),
    run("lint"),
    () => "pnpm run --filter @potioncraft-libvm/app check",
  ],
};
