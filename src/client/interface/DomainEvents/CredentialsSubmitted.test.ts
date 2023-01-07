// @filename: CredentialsSubmitted.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsSubmitted } from "./CredentialsSubmitted.js";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";

test('Unit Test - Testing if the CredentialsSubmitted can exists.', async () => {
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));
    const event = new CredentialsSubmitted(credentials);
    assert.strictEqual(event.msg.expire, undefined);
    assert.strictEqual(event.msg.email, 'test@gmail.com');
    assert.strictEqual(event.msg.password?.password, '663a87fe8aa74252d622c6c9bc1697d4db0cd2894608b4af7f910e538a179298');
});