import template from "./chip.template.js";

class Chip extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(template.content.cloneNode(true));
    this.variant = null;
  }

  create(owner, variant) {
    const validOwners = ["player", "computer"];
    const validVariants = ["rock", "paper", "scissors"];
    try {
      if (validOwners.includes(owner) && validVariants.includes(variant)) {
        this.variant = variant;

        const chip = this.root.querySelector(".chip");
        chip.classList.add(variant);

        if (owner === "player") {
          chip.setAttribute("id", variant);
        } else {
          chip.setAttribute("id", "computer");
        }

        const chipIcon = this.root.querySelector(".chip__icon");
        chipIcon.setAttribute("src", "images/icon-" + variant + ".svg");
        chipIcon.setAttribute("alt", variant);
      } else {
        throw new Error("Chip is not valid!");
      }
    } catch (e) {
      console.error(e);
    }
  }

  connectedCallback() {
    this.root
      .querySelector(".chip")
      .addEventListener("click", () => this.clicked());
    this.addEventListener("hide", () => this.hide());
    this.addEventListener("checked", () => this.checked());
  }

  disconnectedCallback() {
    this.root
      .querySelector(".chip")
      .removeEventListener("click", () => this.clicked());
    this.removeEventListener("hide", () => this.hide());
    this.removeEventListener("checked", () => this.checked());
  }

  clicked() {
    this.dispatchEvent(new CustomEvent("clicked"));
  }

  hide() {
    const chip = this.root.querySelector(".chip");
    console.log(chip);
    chip.style.display = "none";
  }

  checked() {
    const chip = this.root.querySelector(".chip");
    chip.classList.add("checked");
  }

  winner() {
    const chip = this.root.querySelector(".chip");
    chip.classList.add("winner");
  }

  getVariant() {
    return this.variant;
  }
}

window.customElements.define("gaming-chip", Chip);
