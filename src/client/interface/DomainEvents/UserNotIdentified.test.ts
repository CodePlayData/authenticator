// @filename: UserNotIdenfied.test.ts
import test from "node:test";
import assert from "node:assert";
import { UserNotIdentified } from "./UserNotIdentified.js";

test('Unit Test - Testing if the UserNotIdentified class can exists.', () => {
    const event = new UserNotIdentified();
    assert.strictEqual(event.name, 'UserNotIdentified');
});