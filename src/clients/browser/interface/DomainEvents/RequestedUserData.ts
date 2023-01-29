// @filename: RequestedUserData.ts
import { DomainEvent } from "../DomainEvent.js";

class RequestedUserData extends DomainEvent {
    /**
     * The second event in the sequence of events.
     * @param user @type { any } The identification of a user, usually the email.
     * @param response @type { Response } The promise of Http response.
     */
    constructor(readonly user: any, readonly response: Response) {
        super('RequestedUserData');
    }
    
}

export {
    RequestedUserData
}