import { SchemaBuilderCore } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { ObjectBuilder, CoreBuilder } from "./interfaces";

/**
 * Exposes methods to validate object fields in json documents.
 * @class
 */
export class SchemaBuilderObject extends SchemaBuilderCore<SchemaBuilderObject>
    implements ObjectBuilder<SchemaBuilderObject> {

    /**
     * Set the maximum of properties alowed in this object.
     * @param m A number indicating the maximum of properties alowed in this object.
     */
    maxProperties(m: number): SchemaBuilderObject {
        this.schema.maxProperties = m;
        return this;
    }

    /**
     * Set the minimum of properties alowed in this object.
     * @param m A number indicating the minimum of properties alowed in this object.
     */
    minProperties(m: number): SchemaBuilderObject {
        this.schema.minProperties = m;
        return this;
    }

    /**
     * Sets the properties of this schema.
     * @param props An object the holds subschemas to validate properties of this schema.
     */
    props(props: object): SchemaBuilderObject {

        Object.keys(props).forEach(function (key, index) {
            if ((<any>props)[key] instanceof SchemaBuilderCore) {
                (<any>props)[key] = (<SchemaBuilderCore<any>>(<any>props)[key]).getSchema();
            }
        });

        this.schema.properties = props;
        return this;
    }

    prop(name: string, propSchema?: SchemaModel | CoreBuilder<any>, required?: boolean): SchemaBuilderObject {
        if (!name || typeof name !== "string")
            throw new Error("Parameter 'name' must be a non empty string.");

        if (propSchema) {
            if (!this.schema.properties)
                this.schema.properties = {};

            if (propSchema instanceof SchemaBuilderCore)
                (<any>this.schema.properties)[name] = propSchema.getSchema();
            else
                (<any>this.schema.properties)[name] = propSchema;
        }

        if (required)
            super.required(name);

        return this;
    }

    additionalProperties(val: boolean | SchemaModel | SchemaBuilderCore<any>): SchemaBuilderObject {
        if (val instanceof SchemaBuilderCore)
            this.schema.additionalProperties = val.getSchema();
        else
            this.schema.additionalProperties = val;

        return this;
    }

    patternProperties(props: object): SchemaBuilderObject {
        Object.keys(props).forEach(function (key, index) {
            if ((<any>props)[key] instanceof SchemaBuilderCore)
                (<any>props)[key] = (<SchemaBuilderCore<any>>(<any>props)[key]).getSchema();
        });

        this.schema.patternProperties = props;
        return this;
    }

    dependencies(val: object): SchemaBuilderObject {
        this.schema.dependencies = val;
        return this;
    }

    constructor(schema?: SchemaModel) {
        super(schema);

        this.schema.type = SimpleTypes.object;
    }
}