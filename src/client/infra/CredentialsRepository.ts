// @filename: CredentialsRepository.ts
import { DatabaseQuery, Connection } from "@codeplaydata/adapters";
import { CredentialsSaved } from "../interface/DomainEvents/CredentialsSaved.js";
import { CredentialsNotSaved } from "../interface/DomainEvents/CredentialsNotSaved.js";
import { UserIdentificationRequested } from "../interface/DomainEvents/UserIdentificationRequested.js";
import { DatabaseOperationsManifest } from "./DatabaseOperationsManifest.js";
import { Channel } from "../interface/Channel.js";
import { Publisher } from "../interface/Publisher.js";
import { InternalServiceError } from "../interface/DomainEvents/InternalServiceError.js";
import { CachedCredentialsNotFound } from "../interface/DomainEvents/CachedCredentialsNotFound.js";
import { ValidCachedCredentialsNotFound } from "../interface/DomainEvents/ValidCachedCredentialsNotFound.js";
 
interface CredentialsRepository {
    save(credential: Credential): void;
    get(credential?: Credential, id?: string | number ): IDBRequest<any> | IDBRequest<IDBValidKey> | IDBRequest<undefined> | IDBRequest<any[]> | Promise<any>;
    delete(id?: string | undefined): void;
}

class CredentialsRepository extends Publisher {
    
    /**
     *  This is infra service stores the credentials.
     *  @param databaseAdapter @type { Connection } - Some database adapter.
     *  @param dbops @type { DatabaseOperationsManifest } - The standardized operations of a database.
     *  @param databaseStore @type { string } - Sometimes this refers to db table or collection.
     *  @param channels @type { Channel[] } - All channels that this repository interacts with.
     */
    constructor(readonly databaseAdapter: Connection, readonly dbops: DatabaseOperationsManifest, readonly databaseStore?: string, readonly channels?: Channel[]){
        super(channels as Channel[]);
    }

    /**
     *  The method that stores some credential.
     *  @param credentials @type { Credential } - The credential to be saved.
     *  @returns @type { void }
     */
    save(credentials: Credential): void {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = this.databaseAdapter.query(this.dbops.Create, credentials, credentials?.id);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            this.#saveEmits(request, credentials)
        }
        return
    }

    /**
     *  The method that is called in case works with IndexedDB.
     *  @param request @type { IDBRequest } - The IndexedDB main product thar in this moment is no concluded yet.
     *  @param object @type { any } - Some object passed to the database adapter.
     *  @returns @type { IDBRequest } - The IndexedDB request concluded.
     */
    #saveEmits(request: IDBRequest<any>, object?: any) {
        request.onerror = () => this.publish(new CredentialsNotSaved());
        request.onsuccess = () => this.publish(new CredentialsSaved(object, request.result));
        return request
    }

    /**
     *  Get one or all credentials.
     *  @param credentials @type { Credential } - The object to search for (??).
     *  @param id @type { string | number } - The identifier to search for.
     *  @returns @type { any }
     */
    get(credential?: Credential, id?: string | number) {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = !id ?
                        this.databaseAdapter.query(this.dbops.Readall as DatabaseQuery, credential, id) : 
                        this.databaseAdapter.query(this.dbops.Readone, credential, id);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            !id && this.channels?.length && this.channels.length > 0 ? 
                        this.#listEmits(request, credential) :
                        id && this.channels?.length && this.channels.length > 0 ? this.#selectEmits(request, credential) : 
                        undefined; 
            }
        return request
    }

    /**
     *  The event that returns all database.
     *  @param request @type { IDBRequest } - The IndexedDB Request.
     *  @param credential @type { credential } - The credential to be passed througth.
     *  @returns @type { void | IDBRequest }
     */
    #listEmits(request: IDBRequest<any>, credential?: Credential) {
        request.onerror = () => this.publish(new InternalServiceError('Data not read from IndexDB yet.'));
        request.onsuccess = () => {
            if(request.result.length < 1) {
                this.publish(new CachedCredentialsNotFound(credential));
                return
            } else {
                // Por enquanto assim mas vai ter que trocar.    
                this.publish(new ValidCachedCredentialsNotFound(credential));
                this.publish(new CredentialsSaved());
                return
            }
        }
        return request
    }
    
    /**
     *  The event triggered after the get one query.
     *  @param request @type { IDBRequest } - The indexedDB Request.
     *  @param object @type { any } - The object to be passed throught.
     *  @returns @type { IDBRequest }
     */
    #selectEmits(request: IDBRequest<any>, object?: any) {
        request.onerror = () => this.publish(new InternalServiceError('Data not read from IndexDB yet.'));
        request.onsuccess = () => this.publish(new UserIdentificationRequested(object, request.result));
        return request
    }

    /**
     *  Delete some credential.
     *  @param id @type { string | undefined }
     */
    delete(id?: string | undefined): void {
        throw new Error("Method not implemented yet.");
    }
}
 
export {
    CredentialsRepository
}
 