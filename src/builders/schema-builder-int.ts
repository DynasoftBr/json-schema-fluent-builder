import { SchemaBuilderNumber } from "./";
import { SimpleTypes } from "../models/";
import { IntBuilder } from "./interfaces";

/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
export class SchemaBuilderInt extends SchemaBuilderNumber
    implements IntBuilder<SchemaBuilderInt> {

    constructor() {
        super();

        this.schema.type = SimpleTypes.number;
    }
}