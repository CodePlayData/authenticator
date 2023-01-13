// @filename: CredentialsSubmitted.ts
//FIXME
import { CredentialsRepository } from "../../infra/CredentialsRepository.js";
import { CredentialsSubmitted } from "../DomainEvents/CredentialSubmitted.js";
import { Handler } from "./Handler.js";

class CredentialsSubmittedHandler extends Handler {   
    /**
     * This handlers only triggers all logic cycle. Is called once.
     * @param repository @type { Repository } The repository to get the credentials.
     */
    constructor(readonly repository: CredentialsRepository){
        super(['CredentialsSubmitted']);
    }

    /**
     * This handle only get credentials from repository.
     * @param event @type { CredentialsSubmitted } The event to passed.
     */
    async handle(event: CredentialsSubmitted): Promise<void> {  
        this.repository.get(event.credentials);
    }
}

export {
    CredentialsSubmittedHandler
}