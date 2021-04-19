export class Hangman {
  constructor(word, remaining) {
    this.word = word.toLowerCase().split("");
    this.quessedLetters = [];
    this.remaining = remaining;
    this.status = "playing";
  }
  getPuzzle() {
    let puzzle = "";
    if (this.remaining < 1) {
       window.alert(`Game over`);
      return this.word.join('');
    }
    
    this.word.forEach((element) => {
      if (this.quessedLetters.includes(element) || element === " ") {
        puzzle += element;
      } else {
        puzzle += "*";
      }
    });
    console.log(`You have ${this.remaining} guesses left`);
    return puzzle;
  }

  guess(char) {
    const isUnique = !this.quessedLetters.includes(char.toLowerCase());
    const isBadGuess = !this.word.includes(char);
    if (this.status !=='playing') {
      return;
    }
    if (isUnique) {
      this.quessedLetters.push(char);
    } else {
      console.log("You have tried " + char + " before");
    }
    if (isUnique && isBadGuess) {
      this.remaining--;
    }
    this.getStatus();
  }

  getStatus() {
    const finished = this.word.every((letter) => {
      return this.quessedLetters.includes(letter)
    });
    if (this.remaining === 0 && !finished) {
      this.status = `failed, the word was ${this.word.join('')}`;
    } else if (finished) {
      this.status = `finished, you guessed the word ${this.word.join('')}`;
    } else {
      this.status = "playing";
    }
    return this.status
  }
}


