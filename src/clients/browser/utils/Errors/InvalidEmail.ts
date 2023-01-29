// @filename: InvalidEmail.ts
class InvalidEmailError extends Error {
    constructor() {
        super('The email provided is not valid. Ensure that there are no blank spaces and that contains at least the @.')
    }
}

export {
    InvalidEmailError
}