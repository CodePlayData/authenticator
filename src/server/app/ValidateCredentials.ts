// @filename: ValideteCredentials.ts
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