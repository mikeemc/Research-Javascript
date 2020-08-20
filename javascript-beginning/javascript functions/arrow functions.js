// Create Functions Using Arrow Syntax

// Basic syntax for an Arrow Function Expression
const square = (x) => { // Remove the function keyword and add the equals and arrows
  return x * x; // Keep body the same
};

// Another example
const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
};

getRandomNumber(12); // 12 is the value that you put in the parameter "upper"

// A rewritten example of a past function to an AFE
const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
};

// Arrow Functions with One Parameter
// If your arrow function accepts a single argument, like the square function below, you can omit the parentheses:
const square = x => {
  return x * x;
}

square(10); // 100

// Arrow Functions with Multiple Parameters
// JavaScript does not allow you to remove the parentheses from arrow functions with no or multiple parameters; only functions with a single parameter.
// The following arrow function expression (without parentheses) throws a syntax error:
const getArea = width, length, unit => {
  const area = width * length;
  return `${area} ${unit}`;
}

getArea(10, 20, 'sq ft');
// Uncaught SyntaxError: Missing initializer in const declaration
// You need to include the parentheses when working with multiple (or no) parameters:
const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
}

getArea(10, 20, 'sq ft');  // 200 sq ft

// Arrow Functions as One-line Statements
// If your function body (the part between the curly braces) is only one line of code, you can make the function more concise by omitting the return keyword and placing everything on one line:
const square = x => { x * x };

// When you omit the return keyword in a single-line function, the value is returned automatically (or implicitly). This is called an implicit return.
// In fact, when using an implicit return, you don't even need the curly braces. You can reduce the arrow syntax further by writing the function like this:
// You don't need {} or the return keyword if the arrow function is on a single line.
const square = x => x * x;

const multiply = (x, y) => x * y;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// Single-line Functions with No Parameters

// Finally, a single-line arrow function with no parameters requires parentheses before the arrow (=>) token, otherwise JavaScript produces a syntax error. For example:
const name = 'David';
const greeting = => alert(`Greetings, ${name}!`);
greeting(); // Uncaught SyntaxError: Unexpected token '=>'

// The following is the correct way:
const name = 'David';
const greeting = () => alert(`Greetings, ${name}!`);

// This shorter syntax might seem strange at first, and take a little getting used to, but compared to the following expression:
const greeting = function() {
  alert(`Greetings, ${name}!`);
};

// it can make parts of your code more concise and easier to read. However, even if your function meets the criteria for concise syntax, it's still perfectly acceptable to use the standard arrow function syntax.

// Default parameter value
function sayGreeting(name = 'student') { // The function takes the value 'student' unless something else overrides
  return `Good morning, ${name}`;
}

// Example of skipping parameters and uses fallback until name
function sayGreeting(greeting = 'Good morning', name = 'student') {
  return `Good morning, ${name}`;
}

sayGreeting(undefined, 'Mike');

// Checking a function for numbers
function getRandomNumber (lower, upper = 100) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw Error('Both arguments must be numbers'); // Shows an error just like the normal JS errors
  }
  return return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


// Arrow function task (function then arrow)
function addToTen(num) {
  return 10 + num;
}
const addToTen = num => 10 + num;

function divideUs(num1, num2) {
  return num1/num2;
}
const divideUs = (num1, num2) => num1/num2;

function printMyName() {
  let myName = 'Ashley';
	console.log(myName);
}

const printMyName = () => {
  let myName = 'Ashley';
	console.log(myName);
} // Keep curly braces because there are two lines of code
