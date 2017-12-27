import DATASOURCE_STYLE from "./datasourceStyle.js";

/**
 * The datasource object for use as an interface for a datasource
 * @interface DataSource
 * @memberof Augmented.Service
 */
class DataSource {
    constructor(client, style, url) {
      this.connected = false;
      this.style = (style) ? style : DATASOURCE_STYLE.DATABASE;
      this._client = (client) ? client : null;
      this.url = (url) ? url : "";
      this._db = null;
      this._collection = null;
    };

  /**
   * @property {object} client The client for use in the DataSource
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @property {string} url The url for the datasource (if applicable)
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @property {object} db The database (or simular) for the datasource (if applicable)
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @property {object} collection The collection for use in the DataSource
   * @memberof Augmented.Service.DataSource
   */

  /**
   * @method getConnection Get a connection to the DataSource
   * @memberof Augmented.Service.DataSource
   * @returns {boolean} Returns true if a connection is established
   */
  getConnection() {
    return false;
  };
  /**
   * @method closeConnection Close a connection to the DataSource (depending on type may not be needed)
   * @memberof Augmented.Service.DataSource
   * @returns {boolean} Returns true if a connection is established
   */
  closeConnection() {};
  /**
   * @method insert Insert data
   * @memberof Augmented.Service.DataSource
   * @param {object} data Data to insert
   */
  insert(data) {
  };
  /**
   * @method remove Remove data
   * @memberof Augmented.Service.DataSource
   * @param {object} data Data to remove
   */
  remove(data) {
  };
  /**
   * @method update Update data
   * @memberof Augmented.Service.DataSource
   * @param {object} data Data to update
   */
  update(data) {};
  /**
   * @method query Query data
   * @memberof Augmented.Service.DataSource
   * @param {object} query The query object
   * @param {function} callback A callback to execute during the query
   * @returns {object} Returns a value from the query or response code
   */
  query(query, callback) {
    return null;
  };
  /**
    * @method getCollection Get the collection
    * @memberof Augmented.Service.DataSource
    * @returns {object} Returns the collection
    */
  get collection() {
    return this._collection;
  };

  /**
   * @method setCollection Set the collection by name
   * @memberof Augmented.Service.DataSource
   * @param {string} name The name of the collection
   */
  set collection(name) {
    this._collection = name;
  };

  /**
    * @method getClient Get the client
    * @memberof Augmented.Service.DataSource
    * @returns {object} Returns the client
    */
  get client() {
    return this._client;
  };
};

export default DataSource;
