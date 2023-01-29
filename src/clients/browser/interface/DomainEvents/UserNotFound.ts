// @filename: UserNotFound.ts
import { DomainEvent } from "../DomainEvent.js";

class UserNotFound extends DomainEvent {
    constructor(readonly httpErrorMessage: string) {
        super('UserNotFound');
    }
}

export {
    UserNotFound
}