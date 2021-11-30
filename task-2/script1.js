const age = prompt("Введите возраст!");
console.log(
  age > 0 && !isNaN(age) ? `Привет мне ${age} лет` : "Неверно указан возраст"
);
if (age > 0 && !isNaN(age)) {
  console.log(`Привет мне ${age} лет`);
} else {
  console.log("Неверно указан возраст");
}
