import type { MaybePromise } from "../types";

export function transformMaybePromise<T, U>(arg: MaybePromise<T>, func: (arg: T) => U): MaybePromise<U> {
    return arg instanceof Promise ? new Promise(async (res) => res(await arg.then((arg) => func(arg)).catch((err) => err))) : func(arg);
}