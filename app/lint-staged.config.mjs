import { lintStagedWorkspaceRunner } from "../workspace-utils.mjs";

const run = lintStagedWorkspaceRunner("@potioncraft-libvm/app");

const check = () => "pnpm run --filter @potioncraft-libvm/app check";
const lintTs = [run("format"), run("lint"), check];

export default {
  "src/**/*.ts": lintTs,
  "astro.config.mjs": lintTs,
  "src/**/*.astro": [run("format"), check],
  "src/**/*.mdx": [run("format"), check],
  "src/**/*.md": [run("format")],
  "src/**/*.css": [run("format")],
};
