const productsRouter = require("express").Router


productsRouter.get("/:product_id")
productsRouter.route("/").get(getAllProducts)



module.exports = productsRouter