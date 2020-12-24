const words = [
  "amsterdam",
  "pineapple",
  "firefighters",
  "bicicle",
  "titanic",
  "football",
  "thailand",
];
const clues = [
  "Capital of the Netherlands",
  "This fruit is made of two words conjoined",
  "They respond to fires, accidents and other incidents",
  "It only have two wheels, pedals and a handlebar",
  "Luxury British steamship that sank after striking an iceberg",
  "In the US they call it soccer, but in Europe we call it...",
  "The Land of Smiles.",
];

// choose word from array;

const random = Math.floor(Math.random() * words.length);
console.log(random)
const word = words[random];
const chosenClue = clues[random];

// document elements

const chosenWord = document.querySelector("#chosen-word");
const wrongLetters = document.querySelector("#wrong-letters");
const clue = document.querySelector("#clue");
const result = document.querySelector("#result");
const lives = document.querySelector("#lives-left");
const validate = document.querySelector("#validate");
const userInput = document.querySelector("#user-input");
const button = document.querySelector("#check-input");
const playAgain = document.querySelector("#play-again");

clue.innerHTML = `${chosenClue}`;

// create underscores according to word's lenght
let underscore = [];
function createUnderscores() {
  for (let i = 0; i < word.length; i++) {
    underscore.push("_");
  }
  return underscore.join(" ");
}
chosenWord.innerHTML = `${createUnderscores()}`;

//  display initial lives
let livesLeft = ["❤️", "❤️", "❤️", "❤️", "❤️", "❤️"];
lives.innerHTML = `${livesLeft.join("")}`;

button.addEventListener("click", () => {
  let input = userInput.value.trim().toLowerCase();
  // checks if user input is a letter
  if (input.charCodeAt(0) < 97 || input.charCodeAt(0) > 122) {
    lives.innerHTML = `Please insert a letter!`;
    return;
  }
 // create an array to store the positions where the input exists in the chosen word 
  let indices = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === input) {
      indices.push(i);
    }
  }
  if (word.includes(input)) {
    for (let i = 0; i < indices.length; i++) {
      // replaces the underscore with the user input
      underscore[indices[i]] = input;
    }
    chosenWord.innerHTML = underscore.join(" ");

    if (underscore.join("") == word) {
      // checks if the user guessed the word
      lives.innerHTML = `You guessed the word! 🏆`;
    }
  } else {
    wrongLetters.innerHTML += `${input} `;
    // removes lives from the lives array
    livesLeft.pop();
    lives.innerHTML = `${livesLeft.join("")}`;
  }
  if (livesLeft.length == 0) {
// if there are no lives left, game is over
    lives.innerHTML = `GAME OVER 🤯. <br> The word was ${word}. Try again!`;
  }
});

// refresh page
playAgain.addEventListener("click", () => {
  location.reload();
});
