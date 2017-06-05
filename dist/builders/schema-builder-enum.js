"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
/**
 * Exposes methods to validate enum fields in json documents.
 * @class
 */
class SchemaBuilderEnum extends _1.SchemaBuilderCore {
    constructor(schema, params, name, parent) {
        super(schema, name, parent);
        this.schema.enum = params;
    }
}
exports.SchemaBuilderEnum = SchemaBuilderEnum;
//# sourceMappingURL=schema-builder-enum.js.map