import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { removeBackground } from "@imgly/background-removal-node";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const input = path.join(root, "public", "julian.png");
const output = path.join(root, "public", "julian-fg.png");

console.log("Reading", input);
const buf = await fs.readFile(input);
const inBlob = new Blob([buf], { type: "image/png" });

console.log("Running background removal (first run downloads the model, ~40MB)…");
const outBlob = await removeBackground(inBlob, {
  output: { format: "image/png", quality: 0.9 },
});

const outBuf = Buffer.from(await outBlob.arrayBuffer());
await fs.writeFile(output, outBuf);
console.log("Wrote", output, `(${(outBuf.length / 1024).toFixed(0)} KB)`);
