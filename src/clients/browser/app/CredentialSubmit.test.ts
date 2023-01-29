// @filename: CredentialsSubmit.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsSubmit } from "./CredentialSubmit.js";
import { AuthConfig, Authenticator } from "./Autheticator.js";
import { Password } from "./Password.js";
import 'mock-local-storage';
import { Fetch, LocalStorage } from "@codeplaydata/adapters";
import { LocalStorageOperations as LocalStorageOps } from "../infra/LocalStorageOperations.js";
import { PasswordCredential } from "./PasswordCredential.js";
import { Email } from "./Email.js";

test('Teste de Integracao - Testando se o CredentialSubmit alcanca o autenticador persistindo assim a informacao.', async() => {
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
    const usecase = new CredentialsSubmit(authenticator);
    const password = await Password.define('12345678');
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, password);
    usecase.exec(credentials);
    assert.ok(localStorage.length > 0);
})