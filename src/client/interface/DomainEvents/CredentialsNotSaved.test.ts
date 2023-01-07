// @filename: CredentialsNotSaved.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsNotSaved } from "./CredentialsNotSaved.js";

test('Unit Test - Testing if the class CredentialsNotSaved can exists.', () => {
    const event = new CredentialsNotSaved();
    assert.strictEqual(event.name, 'CredentialsNotSaved');
})