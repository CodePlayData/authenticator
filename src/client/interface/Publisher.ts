// @filename: Publisher.ts
import { DomainEvent } from "./DomainEvent.js";
import { Mediator } from "./Mediator.js";

interface Publisher {
    readonly to: Mediator[];
    publish(event: DomainEvent): void;
}

abstract class Publisher {

    constructor(readonly to: Mediator[]){
    }

    publish(event: DomainEvent): void {
        this.to.map((mediator: Mediator) => {
            mediator.notify(event);
        });
    }
};

export {
    Publisher
}