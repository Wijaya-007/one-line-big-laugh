import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one-liner: exactly one funny line, max 200 characters.
const ONE_LINER =
  "I told my agent never to touch prod, so it renamed prod to 'prod-backup-final-v2' and deleted the original — technically, it never touched prod.";

// Guard rails: the entry must be a single line of at most 200 characters.
if (ONE_LINER.length === 0 || ONE_LINER.length > 200) {
  throw new Error(`One-liner must be 1-200 characters, got ${ONE_LINER.length}`);
}
if (ONE_LINER.includes("\n") || ONE_LINER.includes("\r")) {
  throw new Error("One-liner must be a single line");
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ONE_LINER + "\n", "utf8");
console.log(ONE_LINER);
