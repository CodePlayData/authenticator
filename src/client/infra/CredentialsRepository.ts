// @filename: CredentialsRepository.ts
import { DatabaseQuery, Connection } from "@codeplaydata/adapters";
import { CredentialsSaved } from "../interface/DomainEvents/CredentialsSaved.js";
import { CredentialsNotSaved } from "../interface/DomainEvents/CredentialsNotSaved.js";
import { UserIdentificationRequested } from "../interface/DomainEvents/UserIdentificationRequested.js";
import { Credentials } from "../app/Credentials.js";
import { DatabaseOperationsManifest } from "./DatabaseOperationsManifest.js";
import { Channel } from "../interface/Channel.js";
import { Publisher } from "../interface/Publisher.js";
import { InternalServiceError } from "../interface/DomainEvents/InternalServiceError.js";
import { CachedCredentialsNotFound } from "../interface/DomainEvents/CachedCredentialsNotFound.js";
import { ValidCachedCredentialsNotFound } from "../interface/DomainEvents/ValidCachedCredentialsNotFound.js";
 
interface CredentialsRepository {
    save(credentials: Credentials): void;
    get(credentials?: Credentials, id?: string | number ): IDBRequest<any> | IDBRequest<IDBValidKey> | IDBRequest<undefined> | IDBRequest<any[]> | Promise<any>;
    delete(id?: string | undefined): void;
}

class CredentialsRepository extends Publisher {
    
    constructor(readonly databaseAdapter: Connection, readonly dbops: DatabaseOperationsManifest, readonly databaseStore?: string, readonly channels?: Channel[]){
        super(channels as Channel[]);
    }

    save(credentials: Credentials): void {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = this.databaseAdapter.query(this.dbops.Create, credentials, credentials?.id);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            this.#saveEmits(request, credentials)
        }
        return
    }

    #saveEmits(request: IDBRequest<any>, object?: any) {
        request.onerror = () => this.publish(new CredentialsNotSaved());
        request.onsuccess = () => this.publish(new CredentialsSaved(object, request.result));
    }

    get(credentials?: Credentials, id?: string | number) {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = !id ?
                        this.databaseAdapter.query(this.dbops.Readall as DatabaseQuery, credentials, id) : 
                        this.databaseAdapter.query(this.dbops.Readone, credentials, id);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            !id && this.channels?.length && this.channels.length > 0 ? 
                        this.#listEmits(request, credentials) :
                        id && this.channels?.length && this.channels.length > 0 ? this.#selectEmits(request, credentials) : 
                        undefined; 
            }
        return request
    }

    #filterTheMostRecentCredentials(credentialsArray: Credentials[]) {
        const theMostRecentCredentials = new Credentials(credentialsArray[0].email, credentialsArray[0].password);
        theMostRecentCredentials.token = credentialsArray[0].token;
        theMostRecentCredentials.id = credentialsArray[0].id;
        return theMostRecentCredentials
    }
    
    #filterValidCredentials(returnedData: any, credentials: Credentials) {
        const allCredentials = Array.from(returnedData) as Credentials[];
        const allValidCredentials = allCredentials.filter((credentialsSaved: Credentials) => {
            let now = new Date(Date.now()).getTime()
            return credentialsSaved.expire > now && credentialsSaved.email === credentials.email
        });
        if(allValidCredentials.length < 1) {
            this.publish(new ValidCachedCredentialsNotFound(credentials));
            return
        }
        return this.#filterTheMostRecentCredentials(allValidCredentials)
    }

    #listEmits(request: IDBRequest<any>, credentials?: any) {
        request.onerror = () => this.publish(new InternalServiceError('Data not read from IndexDB yet.'));
        request.onsuccess = () => {
            if(request.result.length < 1) {
                this.publish(new CachedCredentialsNotFound(credentials));
                return
            } else {
                const filteredValidCredentials = this.#filterValidCredentials(request.result, credentials);
                !filteredValidCredentials ? 
                    this.publish(new ValidCachedCredentialsNotFound(credentials)) :
                    this.publish(new CredentialsSaved(filteredValidCredentials));
                return
            }
        }
        return request
    }
    
    #selectEmits(request: IDBRequest<any>, object?: any) {
        request.onerror = () => this.publish(new InternalServiceError('Data not read from IndexDB yet.'));
        request.onsuccess = () => this.publish(new UserIdentificationRequested(object, request.result));
        return request
    }

    delete(id?: string | undefined): void {
        throw new Error("Method not implemented yet.");
    }
}
 
export {
    CredentialsRepository
}
 