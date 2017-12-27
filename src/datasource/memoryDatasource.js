import DataSource from "./datasource.js";
import DATASOURCE_STYLE from "./datasourceStyle.js";

class MemoryDataSource extends DataSource {
  constructor() {
    super(null, DATASOURCE_STYLE.MEMORY, null);
    this._db = {};
  };

  getConnection(url, collection) {
    this.connected = true;
    if (collection) {
      this._collection = collection;
    }

    this.url = url;

    return true;
  };

  closeConnection() {
    if (this._db && this.connected) {
      this.connected = false;
      this._db = null;
      this._collection = null;
    }
  };

  setCollection(name) {
    if (name && Augmented.isString(name)) {
      this._collection = name;
      this._db[this._collection] = {};
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
      const obj = this._db[this._collection];
      ret = obj[myQuery];
      if (callback) {
        callback(ret);
      }
    }
    return ret;
  };

  insert(data, callback) {
    let ret = {};
    if (this._collection && this.connected) {
      const obj = this._db[this._collection];
      obj[this._collection] = data;
      ret = data;
      if (callback) {
        callback(da);
      }
    } else {
      throw new Error("no collection defined or not connected.");
    }
    return ret;
  };



};


export default MemoryDataSource;
