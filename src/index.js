//import "regenerator-runtime/runtime";
import { Hangman } from "./hangman";
import { getPuzzleAsync } from "./requests";


console.log(uuidv4());

let game1;
const hangmanEl = document.getElementById("hangman");
const guessesEl = document.getElementById("guesses");
const statusEl = document.getElementById("status");

async function startGame() {
  const puzzle = await getPuzzleAsync("1");
  game1 = new Hangman(puzzle, 5);
  render();
}

function render() {
  hangmanEl.innerHTML = "";
  guessesEl.textContent = `You have ${game1.remaining} guesses left`;
  statusEl.textContent = game1.status;
  game1
    .getPuzzle()
    .split("")
    .forEach((element) => {
      let letterEl = document.createElement("span");
      letterEl.textContent = element;
      hangmanEl.appendChild(letterEl);
    });
}

window.addEventListener("keypress", (ev) => {
  game1.guess(ev.key);
  render();
  console.log(game1.status);
});

document.getElementById("reset").addEventListener("click", (ev) => {
  startGame();
});

startGame();
