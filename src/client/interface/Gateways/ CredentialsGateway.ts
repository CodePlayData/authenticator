import { Credentials } from "../../app/Credentials.js"

interface CredentialsGateway {
    login(credentials: Credentials): any
}

export {
    CredentialsGateway
}