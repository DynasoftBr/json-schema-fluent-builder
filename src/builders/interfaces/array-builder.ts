import { CoreBuilder } from "./";
import { SchemaBuilder } from "../../builders/schema-builder";
import { SchemaModel } from "../../models";

export interface ArrayBuilder<T> extends CoreBuilder<T> {
    maxItems(i: number): T;
    minItems(i: number): T;
    uniqueItems(b: boolean): T;
    items(): SchemaBuilder;
    itemsArray(items: SchemaModel[]): T;
    additionalItems(val: boolean | SchemaModel): T;
}