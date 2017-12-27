import Service from "../dist/service-next.js";
import expect from "expect";

describe("Given an Augmented Service Entity", () => {
  it("is defined", () => {
    expect(Service.Entity).toBeDefined();
  });

  let e;
  beforeEach(() => {
    e = new Service.Entity();
  });
  afterEach(() => {
    e = null;
  });

  it("can check if empty", () => {
    expect(e.isEmpty()).toBeTruthy();
  });
});
