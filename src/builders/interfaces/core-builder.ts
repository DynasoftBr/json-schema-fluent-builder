import { SchemaModel } from "../../models";

export interface CoreBuilder<T> {
    description(desc: string): T;
    title(t: string): T;
    default(d: any): T;
    required(): T;
    getSchema(): SchemaModel;
}