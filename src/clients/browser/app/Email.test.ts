// @filename: Email.test.ts
import test from "node:test";
import assert from "node:assert";
import { Email } from "./Email.js";

test('Testando um email valido.', () => {
    const email = new Email('teste@gmail.com');
    assert.strictEqual(email.email, 'teste@gmail.com');
});

test('Testando um email invalido', () => {
    assert.throws(
        () => {
            return new Email('   @  pjd..com')
        },
        Error,
        'The email provided is not valid. Ensure that there are no blank spaces and that contains at least the @.'
    )
});