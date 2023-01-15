// @filename: Authenticator.test.ts
import test from "node:test";
import assert from "node:assert";
import { Fetch, LocalStorage } from "@codeplaydata/adapters";
import { LocalStorageOperations as LocalStorageOps } from "../infra/LocalStorageOperations.js";
import { AuthConfig, Authenticator } from "./Autheticator.js";

test('Unidade - Testando se a aplicacao inicia com dois canais de comunicacao: Usuario e Credenciais.', () => {
    const authConfig: AuthConfig = {
        httpClient: new Fetch(),
        storage: {
            adapter: new LocalStorage(),
            operations: new LocalStorageOps()
        },
        cache: {
            adapter: new LocalStorage(),
            operations: new LocalStorageOps()
        },
        baseUrl: 'http://127.0.0.1:3000/api/v1',
    }
    const authenticator = new Authenticator(authConfig);
    assert.strictEqual(authenticator.channels.length, 2);
});