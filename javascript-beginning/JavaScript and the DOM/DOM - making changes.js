// DOM - making changes

// Editing with methods - find the element, create event and change value using textContent
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
})

// Check what the content is using properties
input.type
input.type = 'checkbox'
input.className

// Find element, select attribute and insert value
p.title = "List description";
// Find element, select class and insert value
element.className = "newName";

// Get and store input value, find the content of another element and insert the stored input value
const inputValue = document.getElementById('linkName').value;
document.getElementById('link').textContent = inputValue;

// Adding a button with an if condition inside the event listener
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
});

// Create new elements using properties
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]; // Find the ul you want to edit
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li); // Append a li onto the ul variable
  addItemInput.value = ''; // Last action is to make the value an empty string
});

// Quiz - Select content, create new paragraph, update paragraph class name, append paragraph to content

var contentDiv = document.getElementById('content');
var newParagraph = document.createElement('p');
newParagraph.className = "panel";
contentDiv.appendChild(newParagraph);

// Remove elements using nodes
const removeItemButton = document.querySelector('button.removeItemButton');

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]; // Find the ul you want to edit
  let li = document.querySelector('li:last-child'); // Use query selector and append the tag with :last-child
  ul.removeChild(li); // Append a li onto the ul variable
});

// Quiz
var myList = document.querySelector('ul');
var firstListItem = document.getElementById('first');
myList.removeChild(firstListItem);

// Practice Manipulating the DOM

// 1: Set the text of the <h1> element
let title = document.querySelectorAll('h1')[0];
title.textContent = 'My List';

// 2: Set the color of the <h1> to a different color
title.style.color = 'red';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
let description = document.querySelector('p.desc');
description.innerHTML = `A list of <b>things</b> to do today:`;

// 4: Set the class of the <ul> to 'list'
let ul = document.querySelectorAll('ul')[0];
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
let li = document.createElement('li');
li.innerHTML = `<input> Eat ice cream`;
ul.appendChild(li);

// 6: Change all <input> elements from text fields to checkboxes
let input = document.getElementsByTagName("input");
for(let i = 0;i < input.length; i += 1) {
  input[i].type = "Checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteBoxButton = document.createElement('button'); // Create the button (just like you are selecting existing, but use createElement)
const deleteBoxButton.textContent = 'Delete';

const extra = document.querySelector('.extra'); // Where will it go? select the div, and you can append as child.
      extra.appendChild(deleteBoxButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container'); // Selecting the whole div.

deleteBoxButton.addEventListener('click', () => {
  container.removeChild(extra); // You can simply remove the child and target the extra var
});
