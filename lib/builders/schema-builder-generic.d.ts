import { SchemaBuilderCore } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { BoolBuilder, ArrayBuilder, EnumBuilder, NumberBuilder, ObjectBuilder, StringBuilder, CoreBuilder } from "./interfaces";
/**
 * Exposes methods all json schema validators.
 * @class
 */
export declare class SchemaBuilderGeneric extends SchemaBuilderCore<SchemaBuilderGeneric> implements ArrayBuilder<SchemaBuilderGeneric>, BoolBuilder<SchemaBuilderGeneric>, EnumBuilder<SchemaBuilderGeneric>, NumberBuilder<SchemaBuilderGeneric>, ObjectBuilder<SchemaBuilderGeneric>, StringBuilder<SchemaBuilderGeneric> {
    private arrayBuilder;
    private boolBuilder;
    private enumBuilder;
    private numberBuilder;
    private objectBuilder;
    private stringBuilder;
    constructor(schema: SchemaModel, ...types: SimpleTypes[]);
    maxLength(i: number): SchemaBuilderGeneric;
    minLength(i: number): SchemaBuilderGeneric;
    pattern(s: string): SchemaBuilderGeneric;
    format(s: string): SchemaBuilderGeneric;
    additionalProperties(val: boolean | SchemaModel): SchemaBuilderGeneric;
    maxProperties(m: number): SchemaBuilderGeneric;
    minProperties(m: number): SchemaBuilderGeneric;
    props(props: object): SchemaBuilderGeneric;
    prop(name: string, propSchema?: SchemaModel | CoreBuilder<any>, required?: boolean): SchemaBuilderGeneric;
    patternProperties(props: object): SchemaBuilderGeneric;
    dependencies(val: object): SchemaBuilderGeneric;
    max(i: number, exclusive?: boolean): SchemaBuilderGeneric;
    min(i: number, exclusive?: boolean): SchemaBuilderGeneric;
    multipleOf(val: number): SchemaBuilderGeneric;
    maxItems(i: number): SchemaBuilderGeneric;
    minItems(i: number): SchemaBuilderGeneric;
    uniqueItems(b: boolean): SchemaBuilderGeneric;
    items(...items: (CoreBuilder<any> | SchemaModel)[]): SchemaBuilderGeneric;
    additionalItems(val: boolean | CoreBuilder<any>): SchemaBuilderGeneric;
    enum(...params: any[]): SchemaBuilderGeneric;
}
