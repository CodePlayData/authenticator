// @filename: CredentialSubmit.ts
import { UseCase } from "./UseCase.js";
import { CredentialSubmitted } from "../interface/DomainEvents/CredentialSubmitted.js";
import { Publisher } from "../Publisher.js";
import { Authenticator } from "./Autheticator.js";
 
class CredentialsSubmit extends Publisher implements UseCase {
    /** @type { Channel[] } - All channels that this usecase must reach. */
    constructor(readonly authenticator: Authenticator) {
        super(authenticator.channels);
    };
    
    /**
    *   Sending the credential througth the CredentialSubmitted event.
    *   @param credential @type { Credential } - This info cames from the frontend login page.
    *   @returns @type { void }
    */
    exec(credential: Credential) {
        const event = new CredentialSubmitted(credential);
        this.publish(event);
    };
 }

export {
    CredentialsSubmit
}