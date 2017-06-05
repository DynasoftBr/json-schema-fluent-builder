"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const chai_1 = require("chai");
require("mocha");
describe("String test", () => {
    it("Should return an object { 'type': 'string' } ", () => {
        let schema = _1.jsfb.string().getSchema();
        chai_1.expect(schema).to.deep.equals({ type: "string" }, "Must be equal");
    });
});
describe("String test default", () => {
    it("Should have default property { type: 'string', default: 'test' } ", () => {
        let schema = _1.jsfb.string().default("test").getSchema();
        chai_1.expect(schema).to.deep.equals({ type: "string", default: "test" }, "Must be equal");
    });
});
describe("String test maxLength", () => {
    it("Should have maxLength property { type: 'string', default: 'test' } ", () => {
        let schema = _1.jsfb.string().default("test").maxLength(10).getSchema();
        chai_1.expect(schema).to.deep.equals({ type: "string", default: "test", maxLength: 10 }, "Must be equal");
    });
});
//# sourceMappingURL=string.test.js.map