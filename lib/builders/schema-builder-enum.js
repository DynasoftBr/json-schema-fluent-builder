"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
/**
 * Exposes methods to validate enum fields in json documents.
 * @class
 */
class SchemaBuilderEnum extends _1.SchemaBuilderCore {
    constructor(schema) {
        super(schema);
    }
    enum(...params) {
        this.schema.enum = params;
        return this;
    }
}
exports.SchemaBuilderEnum = SchemaBuilderEnum;
//# sourceMappingURL=schema-builder-enum.js.map