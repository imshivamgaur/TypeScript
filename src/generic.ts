//* 1st Problem
/*
type Input = string | number;

function firstElem(arr: Input[]) {
  return arr[0];
}

let val = firstElem([1, 23, "45"]);
console.log(val.toUpperCase());

*/

//* 2nd Problem
// Error: Property 'toUpperCase' doe not exist on type input

// 2nd case
// if we pass the value in array
// mixed string and number typescript Not Complains for this

//! Generics

// 1st Example

function identify<T>(arg: T) {
  return arg;
}

let output1 = identify("myString");
let output2 = identify(34);
let output3 = identify(true);

// console.log(output1);
// console.log(output2);
// console.log(output3);

// 2nd Example

function firstElem<T>(arr: T[]) {
  return arr[0];
}

let val1 = firstElem(["shivam", "ritik", "karan"]);
let val2 = firstElem([1, 2, 3, 4]);
let val3 = firstElem([123, "ritik", "karan", true]);

console.log(val1.toUpperCase()); //type:string returnType:string
console.log(val2); //type:number returnType:number
console.log(val3); //type:number | string | boolean  returnType:number | string | boolean
