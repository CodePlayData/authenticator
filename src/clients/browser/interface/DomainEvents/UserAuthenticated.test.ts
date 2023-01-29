// @filename: UserAuthorized.test.ts
import test from "node:test";
import assert from "node:assert";
import { PasswordCredential } from "../../app/PasswordCredential";
import { Password } from "../../app/Password.js";
import { UserAuthenticated } from "./UserAuthenticated.js";
import { Email } from "../../app/Email";

test('Unit Test - Testing if the UserAuthenticated class can exists.', async () => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    const event = new UserAuthenticated(credentials);
    assert.strictEqual(event.credential.id, 'test@gmail.com');
})