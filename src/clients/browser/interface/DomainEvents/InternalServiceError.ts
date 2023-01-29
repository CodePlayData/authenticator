// @filename: InternalServerError.ts
import { DomainEvent } from "../DomainEvent.js";

class InternalServiceError extends DomainEvent {
    constructor(readonly error: Error) {
        super('InternalServerError');
    }
}

export {
    InternalServiceError
}