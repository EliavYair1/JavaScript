// // // const func1 = (num1) => num1 * 2
// // // const func2 = (num1) => func1(num1) * 2;
// // // console.log(func2(5));

// // // // Arrays 
// // // // const numbers = [1, 2, 3, 4, 5]
// // // let numbers = [1, 2, 3, 4, 5]
// // // console.log(numbers[0]); //first element of the array
// // // console.log(numbers[numbers.length - 1]); //to reach the last element in the array
// // // numbers.push(6) //pushing in the end of the array
// // // numbers.unshift(6) //pushing in the end of the array


// // // let number = numbers.pop() //removing from the end of the array
// // // number = numbers.shift() //removing from the start of the array
// // // console.log(numbers);
// // // numbers = [1, 2, 3, 4, 5];
// // // console.log(numbers.indexOf(5)); //pointing location of the element of the array
// // // console.log(numbers.includes(9)); //return true of false if the element is found of the array


// // // // 2d array
// // // const arr = [
// // //   [1, 2, 3],
// // //   [4, 5, 6],
// // //   [7, 8, 9]
// // // ]
// // // //how to approch props in 2d array
// // // console.log(arr[1][1]);


// // /* 
// // Write a function that given an array return True if the array includes The items 'AA' and 'BB'.

// // Write a function that given an array remove the first and the last element

// // Write a function that given an array add an item ‘Beginning’ to the beginning of the array and ‘Ending’ to the top.

// // Write a function that given an array and a item1 item2 parameters, 
// // will search for both in the array. If both exists return the sum of their index. If not return -1

// // */

// // // // Write a function that given an array return True if the array includes The items 'AA' and 'BB'.
// // // function findInArray(arr) {

// // //   return arr.includes("AA") && arr.includes("BB")

// // // }
// // // console.log(findInArray(["AA", "CC", "BB"]));

// // // // Write a function that given an array remove the first and the last element

// // // function addNRemove(arr) {

// // //   arr.pop()
// // //   arr.shift()
// // //   return arr;
// // //   //or
// // //   // return arr.slice(1, -1)

// // // }
// // // console.log(addNRemove([1, 2, 3]));


// // // Write a function that given an array add an item ‘Beginning’ to the beginning of the array and ‘Ending’ to the top.

// // // function addTo(array) {

// // //   array.unshift("Beginning")
// // //   array.push('Ending')
// // //   return array;

// // // }

// // // console.log(addTo(["center"]));
// // // // console.log(addTo([]));
// // // Write a function that given an array and a item1 item2 parameters, 
// // // will search for both in the array. If both exists return the sum of their index. If not return -1

// // // function findIndex(item1, item2) {
// // //   let sum = item1 + item2;
// // //   let arr = [item1, item2]
// // //   if (arr.indexOf()) {
// // //     return sum;
// // //   }

// // // else {
// // //     return -1;
// // //   }
// // // or
// // //return -1

// // // }
// // // console.log(findIndex());

// // // objects
// // const person = {
// //   firstName: 'eliav',
// //   lastName: 'yair',
// //   mass: 100,
// //   height: 1.83,
// //   birthDay: 1991,
// //   familyMembers: ['ganit', 'noy'],
// //   moreObj: {
// //     a: 'test'
// //   },
// //   getName: function () {
// //     return `${this.firstName} ${this.lastName}`
// //   },
// //   calcBmi: function () {
// //     return this.mass / this.height ** 2
// //   }
// // }
// // console.log(person.calcBmi());
// // person.firstNameC = "test";
// // person['firstNameB'] = 'test2';
// // console.log(person);
// // console.log(person['firstName']);
// // console.log(person.familyMembers[1]);
// // const entity = 'firstName'
// // console.log(person.firstName);
// // console.log(person[entity]);
// // console.log(person.moreObj.a);
// // console.log(person.getName());


// // //write a function that calculate the bmi 

// // const bmi = {
// //   mass: 100,
// //   height: 1.80
// // }

// // function calcBmi() {

// //   return Math.floor(bmi.mass / bmi.height ** 2)
// // }
// // console.log(calcBmi());


// // // loops & iterations
// // // for loop
// // // const New_arr = [1, 2, 3, 5, 4, 6, 2, 2, 2]
// // // for (let i = 0; i < New_arr.length; i++) {
// // //   if (New_arr[i] === 2) {
// // //     const element = New_arr[i];
// // //     console.log(element);
// // //     break;
// // //     continue; //if he find the above parameter continue if not stop the loop
// // //     //or 
// // //     //return;
// // //   }
// // //   // const element = New_arr[i];
// // //   // console.log(element);
// // // }
// // // Write a for loop that prints the number from 1 to 10.
// // // Write a for loop that prints all even numbers between 1 to 10
// // // Having an array of 10 elements such as : const arr = [5,4,3,2,1,5,4,3,2,1] print all elemnets
// // // print an array of 10 elements top to bottom
// // // write a function that print all items in an array until an item is 0


// // // Write a for loop that prints the number from 1 to 10.

