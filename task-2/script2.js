const age1 = prompt("Введите возраст!");

if (age1 > 0 && !isNaN(age1)) {
  if (age1 > 18) {
    console.log(`Здравствуйте, мне ${age1} лет`);
  } else {
    console.log(`Привет мне ${age1} лет`);
  }
} else {
  console.log("Неверно указан возраст");
}
