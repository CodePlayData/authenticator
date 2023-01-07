// @filename: CredentialsSaved.test.ts
import test from "node:test";
import assert from "node:assert";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";
import { CredentialsSaved } from "./CredentialsSaved.js";

test('Unit Test - Testing if the CredentialsSaved class can exists.', async (context) => {
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));
    
    await context.test('Behavioral Test - Testing if the event can exists empty.', () => {
        const event = new CredentialsSaved();
        assert.deepEqual(event, { credentials: undefined, msg: { credentials: undefined, object: undefined }, name: 'CredentialsSaved', object: undefined });
    });

    await context.test('Behavioral Test - Testing the event exists with credentials.', () => {
        const event = new CredentialsSaved(credentials);
        assert.strictEqual(event.credentials?.email, 'test@gmail.com');
    });
});