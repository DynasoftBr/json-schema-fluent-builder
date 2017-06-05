import { CoreBuilder } from "./";

export interface IntBuilder<T> extends CoreBuilder<T> {
    max(i: number, exclusive?: boolean): T;
    min(i: number, exclusive?: boolean): T;
}