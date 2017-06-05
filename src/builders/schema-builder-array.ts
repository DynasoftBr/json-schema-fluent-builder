import { SchemaBuilderCore } from "./";
import { SchemaBuilder } from "./schema-builder";
import { SimpleTypes, SchemaModel } from "../models/";
import { ArrayBuilder } from "./interfaces";

/**
 * Exposes methods to validate arrays in json documents.
 * @class
 */
export class SchemaBuilderArray extends SchemaBuilderCore<SchemaBuilderArray>
    implements ArrayBuilder<SchemaBuilderArray> {


    constructor(schema: SchemaModel, name?: string, parent?: SchemaModel) {
        super(schema, name, parent);

        this.schema.type = SimpleTypes.string;
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
     * Configures the validation of array values.
     */
    items(): SchemaBuilder {
        if (this.items)
            throw new Error("Items property already initialized.");
        this.schema.items = <SchemaModel>{};
        return new SchemaBuilder(this.schema.items);
    }

    /**
     * Sets the validation of this array.
     * @param items An array of SchemaModel.
     */
    itemsArray(items: SchemaModel[]): SchemaBuilderArray {
        if (!items && !Array.isArray(items))
            throw new Error("The items parameter must be a valid array.");

        if (this.items)
            throw new Error("Items property already initialized.");

        this.schema.items = items;
        return this;
    }

    additionalItems(val: boolean | SchemaModel): SchemaBuilderArray {
        this.schema.additionalItems = val;
        return this;
    }
}