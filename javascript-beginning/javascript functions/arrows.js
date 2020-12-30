// Basic arrow syntax

// No arguments - declare name
const name = "Andrew";

// Function declarations
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}

function sayBye() {
  console.log("Bye " + name);
}

// Function Expression
const sayName = function() {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = function() {
  console.log("Bye " + name);
}

// Arrow function
const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => {
  console.log("Bye " + name);
}

// Arrow functions that have single argument

// Before
function square(x) {
    return x * x;
}

function cube(x) {
    return square(x) * x;
}

// After
const square = (x) => {
    return x * x;
}

const cube = (x) => {
    return square(x) * x;
}

// Arrow functions that have multiple arguments

// Before
function multiply(x, y) {
    return x * y;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// After
const multiply = (x, y) => {
    return x * y;
}

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

// Even simpler!
// You can remove parenthesis if a single argument
// If you are using one line of code you don't need return keyword
// if you have one line, you can also remove curly braces and put the whole function on one line

// Before
const square = (x) => {
    return x * x;
}

// After
const square = x => x * x;
// Example with two arguments (leave parenthesis)
const add = (a, b) => a + b;
