// Function basics

// Function Declaration
function square(x) {
  return x * x;
}

// Function Expression is a function without a name assigned to a variable
const square = function(x) {
  return x * x;
}; // Don't forget the closing semi-colon

// Create the function with commands inside the curly braces
function alertRandom() {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  alert(randomNumber);
}

alertRandom(); // Calls function

// Another basic example
function sayHi() {
  const dialogue = "Hi";
  alert(dialogue);
}

sayHi();

// Print a Function - return the value with return
function goToCoffeeShop() {
  return "Your coffee is on its way.";
}
console.log(goToCoffeeShop());

// Save a function in a variable
function goToCoffeeShop() {
  return "Your coffee is on its way.";
}
const coffeeStatus = goToCoffeeShop();

// Pass a function into another function
function sayYay() {
  return 'Yay';
}

function greeting(func, name) {
  console.log(`${func()}, ${name}!`);
}

greeting(sayYay, 'Lee');

// Another example of returning another function
function sayYay() {
  return function() {
    console.log('Yay!');
  }
}
