// @filename: UploadedRepositoryIdentificationData.ts
import { Credentials } from "../../app/Credentials.js";
import { DomainEvent } from "../DomainEvent.js";
import { UserData } from "../../types";

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
    UploadedRepositoryIdentificationData
}