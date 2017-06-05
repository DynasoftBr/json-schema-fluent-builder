import { SchemaBuilder } from "../../builders/schema-builder";
import { CoreBuilder } from "./";

export interface ObjectBuilder<T> extends CoreBuilder<T> {
    maxProperties(m: number): T;
    minProperties(m: number): T;
    addProp(name: string): SchemaBuilder
}