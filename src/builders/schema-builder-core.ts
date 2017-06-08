import { SchemaModel } from "../models/";
import { CoreBuilder } from "./interfaces";

/**
 * Exposes core methods to validate json documents.
 * @class
 */
export abstract class SchemaBuilderCore<T> implements CoreBuilder<T> {
    protected schema: SchemaModel;

    id(s: string): T {
        this.schema.id = s;
        return <T><any>this;
    }

    $schema(s: string): T {
        this.schema.$schema = s;
        return <T><any>this;
    }

    /**
     * Sets a description for the property.
     * @param desc A description for the property.
     */
    description(desc: string): T {
        this.schema.description = desc;
        return <T><any>this;
    }

    /**
     * A title for the property.
     * @param t A title.
     */
    title(t: string): T {
        this.schema.title = t;
        return <T><any>this;
    }

    /**
     * Sets a default value for the property.
     * @param d A default value for the property.
     */
    default(d: any): T {
        this.schema.default = d;
        return <T><any>this;
    }

    /**
     * Sets if the current property is required
     */
    required(...requireds: string[]): T {
        if (this.schema.required)
            this.schema.required = [];

        this.schema.required.concat(requireds);
        this.schema.required.filter((item, index, input) => {
            return input.indexOf(item) == index;
        });

        return <T><any>this;
    }

    /**
     * @return The current schema.
     */
    getSchema(): SchemaModel {
        return this.schema;
    }

    /**
     * @param schema The object that represents a schema to stats,
     * it's usually set when building a new property for an object.
     * @param propName The name of the property that is building.
     * @param parent the parent object that owns this property.
     */
    protected constructor() {
        this.schema = {};
    }

    json() {
        return this.schema;
    }
}