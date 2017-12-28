
import Logger from "./logger.js";
import DataSource from "./datasource/datasource.js";
import DATASOURCE_STYLE from "./datasource/datasourceStyle.js";
import MemoryDataSource from "./datasource/memoryDataSource.js";
import MongoDataSource from "./datasource/mongoDataSource.js";
import SOLRDataSource from "./datasource/solrDataSource.js";
import DataSourceFactory from "./datasource/datasourceFactory.js";
import ResourceCollection from "./collection/resourceCollection.js";
import EntityCollection from "./collection/entityCollection.js";
import PaginatedResourceCollection from "./collection/paginatedResourceCollection.js";
import PaginationFactory from "./collection/paginationFactory.js";
import PAGINATION_API from "./collection/paginationAPIType.js";
import Entity from "./model/entity.js";
import Resource from "./model/resource.js";

/**
 * service.js - The Service Core Component<br/>
 * The <b>Service</b> extension adds extensive abilities to the service (Node.js) layer.<br/>
 * This extension adds:<br/>
 * <ul>
 * <li>DataSource</li>
 * <li>Entity</li>
 * <li>Resource</li>
 * </ul>
 *
 * @author Bob Warren
 *
 * @requires augmentedjs-next ("augmentedjs-next" in npm)
 * @requires node
 * @requires http
 * @requires https
 * @requires fs
 * @module Augmented.Service
 * @version 2.0.0-alpha.1
 * @license Apache-2.0
 */

/**
 * The base namespece for all of the Service module.
 * @namespace Service
 * @memberof Augmented
 */
const Service = {};

/**
 * The standard version property
 * @constant VERSION
 * @memberof Augmented.Service
 */
Service.VERSION = "2.0.0-alpha.1";

Service.Logger = Logger;
Service.DataSource = DataSource;
Service.DATASOURCE_STYLE = DATASOURCE_STYLE;
Service.MemoryDataSource = MemoryDataSource;
Service.MongoDataSource = MongoDataSource;
Service.SOLRDataSource = SOLRDataSource;
Service.DataSourceFactory = DataSourceFactory;
Service.ResourceCollection = ResourceCollection;
Service.EntityCollection = EntityCollection;
Service.PaginatedResourceCollection = PaginatedResourceCollection;
Service.PaginationFactory = PaginationFactory;
Service.PAGINATION_API = PAGINATION_API;
Service.Entity = Entity;
Service.Resource = Resource;

export default Service;
