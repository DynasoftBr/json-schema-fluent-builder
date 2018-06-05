import { SimpleTypes, SchemaModel, Formats } from "../models/";
/**
 * Exposes methods all json schema validators.
 * @class
 */
export declare class FluentSchemaBuilder {
    schema: SchemaModel;
    constructor(schema: SchemaModel, ...types: SimpleTypes[]);
    $id(s: string): FluentSchemaBuilder;
    $schema(s: string): FluentSchemaBuilder;
    $ref(s: string): FluentSchemaBuilder;
    /**
     * Sets a description for the property.
     * @param desc A description for the property.
     */
    description(desc: string): FluentSchemaBuilder;
    /**
     * A title for the property.
     * @param t A title.
     */
    title(t: string): FluentSchemaBuilder;
    /**
     * Sets a default value for the property.
     * @param d A default value for the property.
     */
    default(d: any): FluentSchemaBuilder;
    /**
     * Sets if the current property is required
     */
    required(...requireds: string[]): FluentSchemaBuilder;
    allOf(val: SchemaModel[] | FluentSchemaBuilder[]): FluentSchemaBuilder;
    anyOf(val: SchemaModel[] | FluentSchemaBuilder[]): FluentSchemaBuilder;
    oneOf(val: SchemaModel[] | FluentSchemaBuilder[]): FluentSchemaBuilder;
    not(val: SchemaModel | FluentSchemaBuilder): FluentSchemaBuilder;
    definitions(name: string, schema: FluentSchemaBuilder): FluentSchemaBuilder;
    /**
     * @return The current schema.
     */
    getSchema(): SchemaModel;
    /**
     * Sets the maximum length for the property.
     * @param i A number idicating the maximum length for the property.
     */
    maxLength(i: number): FluentSchemaBuilder;
    /**
     * Sets the minimum length for the property.
     * @param i A number idicating the minimum length for the property.
     */
    minLength(i: number): FluentSchemaBuilder;
    /**
     * Sets a regex pattern the this property must match.
     * @param i The regex pattern.
     */
    pattern(s: string): FluentSchemaBuilder;
    /**
     * A format to be validated
     * @param i The format to be validated, must be one of: date-time, email, hostname, ipv4,
     * ipv6, uri, uri-reference", uri-template, json-pointer.
     */
    format(s: Formats): FluentSchemaBuilder;
    /**
     * Set the maximum of properties alowed in this object.
     * @param m A number indicating the maximum of properties alowed in this object.
     */
    maxProperties(m: number): FluentSchemaBuilder;
    /**
     * Set the minimum of properties alowed in this object.
     * @param m A number indicating the minimum of properties alowed in this object.
     */
    minProperties(m: number): FluentSchemaBuilder;
    /**
     * Sets the properties of this schema.
     * @param props An object the holds subschemas to validate properties of this schema.
     */
    props(props: object): FluentSchemaBuilder;
    prop(name: string, propSchema?: SchemaModel | FluentSchemaBuilder, required?: boolean): FluentSchemaBuilder;
    additionalProperties(val: boolean | SchemaModel | FluentSchemaBuilder): FluentSchemaBuilder;
    patternProperties(props: object): FluentSchemaBuilder;
    dependencies(val: object): FluentSchemaBuilder;
    /**
     * Set the maximum for this property.
     * @param i A number indicating the maximum for this property.
     * @param exclusive A boolean indicating if this maximum is exclusive. True for exclusive, otherwise false.
     */
    max(i: number, exclusive?: boolean): FluentSchemaBuilder;
    /**
     * Set the minimum for this property.
     * @param i A number indicating the minimum for this property.
     * @param exclusive A boolean indicating if this minimum is exclusive. True for exclusive, otherwise false.
     */
    min(i: number, exclusive?: boolean): FluentSchemaBuilder;
    multipleOf(val: number): FluentSchemaBuilder;
    /**
     * Set the maximum of items in an array.
     * An array instance is valid against "maxItems" if its size is less
     * than, or equal to, the value of this keyword.
     * @param { number } i The maximum of items alowed in this array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error }  The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    maxItems(i: number): FluentSchemaBuilder;
    /**
     * Set the minimum of items in an array.
     * An array instance is valid against "minItems" if its size is greater
     * than, or equal to, the value of this keyword.
     * @param { number } i The minimum of items in the array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error } The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    minItems(i: number): FluentSchemaBuilder;
    /**
     * Set if the array must have unique values.
     * @param { boolean } b A boolean the idicates if the array must have unique values.
     * If this keyword has boolean value false, the instance validates successfully.
     * If it has boolean value true, the instance validates successfully if all of its elements are unique.
     */
    uniqueItems(b: boolean): FluentSchemaBuilder;
    /**
     * Sets the validation of the items.
     * The value of "items" MUST be either an object or an array.  If it is
     * an object, this object MUST be a valid JSON Schema.  If it is an
     * array, items of this array MUST be objects, and each of these objects
     * MUST be a valid JSON Schema.
     * @param { CoreBuilder | SchemaModel | CoreBuilder[] | SchemaModel[] } item This parameter can
     * be a single CoreBuilder (SchemaBuilder), a single SchemaModel, or an array of SchamaBuilder or SchemaModel.
     * @param { CoreBuilder[] | SchemaModel[] } items An array of SchemaModel or CoreBuilder.
     * This parameter is a rest Parameter.
     */
    items(...items: (FluentSchemaBuilder | SchemaModel)[]): FluentSchemaBuilder;
    /**
     * Indicate if this array accepts additional items.
     * @param val A boolean indicating if the array accepts additional items,
     * or an SchemaModel indicating the validation of additional items.
     */
    additionalItems(val: boolean | FluentSchemaBuilder): FluentSchemaBuilder;
    enum(...params: any[]): FluentSchemaBuilder;
}
