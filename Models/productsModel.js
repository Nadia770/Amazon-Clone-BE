const dbConnection = require("../db/dbConnection");

exports.fetchAllProducts = (query) => {
  //   const order = query.order;
  //   const sort_by = query.sort_by;
  //   const price = query.price;
  //   const inStock = query.in_stock;
  const average_price = query.average_price;
  console.log(average_price);

  if (
    sort_by === undefined ||
    sort_by === "average_rating" ||
    sort_by === "price" ||
    sort_by === "in_stock"
  ) {
    return dbConnection
      .select("*")
      .from("products")
      .groupBy("products.product_id")
      .modify((querySoFar) => {
        if (average_Rating !== undefined) {
          querySoFar.where("products.average_rating", average_Rating);
        }
        if (price !== undefined) {
          querySoFar.where("products.price", price);
        }
        if (inStock !== undefined) {
          querySoFar.where("products.in_stock", inStock);
        }
      })
      .orderBy(sort_by || "average_rating", order || "desc")
      .then((dbRes) => {
        return dbRes;
      });
  }
};
