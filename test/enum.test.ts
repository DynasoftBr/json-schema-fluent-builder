import { SchemaBuilder } from "../src";
import { expect } from "chai";
import "mocha";
import { CoreBuilder } from "../src/builders/interfaces/core-builder";

let schema = new SchemaBuilder().enum("test1", "test2");
describe("Enum test", () => {

    it("Property 'enum' should be equal ['test1', 'test2'].", () => {
        expect(schema.getSchema()).deep.include({ enum: ["test1", "test2"] });
    });

});