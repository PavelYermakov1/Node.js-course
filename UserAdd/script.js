const users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 16 },
  { name: "Sasha", age: 29 },
];

document.addEventListener("DOMContentLoaded", () => {
  const generateUserForm = document.getElementById("form");
  generateUserForm.addEventListener("submit", onGenerateFormSubmit);

  users.forEach((user) => addListItem(user));
});

function onGenerateFormSubmit(e) {
  e.preventDefault();

  const inputName = document.querySelector('[name="user-name"]');
  const inputAge = document.querySelector('[name="user-age"]');

  const newUser = { name: inputName.value, age: inputAge.value };
  users.push(newUser);
  addListItem(newUser);

  inputName.value = "";
  inputAge.value = "";
}

function addListItem(userData) {
  const { name, age } = userData;

  const list = document.getElementById("date-list");
  const li = document.createElement("li");

  li.classList.add("date-list-item");
  li.innerHTML = `<span>name: ${name}</span><span>age: ${age}</span>`;

  list.appendChild(li);
}
