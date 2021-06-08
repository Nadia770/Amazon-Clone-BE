const dbConnection = require("../db/dbConnection");

exports.fetchAllProducts = () => {
  return dbConnection.select("*").from("products").returning("*");
};
