// @filename: CredentialsRepository.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsRepository } from "./CredentialsRepository.js";
import { LocalStorage as LocalStorageAdapter } from "@imunoderma/i_adapters";
import 'mock-local-storage';
import { Password } from "../app/Password.js";
import { Credentials } from "../app/Credentials.js";
import { LocalStorageOperations as LocalStorageOps } from "./LocalStorageOperations.js";

test('Integration Test - Testing if the CredentialsRepository can exists.', async(context) => {
    const storage = new LocalStorageAdapter();
    storage.query(new LocalStorageOps().Deleteall);
    const repo = new CredentialsRepository(storage, new LocalStorageOps());
    const password = await Password.define('12345678');
    const credentials = new Credentials('test@gmail.com', password);
    credentials.token = '12345678';
    assert.deepEqual(repo.get(), []);

    await context.test('Behavioural Test - Testing saving a credentials. ', async() => {
        assert.strictEqual(storage.lenght, 0);
        repo.save(credentials);
        assert.strictEqual(storage.lenght, 1);
    });

    await context.test('Behavioural Test - Testing get an credentials.', () => {
        const dbreturn = JSON.parse(repo.get(undefined, credentials.id))[0];
        assert.strictEqual(dbreturn.object.email, credentials.email);
    });

    await context.test('Behavioural Test - Testing list all credentials. ', () => {
        const dbreturn = repo.get() as Array<any>;
        assert.strictEqual(dbreturn.length, 1);
    });
})
