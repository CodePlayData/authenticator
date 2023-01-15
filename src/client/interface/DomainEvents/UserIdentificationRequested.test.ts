// @filename: UserIdentificationRequested.test.ts
import test from "node:test";
import assert from "node:assert";
import { UserIdentificationRequested } from "./UserIdentificationRequested.js";
import { Password } from "../../app/Password.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the UserIdentificationRequested class can exists.', async (context) => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    
    await context.test('Behavioral Test - Testing if the event exists as it comes from the cache.', () => {
        const event = new UserIdentificationRequested(credentials, { email: 'test@gmail.com'});
        assert.strictEqual(event.credential.id, 'test@gmail.com');
        assert.strictEqual(event.databaseReturn.email, 'test@gmail.com');
    });

    await context.test('Behavioral Test - Testing if the event exists as had no user info in the cache.', () => {
        const event = new UserIdentificationRequested(credentials);
        assert.strictEqual(event.credential.id, 'test@gmail.com');
        assert.strictEqual(event.databaseReturn, undefined);
    });
});