"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("../models/");
/**
 * Instantiate a new SchemaBuilderArray.
 * @class
 * @classdesc Exposes methods to validate arrays in json documents.
 */
class SchemaBuilderArray extends _1.SchemaBuilderCore {
    constructor(schema) {
        super(schema);
        this.schema.type = _2.SimpleTypes.array;
    }
    /**
     * Set the maximum of items in an array.
     * An array instance is valid against "maxItems" if its size is less
     * than, or equal to, the value of this keyword.
     * @param { number } i The maximum of items alowed in this array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error }  The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    maxItems(i) {
        if (isNaN(i) || i < 0)
            throw new Error("The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.");
        this.schema.maxItems = i;
        return this;
    }
    /**
     * Set the minimum of items in an array.
     * An array instance is valid against "minItems" if its size is greater
     * than, or equal to, the value of this keyword.
     * @param { number } i The minimum of items in the array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error } The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    minItems(i) {
        if (isNaN(i) || i < 0)
            throw new Error("The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.");
        this.schema.minItems = i;
        return this;
    }
    /**
     * Set if the array must have unique values.
     * @param { boolean } b A boolean the idicates if the array must have unique values.
     * If this keyword has boolean value false, the instance validates successfully.
     * If it has boolean value true, the instance validates successfully if all of its elements are unique.
     */
    uniqueItems(b) {
        this.schema.uniqueItems = b;
        return this;
    }
    /**
     * Sets the validation of the items.
     * The value of "items" MUST be either an object or an array.  If it is
     * an object, this object MUST be a valid JSON Schema.  If it is an
     * array, items of this array MUST be objects, and each of these objects
     * MUST be a valid JSON Schema.
     * @param { CoreBuilder | SchemaModel | CoreBuilder[] | SchemaModel[] } item This parameter can
     * be a single CoreBuilder (SchemaBuilder), a single SchemaModel, or an array of SchamaBuilder or SchemaModel.
     * @param { CoreBuilder[] | SchemaModel[] } items An array of SchemaModel or CoreBuilder.
     * This parameter is a rest Parameter.
     */
    items(...items) {
        let schemaItems = [];
        // Iterate all items and add the generated schema to schemaItems var.
        items.forEach(itm => {
            if (itm instanceof _1.SchemaBuilderCore)
                schemaItems.push(itm.getSchema());
            else
                schemaItems.push(itm);
        });
        // If items are be setting first time
        if (!this.schema.items) {
            // And the array contains only one SchemaModel, set '.items' property to single object.
            if (schemaItems.length == 1)
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