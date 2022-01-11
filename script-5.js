function User(firstName, secondName, age, city) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.city = city;
}

const firstUser = new User("Ilon", "Mask", 40, "Silicon Valley");
const secondUser = new User("Stiv", "Jobs", 45, "California");

console.log(firstUser);
console.log(secondUser);
