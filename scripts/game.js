import Chip from "../components/chip.js";

class Game {
  constructor() {
    this.score = null;
    this.table = document.querySelector(".table");

    this.chips = [];

    this.playerChip = null;
    this.computer = null;

    this.variants = ["rock", "paper", "scissors"];

    this.leftLabel = null;
    this.rightLabel = null;
    this.blankChip = null;
    this.resultBlock = document.querySelector(".result-block");
  }

  start(score = 12) {
    this.score = score;

    // create chips
    for (let i = 0; i < this.variants.length; i++) {
      const chip = new Chip("player", this.variants[i]);
      chip.element.addEventListener("click", (e) => this.pick(e.target));
      this.table.appendChild(chip.element);
      this.chips.push(chip);
    }
    this.updateScore();
  }

  pick(playerChoice) {
    this.table.style.backgroundImage = "none";

    for (let i = 0; i < this.chips.length; i++) {
      if (this.chips[i].element == playerChoice) {
        this.playerChip = this.chips[i];
      }
    }

    this.playerChip.pick();

    // remove unpicked chips
    const buffer = [];
    this.chips.forEach((chip) => {
      if (chip.element !== this.playerChip.element) {
        this.table.removeChild(chip.element);
        chip.element.remove();
      } else {
        buffer.push(chip);
      }
    });
    this.chips = buffer;

    // draw labels and a slot for computer's chip
    this.leftLabel = document.createElement("p");
    this.leftLabel.classList.add("label", "label--left");
    this.leftLabel.innerText = "you picked";
    this.table.appendChild(this.leftLabel);

    this.rightLabel = document.createElement("p");
    this.rightLabel.classList.add("label", "label--right");
    this.rightLabel.innerText = "the house picked";
    this.table.appendChild(this.rightLabel);

    this.blankChip = document.createElement("div");
    this.blankChip.classList.add("blank-chip");
    this.table.appendChild(this.blankChip);

    this.calculate();
  }

  calculate() {
    setTimeout(() => {
      const computerChoice = this.variants[
        Math.floor(Math.random() * this.variants.length)
      ];

      this.computerChip = new Chip("computer", computerChoice);
      this.table.appendChild(this.computerChip.element);

      this.table.removeChild(this.blankChip);
      this.blankChip.remove();
      this.blankChip = null;

      setTimeout(() => {
        let result = "none";
        if (window.innerWidth > 1000) {
          this.table.classList.add("table--expand");
        }

        const playerChoice = this.playerChip.getVariant();
        const computerChoice = this.computerChip.getVariant();
        if (playerChoice === computerChoice) {
          console.log("It's a tie!");
          result = "tie";
        } else if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            console.log("Rock smashes scissors! You win!");
            result = "win";
          } else {
            console.log("Paper covers rock! You lose!");
            result = "lose";
          }
        } else if (playerChoice === "paper") {
          if (computerChoice === "rock") {
            console.log("Paper covers rock! You win!");
            result = "win";
          } else {
            console.log("Scissors cuts paper! You lose!");
            result = "lose";
          }
        } else if (playerChoice === "scissors") {
          if (computerChoice === "paper") {
            console.log("Scissors cuts paper! You win!");
            result = "win";
          } else {
            console.log("Rock smashes scissors! You lose!");
            result = "lose";
          }
        }

        this.updateScore(result);

        setTimeout(() => {
          this.resultBlock.classList.add("result-block--show");
        }, 500);
      }, 500);
    }, 1000);
  }

  restart() {
    this.chips = [];

    this.table.removeChild(this.playerChip.element);
    this.playerChip.element.remove();
    this.playerChip = null;

    this.table.removeChild(this.computerChip.element);
    this.computerChip.element.remove();
    this.computerChip = null;

    this.table.removeChild(this.leftLabel);
    this.leftLabel.remove();
    this.leftLabel = null;

    this.table.removeChild(this.rightLabel);
    this.rightLabel.remove();
    this.rightLabel = null;

    this.resultBlock.classList.remove("result-block--show");

    if (this.table.classList.contains("table--expand")) {
      this.table.classList.remove("table--expand");
    }

    this.table.style.backgroundImage = "url(../images/bg-triangle.svg)";
    this.table.classList.add("table--no-transition");
    setTimeout(() => {
      this.table.classList.remove("table--no-transition");
    }, 300);

    const localScore = parseInt(localStorage.getItem("score"));
    if (localScore < 0) {
      this.start();
    } else {
      this.start(localScore);
    }
  }

  updateScore(result = null) {
    const resultTitle = document.querySelector(".result-block__title");
    if (result === "win") {
      this.score++;
      resultTitle.innerHTML = "YOU WIN";
      this.playerChip.winner();
    } else if (result === "lose") {
      this.score--;
      resultTitle.innerHTML = "YOU LOSE";
      this.computerChip.winner();
    } else {
      resultTitle.innerHTML = "TIE";
    }
    const score = document.querySelector(".score__number");
    score.innerHTML = this.score;
    localStorage.setItem("score", "" + this.score);
  }
}

export default Game;
