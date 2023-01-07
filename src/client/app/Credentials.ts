// @filename: Credentials.ts

/**
*  The Credentials is the main entity of this module/application, not necessarily has the Password because 
*  it can be call to recovery the Password. This can be updated to store the JsonWebToken in some moment. It 
*  can be considered a Entity because has a identifier that is the timestamp of creation. 
*/

import { CredentialsDataFormat } from "../enums.js";
import type { Password } from "./Password.js"
 
interface Credentials {
    id: number;
     
    info(type: CredentialsDataFormat): { email: string, password: string, [key: string] : any }
}
  
class Credentials {
    /** @type { number } - The id to be compared with the expire to consider the validity of this instance. */
    id = new Date(Date.now()).getTime();
    /** @type { string } the hash of the token. */
    private _token!: string;
    /** @type { number } The time that this token will be invalid. */
    expire!: EpochTimeStamp;
     
    /**
     * The basic info to instancing this class is email and password.
     * @param email @type { string } In this credential the email is the identifier.
     * @param password @type { Password } And the security measure is the password.
     */
    constructor(readonly email: string, readonly password?: Password, readonly validity = 4) {
    }
    
    /**
     *  After the class intancing, a token must be provided after it reaches some API to authenticate.
     *  To set a token you must provide the hash of the token (considering a basic jwt method).
     * @param hash @type { string } The string that defines the token hash itself.
     */
    set token(hash: string) {
        this._token = hash;
        const now = new Date(Date.now());
        now.setHours(now.getHours() + this.validity);
        this.expire = now.getTime();
    }
 
    /**
     * Get only the hash token.
     */
    get token() {
        return this._token
    }
 
    /**
     * Returns credentials info in some of the two formats: short or full.
     */
    info(type = CredentialsDataFormat.short) {
        if(type === 0) {
            return { email: this.email, password: this.password?.password }
        } else {
            if(!this.token)
                throw new Error('This credentials was not validated yet by a authenticator endpoint.')
            return { id: this.id, email: this.email, password: this.password?.password, token: this.token, expire: this.expire }
        }
    }
}
 
export {
    Credentials
}