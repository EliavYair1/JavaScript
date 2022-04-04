// const arr = [2,3,4];
// console.log(arr);


// destructing
// // const first=arr[0], second=arr[1], third=arr[2];
// let [first, ,third] = arr;

// console.log(first, second, third);

let x = 5;
let y = 6;

// switch between items
[x, y] = [y, x];
console.log(x, y);

// nested arrays
const nestArr = [1, 2, [3, 4]];

const [first, second, [third, forth]] = nestArr;

console.log(first, second, third, forth)

// default values
const newArr = [1, 6]



const [aa, bb = 5] = newArr;
console.log(aa, bb)

const obj = {
  name: "Elad Zucker",
  age: 22
};
const {
  name,
  age
} = obj;

console.log(name, age);

// const fullName = obj.name;
// const myAge = obj.age;

const {
  name: fullName = "none",
  age: myAge
} = obj;


console.log(obj);
console.log(fullName, myAge);


let aaa = 0;
let bbb = 0;

({
  name: aaa,
  age: bbb
} = obj);


console.log(aaa, bbb);

/**
Exercise 1
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
  console.log("EXERCISE 1");

  let item = ["Egg", 0.25, 12];

  let name = item[0];
  let price = item[1];
  let quantity = item[2];

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  [name, price, quantity] = item;
  console.log(item);
}

/**
Exercise 2
Rewrite the code below to assign each number to the right variable.
*/
{
  console.log("EXERCISE 2");

  let numbers = [3, 5, 4, 2, 6, 1];

  let [three, five, four, two, six, one] = numbers;

  console.log(numbers);
  console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
}

/**
Exercise 3
We have an object called 'user'.
Write the destructuring assignment that reads:
- 'name' property into the variable 'name'.
- 'years' property into the variable 'age'.
- 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*/
{
  console.log("EXERCISE 3");

  let user = {
    name: "John",
    years: 30
  };

  let {
    name: name,
    years: age,
    isAdmin: isAdmin
  } = user;


  console.log(name, age, isAdmin);
}

/**
Exercise 4
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
  console.log("EXERCISE 4");

  let person = [12, "Chris", "Owen"];

  let firstName = person[1];
  let lastName = person[2];
  let age = person[0];
  [age, firstName, lastName] = person

  console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  console.log();
}

/** 
Exercise 5
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.
*/
{
  console.log("EXERCISE 5");

  let person = ["Chris", 12, "Owen"];

  let firstName = person[0];
  let lastName = person[2];
  [firstName, , lastName] = person;

  console.log(`Name: ${firstName} ${lastName}`);

}

/**
Exercise 6
Using Array Destructuring get all of the names from this Nested Array
*/
{
  console.log("EXERCISE 6");

  const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam']
  ];

  const [student1, [student2, student3],
    [student4, student5]
  ] = moreStudents;

  console.log(student1, student2, student3, student4, student5);

}


// rest operator
// rest operator mantioning the rest of the array values
const arr = [1, 2, 3];
const arr1 = [...arr]
console.log(arr1);

const arr2 = [1, 2, 3, 4, 6];
[a, b, ...others] = arr2;
console.log(a, b, others);
const testFunction = (...params) => {
  for (let param of params) {
    console.log(param);
  }


  for (let i = 0; i < params.length; i++) {
    console.log(params[i]);

  }
}
testFunction(1, 2, "test", 3.3, false);

/* Provide a page with a text input and a button.
    Within the input provide number of seconds to count.

    When clicking the button , a counter will be shown, when reached the provided time
    open an alert box.
*/

// const timerId = setTimeout( (param1) => console.log(param1), 1000,'Elad Zucker')
// const timerId = setInterval( (param1) => console.log(param1), 1000,'Elad Zucker')

// function startCountdown(seconds) {
//   let counter = seconds;

//   const interval = setInterval(() => {
//     counter--;
//     if (counter < 0 ) {
//      clearInterval(interval);
//       console.log('stop!!!');
//     }
//   }, 1000);
// }
// document.querySelector("#timerInp").value;
// document.getElementById("timerBtn").addEventListener('click',startCountdown(){return timerInp * 1000)
// })
// console.log(startCountdown(5))


// elad solution













// const arr = [2,3,4];
// console.log(arr);

// let [first,,third]= arr;
// console.log(first,third);

// // let [first,,third]= arr;skiping values in array
// // console.log(first,third); 

// let x = 5;
// let y = 6;
// [x,y]= [y,x];
// console.log(x,y); //switching values


// const nestArr = [1,2,3[4,5]];
// const [first,second,[third,forth]]= nestArr;
// console.log(first,second,third,forth);//how to reach out nested array
// const newArr = [1,6];
// const [aa,bb=5]=newArr;//reassigning values in an array
// console.log(aa,bb);

// const obj ={name:"eliav yair",age:31}
// const {name=fullName,age=myAge}=obj;// inserting object properties in variables inside an object
// note you can't skip values in object like the example above :let [first,,third]= arr;
// console.log(obj);
// console.log(fullName,myAge)


// let aaa = 0;
// let bbb =0;
// {name:aaa,age:bbb}=obj;
// console.log(aaa,bbb);

console.log(new Date("1995 10 5") * 24);

console.log(new Date().getDate()); //day in the month
console.log(new Date().getDay()); //day in the week 
console.log(new Date().getFullYear());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getMonth());
console.log(new Date().getTime());
console.log(new Date().get());