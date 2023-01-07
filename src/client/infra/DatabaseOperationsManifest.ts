import { DatabaseQuery } from "@imunoderma/i_adapters";

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