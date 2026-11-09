import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { headingAnchor } from "../src/heading.mjs";

test("TASK-003-AC1: headingAnchor returns title-cased title and slug anchor", () => {
  assert.deepEqual(headingAnchor("getting started"), {
    title: "Getting Started",
    anchor: "#getting-started",
  });
});

test("TASK-003-AC2: heading.mjs imports slugify and titleCase rather than reimplementing them", async () => {
  const source = await readFile(new URL("../src/heading.mjs", import.meta.url), "utf8");
  assert.match(source, /import\s*\{[^}]*\bslugify\b[^}]*\}\s*from\s*["']\.\/slugify\.mjs["']/);
  assert.match(source, /import\s*\{[^}]*\btitleCase\b[^}]*\}\s*from\s*["']\.\/title-case\.mjs["']/);
  assert.doesNotMatch(source, /function\s+(slugify|titleCase)\b/);
  assert.doesNotMatch(source, /\.replace\(/);
});
