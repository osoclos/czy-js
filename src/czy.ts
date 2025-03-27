import type { MaybePromise, Result } from "./types";
import { createResult, type AdvancedResult } from "./utils";

export function czy<T>(v: Promise<T> | (() => Promise<T>)): Promise<AdvancedResult<T>>; // this must be put first. idk why
export function czy<T>(v: (() => T)): AdvancedResult<T>;
export function czy<T>(v: Promise<T> | (() => MaybePromise<T>)): MaybePromise<AdvancedResult<T>> {
    try {
        const data = v instanceof Promise ? v : v();
        const res = data instanceof Promise ? new Promise<Result<T>>(async (res) => res({ data: await data, err: null })) : { data, err: null };

        return createResult(res);
    } catch (err: any) {
        const errType = typeof err;
        switch (true) {
            case (Error.isError?.(err) ?? err instanceof Error): break;

            case (errType === "string"): {
                err = new Error(err);
                break;
            }

            case (errType === "object"): {
                err = new Error(err === null ? err : JSON.stringify(err));
                break;
            }

            default: {
                err = new Error(`${err}`);
                break;
            }
        }

        return <AdvancedResult<T>>createResult({ err, data: null });
    }
}