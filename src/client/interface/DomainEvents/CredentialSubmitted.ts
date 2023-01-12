// @filename: CredentialSubmitted.ts
import { DomainEvent } from "../DomainEvent";

class CredentialSubmitted implements DomainEvent {
    name = 'CredentialSubmitted';
    msg;
    
    /**
     * This is the first event of the SubmitCredential usecase.
     * @param credential @type { Credential } The credential to be send to some other class.
     */
    constructor(readonly credential: Credential) {
        this.msg = credential;
    }
}

export {
    CredentialSubmitted
}