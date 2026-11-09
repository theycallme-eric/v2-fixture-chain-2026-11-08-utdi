import test from "node:test";
import assert from "node:assert/strict";
import { titleCase } from "../src/title-case.mjs";

test("TASK-002-AC1: capitalizes each whitespace-separated word", () => {
  assert.equal(titleCase("hello world"), "Hello World");
});

test("TASK-002-AC2: capitalizes hyphen-separated words and lowercases the rest", () => {
  assert.equal(titleCase("sIGN-in page"), "Sign-In Page");
});
