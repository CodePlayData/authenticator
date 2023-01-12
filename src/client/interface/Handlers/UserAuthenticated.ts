// @filename: UserAuthorized.ts
// FIXME
import { Credentials } from "../../app/Credentials.js";
import { CredentialsDataFormat } from "../../enums.js";
import { CredentialsRepository } from "../../infra/CredentialRepository.js";
import { UserAuthenticated } from "../DomainEvents/UserAuthenticated.js";
import { Handler } from "./Handler.js";

class UserAuthenticatedHandler extends Handler {    
    
    constructor(readonly repository: CredentialsRepository){
        super(['UserAuthenticated']);
    }
    
    handle(event: UserAuthenticated): void {
        this.repository.save(event.credentials.info(CredentialsDataFormat.full) as Credentials);
    }
}

export {
    UserAuthenticatedHandler
}