// @filename: CredentialsSubmitted.test.ts
//FIXME
import test from "node:test";
import assert from "node:assert";
import { CredentialsRepository } from "../../infra/CredentialRepository.js";
import { CredentialsSubmittedHandler } from "./CredentialsSubmitted.js";
import { CredentialsSubmitted } from "../DomainEvents/CredentialSubmitted.js";
import { Handler } from "./Handler.js";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";

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
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));
    const event = new CredentialsSubmitted(credentials);
    const fakerepo = {
        get (credentialsPassedThrougHandler: Credentials) {
            assert.deepEqual(credentialsPassedThrougHandler, credentials);
        }
    } as CredentialsRepository;
    const handler = new CredentialsSubmittedHandler(fakerepo);
    handler.handle(event);
});