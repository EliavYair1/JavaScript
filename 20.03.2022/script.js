// // solving homeWork

// // 1
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// for (let y = 0; y < arr.length; y++) {
//   for (let x = 0; x < arr[y].length; x++) {
//     console.log(arr[y][x]);

//   }

// }
// //2
// const removeElement = (arr, elem) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== elem) {
//       newArr.push(arr[i])
//     }

//   }
//   return newArr
// }
// console.log(removeElement([1, 2, 3, 4, 1, 2, 3], 1));

// //3
// const powerOf = (num, pow) => {
//   let result = num;
//   for (let i = 1; i < pow; i++) {
//     result += num;

//   }
//   return result;
// }
// console.log(powerOf(3, 3));

// const numDigits = (num) => {
//   let digits = 0;
//   while (num >= 1) {
//     digits++;
//     num /= 10;
//   }
//   return digits;
// }
// console.log(numDigits(1000000));

// //4
// const sumDigits = (num) => {
//   let digits = 0;
//   let sum = 0;
//   while (num >= 1) {
//     sum += (num % 10)
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// console.log(sumDigits(12));

// // 5
// const getLargestNumber = (arr) => {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i]
//     }

//   }
//   return max;
// }
// console.log(getLargestNumber([-1, -2, -3]));

// function a() {
//   console.log('this is a');
// }

// function b(func) {
//   func()
// }

// function c() {
//   console.log('this is c');
// }
// console.log(b(a));

// console.log(b(c));



// vanilla js
document.getElementById("heading")
let heading = document.getElementById("heading")
heading.textContent = "hello "
let para = document.getElementById("para")
let input = document.querySelector(".input")
para.style.color = "blue";
heading.style.fontFamily = "Arial";
heading.classList.add("redHeader")
heading.classList.remove("redHeader")
input.value = "type here...";
document.createElement("p")
let secondPara = document.createElement("p")
secondPara.innerHTML = "second para";
document.body.appendChild(secondPara);