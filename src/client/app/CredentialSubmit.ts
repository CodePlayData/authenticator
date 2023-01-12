// @filename: CredentialSubmit.ts
import { UseCase } from "./UseCase.js";
import { CredentialSubmitted } from "../interface/DomainEvents/CredentialSubmitted.js";
import { Channel } from "../interface/Channel.js";
import { Publisher } from "../interface/Publisher.js";
 
class CredentialsSubmit extends Publisher implements UseCase {
    
    /** @type { Channel[] } - All channels that this usecase must reach. */
    constructor(readonly channels: Channel[]) {
        super(channels);
    }
    
    /**
    *   Sending the credential througth the CredentialSubmitted event.
    *   @param credential @type { Credential } - This info cames from the frontend login page.
    *   @returns @type { void }
    */
    exec(credential: Credential) {
        const event = new CredentialSubmitted(credential);
        this.publish(event);
    }
 }

export {
    CredentialsSubmit
}