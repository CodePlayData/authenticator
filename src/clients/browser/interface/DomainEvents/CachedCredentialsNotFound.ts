// @filename: CachedCredentialsNotFound.ts
import { DomainEvent } from "../DomainEvent.js";

class CachedCredentialsNotFound extends DomainEvent {
    /**
     * This event cames from the database/repository.
     * @param credentials The credentials to call the httpClient later.
     */
    constructor(readonly credential: Credential){
        super('CachedCredentialsNotFound');
   }
}

export {
    CachedCredentialsNotFound
}