import Service from "../src/service.js";
import expect from "expect";

describe('Given an Augmented Collection needing pagination', () => {
  describe('Given an Augmented PaginationFactory', () => {
    let c;
    beforeEach(() => {

    });
    afterEach(() => {
      c = null;
    });
    it('has an augmented PaginationFactory', () => {
      expect(Service.PaginationFactory).toBeDefined();
    });

    it('can get a "github" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, Service.PAGINATION_API.GITHUB);
      expect(c instanceof Service.PaginatedResourceCollection).toBeTruthy();
      expect(c.paginationConfiguration.currentPageParam).toEqual('page');
    });

    it('can get a "solr" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, Service.PAGINATION_API.SOLR);
      expect(c instanceof Service.PaginatedResourceCollection).toBeTruthy();
      expect(c.paginationConfiguration.currentPageParam).toEqual('start');
    });

    it('can get a "database" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, Service.PAGINATION_API.DATABASE);
      expect(c instanceof Service.PaginatedResourceCollection).toBeTruthy();
      expect(c.paginationConfiguration.currentPageParam).toEqual('offset');
    });

    it('will not get a "nothing" API PaginatedCollection', () => {
      c = Service.PaginationFactory.getPaginatedCollection(Service.PaginatedResourceCollection, "nothing");
      expect(c instanceof Service.PaginatedResourceCollection).toBeFalsy();
    });
  });

  describe('Given an Service Collection', () => {
    let c;
    const defConfig = {
      currentPageParam: "p",
      pageSizeParam: "pp"
    },
    testUrl = "/tests/1",
    testMethod = "GET",
    testText = "Hello World",
    testStatus = 200,
    testHeaders = {ContentType: "text/plain", User: "Mufasa"},
    mockedResponse = null;

    beforeEach(() => {
      c = new Service.PaginatedResourceCollection();
    });

    afterEach(() => {
      c = null;
    });

    it('has an augmented PaginatedCollection', () => {
      expect(Service.PaginatedResourceCollection).toBeDefined();
    });

    it('can create an augmented PaginatedCollection', () => {
      expect(c instanceof Service.PaginatedResourceCollection).toBeTruthy();
    });

    it('has a configuration object', () => {
      expect(c.paginationConfiguration).not.toEqual({});
    });

    it('can set a configuration object', () => {
      c.setPaginationConfiguration(defConfig);
      expect(c.paginationConfiguration).toEqual(defConfig);
    });

    xit('can fetch', () => {
      c.url = "/tests/1";
      c.mock = true;
      var ret = c.fetch();
      expect(ret).toBeDefined();
    });
  });
});
