let arr = [1, "str", 24, { name: "Ivan" }, 89, undeifined, "10"];

const [firstElement, secondElement, , fifthElement, ...otherElements] = arr;

console.log(firstElement, secondElement, fifthElement, otherElements);
