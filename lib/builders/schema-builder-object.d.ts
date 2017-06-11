import { SchemaBuilderCore } from "./";
import { SchemaModel } from "../models/";
import { ObjectBuilder, CoreBuilder } from "./interfaces";
/**
 * Exposes methods to validate object fields in json documents.
 * @class
 */
export declare class SchemaBuilderObject extends SchemaBuilderCore<SchemaBuilderObject> implements ObjectBuilder<SchemaBuilderObject> {
    /**
     * Set the maximum of properties alowed in this object.
     * @param m A number indicating the maximum of properties alowed in this object.
     */
    maxProperties(m: number): SchemaBuilderObject;
    /**
     * Set the minimum of properties alowed in this object.
     * @param m A number indicating the minimum of properties alowed in this object.
     */
    minProperties(m: number): SchemaBuilderObject;
    /**
     * Sets the properties of this schema.
     * @param props An object the holds subschemas to validate properties of this schema.
     */
    props(props: object): SchemaBuilderObject;
    prop(name: string, propSchema?: SchemaModel | CoreBuilder<any>, required?: boolean): SchemaBuilderObject;
    additionalProperties(val: boolean | SchemaModel | SchemaBuilderCore<any>): SchemaBuilderObject;
    patternProperties(props: object): SchemaBuilderObject;
    dependencies(val: object): SchemaBuilderObject;
    constructor(schema?: SchemaModel);
}
