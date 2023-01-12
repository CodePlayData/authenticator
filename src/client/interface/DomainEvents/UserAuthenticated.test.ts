// @filename: UserAuthorized.test.ts
//FIXME
import test from "node:test";
import assert from "node:assert";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";
import { UserAuthenticated } from "./UserAuthenticated.js";

test('Unit Test - Testing if the UserAuthenticated class can exists.', async () => {
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));
    const event = new UserAuthenticated(credentials);
    assert.strictEqual(event.credentials.email, 'test@gmail.com');
})