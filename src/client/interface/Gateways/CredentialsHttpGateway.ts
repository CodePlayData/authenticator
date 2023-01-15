// @filename: CredentialsHttpGateway.ts
import { HttpClient } from "@codeplaydata/adapters";
import { Publisher } from "../../Publisher.js";
import { CredentialsGateway } from "./CredentialsGateway.js";
import { HttpGateway } from "./HttpGateway.js";
import { Channel } from "../Channel.js";
import { RequestBuilder } from "../../utils/RequestBuilder.js";
import { UserAuthenticated } from "../DomainEvents/UserAuthenticated.js";
import { UserNotFound } from "../DomainEvents/UserNotFound.js";
import { InternalServiceError } from "../DomainEvents/InternalServiceError.js";

class CredentialsHttpGateway extends Publisher implements HttpGateway, CredentialsGateway {
    constructor(readonly url: string, readonly httpClient: HttpClient, readonly channels?: Channel[]) {
        super(channels as Channel[]);
    }

    async login(credential: Credential) {
        const request = new RequestBuilder(this.url)
                            .header('Content-Type', 'application/json')
                            .post(credential)
                            .build();

        const response = await this.httpClient.fetch(request);
        const body = await response.json();

        if(this.channels) {
            if(response.ok) {
                const event = new UserAuthenticated(credential);
                this.publish(event);
            } else {
                const errorMsg = await response.text();
                if(response.status === 404) {
                    const event = new UserNotFound(errorMsg);
                    this.publish(event);
                }
                if(response.status === 500) {
                    const event = new InternalServiceError(errorMsg);
                    this.publish(event);
                }
            }
        }
        return response
    }
}

export {
    CredentialsHttpGateway
}