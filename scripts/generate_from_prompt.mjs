#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const [,, promptFile] = process.argv;
if (!promptFile) {
  console.error("Usage: node scripts/generate_from_prompt.mjs <prompts/file.yaml>");
  process.exit(1);
}

const repoRoot = process.cwd();
const absPrompt = path.isAbsolute(promptFile) ? promptFile : path.join(repoRoot, promptFile);
if (!fs.existsSync(absPrompt)) {
  console.error(`[vibe] Prompt file not found: ${absPrompt}`);
  process.exit(1);
}

const yaml = fs.readFileSync(absPrompt, "utf8");
const slugMatch = /featureSlug:\s*([a-z0-9-]+)/i.exec(yaml);
const slug = (slugMatch && slugMatch[1]) || "generated-feature";

// Create feature dirs
const featureDir = path.join(repoRoot, "src", "features", slug);
fs.mkdirSync(featureDir, { recursive: true });

// Component
const componentTsx = `
import React from "react";
export default function ${camel(slug)}() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Proofly • ${slug}</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl p-4 shadow bg-white">Avg Fairness: 4.3</div>
        <div className="rounded-xl p-4 shadow bg-white">p95 Wait Time: 5d</div>
        <div className="rounded-xl p-4 shadow bg-white">Bias Flags: 2</div>
      </div>
      <div className="rounded-xl p-4 shadow bg-white">[Trend Chart Placeholder]</div>
    </div>
  );
}
function camel(s){return s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());}
`.trimStart();
fs.writeFileSync(path.join(featureDir, `${slug}.tsx`), componentTsx);

// Storybook
const storyTsx = `
import React from "react";
import Comp from "./${slug}";
export default { title: "Features/${slug}", component: Comp };
export const Preview = () => <Comp />;
`.trimStart();
fs.writeFileSync(path.join(featureDir, `${slug}.stories.tsx`), storyTsx);

// Next.js route (app router)
const pagesDir = path.join(repoRoot, "src", "app", slug);
fs.mkdirSync(pagesDir, { recursive: true });
fs.writeFileSync(
  path.join(pagesDir, "page.tsx"),
  `import Comp from "@/features/${slug}/${slug}";
export default function Page(){ return <Comp/> }`
);

console.log(`[vibe] generated feature at src/features/${slug}/ and route /${slug}`);

// Optional: drop a small artifact to prove generation in CI logs
const outputPath = path.join(repoRoot, "generated_output.txt");
fs.writeFileSync(outputPath, `generated: ${slug} from ${path.basename(absPrompt)}\n`);
console.log("[vibe] wrote", outputPath);

// helpers
function camel(s){return s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());}

