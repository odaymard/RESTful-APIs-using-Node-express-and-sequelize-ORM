const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
let db;
const config = require(path.join(__dirname, "../config/config"))[env];

if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable], config);
}

module.exports = { db };
