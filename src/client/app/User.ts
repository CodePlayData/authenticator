// @filename: User.ts

/** 
 *  This is the main Aggregate. This type of class, as well as entities alone, are the objects that should be
 *  persisted in somewhere. A User is a combination of a name of a some person, his/her credentials and some
 *  metada. This class is kind of generic class to be extends in specialist classes of the domain of the
 *  application that will use this module.
 *  
 *  PS¹ - Since this class has only a get method and a private property, provide a interface is not possibly.
 */

import { UserMetadata } from "../types";
import type { Credentials } from "./Credentials.js"

class User {
    /** @type { UserMetadata | undefined } - While unlikely, it would be possible to have a user without metadata. */
    private _metadata!: UserMetadata | undefined;
    
    /**
     * 
     * @param name @type { string } - The person name. It is the basic identification of this aggregate.
     * @param credentials @type { Credentials } - The data use to login in some application.
     * @param usermetadata @type { UserMetadata | undefined } - The user metadata in the creation of this class.
     */
    constructor(readonly name: String, readonly credentials: Credentials, usermetadata?: UserMetadata) {
        this._metadata = usermetadata;
    }

    get metadata() {
        return this._metadata
    }
}
  
export {
    User
}