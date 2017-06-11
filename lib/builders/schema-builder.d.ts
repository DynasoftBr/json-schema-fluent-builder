import { SchemaBuilderObject, SchemaBuilderString, SchemaBuilderBool, SchemaBuilderArray, SchemaBuilderNumber, SchemaBuilderEnum, SchemaBuilderInt, SchemaBuilderGeneric } from "./";
import { SimpleTypes } from "../models";
export declare class SchemaBuilder {
    /**
     * Starts building a schema as an object.
     * @return SchemaBuilderObject. It allows to set validations for objects.
     */
    object(): SchemaBuilderObject;
    /**
     * Starts building a schema as an string.
     * @return SchemaBuilderString. It allows to set validations for strings.
     */
    string(): SchemaBuilderString;
    /**
     * Starts building a schema as an boolean.
     * @return SchemaBuilderBool. It allows to set validations for booleans.
     */
    bool(): SchemaBuilderBool;
    /**
     * Starts building a schema as an array.
     * @return SchemaBuilderArray. It allows to set validations for arrays.
     */
    array(): SchemaBuilderArray;
    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    int(): SchemaBuilderInt;
    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    number(): SchemaBuilderNumber;
    /**
     * Starts building a schema as an enum.
     * @return SchemaBuilderEnum. It allows to set validations for enums.
     */
    enum(...params: any[]): SchemaBuilderEnum;
    type(...types: SimpleTypes[]): SchemaBuilderGeneric;
    $ref(ref: string): SchemaBuilderGeneric;
}
