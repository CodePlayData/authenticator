// @filename: RequestedUserData.test.ts
import test from "node:test";
import assert from "node:assert";
import { RequestedUserData } from "./RequestedUserData.js";

test('Unit Test - Testing if the RequestedUserData class can exists.', () => {
    const user = {};
    const event = new RequestedUserData(user, new Response());
    assert.strictEqual(event.name, 'RequestedUserData');
})