// @filename: UploadedRepositoryCredentialsData.test.ts
import test from "node:test";
import assert from "node:assert";
import { UploadedRepositoryCredentialsData } from "./UploadedRepositoryCredentialsData.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Password } from "../../app/Password.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the UploadedRepositoryCredentialsData can exists.', async(context) => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));

    await context.test('Behavioral Test - Testing the event as it comes without the repository data.', () => {
        const event = new UploadedRepositoryCredentialsData([], credentials);
        assert.strictEqual(event.credential?.id, 'test@gmail.com');
        assert.deepEqual(event.indexDbData, []);
    });

    await context.test('Behavioral Test - Testing the event as it comes with repository data.', () => {
        const event = new UploadedRepositoryCredentialsData([credentials]);
        assert.strictEqual(event.credential, undefined);
        assert.strictEqual(event.indexDbData[0]?.id, 'test@gmail.com');
    });
});