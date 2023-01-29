// @filename: UserIdentified.ts
import { DomainEvent } from "../DomainEvent.js";

class UserIdentified extends DomainEvent {
    /**
     *  The last event of the Identification cycle.
     */
    constructor(readonly user: unknown){
        super('UserIdentified');
    }
}

export {
    UserIdentified
}