import { SchemaBuilderCore, SchemaBuilderArray, SchemaBuilderBool, SchemaBuilderEnum, SchemaBuilderNumber, SchemaBuilderObject, SchemaBuilderString } from "./";
import { SimpleTypes, SchemaModel } from "../models/";
import { BoolBuilder, ArrayBuilder, EnumBuilder, NumberBuilder, ObjectBuilder, StringBuilder, CoreBuilder } from "./interfaces";

/**
 * Exposes methods all json schema validators.
 * @class
 */
export class SchemaBuilderGeneric extends SchemaBuilderCore<SchemaBuilderGeneric>
    implements ArrayBuilder<SchemaBuilderGeneric>, BoolBuilder<SchemaBuilderGeneric>,
    EnumBuilder<SchemaBuilderGeneric>, NumberBuilder<SchemaBuilderGeneric>,
    ObjectBuilder<SchemaBuilderGeneric>, StringBuilder<SchemaBuilderGeneric> {

    private arrayBuilder: SchemaBuilderArray;
    private boolBuilder: SchemaBuilderBool;
    private enumBuilder: SchemaBuilderEnum;
    private numberBuilder: SchemaBuilderNumber;
    private objectBuilder: SchemaBuilderObject;
    private stringBuilder: SchemaBuilderString;

    constructor(schema: SchemaModel, ...types: SimpleTypes[]) {
        schema = schema || {};
        super(schema);

        this.arrayBuilder = new SchemaBuilderArray(schema);
        this.boolBuilder = new SchemaBuilderBool(schema);
        this.enumBuilder = new SchemaBuilderEnum(schema);
        this.numberBuilder = new SchemaBuilderNumber(schema);
        this.objectBuilder = new SchemaBuilderObject(schema);
        this.stringBuilder = new SchemaBuilderString(schema);

        if (types.length > 0)
            this.schema.type = types;
    }

    maxLength(i: number): SchemaBuilderGeneric {
        this.stringBuilder.maxLength(i);
        return this;
    }

    minLength(i: number): SchemaBuilderGeneric {
        this.stringBuilder.minLength(i);
        return this;
    }

    pattern(s: string): SchemaBuilderGeneric {
        this.stringBuilder.pattern(s);
        return this;
    }

    format(s: string): SchemaBuilderGeneric {
        this.stringBuilder.format(s);
        return this;
    }

    additionalProperties(val: boolean | SchemaModel): SchemaBuilderGeneric {
        this.objectBuilder.additionalProperties(val);
        return this;
    }

    maxProperties(m: number): SchemaBuilderGeneric {
        this.objectBuilder.maxProperties(m);
        return this;
    }

    minProperties(m: number): SchemaBuilderGeneric {
        this.objectBuilder.minProperties(m);
        return this;
    }

    props(props: object): SchemaBuilderGeneric {
        this.objectBuilder.props(props);
        return this;
    }

    prop(name: string, propSchema?: SchemaModel | CoreBuilder<any>, required?: boolean): SchemaBuilderGeneric {
        this.objectBuilder.prop(name, propSchema, required);
        return this;
    }

    patternProperties(props: object): SchemaBuilderGeneric {
        this.objectBuilder.patternProperties(props);
        return this;
    }

    dependencies(val: object): SchemaBuilderGeneric {
        this.objectBuilder.dependencies(val);
        return this;
    }

    max(i: number, exclusive?: boolean): SchemaBuilderGeneric {
        this.numberBuilder.max(i, exclusive);
        return this;
    }

    min(i: number, exclusive?: boolean): SchemaBuilderGeneric {
        this.numberBuilder.min(i, exclusive);
        return this;
    }

    multipleOf(val: number): SchemaBuilderGeneric {
        this.numberBuilder.multipleOf(val);
        return this;
    }

    maxItems(i: number): SchemaBuilderGeneric {
        this.arrayBuilder.maxItems(i);
        return this;
    }

    minItems(i: number): SchemaBuilderGeneric {
        this.arrayBuilder.minItems(i);
        return this;
    }

    uniqueItems(b: boolean): SchemaBuilderGeneric {
        this.arrayBuilder.uniqueItems(b);
        return this;
    }

    items(...items: (CoreBuilder<any> | SchemaModel)[]): SchemaBuilderGeneric {
        this.arrayBuilder.items(...items);
        return this;
    }

    additionalItems(val: boolean | CoreBuilder<any>): SchemaBuilderGeneric {
        this.arrayBuilder.items(val);
        return this;
    }

    enum(...params: any[]): SchemaBuilderGeneric {
        this.enumBuilder(val);
        return this;
    }
}