const { productData, reviewData, userData } = require("../data/test-data");
const { changeProductsKey } = require("../utils/utils")


exports.seed = function (knex) {
  const formattedProductData = changeProductsKey(productData,
    "product_name",
    "name",
    "product_url",
    "image",
    "product_description",
    "description")
  return knex
    .insert(formattedProductData)
    .into('products')
    .returning('*')
    .then((returnedProducts)=>{
      console.log(returnedProducts)
    })
}