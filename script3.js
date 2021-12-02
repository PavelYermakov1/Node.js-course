console.everyUser = function (users, prefix) {
  users.forEach((user) => console.log(`${prefix} ${user.name}`));
};

const userpetya = {
  name: "petya",
  transactions: [123, 123213213, -5, -8],
  sum: 10,
};

const uservasya = {
  name: "vasya",
  transactions: [10, 20, -5, -8],
  sum: 10,
};

console.everyUser([userpetya, uservasya], "Имя пользователя: "); // Массив пользователей [userpetya, uservasya], префикс 'Имя пользователя: ')
// Имя пользователя: petya
// Имя пользователя: vasya
