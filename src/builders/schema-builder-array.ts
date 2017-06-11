import { SchemaBuilderCore } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { ArrayBuilder, CoreBuilder } from "./interfaces";

/**
 * Instantiate a new SchemaBuilderArray.
 * @class
 * @classdesc Exposes methods to validate arrays in json documents.
 */
export class SchemaBuilderArray extends SchemaBuilderCore<SchemaBuilderArray>
    implements ArrayBuilder<SchemaBuilderArray> {

    constructor(schema?: SchemaModel) {
        super(schema);

        this.schema.type = SimpleTypes.array;
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
    maxItems(i: number): SchemaBuilderArray {
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
    minItems(i: number): SchemaBuilderArray {
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
    uniqueItems(b: boolean): SchemaBuilderArray {
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
    items(...items: (CoreBuilder<any> | SchemaModel)[]): SchemaBuilderArray {

        let schemaItems: SchemaModel[] = [];

        // Iterate all items and add the generated schema to schemaItems var.
        items.forEach(itm => {
            if (itm instanceof SchemaBuilderCore)
                schemaItems.push(itm.getSchema());
            else
                schemaItems.push(<any>itm);
        });

        // If items are be setting first time
        if (!this.schema.items) {
            // And the array contains only one SchemaModel, set '.items' property to single object.
            if (schemaItems.length == 1)
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