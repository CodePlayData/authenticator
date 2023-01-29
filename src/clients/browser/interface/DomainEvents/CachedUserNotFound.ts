// @filename: CachedUserNotFound.test.ts
import { DomainEvent } from "../DomainEvent.js";

class CachedUserNotFound extends DomainEvent {
    constructor() {
        super('CachedUserNotFound')
    }
}

export {
    CachedUserNotFound
}