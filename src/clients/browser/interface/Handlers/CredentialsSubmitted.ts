// @filename: CredentialsSubmitted.ts
import { CredentialsRepository } from "../../infra/CredentialsRepository.js";
import { CredentialSubmitted } from "../DomainEvents/CredentialSubmitted.js";
import { Handler } from "./Handler.js";

class CredentialsSubmittedHandler extends Handler {   
    /**
     * This handlers only triggers all logic cycle. Is called once.
     * @param repository @type { Repository } The repository to get the credentials.
     */
    constructor(readonly repository: CredentialsRepository){
        super(['CredentialSubmitted']);
    }

    /**
     * This handle only get credentials from repository.
     * @param event @type { CredentialsSubmitted } The event to passed.
     */
    async handle(event: CredentialSubmitted): Promise<void> {  
        this.repository.get(event.credential);
    }
}

export {
    CredentialsSubmittedHandler
}