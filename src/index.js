import { DataSource, DATASOURCE_STYLE, MemoryDataSource, MongoDataSource, SOLRDataSource, DataSourceFactory } from "service-datasource";
import { ResourceCollection, EntityCollection, PaginatedResourceCollection, PaginationFactory, PAGINATION_API, Entity, Resource } from "service-entity-models";

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
 * @version 2.0.1
 * @license Apache-2.0
 */

/**
 * The base namespace for all of the Service module.
 * @namespace Service
 * @memberof Augmented
 */
const Service = {};

/**
 * The standard version property
 * @constant VERSION
 * @memberof Augmented.Service
 */
Service.VERSION = "2.0.1";

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
