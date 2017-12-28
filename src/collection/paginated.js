/**
* Paginated Collection Class - A Collection that handles pagination from client or server-side
* @constructor Augmented.PaginatedCollection
* @memberof Augmented
* @extends Augmented.Collection
*/
var paginatedCollection = Augmented.PaginatedCollection = augmentedCollection.extend({
  /**
  * Configuration for the pagination
  * @property paginationConfiguration
  * @memberof Augmented.PaginatedCollection
  * @private
  */
  paginationConfiguration: {
    currentPageParam: "page",
    pageSizeParam: "per_page"
  },
  /**
  * Page Size for the collection
  * @property pageSize
  * @memberof Augmented.PaginatedCollection
  * @private
  */
  pageSize: 20,
  /**
  * Current page for the collection
  * @property currentPage
  * @memberof Augmented.PaginatedCollection
  */
  currentPage: 1,
  /**
  * Total pages for the collection
  * @property totalPages
  * @memberof Augmented.PaginatedCollection
  */
  totalPages: 1,
  /**
  * Sets the number of items in a page
  * @method setPageSize
  * @memberof Augmented.PaginatedCollection
  * @param {number} size Number of items in each page
  */
  setPageSize: function(size) {
    if (size) {
      this.pageSize = size;
    }
    this.refresh();
  },
  /**
  * Sets the current page
  * @method setCurrentPage
  * @memberof Augmented.PaginatedCollection
  * @param {number} page Current page in collection
  */
  setCurrentPage: function(page) {
    if (!page) {
      page = 1;
    }
    this.currentPage = page;
    this.refresh();
  },
  /**
  * Sets pagination configuration
  * @method setPaginationConfiguration
  * @memberof Augmented.PaginatedCollection
  * @param {object} config pagination configuration
  * @private
  */
  setPaginationConfiguration: function(config) {
    this.paginationConfiguration = config;
  },
  /**
  * Collection.fetch - rewritten fetch method from Backbone.Collection.fetch
  * @method fetch
  * @memberof Augmented.PaginatedCollection
  * @borrows Collection.fetch
  */
  fetch: function(options) {
    options = (options) ? options : {};
    var data = (options.data || {});
    var p = this.paginationConfiguration;
    var d = {};
    d[p.currentPageParam] = this.currentPage;
    d[p.pageSizeParam] = this.pageSize;

    options.data = d;

    var xhr = Augmented.Collection.prototype.fetch.call(this, options);

    // TODO: parse header links to sync up vars

    return xhr;
  },
  /**
  * Moves to the next page
  * @method nextPage
  * @memberof Augmented.PaginatedCollection
  */
  nextPage: function() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.refresh();
    }
  },
  /**
  * Moves to the previous page
  * @method previousPage
  * @memberof Augmented.PaginatedCollection
  */
  previousPage: function() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
      this.refresh();
    }
  },
  /**
  * Goes to page
  * @method goToPage
  * @memberof Augmented.PaginatedCollection
  * @param {number} page Page to go to
  */
  goToPage: function(page) {
    if ((page) && (page < this.totalPages) && (page > 0)) {
      this.currentPage = page;
      this.refresh();
    }
  },
  /**
  * Moves to the first page
  * @method firstPage
  * @memberof Augmented.PaginatedCollection
  */
  firstPage: function() {
    this.currentPage = 1;
    this.refresh();
  },
  /**
  * Moves to the last page
  * @method lastPage
  * @memberof Augmented.PaginatedCollection
  */
  lastPage: function() {
    this.currentPage = this.totalPages;
    this.refresh();
  },
  /**
  * Refreshes the collection
  * @method refresh
  * @memberof Augmented.PaginatedCollection
  */
  refresh: function() {
    this.fetch();
  }
});
