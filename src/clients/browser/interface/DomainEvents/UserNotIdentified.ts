// @filename: UserNotIdentified.ts
import { DomainEvent } from "../DomainEvent.js";

class UserNotIdentified extends DomainEvent {
    constructor() {
        super('UserNotIdentified');
    }
}

export { 
    UserNotIdentified
}