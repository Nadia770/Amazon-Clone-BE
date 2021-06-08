const fetchAllProducts = require();

exports.getAllProducts = (req, res, next) => {
  fetchAllProducts()
    .then((articles) => {
      res.status(200).send(articles);
    })
    .catch((err) => {
      next(err);
    });
};
