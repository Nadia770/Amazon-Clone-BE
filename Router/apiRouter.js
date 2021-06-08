const apiRouter = require("express").Router();
const { productsRouter } = require("../Router/productsRouter");

apiRouter.use("/products", productsRouter);
// apiRouter.use("/reviews", reviewsRouter);
// apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
