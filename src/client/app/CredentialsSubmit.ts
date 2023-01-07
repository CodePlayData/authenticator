// @filename: CredentialsSubmit.ts

/**
 *  This is the UseCase that can be used in Login(). This application use a Mediator Behavioral Pattern to 
 *  propagated the chain of events and it must be provided as constructor param.
 */

import { UseCase } from "./UseCase.js";
import { Credentials } from "./Credentials.js";
import { CredentialsSubmitted } from "../interface/DomainEvents/CredentialsSubmitted.js";
import { Channel } from "../interface/Channel.js";
import { Publisher } from "../interface/Publisher.js";
 
class CredentialsSubmit extends Publisher implements UseCase {
    
    /** @type { Channel } - This classes that will handle the request. */
    constructor(readonly channel: Channel) {
        super([channel]);
    }
     
    /**
    *   The main method of this usecase. It instance a Credential, a event and send all to the mediator.
    *   @param credentialsData @type { Credentials } - This info cames from the frontend login page.
    */
    exec(credentials: Credentials) {
        const event = new CredentialsSubmitted(credentials);
        this.publish(event);
    }
 }

export {
    CredentialsSubmit
}