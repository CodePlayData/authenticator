// @filename: UserIdentificationRequested.ts
//FIXME
import { Credentials } from "../../app/Credentials.js";
import { DomainEvent } from "../DomainEvent.js";

class UserIdentificationRequested implements DomainEvent {
    name = 'UserIdentificationRequested';
    msg

    /**
     * The first event in the Authorization cycle.
     * @param credentials @type { Credentials }
     * @param databaseReturn @type{ any }
     */
    constructor(readonly credentials: Credentials,  readonly databaseReturn?: any){
        this.msg = databaseReturn ? { databaseReturn, credentials } : credentials;
    }
}

export {
    UserIdentificationRequested
}