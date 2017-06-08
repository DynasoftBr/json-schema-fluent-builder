import { SchemaBuilderCore } from "./";
import { SimpleTypes, Formats } from "../models/";
import { StringBuilder } from "./interfaces";

/**
 * Exposes methods to validate string fields in json documents.
 * @class
 */
export class SchemaBuilderString extends SchemaBuilderCore<SchemaBuilderString>
    implements StringBuilder<SchemaBuilderString> {

    constructor() {
        super();

        this.schema.type = SimpleTypes.string;
    }

    /**
     * Sets the maximum length for the property.
     * @param i A number idicating the maximum length for the property.
     */
    maxLength(i: number): SchemaBuilderString {
        this.schema.maxLength = i;
        return this;
    }

    /**
     * Sets the minimum length for the property.
     * @param i A number idicating the minimum length for the property.
     */
    minLength(i: number): SchemaBuilderString {
        this.schema.minLength = i;
        return this;
    }

    /**
     * Sets a regex pattern the this property must match.
     * @param i The regex pattern.
     */
    pattern(s: string): SchemaBuilderString {
        this.schema.pattern = s;
        return this;
    }

    /**
     * A format to be validated
     * @param i The format to be validated, must be one of: date-time, email, hostname, ipv4,
     * ipv6, uri, uri-reference", uri-template, json-pointer.
     */
    format(s: Formats): SchemaBuilderString {
        this.schema.format = s;
        return this;
    }

}