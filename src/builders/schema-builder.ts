import { SchemaBuilderObject, SchemaBuilderString, SchemaBuilderBool, SchemaBuilderArray, SchemaBuilderNumber, SchemaBuilderEnum } from "./"; // 
import { SchemaModel } from "../models";

export class SchemaBuilder {

    constructor(private schema?: SchemaModel, private name?: string, private parent?: SchemaModel) {
        if (!schema)
            this.schema = {};
    }

    /**
     * Starts building a schema as an object.
     * @return SchemaBuilderObject. It allows to set validations for objects.
     */
    object(): SchemaBuilderObject {
        return new SchemaBuilderObject(this.schema, this.name, this.parent);
    }

    /**
     * Starts building a schema as an string.
     * @return SchemaBuilderString. It allows to set validations for strings.
     */
    string(): SchemaBuilderString {
        return new SchemaBuilderString(this.schema, this.name, this.parent);
    }

    /**
     * Starts building a schema as an boolean.
     * @return SchemaBuilderBool. It allows to set validations for booleans.
     */
    bool(): SchemaBuilderBool {
        return new SchemaBuilderBool(this.schema, this.name, this.parent);
    }

    /**
     * Starts building a schema as an array.
     * @return SchemaBuilderArray. It allows to set validations for arrays.
     */
    array(): SchemaBuilderArray {
        return new SchemaBuilderArray(this.schema, this.name, this.parent);
    }

    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    int(): SchemaBuilderNumber {
        return new SchemaBuilderNumber(this.schema, this.name, this.parent);
    }

    /**
     * Starts building a schema as an enum.
     * @return SchemaBuilderEnum. It allows to set validations for enums.
     */
    enum(params: string[]): SchemaBuilderEnum {
        return new SchemaBuilderEnum(this.schema, params, this.name, this.parent);
    }
}
