import { SimpleTypes } from "./simple-types";

export interface SchemaModel {
    id?: string;
    $schema?: string;
    $ref?: string;
    allOf?: SchemaModel[];
    anyOf?: SchemaModel[];
    oneOf?: SchemaModel[];
    not?: SchemaModel;
    definitions?: object;
    description?: string;
    title?: string;
    type?: SimpleTypes | SimpleTypes[];
    default?: any;
    enum?: string[];

    // Numbers validation;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;

    // String validation
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    format?: string;

    // Array validation
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    items?: SchemaModel | SchemaModel[];
    additionalItems?: boolean | SchemaModel;

    // Object validation
    additionalProperties?: boolean | SchemaModel;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    properties?: object;
    patternProperties?: object;
    dependencies?: object;
    if?: SchemaModel;
    then?: SchemaModel;
    else?: SchemaModel;
}