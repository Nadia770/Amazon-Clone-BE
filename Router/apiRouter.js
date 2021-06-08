const apiRouter = require("express").Router()


apiRouter.use("/products", productsRouter)
apiRouter.use("/reviews", reviewsRouter)
apiRouter.use("/users", usersRouter)

module.exports = apiRouter