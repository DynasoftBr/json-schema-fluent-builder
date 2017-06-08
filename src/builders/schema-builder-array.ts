import { SchemaBuilderCore } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { ArrayBuilder, CoreBuilder } from "./interfaces";

/**
 * Exposes methods to validate arrays in json documents.
 * @class
 */
export class SchemaBuilderArray extends SchemaBuilderCore<SchemaBuilderArray>
    implements ArrayBuilder<SchemaBuilderArray> {

    constructor() {
        super();

        this.schema.type = SimpleTypes.array;
    }

    /**
     * Set the maximum of items in an array.
     * @param i The maximum of items alowed in this array.
     */
    maxItems(i: number): SchemaBuilderArray {
        this.schema.maxItems = i;
        return this;
    }

    /**
     * Set the minimum of items in an array.
     * @param i The minimum of items in the array.
     */
    minItems(i: number): SchemaBuilderArray {
        this.schema.minItems = i;
        return this;
    }

    /**
     * Set if the array must have unique values.
     * @param b A boolean the idicates if the array must have unique values.
     * True for unique values, otherwise false.
     */
    uniqueItems(b: boolean): SchemaBuilderArray {
        this.schema.uniqueItems = b;
        return this;
    }

    /**
     * Sets the validation of the items.
     * @param items An array of SchemaModel.
     */
    items(...items: CoreBuilder<any>[]): SchemaBuilderArray {
        let schemaItems: SchemaModel[] = [];

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
        } else {

            // If the current value of schema.items is an array, concat it with the new items.
            if (Array.isArray(this.schema.items))
                schemaItems = this.schema.items.concat(schemaItems);
            else // In this case the value is an object and we add it to our new items array.
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
    additionalItems(val: boolean | CoreBuilder<any>): SchemaBuilderArray {

        if (val instanceof Object)
            this.schema.additionalItems = (<CoreBuilder<any>>val).getSchema();
        else
            this.schema.additionalItems = val;

        return this;
    }
}