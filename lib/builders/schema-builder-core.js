"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Exposes core methods to validate json documents.
 * @class
 */
class SchemaBuilderCore {
    /**
     * @param schema The object that represents a schema to stats,
     * it's usually set when building a new property for an object.
     * @param propName The name of the property that is building.
     * @param parent the parent object that owns this property.
     */
    constructor(schema) {
        this.schema = schema;
        this.schema = schema || {};
    }
    // protected schema: SchemaModel;
    $id(s) {
        this.schema.id = s;
        return this;
    }
    $schema(s) {
        this.schema.$schema = s;
        return this;
    }
    $ref(s) {
        this.schema.$ref = s;
        return this;
    }
    /**
     * Sets a description for the property.
     * @param desc A description for the property.
     */
    description(desc) {
        this.schema.description = desc;
        return this;
    }
    /**
     * A title for the property.
     * @param t A title.
     */
    title(t) {
        this.schema.title = t;
        return this;
    }
    /**
     * Sets a default value for the property.
     * @param d A default value for the property.
     */
    default(d) {
        this.schema.default = d;
        return this;
    }
    /**
     * Sets if the current property is required
     */
    required(...requireds) {
        if (!this.schema.required)
            this.schema.required = [];
        this.schema.required = this.schema.required.concat(requireds);
        return this;
    }
    allOf(val) {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");
        if (val[0] instanceof SchemaBuilderCore) {
            val.forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }
        this.schema.allOf = val;
        return this;
    }
    anyOf(val) {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");
        if (val[0] instanceof SchemaBuilderCore) {
            val.forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }
        this.schema.anyOf = val;
        return this;
    }
    oneOf(val) {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");
        if (val[0] instanceof SchemaBuilderCore) {
            val.forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }
        this.schema.oneOf = val;
        return this;
    }
    not(val) {
        if (val instanceof SchemaBuilderCore)
            this.schema.not = val.getSchema();
        else
            this.schema.not = val;
        return this;
    }
    definations(val) {
        Object.keys(val).forEach(function (key, index) {
            if (val[key] instanceof SchemaBuilderCore)
                val[key] = val[key].getSchema();
        });
        this.schema.definations = val;
        return this;
    }
    /**
     * @return The current schema.
     */
    getSchema() {
        return this.schema;
    }
    json() {
        return this.schema;
    }
}
exports.SchemaBuilderCore = SchemaBuilderCore;
//# sourceMappingURL=schema-builder-core.js.map