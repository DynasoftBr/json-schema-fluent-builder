import { SchemaBuilderCore } from "./";
import { SchemaBuilder } from "./schema-builder";
import { SimpleTypes, SchemaModel } from "../models/";
import { IntBuilder } from "./interfaces";

/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
export class SchemaBuilderNumber extends SchemaBuilderCore<SchemaBuilderNumber>
    implements IntBuilder<SchemaBuilderNumber> {

    constructor(schema: SchemaModel, name?: string, parent?: SchemaModel) {
        super(schema, name, parent);

        this.schema.type = SimpleTypes.integer;
    }

    /**
     * Set the maximum for this property.
     * @param i A number indicating the maximum for this property.
     * @param exclusive A boolean indicating if this maximum is exclusive. True for exclusive, otherwise false.
     */
    max(i: number, exclusive?: boolean) {
        this.schema.maximum = i;
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
        this.schema.exclusiveMinimum = exclusive;
        return this;
    }
}