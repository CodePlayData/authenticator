// @filename: UserIdentificationRequested.ts
import { DomainEvent } from "../DomainEvent.js";

class UserIdentificationRequested implements DomainEvent {
    name = 'UserIdentificationRequested';
    msg

    /**
     * The first event in the Authorization cycle.
     * @param credential @type { Credential }
     * @param databaseReturn @type{ any }
     */
    constructor(readonly credential: Credential,  readonly databaseReturn?: any){
        this.msg = databaseReturn ? { databaseReturn, credential } : credential;
    }
}

export {
    UserIdentificationRequested
}