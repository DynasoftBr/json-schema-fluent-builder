import { SimpleTypes, SchemaModel, Formats } from "../models/";

/**
 * Exposes methods all json schema validators.
 * @class
 */
export class FluentSchemaBuilder {

    constructor(public schema: SchemaModel, ...types: SimpleTypes[]) {
        schema = schema || {};

        if (types.length > 1)
            schema.type = types;
        else if (types.length == 1)
            schema.type = types[0];
    }

    $id(s: string): FluentSchemaBuilder {
        this.schema.id = s;
        return this;
    }

    $schema(s: string): FluentSchemaBuilder {
        this.schema.$schema = s;
        return this;
    }

    $ref(s: string): FluentSchemaBuilder {
        this.schema.$ref = s;
        return this;
    }

    /**
     * Sets a description for the property.
     * @param desc A description for the property.
     */
    description(desc: string): FluentSchemaBuilder {
        this.schema.description = desc;
        return this;
    }

    /**
     * A title for the property.
     * @param t A title.
     */
    title(t: string): FluentSchemaBuilder {
        this.schema.title = t;
        return this;
    }

    /**
     * Sets a default value for the property.
     * @param d A default value for the property.
     */
    default(d: any): FluentSchemaBuilder {
        this.schema.default = d;
        return this;
    }

    /**
     * Sets if the current property is required
     */
    required(...requireds: string[]): FluentSchemaBuilder {
        if (!this.schema.required)
            this.schema.required = [];

        this.schema.required = this.schema.required.concat(requireds);

        return this;
    }

    allOf(val: SchemaModel[] | FluentSchemaBuilder[]): FluentSchemaBuilder {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");

        if (val[0] instanceof FluentSchemaBuilder) {
            (<FluentSchemaBuilder[]>val).forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }

        this.schema.allOf = <SchemaModel[]>val;

        return <any>this;
    }

    anyOf(val: SchemaModel[] | FluentSchemaBuilder[]): FluentSchemaBuilder {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");

        if (val[0] instanceof FluentSchemaBuilder) {
            (<FluentSchemaBuilder[]>val).forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }

        this.schema.anyOf = <SchemaModel[]>val;

        return <any>this;
    }

    oneOf(val: SchemaModel[] | FluentSchemaBuilder[]): FluentSchemaBuilder {
        if (val.length === 0)
            throw new Error("Array must have at least one element.");

        if (val[0] instanceof FluentSchemaBuilder) {
            (<FluentSchemaBuilder[]>val).forEach((el, idx) => {
                val[idx] = el.getSchema();
            });
        }

        this.schema.oneOf = <SchemaModel[]>val;

        return <any>this;
    }

    not(val: SchemaModel | FluentSchemaBuilder): FluentSchemaBuilder {
        if (val instanceof FluentSchemaBuilder)
            this.schema.not = val.getSchema();
        else
            this.schema.not = <SchemaModel>val;

        return <any>this;
    }

    definitions(name: string, schema: FluentSchemaBuilder): FluentSchemaBuilder {

        if (!this.schema.definitions)
            this.schema.definitions = {};

        (<any>this.schema.definitions)[name] = schema.getSchema();
        return <any>this;
    }

    /**
     * @return The current schema.
     */
    getSchema(): SchemaModel {
        return this.schema;
    }

    /**
     * Sets the maximum length for the property.
     * @param i A number idicating the maximum length for the property.
     */
    maxLength(i: number): FluentSchemaBuilder {
        this.schema.maxLength = i;
        return this;
    }

    /**
     * Sets the minimum length for the property.
     * @param i A number idicating the minimum length for the property.
     */
    minLength(i: number): FluentSchemaBuilder {
        this.schema.minLength = i;
        return this;
    }

    /**
     * Sets a regex pattern the this property must match.
     * @param i The regex pattern.
     */
    pattern(s: string): FluentSchemaBuilder {
        this.schema.pattern = s;
        return this;
    }

    /**
     * A format to be validated
     * @param i The format to be validated, must be one of: date-time, email, hostname, ipv4,
     * ipv6, uri, uri-reference", uri-template, json-pointer.
     */
    format(s: Formats): FluentSchemaBuilder {
        this.schema.format = s;
        return this;
    }

    /**
     * Set the maximum of properties alowed in this object.
     * @param m A number indicating the maximum of properties alowed in this object.
     */
    maxProperties(m: number): FluentSchemaBuilder {
        this.schema.maxProperties = m;
        return this;
    }

    /**
     * Set the minimum of properties alowed in this object.
     * @param m A number indicating the minimum of properties alowed in this object.
     */
    minProperties(m: number): FluentSchemaBuilder {
        this.schema.minProperties = m;
        return this;
    }

    /**
     * Sets the properties of this schema.
     * @param props An object the holds subschemas to validate properties of this schema.
     */
    props(props: object): FluentSchemaBuilder {

        Object.keys(props).forEach(function (key, index) {
            if ((<any>props)[key] instanceof FluentSchemaBuilder) {
                (<any>props)[key] = (<FluentSchemaBuilder>(<any>props)[key]).getSchema();
            }
        });

        this.schema.properties = props;
        return this;
    }

