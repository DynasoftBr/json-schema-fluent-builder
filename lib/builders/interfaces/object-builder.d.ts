import { CoreBuilder } from "./";
import { SchemaModel } from "../../models";
export interface ObjectBuilder<T> extends CoreBuilder<T> {
    additionalProperties(val: boolean | SchemaModel): T;
    maxProperties(m: number): T;
    minProperties(m: number): T;
    props(props: object): T;
}
