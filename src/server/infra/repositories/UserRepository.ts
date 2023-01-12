// @filename: UserRepository.ts
import type { Connection } from "../../../types";

class UserRepository {
    constructor(readonly connection: Connection){
    }

    
}

export {
    UserRepository
}