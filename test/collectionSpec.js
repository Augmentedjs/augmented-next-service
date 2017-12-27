import Service from "../dist/service-next.js";
import expect from "expect";

describe("Given an Augmented Service Collections", () => {

    describe("Given an Augmented Service EntityCollection", () => {
        it("is defined", () => {
            expect(Service.EntityCollection).toBeDefined();
        });

        let e;
        beforeEach(() => {
            e = new Service.EntityCollection();
        });
        afterEach(() => {
            e = null;
        });

        it("can check if empty", () => {
            expect(e.isEmpty()).toBeTruthy();
        });

        it("supports setting a datasource", () => {
            e.setDatasource({});
            expect(e.datasource).toBeDefined();
        });
    });

    describe("Given an Augmented Service ResourceCollection", () => {
        it("is defined", () => {
            expect(Service.ResourceCollection).toBeDefined();
        });

        let e;
        beforeEach(() => {
            e = new Service.ResourceCollection();
        });
        afterEach(() => {
            e = null;
        });

        it("can check if empty", () => {
            expect(e.isEmpty()).toBeTruthy();
        });

        it("supports setting a URL", () => {
            e.url = "localhost";
            expect(e.url).toEqual("localhost");
        });
    });

});
