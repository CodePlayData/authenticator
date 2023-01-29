// @filename: Publisher.ts
import { DomainEvent } from "./interface/DomainEvent.js";
import { Mediator } from "./interface/Mediator.js";

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