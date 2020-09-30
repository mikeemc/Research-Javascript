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
const grades = [
  [80,90,100,95],
  [70,80,90,100],
  [60,90,50,80]
]

// grades[0][3] = 95

// Create a Multidimensional Array - Exercise
const playlist = [
  ['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];

const myArtists = `${playlist[0][2]}, ${playlist[4][2]}, ${playlist[3][2]}`
console.log(myArtists);

// Creating a function to be used with any array
function createListItems( arr ) {
  let items = ''; // Create the variable
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i][0] }, by ${ arr[i][1] } - ${ arr[i][2] }</li>`; // Every loop adds one value to let, which cycles through the list
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;

// Exercise quiz - Input answers, show answers correct and incorrect using function
// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['How many planets are in the Solar System?',8],
  ['How many continents are there?',7],
  ['How many legs does an insect have?',6],
  ['What year was JavaScript created?',1995]
];

// 2. Store the number of questions answered correctly
const correct = []; // Empty array
const incorrect = [];
let correctAnswers = 0;

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i][0]; // Just creating new variables with the array
  let answer = questions[i][1];
  let response = prompt(question);

  if (response == answer) { // Simpler if condition
    correctAnswers++;
    correct.push(question); // Push the question into the correct array
  } else {
    incorrect.push(question); // Push the question into the incorrect array
  }

  function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`; // Creates the list using the li tag
    }
    return items;
  }

}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(correct)}</ol>

  <h2>You got these questions wroong:</h2>
  <ol>${createListItems(incorrect)}</ol>
  `; // Inserts the list here, using the array correct and incorrect.

document.querySelector('main').innerHTML = html;

// Return position of a value in an array
const colors = [ 'tomato',  'crimson', 'darkred', 'firebrick' ];
colors.indexOf('darkred'); // 2

// Exercise - What is the length of allTasks?
const morningTasks = [ 'study', 'exercise', 'write' ];
const eveningTasks = [ 'bake', 'edit article',  'chill' ];
const allTasks = [...morningTasks, ...eveningTasks];
morningTasks.pop();

// Answer is 6 not 5
// The spread syntax creates a "copy" of the morningTasks array. So morningTasks.pop() removes an element from the end of that array only.
