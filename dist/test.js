"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
let schema = _1.jsfb.object();
schema.addProp("name").string().maxLength(10).minLength(5).required().default("leandro");
let c = JSON.stringify(schema.getSchema());
console.log(c);
//# sourceMappingURL=test.js.map