import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";
import { CoreBuilder } from "../src/builders/interfaces/core-builder";

let schema = new SchemaBuilder().int();
describe("Int test", () => {

    it("Property 'type' should be equal 'integer'.", () => {
        expect(schema.getSchema()).deep.include({ type: "integer" });
    });

});