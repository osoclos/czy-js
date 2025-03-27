import type { MaybePromise, Result } from "../types";

const LENGTH: number = 2;
const BASE: AdvancedResult<any> = {
    data: null,
    err: new Error(),

    length: LENGTH,

    get 0(): Error | null {
        return this.err;
    },

    set 0(_0: Error) {
        this.err = _0;
    },

    get 1(): any | null {
        return this.data;
    },

    set 1(_1: any) {
        this.data = _1;
    },

    valueOf(): any | null {
        return this.data;
    },
    
    toString(): string {
        const { data, err } = this;
        return data === null ? err?.message ?? err?.name ?? Error.name : data?.toString() ?? "";
    },

    toJSON(): any | Error | null {
        const { data, err } = this;
        return data ?? err ?? null;
    },

    *[Symbol.iterator](): Generator<Error | any | null, undefined, Error | any | null | undefined> {
        const { data, err } = this;

        yield err;
        yield data;
    }
};

BASE[Symbol.asyncIterator] = BASE[Symbol.iterator];

export function createResult<T>(raw: MaybePromise<Result<T>>): MaybePromise<AdvancedResult<T>> {
    return raw instanceof Promise ? new Promise<AdvancedResult<T>>(async (res) => res({ ...BASE, ...await raw })) : { ...BASE, ...raw };
}

export type AdvancedResult<T> = Result<T> & {
    length: number;
    [key: number]: T | Error | null;

    valueOf(): T | null;
    toString(): string;

    toJSON(): T | Error | null;

    [Symbol.iterator](): Generator<Error | T | null, undefined, Error | T | null | undefined>;
    [Symbol.asyncIterator]?: () => Generator<Error | T | null, undefined, Error | T | null | undefined>;
};