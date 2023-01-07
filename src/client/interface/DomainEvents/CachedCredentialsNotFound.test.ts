// @filename: CachedCredentialsNotFound.test.ts
import test from "node:test";
import assert from "node:assert";
import { CachedCredentialsNotFound } from "./CachedCredentialsNotFound.js";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";

test('Unit Test - Testing if the CachedCredentialsNotFound class can exists.', async () => {
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));
    const event = new CachedCredentialsNotFound(credentials);
    assert.strictEqual(event.credentials?.email, 'test@gmail.com');
})