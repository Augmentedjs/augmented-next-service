describe("Given an Augmented Service Entity", () => {
  it("is defined", () => {
    expect(Service.Entity).to.be.not.undefined;
  });

  let e;
  beforeEach(() => {
    e = new Service.Entity();
  });
  afterEach(() => {
    e = null;
  });

  it("can check if empty", () => {
    expect(e.isEmpty()).to.be.true;
  });
});
