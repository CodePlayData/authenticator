// @filename: UploadedRepositoryIdentificationData.ts
// FIXME
import { Credentials } from "../../app/Credentials.js";
import { DomainEvent } from "../DomainEvent.js";

type UserData = {
    name: string,
    email: string,
    password: string,
    [key: string]: any
};

class UploadedRepositoryIdentificationData implements DomainEvent {
    name = 'UploadedRepositoryIdentificationData';
    msg

    /**
     * This event is dispatched right after the GET sended to the repository.
     * @param indexDbData @type { any } The return from the repository.
     * @param userData @type { undefined | Credentials } The data to passed through.
     */
    constructor(readonly indexDbData: UserData, readonly credentials?: Credentials){
        this.msg = !credentials ? indexDbData : credentials;
    }
}

export {
    UploadedRepositoryIdentificationData,
    UserData
}