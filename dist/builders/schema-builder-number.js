"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("../models/");
/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
class SchemaBuilderNumber extends _1.SchemaBuilderCore {
    constructor(schema, name, parent) {
        super(schema, name, parent);
        this.schema.type = _2.SimpleTypes.number;
    }
    /**
     * Set the maximum for this property.
     * @param i A number indicating the maximum for this property.
     * @param exclusive A boolean indicating if this maximum is exclusive. True for exclusive, otherwise false.
     */
    max(i, exclusive) {
        this.schema.maximum = i;
        this.schema.exclusiveMaximum = exclusive;
        return this;
    }
    /**
     * Set the minimum for this property.
     * @param i A number indicating the minimum for this property.
     * @param exclusive A boolean indicating if this minimum is exclusive. True for exclusive, otherwise false.
     */
    min(i, exclusive) {
        this.schema.minimum = i;
        this.schema.exclusiveMinimum = exclusive;
        return this;
    }
    multipleOf(val) {
        if (!val)
            throw new Error("The parameter 'val' is required.");
        if (val < 0)
            throw new Error("The parameter 'val' must be greater than 0.");
        this.schema.multipleOf = val;
        return this;
    }
}
exports.SchemaBuilderNumber = SchemaBuilderNumber;
//# sourceMappingURL=schema-builder-number.js.map