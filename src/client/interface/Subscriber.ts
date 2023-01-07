// @filename: Subscriber.ts
import { Mediator } from "./Mediator.js";

interface Subscriber {
    readonly events: string[];
    subesctibedTo: Mediator[];
    subscribe(to: Mediator): void
}

abstract class Subscriber {
    subscribedTo!: string[];

    constructor(readonly events: string[], readonly fallback: Function){
    }

    subscribe(to: Mediator) {
        to.register(this);
    }
}

export {
    Subscriber
}