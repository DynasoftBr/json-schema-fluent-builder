import { jsfb } from "./";
import { SchemaBuilderCore } from "./builders";

let schema = jsfb.object();
schema.addProp("name").string().maxLength(10).minLength(5).required().default("leandro");
let c = JSON.stringify(schema.getSchema());
console.log(c);