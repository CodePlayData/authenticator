// @filename: CredentialsNotSaved.test.ts
import { DomainEvent } from "../DomainEvent";

class CredentialsNotSaved implements DomainEvent {
    name = 'CredentialsNotSaved';
    constructor(){
    }
}

export {
    CredentialsNotSaved
}