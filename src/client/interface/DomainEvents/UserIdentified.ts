// @filename: UserIdentified.ts
import { DomainEvent } from "../DomainEvent.js";

class UserIdentified implements DomainEvent {
    name = 'UserIdentified';
    msg
    /**
     *  The last event of the Identification cycle.
     */
    constructor(readonly user: unknown){
        this.msg = user;
    }
}

export {
    UserIdentified
}