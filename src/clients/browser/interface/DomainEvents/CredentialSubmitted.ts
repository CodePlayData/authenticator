// @filename: CredentialSubmitted.ts
import { DomainEvent } from "../DomainEvent.js";

class CredentialSubmitted extends DomainEvent {    
    /**
     * This is the first event of the SubmitCredential usecase.
     * @param credential @type { Credential } The credential to be send to some other class.
     */
    constructor(readonly credential: Credential) {
        super('CredentialSubmitted');
    }
}

export {
    CredentialSubmitted
}