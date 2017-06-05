"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const schema_builder_1 = require("./schema-builder");
const _2 = require("../models/");
/**
 * Exposes methods to validate arrays in json documents.
 * @class
 */
class SchemaBuilderArray extends _1.SchemaBuilderCore {
    constructor(schema, name, parent) {
        super(schema, name, parent);
        this.schema.type = _2.SimpleTypes.string;
    }
    /**
     * Set the maximum of items in an array.
     * @param i The maximum of items alowed in this array.
     */
    maxItems(i) {
        this.schema.maxItems = i;
        return this;
    }
    /**
     * Set the minimum of items in an array.
     * @param i The minimum of items in the array.
     */
    minItems(i) {
        this.schema.minItems = i;
        return this;
    }
    /**
     * Set if the array must have unique values.
     * @param b A boolean the idicates if the array must have unique values.
     * True for unique values, otherwise false.
     */
    uniqueItems(b) {
        this.schema.uniqueItems = b;
        return this;
    }
    /**
     * Configures the validation of array values.
     */
    items() {
        if (this.items)
            throw new Error("Items property already initialized.");
        this.schema.items = {};
        return new schema_builder_1.SchemaBuilder(this.schema.items);
    }
    /**
     * Sets the validation of this array.
     * @param items An array of SchemaModel.
     */
    itemsArray(items) {
        if (!items && !Array.isArray(items))
            throw new Error("The items parameter must be a valid array.");
        if (this.items)
            throw new Error("Items property already initialized.");
        this.schema.items = items;
        return this;
    }
    additionalItems(val) {
        this.schema.additionalItems = val;
        return this;
    }
}
exports.SchemaBuilderArray = SchemaBuilderArray;
//# sourceMappingURL=schema-builder-array.js.map