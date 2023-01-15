// @filename: UserAuthorized.ts

import { DomainEvent } from "../DomainEvent";

class UserAuthenticated implements DomainEvent{
    name = "UserAuthenticated";
    msg

    /**
     * This is the event that says that the "user" has now a token to access of the application.
     * @param credential @type{ Credential } The objetc Credentials already completed.
     */
    constructor(readonly credential: Credential) {
        this.msg = credential;
    }
}

export {
    UserAuthenticated
}