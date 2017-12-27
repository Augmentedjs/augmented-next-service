import * as Augmented from "augmentedjs-next";
import http from "http";
import https from "https";

/**
 * Resource class to handle REST from Node</br/>
 * <em>Note: URL property is required</em>
 *
 * @constructor Augmented.Service.Resource
 * @extends Augmented.Model
 * @memberof Augmented.Service
 */
class Resource extends Augmented.AbstractModel {
  constructor(attributes, options, ...args) {
    super(attributes, options, args);
    this.secure = false;
    this.id = "";
    this.url = "";
  };
  /**
  * @property {string} secure The secure flag
  * @memberof Augmented.Service.Resource
  */

  /**
  * @property {string} url The url for the REST Service
  * @memberof Augmented.Service.Resource
  */

  /**
  * @method initialize Initialize the model with needed wiring
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Resource
  */
  initialize(options) {
    //logger.log("initialize");
    if (options && options.url) {
      this.url = options.url;
    }
    // don't save this as data, but properties via the object base class options copy.
    this.unset("url");
    this.init(options);
  };
  /**
  * @method init Custom init method for the model (called at inititlize)
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Resource
  */
  init(options) {
  };
  /**
  * @method fetch Fetch the Resource
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Resource
  */
  fetch(options) {
    this.sync("read", options);
  };
  /**
  * @method sync Sync method to handle REST functions for the model
  * @param {string} method the operation to perform
  * @param {object} options Any options to pass
  * @memberof Augmented.Service.Resource
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
};

export default Resource;
