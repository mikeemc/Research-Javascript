// User interaction

// Creating function
function say(something) {
  console.log(something);
};

function exec(func, arg) {
  func(arg);
};

exec (say, 'Hey, there'); // In brackets the data types are a function and a string.

// The above function can be passed onto another function below
// Paste the say function into the func and make an arrow function.
exec((something) => {
  console.log(something);
}, 'Greetings');

// An example of console logging text after 3 seconds
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings');

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

// Another example
function add(num1, num2) {
  console.log(num1 + num2);
}

window.setTimeout(add, 5000, 2, 2); // Finds the add function, then the code, then the parameters

// Listening for Events with addEventListener()
const listItems = document.getElementsByTagName('li'); // Remove the square brackets 0 to fetch all the list

// Passing in a callback function
for(let i = 0;i < listItems.length; i += 1) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
};

// Exercise - Click event listener
var warning = document.getElementById("warning");
var button = document.getElementById("makeItRed");

button.addEventListener('click', () => {
    warning.style.backgroundColor = 'red';
});

// Event Bubbling and Delegation
// Bubbline includes child, parent, grandparent, etc. when the child is clicked it goes up the tree.
// Delegation is for down the tree

eventTarget.addEventListener('click', (event) => {
  // event is an object with info and methods
});

// Logs which element that was clicked to the console
document.addEventListener('click', (event) => {
  console.console.log(event.target);
});

// Exercise - Add condition that changes the background of the input only
let section = document.getElementsByTagName('section')[0];
let input = document.getElementsByTagName('input');

for(let i = 0;i < input.length; i += 1) {
  input[i].addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  })
};
