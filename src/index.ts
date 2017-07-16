// import { SchemaBuilder } from "./builders/schema-builder";
import { SchemaBuilderGeneric } from "./builders";

let schema = new SchemaBuilderGeneric({}).definitions("teste", new SchemaBuilderGeneric({}));
console.log(schema.getSchema());
export { SchemaBuilder } from "./builders/schema-builder";