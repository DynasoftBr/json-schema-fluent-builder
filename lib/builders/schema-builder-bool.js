"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("../models/");
/**
 * Exposes methods to validate boolean fields in json documents.
 * @class
 */
class SchemaBuilderBool extends _1.SchemaBuilderCore {
    constructor() {
        super();
        this.schema.type = _2.SimpleTypes.boolean;
    }
}
exports.SchemaBuilderBool = SchemaBuilderBool;
//# sourceMappingURL=schema-builder-bool.js.map