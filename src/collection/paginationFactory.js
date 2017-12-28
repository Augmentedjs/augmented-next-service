import PAGINATION_API from "./paginationAPIType.js";

/**
 * Pagination factory for returning pagination collections of an API type
 * @namespace Augmented.PaginationFactory
 * @memberof Augmented
 */
class PaginationFactory {
  constructor() {
    this.type = PAGINATION_API;
  };

  /**
   * Get a pagination collection of type
   * @method getPaginatedCollection
   * @memberof Augmented.Service.PaginationFactory
   * @param {Augmented.Service.PaginationFactory.type} Collection The collection class to enrich
   * @param {Augmented.Service.PaginationFactory.type} apiType The API type to return an instance of
   * @param {object} args Collection arguments
   * @returns {Collection} Returns a new collection with pagination configured
   */
  static getPaginatedCollection(Collection, apiType, data) {
    const arg = (data) ? data : {};
    let collection = null;

    if (!apiType) {
      apiType = PAGINATION_API.GITHUB;
    }
    if (apiType === PAGINATION_API.GITHUB) {
      collection = new Collection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "page",
        pageSizeParam: "per_page"
      });
    } else if (apiType === PAGINATION_API.SOLR) {
      collection = new Collection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "start",
        pageSizeParam: "rows"
      });
    } else if (apiType === PAGINATION_API.DATABASE) {
      collection = new Collection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "offset",
        pageSizeParam: "limit"
      });
    }
    return collection;
  };
};

export default PaginationFactory;
