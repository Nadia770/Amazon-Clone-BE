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

exports.makeRefObject = (array, key, value) => {
  const refObj = {};
  if (!array.length) {
    return refObj;
  }
  array.forEach((obj) => {
    const refObjKey = obj[key];
    const refObjValue = obj[value];
    refObj[refObjKey] = refObjValue;
  });

  return refObj;
};

//add key of product_id to review obj

// {
//   product_id: 1,
//   product_name: 'Whiz Blender',
//   price: 300,
//   average_rating: 0,
//   product_description: 'Personal Blender, Sboly Smoothie Blender Single Serve Small Blender for Juice Shakes and Smoothie, Smoothie Maker with 20 oz Tritan BPA-Free Blender Cup, UK Plug',
//   product_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.ikohs.com%2Fuk%2F910422%2Fblender-matt-800w-american-style-jug-blender.jpg&im',
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
