// Primitive data types include String, Boolean and Numerical. These are all considered Objects
// Objects have Properties and they can perform actions using Methods

// Create a Random Number
Math.random();
Math.floor(Math.random()*6) + 1;

// Operator that returns the type of a Variable
console.log(typeof totalStudents);

// Changes a string to a number (Unary Operator)
let str = '100';
let fltStr = '100.21';
let nanStr = 'greetings';

+str    // 100
+fltStr // 100.21
+nanStr // NaN
+'1000' // 1000
+10.25  // 10.25


// Random Number Challenge 1

// Collect input from a user
const inputHigh = prompt('Please provide a number');

// Convert the input to a number
const highNumber = parseInt(inputHigh);

if (highNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor(Math.random()*highNumber)+1;

  // Create a message displaying the random number
  console.log(`${randomNumber} is a random number between 1 and ${highNumber}.`);
} else {
  console.log('You need to provide a number. Try again');
}

// Random Number Challenge 1

const inputLow = prompt('Please provide a low number');
const inputHigh = prompt('Please provide a higher number than what you just entered');

// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

if (lowNumber >= 0 && highNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor(Math.random()*(highNumber-lowNumber + 1)) + lowNumber;

  // Create a message displaying the random number
  console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`);
} else {
  console.log('You need to provide two numbers. Try again');
}

// Random Number Challenge 1.2

const inputLow = prompt('Please provide a low number');
const inputHigh = prompt('Please provide a higher number than what you just entered');

// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

// Check if lowNumber OR highNumber is not a number
if ( isNaN(lowNumber) || isNaN(highNumber) ) {
  console.log('You need to provide two numbers. Try again.');
} else {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;

  // Create a message displaying the random number
  console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`);
}
