import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import matter from "gray-matter";
import { SingleBar } from "cli-progress";

const dir = resolve(process.cwd(), "./_");

const processDatastringsBar = new SingleBar({});

const dirs = readdirSync(dir, { withFileTypes: true });
processDatastringsBar.start(dirs.length, 0);
for (const target of dirs) {
  const markdown = resolve(dir, target.name, "index.md");
  const contents = readFileSync(markdown, "utf-8");
  const parsed = matter(contents);

  const { datastring } = parsed.data as { datastring: string };
  if (!datastring) {
    console.warn(`No datastring found for ${target.name}, skipping...`);
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
  const outputPath = resolve(dir, target.name, "preview.png");
  writeFileSync(outputPath, new Uint8Array(buffer));
  processDatastringsBar.increment();
}
