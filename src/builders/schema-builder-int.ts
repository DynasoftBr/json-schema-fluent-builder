import { SchemaBuilderCore, SchemaBuilderNumber } from "./";
import { SchemaBuilder } from "./schema-builder";
import { SimpleTypes, SchemaModel } from "../models/";
import { NumberBuilder, IntBuilder } from "./interfaces";

/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
export class SchemaBuilderInt extends SchemaBuilderNumber
    implements IntBuilder<SchemaBuilderInt> {

    constructor(schema: SchemaModel, name?: string, parent?: SchemaModel) {
        super(schema, name, parent);

        this.schema.type = SimpleTypes.number;
    }
}