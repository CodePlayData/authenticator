// @filename: enums.ts
enum DatabasePermission { 
    read = 'readonly',
    readwrite = 'readwrite'
}

enum RepositoryMethod {
    'event',
    'promise'
}

enum CredentialsDataFormat {
    'short',
    'full'
}

enum HttpClientOptions {
    fetch = 'fetch'
}

enum StorageOptions {
    indexeddb = 'indexeddb',
    localstorage = 'localstorage'
}

export {
    DatabasePermission,
    RepositoryMethod,
    CredentialsDataFormat,
    HttpClientOptions,
    StorageOptions
}