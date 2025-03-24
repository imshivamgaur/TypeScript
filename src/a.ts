let x: number = 1;
// console.log(x);

function greet(firstName: any, lastName: string, age: number) {
  console.log(
    `Hello my name ${firstName} ${lastName} and I'm ${age} years old`
  );
}

// greet("shivam", "gaur", 19);

// Types inference
function sum(a: number, b: number): number {
  return a + b;
}

const value = sum(2, 5);
// console.log(value);

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

let y = isLegal(1);
// console.log(y);

// Create a function that takes another function as a input and runs after 1 second.
function anything(fn: () => void, delay: number) {
  setTimeout(fn, delay);
}


function hola() {
  console.log(`Hello after 1 second`);
}

anything(hola, 1000);


const congrats = (name: string) => `Hello, ${name}`;

let ans = congrats("shivam");
console.log(ans);
