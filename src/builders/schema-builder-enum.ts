import { SchemaBuilderCore } from "./";
import { EnumBuilder } from "./interfaces";

/**
 * Exposes methods to validate enum fields in json documents.
 * @class
 */
export class SchemaBuilderEnum extends SchemaBuilderCore<SchemaBuilderEnum>
    implements EnumBuilder<SchemaBuilderEnum> {

    constructor(...params: any[]) {
        super();

        this.schema.enum = params;
    }
}