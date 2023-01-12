// @filename: Token.ts
//FIXME
import { sign } from "jsonwebtoken";

class Token {
    constructor(readonly header: any, readonly payload: any, readonly secret: any) {
    }
}
