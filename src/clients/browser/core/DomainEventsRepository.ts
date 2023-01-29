// @filename: DomainEventsRepository.ts
import { Connection, DatabaseQuery } from "@codeplaydata/adapters";
import { DomainEvent } from "../interface/DomainEvent";
import { DatabaseOperationsManifest as DbOps } from "./DatabaseOperationsManifest";
 
interface DomainEventsRepository {
    save(event: DomainEvent): void;
    get(domainEventName: DomainEvent['name']): string;
    list(): Storage;
    clear(): void
}
 
class DomainEventsRepository {

    constructor(readonly cache: Connection, readonly dbOps: DbOps, readonly cacheStore?: string) {
    }

    /**
     * Save an event in LocalStorage.
     * @param event @type{ DomainEvent }
     */
    save(event: DomainEvent) {
        this.cacheStore ? this.cache.store = this.cacheStore: undefined;
        this.cache.query(this.dbOps.Create, event, event.name);
        return
    }

    /**
     * Retrieve some event and it's msg data.
     * @param DomainEventName @type { DomainEvent }
     * @returns
     */
    get(domainEventName: DomainEvent["name"]): string | null {
        this.cacheStore ? this.cache.store = this.cacheStore: undefined;
        const data: string | null = this.cache.query(this.dbOps.Readone, undefined, domainEventName);
        return data
    }

    /**
     * Retrives all 
     * @returns 
     */
    list(): Storage {
        this.cacheStore ? this.cache.store = this.cacheStore: undefined;
        const data = this.cache.query(this.dbOps.Readall as DatabaseQuery) as Storage;
        return data
    }

    /**
     * Clear all data saved in the database.
     * @returns 
     */
    clear() {
        this.cacheStore ? this.cache.store = this.cacheStore: undefined;
        this.cache.query(this.dbOps.Deleteall);
        return
    }
}
 
export {
    DomainEventsRepository
}
 