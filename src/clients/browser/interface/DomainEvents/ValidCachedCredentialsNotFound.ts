// @filename: ValidCachedCredentialsNotFound.ts
import { DomainEvent } from "../DomainEvent.js";

class ValidCachedCredentialsNotFound extends DomainEvent {
    /**
     * This is a kind error handling event. Is trigerred when there is credentials saved but all expired.
     * @param credentials @type { Credentials } The credentials to call the httpClient later.
     */
    constructor(readonly credential: Credential){
        super('ValidCachedCredentialsNotFound');
    }
}

export {
    ValidCachedCredentialsNotFound
}