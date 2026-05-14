import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import matter from "gray-matter";
import { SingleBar } from "cli-progress";

// NOTE: Intended to be ran from app/src/content/recipes
const dir = resolve(process.cwd(), "./_");

const processDatastringsBar = new SingleBar({});

const dirs = readdirSync(dir, { withFileTypes: true });
processDatastringsBar.start(dirs.length, 0);
for (const target of dirs) {
  if (!target.isDirectory()) {
    continue;
  }

  if (target.name.startsWith(".")) {
    continue;
  }

  const markdown = resolve(dir, target.name, "index.md");
  const contents = readFileSync(markdown, "utf-8");
  const parsed = matter(contents);

  const { datastring } = parsed.data as { datastring: string };
  if (!datastring) {
    console.warn(`No datastring found for ${target.name}, skipping...`);
    continue;
  }

  const outputPath = resolve(dir, target.name, "preview.png");
  if (existsSync(outputPath)) {
    console.warn(`Image already exists for ${target.name}, skipping...`);
    continue;
  }

  const img = await fetch(
    `http://localhost:8080/api/plotter-preview.png?data=${datastring}`,
  );
  if (img.status !== 200) {
    console.error(`Failed to fetch image for ${target.name}`);
    continue;
  }

  const buffer = await img.arrayBuffer();
  writeFileSync(outputPath, new Uint8Array(buffer));
  processDatastringsBar.increment();
}
