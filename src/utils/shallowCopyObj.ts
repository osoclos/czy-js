export function shallowCopyObj(obj: object): Record<string, string> {
    const copy: Record<string, string> = {};
    for (const key in obj) {
        const value: any = obj[<keyof object>key];

        const copyVal: string = (() => {
            switch (typeof value) {
                case "string": return value;

                case "number":
                case "boolean": return `${value}`;

                case "bigint": return `${value}n`;

                case "object": return (
                    value === null
                        ? "null"
                        : value.toJSON?.() ?? (
                            value.toString() === "[object Object]"
                                ? undefined
                                : value.toString()
                        ) ?? value[Symbol.toStringTag] ?? value[Symbol.name] ?? (
                            "constructor" in value
                                ? value.constructor.name
                                : "Object"
                        )
                );

                case "function": return value.name;
                case "symbol": return value.description;

                case "undefined": return "undefined";
            }
        })();

        copy[<keyof object>key] = copyVal;
    }

    return copy;
}