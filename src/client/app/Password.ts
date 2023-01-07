// @filename: Password.ts

/**
 *  This is the HASH-256 of the hexadecimal converted password to be persisted. Since no one should know the
 *  raw string of the password, comparisions must be made with another new Password() class with the raw data as
 *  parameter and comparing with the old one.
 */

import crypto from "node:crypto";

interface Password {
    password: string;
    define(input: string): Promise<Password>
}

class Password {
    /** @type { string } - The public password to be presented. */
    public password!: string;

    /**
     *  In this class is worth to note that you can do you Array externaly and provide as a constructor param or you can instatiate this class
     *  invoking the async method `define` that returns the Password already with the Array.
     *  @param hashBuffer @type { ArrayBuffer } - This is the Buffer returned by the SHA-256 digested data.
     */
    constructor(hashBuffer: ArrayBuffer) {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        this.password = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    }
    
    /**
     *  The method that converts your raw passaword to ArrayBuffer and call the class itself.
*       @param rawpassword @type{ string } - This is your password that no one should see.
     *  @returns @type { Password } - The public password.
     */
    static async define(rawpassword: string) {
        const encoder = new TextEncoder();
        const data = encoder.encode(Buffer.from(rawpassword, "utf8").toString('hex'));
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        return new Password(hashBuffer)
    }
}

export {
    Password
}
