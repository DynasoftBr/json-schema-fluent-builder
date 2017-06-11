import { SchemaBuilder } from "./builders/schema-builder";

let schema = new SchemaBuilder().array();

schema.items(new SchemaBuilder().int());

export { SchemaBuilder } from "./builders/schema-builder";