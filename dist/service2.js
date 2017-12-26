const fs=require("fs"),Augmented=require("augmentedjs-next"),Service={};Service.VERSION="2.0.0-alpha.0";class Logger{constructor(level,prefix,path){return level||(level=Augmented.Logger.Level.INFO),this._logger=Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.COLOR_CONSOLE,level),prefix?this.setPrefix(prefix):this._prefix="SERVICE",this._path=path||"/var/log/service.log",this}setPrefix(prefix){this._prefix=prefix}log(message){this._logger.log(`${this._prefix}:${message}`),fs.appendFile(this._path,`${this._prefix}:${message}`,err=>{err&&console.log("Error writing to log")})}info(message){this._logger.info(`${this._prefix}:${message}`),fs.appendFile(this._path,`${this._prefix}:${message}`,err=>{err&&console.log("Error writing to log")})}debug(message){this._logger.debug(`${this._prefix}:${message}`),fs.appendFile(this._path,`${this._prefix}:${message}`,err=>{err&&console.log("Error writing to log")})}warn(message){this._logger.warn(`${this._prefix}:${message}`),fs.appendFile(this._path,`${this._prefix}:${message}`,err=>{err&&console.log("Error writing to log")})}error(message){this._logger.error(`${this._prefix}:${message}`),fs.appendFile(this._path,`${this._prefix}:${message}`,err=>{err&&console.log("Error writing to log")})}}Service.Logger=Logger,module.exports=Service;