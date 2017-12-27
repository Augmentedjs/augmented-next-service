import Service from "../dist/service-next.js";
import expect from "expect";

describe("Given a service logger", () => {
  it("is defined", () => {
		expect(Service.Logger).toBeDefined();
	});

	it("can create an instance", () => {
    const logger = new Service.Logger();
		expect(logger).toBeDefined();
	});
});
