// @filename: UserNotFound.ts
import { DomainEvent } from "../DomainEvent.js";

class UserNotFound implements DomainEvent {
    name = 'UserNotFound';
    msg
    
    constructor(readonly httpErrorMessage: string) {
        this.msg = httpErrorMessage;
    }
}

export {
    UserNotFound
}