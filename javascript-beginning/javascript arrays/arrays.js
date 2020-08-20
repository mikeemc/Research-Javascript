// What is an Array?
// A data structure, a way to store more than one value in a single place and update data
const planets = ['Mercury','Venus','Earth','Mars']; // the brackets signify an array
const dataType = ['Str',1,true]; // You can mix strings, numbers and booleans

// How to access the elements in the Array
console.log(planets[0]); // Shows Mercury
console.log(planets[2]); // Shows Earth

// How to add elements to an array
const instruments = ['piano', 'drums', 'trumpet'];

instruments.push('guitar'); // Adds elements to the end of the array
instruments.unshift('triangle'); // Adds elements to the beginning of the array

// Remove Elements From an Array
const numbers = [100,200,300,400,500];

numbers.pop(); // Removes the elements from the end
numbers.shift(); // Removes the elements from the beginning

// Exercise adding array elements to other variables
const orderQueue = ['1XT567437','1U7857317','1I9222528'];
let shipping = orderQueue.shift(); // Takes the element from the beginning in orderQueue and added to shipping
let cancelled = orderQueue.pop(); // Takes the element from the end and puts it into the cancelled var

// Copy and Combine Arrays with the Spread Operator

// Array within an array
const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', middle, 'bottom bun'];

console.log(burger); // Will display the two burger elements and [3] for the middle

// The Spread Operator is ...
const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];

console.log(burger); // Will display the five elements

// Combing both into another variable
const brass = ['trumpet','trombone','tuba','baritone'];
const woodwind = ['flute','oboe','bassoon'];
const instruments = [...brass, ...woodwind];

console.log(instruments); // Will display the seven elements

instruments.unshift('guitar','piano'); // Adds two more to the beginning of this variable making nine

// Find the max or min number in an Array (... are needed)
const numbers = [10,20,30,40,50];
console.log( Math.min(...numbers) ); // Shows 10
console.log( Math.max(...numbers) ); // Shows 50

// Making a copy of an array with the spread operator
// One of the main benefits of copying an array is that you preserve the values of the original array.
const mathStudents = [
  'Marty',
  'Jennifer',
  'Lorraine',
  'Goldie'
];

const scienceStudents = [
  'Emmett',
  'Clara',
  'Needles',
  'Strickland'
];

const mathStudentsCopy = [...mathStudents];
const scienceStudentsCopy = [...scienceStudents];

// This affects the copied arrays only
//  The original arrays remain unchanged
mathStudentsCopy.pop();
scienceStudentsCopy.push('Marvin');
