// Variable options
var varName; // Basic declaration
let varName; // Value an be overwritten
const varName; // Value will never change

// Alert popup
alert("A string message");

// Console output
console.log("A string message");

// Writing in document
document.write("A string message");

// HTML select statement
document.querySelector("elementId").textContent = "String";

// Adding to a Variable count
var += 10;

// Transform values (variable is considered an object, length is the property, access by using a dot)
console.log(var.length);

// Transform using a method (methods have brackets), performing an action
console.log(var.toLowerCase());

// Prompr command - popup with input
prompt("A string message");
const var = prompt("A string message");

// Concatenation
let var = "A string message" + var;
var += "more text added to string";

// Concatenation options
const message = `This is a string with a ${var}`;
const message = `This string has math ${2 * 3}`;

// Operators
var = 1; // Gives value
var == 1; // Compares value, ok to have different type or case
var === 1; // Strict equality operator compares value and type

// Logical NOT operator (!)
var != 1;
var !== 1; // Strict inequality operator

// AND and OR Operators
var !== 1; && var !== 2;
var !== 1; || var !== 2;

// IF conditions
if (operator === true){
  "Show this for true"
} else {
  "Show this for false"
}

if (operator === true){
  "Show this for true"
} else if (operatorTwo === true) {
  "Show this for true"
} else if (operatorThree === true) {
  "Show this for true"
} else {
  "Show this for false"
}

// Assignment Operators
score = score + 10;
score += 10; // Short hand
score = score - 20;
score -= 20; // Short hand
score = score * 5;
score *= 5; // Short hand
score = score / 2;
score /= 2; // Short hand

// Find value type
console.log(typeof var); // shows string
console.log(typeof parseInt(var)); // changes to Integer for whole numbers
console.log(typeof parseFloat(var)); // changes to Float for decimals
+var // Works with both integers and floats
