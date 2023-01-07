// @filename: Mediator.ts
import { DomainEvent } from "./DomainEvent.js";
import { Subscriber } from "./Subscriber.js";

interface Mediator {
    subs: Subscriber[];
    register(sub: Subscriber): void;
    notify(event: DomainEvent): void;
}

export {
    Mediator
}