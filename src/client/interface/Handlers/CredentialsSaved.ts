// @filename: CredentialsSaved.ts
import { CredentialsRepository } from "../../infra/CredentialsRepository.js";
import { CredentialsSaved } from "../DomainEvents/CredentialsSaved.js";
import { Handler } from "./Handler.js";

class CredentialsSavedHandler extends Handler {

    constructor(readonly repository: CredentialsRepository) {
        super(['CredentialsSaved']);
    }

    handle(event: CredentialsSaved): void | Promise<void> {
        if(event.credential?.id) {
            this.repository.get(event.credential, event.credential.id);
        }
    }
}

export {
    CredentialsSavedHandler
}