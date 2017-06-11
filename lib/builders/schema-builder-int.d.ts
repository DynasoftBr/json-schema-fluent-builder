import { SchemaBuilderNumber } from "./";
import { SchemaModel } from "../models/";
import { IntBuilder } from "./interfaces";
/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
export declare class SchemaBuilderInt extends SchemaBuilderNumber implements IntBuilder<SchemaBuilderInt> {
    constructor(schema?: SchemaModel);
}