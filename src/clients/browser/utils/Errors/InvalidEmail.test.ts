// @filename: InvalidEmail.test.ts
import test from "node:test";
import assert from "node:assert";
import { InvalidEmailError } from "./InvalidEmail.js";

test('Testando se a mensagem da classe InvalidEmailError esta correta.', () => {
    const error = new InvalidEmailError();
    assert.strictEqual(error.message, 'The email provided is not valid. Ensure that there are no blank spaces and that contains at least the @.')
})