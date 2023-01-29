// @filename: Credentials.ts
import { CredentialsDataFormat } from "../enums.js";
import { CredentialNotValidatedError } from "../utils/Errors/CredentialNotValidated.js";
import { Identifier } from "./Identifier.js";
import type { Password } from "./Password.js"
 
 
class PasswordCredential implements Credential {
    /** The type of this credential. There are two other types of credential: Federated and PublicKey. */
    type: string = 'PasswordCredential';
    /** the Credential id to be considered with */
    id!: string;
    /** The _createdAt property is to be compared with the expire propertie to consider the validity of this instance. */
    private _createdAt: number = new Date(Date.now()).getTime();
    /** The hash of the token. */
    private _token!: string;
    /** The time that this token will be invalid. */
    private _expire!: EpochTimeStamp;
     
    /**
     * The basic info to instancing this class is email and password.
     * @param identifier @type { Identifier } - This is the identifier choosed to be used in this class.
     * @param password @type { Password } - The password class. Remember that this is already hashed when created for security reasons.
     */
    constructor(identifier: Identifier, readonly password?: Password, readonly validity = 4) {
        this.id = identifier.id;
    }

    /**
     *  After the class intancing, a token must be provided after it reaches some API to authenticate.
     *  To set a token you must provide the hash of the token (considering a basic jwt method).
     *  @param hash @type { string } The string that defines the token hash itself.
     *  @returns @type { void }
     */
    set token(hash: string) {
        this._token = hash;
        const now = new Date(Date.now());
        now.setHours(now.getHours() + this.validity);
        this._expire = now.getTime();
    }
 
    /**
     *  Get only the hash token.
     *  @returns @type { string }
     */
    get token() {
        return this._token
    }

    /**
     *  Check if this token is expired.
     *  @returns @type { boolean }
     */
    get isExpired() {
        return new Date(Date.now()).getTime() > this._expire
    }
    
    /**
     *  Returns credentials info in some of the two formats: short or full.
     *  @param type @type { CredentialsDataFormat } - the options are "short" or "full".
     *  @returns @type { { [key: string]: any }} - The credential metadata.
     */
    info(type = CredentialsDataFormat.short) {
        if(type === 0) {
            return { id: this.id, password: this.password?.password }
        } else {
            if(!this.token)
                throw new CredentialNotValidatedError()
            return { 
                id: this.id, 
                password: this.password?.password, 
                token: this.token, 
                createdAt: this._createdAt, 
                expire: this._expire, 
                isExpired: this.isExpired
            }
        }
    }
}
 
export {
    PasswordCredential
}