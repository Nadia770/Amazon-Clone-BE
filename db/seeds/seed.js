const { productData, reviewData, userData } = require("../data/test-data");
const {
  changeProductsKey,
  makeRefObject,
  switchKeyReference,
} = require("../utils/utils");

exports.seed = function (knex) {
  const formattedProductData = changeProductsKey(
    productData,
    "product_name",
    "name",
    "product_url",
    "image",
    "product_description",
    "description"
  );
  return knex
    .insert(formattedProductData)
    .into("products")
    .returning("*")
    .then((returnedProducts) => {
      const refObj = makeRefObject(
        returnedProducts,
        "product_name",
        "product_id"
      );

      const formattedReviewData = switchKeyReference(
        reviewData,
        refObj,
        "product",
        "product_id"
      );
      return knex.insert(formattedReviewData).into("reviews").returning("*");
    });
};
