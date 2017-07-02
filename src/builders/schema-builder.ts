import {
    SchemaBuilderObject, SchemaBuilderString, SchemaBuilderBool,
    SchemaBuilderArray, SchemaBuilderNumber, SchemaBuilderEnum, SchemaBuilderInt, SchemaBuilderGeneric
} from "./";
import { SimpleTypes } from "../models";

export class SchemaBuilder {

    /**
     * Starts building a schema as an object.
     * @return SchemaBuilderObject. It allows to set validations for objects.
     */
    object(): SchemaBuilderObject {
        return new SchemaBuilderObject();
    }

    /**
     * Starts building a schema as an string.
     * @return SchemaBuilderString. It allows to set validations for strings.
     */
    string(): SchemaBuilderString {
        return new SchemaBuilderString();
    }

    /**
     * Starts building a schema as an boolean.
     * @return SchemaBuilderBool. It allows to set validations for booleans.
     */
    bool(): SchemaBuilderBool {
        return new SchemaBuilderBool();
    }

    /**
     * Starts building a schema as an array.
     * @return SchemaBuilderArray. It allows to set validations for arrays.
     */
    array(): SchemaBuilderArray {
        return new SchemaBuilderArray();
    }

    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    int(): SchemaBuilderInt {
        return new SchemaBuilderInt();
    }

    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    number(): SchemaBuilderNumber {
        return new SchemaBuilderNumber();
    }

    /**
     * Starts building a schema as an enum.
     * @return SchemaBuilderEnum. It allows to set validations for enums.
     */
    enum(...params: any[]): SchemaBuilderEnum {
        return new SchemaBuilderEnum({}).enum(...params);
    }

    type(...types: SimpleTypes[]): SchemaBuilderGeneric {
        return new SchemaBuilderGeneric({}, ...types);
    }

    $ref(ref: string) {
        return new SchemaBuilderGeneric({}).$ref(ref);
    }
}
