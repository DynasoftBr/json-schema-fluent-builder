import { CoreBuilder } from "./";
import { SchemaModel } from "../../models";

export interface ObjectBuilder<T> extends CoreBuilder<T> {
    additionalProperties(val: boolean | SchemaModel): T;
    maxProperties(m: number): T;
    minProperties(m: number): T;
    props(props: object): T;
    prop(name: string, propSchema?: SchemaModel | CoreBuilder<any>, required?: boolean): T;
    patternProperties(props: object): T;
    dependencies(val: object): T;
}