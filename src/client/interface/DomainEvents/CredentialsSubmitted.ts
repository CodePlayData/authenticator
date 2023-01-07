// @filename: CredentialsSubmitted.ts

/**
 *  The event emmited when someone needs to login with local credentials.
 */

import { Credentials } from "../..";
import { DomainEvent } from "../DomainEvent";

class CredentialsSubmitted implements DomainEvent {
    name = 'CredentialsSubmitted';
    msg;
    
    /**
     * This is the first event of the SubmitCredentials usecase.
     * @param credentials @type { Credentials } The credentials to be send to API endpoint.
     */
    constructor(readonly credentials: Credentials) {
        this.msg = credentials;
    }
}

export {
    CredentialsSubmitted
}