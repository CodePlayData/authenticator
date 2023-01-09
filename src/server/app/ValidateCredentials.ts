// @filename: ValideteCredentials.ts

/**
 *  It's an application service thar validates the credentials provided.
 */
import { UserRepository } from "../infra/repositories/UserRepository";

class ValidateCredentials {
    constructor(readonly userRepository: UserRepository){
    }

    async exec() {
    }
}

export {
    ValidateCredentials
}