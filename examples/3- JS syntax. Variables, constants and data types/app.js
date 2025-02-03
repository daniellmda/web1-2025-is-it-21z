const PI = 3.14159;

let r = 5;
let square = PI * r ** 2
console.log(square); // 78.53975

r = 10;
square = 2 * PI * r;
console.log(square); // 62.8318


/* JS Data types */

// Number
let num = 10;
console.log('Number')
console.log(num); // 10
console.log(typeof num); // number

// String
let str = 'Hello, World!';
console.log('String')
console.log(str); // Hello, World!
console.log(typeof str); // string

// Boolean
let isTrue = true;
let isFalse = false;
console.log('Boolean')
console.log(isTrue); // true
console.log(isFalse); // false
console.log(typeof isTrue); // boolean

// Undefined
let x;
console.log('Undefined')
console.log(x); // undefined
console.log(typeof x); // undefined

// Null
let y = null;
console.log('Null')
console.log(y); // null
console.log(typeof y); // object

// Object
console.log('Object')
let obj = { name: 'John', age: 30 };
console.log(obj); // { name: 'John', age: 30 }
console.log(typeof obj); // object

// Array
console.log('Array')
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(typeof arr); // object

// Function
let func = function() {
  return 'Hello, World!';
}
console.log('Function')
console.log(func()); // Hello, World!
console.log(typeof func); // function

