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

exports.switchKeyReference = (array, refObject, keyToReplace, newKey) => {
  const newArr = array.map((object) => {
    const newObj = { ...object };
    newObj[newKey] = refObject[object[keyToReplace]];
    delete newObj[keyToReplace];
    return newObj;
  });
  return newArr;
};
