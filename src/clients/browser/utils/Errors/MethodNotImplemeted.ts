// @filename: MethodNotImplemented.ts

class MethodNotImplementedError extends Error {
    constructor() {
        super('Method not implemented yet.');
    }
}

export {
    MethodNotImplementedError
}