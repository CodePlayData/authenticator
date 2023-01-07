import { CachedCredentialsNotFound } from "../DomainEvents/CachedCredentialsNotFound.js";
import { ValidCachedCredentialsNotFound } from "../DomainEvents/ValidCachedCredentialsNotFound.js";
import { CredentialsGateway } from "../Gateways/ CredentialsGateway.js";
import { Handler } from "./Handler.js";

class ValidCachedCredentialsNotFoundHandler extends Handler {
    constructor(readonly credentialsGateway: CredentialsGateway) {
        super(['ValidCachedCredentialsNotFound', 'CachedCredentialsNotFound']);
    }

    handle(event: ValidCachedCredentialsNotFound | CachedCredentialsNotFound) {
        this.credentialsGateway.login(event.credentials);
    }
}

export {
    ValidCachedCredentialsNotFoundHandler
}