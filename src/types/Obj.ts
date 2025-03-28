export type Resolved<T> = {
    data: T;
    err: null;

    success: true;
}

export type Rejected<E extends Error> = {
    data: null;
    err: E;

    success: false;
}