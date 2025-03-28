import type { MaybePromise } from "../types";

export function transformMaybePromise<T, U>(arg: MaybePromise<T>, func: (arg: T) => U): MaybePromise<U> {
    return arg instanceof Promise ? new Promise(async (res) => res(func(await arg))) : func(arg);
}