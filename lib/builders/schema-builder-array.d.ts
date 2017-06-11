import { SchemaBuilderCore } from "./";
import { SchemaModel } from "../models/";
import { ArrayBuilder, CoreBuilder } from "./interfaces";
/**
 * Instantiate a new SchemaBuilderArray.
 * @class
 * @classdesc Exposes methods to validate arrays in json documents.
 */
export declare class SchemaBuilderArray extends SchemaBuilderCore<SchemaBuilderArray> implements ArrayBuilder<SchemaBuilderArray> {
    constructor(schema?: SchemaModel);
    /**
     * Set the maximum of items in an array.
     * An array instance is valid against "maxItems" if its size is less
     * than, or equal to, the value of this keyword.
     * @param { number } i The maximum of items alowed in this array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error }  The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    maxItems(i: number): SchemaBuilderArray;
    /**
     * Set the minimum of items in an array.
     * An array instance is valid against "minItems" if its size is greater
     * than, or equal to, the value of this keyword.
     * @param { number } i The minimum of items in the array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error } The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    minItems(i: number): SchemaBuilderArray;
    /**
     * Set if the array must have unique values.
     * @param { boolean } b A boolean the idicates if the array must have unique values.
     * If this keyword has boolean value false, the instance validates successfully.
     * If it has boolean value true, the instance validates successfully if all of its elements are unique.
     */
    uniqueItems(b: boolean): SchemaBuilderArray;
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
    items(...items: (CoreBuilder<any> | SchemaModel)[]): SchemaBuilderArray;
    /**
     * Indicate if this array accepts additional items.
     * @param val A boolean indicating if the array accepts additional items,
     * or an SchemaModel indicating the validation of additional items.
     */
    additionalItems(val: boolean | CoreBuilder<any>): SchemaBuilderArray;
}
