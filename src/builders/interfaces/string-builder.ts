import { Formats } from "../../models";
import { CoreBuilder } from "./";

export interface StringBuilder<T> extends CoreBuilder<T> {
    maxLength(i: number): T;
    minLength(i: number): T;
    pattern(s: string): T;
    format(s: Formats): T;
}