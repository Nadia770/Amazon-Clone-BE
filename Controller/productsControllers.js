const { fetchAllProducts } = require("../Models/productsModel");

exports.getAllProducts = (req, res, next) => {
  fetchAllProducts()
    .then((products) => {
      res.status(200).send({ products });
    })
    .catch((err) => {
      next(err);
    });
};
