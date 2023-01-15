// @filename: CredentialsSubmitted.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsRepository } from "../../infra/CredentialsRepository.js";
import { CredentialsSubmittedHandler } from "./CredentialsSubmitted.js";
import { CredentialSubmitted } from "../DomainEvents/CredentialSubmitted.js";
import { Handler } from "./Handler.js";
import { Password } from "../../app/Password.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the  CredentialsSubmittedHandler can exists.', () => {
    const fakerepo = {} as CredentialsRepository;
    const handler = new CredentialsSubmittedHandler(fakerepo);
    assert.strictEqual(handler.events[0], 'CredentialsSubmitted');
    assert.deepEqual(handler.repository, {});
    assert.strictEqual(handler.subscribedTo, undefined);
});

test('Behavioral Test - Testing if the CredentialsSubmittedHandler can register another Handler to use.', () => {
    const fakerepo = {} as CredentialsRepository;
    const handler = new CredentialsSubmittedHandler(fakerepo);
    const nextHandler = { test: 'behavioral' } as unknown as Handler;
    handler.use(nextHandler);
    assert.deepEqual(handler['nextHandler'], { test: 'behavioral'});
});

test('Integration Test - Testing the handle method in CredentialsSubmittedHandler.', async () => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    const event = new CredentialSubmitted(credentials);
    const fakerepo = {
        get (credentialsPassedThrougHandler: Credential) {
            assert.deepEqual(credentialsPassedThrougHandler, credentials);
        }
    } as CredentialsRepository;
    const handler = new CredentialsSubmittedHandler(fakerepo);
    handler.handle(event);
});