// @filename: Profile.ts

import { Identifier } from "./Identifier.js";

abstract class Profile {
    /**
     *  The profile is an class that should be extended to who your aplication is build for.
     *  @param id @type { Identifier } - The profile identifier.
     *  @param credential @type { Credential } - The data use to login in some application.
     */
    constructor(readonly id: Identifier, readonly credential: Credential) {
    }
}

export {
    Profile
}