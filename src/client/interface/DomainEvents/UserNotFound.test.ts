// @filename: UserNotFound.test.ts
import test from "node:test";
import assert from "node:assert";
import { UserNotFound } from "./UserNotFound.js";

test('Unit Test - Testing if the UserNotFound class can exists.', () => {
    const event = new UserNotFound('There is no user or the credentials provided.');
    assert.strictEqual(event.httpErrorMessage, 'There is no user or the credentials provided.');
});