import { CoreBuilder } from "./";
export interface NumberBuilder<T> extends CoreBuilder<T> {
    max(i: number, exclusive?: boolean): T;
    min(i: number, exclusive?: boolean): T;
    multipleOf(val: number): T;
}
