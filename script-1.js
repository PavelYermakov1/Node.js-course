function invert(data) {
  if (Array.isArray(data)) {
    return data.reverse();
  }
  data.split("").reverse().join("");
}

function invertOptimized(data) {
  const array = [...data];
  for (let i = 0; i < (array.length - 1) / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  return Array.isArray(data) ? array : array.join("");
}
