import Game from "./game.js";

const rulesBtn = document.querySelector(".rules-button");
const rulesWindow = document.querySelector(".rules-window");
const closeRulesBtn = document.querySelector(".rules-window__close-button");

rulesBtn.addEventListener("click", () =>
  rulesWindow.classList.add("rules-window--show")
);
closeRulesBtn.addEventListener("click", () =>
  rulesWindow.classList.remove("rules-window--show")
);

const game = new Game();
const score = parseInt(localStorage.getItem("score"));

if (score) {
  game.init(score);
} else {
  game.init();
}
