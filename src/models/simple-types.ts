function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}

export const SimpleTypes = strEnum(["array",
    "boolean", "integer",
    "null", "number",
    "object", "string", "any"]);

export type SimpleTypes = keyof typeof SimpleTypes;