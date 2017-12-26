const Service = require("../src/service.js");

xdescribe("Given an Augmented Service Collections", function() {

    describe("Given an Augmented Service EntityCollection", function() {
        it("is defined", function() {
            expect(Service.EntityCollection).toBeDefined();
        });

        var e;
        beforeEach(function() {
            e = new Service.EntityCollection();
        });
        afterEach(function() {
            e = null;
        });

        it("can check if empty", function() {
            expect(e.isEmpty()).toBeTruthy();
        });

        it("supports setting a datasource", function() {
            e.setDatasource({});
            expect(e.datasource).toBeDefined();
        });
    });

    describe("Given an Augmented Service ResourceCollection", function() {
        it("is defined", function() {
            expect(Service.ResourceCollection).toBeDefined();
        });

        var e;
        beforeEach(function() {
            e = new Service.ResourceCollection();
        });
        afterEach(function() {
            e = null;
        });

        it("can check if empty", function() {
            expect(e.isEmpty()).toBeTruthy();
        });

        it("supports setting a URL", function() {
            e.setURL("localhost");
            expect(e.url).toEqual("localhost");
        });
    });

});
