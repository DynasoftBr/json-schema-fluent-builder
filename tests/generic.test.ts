import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";
import { CoreBuilder } from "../src/builders/interfaces/core-builder";
import { SimpleTypes, Formats } from "../src/models/index";

let schema = new SchemaBuilder().type(SimpleTypes.string, SimpleTypes.integer);
describe("Generic schema test", () => {

    it("Property 'type' should be equal ['string', 'interger'].", () => {
        expect(schema.getSchema()).deep.include({ type: ["string", "integer"] });
    });

    it("Property 'maxLength' must be equal '10'.", () => {
        expect(schema.maxLength(10).getSchema()).deep.include({ maxLength: 10 });
    });

    it("Property 'minLength' must be equal '5'.", () => {
        expect(schema.minLength(5).getSchema()).deep.include({ minLength: 5 });
    });

    it("Property 'pattern' must be equal '[a-z]'.", () => {
        expect(schema.pattern("[a-z]").getSchema()).deep.include({ pattern: "[a-z]" });
    });

    it("Property 'format' must be equal 'date-time'.", () => {
        expect(schema.format(Formats.dateTime).getSchema()).deep.include({ format: "date-time" });
    });
    it("Property 'maximum' should be equal '10'.", () => {
        expect(schema.max(10).getSchema()).deep.include({ maximum: 10 });
    });

    it("Property 'maximum' with exclusive.", () => {
        expect(schema.max(10, true).getSchema()).deep.include({ maximum: 10, exclusiveMaximum: true });
    });

    it("Property 'minimum' should be equal '5'.", () => {
        expect(schema.min(5).getSchema()).deep.include({ minimum: 5 });
    });

    it("Property 'minimum' with exclusive.", () => {
        expect(schema.min(5, true).getSchema()).deep.include({ minimum: 5, exclusiveMinimum: true });
    });

    it("Property 'multipleOf' should be equal '1'.", () => {
        expect(schema.multipleOf(1).getSchema()).deep.include({ multipleOf: 1 });
    });

     it("Property uniqueItems should be equal 'true'.", () => {
        expect(schema.uniqueItems(true).getSchema()).deep.include({ uniqueItems: true });
    });

    it("Property 'maxItems' should be equal '5'.", () => {
        expect(schema.maxItems(5).getSchema()).deep.include({ maxItems: 5 });
    });

    it("Property 'minItems' should be equal '1'.", () => {
        expect(schema.minItems(1).getSchema()).deep.include({ minItems: 1 });
    });

    it("Property items as subSchema.", () => {
        expect(schema.items(new SchemaBuilder().number()).getSchema())
            .deep.include({ items: { type: "number" } });
    });

    it("Property items as an array of subSchema.", () => {
        let items = [new SchemaBuilder().number()];

        expect(schema.items(...items, new SchemaBuilder().string()).getSchema())
            .deep.include({ items: [{ type: "number" }, { type: "number" }, { type: "string" }] });
    });
});