import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";
import { CoreBuilder } from "../src/builders/interfaces/core-builder";

let schema = new SchemaBuilder().array();
describe("Array test", () => {

    it("Property 'type' should be equal 'array'.", () => {
        expect(schema.getSchema()).deep.include({ type: "array" });
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
