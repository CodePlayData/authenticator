import { Identifier } from "./Identifier.js"

class Email extends Identifier {
    constructor(readonly email: string) {
        super(email)
    }
}

export { 
    Email
}