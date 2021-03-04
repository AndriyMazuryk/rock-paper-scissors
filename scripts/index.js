import Game from "./game.js";

const rulesButton = document.querySelector(".rules-button");
const rulesWindow = document.querySelector("rules-window");
rulesButton.addEventListener("click", () =>
  rulesWindow.dispatchEvent(new CustomEvent("show"))
);

const game = new Game();
const score = parseInt(localStorage.getItem('score'));

if (score) {
  game.init(score);
} else {
  game.init();
}
