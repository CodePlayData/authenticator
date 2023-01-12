// @filename: UploadedRepositoryIdentificationData.test.ts
//FIXME
import test from "node:test";
import assert from "node:assert";
import { UploadedRepositoryIdentificationData } from "./UploadedRepositoryIdentificationData.js";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";

test('Unit Test - Tsting if the UploadedRepositoryIdentificationData can exists.', async (context) => {
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));

    await context.test('Behavioral Test - Testing if the class without credentials.', () => {
        const event = new UploadedRepositoryIdentificationData({ name: 'John Doe', email: 'test@gmail.com', password: '12345678'});
        assert.strictEqual(event.indexDbData.email, 'test@gmail.com');
    });

    await context.test('Behavioral Test - Testing if the class exists with credentials as well', () => {
        const event = new UploadedRepositoryIdentificationData({ name: 'John Doe', email: 'test@gmail.com', password: '12345678'}, credentials);
        assert.strictEqual(event.credentials?.email, 'test@gmail.com');
        assert.strictEqual(event.indexDbData.email, 'test@gmail.com');
    })
});