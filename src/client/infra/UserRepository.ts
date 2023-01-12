// @filename: UserRepository.ts
//FIXME
import { UserIdentified } from "../interface/DomainEvents/UserIdentified.js";
import { UploadedRepositoryIdentificationData } from "../interface/DomainEvents/UploadedRepositoryIdentificationData.js";
import { UserNotIdentified } from "../interface/DomainEvents/UserNotIdentified.js";
import type { Connection, DatabaseQuery } from "@codeplaydata/adapters";
import type { Credentials } from "../app/Credentials.js";
import type { User } from "../app/User"
import { DatabaseOperationsManifest as DbOps } from "./DatabaseOperationsManifest.js";
import { Channel } from "../interface/Channel.js";
import { Publisher } from "../interface/Publisher.js";
import { InternalServiceError } from "../interface/DomainEvents/InternalServiceError.js";
import { UserDataDeleted } from "../interface/DomainEvents/UserDataDeleted.js";
import { CachedUserNotFound } from "../interface/DomainEvents/CachedUserNotFound.js";
 
interface UserRepository {
    save(user: User): void;
    get(object: Credentials | string): IDBRequest<any> | IDBRequest<IDBValidKey> | IDBRequest<undefined> | IDBRequest<any[]> | Promise<any>;
    list(): any;
    delete(credentials: Credentials): void;
}
 
class UserRepository extends Publisher {
    
    constructor(readonly databaseAdapter: Connection, readonly dbOps: DbOps, readonly databaseStore?: string, readonly channels?: Channel[]){
        super(channels as Channel[]);
    }

    save(user: User): void {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = this.databaseAdapter.query(this.dbOps.Create, user, user.credentials.email);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            this.#saveEmits(request, user);
        }
        return
    }

    #saveEmits(request: IDBRequest<any>, user?: User) {
        request.onerror = () => this.publish(new InternalServiceError('The user repository could not save the data provided.'));
        request.onsuccess = () =>  this.publish(new UserIdentified(user));
        return
    }

    get(credentials: Credentials) {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = this.databaseAdapter.query(this.dbOps.Readone, credentials, credentials.email);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            this.#getEmits(request, credentials);
        }
        return request
    }

    #getEmits(request: IDBRequest<any>, credentials?: Credentials) {
        request.onerror = () => this.publish(new InternalServiceError('The user repository could not read user data.'));
        request.onsuccess = () => {
            const userData = request.result;
            if(userData && !Array.isArray(userData)) {
                this.publish(new UserIdentified(userData));
            } else {
                this.publish(new CachedUserNotFound());
            }
        }
        return
    }

    list() {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = this.databaseAdapter.query(this.dbOps.Readall as DatabaseQuery);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            this.#listEmits(request);
        }
        return request
    }

    #listEmits(request: IDBRequest<any>) {
        request.onerror = () => this.publish(new InternalServiceError('The user repository could not return any data at all.'));
        request.onsuccess = () => this.publish(new UploadedRepositoryIdentificationData(request.result));
        return
    }

    delete(credentials: Credentials) {
        this.databaseStore ? this.databaseAdapter.store = this.databaseStore: undefined;
        const request = this.databaseAdapter.query(this.dbOps.Delete, undefined, credentials.email);
        if(this.channels?.length && this.channels.length > 0 && 'onerror' in request) {
            this.#deleteEmits(request, credentials.email)
        }
        return
    }

    #deleteEmits(request: IDBRequest<any>, email?: any) {
        request.onerror = () => this.publish(new InternalServiceError('The user repository could not delete this user data'));
        request.onsuccess = () => this.publish(new UserDataDeleted(email));
        return
    }
}
 
export {
    UserRepository
}
 