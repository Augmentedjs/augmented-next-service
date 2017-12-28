import ResourceCollection from "./resourceCollection.js";

class PaginatedResourceCollection extends ResourceCollection {
  constructor(models, options) {
    super(models, options);
    this.paginationConfiguration = {
      currentPageParam: "page",
      pageSizeParam: "per_page"
    };
    this.pageSize = 20;
    this.currentPage = 1;
    this.totalPages = 1;
  };
  /**
   * Sets the number of items in a page
   * @method setPageSize
   * @memberof Augmented.PaginatedCollection
   * @param {number} size Number of items in each page
   */
  setPageSize(size) {
    if (size) {
      this.pageSize = size;
    }
    this.refresh();
  };
  /**
   * Sets the current page
   * @method setCurrentPage
   * @memberof Augmented.PaginatedCollection
   * @param {number} page Current page in collection
   */
  setCurrentPage(page) {
    if (!page) {
      page = 1;
    }
    this.currentPage = page;
    this.refresh();
  };
  /**
   * Sets pagination configuration
   * @method setPaginationConfiguration
   * @memberof Augmented.PaginatedCollection
   * @param {object} config pagination configuration
   * @private
   */
  setPaginationConfiguration(config) {
    this.paginationConfiguration = config;
  };
  /**
   * Collection.fetch - rewritten fetch method from Backbone.Collection.fetch
   * @method fetch
   * @memberof Augmented.PaginatedCollection
   * @borrows Collection.fetch
   */
  fetch(options) {
    options = (options) ? options : {};
    var data = (options.data || {});
    var p = this.paginationConfiguration;
    var d = {};
    d[p.currentPageParam] = this.currentPage;
    d[p.pageSizeParam] = this.pageSize;

    options.data = d;

    return super.fetch(options);
  };
  /**
   * Moves to the next page
   * @method nextPage
   * @memberof Augmented.PaginatedCollection
   */
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.refresh();
    }
  };
  /**
   * Moves to the previous page
   * @method previousPage
   * @memberof Augmented.PaginatedCollection
   */
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
      this.refresh();
    }
  };
  /**
   * Goes to page
   * @method goToPage
   * @memberof Augmented.PaginatedCollection
   * @param {number} page Page to go to
   */
  goToPage(page) {
    if ((page) && (page < this.totalPages) && (page > 0)) {
      this.currentPage = page;
      this.refresh();
    }
  };
  /**
   * Moves to the first page
   * @method firstPage
   * @memberof Augmented.PaginatedCollection
   */
  firstPage() {
    this.currentPage = 1;
    this.refresh();
  };
  /**
   * Moves to the last page
   * @method lastPage
   * @memberof Augmented.PaginatedCollection
   */
  lastPage() {
    this.currentPage = this.totalPages;
    this.refresh();
  };
  /**
   * Refreshes the collection
   * @method refresh
   * @memberof Augmented.PaginatedCollection
   */
  refresh() {
    this.fetch();
  };
};

export default PaginatedResourceCollection;
