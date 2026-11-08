import test from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.mjs";

test("TASK-001-AC1: trims, lowercases and collapses punctuation", () => {
  assert.equal(slugify("  Hello, World!  "), "hello-world");
});

test("TASK-001-AC2: collapses runs of non-alphanumerics to one hyphen", () => {
  assert.equal(slugify("a--b__c"), "a-b-c");
});

test("TASK-001-AC3: empty string returns empty string", () => {
  assert.equal(slugify(""), "");
});
