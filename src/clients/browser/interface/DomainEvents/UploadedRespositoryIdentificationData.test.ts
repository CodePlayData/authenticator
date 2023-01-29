// @filename: UploadedRepositoryIdentificationData.test.ts
import test from "node:test";
import assert from "node:assert";
import { UploadedRepositoryIdentificationData } from "./UploadedRepositoryIdentificationData.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Password } from "../../app/Password.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Tsting if the UploadedRepositoryIdentificationData can exists.', async (context) => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));

    await context.test('Behavioral Test - Testing if the class without credentials.', () => {
        const event = new UploadedRepositoryIdentificationData({ name: 'John Doe', email: 'test@gmail.com', password: '12345678'});
        assert.strictEqual(event.indexDbData.email, 'test@gmail.com');
    });

    await context.test('Behavioral Test - Testing if the class exists with credentials as well', () => {
        const event = new UploadedRepositoryIdentificationData({ name: 'John Doe', email: 'test@gmail.com', password: '12345678'}, credentials);
        assert.strictEqual(event.credential?.id, 'test@gmail.com');
        assert.strictEqual(event.indexDbData.email, 'test@gmail.com');
    })
});