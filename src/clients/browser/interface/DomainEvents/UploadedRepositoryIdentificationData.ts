// @filename: UploadedRepositoryIdentificationData.ts
import { DomainEvent } from "../DomainEvent.js";

type UserData = {
    name: string,
    email: string,
    password: string,
    [key: string]: any
};

class UploadedRepositoryIdentificationData extends DomainEvent {
    /**
     * This event is dispatched right after the GET sended to the repository.
     * @param indexDbData @type { any } The return from the repository.
     * @param userData @type { undefined | Credentials } The data to passed through.
     */
    constructor(readonly indexDbData: UserData, readonly credential?: Credential){
        super('UploadedRepositoryIdentificationData');
    }
}

export {
    UploadedRepositoryIdentificationData,
    UserData
}