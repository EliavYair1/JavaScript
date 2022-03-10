// // Print the numbers 0 - 20, one number per line.
for (let i = 0; i < 20; i++) {
  console.log(i);

}

// // Print only the ODD values from 3 - 29, one number per line.
for (let i = 0; i <= 29; i++) {
  if (i % 2 === 1 && i >= 3) {

    console.log(i);
  }

}
// // Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i = 14 - 1; i >= -14; i--) {
  if (i % 2 == 0) {
    console.log(i);

  }

}


// // Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

for (let i = 51 - 1; i >= 20; i--) {
  if (i % 2 == 0) {
    console.log(i);

  } else if (i % 3 == 0) {
    console.log(i);

  }
  console.log(i);

}
// // Print each element of the array to a new line.
const arr1 = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])

}



// // Print each character of the string---in reverse order---to a new line.
const str = 'LaunchCode';
var reversed = "";
for (var i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed)



// // In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
const arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
var evenNumbers = []
var oddNumbers = []

for (let i = 0; i < arr2.length; i++) {
  if ((arr2[i] % 2) != 1) {
    evenNumbers.push(arr2[i]);
    console.log(evenNumbers);
  } else {
    oddNumbers.push(arr2[i]);
    console.log(oddNumbers);
  }
}
// // Print the arrays to confirm the results. Print evens first. Example: console.log(evens);
console.log(evenNumbers);
console.log(oddNumbers);






// First, initialize variables to store the following arrays. Remember to use descriptive names.

var pantry = [
  ['chicken', 'tofu', 'beef', 'fish', 'beans'],
  ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'],
  ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'],
  ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'],
  ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
]


for (var i = 0; i < pantry.length; i++) {
  var meals = `[${pantry[0][i]}, ${pantry[1][i]}, ${pantry[2][i]}, ${pantry[3][i]}, ${pantry[4][i]}]`
  console.log(meals);
}