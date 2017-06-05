import { CoreBuilder } from "./";
import { SchemaBuilder } from "../../builders/schema-builder";

export interface ArrayBuilder<T> extends CoreBuilder<T> {
    maxItems(i: number): T;
    minItems(i: number): T;
    uniqueItems(b: boolean): T;
    items(): SchemaBuilder;
}