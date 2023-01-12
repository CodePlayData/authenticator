// @filename: CredentialsSaved.ts
// FIXME

import { Credentials } from "../../app/Credentials.js";
import { DomainEvent } from "../DomainEvent.js";

class CredentialsSaved implements DomainEvent {
    name = 'CredentialsSaved';
    msg

    /**
     * The last proccess in the Credentials cycle. Usually this triggers a Identification cycle.
     * @param credentials @type { Credentials }
     */
    constructor(readonly credentials?: Credentials, readonly object?: any){
        this.msg = {credentials, object};
    }
}

export {
    CredentialsSaved
}