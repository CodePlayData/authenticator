// @filename: CredentialsSaved.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsSavedHandler } from "./CredentialsSaved.js";
import { Password } from "../../app/Password.js";
import { CredentialsRepository } from "../../infra/CredentialsRepository.js";
import { CredentialsSaved } from "../DomainEvents/CredentialsSaved.js";
import { Handler } from "./Handler.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the CredentialsSavedHandler can exists. ', () => {
    const fakeRepository = {} as CredentialsRepository;
    const handler = new CredentialsSavedHandler(fakeRepository);
    assert.strictEqual(handler.events[0], 'CredentialsSaved');
    assert.deepEqual(handler.repository, {});
    assert.strictEqual(handler.subscribedTo, undefined);
});

test('Behavioral Test - Testing if the CredentialsSavedHandler can register another Handler to use.', () => {
    const fakeRepository = {} as CredentialsRepository;
    const handler = new CredentialsSavedHandler(fakeRepository);
    const nextHandler = { test: 'behavioral' } as unknown as Handler;
    handler.use(nextHandler);
    assert.deepEqual(handler['nextHandler'], { test: 'behavioral'});
});

test('Integration Test - Testing the handle method in CredentialsSavedHandler.', async () => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    const event = new CredentialsSaved(credentials);
    const fakeRepository = {
            get (credentialsPassedThrougHandler: Credential, idPassedThrougHandler: number | string) {
                assert.deepEqual(credentialsPassedThrougHandler, credentials);
                assert.deepEqual(idPassedThrougHandler, credentials.id);
            }
        } as CredentialsRepository;
    const handler = new CredentialsSavedHandler(fakeRepository);
    handler.handle(event);
});

