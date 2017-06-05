import { SchemaBuilderCore } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { BoolBuilder } from "./interfaces";
import { SchemaBuilder } from "./schema-builder";

/**
 * Exposes methods to validate boolean fields in json documents.
 * @class
 */
export class SchemaBuilderBool extends SchemaBuilderCore<SchemaBuilderBool> implements BoolBuilder<SchemaBuilderBool>{

    constructor(schema: SchemaModel, name: string, parent?: SchemaModel) {
        super(schema, name, parent);

        this.schema.type = SimpleTypes.boolean;
    }

}