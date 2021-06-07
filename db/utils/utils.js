exports.changeProductsKey = (arr, newKey, keyToReplace) => {
  let newObj = {};
  if (arr.length < 1) return arr;

  arr[0][newKey] = arr[0][keyToReplace];
  delete arr[0][keyToReplace];

  console.log(arr);
  return arr;
};
