// @filename: UserIdentificationRequested.test.ts
//FIXME
import test from "node:test";
import assert from "node:assert";
import { UserRepository } from "../../infra/UserRepository.js";
import { UserIdentificationRequestedHandler } from "./UserIdentificationRequested.js";
import { Handler } from "./Handler.js";
import { Password } from "../../app/Password.js";
import { Credentials } from "../../app/Credentials.js";
import { UserIdentificationRequested } from "../DomainEvents/UserIdentificationRequested.js";

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
    const credentials = new Credentials('test@gmail.com', await Password.define('my-secret'));
    const event = new UserIdentificationRequested(credentials);
    const fakeRepository = {
            get (credentialsPassedThrougHandler: Credentials) {
                assert.deepEqual(credentialsPassedThrougHandler, credentials);
            }
        } as UserRepository;
    const handler = new UserIdentificationRequestedHandler(fakeRepository);
    handler.handle(event);
});