import { DomainEvent } from "../DomainEvent.js";

class CachedUserNotFound implements DomainEvent {
    name = 'CachedUserNotFound';
    msg;
    constructor() {
        this.msg = '';
    }
}

export {
    CachedUserNotFound
}