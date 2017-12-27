import DataSource from "./datasource.js";
import DATASOURCE_STYLE from "./datasourceStyle.js";
import * as  Augmented from "augmentedjs-next";

const debug = (message) => {
  console.debug(message);
};

/**
 * The MongoDB datasource instance class
 * @constructor MongoDataSource
 * @implements {Augmented.Service.DataSource}
 * @augments Augmented.Service.DataSource
 * @memberof Augmented.Service
 */
class MongoDataSource extends DataSource {
  constructor(client) {
    super(client, DATASOURCE_STYLE.DATABASE, null);
  };

  setCollection(name) {
    //debug("setCollection: " + name);
    if (name && Augmented.isString(name)) {
      //debug("collection: " + name);
      this._collection = this._db.collection(name);
    } //else {
      //    debug("no collection set");
      //}
  };

  getConnection(url, collection) {
    this.connected = false;
    let that = this;
    if (this.client && !this.connected) {

      // unclear if the client supports arrow functions
      this._client.connect(url, function(err, db) {
        if(!err) {
          if (collection) {
            //debug("getConnection: collection: " + collection);
            that._collection = db.collection(collection);
          } //else {
            //debug("getConnection: no collection");
            //}
          that._db = db;
          that.url = url;
          that.connected = true;
          that.style = DATASOURCE_STYLE.DATABASE;
        } else {
          throw new Error(err);
        }
      });
      return true;
    } else {
      throw new Error("No client was passed.");
      //logger.error("no client was passed.");
    }
    return false;
  };

  closeConnection() {
    if (this._db && this.connected) {
      this._db.close();
      this.connected = false;
      this._db = null;
      this._collection = null;
    }
  };

  query(query, callback) {
    let ret = {};
    if (this._collection && this.connected) {
      //debug("The query: " + query);
      let myQuery = query;
      if (Augmented.isFunction(query)) {
        myQuery = query();
      }
      // unclear if the client supports arrow functions
      this._collection.find(myQuery).toArray(function(err, results) {
        if(!err) {
          //debug("Results: " + JSON.stringify(results));

          if (results) {
            ret = results;
          }
          if (callback) {
            callback(ret);
          } else {
            //debug("MongoDatasource, no callback");
          }
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error("no collection defined or not connected to db.");
      //logger.error("no collection defined or not connected to db.");
    }
    //debug("ret: " + JSON.stringify(ret));
    return ret;
  };

  insert(data, callback) {
    let ret = {};
    if (this._collection && this.connected) {
      if (Array.isArray(data)) {
        // unclear if the client supports arrow functions
        this._collection.insertMany(data, function(err, result) {
          if(!err) {
            //debug("Result: " + JSON.stringify(result));
            if (result) {
              ret = result;
              if (callback) {
                callback(ret);
              }
            }
          } else {
            throw new Error(err);
          }
        });
      } else {
        // unclear if the client supports arrow functions
        this._collection.insertOne(data, function(err, result) {
          if(!err) {
            //debug("Result: " + JSON.stringify(result));
            if (result) {
              ret = result;
              if (callback) {
                callback(ret);
              }
            }
          } else {
            throw new Error(err);
          }
        });
      }
    } else {
      throw new Error("no collection defined or not connected to db.");
      //logger.error("no collection defined or not connected to db.");
    }
    //debug("ret: " + JSON.stringify(ret));
    return ret;
  };

  update(query, data, callback) {
    if (this._collection && this.connected) {
      //debug("The query: " + query);
      let myQuery = query;
      if (Augmented.isFunction(query)) {
        myQuery = query();
      }
      // unclear if the client supports arrow functions
      this.collection.update(myQuery, data, function(err, result) {
        if(!err) {
          //debug("Result: " + JSON.stringify(result));
        } else {
          throw new Error(err);
        }
      });

      if (callback) {
        callback(data);
      }
    } else {
      throw new Error("no collection defined or not connected to db.");
      //logger.error("no collection defined or not connected to db.");
    }
    return data;
  };

  remove(query, callback) {
    let ret = {};
    if (this._collection && this.connected) {
      //debug("The query: " + query);
      let myQuery = query;
      if (Augmented.isFunction(query)) {
        myQuery = query();
      }
      // unclear if the client supports arrow functions
      this.collection.remove(myQuery, function(err, results) {
        if(!err) {
          if (callback) {
            callback();
          }
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error("no collection defined or not connected to db.");
      //logger.error("no collection defined or not connected to db.");
    }
    return ret;
  };
};

export default MongoDataSource;