    prop(name: string, propSchema?: SchemaModel | FluentSchemaBuilder, required?: boolean): FluentSchemaBuilder {
        if (!name || typeof name !== "string")
            throw new Error("Parameter 'name' must be a non empty string.");

        if (propSchema) {
            if (!this.schema.properties)
                this.schema.properties = {};

            if (propSchema instanceof FluentSchemaBuilder)
                (<any>this.schema.properties)[name] = propSchema.getSchema();
            else
                (<any>this.schema.properties)[name] = propSchema;
        }

        if (required)
            this.required(name);

        return this;
    }

    additionalProperties(val: boolean | SchemaModel | FluentSchemaBuilder): FluentSchemaBuilder {
        if (val instanceof FluentSchemaBuilder)
            this.schema.additionalProperties = val.getSchema();
        else
            this.schema.additionalProperties = val;

        return this;
    }

    patternProperties(props: object): FluentSchemaBuilder {
        Object.keys(props).forEach(function (key, index) {
            if ((<any>props)[key] instanceof FluentSchemaBuilder)
                (<any>props)[key] = (<FluentSchemaBuilder>(<any>props)[key]).getSchema();
        });

        this.schema.patternProperties = props;
        return this;
    }

    dependencies(val: object): FluentSchemaBuilder {
        this.schema.dependencies = val;
        return this;
    }

    /**
     * Set the maximum for this property.
     * @param i A number indicating the maximum for this property.
     * @param exclusive A boolean indicating if this maximum is exclusive. True for exclusive, otherwise false.
     */
    max(i: number, exclusive?: boolean): FluentSchemaBuilder {
        this.schema.maximum = i;
        if (exclusive)
            this.schema.exclusiveMaximum = exclusive;
        return this;
    }

    /**
     * Set the minimum for this property.
     * @param i A number indicating the minimum for this property.
     * @param exclusive A boolean indicating if this minimum is exclusive. True for exclusive, otherwise false.
     */
    min(i: number, exclusive?: boolean): FluentSchemaBuilder {
        this.schema.minimum = i;
        if (exclusive)
            this.schema.exclusiveMinimum = exclusive;
        return this;
    }

    multipleOf(val: number): FluentSchemaBuilder {
        if (val == undefined)
            throw new Error("The parameter 'val' is required.");

        if (val <= 0)
            throw new Error("The parameter 'val' must be greater than 0.");

        this.schema.multipleOf = val;
        return this;
    }

    /**
     * Set the maximum of items in an array.
     * An array instance is valid against "maxItems" if its size is less
     * than, or equal to, the value of this keyword.
     * @param { number } i The maximum of items alowed in this array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error }  The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    maxItems(i: number): FluentSchemaBuilder {
        if (isNaN(i) || i < 0)
            throw new Error("The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.");

        this.schema.maxItems = i;
        return this;
    }

    /**
     * Set the minimum of items in an array.
     * An array instance is valid against "minItems" if its size is greater
     * than, or equal to, the value of this keyword.
     * @param { number } i The minimum of items in the array. The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     * @throws { Error } The value of this keyword MUST be an integer.
     * This integer MUST be greater than, or equal to, 0.
     */
    minItems(i: number): FluentSchemaBuilder {
        if (isNaN(i) || i < 0)
            throw new Error("The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.");

        this.schema.minItems = i;
        return this;
    }

    /**
     * Set if the array must have unique values.
     * @param { boolean } b A boolean the idicates if the array must have unique values.
     * If this keyword has boolean value false, the instance validates successfully.
     * If it has boolean value true, the instance validates successfully if all of its elements are unique.
     */
    uniqueItems(b: boolean): FluentSchemaBuilder {
        this.schema.uniqueItems = b;
        return this;
    }

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
    items(...items: (FluentSchemaBuilder | SchemaModel)[]): FluentSchemaBuilder {

        let schemaItems: SchemaModel[] = [];

        // Iterate all items and add the generated schema to schemaItems var.
        items.forEach(itm => {
            if (itm instanceof FluentSchemaBuilder)
                schemaItems.push(itm.getSchema());
            else
                schemaItems.push(<any>itm);
        });

        // If items are be setting first time
        if (!this.schema.items) {
            // And the array contains only one SchemaModel, set '.items' property to single object.
            if (schemaItems.length == 1)
                this.schema.items = schemaItems[0];
            else
                this.schema.items = schemaItems;
        } else {
            // If the current value of schema.items is an array, concat it with the new items.
            if (Array.isArray(this.schema.items))
                schemaItems = this.schema.items.concat(schemaItems);
            else // In this case the value is an object and we add it to our new items array.
                schemaItems.unshift(this.schema.items);

            // Update the value of schema.items.
            this.schema.items = schemaItems;
        }

        return this;
    }

    /**
     * Indicate if this array accepts additional items.
     * @param val A boolean indicating if the array accepts additional items,
     * or an SchemaModel indicating the validation of additional items.
     */
    additionalItems(val: boolean | FluentSchemaBuilder): FluentSchemaBuilder {

        if (val instanceof FluentSchemaBuilder)
            this.schema.additionalItems = (<FluentSchemaBuilder>val).getSchema();
        else
            this.schema.additionalItems = val;

        return this;
    }

    enum(...params: any[]): FluentSchemaBuilder {
        this.schema.enum = params;
        return this;
    }
}