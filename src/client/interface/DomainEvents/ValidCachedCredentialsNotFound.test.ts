// @filename: ValidCachedCredentialsNotFound.test.ts
//FIXME
import test from "node:test";
import assert from "node:assert";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";
import { ValidCachedCredentialsNotFound } from "./ValidCachedCredentialsNotFound.js";

test('Unit Test - Testing if the ValidCachedCredentialsNotFound can exists.', async (context) => {
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));

    await context.test('Behavioral Test - Testing this DTO with Credentials.', () => {
        const event = new ValidCachedCredentialsNotFound(credentials);
        assert.strictEqual(event.credentials?.email, 'test@gmail.com');
    });
});