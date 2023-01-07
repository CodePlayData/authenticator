// @filename: UserNotIdentified.ts

import { DomainEvent } from "../DomainEvent.js";

class UserNotIdentified implements DomainEvent {
    name = 'UserNotIdentified';

    constructor() {
    }
}

export { 
    UserNotIdentified
}