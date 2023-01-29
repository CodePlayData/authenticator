// @filename: UserGateway.ts

interface UserGateway {
    whoami(credential: Credential): any;
}

export {
    UserGateway
}