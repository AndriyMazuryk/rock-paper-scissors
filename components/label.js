import template from "./label.template.js";

class Label extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
  }

  create(text, position) {
    const validPositions = ["left", "right"];
    try {
      if (validPositions.includes(position)) {
        const label = this.root.querySelector(".label");
        label.innerHTML = text;
        if (position === "left") {
          label.classList.add("label--left");
        } else {
          label.classList.add("label--right");
        }
      } else {
        throw new Error("Labal is not valid!");
      }
    } catch (e) {
      console.error(e);
    }
  }
}

window.customElements.define("game-label", Label);
