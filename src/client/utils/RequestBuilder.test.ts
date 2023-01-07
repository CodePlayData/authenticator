// @filename: RequestBuilder.test.ts
import test from "node:test";
import assert from "node:assert";
import { RequestBuilder } from "./RequestBuilder.js";

test('Unit Test - ', async() => {
    const request = new RequestBuilder('https://httpstat.us/200').get().build();
    assert.strictEqual(request.method, 'GET');
})