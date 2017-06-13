"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
/**
 * Exposes methods all json schema validators.
 * @class
 */
class SchemaBuilderGeneric extends _1.SchemaBuilderCore {
    constructor(schema, ...types) {
        schema = schema || {};
        super(schema);
        this.arrayBuilder = new _1.SchemaBuilderArray(schema);
        this.boolBuilder = new _1.SchemaBuilderBool(schema);
        this.enumBuilder = new _1.SchemaBuilderEnum(schema);
        this.numberBuilder = new _1.SchemaBuilderNumber(schema);
        this.objectBuilder = new _1.SchemaBuilderObject(schema);
        this.stringBuilder = new _1.SchemaBuilderString(schema);
        if (types.length > 0)
            this.schema.type = types;
    }
    maxLength(i) {
        this.stringBuilder.maxLength(i);
        return this;
    }
    minLength(i) {
        this.stringBuilder.minLength(i);
        return this;
    }
    pattern(s) {
        this.stringBuilder.pattern(s);
        return this;
    }
    format(s) {
        this.stringBuilder.format(s);
        return this;
    }
    additionalProperties(val) {
        this.objectBuilder.additionalProperties(val);
        return this;
    }
    maxProperties(m) {
        this.objectBuilder.maxProperties(m);
        return this;
    }
    minProperties(m) {
        this.objectBuilder.minProperties(m);
        return this;
    }
    props(props) {
        this.objectBuilder.props(props);
        return this;
    }
    prop(name, propSchema, required) {
        this.objectBuilder.prop(name, propSchema, required);
        return this;
    }
    patternProperties(props) {
        this.objectBuilder.patternProperties(props);
        return this;
    }
    dependencies(val) {
        this.objectBuilder.dependencies(val);
        return this;
    }
    max(i, exclusive) {
        this.numberBuilder.max(i, exclusive);
        return this;
    }
    min(i, exclusive) {
        this.numberBuilder.min(i, exclusive);
        return this;
    }
    multipleOf(val) {
        this.numberBuilder.multipleOf(val);
        return this;
    }
    maxItems(i) {
        this.arrayBuilder.maxItems(i);
        return this;
    }
    minItems(i) {
        this.arrayBuilder.minItems(i);
        return this;
    }
    uniqueItems(b) {
        this.arrayBuilder.uniqueItems(b);
        return this;
    }
    items(...items) {
        this.arrayBuilder.items(...items);
        return this;
    }
    additionalItems(val) {
        this.arrayBuilder.items(val);
        return this;
    }
}
exports.SchemaBuilderGeneric = SchemaBuilderGeneric;
//# sourceMappingURL=schema-builder-generic.js.map