import template from "./game-scoreboard.template.js";

class GameScoreboard extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.addEventListener("update-score", (e) => this.updateScore(e.detail));
  }

  disconnectedCallback() {
    this.removeEventListener("update-score", (e) => this.updateScore(e.detail));
  }

  updateScore(newScore) {
    this.score = this.root.querySelector(".score__number");
    this.score.innerHTML = newScore;
    localStorage.setItem('score', ""+newScore);
  }
}

window.customElements.define("game-scoreboard", GameScoreboard);
