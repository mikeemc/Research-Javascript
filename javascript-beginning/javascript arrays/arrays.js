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

// Fetching a list using a for loop
const students = ['Lee','Jim','Tina','Pete','Sharon'];
for ( let i = 0; i < students.length; i++ ) { // Define Var, var less than Array amount, increment var
  console.log(students[i]); // Log array value incrementally
}

// Get the average of an array of scores
// a for loop accesses each number in the scores array and adds it to the current value of total. When the loop completes, the console displays the average score by dividing the value of total by the length of the scores array.
const scores = [ 20, 50, 75, 100, 115 ];
let total = 0;

for ( let i = 0; i < scores.length; i++ ) {
  total += scores[i];
}

console.log( total / scores.length );

// Another example
const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

function createListItems(arr) { // The arr can match any parameter that need to be used
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items; // return what is in the items var
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}// Use the variable as the parameter, then in the function, this array is being used.
  </ol>
`;

// Useful Array methods (Join, Include, indexOf)
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday'
];
// Join - arr.join() - daysInWeek.join(', '); - console.log(daysInWeek.join(', '));
// Shows 'Monday, Tuesday, Wednesday'
console.log(daysInWeek.join(', '));

// Include - arr.includes('') - daysInWeek.includes('Monday'); - console.log(daysInWeek.includes('Monday'));
// Shows boolean (True/False) - it is case sensitive
console.log(daysInWeek.includes('Monday'));

// Join - arr.indexOf() - daysInWeek.indexOf('Monday'); - console.log(daysInWeek.indexOf('Monday'));
// Shows a numeric value 0
// If the value isn't there, it returns -1 when it can't find a index of an element
console.log(daysInWeek.indexOf('Monday'));

// Another example - prompt pop up with if else
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (inStock.includes(search)) {
  message = `Yes, we have <b>${search}</b>.`;
} else {
  message = `Sorry, we do not have <b>${search}</b>.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;

// Locate and Join Array Elements
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (!search){ // if the user presses cancels or submits a blank search then this is used
  message = `<b>In stock:</b> ${inStock.join(', ')}`;
} else if (inStock.includes(search.toLowerCase())) { // Takes the array and uses the 'search' variable as a parameter - makes the input lowercase too
  message = `Yes, we have <b>${search}</b>.`;
} else {
  message = `Sorry, we do not have <b>${search}</b>. It's #${inStock.indexOf(search.toLowerCase())+1} on the list!`; // Searches for the index of the search parameter adding 1
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;

// What is a Multidimensional Array?
