// @filename: CredentialNotValidatedError.ts
class CredentialNotValidatedError extends Error {
    constructor(){
        super('This credentials was not validated yet by a authenticator endpoint.')
    }
}

export {
    CredentialNotValidatedError
}