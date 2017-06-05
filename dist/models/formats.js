"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
exports.formats = strEnum(["date-time",
    "email", "hostname",
    "ipv4", "ipv6",
    "uri", "uri-reference",
    "uri-template", "json-pointer"]);
//# sourceMappingURL=formats.js.map