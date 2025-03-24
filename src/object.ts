// User interface
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log(
    `Hi there ${user.firstName} ${user.lastName} your age is ${user.age} and your email id is ${user.email}`
  );
}

let answer = isLegal({
  firstName: "Shivam",
  lastName: "Gaur",
  age: 19,
});
console.log(answer);

greet({
  firstName: "Ritik",
  lastName: "Singh",
  age: 20,
  email: "ritik@gmail.com",
});
