// @filename: Token.ts

/**
 *  The authentication Token emit by some Certified Authority - CA. For now will be in JsonWebToken.
 */

import { sign } from "jsonwebtoken";

class Token {
    constructor(readonly header: any, readonly payload: any, readonly secret: any) {
    }
}
