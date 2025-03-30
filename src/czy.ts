import type { MaybePromise, Result, SwappedResult } from "./types";
import { createResult, parseErr, transformMaybePromise } from "./utils";

export function czy<T, E extends Error>(arg: Promise<T> | (() => Promise<T>)): Promise<Result<T, E>>;
export function czy<T, E extends Error>(arg: () => T): Result<T, E>;
export function czy<T, E extends Error = Error>(arg: Promise<T> | (() => MaybePromise<T>)): MaybePromise<Result<T, E>>;
export function czy<T, E extends Error = Error>(arg: Promise<T> | (() => MaybePromise<T>)): MaybePromise<Result<T, E>> {
    try {
        const data = arg instanceof Promise ? arg : arg();
        return transformMaybePromise(data, <(data: T) => Result<T, E>>createResult);
    } catch (anyErr: any) {
        const err = <E>parseErr(anyErr);
        return createResult(<T>null, err);
    }
}

czy.dataErr = dataErr;

function dataErr<T, E extends Error>(arg: Promise<T> | (() => Promise<T>)): Promise<SwappedResult<T, E>>;
function dataErr<T, E extends Error>(arg: () => T): SwappedResult<T, E>;
function dataErr<T, E extends Error>(arg: Promise<T> | (() => MaybePromise<T>)): MaybePromise<SwappedResult<T, E>> {
    return transformMaybePromise(czy(arg), (result) => {
        const { data, err } = result;
        return <SwappedResult<T, E>>{ ...result, 0: data, 1: err, [Symbol.iterator]: resultIterator };

        function* resultIterator() {
            yield data;
            yield err;
        }
    });
}