import { SchemaBuilderCore } from "./";
import { EnumBuilder } from "./interfaces";
import { SchemaModel } from "../models";

/**
 * Exposes methods to validate enum fields in json documents.
 * @class
 */
export class SchemaBuilderEnum extends SchemaBuilderCore<SchemaBuilderEnum>
    implements EnumBuilder<SchemaBuilderEnum> {

    constructor(schema?: SchemaModel) {
        super(schema);
    }

    enum(...params: any[]): SchemaBuilderEnum {
        this.schema.enum = params;
        return this;
    }
}