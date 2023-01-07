import { HttpClient } from "@imunoderma/i_adapters";

interface HttpGateway {
    httpClient: HttpClient;
    url: string
}

export {
    HttpGateway
}