// // // for (let i = i; i <= 10; i++) {

// // //   console.log(i);
// // // }

// // // Having an array of 10 elements such as : const arr = [5,4,3,2,1,5,4,3,2,1] print all elemnets
// // // const arr1 = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
// // // for (let i = 0; i < arr1.length; i++) {
// // //   const element = arr1[i];
// // //   console.log(element);
// // // }

// // // print an array of 10 elements top to bottom
// // // const arr2 = [5, 8, 3, 6, 4, 7, 3, 1]
// // // const sorted = arr2.sort()
// // // for (let i = 0; i < sorted.length; i++) {
// // //   const element = sorted[i];

// // //   console.log(element);
// // // }
// // const arr3 = [1, 2, 3, 4, 5]
// // for (let i = arr3.length - 1; i >= 0; i--) {
// //   const element = arr3[i];
// //   console.log(element);
// // }



// // // write a function that print all items in an array until an item is 0
// // const arr4 = [0, 1, 2, 3, 4, 5]
// // for (let i = 0; i < arr4.length; i++) {
// //   if (arr4[i] === 0) {
// //     const element = arr4[i];
// //     console.log(element);
// //     break;

// //   }
// // }

// // // Write a for loop that prints all even numbers between 1 to 10
// // const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // for (let i = 0; i < arr5.length; i++) {
// //   const element = arr5[i];
// //   if (element % 2 === 0) {
// //     console.log(element);
// //   }
// //   console.log(element);
// // }

// // // Write a for loop that prints the number from 1 to 10.
// // for (let i = 0; i <= 10; i++) {
// //   const element = i;
// //   console.log(element);
// // }
// // // Write a for loop that prints all even numbers between 1 to 10
// // for (let i = 0; i <= 8; i++) {
// //   const element = arr5[i];
// //   if (element % 2 === 0) {
// //     console.log(element);
// //   }
// //   console.log(element);
// // }

// // // Having an array of 10 elements such as : const arr = [5,4,3,2,1,5,4,3,2,1] print all elemnets
// // const arr6 = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1];
// // for (let i = 0; i < arr6.length; i++) {
// //   const element = arr6[arr6.length - i - 1];
// //   console.log(element);
// // }
// // // print an array of 10 elements top to bottom
// // // write a function that print all items in an array until an item is 0
// // const printUntil0 = (arr7) => {
// //   for (let i = 0; i < arr7.length; i++) {
// //     const element = arr7[i];
// //     console.log(element);
// //     if (element === 0) {
// //       break;
// //     }

// //   }
// // }
// // printUntil0([1, 2, 3, 4, 5, 6, 7, 8])

// //while loop
// // let x = 0;
// // while (x <= 5) {
// //   console.log(x);
// //   x++;

// // }

// // //write a while loop that get a number, increment it by 5 and multiple by 6. 
// // // For each iteration if the item is divided by 10 finish the loop and print the number

// // let x = 1;
// // while (x % 10 != 0) {
// //   x = (x + 5) * 6;
// //   //or
// //   // x += 5
// //   // x *= 6
// // }
// // console.log(x);

// // // let x = 1;

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max)

// }
// console.log(getRandomInt(5) + 1);




// // write a function the receive an array of payments. The function should return the sum of all the payments in the array.
// // write function the receive the same array and will return the highest payment in the array
// // write a function that simulate dice throwing. return a number between 1 to 6, The caller will print the dices and stop when the dice is 6.



// // write a function the receive an array of payments. The function should return the sum of all the payments in the array.
// function sumOfAll(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
//     return element + element + element
//   }


// }
// sumOfAll([10, 100, 50, 20])
// // write function the receive the same array and will return the highest payment in the array
// function getAllPayment(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === Math.max(element)) {

//       return element;
//     }
//     return -1
//   }
// }
// console.log(getAllPayment([10, 100, 50, 20]))
// // write a function that simulate dice throwing. return a number between 1 to 6, The caller will print the dices and stop when the dice is 6.
// function highestNumOfTheArray(arr) {

// }


// // write a function the receive an array of payments. The function should return the sum of all the payments in the array.
// const calcSum = (payments) => {
//   let sum = 0;
//   for (let i = 0; i < payments.length; i++) {
//     const element = payments[i];
//     sum += payments[i]
//   }
//   return sum;
// }
// console.log(calcSum([20, 100, 50, 60, 5]))
// // write function the receive the same array and will return the highest payment in the array
// const getHeighstPayment = (payments) => {
//   let highest = 0;
//   for (let i = 0; i < payments.length; i++) {
//     const element = payments[i];
//     highest = highest < payments[i] ? payments[i] : highest;
//   }
//   return highest;
// }
// console.log(getHeighstPayment([20, 100, 50, 60, 5]));
// // write a function that simulate dice throwing. return a number between 1 to 6, The caller will print the dices and stop when the dice is 6.

// function getDice() {
//   return getRandomInt(6) + 1;
// }
// let dice = 0;
// while (dice != 6) {
//   dice = getDice()
//   console.log(dice);

// }