import { SchemaBuilder } from "../src";
import { SchemaModel, Formats } from "../src/models";
import { expect } from "chai";
import "mocha";

let schema = new SchemaBuilder().string();
describe("String test", () => {

    it("Property 'type' must be equal 'string'.", () => {
        expect(schema.getSchema()).deep.include({ type: "string" });
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

    it("Full check.", () => {
        expect(schema.getSchema()).deep.equals({
            type: "string",
            maxLength: 10,
            minLength: 5,
            pattern: "[a-z]",
            format: "date-time"
        });
    });
});