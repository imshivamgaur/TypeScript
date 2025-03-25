type NumberArr = number[];

function maxValue(arr: NumberArr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let max = maxValue([1, 2, 35, 33, 2343, 33, 4323]);
// console.log(max);



interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filterUser(user: User[]) {
  let filteredUser = user.filter((u) => u.age > 18);
  return filteredUser;
}

let filteredUser = filterUser([
  {
    firstName: "shivam",
    lastName: "Gaur",
    age: 15,
  },
  {
    firstName: "riitk",
    lastName: "singh",
    age: 12,
  },
  {
    firstName: "vivek",
    lastName: "singh",
    age: 21,
  },
  {
    firstName: "deepak",
    lastName: "yadav",
    age: 9,
  },
  {
    firstName: "karan",
    lastName: "gupta",
    age: 334,
  },
]);

console.log(filteredUser);
