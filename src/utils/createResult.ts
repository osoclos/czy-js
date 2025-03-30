import type { Result } from "../types";

export function createResult<T, E extends Error>(data: T | null = null, err: E | null = null): Result<T, E> {
    const success = err === null;
    return <Result<T, E>>{ data, err, success, [Symbol.iterator]: resultIterator };

    function* resultIterator() {
        yield err;
        yield data;
    }
}
