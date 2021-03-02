import template from "./scoreboard.template.js";

class Scoreboard extends HTMLElement {
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
  }
}

window.customElements.define("game-scoreboard", Scoreboard);
