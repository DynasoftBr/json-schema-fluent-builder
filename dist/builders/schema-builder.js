"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./"); // 
class SchemaBuilder {
    constructor(schema, name, parent) {
        this.schema = schema;
        this.name = name;
        this.parent = parent;
        if (!schema)
            this.schema = {};
    }
    /**
     * Starts building a schema as an object.
     * @return SchemaBuilderObject. It allows to set validations for objects.
     */
    object() {
        return new _1.SchemaBuilderObject(this.schema, this.name, this.parent);
    }
    /**
     * Starts building a schema as an string.
     * @return SchemaBuilderString. It allows to set validations for strings.
     */
    string() {
        return new _1.SchemaBuilderString(this.schema, this.name, this.parent);
    }
    /**
     * Starts building a schema as an boolean.
     * @return SchemaBuilderBool. It allows to set validations for booleans.
     */
    bool() {
        return new _1.SchemaBuilderBool(this.schema, this.name, this.parent);
    }
    /**
     * Starts building a schema as an array.
     * @return SchemaBuilderArray. It allows to set validations for arrays.
     */
    array() {
        return new _1.SchemaBuilderArray(this.schema, this.name, this.parent);
    }
    /**
     * Starts building a schema as an integers.
     * @return SchemaBuilderInt. It allows to set validations for integers.
     */
    int() {
        return new _1.SchemaBuilderNumber(this.schema, this.name, this.parent);
    }
    /**
     * Starts building a schema as an enum.
     * @return SchemaBuilderEnum. It allows to set validations for enums.
     */
    enum(params) {
        return new _1.SchemaBuilderEnum(this.schema, params, this.name, this.parent);
    }
}
exports.SchemaBuilder = SchemaBuilder;
//# sourceMappingURL=schema-builder.js.map