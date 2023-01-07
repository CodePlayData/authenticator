// @filename: UploadedRepositoryCredentialsData.ts

/**
 *  The event that carries info about credentials saved in the repository.
 */

import { Credentials } from "../..";
import { DomainEvent } from "../DomainEvent";

class UploadedRepositoryCredentialsData implements DomainEvent {
    name = 'UploadedRepositoryCredentialsData';
    msg

    /**
     * This is the second event and can be called in two ways: if there is no credentials saved in the database; or
     * if there is credentials saved in the database.
     * @param indexDbData @type { Array<undefined | Credentials> } The data returned by the Database.
     * @param credentials @type { Credentials } If is the cycle without credentials saved this data is passed to call the
     * httpClient later.
     */
    constructor(readonly indexDbData: Array<undefined | Credentials>, readonly credentials?: Credentials | undefined) {
        this.msg = credentials;
    }
}

export {
    UploadedRepositoryCredentialsData
}