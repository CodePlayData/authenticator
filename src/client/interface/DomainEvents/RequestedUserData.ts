// @filename: RequestedUserData.ts
import { DomainEvent } from "../DomainEvent";

class RequestedUserData implements DomainEvent {
    name = 'RequestedUserData';
    msg

    /**
     * The second event in the sequence of events.
     * @param user @type { any } The identification of a user, usually the email.
     * @param response @type { Response } The promise of Http response.
     */
    constructor(readonly user: any, readonly response: Response) {
        this.msg = user;
    }
    
}

export {
    RequestedUserData
}