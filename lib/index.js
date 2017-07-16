"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { SchemaBuilder } from "./builders/schema-builder";
const builders_1 = require("./builders");
let schema = new builders_1.SchemaBuilderGeneric({}).definitions("teste", new builders_1.SchemaBuilderGeneric({}));
console.log(schema.getSchema());
var schema_builder_1 = require("./builders/schema-builder");
exports.SchemaBuilder = schema_builder_1.SchemaBuilder;
//# sourceMappingURL=index.js.map