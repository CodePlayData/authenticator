// @filename: CredentialsSaved.test.ts
import test from "node:test";
import assert from "node:assert";
import { PasswordCredential } from "../../app/PasswordCredential";
import { Password } from "../../app/Password.js";
import { CredentialsSaved } from "./CredentialsSaved.js";
import { Email } from "../../app/Email";

test('Unit Test - Testing if the CredentialsSaved class can exists.', async (context) => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    
    await context.test('Behavioral Test - Testing if the event can exists empty.', () => {
        const event = new CredentialsSaved();
        assert.deepEqual(event, { credentials: undefined, msg: { credentials: undefined, object: undefined }, name: 'CredentialsSaved', object: undefined });
    });

    await context.test('Behavioral Test - Testing the event exists with credentials.', () => {
        const event = new CredentialsSaved(credentials);
        assert.strictEqual(event.credential?.id, 'test@gmail.com');
    });
});