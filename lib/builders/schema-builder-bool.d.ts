import { SchemaBuilderCore } from "./";
import { SchemaModel } from "../models/";
import { BoolBuilder } from "./interfaces";
/**
 * Exposes methods to validate boolean fields in json documents.
 * @class
 */
export declare class SchemaBuilderBool extends SchemaBuilderCore<SchemaBuilderBool> implements BoolBuilder<SchemaBuilderBool> {
    constructor(schema?: SchemaModel);
}
