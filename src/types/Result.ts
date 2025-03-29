import { Arr, Obj } from ".";

export type Result<T, E extends Error> = (Obj.Resolved<T> | Obj.Rejected<E>) & (Arr.Resolved<T> | Arr.Rejected<E>);
export type SwappedResult<T, E extends Error> = (Obj.Resolved<T> | Obj.Rejected<E>) & (Arr.SwappedResolved<T> | Arr.SwappedRejected<E>);