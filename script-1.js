function User(firstName, secondName, age, city) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.city = city;
}

const firstUser = new User("Ilon", "Mask", 40, "Silicon Valley");
const secondUser = new User("Stiv", "Jobs", 45, "California");

function aboutUser() {
  console.log(
    `My name is ${this.firstName} ${this.secondName}, I'm ${this.age} years old. I'm from ${this.city}`
  );
}

aboutUser.call(firstUser);
aboutUser.call(secondUser);
