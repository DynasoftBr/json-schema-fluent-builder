import { SchemaBuilderCore } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { NumberBuilder } from "./interfaces";

/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
export class SchemaBuilderNumber extends SchemaBuilderCore<SchemaBuilderNumber>
    implements NumberBuilder<SchemaBuilderNumber> {

    constructor(schema?: SchemaModel) {
        super(schema);

        this.schema.type = SimpleTypes.number;
    }

    /**
     * Set the maximum for this property.
     * @param i A number indicating the maximum for this property.
     * @param exclusive A boolean indicating if this maximum is exclusive. True for exclusive, otherwise false.
     */
    max(i: number, exclusive?: boolean) {
        this.schema.maximum = i;
        if (exclusive)
            this.schema.exclusiveMaximum = exclusive;
        return this;
    }

    /**
     * Set the minimum for this property.
     * @param i A number indicating the minimum for this property.
     * @param exclusive A boolean indicating if this minimum is exclusive. True for exclusive, otherwise false.
     */
    min(i: number, exclusive?: boolean) {
        this.schema.minimum = i;
        if (exclusive)
            this.schema.exclusiveMinimum = exclusive;
        return this;
    }

    multipleOf(val: number): SchemaBuilderNumber {
        if (val == undefined)
            throw new Error("The parameter 'val' is required.");

        if (val <= 0)
            throw new Error("The parameter 'val' must be greater than 0.");

        this.schema.multipleOf = val;
        return this;
    }
}