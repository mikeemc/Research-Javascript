// A while loop example using a function

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


let counter = 0; // Stores a count

while (counter < 10) {
  console.log(`The randome number is ${getRandomNumber(10)}`);
  counter += 1; // Adds 1 to the counter var
}

// The do...while Loop - this executes first before checking the condition
// Same as above but the condition is checked after the first execution
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;

do {
  console.log(`The randome number is ${getRandomNumber(10)}`);
  counter += 1;
} while ( counter < 10 );

// Counting short hands

// Increment operator
// It's so common in JavaScript to increment a number value by one that there's a shorthand operator (called the "increment operator") that's used frequently with loops. Use it on your counter variable by replacing += 1 with two plus symbols (++).
function getRandomNumber(upper) { ... }

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter++; // increment operator
} while ( counter < 10 );

// Decrement operator
// JavaScript also provides the decrement operator (--), which subtracts one from an integer value. For example:
function getRandomNumber(upper) { ... }

let counter = 10;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter--; // decrement operator
} while ( counter > 0 );

// This time, the loop counts down from 10 to 0, decreasing the value assigned to the counter variable by one each time through the loop. It's the same as counter -= 1.

// For loop - a more compact loop
for (let counter = 0; counter < 10; counter++) { // (variable; condition; updated)
  console.log(`The randome number is ${getRandomNumber(10)}`); // Output of loop each time the condition is true
}

// Dynamically Display HTML with a Loop

const main = document.querySelector('main');
let html = '';

for (let i = 5; i <= 100; i+=5) {
  html += `<div>${i}</div>`;
}

main.innerHTML = html;

// How to break out of a loop without the condition being false
for ( let i = 5; i >= 1; i-- ) {
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
    break;  // immediately terminate the loop
  }
}

alert(message);

// Another break example
const tMinus = 10;
let message = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i-- ) {
  let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
  if ( status === null || status.toLowerCase() === 'n' ) {
    message = 'Abort launch!';
    break;
  }
}

alert(message);

// For loop task
let html = '';
let red;
let green;
let blue;
let randomRGB;
let i;

for (let i = 1; i <= 10; i++) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;

// The same for loop task but with a function
let html = '';
let red;
let green;
let blue;
let randomRGB;
let i;

for (let i = 1; i <= 10; i++) {
  const multiply = (red, green, blue) => Math.floor(Math.random() * 256); // Here is the function
  randomRGB = `rgb( ${multiply(red)}, ${multiply(green)}, ${multiply(blue)} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;
