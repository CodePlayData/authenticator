// @filename: SingletonDuplicityError.ts
class SingletonDuplicityError extends Error {
    constructor(className?: string) {
        super(`You can not invoke two instances of ${className ? className : 'this'} class.`)
    }
}

export {
    SingletonDuplicityError
}