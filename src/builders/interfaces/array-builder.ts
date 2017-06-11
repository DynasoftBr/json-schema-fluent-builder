import { CoreBuilder } from "./";
import { SchemaModel } from "../../models";

export interface ArrayBuilder<T> extends CoreBuilder<T> {
    maxItems(i: number): T;
    minItems(i: number): T;
    uniqueItems(b: boolean): T;
    items(...items: (CoreBuilder<any> | SchemaModel)[]): T;
    additionalItems(val: boolean | CoreBuilder<any>): T;
}