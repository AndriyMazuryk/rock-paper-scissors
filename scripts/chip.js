class Chip {
  constructor(owner = null, variant = null) {
    this.variant = null;
    this.owner = null;
    this.chip = null;
    this.innerChip = null;
    this.chipIcon = null;

    this.chip = document.createElement("div");
    this.chip.classList.add("chip");

    this.innerChip = document.createElement("div");
    this.innerChip.classList.add("chip__inner");
    this.chip.appendChild(this.innerChip);

    this.chipIcon = document.createElement("img");
    this.chipIcon.classList.add("chip__icon");
    this.innerChip.appendChild(this.chipIcon);

    const validOwners = ["player", "computer"];
    const validVariants = ["rock", "paper", "scissors"];

    try {
      if (validOwners.includes(owner) && validVariants.includes(variant)) {
        this.variant = variant;

        this.chip.classList.add(variant);

        if (owner === "player") {
          this.chip.setAttribute("id", variant);
        } else {
          this.chip.setAttribute("id", "computer");
        }

        this.chipIcon.setAttribute("src", "images/icon-" + variant + ".svg");
        this.chipIcon.setAttribute("alt", variant);
      } else {
        throw new Error("Chip is not valid!");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  }
  
  get element() {
    return this.chip;
  }

  getVariant() {
    return this.variant;
  }

  pick() {
    this.chip.classList.add("picked");
  }

  winner() {
    this.chip.classList.add("winner");
  }
}

export default Chip;
