import test from "node:test";
import assert from "node:assert";
import { User } from "./User.js";
import { Credentials } from "./Credentials.js";
import { Password } from "./Password.js";

test('Integration Test - All tests should pass as one, since this is a aggregate class.', async (context) => {
    const password = await Password.define('12345678');
    const credentials = new Credentials('test@gmail.com', password);
    credentials.token = '12345678'
    const user = new User('User Test', credentials);

    assert.strictEqual(user.credentials.password?.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
    assert.deepEqual(user.credentials.info(), { email: 'test@gmail.com', password: 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c' });
    assert.strictEqual(user.credentials.info(1).email, 'test@gmail.com');
    assert.strictEqual(user.credentials.info(1).password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
    assert.strictEqual(user.credentials.info(1).token, '12345678');

    await context.test('Unit Test - Testing the getter with a empty metadata.', () => {
        assert.strictEqual(user.metadata, undefined);
    })
});

test('Integration Test - Testing the User class with some metadata provided', async () => {
    const password = await Password.define('12345678');
    const credentials = new Credentials('test@gmail.com', password);
    const metadata = {
        id: {
            $oid: 'abcdef'
        },
        isActive: true,
        isDue: false,
        createdAt: '',
        lastAccess: '',
        license: [''],
        whenTokensRequested: ['']
    }
    const user = new User('User Test', credentials, metadata);
    assert.strictEqual(user.metadata?.id.$oid, 'abcdef');
});