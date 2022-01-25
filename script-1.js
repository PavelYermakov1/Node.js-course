function invert(data) {
  if (Array.isArray(data)) {
    return data.reverse();
  }
  data.split("").reverse().join("");
}

function invertOptimized(data) {
  const result = [...data];
  const middleResult = Math.floor((result.length - 1) / 2);
  for (let i = 0; i <= middleResult; i++) {
    const temp = result[i];
    result[i] = result[result.length - 1 - i];
    result[result.length - 1 - i] = temp;
  }
  return Array.isArray(data) ? result : result.join("");
}
