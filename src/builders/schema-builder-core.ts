import { SchemaModel, SimpleTypes } from "../models/";
import { CoreBuilder } from "./interfaces";
import { SchemaBuilder } from "./schema-builder";

/**
 * Exposes core methods to validate json documents.
 * @class
 */
export abstract class SchemaBuilderCore<T> implements CoreBuilder<T> {
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
    required(): T {
        if (!this.propName)
            throw new Error("Required can be only called from object's property.");

        if (!this.parent.required)
            this.parent.required = [];

        this.parent.required.push(this.propName);
        return <T><any>this;
    }

    /**
     * @return The current schema.
     */
    getSchema(): SchemaModel {
        return this.schema;
    }

    /**
     * 
     * @param schema The object that represents a schema to stats, 
     * it's usually set when building a new property for an object.
     * @param propName The name of the property that is building.
     * @param parent the parent object that owns this property.
     */
    protected constructor(protected schema?: SchemaModel, protected propName?: string, private parent?: SchemaModel) {
        this.schema = schema || {};
    }
}