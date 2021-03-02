import template from "./result-block.template.js";

class ResultBlock extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
  }

  create(result) {
    const title = this.root.querySelector(".result__title");
    try {
      if (result === "win") {
        title.innerHTML = "YOU WIN";
      } else if (result === "lose") {
        title.innerHTML = "YOU LOSE";
      } else if (result === "tie") {
        title.innerHTML = "TIE";
      } else {
        throw new Error("Invalid result!");
      }
    } catch (e) {
      console.error(e);
    }
  }

  connectedCallback() {
    const button = this.root.querySelector(".result__button");
    button.addEventListener("click", () => this.restartGame());
  }

  disconnectedCallback() {
    const button = this.root.querySelector(".result__button");
    button.removeEventListener("click", () => this.restartGame());
  }

  restartGame() {
    this.dispatchEvent(new CustomEvent("restart-game"));
  }
}

window.customElements.define("result-block", ResultBlock);
