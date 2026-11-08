import test from "node:test";
import assert from "node:assert/strict";
import { version } from "../src/index.mjs";

test("version is a string", () => assert.equal(typeof version, "string"));
