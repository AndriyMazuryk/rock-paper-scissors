import "../components/blank-chip.js";
import "../components/result-block.js";

import Label from "../components/label.js";
import Chip from "../components/chip.js";

class Game {
  constructor() {
    this.score = null;
    this.table = null;

    this.chips = [];

    this.playerChip = null;
    this.computer = null;

    this.variants = ["rock", "paper", "scissors"];

    this.leftLabel = null;
    this.rightLabel = null;
    this.blankChip = null;
    this.resultBlock = null;
  }

  init(score = 12) {
    this.score = score;

    this.table = document.querySelector(".table");
    for (let i = 0; i < this.variants.length; i++) {
      const chip = new Chip("player", this.variants[i]);
      chip.element.addEventListener("click", (e) => this.step1(e.target));
      this.table.appendChild(chip.element);
      this.chips.push(chip);
    }
    this.updateScore();
  }

  step1(playerChoice) {
    this.table.style.backgroundImage = "none";

    for (let i = 0; i < this.chips.length; i++) {
      if (this.chips[i].element == playerChoice) {
        this.playerChip = this.chips[i];
      }
    }

    this.playerChip.pick();

    // clear unchecked chips
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

    this.leftLabel = new Label("you picked", "left");
    this.table.appendChild(this.leftLabel.element);

    this.rightLabel = new Label("the house picked", "right");
    this.table.appendChild(this.rightLabel.element);

    this.blankChip = document.createElement("blank-chip");
    this.table.appendChild(this.blankChip);

    this.step2();
  }

  step2() {
    setTimeout(() => {
      const computerChoice = this.variants[
        Math.floor(Math.random() * this.variants.length)
      ];

      this.computerChip = new Chip("computer", computerChoice);
      this.table.appendChild(this.computerChip.element);

      this.table.removeChild(this.blankChip);
      this.blankChip.remove();
      this.blankChip = null;

      this.step3();
    }, 1000);
  }

  step3() {
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

      this.step4(result);
    }, 500);
  }

  step4(result) {
    setTimeout(() => {
      this.resultBlock = document.createElement("result-block");
      this.resultBlock.create(result);
      this.resultBlock.addEventListener("restart-game", () => {
        this.clear();
      });
      this.table.appendChild(this.resultBlock);
    }, 500);
  }

  clear() {
    this.chips = [];

    this.table.removeChild(this.playerChip.element);
    this.playerChip.element.remove();
    this.playerChip = null;

    this.table.removeChild(this.computerChip.element);
    this.computerChip.element.remove();
    this.computerChip = null;

    this.table.removeChild(this.leftLabel.element);
    this.leftLabel.element.remove();
    this.leftLabel = null;

    this.table.removeChild(this.rightLabel.element);
    this.rightLabel.element.remove();
    this.rightLabel = null;

    this.table.removeChild(this.resultBlock);
    this.resultBlock.remove();
    this.resultBlock = null;

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
      this.init();
    } else {
      this.init(localScore);
    }
  }

  updateScore(result = null) {
    if (result === "win") {
      this.score++;
      this.playerChip.winner();
    } else if (result === "lose") {
      this.score--;
      this.computerChip.winner();
    }
    const score = document.querySelector(".score__number");
    score.innerHTML = this.score;
    localStorage.setItem("score", "" + this.score);
  }
}

export default Game;
