import { DatabaseOperationsManifest } from "./DatabaseOperationsManifest.js";
import { LocalStorageQuery } from "@codeplaydata/adapters/enums.js";

class LocalStorageOperations implements DatabaseOperationsManifest {
    Create = LocalStorageQuery['setItem'];
    Readone = LocalStorageQuery['getItem'];
    Readall = LocalStorageQuery['readall'];
    Delete = LocalStorageQuery['delete'];
    Deleteall = LocalStorageQuery['clear'];
}

export {
    LocalStorageOperations
}