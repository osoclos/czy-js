export function parseErr(err: any): Error {
    const errType = typeof err;
    switch (true) {
        case (Error.isError?.(err) ?? err instanceof Error): return err;

        case (errType === "string"): return new Error(err);
        case (errType === "object"): return new Error(err === null ? err : JSON.stringify(err));

        default: return new Error(`${err}`);
    }
}