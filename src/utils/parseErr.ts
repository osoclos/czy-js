import { shallowCopyObj } from "./shallowCopyObj";

export function parseErr(err: any): Error {
    if (Error.isError?.(err) ?? err instanceof Error) return err;

    switch (typeof err) {
        case "string": return new Error(err);
        case "object": return new Error(err === null ? err : shallowCopyObj(err));

        case "symbol": return new Error(err.description);

        default: return new Error(`${err}`);
    }
}