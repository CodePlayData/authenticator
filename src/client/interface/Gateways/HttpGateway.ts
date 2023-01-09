import { HttpClient } from "@codeplaydata/adapters";

interface HttpGateway {
    httpClient: HttpClient;
    url: string
}

export {
    HttpGateway
}