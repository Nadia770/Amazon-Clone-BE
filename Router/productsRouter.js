const productsRouter = require("express").Router;
const getAllProducts = require("./Controller/productsControllers");

productsRouter.route("/").get(getAllProducts);
productsRouter.get("/:product_id");

module.exports = productsRouter;
