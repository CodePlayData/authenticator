import { Credentials } from "../../app/Credentials.js";

interface UserGateway {
    whoami(credentials: Credentials): any;
}

export {
    UserGateway
}