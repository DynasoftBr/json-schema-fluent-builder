import { SchemaModel } from "../models/";
import { CoreBuilder } from "./interfaces";
/**
 * Exposes core methods to validate json documents.
 * @class
 */
export declare abstract class SchemaBuilderCore<T> implements CoreBuilder<T> {
    protected schema: SchemaModel;
    id(s: string): T;
    $schema(s: string): T;
    /**
     * Sets a description for the property.
     * @param desc A description for the property.
     */
    description(desc: string): T;
    /**
     * A title for the property.
     * @param t A title.
     */
    title(t: string): T;
    /**
     * Sets a default value for the property.
     * @param d A default value for the property.
     */
    default(d: any): T;
    /**
     * Sets if the current property is required
     */
    required(...requireds: string[]): T;
    /**
     * @return The current schema.
     */
    getSchema(): SchemaModel;
    /**
     * @param schema The object that represents a schema to stats,
     * it's usually set when building a new property for an object.
     * @param propName The name of the property that is building.
     * @param parent the parent object that owns this property.
     */
    protected constructor();
    json(): SchemaModel;
}
