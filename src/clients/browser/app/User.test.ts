// @filename: User.test.ts

import test from "node:test";
import assert from "node:assert";
import { User } from "./User.js";
import { Email } from "./Email.js";
import { Password } from "./Password.js";
import { PasswordCredential } from "./PasswordCredential.js";

test('Testando a classe Usuario como uma extensao da classe abstrata Profile.', async() => {
    const email = new Email('test@gmail.com');
    const password = await Password.define('1234567');
    const credential = new PasswordCredential(email, password);
    const user = new User(email, credential);

    assert.deepEqual(user.credential, credential);
    assert.deepEqual(user.email, email);
})