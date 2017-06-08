"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("../models/");
/**
 * Exposes methods to validate arrays in json documents.
 * @class
 */
class SchemaBuilderArray extends _1.SchemaBuilderCore {
    constructor() {
        super();
        this.schema.type = _2.SimpleTypes.array;
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
     * Sets the validation of the items.
     * @param items An array of SchemaModel.
     */
    items(...items) {
        let schemaItems = [];
        // Iterate all items and add the generated schema to schemaItems var.
        items.forEach(itm => {
            schemaItems.push(itm.getSchema());
        });
        if (!this.schema.items) {
            // If the array contains only one SchemaModel, set '.items' property to single object.
            if (items.length == 1)
                this.schema.items = schemaItems[0];
            else
                this.schema.items = schemaItems;
        }
        else {
            // If the current value of schema.items is an array, concat it with the new items.
            if (Array.isArray(this.schema.items))
                schemaItems = this.schema.items.concat(schemaItems);
            else
                schemaItems.unshift(this.schema.items);
            // Update the value of schema.items.
            this.schema.items = schemaItems;
        }
        return this;
    }
    /**
     * Indicate if this array accepts additional items.
     * @param val A boolean indicating if the array accepts additional items,
     * or an SchemaModel indicating the validation of additional items.
     */
    additionalItems(val) {
        if (val instanceof Object)
            this.schema.additionalItems = val.getSchema();
        else
            this.schema.additionalItems = val;
        return this;
    }
}
exports.SchemaBuilderArray = SchemaBuilderArray;
//# sourceMappingURL=schema-builder-array.js.map