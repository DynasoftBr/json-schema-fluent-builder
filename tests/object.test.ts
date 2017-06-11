import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";
import { CoreBuilder } from "../src/builders/interfaces/core-builder";

let schema = new SchemaBuilder().object();
describe("Object test", () => {

    it("Property 'type' should be equal 'object'.", () => {
        expect(schema.getSchema()).deep.include({ type: "object" });

    });

    it("Property 'minProperties' should be equal '1'.", () => {

        expect(schema.minProperties(1).getSchema()).deep.include({ minProperties: 1 });
    });

    it("Property 'maxProperties' should be equal '5'.", () => {
        expect(schema.maxProperties(5).getSchema()).deep.include({ maxProperties: 5 });
    });

    it("Add properties as object with SchemaModel and SchemaBuilder.", () => {
        schema.props({
            name: new SchemaBuilder().string().getSchema(),
            age: new SchemaBuilder().int()
        });
        expect(schema.getSchema()).deep.include({
            properties: {
                name: {
                    type: "string"
                },
                age: {
                    type: "integer"
                }
            }
        });
    });

    it("Add single property as required.", () => {
        schema.prop("email", new SchemaBuilder().string().getSchema(), true);
        expect(schema.getSchema()).deep.include({
            properties: {
                name: {
                    type: "string"
                },
                age: {
                    type: "integer"
                },
                email: {
                    type: "string"
                }
            }
        });
    });

    it("Property 'additionalProperties' as boolean.", () => {
        expect(schema.additionalProperties(true).getSchema())
            .deep.include({ additionalProperties: true });
    });

    it("Property 'additionalProperties' as SchemaModel.", () => {
        expect(schema.additionalProperties(new SchemaBuilder().string().getSchema()).getSchema())
            .deep.include({ additionalProperties: { type: "string" } });
    });

    it("Property 'additionalProperties' as SchemaBuilder.", () => {
        expect(schema.additionalProperties(new SchemaBuilder().string()).getSchema())
            .deep.include({ additionalProperties: { type: "string" } });
    });

    it("Property 'patternProperties' as SchemaModel.", () => {
        expect(schema.patternProperties({
            "*Name": new SchemaBuilder().string().getSchema()
        }).getSchema())
            .deep.include({ patternProperties: { "*Name": { type: "string" } } });
    });

    it("Property 'patternProperties' as SchemaBuilder.", () => {
        expect(schema.patternProperties({
            "*Name": new SchemaBuilder().string()
        }).getSchema())
            .deep.include({ patternProperties: { "*Name": { type: "string" } } });
    });

    it("Property 'dependencies'.", () => {
        expect(schema.dependencies({
            "exclusiveMaximum": ["maximum"]
        }).getSchema())
            .deep.include({ dependencies: { "exclusiveMaximum": ["maximum"] } });
    });
});