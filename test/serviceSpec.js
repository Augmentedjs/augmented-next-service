describe("Given an Augmented Service", () => {
  it("is defined", () => {
		expect(Service).to.be.not.undefined;
	});

	it("has a version defined", () => {
		expect(Service.VERSION).to.be.not.undefined;
	});
});
