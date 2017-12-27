import MemoryDataSource from "./memoryDataSource.js";
import MongoDataSource from "./mongoDataSource.js";
import SOLRDataSource from "./solrDataSource.js";

/**
 * The datasource factory to return an instance of a datasource configured by type
 * @namespace DataSourceFactory
 * @memberof Augmented.Service
 */
class DataSourceFactory {
  constructor() {
  };
  static getDatasource(type, client) {
    if (type === DataSourceFactory.Type.MONGODB) {
      return new MongoDataSource(client);
    } else if (type === DataSourceFactory.Type.SOLR) {
      return new SOLRDataSource(client);
    } else if (type === DataSourceFactory.Type.MEMORY) {
      return new MemoryDataSource();
    }
    return null;
  };
};

DataSourceFactory.Type = {};
DataSourceFactory.Type.MEMORY = Symbol("memory");
DataSourceFactory.Type.MONGODB = Symbol("mongodb");
DataSourceFactory.Type.SOLR = Symbol("solr");

export default DataSourceFactory;
