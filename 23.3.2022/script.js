const num1 = 5;
const num2 = 10;
console.log(Math.sqrt(9));
console.log(Math.max(num1, num2));
console.log(Math.min(num1, num2));
console.log(Math.trunc(1));
console.log(Math.round(6.5));
console.log(Math.ceil(1.00001));
console.log(Math.floor(1.900001));
console.log(Math.random() * 10);
console.log(Math.abs(-10));
console.log(Math.PI);

/* let arr = [1,2,3,4,5,6,20,12,-5,10] */
// convert all numbers to positive number
let arr = [1.2, 2, 3, -4, 5, 6, 20, 1.2, -5, 10]



const convertToPositive = (arr) => {
  // using map
  let newArr = arr.map(tal => Math.abs(tal))


  console.log(newArr);


  // using filter 
  let filtered = arr.filter(item => item > 0)
  console.log(filtered);

  // loop way
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = Math.abs(newArr[i])

    // if else way

    // if (arr[i] <= 0) {
    //   // Math.abs(i)
    //   return Math.abs(arr[i])
    // }

  }

  return newArr;


}
console.log(convertToPositive([...arr]))


// write a function that given an array will return an array with two items min-value , max value

const minMax = (arr) => {
  const minVal = Math.min(...arr)
  const maxVal = Math.max(...arr)


  return [minVal, maxVal];
}
//  console.log(minMax([...arr]));
console.log(minMax([...arr]))



// given an arrray convert it to a decimal numbers only


const convertToNoneDecimal = (arr) => {
  let newArr = arr.map(item => Math.trunc(item))
  return newArr;
}
console.log(convertToNoneDecimal(arr));


// new operator 
console.log(new Date);
// const d = new Date("23 March 2022")
const d = new Date(2020, 6, 31, 10, 51, 32)
console.log(d);

console.log(d.getHours())
console.log(d.getDate()) //day in the month
console.log(d.getDay()) //get the day in the week
console.log(d.getFullYear())
console.log(new Date(0)); //is the 0 time of the world (the time in miliseconds)
console.log(new Date(1000 * 60)); //changing the mineuts
console.log(new Date((1000 * 60) * 60));
console.log(d.getTime());
console.log(new Date((1000 * 60) * 60 * 48)); //changing to days in hours
console.log(new Date().toDateString().split(" ")[0])


// write a javascript function that get current data
let date = new Date()
const getCurrentData = (data) => {
  return data
}
console.log(getCurrentData(date));

// write a javascript function to compare dates
let d1 = new Date("25 april")
console.log(d1);
let d2 = new Date()
console.log(d2);
const isCompared = (date1, date2) => {
  if (date1 > date2) {
    return 'date1 > date2'
  } else if (date1 < date2) {
    return 'date2 > date1';
  } else {
    return "date1 == date2"
  }

}
console.log(isCompared(d1, d2));
// write a javascript function test whether a date is a weekend (isWeekend) 
// let d3 = new Date(2020, 3, 3)
// console.log(d3);
// const isWeekend = (date) => {
//   if (date <= 5) {
//     return "its weekend!"
//   } else {
//     return "keep working"
//   }
// }
// console.log(isWeekend(d3));


// write a javascript function witch return the number of days between two dates

let d4 = new Date()
let d5 = new Date(1000)
console.log(d5);
const daysBetWeen = (date1, date2) => {
  return date1 - date2
}
console.log(daysBetWeen(d4, d5));