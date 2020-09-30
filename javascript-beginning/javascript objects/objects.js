// Object basics

// What is an Object?
// All objects obtain properties and methods
// A property is like a variable
// A method is something that can be done to the object

// Curly braces represent a object literal
const student = {
  name: "Trevor",
  grades: [85,90,95,100]
}

// Access Object Properties
const person = { // Curly braces define object
  name: 'Edward',
  city: 'Boston',
  age: 27,
  isStudent: true,
  skills: ['JavaScript','HTML', 'CSS']
};

const message = `Hi, I'm ${person.name}. I live in ${person.city}.` // Dot notation = person.name
console.log(message);

// Set the Value of Object Properties
const student = {
  name: 'Liz',
  age: 25,
  city: 'New York'
};

student.name = 'Liz'; // Just like variables, you can assign a new value
student.city = 'New York'; // You can overwrite existing values or create a new property

// Another example - add a nickname and use a method
const person = {
  name: 'Edward',
  city: 'Boston',
  age: 27,
  isStudent: true,
  skills: ['JavaScript','HTML', 'CSS']
};

person.nickname = 'Eddie';

const message = `Hi, I'm ${person.name}. I live in ${person.city}. Most know me as ${person.nickname}. My age is ${person.age + 1}. I have ${person.skills.length} skills: ${person.skills.join(', ')}.` // Dot notation = person.name
console.log(message);

// Use `for in` to Loop Through an Object's Properties
const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

for ( let prop in person) { // prop is a variable name, name it what you want - it is connecting to the person object
  console.log(prop); // Shows each property in the person object
  console.log(`${prop}: ${person['name']}`); // shows each property but shows only the name value
  console.log(`${prop}: ${person[prop]}`); // shows each property and each value to the properties
}

// Useful JavaScript Object Methods

// Don't use the for .. in loop

// Object.keys()
// The Object.keys() method returns an array containing the property names (or keys) of an object. Consider the following code:
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person);
console.log(personProps);

// Returns > (4) ["name", "role", "skills", "isTeacher"]

// Check the length of an object
// Object literals, do not have a length property.
// Since Object.keys() stores an object's keys inside a new array, you can use it for checking the length of an object. For example:
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

console.log( Object.keys(person).length );  // 4

// Object.values()
// The Object.values() method returns an array of a given object's property values, in the same order as provided by a for...in loop. For example:
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person);
console.log(personVals);

// > (4) ["Reggie","Software developer",["JavaScript","HTML","CSS"],true]

// Spread operator
// Just like combining arrays with the spread operator, you can use the spread operator to copy key/value pairs from one object to another.
const name = {
  firstName: 'Reggie',
  lastName: 'Williams',
};

const role = {
  title: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// merge `name` and `role` into a `person` object
const person = {
  ...name,
  ...role
};
console.log(person);

// Returns > {firstName: "Reggie",lastName: "Williams",title: "Software developer",skills: ["JavaScript", "HTML", "CSS"],isTeacher: true}

// Store Objects in Arrays
// In the past we used arrays for this, but now you can put objects inside of arrays
// 1. Create an array to hold quiz questions and answers
const questions = [ // put square brackets here then the curly braces with keys and values inside
  { question: 'How many planets are in the Solar System?', answer: '8' },
  { question: 'How many continents are there?', answer: '7' },
  { question: 'How many legs does an insect have?', answer: '6' },
  { question: 'What year was JavaScript created?', answer: '1995' }
];

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i].question; // Here we replace the [1] and [0] with the key name
  let answer = questions[i].answer;
  let response = prompt(question);

  if ( response === answer ) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;

// Pet List Challenge - First attempt using a function
const pet = [
  {name: "Aus", type: "Dog", breed: "Aussie", age: 2, photo: "img/aussie.jpg"},
  {name: "Dachy", type: "Dog", breed: "Dachshund", age: 5, photo: "img/dachshund.jpg"},
  {name: "Goldy", type: "Dog", breed: "Golden Retriever", age: 3, photo: "img/golden.jpg"},
  {name: "Persy", type: "Cat", breed: "Persian", age: 5, photo: "img/persian.jpg"},
  {name: "Puggy", type: "Dog", breed: "Pug", age: 1, photo: "img/pug.jpg"},
  {name: "Tabbie", type: "Cat", breed: "Tabby", age: 2, photo: "img/tabby.jpg"}
];

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < pet.length; i++) {
    items += `
      <h2>${pet[i].name}</h2>
      <h3>${pet[i].type} | ${pet[i].breed}</h3>
      <p>Age: ${pet[i].age}</p>
      <img src="${pet[i].photo}" alt="${pet[i].breed}">
`;
  }
  return items;
}

let html = `${createListItems(pet)}`;

document.querySelector('main').innerHTML = html;

// Pet List Challenge - Second attempt using for loop and two JS files

// pets.js
const pets = [
  {name: "Aus", type: "Dog", breed: "Aussie", age: 2, photo: "img/aussie.jpg"},
  {name: "Dachy", type: "Dog", breed: "Dachshund", age: 5, photo: "img/dachshund.jpg"},
  {name: "Goldy", type: "Dog", breed: "Golden Retriever", age: 3, photo: "img/golden.jpg"},
  {name: "Persy", type: "Cat", breed: "Persian", age: 5, photo: "img/persian.jpg"},
  {name: "Puggy", type: "Dog", breed: "Pug", age: 1, photo: "img/pug.jpg"},
  {name: "Tabbie", type: "Cat", breed: "Tabby", age: 2, photo: "img/tabby.jpg"}
];

//directory.js
let html = '';

for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
  `;
}

document.querySelector('main').insertAdjacentHTML('beforeend',html);

// What method returns an array containing a given object's property names?
.keys()
