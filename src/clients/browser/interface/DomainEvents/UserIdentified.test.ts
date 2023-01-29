// @filename: UserIdentified.test.ts
import test from "node:test";
import assert from "node:assert";
import { UserIdentified } from "./UserIdentified.js";

test('Unit Test - Testing if the UserIdentified class can exists.', () => {
    const event = new UserIdentified('test@gmail.com' );
    assert.strictEqual(event.name, 'UserIdentified');
    assert.strictEqual(event.user, 'test@gmail.com');
});