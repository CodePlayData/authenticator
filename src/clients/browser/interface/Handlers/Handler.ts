// @filename: AbstractHandler.ts
import { DomainEvent } from "../DomainEvent.js";
import { Subscriber } from "../Subscriber.js";

abstract class Handler extends Subscriber {
    private nextHandler!: Handler;

    constructor(events: string[]){
        super(events, (event: DomainEvent) => { this.handle(event) })
    }

    public use(handler: Handler) {
        this.nextHandler = handler;
        return handler
    }

    handle(event: DomainEvent): Handler | void | Promise<void> {
        if(this.nextHandler) {
            return this.nextHandler.handle(event);
        }
        return
    }
}

export {
    Handler
}