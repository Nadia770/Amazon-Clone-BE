exports.changeProductsKey = (
  arr,
  newKey1,
  keyToReplace1,
  newKey2,
  keyToReplace2,
  newKey3,
  keyToReplace3
) => {
  let newObj = {};

  return arr.map((object) => {
    newObj = { ...object };
    newObj[newKey1] = newObj[keyToReplace1];
    delete newObj[keyToReplace1];

    newObj[newKey2] = newObj[keyToReplace2];
    delete newObj[keyToReplace2];

    newObj[newKey3] = newObj[keyToReplace3];
    delete newObj[keyToReplace3];
    console.log(newObj);
    return newObj;
  });
};

exports.addProductID = (productData, reviewData, newKey) => {
  if(productData[0]["product_name"]=== reviewData[0]["product"])
  reviewData[0][newKey] = productData[0][newKey]
  console.log(reviewData)
  return reviewData
}

//add key of product_id to review obj

// {
//   product_id: 1,
//   product_name: 'Whiz Blender',
//   price: 300,
//   average_rating: 0,
//   product_description: 'Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug',
//   product_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.jpg&imgrefurl=https%3A%2F%2Fwww.ikohs.com%2Fuk%2Fbuy-glass-blenders%2F70674-blender-matt-800w-american-style-jug-blender.html&tbnid=1F_R-zhUWlBmoM&vet=12ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg..i&docid=UgxOQma2QSs60M&w=1500&h=1500&q=blender&ved=2ahUKEwjiuprEiPvwAhWOwYUKHfwwDUEQMygAegUIARDYAg',
//   in_stock: true
// }

// {REVIEW
//   body: "Great product, happy with my purchase",
//   created_at: 1511354163389,
//   author: "AT",
//   helpful_count: 5,
//   star_count: 5,
//   product: "Whiz Blender"
// }