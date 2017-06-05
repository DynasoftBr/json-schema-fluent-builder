"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("../models/");
/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
class SchemaBuilderInt extends _1.SchemaBuilderNumber {
    constructor(schema, name, parent) {
        super(schema, name, parent);
        this.schema.type = _2.SimpleTypes.number;
    }
}
exports.SchemaBuilderInt = SchemaBuilderInt;
//# sourceMappingURL=schema-builder-int.js.map