// @filename: UploadedRepositoryCredentialsData.ts
import { DomainEvent } from "../DomainEvent.js";

class UploadedRepositoryCredentialsData extends DomainEvent {
    /**
     * This is the second event and can be called in two ways: if there is no credentials saved in the database; or
     * if there is credentials saved in the database.
     * @param indexDbData @type { Array<undefined | Credentials> } The data returned by the Database.
     * @param credentials @type { Credentials } If is the cycle without credentials saved this data is passed to call the
     * httpClient later.
     */
    constructor(readonly indexDbData: Array<undefined | Credential>, readonly credential?: Credential | undefined) {
        super('UploadedRepositoryCredentialsData');
    }
}

export {
    UploadedRepositoryCredentialsData
}