import { DatabaseOperationsManifest } from "./DatabaseOperationsManifest.js";
import { MongoQuery } from "@codeplaydata/adapters/enums.js";

class MongoDBOperations implements DatabaseOperationsManifest {
    Create = MongoQuery['insertOne'];
    Readone = MongoQuery['findOne'];
    Update = MongoQuery['updateOne'];
    Delete = MongoQuery['deleteOne'];
    Deleteall = MongoQuery['deleteMany'];
    Count = MongoQuery['countDocuments'];
}

export {
    MongoDBOperations
}
