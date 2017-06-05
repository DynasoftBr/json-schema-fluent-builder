import { SchemaBuilderCore } from "./";
import { SchemaBuilder } from "./schema-builder";
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
     * Add a property to the current schema.
     * @param name Property's name.
     */
    addProp(name: string): SchemaBuilder {
        let prop = this.newProp(name);
        return new SchemaBuilder(prop, name, this.schema);
    }

    additionalProperties(val: boolean | SchemaModel): SchemaBuilderObject {
        this.schema.additionalProperties = val;
        return this;
    }

    constructor(schema?: SchemaModel, name?: string, parent?: SchemaModel) {
        super(schema, name, parent);

        this.schema.type = SimpleTypes.object;
    }

    /**
     * Add a proeprty to the current schema.
     * @param name Property's name.
     */
    private newProp(name: string): SchemaModel {
        if (!this.schema.properties)
            this.schema.properties = {};

        return (<any>this.schema.properties)[name] = <SchemaModel>{};
    }
}