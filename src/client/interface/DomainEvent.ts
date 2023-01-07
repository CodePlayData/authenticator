interface DomainEvent {
    name: string;
    msg?: unknown;
    id?: number | string
}

export {
    DomainEvent
}