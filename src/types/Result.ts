export type Resolved<T> = {
    data: T,
    err: null
};

export type Rejected<E extends Error> = {
    data: null,
    err: E
}

export type Result<T, E extends Error = Error> = Resolved<T> | Rejected<E>;
