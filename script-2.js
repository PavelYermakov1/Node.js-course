const users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 16 },
  { name: "Sasha", age: 29 },
];

const wrapper = document.createElement("div");

users.forEach((user) => {
  const userItem = document.createElement("div");
  userItem.innerText = `name: ${user.name}, age: ${user.age}`;
  wrapper.appendChild(userItem);
});

document.body.appendChild(wrapper);
