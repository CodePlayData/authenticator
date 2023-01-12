// @filename: PasswordCredentials.test.ts
import test from "node:test";
import assert from "node:assert";
import { Password } from "./Password.js";
import { PasswordCredential } from "./PasswordCredential.js";
import { Identifier } from "./Identifier.js";

test('Testando se a classe PasswordCredential pode ser instanciada.', async (context) => {
    const password = await Password.define('12345678');
    const email: Identifier = {
        id: 'test@gmail.com'
    };
    const credentials = new PasswordCredential(email, password);
    assert.strictEqual(credentials.id, 'test@gmail.com');
    assert.strictEqual(credentials.password?.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
    assert.strictEqual(credentials.validity, 4);

    await context.test('Definindo um token para a credencial e checando o resultado.', async (subcontext) => {
        credentials.token = '12345678';
        assert.strictEqual(credentials.token, '12345678');
        assert.ok(credentials.isExpired === false);

        await subcontext.test('Solicitando as informações reduzidas da credencial.', () => {
            const info = credentials.info();
            assert.deepEqual(info, { email: 'test@gmail.com', password: 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c' })
        })

        await subcontext.test('Solicitando todas as informações da credencial.', () => {
            const fullinfo = credentials.info(1);
            assert.strictEqual(fullinfo.id, 'test@gmail.com');
            assert.strictEqual(fullinfo.password, 'c0dfa082246e2a2ec22f143d46901665533dde9eeb8170abd6bad6705bd96e2c');
            assert.strictEqual(fullinfo.token, '12345678');
        })
    })
});