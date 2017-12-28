/**
 * Types of pagination API
 * @enum
 * @name Augmented.PaginationFactory.type
 * @memberof Augmented.PaginationFactory
 * @property {string} github GitHub API
 * @property {string} solr SOLR API
 * @property {string} database Database-like API
 */
const PAGINATION_API = {};
PAGINATION_API.GITHUB = Symbol("github");
PAGINATION_API.SOLR = Symbol("solr");
PAGINATION_API.DATABASE = Symbol("database");

export default PAGINATION_API;
