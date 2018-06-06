import { FluentSchemaBuilder } from "./";
import { SimpleTypes } from "../models";

export class SchemaBuilder {

    /**
     * Starts building a schema as an object.
     * @return SchemaBuilderObject. It allows to set validations for objects.
     */
    object(): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}, SimpleTypes.object);
    }

    /**
     * Starts building a schema as an string.
     * @return SchemaBuilderString. It allows to set validations for strings.
     */
    string(): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}, SimpleTypes.string);
    }

    /**
     * Starts building a schema as an boolean.
     * @return SchemaBuilderBool. It allows to set validations for booleans.
     */
    bool(): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}, SimpleTypes.boolean);
    }

    /**
     * Starts building a schema as an array.
     * @return SchemaBuilderArray. It allows to set validations for arrays.
     */
    array(): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}, SimpleTypes.array);
    }

    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    int(): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}, SimpleTypes.integer);
    }

    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    number(): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}, SimpleTypes.number);
    }

    /**
     * Starts building a schema as an enum.
     * @return SchemaBuilderEnum. It allows to set validations for enums.
     */
    enum(...params: any[]): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}).enum(...params);
    }

    type(...types: SimpleTypes[]): FluentSchemaBuilder {
        return new FluentSchemaBuilder({}, ...types);
    }

    $ref(ref: string) {
        return new FluentSchemaBuilder({}).$ref(ref);
    }
}
