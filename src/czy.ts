import type { MaybePromise, Result } from "./types";
import { parseErr, transformMaybePromise } from "./utils";

export function czy<T, E extends Error>(arg: Promise<T> | (() => Promise<T>)): Promise<Result<T, E>>;
export function czy<T, E extends Error>(arg: () => T): Result<T, E>;
export function czy<T, E extends Error = Error>(arg: Promise<T> | (() => MaybePromise<T>)): MaybePromise<Result<T, E>> {
    try {
        const data = arg instanceof Promise ? arg : arg();
        return <MaybePromise<Result<T, E>>>transformMaybePromise(data, (data) => ({ ...[null, data], data, err: null }));
    } catch (anyErr: any) {
        const err = <E>parseErr(anyErr);
        return <Result<T, E>>{ ...[err, null], data: null, err };
    }
}