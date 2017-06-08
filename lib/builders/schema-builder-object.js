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
        this.schema.properties = props;
        return this;
    }
    prop(name, propSchema, required) {
        if (!name || typeof name !== "string")
            throw new Error("Parameter 'name' must be a non empty string.");
        if (propSchema) {
            if (!this.schema.properties)
                this.schema.properties = {};
            this.schema.properties[name] = propSchema;
        }
        if (required)
            super.required(name);
    }
    additionalProperties(val) {
        this.schema.additionalProperties = val;
        return this;
    }
    constructor() {
        super();
        this.schema.type = _2.SimpleTypes.object;
    }
}
exports.SchemaBuilderObject = SchemaBuilderObject;
//# sourceMappingURL=schema-builder-object.js.map