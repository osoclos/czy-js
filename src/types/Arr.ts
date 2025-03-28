export type Resolved<T> = [null, T];
export type Rejected<E> = [E, null];