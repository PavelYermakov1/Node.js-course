const expectedColor = prompt("Загадайте цвет!");
const attemptNumber = prompt("Введите количество попыток!");

for (let i = 0; i < attemptNumber; i++) {
  alert(`У вас ${attemptNumber - i} попыток!`);
  let color = prompt("Угадайте цвет!");
  if (color === expectedColor) {
    alert("Вы угадали");
    i = attemptNumber + 1;
  } else {
    alert("Вы не угадали");
  }
  if (i === attemptNumber - 1) {
    alert("Попытки закончились, вы не угадали");
  }
}
