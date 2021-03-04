import "./components/gaming-chip.js";
import "./components/blank-chip.js";
import "./components/result-block.js";

import Label from "./scripts/label.js";

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
      const chip = document.createElement("gaming-chip");
      chip.create("player", this.variants[i]);
      chip.addEventListener("clicked", (e) => this.step1(e.target));
      this.table.appendChild(chip);
      this.chips.push(chip);
    }
    this.updateScore();
  }

  step1(playerChoice) {
    this.table.style.backgroundImage = "none";

    this.playerChip = playerChoice;

    this.playerChip.dispatchEvent(new CustomEvent("checked"));

    const buffer = [];
    this.chips.forEach((chip) => {
      if (chip !== this.playerChip) {
        this.table.removeChild(chip);
        chip.remove();
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

      this.computerChip = document.createElement("gaming-chip");
      this.computerChip.create("computer", computerChoice);
      this.table.appendChild(this.computerChip);

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

    this.table.removeChild(this.playerChip);
    this.playerChip.remove();
    this.playerChip = null;

    this.table.removeChild(this.computerChip);
    this.computerChip.remove();
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
    console.log(localScore);
    if (localScore < 0) {
      this.init();
    } else {
      this.init(localScore);
    }
  }

  updateScore(result = null) {
    let newScore;
    switch (result) {
      case "win":
        newScore = {
          detail: ++this.score,
        };
        this.playerChip.winner();
        break;
      case "lose":
        newScore = {
          detail: --this.score,
        };
        this.computerChip.winner();
        break;
      default:
        newScore = {
          detail: this.score,
        };
    }
    const scoreboard = document.querySelector("game-scoreboard");
    scoreboard.dispatchEvent(new CustomEvent("update-score", newScore));
  }
}

export default Game;
