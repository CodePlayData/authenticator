// @filename: SingletonDuplicity.test.ts
import test from "node:test";
import assert from "node:assert";
import { SingletonDuplicityError } from "./SingletonDuplicity.js";

test('Testando se a mensagem da classe SingletonDuplicityError esta correta.', () => {
    const error = new SingletonDuplicityError();
    assert.strictEqual(error.message, 'You can not invoke two instances of this class.')
});

test('Testando se e possivel identificar a classe singleton passando o nome como parametro.', () => {
    const error = new SingletonDuplicityError('generic');
    assert.strictEqual(error.message, 'You can not invoke two instances of generic class.')
});