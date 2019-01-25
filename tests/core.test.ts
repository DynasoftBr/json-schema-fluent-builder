import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";

let schema = new SchemaBuilder().string();
describe("Core parameters test", () => {

    it("Property 'description' should be equal 'Core test'.", () => {
        expect(schema.description("Core test").getSchema()).deep.include({ description: "Core test" });
    });

    it("Property '$schema' should be equal 'http://test.com'.", () => {
        expect(schema.$schema("http://test.com").getSchema()).deep.include({ $schema: "http://test.com" });
    });

    it("Property 'allOf' as 'SchemaModel'.", () => {
        expect(schema.allOf([
            new SchemaBuilder().bool().getSchema(),
            new SchemaBuilder().string().getSchema()
        ]).getSchema()).deep.include({
            allOf: [
                { type: "boolean" },
                { type: "string" }
            ]
        });
    });

    it("Property 'allOf' as 'SchemaBuilder'.", () => {
        expect(schema.allOf([
            new SchemaBuilder().bool(),
            new SchemaBuilder().string()
        ]).getSchema()).deep.include({
            allOf: [
                { type: "boolean" },
                { type: "string" }
            ]
        });
    });

    it("Property 'anyOf' as 'SchemaBuilder'.", () => {
        expect(schema.anyOf([
            new SchemaBuilder().bool(),
            new SchemaBuilder().string()
        ]).getSchema()).deep.include({
            anyOf: [
                { type: "boolean" },
                { type: "string" }
            ]
        });
    });

    it("Property 'anyOf' as 'SchemaModel'.", () => {
        expect(schema.anyOf([
            new SchemaBuilder().bool().getSchema(),
            new SchemaBuilder().string().getSchema()
        ]).getSchema()).deep.include({
            anyOf: [
                { type: "boolean" },
                { type: "string" }
            ]
        });
    });

    it("Property 'oneOf' as 'SchemaBuilder'.", () => {
        expect(schema.oneOf([
            new SchemaBuilder().bool(),
            new SchemaBuilder().string()
        ]).getSchema()).deep.include({
            oneOf: [
                { type: "boolean" },
                { type: "string" }
            ]
        });
    });

    it("Property 'oneOf' as 'SchemaModel'.", () => {
        expect(schema.oneOf([
            new SchemaBuilder().bool().getSchema(),
            new SchemaBuilder().string().getSchema()
        ]).getSchema()).deep.include({
            oneOf: [
                { type: "boolean" },
                { type: "string" }
            ]
        });
    });

    it("Property 'not' as 'SchemaModel'.", () => {
        expect(schema.not(
            new SchemaBuilder().bool().getSchema()).getSchema()).deep.include({
                not: {
                    type: "boolean"
                }
            });
    });

    it("Property 'definations' as 'SchemaBuilder'.", () => {
        expect(schema.not(new SchemaBuilder().bool()).getSchema()).deep.include({
            not: {
                type: "boolean"
            }
        });
    });

    it("Property 'definitions' as 'SchemaModel'.", () => {
        expect(schema.definitions("positiveInteger", new SchemaBuilder().int().min(0))
            .getSchema()).deep.include({
                definitions: {
                    positiveInteger: {
                        type: "integer",
                        minimum: 0
                    }
                }
            });
    });

    it("Property 'required' should be equals ['name', 'sureName'].", () => {
        expect(schema.required("name", "sureName").getSchema()).deep.include({
            required: ["name", "sureName"]
        });
    });

    it("Add more required.", () => {
        expect(schema.required("email").getSchema()).deep.include({
            required: ["name", "sureName", "email"]
        });
    });
});