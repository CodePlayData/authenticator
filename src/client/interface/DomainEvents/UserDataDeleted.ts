// @filename: UserDataDeleted.ts
import { DomainEvent } from "../DomainEvent.js";

class UserDataDeleted implements DomainEvent {
    name = 'UserDataDeleted';
    msg;

    constructor(readonly userEmail: string) {
        this.msg = userEmail;
    }
}

export {
    UserDataDeleted
}