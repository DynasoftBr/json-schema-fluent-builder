import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";

let schema = new SchemaBuilder().number();
describe("Number test", () => {

    it("Property 'type' should be equal 'number'.", () => {
        expect(schema.getSchema()).deep.include({ type: "number" });
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

    it("Full check", () => {
        expect(schema.getSchema()).to.be.deep.equal({
            type: "number",
            maximum: 10,
            exclusiveMaximum: true,
            minimum: 5,
            exclusiveMinimum: true,
            multipleOf: 1
        })
    });
});