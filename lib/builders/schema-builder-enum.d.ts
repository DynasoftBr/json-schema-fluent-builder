import { SchemaBuilderCore } from "./";
import { EnumBuilder } from "./interfaces";
import { SchemaModel } from "../models";
/**
 * Exposes methods to validate enum fields in json documents.
 * @class
 */
export declare class SchemaBuilderEnum extends SchemaBuilderCore<SchemaBuilderEnum> implements EnumBuilder<SchemaBuilderEnum> {
    constructor(schema?: SchemaModel);
    enum(...params: any[]): SchemaBuilderEnum;
}
