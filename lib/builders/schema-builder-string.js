"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("../models/");
/**
 * Exposes methods to validate string fields in json documents.
 * @class
 */
class SchemaBuilderString extends _1.SchemaBuilderCore {
    constructor(schema) {
        super(schema);
        this.schema.type = _2.SimpleTypes.string;
    }
    /**
     * Sets the maximum length for the property.
     * @param i A number idicating the maximum length for the property.
     */
    maxLength(i) {
        this.schema.maxLength = i;
        return this;
    }
    /**
     * Sets the minimum length for the property.
     * @param i A number idicating the minimum length for the property.
     */
    minLength(i) {
        this.schema.minLength = i;
        return this;
    }
    /**
     * Sets a regex pattern the this property must match.
     * @param i The regex pattern.
     */
    pattern(s) {
        this.schema.pattern = s;
        return this;
    }
    /**
     * A format to be validated
     * @param i The format to be validated, must be one of: date-time, email, hostname, ipv4,
     * ipv6, uri, uri-reference", uri-template, json-pointer.
     */
    format(s) {
        this.schema.format = s;
        return this;
    }
}
exports.SchemaBuilderString = SchemaBuilderString;
//# sourceMappingURL=schema-builder-string.js.map