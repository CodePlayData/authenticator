// @filename: CredentialsSaved.ts
import { CredentialsRepository } from "../../infra/CredentialRepository.js";
import { CredentialsSaved } from "../DomainEvents/CredentialsSaved.js";
import { Handler } from "./Handler.js";

class CredentialsSavedHandler extends Handler {

    constructor(readonly repository: CredentialsRepository) {
        super(['CredentialsSaved']);
    }

    handle(event: CredentialsSaved): void | Promise<void> {
        if(event.credentials?.id) {
            this.repository.get(event.credentials, event.credentials.id);
        }
    }
}

export {
    CredentialsSavedHandler
}