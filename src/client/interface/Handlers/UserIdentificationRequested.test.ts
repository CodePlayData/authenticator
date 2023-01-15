// @filename: UserIdentificationRequested.test.ts
import test from "node:test";
import assert from "node:assert";
import { UserRepository } from "../../infra/UserRepository.js";
import { UserIdentificationRequestedHandler } from "./UserIdentificationRequested.js";
import { Handler } from "./Handler.js";
import { Password } from "../../app/Password.js";
import { UserIdentificationRequested } from "../DomainEvents/UserIdentificationRequested.js";
import { PasswordCredential } from "../../app/PasswordCredential.js";
import { Email } from "../../app/Email.js";

test('Unit Test - Testing if the UserIdentificationRequestedHandler can exists.', () => {
    const fakeRepository = {} as UserRepository;
    const handler = new UserIdentificationRequestedHandler(fakeRepository);
    assert.strictEqual(handler.events[0], 'UserIdentificationRequested');
    assert.deepEqual(handler.repository, {});
    assert.strictEqual(handler.subscribedTo, undefined);
});

test('Behavioral Test - Testing if the UserIdentificationRequestedHandler can register another Handler to use.', () => {
    const fakeRepository = {} as UserRepository;
    const handler = new UserIdentificationRequestedHandler(fakeRepository);
    const nextHandler = { test: 'behavioral' } as unknown as Handler;
    handler.use(nextHandler);
    
    assert.deepEqual(handler['nextHandler'], { test: 'behavioral'});
});

test('Integration Test - Testing the handle method in UserIdentificationRequestedHandler.', async () => {
    const email = new Email('test@gmail.com');
    const credentials = new PasswordCredential(email, await Password.define('my-secret'));
    const event = new UserIdentificationRequested(credentials);
    const fakeRepository = {
            get (credentialsPassedThrougHandler: Credential) {
                assert.deepEqual(credentialsPassedThrougHandler, credentials);
            }
        } as UserRepository;
    const handler = new UserIdentificationRequestedHandler(fakeRepository);
    handler.handle(event);
});