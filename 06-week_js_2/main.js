// function add(a, b) {
//   return a + b;
// }

// const add1 = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// function calc(num1, opt, num2) {
//   if (opt === "+") {
//     return num1 + num2;
//   }
//   if (opt === "-") {
//     return num1 - num2;
//   }
//   if (opt === "/") {
//     if (num2 !== 0) return num1 / num2;
//   }
//   if (opt === "*") {
//     return num1 * num2;
//   }
// }

// console.log(calc(2, "+", 6));
// console.log(calc(2, "-", 6));
// console.log(calc(2, "/", 6));
// console.log(calc(2, "*", 6));

// const arr = [1, 2, 3, 4, 5];

// console.log(arr);

// console.log(arr);

function createUser(name, job) {
  return `User ${name} works as a ${job}`;
}

// const namesArr = ["Ahmed", "Mohamed", "Ali"];
// const jobsArr = ["Developer", "Designer", "Tester"];

// const divUsers = document.querySelector(".users");
// console.log(divUsers);

// for (let i = 0; i < 3; i++) {
//   let h1 = document.createElement("h1");

//   h1.textContent = createUser(namesArr[i], jobsArr[i]);

//   divUsers.appendChild(h1);
// }

// const UsersArr = [
//   {
//     name: "Ali",
//     job: "Tester",
//   },
//   {
//     name: "Sarah",
//     job: "Designer",
//   },
// ];

// function createUserInDocument(...users) {
//   const divUsers = document.querySelector(".users");

//   users.forEach((user) => {
//     const h1 = document.createElement("h1");

//     h1.textContent = createUser(user.name, user.job);

//     divUsers.appendChild(h1);
//   });
// }

// createUserInDocument(...UsersArr);

const form = document.querySelector("form");
const inputNum1 = document.querySelector("#num1");
const inputOpt = document.querySelector("#opt");
const inputNum2 = document.querySelector("#num2");
const display = document.querySelector(".display");
const btn = document.querySelector("button");

btn.onclick = () => {
  const num1 = inputNum1.value;
  const opt = inputOpt.value;
  const num2 = inputNum2.value;

  let res = 0;

  switch (opt) {
    case "+":
      res = +num1 + +num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "/":
      if (num2 !== 0) {
        res = num1 / num2;
      }
      break;
    case "*":
      res = num1 * num2;
      break;

    default:
      res = 0;
  }

  display.textContent = res;
};
