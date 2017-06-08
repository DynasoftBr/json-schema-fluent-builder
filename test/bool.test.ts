import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";
import { CoreBuilder } from "../src/builders/interfaces/core-builder";

let schema = new SchemaBuilder().bool();
describe("Bool test", () => {

    it("Property 'type' should be equal 'boolean'.", () => {
        expect(schema.getSchema()).deep.include({ type: "boolean" });
    });
    
});