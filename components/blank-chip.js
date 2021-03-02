import template from "./blank-chip.template.js";

class BlankChip extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("blank-chip", BlankChip);
