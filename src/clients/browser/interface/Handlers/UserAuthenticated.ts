// @filename: UserAuthorized.ts
import { CredentialsRepository } from "../../infra/CredentialsRepository.js";
import { UserAuthenticated } from "../DomainEvents/UserAuthenticated.js";
import { Handler } from "./Handler.js";

class UserAuthenticatedHandler extends Handler {    
    
    constructor(readonly repository: CredentialsRepository){
        super(['UserAuthenticated']);
    }
    
    handle(event: UserAuthenticated): void {
        this.repository.save(event.credential as Credential);
    }
}

export {
    UserAuthenticatedHandler
}