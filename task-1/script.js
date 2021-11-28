const user = {};
user.name = prompt("Введите ваше имя");
user.surname = prompt("Введите вашу фамилию");
user.age = Number(prompt("Введите ваш возраст"));
user.city = prompt("Введите ваш город");
user.isDriver = confirm("У вас есть водительские права?");
const text = `Привет меня зовут ${user.name} ${user.surname}, мне ${
  user.age
} лет, я живу в городе ${user.city}. ${
  user.isDriver ? "Я вожу машину" : "Я не вожу машину"
}.`;

console.log(text);
