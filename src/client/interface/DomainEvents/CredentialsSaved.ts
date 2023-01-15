// @filename: CredentialsSaved.ts

import { DomainEvent } from "../DomainEvent.js";

class CredentialsSaved implements DomainEvent {
    name = 'CredentialsSaved';
    msg

    /**
     * The last proccess in the Credentials cycle. Usually this triggers a Identification cycle.
     * @param credential @type { Credential }
     */
    constructor(readonly credential?: Credential, readonly object?: any){
        this.msg = {credential, object};
    }
}

export {
    CredentialsSaved
}