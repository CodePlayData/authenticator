// @filename: CredentialsSubmit.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsSubmit } from "./CredentialsSubmit.js";
import { AuthConfig, Authenticator } from "./Autheticator.js";
import { Credentials } from "./Credentials.js";
import { Password } from "./Password.js";
import 'mock-local-storage';
import { Fetch, LocalStorage } from "@codeplaydata/adapters";
import { LocalStorageOperations as LocalStorageOps } from "../infra/LocalStorageOperations.js";

test('Integration Test - Testing if the CredentialsSubmit action changes anything.', async() => {
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
    const usecase = new CredentialsSubmit(authenticator.channels[1]);
    const password = await Password.define('12345678');
    const credentials = new Credentials('test@gmail.com', password);
    usecase.exec(credentials);
    assert.ok(localStorage.length > 0);
})