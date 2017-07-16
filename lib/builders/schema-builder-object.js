"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("../models/");
/**
 * Exposes methods to validate object fields in json documents.
 * @class
 */
class SchemaBuilderObject extends _1.SchemaBuilderCore {
    /**
     * Set the maximum of properties alowed in this object.
     * @param m A number indicating the maximum of properties alowed in this object.
     */
    maxProperties(m) {
        this.schema.maxProperties = m;
        return this;
    }
    /**
     * Set the minimum of properties alowed in this object.
     * @param m A number indicating the minimum of properties alowed in this object.
     */
    minProperties(m) {
        this.schema.minProperties = m;
        return this;
    }
    /**
     * Sets the properties of this schema.
     * @param props An object the holds subschemas to validate properties of this schema.
     */
    props(props) {
        Object.keys(props).forEach(function (key, index) {
            if (props[key] instanceof _1.SchemaBuilderCore) {
                props[key] = props[key].getSchema();
            }
        });
        this.schema.properties = props;
        return this;
    }
    prop(name, propSchema, required) {
        if (!name || typeof name !== "string")
            throw new Error("Parameter 'name' must be a non empty string.");
        if (propSchema) {
            if (!this.schema.properties)
                this.schema.properties = {};
            if (propSchema instanceof _1.SchemaBuilderCore)
                this.schema.properties[name] = propSchema.getSchema();
            else
                this.schema.properties[name] = propSchema;
        }
        if (required)
            super.required(name);
        return this;
    }
    additionalProperties(val) {
        if (val instanceof _1.SchemaBuilderCore)
            this.schema.additionalProperties = val.getSchema();
        else
            this.schema.additionalProperties = val;
        return this;
    }
    patternProperties(props) {
        Object.keys(props).forEach(function (key, index) {
            if (props[key] instanceof _1.SchemaBuilderCore)
                props[key] = props[key].getSchema();
        });
        this.schema.patternProperties = props;
        return this;
    }
    dependencies(val) {
        this.schema.dependencies = val;
        return this;
    }
    constructor(schema) {
        super(schema);
        this.schema.type = _2.SimpleTypes.object;
    }
}
exports.SchemaBuilderObject = SchemaBuilderObject;
//# sourceMappingURL=schema-builder-object.js.map