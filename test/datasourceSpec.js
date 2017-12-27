import Service from "../dist/service-next.js";
import expect from "expect";

describe("Given an Augmented Service DataSource", () => {
  it("is defined", () => {
      expect(Service.DataSource).toBeDefined();
  });
});

describe("Given an Augmented Service DataSourceFactory", () => {
  it("a factory is defined", () => {
    expect(Service.DataSourceFactory).toBeDefined();
  });

  describe("Given a DataSource instance", () => {
    it("is defined", () => {
      expect(Service.DataSource).toBeDefined();
    });
  });

  describe("Given a Memory DataSource", () => {
    let ds;
    beforeEach(() => {
      ds = Service.DataSourceFactory.getDatasource(Service.DataSourceFactory.Type.MEMORY, {});
    });
    afterEach(() => {
      ds = null;
    });

    it("can get a Memory DataSource instance", () => {
      expect(ds).toBeDefined();
      expect(ds instanceof Service.MemoryDataSource).toBeTruthy();
    });

    xit("can insert into the db", () => {
      ds.insert("monkey");
      expect(ds).toBeDefined();
    });
    xit("can insert into the db", () => {
      ds.insert("monkey");
      expect(ds).toBeDefined();
    });
    xit("can query into the db", () => {
      ds.query("monkey");
      expect(ds).toBeDefined();
    });
  });

  describe("Given a MongoDB DataSource", () => {
    let ds;
    beforeEach(() => {
      ds = Service.DataSourceFactory.getDatasource(Service.DataSourceFactory.Type.MONGODB, {});
    });
    afterEach(() => {
      ds = null;
    });

    it("can get a MongoDB DataSource instance", () => {
      expect(ds).toBeDefined();
      expect(ds instanceof Service.DataSource).toBeTruthy();
    });
  });

  describe("Given a SOLR DataSource", () => {
    let ds;
    beforeEach(() => {
      ds = Service.DataSourceFactory.getDatasource(Service.DataSourceFactory.Type.SOLR, {});
    });
    afterEach(() => {
      ds = null;
    });
    it("can get a SOLR DataSource instance", () => {
      expect(ds).toBeDefined();
      expect(ds instanceof Service.DataSource).toBeTruthy();
    });
  });
});
