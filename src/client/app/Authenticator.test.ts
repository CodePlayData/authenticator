// @filename: Authenticator.test.ts
import test from "node:test";
import assert from "node:assert";
import { Fetch, LocalStorage } from "@imunoderma/i_adapters";
import { LocalStorageOperations as LocalStorageOps } from "../infra/LocalStorageOperations.js";
import { AuthConfig, Authenticator } from "./Autheticator.js";

test('Unidade - Testando se a aplicação inicia com dois canais de comunicação: Usuário e Credenciais.', () => {
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
        baseUrl: 'https://api.imunoderma.com.br/v1',
    }
    const authenticator = new Authenticator(authConfig);
    assert.strictEqual(authenticator.channels.length, 2);
});