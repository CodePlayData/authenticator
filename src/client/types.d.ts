// @filename: types.d.ts
import { MongoQuery, IndexedDBQuery, LocalStorageQuery } from "@imunoderma/i_adapters/enums";
import type { DomainEvent } from "./interface/DomainEvent";
import type { Password } from "./app/Password.js";

export interface HttpClient {
    fetch(request: Request): Promise<Response>
}

export type IDBIndex = {
    indexName: string,
    keypath: string,
    options?: {
        [key: string]: any
    }
}

export type IDBRepo = {
    name: string,
    id: string,
    indexes?: IDBIndex[]
}

export type IDBConfig = {
    name: string,
    version: number,
    repositories: IDBRepo[]
}

export type UserMetadata = {
    id: {
        $oid: string
    }
    isActive: boolean,
    isDue: boolean,
    createdAt: string,
    lastAccess: string,
    license: string[],
    whenTokensRequested: string[],
    [key: string]: any
}

export type UserData = {
    name: string,
    email: string,
    password: string,
    [key: string]: any
}

export type CredentialData = {
    email: string,
    password?: Password,
    validity?: number
}

export type EventData = {
    time: string,
    object: any
}