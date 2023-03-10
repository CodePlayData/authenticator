// @filename: Authenticator.ts
import { 
    LocalStorage as LocalStorageAdapter, 
    IndexedDB as IndexedDatabaseAdapter, 
    Connection, 
    HttpClient 
} from "@codeplaydata/adapters";
import { UserAuthenticatedHandler } from "../interface/Handlers/UserAuthenticated.js";
import { CredentialsSubmittedHandler } from "../interface/Handlers/CredentialsSubmitted.js";
import { CredentialsSavedHandler } from "../interface/Handlers/CredentialsSaved.js";
import { UserIdentificationRequestedHandler } from "../interface/Handlers/UserIdentificationRequested.js";
import { CredentialsRepository } from "../infra/CredentialsRepository.js";
import { DomainEventsRepository } from "../infra/DomainEventsRepository.js";
import { UserRepository } from "../infra/UserRepository.js";
import { IndexedDBOperations as IndexedDBOps } from "../infra/IndexedDBOperations.js";
import { LocalStorageOperations as LocalStorageOps } from "../infra/LocalStorageOperations.js";
import { MongoDBOperations as MongoDbOps } from "../infra/MongoDBOperations.js";
import { Channel } from "../interface/Channel.js";
import { UserChannel } from "../interface/Channels/Profiles.js";
import { CredentialsChannel } from "../interface/Channels/Credentials.js";
import { SingletonDuplicityError } from "../utils/Errors/SingletonDuplicity.js";

type AuthConfig = {
    readonly httpClient: HttpClient,
    readonly storage: {
        adapter: Connection | LocalStorageAdapter | IndexedDatabaseAdapter,
        operations: MongoDbOps | LocalStorageOps | IndexedDBOps
    },
    readonly baseUrl: string,
    readonly cache?: {
        adapter: Connection | LocalStorageAdapter | IndexedDatabaseAdapter,
        operations: MongoDbOps | LocalStorageOps | IndexedDBOps
    }
}

class Authenticator {
    private static hasAlready: boolean = false;
    channels: Channel[] = [];
    credentialsRepository: CredentialsRepository;
    usersRepository: UserRepository;

    /**
     *  The authenticator that triggers the domain logic.
     *  @param config @type { AuthConfig } - The authenticator configuration, _i.e._ the type of storage used for all events or chache, the httpclient, and etc.
     */
    constructor(readonly config: AuthConfig) {
        if(Authenticator.hasAlready) {
            throw new SingletonDuplicityError('Authenticator');
        }
        
        this.channels[0] = 
            config.cache?.adapter ? 
            new UserChannel(new DomainEventsRepository(config.cache.adapter, config.cache.operations)) :
            new UserChannel();
        this.usersRepository = new UserRepository(config.storage.adapter, config.storage.operations, 'user', [ this.channels[0] ]);

        this.channels[1] = 
            config.cache?.adapter ? 
            new CredentialsChannel(new DomainEventsRepository(config.cache.adapter, config.cache.operations)) :
            new CredentialsChannel();
        this.credentialsRepository = new CredentialsRepository(config.storage.adapter, config.storage.operations, 'credentials', [ this.channels[1] ]);

        this.channels[0].register(new UserIdentificationRequestedHandler(this.usersRepository));
        this.channels[1].register(new CredentialsSubmittedHandler(this.credentialsRepository));
        this.channels[1].register(new UserAuthenticatedHandler(this.credentialsRepository));
        this.channels[1].register(new CredentialsSavedHandler(this.credentialsRepository));
        
        Authenticator.hasAlready = true;
    }
}

export { 
    Authenticator,
    AuthConfig
}