// @filename: SingletonDuplicityError.ts
class SingletonDuplicityError extends Error {
    constructor() {
        super('You can not invoke two instances of this class.')
    }
}

export {
    SingletonDuplicityError
}