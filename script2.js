const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, -8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];

const getNewArrFromGroup = (arr) =>
  arr
    .flat(Infinity)
    .filter((e) => !(e % 2) && e < 0)
    .slice(1, arr.flat(Infinity).filter((e) => !(e % 2) && e < 0).length - 1);

const newArrFromGroup = getNewArrFromGroup([arr1, arr2, arr3]);
