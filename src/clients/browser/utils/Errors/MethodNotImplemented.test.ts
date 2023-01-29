// @filename: MethodNotImplemented.test.ts
import test from "node:test";
import assert from "node:assert";
import { MethodNotImplementedError } from "./MethodNotImplemeted.js";

test('Testando se a mensagem da classe MethodNotImplemented esta correta', () => {
    const error = new MethodNotImplementedError();
    assert.strictEqual(error.message, 'Method not implemented yet.')
});