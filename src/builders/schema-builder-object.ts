import { SchemaBuilderCore } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { ObjectBuilder } from "./interfaces";

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
        this.schema.properties = props;
        return this;
    }

    prop(name: string, propSchema?: SchemaModel, required?: boolean) {
        if (!name || typeof name !== "string")
            throw new Error("Parameter 'name' must be a non empty string.");

        if (propSchema) {
            if (!this.schema.properties)
                this.schema.properties = {};

            (<any>this.schema.properties)[name] = propSchema;
        }

        if (required)
            super.required(name);
    }

    additionalProperties(val: boolean | SchemaModel): SchemaBuilderObject {
        this.schema.additionalProperties = val;
        return this;
    }

    constructor() {
        super();

        this.schema.type = SimpleTypes.object;
    }
}