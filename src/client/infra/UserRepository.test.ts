// @filename: UserRepository.test.ts
//FIXME
import test from "node:test";
import assert from "node:assert";
import { UserRepository } from "./UserRepository.js";
import { LocalStorage as LocalStorageAdapter } from "@codeplaydata/adapters";
import 'mock-local-storage';
import { Password } from "../app/Password.js";
import { Credentials } from "../app/Credentials.js";
import { User } from "../app/Profile.js";
import { LocalStorageOperations as LocalStorageOps } from "./LocalStorageOperations.js";

test('Integration Test - Testing if the UserRepository can exists.', async(context) => {
    const storage = new LocalStorageAdapter();
    storage.query(new LocalStorageOps().Deleteall);
    const repo = new UserRepository(storage, new LocalStorageOps());
    const password = await Password.define('12345678');
    const credentials = new Credentials('test@gmail.com', password);
    credentials.token = '12345678';
    const user = new User('User Test', credentials);
    assert.deepEqual(repo.list(), []);

    await context.test('Behavioural Test - Testing saving an user. ', async() => {
        assert.strictEqual(storage.lenght, 0);
        repo.save(user);
        assert.strictEqual(storage.lenght, 1);
    });

    await context.test('Behavioural Test - Testing get an user.', () => {
        const dbreturn = JSON.parse(repo.get(user.credentials))[0];
        assert.strictEqual(dbreturn.object.credentials.email, 'test@gmail.com');
    });

    await context.test('Behavioural Test - Testing list all user repository. ', () => {
        const dbreturn = repo.list() as Array<any>;
        assert.strictEqual(dbreturn.length, 1);
    });

    await context.test('Behavioural Test - Testing delete a user.', () => {
        assert.strictEqual(storage.lenght, 1);
        repo.delete(user.credentials);
        assert.strictEqual(storage.lenght, 0);
    });
})