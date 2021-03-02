import template from "./rules-window.template.js";

class RulesWindow extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.root
      .querySelector(".rules-window__close-button")
      .addEventListener("click", () => this.hideWindow());
    this.addEventListener("show", () => this.showWindow());
  }

  disconnectedCallback() {
    this.root
      .querySelector(".rules-window__close-button")
      .removeEventListener("click", () => this.hideWindow());
    this.removeEventListener("show", () => this.showWindow());
  }

  hideWindow() {
    this.root.querySelector(".rules-window").style.display = "none";
  }

  showWindow() {
    this.root.querySelector(".rules-window").style.display = "flex";
  }
}

window.customElements.define("rules-window", RulesWindow);
