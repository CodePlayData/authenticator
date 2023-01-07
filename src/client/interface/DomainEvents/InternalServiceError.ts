// @filename: InternalServerError.ts
import { DomainEvent } from "../DomainEvent";

class InternalServiceError implements DomainEvent {
    name = 'InternalServerClass';
    msg

    constructor(readonly httpErrorMessage: string) {
        this.msg = httpErrorMessage;
    }
}

export {
    InternalServiceError
}