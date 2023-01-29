// @filename: DomainEventsRepository.test.ts
import test from "node:test";
import assert from "node:assert";
import { DomainEventsRepository } from "./DomainEventsRepository.js";
import { LocalStorage as LocalStorageAdapter } from "@codeplaydata/adapters";
import 'mock-local-storage';
import { LocalStorageOperations } from "./LocalStorageOperations.js";
import { InternalServiceError } from "../interface/DomainEvents/InternalServiceError.js";
import { MethodNotImplementedError } from "../utils/Errors/MethodNotImplemeted.js";

test('Testando se a classe DomainEventsRepository pode ser instanciada.', async (context) => {
    const storage = new LocalStorageAdapter();
    storage.query(new LocalStorageOperations().Deleteall);
    const repo = new DomainEventsRepository(storage, new LocalStorageOperations());
    assert.ok(repo);

    await context.test('Salvando um evento.', () => {
        assert.strictEqual(storage.lenght, 0);
        const event = new InternalServiceError(new MethodNotImplementedError());
        repo.save(event);
        assert.strictEqual(storage.lenght, 1);
    });
})