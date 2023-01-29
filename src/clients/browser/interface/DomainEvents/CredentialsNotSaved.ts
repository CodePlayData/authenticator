// @filename: CredentialsNotSaved.test.ts
import { DomainEvent } from "../DomainEvent.js";

class CredentialsNotSaved extends DomainEvent {
    constructor() {
        super('CredentialsNotSaved')
    }
}

export {
    CredentialsNotSaved
}