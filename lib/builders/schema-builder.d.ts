import { FluentSchemaBuilder } from "./";
import { SimpleTypes } from "../models";
export declare class SchemaBuilder {
    /**
     * Starts building a schema as an object.
     * @return SchemaBuilderObject. It allows to set validations for objects.
     */
    object(): FluentSchemaBuilder;
    /**
     * Starts building a schema as an string.
     * @return SchemaBuilderString. It allows to set validations for strings.
     */
    string(): FluentSchemaBuilder;
    /**
     * Starts building a schema as an boolean.
     * @return SchemaBuilderBool. It allows to set validations for booleans.
     */
    bool(): FluentSchemaBuilder;
    /**
     * Starts building a schema as an array.
     * @return SchemaBuilderArray. It allows to set validations for arrays.
     */
    array(): FluentSchemaBuilder;
    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    int(): FluentSchemaBuilder;
    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    number(): FluentSchemaBuilder;
    /**
     * Starts building a schema as an enum.
     * @return SchemaBuilderEnum. It allows to set validations for enums.
     */
    enum(...params: any[]): FluentSchemaBuilder;
    type(...types: SimpleTypes[]): FluentSchemaBuilder;
    $ref(ref: string): FluentSchemaBuilder;
}
