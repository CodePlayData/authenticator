interface HttpServer {
    router: any;
    listen(port: number): any;
    user(module: any): any;
}

interface Router {
    register(): void;
}

interface Connection {
    store: string;
    //the return any is complicated, must be unknown but in each case needs to be coverted to some structured.
    query(query: DatabaseQuery, object?: unknown, key?: any): any;
}

export {
    HttpServer,
    Router,
    Connection
}