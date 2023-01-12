// @filename: UserAuthorized.test.ts
// FIXME
import test from "node:test";
import assert from "node:assert";
import { CredentialsRepository } from "../../infra/CredentialRepository.js";
import { UserAuthenticatedHandler } from "./UserAuthenticated.js";
import { Handler } from "./Handler.js";
import { Credentials } from "../../app/Credentials.js";
import { Password } from "../../app/Password.js";
import { UserAuthenticated } from "../DomainEvents/UserAuthenticated.js";
import { CredentialsDataFormat } from "../../enums.js";

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
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));
    credentials.token = 'abcdefghijlmnopqrstuvxz';
    const event = new UserAuthenticated(credentials);
    const fakerepo = {
        save (credentialsPassedThrougHandler: Credentials) {
            assert.deepEqual(credentialsPassedThrougHandler, credentials.info(CredentialsDataFormat.full));
        }
    } as CredentialsRepository;
    const handler = new UserAuthenticatedHandler(fakerepo);
    handler.handle(event);
});