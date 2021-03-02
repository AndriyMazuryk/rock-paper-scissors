import template from "./rules-button.template.js";

class RulesButton extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("rules-button", RulesButton);
