import Game from "./game.js";


const game = new Game();
game.init();

const rulesButton = document.querySelector(".rules-button");
const rulesWindow = document.querySelector("rules-window");
rulesButton.addEventListener("click", () =>
  rulesWindow.dispatchEvent(new CustomEvent("show"))
);