let x: number = 1;
// console.log(x);

function greetMessage(firstName: any, lastName: string, age: number) {
  console.log(
    `Hello my name ${firstName} ${lastName} and I'm ${age} years old`
  );
}

// greetMessage("shivam", "gaur", 19);

// Types inference
function sum(a: number, b: number): number {
  return a + b;
}

const value = sum(2, 5);
// console.log(value);

function isLegalAge(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

let y = isLegalAge(1);
// console.log(y);

// Create a function that takes another function as a input and runs after 1 second.
function anything(fn: () => void, delay: number) {
  setTimeout(fn, delay);
}

function hola() {
  console.log(`Hello after 1 second`);
}

// anything(hola, 1000);

const congrats = (name) => `Hello, ${name}`;

let ans = congrats("shivam");
// console.log(ans);

//====================================== unions
type greetMessageArgs = number | string;
function greetMessageing(id: greetMessageArgs) {
  console.log(id);
}
greetMessageing(10);
greetMessageing("20");


//================================ Intersection
type Employees = {
  name: string;
  startDate: string;
};

interface Manager {
  name: string;
  department: string;
}

type TechLead = Employees & Manager;

let t: TechLead = {
  name: "shivam",
  startDate: "24 august 2025",
  department: "Development",
};

console.log(t);
 