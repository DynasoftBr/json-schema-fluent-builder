"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
exports.SimpleTypes = strEnum(["array",
    "boolean", "integer",
    "null", "number",
    "object", "string", "any"]);
//# sourceMappingURL=simple-types.js.map