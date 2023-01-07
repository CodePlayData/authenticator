// @filename: UploadedRepositoryCredentialsData.test.ts
import test from "node:test";
import assert from "node:assert";
import { UploadedRepositoryCredentialsData } from "./UploadedRepositoryCredentialsData.js";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";

test('Unit Test - Testing if the UploadedRepositoryCredentialsData can exists.', async(context) => {
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));

    await context.test('Behavioral Test - Testing the event as it comes without the repository data.', () => {
        const event = new UploadedRepositoryCredentialsData([], credentials);
        assert.strictEqual(event.credentials?.email, 'test@gmail.com');
        assert.deepEqual(event.indexDbData, []);
    });

    await context.test('Behavioral Test - Testing the event as it comes with repository data.', () => {
        const event = new UploadedRepositoryCredentialsData([credentials]);
        assert.strictEqual(event.credentials, undefined);
        assert.strictEqual(event.indexDbData[0]?.email, 'test@gmail.com');
    });
});