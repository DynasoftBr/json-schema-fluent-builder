import { SchemaBuilderCore } from "./";
import { Formats, SchemaModel } from "../models/";
import { StringBuilder } from "./interfaces";
/**
 * Exposes methods to validate string fields in json documents.
 * @class
 */
export declare class SchemaBuilderString extends SchemaBuilderCore<SchemaBuilderString> implements StringBuilder<SchemaBuilderString> {
    constructor(schema?: SchemaModel);
    /**
     * Sets the maximum length for the property.
     * @param i A number idicating the maximum length for the property.
     */
    maxLength(i: number): SchemaBuilderString;
    /**
     * Sets the minimum length for the property.
     * @param i A number idicating the minimum length for the property.
     */
    minLength(i: number): SchemaBuilderString;
    /**
     * Sets a regex pattern the this property must match.
     * @param i The regex pattern.
     */
    pattern(s: string): SchemaBuilderString;
    /**
     * A format to be validated
     * @param i The format to be validated, must be one of: date-time, email, hostname, ipv4,
     * ipv6, uri, uri-reference", uri-template, json-pointer.
     */
    format(s: Formats): SchemaBuilderString;
}
