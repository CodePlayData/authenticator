// @filename: CachedCredentialsNotFound.ts
import { DomainEvent } from "../DomainEvent.js";

class CachedCredentialsNotFound implements DomainEvent {
    name = 'CachedCredentialsNotFound';
    msg;

    /**
     * This event cames from the database/repository.
     * @param credentials The credentials to call the httpClient later.
     */
    constructor(readonly credential: Credential){
        this.msg = credential;
   }
}

export {
    CachedCredentialsNotFound
}