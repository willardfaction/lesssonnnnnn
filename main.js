// условные операторы
// тернарный оператор
// условие? () : ()
// // 1
// let currentUser = true;
// currentUser ? alert("welcome") : alert("register");

// 2
// let password = prompt("input password");
// let passwordConfirm = prompt ("confirm password");
// password === passwordConfirm
//   ? alert("succesful password")
//   : alert("passwords do not match");

// 3
// let alert = prompt("how old are you");
// age >= 18 ? console.log("welcome") : console.log("access restricted");

// 4
// let role = "admin";
// role === "admin" ? alert("you can edit group") : alert("you have no rights");

// 5
// let productsCount = 10;
// productsCount > 0
//   ? alert("there are ${productsCount} items")
//   : alert("there are no items");

// let name = prompt("enter your name");
// if (name === John) {
//   alert(`Hello ${name}`);
// }

// 2
// let age = 20;
// let canDrive = null;
// if (age > 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }
// console.log(canDrive);

// 3
// let startTime = 9;
// let arrive = 10;
// if (arrive >= startTime) {
//   console.log("can enter");
// } else {
//   console.log("denied");
// }

// 4
// let num1 = +prompt("first number");
// let operator = prompt("math operator");
// let num2 = +prompt("second number");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// }

// switch cas
// let season = +prompt("choose season");
// switch (season) {
//   // season === 1
//   case 1:
//     console.log("winter");
//     break;
//   case 2:
//     console.log("spring");
//     break;
//   case 3:
//     console.log("summer");
//     break;
//   case 4:
//     console.log("autumn");
//     break;
//   default:
//     console.log("choose season");
// }

// CREATE, UPDATE, READ, DELETE
// let action = "DELETE";
// switch (action) {
//   case "CREATE":
//     alert("profile is created");
//     break;
//   case "READ":
//     alert("readable");
//     break;
//   case "UPDATE":
//     alert("profile is redacted");
//     break;
//   case "DELETE":
//     alert("profile is deleted");
//     break;
// }

// }
// let bread = "baton"
// if(bread === "baton"){
// alert("взяли нужное");
// } else{
//   alert("взяли не нужное")
// }

// Логическое ИЛИ ||
// let product = "конфеты";
// if (product === "лепешка" || product ===     "батон") {
//   alert("правильно");
// } else {
//   alert("неправильно");
// }

// 10
// 22
// let arrive = prompt("When did you arrive");
// if (arrive >= 10 && arrive <= 22) {
//   alert("office is open");
// } else {
//   alert("office is closed");
// }

// let password = prompt("input password");
// const tries = 1;
// if (password === "ps123") {
//   alert("corret password");
// } else {
//   password = prompt("try again");
//   console.log(password);
//   if (password === "ps123") {
//     alert("correct password");
//   } else {
//     alert("your account is suspended");
//   }
// }

// let answer = confirm("do you want to quit the game");
// console.log(answer);
// if (answer) {
//   alert("you quit the game");
// } else {
//   alert("continuing the game");
// }

// let likes = 5;
// let answer = confirm("like?");
// if (answer) {
//   likes++;
//   console.log(likes);
// }

let homework = "momentum";
if (homework === "momentum" || homework === "teamflow") {
  alert("100  points");
} else {
  alert("0 points");
}
