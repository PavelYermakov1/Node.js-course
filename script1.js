const users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 16 },
  { name: "Sasha", age: 29 },
];

const sumYoung = users
  .filter((e) => e.age < 18)
  .reduce((acc, cur) => acc + cur.age, 0);
