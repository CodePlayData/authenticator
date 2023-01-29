// @filename: UserDataDeleted.ts
import { DomainEvent } from "../DomainEvent.js";

class UserDataDeleted extends DomainEvent {
    constructor(readonly userEmail: string) {
        super('UserDataDeleted');
    }
}

export {
    UserDataDeleted
}