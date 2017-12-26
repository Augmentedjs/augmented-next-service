const Service = require("../src/service");

xdescribe("Given an Augmented Service Entity", function() {
    it("is defined", function() {
        expect(Service.Entity).toBeDefined();
    });

    var e;
    beforeEach(function() {
        e = new Service.Entity();
    });
    afterEach(function() {
        e = null;
    });

    it("can check if empty", function() {
        expect(e.isEmpty()).toBeTruthy();
    });
});
