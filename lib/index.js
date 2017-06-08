"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_builder_1 = require("./builders/schema-builder");
let schema = new schema_builder_1.SchemaBuilder().array();
let items = [new schema_builder_1.SchemaBuilder().enum("teste")];
schema.items(...items, new schema_builder_1.SchemaBuilder().int());
schema.items(new schema_builder_1.SchemaBuilder().number(), new schema_builder_1.SchemaBuilder().string());
schema.items(new schema_builder_1.SchemaBuilder().bool());
console.log(JSON.stringify(schema.getSchema()));
var schema_builder_2 = require("./builders/schema-builder");
exports.SchemaBuilder = schema_builder_2.SchemaBuilder;
//# sourceMappingURL=index.js.map