// Function parameter represents a value you supply - so the function can do something with it
// Function declarations loads before anything else in the file, you can request it at any point unlike Vars

// Put in the parameter (argument) name 'upper' then use it in the function, then apply the value for upper below
function alertRandom(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  alert(randomNumber);
}

console.log( alertRandom(6) );
console.log( alertRandom(13) );

// You can include multiple arguments in a function
function goToCoffeeShop(drink, pastry) {
  alert(`Your ${drink} and ${pastry} are on the way!`);
}

goToCoffeeShop('Espresso', 'croissant');

// Pass Multiple Arguments to a Function (passing more than four or five can make it hard to read)
function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit} `;
}

getArea(10, 3, 'inches');


// Another example
function max(a,b) {
    if (a > b) {
        return a;
    } else {
      return b;
    }
}

console.log(max(3,5));

// Function scope protects variables from overwriting each other.
let person = 'Lee' // Globale scope

function greeting() {
  let person = 'Meg'; // Using person = 'Meg'; will adjust the global scope - not recommended
  alert(`Hi, ${person}!`);
}

function greeting2() {
  let person = 'Robert';
  alert(`Good morning, ${person}!`);
}

greeting(); // Output is Meg
alert(`Hi, ${person}`); // Output is Lee
greeting2(); // Output is Robert

// Another example
const name = "Trish";
function setName() {
  const name = "Sarah";
}
setName();
alert(name);

// A Function Expression lets you assign a function to a variable.
function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}
// Becomes:
const getRandomNumber = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};

// An anonymous function is a function without a name after the function keyword
const multiply = function( a, b ) {
  return a * b;
};


// Function Practice

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height

function getArea(width, height) {
  return width * height;
}
console.log(getArea(5,22));

// 3. Create a function that calculates the volume of a rectangular prism.
//    The function should accept the width, height and length as arguments
//    and return the volume of that rectangular prism.
//    The volume of a rectangular prism is the width * height * length

function getVolume(width, height, length) {
  return width * height * length;
}
console.log(getVolume(4.5, 12.5, 17.4));

// 4. Create a function that calculates the area of a circle.
//    The function should accept the radius of the circle as an argument
//    and return the area of that circle.
//    The area of a circle is the value of π * radius^2

function getCircleArea(radius) {
  return Math.pow(radius, 2) * Math.PI;
}
console.log(getCircleArea(7.2));

// 5. Create a function that calculates the volume of a sphere.
//    The function should accept the radius of the sphere as an argument
//    and return the volume.
//    The volume of a circle is: 4/3 *  π * radius^3
function getSphereVolume(radius) {
  return (4/3) * Math.PI * Math.pow(radius, 3);
}
console.log(getSphereVolume(7.2));

//    -- Area of rectangle that is 5 wide and 22 tall: 110
//    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
//    -- Area of a circle that with a radius of 7.2: 162.8601631620949
//    -- Volume of a spehere with a radius of 7.2: 1563.4575663561109
