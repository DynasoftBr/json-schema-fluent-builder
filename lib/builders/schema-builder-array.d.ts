import { SchemaBuilderCore } from "./";
import { ArrayBuilder, CoreBuilder } from "./interfaces";
/**
 * Exposes methods to validate arrays in json documents.
 * @class
 */
export declare class SchemaBuilderArray extends SchemaBuilderCore<SchemaBuilderArray> implements ArrayBuilder<SchemaBuilderArray> {
    constructor();
    /**
     * Set the maximum of items in an array.
     * @param i The maximum of items alowed in this array.
     */
    maxItems(i: number): SchemaBuilderArray;
    /**
     * Set the minimum of items in an array.
     * @param i The minimum of items in the array.
     */
    minItems(i: number): SchemaBuilderArray;
    /**
     * Set if the array must have unique values.
     * @param b A boolean the idicates if the array must have unique values.
     * True for unique values, otherwise false.
     */
    uniqueItems(b: boolean): SchemaBuilderArray;
    /**
     * Sets the validation of the items.
     * @param items An array of SchemaModel.
     */
    items(...items: CoreBuilder<any>[]): SchemaBuilderArray;
    /**
     * Indicate if this array accepts additional items.
     * @param val A boolean indicating if the array accepts additional items,
     * or an SchemaModel indicating the validation of additional items.
     */
    additionalItems(val: boolean | CoreBuilder<any>): SchemaBuilderArray;
}
