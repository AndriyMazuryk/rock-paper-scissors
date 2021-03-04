import Game from "./game.js";

const rulesBtn = document.querySelector(".rules-button");
const rulesWindow = document.querySelector(".rules-window");
const closeRulesBtn = document.querySelector(".rules-window__close-button");
const resultBlockBtn = document.querySelector(".result-block__button");

rulesBtn.addEventListener("click", () =>
  rulesWindow.classList.add("rules-window--show")
);
closeRulesBtn.addEventListener("click", () =>
  rulesWindow.classList.remove("rules-window--show")
);

const game = new Game();
const localScore = parseInt(localStorage.getItem("score"));

if (localScore) {
  game.start(localScore);
} else {
  game.start();
}

resultBlockBtn.addEventListener("click", () => game.restart());