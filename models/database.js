const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";

const config = require(path.join(__dirname, "../config/config"))[env];
let db;
console.log("config", config.use_env_variable);
if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable], config);
} else {
  db = new Sequelize(
    config.databaseName,
    config.userName,
    config.password,
    config
  );
}

module.exports = { db };
