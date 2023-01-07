// @filename: UserIdentificationRequested.ts
import { UserRepository } from "../../infra/UserRepository.js";
import { UserIdentificationRequested } from "../DomainEvents/UserIdentificationRequested.js";
import { Handler } from "./Handler.js";

class UserIdentificationRequestedHandler extends Handler {
    
    constructor(readonly repository: UserRepository){
        super(['UserIdentificationRequested']);
    }

    handle(event: UserIdentificationRequested): void {
        this.repository.get(event.credentials)
    }
}

export {
    UserIdentificationRequestedHandler
}