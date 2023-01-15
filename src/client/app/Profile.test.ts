// @filename: Profile.test.ts
import test from "node:test";
import assert from "node:assert";
import { Profile } from "./Profile.js";
import { PasswordCredential } from "./PasswordCredential.js";
import { Password } from "./Password.js";
import { Email } from "./Email.js";
import { User } from "./User.js";

test('Testando a classe Profile extendida para um caso de uso hipotetico de cadastro de usuários por email', async (context) => {
    const password = await Password.define('12345678');
    const email = new Email('test@gmail.com');
    const credential = new PasswordCredential({ id: '12345678'}, password);
    credential.token = '12345678';
    const user = new User(email, credential);

    assert.strictEqual(user.credential.id, '12345678');
    assert.strictEqual(user.email, 'test@gmail.com');
});
