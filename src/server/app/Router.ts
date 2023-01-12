// @filename: Router.ts
import { HttpServer } from "../../types";

interface Router {
    register(method: "string", path: "string", callback: Function): void;
}

class Router {
    router: any;

    constructor(readonly httpServer: HttpServer) {
        this.router = httpServer.router;
    }

    register() {
    }
}

export {
    Router
}