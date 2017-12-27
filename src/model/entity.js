import * as Augmented from "augmentedjs-next";

/**
 * Entity class to handle ORM to a datasource</br/>
 * <em>Note: Datasource property is required</em>
 *
 * @constructor Augmented.Service.Entity
 * @extends Augmented.Model
 * @memberof Augmented.Service
 */
class Entity extends Augmented.AbstractModel {
  constructor(attributes, options, ...args) {
    super(attributes, options, args);
    this.id = "";
    this.url = "";
    this.query = {};
    this.collection = "collection";
    this.datasource = null;
  };
  /**
  * The query to use for the query - defaults to "id" selection
  * @method {any} query The query string to use for selection
  * @memberof Augmented.Service.Entity
  */

  /**
  * @property {string|function} url The url for the datasource (if applicable)
  * @memberof Augmented.Service.Entity
  */

  /**
  * @property {string} collection The collection for the datasource (if applicable)
  * @memberof Augmented.Service.Entity
  */

  /**
  * @method initialize Initialize the model with needed wireing
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Entity
  */
  initialize(options) {
    if (options) {
      if (options.collection) {
        this.collection = options.collection;
      }
      if (options.datasource) {
        this.datasource = options.datasource;
      }
      if (options.url) {
        this.url = this.datasource.url;
      }
      if (options.id) {
        this.id = options.id;
      }
      if (options.query) {
        this.query = options.query;
      }
    }
    // don't save this as data, but properties via the object base class options copy.
    this.unset("datasource");
    this.unset("url");
    this.unset("query");
    this.unset("collection");
    this.unset("id");
    if (this.datasource) {
      this.datasource.setCollection(this.collection);
    }
    this.init(options);
  };
  /**
  * @method init Custom init method for the model (called at inititlize)
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Entity
  */
  init(options) {

  };
  /**
  * @property {Augmented.Service.DataSource} datasource Datasource instance
  * @memberof Augmented.Service.Entity
  */

  /**
  * @method sync Sync method to handle datasource functions for the model
  * @param {string} method the operation to perform
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Entity
  */
  sync(method, options) {
    //logger.debug("sync " + method);
    if (this.datasource) {
      let that = this;
      try {
        let j = {}, q;
        if (method === "create") {
          j = that.attributes;
          this.datasource.insert(j, function() {
            that.reset(j);
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else if (method === "update") {
          j = that.attributes;

          //logger.debug("The object: " + JSON.stringify(j));

          if (options && options.query) {
            q = options.query;
          } else {
            q = this.query;
          }

          this.datasource.update(q, j, function() {
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
          this.datasource.remove(q, function() {
            that.reset();
            if (options && options.success && (typeof options.success === "function")) {
              options.success();
            }
          });
        } else {
          // read
          //logger.debug("reading");

          if (options && options.query) {
            q = options.query;
          } else {
            q = that.query;
          }

          let myQuery = q;
          if (Augmented.isFunction(q)) {
            let x = q();
            //logger.debug("x " + x);
            myQuery = x;
          }

          //logger.debug("query " + JSON.stringify(myQuery));
          this.datasource.query(myQuery, function(data) {
            if (data === null) {
              throw new Error("No Data Returned!");
            }
            if (Array.isArray(data) && data.length > 0) {
              that.reset(data[0]);
            } else if (Array.isArray(data) && data.length === 0) {
              that.reset();
            } else {
              that.reset(data);
            }

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
      //    logger.warn("no datasource");
      //}
    return {};
  };
  /**
  * @method fetch Fetch the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Entity
  */
  fetch(options) {
    this.sync("read", options);
  };
  /**
  * @method save Save the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Entity
  */
  save(options) {
    this.sync("create", options);
  };
  /**
  * @method update Update the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Entity
  */
  update(options) {
    this.sync("update", options);
  };
  /**
  * @method destroy Destroy the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Entity
  */
  destroy(options) {
    this.sync("delete", options);
  };
};

export default Entity;
