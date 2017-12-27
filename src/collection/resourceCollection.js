import * as  Augmented from "augmentedjs-next";
import http from "http";
import https from "https";

/**
 * Collection class to handle REST</br/>
 *
 * @constructor Augmented.Service.ResourceCollection
 * @memberof Augmented.Service
 */
class ResourceCollection extends Augmented.AbstractCollection {
  constructor(models, options) {
    super(models, options);
    this.name = "collection";
    this._url = "";
  };
  /**
  * Collection name for us in a datasource or an identifier
  * @property {string} name The name of the collection
  * @memberof Augmented.Service.ResourceCollection
  */

  /**
  * @property {string} url The url for the datasource (if applicable)
  * @memberof Augmented.Service.ResourceCollection
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

  // need to sync
  /**
  * @method sync Sync method to handle REST functions for the model
  * @param {string} method the operation to perform
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.ResourceCollection
  */
  sync(method, options) {
    //logger.debug("sync " + method);
    if (this.url) {
      let that = this, success, error;
      if (options && options.success && (typeof options.success === "function")) {
        success = options.success;
      }
      if (options && options.error && (typeof options.error === "function")) {
        error = options.error;
      }

      try {
        let j = {}, q, u = (typeof this.url === "function") ? this.url() : this.url;
        if (method === "create") {
          j = that.attributes;
          let options = {
            path: u,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }
          };
          const h = (this.secure) ? https : http;

          let req = h.request(options, (res) => {
            //logger.debug("Status: " + res.statusCode);
            //logger.debug("Headers: " + JSON.stringify(res.headers));
            res.setEncoding("utf8");
            res.on("data", (body) => {
              //logger.debug("Body: " + body);
            });

            res.once("end", () => {
              if (success) {
                success(req.statusCode);
              }
            });
          });
          req.on("error", (e) => {
            //logger.error("problem with request: " + e.message);
            if (error) {
              error(500, e);
            }
          });
          // write data to request body
          req.write(that.toJSON());
          req.end();

        } else if (method === "update") {
          j = that.attributes;
          let options = {
            path: u,
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            }
          };

          const h = (this.secure) ? https : http;

          let req = h.request(options, (res) => {
            //logger.debug("Status: " + res.statusCode);
            //logger.debug("Headers: " + JSON.stringify(res.headers));
            res.setEncoding("utf8");
            res.on("data", (body) => {
              //logger.debug("Body: " + body);
            });

            res.once("end", () => {
              if (success) {
                success(req.statusCode, req.statusMessage);
              }
            });
          });
          req.on("error", (e) => {
            //logger.error("problem with request: " + e.message);
            if (error) {
              error(req.statusCode, e);
            }
          });
          // write data to request body
          req.write(that.toJSON());
          req.end();

        } else if (method === "delete") {
          let options = {
            path: u,
            method: "DELETE"
          };

          const h = (this.secure) ? https : http;

          let req = h.request(options, (res) => {
            //logger.debug("Status: " + res.statusCode);
            res.setEncoding("utf8");
            res.once("end", () => {
              if (success) {
                success(req.statusCode, req.statusMessage);
              }
            });
          });
          req.on("error", (e) => {
            //logger.error("problem with request: " + e.message);
            if (error) {
              error(500, e);
            }
          });
          req.end();

        } else {
          // read
          //logger.debug("reading from " + u);
          //logger.debug("have options? " + (options));

          const h = (this.secure) ? https : http;

          h.get(u, (res) => {
            let body = ""; // Will contain the final response
            // Received data is a buffer.
            // Adding it to our body
            res.on("data", (data) => {
              body += data;
            });
            // After the response is completed, parse it and log it to the console

            if (res.statusCode >= 200 && res.statusCode < 300) {
              res.once("end", () => {
                //logger.debug("Got data: " + body);
                let parsed = {};
                try {
                  parsed = JSON.parse(body);
                  that.set(parsed);
                  if (success) {
                    success(res.statusCode, res.statusMessage);
                  }
                } catch(e) {
                  //logger.error("Not JSON response, can't add to resource.  Exception: " + e);
                  if (error) {
                    error(res.statusCode, e);
                  }
                }
              });
            } else {
              //logger.error("Unsuccessfull Fetch - " + res.statusCode + " " + res.statusMessage);
              if (error) {
                error(res.statusCode, res.statusMessage);
              }
            }
          })
          // If any error has occured, log error to console
          .once("error", (e, options) => {
            //logger.error("Got error: " + e.message);
            if (error) {
              error(500, e);
            }
          });
        }
      } catch(e) {
        //logger.error("Got exception: " + e);
        if (error) {
          error(500, e);
        }
      }
    } else {
      //throw new Error("No url");
      //logger.warn();
    }
    return {};
  };

  /**
  * @method fetch Fetch the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.ResourceCollection
  */
  fetch(options) {
    this.sync("read", options);
  };
  /**
  * @method save Save the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.ResourceCollection
  */
  save(options) {
    this.sync("create", options);
  };
  /**
  * @method update Update the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.ResourceCollection
  */
  update(options) {
    this.sync("update", options);
  };
  /**
  * @method destroy Destroy the entity
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.ResourceCollection
  */
  destroy(options) {
    this.sync("delete", options);
  };
};

export default ResourceCollection;
