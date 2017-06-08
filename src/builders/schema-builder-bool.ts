import { SchemaBuilderCore } from "./";
import { SimpleTypes } from "../models/";
import { BoolBuilder } from "./interfaces";

/**
 * Exposes methods to validate boolean fields in json documents.
 * @class
 */
export class SchemaBuilderBool extends SchemaBuilderCore<SchemaBuilderBool>
    implements BoolBuilder<SchemaBuilderBool> {

    constructor() {
        super();

        this.schema.type = SimpleTypes.boolean;
    }

}