// @filename: UserAuthorized.test.ts
import test from "node:test";
import assert from "node:assert";
import { CredentialsRepository } from "../../infra/CredentialsRepository.js";
import { UserAuthenticatedHandler } from "./UserAuthenticated.js";
import { Handler } from "./Handler.js";
import { Password } from "../../app/Password.js";
import { UserAuthenticated } from "../DomainEvents/UserAuthenticated.js";
import { CredentialsDataFormat } from "../../enums.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the  UserAuthenticatedHandler can exists.', () => {
    const fakerepo = {} as CredentialsRepository;
    const handler = new UserAuthenticatedHandler(fakerepo);
    assert.strictEqual(handler.events[0], 'UserAuthenticated');
    assert.deepEqual(handler.repository, {});
    assert.strictEqual(handler.subscribedTo, undefined);
});

test('Behavioral Test - Testing if the UserAuthenticatedHandler can register another Handler to use.', () => {
    const fakerepo = {} as CredentialsRepository;
    const handler = new UserAuthenticatedHandler(fakerepo);
    const nextHandler = { test: 'behavioral' } as unknown as Handler;
    handler.use(nextHandler);
    assert.deepEqual(handler['nextHandler'], { test: 'behavioral'});
});

test('Integration Test - Testing the handle method in UserAuthenticatedHandler.', async () => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    credentials.token = 'abcdefghijlmnopqrstuvxz';
    const event = new UserAuthenticated(credentials);
    const fakerepo = {
        save (credentialsPassedThrougHandler: Credential) {
            assert.deepEqual(credentialsPassedThrougHandler, credentials.info(CredentialsDataFormat.full));
        }
    } as CredentialsRepository;
    const handler = new UserAuthenticatedHandler(fakerepo);
    handler.handle(event);
});