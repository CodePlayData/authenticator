// @filename: Secret.test.ts

import test from "node:test";
import assert from "node:assert";
import { Secret } from "./Secret.js";

test('Unit Test - Invoking the Secret class.', async () => {
    const secret = await Secret.define('12345678');
    assert.strictEqual(secret.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
});