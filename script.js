// INSTRUCTIONS 
// Build a number-guessing game.
// A user has three tries to guess the number, between 1-100, that the computer picked.
// Whenever they guess, let them know if their guess is too high, or too low.
// After their third guess, reveal the number the computer chose to them, 
// and let them know if they got it right or wrong.
// Use an HTML form to create an input input field for the user to enter their guess
// Add a "Submit" button to the form, and use the "onsubmit" attribute 
// to call your JavaScript function.


// PLANNING: 
// Create a function that randomly picks a number between 1-100
// Have an if/else/else statement that matches the result, or is > or < 
// Have a statement say which guess they are on. If they get to the fourth guess, they fail.


const min = Math.ceil(1);
const max = Math.floor(100);
const randomNumber = Math.round(Math.random(min, max) * 100);
let guesses = 0

const numberGuess = () => {
	const userValue = Number(document.getElementById("guess").value);

	if (userValue === randomNumber) {
		alert("You win! You got " + randomNumber);
	} else if (userValue < randomNumber) {
		guesses++
		alert("Your number is too low. You have used (" + guesses + ") guesses.");
	} else if (userValue > randomNumber) {
		guesses++
		alert("Your number is too high. You have used (" + guesses + ") guesses.");
	};

	if (guesses === 3) {
		alert("You lose! The answer was " + randomNumber + ". Please refresh to try again.")
		document.getElementById("submit").disabled = true;
	};
};