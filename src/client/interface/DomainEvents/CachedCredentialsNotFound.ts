// @filename: CachedCredentialsNotFound.ts
// FIXME
import { DomainEvent } from "../DomainEvent";
import { Credentials } from "../../app/Credentials.js";

class CachedCredentialsNotFound implements DomainEvent {
    name = 'CachedCredentialsNotFound';
    msg;

    /**
     * This event cames from the database/repository.
     * @param credentials The credentials to call the httpClient later.
     */
    constructor(readonly credentials: Credentials){
        this.msg = credentials;
   }
}

export {
    CachedCredentialsNotFound
}