import { SchemaModel } from "../../models";
export interface CoreBuilder<T> {
    id(s: string): T;
    $schema(s: string): T;
    description(desc: string): T;
    title(t: string): T;
    default(d: any): T;
    required(): T;
    getSchema(): SchemaModel;
}
