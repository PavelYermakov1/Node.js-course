function invert(data) {
  if (Array.isArray(data)) {
    return data.reverse();
  }
  data.split("").reverse().join("");
}
