// @filename: DomainEvent.ts

import { Identifier } from "../app/Identifier.js";

abstract class DomainEvent extends Identifier {
    name;
    constructor(name: string) {
        super(String(`${name} - ${new Date(Date.now()).getTime()}`));
        this.name = name;
    }
}

export {
    DomainEvent
}