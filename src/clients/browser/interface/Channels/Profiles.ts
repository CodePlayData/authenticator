// @filename: Profiles.ts
import { DomainEventsRepository } from "../../infra/DomainEventsRepository.js";
import { Channel } from "../Channel.js";

class UserChannel extends Channel {
    constructor(readonly eventStorage?: DomainEventsRepository) {
        super('user', eventStorage);
    }
}

export {
    UserChannel
}