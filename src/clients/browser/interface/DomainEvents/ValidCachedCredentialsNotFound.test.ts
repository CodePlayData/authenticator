// @filename: ValidCachedCredentialsNotFound.test.ts
import test from "node:test";
import assert from "node:assert";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Password } from "../../app/Password.js";
import { ValidCachedCredentialsNotFound } from "./ValidCachedCredentialsNotFound.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the ValidCachedCredentialsNotFound can exists.', async (context) => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));

    await context.test('Behavioral Test - Testing this DTO with Credentials.', () => {
        const event = new ValidCachedCredentialsNotFound(credentials);
        assert.strictEqual(event.credential?.id, 'test@gmail.com');
    });
});