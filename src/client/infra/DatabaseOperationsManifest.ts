// @filename: DatabaseOperationsManifest.ts
import { DatabaseQuery } from "@codeplaydata/adapters";

interface DatabaseOperationsManifest {
    Create: DatabaseQuery;
    Readone: DatabaseQuery;
    Readall?: DatabaseQuery;
    Update?: DatabaseQuery;
    Delete: DatabaseQuery;
    Deleteall: DatabaseQuery;
    Count?: DatabaseQuery
}

export {
    DatabaseOperationsManifest
}