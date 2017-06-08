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
    constructor() {
        this.schema = {};
    }
    id(s) {
        this.schema.id = s;
        return this;
    }
    $schema(s) {
        this.schema.$schema = s;
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
        if (this.schema.required)
            this.schema.required = [];
        this.schema.required.concat(requireds);
        this.schema.required.filter((item, index, input) => {
            return input.indexOf(item) == index;
        });
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