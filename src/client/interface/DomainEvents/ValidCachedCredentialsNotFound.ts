// @filename: ValidCachedCredentialsNotFound.ts
import { DomainEvent } from "../DomainEvent.js";

class ValidCachedCredentialsNotFound implements DomainEvent {
    name = 'ValidCachedCredentialsNotFound';
    msg

    /**
     * This is a kind error handling event. Is trigerred when there is credentials saved but all expired.
     * @param credentials @type { Credentials } The credentials to call the httpClient later.
     */
    constructor(readonly credential: Credential){
        this.msg = credential;
    }
}

export {
    ValidCachedCredentialsNotFound
}