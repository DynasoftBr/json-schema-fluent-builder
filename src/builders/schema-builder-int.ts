import { SchemaBuilderNumber } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { IntBuilder } from "./interfaces";

/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
export class SchemaBuilderInt extends SchemaBuilderNumber
    implements IntBuilder<SchemaBuilderInt> {

    constructor(schema?: SchemaModel) {
        super(schema);

        this.schema.type = SimpleTypes.integer;
    }
}