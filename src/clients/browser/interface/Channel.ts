// @filename: Channel.ts
import { DomainEventsRepository } from "../infra/DomainEventsRepository.js";
import { DomainEvent } from "./DomainEvent.js";
import { Mediator } from "./Mediator.js";
import { Subscriber } from "./Subscriber.js";

abstract class Channel implements Mediator {
    subs: Subscriber[] = [];
    
    constructor(readonly name: string, readonly eventsRepository?: DomainEventsRepository){
    }

    register(sub: Subscriber): void {
        this.subs.push(sub);
    }

    notify(event: DomainEvent): void {
        this.subs.map((sub: Subscriber) => {
            if(sub.events.includes(event.name)) {
                sub.fallback(event);
                this.eventsRepository?.save(event);
            }
        })
        return
    }
}

export {
    Channel
}