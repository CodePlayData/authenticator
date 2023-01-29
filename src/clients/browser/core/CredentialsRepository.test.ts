// @filename: CredentialRepository.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsRepository } from "./CredentialsRepository.js";
import { LocalStorage as LocalStorageAdapter } from "@codeplaydata/adapters";
import 'mock-local-storage';
import { Password } from "../app/Password.js";
import { PasswordCredential } from "../app/PasswordCredential.js";
import { LocalStorageOperations as LocalStorageOps } from "./LocalStorageOperations.js";
import { Identifier } from "../app/Identifier.js";

test('Testando se a classe CredentialsRepository pode ser instanciada.', async(context) => {
    const storage = new LocalStorageAdapter();
    storage.query(new LocalStorageOps().Deleteall);
    const repo = new CredentialsRepository(storage, new LocalStorageOps());
    const password = await Password.define('12345678');
    const email: Identifier = { id: 'test@gmail.com'};
    const credential = new PasswordCredential(email, password);
    credential.token = '12345678';

    assert.ok(repo);

    await context.test('Checando se a base de dados esta vazia.', () => {
        assert.deepEqual(repo.get(), []);
    })

    await context.test('Salvando uma credencial no banco de dados. ', async() => {
        assert.strictEqual(storage.lenght, 0);
        repo.save(credential);
        assert.strictEqual(storage.lenght, 1);
    });

    await context.test('Buscando uma credencial.', () => {
        const dbreturn = JSON.parse(repo.get(undefined, credential.id))[0];
        assert.strictEqual(dbreturn.object.id, credential.id);
    });

    await context.test('Solicitando todo o banco de dados. ', () => {
        const dbreturn = repo.get() as Array<any>;
        assert.strictEqual(dbreturn.length, 1);
    });

    await context.test('Testando o metodo deletar.', () => {
        assert.throws(
            () => {
                return repo.delete('123')
            },
            Error,
            'Method not implemented yet.'
        )
    });
})
