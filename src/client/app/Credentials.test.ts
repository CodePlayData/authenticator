// @filename: Credentials.test.ts
import test from "node:test";
import assert from "node:assert";
import { Password } from "./Password.js";
import { Credentials } from "./Credentials.js";

test('Unit Test - Testing if the Credentials class has all properties that should have and do what should do.', async (context) => {
    const password = await Password.define('12345678');
    const credentials = new Credentials('test@gmail.com', password);
    assert.strictEqual(credentials.email, 'test@gmail.com');
    assert.strictEqual(credentials.password?.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
    assert.strictEqual(credentials.validity, 4);

    await context.test('Set the token credentials and Get the result.', async (subcontext) => {
        credentials.token = '12345678';
        assert.strictEqual(credentials.token, '12345678');
        assert.strictEqual(credentials.expire > new Date(Date.now()).getTime(), true);

        await subcontext.test('Get the short info', () => {
            const info = credentials.info();
            assert.deepEqual(info, { email: 'test@gmail.com', password: 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c' })
        })

        await subcontext.test('Get the full info.', () => {
            const fullinfo = credentials.info(1);
            assert.strictEqual(fullinfo.email, 'test@gmail.com');
            assert.strictEqual(fullinfo.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
            assert.strictEqual(fullinfo.token, '12345678');
        })
    })
});