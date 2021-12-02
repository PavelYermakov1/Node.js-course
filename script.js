const arr = [1, 2, -8, 4, 7, 10, 24, -5, 90, 80, 91];

const sumPositive = arr
  .filter((e) => !(e % 2) && e > 0)
  .reduce((acc, cur) => acc + cur);
