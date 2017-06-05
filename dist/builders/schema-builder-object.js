"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const schema_builder_1 = require("./schema-builder");
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
     * Add a property to the current schema.
     * @param name Property's name.
     */
    addProp(name) {
        let prop = this.newProp(name);
        return new schema_builder_1.SchemaBuilder(prop, name, this.schema);
    }
    additionalProperties(val) {
        this.schema.additionalProperties = val;
        return this;
    }
    constructor(schema, name, parent) {
        super(schema, name, parent);
        this.schema.type = _2.SimpleTypes.object;
    }
    /**
     * Add a proeprty to the current schema.
     * @param name Property's name.
     */
    newProp(name) {
        if (!this.schema.properties)
            this.schema.properties = {};
        return this.schema.properties[name] = {};
    }
}
exports.SchemaBuilderObject = SchemaBuilderObject;
//# sourceMappingURL=schema-builder-object.js.map