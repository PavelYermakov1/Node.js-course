const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, 8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, 76, -67, 78];

const sum = (arr) =>
  arr.filter((e) => e > 0 && e % 2).reduce((acc, cur) => acc + cur);

let firstSum = sum(arr1);
let secondSum = sum(arr2);
let thirdSum = sum(arr3);
