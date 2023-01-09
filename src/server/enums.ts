// @filename: enums.ts
enum DatabaseQuery {
    create = 'create',
    update = 'update',
    readone = 'readone',
    readall = 'readall',
    delete = 'delete',
    deleteall = 'clear',
    count = 'count'
}

export {
    DatabaseQuery
}