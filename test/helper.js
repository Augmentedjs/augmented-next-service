const Service = require("../dist/augmented-next-service.js");

console.debug(Service);

global.Service = Service;
const chai = require("chai");
global.chai = chai;
global.expect = chai.expect;
