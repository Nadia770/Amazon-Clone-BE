const dbConnection = require("../db/dbConnection");

exports.fetchAllProducts = ({sort_by}) => {
      return dbConnection
      .select("*")
      .from("products")
      .orderBy(sort_by || "average_rating", "desc")
      .returning("*")
  }
