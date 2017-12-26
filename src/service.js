import fs from "fs";
import http from "http";
import https from "https";
import * as  Augmented from "augmentedjs-next";

console.log("Augmented", Augmented);

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
 * @version 2.0.0-alpha.0
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
Service.VERSION = "2.0.0-alpha.0";

/**
 * A nice console and file logger with prefix for service messages
 * @class Logger
 * @memberof Augmented.Service
 */
class Logger {
  constructor(level, prefix, path) {
    if (!level) {
      level = Augmented.Logger.Level.INFO;
    }
    this._logger = Augmented.Logger.LoggerFactory.getLogger(
      Augmented.Logger.Type.COLOR_CONSOLE, level);
    if (prefix) {
      this.setPrefix(prefix);
    } else {
      this._prefix = "SERVICE";
    }
    if (path) {
      this._path = path;
    } else {
      this._path = "/var/log/service.log";
    }
    return this;
  };

  /**
   * Set the prefix of the logger
   * @method setPrefix
   * @param {string} prefix The prefix for the logger message
   * @memberof Augmented.Service.Logger
   */
  setPrefix(prefix) {
    this._prefix = prefix;
  };
  log(message) {
    this._logger.log(`${this._prefix}:${message}`);
    fs.appendFile(this._path, `${this._prefix}:${message}`, (err) => {
      if (err) {
        console.log("Error writing to log");
      }
    });
  };
  info(message) {
    this._logger.info(`${this._prefix}:${message}`);
    fs.appendFile(this._path, `${this._prefix}:${message}`, (err) => {
      if (err) {
        console.log("Error writing to log");
      }
    });
  };
  debug(message) {
    this._logger.debug(`${this._prefix}:${message}`);
    fs.appendFile(this._path, `${this._prefix}:${message}`, (err) => {
      if (err) {
        console.log("Error writing to log");
      }
    });
  };
  warn(message) {
    this._logger.warn(`${this._prefix}:${message}`);
    fs.appendFile(this._path, `${this._prefix}:${message}`, (err) => {
      if (err) {
        console.log("Error writing to log");
      }
    });
  };
  error(message) {
    this._logger.error(`${this._prefix}:${message}`);
    fs.appendFile(this._path, `${this._prefix}:${message}`, (err) => {
      if (err) {
        console.log("Error writing to log");
      }
    });
  };
};

Service.Logger = Logger;

export default Service;

module.exports = Service;
