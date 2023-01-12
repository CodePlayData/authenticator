// @filename: Credentials.ts
import { DomainEventsRepository } from "../../infra/DomainEventsRepository.js";
import { Channel } from "../Channel.js";

class CredentialsChannel extends Channel {
    constructor(readonly eventStorage?: DomainEventsRepository) {
        super('credentials', eventStorage);
    }
}

export {
    CredentialsChannel
}