import type { Result } from "../types";

export function createResult<T, E extends Error>(data: T | null = null, err: E | null = null): Result<T, E> {
    const success = err === null;
    return <Result<T, E>>{ data, err, success, 0: err, 1: data, length: 2, [Symbol.iterator]: resultIterator, resolve };

    function* resultIterator() {
        yield err;
        yield data;
    }

    function resolve(): T {
        if (success) return <T>data;
        throw err;
    }
}