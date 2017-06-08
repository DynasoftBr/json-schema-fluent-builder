import { CoreBuilder } from "./";
export interface ArrayBuilder<T> extends CoreBuilder<T> {
    maxItems(i: number): T;
    minItems(i: number): T;
    uniqueItems(b: boolean): T;
    items(item: CoreBuilder<any> | CoreBuilder<any>[], ...items: CoreBuilder<any>[]): T;
    additionalItems(val: boolean | CoreBuilder<any>): T;
}
