"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const models_1 = require("../models");
class SchemaBuilder {
    /**
     * Starts building a schema as an object.
     * @return SchemaBuilderObject. It allows to set validations for objects.
     */
    object() {
        return new _1.FluentSchemaBuilder({}, models_1.SimpleTypes.object);
    }
    /**
     * Starts building a schema as an string.
     * @return SchemaBuilderString. It allows to set validations for strings.
     */
    string() {
        return new _1.FluentSchemaBuilder({}, models_1.SimpleTypes.string);
    }
    /**
     * Starts building a schema as an boolean.
     * @return SchemaBuilderBool. It allows to set validations for booleans.
     */
    bool() {
        return new _1.FluentSchemaBuilder({}, models_1.SimpleTypes.boolean);
    }
    /**
     * Starts building a schema as an array.
     * @return SchemaBuilderArray. It allows to set validations for arrays.
     */
    array() {
        return new _1.FluentSchemaBuilder({}, models_1.SimpleTypes.array);
    }
    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    int() {
        return new _1.FluentSchemaBuilder({}, models_1.SimpleTypes.integer);
    }
    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    number() {
        return new _1.FluentSchemaBuilder({}, models_1.SimpleTypes.number);
    }
    /**
     * Starts building a schema as an enum.
     * @return SchemaBuilderEnum. It allows to set validations for enums.
     */
    enum(...params) {
        return new _1.FluentSchemaBuilder({}).enum(...params);
    }
    type(...types) {
        return new _1.FluentSchemaBuilder({}, ...types);
    }
    $ref(ref) {
        return new _1.FluentSchemaBuilder({}).$ref(ref);
    }
}
exports.SchemaBuilder = SchemaBuilder;
//# sourceMappingURL=schema-builder.js.map