import { jsfb } from "../";
import { expect } from 'chai';
import "mocha";

describe("String test", () => {
    it("Should return an object { 'type': 'string' } ", () => {
        let schema = jsfb.string().getSchema();
        expect(schema).to.deep.equals({ type: "string" }, "Must be equal");
    });
});

describe("String test default", () => {
    it("Should have default property { type: 'string', default: 'test' } ", () => {
        let schema = jsfb.string().default("test").getSchema();
        expect(schema).to.deep.equals({ type: "string", default: "test" }, "Must be equal");
    });
});

describe("String test maxLength", () => {
    it("Should have maxLength property { type: 'string', default: 'test' } ", () => {
        let schema = jsfb.string().default("test").maxLength(10).getSchema();
        expect(schema).to.deep.equals({ type: "string", default: "test", maxLength: 10 }, "Must be equal");
    });
}); 