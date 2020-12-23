const words = [
  "amsterdam",
  "pineapple",
  "firefighters",
  "bicicle",
  "titanic",
  "football",
  "Thailand"
];
const clues = [
  "Capital of the Netherlands",
  "This fruit is made of two words conjoined",
  "They respond to fires, accidents and other incidents",
  "It only have two wheels, pedals and a handlebar",
  "Luxury British steamship that sank after striking an iceberg",
  "In the US they call it soccer, but in Europe we call it...",
  "The Land of Smiles."
];

// choose word from array;

const random = Math.floor(Math.random() * words.length + 1);
const chosenWord = words[random];
const chosenClue = clues[random];

//

const cWord = document.querySelector("#chosen-word");
const wrongLetters = document.querySelector("#wrong-guess");
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
  for (let i = 0; i < chosenWord.length; i++) {
    underscore.push("_");
  }
  return underscore.join(" ");
}
cWord.innerHTML = `${createUnderscores()}`;
// fill _ with letters
let rightWord = [];

//  get user input and play
let gLeft = ["❤️", "❤️", "❤️", "❤️", "❤️", "❤️"];
lives.innerHTML = `${gLeft.join("")}`;

button.addEventListener("click", () => {
  
  let input = userInput.value.trim().toLowerCase();
  if (
    
    (input.charCodeAt(0)<97 || input.charCodeAt(0)>122)
  ) {
    lives.innerHTML = `Please insert a letter!`;
    return;
  }
  
  let indices = [];
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === input) {
      indices.push(i);
    }
  }
  if (chosenWord.includes(input)) {
  
    for (let i = 0; i < indices.length; i++) {
      underscore[indices[i]] = input;
    }
    cWord.innerHTML = underscore.join(" ");
    if (underscore.join("") == chosenWord) {
      lives.innerHTML = `You guessed the word! 🏆`;
    }
  } else {
    wrongLetters.innerHTML += `${input} `;
    gLeft.pop();
    lives.innerHTML = `${gLeft.join("")}`;
    
  }
  if (gLeft.length == 0) {
    lives.innerHTML = `GAME OVER. <br> The word was ${chosenWord}. Try again`;
  }
});

playAgain.addEventListener("click", () => {
  location.reload();
});
