import { SchemaModel } from "../../models";

export interface CoreBuilder<T> {
    $id(s: string): T;
    $schema(s: string): T;
    $ref(s: string): T;
    allOf(val: SchemaModel[] | CoreBuilder<any>[]): T;
    anyOf(val: SchemaModel[] | CoreBuilder<any>[]): T;
    oneOf(val: SchemaModel[] | CoreBuilder<any>[]): T;
    not(val: SchemaModel | CoreBuilder<any>): T;
    definations(val: object): T;
    description(desc: string): T;
    title(t: string): T;
    default(d: any): T;
    required(...requireds: string[]): T;
    getSchema(): SchemaModel;
}