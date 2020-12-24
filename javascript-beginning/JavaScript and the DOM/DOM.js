// DOM

// Document is a global variable, then you get the element
// A simple example
const myHeading = document.getElementById('myHeading'); // myHeading is the name of the ID attribute of the H1 tag

myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
});

// Coding example - get elements, input value, select value
/*
    <h1 id="myHeading">Javascript with the DOM</h1>
    <p>Making a web page interactive</p>
    <input type="text" id="myTextInput">
    <button id="myButton">Make the heading red</button>
    <button id="myButtonReset">Reset</button>
*/

// Script
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myButtonReset = document.getElementById('myButtonReset');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

myButtonReset.addEventListener('click', () => {
  myHeading.style.color = '#484848';
});

// What if you want multiple elements or to find elements just by tag/that have no // ID
const myHeading = document.getElementsByTagName('h1')[0];
// This select elements based on the tag H1, in the example page there is just one H1, but if there were more you can also define which one, 1 elements = [0]
myHeading.length; // Counts how many H1 tags exist

/*
  <p>Things that are purple:</p>
  <ul>
    <li>grapes</li>
    <li>amethyst</li>
    <li>lavender</li>
    <li>plums</li>
  </ul>
*/
const myList = getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) { // The loop runs the same amount of times as there are items in the list
  myList[i].style.color = 'purple';
}

// Select elements based on their class

/*
  <p>Things that are purple:</p>
  <ul>
    <li>grapes</li>
    <li class="error-not-purple">oranges</li>
    <li>amethyst</li>
    <li class="error-not-purple">trucks</li>
    <li class="error-not-purple">snow</li>
    <li>lavender</li>
    <li>plums</li>
  </ul>
*/

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) { // The loop runs the same amount of times as there are items in the list
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red'; // Targets the Var which only has data with that class name
}

// Query seletors
document.querySelectorAll('li'); // Selects all the li elements on the page
document.querySelector('li'); // Selects the first element on the page
document.querySelector('#myHeading'); // Selects an element based on ID
document.querySelector('.error-not-purple'); // Selects an element based on it's class (a dot is a CSS selector)
document.querySelector('[attribute=value]'); // Selects a specific attribute on HTML elements (between brackets)

// example - these are both the same outcome
document.getElementsByClassName('error-not-purple');
document.querySelector('.error-not-purple');

// Task

var listItems = document.getElementsByTagName('li');
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];
}

// Quiz - selecting descendent elements
let navigationLinks = document.querySelectorAll('nav a');
let galleryLinks = document.querySelectorAll('#gallery a');
let footerImages = document.querySelectorAll('footer img');

// Quiz

// 1: Select the element with the ID 'about'.
//    Store the element in the variable `about`.
const about = document.getElementById('about');
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const h2 = document.getElementsByTagName('h2');
for(let i = 0;i < h2.length; i += 1) {
  h2[i].style.color = "red";
}

// 3: Select all elements with the class '.card'.
//    Set their background color to the color of your choice.
const card = document.getElementsByClassName('card');
for(let i = 0;i < card.length; i += 1) {
  card[i].style.backgroundColor = "yellow";
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
const ul = document.querySelector('ul');
ul.style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.getElementsByClassName('container')[1];
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.
const titleLink = document.querySelectorAll('a[title]');
for(let i = 0;i < titleLink.length; i += 1) {
  titleLink[i].style.color = "salmon";
}
