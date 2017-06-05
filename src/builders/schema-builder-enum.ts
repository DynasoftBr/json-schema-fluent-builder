import { SchemaBuilderCore } from "./";
import { SchemaBuilder } from "./schema-builder";
import { SimpleTypes, SchemaModel } from "../models/";
import { EnumBuilder } from "./interfaces";

/**
 * Exposes methods to validate enum fields in json documents.
 * @class
 */
export class SchemaBuilderEnum extends SchemaBuilderCore<SchemaBuilderEnum>
    implements EnumBuilder<SchemaBuilderEnum> {

    constructor(schema: SchemaModel, params: string[], name?: string, parent?: SchemaModel) {
        super(schema, name, parent);

        this.schema.enum = params;
    }
}