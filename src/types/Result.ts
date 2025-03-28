import { Arr, Obj } from ".";
export type Result<T, E extends Error> = (Obj.Resolved<T> | Obj.Rejected<E>) & (Arr.Resolved<T> | Arr.Rejected<E>);