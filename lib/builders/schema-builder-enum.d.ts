import { SchemaBuilderCore } from "./";
import { EnumBuilder } from "./interfaces";
/**
 * Exposes methods to validate enum fields in json documents.
 * @class
 */
export declare class SchemaBuilderEnum extends SchemaBuilderCore<SchemaBuilderEnum> implements EnumBuilder<SchemaBuilderEnum> {
    constructor(...params: any[]);
}
