import { SchemaBuilderCore } from "./";
import { NumberBuilder } from "./interfaces";
/**
 * Exposes methods to validate number fields in json documents.
 * @class
 */
export declare class SchemaBuilderNumber extends SchemaBuilderCore<SchemaBuilderNumber> implements NumberBuilder<SchemaBuilderNumber> {
    constructor();
    /**
     * Set the maximum for this property.
     * @param i A number indicating the maximum for this property.
     * @param exclusive A boolean indicating if this maximum is exclusive. True for exclusive, otherwise false.
     */
    max(i: number, exclusive?: boolean): this;
    /**
     * Set the minimum for this property.
     * @param i A number indicating the minimum for this property.
     * @param exclusive A boolean indicating if this minimum is exclusive. True for exclusive, otherwise false.
     */
    min(i: number, exclusive?: boolean): this;
    multipleOf(val: number): SchemaBuilderNumber;
}
