import { DatabaseOperationsManifest } from "./DatabaseOperationsManifest.js";
import { IndexedDBQuery } from "@imunoderma/i_adapters/enums.js";

class IndexedDBOperations implements DatabaseOperationsManifest {
    Create = IndexedDBQuery['add'];
    Readone = IndexedDBQuery['readone'];
    Readall = IndexedDBQuery['getAll'];
    Update = IndexedDBQuery['put'];
    Delete = IndexedDBQuery['delete'];
    Deleteall = IndexedDBQuery['clear'];
    Count = IndexedDBQuery['count'];
}

export {
    IndexedDBOperations
}