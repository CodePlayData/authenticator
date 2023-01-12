// @filename: ValidCachedCredentialsNotFound.ts
//FIXME
import { DomainEvent } from "../DomainEvent.js";
import { Credentials } from "../../app/Credentials.js";

class ValidCachedCredentialsNotFound implements DomainEvent {
    name = 'ValidCachedCredentialsNotFound';
    msg

    /**
     * This is a kind error handling event. Is trigerred when there is credentials saved but all expired.
     * @param credentials @type { Credentials } The credentials to call the httpClient later.
     */
    constructor(readonly credentials: Credentials){
        this.msg = credentials;
    }
}

export {
    ValidCachedCredentialsNotFound
}