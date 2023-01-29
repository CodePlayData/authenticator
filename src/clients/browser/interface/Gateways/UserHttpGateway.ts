// @filename: UserHttpGateway.ts
import { HttpClient } from "@codeplaydata/adapters/http/client/HttpClient.js";
import { RequestBuilder } from "../../utils/RequestBuilder.js";
import { Channel } from "../Channel.js";
import { Publisher } from "../../Publisher.js";
import { HttpGateway } from "./HttpGateway.js";
import { RequestedUserData } from "../DomainEvents/RequestedUserData.js";
import { UserGateway } from "./UserGateway.js";

class UserGatewayHttp extends Publisher implements HttpGateway, UserGateway {
    
    constructor(readonly url: string, readonly httpClient: HttpClient, readonly channels?: Channel[]) {
        super(channels as Channel[]);
    }
    
    async whoami(credential: Credential) {
        const request = new RequestBuilder(this.url)
                            .header('Content-Type', 'application/json')
                            .header('Authorization', `Bearer ${credential}`)
                            .build();
        const response = await this.httpClient.fetch(request);
        if(this.channels) {
            const event = new RequestedUserData(credential, response);
            this.publish(event);
            return
        }
        return response
    }
}

export { 
    UserGatewayHttp
}