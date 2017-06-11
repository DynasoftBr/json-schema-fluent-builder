"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_builder_1 = require("./builders/schema-builder");
let schema = new schema_builder_1.SchemaBuilder().array();
schema.items(new schema_builder_1.SchemaBuilder().int());
var schema_builder_2 = require("./builders/schema-builder");
exports.SchemaBuilder = schema_builder_2.SchemaBuilder;
//# sourceMappingURL=index.js.map