## A simple package to build json schemas

This package allows to fluent build schemas based on draft-04 to validate json objects.

## Getting started

    var SchemaBuilder = require("json-schema-fluent-builder").SchemaBuilder;

    var schema = new SchemaBuilder().object();
    schema.props({
        name: new SchemaBuilder().string(),
        age: new SchemaBuilder().int(),
        birthDate: new SchemaBuilder().string().format("date-time")
    }).required("name");

    console.log(schema.getSchema());
    // {
    //     "type": "object",
    //     "properties": {
    //         "name": {
    //         "type": "string"
    //         },
    //         "age": {
    //         "type": "integer"
    //         },
    //         "birthDate": {
    //         "type": "string",
    //         "format": "date-time"
    //         }
    //     },
    //     "required": [
    //         "name"
    //     ]
    // }