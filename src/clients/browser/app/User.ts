import { Email } from "./Email.js"
import { Profile } from "./Profile.js"

class User extends Profile {
    constructor(readonly email: Email, readonly credential: Credential) {
        super(email, credential);
    }
}

export {
    User
}