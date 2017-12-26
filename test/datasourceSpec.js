const Service = require("../src/service");

xdescribe("Given an Augmented Service DataSourceFactory", function() {
    it("a factory is defined", function() {
        expect(Service.DataSourceFactory).toBeDefined();
    });

    describe("Given a DataSource instance", function() {
        it("is defined", function() {
            expect(Service.DataSource).toBeDefined();
        });
    });

    describe("Given a Memory DataSource", function() {
        var ds;
        beforeEach(function() {
            ds = Service.DataSourceFactory.getDatasource(
                Service.DataSourceFactory.Type.Memory, {});
        });
        afterEach(function() {
            ds = null;
        });

        it("can get a Memory DataSource instance", function() {
            expect(ds).toBeDefined();
            expect(ds instanceof Service.MemoryDataSource).toBeTruthy();
        });

        it("can insert into the db", function() {
            ds.insert("monkey");

            expect(ds).toBeDefined();
        });
    });

    describe("Given a MongoDB DataSource", function() {
        var ds;
        beforeEach(function() {
            ds = Service.DataSourceFactory.getDatasource(
                Service.DataSourceFactory.Type.MongoDB, {});
        });
        afterEach(function() {
            ds = null;
        });

        it("can get a MongoDB DataSource instance", function() {
            expect(ds).toBeDefined();
            expect(ds instanceof Service.DataSource).toBeTruthy();
        });
    });

    describe("Given a SOLR DataSource", function() {
        var ds;
        beforeEach(function() {
            ds = Service.DataSourceFactory.getDatasource(
                Service.DataSourceFactory.Type.SOLR, {});
        });
        afterEach(function() {
            ds = null;
        });
        it("can get a SOLR DataSource instance", function() {
            expect(ds).toBeDefined();
            expect(ds instanceof Service.DataSource).toBeTruthy();
        });
    });
});
