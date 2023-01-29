// @filename: CredentialsSubmitted.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialSubmitted } from "./CredentialSubmitted.js";
import { Password } from "../../app/Password.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Identifier } from "../../app/Identifier.js";

test('Testando se o evento pode ser instanciado com PasswordCredential.', async () => {
    const email: Identifier = { id: 'test@gmail.com' };
    const password = await Password.define('my-secret');
    const credential = new PasswordCredential(email, password);
    const event = new CredentialSubmitted(credential);
    assert.strictEqual(event.msg.type, 'PasswordCredential');
    assert.strictEqual(event.msg.id, 'test@gmail.com');
});