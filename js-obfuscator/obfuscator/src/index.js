// Simple Random Number Guessing Game

// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Variables to track the game state
let attempts = 0;
let guess = null;

console.log("Welcome to the Random Number Guessing Game!");
console.log("Guess a number between 1 and 100.");

// Function to get user input
function getUserInput(promptMessage) {
    const userInput = prompt(promptMessage);
    return parseInt(userInput, 10);
}

// Game loop
while (guess !== targetNumber) {
    guess = getUserInput("Enter your guess:");

    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
        continue;
    }

    attempts++;

    if (guess < targetNumber) {
        console.log("Too low! Try again.");
    } else if (guess > targetNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log(`Congratulations! You guessed it in ${attempts} attempts.`);
    }
}
