import { Router } from "../app/Router";

class CredentialsController {
    constructor(readonly router: Router, readonly usecase: Function){
    }
}

export {
    CredentialsController
}