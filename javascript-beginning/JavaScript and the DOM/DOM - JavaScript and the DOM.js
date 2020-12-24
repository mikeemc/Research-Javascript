// Using parentNode to Traverse Up the DOM

Element.removeChild();

let paragraph = document.getElementById('myParagraph');
parent.removeChild(paragraph);


let paragraph = document.getElementById('myParagraph');
let parent = paragraph.parentNode; // parentNode propertiy
parent.removeChild(paragraph); // remove the paragraph element from the parent element.

// Objective example
var removeMe = document.querySelector('.remove_me');
var parent = removeMe.parentNode;
parent.removeChild(removeMe);

// This also works for sibling adjustments
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi); // This then only runs if there is a previous li
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li); // Use insert before the next siblings but before the target li
      }
    }
  }
});

// It is possible to treverse up the DOM
let parent = paragraph.parentNode.parentNode.parentNode.parentNode;

// Exercise - add a class of highlight to a <p> element that's an immediate previous sibling of the button being clicked.
var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousElementSibling.className = 'highlight';
  }
});

// Here we want to add HTML to existing and future HTML elements such as a li - here we create a separate function
function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChile(up);

  let down = document.createElement('button');
  up.className = 'down';
  up.textContent = 'Down';
  li.appendChile(down);

  let remove = document.createElement('button');
  up.className = 'remove';
  up.textContent = 'Remove';
  li.appendChile(remove);
}

// Then add this to the existing listener so that it's added per created li element
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]; // Find the ul you want to edit
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li); // Add the function here
  ul.appendChild(li); // Append a li onto the ul variable
  addItemInput.value = ''; // Last action is to make the value an empty string
});

// Add the buttons to existing HTML elements
const lis = listUl.children;

// Below the function, we can loop through the item list calling our attachListItemButtons function on each one
for(let i = 0;i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

// Getting the First and Last Child
ParentNode.firstChild
ParentNode.lastChild

ParentNode.firstElementChild
ParentNode.lastElementChild

const firstListItem = listUl.firstElementChild; // ListUl is an existing var
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'blue';
lastListItem.style.backgroundColor = 'red';

// Question - assign all children of the ul to the constant lis
const ul = document.getElementsByClassName('ul')[0];
const lis = ul.children;

// Question - Given a selected ul element, the following two lines of code are functionally equivalent:
ul.removeElement(ul.children[0]);
ul.removeElement(ul.firstElementChild);
// True

// Question - let's say you have the 3rd list item selected. Using that selection, how could you find a reference to the 4th?
<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>

nextElementSibling

// Question - Assign the last element child of div to the constant span
const span = div.lastElementChild;

// Task - Select all child elements of section and assign them to the paragraphs variable.
var section = document.querySelector('section');
var paragraphs = section.children;

// Task - Next, change the color of each child paragraph to blue.
var section = document.querySelector('section');
var paragraphs = section.children;

for(let i = 0;i < paragraphs.length; i += 1) {
  paragraphs[i].style.color = 'blue';
}
