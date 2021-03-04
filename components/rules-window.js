import template from "./rules-window.template.js";

class RulesWindow extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const closeButton = this.root.querySelector(".rules-window__close-button");
    closeButton.addEventListener("click", () => this.hideWindow());
    this.addEventListener("show", () => this.showWindow());
  }

  disconnectedCallback() {
    const closeButton = this.root.querySelector(".rules-window__close-button");
    closeButton.removeEventListener("click", () => this.hideWindow());
    this.removeEventListener("show", () => this.showWindow());
  }

  hideWindow() {
    const rulesWindow = this.root.querySelector(".rules-window");
    rulesWindow.classList.remove("rules-window--show");
  }

  showWindow() {
    const rulesWindow = this.root.querySelector(".rules-window");
    rulesWindow.classList.add("rules-window--show");
  }
}

window.customElements.define("rules-window", RulesWindow);
