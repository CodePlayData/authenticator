import { HttpClient } from "@imunoderma/i_adapters/http/client/HttpClient.js";
import { Credentials } from "../../app/Credentials.js";
import { RequestBuilder } from "../../utils/RequestBuilder.js";
import { Channel } from "../Channel.js";
import { Publisher } from "../Publisher.js";
import { HttpGateway } from "./HttpGateway.js";
import { RequestedUserData } from "../DomainEvents/RequestedUserData.js";
import { UserGateway } from "./UserGateway.js";

class UserGatewayHttp extends Publisher implements HttpGateway, UserGateway {
    
    constructor(readonly url: string, readonly httpClient: HttpClient, readonly channels?: Channel[]) {
        super(channels as Channel[]);
    }
    
    async whoami(credentials: Credentials) {
        if(!credentials.token) {
            throw new Error('The credentials must be validated first to get your user info.')
        }
        const request = new RequestBuilder(this.url)
                            .header('Content-Type', 'application/json')
                            .header('Authorization', `Bearer ${credentials.token}`)
                            .build();
        const response = await this.httpClient.fetch(request);
        if(this.channels) {
            const event = new RequestedUserData(credentials, response);
            this.publish(event);
            return
        }
        return response
    }
}

export { 
    UserGatewayHttp
}