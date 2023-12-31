"use strict";

const Sequelize = require("sequelize");
const config = require("../config/config");

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    port: config.port,
    host: config.host,
    dialect: config.dialect,
    logging: false,
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);

module.exports = db;
