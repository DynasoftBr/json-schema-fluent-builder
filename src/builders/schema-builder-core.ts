import { SchemaModel } from "../models/";
import { CoreBuilder } from "./interfaces";

/**
 * Exposes core methods to validate json documents.
 * @class
 */
export abstract class SchemaBuilderCore<T> implements CoreBuilder<T> {
    // protected schema: SchemaModel;

    $id(s: string): T {
        this.schema.id = s;
        return <T><any>this;
    }

    $schema(s: string): T {
        this.schema.$schema = s;
        return <T><any>this;
    }

    $ref(s: string): T {
        this.schema.$ref = s;
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
        if (!this.schema.required)
            this.schema.required = [];

        this.schema.required = this.schema.required.concat(requireds);

        return <T><any>this;
    }

    allOf(val: SchemaModel[] | CoreBuilder<any>[]): T {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");

        if (val[0] instanceof SchemaBuilderCore) {
            (<CoreBuilder<any>[]>val).forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }

        this.schema.allOf = <SchemaModel[]>val;

        return <any>this;
    }

    anyOf(val: SchemaModel[] | CoreBuilder<any>[]): T {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");

        if (val[0] instanceof SchemaBuilderCore) {
            (<CoreBuilder<any>[]>val).forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }

        this.schema.anyOf = <SchemaModel[]>val;

        return <any>this;
    }

    oneOf(val: SchemaModel[] | CoreBuilder<any>[]): T {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");

        if (val[0] instanceof SchemaBuilderCore) {
            (<CoreBuilder<any>[]>val).forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }

        this.schema.oneOf = <SchemaModel[]>val;

        return <any>this;
    }

    not(val: SchemaModel | CoreBuilder<any>): T {
        if (val instanceof SchemaBuilderCore)
            this.schema.not = val.getSchema();
        else
            this.schema.not = <SchemaModel>val;

        return <any>this;
    }

    definations(val: object): T {
        Object.keys(val).forEach(function (key, index) {
            if ((<any>val)[key] instanceof SchemaBuilderCore)
                (<any>val)[key] = (<SchemaBuilderCore<any>>(<any>val)[key]).getSchema();
        });

        this.schema.definations = val;

        return <any>this;
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
    protected constructor(protected schema?: SchemaModel) {
        this.schema = schema || {};
    }

    json() {
        return this.schema;
    }
}