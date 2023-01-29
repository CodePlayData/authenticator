// @filename: InternalServerError.test.ts
import test from "node:test";
import assert from "node:assert";
import { InternalServiceError } from "./InternalServiceError.js";

test('Unit Test - Testing if the InternalServerError class can exists.', () => {
    const event = new InternalServiceError('The service is not available.');
    assert.strictEqual(event.httpErrorMessage, 'The service is not available.');
})