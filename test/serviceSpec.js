import Service from "../src/service.js";
import expect from "expect";

describe("Given an Augmented Service", () => {
  it("is defined", () => {
		expect(Service).toBeDefined();
	});

	it("has a version defined", () => {
		expect(Service.VERSION).toBeDefined();
	});
});
