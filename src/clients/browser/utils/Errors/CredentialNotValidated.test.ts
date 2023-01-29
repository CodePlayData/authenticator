// @filename: CredentialNotValidatedError.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialNotValidatedError } from "./CredentialNotValidated.js";

test('Testando se a mensagem da classe CredentialNotValidatedError esta correta', () => {
    const error = new CredentialNotValidatedError();
    assert.strictEqual(error.message, 'This credentials was not validated yet by a authenticator endpoint.')
});