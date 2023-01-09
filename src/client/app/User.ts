// @filename: User.ts
import type { Credentials } from "./Credentials.js"

type UserMetadata = {
    id: {
        $oid: string
    }
    isActive: boolean,
    isDue: boolean,
    createdAt: string,
    lastAccess: string,
    license: string[],
    whenTokensRequested: string[],
    [key: string]: any
};

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
    User,
    UserMetadata
}