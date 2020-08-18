/*
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let playerScore = 0;

// 2. Store the rank of a player
let playerRank = "Nothing";

// 3. Select the <main> HTML element
const main = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const questionOne = prompt("Name a programming language that's also a gem.");
if (questionOne.toLowerCase() === "ruby"){
  playerScore += 1;
}

const questionTwo = prompt("Name a programming language that's also a snake.");
if (questionTwo.toLowerCase() === "python"){
  playerScore += 1;
}

const questionThree = prompt("What language do you use to style web pages?");
if (questionThree.toLowerCase() === "css"){
  playerScore += 1;
}

const questionFour = prompt("What language do you use to build the structure of web pages?");
if (questionFour.toLowerCase() === "html"){
  playerScore += 1;
}

const questionFive = prompt("What lanugage do you use to add interactivity to a web page?");
if (questionFive.toLowerCase() === "javascript"){
  playerScore += 1;
}

console.log(playerScore);

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (playerScore === 5) {
  playerRank = "Gold";
} else if (playerScore === 4 || playerScore === 3) {
  playerRank = "Silver";
} else if (playerScore === 2 || playerScore === 1) {
  playerRank = "Bronze";
} else if (playerScore === 0) {
  playerRank = "No crown";
}

console.log(playerScore);
console.log(playerRank);

// 6. Output results to the <main> element

main.innerHTML = `<h2>You got ${playerScore} out of 5 questions correct.</h2><p>Crown earned: <b>${playerRank}</b></p>`;
