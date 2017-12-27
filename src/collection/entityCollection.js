import * as  Augmented from "augmentedjs-next";

/**
 * Collection class to handle ORM to a datasource</br/>
 * <em>Note: Datasource property is required</em>
 *
 * @constructor Augmented.Service.EntityCollection
 * @memberof Augmented.Service
 */
class EntityCollection extends Augmented.AbstractCollection {
  constructor(models, options) {
    super(models, options);
    this.name = "collection";
    this._url = "";
    this.query = null;
    this.datasource = null;
  };
  /**
  * Collection name for us in a datasource or an identifier
  * @property {string} name The name of the collection
  * @memberof Augmented.Service.EntityCollection
  */

  /**
  * The query to use for the query - defaults to "id" selection
  * @method {any} query The query string to use for selection
  * @memberof Augmented.Service.EntityCollection
  */

  /**
  * @property {string} url The url for the datasource (if applicable)
  * @memberof Augmented.Service.EntityCollection
  */

  /**
  * @method getURL Set the url for the ResourceCollection
  * @returns {string|function} url The URL or a function to retun a URL object
  * @memberof Augmented.Service.ResourceCollection
  */
  get url() {
    return this._url;
  };
  /**
  * @method setURL Set the url for the ResourceCollection
  * @param {string|function} url The URL or a function to retun a URL object
  * @memberof Augmented.Service.ResourceCollection
  */
  set url(url) {
    this._url = url;
  };

  /**
  * @method initialize Initialize the model with needed wireing
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.EntityCollection
  */
  initialize(options) {
    if (options) {
      //logger.debug("calling initialize with options: " + JSON.stringify(options));

      if (options.datasource) {
        this.datasource = options.datasource;
      }
      if (options.query) {
        this.query = options.query;
      }
      if (options.name) {
        this.name = options.name;
      }
      if (options.url) {
        this.url = options.url;
      }
    }
    if (this.datasource && (this.url === "")) {
      this.url =  this.datasource.url;
    }

    this.setDataSourceCollection(this.name);

    this.init(options);
  };
  /**
  * @method init Custom init method for the model (called at initialize)
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.EntityCollection
  */
  init(options) {
  };
  /**
  * @property {Augmented.Service.DataSource} datasource Datasource instance
  * @memberof Augmented.Service.EntityCollection
  */

  /**
  * @method setDatasource Set the datasource for the Collection
  * @param {object} datasource The datasource object
  * @memberof Augmented.Service.EntityCollection
  */
  setDatasource(datasource) {
    this.datasource = datasource;
  };
  /**
  * @method sync Sync method to handle datasource functions for the Collection
  * @param {string} method the operation to perform
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.EntityCollection
  */
  sync(method, options) {
    //logger.debug("sync " + method);
    if (this.datasource) {
      let that = this;
      try {
        let j = {}, q;
        if (method === "create") {
          j = this.toJSON();
          this.datasource.insert(j, () => {
            that.reset(j);
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else if (method === "update") {
          j = this.toJSON();
          if (options && options.query) {
            q = options.query;
          } else {
            q = this.query;
          }

          this.datasource.update(q, j, () => {
            //that.reset(j);
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else if (method === "delete") {
          if (options && options.query) {
            q = options.query;
          } else {
            q = this.query;
          }
          this.datasource.remove(q, () => {
            that.reset();
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else {
          // read
          //logger.log("reading");

          if (options && options.query) {
            q = options.query;
          } else {
            q = this.query;
          }

          //logger.debug("query " + JSON.stringify(q));
          this.datasource.query(q, (data) => {
            that.reset(data);

            //logger.debug("returned: " + JSON.stringify(data));
            if (options && options.success && (typeof options.success === "function")) {
              options.success(data);
            }
          });
        }
      } catch(e) {
        if (options && options.error && (typeof options.error === "function")) {
          options.error(e);
        }
        //throw(e);
      }
    } //else {
      //logger.warn("no datasource");
      //}
      return {};
    };
    /**
    * @method fetch Fetch the entity
    * @param {object} options Any options to pass
    * @memberof Augmented.Service.EntityCollection
    */
    fetch(options) {
      this.sync("read", options);
    };
    /**
    * @method save Save the entity
    * @param {object} options Any options to pass
    * @memberof Augmented.Service.EntityCollection
    */
    save(options) {
      this.sync("create", options);
    };
    /**
    * @method update Update the entity
    * @param {object} options Any options to pass
    * @memberof Augmented.Service.EntityCollection
    */
    update(options) {
      this.sync("update", options);
    };
    /**
    * @method destroy Destroy the entity
    * @param {object} options Any options to pass
    * @memberof Augmented.Service.EntityCollection
    */
    destroy(options) {
      this.sync("delete", options);
    };
    setDataSourceCollection(name) {
      if (name && Augmented.isString(name) && this.datasource) {
        //logger.debug("service: setting collection name: " + name);
        this.name = name;
        this.datasource.setCollection(name);
      }
    }
  };

export default EntityCollection;
