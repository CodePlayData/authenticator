// @filename: UserAuthorized.ts
//FIXME

import { DomainEvent } from "../DomainEvent";
import { Credentials } from "../../app/Credentials.js";

class UserAuthenticated implements DomainEvent{
    name = "UserAuthenticated";
    msg

    /**
     * This is the event that says that the "user" has now a token to access of the application.
     * @param credentials @type{ Credentials } The objetc Credentials already completed.
     */
    constructor(readonly credentials: Credentials) {
        this.msg = credentials;
    }
}

export {
    UserAuthenticated
}