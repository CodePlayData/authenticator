// @filename: UserIdentificationRequested.ts
import { DomainEvent } from "../DomainEvent.js";

class UserIdentificationRequested extends DomainEvent {
    /**
     * The first event in the Authorization cycle.
     * @param credential @type { Credential }
     * @param databaseReturn @type{ any }
     */
    constructor(readonly credential: Credential, readonly databaseReturn?: any){
        super('UserIdentificationRequested');
    }
}

export {
    UserIdentificationRequested
}