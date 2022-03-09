/* 

1. Write a JavaScript function which accepts an argument and returns the type.

2. Write a JavaScript program that accept two integers and display the larger.

3. Write a JavaScript function to check whether an `input` is an array or not

4. Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];

*/

// task #1
function checkType(arg) {

  return typeof arg;
}
console.log(checkType(10));
console.log(checkType("hello"));
console.log(checkType(true));
console.log(checkType(undefined));
console.log(checkType({}));

// task #2
function whoIsTheLargest(num1, num2) {

  return Math.max(num1, num2)
  // another way
  // return num1 >= num2? num1 : num2;
  // if (num1 >= num2) {
  //   return num1
  // }else{
  //   num2
  // }
}
console.log(whoIsTheLargest(10, 22));

// task #3
const arrayOrNot = (arr) => {

  if (Array.isArray(arr)) {
    return true;
  } else {
    return false;
  }
}
console.log(arrayOrNot('hello'));
console.log(arrayOrNot([]));
console.log(arrayOrNot({}));
console.log(arrayOrNot(10));
console.log(arrayOrNot(true));



// task #4

function colors() {
  const arr = ["Red", "Green", "White", "Black"]
  return arr.join(',')
  // or
  // return ` ${arr[0]} , ${arr[1]} , ${arr[2]}, ${arr[3]}`
  //or
  // return arr.toString()
}
console.log(colors());