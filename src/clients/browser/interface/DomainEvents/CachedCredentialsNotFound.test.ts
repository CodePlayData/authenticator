// @filename: CachedCredentialsNotFound.test.ts
import test from "node:test";
import assert from "node:assert";
import { CachedCredentialsNotFound } from "./CachedCredentialsNotFound.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Password } from "../../app/Password.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the CachedCredentialsNotFound class can exists.', async () => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    const event = new CachedCredentialsNotFound(credentials);
    assert.strictEqual(event.credential?.id, 'test@gmail.com');
})