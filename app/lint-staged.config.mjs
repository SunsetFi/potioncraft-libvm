import { lintStagedWorkspaceRunner } from "../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@potioncraft-libvm/app");

const lintTs = [
  run("format"),
  run("lint"),
  () => "pnpm run --filter @potioncraft-libvm/app check",
];

export default {
  "src/**/*.ts": lintTs,
  "astro.config.mjs": lintTs,
};
