export type Resolved<T> = [null, T];
export type Rejected<E> = [E, null];

export type SwappedResolved<T> = [T, null];
export type SwappedRejected<E> = [null, E];