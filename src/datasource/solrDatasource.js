import DataSource from "./datasource.js";
import DATASOURCE_STYLE from "./datasourceStyle.js";

/**
 * The SOLR datasource instance class - WIP
 * @constructor SOLRDataSource
 * @implements {Augmented.Service.DataSource}
 * @augments Augmented.Service.DataSource
 * @memberof Augmented.Service
 */
class SOLRDataSource extends DataSource {
  constructor(client) {
    super(client, DATASOURCE_STYLE.DATABASE, null);
  };

  getConnection(url, collection) {
    this.connected = false;
    let that = this;
    if (this._client && !this.connected) {
      this._client.ping(function(err, db){
        if(!err) {
          //logger.debug("collection: " + collection);
          that._collection = collection;
          that._db = db;
          that.url = url;
          that.connected = true;
          that.style = DATASOURCE_STYLE.SEARCH;
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error("No client was passed.");
    }
    return this.connected;
  };

  closeConnection() {
    if (this._db && this.connected) {
      this.connected = false;
      this._db = null;
      this._collection = null;
    }
  };

  query(query, callback) {
    let ret = {};

    return ret;
  };

  insert(data, callback) {
    let ret = {};

    return ret;
  };

  update(query, data, callback) {

    return data;
  };

  remove(query, callback) {
    let ret = {};

    return ret;
  };
};

export default SOLRDataSource;
