import { lintStagedWorkspaceCommand } from "../workspace-utils.mjs";

export default {
  "src/**/*.ts,astro.config.mjs": [
    lintStagedWorkspaceCommand("@potioncraft-libvm/app", "format"),
    lintStagedWorkspaceCommand("@potioncraft-libvm/app", "lint"),
    () => "pnpm run --filter @potioncraft-libvm/app check",
  ],
};
