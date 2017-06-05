function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}

export const formats = strEnum(["date-time",
    "email", "hostname",
    "ipv4", "ipv6",
    "uri", "uri-reference",
    "uri-template", "json-pointer"]);

export type formats = keyof typeof formats;