import fs from "fs";
import * as  Augmented from "augmentedjs-next";

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

export default Logger;
