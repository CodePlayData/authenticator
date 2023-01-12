// @filename: Password.test.ts

//FIXME
import test from "node:test";
import assert from "node:assert";
import crypto from "node:crypto";
import { Password } from "./Password.js";

test('Unit Test - Invoking the Password class using its method to get the Array.', async () => {
    const password = await Password.define('12345678');
    assert.strictEqual(password.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
});

test('Unit Test - Testing if the Password class can use external Array.', async () => {
    const encoder = new TextEncoder();
    const data = encoder.encode(Buffer.from('12345678', "utf8").toString('hex'));
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const password = new Password(hashBuffer);
    assert.strictEqual(password.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c')
});
